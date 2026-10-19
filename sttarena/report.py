"""Reports for scored sets: the numbers next to the evidence they come from.

A WER is only trustworthy when a reader can see what produced it, so every report puts the
headline next to strict and v1 WER, error-type shares and hallucination diagnostics, and then shows
the worst utterances aligned word by word and the most frequent confusions.

* `summary_json`, `write_json`   ``SetScore.summary()`` plus run metadata (inputs, sha256, id issues)
* `write_utterances`             one JSON record per utterance (counts per profile, alignment ops)
* `to_markdown`, `to_html`       the full report; the HTML is a single self-contained file (inline CSS
                                 and JS, no external assets), Arabic cells right-to-left, light/dark,
                                 sortable tables
* `compare_markdown`             several systems on one set, side by side
* `text_summary`                 the compact table the CLI prints

Utterance records keep only the non-correct alignment ops; `alignment` rebuilds the full word
alignment from them and the normalized texts, so a report can be rendered again from a saved
per-utterance JSONL file without re-scoring.
"""

from __future__ import annotations

import html
import json
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Mapping, NamedTuple, Sequence

import regex as re

from .scoring import SetScore

PROFILE_NOTES = {
    "v1": "previous arena scorer", "L0": "raw text", "L1": "strict", "L1m": "strict + corpus markup",
    "L2": "dialect-lenient", "L2sp": "dialect-lenient + space-insensitive", "L3": "consonant skeleton",
    "L3sp": "consonant skeleton + space-insensitive",
}
HALLUCINATION_ROWS = [  # rates in SetScore.summary()["hallucination"]
    ("loop_rate", "Loops: an n-gram repeated ≥ 4 times in a row"),
    ("burst_rate", "Insertion bursts: ≥ 5 inserted words in a row (≥ 3 for references of ≤ 5 words)"),
    ("long_output_rate", "Over-long outputs: > 2× the reference characters"),
    ("overgeneration_rate", "Over-generation: more than 2× the reference words + 5"),
    ("collapse_rate", "Collapse: under 20 % of the reference words (references of ≥ 5 words)"),
    ("trailing_insert_rate", "≥ 3 words inserted after the last reference word"),
    ("empty_output_rate", "Empty outputs"),
    ("failure_rate", "Failed or missing hypotheses (share of all utterances)"),
    ("wrong_script_rate", "Wrong script: Latin share of the output > reference + 50 points"),
    ("latin_share_ref", "Latin-script words in the reference"),
    ("latin_share_hyp", "Latin-script words in the hypothesis"),
]
CODESWITCH_ROWS = [  # (key, label, is a rate)
    ("latin_ref_words", "Latin-script reference words", False),
    ("wer_latin", "WER on Latin-script words %", True),
    ("dialect_markers", "Dialect markers in the references", False),
    ("marker_retention", "Dialect markers kept %", True),
    ("marker_msa_replacement", "Dialect markers replaced by an MSA equivalent %", True),
]
# config keys that must agree before systems can be compared
_CONFIG_KEYS = ("scoring_version", "normalizer_version", "lang", "headline", "markup", "max_merge")

_ARABIC = re.compile(r"\p{Arabic}")
_LATIN = re.compile(r"\p{Latin}")
_STRONG = re.compile(r"([\p{Arabic}\p{Hebrew}])|\p{L}")
# right-to-left isolate around padded RTL columns, so bidi-aware viewers keep them aligned
_RLI, _PDI = chr(0x2067), chr(0x2069)
_MAX_FRONTIER = 64  # exact op placement gives up on pathological repetitive text (see _fill)


# --- alignment reconstruction ---------------------------------------------------------------------
Col = tuple[str, tuple[str, ...], tuple[str, ...]]


def _fill(R: list[str], H: list[str], ops: list[Col]) -> list[Col] | None:
    """Place the non-correct ops so that everything between them is equal words (single reference).

    Between two ops the offset between reference and hypothesis positions is fixed, so each op can only
    start inside the equal run that follows the previous one; the candidate positions form a small
    frontier in natural text. None when no placement fits, or when the frontier explodes."""
    off = [0]
    for _, r, h in ops:
        off.append(off[-1] + len(h) - len(r))
    if len(R) + off[-1] != len(H):
        return None

    def run(i: int, o: int) -> int:  # length of the equal run R[i:] == H[i + o:]
        k = 0
        while i + k < len(R) and i + k + o < len(H) and R[i + k] == H[i + k + o]:
            k += 1
        return k

    frontier: dict[int, tuple[int, int] | None] = {0: None}  # ref index after op t-1 -> (previous, start)
    back = []
    for t, (_, r, h) in enumerate(ops):
        o, nxt = off[t], {}
        for e in frontier:
            for p in range(e, e + run(e, o) + 1):
                if list(r) == R[p:p + len(r)] and list(h) == H[p + o:p + o + len(h)]:
                    nxt.setdefault(p + len(r), (e, p))
        if not nxt or len(nxt) > _MAX_FRONTIER:
            return None
        back.append(nxt)
        frontier = nxt
    end = next((e for e in frontier if run(e, off[-1]) == len(R) - e), None)
    if end is None:
        return None
    starts = []
    for t in range(len(ops) - 1, -1, -1):
        end, p = back[t][end]
        starts.append(p)
    cols: list[Col] = []
    i = 0
    for t, (p, op) in enumerate(zip(reversed(starts), ops)):
        cols += [("C", (R[q],), (H[q + off[t]],)) for q in range(i, p)]
        cols.append(op)
        i = p + len(op[1])
    return cols + [("C", (R[q],), (H[q + off[-1]],)) for q in range(i, len(R))]


