"""Publish the leaderboard site (docs/) as a static Hugging Face Space. No GPU, no server code.

    python scripts/publish_space.py                  # -> spaces/kadirnar/arabic-arena
    python scripts/publish_space.py --repo you/space
"""

from __future__ import annotations

import argparse
import sys
import tempfile
from pathlib import Path

from huggingface_hub import HfApi

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from sttarena.data import ROOT  # noqa: E402

CARD = """---
title: Arabic Arena
emoji: 🎙️
colorFrom: blue
colorTo: indigo
sdk: static
app_file: index.html
pinned: false
license: apache-2.0
short_description: Multi-dataset Arabic & English STT leaderboard (WER/CER)
tags:
  - leaderboard
  - automatic-speech-recognition
  - arabic
datasets:
  - kadirnar/arabic-arena-ar
  - kadirnar/arabic-arena-en
---

# Arabic Arena

Open-weight speech-to-text models scored on many Arabic and English test sets at once:
dialects, code-switching, noisy speech, and simulated 8 kHz telephone and call-center channels.

This Space is a static page: the evaluations run offline on a local GPU and only the results
are published here. Code, methodology and raw scores live at
[github.com/kadirnar/arabic-arena](https://github.com/kadirnar/arabic-arena).
"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", default="kadirnar/arabic-arena")
    args = ap.parse_args()
    api = HfApi()
    api.create_repo(args.repo, repo_type="space", space_sdk="static", exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        card = Path(tmp) / "README.md"
        card.write_text(CARD)
        api.upload_file(path_or_fileobj=card, path_in_repo="README.md", repo_id=args.repo, repo_type="space",
                        commit_message="Update Space card")
    api.upload_folder(folder_path=ROOT / "docs", repo_id=args.repo, repo_type="space",
                      allow_patterns=["index.html", "data/*.js", "data/*.json"],
                      commit_message="Update leaderboard")
    print(f"https://huggingface.co/spaces/{args.repo}")


if __name__ == "__main__":
    main()
