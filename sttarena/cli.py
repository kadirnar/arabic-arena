from __future__ import annotations

import argparse
import os
import sys

# Less fragmentation on 16 GB cards (needed for omniASR-CTC-7B); set before torch is imported.
os.environ.setdefault("PYTORCH_CUDA_ALLOC_CONF", "expandable_segments:True")

USAGE = """sttarena <command> [options]

  score        score any references + hypotheses (JSONL, CSV/TSV, Kaldi, trn, SRT/VTT, STM/CTM, hf://)
  compare      score several hypothesis files against the same references
  run          evaluate registered model(s) on a suite
  rescore      re-score saved predictions (reference/normalizer fixes, v1 -> v2 upgrade)
  leaderboard  aggregate results into leaderboard files
  audit        data audits: floor | variants | refs | contamination | taxonomy (error budget)
  models       list registered models
"""


def main(argv: list[str] | None = None) -> None:
    argv = sys.argv[1:] if argv is None else argv
    # commands with their own argument parsers
    if argv and argv[0] == "score":
        from .score_cli import main_score

        return main_score(argv[1:])
    if argv and argv[0] == "compare":
        from .score_cli import main_compare

        return main_compare(argv[1:])
    if argv and argv[0] == "audit":
        from .audit.cli import main_audit

        return main_audit(argv[1:])

    ap = argparse.ArgumentParser("sttarena", description="Arabic & English STT benchmark", usage=USAGE)
    sub = ap.add_subparsers(dest="cmd", required=True)

    r = sub.add_parser("run", help="evaluate model(s) on a suite")
    r.add_argument("--model", "-m", nargs="+", required=True)
    r.add_argument("--suite", "-s", default="arabic")
    r.add_argument("--sets", nargs="*")
    r.add_argument("--conditions", nargs="*", help="clean noisy telephony callcenter")
    r.add_argument("--limit", type=int, help="smoke test on the first N rows (not saved)")
    r.add_argument("--batch-size", type=int)
    r.add_argument("--force", action="store_true")

    lb = sub.add_parser("leaderboard", help="aggregate results into leaderboard files")
    lb.add_argument("--suite", "-s", nargs="+", default=["arabic"])

    rs = sub.add_parser("rescore", help="re-score saved predictions (after a reference or normalizer fix)")
    rs.add_argument("--suite", "-s", default="arabic")
    rs.add_argument("--sets", nargs="*")
    rs.add_argument("--models", nargs="*")

    sub.add_parser("models", help="list registered models")

    args = ap.parse_args(argv)
    if args.cmd == "run":
        from .runner import run

        for m in args.model:
            run(m, args.suite, args.sets, args.conditions, args.limit, args.batch_size, args.force)
            _free_gpu()
    elif args.cmd == "leaderboard":
        from .leaderboard import build

        for s in args.suite:
            build(s)
    elif args.cmd == "rescore":
        from .rescore import rescore

        rescore(args.suite, args.sets, args.models)
    elif args.cmd == "models":
        from .models.registry import MODELS

        for k, m in MODELS.items():
            print(f"{k:42s} {m.backend:16s} env={m.env:8s} {m.hf_id}")


def _free_gpu():
    import gc

    gc.collect()
    try:
        import torch

        torch.cuda.empty_cache()
    except ImportError:
        pass


if __name__ == "__main__":
    main()
