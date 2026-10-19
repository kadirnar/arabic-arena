"""`sttarena audit`: the data audits from the command line.

  sttarena audit floor          --set mgb3_egy               | --ref FILE --ref-field a,b,c,d
  sttarena audit variants       [--sets NAME ...] [--ref FILE ...] [--vocab FILE] [--check]
  sttarena audit refs           --set sada [--quran FILE] [--worklist PATH]   | --ref FILE --hyp NAME=FILE ...
  sttarena audit contamination  --set casablanca --train FILE [--id-key seg_id] | --screen

`--set` reads a built set (data/<lang>/<set>/clean.parquet) with the suite's markup spec, extra references
and registry: `refs` takes every saved model's predictions of the set as the consensus panel and leaves out
the models trained on it. `--ref` / `--hyp` / `--train` read anything `sttarena score` reads (JSONL,
CSV/TSV, Kaldi, trn, ..., hf://). Every command prints a summary and writes the full result with --json.
"""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter
from pathlib import Path

from ..data import Suite, set_path
from ..io import FORMATS, read
from ..normalizers.markup import MarkupSpec
from ..normalizers.variants import RULES
from .contamination import exposure, id_overlap, overlap_summary, residual_screen, text_overlap
from .floor import FLOOR_PROFILES, floor_table, human_floor
from .references import REASONS, Thresholds, audit_references, audit_sample, id_segment, meta_segment
from .variants import audit_variants, build_vocab

_NAMED = re.compile(r"^([\w.+-]+)=(.+)$")


# --- inputs --------------------------------------------------------------------------------------------
def _set_markup(spec):
    return MarkupSpec.parse(spec.markup).with_extra(spec.markup_extra)


def _markup_arg(value: str):
    if value == "default":
        return None
    return MarkupSpec.parse("none" if value == "none" else [s.strip() for s in value.split(",") if s.strip()])


def _built(suite: Suite, name: str) -> list[dict]:
    """Rows of a built set (no audio): id, ref, duration, meta."""
    import pyarrow.parquet as pq

    path = set_path(suite.language, name)
    if not path.exists():
        raise SystemExit(f"{path} is missing: build the set first (scripts/build_benchmark.py)")
    rows = pq.read_table(path, columns=["id", "text", "duration", "meta"]).to_pylist()
    return [{"id": r["id"], "ref": r["text"], "duration": r["duration"],
             "meta": json.loads(r["meta"]) if r.get("meta") else {}} for r in rows]


def _records(args, src: str) -> list[dict]:
    return read(src, args.ref_format, role="ref", id_field=args.id_field, text_field=args.ref_field)


def _texts(rec: dict) -> list[str]:
    return rec["texts"] if "texts" in rec else [rec.get("text", "")]


def _file_items(args) -> list[dict]:
    return [{"id": r["id"], "ref": (_texts(r) or [""])[0], "duration": r.get("duration")}
            for r in _records(args, args.ref)]


def _dump(path: str | None, obj) -> None:
    if path:
        text = json.dumps(obj, ensure_ascii=False, indent=1, default=str)
        Path(path).write_text(text + "\n", encoding="utf-8")


def _source(args) -> Suite | None:
    if bool(args.set) == bool(args.ref):
        raise SystemExit("give either --set (a built set of the suite) or --ref (a file)")
    return Suite.load(args.suite) if args.set else None


# --- commands ------------------------------------------------------------------------------------------
def _floor(args) -> None:
    suite = _source(args)
    if suite:
        spec = suite.sets[args.set]
        utts = []
        for it in _built(suite, args.set):  # annotators named by their column; a missing one is skipped
            meta = it["meta"]
            extra = {f: spec.prepare_text(meta[f]) for f in spec.references if meta.get(f) is not None}
            utts.append({spec.text: it["ref"], **extra})
        lang, markup = suite.language, _set_markup(spec)
    else:
        utts = [_texts(r) for r in _records(args, args.ref)]
        lang, markup = args.lang, _markup_arg(args.markup)
    fl = human_floor(utts, args.profiles, lang=lang, markup=markup)
    print(floor_table(fl))
    _dump(args.json, fl)


