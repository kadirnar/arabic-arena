"""Room and device impulse responses with a controlled direct-to-reverberant ratio (DRR).

v1's `synthetic_rir` is one direct-path sample followed by a unit-variance white-noise tail. Over 20 seeds
it measures C50 14.2 dB at RT60 0.2 s and 1.9 dB at 0.7 s, DRR -15 / -21 dB with the direct window below
(-23 / -29 dB counting the direct sample alone): a distant microphone in a hall, applied to 40 % of
call-center items, where a handset at the ear has C50 > 20-25 dB. Its tail is white, with no early
reflections.

v2 builds a direct path, 6-14 early reflections (arrival density growing with t^2, as in an image-source
room, low-passed for wall absorption) and a late tail whose octave bands decay with their own RT60 (125 Hz
1.3x, 4 kHz 0.75x, 8 kHz 0.6x the mid-band value). The reverberant energy is then set to an explicit target
DRR, and for near-field kinds (handset) the energy after 50 ms to a target C50 as well. Real impulse
responses in ``<noise root>/rir/<kind>/*.wav|flac`` (e.g. ACE, BUT ReverbDB, ETSI TS 103 557 mouth-to-device
IRs, all CC BY 4.0) take precedence over the synthetic ones. Every IR used is measured the same way (direct
window = peak - 1 ms .. peak + 2.5 ms; C50 relative to the peak; RT60 by Schroeder integration of the
reverberant part, T20 fit) and the numbers are recorded.
"""

from __future__ import annotations

import numpy as np
from scipy import signal

OCTAVES = (125, 250, 500, 1000, 2000, 4000, 8000)
RT60_RATIO = (1.3, 1.15, 1.0, 1.0, 0.9, 0.75, 0.6)  # RT60(f) / RT60(mid): walls and air absorb highs faster
DIRECT_PRE_MS, DIRECT_POST_MS = 1.0, 2.5
EARLY_MS, MIX_MS = 50.0, 30.0


def _energy(x: np.ndarray) -> float:
    return float(np.dot(x, x))


def rir_stats(h: np.ndarray, sr: int, peak: int | None = None) -> dict:
    """DRR, C50 (dB) and RT60 (s, Schroeder T20 of the part after the direct window; None if too short).
    The direct path is at `peak`, by default the largest sample."""
    h = np.asarray(h, dtype=np.float64)
    peak = int(np.argmax(np.abs(h))) if peak is None else peak
    d0 = max(0, peak - int(round(DIRECT_PRE_MS * 1e-3 * sr)))
    d1 = peak + int(round(DIRECT_POST_MS * 1e-3 * sr))
    e50 = peak + int(round(EARLY_MS * 1e-3 * sr))
    direct, reverb = _energy(h[d0:d1]), _energy(h[d1:])
    early, late = _energy(h[d0:e50]), _energy(h[e50:])
    edc = np.cumsum(h[d1:][::-1] ** 2)[::-1]
    rt60 = None
    if len(edc) and edc[0] > 0:
        edc_db = 10 * np.log10(edc / edc[0] + 1e-30)
        i5, i25 = np.searchsorted(-edc_db, 5.0), np.searchsorted(-edc_db, 25.0)
        if i25 < len(edc_db) and i25 - i5 >= 4:
            slope = np.polyfit(np.arange(i5, i25) / sr, edc_db[i5:i25], 1)[0]
            rt60 = round(float(-60.0 / slope), 3) if slope < 0 else None
    return {"drr_db": round(10 * np.log10(direct / max(reverb, 1e-30)), 2),
            "c50_db": round(10 * np.log10(early / max(late, 1e-30)), 2), "rt60_s": rt60}


def _octave_bands(sr: int) -> list[tuple[float, np.ndarray]]:
    """(band centre, sos) partitioning 0 .. sr/2: low-pass for the lowest band, high-pass for the highest."""
    centres = [f for f in OCTAVES if f * np.sqrt(2) < sr / 2] or [OCTAVES[0]]
    out = []
    for i, fc in enumerate(centres):
        lo, hi = fc / np.sqrt(2), fc * np.sqrt(2)
        if i == 0:
            sos = signal.butter(4, hi, btype="lowpass", fs=sr, output="sos")
        elif i == len(centres) - 1:
            sos = signal.butter(4, lo, btype="highpass", fs=sr, output="sos")
        else:
            sos = signal.butter(4, [lo, hi], btype="bandpass", fs=sr, output="sos")
        out.append((fc, sos))
    return out


