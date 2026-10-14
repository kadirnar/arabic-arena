"""Build the noise-only "hallucination" set: clips that contain no target speech.

In call centers a large share of audio is silence, hold, line noise or distant chatter.
A model that "transcribes" it produces insertions that ruin downstream analytics. Every clip
has an empty reference; scoring reports the share of clips with any output and inserted words
per minute (see sttarena/runner.py).

Clip types (seeded): line silence, low-level hiss/hum, distant babble (-25..-15 dBFS), office /
street / transport / cafe noise. Half go through the telephony channel.

    python scripts/build_hallucination_set.py --lang ar
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

import numpy as np
import pyarrow.parquet as pq

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from sttarena.data import DATA_DIR, Suite, decode_audio, encode_flac, set_path, write_rows  # noqa: E402
from sttarena.degrade import NoiseBank  # noqa: E402
from sttarena.degrade.chain import _band_pass, packet_loss, seed_for  # noqa: E402
from sttarena.degrade.codecs import CODEC_WEIGHTS, codec_roundtrip  # noqa: E402

import soxr  # noqa: E402

KINDS = {"silence": 0.15, "hiss": 0.1, "hum": 0.1, "babble": 0.25, "office": 0.1, "street": 0.1, "transport": 0.1,
         "cafe": 0.1}


def make_clip(rng: np.random.Generator, bank: NoiseBank, kind: str, sec: float) -> np.ndarray:
    n = int(sec * 16000)
    if kind == "silence":
        x = rng.standard_normal(n).astype(np.float32) * 10 ** (-70 / 20)
    elif kind == "hiss":
        x = bank.sample("pink", n, rng) * 10 ** (rng.uniform(-55, -40) / 20)
    else:
        src = kind if kind in bank.categories else "pink"
        level = rng.uniform(-30, -18) if kind == "babble" else rng.uniform(-35, -20)
        x = bank.sample(src, n, rng) * 10 ** (level / 20)
    return x.astype(np.float32)


def phone(x: np.ndarray, rng: np.random.Generator) -> tuple[np.ndarray, str]:
    y = soxr.resample(x, 16000, 8000)
    y = _band_pass(y, 8000, 300, 3400)
    keys = list(CODEC_WEIGHTS)
    p = np.array([CODEC_WEIGHTS[k] for k in keys])
    codec = keys[int(rng.choice(len(keys), p=p / p.sum()))]
    y = codec_roundtrip(np.clip(y, -1, 1), codec, 8000)
    return packet_loss(y, rng, 8000, 0.01), codec


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lang", default="ar")
    ap.add_argument("--n", type=int, default=300)
    args = ap.parse_args()
    suite = Suite.load({"ar": "arabic", "en": "english"}[args.lang])
    bank = NoiseBank(DATA_DIR / "noise")
    # babble from this language's own test speech
    pool = []
    for name in list(suite.sets)[:6]:
        t = pq.read_table(set_path(args.lang, name), columns=["audio"]).column("audio").to_pylist()[:40]
        pool += [decode_audio(a, 16000)[0] for a in t]
    bank.add_speech_pool(pool)
    rows = []
    kinds, w = list(KINDS), np.array(list(KINDS.values()))
    for i in range(args.n):
        rng = np.random.default_rng(seed_for(args.lang, "noise_only", str(i)))
        kind = kinds[int(rng.choice(len(kinds), p=w / w.sum()))]
        sec = float(rng.uniform(3, 15))
        x, sr, meta = make_clip(rng, bank, kind, sec), 16000, {"kind": kind}
        if rng.random() < 0.5:
            x, codec = phone(x, rng)
            sr, meta["codec"] = 8000, codec
        rows.append({"id": f"noise_only/{i}", "audio": {"bytes": encode_flac(x, sr), "path": None},
                     "sampling_rate": sr, "text": "", "duration": round(sec, 3),
                     "meta": json.dumps({"degradation": meta})})
    write_rows(set_path(args.lang, "noise_only"), rows)
    print(f"wrote {len(rows)} clips to {set_path(args.lang, 'noise_only')}")


if __name__ == "__main__":
    main()
