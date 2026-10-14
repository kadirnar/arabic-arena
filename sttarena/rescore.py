"""Re-score saved predictions against the current references and normalizer. No model, no GPU.

Use it after a reference fix (SetSpec.text_fixes) or a normalizer change: the built parquet files
are patched in place first, then every predictions/*.jsonl is re-normalized and re-scored and
summary.json is updated (timing fields are kept).

    python -m sttarena.rescore --suite arabic [--sets mgb2]
"""

from __future__ import annotations

import argparse
import json
import os

import pyarrow as pa
import pyarrow.parquet as pq

from .data import Suite, set_path
from .metrics import corpus_error_rates, utterance_wer
from .normalizers import get_normalizer
from .runner import RESULTS_DIR


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


def rescore(suite_name: str, sets: list[str] | None = None) -> None:
    suite = Suite.load(suite_name)
    lang = suite.language
    apply_text_fixes(suite, sets)
    normalize = get_normalizer(lang)
    refs: dict[tuple[str, str], dict[str, str]] = {}
    for summary_path in sorted((RESULTS_DIR / lang).glob("*/summary.json")):
        summary = json.loads(summary_path.read_text())
        pred_dir = summary_path.parent / "predictions"
        changed = []
        for key, res in summary["results"].items():
            name, cond = key.split("/")
            if (sets and name not in sets) or res.get("track") == "hallucination":
                continue
            pf = pred_dir / f"{name}__{cond}.jsonl"
            if not pf.exists() or not set_path(lang, name, cond).exists():
                continue
            if (name, cond) not in refs:
                t = pq.read_table(set_path(lang, name, cond), columns=["id", "text"]).to_pylist()
                refs[(name, cond)] = {r["id"]: r["text"] for r in t}
            ref_of = refs[(name, cond)]
            preds = [json.loads(line) for line in pf.open()]
            for p in preds:
                p["ref"] = ref_of.get(p["id"], p["ref"])
                p["ref_norm"], p["hyp_norm"] = normalize(p["ref"]), normalize(p["hyp"])
                p["wer"] = round(utterance_wer(p["ref_norm"], p["hyp_norm"]), 4)
            stats = corpus_error_rates([p["ref_norm"] for p in preds], [p["hyp_norm"] for p in preds]).to_dict()
            if abs((stats["wer"] or 0) - (res.get("wer") or 0)) > 1e-9 or abs((stats["cer"] or 0) - (res.get("cer") or 0)) > 1e-9:
                changed.append(f"{key} {res['wer'] * 100:.2f}->{stats['wer'] * 100:.2f}")
            res.update(stats)
            with open(pf, "w") as f:
                for p in preds:
                    f.write(json.dumps(p, ensure_ascii=False) + "\n")
        summary_path.write_text(json.dumps(summary, indent=1, ensure_ascii=False))
        if changed:
            print(f"{summary_path.parent.name}: " + ", ".join(changed))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--suite", default="arabic")
    ap.add_argument("--sets", nargs="*")
    args = ap.parse_args()
    rescore(args.suite, args.sets)


if __name__ == "__main__":
    main()
