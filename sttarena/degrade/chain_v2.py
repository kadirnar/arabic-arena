"""Degradation chain v2: profile-based telephone channel, call-center caller side, SNR sweep, padded probes.

Why (robustness study, 2026-10-18). On the English suite, which has real phone sets, models' simulated
telephony WER rank-correlated with their real-telephony WER at Spearman 0.62 (clean speech: 0.78), and after
controlling for clean WER the partial correlation was 0.03 (call-center 0.21), while the simulated telephony
and call-center tracks carry 40 % of the Arabic Arena score. Measured v1 defects: packet loss realized
1.9 / 3.8 / 9.1 % for nominal 1 / 2 / 5 % and hit decoded PCM; the synthetic room was a far-field hall
(C50 1.9-14.2 dB) on 40 % of call-center items; 40 % of codec draws were near-transparent G.711 (NB-PESQ
4.42) with mu-law weighted above A-law although MENA networks use A-law, with no wideband path and no tandem;
levels and SNRs were RMS over the whole clip; call-center WER barely moved with SNR (whisper-large-v3 69.8 /
72.4 / 74.5 % at >= 15 / 10-15 / 5-10 dB) but did with noise type (babble 47.5 vs transport 33.1 % for
cohere-arabic), babble being 40 % of draws and intelligible.

v1 (chain.py) is unchanged; a suite picks v2 per condition with `version: 2` and `chain:`

telephony   level: P.56 -26 dBov + talker offset (TS 26.131 tolerances) -> device: send response inside the
            TS 26.131 mask, uplink high-pass, Bluetooth link, rare clipping -> access codec with Gilbert frame
            erasures on the bitstream and the codec's own concealment -> G.711 A-law PSTN trunk for calls that
            leave the mobile / app network (tandem) -> recording format (sttarena/degrade/profiles.py)
callcenter  the caller's side first: a device-dependent room IR (handset DRR 5-15 dB with C50 20-30 dB,
            speakerphone, car) and environment noise (babble_v2 0.15, call-center 0.15, office 0.10, ...) at a
            device-dependent SNR measured P.56 speech level vs noise RMS at the mic, then `telephony`
sweep       wideband speech at P.56 -26 dBov plus one noise segment per (utterance, noise type), drawn from a
            seed of utterance and noise type only and scaled to every SNR of the grid (paired design, as
            Aurora-2); rows "<clean id>#<noise>@<snr>"
padded      the clean utterance, untouched, with 2 / 8 / 20 s of silence, comfort noise, network tones or
            office noise before, after or on both sides (at most `max_total_s`); row "<clean id>#pad", paired
            with the clean row for padding-induced insertions

Every draw comes from a named sub-stream of the item seed (seed_for(seed, stage)), so a stage keeps its draws
when another one changes, and everything drawn is recorded in meta.degradation with chain_version 2.
"""

from __future__ import annotations

import numpy as np
import soxr
from scipy import signal

from . import native, tones
from .chain import seed_for
from .codecs import ffmpeg_v2
from .level import NOMINAL_DBOV, SILENCE_DBOV, active_level, noise_gain, to_level
from .noise import NoiseBank
from .profiles import PROFILE_V2
from .rir import apply_rir

CHAINS_V2 = ("telephony", "callcenter", "sweep", "padded")
SR = 16000
WB_CODECS = ("amr_wb", "opus", "g722")
Variant = tuple[str | None, np.ndarray, int, dict]  # (row id suffix, audio, sample rate, meta.degradation)


def _rng(seed: int, *stage: str) -> np.random.Generator:
    return np.random.default_rng(seed_for(str(seed), *stage))


def _pick(rng: np.random.Generator, weights: dict):
    keys = list(weights)
    p = np.array([weights[k] for k in keys], dtype=np.float64)
    return keys[int(rng.choice(len(keys), p=p / p.sum()))]


def _weights(table: dict) -> dict:
    return {k: v["weight"] for k, v in table.items()}


def _trunc_normal(rng: np.random.Generator, mean: float, sd: float, lo: float, hi: float) -> float:
    for _ in range(1000):
        v = float(rng.normal(mean, sd))
        if lo <= v <= hi:
            return v
    return float(np.clip(mean, lo, hi))


