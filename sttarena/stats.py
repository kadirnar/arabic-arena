"""Statistics for Arena v2: joint cluster bootstrap, paired tests, rank sets, power and aggregation.

Why not the v1 bootstrap (bootstrap.py, kept for the v1 board)? It resamples utterances iid, and every
(set, condition) independently. Both are wrong for this benchmark (research 03, §1.1 C-E):

* Utterances are clustered. mgb2 has 1,000 rows from 17 recordings, mgb5_mor 14 videos, algerian_cs 8.
  Errors within a recording are correlated, so iid intervals are 2-3x too narrow on those sets. Here the
  resampling unit is the cluster (recording, video, speaker, sentence), resampled within design strata.
* Degraded conditions reuse clean utterances: noisy / telephony / callcenter are the first 300 rows of a clean
  set. One draw of cluster multiplicities per *source set* is shared by every condition built from it and by
  every model, so comparisons stay paired and the cross-condition correlation reaches track and Arena scores.
* Percentile ranges of bootstrap ranks are not valid near ties (Hall & Miller 2009). Rank sets come from
  simultaneous intervals on all pairwise differences (Mogstad, Romano, Shaikh & Wilhelm 2024).

Contents
  SetData, records_to_setdata            per-utterance capped errors of several models on one set/condition
  joint_cluster_bootstrap -> Bootstrap   paired, cross-condition replicates of every set score
  set_weights, weighted_mean, aggregate  track and Arena scores (geometric headline, arithmetic column)
  percentile_ci, cluster_t_ci            intervals
  rank_sets, naive_rank_ranges           rank confidence sets, and v1-style ranges for comparison
  sign_flip_test, arena_sign_flip_test   the primary paired tests (exact under exchangeability)
  matched_pairs_test, wilcoxon_clusters  iid-assumption tests, for comparability with NIST sc_stats
  holm, benjamini_hochberg               multiplicity
  mde, mde_planning, effective_clusters  power: minimum detectable differences
  effective_weights, leave_one_set_out   what the aggregation rewards in effect, and how stable the ranks are
  wilson                                 binomial proportions (hallucination rates)

Caveats
* Percentile intervals under-cover with fewer than ~20-30 clusters (`Bootstrap.flags`): show `cluster_t_ci`
  next to them and mark the set. The sign-flip test stays exact, but its smallest p-value is 2/2^G (G = 8:
  0.0078).
* A set without a cluster key falls back to iid resampling of its source utterances; its intervals are likely
  too narrow.
* Each degraded utterance has a single noise / codec realisation, so no interval here covers the variance of
  *which* degradation was drawn.
* Significance is not validity: a model trained on a set's training split can be significantly better there.
"""

from __future__ import annotations

import hashlib
import math
import warnings
from collections.abc import Callable, Iterable, Mapping, Sequence
from dataclasses import dataclass
from typing import NamedTuple

import numpy as np
from numpy.typing import ArrayLike
from scipy import stats as sps

FLOOR = 0.005  # geometric aggregation: a set score below 0.5 % WER counts as 0.5 % (as leaderboard.FLOOR)
FEW_CLUSTERS = 30  # percentile intervals under-cover below ~20-30 clusters


# --- helpers ---------------------------------------------------------------------------------------------
def _seed_for(*parts: object) -> int:
    """64-bit seed from names (the degrade.chain.seed_for scheme), so a source set's draws do not depend on
    which other sets are passed, or in which order."""
    return int.from_bytes(hashlib.sha256("|".join(map(str, parts)).encode()).digest()[:8], "little")


def _group_sum(x: ArrayLike, groups: np.ndarray, n_groups: int) -> np.ndarray:
    """Sum the last axis of x within groups: (..., n) -> (..., n_groups)."""
    x = np.asarray(x, dtype=np.float64)
    flat = x.reshape(-1, x.shape[-1])
    idx = groups + n_groups * np.arange(flat.shape[0])[:, None]
    out = np.bincount(idx.ravel(), weights=flat.ravel(), minlength=n_groups * flat.shape[0])
    return out.reshape(*x.shape[:-1], n_groups)


def _div(a: np.ndarray, b: np.ndarray) -> np.ndarray:
    """a / b, NaN where b is 0 (no reference words for that model in the sample)."""
    return np.divide(a, b, out=np.full(np.broadcast_shapes(a.shape, b.shape), np.nan), where=b > 0)


def _ranks(x: np.ndarray) -> np.ndarray:
    """Competition ranks along the last axis: 1 = lowest WER, tied models share the better rank."""
    return sps.rankdata(x, method="min", axis=-1).astype(int)


def _combine(x: np.ndarray, w: np.ndarray, geometric: bool, floor: float) -> np.ndarray:
    """Weighted mean over the last axis (weights normalized); geometric: exp of the mean of ln max(x, floor).
    NaN propagates."""
    w = w / w.sum()
    return np.exp(np.log(np.maximum(x, floor)) @ w) if geometric else x @ w


def _z_power(alpha: float, power: float) -> float:
    """z_{1-alpha/2} + z_{power}: 2.80 for a two-sided 5 % test with 80 % power."""
    return float(sps.norm.ppf(1 - alpha / 2) + sps.norm.ppf(power))