def _fill_hyp(H: list[str], ops: list[Col]) -> list[Col] | None:
    """Only the hypothesis side is known (multi-reference): correct words are hypothesis words, and an op
    without hypothesis words (a skipped slot) is placed just before the next hypothesis word."""
    cols: list[Col] = []
    pending: list[Col] = []
    j = 0
    for op in ops:
        h = list(op[2])
        if not h:
            pending.append(op)
            continue
        k = next((q for q in range(j, len(H) - len(h) + 1) if H[q:q + len(h)] == h), None)
        if k is None:
            return None
        cols += [("C", (w,), (w,)) for w in H[j:k]] + pending + [op]
        pending, j = [], k + len(h)
    return cols + [("C", (w,), (w,)) for w in H[j:]] + pending


def _multi(rec: dict, headline: str) -> bool:
    return "av_e" in rec.get("scores", {}).get(headline, {})


def alignment(rec: dict, headline: str) -> list[Col] | None:
    """The full headline alignment of an utterance record: (op, reference words, hypothesis words) for
    every column, correct words included. For multi-reference records the reference side of S/D/d
    columns holds the alternatives of the slot. None if the record was scored without ops."""
    if rec.get("ops") is None:
        return None
    R, H = rec.get("ref_norm", "").split(), rec.get("hyp_norm", "").split()
    if not R:
        return [("I", (), (w,)) for w in H]
    ops = [(op, tuple(r.split()), tuple(h.split())) for op, r, h in rec["ops"]]
    if not _multi(rec, headline):
        cols = _fill(R, H, ops)
        if cols is not None:
            return cols
    return _fill_hyp(H, ops)


def _err(w: str) -> str:
    """SCTK convention: an error is UPPER CASE; Arabic has no case, so it is wrapped in «»."""
    return w.upper() if _LATIN.search(w) and not _ARABIC.search(w) else f"«{w}»"


def _cells(cols: list[Col], multi: bool, marked: bool) -> list[tuple[str, str, str]]:
    """(reference cell, hypothesis cell, eval mark) per column; `marked` adds the text-only error marks."""
    out = []
    e = _err if marked else str
    for op, r, h in cols:
        ref, hyp = ("/" if multi else "=").join(r), "=".join(h)
        if op == "C":
            out.append((ref, hyp, ""))
        elif op == "S":
            out.append((e(ref), e(hyp), "S"))
        elif op == "D":
            out.append((e(ref), "***", "D"))
        elif op == "I":
            out.append(("***", e(hyp), "I"))
        elif op == "M":
            out.append((ref, hyp, "="))
        elif op == "d":  # optional reference word, free to skip
            out.append((f"({ref})", "***", ""))
        else:  # "i": free insertion
            out.append(("***", f"({hyp})", ""))
    return out


def _width(s: str) -> int:
    return sum(0 if unicodedata.category(ch) in ("Mn", "Me", "Cf") else
               2 if unicodedata.east_asian_width(ch) in "WF" else 1 for ch in s)


def _rtl(text: str) -> bool:
    m = _STRONG.search(text)
    return bool(m and m.group(1))


def aligned_text(rec: dict, headline: str, width: int = 100, max_cols: int = 400) -> str:
    """SCTK-style REF/HYP/EVAL lines: `***` for a missing word, «word» (Arabic) or UPPER CASE (Latin) for
    an error, `a=b` for a space-insensitive match, `a/b` for reference alternatives; wrapped at `width`."""
    cols = alignment(rec, headline)
    if cols is None:
        return f"REF:  {rec.get('ref_norm', '')}\nHYP:  {rec.get('hyp_norm', '')}"
    cells = _cells(cols, _multi(rec, headline), marked=True)
    note = f"\n(first {max_cols} of {len(cells)} columns)" if len(cells) > max_cols else ""
    cells = cells[:max_cols]
    rtl = _rtl(rec.get("ref_norm", "") + " " + rec.get("hyp_norm", ""))
    widths = [max(map(_width, c)) for c in cells]
    chunks: list[list[int]] = [[]]
    used = 0
    for k, w in enumerate(widths):
        if chunks[-1] and used + w + 1 > width:
            chunks.append([])
            used = 0
        chunks[-1].append(k)
        used += w + 1
    blocks = []
    for chunk in chunks:
        lines = []
        for label, side in (("REF: ", 0), ("HYP: ", 1), ("EVAL:", 2)):
            pads = [" " * (widths[k] - _width(cells[k][side])) for k in chunk]
            if rtl:  # pad on the logical left: trailing spaces would be moved out of the isolate by bidi
                body = " ".join(p + cells[k][side] for p, k in zip(pads, chunk))
                lines.append(f"{label} {_RLI}{body}{_PDI}")
            else:
                lines.append(f"{label} {' '.join(cells[k][side] + p for p, k in zip(pads, chunk))}".rstrip())
        blocks.append("\n".join(lines))
    return "\n\n".join(blocks) + note


# --- what the reports show ---------------------------------------------------------------------------
def _headline(score: SetScore) -> str:
    return score.config.get("headline", "")