def _resample(x: np.ndarray, sr_from: int, sr_to: int) -> np.ndarray:
    return x if sr_from == sr_to else soxr.resample(x, sr_from, sr_to).astype(np.float32)


def _fade(x: np.ndarray, sr: int, at_end: bool, sec: float = 0.02) -> np.ndarray:
    k = min(len(x), int(sec * sr))
    ramp = 0.5 - 0.5 * np.cos(np.pi * np.arange(k) / max(k, 1))
    x = x.copy()
    if at_end:
        x[len(x) - k:] *= ramp[::-1]
    else:
        x[:k] *= ramp
    return x


def send_eq(rng: np.random.Generator, band: str, sr: int) -> tuple[np.ndarray, dict]:
    """Linear-phase FIR whose response is a random smooth curve inside the TS 26.131 sending mask of `band`
    (`outside_p` of devices up to `outside_db` beyond it); a point with no lower limit may sit 20 dB under
    its upper one. The curve is drawn at the mask breakpoints plus log-spaced points and interpolated on
    log frequency, so it stays inside between them too."""
    mask = PROFILE_V2["send_mask"]
    outside = bool(rng.random() < mask["outside_p"])
    widen = mask["outside_db"] if outside else 0.0
    fm = np.log([p[0] for p in mask[band]])
    up = np.array([p[1] for p in mask[band]], dtype=np.float64) + widen
    lo = np.array([p[1] - 20 if p[2] is None else p[2] for p in mask[band]], dtype=np.float64) - widen
    lf = np.unique(np.concatenate([fm, np.linspace(fm[0], fm[-1], 8)]))
    u = np.convolve(np.pad(rng.uniform(0.15, 0.85, len(lf)), 1, mode="edge"), [0.25, 0.5, 0.25], mode="valid")
    g_db = np.interp(lf, fm, lo) + u * (np.interp(lf, fm, up) - np.interp(lf, fm, lo))
    freq = np.concatenate([[0.0], np.exp(lf)]) / (sr / 2)
    keep = freq <= 1.0
    gain = 10 ** (np.concatenate([[g_db[0] - 12], g_db])[keep] / 20)
    freq = freq[keep]
    if freq[-1] < 1.0:
        freq, gain = np.append(freq, 1.0), np.append(gain, gain[-1])
    taps = signal.firwin2(129 if sr <= 8000 else 257, freq, gain)
    return taps, {"send_band": band, "send_outside_mask": outside,
                  "send_eq_db": [round(float(v), 1) for v in np.interp(fm, lf, g_db)]}


def _device(x: np.ndarray, noise: np.ndarray | None, sr_in: int, seed: int, dev_name: str, net_band: str,
            params: dict) -> tuple[np.ndarray, np.ndarray | None, int]:
    dev = PROFILE_V2["device"][dev_name]
    link = _pick(_rng(seed, "bt_link"), dev["link"]) if "link" in dev else None
    band = "wb" if link == "msbc" or (link is None and net_band == "wb") else "nb"
    sr = 16000 if band == "wb" else 8000
    rng = _rng(seed, "device")
    taps, eq = send_eq(rng, band, sr)
    hpf = float(rng.uniform(*PROFILE_V2["uplink"]["hpf_hz"]))
    sos = signal.butter(2, hpf, btype="highpass", fs=sr, output="sos")
    d = (len(taps) - 1) // 2

    def process(z: np.ndarray) -> np.ndarray:
        z = _resample(z, sr_in, sr)
        return signal.sosfilt(sos, signal.fftconvolve(z, taps)[d: d + len(z)]).astype(np.float32)

    params.update(device=dev_name, bt_link=link, hpf_hz=round(hpf, 1), **eq)
    return process(x), None if noise is None else process(noise), sr


