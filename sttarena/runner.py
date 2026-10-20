"""Run one model over a suite and write per-set predictions and scores.

results/<lang>/<model>/summary.json                       scores for every (set, condition)
results/<lang>/<model>/predictions/<set>__<cond>.jsonl    one scored record per utterance

A prediction record keeps the raw reference(s) and hypothesis plus the v2 scores of every
profile (sttarena/scoring.py), so a normalizer or reference fix only needs `sttarena rescore`.
A batch that raises is retried one utterance at a time; an utterance that still fails is marked
`failed` (it scores as deletions, and the set is flagged incomplete) instead of passing as an
empty transcript.
"""

from __future__ import annotations

import json
import platform
import time
from datetime import datetime, timezone

import numpy as np
import soxr
from tqdm import tqdm

from .data import ROOT, SetSpec, Suite, iter_rows, set_path
from .models.base import SR, cuda_sync
from .models.registry import get_spec, load_model
from .normalizers.markup import MarkupSpec
from .scoring import DEFAULT_PROFILES, HEADLINE, Scorer, SetScore

RESULTS_DIR = ROOT / "results"
RESULT_SCHEMA = "result@2.0"
PROTOCOL = {"decoding": "greedy", "language": "forced", "precision": "released", "batching": "length-sorted",
            "warmup": "2 s of silence before the first set", "timing": "transcription only, model loading excluded"}


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


def _pct(x: float | None) -> str:
    return "     —" if x is None else f"{x * 100:6.2f}"


def _is_oom(e: Exception) -> bool:
    return "out of memory" in str(e).lower()


def _transcribe(model, batch: list, lang: str) -> list[str]:
    """Transcribe a batch; on CUDA OOM, halve it and retry instead of losing the whole batch."""
    try:
        return model.transcribe(batch, lang)
    except Exception as e:
        if not _is_oom(e) or len(batch) == 1:
            raise
        try:
            import torch

            torch.cuda.empty_cache()
        except ImportError:
            pass
        h = len(batch) // 2
        return _transcribe(model, batch[:h], lang) + _transcribe(model, batch[h:], lang)


def transcribe_rows(model, rows: list[dict], lang: str, bs: int, desc: str) -> tuple[list[str], list[bool], float]:
    """Length-sorted batch transcription. Returns hypotheses, failure flags and transcription seconds."""
    order = sorted(range(len(rows)), key=lambda i: -len(rows[i]["audio"]))
    hyps, failed = [""] * len(rows), [False] * len(rows)
    elapsed = 0.0
    for start in tqdm(range(0, len(order), bs), desc=desc, leave=False):
        idx = order[start : start + bs]
        cuda_sync()
        t0 = time.perf_counter()
        try:
            out = _transcribe(model, [rows[i]["audio"] for i in idx], lang)
        except Exception as e:  # retry one by one so a single bad clip does not sink the batch
            print(f"[error] {desc} batch {start}: {type(e).__name__}: {e}; retrying one by one")
            out = []
            for i in idx:
                try:
                    out += _transcribe(model, [rows[i]["audio"]], lang)
                except Exception as e1:  # noqa: BLE001
                    print(f"[failed] {rows[i]['id']}: {type(e1).__name__}: {e1}")
                    out.append(None)
        cuda_sync()
        elapsed += time.perf_counter() - t0
        for i, h in zip(idx, out):
            failed[i] = h is None
            hyps[i] = _clean_hyp(h or "")
    return hyps, failed, elapsed


def scorer_for(suite: Suite, spec: SetSpec | None) -> Scorer:
    head = suite.scoring.get("headline", HEADLINE)
    markup = MarkupSpec.parse(spec.markup).with_extra(spec.markup_extra) if spec else None
    return Scorer(suite.language, profiles=DEFAULT_PROFILES, headline=head, markup=markup)


