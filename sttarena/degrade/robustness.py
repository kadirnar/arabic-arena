"""Robustness summaries of an SNR sweep, from per-group WERs (pure numpy).

The v1 `noisy` and `callcenter` tracks drew one random SNR per utterance (uniform 0-15 / 5-20 dB) and showed
almost no SNR dependence (call-center whisper-large-v3: 69.8 / 72.4 / 74.5 % WER at >= 15 / 10-15 / 5-10 dB),
while the Whisper paper's sweeps show rankings crossing between 10 and 0 dB: a single random-SNR mixture hides
both. A sweep scores every utterance at every SNR of a grid with the same noise segment; the runner labels its
rows "noise=<type>|snr_db=<snr>" (`group_by: [noise, snr_db]`) and these helpers summarize the curves:

  wer_avg       mean WER over the grid points in 0..20 dB (Aurora-2's headline; the lite grid has no 15 dB)
  snr_at_wer    SNR where the curve crosses a WER, by linear interpolation of logit(WER) (WER clipped to
                [0.001, 0.999]) against SNR between the two grid points around the crossing nearest the
                clean end; censored "below" when the curve never reaches it (the threshold lies below the
                grid) and "above" when even the highest SNR is worse (it lies above the grid)
  snr50         snr_at_wer(0.5)
  snr_x2        snr_at_wer(2 x clean WER): a threshold independent of base accuracy
  werd          WER(snr) - WER(clean) (Speech Robust Bench's WERD), e.g. at 10 and 0 dB
  kendall_tau   tau-b between two model rankings; `tau_vs_clean` gives it per noise and SNR
"""

from __future__ import annotations

from typing import Mapping

import numpy as np

AURORA_RANGE = (0.0, 20.0)


def curves_from_groups(groups: Mapping[str, Mapping | float],
                       key: str = "wer") -> dict[str, dict[float, float]]:
    """{"noise=babble_v2|snr_db=-5": {...wer...}} (a scoring summary's `groups`) -> {noise: {snr: wer}}."""
    out: dict[str, dict[float, float]] = {}
    for label, v in groups.items():
        fields = dict(part.split("=", 1) for part in label.split("|"))
        wer = v[key] if isinstance(v, Mapping) else v
        if wer is not None:
            out.setdefault(fields["noise"], {})[float(fields["snr_db"])] = float(wer)
    return out


def _sorted(curve: Mapping[float, float]) -> tuple[np.ndarray, np.ndarray]:
    snr = np.array(sorted(curve), dtype=np.float64)
    return snr, np.array([curve[s] for s in snr], dtype=np.float64)


def _logit(p: np.ndarray | float) -> np.ndarray:
    p = np.clip(p, 0.001, 0.999)
    return np.log(p / (1 - p))


def wer_avg(curve: Mapping[float, float], lo: float = AURORA_RANGE[0],
            hi: float = AURORA_RANGE[1]) -> float | None:
    vals = [w for s, w in curve.items() if lo <= s <= hi]
    return float(np.mean(vals)) if vals else None


def snr_at_wer(curve: Mapping[float, float], target: float) -> dict:
    """{"snr_db": crossing or the grid bound, "censored": None | "below" | "above"}."""
    snr, wer = _sorted(curve)
    if not len(snr):
        return {"snr_db": None, "censored": None}
    worse = wer >= target
    if not worse.any():
        return {"snr_db": float(snr[0]), "censored": "below"}
    if worse[-1]:
        return {"snr_db": float(snr[-1]), "censored": "above"}
    i = int(np.flatnonzero(worse)[-1])  # last grid point at or above the target, next one below it
    y0, y1, t = _logit(wer[i]), _logit(wer[i + 1]), _logit(target)
    frac = 0.0 if y0 == y1 else float((y0 - t) / (y0 - y1))
    return {"snr_db": float(snr[i] + frac * (snr[i + 1] - snr[i])), "censored": None}


def snr50(curve: Mapping[float, float]) -> dict:
    return snr_at_wer(curve, 0.5)


def snr_x2(curve: Mapping[float, float], wer_clean: float) -> dict:
    return snr_at_wer(curve, 2.0 * wer_clean)


def werd(curve: Mapping[float, float], wer_clean: float, snr_db: float) -> float | None:
    return None if snr_db not in curve else float(curve[snr_db] - wer_clean)


def summarize(curve: Mapping[float, float], wer_clean: float) -> dict:
    """The leaderboard numbers of one model on one noise type."""
    return {"wer_avg_0_20": wer_avg(curve), "snr50": snr50(curve), "snr_x2": snr_x2(curve, wer_clean),
            "werd_10": werd(curve, wer_clean, 10.0), "werd_0": werd(curve, wer_clean, 0.0)}


def kendall_tau(a: Mapping[str, float], b: Mapping[str, float]) -> float | None:
    """Kendall tau-b between two scorings of the same models (keys present in both)."""
    keys = sorted(set(a) & set(b))
    if len(keys) < 2:
        return None
    x, y = np.array([a[k] for k in keys]), np.array([b[k] for k in keys])
    iu = np.triu_indices(len(keys), 1)
    dx, dy = np.sign(x[:, None] - x[None, :])[iu], np.sign(y[:, None] - y[None, :])[iu]
    den = np.sqrt(np.count_nonzero(dx) * np.count_nonzero(dy))
    return float(np.sum(dx * dy) / den) if den else None


def tau_vs_clean(curves: Mapping[str, Mapping[str, Mapping[float, float]]],
                 clean: Mapping[str, float]) -> dict[str, dict[float, float | None]]:
    """curves: model -> noise -> {snr: wer}; clean: model -> clean WER. Returns noise -> {snr: tau}."""
    noises = sorted({n for c in curves.values() for n in c})
    out: dict[str, dict[float, float | None]] = {}
    for noise in noises:
        snrs = sorted({s for c in curves.values() for s in c.get(noise, {})})
        at = {s: {m: c[noise][s] for m, c in curves.items() if s in c.get(noise, {})} for s in snrs}
        out[noise] = {s: kendall_tau(at[s], clean) for s in snrs}
    return out
