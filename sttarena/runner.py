"""Run one model over a suite and write per-set predictions and scores.

results/<lang>/<model>/summary.json                       scores for every (set, condition)
results/<lang>/<model>/predictions/<set>__<cond>.jsonl    references and hypotheses
"""

from __future__ import annotations

import json
import platform
import time
from datetime import datetime, timezone

import numpy as np
import soxr
from tqdm import tqdm

from .data import ROOT, Suite, iter_rows, set_path
from .metrics import corpus_error_rates, utterance_wer
from .models.base import SR, cuda_sync
from .models.registry import get_spec, load_model
from .normalizers import get_normalizer

RESULTS_DIR = ROOT / "results"


def _env_info() -> dict:
    info = {"python": platform.python_version(), "host": platform.node()}
    try:
        import torch

        info["torch"] = torch.__version__
        if torch.cuda.is_available():
            info["gpu"] = torch.cuda.get_device_name(0)
    except ImportError:
        pass
    try:
        import transformers

        info["transformers"] = transformers.__version__
    except ImportError:
        pass
    return info


def _clean_hyp(text: str) -> str:
    return " ".join((text or "").split())


def run(model_key: str, suite_name: str, sets: list[str] | None = None, conditions: list[str] | None = None,
        limit: int | None = None, batch_size: int | None = None, force: bool = False) -> dict:
    suite = Suite.load(suite_name)
    lang = suite.language
    spec = get_spec(model_key)
    if lang not in spec.languages:
        raise ValueError(f"{model_key} does not support {lang}")
    out_dir = RESULTS_DIR / lang / model_key.replace("/", "__")
    pred_dir = out_dir / "predictions"
    pred_dir.mkdir(parents=True, exist_ok=True)
    summary_path = out_dir / "summary.json"
    summary = json.loads(summary_path.read_text()) if summary_path.exists() else {"results": {}}
    normalize = get_normalizer(lang)
    bs = batch_size or spec.batch_size

    todo = []
    for name, cond, track in suite.eval_sets():
        if (sets and name not in sets) or (conditions and cond not in conditions):
            continue
        key = f"{name}/{cond}"
        if key in summary["results"] and not force and limit is None:
            continue
        if not set_path(lang, name, cond).exists():
            print(f"[skip] {key}: not built")
            continue
        todo.append((name, cond, track, key))
    if not todo:
        print(f"{model_key}: nothing to do")
        return summary

    try:
        from transformers.utils import logging as hf_logging

        hf_logging.set_verbosity_error()
    except ImportError:
        pass
    model = load_model(model_key)
    # Warm-up so CUDA graph capture / kernel autotuning is not billed to the first set.
    model.transcribe([np.zeros(SR * 2, dtype=np.float32)], lang)

    for name, cond, track, key in todo:
        rows = list(iter_rows(lang, name, cond, limit))
        for r in rows:
            if r["sampling_rate"] != SR:  # telephony audio is 8 kHz; models consume 16 kHz
                r["audio"] = soxr.resample(r["audio"], r["sampling_rate"], SR).astype(np.float32)
        order = sorted(range(len(rows)), key=lambda i: -len(rows[i]["audio"]))
        hyps: list[str] = [""] * len(rows)
        elapsed = 0.0
        for start in tqdm(range(0, len(order), bs), desc=f"{model_key} {key}", leave=False):
            idx = order[start : start + bs]
            batch = [rows[i]["audio"] for i in idx]
            cuda_sync()
            t0 = time.perf_counter()
            try:
                out = model.transcribe(batch, lang)
            except Exception as e:  # keep going; a failed batch scores as deletions
                print(f"[error] {key} batch {start}: {type(e).__name__}: {e}")
                out = [""] * len(idx)
            cuda_sync()
            elapsed += time.perf_counter() - t0
            for i, h in zip(idx, out):
                hyps[i] = _clean_hyp(h)

        refs_n = [normalize(r["text"]) for r in rows]
        hyps_n = [normalize(h) for h in hyps]
        stats = corpus_error_rates(refs_n, hyps_n)
        audio_sec = sum(r["duration"] for r in rows)
        with open(pred_dir / f"{name}__{cond}.jsonl", "w") as f:
            for r, h, rn, hn in zip(rows, hyps, refs_n, hyps_n):
                f.write(json.dumps({"id": r["id"], "ref": r["text"], "hyp": h, "ref_norm": rn, "hyp_norm": hn,
                                    "wer": round(utterance_wer(rn, hn), 4), "duration": r["duration"]},
                                   ensure_ascii=False) + "\n")
        speed = model.pop_speed_factor() if hasattr(model, "pop_speed_factor") else None
        res = {**stats.to_dict(), "track": track, "speed_factor": speed, "set": name, "condition": cond,
               "audio_hours": round(audio_sec / 3600, 4), "seconds": round(elapsed, 2),
               "rtfx": round(audio_sec / elapsed, 2) if elapsed else None, "limit": limit,
               "date": datetime.now(timezone.utc).isoformat(timespec="seconds")}
        print(f"{model_key:34s} {key:28s} WER {stats.wer * 100:6.2f}  CER {stats.cer * 100:6.2f}  "
              f"RTFx {res['rtfx']}")
        if limit is None:
            summary["results"][key] = res
            summary.update(model=model_key, hf_id=spec.hf_id, params_b=spec.params_b, license=spec.license,
                           kind=spec.kind, usd_per_min=spec.kwargs.get("usd_per_min"), language=lang, env=_env_info(), batch_size=bs)
            summary_path.write_text(json.dumps(summary, indent=1, ensure_ascii=False))
    return summary