def _variants(args) -> None:
    vocab: Counter = Counter()
    if args.vocab:  # {type: count} or [[type, count], ...], e.g. a saved union vocabulary
        vocab.update(dict(json.loads(Path(args.vocab).read_text(encoding="utf-8"))))
    for src in args.ref or []:
        vocab += build_vocab((t for r in _records(args, src) for t in _texts(r)), lang=args.lang,
                             markup=_markup_arg(args.markup))
    if not (args.vocab or args.ref) or args.sets:
        suite = Suite.load(args.suite)
        for name in args.sets or suite.sets:
            spec = suite.sets[name]
            if not set_path(suite.language, name).exists():
                print(f"[skip] {name}: not built")
                continue
            texts = [t for it in _built(suite, name) for t in spec.references_of(it["ref"], it["meta"])]
            vocab += build_vocab(texts, lang=suite.language, markup=_set_markup(spec))
    pairs = ([tuple(p) for p in json.loads(Path(args.allow_pairs).read_text(encoding="utf-8"))]
             if args.allow_pairs else ())
    res = audit_variants(vocab, min_count=args.min_count, allow_rules=args.allow_rules, allow_pairs=pairs)
    print(f"vocabulary: {res['vocab']['types']:,} types, {res['vocab']['tokens']:,} tokens")
    print(f"{'fold':14s} {'types':>7s} {'tokens':>8s} {'groups':>7s} {'tokens in merges':>17s}")
    for name, s in res["folds"].items():
        print(f"{name:14s} {s['types_changed']:7d} {s['tokens_changed']:8d} {s['merge_groups']:7d} "
              f"{s['tokens_in_merges']:17d}")
    print(f"\nmerges of two types seen >= {args.min_count} times that neither the table nor an allowed rule "
          f"explains: {len(res['unintended'])}")
    for m in res["unintended"][:args.top]:
        print(f"  {m['types'][0]} ({m['counts'][0]}) + {m['types'][1]} ({m['counts'][1]}) -> {m['canonical']}"
              f"  via {', '.join(m['unintended'])}")
    print(f"idempotence failures: {len(res['idempotence_failures'])}")
    for f in res["idempotence_failures"][:args.top]:
        print(f"  {f['type']} -> {f['once']} -> {f['twice']}")
    _dump(args.json, res)
    if args.check and (res["unintended"] or res["idempotence_failures"]):
        raise SystemExit(1)


def _predictions(lang: str, name: str, models: list[str] | None) -> dict[str, dict[str, str]]:
    """{model: {id: raw hypothesis}} from results/<lang>/<model>/predictions/<set>__clean.jsonl."""
    from ..runner import RESULTS_DIR

    out = {}
    for path in sorted((RESULTS_DIR / lang).glob(f"*/predictions/{name}__clean.jsonl")):
        model = path.parent.parent.name
        if models and model not in models:
            continue
        recs = [json.loads(line) for line in path.open(encoding="utf-8") if line.strip()]
        hyps = {r["id"]: r["hyp"] for r in recs if r.get("hyp") is not None}
        if hyps:
            out[model] = hyps
    return out


def _quran(path: str) -> list[str]:
    """Verse texts: tanzil `sura|aya|text` lines, or one verse per line."""
    lines = Path(path).read_text(encoding="utf-8").splitlines()
    return [ln.split("|", 2)[2] if ln.count("|") >= 2 else ln for ln in lines if ln.strip()]


def _refs(args) -> None:
    from ..models.registry import MODELS

    suite = _source(args)
    if suite:
        spec = suite.sets[args.set]
        items, lang, markup = _built(suite, args.set), suite.language, _set_markup(spec)
        hyps = _predictions(lang, args.set, args.models)
        exclude = set() if args.keep_in_domain else {m for m in hyps
                                                      if m in MODELS and args.set in MODELS[m].in_domain}
        ma = spec.multi_annotator
        segment = id_segment(ma["field"], ma["regex"]) if ma else meta_segment
        cluster = (lambda it: spec.label("cluster", it["meta"])) if spec.cluster else None
    else:
        items, lang, markup = _file_items(args), args.lang, _markup_arg(args.markup)
        hyps = {}
        for h in args.hyp or []:
            m = _NAMED.match(h)
            if not m:
                raise SystemExit(f"--hyp {h!r}: expected NAME=PATH")
            recs = read(m[2], None, role="hyp", id_field=args.id_field)
            hyps[m[1]] = {r["id"]: r.get("text", "") for r in recs}
        exclude, segment, cluster = set(args.exclude or ()), meta_segment, None
    th = Thresholds(min_agree=args.min_agree, agree_wer=args.agree_wer, ref_wer=args.ref_wer,
                    panel_max_wer=args.panel_max_wer)
    audit = audit_references(items, hyps or None, exclude=exclude, lang=lang, markup=markup, thresholds=th,
                             segment=segment, quran=_quran(args.quran) if args.quran else None)
    s = audit.summary()
    panel = sorted(set(hyps) - exclude)
    print(f"{s['n_items']} items, {s['flagged']} flagged; consensus panel: {', '.join(panel) or 'none'}"
          + (f"; excluded (in-domain): {', '.join(sorted(exclude))}" if exclude else ""))
    for r, v in s["reasons"].items():
        print(f"  {r:24s} {v['items']:6d}  {100 * v['share']:5.1f} %  {REASONS[r]}")
    ref = {it["id"]: it["ref"] for it in items}
    for f in [f for f in audit.flags if f.reason == "consensus_disagreement"][:args.top]:
        print(f"\n  {f.id}\n    reference:  {ref[f.id]}\n    consensus:  {f.evidence['suggestion']}"
              f"\n    models:     {', '.join(f.evidence['models'])}")
    out = {"set": args.set, "panel": panel, "excluded": sorted(exclude), **audit.to_dict()}
    if args.worklist:
        work = audit_sample(items, args.random, flagged=audit.ids("consensus_disagreement"), seed=args.seed,
                            cluster=cluster)
        _dump(args.worklist, work)
        print(f"\nworklist: {len(work)} items ({sum(t['random'] for t in work)} random) -> {args.worklist}")
    _dump(args.json, out)


