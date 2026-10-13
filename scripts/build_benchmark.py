"""Build the benchmark sets of a suite from their Hugging Face sources.

    python scripts/build_benchmark.py --suite arabic                 # everything
    python scripts/build_benchmark.py --suite arabic --sets fleurs_ar sada
    python scripts/build_benchmark.py --suite arabic --degraded-only
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

import numpy as np
from tqdm import tqdm

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from sttarena.data import (  # noqa: E402
    DATA_DIR, MAX_SEC, MIN_SEC, ROOT, SetSpec, Suite, decode_audio, encode_flac, rank_key, set_path,
    write_rows,
)
from sttarena.degrade import NoiseBank, degrade  # noqa: E402
from sttarena.degrade.chain import seed_for  # noqa: E402


def _audio_column(ds) -> str:
    from datasets import Audio

    for k, f in ds.features.items():
        if isinstance(f, Audio):
            return k
    for k in ("audio", "audio_filepath", "wav"):
        if k in ds.column_names:
            return k
    raise KeyError(f"no audio column in {ds.column_names}")


def _source_revision(repo: str) -> str | None:
    try:
        from huggingface_hub import HfApi

        return HfApi().dataset_info(repo).sha
    except Exception:
        return None


def _load_source(spec: SetSpec, config: str | None):
    from datasets import Audio, load_dataset

    if spec.data_files:
        ds = load_dataset("parquet", data_files=f"hf://datasets/{spec.source}/{spec.data_files}", split=spec.split)
    else:
        # Resolve the split's own files first: load_dataset(..., split=) would still download
        # every split (MASC train alone is ~1000 h).
        from datasets import load_dataset_builder

        builder = load_dataset_builder(spec.source, config)
        files = list(builder.config.data_files[spec.split])[: spec.max_files]  # keep hub order: row uids depend on it
        fmt = "parquet" if files[0].endswith(".parquet") else None
        if fmt:
            ds = load_dataset(fmt, data_files={spec.split: files}, split=spec.split)
        else:
            ds = load_dataset(spec.source, config, split=spec.split)
    col = _audio_column(ds)
    return ds.cast_column(col, Audio(decode=False)), col


def _prepare_text(text: str, spec: SetSpec) -> str:
    text = (text or "").replace("\n", " ").strip()
    if spec.unbracket:
        text = text.replace("[", " ").replace("]", " ")
    return " ".join(text.split())


def build_clean(spec: SetSpec, lang: str) -> list[dict]:
    configs = spec.configs or [spec.config]
    per_config = [spec.n // len(configs) + (1 if i < spec.n % len(configs) else 0) for i in range(len(configs))]
    rows: list[dict] = []
    for config, quota in zip(configs, per_config):
        ds, audio_col = _load_source(spec, config)
        cols = [spec.text, *spec.filter]
        meta_cols = [c for c in ds.column_names if c not in (audio_col, spec.text)
                     and ds.features[c].__class__.__name__ == "Value"]
        light = ds.select_columns(sorted(set(cols)))
        cand = []
        for i, r in enumerate(light):
            if any(r[k] != v for k, v in spec.filter.items()):
                continue
            if not _prepare_text(r[spec.text], spec):
                continue
            uid = f"{config}/{i}" if config else str(i)
            cand.append((rank_key(spec.source, uid), i, uid))
        cand.sort()
        taken = 0
        pbar = tqdm(total=quota, desc=f"{spec.name}:{config or 'default'}")
        for _, i, uid in cand:
            if taken >= quota:
                break
            r = ds[i]
            try:
                audio, sr = decode_audio(r[audio_col], 16000)
            except Exception as e:  # corrupt files exist in some corpora
                print(f"skip {uid}: {e}")
                continue
            dur = len(audio) / sr
            if not (MIN_SEC <= dur <= MAX_SEC) or np.max(np.abs(audio)) < 1e-4:
                continue
            meta = {k: r[k] for k in meta_cols if r.get(k) is not None}
            meta.update(source=spec.source, source_config=config, source_index=i, dialect=spec.dialect)
            rows.append({
                "id": f"{spec.name}/{uid}",
                "audio": {"bytes": encode_flac(audio, sr), "path": None},
                "sampling_rate": sr,
                "text": _prepare_text(r[spec.text], spec),
                "duration": round(dur, 3),
                "meta": json.dumps(meta, ensure_ascii=False, default=str),
            })
            taken += 1
            pbar.update(1)
        pbar.close()
        if taken < quota:
            print(f"warning: {spec.name}:{config} only {taken}/{quota} usable rows")
    write_rows(set_path(lang, spec.name), rows)
    manifest = {
        "set": spec.name, "source": spec.source, "configs": configs, "split": spec.split,
        "revision": _source_revision(spec.source), "text_column": spec.text, "filter": spec.filter,
        "num_rows": len(rows), "hours": round(sum(r["duration"] for r in rows) / 3600, 3),
        "license": spec.license, "redistribute": spec.redistribute,
        "ids": [r["id"] for r in rows],
    }
    out = ROOT / "manifests" / lang / f"{spec.name}.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(manifest, ensure_ascii=False, indent=1))
    return rows


# ---- degraded conditions ----------------------------------------------------------------
_BANK: NoiseBank | None = None


def _init_worker(noise_root: str, pool: list[bytes]):
    global _BANK
    _BANK = NoiseBank(noise_root)
    _BANK.add_speech_pool([decode_audio({"bytes": b}, 16000)[0] for b in pool])


def _degrade_row(args):
    lang, cond, row = args
    audio, sr = decode_audio(row["audio"], 16000)
    y, out_sr, params = degrade(audio, sr, cond, seed_for(lang, row["id"], cond), _BANK)
    meta = json.loads(row["meta"])
    meta["degradation"] = params
    return {**row, "audio": {"bytes": encode_flac(y, out_sr), "path": None}, "sampling_rate": out_sr,
            "meta": json.dumps(meta, ensure_ascii=False)}


def build_degraded(suite: Suite, only: list[str] | None, workers: int) -> None:
    import pyarrow.parquet as pq

    lang = suite.language
    noise_root = str(DATA_DIR / "noise")
    if not Path(noise_root).exists():
        print("warning: data/noise missing (scripts/build_noise_bank.py); using babble + synthetic noise only")
    for cond, d in suite.degraded.items():
        for name in d["from"]:
            if only and name not in only:
                continue
            clean = pq.read_table(set_path(lang, name)).to_pylist()
            rows = clean[: d["n"]]
            # Babble pool: utterances from *other* sets, so the target talker never babbles.
            rng = np.random.default_rng(seed_for(lang, name, "babble-pool"))
            others = [o for o in suite.degraded[cond]["from"] if o != name]
            pool = []
            for o in others:
                p = set_path(lang, o)
                if p.exists():
                    t = pq.read_table(p, columns=["audio"]).column("audio").to_pylist()
                    pool += [t[j]["bytes"] for j in rng.choice(len(t), size=min(40, len(t)), replace=False)]
            with ProcessPoolExecutor(workers, initializer=_init_worker, initargs=(noise_root, pool)) as ex:
                out = list(tqdm(ex.map(_degrade_row, [(lang, cond, r) for r in rows], chunksize=4),
                                total=len(rows), desc=f"{name}:{cond}"))
            write_rows(set_path(lang, name, cond), out)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--suite", default="arabic")
    ap.add_argument("--sets", nargs="*")
    ap.add_argument("--degraded-only", action="store_true")
    ap.add_argument("--skip-degraded", action="store_true")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--workers", type=int, default=max(1, (os.cpu_count() or 4) - 2))
    args = ap.parse_args()
    suite = Suite.load(args.suite)
    if not args.degraded_only:
        for name, spec in suite.sets.items():
            if args.sets and name not in args.sets:
                continue
            if set_path(suite.language, name).exists() and not args.force:
                print(f"{name}: exists, skip")
                continue
            try:
                build_clean(spec, suite.language)
            except Exception as e:
                print(f"ERROR building {name}: {type(e).__name__}: {e}")
    if not args.skip_degraded:
        build_degraded(suite, args.sets, args.workers)


if __name__ == "__main__":
    main()
