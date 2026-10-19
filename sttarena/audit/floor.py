"""Human disagreement floor: how far apart independent transcribers of the same audio are, scored like models.

Dialect Arabic has no standard orthography, so a second careful transcriber does not reproduce the
reference. On MGB-3 Egyptian (2,467 test segments, four annotators) the 12 ordered annotator pairs
disagree on 13.2 % of words under the v1 normalizer (7.8–16.4 % by pair), 8.6 % at L2 and 7.0 % at
L2sp; scored against the other three at once (multi-reference WER) an annotator gets 5.7 % at v1 and
3.5 % at L2. On MGB-5 Moroccan the annotators disagree on 45.9 % of words, and the best model scores
46.6 %: a set whose floor is at the models' level cannot rank them. Publishing the floor next to the
model scores gives each set's headroom.

* **pairwise**: annotator b scored as a hypothesis against annotator a, corpus WER over the
  utterances where a's transcription is not empty after normalization, for every ordered pair (a, b);
  the mean, min and max over pairs, and CER without spaces (CER_ns).
* **one-vs-rest**: each annotator against all the others, as a model is scored on a multi-reference
  set. MR-WER: confusion network of the other transcriptions, mean reference length as the
  denominator (`sttarena.align.align_multi`); like the scorer it aligns without merges, so L2 and
  L2sp give the same MR-WER. AV-WER: the mean of the annotator's single-reference WERs (the pairwise
  WERs with it as the hypothesis, merges included for the sp profiles).

Every profile normalizes and aligns exactly as `sttarena.scoring.Scorer` does, so a floor and a model
score on the same set are comparable. WERs are uncapped corpus WERs (sum of errors over sum of
reference words); the per-utterance cap of the Arena WER changes the MGB-3 floor by < 0.01 point.
MR-WER depends on how the transcriptions are aligned to each other, since equal-cost paths put words
in different slots: on the same MGB-3 words the research prototype's network gave 5.77 % at v1.
"""

from __future__ import annotations

from itertools import permutations
from typing import Iterable, Mapping, Sequence

from ..align import Tokens, align_multi
from ..normalizers import NORMALIZER_VERSION
from ..scoring import SCORING_VERSION
from ._common import ProfileView

FLOOR_PROFILES = ("v1", "L1", "L1m", "L2", "L2sp", "L3sp")


def _annotations(u: Mapping[str, str | None] | Sequence[str | None]) -> dict[str, str]:
    """{annotator: text}; a sequence is numbered from 1 and None means "not transcribed"."""
    if isinstance(u, str):
        raise TypeError("an utterance is a list or mapping of transcriptions, not a string")
    pairs = u.items() if isinstance(u, Mapping) else enumerate(u, 1)
    return {str(a): t for a, t in pairs if t is not None}


def _natural(a: str) -> tuple:
    return (0, int(a), "") if a.isdigit() else (1, 0, a)


def _mean(xs: list[float]) -> float | None:
    return sum(xs) / len(xs) if xs else None


def _profile_floor(view: ProfileView, utts: list[dict[str, Tokens]], annotators: list[str]) -> dict:
    pairs = {}
    for a, b in permutations(annotators, 2):
        e = n = ce = nc = cnt = 0
        for u in utts:
            if a not in u or b not in u or not u[a].words:
                continue
            e += view.errors(u[a], u[b])
            n += len(u[a].words)
            c, m = view.char_errors(u[a], u[b])
            ce, nc, cnt = ce + c, nc + m, cnt + 1
        if n:
            pairs[f"{a}>{b}"] = {"wer": e / n, "cer_ns": ce / nc, "n_words": n, "n_utterances": cnt}
    ovr = {}
    for k in annotators:
        e = n = cnt = 0
        for u in utts:
            if k not in u:
                continue
            refs = [u[o].words for o in annotators if o != k and o in u and u[o].words]
            if not refs:
                continue
            al = align_multi(refs, u[k].words)
            e, n, cnt = e + al.errors, n + al.n_ref, cnt + 1
        av = _mean([pairs[f"{o}>{k}"]["wer"] for o in annotators if f"{o}>{k}" in pairs])
        if n:
            ovr[k] = {"mr_wer": e / n, "av_wer": av, "n_utterances": cnt}
    wers, cers = [p["wer"] for p in pairs.values()], [p["cer_ns"] for p in pairs.values()]
    return {
        "pairwise": {"wer": _mean(wers), "wer_min": min(wers, default=None),
                     "wer_max": max(wers, default=None), "cer_ns": _mean(cers), "pairs": pairs},
        "one_vs_rest": {"mr_wer": _mean([v["mr_wer"] for v in ovr.values()]),
                        "av_wer": _mean([v["av_wer"] for v in ovr.values() if v["av_wer"] is not None]),
                        "annotators": ovr},
    }


