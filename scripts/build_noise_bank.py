"""Build data/noise/<category>/*.flac from DEMAND (CC-BY-4.0) and MUSAN noise (CC-BY-4.0).

Only channel 1 of each DEMAND environment is used. Categories match
sttarena/degrade/chain.py (home, outdoor, office, cafe, street, transport, misc).
"""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
from datasets import Audio, load_dataset
from tqdm import tqdm

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from sttarena.data import DATA_DIR, decode_audio  # noqa: E402

import soundfile as sf  # noqa: E402

DEMAND_MAP = {
    "DKITCHEN": "home", "DLIVING": "home", "DWASHING": "home",
    "NFIELD": "outdoor", "NPARK": "outdoor", "NRIVER": "outdoor",
    "OHALLWAY": "office", "OMEETING": "office", "OOFFICE": "office",
    "PCAFETER": "cafe", "PRESTO": "cafe",
    "PSTATION": "street", "SPSQUARE": "street", "STRAFFIC": "street",
    "TBUS": "transport", "TCAR": "transport", "TMETRO": "transport",
}


def main():
    out = DATA_DIR / "noise"
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
    for c in sorted(out.iterdir()):
        print(c.name, len(list(c.glob("*.flac"))))


if __name__ == "__main__":
    main()