def _errors(rec: dict, profile: str) -> int:
    s = rec["scores"].get(profile, {})
    return s.get("S", 0) + s.get("D", 0) + s.get("I", 0)


def worst_utterances(score: SetScore, n: int = 10) -> list[dict]:
    """Utterances with speech ranked by headline errors (their weight in the corpus WER), then by WER."""
    head = _headline(score)
    speech = [r for r in score.utterances if r["scores"].get(head, {}).get("n", 0) > 0 and _errors(r, head)]
    return sorted(speech, key=lambda r: (-_errors(r, head), -_errors(r, head) / r["scores"][head]["n"]))[:n]


def top_errors(score: SetScore, n: int = 15) -> dict[str, list[tuple[int, str, str]]]:
    """Most frequent headline confusions as (count, reference, hypothesis): substitution pairs, deleted
    and inserted words, and the space-insensitive merges that were credited as correct (to audit them)."""
    c: dict[str, Counter] = {k: Counter() for k in ("substitutions", "deletions", "insertions", "merges")}
    for rec in score.utterances:
        for op, r, h in rec.get("ops") or ():
            if op == "S":
                c["substitutions"][(r.replace(" ", "/"), h)] += 1
            elif op == "D":
                c["deletions"][(r.replace(" ", "/"), "")] += 1
            elif op == "I":
                c["insertions"][("", h)] += 1
            elif op == "M":
                c["merges"][(r, h)] += 1
    return {k: [(cnt, r, h) for (r, h), cnt in v.most_common(n)] for k, v in c.items()}


def _flags(rec: dict) -> list[str]:
    """Display hints from the headline diagnostics (the rates themselves come from scoring.py)."""
    d = rec.get("diag", {})
    out = []
    if d.get("failed"):
        out.append("failed / missing hypothesis")
    elif d.get("empty_hyp"):
        out.append("empty output")
    if d.get("rep_hyp", 1) >= 3 and d.get("rep_hyp", 1) > d.get("rep_ref", 1):
        out.append(f"repeats an n-gram {d['rep_hyp']}×")
    if d.get("ins_run", 0) >= 3:
        out.append(f"{d['ins_run']} insertions in a row")
    n_ref = len(rec.get("ref_norm", "").split())
    if n_ref >= 5 and d.get("n_hyp", n_ref) < 0.2 * n_ref and not d.get("empty_hyp"):
        out.append(f"output collapsed to {d['n_hyp']} words")
    if d.get("lat_hyp", 0) - d.get("lat_ref", 0) > 0.5:
        out.append("wrong script")
    return out


def _fmt_n(n: float) -> str:
    return f"{n:g}" if float(n).is_integer() else f"{n:.1f}"


def _plural(n: float, word: str) -> str:
    return f"{_fmt_n(n)} {word}" + ("" if n == 1 else "s")


def _pct_text(x: float | None, digits: int = 2) -> str:
    return "—" if x is None else f"{100 * x:.{digits}f}"


# --- a tiny document model, rendered to Markdown and HTML so both reports carry the same content ------
class Cell(NamedTuple):
    text: str
    num: bool = False
    value: float | None = None
    strong: bool = False


class Table(NamedTuple):
    head: list[str]
    rows: list[list[Cell]]


Runs = list[tuple[str, str]]  # inline (style, text): style "" (plain), "code" or "b"


def _pct(x: float | None, strong: bool = False) -> Cell:
    return Cell(_pct_text(x), True, x, strong)


def _count(x: float | None) -> Cell:
    return Cell("—" if x is None else _fmt_n(x), True, x)


def _runs(x: str | Runs) -> Runs:
    return [("", x)] if isinstance(x, str) else x


def _codes(values: Sequence[str]) -> Runs:
    return [run for j, v in enumerate(values) for run in [("", ", ")] * bool(j) + [("code", str(v))]]


def _scores_table(summ: dict) -> Table:
    head = summ["config"].get("headline")
    profs = summ.get("profiles", {})
    cols = [("WER %", "wer"), ("WER uncapped %", "wer_uncapped"), ("CER no spaces %", "cer_ns"),
            ("Sub %", "sub"), ("Del %", "del"), ("Ins %", "ins"), ("MER %", "mer")]
    if any("av_wer" in a for a in profs.values()):
        cols.append(("AV-WER %", "av_wer"))
    rows = []
    for p, a in profs.items():
        strong = p == head
        label = f"{p} — {PROFILE_NOTES.get(p, p)}" + (" (headline)" if strong else "")
        rows.append([Cell(label, strong=strong), *(_pct(a.get(k), strong) for _, k in cols),
                     _count(a.get("num_utterances")), _count(a.get("num_excluded"))])
    return Table(["Profile", *(c for c, _ in cols), "Utterances", "Excluded"], rows)


