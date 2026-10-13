from __future__ import annotations

import hashlib

import numpy as np
import soxr
from scipy import signal

from .codecs import CODEC_WEIGHTS, codec_roundtrip
from .noise import NoiseBank

CONDITIONS = ("noisy", "telephony", "callcenter")

# Weighted toward what dominates real call-center recordings.
CALLCENTER_NOISE_WEIGHTS = {
    "babble": 0.40, "office": 0.15, "transport": 0.10, "street": 0.10, "cafe": 0.08, "home": 0.07,
    "hum": 0.05, "misc": 0.05,
}
NOISY_NOISE_WEIGHTS = {
    "babble": 0.20, "street": 0.12, "cafe": 0.12, "transport": 0.12, "office": 0.10, "home": 0.10,
    "outdoor": 0.08, "misc": 0.08, "pink": 0.04, "brown": 0.02, "hum": 0.02,
}


def seed_for(*parts: str) -> int:
    return int.from_bytes(hashlib.sha256("|".join(parts).encode()).digest()[:8], "little")


def _choice(rng: np.random.Generator, weights: dict[str, float], available: list[str]) -> str:
    keys = [k for k in weights if k in available]
    p = np.array([weights[k] for k in keys], dtype=np.float64)
    return keys[int(rng.choice(len(keys), p=p / p.sum()))]


def _rms(x: np.ndarray) -> float:
    return float(np.sqrt(np.mean(x**2)) + 1e-9)


def add_noise(speech: np.ndarray, noise: np.ndarray, snr_db: float) -> np.ndarray:
    scale = _rms(speech) / (_rms(noise) * 10 ** (snr_db / 20))
    return speech + scale * noise


def synthetic_rir(rng: np.random.Generator, sr: int, rt60: float) -> np.ndarray:
    n = int(sr * rt60 * 1.2)
    t = np.arange(n) / sr
    rir = rng.standard_normal(n) * np.exp(-6.9 * t / rt60)
    rir[: int(0.002 * sr)] = 0
    rir[0] = 1.0
    return (rir / np.sqrt(np.sum(rir**2))).astype(np.float32)


def packet_loss(x: np.ndarray, rng: np.random.Generator, sr: int, rate: float, frame_ms: int = 20) -> np.ndarray:
    """Drop 20 ms frames; Gilbert-style bursts. Lost frames are concealed by repeating the
    previous frame at reduced gain (crude PLC, like many cheap VoIP stacks)."""
    if rate <= 0:
        return x
    x = x.copy()
    f = int(sr * frame_ms / 1000)
    lost_prev = False
    for i in range(1, len(x) // f):
        p = 0.5 if lost_prev else rate
        lost_prev = rng.random() < p
        if lost_prev:
            x[i * f : (i + 1) * f] = 0.5 * x[(i - 1) * f : i * f]
    return x


def _band_pass(x: np.ndarray, sr: int, lo: float, hi: float) -> np.ndarray:
    sos = signal.butter(6, [lo, hi], btype="bandpass", fs=sr, output="sos")
    return signal.sosfilt(sos, x).astype(np.float32)


def _normalize_peak(x: np.ndarray, peak: float = 0.95) -> np.ndarray:
    m = np.max(np.abs(x)) + 1e-9
    return x * (peak / m) if m > peak else x


def degrade(
    audio: np.ndarray,
    sr: int,
    condition: str,
    seed: int,
    noise_bank: NoiseBank,
) -> tuple[np.ndarray, int, dict]:
    """Returns (audio, sample_rate, params). Input must be mono float32."""
    rng = np.random.default_rng(seed)
    x = audio.astype(np.float32)
    if sr != 16000:
        x = soxr.resample(x, sr, 16000)
        sr = 16000
    params: dict = {"condition": condition}
    available = noise_bank.categories

    if condition == "noisy":
        cat = _choice(rng, NOISY_NOISE_WEIGHTS, available)
        snr = float(rng.uniform(0, 15))
        x = add_noise(x, noise_bank.sample(cat, len(x), rng), snr)
        params.update(noise=cat, snr_db=round(snr, 2))
        return _normalize_peak(x), sr, params

    if condition not in ("telephony", "callcenter"):
        raise ValueError(f"unknown condition {condition!r}")

    if condition == "callcenter":
        if rng.random() < 0.4:
            rt60 = float(rng.uniform(0.2, 0.7))
            x = signal.fftconvolve(x, synthetic_rir(rng, sr, rt60))[: len(x)].astype(np.float32)
            params["rt60"] = round(rt60, 3)
        cat = _choice(rng, CALLCENTER_NOISE_WEIGHTS, available)
        snr = float(rng.uniform(5, 20))
        x = add_noise(x, noise_bank.sample(cat, len(x), rng), snr)
        params.update(noise=cat, snr_db=round(snr, 2))

    # Handset / line: narrowband channel
    x = soxr.resample(x, sr, 8000)
    sr = 8000
    lo, hi = float(rng.uniform(250, 400)), float(rng.uniform(3200, 3500))
    x = _band_pass(x, sr, lo, hi)
    gain_db = float(rng.uniform(-12, 6))
    # -26 dBFS nominal line level, then a random gain (quiet handsets / hot mics)
    x = x * (0.05 / _rms(x)) * 10 ** (gain_db / 20)
    clipped = bool(rng.random() < 0.1)
    if clipped:
        x = np.clip(x * 3.0, -0.6, 0.6)
    x = _normalize_peak(x, 0.99)
    codec = _choice(rng, CODEC_WEIGHTS, list(CODEC_WEIGHTS))
    x = codec_roundtrip(x, codec, sr)
    loss = float(rng.choice([0.0, 0.0, 0.01, 0.02, 0.05])) if condition == "callcenter" else float(
        rng.choice([0.0, 0.0, 0.0, 0.01, 0.02])
    )
    x = packet_loss(x, rng, sr, loss)
    params.update(band=[round(lo), round(hi)], gain_db=round(gain_db, 2), clipped=clipped, codec=codec,
                  packet_loss=loss)
    return x.astype(np.float32), sr, params