def synthetic_rir(rng: np.random.Generator, sr: int, rt60: float, drr_db: float,
                  c50_db: float | None = None) -> np.ndarray:
    """Unit-energy IR, direct path at sample 0: early reflections + frequency-dependent exponential tail,
    reverberant energy set to `drr_db` and (if given and reachable) the late energy to `c50_db`."""
    n = int(sr * max(1.2 * rt60, 0.12))
    t = np.arange(n) / sr
    d1 = int(round(DIRECT_POST_MS * 1e-3 * sr))
    e50 = int(round(EARLY_MS * 1e-3 * sr))
    tail = np.zeros(n)
    noise = rng.standard_normal(n)
    for fc, sos in _octave_bands(sr):
        ratio = np.interp(np.log2(fc), np.log2(OCTAVES), RT60_RATIO) * rng.uniform(0.9, 1.1)
        tail += signal.sosfilt(sos, noise) * np.exp(-6.9 * t / (rt60 * ratio))
    diffuse_early = _energy(tail[d1:e50])  # what a fully diffuse field would carry over the early window
    tail *= np.clip((t - d1 / sr) / (MIX_MS * 1e-3 - d1 / sr), 0, 1) ** 2  # reflection density builds up
    early = np.zeros(n)
    k = int(rng.integers(6, 15))
    delays = d1 + ((e50 - d1) * rng.uniform(0, 1, k) ** (1 / 3)).astype(int)  # density ~ t^2
    np.add.at(early, np.minimum(delays, n - 1),
              rng.choice([-1.0, 1.0], k) * rng.uniform(0.5, 1.0, k) * np.exp(-6.9 * delays / sr / rt60))
    absorb = signal.butter(1, rng.uniform(3000, 7000) if sr > 14000 else 3000, fs=sr, output="sos")
    early = signal.sosfilt(absorb, early)
    early *= np.sqrt(diffuse_early / max(_energy(early), 1e-30))
    rev = 10 ** (-drr_db / 10)  # reverberant energy budget for a unit direct path
    ee, ta, tb = _energy(early), _energy(tail[:e50]), _energy(tail[e50:])
    gl2 = ge2 = rev / (ee + ta + tb)
    if c50_db is not None and tb > 0:
        gl2 = (1 + rev) / ((1 + 10 ** (c50_db / 10)) * tb)
        ge2 = (rev - gl2 * (ta + tb)) / max(ee, 1e-30)
        if ge2 < 0:  # the tail alone overshoots: keep the DRR exact, C50 lands above target
            ge2, gl2 = 0.0, rev / (ta + tb)
    h = np.sqrt(ge2) * early + np.sqrt(gl2) * tail
    # exact pass on the realized segments: the early/tail cross terms leave up to ~0.5 dB of DRR error
    a, b = _energy(h[d1:e50]), _energy(h[e50:])
    b_target = (1 + rev) / (1 + 10 ** (c50_db / 10)) if c50_db is not None else -1.0
    if not 0 <= b_target <= rev:  # no C50 target, or one the DRR cannot reach: keep the realized split
        b_target = b * rev / (a + b)
    h[d1:e50] *= np.sqrt((rev - b_target) / max(a, 1e-30))
    h[e50:] *= np.sqrt(b_target / max(b, 1e-30))
    h[0] += 1.0
    return (h / np.sqrt(_energy(h))).astype(np.float32)


def prepare_measured(h: np.ndarray, sr: int, max_s: float = 2.0) -> tuple[np.ndarray, int]:
    """A measured IR trimmed to start 1 ms before its peak (max `max_s`), unit energy; returns (h, lead)
    where `lead` is the peak index, so convolving keeps the direct path time-aligned with the source."""
    h = np.asarray(h, dtype=np.float64)
    peak = int(np.argmax(np.abs(h)))
    start = max(0, peak - int(round(DIRECT_PRE_MS * 1e-3 * sr)))
    h = h[start: start + int(max_s * sr)]
    return (h / np.sqrt(_energy(h) + 1e-30)).astype(np.float32), peak - start


def apply_rir(x: np.ndarray, h: np.ndarray, lead: int = 0) -> np.ndarray:
    """Convolve and keep len(x) samples with the direct path at the original time."""
    return signal.fftconvolve(x, h)[lead: lead + len(x)].astype(np.float32)