def _diag_tables(summ: dict) -> list[Table]:
    """Hallucination rates; code-switching and dialect markers when the set has any; then, so that
    nothing the scorer computes is hidden, every diagnostic this module does not know, as a raw value."""
    h = summ.get("headline", {})
    hall = summ.get("hallucination", {})
    rows = [[Cell("Catastrophic utterances: WER > 100 %"), _pct(h.get("catastrophic_rate"))],
            [Cell("90th-percentile utterance WER"), _pct(h.get("p90_utt_wer"))]]
    rows += [[Cell(label), _pct(hall.get(k))] for k, label in HALLUCINATION_ROWS if k in hall]
    tables = [Table(["Diagnostic (headline alignment, share of utterances with speech)", "%"], rows)]
    if hall.get("latin_ref_words") or hall.get("dialect_markers"):
        tables.append(Table(["Code-switching and dialect markers", "Value"],
                            [[Cell(label), _pct(hall.get(k)) if rate else _count(hall.get(k))]
                             for k, label, rate in CODESWITCH_ROWS if k in hall]))
    known = {k for k, _ in HALLUCINATION_ROWS} | {k for k, _, _ in CODESWITCH_ROWS}
    other = [(k, v) for k, v in hall.items() if k not in known and (v is None or isinstance(v, (int, float)))]
    if other:
        tables.append(Table(["Other diagnostics", "Value"],
                            [[Cell(k), Cell("—" if v is None else f"{v:.4g}", True, v)] for k, v in other]))
    return tables


def _groups_table(groups: dict) -> Table:
    keys = ("wer", "wer_uncapped", "cer_ns", "sub", "del", "ins")
    rows = [[Cell(str(g)), *(_pct(a.get(k)) for k in keys), _count(a.get("num_utterances")),
             _pct(a.get("nonspeech", {}).get("halluc_any"))] for g, a in groups.items()]
    return Table(["Group", "WER %", "WER uncapped %", "CER no spaces %", "Sub %", "Del %", "Ins %",
                  "Utterances", "Output on silence %"], rows)


def _nonspeech_table(ns: dict) -> Table:
    def ci(k):
        lo_hi = ns.get(k)
        return Cell("—" if not lo_hi else f"{lo_hi[0] * 100:.1f}–{lo_hi[1] * 100:.1f}")

    wpm = ns.get("inserted_wpm")
    return Table(["Clips without speech", "Value", "95 % CI"], [
        [Cell("Clips"), _count(ns.get("num_clips")), Cell("")],
        [Cell("Any output %"), _pct(ns.get("halluc_any")), ci("halluc_any_ci")],
        [Cell("≥ 3 words %"), _pct(ns.get("halluc_3plus")), ci("halluc_3plus_ci")],
        [Cell("Inserted words per minute"), Cell("—" if wpm is None else f"{wpm:.2f}", True, wpm), Cell("")],
        [Cell("Looping output %"), _pct(ns.get("loop_share")), Cell("")],
    ])


def _id_items(ids: dict) -> list[Runs]:
    labels = {"missing": "reference ids had no hypothesis (scored as empty, failed outputs)",
              "extra": "hypothesis ids had no reference (ignored)",
              "duplicate_refs": "reference ids were repeated (first kept)",
              "duplicate_hyps": "hypothesis ids were repeated (first kept)",
              "partial_refs": "ids were missing from some reference files"}
    return [[("b", str(len(v))), ("", f" {label}: "), *_codes(v[:10]), *[("", " …")] * (len(v) > 10)]
            for k, label in labels.items() if (v := ids.get(k))]


def _meta_items(score: SetScore, summ: dict, meta: dict) -> list[Runs]:
    cfg = summ["config"]
    items: list[Runs] = []
    for inp in meta.get("inputs", []):
        role = "Hypotheses" if inp.get("role") == "hyp" else "References"
        items.append([("", f"{role}: "), ("code", str(inp.get("source"))),
                      ("", f" ({inp['format']})" if inp.get("format") else "")])
    ns = summ.get("nonspeech", {}).get("num_clips", 0)
    n = len(score.utterances)
    items.append([("", f"Utterances: {n} scored, {n - ns} with speech, {ns} without")])
    items.append([("", f"Scoring {cfg.get('scoring_version')} · normalizer {cfg.get('normalizer_version')} · "
                       f"language {cfg.get('lang')} · headline "), ("b", str(cfg.get("headline")))])
    if cfg.get("markup") is not None:
        items.append([("", "Markup stripped: "), *(_codes(cfg["markup"]) or [("", "none")])])
    if meta.get("limit") is not None:
        items.append([("b", f"Smoke test: only the first {meta['limit']} reference utterances")])
    if meta.get("created"):
        tool = f" · sttarena {meta['sttarena']}" if meta.get("sttarena") else ""
        items.append([("", f"Created {meta['created']}{tool}")])
    return items


_EXPLAIN = {
    "L2sp": "normalizer v2 at level L2 (dialect-lenient: spelling variants of the same word, fillers and "
            "elongation folded) with space-insensitive alignment, so ما فيش = مفيش counts as correct",
    "L2": "L2 normalization with plain alignment",
    "L1": "strict orthographic normalization (the v1 rules plus safe fixes), plain alignment",
    "L1m": "L1 plus removal of corpus markup (event tags, unclear-speech and partial-word marks)",
    "v1": "the previous arena scorer, kept so v1 results stay comparable",
    "L0": "raw text split on spaces",
    "L3": "consonant skeleton (diagnostic: merges distinct words)",
    "L3sp": "consonant skeleton with space-insensitive alignment (diagnostic upper bound)",
}