def score_rows(suite: Suite, name: str, rows: list[dict], hyps: list[str], failed: list[bool],
               cond: str = "clean") -> SetScore:
    """Score one (set, condition): rows carry id, text, duration, meta. Degraded rows keep the clean
    utterance id (or "<clean id>#<variant>" when one source utterance yields several rows), so
    `source_utt` pairs them with the clean condition for paired statistics."""
    spec = suite.sets.get(name)
    group_by = suite.degraded.get(cond, {}).get("group_by") or []
    if name == "noise_only_v2":  # scored per non-speech group (silence-like, tones, DTMF, office, ...)
        group_by = ["group"]
    items = []
    for r, h, f in zip(rows, hyps, failed):
        meta = r.get("meta") or {}
        refs = r.get("refs") or (spec.references_of(r["text"], meta) if spec else [r["text"]])
        item = {"id": r["id"], "refs": refs, "hyp": h, "failed": f, "duration": r.get("duration"),
                "source_utt": r["id"].split("#")[0]}
        # labels come from the built row's meta; a row rebuilt from a prediction record carries them itself
        for which in ("cluster", "stratum"):
            item[which] = r[which] if which in r else (spec.label(which, meta) if spec else None)
        terms = r.get("terms") or (spec.terms_of(meta) if spec else None)
        if terms:
            item["terms"] = terms
        if "group" in r:
            item["group"] = r["group"]
        elif group_by:
            deg = meta.get("degradation", {})
            item["group"] = "|".join(f"{k}={deg.get(k, meta.get(k))}" for k in group_by)
        items.append(item)
    return scorer_for(suite, spec).score(items)


def result_entry(scored: SetScore, rows: list[dict], name: str, cond: str, track: str, elapsed: float | None,
                 limit: int | None = None) -> dict:
    """summary.json entry: the v2 scoring summary plus the v1 fields older tools read."""
    summ = scored.summary()
    audio_sec = sum(r.get("duration") or 0 for r in rows)
    res = {"schema": RESULT_SCHEMA, "track": track, "set": name, "condition": cond,
           "audio_hours": round(audio_sec / 3600, 4), "limit": limit,
           "date": datetime.now(timezone.utc).isoformat(timespec="seconds"), "scoring": summ}
    if elapsed is not None:
        res.update(seconds=round(elapsed, 2), rtfx=round(audio_sec / elapsed, 2) if elapsed else None)
    n_failed = sum(u["diag"]["failed"] for u in scored.utterances)
    res["num_failed"] = n_failed
    if track == "hallucination":
        ns = summ.get("nonspeech", {})
        res.update(hallucination_rate=ns.get("halluc_any"), hallucination_3plus=ns.get("halluc_3plus"),
                   inserted_wpm=ns.get("inserted_wpm"), num_utterances=len(rows), wer=None, cer=None)
    else:
        v1 = summ["profiles"].get("v1", {})
        head = summ.get("headline", {})
        res.update(wer=v1.get("wer_uncapped"), cer=v1.get("cer"), num_utterances=v1.get("num_utterances"),
                   wer_v2=head.get("wer"), cer_v2=head.get("cer_ns"))
    return res


def write_predictions(path, scored: SetScore) -> None:
    with open(path, "w") as f:
        for u in scored.utterances:
            f.write(json.dumps(u, ensure_ascii=False) + "\n")


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
        hyps, failed, elapsed = transcribe_rows(model, rows, lang, bs, f"{model_key} {key}")
        scored = score_rows(suite, name, rows, hyps, failed, cond)
        res = result_entry(scored, rows, name, cond, track, elapsed, limit)
        if track == "hallucination":
            line = f"halluc {_pct(res['hallucination_rate'])}%  3+ words {_pct(res['hallucination_3plus'])}%"
        else:
            line = f"WER v2 {_pct(res['wer_v2'])}  v1 {_pct(res['wer'])}  CER v2 {_pct(res['cer_v2'])}"
        if res["num_failed"]:
            line += f"  FAILED {res['num_failed']}"
        print(f"{model_key:34s} {key:28s} {line}  RTFx {res['rtfx']}")
        # smoke tests (--limit) must not overwrite full predictions: the bootstrap intersects utterance ids
        if limit is None:
            write_predictions(pred_dir / f"{name}__{cond}.jsonl", scored)
            summary["results"][key] = res
            summary.update(model=model_key, hf_id=spec.hf_id, params_b=spec.params_b, license=spec.license,
                           kind=spec.kind, language=lang, env=_env_info(), batch_size=bs, schema=RESULT_SCHEMA,
                           protocol={**PROTOCOL, "backend": spec.backend, "kwargs": spec.kwargs},
                           scoring=scored.config)
            summary_path.write_text(json.dumps(summary, indent=1, ensure_ascii=False))
    return summary