def _screen(args) -> None:
    from ..leaderboard import set_weights
    from ..models.registry import MODELS
    from ..runner import RESULTS_DIR

    suite = Suite.load(args.suite)
    rows = {}
    for path in sorted((RESULTS_DIR / suite.language).glob("*/summary.json")):
        res = json.loads(path.read_text(encoding="utf-8"))["results"]
        rows[path.parent.name] = {k: v for k, v in res.items() if v.get("wer") is not None}
    v2 = all(v.get("wer_v2") is not None for row in rows.values() for v in row.values())
    wer = {m: {k: v["wer_v2" if v2 else "wer"] for k, v in row.items()} for m, row in rows.items()}
    corpora = {k.split("/")[0] for row in wer.values() for k in row}
    # a model is known clean on every corpus but its declared in-domain ones, unless its training data is
    # undisclosed (then nothing is known)
    clean = {m: corpora - set(MODELS[m].in_domain) for m in wer
             if m in MODELS and MODELS[m].kind != "api" and MODELS[m].training_data != "undisclosed"}
    refs = sorted({k for row in wer.values() for k in row if k.split("/")[0] in args.reference_sets})
    cells = residual_screen(wer, clean, reference_sets=refs, z_threshold=args.z)
    print(f"residual screen ({'v2' if v2 else 'v1'} WER, {len(wer)} models, reference sets "
          f"{', '.join(refs)}): {sum(c['flag'] for c in cells)} of {len(cells)} cells at z <= {args.z}")
    for c in [c for c in cells if c["flag"]][:args.top]:
        status = "claimed clean: probe" if c["claimed_clean"] else "in-domain or undisclosed"
        print(f"  z={c['z']:6.2f}  {c['model']:40s} {c['set']:24s} WER {100 * c['wer']:5.1f} "
              f"(predicted {100 * c['predicted']:5.1f})  {status}")
    in_domain = {m: MODELS[m].in_domain for m in wer if m in MODELS and MODELS[m].in_domain}
    exp = exposure(in_domain, set_weights(suite))
    print("\nexposure (share of the Arena weight on sets the model trained on):")
    for m, e in sorted(exp.items(), key=lambda kv: -kv[1]["exposure"]):
        print(f"  {m:40s} {100 * e['exposure']:5.1f} %")
    _dump(args.json, {"wer": "v2" if v2 else "v1", "reference_sets": refs, "cells": cells, "exposure": exp})


def _contamination(args) -> None:
    if args.screen:
        return _screen(args)
    if not args.train:
        raise SystemExit("give --train (a training text corpus) or --screen")
    suite = _source(args)
    if suite:
        spec = suite.sets[args.set]
        items, lang, markup = _built(suite, args.set), suite.language, _set_markup(spec)
    else:
        items, lang, markup = _file_items(args), args.lang, _markup_arg(args.markup)
    train = read(args.train, args.train_format, role="ref", id_field=args.train_id_field,
                 text_field=args.train_field)
    rep = text_overlap({it["id"]: it["ref"] for it in items}, (r.get("text", "") for r in train), n=args.n,
                       lang=lang, markup=markup)
    s = overlap_summary(rep)
    print(f"{s['n']} test references against {len(train):,} train texts: exact {s['exact']}, "
          f"{args.n}-gram coverage >= 0.7 {s['ngram']} (of {s['ngram_testable']} testable), "
          f"MinHash near duplicates {s['near_dup']}; any {s['any']} ({100 * s['share']['any']:.1f} %)")
    out = {"summary": s, "references": rep}
    if args.id_key:
        ids = id_overlap(items, {r["id"]: r.get("text", "") for r in train}, key=args.id_key, lang=lang,
                         markup=markup)
        print(f"ID join on {args.id_key}: {ids['matched']} of {ids['n']} test items, {ids['same_text']} "
              "with the same transcript")
        out["ids"] = ids
    _dump(args.json, out)