def _how_to_read(cfg: dict, profiles: Sequence[str]) -> list[Runs]:
    head = cfg.get("headline")
    capped = ("Every utterance's errors are capped at its number of reference words, so one runaway output "
              "costs at most 100 % of its words; “uncapped” is the classic corpus WER.")
    notes: list[Runs] = [[("b", f"Headline = {head}"), ("", f": {_EXPLAIN.get(head, head)}. {capped}")]]
    notes += [[("b", p), ("", f" = {_EXPLAIN[p]}.")] for p in profiles if p != head and p in _EXPLAIN]
    notes += [
        [("", "CER is computed on characters with spaces removed, so word segmentation does not count. "
              "MER = errors / (correct + errors).")],
        [("", "Sub / Del / Ins are shares of reference words and add up to the uncapped WER; the split "
              "depends on the aligner's tie-breaking, the total does not.")],
        [("", "With several references the WER uses all of them at once (a word is correct if any reference "
              "has it there; the denominator is the mean reference length); AV-WER is the mean WER against "
              "each reference alone.")],
        [("", "Excluded = utterances whose reference is empty after normalization. They are scored as clips "
              "without speech, where any output is a hallucination.")],
        [("", "Alignments: "), ("code", "***"), ("", " = no word, «word» (Arabic) or UPPER CASE (Latin) = "
              "error, "), ("code", "a=b"), ("", " = words matched across a space difference, "),
         ("code", "a/b"), ("", " = alternatives from several references, "), ("code", "(w)"),
         ("", " = optional word. Worst utterances are ranked by headline errors, i.e. by their weight in the "
              "corpus WER.")],
    ]
    return notes


def _blocks(score: SetScore, meta: dict | None, title: str | None, worst: int,
            top: int) -> list[tuple[str, object]]:
    meta = meta or {}
    summ = score.summary()
    cfg = summ["config"]
    head = cfg.get("headline", "")
    name = meta.get("system")
    b: list[tuple[str, object]] = [("h1", title or (f"STT report: {name}" if name else "STT report")),
                                   ("ul", _meta_items(score, summ, meta)), ("h2", "Scores"),
                                   ("table", _scores_table(summ))]
    if summ.get("groups"):
        b += [("h3", f"By group ({head})"), ("table", _groups_table(summ["groups"]))]
    b += [("h2", "Diagnostics"), *(("table", t) for t in _diag_tables(summ))]
    if summ.get("nonspeech"):
        b.append(("table", _nonspeech_table(summ["nonspeech"])))
    ids = _id_items(meta.get("ids", {}))
    if ids:
        b += [("h3", "Utterance ids"), ("ul", ids)]

    bad = worst_utterances(score, worst)
    if bad:
        b += [("h2", f"Worst {len(bad)} utterances"), ("legend", None)]
        for k, rec in enumerate(bad, 1):
            s, e = rec["scores"][head], _errors(rec, head)
            refs = f", {len(s['av_e'])} references" if "av_e" in s else ""
            b.append(("h3", [("", f"{k}. "), ("code", str(rec["id"])), ("", f" — {_plural(e, 'error')} / "
                             f"{_plural(s['n'], 'word')} ({100 * e / s['n']:.1f} %){refs}")]))
            if _flags(rec):
                b.append(("p", " · ".join(_flags(rec))))
            b.append(("align", rec))
    talk = sorted((r for r in score.utterances if not r.get("ref_norm") and r.get("hyp_norm")),
                  key=lambda r: -len(r["hyp_norm"].split()))
    if talk:
        rows = [[Cell(str(r["id"])), _count(len(r["hyp_norm"].split())), Cell(r["hyp_norm"])]
                for r in talk[:worst]]
        b += [("h3", "Output on clips without speech"), ("table", Table(["Id", "Words", "Hypothesis"], rows))]

    errs = top_errors(score, top)
    if any(errs.values()):
        b.append(("h2", f"Most frequent errors ({head})"))
        for key, label, sides in (("substitutions", "Substitutions", ("Reference", "Hypothesis")),
                                  ("deletions", "Deletions", ("Reference",)),
                                  ("insertions", "Insertions", ("Hypothesis",)),
                                  ("merges", "Space-insensitive matches (credited as correct)",
                                   ("Reference", "Hypothesis"))):
            if errs[key]:
                rows = [[_count(c), *(Cell(r if side == "Reference" else h) for side in sides)]
                        for c, r, h in errs[key]]
                b += [("h3", label), ("table", Table(["Count", *sides], rows))]
    b += [("h2", "How to read this"), ("ul", _how_to_read(cfg, list(summ.get("profiles", {}))))]
    return b


# --- Markdown ------------------------------------------------------------------------------------
_MD_SPECIAL = re.compile(r"([\\`*_\[\]<|])")


def _md_esc(s: str) -> str:
    return _MD_SPECIAL.sub(r"\\\1", " ".join(s.splitlines()))


def _md_runs(x: str | Runs) -> str:
    out = []
    for style, t in _runs(x):
        if style == "code":
            out.append(f"`` {t} ``" if "`" in t else f"`{t}`")
        elif style == "b":
            out.append(f"**{_md_esc(t)}**")
        else:
            out.append(_md_esc(t))
    return "".join(out)


def _md_table(t: Table) -> str:
    def cell(c: Cell) -> str:
        s = c.text if c.num else _md_esc(c.text)
        return f"**{s}**" if c.strong and s else s

    num = [any(r[k].num for r in t.rows) for k in range(len(t.head))]
    lines = ["| " + " | ".join(_md_esc(h) for h in t.head) + " |",
             "|" + "|".join("---:" if n else "---" for n in num) + "|"]
    lines += ["| " + " | ".join(cell(c) for c in row) + " |" for row in t.rows]
    return "\n".join(lines)