# --- data container --------------------------------------------------------------------------------------
@dataclass(frozen=True, eq=False)
class SetData:
    """Per-utterance capped errors of several models on one (set, condition).

    errors[m, i]   min(S+D+I, n_i) of model m on utterance i; NaN when the model has no record for it
    nref[i]        n_i > 0 reference words (the scorer's mean reference length on multi-reference sets)
    source_ids[i]  the source utterance (degraded rows keep their clean id)
    clusters[i]    resampling cluster (recording / video / speaker / sentence); None: utterances are iid
    strata[i]      design stratum (dialect config); None: unstratified
    source         the set whose bootstrap draw this condition shares; defaults to `name`, so ("mgb2",
                   "telephony") shares mgb2's draw
    Labels are compared as strings. A model with NaN rows is scored on the utterances it has, which breaks
    exact pairing: rank only models with complete records.
    """

    name: str
    cond: str
    models: tuple[str, ...]
    errors: np.ndarray
    nref: np.ndarray
    source_ids: np.ndarray
    clusters: np.ndarray | None = None
    strata: np.ndarray | None = None
    source: str = ""

    def __post_init__(self):
        models = tuple(self.models)
        nref = np.array(self.nref, dtype=np.float64)
        errors = np.array(self.errors, dtype=np.float64)
        n = nref.size
        if nref.ndim != 1 or n == 0 or not (nref > 0).all():
            raise ValueError(f"{self.key}: nref must be a non-empty 1-D array of positive lengths "
                             "(leave out empty references)")
        if errors.shape != (len(models), n):
            raise ValueError(f"{self.key}: errors must have shape (models, utterances) = {(len(models), n)}")
        if len(set(models)) != len(models):
            raise ValueError(f"{self.key}: duplicate model names")
        if (errors < 0).any() or (errors > nref + 1e-9).any():  # NaN compares False
            raise ValueError(f"{self.key}: errors must be capped per utterance, 0 <= e_i <= n_i")
        for arr in (errors, nref):
            arr.setflags(write=False)
        object.__setattr__(self, "models", models)
        object.__setattr__(self, "errors", errors)
        object.__setattr__(self, "nref", nref)
        object.__setattr__(self, "source", self.source or self.name)
        for f in ("source_ids", "clusters", "strata"):
            v = getattr(self, f)
            if v is None and f != "source_ids":
                continue
            lab = np.asarray(v, dtype=object)
            if lab.shape != (n,) or any(x is None for x in lab):
                raise ValueError(f"{self.key}: {f} must hold one label per utterance")
            lab = lab.astype(str)
            lab.setflags(write=False)
            object.__setattr__(self, f, lab)

    @property
    def key(self) -> str:
        return f"{self.name}/{self.cond}"

    def diff(self, a: str, b: str) -> tuple[np.ndarray, np.ndarray, np.ndarray | None]:
        """(d, n, clusters) for comparing models a and b, d_i = e_a,i - e_b,i, on the utterances both have:
        the input of sign_flip_test, wilcoxon_clusters, mde and (d, n) of matched_pairs_test."""
        ea, eb = self.errors[self.models.index(a)], self.errors[self.models.index(b)]
        ok = ~(np.isnan(ea) | np.isnan(eb))
        return ea[ok] - eb[ok], self.nref[ok], None if self.clusters is None else self.clusters[ok]


def _record_labels(meta: list[dict], field: str, mapping: Mapping[str, object] | None, sids: list[str],
                   key: str) -> np.ndarray | None:
    if mapping is not None:
        if missing := [s for s in sids if s not in mapping]:
            raise KeyError(f"{key}: no {field} label for {len(missing)} source utterances, e.g. {missing[0]}")
        return np.array([str(mapping[s]) for s in sids])
    values = [x.get(field) for x in meta]
    if all(v is None for v in values):
        return None
    if any(v is None for v in values):
        raise ValueError(f"{key}: some utterances carry a {field} label and others do not")
    return np.array([str(v) for v in values])


def records_to_setdata(name: str, cond: str, records: Mapping[str, Iterable[dict]], profile: str, *,
                       unit: str = "word", source: str | None = None,
                       clusters: Mapping[str, object] | None = None,
                       strata: Mapping[str, object] | None = None) -> SetData:
    """SetData from v2 utterance records (sttarena/scoring.py) of several models on one (set, condition).

    records maps model -> its records. Utterances are aligned by `id`; a model without a record for an
    utterance gets NaN. Per utterance and `profile`: unit="word" uses min(S+D+I, n) over n (WER_v2),
    unit="char" min(ce, nc) over nc (CER_ns). Utterances with an empty reference under the profile (n = 0:
    non-speech, evaluated separately) are left out, so the point estimates equal scoring.aggregate's capped
    `wer` and `cer_ns`. Failed utterances keep the counts the scorer stored (all deletions); the leaderboard
    flags such sets. Labels come from the records' `source_utt` (default: the id), `cluster` and `stratum`
    fields, or from `clusters` / `strata` mappings {source utterance id: label}, which take precedence.
    """
    if unit not in ("word", "char"):
        raise ValueError("unit must be 'word' or 'char'")
    key = f"{name}/{cond}"
    models = tuple(records)
    row: dict[str, int] = {}
    nref: list[float] = []
    meta: list[dict] = []  # per utterance: source_utt / cluster / stratum, from any model's record
    cells: list[tuple[int, int, float]] = []
    for m, recs in enumerate(records.values()):
        seen: set[str] = set()
        for r in recs:
            sc = r["scores"][profile]
            n = float(sc.get("n" if unit == "word" else "nc", 0))
            if n <= 0:
                continue
            uid = r["id"]
            if uid in seen:
                raise ValueError(f"{key}: {models[m]} has two records for {uid}")
            seen.add(uid)
            i = row.setdefault(uid, len(nref))
            if i == len(nref):
                nref.append(n)
                meta.append({})
            elif nref[i] != n:
                raise ValueError(f"{key}: {uid} has {n:g} reference units for {models[m]} but {nref[i]:g} "
                                 "for another model (different references or scorer versions)")
            for f, v in (("source_utt", r.get("source_utt") or uid), ("cluster", r.get("cluster")),
                         ("stratum", r.get("stratum"))):
                if v is not None and meta[i].setdefault(f, v) != v:
                    raise ValueError(f"{key}: {uid} has conflicting {f} labels across models")
            e = sc["S"] + sc["D"] + sc["I"] if unit == "word" else sc["ce"]
            cells.append((m, i, min(e, n)))
    if not nref:
        raise ValueError(f"{key}: no utterance with a non-empty reference")
    errors = np.full((len(models), len(nref)), np.nan)
    m_idx, u_idx, vals = zip(*cells)
    errors[list(m_idx), list(u_idx)] = vals
    sids = [str(x["source_utt"]) for x in meta]
    return SetData(name, cond, models, errors, np.array(nref), np.array(sids),
                   _record_labels(meta, "cluster", clusters, sids, key),
                   _record_labels(meta, "stratum", strata, sids, key), source or name)


