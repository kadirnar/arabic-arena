"""Breakdowns that a single average hides: WER by codec, noise type, SNR band and dialect.

Joins results/<lang>/<model>/predictions/*.jsonl with the per-utterance metadata stored in the
built parquet files, then recomputes corpus WER per group.

    python -m sttarena.analysis --suite arabic
"""

from __future__ import annotations

import argparse
import json
from collections import defaultdict

import pyarrow.parquet as pq

from .data import Suite, set_path
from .leaderboard import LB_DIR, SITE_DATA
from .metrics import corpus_error_rates
from .runner import RESULTS_DIR

SNR_BANDS = [(-100, 5, "<5 dB"), (5, 10, "5–10 dB"), (10, 15, "10–15 dB"), (15, 100, "≥15 dB")]


def _meta(lang: str, name: str, cond: str) -> dict[str, dict]:
    t = pq.read_table(set_path(lang, name, cond), columns=["id", "meta"]).to_pylist()
    return {r["id"]: json.loads(r["meta"]) for r in t}


def _groups(meta: dict, cond: str) -> list[tuple[str, str]]:
    out = []
    deg = meta.get("degradation")
    if deg:
        if "codec" in deg:
            out.append(("codec", deg["codec"]))
        if "noise" in deg:
            out.append((f"noise:{cond}", deg["noise"]))
            snr = deg["snr_db"]
            out.append((f"snr:{cond}", next(lbl for lo, hi, lbl in SNR_BANDS if lo <= snr < hi)))
        if deg.get("packet_loss") is not None:
            out.append(("packet_loss", f"{deg['packet_loss'] * 100:.0f}%"))
    elif meta.get("source_config"):
        out.append(("dialect", meta["source_config"]))
    return out


def breakdown(suite_name: str) -> dict:
    suite = Suite.load(suite_name)
    lang = suite.language
    metas = {}
    result: dict = {}
    for mdir in sorted((RESULTS_DIR / lang).glob("*/predictions")):
        model = mdir.parent.name
        buckets: dict[tuple[str, str], list[tuple[str, str]]] = defaultdict(list)
        for f in sorted(mdir.glob("*.jsonl")):
            name, cond = f.stem.split("__")
            if name not in suite.sets:
                continue
            key = (name, cond)
            if key not in metas:
                metas[key] = _meta(lang, name, cond) if set_path(lang, name, cond).exists() else {}
            for line in f.open():
                p = json.loads(line)
                m = metas[key].get(p["id"])
                if not m:
                    continue
                for dim, val in _groups(m, cond):
                    if dim == "dialect":
                        if not suite.sets[name].configs:  # single-config sets carry no dialect split
                            continue
                        val = f"{name}:{val}"
                    buckets[(dim, val)].append((p["ref_norm"], p["hyp_norm"]))
        model_out: dict = defaultdict(dict)
        for (dim, val), pairs in buckets.items():
            refs, hyps = zip(*pairs)
            try:
                s = corpus_error_rates(list(refs), list(hyps))
            except ValueError:
                continue
            model_out[dim][val] = {"wer": s.wer, "cer": s.cer, "n": s.num_utterances}
        result[model] = model_out
    LB_DIR.mkdir(exist_ok=True)
    payload = json.dumps(result, indent=1, ensure_ascii=False)
    (LB_DIR / f"{lang}_breakdown.json").write_text(payload)
    (SITE_DATA / f"{lang}_breakdown.json").write_text(payload)
    (SITE_DATA / f"{lang}_breakdown.js").write_text(
        f"window.ARENA_BREAKDOWN = window.ARENA_BREAKDOWN || {{}};\nwindow.ARENA_BREAKDOWN[{lang!r}] = {payload};\n")
    return result


def to_markdown(result: dict, dim: str) -> str:
    models = [m for m in result if dim in result[m]]
    if not models:
        return ""
    vals = sorted({v for m in models for v in result[m][dim]})
    lines = ["| Model | " + " | ".join(vals) + " |", "|---|" + "---|" * len(vals)]
    for m in models:
        cells = [f"{result[m][dim][v]['wer'] * 100:.1f}" if v in result[m][dim] else "—" for v in vals]
        lines.append(f"| {m} | " + " | ".join(cells) + " |")
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--suite", default="arabic")
    ap.add_argument("--dims", nargs="*", default=["codec", "noise:callcenter", "snr:callcenter", "packet_loss", "dialect"])
    args = ap.parse_args()
    res = breakdown(args.suite)
    lang = Suite.load(args.suite).language
    md = []
    for d in args.dims:
        t = to_markdown(res, d)
        if t:
            md += [f"### WER (%) by {d}", "", t, ""]
    (LB_DIR / f"{lang}_breakdown.md").write_text("\n".join(md))
    print("\n".join(md))


if __name__ == "__main__":
    main()
