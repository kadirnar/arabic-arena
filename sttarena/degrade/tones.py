"""Telephone network tones, DTMF, fax tones and comfort noise, synthesized (no downloads needed).

Cadences are from the annex of ITU-T Operational Bulletin No. 955 (2010), "Various tones used in national
networks", for Arab administrations: frequency in Hz, cadence in seconds as on, off, on, off ... (empty =
continuous). OB 955 notation: "f1+f2" two tones summed, "f1xf2" f1 amplitude-modulated by f2 (depth not
given; 0.9 assumed), "f1/f2/f3" tones in sequence, one per "on" (special information tone), "f1//f2"
alternatives, one drawn per clip. Where a country lists variants (Qatar, Morocco) one is drawn. Countries
without a special information tone get the 950/1400/1800 Hz, 3 x 0.33 s + 1.0 s pattern most administrations
list (e.g. Kuwait, Oman, Sudan). DTMF follows ETSI ES 201 235-2: row tones 697/770/852/941 Hz at -6 dBm0 and
column tones 1209/1336/1477/1633 Hz at -4 dBm0 (+-1 dB), tone and pause >= 65 ms; dBm0 -> dBov is -6.15 dB.
Fax: ITU-T T.30 calling tone (CNG) 1100 Hz 0.5 s on / 3 s off; answer tone (CED) 2100 Hz for 2.6-4 s.
"""

from __future__ import annotations

from typing import Sequence

import numpy as np

from .level import DBM0_TO_DBOV
from .noise import colored_noise

STD_SIT = ("950/1400/1800", (0.33, 0.0, 0.33, 0.0, 0.33, 1.0))
# country -> tone -> (frequency spec, cadence) or a list of variants
TONE_PLANS: dict[str, dict] = {
    "SA": {"ringback": ("425", (1.2, 4.6)), "busy": ("425", (0.5, 0.5)), "congestion": ("425", (0.25, 0.25)),
           "call_waiting": ("425", (0.15, 0.2, 0.15, 10.0))},
    "EG": {"ringback": ("425x50", (2.0, 1.0)), "busy": ("425x50", (1.0, 4.0)),
           "congestion": ("450", (0.5, 0.5)), "sit": ("950/1400/1800", (0.33, 0.33, 0.33, 0.33, 0.33, 0.33))},
    "AE": {"ringback": ("400+450//425", (0.4, 0.2, 0.4, 2.0)), "busy": ("400//425", (0.375, 0.375)),
           "congestion": ("400//425", (0.4, 0.35, 0.225, 0.525))},
    "JO": {"ringback": ("420x40", (1.0, 4.0)), "busy": ("420x40", (0.5, 0.5)),
           "congestion": ("420x40", (0.25, 0.25)), "call_waiting": ("420x40", (0.15, 0.15))},
    "IQ": {"ringback": ("400", ()), "busy": ("400", (1.0, 1.0))},
    "KW": {"ringback": ("425", (1.0, 4.0)), "busy": ("425", (0.5, 0.5)), "congestion": ("425", (0.25, 0.25)),
           "sit": STD_SIT, "call_waiting": ("425", (1.0, 4.0))},
    "QA": {"ringback": [("400+450", (0.38, 0.25, 0.38, 2.0)), ("400+450", (0.4, 0.2, 0.4, 2.0))],
           "busy": [("400+450", (0.8, 0.8)), ("400", (0.375, 0.375)), ("400", (0.5, 0.5))],
           "congestion": ("400", (0.40, 0.35, 0.22, 0.52)), "call_waiting": ("400", (0.3, 10.0))},
    "BH": {"ringback": ("425", (0.4, 0.2, 0.4, 2.0)), "busy": ("425", (0.375, 0.375)),
           "congestion": ("425", (0.40, 0.35, 0.225, 0.525)), "call_waiting": ("425", (0.2, 0.6, 0.2, 5.0))},
    "OM": {"ringback": ("425", (0.4, 0.2, 0.4, 2.0)), "busy": ("425", (0.5, 0.5)),
           "congestion": ("425", (0.5, 0.5)), "sit": STD_SIT, "call_waiting": ("425", (0.3, 1.0))},
    "MA": {"ringback": [("425", (1.7, 3.3)), ("425", (1.0, 4.0)), ("425", (2.0, 2.0))],
           "busy": [("425", (0.5, 0.5)), ("425", (0.4, 0.4))],
           "congestion": [("425", (0.5, 0.5)), ("425", (0.4, 0.4))]},
    "DZ": {"ringback": ("425", (1.5, 3.5)), "busy": ("425", (0.5, 0.5))},
    "TN": {"ringback": ("425", (1.2, 4.65)), "busy": ("425", (0.25, 0.25)),
           "congestion": ("425", (0.167, 0.167)), "call_waiting": ("425", (0.2, 0.6)),
           "sit": ("900/1400/1800", (0.33, 0.03, 0.33, 0.03, 0.33, 1.0))},
    "LB": {"ringback": ("425", (1.0, 4.0)), "busy": ("425", (0.5, 0.5)), "congestion": ("425", (0.24, 0.24)),
           "call_waiting": ("425", (0.2, 0.6))},
    "SY": {"ringback": ("400//450", (1.0, 0.5)), "busy": ("450", (0.5, 0.5)),
           "congestion": ("450", (0.25, 0.25)), "sit": ("950/1400/1800", (0.33, 0.03, 0.33, 0.03, 0.33, 1.0)),
           "call_waiting": ("450", (0.1, 0.2, 0.1, 9.5))},
    "SD": {"ringback": ("425", (1.0, 4.0)), "busy": ("425", (1.0, 1.0)), "sit": STD_SIT,
           "congestion": ("425", (0.375, 0.375)), "call_waiting": ("425", (0.15, 0.15, 0.15, 4.0))},
    "YE": {"ringback": ("425", (1.0, 4.0)), "busy": ("425", (0.5, 0.5)), "congestion": ("425", (0.25, 0.25))},
}
# share of calls per network: Saudi 25 %, Egypt 20 %, UAE 10 %, the 13 others split the rest (assumption)
COUNTRY_WEIGHTS = {"SA": 0.25, "EG": 0.20, "AE": 0.10,
                   **{c: 0.45 / 13 for c in TONE_PLANS if c not in ("SA", "EG", "AE")}}