# --- joint cluster bootstrap -----------------------------------------------------------------------------
@dataclass(frozen=True, eq=False)
class Bootstrap:
    """Joint cluster-bootstrap replicates of every (set, condition) score, paired across models.

    models      union of the models of all conditions: the column order of every array
    estimates   key -> (M,) score on the full data (NaN for a model without records on that set)
    draws       key -> (B, M) replicates; NaN in a replicate where the condition drew no cluster with data
    sources     key -> source set (the conditions of one source share every replicate's cluster weights)
    n_units     key -> resampled units the condition covers (clusters, or utterances when iid)
    clustered   key -> False when the source has no cluster labels (iid fallback)
    stratified  key -> True when units were resampled within strata
    """

    models: tuple[str, ...]
    estimates: dict[str, np.ndarray]
    draws: dict[str, np.ndarray]
    sources: dict[str, str]
    n_units: dict[str, int]
    clustered: dict[str, bool]
    stratified: dict[str, bool]

    def flags(self, min_clusters: int = FEW_CLUSTERS) -> dict[str, str]:
        """Keys whose percentile intervals are likely too narrow, with the reason: iid fallback (no cluster
        key), or fewer than `min_clusters` clusters (show cluster_t_ci next to the interval)."""
        out = {}
        for key in self.draws:
            if not self.clustered[key]:
                out[key] = "iid: no cluster key"
            elif self.n_units[key] < min_clusters:
                out[key] = f"few clusters: G={self.n_units[key]}"
        return out


class _Units(NamedTuple):
    index: list[np.ndarray]  # per condition: the unit of every row
    n: int  # units of the source set
    strata: np.ndarray | None  # stratum of every unit; None: resample unstratified
    clustered: bool


def _single_label(keys: np.ndarray, labels: np.ndarray) -> bool:
    """Whether every key (integer code) carries one label (integer code)."""
    first = np.empty(int(keys.max()) + 1, dtype=labels.dtype)
    first[keys] = labels
    return bool((first[keys] == labels).all())


def _units(group: Sequence[SetData]) -> _Units:
    """Resampling units shared by the conditions of one source set: its clusters, or its source utterances
    when no condition carries cluster labels. A source utterance must have the same labels in every condition.
    Strata are used only when every unit lies in one stratum (design strata such as Casablanca's countries).
    When clusters cross strata (utterance types inside a video, as on algerian_cs), stratifying would split
    clusters, so units are resampled unstratified."""
    src = group[0].source
    if len({d.clusters is None for d in group}) > 1 or len({d.strata is None for d in group}) > 1:
        raise ValueError(f"{src}: either every condition carries cluster (stratum) labels or none does")
    sid = np.unique(np.concatenate([d.source_ids for d in group]), return_inverse=True)[1]
    clustered = group[0].clusters is not None
    unit = sid
    if clustered:
        unit = np.unique(np.concatenate([d.clusters for d in group]), return_inverse=True)[1]
        if not _single_label(sid, unit):
            raise ValueError(f"{src}: a source utterance has different cluster labels across conditions")
    n_units = int(unit.max()) + 1
    unit_strata = None
    if group[0].strata is not None:
        stratum = np.unique(np.concatenate([d.strata for d in group]), return_inverse=True)[1]
        if not _single_label(sid, stratum):
            raise ValueError(f"{src}: a source utterance has different stratum labels across conditions")
        if _single_label(unit, stratum):
            unit_strata = np.empty(n_units, dtype=np.int64)
            unit_strata[unit] = stratum
    bounds = np.cumsum([d.nref.size for d in group])[:-1]
    return _Units(np.split(unit, bounds), n_units, unit_strata, clustered)


def _draw_counts(rng: np.random.Generator, n_units: int, strata: np.ndarray | None,
                 n_boot: int) -> np.ndarray:
    """(B, G) bootstrap multiplicities: in every replicate each stratum draws as many of its units as it has,
    with replacement (one multinomial per stratum)."""
    if strata is None:
        members = [np.arange(n_units)]
    else:
        members = [np.flatnonzero(strata == h) for h in np.unique(strata)]
    picks = np.concatenate([g[rng.integers(0, g.size, size=(n_boot, g.size))] for g in members], axis=1)
    flat = picks + n_units * np.arange(n_boot)[:, None]
    return np.bincount(flat.ravel(), minlength=n_boot * n_units).reshape(n_boot, n_units).astype(np.float64)


