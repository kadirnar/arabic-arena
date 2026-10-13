"""Benchmark set construction and loading.

Built sets live in ``data/<lang>/<set>/<condition>.parquet`` with columns
``id, audio{bytes,path}, sampling_rate, text, duration, meta`` (meta is a JSON string).
"""

from __future__ import annotations

import hashlib
import io
import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterator

import numpy as np
import soundfile as sf
import soxr
import yaml

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
SUITES_DIR = ROOT / "configs" / "suites"

MIN_SEC, MAX_SEC = 1.0, 30.0


@dataclass
class SetSpec:
    name: str
    source: str
    split: str
    text: str
    n: int
    track: str
    config: str | None = None
    configs: list[str] | None = None
    data_files: str | None = None
    max_files: int | None = None  # only read the first k shards of very large test splits
    filter: dict[str, Any] = field(default_factory=dict)
    unbracket: bool = False
    dialect: str = ""
    domain: str = ""
    license: str = ""
    redistribute: bool = False


@dataclass
class Suite:
    language: str
    hf_repo: str
    sets: dict[str, SetSpec]
    degraded: dict[str, dict]
    scoring: dict

    @classmethod
    def load(cls, name_or_path: str) -> "Suite":
        path = Path(name_or_path)
        if not path.exists():
            path = SUITES_DIR / f"{name_or_path}.yaml"
        cfg = yaml.safe_load(path.read_text())
        sets = {k: SetSpec(name=k, **v) for k, v in cfg["datasets"].items()}
        return cls(cfg["language"], cfg["hf_repo"], sets, cfg.get("degraded", {}), cfg.get("scoring", {}))

    def eval_sets(self) -> list[tuple[str, str, str]]:
        """All (set, condition, track) pairs that make up the suite."""
        out = [(s.name, "clean", s.track) for s in self.sets.values()]
        for cond, d in self.degraded.items():
            out += [(name, cond, cond) for name in d["from"]]
        return out


def rank_key(source: str, uid: str) -> str:
    return hashlib.sha256(f"{source}|{uid}".encode()).hexdigest()


def decode_audio(blob: dict, target_sr: int | None = 16000) -> tuple[np.ndarray, int]:
    if blob.get("bytes"):
        x, sr = sf.read(io.BytesIO(blob["bytes"]), dtype="float32", always_2d=True)
    else:
        x, sr = sf.read(blob["path"], dtype="float32", always_2d=True)
    x = x.mean(axis=1)
    if target_sr and sr != target_sr:
        x = soxr.resample(x, sr, target_sr).astype(np.float32)
        sr = target_sr
    return x, sr


def encode_flac(x: np.ndarray, sr: int) -> bytes:
    buf = io.BytesIO()
    sf.write(buf, np.clip(x, -1, 1), sr, format="FLAC", subtype="PCM_16")
    return buf.getvalue()


def set_path(lang: str, name: str, condition: str = "clean") -> Path:
    return DATA_DIR / lang / name / f"{condition}.parquet"


def write_rows(path: Path, rows: list[dict]) -> None:
    from datasets import Audio, Dataset

    path.parent.mkdir(parents=True, exist_ok=True)
    ds = Dataset.from_list(rows).cast_column("audio", Audio(decode=False))
    ds.to_parquet(str(path))


def iter_rows(lang: str, name: str, condition: str = "clean", limit: int | None = None) -> Iterator[dict]:
    """Yields dicts with decoded float32 audio at the stored sampling rate."""
    import pyarrow.parquet as pq

    path = set_path(lang, name, condition)
    if not path.exists():
        raise FileNotFoundError(f"{path} missing - run scripts/build_benchmark.py first")
    table = pq.read_table(path)
    count = table.num_rows if limit is None else min(limit, table.num_rows)
    for batch in table.slice(0, count).to_batches(max_chunksize=256):
        for r in batch.to_pylist():
            audio, sr = decode_audio(r["audio"], target_sr=None)
            yield {
                "id": r["id"],
                "audio": audio,
                "sampling_rate": sr,
                "text": r["text"],
                "duration": r["duration"],
                "meta": json.loads(r["meta"]) if r.get("meta") else {},
            }
