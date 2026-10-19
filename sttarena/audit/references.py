"""Reference audit for one set: flag references that are likely wrong, unscorable, or a special slice.

A WER is only as good as its references, and the measured problems of our sets are in the data:

* corpus markup scored as words: 4.8 % of MGB-3 reference words, 7.2 % of MGB-5, 0.6 % of SADA; 74
  of our MGB-5 rows are nothing but tags (@@@فراغ) that v1 scores as one-word references, so a model
  that correctly outputs nothing gets 100 % WER on them;
* the same speech scored twice: our v1 MGB-5 rows come from four annotators' segmentations of the
  same 14 recordings, and 451 of the 1,000 have more than half of their audio in other rows (492 by
  the per-pair rule "overlap > 50 % of the shorter segment", which also flags a long row holding a
  short one); 67 % of the FLEURS rows share their sentence with another row;
* impossible speaking rates: a 2.3 s FLEURS clip with a 33-word reference; SADA references that
  transcribe drum beats (دوم دوم تتك, 25 words for 15 s of music);
* wrong references: when strong models agree with each other and not with the reference, the
  reference is the likely culprit (a unanimous 4-model panel had 93 % precision on VoxPopuli);
* Qur'anic verses (5.5 % of CV18, 2.2 % of MASC-clean): the most memorized Arabic text, which
  decoders can complete from the text prior; a slice to report separately, not an error.

Flags are candidates for a human, never edits. Corrections a human approves become the set's errata
(`build_errata` / `write_errata`, the configs/fixes/*.json format the build applies). Flagged items are
a biased sample, so the reference error rate is estimated on a random sample drawn blind to the flags
and to the models (`audit_sample`, `reference_error_rate`).
"""

from __future__ import annotations

import json
from bisect import bisect_left
from collections import Counter, defaultdict
from dataclasses import asdict, dataclass
from itertools import combinations
from pathlib import Path
from typing import Callable, Iterable, Mapping, Sequence

import numpy as np
import regex as re

from ..normalizers import get_text_normalizer
from ..normalizers.markup import LAUGHTER, PATTERNS, MarkupSpec
from ..stats import wilson
from ._common import ProfileView
from .contamination import text_overlap

REASONS = {
    "empty_ref": "nothing left after L1m normalization: excluded from WER, belongs in the non-speech set",
    "tag_only": "only corpus markup: v1 and L1 score the tags as reference words",
    "filler_only": "only fillers and interjections: empty at L2",
    "markup_leak": "corpus markup in the raw reference (scored as words by v1 and L1)",
    "rate_high": "more words or characters per second than speech holds",
    "rate_low": "far fewer words per second than speech: silence, music or a truncated reference",
    "duplicate_ref": "same normalized reference as other items",
    "overlap": "audio mostly covered by other segments of the same recording",
    "consensus_disagreement": "strong models agree with each other but not with the reference",
    "quranic": "Qur'anic verse: memorized by decoders, report as a slice",
}

# Qur'anic annotation marks (small high ligatures, end of ayah, sajdah ...): only Qur'an text carries them
_QURAN_MARKS = re.compile(r"[\u06D6-\u06ED]")
# Very common verse openings, matched on L1 words without alef (the v1 normalizer drops the dagger alef of
# العٰلمين). Several are also everyday formulas (بسم الله الرحمن الرحيم, إنا لله وإنا إليه راجعون): the
# flag marks text a decoder can complete from memory, not necessarily recitation.
QURAN_OPENINGS = (
    "بسم الله الرحمن الرحيم", "الحمد لله رب العالمين", "مالك يوم الدين", "إياك نعبد وإياك نستعين",
    "اهدنا الصراط المستقيم", "قل هو الله أحد", "قل أعوذ برب الفلق", "قل أعوذ برب الناس",
    "الله لا إله إلا هو الحي القيوم", "يا أيها الذين آمنوا", "إنا أنزلناه في ليلة القدر",
    "إنا أعطيناك الكوثر", "ذلك الكتاب لا ريب فيه", "إنا لله وإنا إليه راجعون",
    "إن الله وملائكته يصلون على النبي", "ربنا آتنا في الدنيا حسنة", "حسبنا الله ونعم الوكيل",
    "لا يكلف الله نفسا إلا وسعها", "إن مع العسر يسرا", "اقرأ باسم ربك الذي خلق", "تبارك الذي بيده الملك",
    "إذا جاء نصر الله والفتح", "إن الإنسان لفي خسر", "سبح اسم ربك الأعلى", "وما أرسلناك إلا رحمة للعالمين",
    "إن الله مع الصابرين",
)