def joint_cluster_bootstrap(data: Sequence[SetData], n_boot: int = 5000, seed: int = 0) -> Bootstrap:
    """Paired, cross-condition cluster bootstrap of every (set, condition) score (research 03 §2.4a).

    For each source set and replicate b, cluster multiplicities w_bg are drawn once (a multinomial per
    stratum) and applied to every condition built from that source and to every model:

        WER*(b, s, c, m) = sum_g w_bg E_gcm / sum_g w_bg N_gcm

    where E_gcm and N_gcm are the capped errors and reference words of model m in cluster g of condition c
    (a model's missing utterances drop out of both). A source without cluster labels resamples its source
    utterances iid. Seeds are derived from (seed, source name), so draws are reproducible and independent of
    the other inputs. Use B >= 2000 for intervals and 5000 for rank sets. To share draws with a condition,
    give a score the same source: e.g. the clean WER on the 300 utterances a degraded condition reuses, for
    robustness ratios.
    """
    if n_boot < 2:
        raise ValueError("n_boot must be at least 2")
    keys = [d.key for d in data]
    if len(set(keys)) != len(keys):
        raise ValueError("each (set, condition) may appear only once")
    models = tuple(dict.fromkeys(m for d in data for m in d.models))
    col = {m: j for j, m in enumerate(models)}
    groups: dict[str, list[SetData]] = {}
    for d in data:
        groups.setdefault(d.source, []).append(d)
    estimates, draws, n_units, clustered, stratified = {}, {}, {}, {}, {}
    for src, group in groups.items():
        units = _units(group)
        rng = np.random.default_rng(_seed_for(seed, "joint-cluster-bootstrap", src))
        counts = _draw_counts(rng, units.n, units.strata, n_boot)  # (B, G)
        for d, unit in zip(group, units.index):
            have = ~np.isnan(d.errors)
            eg = _group_sum(np.where(have, d.errors, 0.0), unit, units.n).T  # (G, M_c)
            ng = _group_sum(np.where(have, d.nref, 0.0), unit, units.n).T
            cols = [col[m] for m in d.models]
            est = np.full(len(models), np.nan)
            est[cols] = _div(eg.sum(0), ng.sum(0))
            rep = np.full((n_boot, len(models)), np.nan)
            rep[:, cols] = _div(counts @ eg, counts @ ng)
            estimates[d.key], draws[d.key] = est, rep
            n_units[d.key] = int(np.unique(unit).size)
            clustered[d.key], stratified[d.key] = units.clustered, units.strata is not None
    sources = {d.key: d.source for d in data}
    return Bootstrap(models, estimates, draws, sources, n_units, clustered, stratified)


# --- aggregation -----------------------------------------------------------------------------------------
def set_weights(tracks: Mapping[str, Sequence[str]], track_weights: Mapping[str, float]) -> dict[str, float]:
    """Weight of every (set/condition) key: its track's weight split evenly over the track's sets, normalized
    to sum to 1 over the tracks that have a weight (others, such as hallucination, are left out)."""
    tw = {t: float(track_weights[t]) for t in tracks if t in track_weights and tracks[t]}
    z = sum(tw.values())
    if z <= 0:
        raise ValueError("no track with a set has a positive weight")
    out: dict[str, float] = {}
    for t, w in tw.items():
        for k in tracks[t]:
            out[k] = out.get(k, 0.0) + w / z / len(tracks[t])
    return out


def weighted_mean(values: Mapping[str, ArrayLike], weights: Mapping[str, float], *, geometric: bool = True,
                  floor: float = FLOOR) -> np.ndarray:
    """sum_k w_k x_k / sum_k w_k over the keys of `weights`; geometric: exp of the weighted mean of
    ln max(x_k, floor).

    values[k] may be a scalar, (M,) estimates or (B, M) draws. NaN (a model without that set) propagates, so
    a model missing a set gets no score (never impute). Array version of leaderboard.combine."""
    keys = list(weights)
    x = np.stack([np.asarray(values[k], dtype=np.float64) for k in keys], axis=-1)
    return _combine(x, np.array([weights[k] for k in keys], dtype=np.float64), geometric, floor)


def aggregate(values: Mapping[str, ArrayLike], tracks: Mapping[str, Sequence[str]],
              track_weights: Mapping[str, float], *, geometric: bool = True,
              floor: float = FLOOR) -> tuple[np.ndarray, dict[str, np.ndarray]]:
    """(Arena, {track: score}) from per-set scores, point estimates or bootstrap draws alike.

    A track score is the equal-weight mean over its sets, and the Arena the weighted mean over all sets with
    set_weights. The geometric headline is

        Arena = exp( sum_t w_t / |S_t| sum_{s in S_t} ln max(WER_s, floor) ) = prod_t Track_t ^ w_t

    It is scale-free per set, so the nominal track weights are close to the weights in effect (see
    effective_weights). geometric=False gives the arithmetic column, sum_t w_t mean_s WER_s.
    """
    tr = {t: weighted_mean(values, dict.fromkeys(ks, 1.0), geometric=geometric, floor=floor)
          for t, ks in tracks.items() if ks}
    return weighted_mean(values, set_weights(tracks, track_weights), geometric=geometric, floor=floor), tr


def percentile_ci(draws: ArrayLike, alpha: float = 0.05) -> np.ndarray:
    """(2, ...) percentile interval over the replicate axis 0. NaN replicates are ignored, and a column with
    no finite replicate (a model without the set) stays NaN. Under-covers with few clusters: see
    Bootstrap.flags and cluster_t_ci."""
    with warnings.catch_warnings():
        warnings.simplefilter("ignore", RuntimeWarning)  # all-NaN columns
        return np.nanquantile(np.asarray(draws, dtype=np.float64), [alpha / 2, 1 - alpha / 2], axis=0)


