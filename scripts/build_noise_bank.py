"""Build data/noise/<category>/*.flac from DEMAND and MUSAN noise, or import local files into it.

DEMAND is CC BY-SA 3.0 Unported per its authors (the licence statement in Zenodo record 1227121; the record's
metadata field and the philgzl/demand mirror say CC BY 4.0), so sets mixed with it are share-alike; MUSAN is
CC BY 4.0. Only channel 1 of each DEMAND environment is used. Categories match
sttarena/degrade/chain.py (home, outdoor, office, cafe, street, transport, misc).

--add imports local audio, first channel, at 16 kHz: noise categories such as the ETSI ES 202 396-1 /
TS 103 224 call-center recordings (CC BY 4.0) that the v2 call-center mix draws as `callcenter`, and
measured impulse responses as `rir/<kind>` (handset, speakerphone, car, farfield; e.g. ACE, BUT ReverbDB,
ETSI TS 103 557, all CC BY 4.0), which v2 prefers over its synthetic ones. data/noise/sources.json records
every category's source and licence.

    python scripts/build_noise_bank.py                                    # DEMAND + MUSAN
    python scripts/build_noise_bank.py --add callcenter=/path/etsi --license "CC-BY-4.0, ETSI TS 103 224"
    python scripts/build_noise_bank.py --add rir/handset=/path/irs --license "CC-BY-4.0, ETSI TS 103 557"
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import numpy as np
from tqdm import tqdm

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from sttarena.data import DATA_DIR, decode_audio  # noqa: E402

import soundfile as sf  # noqa: E402
import soxr  # noqa: E402

DEMAND_MAP = {
    "DKITCHEN": "home", "DLIVING": "home", "DWASHING": "home",
    "NFIELD": "outdoor", "NPARK": "outdoor", "NRIVER": "outdoor",
    "OHALLWAY": "office", "OMEETING": "office", "OOFFICE": "office",
    "PCAFETER": "cafe", "PRESTO": "cafe",
    "PSTATION": "street", "SPSQUARE": "street", "STRAFFIC": "street",
    "TBUS": "transport", "TCAR": "transport", "TMETRO": "transport",
}
DEMAND_LICENSE = "CC-BY-SA-3.0 (DEMAND, Zenodo 1227121)"
MUSAN_LICENSE = "CC-BY-4.0 (MUSAN noise, OpenSLR 17)"


def _record(out: Path, category: str, source: str) -> None:
    path = out / "sources.json"
    sources = json.loads(path.read_text()) if path.exists() else {}
    sources[category] = sorted(set(sources.get(category, [])) | {source})
    path.write_text(json.dumps(sources, indent=1, ensure_ascii=False))


def build_default(out: Path) -> None:
    from datasets import Audio, load_dataset

    ds = load_dataset("philgzl/demand", split="16k").cast_column("audio", Audio(decode=False))
    for r in tqdm(ds, desc="DEMAND"):
        env, fname = r["name"].split("/")
        env = env.split("_")[0]
        if not fname.startswith("ch01"):
            continue
        x, sr = decode_audio(r["audio"], 16000)
        d = out / DEMAND_MAP[env]
        d.mkdir(parents=True, exist_ok=True)
        sf.write(d / f"demand_{env}_{Path(fname).stem}.flac", x, sr)
        _record(out, DEMAND_MAP[env], DEMAND_LICENSE)

    ms = load_dataset("corypaik/musan", "noise", split="train").cast_column("audio", Audio(decode=False))
    rng = np.random.default_rng(0)
    d = out / "misc"
    d.mkdir(parents=True, exist_ok=True)
    for i in tqdm(sorted(rng.choice(len(ms), 200, replace=False)), desc="MUSAN"):
        r = ms[int(i)]
        x, sr = decode_audio(r["audio"], 16000)
        x = x[: 60 * sr]
        if np.std(x) > 1e-4:
            sf.write(d / f"musan_{Path(r['path']).stem}.flac", x, sr)
    _record(out, "misc", MUSAN_LICENSE)


def import_dir(out: Path, category: str, src: Path, license_: str) -> int:
    """Copy every wav/flac under `src` into out/<category> as 16 kHz mono (first channel) FLAC."""
    d = out / category
    d.mkdir(parents=True, exist_ok=True)
    files = sorted(p for p in src.rglob("*") if p.suffix.lower() in (".wav", ".flac"))
    for f in tqdm(files, desc=category):
        x, sr = sf.read(str(f), dtype="float32", always_2d=True)
        x = soxr.resample(x[:, 0], sr, 16000) if sr != 16000 else x[:, 0]
        sf.write(d / f"{f.stem}.flac", x, 16000, subtype="PCM_24")
    _record(out, category, f"{license_} ({src.name})")
    return len(files)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--add", action="append", default=[], metavar="CATEGORY=DIR",
                    help="import local audio as a noise category or rir/<kind> (no DEMAND/MUSAN download)")
    ap.add_argument("--license", default="unspecified", help="licence of the files imported with --add")
    args = ap.parse_args()
    out = DATA_DIR / "noise"
    out.mkdir(parents=True, exist_ok=True)
    if not args.add:
        build_default(out)
    for spec in args.add:
        category, src = spec.split("=", 1)
        print(f"{category}: {import_dir(out, category, Path(src), args.license)} files")
    for c in sorted(p for p in out.iterdir() if p.is_dir()):
        print(c.name, len(list(c.rglob("*.flac"))))


if __name__ == "__main__":
    main()
