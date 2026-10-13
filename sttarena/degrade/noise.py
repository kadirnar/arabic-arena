"""Background-noise sources for degradations.

A NoiseBank holds noise clips grouped by category. Clips can come from a directory of audio
files (``<root>/<category>/*.wav|flac``, e.g. built from MUSAN / DEMAND / ESC-50 by
``scripts/build_noise_bank.py``) and/or from synthetic generators. "babble" is built from
other utterances of the same test set, which is the most realistic call-center background
(other agents talking in the same room).
"""

from __future__ import annotations

from pathlib import Path

import numpy as np
import soundfile as sf
import soxr

SR = 16000


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


class NoiseBank:
    def __init__(self, root: str | Path | None = None, sr: int = SR):
        self.sr = sr
        self.clips: dict[str, list[np.ndarray]] = {}
        self.speech_pool: list[np.ndarray] = []
        if root is not None and Path(root).exists():
            for cat_dir in sorted(p for p in Path(root).iterdir() if p.is_dir()):
                files = sorted([*cat_dir.glob("*.wav"), *cat_dir.glob("*.flac")])
                if files:
                    self.clips[cat_dir.name] = [_load(f, sr) for f in files]

    def add_speech_pool(self, utterances: list[np.ndarray]) -> None:
        """Utterances used to synthesize babble (should not include the target utterance)."""
        self.speech_pool = [u for u in utterances if len(u) > self.sr]

    @property
    def categories(self) -> list[str]:
        cats = list(self.clips)
        if self.speech_pool:
            cats.append("babble")
        return cats + ["pink", "brown", "hum"]

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
