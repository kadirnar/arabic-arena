"""Speech level per ITU-T P.56 method B, ported from the ITU-T G.191 STL speech voltmeter (sv-p56.c).

v1 set the telephone line level and every SNR from the RMS over the whole clip, so a level depended on how
much silence an utterance holds: normalizing the RMS of a clip that is 40 % active puts its speech
10*log10(1/0.4) = 4 dB hotter than the same sentence trimmed, and the same offset lands in its SNR. P.56
measures the *active* level: an envelope of |x| (two cascaded one-pole smoothers, time constant 0.03 s) is
compared with 15 thresholds 6 dB apart (2^-15 .. 2^-1 of full scale); a sample counts as active for a
threshold while the envelope stayed above it within the last 0.2 s (hangover), and the active level is where
the level over the active samples sits 15.9 dB (margin) above the threshold, interpolated between the two
thresholds that bracket it with sv56's own bisection (0.5 dB tolerance).

Levels are dBov: 0 dBov is the RMS of a full-scale square wave (float samples in [-1, 1]), so a full-scale
sine is -3.01 dBov. The G.711/AMR overload point is +3.14 dBm0 (3GPP TS 26.131), hence
dBov = dBm0 - 6.15. The nominal telephone speech level is -26 dBov (ITU-T P.56 / P.501 practice).
"""

from __future__ import annotations

import numpy as np
from scipy import signal

T_ENV, HANGOVER_S, MARGIN_DB = 0.03, 0.2, 15.9
N_THRESHOLDS = 15
NOMINAL_DBOV = -26.0
DBM0_TO_DBOV = -6.15
SILENCE_DBOV = -100.0  # what sv56 returns when nothing is active


def rms_dbov(x: np.ndarray) -> float:
    x = np.asarray(x, dtype=np.float64)
    return float(10 * np.log10(np.mean(x**2) + 1e-20)) if len(x) else SILENCE_DBOV


def _bin_interp(upcount: float, lwcount: float, upthr: float, lwthr: float, margin: float,
                tol: float) -> float:
    """sv-p56.c bin_interp (v2.3): bisect between two thresholds for activity level - threshold = margin."""
    if abs((upcount - upthr) - margin) < tol:
        return upcount
    if abs((lwcount - lwthr) - margin) < tol:
        return lwcount
    midcount, midthr = (upcount + lwcount) / 2, (upthr + lwthr) / 2
    iterno = 1
    while abs(diff := (midcount - midthr) - margin) > tol:
        iterno += 1
        if iterno > 20:  # sv56 relaxes the tolerance by 10 % per extra iteration
            tol *= 1.1
        if diff > tol:
            midcount, midthr = (upcount + midcount) / 2, (upthr + midthr) / 2
            lwcount, lwthr = midcount, midthr
        elif diff < -tol:
            midcount, midthr = (midcount + lwcount) / 2, (midthr + lwthr) / 2
            upcount, upthr = midcount, midthr
    return midcount


def active_level(x: np.ndarray, sr: int) -> tuple[float, float]:
    """(P.56 active speech level in dBov, activity factor in [0, 1]); (-100, 0) when nothing is active."""
    x = np.asarray(x, dtype=np.float64)
    n = len(x)
    if n == 0:
        return SILENCE_DBOV, 0.0
    g = np.exp(-1.0 / (sr * T_ENV))
    hang = int(np.floor(HANGOVER_S * sr + 0.5))
    env = signal.lfilter([1 - g], [1, -g], signal.lfilter([1 - g], [1, -g], np.abs(x)))
    thresholds = 0.5 ** np.arange(N_THRESHOLDS, 0, -1)  # 2^-15 .. 2^-1
    k = np.arange(n)
    active = np.empty(N_THRESHOLDS)
    for j, c in enumerate(thresholds):
        # sv56's hangover counters: sample k is active if the envelope reached c at any of samples k-hang .. k
        above = np.concatenate(([0], np.cumsum(env >= c)))
        active[j] = np.count_nonzero(above[k + 1] - above[np.maximum(k - hang, 0)])
    sq = float(np.dot(x, x))
    long_term = 10 * np.log10(sq / n + 1e-20)
    if active[0] == 0 or 10 * np.log10(sq / active[0] + 1e-20) - 20 * np.log10(thresholds[0]) < MARGIN_DB:
        return SILENCE_DBOV, 0.0
    for j in range(1, N_THRESHOLDS):
        if active[j] == 0:
            continue
        a_db = 10 * np.log10(sq / active[j] + 1e-20)
        c_db = 20 * np.log10(thresholds[j] + 1e-20)
        if a_db - c_db <= MARGIN_DB:
            am_db = 10 * np.log10(sq / active[j - 1] + 1e-20)
            cm_db = 20 * np.log10(thresholds[j - 1] + 1e-20)
            level = _bin_interp(a_db, am_db, c_db, cm_db, MARGIN_DB, 0.5)
            return float(level), float(min(1.0, 10 ** ((long_term - level) / 10)))
    return SILENCE_DBOV, 0.0


def to_level(x: np.ndarray, sr: int, target_dbov: float) -> tuple[np.ndarray, float]:
    """x scaled to a P.56 active level of `target_dbov` (one pass, as sv56demo); returns (y, gain in dB)."""
    level, _ = active_level(x, sr)
    if level <= SILENCE_DBOV:
        return x, 0.0
    gain_db = target_dbov - level
    return (x * 10 ** (gain_db / 20)).astype(np.float32), float(gain_db)


def noise_gain(speech_level_dbov: float, noise: np.ndarray, snr_db: float) -> float:
    """Linear gain for `noise` so that speech active level (P.56) minus noise RMS level equals `snr_db`."""
    return float(10 ** ((speech_level_dbov - snr_db - rms_dbov(noise)) / 20))