def _render_md(blocks: list[tuple[str, object]], headline: str) -> str:
    out = []
    for kind, x in blocks:
        if kind in ("h1", "h2", "h3"):
            out.append("#" * int(kind[1]) + " " + _md_runs(x))
        elif kind == "p":
            out.append(_md_runs(x))
        elif kind == "ul":
            out.append("\n".join(f"- {_md_runs(r)}" for r in x))
        elif kind == "table":
            out.append(_md_table(x))
        elif kind == "align":
            out.append("```text\n" + aligned_text(x, headline) + "\n```")
    return "\n\n".join(out) + "\n"


def to_markdown(score: SetScore, meta: dict | None = None, *, title: str | None = None, worst: int = 10,
                top: int = 15) -> str:
    """The full report as Markdown (GitHub-flavoured tables, alignments in code blocks)."""
    return _render_md(_blocks(score, meta, title, worst, top), _headline(score))


# --- HTML --------------------------------------------------------------------------------------------
_CSS = """
:root{color-scheme:light dark;--bg:#fff;--fg:#1f2328;--muted:#656d76;--line:#d0d7de;--head:#f6f8fa;
--s:#fff3c4;--d:#ffe1df;--i:#dbeeff;--m:#dcf5e3}
@media (prefers-color-scheme:dark){:root{--bg:#0d1117;--fg:#e6edf3;--muted:#8d96a0;--line:#30363d;
--head:#161b22;--s:#4a3b00;--d:#5c1a1a;--i:#0f2f5c;--m:#0f3d22}}
*{box-sizing:border-box}
body{margin:0 auto;max-width:76rem;padding:1.5rem 1rem 3rem;background:var(--bg);color:var(--fg);
font:15px/1.55 system-ui,-apple-system,"Segoe UI","Noto Sans","Noto Sans Arabic","Noto Naskh Arabic",Tahoma,
sans-serif}
h1{font-size:1.5rem;margin:0 0 .5rem}h2{font-size:1.2rem;margin:2rem 0 .6rem;padding-bottom:.25rem;
border-bottom:1px solid var(--line)}h3{font-size:1rem;margin:1.3rem 0 .4rem}
ul{padding-inline-start:1.3rem}p{margin:.3rem 0}
code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.88em;
background:var(--head);padding:.05rem .3rem;border-radius:4px}
.wrap{overflow-x:auto;margin:.4rem 0}table{border-collapse:collapse;font-variant-numeric:tabular-nums}
th,td{border:1px solid var(--line);padding:.3rem .6rem;text-align:start;vertical-align:top}
th{background:var(--head);font-weight:600}table.sort th{cursor:pointer;user-select:none}
table.sort th[data-dir=asc]::after{content:" ▲"}table.sort th[data-dir=desc]::after{content:" ▼"}
td.n{text-align:end;white-space:nowrap}
.ali{display:flex;flex-wrap:wrap;gap:.4rem .45rem;padding:.6rem .7rem;border:1px solid var(--line);
border-radius:6px;font-size:1.08rem}
.ali>span{display:inline-flex;flex-direction:column;align-items:center;padding:0 .2rem;border-radius:4px;
line-height:1.4}
.ali>span>span:last-child{font-size:.68rem;color:var(--muted);min-height:.9rem}
.ali .S,.legend .S{background:var(--s)}.ali .D,.legend .D{background:var(--d)}
.ali .I,.legend .I{background:var(--i)}.ali .M,.legend .M{background:var(--m)}
.legend{color:var(--muted)}.legend span{padding:0 .35rem;border-radius:4px;color:var(--fg)}
"""
# click a header to sort by it (numbers by data-v, empty cells last), click again to reverse
_JS = """
document.querySelectorAll("table.sort").forEach(t => t.tHead.addEventListener("click", e => {
  const th = e.target.closest("th"); if (!th) return;
  const k = th.cellIndex, asc = th.dataset.dir !== "asc", s = asc ? 1 : -1;
  for (const x of th.parentNode.cells) delete x.dataset.dir;
  th.dataset.dir = asc ? "asc" : "desc";
  const key = r => { const c = r.cells[k]; const v = c ? c.dataset.v ?? c.textContent.trim() : "";
    return v === "" ? null : isNaN(v) ? v : +v; };
  const rows = [...t.tBodies[0].rows].sort((a, b) => { const x = key(a), y = key(b);
    if (x === null || y === null) return (x === null) - (y === null);
    return s * (typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y)));
  });
  t.tBodies[0].append(...rows);
}));
"""
_OP_NAME = {"S": "substitution", "D": "deletion", "I": "insertion", "=": "space-insensitive match"}
_OP_CLASS = {"S": "S", "D": "D", "I": "I", "=": "M"}


def _esc(s: str) -> str:
    return html.escape(s, quote=True)


def _html_runs(x: str | Runs) -> str:
    tags = {"code": ('<code dir="auto">', "</code>"), "b": ("<b>", "</b>")}  # dir=auto isolates Arabic ids
    out = []
    for style, t in _runs(x):
        start, end = tags.get(style, ("", ""))
        out.append(start + _esc(t) + end)
    return "".join(out)


