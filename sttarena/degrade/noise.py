"""Background-noise sources for degradations.

A NoiseBank holds noise clips grouped by category. Clips can come from a directory of audio
files (``<root>/<category>/*.wav|flac``, e.g. built from MUSAN / DEMAND / ESC-50 by
``scripts/build_noise_bank.py``) and/or from synthetic generators. "babble" is built from
other utterances of the same test set, which is the most realistic call-center background
(other agents talking in the same room).

v1 babble sums 3-6 near-field utterances of the *other test sets*: intelligible Arabic from test speakers,
so transcribing it is arguably correct and WER mixes two failure modes (Whisper-large-v3 inserted 22.5 % of
reference words on CV18 call-center, Gemma-4 38.8 %; Voxtral-realtime-arabic returned nothing on 145 of 296
Casablanca call-center clips). v2 `babble_v2` sums K ~ U{8..16} distinct talkers from a pool disjoint from
every test set (sttarena/degrade/pool.py), each at P.56 -26 dBov, through its own far-field room IR
(DRR -10..-3 dB), with a gain jitter U(-6, 0) dB and a random start: a crowd rather than a sentence. An
optional `screen(audio, sr) -> bool` hook (e.g. two ASR models agreeing on >= 3 words) re-draws babble that
is still intelligible. `speech_shaped` is stationary noise with the long-term spectrum of the talker pool.

Reserved sub-directories, not noise categories: ``rir/<kind>/`` measured impulse responses (handset,
speakerphone, car, farfield; sttarena/degrade/rir.py) and ``babble_pool/`` the cached talker pool.
"""

from __future__ import annotations

import io
from pathlib import Path
from typing import Callable

import numpy as np
import soundfile as sf
import soxr
from scipy import signal

from .level import to_level
from .profiles import PROFILE_V2
from .rir import apply_rir, prepare_measured, rir_stats, synthetic_rir

SR = 16000
RESERVED = ("rir", "babble_pool")
Screen = Callable[[np.ndarray, int], bool]  # babble -> keep it? (e.g. no two ASR models agree on >= 3 words)


def _load(path: Path, sr: int = SR) -> np.ndarray:
    x, file_sr = sf.read(str(path), dtype="float32", always_2d=True)
    x = x.mean(axis=1)
    if file_sr != sr:
        x = soxr.resample(x, file_sr, sr)
    return x


