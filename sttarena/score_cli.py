"""`sttarena score` and `sttarena compare`: score reference and hypothesis files, no model needed.

    sttarena score --ref refs.jsonl --hyp hyps.txt --hyp-format kaldi --out-md r.md --out-html r.html
    sttarena score --hyp results/ar/<model>/predictions/fleurs__clean.jsonl   # both sides in one file
    sttarena score --ref annotator1.trn --ref annotator2.trn --hyp system.trn  # multi-reference
    sttarena score --ref "hf://google/fleurs:ar_eg/test?id=path&text=transcription" --hyp hyps.jsonl
    sttarena compare --ref refs.jsonl --hyp whisper=a.jsonl --hyp qwen=b.jsonl --out-md compare.md

References and hypotheses are joined by id, never by line position, and any id mismatch is an error
unless --lenient-ids is given: missing hypotheses are then scored as empty, failed outputs and listed
in every output. The JSON summary records the inputs' sha256, so a stale score can be detected.
`compare` tests every system against the best one with the paired cluster sign-flip test of
sttarena.stats, since a WER difference alone does not say it is real.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from datetime import datetime, timezone
from importlib.metadata import PackageNotFoundError, version
from pathlib import Path
from typing import Mapping

import regex as re

from .io import FORMATS, IdMismatchError, Pairing, detect_format, pair, read
from .normalizers.markup import MarkupSpec
from .report import (compare_markdown, summary_json, text_summary, to_html, to_markdown, write_json,
                     write_utterances)
from .scoring import ALL_PROFILES, DEFAULT_PROFILES, HEADLINE, Scorer, SetScore

_NAMED = re.compile(r"^([\w.+-]+)=(.+)$")


def _parser(prog: str, description: str, hyp: dict) -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(prog, description=description)
    g = ap.add_argument_group("inputs")
    g.add_argument("--ref", action="append", metavar="PATH",
                   help="reference file, directory or hf://repo[:config]/split?id=..&text=.. spec; repeat it "
                        "for several references per utterance (multi-reference)")
    g.add_argument("--hyp", **hyp)
    g.add_argument("--ref-format", choices=FORMATS, help="default: from the extension or the content")
    g.add_argument("--hyp-format", choices=FORMATS, help="default: from the extension or the content")
    g.add_argument("--id-field", help="id field/column of both sides (jsonl/json/csv/tsv/hf); @line = record "
                                      "number")
    g.add_argument("--ref-id-field", help="id field of the references (overrides --id-field)")
    g.add_argument("--hyp-id-field", help="id field of the hypotheses (overrides --id-field)")
    g.add_argument("--ref-field", help="reference text field(s); a,b,c = several references per record")
    g.add_argument("--hyp-field", help="hypothesis text field")
    ids = g.add_mutually_exclusive_group()
    ids.add_argument("--strict-ids", dest="strict", action="store_true", default=True,
                     help="any missing, extra or repeated id is an error (default)")
    ids.add_argument("--lenient-ids", dest="strict", action="store_false",
                     help="score missing hypotheses as empty (failed) outputs, drop extra ones, list both")
    g.add_argument("--limit", type=int, metavar="N", help="score only the first N reference utterances")
    s = ap.add_argument_group("scoring")
    s.add_argument("--lang", choices=("ar", "en"), default="ar")
    s.add_argument("--profiles", nargs="+", choices=ALL_PROFILES, default=list(DEFAULT_PROFILES), metavar="P",
                   help=f"scoring profiles, from {', '.join(ALL_PROFILES)} "
                        f"(default: {' '.join(DEFAULT_PROFILES)})")
    s.add_argument("--headline", choices=ALL_PROFILES, default=HEADLINE, metavar="P",
                   help=f"headline profile (default {HEADLINE})")
    s.add_argument("--markup", default="default",
                   help="corpus markup to strip: default (every pattern), none, or name,name,...")
    return ap


def score_parser(prog: str = "sttarena score") -> argparse.ArgumentParser:
    ap = _parser(prog, "Score hypotheses against references (any common format) and write a JSON summary, "
                       "per-utterance JSONL, and Markdown / HTML reports.",
                 {"metavar": "PATH", "help": "hypothesis file or directory; without --ref, a predictions "
                                             "file that holds both sides"})
    ap.add_argument("--name", help="system name shown in the reports (default: the hypothesis file name)")
    o = ap.add_argument_group("outputs")
    o.add_argument("--out-json", metavar="PATH", help="summary: every metric plus run metadata")
    o.add_argument("--out-utts", metavar="PATH", help="one JSON record per utterance (counts, alignment ops)")
    o.add_argument("--out-md", metavar="PATH", help="Markdown report")
    o.add_argument("--out-html", metavar="PATH", help="self-contained HTML report")
    o.add_argument("--worst", type=int, default=10, metavar="N", help="worst utterances in the reports (10)")
    return ap


def compare_parser(prog: str = "sttarena compare") -> argparse.ArgumentParser:
    ap = _parser(prog, "Score several systems against the same references and print a side-by-side table "
                       "with paired significance tests against the best system.",
                 {"action": "append", "nargs": "+", "required": True, "metavar": "[NAME=]PATH",
                  "help": "hypothesis files, two or more (repeat the option or list them)"})
    o = ap.add_argument_group("outputs")
    o.add_argument("--out-md", metavar="PATH", help="the comparison table as Markdown")
    o.add_argument("--out-json", metavar="PATH", help="every system's summary and the tests")
    return ap


# --- helpers ---------------------------------------------------------------------------------------
def _markup(ap: argparse.ArgumentParser, spec: str):
    if spec == "default":
        return None
    value = "none" if spec == "none" else [s.strip() for s in spec.split(",") if s.strip()]
    try:
        MarkupSpec.parse(value)
    except ValueError as e:
        ap.error(str(e))
    return value


def _load(args: argparse.Namespace, role: str, src: str, fmt: str | None, cmd: str) -> list[dict]:
    idf = (args.ref_id_field if role == "ref" else args.hyp_id_field) or args.id_field
    field = args.ref_field if role == "ref" else args.hyp_field
    try:
        return read(src, fmt, role=role, id_field=idf, text_field=field)
    except (ValueError, ImportError, OSError) as e:
        raise SystemExit(f"{cmd}: {e}") from None


def _limit(refs: list[list[dict]], hyps: list[dict], n: int | None) -> tuple[list[list[dict]], list[dict]]:
    """The first n reference utterances and only their hypotheses (a full hypothesis file is not 'extra')."""
    if n is None:
        return refs, hyps
    keep = {r["id"] for r in refs[0][:n]}
    return [[r for r in rs if r["id"] in keep] for rs in refs], [h for h in hyps if h["id"] in keep]


def _score(scorer: Scorer, refs: list[list[dict]], hyps: list[dict], strict: bool,
           cmd: str) -> tuple[SetScore, Pairing]:
    try:
        pairing = pair(refs if len(refs) > 1 else refs[0], hyps, strict=strict)
    except IdMismatchError as e:
        raise SystemExit(f"{cmd}: {e}") from None
    return scorer.score(pairing.items), pairing


def _source_info(role: str, src: str, fmt: str | None) -> dict:
    p = Path(src)
    if src.startswith("hf://"):
        fmt = "hf"
    elif p.is_dir():
        fmt = fmt or "directory"
    info = {"role": role, "source": src, "format": fmt or detect_format(p)}
    if p.is_file():
        info["sha256"] = hashlib.sha256(p.read_bytes()).hexdigest()
    return info


def _system_name(src: str) -> str:
    return src[len("hf://"):].split("?")[0] if src.startswith("hf://") else Path(src).stem or src


def _run_meta(limit: int | None) -> dict:
    try:
        tool = version("sttarena")
    except PackageNotFoundError:
        tool = None
    return {"created": datetime.now(timezone.utc).isoformat(timespec="seconds"), "sttarena": tool,
            "limit": limit}


def _make_dirs(*paths: str | None) -> None:
    for p in paths:
        if p:
            Path(p).parent.mkdir(parents=True, exist_ok=True)


def significance(scores: Mapping[str, SetScore], headline: str, n_perm: int = 10_000) -> dict[str, dict]:
    """Every system against the best one (lowest capped headline WER) on their paired utterances: the
    cluster sign-flip test of sttarena.stats, Holm-adjusted over the comparisons, and each system's
    cluster-robust 95 % interval. Clusters come from the records' `cluster` field, else utterances are
    the units. Raises ValueError when there is nothing to test (e.g. no utterance with speech)."""
    from .stats import cluster_t_ci, holm, records_to_setdata, sign_flip_test

    data = records_to_setdata("compare", "", {k: s.utterances for k, s in scores.items()}, headline)
    wer = {k: s.summary()["profiles"][headline]["wer"] for k, s in scores.items()}
    best = min(wer, key=lambda k: wer[k])
    out = {}
    for i, k in enumerate(data.models):
        lo, hi = cluster_t_ci(data.errors[i], data.nref, data.clusters)
        out[k] = {"wer": wer[k], "ci95": [lo, hi], "best": k == best}
    others = [k for k in data.models if k != best]
    tests = [sign_flip_test(*data.diff(k, best), n_perm=n_perm) for k in others]
    for k, t, p_adj in zip(others, tests, holm([t.p_value for t in tests])):
        out[k].update(delta=t.delta, p=t.p_value, p_holm=float(p_adj), method=t.method, n_units=t.n_units)
    return out


def _significance_columns(sig: dict[str, dict]) -> dict[str, dict[str, str]]:
    def ci(x):
        lo, hi = x["ci95"]
        return "—" if lo != lo else f"{lo * 100:.2f}–{hi * 100:.2f}"  # NaN with a single unit

    return {"WER 95 % CI": {k: ci(x) for k, x in sig.items()},
            "Δ vs best (points)": {k: "best" if x["best"] else f"{x['delta'] * 100:+.2f}"
                                   for k, x in sig.items()},
            "p vs best (Holm)": {k: "" if x["best"] else f"{x['p_holm']:.3g}" for k, x in sig.items()}}


# --- commands ----------------------------------------------------------------------------------------
def main_score(argv: list[str] | None = None) -> None:
    """`sttarena score`: one system. Prints a summary table and writes the requested outputs."""
    ap = score_parser()
    args = ap.parse_args(argv)
    if not args.ref and not args.hyp:
        ap.error("give --hyp (and --ref), or one predictions file that holds both sides")
    if not args.hyp and len(args.ref) > 1:
        ap.error("--hyp is required with several --ref files")
    markup = _markup(ap, args.markup)
    ref_srcs, hyp_src = args.ref or [args.hyp], args.hyp or args.ref[0]
    # one file holding both sides is read twice, with whichever format was given
    ref_fmt = args.ref_format or (None if args.ref else args.hyp_format)
    hyp_fmt = args.hyp_format or (None if args.hyp else args.ref_format)
    refs = [_load(args, "ref", s, ref_fmt, ap.prog) for s in ref_srcs]
    refs, hyps = _limit(refs, _load(args, "hyp", hyp_src, hyp_fmt, ap.prog), args.limit)
    scorer = Scorer(args.lang, profiles=args.profiles, headline=args.headline, markup=markup)
    score, pairing = _score(scorer, refs, hyps, args.strict, ap.prog)
    inputs = [*(_source_info("ref", s, ref_fmt) for s in ref_srcs), _source_info("hyp", hyp_src, hyp_fmt)]
    meta = {"system": args.name or _system_name(hyp_src), **_run_meta(args.limit), "inputs": inputs,
            "ids": pairing.to_dict()}
    outputs = (args.out_json, args.out_utts, args.out_md, args.out_html)
    _make_dirs(*outputs)
    if args.out_json:
        write_json(args.out_json, score, meta)
    if args.out_utts:
        write_utterances(args.out_utts, score)
    if args.out_md:
        Path(args.out_md).write_text(to_markdown(score, meta, worst=args.worst), encoding="utf-8")
    if args.out_html:
        Path(args.out_html).write_text(to_html(score, meta, worst=args.worst), encoding="utf-8")
    print(text_summary(score, meta))
    if any(outputs):
        print("wrote " + ", ".join(p for p in outputs if p))


def main_compare(argv: list[str] | None = None) -> None:
    """`sttarena compare`: two or more systems on the same references; prints `compare_markdown`."""
    ap = compare_parser()
    args = ap.parse_args(argv)
    systems = []
    for spec in (h for group in args.hyp for h in group):
        m = _NAMED.match(spec)
        named = m and not Path(spec).exists()
        systems.append((m.group(1), m.group(2)) if named else (_system_name(spec), spec))
    names = [n for n, _ in systems]
    if len(systems) < 2:
        ap.error("give at least two hypothesis files")
    if len(set(names)) < len(names):
        ap.error(f"several systems are named {', '.join(sorted({n for n in names if names.count(n) > 1}))}; "
                 "name them with NAME=PATH")
    markup = _markup(ap, args.markup)
    ref_srcs = args.ref or [systems[0][1]]
    ref_fmt = args.ref_format or (None if args.ref else args.hyp_format)
    refs = [_load(args, "ref", s, ref_fmt, ap.prog) for s in ref_srcs]
    scorer = Scorer(args.lang, profiles=args.profiles, headline=args.headline, markup=markup)
    scores: dict[str, SetScore] = {}
    pairings: dict[str, Pairing] = {}
    for name, src in systems:
        r, h = _limit(refs, _load(args, "hyp", src, args.hyp_format, ap.prog), args.limit)
        scores[name], pairings[name] = _score(scorer, r, h, args.strict, f"{ap.prog} ({name})")
    try:
        sig = significance(scores, args.headline)
        note = ("Δ and p: paired sign-flip permutation test of each system against the best one on capped "
                "per-utterance errors (clusters: the references' `cluster` field, else utterances), "
                f"Holm-adjusted over {len(sig) - 1} comparison{'s' * (len(sig) > 2)}; CI: cluster-robust "
                "t interval.")
        table = compare_markdown(scores, extra=_significance_columns(sig), note=note)
    except ValueError as e:  # nothing to test, or cluster labels on only some utterances
        sig, table = None, compare_markdown(scores, note=f"No significance test: {e}.")
    issues = [f"- {name}: {p.describe()}" for name, p in pairings.items() if p.problems]
    out = table + ("\nId issues (lenient mode):\n\n" + "\n".join(issues) + "\n" if issues else "")
    print(out, end="")
    _make_dirs(args.out_md, args.out_json)
    if args.out_md:
        Path(args.out_md).write_text(out, encoding="utf-8")
    if args.out_json:
        meta = {**_run_meta(args.limit), "references": [_source_info("ref", s, ref_fmt) for s in ref_srcs]}
        per_system = {}
        for name, src in systems:
            info = {"system": name, "ids": pairings[name].to_dict(),
                    "inputs": [_source_info("hyp", src, args.hyp_format)]}
            per_system[name] = summary_json(scores[name], info)
        payload = json.dumps({"meta": meta, "systems": per_system, "significance": sig}, indent=1,
                             ensure_ascii=False)
        Path(args.out_json).write_text(payload + "\n", encoding="utf-8")