def _html_table(t: Table) -> str:
    def cell(c: Cell) -> str:
        inner = f"<b>{_esc(c.text)}</b>" if c.strong else _esc(c.text)
        if c.num:
            return f'<td class="n" data-v="{"" if c.value is None else repr(float(c.value))}">{inner}</td>'
        return f'<td dir="auto">{inner}</td>'

    head = "".join(f"<th>{_esc(h)}</th>" for h in t.head)
    body = "".join("<tr>" + "".join(cell(c) for c in row) + "</tr>" for row in t.rows)
    return (f'<div class="wrap"><table class="sort"><thead><tr>{head}</tr></thead>'
            f"<tbody>{body}</tbody></table></div>")


def _html_alignment(rec: dict, headline: str, max_cols: int = 400) -> str:
    cols = alignment(rec, headline)
    if cols is None:
        return (f'<p dir="auto">REF: {_esc(rec.get("ref_norm", ""))}</p>'
                f'<p dir="auto">HYP: {_esc(rec.get("hyp_norm", ""))}</p>')
    cells = _cells(cols, _multi(rec, headline), marked=False)
    spans = "".join((f'<span class="{_OP_CLASS[m]}" title="{_OP_NAME[m]}">' if m else "<span>")
                    + f"<span>{_esc(r)}</span><span>{_esc(h)}</span><span>{_esc(m)}</span></span>"
                    for r, h, m in cells[:max_cols])
    more = f"<p>(first {max_cols} of {len(cells)} columns)</p>" if len(cells) > max_cols else ""
    rtl = _rtl(rec.get("ref_norm", "") + " " + rec.get("hyp_norm", ""))
    raw = ""
    if "ref" in rec or "hyp" in rec:  # the raw texts the scorer keeps in its records
        refs = [rec.get("ref") or "", *rec.get("refs_extra", [])]
        raw = ("<details><summary>raw text</summary>"
               + "".join(f'<p dir="auto">REF: {_esc(r)}</p>' for r in refs)
               + f'<p dir="auto">HYP: {_esc(rec.get("hyp") or "")}</p></details>')
    return f'<div class="ali" dir="{"rtl" if rtl else "ltr"}">{spans}</div>{more}{raw}'


def _render_html(blocks: list[tuple[str, object]], headline: str) -> str:
    out = []
    for kind, x in blocks:
        if kind in ("h1", "h2", "h3"):
            out.append(f"<{kind}>{_html_runs(x)}</{kind}>")
        elif kind == "p":
            out.append(f"<p>{_html_runs(x)}</p>")
        elif kind == "ul":
            out.append("<ul>" + "".join(f"<li>{_html_runs(r)}</li>" for r in x) + "</ul>")
        elif kind == "table":
            out.append(_html_table(x))
        elif kind == "legend":
            chips = " ".join(f'<span class="{c}">{_OP_NAME[k]}</span>' for k, c in _OP_CLASS.items())
            out.append(f'<p class="legend">Top line: reference · bottom: hypothesis · {chips}</p>')
        elif kind == "align":
            out.append(_html_alignment(x, headline))
    title = re.sub(r"<[^>]+>", "", out[0]) if out else "STT report"
    return ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
            f"<title>{title}</title>\n<style>{_CSS}</style>\n</head>\n<body>\n" + "\n".join(out)
            + f"\n<script>{_JS}</script>\n</body>\n</html>\n")


def to_html(score: SetScore, meta: dict | None = None, *, title: str | None = None, worst: int = 10,
            top: int = 15) -> str:
    """The full report as one self-contained HTML page (same content as `to_markdown`)."""
    return _render_html(_blocks(score, meta, title, worst, top), _headline(score))


# --- JSON ------------------------------------------------------------------------------------------
def summary_json(score: SetScore, meta: dict | None = None) -> dict:
    return {**score.summary(), "meta": meta or {}}


def write_json(path: str | Path, score: SetScore, meta: dict | None = None) -> None:
    text = json.dumps(summary_json(score, meta), indent=1, ensure_ascii=False)
    Path(path).write_text(text + "\n", encoding="utf-8")


def write_utterances(path: str | Path, score: SetScore) -> None:
    with open(path, "w", encoding="utf-8") as f:
        for rec in score.utterances:
            f.write(json.dumps(rec, ensure_ascii=False) + "\n")


