"""Build the noise-only "hallucination" set: clips that contain no target speech.

In call centers a large share of audio is silence, hold, line noise or distant chatter.
A model that "transcribes" it produces insertions that ruin downstream analytics. Every clip
has an empty reference; scoring reports the share of clips with any output and inserted words
per minute (see sttarena/runner.py).

v1 (the published data/<lang>/noise_only, the default): clip types (seeded) line silence, low-level
hiss/hum, distant babble (-25..-15 dBFS), office / street / transport / cafe noise. Half go through
the telephony channel.

v2 (--version 2 -> data/<lang>/noise_only_v2; sttarena/degrade/nonspeech.py): groups G1 silence-like,
G2 network tones of Arab networks, G3 DTMF, G5 office, G7 environment and NT non-target speech
(babble_v2 from a talker pool disjoint from every test set), with meta.group / meta.kind for per-group
rates and stratified 1-30 s durations; G1-G3 need no downloads. Settings come from the suite's
`hallucination.v2` block (n, babble_pool).

    python scripts/build_hallucination_set.py --lang ar
    python scripts/build_hallucination_set.py --lang ar --version 2
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


def build_v1(lang: str, suite: Suite, n: int) -> None:
    bank = NoiseBank(DATA_DIR / "noise")
    # babble from this language's own test speech
    pool = []
    for name in list(suite.sets)[:6]:
        t = pq.read_table(set_path(lang, name), columns=["audio"]).column("audio").to_pylist()[:40]
        pool += [decode_audio(a, 16000)[0] for a in t]
    bank.add_speech_pool(pool)
    rows = []
    kinds, w = list(KINDS), np.array(list(KINDS.values()))
    for i in range(n):
        rng = np.random.default_rng(seed_for(lang, "noise_only", str(i)))
        kind = kinds[int(rng.choice(len(kinds), p=w / w.sum()))]
        sec = float(rng.uniform(3, 15))
        x, sr, meta = make_clip(rng, bank, kind, sec), 16000, {"kind": kind}
        if rng.random() < 0.5:
            x, codec = phone(x, rng)
            sr, meta["codec"] = 8000, codec
        rows.append({"id": f"noise_only/{i}", "audio": {"bytes": encode_flac(x, sr), "path": None},
                     "sampling_rate": sr, "text": "", "duration": round(sec, 3),
                     "meta": json.dumps({"degradation": meta})})
    write_rows(set_path(lang, "noise_only"), rows)
    print(f"wrote {len(rows)} clips to {set_path(lang, 'noise_only')}")


def build_v2(lang: str, suite: Suite, n: int | None) -> None:
    from sttarena.degrade import nonspeech
    from sttarena.degrade.pool import build_babble_pool

    cfg = (suite.hallucination if isinstance(suite.hallucination, dict) else {}).get("v2", {})
    noise_root = DATA_DIR / "noise"
    bank = NoiseBank(noise_root)
    if cfg.get("babble_pool"):
        bank.load_talkers(build_babble_pool(cfg["babble_pool"], lang, list(suite.sets), noise_root))
    groups = nonspeech.available_groups(bank)
    if skipped := [g for g in nonspeech.GROUPS if g not in groups]:
        print(f"warning: no noise bank / talker pool for groups {skipped}; building {groups}")
    rows, n = [], n or cfg.get("n", sum(nonspeech.GROUPS.values()))
    for clip_id, group, sec in nonspeech.plan(lang, n, groups):
        x, sr, meta = nonspeech.clip(lang, clip_id, group, sec, bank)
        rows.append({"id": clip_id, "audio": {"bytes": encode_flac(x, sr), "path": None}, "sampling_rate": sr,
                     "text": "", "duration": round(len(x) / sr, 3),
                     "meta": json.dumps(meta, ensure_ascii=False)})
    write_rows(set_path(lang, "noise_only_v2"), rows)
    counts = {g: sum(r["id"].split("/")[1] == g for r in rows) for g in groups}
    print(f"wrote {len(rows)} clips to {set_path(lang, 'noise_only_v2')}: {counts}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--lang", default="ar")
    ap.add_argument("--n", type=int, help="v1: 300 clips; v2: the suite's hallucination.v2.n (830)")
    ap.add_argument("--version", type=int, default=1, choices=(1, 2))
    args = ap.parse_args()
    suite = Suite.load({"ar": "arabic", "en": "english"}[args.lang])
    if args.version == 1:
        build_v1(args.lang, suite, args.n or 300)
    else:
        build_v2(args.lang, suite, args.n)


if __name__ == "__main__":
    main()