# --- ranks -----------------------------------------------------------------------------------------------
def rank_sets(est: ArrayLike, draws: ArrayLike, alpha: float = 0.05,
              simultaneous: bool = True) -> tuple[np.ndarray, np.ndarray]:
    """Confidence sets (lo, hi) for ranks, 1 = lowest WER (Mogstad, Romano, Shaikh & Wilhelm 2024, bootstrap
    max-T version).

    Every pair j, k gets the interval d_jk +- c * sigma_jk for d_jk = s_j - s_k, where sigma_jk is the
    bootstrap SD of d*_jk and c is the (1 - alpha) quantile of max |d*_jk - d_jk| / sigma_jk. With
    simultaneous=True the max runs over all pairs, so the rank sets of all models hold jointly with
    probability >= 1 - alpha. With simultaneous=False it runs over the pairs involving j, so each model's set
    holds on its own. Then

        lo_j = 1 + #{k significantly better than j},   hi_j = M - #{k significantly worse than j}

    The set always contains the point rank. It needs paired draws (one resample for all models) and finite
    estimates; replicates with NaN are dropped. Coverage is asymptotic in the number of clusters.
    """
    est = np.asarray(est, dtype=np.float64)
    draws = np.asarray(draws, dtype=np.float64)
    M = est.size
    if draws.ndim != 2 or draws.shape[1] != M:
        raise ValueError("draws must have shape (B, M) with M = len(est)")
    if not np.isfinite(est).all():
        raise ValueError("estimates must be finite: rank only models with every set")
    draws = draws[np.isfinite(draws).all(axis=1)]
    if draws.shape[0] < 2:
        raise ValueError("need at least 2 finite replicates")
    if M < 2:
        return np.ones(M, dtype=int), np.ones(M, dtype=int)
    j, k = np.triu_indices(M, 1)
    d = est[j] - est[k]
    db = draws[:, j] - draws[:, k]  # (B, pairs)
    se = db.std(axis=0, ddof=1)
    t = np.abs(db - d) / np.where(se > 0, se, np.inf)  # a pair with no bootstrap variation never deviates
    if simultaneous:
        crit = np.full(M, np.quantile(t.max(axis=1), 1 - alpha))
    else:
        crit = np.array([np.quantile(t[:, (j == m) | (k == m)].max(axis=1), 1 - alpha) for m in range(M)])
    diff, sd = np.zeros((M, M)), np.zeros((M, M))
    diff[j, k], diff[k, j] = d, -d
    sd[j, k] = sd[k, j] = se
    half = crit[:, None] * sd
    better = diff + half < 0  # row model significantly better (lower WER) than the column model
    worse = diff - half > 0
    return 1 + worse.sum(axis=1), M - better.sum(axis=1)


def naive_rank_ranges(draws: ArrayLike, alpha: float = 0.05) -> tuple[np.ndarray, np.ndarray]:
    """Percentile range (lo, hi) of each model's bootstrap rank, as in v1. It is not valid near ties (Hall &
    Miller 2009) and is kept as a comparison for rank_sets. Replicates with NaN are dropped."""
    draws = np.asarray(draws, dtype=np.float64)
    r = _ranks(draws[np.isfinite(draws).all(axis=1)])
    lo, hi = np.quantile(r, [alpha / 2, 1 - alpha / 2], axis=0)
    return np.floor(lo).astype(int), np.ceil(hi).astype(int)


# --- paired tests ----------------------------------------------------------------------------------------
@dataclass(frozen=True)
class PairedTest:
    """A paired comparison of model A with model B.

    delta      WER_A - WER_B on the paired utterances (negative: A is better); the Arena difference for
               arena_sign_flip_test
    statistic  the test statistic: delta for sign-flip tests, z for matched pairs, W for Wilcoxon
    p_value    two-sided
    n_units    clusters, or utterances, that the test flips or ranks
    method     "sign-flip-exact", "sign-flip-mc", "mapsswe" or "wilcoxon"
    """

    delta: float
    statistic: float
    p_value: float
    n_units: int
    method: str


def _prepare(x: ArrayLike, n: ArrayLike,
             clusters: ArrayLike | None) -> tuple[np.ndarray, np.ndarray, np.ndarray, int]:
    """Per-utterance values, reference lengths and unit codes (clusters, or one unit per utterance).
    Utterances whose value is NaN (no record for one of the models) are dropped."""
    x = np.asarray(x, dtype=np.float64)
    n = np.asarray(n, dtype=np.float64)
    if x.ndim != 1 or x.shape != n.shape:
        raise ValueError("per-utterance values and reference lengths must be 1-D arrays of equal length")
    if not (n > 0).all():
        raise ValueError("reference lengths must be positive (leave out empty references)")
    ok = ~np.isnan(x)
    if clusters is None:
        unit = np.arange(int(ok.sum()))
    else:
        labels = np.asarray(clusters).astype(str)
        if labels.shape != x.shape:
            raise ValueError("clusters must hold one label per utterance")
        unit = np.unique(labels[ok], return_inverse=True)[1]
    x, n = x[ok], n[ok]
    if not x.size:
        raise ValueError("no paired utterances")
    return x, n, unit, int(unit.max()) + 1


