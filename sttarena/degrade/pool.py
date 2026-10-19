"""Talker pool for babble_v2 and speech-shaped noise: speech that is in no test set.

v1 babble drew 40 utterances from each of the suite's *other* test sets, so test speakers and test sentences
played behind other test items. The v2 pool comes from a training split (Arabic: Common Voice `train`;
English: LibriSpeech train-clean-100; both speaker-disjoint from their own test splits by construction),
reads only the first parquet shard(s), and drops every utterance whose speaker or normalized sentence occurs
in a built clean set of `disjoint_from` (default: every set of the suite). Rows are ranked by sha256 of
(source, split/row) like the test sets, at most `per_speaker` per speaker, 2-15 s long. The pool is cached
as ``<noise root>/babble_pool/<lang>-<spec hash>.parquet`` next to a JSON manifest (source revision, shard
files, ids, exclusions), so a build is reproducible and every talker in meta.degradation can be traced.

Spec (`babble_pool:` in a v2 condition or in the hallucination block of a suite):
  source: MohamedRashad/common-voice-18-arabic    config: null    split: train
  max_files: 1            # parquet shards read, in hub order
  speaker: client_id      # speaker column (missing: every utterance counts as its own speaker)
  text: sentence          # transcript column, for the sentence-overlap filter
  n: 600                  per_speaker: 3          disjoint_from: [cv18_ar]
"""

from __future__ import annotations

import hashlib
import json
from pathlib import Path

from .profiles import PROFILE_V2

POOL_DIR = "babble_pool"
MIN_S, MAX_S = 2.0, 15.0


def pool_path(noise_root: str | Path, lang: str, spec: dict) -> Path:
    key = hashlib.sha256(json.dumps(spec, sort_keys=True).encode()).hexdigest()[:10]
    return Path(noise_root) / POOL_DIR / f"{lang}-{key}.parquet"


def _excluded(lang: str, sets: list[str], speaker_col: str) -> tuple[set[str], set[str]]:
    """Speakers and normalized sentences of the built clean sets."""
    import pyarrow.parquet as pq

    from ..data import set_path
    from ..normalizers import get_normalizer

    norm, speakers, texts = get_normalizer(lang), set(), set()
    for name in sets:
        p = set_path(lang, name)
        if not p.exists():
            continue
        for r in pq.read_table(p, columns=["text", "meta"]).to_pylist():
            texts.add(norm(r["text"] or ""))
            spk = json.loads(r["meta"] or "{}").get(speaker_col)
            if spk is not None:
                speakers.add(str(spk))
    texts.discard("")
    return speakers, texts


def build_babble_pool(spec: dict, lang: str, suite_sets: list[str], noise_root: str | Path) -> Path:
    """Build (or reuse) the cached pool for `spec`; returns the parquet path."""
    path = pool_path(noise_root, lang, spec)
    if path.exists():
        return path
    from datasets import Audio, load_dataset, load_dataset_builder
    from tqdm import tqdm

    from ..data import decode_audio, encode_flac, rank_key, write_rows
    from ..normalizers import get_normalizer

    source, split, config = spec["source"], spec.get("split", "train"), spec.get("config")
    files = list(load_dataset_builder(source, config).config.data_files[split])[: spec.get("max_files", 1)]
    ds = load_dataset("parquet", data_files={split: files}, split=split)
    audio_col = next(k for k, f in ds.features.items() if isinstance(f, Audio))
    ds = ds.cast_column(audio_col, Audio(decode=False))
    spk_col, text_col = spec.get("speaker"), spec.get("text")
    bad_spk, bad_text = _excluded(lang, spec.get("disjoint_from") or suite_sets, spk_col or "")
    norm = get_normalizer(lang)
    light = ds.select_columns([c for c in (spk_col, text_col) if c and c in ds.column_names])
    order = sorted(range(len(ds)), key=lambda i: rank_key(source, f"{split}/{i}"))
    rows, per_spk, dropped = [], {}, {"speaker": 0, "sentence": 0, "duration": 0}
    pbar = tqdm(total=spec.get("n", 600), desc=f"babble pool {lang}")
    for i in order:
        if len(rows) >= spec.get("n", 600):
            break
        r = light[i]
        spk = str(r.get(spk_col) or f"{split}/{i}")
        text = r.get(text_col) or ""
        if spk in bad_spk:
            dropped["speaker"] += 1
            continue
        if text and norm(text) in bad_text:
            dropped["sentence"] += 1
            continue
        if per_spk.get(spk, 0) >= spec.get("per_speaker", 3):
            continue
        audio, sr = decode_audio(ds[i][audio_col], 16000)
        if not MIN_S <= len(audio) / sr <= MAX_S:
            dropped["duration"] += 1
            continue
        per_spk[spk] = per_spk.get(spk, 0) + 1
        duration = round(len(audio) / sr, 3)
        rows.append({"id": f"{source}/{split}/{i}", "speaker": spk, "text": text, "duration": duration,
                     "audio": {"bytes": encode_flac(audio, sr), "path": None}})
        pbar.update(1)
    pbar.close()
    if len(per_spk) < PROFILE_V2["babble"]["talkers"][1]:
        print(f"warning: the babble pool has {len(per_spk)} speakers; babble_v2 draws up to "
              f"{PROFILE_V2['babble']['talkers'][1]} distinct talkers and uses fewer when the pool has fewer")
    write_rows(path, rows)
    try:
        from huggingface_hub import HfApi

        revision = HfApi().dataset_info(source).sha
    except Exception:  # offline: the shard files still pin the content
        revision = None
    manifest = {"spec": spec, "revision": revision, "files": [str(f) for f in files], "num_rows": len(rows),
                "num_speakers": len(per_spk), "dropped": dropped, "ids": [r["id"] for r in rows]}
    path.with_suffix(".json").write_text(json.dumps(manifest, ensure_ascii=False, indent=1))
    return path