@dataclass(frozen=True)
class Thresholds:
    """Flag thresholds; the defaults follow the research audit (06-integrity F4)."""

    rate_z: float = 3.5  # robust z (median ± rate_z · 1.4826 · MAD) on words/s and chars/s
    max_wps: float = 6.0  # faster than any read speech
    min_wps: float = 0.3  # for clips of at least min_rate_duration
    min_rate_duration: float = 3.0  # short clips with few words are normal
    dup_min_words: int = 3  # shorter identical references (نعم, شكرا) are not duplicates
    overlap: float = 0.5  # share of a segment's duration covered by other segments of its recording
    min_agree: int = 3  # consensus: at least this many panel models,
    agree_wer: float = 0.15  # pairwise within this L2sp WER of each other (errors / shorter hypothesis),
    ref_wer: float = 0.4  # and each at least this far from the reference
    panel_max_wer: float | None = None  # drop panel models whose set-level L2sp WER is above this


@dataclass(frozen=True)
class Flag:
    id: str
    reason: str  # a key of REASONS
    evidence: dict


@dataclass
class ReferenceAudit:
    n_items: int
    flags: list[Flag]

    def ids(self, reason: str | None = None) -> list[str]:
        """Flagged item ids (for one reason, or for any), in item order."""
        return list(dict.fromkeys(f.id for f in self.flags if reason is None or f.reason == reason))

    def summary(self) -> dict:
        counts = Counter(f.reason for f in self.flags)
        n = self.n_items or 1
        reasons = {r: {"items": counts[r], "share": round(counts[r] / n, 4)} for r in REASONS if counts[r]}
        return {"n_items": self.n_items, "flagged": len(self.ids()), "reasons": reasons}

    def to_dict(self) -> dict:
        return {"summary": self.summary(), "flags": [asdict(f) for f in self.flags]}


def meta_segment(item: dict) -> tuple[str, float, float] | None:
    """(recording, start, end) from the item's meta fields `recording`, `start`, `end` (seconds)."""
    m = item.get("meta") or {}
    if m.get("recording") is None or m.get("start") is None or m.get("end") is None:
        return None
    return str(m["recording"]), float(m["start"]), float(m["end"])


def id_segment(field: str, pattern: str) -> Callable[[dict], tuple[str, float, float] | None]:
    """A `segment` function parsing (recording, start, end) out of an id with the named groups rec, start
    and end, read from the item's meta field (or the item's own field) `field`. With the suite's
    multi_annotator spec (MGB-5 `<rec>_annotator_<k>_<start>_<end>`) it finds the duplicated audio."""
    pat = re.compile(pattern)

    def segment(item: dict) -> tuple[str, float, float] | None:
        m = pat.match(str((item.get("meta") or {}).get(field, item.get(field, ""))))
        return (m["rec"], float(m["start"]), float(m["end"])) if m else None

    return segment


# --- text checks -------------------------------------------------------------------------------
def _text_flags(ids, raw, w1, w1m, w2, spec: MarkupSpec) -> list[Flag]:
    flags = []
    for i, text in enumerate(raw):
        if not w1m[i]:
            if w1[i]:
                flags.append(Flag(ids[i], "tag_only", {"raw": text, "l1": " ".join(w1[i])}))
            else:
                flags.append(Flag(ids[i], "empty_ref", {"raw": text}))
        elif not w2[i]:
            flags.append(Flag(ids[i], "filler_only", {"l1m": " ".join(w1m[i])}))
        hits = {name: found for name, (pat, _) in PATTERNS.items()
                if (found := [m.group().strip() for m in pat.finditer(text) if m.group().strip()])}
        laughter = [w for w in w1[i] if LAUGHTER.match(w)]
        if hits or laughter:
            flags.append(Flag(ids[i], "markup_leak", {"patterns": hits, "laughter": laughter,
                                                      "unhandled": sorted(set(hits) - set(spec.names))}))
    return flags


def _quran_flags(ids, raw, w1, l1, quran: Iterable[str] | None, lang: str, markup) -> list[Flag]:
    openings = [(p, " ".join(l1.words(p)).replace("ا", "")) for p in QURAN_OPENINGS]
    cover = {} if quran is None else text_overlap(dict(zip(ids, raw)), quran, n=5, lang=lang, markup=markup)
    flags = []
    for i, text in enumerate(raw):
        ev: dict = {"marks": sorted(set(_QURAN_MARKS.findall(text)))}
        padded = f" {' '.join(w1[i]).replace('ا', '')} "
        ev["phrases"] = [p for p, key in openings if f" {key} " in padded]
        c = cover.get(ids[i])
        if c is not None:
            ev["coverage"] = c["coverage"]
        if ev["marks"] or ev["phrases"] or (c is not None and ("ngram" in c["flags"] or c["exact"])):
            flags.append(Flag(ids[i], "quranic", ev))
    return flags