def _flip_pvalue(stat: Callable[[np.ndarray], np.ndarray], n_units: int, observed: float, n_perm: int,
                 seed: int) -> tuple[float, bool]:
    """(p, exact) for |observed| under independent sign flips of n_units units. `stat` maps an (r, G) matrix
    of +-1 to r statistics. Exact over all 2^G patterns when 2^G <= n_perm, else Monte Carlo with
    p = (1 + #{|T*| >= |T|}) / (R + 1)."""
    if n_perm < 1:
        raise ValueError("n_perm must be positive")
    if n_units == 0:  # the systems tie in every unit
        return 1.0, True
    exact = n_units < 63 and 2**n_units <= n_perm
    total = 2**n_units if exact else n_perm
    bound = abs(observed) * (1 - 1e-9)  # patterns reproducing |T| up to rounding count (the identity too)
    rng = np.random.default_rng(seed)
    chunk = max(1, (1 << 20) // n_units)
    hits = 0
    for start in range(0, total, chunk):
        r = min(chunk, total - start)
        if exact:
            bits = (np.arange(start, start + r)[:, None] >> np.arange(n_units)) & 1
        else:
            bits = rng.integers(0, 2, size=(r, n_units))
        hits += int((np.abs(stat(1.0 - 2.0 * bits)) >= bound).sum())
    return (hits / total, True) if exact else ((1 + hits) / (n_perm + 1), False)


def sign_flip_test(d: ArrayLike, n: ArrayLike, clusters: ArrayLike | None = None, *, n_perm: int = 10_000,
                   seed: int = 0) -> PairedTest:
    """Paired cluster sign-flip permutation test of H0: WER_A = WER_B on one set. This is the primary test.

    T = sum_g D_g / sum_g N_g, with D_g = sum_{i in g} d_i (d_i = e_A,i - e_B,i, capped errors) and N_g the
    cluster's reference words. Under H0 the two systems are exchangeable within a cluster, so
    T* = sum_g s_g D_g / sum_g N_g with independent s_g = +-1. The test is exact (all 2^G patterns) when
    2^G <= n_perm, else Monte Carlo with p = (1 + #{|T*| >= |T|}) / (R + 1). It needs no normality. Its
    smallest attainable p is 2/2^G, so few clusters cannot give small p-values. clusters=None flips
    utterances.
    """
    d, n, unit, G = _prepare(d, n, clusters)
    D = _group_sum(d, unit, G)
    N = float(n.sum())
    T = float(D.sum()) / N
    D = D[D != 0]  # clusters where the systems tie leave T* unchanged
    p, exact = _flip_pvalue(lambda s: s @ D / N, D.size, T, n_perm, seed)
    return PairedTest(T, T, p, G, "sign-flip-exact" if exact else "sign-flip-mc")


def arena_sign_flip_test(data: Sequence[SetData], a: str, b: str, tracks: Mapping[str, Sequence[str]],
                         track_weights: Mapping[str, float], *, geometric: bool = True, floor: float = FLOOR,
                         n_perm: int = 10_000, seed: int = 0) -> PairedTest:
    """Sign-flip test of H0: Arena_A = Arena_B.

    One flip swaps A and B in one cluster in every condition built from its source set, since clean, noisy,
    telephony and call-center share utterances. The Arena difference is then recomputed with the headline
    aggregation (aggregate). Units are those of joint_cluster_bootstrap: clusters, or source utterances for a
    set without a cluster key. Utterances missing for either model are dropped. Under H0 (the two systems
    are exchangeable within every cluster, jointly across its conditions) the test is exact. Exact
    enumeration covers 2^G patterns when that is <= n_perm; otherwise Monte Carlo.
    """
    weights = set_weights(tracks, track_weights)
    by_key = {d.key: d for d in data}
    if missing := [k for k in weights if k not in by_key]:
        raise KeyError(f"no SetData for {missing}")
    sel = [by_key[k] for k in weights]
    groups: dict[str, list[int]] = {}
    for c, d in enumerate(sel):
        groups.setdefault(d.source, []).append(c)
    rows: list[tuple[int, np.ndarray, np.ndarray]] = []  # (condition, global unit, d_i / 2N)
    half = np.empty(len(sel))  # (sum e_A + sum e_B) / 2N per condition
    offset = 0
    for idx in groups.values():
        units = _units([sel[c] for c in idx])
        for c, unit in zip(idx, units.index):
            d = sel[c]
            if a not in d.models or b not in d.models:
                raise ValueError(f"{d.key}: no records for {a if a not in d.models else b}")
            ea, eb = d.errors[d.models.index(a)], d.errors[d.models.index(b)]
            ok = ~(np.isnan(ea) | np.isnan(eb))
            n2 = 2 * d.nref[ok].sum()
            if n2 == 0:
                raise ValueError(f"{d.key}: no utterance scored for both {a} and {b}")
            rows.append((c, offset + unit[ok], (ea - eb)[ok] / n2))
            half[c] = (ea + eb)[ok].sum() / n2
        offset += units.n
    D = np.zeros((offset, len(sel)))  # D[g, c] = D_gc / 2N_c
    for c, unit, v in rows:
        D[:, c] = _group_sum(v, unit, offset)
    n_units = int(np.unique(np.concatenate([u for _, u, _ in rows])).size)
    D = D[np.abs(D).sum(axis=1) > 0]  # units where the systems tie everywhere leave the statistic unchanged
    w = np.array(list(weights.values()))

    def arena_diff(s: np.ndarray) -> np.ndarray:  # (r, G) signs -> (r,) Arena_A* - Arena_B*
        h = s @ D
        return _combine(half + h, w, geometric, floor) - _combine(half - h, w, geometric, floor)

    observed = float(arena_diff(np.ones((1, D.shape[0])))[0])
    p, exact = _flip_pvalue(arena_diff, D.shape[0], observed, n_perm, seed)
    return PairedTest(observed, observed, p, n_units, "sign-flip-exact" if exact else "sign-flip-mc")


def matched_pairs_test(d: ArrayLike, n: ArrayLike) -> PairedTest:
    """Matched-pairs z test on per-utterance error differences (MAPSSWE-style; NIST sc_stats `mapsswe`).

    Z_i = e_A,i - e_B,i and W = mean(Z) / (s_Z / sqrt(m)), with a two-sided p from N(0, 1). Utterances serve
    as segments; MAPSSWE proper cuts at words both systems got right, which needs alignments. It assumes
    independent segments, so it ignores clustering. Report it for comparability with NIST tools and older
    papers only, and decide with sign_flip_test. The normal approximation needs m > ~50 utterances; n only
    gives delta.
    """
    d, n, _, m = _prepare(d, n, None)
    mean = float(d.mean())
    sd = float(d.std(ddof=1)) if m > 1 else 0.0
    if sd > 0:
        z = mean / (sd / math.sqrt(m))
    else:
        z = 0.0 if mean == 0 else math.copysign(math.inf, mean)
    return PairedTest(float(d.sum() / n.sum()), z, float(2 * sps.norm.sf(abs(z))), m, "mapsswe")


def wilcoxon_clusters(d: ArrayLike, n: ArrayLike, clusters: ArrayLike | None = None) -> PairedTest:
    """Wilcoxon signed-rank test on per-cluster WER differences D_g / N_g (scipy; like sc_stats' per-speaker
    `wilc`). Zero differences are dropped (Wilcoxon's convention). Every cluster counts equally whatever its
    size, and clusters are assumed independent, so report it for comparability only. clusters=None ranks
    per-utterance WER differences."""
    d, n, unit, G = _prepare(d, n, clusters)
    delta = float(d.sum() / n.sum())
    x = _group_sum(d, unit, G) / _group_sum(n, unit, G)
    x = x[x != 0]
    if not x.size:
        return PairedTest(delta, 0.0, 1.0, G, "wilcoxon")
    res = sps.wilcoxon(x)
    return PairedTest(delta, float(res.statistic), float(res.pvalue), G, "wilcoxon")


# --- multiplicity ----------------------------------------------------------------------------------------
def _adjust(pvals: ArrayLike, step: Callable[[np.ndarray], np.ndarray]) -> np.ndarray:
    p = np.asarray(pvals, dtype=np.float64)
    out = np.full(p.shape, np.nan)
    ok = ~np.isnan(p)
    x = p[ok]
    order = np.argsort(x, kind="stable")
    adj = np.empty(x.size)
    adj[order] = np.minimum(1.0, step(x[order]))
    out[ok] = adj
    return out


def holm(pvals: ArrayLike) -> np.ndarray:
    """Holm step-down adjusted p-values, controlling the family-wise error rate (the pairwise p-value
    matrix: pass each pair once). p_adj(i) = max_{j <= i} (m - j + 1) p_(j) over the sorted p-values. NaN
    entries are ignored and stay NaN; the output has the input's shape."""
    return _adjust(pvals, lambda s: np.maximum.accumulate((s.size - np.arange(s.size)) * s))


def benjamini_hochberg(pvals: ArrayLike) -> np.ndarray:
    """Benjamini-Hochberg adjusted p-values, controlling the false discovery rate (per-set "who is better
    where", q = .05). p_adj(i) = min_{j >= i} m p_(j) / j over the sorted p-values. NaN entries are ignored
    and stay NaN; the output has the input's shape."""
    def step(s: np.ndarray) -> np.ndarray:
        return np.minimum.accumulate((s.size / np.arange(1, s.size + 1) * s)[::-1])[::-1]

    return _adjust(pvals, step)


# --- intervals and power ---------------------------------------------------------------------------------
def _ratio_se(e: np.ndarray, n: np.ndarray, unit: np.ndarray | None = None,
              n_units: int = 0) -> tuple[float, float]:
    """(R, SE) of R = sum e / sum n by linearization, u_i = e_i - R n_i: iid, or summed within clusters,
    SE = sqrt(K/(K-1) sum_k u_k^2) / sum n over the K utterances or clusters."""
    total = float(n.sum())
    r = float(e.sum()) / total
    u = e - r * n
    if unit is not None:
        u = _group_sum(u, unit, n_units)
    k = u.size
    return r, math.sqrt(k / (k - 1) * float(u @ u)) / total if k > 1 else math.nan


def cluster_t_ci(e: ArrayLike, n: ArrayLike, clusters: ArrayLike | None,
                 alpha: float = 0.05) -> tuple[float, float]:
    """Cluster-robust t interval R +- t_{G-1, 1-alpha/2} SE_cl for a ratio R = sum e / sum n: a WER, or a
    paired difference with e = d. Report it next to percentile intervals on few-cluster sets (G < ~30;
    research 03 §3 pitfall 4). It uses the simple G/(G-1) small-sample factor (CR1); the CR2 correction is
    not implemented. clusters=None gives the iid interval with N - 1 degrees of freedom."""
    e, n, unit, G = _prepare(e, n, clusters)
    r, se = _ratio_se(e, n, None if clusters is None else unit, G)
    t = float(sps.t.ppf(1 - alpha / 2, G - 1)) if G > 1 else math.nan
    return r - t * se, r + t * se


def effective_clusters(sizes: ArrayLike) -> float:
    """Effective number of clusters G_eff = (sum_g n_g)^2 / sum_g n_g^2 (n_g: reference words in cluster g).
    It equals G for equal clusters and falls toward 1 as one cluster dominates."""
    s = np.asarray(sizes, dtype=np.float64)
    return float(s.sum() ** 2 / (s @ s))


@dataclass(frozen=True)
class MDE:
    """Minimum detectable WER difference between two models on one set (see mde).

    delta, se_iid, se_cluster: the observed difference and its standard errors. mde_iid, mde_cluster: the
    corresponding minimum detectable differences. n_clusters, g_eff: the cluster count and the effective
    count. All are fractions; the cluster fields are None without clusters.
    """

    delta: float
    se_iid: float
    se_cluster: float | None
    mde_iid: float
    mde_cluster: float | None
    n_clusters: int | None
    g_eff: float | None


def mde(d: ArrayLike, n: ArrayLike, clusters: ArrayLike | None = None, *, alpha: float = 0.05,
        power: float = 0.8) -> MDE:
    """Minimum detectable WER difference between two models on one set, from per-utterance differences.

    With d_i = e_A,i - e_B,i, delta = sum d_i / sum n_i and u_i = d_i - delta n_i:

        SE_iid = sqrt( N/(N-1) sum_i u_i^2 ) / sum_i n_i
        SE_cl  = sqrt( G/(G-1) sum_g (sum_{i in g} u_i)^2 ) / sum_i n_i
        MDE    = (z_{1-alpha/2} + z_power) SE      (2.80 SE at alpha = .05, power = .8)

    Publish 2.80 x the median cluster SE over adjacent model pairs as the set's MDE (research 03 §2.4d).
    """
    d, n, unit, G = _prepare(d, n, clusters)
    z = _z_power(alpha, power)
    delta, se_iid = _ratio_se(d, n)
    if clusters is None:
        return MDE(delta, se_iid, None, z * se_iid, None, None, None)
    _, se_cl = _ratio_se(d, n, unit, G)
    return MDE(delta, se_iid, se_cl, z * se_iid, z * se_cl, G, effective_clusters(_group_sum(n, unit, G)))


def mde_planning(q: float, phi: float, n_words: float, *, tau: float = 0.0, g_eff: float | None = None,
                 alpha: float = 0.05, power: float = 0.8) -> tuple[float, float]:
    """(SE, MDE) of a paired WER difference before predictions exist (research 03 §2.4d):

        SE^2 ~ phi q / (N nbar) + tau^2 / G_eff

    q: discordant-word rate (share of reference words where exactly one system errs); phi: within-utterance
    overdispersion (1 for independent words); n_words = N nbar reference words; tau: SD of the system x
    cluster interaction, as a fraction; g_eff: effective_clusters of the set. The second term does not
    shrink with more utterances per cluster: size a set by its clusters.
    """
    var = phi * q / n_words
    if tau:
        if not g_eff:
            raise ValueError("tau > 0 needs g_eff, the effective number of clusters")
        var += tau**2 / g_eff
    se = math.sqrt(var)
    return se, _z_power(alpha, power) * se


# --- what the aggregation does in effect -----------------------------------------------------------------
def _complete(est: Mapping[str, ArrayLike], keys: Sequence[str]) -> np.ndarray:
    """(M', K) scores of the models that have every key."""
    x = np.stack([np.asarray(est[k], dtype=np.float64) for k in keys], axis=1)
    return x[np.isfinite(x).all(axis=1)]


def effective_weights(est: Mapping[str, ArrayLike], tracks: Mapping[str, Sequence[str]],
                      track_weights: Mapping[str, float], *, geometric: bool = True,
                      floor: float = FLOOR) -> dict[str, dict[str, float]]:
    """Each set's, track's and source set's share of the between-model variance of the Arena score.

    The Arena is linear in x_k: x_k = WER_k for the arithmetic mean, ln max(WER_k, floor) for the geometric
    mean on the log scale. So A = sum_k w_k x_k, Var(A) = sum_k Cov(w_k x_k, A) over models, and
    share_k = Cov(w_k x_k, A) / Var(A) sums to 1. A share can be negative when a set orders models against
    the Arena. With the arithmetic mean, high-WER sets carry more than their nominal weight: call-center
    carried 34 % for a nominal 20 % on the v1 board. The geometric mean is scale-free per set. est maps
    key -> (M,) scores; only models with every set are used. The source of "mgb2/telephony" is "mgb2".
    Returns {"sets": ..., "tracks": ..., "sources": ...}.
    """
    w = set_weights(tracks, track_weights)
    keys = list(w)
    x = _complete(est, keys)
    if x.shape[0] < 2:
        raise ValueError("need at least 2 models with every set")
    if geometric:
        x = np.log(np.maximum(x, floor))
    part = x * np.array([w[k] for k in keys])  # (M', K)
    a = part.sum(axis=1)
    ac = a - a.mean()
    var = float(ac @ ac)
    if var <= 0:
        raise ValueError("all models have the same Arena score")
    share = dict(zip(keys, ((part - part.mean(axis=0)).T @ ac / var).tolist()))
    by_source: dict[str, float] = {}
    for k, s in share.items():
        by_source[k.split("/")[0]] = by_source.get(k.split("/")[0], 0.0) + s
    by_track = {t: sum(share[k] for k in dict.fromkeys(ks)) for t, ks in tracks.items()
                if t in track_weights and ks}
    return {"sets": share, "tracks": by_track, "sources": by_source}


def leave_one_set_out(est: Mapping[str, ArrayLike], tracks: Mapping[str, Sequence[str]],
                      track_weights: Mapping[str, float], *, geometric: bool = True,
                      floor: float = FLOOR) -> dict[str, dict[str, int]]:
    """Rank stability: for each set, recompute the Arena without it and re-rank (research 03 §2.3).

    The set's track keeps its weight, split over the remaining sets; a track left empty drops out and the
    other weights are renormalized. This is the board as it would be had the set never been in the suite.
    Returns, per set, the number of models whose rank changes ("moved") and the largest rank shift
    ("max_shift"). Only models with every set are used. On the v1 board (23 models, 22 sets) dropping one
    set moves 4.0 models on average under the arithmetic mean, against 0.7 under the geometric mean.
    """
    keys = list(set_weights(tracks, track_weights))
    values = dict(zip(keys, _complete(est, keys).T))

    def ranks(tr: Mapping[str, Sequence[str]]) -> np.ndarray:
        return _ranks(weighted_mean(values, set_weights(tr, track_weights), geometric=geometric, floor=floor))

    base = ranks(tracks)
    out = {}
    for k in keys:
        r = ranks({t: [s for s in ks if s != k] for t, ks in tracks.items()})
        out[k] = {"moved": int((r != base).sum()), "max_shift": int(np.abs(r - base).max(initial=0))}
    return out


def wilson(k: int, n: int, z: float = 1.96) -> list[float] | None:
    """Wilson score interval [lo, hi] for a proportion k/n (rounded to 5 decimals; None when n = 0). Unlike
    the normal interval it stays inside [0, 1] and works near 0 % and 100 %, where hallucination rates sit."""
    if not n:
        return None
    p = k / n
    den = 1 + z * z / n
    mid = (p + z * z / (2 * n)) / den
    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / den
    return [round(max(0.0, mid - half), 5), round(min(1.0, mid + half), 5)]