# --- parser --------------------------------------------------------------------------------------------
def _common(p: argparse.ArgumentParser, one_set: bool = True) -> None:
    """Input options; one_set: --set NAME or one --ref, else --ref may be repeated (and no --set)."""
    p.add_argument("--suite", default="arabic")
    if one_set:
        p.add_argument("--set", help="a set of the suite, read from its built parquet")
    p.add_argument("--ref", action="store" if one_set else "append", metavar="PATH",
                   help="references: a file, directory or hf:// spec, as `sttarena score --ref`")
    p.add_argument("--ref-format", choices=FORMATS)
    p.add_argument("--id-field")
    p.add_argument("--ref-field", help="text field(s); a,b,c = several transcriptions per record")
    p.add_argument("--lang", choices=("ar", "en"), default="ar", help="for --ref inputs (a set: its suite's)")
    p.add_argument("--markup", default="default", help="for --ref inputs: default, none, or name,name,...")
    p.add_argument("--json", metavar="PATH", help="write the full result as JSON")
    p.add_argument("--top", type=int, default=20, metavar="N", help="rows to print (20)")


def parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser("sttarena audit", description="Data audits: human floor, variant-table "
                                 "collisions, reference errors, test/train contamination. `sttarena audit taxonomy` (the error budget) has its own options: sttarena audit taxonomy --help.")
    sub = ap.add_subparsers(dest="cmd", required=True)
    f = sub.add_parser("floor", help="human disagreement floor of multi-annotator data")
    _common(f)
    f.add_argument("--profiles", nargs="+", default=list(FLOOR_PROFILES), metavar="P")
    v = sub.add_parser("variants", help="collision audit of the L2 spelling folds")
    _common(v, one_set=False)
    v.add_argument("--sets", nargs="*", help="sets whose references make the vocabulary (default: all built)")
    v.add_argument("--vocab", metavar="PATH", help="a saved vocabulary: {type: count} or [[type, count]]")
    v.add_argument("--min-count", type=int, default=5)
    v.add_argument("--allow-rules", nargs="*", default=[], choices=list(RULES), metavar="RULE",
                   help="rules whose merges are intended")
    v.add_argument("--allow-pairs", metavar="PATH", help="JSON list of reviewed [type, type] merges")
    v.add_argument("--check", action="store_true", help="exit 1 on unintended merges or idempotence failures")
    r = sub.add_parser("refs", help="reference audit of one set")
    _common(r)
    r.add_argument("--hyp", action="append", metavar="NAME=PATH", help="with --ref: a model's hypotheses")
    r.add_argument("--models", nargs="*", help="with --set: restrict the panel to these models")
    r.add_argument("--exclude", nargs="*", help="with --ref: models to leave out of the panel (in-domain)")
    r.add_argument("--keep-in-domain", action="store_true", help="with --set: keep in-domain models")
    r.add_argument("--min-agree", type=int, default=3)
    r.add_argument("--agree-wer", type=float, default=0.15)
    r.add_argument("--ref-wer", type=float, default=0.4)
    r.add_argument("--panel-max-wer", type=float)
    r.add_argument("--quran", metavar="PATH", help="Qur'an text (tanzil sura|aya|text) for the 5-gram check")
    r.add_argument("--worklist", metavar="PATH", help="write a blind adjudication worklist (random+flagged)")
    r.add_argument("--random", type=int, default=200, help="random items in the worklist (200)")
    r.add_argument("--seed", type=int, default=0)
    c = sub.add_parser("contamination", help="test/train overlap; residual screen and exposure")
    _common(c)
    c.add_argument("--train", metavar="PATH", help="training texts: a file, directory or hf:// spec")
    c.add_argument("--train-format", choices=FORMATS)
    c.add_argument("--train-id-field")
    c.add_argument("--train-field", help="text field of the training records")
    c.add_argument("--id-key", help="join this test field (or meta field) against the training ids")
    c.add_argument("--n", type=int, default=8, help="word n-gram size for the coverage check (8)")
    c.add_argument("--screen", action="store_true", help="residual screen of results/<lang>/*/summary.json")
    c.add_argument("--reference-sets", nargs="+", default=["fleurs_ar", "mixat_cs"], metavar="CORPUS")
    c.add_argument("--z", type=float, default=-2.5, help="flag cells at or below this z (-2.5)")
    return ap


def main_audit(argv: list[str] | None = None) -> None:
    if argv and argv[0] == "taxonomy":  # the error budget has its own parser (sttarena/taxonomy.py)
        from ..taxonomy import main as main_taxonomy

        main_taxonomy(argv[1:])
        return
    args = parser().parse_args(argv)
    {"floor": _floor, "variants": _variants, "refs": _refs, "contamination": _contamination}[args.cmd](args)