def _r(x, nd: int = 2) -> float:
    return round(float(x), nd)


def _robust_z(x: np.ndarray) -> np.ndarray:
    med = np.median(x)
    mad = 1.4826 * np.median(np.abs(x - med))
    return (x - med) / mad if mad > 0 else np.zeros_like(x)


def _rate_flags(ids, durations, words, th: Thresholds) -> list[Flag]:
    rows = [(i, len(w), len("".join(w)), float(d))
            for i, (w, d) in enumerate(zip(words, durations)) if w and d]
    if not rows:
        return []
    idx, n_w, n_c, dur = (np.array(c) for c in zip(*rows))
    wps, cps = n_w / dur, n_c / dur
    zw, zc = _robust_z(wps), _robust_z(cps)
    flags = []
    for k, i in enumerate(idx):
        ev = {"duration": _r(dur[k], 3), "words": int(n_w[k]), "chars": int(n_c[k]), "wps": _r(wps[k]),
              "cps": _r(cps[k]), "z_wps": _r(zw[k]), "z_cps": _r(zc[k]), "median_wps": _r(np.median(wps)),
              "median_cps": _r(np.median(cps))}
        if max(zw[k], zc[k]) > th.rate_z or wps[k] > th.max_wps:
            flags.append(Flag(ids[i], "rate_high", ev))
        elif dur[k] >= th.min_rate_duration and (min(zw[k], zc[k]) < -th.rate_z or wps[k] < th.min_wps):
            flags.append(Flag(ids[i], "rate_low", ev))
    return flags


def _duplicate_flags(ids, words, min_words: int) -> list[Flag]:
    groups: dict[str, list[int]] = defaultdict(list)
    for i, w in enumerate(words):
        if len(w) >= min_words:
            groups[" ".join(w)].append(i)
    return [Flag(ids[i], "duplicate_ref", {"text": text, "others": [ids[j] for j in members if j != i]})
            for text, members in groups.items() if len(members) > 1 for i in members]


def _covered(intervals: list[tuple[float, float]]) -> float:
    total, end = 0.0, float("-inf")
    for s, e in sorted(intervals):
        if e > end:
            total += e - max(s, end)
            end = e
    return total


def _overlap_flags(items, ids, segment, threshold: float) -> list[Flag]:
    by_rec: dict[str, list[tuple[float, float, int]]] = defaultdict(list)
    for i, it in enumerate(items):
        seg = segment(it)
        if seg and seg[2] > seg[1]:
            by_rec[seg[0]].append((seg[1], seg[2], i))
    flags = []
    for rec, segs in by_rec.items():
        segs.sort()
        starts = [s for s, _, _ in segs]
        longest = max(e - s for s, e, _ in segs)
        for s, e, i in segs:
            near = segs[bisect_left(starts, s - longest):bisect_left(starts, e)]
            parts = [(j, max(s, s2), min(e, e2)) for s2, e2, j in near if j != i and min(e, e2) > max(s, s2)]
            share = _covered([(a, b) for _, a, b in parts]) / (e - s)
            if share > threshold:
                ev = {"recording": rec, "start": s, "end": e, "covered": _r(share, 3),
                      "with": [ids[j] for j, _, _ in parts]}
                flags.append(Flag(ids[i], "overlap", ev))
    return flags


# --- model consensus ---------------------------------------------------------------------------
def _max_clique(nodes: list[str], adj: dict[str, set[str]]) -> list[str]:
    """Largest set of pairwise-adjacent nodes (Bron–Kerbosch with pivoting; deterministic)."""
    best: list[str] = []

    def expand(r: list[str], p: set[str], x: set[str]) -> None:
        nonlocal best
        if not p and not x:
            if len(r) > len(best):
                best = r
            return
        if len(r) + len(p) <= len(best):
            return
        pivot = max(sorted(p | x), key=lambda v: len(adj[v] & p))
        for v in sorted(p - adj[pivot]):
            expand(r + [v], p & adj[v], x & adj[v])
            p, x = p - {v}, x | {v}

    expand([], set(nodes), set())
    return sorted(best)