# --- several systems ---------------------------------------------------------------------------------
def compare_markdown(systems: Mapping[str, SetScore], *, extra: Mapping[str, Mapping[str, str]] | None = None,
                     note: str | None = None) -> str:
    """Several systems scored on the same set, sorted by headline WER, best value per column in bold.

    `extra` appends columns {title: {system: cell}}, the hook for paired significance tests (score_cli
    puts sttarena.stats sign-flip tests there), and `note` explains them; without a note the table says
    that no test was applied, since a difference in WER alone does not say it is real.
    """
    if not systems:
        return ""
    extra = extra or {}
    summs = {k: s.summary() for k, s in systems.items()}
    configs = {json.dumps({k: s["config"].get(k) for k in _CONFIG_KEYS}, sort_keys=True)
               for s in summs.values()}
    if len(configs) > 1:
        raise ValueError("systems were scored with different scoring configurations; rescore them together")
    first = next(iter(summs.values()))
    head = first["config"].get("headline")
    cols: list[tuple[str, str, str]] = [  # (column, section, key); section "" = headline profile
        (f"WER {head} %", "", "wer"), ("WER uncapped %", "", "wer_uncapped"),
        ("CER no spaces %", "", "cer_ns"), ("Sub %", "", "sub"), ("Del %", "", "del"), ("Ins %", "", "ins"),
        *((f"WER {p} %", p, "wer") for p in first["profiles"] if p != head),
        ("Loops %", "hallucination", "loop_rate"), ("Empty %", "hallucination", "empty_output_rate"),
        ("Failed %", "hallucination", "failure_rate"),
    ]
    if any(s.get("nonspeech") for s in summs.values()):
        cols.append(("Output on silence %", "nonspeech", "halluc_any"))
    if any(s.get("hallucination", {}).get("latin_ref_words") for s in summs.values()):
        cols.append(("WER Latin words %", "hallucination", "wer_latin"))
    if any(s.get("hallucination", {}).get("dialect_markers") for s in summs.values()):
        cols.append(("Dialect markers kept %", "hallucination", "marker_retention"))
    higher_is_better = {"marker_retention"}

    def value(s: dict, section: str, key: str) -> float | None:
        if section in ("hallucination", "nonspeech"):
            return s.get(section, {}).get(key)
        return s["profiles"].get(section or head, {}).get(key)

    order = sorted(summs, key=lambda k: (value(summs[k], "", "wer") is None, value(summs[k], "", "wer") or 0))
    best = {}
    for c, section, key in cols:
        vals = [v for k in order if (v := value(summs[k], section, key)) is not None]
        best[c] = (max if key in higher_is_better else min)(vals) if len(vals) > 1 else None
    rows = []
    for k in order:
        s = summs[k]
        cells = [_pct(v, v is not None and v == best[c]) for c, section, key in cols
                 for v in [value(s, section, key)]]
        rows.append([Cell(k), *cells, _count(s["profiles"].get(head, {}).get("num_utterances")),
                     *(Cell(extra[e].get(k, "")) for e in extra)])
    table = _md_table(Table(["System", *(c for c, _, _ in cols), "Utterances", *extra], rows))
    notes = [f"Sorted by headline WER ({head}: {PROFILE_NOTES.get(head, head)}); best value per column in "
             "bold. " + (note or "No significance test is applied: a difference smaller than its confidence "
                                 "interval may be noise.")]
    words = {s["profiles"].get(head, {}).get("n_words") for s in summs.values()}
    if len(words) > 1:
        notes.append("**Warning:** the systems were scored on different utterances (reference words: "
                     + ", ".join(f"{k} {summs[k]['profiles'].get(head, {}).get('n_words')}" for k in order)
                     + "); their WERs are not directly comparable.")
    return table + "\n\n" + "\n\n".join(notes) + "\n"


# --- terminal ----------------------------------------------------------------------------------------
def text_summary(score: SetScore, meta: dict | None = None) -> str:
    """The compact table the CLI prints: every profile, then hallucination and id notes."""
    meta = meta or {}
    summ = score.summary()
    head = summ["config"].get("headline")
    profs = summ.get("profiles", {})
    ns = summ.get("nonspeech", {})
    cols = [("WER", "wer"), ("uncapped", "wer_uncapped"), ("CER-ns", "cer_ns"), ("sub", "sub"),
            ("del", "del"), ("ins", "ins")]
    if any("av_wer" in a for a in profs.values()):
        cols.append(("AV-WER", "av_wer"))
    lines = [f"{meta.get('system') or 'system'}: {len(score.utterances)} utterances "
             f"({ns.get('num_clips', 0)} without speech), headline {head}",
             f"{'profile':<9}" + "".join(f"{c:>9}" for c, _ in cols) + f"{'utts':>7}{'excl':>6}"]
    for p, a in profs.items():
        values = "".join(f"{_pct_text(a.get(k)):>9}" for _, k in cols)
        lines.append(f"{p + (' *' if p == head else ''):<9}{values}"
                     f"{a.get('num_utterances', 0):>7}{a.get('num_excluded', 0):>6}")
    hall = summ.get("hallucination", {})
    if hall:
        parts = [("loop", "loop_rate"), ("burst", "burst_rate"), ("long", "long_output_rate"),
                 ("empty", "empty_output_rate"), ("failed", "failure_rate"),
                 ("wrong script", "wrong_script_rate")]
        lines.append("hallucination: " + "  ".join(f"{label} {_pct_text(hall.get(k))}%"
                                                   for label, k in parts))
        if hall.get("latin_ref_words"):
            lines.append(f"code-switch: {_plural(hall['latin_ref_words'], 'Latin-script reference word')}, "
                         f"WER on them {_pct_text(hall.get('wer_latin'))}%")
        if hall.get("dialect_markers"):
            lines.append(f"dialect markers: {hall['dialect_markers']} in the references, "
                         f"{_pct_text(hall.get('marker_retention'))}% kept, "
                         f"{_pct_text(hall.get('marker_msa_replacement'))}% replaced by MSA")
    if ns:
        lo, hi = ns.get("halluc_any_ci") or (0, 0)
        lines.append(f"no speech: {_plural(ns['num_clips'], 'clip')}, any output "
                     f"{_pct_text(ns.get('halluc_any'), 1)}% [{lo * 100:.1f}–{hi * 100:.1f}], "
                     f"3+ words {_pct_text(ns.get('halluc_3plus'), 1)}%")
    for k, v in meta.get("ids", {}).items():
        if isinstance(v, list) and v:
            more = " …" if len(v) > 5 else ""
            lines.append(f"ids: {len(v)} {k.replace('_', ' ')}: {', '.join(v[:5])}{more}")
    return "\n".join(lines)
