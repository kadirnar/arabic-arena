"""Publish built sets whose licence allows redistribution to the HF Hub.

Layout on the Hub: <set>/<condition>.parquet, one config per (set, condition), split "test".
Sets with redistribute: false are listed in the card with their manifest only.

    python scripts/publish_hf.py --suite arabic [--private]
"""

from __future__ import annotations

import argparse
import shutil
import sys
import tempfile
from pathlib import Path

import pyarrow.parquet as pq
from huggingface_hub import HfApi

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from sttarena.data import ROOT, Suite, set_path  # noqa: E402

COND_DESC = {
    "clean": "original audio (16 kHz)",
    "noisy": "+ background noise 0–15 dB SNR (16 kHz)",
    "telephony": "8 kHz phone channel: band-pass, codec, packet loss",
    "callcenter": "noise + reverb at the caller, then the phone channel (8 kHz)",
    "telephony_v2": "phone channel v2: device × network × storage profiles, MENA codec mix, tandem to A-law",
    "callcenter_v2": "caller-side room and environment noise, then the phone channel v2",
    "sweep": "paired SNR grid: 3 noises × 5 SNRs per clip (16 kHz)",
    "padded": "clips padded with silence, comfort noise, tones or office noise (16 kHz)",
}


def card(suite: Suite, published: list[tuple[str, str, int, float]], withheld: list[str]) -> str:
    lang = suite.language
    cfgs = "\n".join(
        f"- config_name: {s}-{c}\n  data_files:\n  - split: test\n    path: {s}/{c}.parquet" for s, c, _, _ in published
    )
    rows = "\n".join(
        f"| `{s}-{c}` | {suite.sets[s].dialect} | {suite.sets[s].domain} | {COND_DESC[c]} | {n} | {h:.2f} | "
        f"{suite.sets[s].license} | {suite.sets[s].source} |" for s, c, n, h in published
    )
    wh = "\n".join(f"| `{s}` | {suite.sets[s].source} | {suite.sets[s].license} |" for s in withheld)
    language = {"ar": "ar", "en": "en"}[lang]
    return f"""---
license: other
language:
- {language}
task_categories:
- automatic-speech-recognition
tags:
- benchmark
- telephony
- call-center
- noisy-speech
- dialects
pretty_name: Arabic Arena STT benchmark ({lang})
configs:
{cfgs}
---

# Arabic Arena: STT benchmark sets ({lang})

These are the evaluation sets of [Arabic Arena](https://github.com/kadirnar/arabic-arena), a
multi-dataset WER/CER benchmark for speech-to-text with **simulated telephony and call-center
conditions**.

Each config is a deterministic subset of a public test set: at most 1,000 utterances of
1–30 s, chosen by hash rank. Degraded configs (`-noisy`, `-telephony`, `-callcenter`) are
generated with seeded, recorded parameters; see `meta.degradation` in every row and
[METHODOLOGY.md](https://github.com/kadirnar/arabic-arena/blob/main/docs/METHODOLOGY.md).

Columns: `id`, `audio`, `sampling_rate`, `text` (raw reference), `duration`, `meta` (JSON).

```python
from datasets import load_dataset
ds = load_dataset("{suite.hf_repo}", "{published[-1][0]}-{published[-1][1]}", split="test")
```

| Config | Dialect | Domain | Condition | Utterances | Hours | Licence | Source |
|---|---|---|---|---|---|---|---|
{rows}

**Licences.** Every config keeps the licence of its source dataset. NC = non-commercial only.

## Sets not re-hosted

The following sets are part of the benchmark, but their licences do not allow
redistribution. Rebuild them locally with `scripts/build_benchmark.py`; the exact ids are listed
in `manifests/`.

| Set | Source | Licence |
|---|---|---|
{wh}
"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--suite", default="arabic")
    ap.add_argument("--private", action="store_true")
    args = ap.parse_args()
    suite = Suite.load(args.suite)
    lang = suite.language
    api = HfApi()
    api.create_repo(suite.hf_repo, repo_type="dataset", private=args.private, exist_ok=True)
    published, withheld = [], []
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        for name, cond, _ in suite.eval_sets():
            if name not in suite.sets:  # noise-only sets (v1 mixes in babble from mgb2 and casablanca)
                continue
            if not suite.sets[name].redistribute:
                if name not in withheld:
                    withheld.append(name)
                continue
            src = set_path(lang, name, cond)
            if not src.exists():
                continue
            (tmp / name).mkdir(exist_ok=True)
            shutil.copy(src, tmp / name / f"{cond}.parquet")
            t = pq.read_table(src, columns=["duration"])
            published.append((name, cond, t.num_rows, sum(t.column("duration").to_pylist()) / 3600))
        shutil.copytree(ROOT / "manifests" / lang, tmp / "manifests")
        (tmp / "README.md").write_text(card(suite, published, withheld))
        api.upload_folder(folder_path=str(tmp), repo_id=suite.hf_repo, repo_type="dataset",
                          commit_message="Update benchmark sets")
    print(f"published {len(published)} configs to https://huggingface.co/datasets/{suite.hf_repo}")


if __name__ == "__main__":
    main()
