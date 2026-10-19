"""Benchmark set construction and loading.

Built sets live in ``data/<lang>/<set>/<condition>.parquet`` with columns
``id, audio{bytes,path}, sampling_rate, text, duration, meta`` (meta is a JSON string).
"""

from __future__ import annotations

import hashlib
import io
import json
import re
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
    # JSON {"key": <meta field>, "texts": {<value>: <corrected reference>}} applied on top of the source text
    text_fixes: str | None = None
    # --- scoring v2 ---------------------------------------------------------------------------
    # corpus markup stripped before scoring (sttarena/normalizers/markup.py): None = all patterns,
    # "none", or a list of pattern names; markup_extra adds set-specific {pattern, repl} pairs
    markup: Any = None
    markup_extra: list[dict] = field(default_factory=list)
    # meta fields that hold further independent transcriptions (multi-reference scoring)
    references: list[str] = field(default_factory=list)
    # bootstrap cluster (speaker / video / recording / sentence) and stratum (dialect config):
    # {field: <meta field>, regex: <optional pattern whose first group is the label>}
    cluster: dict[str, str] | None = None
    stratum: dict[str, str] | None = None
    # measured human disagreement on this set ({profile: WER, "source": how it was measured}): the
    # WER a second careful transcriber gets, shown next to model scores as the floor / headroom
    floor: dict[str, Any] | None = None
    # splits that store several annotators' segmentations of the same audio (MGB-5):
    # {field: <id column>, regex: <named groups rec, ann, start, end>, min_overlap: 0.5}; the builder keeps
    # one segmentation and stores the others' overlapping text as meta alt_ref_1..3 (see
    # multi_annotator_groups)
    multi_annotator: dict[str, Any] | None = None
    # the audio itself is a simulation (e.g. NADI-2026's 4 kHz band-limited Casablanca); degraded
    # conditions are always simulated. The leaderboard also reports an Arena over real audio only.
    simulated: bool = False

    def load_text_fixes(self) -> tuple[str, dict[str, str]] | None:
        if not self.text_fixes:
            return None
        cfg = json.loads((ROOT / self.text_fixes).read_text())
        return cfg["key"], cfg["texts"]

    def prepare_text(self, text: str | None) -> str:
        """Source text as it is stored in a built set (also applied to extra references)."""
        text = (text or "").replace("\n", " ").strip()
        if self.unbracket:
            text = text.replace("[", " ").replace("]", " ")
        return " ".join(text.split())

    def references_of(self, text: str, meta: dict) -> list[str]:
        """The stored reference followed by every non-empty extra reference from meta."""
        extra = [self.prepare_text(meta.get(f)) for f in self.references]
        return [text, *[e for e in extra if e]]

    def label(self, which: str, meta: dict) -> str | None:
        """Cluster or stratum label of a row (None when the set declares none or the field is missing)."""
        spec = self.cluster if which == "cluster" else self.stratum
        if not spec or meta.get(spec["field"]) is None:
            return None
        value = str(meta[spec["field"]])
        if spec.get("regex"):
            m = re.match(spec["regex"], value)
            value = m.group(1) if m else value
        return value


@dataclass
class Suite:
    language: str
    hf_repo: str
    sets: dict[str, SetSpec]
    degraded: dict[str, dict]
    scoring: dict
    hallucination: bool | dict = False  # true, or a mapping whose "v2" key configures the v2 noise-only set

    @classmethod
    def load(cls, name_or_path: str) -> "Suite":
        path = Path(name_or_path)
        if not path.exists():
            path = SUITES_DIR / f"{name_or_path}.yaml"
        cfg = yaml.safe_load(path.read_text())
        sets = {k: SetSpec(name=k, **v) for k, v in cfg["datasets"].items()}
        return cls(cfg["language"], cfg["hf_repo"], sets, cfg.get("degraded", {}), cfg.get("scoring", {}),
                   cfg.get("hallucination", False))

    def eval_sets(self) -> list[tuple[str, str, str]]:
        """All (set, condition, track) pairs that make up the suite."""
        out = [(s.name, "clean", s.track) for s in self.sets.values()]
        for cond, d in self.degraded.items():
            out += [(name, cond, cond) for name in d["from"]]
        if self.hallucination:  # noise-only clips (scripts/build_hallucination_set.py), not in the Arena score
            out.append(("noise_only", "clean", "hallucination"))
            if isinstance(self.hallucination, dict) and self.hallucination.get("v2"):
                out.append(("noise_only_v2", "clean", "hallucination"))
        return out


def rank_key(source: str, uid: str) -> str:
    return hashlib.sha256(f"{source}|{uid}".encode()).hexdigest()


def multi_annotator_groups(rows: list[tuple[int, str, str]], id_regex: str, min_overlap: float = 0.5,
                           max_refs: int = 3) -> dict[int, list[str]]:
    """De-duplicate a test split that stores each annotator's segmentation of the same recordings.

    MGB-5's HF test split transcribes every recording four times, each annotator with their own
    segments (ids `<rec>_annotator_<k>_<start>_<end>`); sampling rows from it scores the same speech
    several times against different spellings. Per recording, the annotator with the most segments
    becomes the pivot. Each pivot segment gets, per other annotator, the time-ordered text of that
    annotator's segments that overlap it by more than `min_overlap` of their own duration: these are
    its alternative references. rows: (row index, id, text). Returns {pivot row index: [alt refs]}.
    """
    pat = re.compile(id_regex)
    recs: dict[str, dict[str, list[tuple[float, float, int, str]]]] = {}
    for i, uid, text in rows:
        m = pat.match(uid or "")
        if not m:
            continue
        recs.setdefault(m["rec"], {}).setdefault(m["ann"], []).append((float(m["start"]), float(m["end"]), i, text))
    out: dict[int, list[str]] = {}
    for anns in recs.values():
        pivot = max(sorted(anns), key=lambda a: len(anns[a]))
        others = [a for a in sorted(anns) if a != pivot][:max_refs]
        for s0, e0, i, _ in sorted(anns[pivot]):
            alts = []
            for a in others:
                parts = [t for s, e, _, t in sorted(anns[a])
                         if e > s and (min(e, e0) - max(s, s0)) / (e - s) > min_overlap]
                if parts:
                    alts.append(" ".join(p for p in parts if p))
            out[i] = alts
    return out


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