def _level(speech: np.ndarray, noise: np.ndarray | None, sr: int, seed: int, dev_name: str,
           params: dict) -> np.ndarray:
    """Speech component to -26 dBov + talker offset (P.56), the noise with it; rare clipping."""
    cfg, rng = PROFILE_V2["level"], _rng(seed, "level")
    if rng.random() < cfg["extreme_p"]:
        offset = float(cfg["extreme_db"] * rng.choice([-1.0, 1.0]))
    else:
        offset = float(rng.normal(0.0, PROFILE_V2["device"][dev_name]["offset_sd"]))
    target = cfg["target_dbov"] + offset
    level, _ = active_level(speech, sr)
    y = (speech if noise is None else speech + noise) * np.float32(10 ** ((target - level) / 20)
                                                                    if level > SILENCE_DBOV else 1.0)
    up, crng = PROFILE_V2["uplink"], _rng(seed, "clip")
    q = float(crng.uniform(*up["clip_quantile"])) if crng.random() < up["clip_p"] else None
    if q is not None:
        thr = float(np.quantile(np.abs(y), q))
        y = np.clip(y, -thr, thr)
    params.update(talker_offset_db=round(offset, 2), level_dbov=round(target, 2),
                  clip_quantile=None if q is None else round(q, 4))
    return y


def _trunk(y8: np.ndarray) -> np.ndarray:
    """PSTN interconnect: G.712 band (300-3400 Hz) and G.711 A-law at 8 kHz."""
    lo, hi = PROFILE_V2["trunk"]["band_hz"]
    sos = signal.butter(4, [lo, hi], btype="bandpass", fs=8000, output="sos")
    return ffmpeg_v2(signal.sosfilt(sos, y8).astype(np.float32), 8000, PROFILE_V2["trunk"]["codec"])