def _consensus_flags(ids, raw, hyps, models: list[str], view: ProfileView, th: Thresholds) -> list[Flag]:
    refs = {i: r for i, r in ((i, view.prepare(t)) for i, t in enumerate(raw)) if r.words}
    scored: dict[str, dict[int, tuple]] = {}
    for m in models:
        out = {}
        for i, r in refs.items():
            if (h := hyps[m].get(ids[i])) is not None:
                t = view.prepare(h)
                out[i] = (t, view.errors(r, t))
        scored[m] = out
    if th.panel_max_wer is not None:
        def set_wer(m: str) -> float:
            n = sum(len(refs[i].words) for i in scored[m])
            return sum(e for _, e in scored[m].values()) / n if n else float("inf")
        models = [m for m in models if set_wer(m) <= th.panel_max_wer]
    flags = []
    for i, r in refs.items():
        n = len(r.words)
        usable = {m: scored[m][i] for m in models if i in scored[m] and scored[m][i][0].words}
        far = sorted(m for m, (_, e) in usable.items() if e / n >= th.ref_wer)
        if len(far) < th.min_agree:
            continue
        d = {}
        for a, b in combinations(far, 2):
            ta, tb = usable[a][0], usable[b][0]
            d[a, b] = d[b, a] = view.errors(ta, tb) / min(len(ta.words), len(tb.words))
        clique = _max_clique(far, {m: {o for o in far if o != m and d[m, o] <= th.agree_wer} for m in far})
        if len(clique) < th.min_agree:
            continue
        medoid = min(clique, key=lambda m: (sum(d[m, o] for o in clique if o != m), m))
        flags.append(Flag(ids[i], "consensus_disagreement", {
            "suggestion": hyps[medoid][ids[i]], "medoid": medoid, "models": clique,
            "ref_wer": {m: round(usable[m][1] / n, 3) for m in clique},
            "max_pair_wer": _r(max(d[a, b] for a, b in combinations(clique, 2)), 3),
            "support": sorted(m for m, (_, e) in usable.items() if e / n < th.ref_wer),
            "panel_size": len(usable)}))
    return flags


def audit_references(items: Iterable[dict], hyps: Mapping[str, Mapping[str, str]] | None = None, *,
                     exclude: Iterable[str] = (), panel: Iterable[str] | None = None, lang: str = "ar",
                     markup=None, thresholds: Thresholds = Thresholds(),
                     segment: Callable[[dict], tuple[str, float, float] | None] = meta_segment,
                     quran: Iterable[str] | None = None) -> ReferenceAudit:
    """Flags for every item of one set.

    items: {"id", "ref", "duration" (s, optional), "meta" (dict, optional)}. hyps: {model: {id:
    hypothesis}} from any number of models; the consensus panel is `panel` (default: every model in
    `hyps`) minus `exclude`. Exclude the models trained on this corpus (registry `in_domain`): they can
    reproduce the reference's own errors and conventions. Pick the panel for family diversity (CTC,
    encoder-decoder, LLM decoder, API), not by WER against the references being audited. `markup` is
    the set's markup spec, as in the scorer. Overlapping segments need `segment(item)` -> (recording,
    start, end); the default reads meta fields recording/start/end (`id_segment` parses ids such as
    MGB-5's). Qur'anic references are found from annotation marks and common verse openings; with
    `quran` (the verse texts, e.g. tanzil) also by 5-gram coverage >= 0.7 or an exact verse: 65 of
    CV18's 1,000 references, where marks and openings alone find 5.
    """
    items = list(items)
    ids = [str(it["id"]) for it in items]
    if len(set(ids)) != len(ids):
        raise ValueError("item ids must be unique")
    raw = [it.get("ref") or "" for it in items]
    l1, l1m, l2 = (get_text_normalizer(lang, level, markup) for level in ("L1", "L1m", "L2"))
    w1, w1m, w2 = ([n.words(t) for t in raw] for n in (l1, l1m, l2))
    flags = _text_flags(ids, raw, w1, w1m, w2, MarkupSpec.parse(markup))
    flags += _quran_flags(ids, raw, w1, l1, quran, lang, markup)
    flags += _rate_flags(ids, [it.get("duration") for it in items], w1m, thresholds)
    flags += _duplicate_flags(ids, w1m, thresholds.dup_min_words)
    flags += _overlap_flags(items, ids, segment, thresholds.overlap)
    if hyps:
        models = sorted(set(hyps if panel is None else panel) - set(exclude))
        missing = [m for m in models if m not in hyps]
        if missing:
            raise ValueError(f"panel models without hypotheses: {missing}")
        flags += _consensus_flags(ids, raw, hyps, models, ProfileView("L2sp", lang, markup), thresholds)
    order, rank = {i: k for k, i in enumerate(ids)}, {r: k for k, r in enumerate(REASONS)}
    return ReferenceAudit(len(items), sorted(flags, key=lambda f: (order[f.id], rank[f.reason])))


