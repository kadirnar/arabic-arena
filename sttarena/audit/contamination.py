"""Test/train overlap and in-domain exposure: is a model being tested on data it was trained on?

Contamination here is *differential*, the kind that reorders a leaderboard: Arabic fine-tunes train on
the train splits of our test corpora, and some of those splits contain the test data.

* NADI-2026 subtask 1.1's public train split holds 93.9 % of the Casablanca test segments (same
  seg_id, same transcript), and 98 % of our casablanca rows (research 01 §1.5).
* The Arabic-STT fine-tunes declare CV18, MASC, MGB-2 and SADA train data: 47.5 % of the Arena weight.
* A residual screen on our WER matrix recovers those declared cases from scores alone (SADA cells at
  z ≈ −2.6 to −3.1) and points at an undeclared one (lemura-arabic-asr-lite on CV18 and MASC, z ≈ −2).
* 5.5 % of CV18 and 2.2 % of MASC-clean references are Qur'anic (>= 70 % of their 5-grams), the most
  memorized Arabic text (`text_overlap(..., n=5)` against a Qur'an text).

Checks, streaming and numpy-only:

* `text_overlap`: word n-gram coverage of each test reference by a train corpus (PaLM: contaminated
  when >= 70 % of its 8-grams were seen), exact matches of the whole normalized text, and MinHash/LSH
  near duplicates on character 5-grams (Jaccard >= 0.7, the rule that found 6,873 of 11,126
  LibriSpeech dev/test utterances in the Pile). Both sides are normalized at L1m; the test side is
  indexed in memory and the train corpus, any iterable of strings, is read once.
* `id_overlap`: exact joins of test IDs against a train split's IDs (Casablanca seg_id vs NADI train).
* `residual_screen`: ConStat-style check of a model × set WER matrix.
* `exposure`: share of the Arena weight on sets a model trained on (the MTEB-style zero-shot share).

Flags are signals, not verdicts: a fine-tune trained on a corpus's train split is in-domain, not
cheating; it is labelled, not excluded.
"""

from __future__ import annotations

import math
import zlib
from collections import defaultdict
from typing import Callable, Iterable, Mapping, Sequence

import numpy as np

from ..normalizers import get_text_normalizer

_PRIME = 4294967291  # largest prime below 2**32: a·x + b stays below 2**64 for a, b, x < 2**32


def _corpus(key: str) -> str:
    """Corpus of a WER-matrix or weights key ("sada/telephony" -> "sada")."""
    return key.split("/")[0]


class MinHasher:
    """MinHash signatures of character shingles: num_perm universal hashes (a·x + b) mod p over crc32."""

    def __init__(self, num_perm: int = 128, shingle: int = 5, seed: int = 0):
        rng = np.random.default_rng(seed)
        self.num_perm, self.shingle = num_perm, shingle
        self._a = rng.integers(1, _PRIME, num_perm, dtype=np.uint64)[:, None]
        self._b = rng.integers(0, _PRIME, num_perm, dtype=np.uint64)[:, None]

    def signature(self, text: str) -> np.ndarray | None:
        k = self.shingle
        shingles = {text[i:i + k] for i in range(max(1, len(text) - k + 1))} if text else set()
        if not shingles:
            return None
        x = np.fromiter((zlib.crc32(s.encode()) % _PRIME for s in shingles), np.uint64, len(shingles))
        return ((self._a * x + self._b) % _PRIME).min(axis=1)

    @staticmethod
    def jaccard(a: np.ndarray, b: np.ndarray) -> float:
        """Estimated Jaccard similarity of two shingle sets."""
        return float(np.mean(a == b))


class _LSH:
    """Banded LSH over signatures: two signatures that agree on all rows of some band are candidates."""

    def __init__(self, num_perm: int, bands: int):
        if num_perm % bands:
            raise ValueError(f"num_perm={num_perm} is not a multiple of bands={bands}")
        self.rows = num_perm // bands
        self.buckets: list[dict[bytes, list[str]]] = [defaultdict(list) for _ in range(bands)]

    def _keys(self, sig: np.ndarray):
        return enumerate(sig[b * self.rows:(b + 1) * self.rows].tobytes() for b in range(len(self.buckets)))

    def add(self, key: str, sig: np.ndarray) -> None:
        for b, k in self._keys(sig):
            self.buckets[b][k].append(key)

    def query(self, sig: np.ndarray) -> set[str]:
        return {key for b, k in self._keys(sig) for key in self.buckets[b].get(k, ())}


