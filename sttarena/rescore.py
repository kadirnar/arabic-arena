"""Re-score saved predictions against the current references and scorer. No model, no GPU.

Use it after a reference fix (SetSpec.text_fixes), a normalizer or variant-table change, or to
upgrade v1 predictions to the v2 scorer: the built parquet files are patched in place first, then
every predictions/*.jsonl (v1 or v2 records; both keep the raw reference and hypothesis) is
re-scored with the suite's profiles, rewritten as v2 records, and summary.json is updated
(timing fields are kept).

    python -m sttarena.rescore --suite arabic [--sets mgb2]
"""

from __future__ import annotations

import argparse
import json
import os

import pyarrow as pa
import pyarrow.parquet as pq

from .data import Suite, set_path
from .runner import RESULT_SCHEMA, RESULTS_DIR, result_entry, score_rows, write_predictions


def apply_text_fixes(suite: Suite, sets: list[str] | None = None) -> int:
    """Patch the text column of built sets (clean and degraded) from each set's text_fixes file."""
    changed = 0
    conds = ["clean", *suite.degraded]
    for spec in suite.sets.values():
        fixes = spec.load_text_fixes()
        if not fixes or (sets and spec.name not in sets):
            continue
        key, texts = fixes
        for cond in conds:
            path = set_path(suite.language, spec.name, cond)
            if not path.exists():
                continue
            t = pq.read_table(path)
            metas = [json.loads(m) for m in t.column("meta").to_pylist()]
            old = t.column("text").to_pylist()
            new = [texts.get(str(m.get(key)), o) for m, o in zip(metas, old)]
            n = sum(a != b for a, b in zip(old, new))
            if n:
                t = t.set_column(t.schema.get_field_index("text"), "text", pa.array(new, pa.string()))
                tmp = path.with_suffix(".tmp")
                pq.write_table(t, tmp)
                os.replace(tmp, path)  # atomic, so a running evaluation never reads a half-written file
                print(f"{spec.name}/{cond}: fixed {n} references")
                changed += n
    return changed


def _built_rows(lang: str, name: str, cond: str) -> dict[str, dict]:
    path = set_path(lang, name, cond)
    if not path.exists():
        return {}
    t = pq.read_table(path, columns=["id", "text", "duration", "meta"]).to_pylist()
    return {r["id"]: {**r, "meta": json.loads(r["meta"]) if r.get("meta") else {}} for r in t}


def _row_from_prediction(p: dict, built: dict[str, dict]) -> dict:
    """The built row when the set is present locally (current references and text fixes, meta for extra
    references, clusters and groups); otherwise what the prediction record itself kept."""
    if p["id"] in built:
        return built[p["id"]]
    row = {"id": p["id"], "text": p.get("ref", ""), "duration": p.get("duration"), "meta": {},
           "refs": [p.get("ref", ""), *p.get("refs_extra", [])]}
    for k in ("cluster", "stratum", "group"):
        if k in p:
            row[k] = p[k]
    return row


def rescore(suite_name: str, sets: list[str] | None = None, models: list[str] | None = None) -> None:
    suite = Suite.load(suite_name)
    lang = suite.language
    apply_text_fixes(suite, sets)
    built: dict[tuple[str, str], dict[str, dict]] = {}
    for summary_path in sorted((RESULTS_DIR / lang).glob("*/summary.json")):
        if models and summary_path.parent.name not in models:
            continue
        summary = json.loads(summary_path.read_text())
        pred_dir = summary_path.parent / "predictions"
        changed = []
        for key, res in summary["results"].items():
            name, cond = key.split("/")
            pf = pred_dir / f"{name}__{cond}.jsonl"
            if (sets and name not in sets) or not pf.exists():
                continue
            if (name, cond) not in built:
                built[(name, cond)] = _built_rows(lang, name, cond)
            preds = [json.loads(line) for line in pf.open()]
            rows = [_row_from_prediction(p, built[(name, cond)]) for p in preds]
            failed = [bool(p.get("failed") or p.get("diag", {}).get("failed")) for p in preds]
            scored = score_rows(suite, name, rows, [p.get("hyp", "") for p in preds], failed, cond)
            new = result_entry(scored, rows, name, cond, res.get("track", ""), None, res.get("limit"))
            for k in ("seconds", "rtfx", "date"):  # keep the timing of the run that produced the hypotheses
                if k in res:
                    new[k] = res[k]
            if res.get("wer") is not None and new.get("wer") is not None and abs(new["wer"] - res["wer"]) > 1e-9:
                changed.append(f"{key} v1 {res['wer'] * 100:.2f}->{new['wer'] * 100:.2f}")
            summary["results"][key] = new
            write_predictions(pf, scored)
        if summary["results"]:
            summary["schema"] = RESULT_SCHEMA
            summary["scoring"] = next(iter(summary["results"].values())).get("scoring", {}).get("config")
        summary_path.write_text(json.dumps(summary, indent=1, ensure_ascii=False))
        print(f"{summary_path.parent.name}: rescored" + (": " + ", ".join(changed) if changed else ""))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--suite", default="arabic")
    ap.add_argument("--sets", nargs="*")
    ap.add_argument("--models", nargs="*")
    args = ap.parse_args()
    rescore(args.suite, args.sets, args.models)


if __name__ == "__main__":
    main()