# --- blind random audit ------------------------------------------------------------------------
def audit_sample(items: Sequence[dict], n_random: int = 200, *, flagged: Iterable[str] = (), seed: int = 0,
                 cluster: Callable[[dict], object] | None = None) -> list[dict]:
    """An adjudication worklist: a random sample of the set plus the flagged ids, shuffled together.

    The random part is drawn before and independently of any flag, so its error rate is an unbiased
    estimate of the set's (flagged items alone over-state it). It is a systematic sample with a random
    start over the items ordered by `cluster(item)` (speaker, video ...) and at random within a
    cluster, so every item has the same inclusion probability and clusters get proportional shares.
    Show annotators only the id and the audio, never `random` / `flagged`, the flags or model outputs.
    """
    rng = np.random.default_rng(seed)
    ids = [str(it["id"]) for it in items]
    flagged = set(flagged)
    unknown = sorted(flagged - set(ids))
    if unknown:
        raise ValueError(f"flagged ids not in items: {unknown[:5]}")
    keys = rng.random(len(ids))
    order = sorted(range(len(ids)), key=lambda i: (str(cluster(items[i])) if cluster else "", keys[i]))
    n = min(n_random, len(ids))
    step = len(ids) / n if n else 0.0
    start = rng.random() * step
    picked = {ids[order[int(start + k * step)]] for k in range(n)}
    tasks = sorted(picked | flagged)
    rng.shuffle(tasks)
    return [{"id": i, "random": i in picked, "flagged": i in flagged} for i in tasks]


def reference_error_rate(sample: Iterable[dict], judgements: Mapping[str, bool]) -> dict:
    """Share of references with at least one error, with a Wilson 95 % interval, from the random part of
    an `audit_sample` worklist (judgements: id -> True if the adjudicated reference is wrong)."""
    random_ids = [t["id"] for t in sample if t["random"]]
    judged = [bool(judgements[i]) for i in random_ids if i in judgements]
    k, n = sum(judged), len(judged)
    return {"n": n, "errors": k, "rer_utt": k / n if n else None, "ci95": wilson(k, n),
            "pending": len(random_ids) - n}


# --- errata -----------------------------------------------------------------------------------------
def build_errata(decisions: Mapping[str, bool | str | None], items: Iterable[dict], *, key: str, source: str,
                 reason: str, candidates: Iterable[Flag] = ()) -> dict:
    """Errata in the configs/fixes format ({"key", "source", "reason", "texts"}) from adjudicated items.

    decisions: item id -> True (accept the candidate flag's suggested correction), a corrected text
    (the annotator's own), or False / None (the reference stands). `key` is the meta field the build
    keys text fixes on (segment_id for MGB-2); every corrected item must have it.
    """
    suggested = {f.id: f.evidence["suggestion"] for f in candidates if "suggestion" in f.evidence}
    meta = {str(it["id"]): it.get("meta") or {} for it in items}
    texts: dict[str, str] = {}
    for item_id, d in decisions.items():
        if d is True:
            if item_id not in suggested:
                raise ValueError(f"{item_id}: accepted, but no candidate suggests a correction")
            text = suggested[item_id]
        elif isinstance(d, str):
            text = d
        else:
            continue
        if meta.get(item_id, {}).get(key) is None:
            raise ValueError(f"{item_id}: no meta field {key!r} to key the fix on")
        k, text = str(meta[item_id][key]), " ".join(text.split())
        if texts.setdefault(k, text) != text:
            raise ValueError(f"{key}={k}: conflicting corrections")
    return {"key": key, "source": source, "reason": reason, "texts": texts}


def write_errata(path: str | Path, errata: dict) -> dict:
    """Write errata, merged into the file at `path` if it exists (same key; a new text wins for a
    key fixed twice, and source/reason are joined). Returns what was written."""
    path = Path(path)
    if path.exists():
        old = json.loads(path.read_text(encoding="utf-8"))
        if old["key"] != errata["key"]:
            raise ValueError(f"{path} keys fixes on {old['key']!r}, not {errata['key']!r}")
        joined = {f: "; ".join(dict.fromkeys(x for x in (old.get(f), errata.get(f)) if x))
                  for f in ("source", "reason")}
        errata = {"key": old["key"], **joined, "texts": {**old["texts"], **errata["texts"]}}
    path.write_text(json.dumps(errata, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    return errata