FAX = {"fax_cng": ("1100", (0.5, 3.0))}
DTMF_ROWS, DTMF_COLS = (697, 770, 852, 941), (1209, 1336, 1477, 1633)
DTMF_KEYS = ("123A", "456B", "789C", "*0#D")
DTMF_ROW_DBOV, DTMF_COL_DBOV = -6.0 + DBM0_TO_DBOV, -4.0 + DBM0_TO_DBOV
AM_DEPTH = 0.9
RAMP_S = 0.004


def tone_plan(rng: np.random.Generator, tone: str) -> tuple[str, str, tuple[float, ...]]:
    """(country, frequency spec, cadence) for a tone type, the country drawn by COUNTRY_WEIGHTS among those
    listing it (special information tone: every country, the standard pattern where none is listed)."""
    if tone in FAX:
        return "ITU", *FAX[tone]
    have = {c: w for c, w in COUNTRY_WEIGHTS.items() if tone in TONE_PLANS[c] or tone == "sit"}
    keys = list(have)
    p = np.array([have[k] for k in keys])
    country = keys[int(rng.choice(len(keys), p=p / p.sum()))]
    plan = TONE_PLANS[country].get(tone, STD_SIT)
    if isinstance(plan, list):
        plan = plan[int(rng.integers(len(plan)))]
    return country, plan[0], tuple(plan[1])


def _component(spec: str, t: np.ndarray, rng: np.random.Generator) -> np.ndarray:
    if "x" in spec:
        fc, fm = (float(v) for v in spec.split("x"))
        return (1 + AM_DEPTH * np.sin(2 * np.pi * fm * t + rng.uniform(0, 2 * np.pi))) * \
            np.sin(2 * np.pi * fc * t + rng.uniform(0, 2 * np.pi))
    return sum(np.sin(2 * np.pi * float(f) * t + rng.uniform(0, 2 * np.pi)) for f in spec.split("+"))


