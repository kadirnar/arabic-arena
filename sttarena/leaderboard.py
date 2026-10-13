"""Aggregate results/<lang>/*/summary.json into leaderboard tables.

Per set:   corpus WER/CER (errors summed over utterances).
Per track: macro average over the track's sets (each set weighs the same, as on the
           Open ASR / Open Universal Arabic ASR leaderboards).
Arena WER: weighted mean of track scores, weights from the suite's `scoring` block.
RTFx:      total audio seconds / total transcription seconds over every set (batch inference
           on the local GPU, model loading excluded).
"""

from __future__ import annotations

import json
import re

from .data import ROOT, Suite
from .runner import RESULTS_DIR

LB_DIR = ROOT / "leaderboard"
SITE_DATA = ROOT / "docs" / "data"
TRACK_LABEL = {"clean": "Clean", "noisy": "Noisy", "codeswitch": "Code-switch", "telephony": "Telephony",
               "callcenter": "Call-center"}


def _mean(xs):
    return sum(xs) / len(xs) if xs else None


def collect(suite: Suite) -> dict:
    lang = suite.language
    expected = suite.eval_sets()
    tracks = {}
    for name, cond, track in expected:
        tracks.setdefault(track, []).append(f"{name}/{cond}")
    weights = {t: v["weight"] for t, v in suite.scoring.get("tracks", {}).items()}
    rows = []
    for path in sorted((RESULTS_DIR / lang).glob("*/summary.json")):
        s = json.loads(path.read_text())
        res = s["results"]
        row = {"model": s["model"], "hf_id": s.get("hf_id"), "params_b": s.get("params_b"),
               "license": s.get("license"), "kind": s.get("kind", "open"), "sets": {}, "tracks": {},
               "env": s.get("env", {})}
        for key, r in res.items():
            row["sets"][key] = {"wer": r["wer"], "cer": r["cer"], "rtfx": r.get("rtfx"), "n": r["num_utterances"]}
        for t, keys in tracks.items():
            have = [res[k] for k in keys if k in res]
            row["tracks"][t] = {
                "wer": _mean([r["wer"] for r in have]) if len(have) == len(keys) else None,
                "cer": _mean([r["cer"] for r in have]) if len(have) == len(keys) else None,
                "done": len(have), "total": len(keys),
            }
        tw = {t: w for t, w in weights.items() if t in row["tracks"]}
        if tw and all(row["tracks"][t]["wer"] is not None for t in tw):
            z = sum(tw.values())
            row["arena_wer"] = sum(row["tracks"][t]["wer"] * w for t, w in tw.items()) / z
            row["arena_cer"] = sum(row["tracks"][t]["cer"] * w for t, w in tw.items()) / z
        else:
            row["arena_wer"] = row["arena_cer"] = None
        secs = sum(r.get("seconds") or 0 for r in res.values())
        hours = sum(r.get("audio_hours") or 0 for r in res.values())
        row["rtfx"] = round(hours * 3600 / secs, 1) if secs else None
        row["audio_hours"] = round(hours, 2)
        rows.append(row)

    def sort_key(r):
        c = r["tracks"].get("clean", {}).get("wer")
        return (r["arena_wer"] is None, r["arena_wer"] or 9, c if c is not None else 9)

    rows.sort(key=sort_key)
    return {"language": lang, "tracks": tracks, "weights": weights,
            "sets": {s.name: {"dialect": s.dialect, "domain": s.domain, "source": s.source, "track": s.track,
                              "license": s.license} for s in suite.sets.values()},
            "models": rows}


def _pct(x):
    return "—" if x is None else f"{x * 100:.2f}"


def to_markdown(lb: dict) -> str:
    tracks = list(lb["tracks"])
    head = ["#", "Model", "Params (B)", "**Arena WER**", "Arena CER", *[TRACK_LABEL.get(t, t) for t in tracks], "RTFx"]
    lines = ["| " + " | ".join(head) + " |", "|" + "---|" * len(head)]
    for i, r in enumerate(lb["models"], 1):
        cells = [str(i), f"[{r['model']}](https://huggingface.co/{r['hf_id']})" if r["kind"] == "open" else r["model"],
                 f"{r['params_b']:.2f}" if r["params_b"] else "—", f"**{_pct(r['arena_wer'])}**", _pct(r["arena_cer"])]
        for t in tracks:
            tr = r["tracks"][t]
            cells.append(_pct(tr["wer"]) if tr["wer"] is not None else f"({tr['done']}/{tr['total']})")
        cells.append(str(r["rtfx"] or "—"))
        lines.append("| " + " | ".join(cells) + " |")
    weights = ", ".join(f"{TRACK_LABEL.get(t, t)} {w:.0%}" for t, w in lb["weights"].items())
    lines.append("")
    lines.append(f"WER/CER in %, lower is better. Arena = weighted mean of track WERs ({weights}).")

    # Per-set detail
    keys = [k for t in tracks for k in lb["tracks"][t]]
    lines += ["", "<details><summary>Per-set WER (%)</summary>", "",
              "| Model | " + " | ".join(keys) + " |", "|---|" + "---|" * len(keys)]
    for r in lb["models"]:
        lines.append(f"| {r['model']} | " + " | ".join(_pct(r["sets"].get(k, {}).get("wer")) for k in keys) + " |")
    lines += ["", "</details>"]
    return "\n".join(lines)


def build(suite_name: str) -> dict:
    suite = Suite.load(suite_name)
    lb = collect(suite)
    lang = suite.language
    LB_DIR.mkdir(exist_ok=True)
    SITE_DATA.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(lb, indent=1, ensure_ascii=False)
    (LB_DIR / f"{lang}.json").write_text(payload)
    (SITE_DATA / f"{lang}.json").write_text(payload)
    # Same data as a script so the page also renders from file:// and before any fetch.
    (SITE_DATA / f"{lang}.js").write_text(
        f"window.ARENA_DATA = window.ARENA_DATA || {{}};\nwindow.ARENA_DATA[{lang!r}] = {payload};\n")
    md = to_markdown(lb)
    (LB_DIR / f"{lang}.md").write_text(md + "\n")
    readme = ROOT / "README.md"
    text = readme.read_text()
    pat = re.compile(rf"(<!-- LEADERBOARD:{lang}:START -->)(.*?)(<!-- LEADERBOARD:{lang}:END -->)", re.S)
    if pat.search(text):
        readme.write_text(pat.sub(lambda m: f"{m.group(1)}\n{md}\n{m.group(3)}", text))
    print(md)
    return lb