def human_floor(utterances: Iterable[Mapping[str, str | None] | Sequence[str | None]],
                profiles: Sequence[str] = FLOOR_PROFILES, *, lang: str = "ar", markup=None,
                max_merge: int = 3) -> dict:
    """Inter-annotator floor of utterances with two or more independent transcriptions.

    Each utterance is a sequence of transcriptions (annotator k = position k, from 1) or a mapping
    {annotator: transcription}; None marks an annotator who did not transcribe it, "" one who heard
    nothing. Utterances with fewer than two transcriptions are skipped. MGB-3:
    `human_floor([[r[f"text_annotater_{k}"] for k in range(1, 5)] for r in rows])`.

    Returns {"n_utterances", "annotators", "config", "profiles": {profile: {"pairwise": {wer, wer_min,
    wer_max, cer_ns, pairs: {"a>b": {wer, cer_ns, n_words, n_utterances}}}, "one_vs_rest": {mr_wer, av_wer,
    annotators: {a: {mr_wer, av_wer, n_utterances}}}}}}; "a>b" is annotator a as the reference.
    """
    utts = [u for u in map(_annotations, utterances) if len(u) >= 2]
    annotators = sorted({a for u in utts for a in u}, key=_natural)
    out = {"n_utterances": len(utts), "annotators": annotators, "profiles": {},
           "config": {"lang": lang, "markup": markup, "max_merge": max_merge,
                      "normalizer_version": NORMALIZER_VERSION, "scoring_version": SCORING_VERSION}}
    for name in profiles:
        view = ProfileView(name, lang, markup, max_merge)
        prepared = [{a: view.prepare(t) for a, t in u.items()} for u in utts]
        out["profiles"][name] = _profile_floor(view, prepared, annotators)
    return out


def _pct(x: float | None) -> str:
    return "—" if x is None else f"{100 * x:.2f}"


def floor_table(floor: dict) -> str:
    """The floor as a Markdown table (one row per profile), with a short legend."""
    head = ["Profile", "Pairwise WER mean [min–max]", "Pairwise CER_ns", "One-vs-rest MR-WER",
            "One-vs-rest AV-WER"]
    lines = ["| " + " | ".join(head) + " |", "|" + "---|" * len(head)]
    for name, p in floor["profiles"].items():
        pw, ovr = p["pairwise"], p["one_vs_rest"]
        lines.append(f"| {name} | {_pct(pw['wer'])} [{_pct(pw['wer_min'])}–{_pct(pw['wer_max'])}] | "
                     f"{_pct(pw['cer_ns'])} | {_pct(ovr['mr_wer'])} | {_pct(ovr['av_wer'])} |")
    k = len(floor["annotators"])
    lines += ["", f"WER/CER in %, {floor['n_utterances']:,} utterances, {k} annotators "
              f"({k * (k - 1)} ordered pairs). Pairwise: one annotator scored against another, mean over "
              "ordered pairs. One-vs-rest: each annotator against all the others (MR-WER: confusion network, "
              "mean reference length as denominator; AV-WER: mean of its single-reference WERs)."]
    return "\n".join(lines)