def _ramped(gate: np.ndarray, sr: int) -> np.ndarray:
    k = max(1, int(RAMP_S * sr))
    kernel = np.hanning(2 * k + 1)
    return np.convolve(gate.astype(np.float64), kernel / kernel.sum(), mode="same")


def tone(spec: str, cadence: Sequence[float], sec: float, sr: int, rng: np.random.Generator,
         level_dbov: float) -> np.ndarray:
    """A cadenced tone starting at a random point of its cycle; RMS over the "on" time is `level_dbov`."""
    alts = spec.split("//")
    seq = alts[int(rng.integers(len(alts)))].split("/")
    n = int(round(sec * sr))
    t = np.arange(n) / sr
    parts = [_component(s, t, rng) for s in seq]
    if not cadence:
        on, which = np.ones(n, dtype=bool), np.zeros(n, dtype=int)
    else:
        cyc = np.round(np.asarray(cadence) * sr).astype(int)
        seg_on = np.concatenate([np.full(c, i % 2 == 0) for i, c in enumerate(cyc)])
        seg_idx = np.concatenate([np.full(c, (i // 2) % len(seq)) for i, c in enumerate(cyc)])
        start = int(rng.integers(len(seg_on)))
        reps = -(-(start + n) // len(seg_on))
        on, which = np.tile(seg_on, reps)[start: start + n], np.tile(seg_idx, reps)[start: start + n]
    x = np.choose(which, parts) if len(parts) > 1 else parts[0]
    x = x * _ramped(on, sr)
    rms = np.sqrt(np.mean(x[on] ** 2)) if on.any() else 1.0
    return (x / (rms + 1e-12) * 10 ** (level_dbov / 20)).astype(np.float32)


def dtmf(digits: str, sr: int, tone_s: float, gap_s: float, row_dbov: float = DTMF_ROW_DBOV,
         col_dbov: float = DTMF_COL_DBOV) -> np.ndarray:
    """DTMF digits (0-9, *, #, A-D), each `tone_s` long and followed by `gap_s` of silence."""
    t = np.arange(int(round(tone_s * sr))) / sr
    gap = np.zeros(int(round(gap_s * sr)))
    k = min(int(RAMP_S * sr), len(t) // 2)
    gate = np.ones(len(t))
    gate[:k] = gate[len(t) - k:][::-1] = 0.5 - 0.5 * np.cos(np.pi * np.arange(k) / k)
    out = []
    for d in digits:
        r = next(i for i, row in enumerate(DTMF_KEYS) if d in row)
        c = DTMF_KEYS[r].index(d)
        x = np.sqrt(2) * (10 ** (row_dbov / 20) * np.sin(2 * np.pi * DTMF_ROWS[r] * t)
                          + 10 ** (col_dbov / 20) * np.sin(2 * np.pi * DTMF_COLS[c] * t))
        out += [x * gate, gap]
    return np.concatenate(out).astype(np.float32) if out else np.zeros(0, dtype=np.float32)


def fax_ced(sec: float, sr: int, rng: np.random.Generator, level_dbov: float) -> np.ndarray:
    """Answering-fax tone: 2100 Hz for 2.6-4.0 s from the start of the clip, then silence."""
    n, on = int(round(sec * sr)), int(round(rng.uniform(2.6, 4.0) * sr))
    x = np.zeros(n)
    m = min(n, on)
    x[:m] = np.sqrt(2) * 10 ** (level_dbov / 20) * np.sin(2 * np.pi * 2100 * np.arange(m) / sr)
    return (x * _ramped(np.arange(n) < m, sr)).astype(np.float32)


def comfort_noise(n: int, rng: np.random.Generator, level_dbov: float) -> np.ndarray:
    """Pink noise at an RMS level of `level_dbov` (decoder comfort noise / line noise floor)."""
    return (colored_noise(n, rng, 1.0) * 10 ** (level_dbov / 20)).astype(np.float32)
