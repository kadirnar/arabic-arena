"""Bootstrap 95% confidence intervals for set, track and Arena WER, and for leaderboard ranks.

Utterances are resampled with replacement within every set, B times. The same resample is
applied to every model (a paired bootstrap), so the rank interval reflects how often two
models actually swap places, not just whether their marginal intervals overlap. Each set is
resampled independently with a seed derived from its name, so results are reproducible.

Needs the local predictions/*.jsonl files. The output, results/<lang>/bootstrap.json, is
committed so the leaderboard can be rebuilt without them.

    python -m sttarena.bootstrap --suite arabic [-B 1000]
"""

from __future__ import annotations

import argparse
import json

import jiwer
import numpy as np

from .data import Suite
from .degrade.chain import seed_for
from .runner import RESULTS_DIR


def _utterance_errors(path) -> dict[str, tuple[int, int]]:
    """id -> (word errors, reference words) under the v1 scorer: from the v1 counts of a v2 record, or
    from the normalized text saved with a v1 prediction."""
    preds = [json.loads(line) for line in path.open()]
    if preds and "scores" in preds[0]:
        out = {}
        for p in preds:
            v1 = p["scores"].get("v1", {})
            if v1.get("n"):
                out[p["id"]] = (v1["S"] + v1["D"] + v1["I"], int(v1["n"]))
        return out
    preds = [p for p in preds if p["ref_norm"].strip()]  # corpus_error_rates drops empty references
    if not preds:
        return {}
    out = jiwer.process_words([p["ref_norm"] for p in preds], [p["hyp_norm"] if p["hyp_norm"].strip() else "∅"
                                                             for p in preds])
    errs = {}
    for p, chunks, ref in zip(preds, out.alignments, out.references):
        e = 0
        for c in chunks:
            if c.type == "substitute" or c.type == "delete":
                e += c.ref_end_idx - c.ref_start_idx
            elif c.type == "insert":
                e += c.hyp_end_idx - c.hyp_start_idx
        errs[p["id"]] = (e, len(ref))
    return errs


def compute(suite_name: str, n_boot: int = 1000) -> dict:
    suite = Suite.load(suite_name)
    lang = suite.language
    tracks: dict[str, list[str]] = {}
    for name, cond, track in suite.eval_sets():
        if track != "hallucination":
            tracks.setdefault(track, []).append(f"{name}/{cond}")
    weights = {t: v["weight"] for t, v in suite.scoring.get("tracks", {}).items() if t in tracks}
    models = sorted(p.parent.name for p in (RESULTS_DIR / lang).glob("*/predictions"))
    keys = [k for ks in tracks.values() for k in ks]

    samples: dict[str, dict[str, np.ndarray]] = {m: {} for m in models}  # model -> set key -> (B,) WER
    for key in keys:
        name, cond = key.split("/")
        per_model = {}
        for m in models:
            f = RESULTS_DIR / lang / m / "predictions" / f"{name}__{cond}.jsonl"
            if f.exists():
                per_model[m] = _utterance_errors(f)
        if not per_model:
            continue
        ids = sorted(set.intersection(*(set(e) for e in per_model.values())))
        if not ids:
            continue
        ms = list(per_model)
        err = np.array([[per_model[m][i][0] for i in ids] for m in ms], dtype=np.float64)  # (M, n)
        nref = np.array([per_model[ms[0]][i][1] for i in ids], dtype=np.float64)  # (n,)
        rng = np.random.default_rng(seed_for(lang, key, "bootstrap"))
        counts = rng.multinomial(len(ids), np.full(len(ids), 1 / len(ids)), size=n_boot).astype(np.float64)
        wer = (counts @ err.T) / (counts @ nref)[:, None]  # (B, M)
        for j, m in enumerate(ms):
            samples[m][key] = wer[:, j]

    def ci(x):
        lo, hi = np.percentile(x, [2.5, 97.5])
        return [round(float(lo), 5), round(float(hi), 5)]

    out = {"n_boot": n_boot, "models": {}}
    arena = {}
    for m in models:
        s = samples[m]
        entry = {"sets": {k: ci(v) for k, v in s.items()}, "tracks": {}}
        track_samples = {}
        for t, ks in tracks.items():
            if all(k in s for k in ks):
                track_samples[t] = np.mean([s[k] for k in ks], axis=0)
                entry["tracks"][t] = ci(track_samples[t])
        if weights and all(t in track_samples for t in weights):
            z = sum(weights.values())
            arena[m] = sum(track_samples[t] * w for t, w in weights.items()) / z
            entry["arena_wer"] = ci(arena[m])
        out["models"][m] = entry

    # Rank interval among the models that have a full Arena score (rank 1 = lowest WER).
    if arena:
        names = list(arena)
        mat = np.stack([arena[m] for m in names], axis=1)  # (B, M)
        ranks = mat.argsort(axis=1).argsort(axis=1) + 1
        for j, m in enumerate(names):
            lo, hi = np.percentile(ranks[:, j], [2.5, 97.5])
            out["models"][m]["rank"] = [int(np.floor(lo)), int(np.ceil(hi))]
    return out


def save(suite_name: str, n_boot: int = 1000) -> dict:
    """Recompute from the local predictions and write results/<lang>/bootstrap.json."""
    res = compute(suite_name, n_boot)
    lang = Suite.load(suite_name).language
    (RESULTS_DIR / lang / "bootstrap.json").write_text(json.dumps(res, indent=1))
    return res


def load(lang: str) -> dict:
    path = RESULTS_DIR / lang / "bootstrap.json"
    return json.loads(path.read_text()) if path.exists() else {"models": {}}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--suite", default="arabic")
    ap.add_argument("-B", type=int, default=1000)
    args = ap.parse_args()
    res = save(args.suite, args.B)
    rows = sorted((v["arena_wer"], m, v.get("rank")) for m, v in res["models"].items() if "arena_wer" in v)
    for (lo, hi), m, rank in rows:
        print(f"{m:45s} {lo * 100:6.2f} – {hi * 100:6.2f}   rank {rank[0]}–{rank[1]}")


if __name__ == "__main__":
    main()