def colored_noise(n: int, rng: np.random.Generator, exponent: float) -> np.ndarray:
    """1/f^exponent noise (0 = white, 1 = pink, 2 = brown)."""
    spec = rng.standard_normal(n // 2 + 1) + 1j * rng.standard_normal(n // 2 + 1)
    f = np.fft.rfftfreq(n)
    f[0] = f[1] if n > 1 else 1.0
    spec /= f ** (exponent / 2)
    x = np.fft.irfft(spec, n).astype(np.float32)
    return x / (np.std(x) + 1e-9)


def hum(n: int, rng: np.random.Generator, sr: int = SR) -> np.ndarray:
    f0 = rng.choice([50.0, 60.0])
    t = np.arange(n) / sr
    x = sum((0.6**k) * np.sin(2 * np.pi * f0 * (k + 1) * t + rng.uniform(0, 6.28)) for k in range(6))
    x = x + 0.3 * colored_noise(n, rng, 1.0)
    return (x / (np.std(x) + 1e-9)).astype(np.float32)


def ltass_parametric(f: np.ndarray) -> np.ndarray:
    """Stand-in long-term speech power spectrum: 2nd-order high-pass at 100 Hz, flat to 500 Hz, -9 dB/oct."""
    return (f**2 / (f**2 + 100.0**2)) / (1 + (f / 500.0) ** 3)


class NoiseBank:
    def __init__(self, root: str | Path | None = None, sr: int = SR):
        self.sr = sr
        self.clips: dict[str, list[np.ndarray]] = {}
        self.clip_names: dict[str, list[str]] = {}
        self.speech_pool: list[np.ndarray] = []
        self.talkers: list[tuple[str, str, np.ndarray]] = []  # babble_v2 pool: (utterance id, speaker, audio)
        self.rirs: dict[str, list[tuple[str, np.ndarray, int, dict]]] = {}  # kind -> (name, h, lead, stats)
        self._ltass: tuple[np.ndarray, np.ndarray] | None = None
        if root is not None and Path(root).exists():
            for cat_dir in sorted(p for p in Path(root).iterdir() if p.is_dir() and p.name not in RESERVED):
                files = sorted([*cat_dir.glob("*.wav"), *cat_dir.glob("*.flac")])
                if files:
                    self.clips[cat_dir.name] = [_load(f, sr) for f in files]
                    self.clip_names[cat_dir.name] = [f.stem for f in files]
            rir_root = Path(root) / "rir"
            for kind_dir in sorted(p for p in rir_root.iterdir() if p.is_dir()) if rir_root.is_dir() else []:
                for f in sorted([*kind_dir.glob("*.wav"), *kind_dir.glob("*.flac")]):
                    x, file_sr = sf.read(str(f), dtype="float32", always_2d=True)
                    h = soxr.resample(x[:, 0], file_sr, sr) if file_sr != sr else x[:, 0]  # first channel
                    h, lead = prepare_measured(h, sr)
                    self.rirs.setdefault(kind_dir.name, []).append(
                        (f"{kind_dir.name}/{f.stem}", h, lead, rir_stats(h, sr, peak=lead)))

    def add_speech_pool(self, utterances: list[np.ndarray]) -> None:
        """Utterances used to synthesize babble (should not include the target utterance)."""
        self.speech_pool = [u for u in utterances if len(u) > self.sr]

    def add_talkers(self, utterances: list[np.ndarray], speakers: list[str], ids: list[str]) -> None:
        """Talker pool for babble_v2 and speech-shaped noise: speech from no test set."""
        self.talkers = [(i, s, u) for i, s, u in zip(ids, speakers, utterances) if len(u) > self.sr]
        self._ltass = None

    def load_talkers(self, path: str | Path) -> None:
        """Talker pool from the parquet written by sttarena.degrade.pool.build_babble_pool."""
        import pyarrow.parquet as pq

        rows = pq.read_table(path, columns=["id", "speaker", "audio"]).to_pylist()
        audio = [sf.read(io.BytesIO(r["audio"]["bytes"]), dtype="float32")[0] for r in rows]
        self.add_talkers(audio, [r["speaker"] for r in rows], [r["id"] for r in rows])

    @property
    def categories(self) -> list[str]:
        cats = list(self.clips)
        if self.speech_pool:
            cats.append("babble")
        return cats + ["pink", "brown", "hum"]

    @property
    def categories_v2(self) -> list[str]:
        """Noise types the v2 chains can draw: clip categories, babble_v2 given talkers, synthetic ones."""
        return [*self.clips, *(["babble_v2"] if self.talkers else []), "ssn", "pink", "brown", "hum"]

    def _babble(self, n: int, rng: np.random.Generator) -> np.ndarray:
        k = int(rng.integers(3, 7))
        out = np.zeros(n, dtype=np.float32)
        for _ in range(k):
            u = self.speech_pool[int(rng.integers(len(self.speech_pool)))]
            u = np.tile(u, int(np.ceil(n / len(u))) + 1)
            start = int(rng.integers(0, len(u) - n))
            seg = u[start : start + n]
            out += seg / (np.std(seg) + 1e-9)
        return out / (np.std(out) + 1e-9)

    def sample(self, category: str, n: int, rng: np.random.Generator) -> np.ndarray:
        if category == "babble":
            return self._babble(n, rng)
        if category == "pink":
            return colored_noise(n, rng, 1.0)
        if category == "brown":
            return colored_noise(n, rng, 2.0)
        if category == "hum":
            return hum(n, rng, self.sr)
        clip = self.clips[category][int(rng.integers(len(self.clips[category])))]
        if len(clip) < n:
            clip = np.tile(clip, int(np.ceil(n / len(clip))) + 1)
        start = int(rng.integers(0, len(clip) - n + 1))
        seg = clip[start : start + n]
        return seg / (np.std(seg) + 1e-9)

    # ---- v2 -------------------------------------------------------------------------------------
    def rir(self, kind: str, rng: np.random.Generator) -> tuple[np.ndarray, int, dict]:
        """(h, lead, stats): a measured IR of this kind when the bank has some, else a synthetic one."""
        if self.rirs.get(kind):
            name, h, lead, stats = self.rirs[kind][int(rng.integers(len(self.rirs[kind])))]
            return h, lead, {"rir": name, **stats}
        cfg = PROFILE_V2["rir"][kind]
        rt60, drr = float(rng.uniform(*cfg["rt60"])), float(rng.uniform(*cfg["drr"]))
        c50 = float(rng.uniform(*cfg["c50"])) if cfg["c50"] else None
        h = synthetic_rir(rng, self.sr, rt60, drr, c50)
        stats = rir_stats(h, self.sr, peak=0)
        return h, 0, {"rir": f"synthetic/{kind}", "rt60_nominal_s": round(rt60, 3), **stats}

    def babble_v2(self, n: int, rng: np.random.Generator, screen: Screen | None = None,
                  tries: int = 5) -> tuple[np.ndarray, dict]:
        """Unit-RMS babble of K distinct far-field talkers (fewer if the pool has fewer speakers)."""
        if not self.talkers:
            raise RuntimeError("babble_v2 needs a talker pool (NoiseBank.load_talkers / add_talkers)")
        cfg = PROFILE_V2["babble"]
        by_speaker: dict[str, list[int]] = {}
        for i, (_, spk, _) in enumerate(self.talkers):
            by_speaker.setdefault(spk, []).append(i)
        speakers = sorted(by_speaker)
        for attempt in range(tries):
            k = min(int(rng.integers(cfg["talkers"][0], cfg["talkers"][1] + 1)), len(speakers))
            out, talkers = np.zeros(n, dtype=np.float32), []
            for s in rng.choice(len(speakers), size=k, replace=False):
                own = by_speaker[speakers[s]]
                utts = [own[int(j)] for j in rng.permutation(len(own))]
                stream = np.concatenate([self.talkers[j][2] for j in utts])
                stream = np.tile(stream, -(-n // len(stream)) + 1)
                start = int(rng.integers(0, len(stream) - n + 1))
                seg, _ = to_level(stream[start: start + n], self.sr, cfg["level_dbov"])
                h, lead, rp = self.rir(cfg["rir"], rng)
                gain = float(rng.uniform(*cfg["gain_db"]))
                out += apply_rir(seg, h, lead) * np.float32(10 ** (gain / 20))
                talkers.append({"speaker": speakers[s], "utts": [self.talkers[j][0] for j in utts],
                                "start_s": round(start / self.sr, 2), "gain_db": round(gain, 2),
                                "drr_db": rp["drr_db"], "c50_db": rp["c50_db"]})
            if screen is None or screen(out, self.sr):
                break
        return out / (np.std(out) + 1e-9), {"babble_talkers": k, "babble": talkers, "screen_redraws": attempt}

    def speech_shaped(self, n: int, rng: np.random.Generator) -> tuple[np.ndarray, dict]:
        """Unit-RMS stationary noise with the talker pool's long-term spectrum (else `ltass_parametric`)."""
        f = np.fft.rfftfreq(n, 1 / self.sr)
        if self.talkers:
            if self._ltass is None:
                psds = [signal.welch(u, fs=self.sr, nperseg=1024) for _, _, u in self.talkers]
                w = np.array([len(u) for _, _, u in self.talkers], dtype=np.float64)
                self._ltass = psds[0][0], np.average([p for _, p in psds], axis=0, weights=w)
            power, source = np.interp(f, *self._ltass), "talker_pool"
        else:
            power, source = ltass_parametric(f), "parametric"
        x = np.fft.irfft((rng.standard_normal(len(f)) + 1j * rng.standard_normal(len(f))) * np.sqrt(power), n)
        return (x / (np.std(x) + 1e-9)).astype(np.float32), {"ltass": source}

    def noise_v2(self, category: str, n: int, rng: np.random.Generator) -> tuple[np.ndarray, dict]:
        """Unit-RMS noise of a v2 category, with what was drawn."""
        if category == "babble_v2":
            return self.babble_v2(n, rng)
        if category == "ssn":
            return self.speech_shaped(n, rng)
        if category not in self.clips:
            return self.sample(category, n, rng), {}
        i = int(rng.integers(len(self.clips[category])))
        clip = self.clips[category][i]
        clip = np.tile(clip, -(-n // len(clip)) + 1) if len(clip) < n else clip
        start = int(rng.integers(0, len(clip) - n + 1))
        seg = clip[start: start + n]
        name = (self.clip_names.get(category) or [str(k) for k in range(len(self.clips[category]))])[i]
        drawn = {"noise_clip": f"{category}/{name}", "noise_start_s": round(start / self.sr, 2)}
        return seg / (np.std(seg) + 1e-9), drawn