def text_overlap(test: Mapping[str, str], train: Iterable[str], *, n: int = 8, min_words: int = 4,
                 coverage: float = 0.7, jaccard: float = 0.7, num_perm: int = 128, shingle: int = 5,
                 bands: int = 32, seed: int = 0, lang: str = "ar", markup=None) -> dict[str, dict]:
    """Overlap of each test reference with a train corpus, read once.

    Per test id: `coverage` = share of its word n-grams that occur in some train text (None for
    references shorter than n words); `exact` = its whole normalized text is a train text; `jaccard` =
    the best MinHash estimate among its LSH candidates, with the train text (`match`, its index in the
    stream as `match_index`). `exact` and `jaccard` need at least `min_words` words: shorter references
    (نعم, شكرا جزيلا) match anything. `flags` lists "exact", "ngram" (coverage >= `coverage`) and
    "near_dup" (jaccard >= `jaccard`). 32 bands of 4 rows find pairs at Jaccard 0.7 with probability
    0.9998 and at 0.3 with 0.23; candidates are then checked on the full signature.
    """
    norm = get_text_normalizer(lang, "L1m", markup)
    words = {str(i): norm.tokens(t) for i, t in test.items()}
    grams = {i: {tuple(w[k:k + n]) for k in range(len(w) - n + 1)} for i, w in words.items()}
    wanted = set().union(*grams.values())
    whole: dict[str, list[str]] = defaultdict(list)
    hasher, lsh = MinHasher(num_perm, shingle, seed), _LSH(num_perm, bands)
    sigs = {}
    for i, w in words.items():
        if len(w) >= min_words:
            joined = " ".join(w)
            whole[joined].append(i)
            sigs[i] = hasher.signature(joined)
            lsh.add(i, sigs[i])
    seen: set[tuple[str, ...]] = set()
    exact: set[str] = set()
    best: dict[str, tuple[float, int, str]] = {}
    for t_idx, text in enumerate(train):
        tw = norm.tokens(text)
        if not tw:
            continue
        joined = " ".join(tw)
        exact.update(whole.get(joined, ()))
        if wanted and len(tw) >= n:
            seen.update(g for g in (tuple(tw[k:k + n]) for k in range(len(tw) - n + 1)) if g in wanted)
        if sigs:
            sig = hasher.signature(joined)
            for i in lsh.query(sig):
                j = hasher.jaccard(sigs[i], sig)
                if j > best.get(i, (0.0,))[0]:
                    best[i] = (j, t_idx, text)
    out = {}
    for i, w in words.items():
        cov = len(grams[i] & seen) / len(grams[i]) if grams[i] else None
        j, m_idx, m_text = best.get(i, (None, None, None))
        hits = {"exact": i in exact, "ngram": cov is not None and cov >= coverage,
                "near_dup": j is not None and j >= jaccard}
        out[i] = {"words": len(w), "ngrams": len(grams[i]), "coverage": cov, "exact": i in exact,
                  "jaccard": j, "match_index": m_idx, "match": m_text,
                  "flags": [k for k, hit in hits.items() if hit]}
    return out


def overlap_summary(report: Mapping[str, dict]) -> dict:
    """Counts and shares per flag over a `text_overlap` report (n-gram share over testable references)."""
    n = len(report)
    testable = sum(r["coverage"] is not None for r in report.values())
    count = {f: sum(f in r["flags"] for r in report.values()) for f in ("exact", "ngram", "near_dup")}
    flagged = sum(bool(r["flags"]) for r in report.values())
    share = {f: c / n if n else None for f, c in (*count.items(), ("any", flagged))}
    share["ngram_of_testable"] = count["ngram"] / testable if testable else None
    return {"n": n, "ngram_testable": testable, **count, "any": flagged, "share": share}


