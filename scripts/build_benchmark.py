"""Build the benchmark sets of a suite from their Hugging Face sources.

    python scripts/build_benchmark.py --suite arabic                 # everything
    python scripts/build_benchmark.py --suite arabic --sets fleurs_ar sada
    python scripts/build_benchmark.py --suite arabic --degraded-only
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import sys
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

import numpy as np
from tqdm import tqdm

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from sttarena.data import (  # noqa: E402
    DATA_DIR, MAX_SEC, MIN_SEC, ROOT, SetSpec, Suite, decode_audio, encode_flac, multi_annotator_groups, rank_key,
    set_path, write_rows,
)
from sttarena.normalizers.markup import MarkupSpec  # noqa: E402
from sttarena.degrade import NoiseBank, degrade  # noqa: E402
from sttarena.degrade.chain import seed_for  # noqa: E402


def _audio_column(ds) -> str:
    from datasets import Audio

    for k, f in ds.features.items():
        if isinstance(f, Audio):
            return k
    for k in ("audio", "audio_filepath", "wav", "waveform"):  # waveform: google/svq (struct of bytes)
        if k in ds.column_names:
            return k
    raise KeyError(f"no audio column in {ds.column_names}")


def _scalar_or_strings(feature) -> bool:
    """Meta columns: scalar values, and lists of strings (e.g. google/svq's salient terms per query)."""
    name = feature.__class__.__name__
    inner = getattr(feature, "feature", None)
    return name == "Value" or (name in ("List", "Sequence") and getattr(inner, "dtype", None) == "string")


def _source_revision(repo: str) -> str | None:
    try:
        from huggingface_hub import HfApi

        return HfApi().dataset_info(repo).sha
    except Exception:
        return None


def _load_manifest(spec: SetSpec, config: str | None):
    """Rows of a JSON-lines manifest plus the audio files it names, downloaded from the dataset repo (or read
    from a local directory). Scalar fields are kept; nested objects are flattened with '.'."""
    from datasets import Audio, Dataset
    from huggingface_hub import hf_hub_download, snapshot_download

    man = spec.manifest.format(config=config) if config else spec.manifest
    local = Path(spec.source).is_dir()
    man_path = Path(spec.source) / man if local else Path(hf_hub_download(spec.source, man, repo_type="dataset"))
    scalar = (str, int, float, bool, type(None))
    recs = []
    for line in man_path.open(encoding="utf-8"):
        if not line.strip():
            continue
        flat = {}
        for k, v in json.loads(line).items():
            if isinstance(v, dict):
                flat.update({f"{k}.{kk}": vv for kk, vv in v.items() if isinstance(vv, scalar)})
            elif isinstance(v, scalar):
                flat[k] = v
        # audio paths are relative to the manifest; normpath resolves ../ without touching the disk
        flat["audio"] = os.path.normpath(os.path.join(os.path.dirname(man), flat.pop(spec.audio_field)))
        recs.append(flat)
    root = Path(spec.source) if local else Path(snapshot_download(
        spec.source, repo_type="dataset", allow_patterns=sorted({r["audio"] for r in recs})))
    for r in recs:
        r["audio"] = str(root / r["audio"])
    return Dataset.from_list(recs).cast_column("audio", Audio(decode=False)), "audio"


_TMP: list[str] = []  # per-config scratch directories, removed once the config's rows are encoded


def _load_gigaspeech(spec: SetSpec, config: str):
    """GigaSpeechBench: one region's segments (metadata.json) cut from its whole recordings (audio.tar.gz).
    Only the recordings of the segments the hash ranking can reach are extracted (twice the quota)."""
    import tarfile
    import tempfile

    from datasets import Audio, Dataset
    from huggingface_hub import hf_hub_download

    tmp = tempfile.mkdtemp(prefix=f"gsb_{config}_", dir=str(DATA_DIR))
    _TMP.append(tmp)
    meta = json.load(open(hf_hub_download(spec.source, f"{spec.data_dir}/{config}/metadata.json",
                                          repo_type="dataset", local_dir=tmp)))
    recs = []
    for a in meta["audios"]:
        for s in a.get("segments", []):
            b, e = float(s["begin_time"]), float(s["end_time"])
            if MIN_SEC <= e - b <= MAX_SEC and (s.get("text") or "").strip():
                recs.append({"aid": a["aid"], "sid": s["sid"], "text": s["text"], "segment_begin": b, "segment_end": e,
                             **{k: s.get(k) for k in ("speaker", "gender", "age_group", "emotion")}})
    configs = spec.configs or [config]
    k = configs.index(config)
    quota = spec.n // len(configs) + (1 if k < spec.n % len(configs) else 0)
    ranked = sorted(range(len(recs)), key=lambda i: rank_key(spec.source, f"{config}/{i}"))
    # archive members may be named by the full aid (SYR#7fdb...) or by its hash part alone
    wanted = {form: recs[i]["aid"] for i in ranked[: 2 * quota] for form in (recs[i]["aid"], recs[i]["aid"].split("#")[-1])}
    archive = hf_hub_download(spec.source, f"{spec.data_dir}/{config}/audio.tar.gz", repo_type="dataset", local_dir=tmp)
    paths = {}
    with tarfile.open(archive, mode="r|gz") as tar:
        for m in tar:
            stem = Path(m.name).stem
            if m.isfile() and stem in wanted:
                out = Path(tmp) / f"rec_{len(paths)}{Path(m.name).suffix}"
                with tar.extractfile(m) as src, open(out, "wb") as dst:
                    shutil.copyfileobj(src, dst)
                paths[wanted[stem]] = str(out)
    os.remove(archive)
    for r in recs:  # unextracted recordings get a missing path: the builder skips them if it ever reaches one
        r["audio"] = paths.get(r["aid"], str(Path(tmp) / "missing.wav"))
    return Dataset.from_list(recs).cast_column("audio", Audio(decode=False)), "audio"


def _cleanup_tmp() -> None:
    while _TMP:
        shutil.rmtree(_TMP.pop(), ignore_errors=True)


def _load_source(spec: SetSpec, config: str | None):
    from datasets import Audio, load_dataset

    if spec.loader == "gigaspeechbench":
        return _load_gigaspeech(spec, config)
    if spec.manifest:
        return _load_manifest(spec, config)
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


def build_clean(spec: SetSpec, lang: str) -> list[dict]:
    configs = spec.configs or [spec.config]
    per_config = [spec.n // len(configs) + (1 if i < spec.n % len(configs) else 0) for i in range(len(configs))]
    rows: list[dict] = []
    fixes = spec.load_text_fixes()
    for config, quota in zip(configs, per_config):
        ds, audio_col = _load_source(spec, config)
        ma = spec.multi_annotator
        cols = [spec.text, *spec.filter, *([ma["field"]] if ma else []), *([spec.balance] if spec.balance else [])]
        meta_cols = [c for c in ds.column_names if c not in (audio_col, spec.text) and _scalar_or_strings(ds.features[c])]
        light = ds.select_columns(sorted(set(cols)))
        alt_refs = None
        if ma:  # keep one annotator's segmentation; the others become alternative references
            alt_refs = multi_annotator_groups([(i, r[ma["field"]], r[spec.text] or "") for i, r in enumerate(light)],
                                              ma["regex"], ma.get("min_overlap", 0.5))
        markup = MarkupSpec.parse(spec.markup).with_extra(spec.markup_extra)
        cand = []
        for i, r in enumerate(light):
            if any((r[k] not in v) if isinstance(v, list) else (r[k] != v) for k, v in spec.filter.items()):
                continue
            if not spec.prepare_text(r[spec.text]):
                continue
            if alt_refs is not None and (i not in alt_refs or not markup.strip(spec.prepare_text(r[spec.text])).strip()):
                continue  # another annotator's copy of the audio, or a tag-only segment (@@@فراغ)
            uid = f"{config}/{i}" if config else str(i)
            cand.append((rank_key(spec.source, uid), i, uid))
        cand.sort()
        # `balance`: an equal share of the quota per value of that column (rare dialects get as many rows as
        # common ones); values with fewer rows leave their share unused
        group_of = {i: light[i][spec.balance] for _, i, _ in cand} if spec.balance else {}
        per_group = -(-quota // len(set(group_of.values()))) if group_of else None
        taken_in: dict = {}
        taken = 0
        pbar = tqdm(total=quota, desc=f"{spec.name}:{config or 'default'}")
        for _, i, uid in cand:
            if taken >= quota:
                break
            if per_group and taken_in.get(group_of[i], 0) >= per_group:
                continue
            r = ds[i]
            try:
                audio, sr = decode_audio(r[audio_col], 16000)
            except Exception as e:  # corrupt files exist in some corpora
                print(f"skip {uid}: {e}")
                continue
            if r.get("segment_begin") is not None:  # a segment of a longer recording (GigaSpeechBench)
                audio = audio[int(r["segment_begin"] * sr): int(r["segment_end"] * sr)]
            dur = len(audio) / sr
            if not (MIN_SEC <= dur <= MAX_SEC) or np.max(np.abs(audio)) < 1e-4:
                continue
            meta = {k: r[k] for k in meta_cols if r.get(k) is not None}
            meta.update(source=spec.source, source_config=config, source_index=i)
            meta.setdefault("dialect", spec.dialect)  # a per-row dialect column (echonova) wins over the set's label
            if alt_refs is not None:
                meta.update({f"alt_ref_{k + 1}": t for k, t in enumerate(alt_refs[i])})
            rows.append({
                "id": f"{spec.name}/{uid}",
                "audio": {"bytes": encode_flac(audio, sr), "path": None},
                "sampling_rate": sr,
                "text": (fixes and fixes[1].get(str(meta.get(fixes[0])))) or spec.prepare_text(r[spec.text]),
                "duration": round(dur, 3),
                "meta": json.dumps(meta, ensure_ascii=False, default=str),
            })
            taken += 1
            if per_group:
                taken_in[group_of[i]] = taken_in.get(group_of[i], 0) + 1
            pbar.update(1)
        pbar.close()
        _cleanup_tmp()  # GigaSpeechBench: this config's extracted recordings are encoded now
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
# A condition's `version` (default 1) selects the chain: v1 conditions are built exactly as the published
# sets; v2 ones (`version: 2`, `chain: telephony | callcenter | sweep | padded`, sttarena/degrade/chain_v2.py)
# take babble_v2 talkers from a pool disjoint from every test set (`babble_pool:`, sttarena/degrade/pool.py)
# and may write several rows per clean utterance, ids "<clean id>#<variant>" and meta.degradation.source_id.
from sttarena.degrade import degrade_v2  # noqa: E402
from sttarena.degrade.pool import build_babble_pool  # noqa: E402
from sttarena.degrade.profiles import PROFILE_V2  # noqa: E402

_BANK: NoiseBank | None = None


def _init_worker(noise_root: str, pool: list[bytes], talkers: str | None = None):
    global _BANK
    _BANK = NoiseBank(noise_root)
    _BANK.add_speech_pool([decode_audio({"bytes": b}, 16000)[0] for b in pool])
    if talkers:
        _BANK.load_talkers(talkers)


def _degrade_row(args) -> list[dict]:
    lang, cond, d, row = args
    audio, sr = decode_audio(row["audio"], 16000)
    meta = json.loads(row["meta"])
    seed = seed_for(lang, row["id"], cond)
    if d.get("version", 1) == 1:
        y, out_sr, params = degrade(audio, sr, cond, seed, _BANK)
        meta["degradation"] = params
        return [{**row, "audio": {"bytes": encode_flac(y, out_sr), "path": None}, "sampling_rate": out_sr,
                 "meta": json.dumps(meta, ensure_ascii=False)}]
    out = []
    for suffix, y, out_sr, params in degrade_v2(audio, sr, d.get("chain", cond), seed, _BANK, d):
        deg = {**params, "source_id": row["id"]}
        out.append({**row, "id": row["id"] if suffix is None else f"{row['id']}#{suffix}",
                    "audio": {"bytes": encode_flac(y, out_sr), "path": None}, "sampling_rate": out_sr,
                    "duration": round(len(y) / out_sr, 3),
                    "meta": json.dumps({**meta, "degradation": deg}, ensure_ascii=False)})
    return out


def _missing_noise(noise_root: str, d: dict) -> list[str]:
    """Noise-bank categories a v2 condition asks for that data/noise lacks (dropped, weights renormalized)."""
    root = Path(noise_root)
    have = {p.name for p in root.iterdir() if p.is_dir()} if root.exists() else set()
    synthetic = {"babble_v2", "ssn", "pink", "brown", "hum", "silence", "comfort_noise", "tones"}
    want = {"callcenter": list(PROFILE_V2["callcenter_noise"]), "sweep": d.get("ambient", []),
            "padded": list(d.get("fillers", {}))}.get(d.get("chain"), [])
    return [c for c in want if c not in have | synthetic]


def build_degraded(suite: Suite, only: list[str] | None, workers: int) -> None:
    import pyarrow.parquet as pq

    lang = suite.language
    noise_root = str(DATA_DIR / "noise")
    if not Path(noise_root).exists():
        print("warning: data/noise missing (scripts/build_noise_bank.py); using babble + synthetic noise only")
    for cond, d in suite.degraded.items():
        v2 = d.get("version", 1) == 2
        talkers = None
        if v2:
            if d.get("babble_pool"):
                talkers = str(build_babble_pool(d["babble_pool"], lang, list(suite.sets), noise_root))
            if missing := _missing_noise(noise_root, d):
                print(f"warning: {cond}: noise bank has no {missing}; they are left out of the mix")
        for name in d["from"]:
            if only and name not in only:
                continue
            clean = pq.read_table(set_path(lang, name)).to_pylist()
            rows = clean[: d["n"]]
            pool = []
            if not v2:
                # Babble pool: utterances from *other* sets, so the target talker never babbles.
                rng = np.random.default_rng(seed_for(lang, name, "babble-pool"))
                others = [o for o in suite.degraded[cond]["from"] if o != name]
                for o in others:
                    p = set_path(lang, o)
                    if p.exists():
                        t = pq.read_table(p, columns=["audio"]).column("audio").to_pylist()
                        pick = rng.choice(len(t), size=min(40, len(t)), replace=False)
                        pool += [t[j]["bytes"] for j in pick]
            init = (noise_root, pool, talkers)
            with ProcessPoolExecutor(workers, initializer=_init_worker, initargs=init) as ex:
                out = [r for rs in tqdm(ex.map(_degrade_row, [(lang, cond, d, r) for r in rows], chunksize=4),
                                        total=len(rows), desc=f"{name}:{cond}") for r in rs]
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
