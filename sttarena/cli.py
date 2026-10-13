from __future__ import annotations

import argparse


def main(argv: list[str] | None = None) -> None:
    ap = argparse.ArgumentParser("sttarena", description="Arabic & English STT benchmark")
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
    elif args.cmd == "models":
        from .models.registry import MODELS

        for k, m in MODELS.items():
            print(f"{k:36s} {m.backend:16s} env={m.env:8s} {m.hf_id}")


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