def _network(y: np.ndarray, sr: int, seed: int, net_name: str, params: dict) -> tuple[np.ndarray, int]:
    net, rng = PROFILE_V2["network"][net_name], _rng(seed, "network")
    codec = _pick(rng, net["codec"])
    kbps = _pick(rng, net["kbps"]) if "kbps" in net else None
    dtx = bool(rng.random() < net.get("dtx", 0.0))
    loss, burst = 0.0, 1.0
    if net.get("loss"):
        prof = PROFILE_V2["loss"][net["loss"]]
        _, lo, hi = prof["mix"][int(rng.choice(len(prof["mix"]), p=[m[0] for m in prof["mix"]]))]
        loss, burst = float(rng.uniform(lo, hi)) if hi > lo else lo, float(rng.uniform(*prof["burst"]))
    fec = bool(net.get("fec", False))
    if codec in native.RATE:
        csr = native.RATE[codec]
        y, info = native.roundtrip(_resample(y, sr, csr), codec, kbps=kbps, rng=_rng(seed, "loss"), loss=loss,
                                   burst=burst, dtx=dtx, fec=fec)
        plc = ("fec+" if fec else "") + native.PLC[codec]
    else:
        csr = 16000 if codec in WB_CODECS else 8000
        y = ffmpeg_v2(_resample(y, sr, csr), csr, codec, kbps)
        frame = csr * native.FRAME_MS // 1000
        lost = native.gilbert_mask(-(-len(y) // frame), _rng(seed, "loss"), loss, burst)
        y = native.conceal_repeat(y, lost, frame)
        info, plc = {"loss_realized": round(float(lost.mean()), 4), "fec_recovered": 0}, "repeat"
    if net["trunk"]:
        y, csr = _trunk(_resample(y, csr, 8000)), 8000
    params.update(network=net_name, codec=codec, kbps=kbps, dtx=dtx, fec=fec, loss=round(loss, 4),
                  burst=round(burst, 2), plc=plc if loss > 0 else None, **info,
                  trunk=PROFILE_V2["trunk"]["codec"] if net["trunk"] else None)
    return y, csr


def _storage(y: np.ndarray, sr: int, seed: int, params: dict) -> np.ndarray:
    band, st, rng = "wb" if sr == 16000 else "nb", PROFILE_V2["storage"], _rng(seed, "storage")
    fmt = _pick(rng, st[band])
    opts = st["kbps"][band].get(fmt)
    kbps = float(opts[int(rng.integers(len(opts)))]) if opts else None
    params.update(storage=fmt, storage_kbps=kbps, band=band)
    return y if fmt == "pcm16" else ffmpeg_v2(y, sr, fmt, kbps)


def telephone(x: np.ndarray, sr: int, seed: int, noise: np.ndarray | None = None, device: str | None = None,
              network: str | None = None, set_level: bool = True) -> tuple[np.ndarray, int, dict]:
    """Device -> access network -> (trunk) -> recording. `noise` (same length as x, already scaled) is the
    environment at the mic; `device` / `network` fix a profile value instead of drawing it (ablations);
    set_level=False keeps the input level (non-speech clips)."""
    params: dict = {}
    dev_name = device or _pick(_rng(seed, "device_type"), _weights(PROFILE_V2["device"]))
    net_name = network or _pick(_rng(seed, "network_type"), _weights(PROFILE_V2["network"]))
    net_band = "wb" if any(c in WB_CODECS for c in PROFILE_V2["network"][net_name]["codec"]) else "nb"
    speech, noise, dsr = _device(x, noise, sr, seed, dev_name, net_band, params)
    if set_level:
        y = _level(speech, noise, dsr, seed, dev_name, params)
    else:
        y = speech if noise is None else speech + noise
    if params["bt_link"] == "msbc":
        y = ffmpeg_v2(y, 16000, "msbc")
    y, out_sr = _network(y, dsr, seed, net_name, params)
    y = _storage(y, out_sr, seed, params)
    return np.clip(y, -1, 1).astype(np.float32), out_sr, params


def network_side(x: np.ndarray, sr: int, seed: int) -> tuple[np.ndarray, int, dict]:
    """Audio the network itself generates (tones): G.711 trunk at 8 kHz, then a narrowband recording."""
    params: dict = {"trunk": PROFILE_V2["trunk"]["codec"]}
    y = _storage(_trunk(_resample(x, sr, 8000)), 8000, seed, params)
    return np.clip(y, -1, 1).astype(np.float32), 8000, params


def _callcenter(x: np.ndarray, seed: int, bank: NoiseBank) -> Variant:
    dev_name = _pick(_rng(seed, "device_type"), _weights(PROFILE_V2["device"]))
    dev = PROFILE_V2["device"][dev_name]
    h, lead, rir = bank.rir(dev["rir"], _rng(seed, "rir"))
    speech = apply_rir(x, h, lead)
    rng = _rng(seed, "noise")
    cat = _pick(rng, {k: w for k, w in PROFILE_V2["callcenter_noise"].items() if k in bank.categories_v2})
    noise, drawn = bank.noise_v2(cat, len(speech), rng)
    snr = _trunc_normal(_rng(seed, "snr"), *dev["snr"])
    noise = noise * np.float32(noise_gain(active_level(speech, SR)[0], noise, snr))
    y, out_sr, params = telephone(speech, SR, seed, noise=noise, device=dev_name)
    return None, y, out_sr, {"chain_version": 2, "chain": "callcenter", "rir": rir.pop("rir"),
                             **{f"rir_{k}": v for k, v in rir.items()}, "noise": cat, "snr_db": round(snr, 2),
                             **drawn, **params}


def _sweep(x: np.ndarray, seed: int, bank: NoiseBank, cfg: dict) -> list[Variant]:
    x, gain_db = to_level(x, SR, NOMINAL_DBOV)
    level, _ = active_level(x, SR)
    out = []
    for kind in cfg.get("noises", ["ssn", "babble_v2", "ambient"]):
        rng = _rng(seed, "sweep", kind)  # utterance and noise type only: the same segment at every SNR
        if kind == "ambient":
            have = [c for c in cfg.get("ambient", []) if c in bank.clips]
            if not have:
                raise RuntimeError(f"sweep noise 'ambient' needs one of {cfg.get('ambient')} in the bank")
            cat = have[int(rng.integers(len(have)))]
            seg, drawn = bank.noise_v2(cat, len(x), rng)
            drawn = {"ambient": cat, **drawn}
        else:
            seg, drawn = bank.noise_v2(kind, len(x), rng)
        for snr in cfg.get("snrs", [20, 10, 5, 0, -5]):
            y = x + seg * np.float32(noise_gain(level, seg, snr))
            scale = min(1.0, 0.99 / max(float(np.max(np.abs(y))), 1e-9))  # no clipping; SNR unchanged
            out.append((f"{kind}@{snr:g}", (y * scale).astype(np.float32), SR,
                        {"chain_version": 2, "chain": "sweep", "noise": kind, "snr_db": snr,
                         "speech_level_dbov": round(level, 2), "speech_gain_db": round(gain_db, 2),
                         "peak_scale_db": round(20 * np.log10(scale), 2), **drawn}))
    return out


def _filler(kind: str, sec: float, side: str, rng: np.random.Generator, bank: NoiseBank,
            speech_level: float) -> tuple[np.ndarray, dict]:
    n = int(round(sec * SR))
    if kind == "silence":
        return np.zeros(n, dtype=np.float32), {}
    if kind == "comfort_noise":
        level = float(rng.uniform(-65, -45))
        return tones.comfort_noise(n, rng, level), {f"{side}_level_dbov": round(level, 1)}
    if kind == "tones":  # ringback before the answer, busy / congestion after the hang-up
        tone = "ringback" if side == "lead" else ("busy", "congestion")[int(rng.integers(2))]
        country, spec, cadence = tones.tone_plan(rng, tone)
        level = float(rng.uniform(-20, -10))
        drawn = {f"{side}_tone": tone, f"{side}_country": country, f"{side}_level_dbov": round(level, 1)}
        return tones.tone(spec, cadence, sec, SR, rng, level), drawn
    level = speech_level - float(rng.uniform(15, 30))
    seg, drawn = bank.noise_v2(kind, n, rng)
    return seg * np.float32(10 ** (level / 20)), {f"{side}_level_dbov": round(level, 1),
                                                  **{f"{side}_{k}": v for k, v in drawn.items()}}


def _padded(x: np.ndarray, seed: int, bank: NoiseBank, cfg: dict) -> list[Variant]:
    rng = _rng(seed, "pad")
    positions = cfg.get("positions", ["lead", "trail", "both"])
    position = positions[int(rng.integers(len(positions)))]
    fillers = cfg.get("fillers", {"silence": 1, "comfort_noise": 1, "tones": 1, "office": 1})
    synthetic = ("silence", "comfort_noise", "tones")
    fillers = {k: w for k, w in fillers.items() if k in synthetic or k in bank.clips}
    filler = _pick(rng, fillers)
    sides = 2 if position == "both" else 1
    budget = float(cfg.get("max_total_s", 30.0)) - len(x) / SR
    fits = [p for p in cfg.get("pad_s", [2, 8, 20]) if sides * p <= budget]
    pad = float(fits[int(rng.integers(len(fits)))]) if fits else max(0.0, budget / sides)
    lead = pad if position in ("lead", "both") else 0.0
    trail = pad if position in ("trail", "both") else 0.0
    level, frng = active_level(x, SR)[0], _rng(seed, "filler")
    params = {"chain_version": 2, "chain": "padded", "pad_position": position, "pad_lead_s": lead,
              "pad_trail_s": trail, "filler": filler}
    parts = [x]
    if lead:
        seg, drawn = _filler(filler, lead, "lead", frng, bank, level)
        parts.insert(0, _fade(seg, SR, at_end=True))
        params.update(drawn)
    if trail:
        seg, drawn = _filler(filler, trail, "trail", frng, bank, level)
        parts.append(_fade(seg, SR, at_end=False))
        params.update(drawn)
    return [("pad", np.clip(np.concatenate(parts), -1, 1).astype(np.float32), SR, params)]


def degrade_v2(audio: np.ndarray, sr: int, chain: str, seed: int, bank: NoiseBank,
               cfg: dict | None = None) -> list[Variant]:
    """One clean utterance (mono float) -> the rows of a v2 condition: [(id suffix, audio, sr, params)],
    the suffix None when the row keeps the clean id.
    `cfg` is the suite's condition block (sweep: noises, snrs, ambient; padded: positions, pad_s, fillers,
    max_total_s)."""
    x = _resample(np.asarray(audio, dtype=np.float32), sr, SR)
    if chain == "telephony":
        y, out_sr, params = telephone(x, SR, seed)
        return [(None, y, out_sr, {"chain_version": 2, "chain": "telephony", **params})]
    if chain == "callcenter":
        return [_callcenter(x, seed, bank)]
    if chain == "sweep":
        return _sweep(x, seed, bank, cfg or {})
    if chain == "padded":
        return _padded(x, seed, bank, cfg or {})
    raise ValueError(f"unknown v2 chain {chain!r} (one of {CHAINS_V2})")