def id_overlap(items: Iterable[dict], train: Mapping[str, str] | Iterable[str], *,
               key: str | Callable[[dict], object], lang: str = "ar", markup=None) -> dict:
    """Test items whose ID occurs in a train split.

    key: a field of the item or of its meta, or a function of the item (Casablanca against NADI-2026
    train, whose ids repeat across countries:
    `lambda it: f"{it['meta']['source_config']}/{it['meta']['seg_id']}"`).
    With `train` as {id: transcript}, matched items whose L1m reference equals the train transcript are
    counted as `same_text` (same ID and same words: the same segment).
    """
    def get(it: dict):
        return key(it) if callable(key) else it.get(key, (it.get("meta") or {}).get(key))

    texts = {str(k): v for k, v in train.items()} if isinstance(train, Mapping) else None
    train_ids = set(texts) if texts is not None else {str(t) for t in train}
    norm = get_text_normalizer(lang, "L1m", markup) if texts is not None else None
    n, matched, same = 0, [], 0
    for it in items:
        n += 1
        v = get(it)
        if v is None or str(v) not in train_ids:
            continue
        matched.append(str(it["id"]))
        if norm is not None and norm(it.get("ref") or "") == norm(texts[str(v)] or ""):
            same += 1
    out = {"n": n, "matched": len(matched), "share": len(matched) / n if n else None, "ids": matched}
    if norm is not None:
        out["same_text"] = same
    return out


def residual_screen(wer: Mapping[str, Mapping[str, float]], clean: Mapping[str, Iterable[str]], *,
                    reference_sets: Sequence[str], z_threshold: float = -2.5, min_fit: int = 5,
                    corpus_of: Callable[[str], str] = _corpus, min_wer: float = 0.005) -> list[dict]:
    """ConStat-style screen: is a model much better on a set than its general ability predicts?

    wer: {model: {set key: WER}}; clean: {model: corpora it is known or claims to be clean on}
    (`corpus_of` maps a set key such as "sada/telephony" to its corpus). For every set outside
    `reference_sets` and every model, log WER is predicted from the model's mean log WER over the
    reference sets by a line fitted on the *other* models clean on both the set and the reference sets
    (leave one model out, so a model never predicts itself). z = residual / prediction standard error;
    cells with z <= z_threshold are flagged. A flagged cell on a set the model claims to be clean on
    (`claimed_clean`) is a reason to probe it; on its in-domain sets it is the expected sign. A model
    not clean on the reference sets (`reference_clean` false) is predicted too well, which hides
    contamination: its z is conservative. Returns every scored cell, most negative z first.
    """
    logw = {m: {k: math.log(max(v, min_wer)) for k, v in row.items() if v is not None}
            for m, row in wer.items()}
    clean_c = {m: set(clean.get(m, ())) for m in wer}
    refs = list(reference_sets)
    x = {m: float(np.mean([logw[m][r] for r in refs])) for m in logw if all(r in logw[m] for r in refs)}
    ref_clean = {m for m in x if all(corpus_of(r) in clean_c[m] for r in refs)}
    cells = []
    for s in sorted({k for row in logw.values() for k in row} - set(refs)):
        pool = [m for m in sorted(ref_clean) if s in logw[m] and corpus_of(s) in clean_c[m]]
        for m in sorted(x):
            if s not in logw[m]:
                continue
            fit = [o for o in pool if o != m]
            if len(fit) < max(min_fit, 3):
                continue
            X = np.array([[1.0, x[o]] for o in fit])
            y = np.array([logw[o][s] for o in fit])
            coef, *_ = np.linalg.lstsq(X, y, rcond=None)
            sd = math.sqrt(float(np.sum((y - X @ coef) ** 2)) / (len(fit) - 2))
            x0 = np.array([1.0, x[m]])
            se = sd * math.sqrt(1.0 + float(x0 @ np.linalg.pinv(X.T @ X) @ x0))
            if se == 0:
                continue
            pred = float(x0 @ coef)
            z = (logw[m][s] - pred) / se
            cells.append({"model": m, "set": s, "z": round(z, 2), "wer": wer[m][s],
                          "predicted": round(math.exp(pred), 4), "claimed_clean": corpus_of(s) in clean_c[m],
                          "reference_clean": m in ref_clean, "n_fit": len(fit), "flag": z <= z_threshold})
    return sorted(cells, key=lambda c: c["z"])


def exposure(in_domain: Mapping[str, Iterable[str]], weights: Mapping[str, float], *,
             corpus_of: Callable[[str], str] = _corpus) -> dict[str, dict]:
    """Per model, the share of the Arena weight on sets whose corpus it trained on (registry `in_domain`).

    weights: {set key: weight}, e.g. `sttarena.leaderboard.set_weights(suite)` (normalized here).
    """
    total = sum(weights.values())
    out = {}
    for m, corpora in in_domain.items():
        dom = set(corpora)
        cells = sorted(k for k in weights if corpus_of(k) in dom)
        share = sum(weights[k] for k in cells) / total if total else 0.0
        out[m] = {"exposure": round(share, 4), "zero_shot_share": round(1 - share, 4),
                  "in_domain_sets": cells}
    return out
