"""Aggregate results/<lang>/*/summary.json into leaderboard tables.

v1 (kept for continuity; the numbers do not change):
  Per set:   corpus WER/CER (errors summed over utterances).
  Per track: macro average over the track's sets (each set weighs the same, as on the
             Open ASR / Open Universal Arabic ASR leaderboards).
  Arena WER: weighted mean of track scores, weights from the suite's `scoring` block.
  95% CI:    paired iid bootstrap over utterances (see bootstrap.py).

v2 (needs results scored by the v2 scorer: a fresh run or `sttarena rescore`):
  Per set:   the suite's headline profile (sttarena/scoring.py): L2 dialect-lenient normalization,
             space-insensitive alignment, multi-reference where the set has several transcriptions,
             errors capped per utterance. The strict L1 WER is kept next to it.
  Arena:     weighted geometric mean of the set scores, each set weighing track weight / sets in
             the track. The v2 board has its own track weights and set-to-track moves (suite
             `scoring.v2`); the v1 board keeps `scoring.tracks`. A geometric mean is scale-free per set, so the nominal track weights are
             close to the weights actually in effect (with an arithmetic mean the high-WER
             call-center sets carried ~34 % of the ranking signal for a nominal 20 %). The
             arithmetic mean is reported next to it.
  Exposure:  share of the Arena weight that sits on sets whose training split the model saw
             (registry `in_domain`), and a zero-shot score over the sets no ranked model saw.
  Floor:     measured human disagreement per set (suite `floor`), and the headroom above it.

RTFx: total audio seconds / total transcription seconds over every set (batch inference on the
local GPU, model loading excluded).
"""

from __future__ import annotations

import json
import math
import re

from . import bootstrap
from .data import ROOT, Suite
from .models.registry import get_spec
from .runner import RESULTS_DIR
from .hallucination import bag_share, mine_bag
from .scoring import HEADLINE

LB_DIR = ROOT / "leaderboard"
SITE_DATA = ROOT / "docs" / "data"
TRACK_LABEL = {"accented": "Accented", "clean": "Clean", "noisy": "Noisy", "codeswitch": "Code-switch", "telephony": "Telephony",
               "callcenter": "Call-center", "bandlimited": "Band-limited"}


def _mean(xs):
    return sum(xs) / len(xs) if xs else None


def collect(suite: Suite) -> dict:
    lang = suite.language
    expected = suite.eval_sets()
    weights = {t: v["weight"] for t, v in suite.scoring.get("tracks", {}).items()}
    all_tracks: dict[str, list[str]] = {}
    for name, cond, track in expected:
        if track != "hallucination":
            all_tracks.setdefault(track, []).append(f"{name}/{cond}")
    # weighted tracks are the board's columns; unweighted conditions (v2 robustness probes such as the SNR
    # sweep) stay in the per-set results and in "extra_tracks"
    tracks = {t: ks for t, ks in all_tracks.items() if t in weights}
    extra_tracks = {t: ks for t, ks in all_tracks.items() if t not in weights}
    boot = bootstrap.load(lang)["models"]
    rows = []
    for path in sorted((RESULTS_DIR / lang).glob("*/summary.json")):
        s = json.loads(path.read_text())
        res = s["results"]
        row = {"model": s["model"], "hf_id": s.get("hf_id"), "params_b": s.get("params_b"),
               "license": s.get("license"), "kind": s.get("kind", "open"), "sets": {}, "tracks": {},
               "env": s.get("env", {})}
        try:
            spec = get_spec(s["model"])
            row.update(hf_id=spec.repo or row["hf_id"], finetune_of=spec.finetune_of, in_domain=list(spec.in_domain),
                       notes=spec.notes, training_data=spec.training_data)
        except KeyError:
            row.update(finetune_of=None, in_domain=[], notes="", training_data="")
        for key, r in res.items():
            row["sets"][key] = {"wer": r["wer"], "cer": r["cer"], "rtfx": r.get("rtfx"), "n": r["num_utterances"]}
        h = res.get("noise_only/clean")
        row["hallucination_rate"] = h["hallucination_rate"] if h else None
        row["inserted_wpm"] = round(h["inserted_wpm"], 2) if h else None
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
        b = boot.get(s["model"], {})
        row["arena_ci"] = b.get("arena_wer") if row["arena_wer"] is not None else None
        row["rank_range"] = b.get("rank") if row["arena_wer"] is not None else None
        for t, ci in b.get("tracks", {}).items():
            if t in row["tracks"] and row["tracks"][t]["wer"] is not None:
                row["tracks"][t]["ci"] = ci
        secs = sum(r.get("seconds") or 0 for r in res.values())
        hours = sum(r.get("audio_hours") or 0 for r in res.values())
        row["rtfx"] = round(hours * 3600 / secs, 1) if secs else None
        row["audio_hours"] = round(hours, 2)
        rows.append(row)

    def sort_key(r):
        c = r["tracks"].get("clean", {}).get("wer")
        return (r["arena_wer"] is None, r["arena_wer"] or 9, c if c is not None else 9)

    rows.sort(key=sort_key)
    return {"language": lang, "tracks": tracks, "extra_tracks": extra_tracks, "weights": weights,
            "sets": {s.name: {"dialect": s.dialect, "domain": s.domain, "source": s.source, "track": s.track,
                              "license": s.license} for s in suite.sets.values()},
            "models": rows}


FLOOR = 0.005  # geometric aggregation: a set score below 0.5 % WER counts as 0.5 %


def v2_layout(suite: Suite) -> tuple[dict[str, list[str]], dict[str, float]]:
    """The v2 board's tracks ({track: set/condition keys}) and normalized track weights.

    `scoring.v2.tracks` replaces the v1 track weights, `scoring.v2.set_tracks` moves a set's clean
    condition to another track and `scoring.v2.condition_tracks` moves every set of a degraded condition
    (the chain-v2 phone channel into "telephony", the v1 chain out of it); a track without a weight is a
    diagnostic, scored but outside the Arena."""
    v2 = suite.scoring.get("v2") or {}
    moved = v2.get("set_tracks") or {}
    by_cond = v2.get("condition_tracks") or {}
    tracks: dict[str, list[str]] = {}
    for name, cond, track in suite.eval_sets():
        if track != "hallucination":
            t = moved.get(name, track) if cond == "clean" else by_cond.get(cond, track)
            tracks.setdefault(t, []).append(f"{name}/{cond}")
    tw = {t: v["weight"] for t, v in (v2.get("tracks") or suite.scoring.get("tracks", {})).items() if t in tracks}
    z = sum(tw.values()) or 1.0
    return tracks, {t: w / z for t, w in tw.items()}


def set_weights(suite: Suite) -> dict[str, float]:
    """Per (set/condition) weight in the v2 Arena: track weight split evenly over the track's sets."""
    tracks, tw = v2_layout(suite)
    return {k: tw[t] / len(keys) for t, keys in tracks.items() if t in tw for k in keys}


def combine(values: dict[str, float], weights: dict[str, float], how: str = "geometric") -> float | None:
    """Weighted geometric or arithmetic mean over the keys of `weights` (None if any is missing)."""
    if not weights or any(values.get(k) is None for k in weights):
        return None
    z = sum(weights.values())
    if how == "geometric":
        return math.exp(sum(w * math.log(max(values[k], FLOOR)) for k, w in weights.items()) / z)
    return sum(w * values[k] for k, w in weights.items()) / z


def _v2_set(res: dict, profile: str) -> dict | None:
    sc = res.get("scoring")
    p = sc and sc.get("profiles", {}).get(profile)
    if not p:
        return None
    strict = sc["profiles"].get("L1", {})
    return {"wer": p["wer"], "wer_uncapped": p.get("wer_uncapped"), "cer": p.get("cer_ns"), "av_wer": p.get("av_wer"),
            "strict_wer": strict.get("wer"), "n": p.get("num_utterances"), "failed": res.get("num_failed", 0),
            "loop_rate": sc.get("hallucination", {}).get("loop_rate"),
            "insertions": p.get("ins"), "term_recall": (sc.get("terms") or {}).get("recall")}


def is_ranked(row: dict) -> bool:
    """Every model whose weights were run here (open, gated or private) is ranked; closed APIs are unranked
    references, scored on the re-hosted sets only."""
    return row.get("kind", "open") != "api"


def _name_md(row: dict) -> str:
    """The model name, linked to its Hub page unless the weights are private (a page others cannot open)."""
    return row["model"] if row.get("kind") == "private" else f"[{row['model']}](https://huggingface.co/{row['hf_id']})"


def collect_v2(suite: Suite, lb: dict) -> dict:
    """Add the v2 view to a v1 leaderboard dict (in place) and return it."""
    head = suite.scoring.get("headline", HEADLINE)
    how = suite.scoring.get("aggregate", "geometric")
    layout, track_weights = v2_layout(suite)
    weights = set_weights(suite)
    track_of = {k: t for t, keys in layout.items() for k in keys}
    source_of = {f"{n}/{c}": n for n, c, _ in suite.eval_sets()}
    ranked_in_domain: set[str] = set()
    for row in lb["models"]:
        if is_ranked(row):
            ranked_in_domain.update(row.get("in_domain") or [])
    zero_shot = {k: w for k, w in weights.items() if source_of[k] not in ranked_in_domain}
    simulated = {s.name for s in suite.sets.values() if s.simulated}
    real = {k: w for k, w in weights.items() if k.endswith("/clean") and source_of[k] not in simulated}
    for row in lb["models"]:
        summary = json.loads((RESULTS_DIR / suite.language / row["model"].replace("/", "__") / "summary.json")
                             .read_text())
        sets = {k: v for k, r in summary["results"].items() if (v := _v2_set(r, head))}
        complete = {k: v for k, v in sets.items() if not v["failed"]}
        wer = {k: v["wer"] for k, v in complete.items()}
        cer = {k: v["cer"] for k, v in complete.items()}
        strict = {k: v["strict_wer"] for k, v in complete.items()}
        tracks = {}
        for t in track_weights:
            tw = {k: w for k, w in weights.items() if track_of[k] == t}
            tracks[t] = {"wer": combine(wer, tw, how), "cer": combine(cer, tw, how), "wer_arith": combine(wer, tw, "arithmetic"),
                         "done": sum(k in complete for k in tw), "total": len(tw)}
        exposed = [k for k in weights if source_of[k] in set(row.get("in_domain") or [])]
        ns = summary["results"].get("noise_only/clean", {}).get("scoring", {}).get("nonspeech", {})
        # key-term recall pooled over the real recordings that have terms (SVQ queries, CV18 entities)
        terms = [t for k, r in summary["results"].items()
                 if k in complete and k.endswith("/clean") and (t := (r.get("scoring") or {}).get("terms"))]
        n_terms = sum(t["n"] for t in terms)
        row["v2"] = {
            "halluc_any": ns.get("halluc_any"), "halluc_3plus": ns.get("halluc_3plus"),
            "halluc_3plus_ci": ns.get("halluc_3plus_ci"), "inserted_wpm": ns.get("inserted_wpm"),
            "sets": sets, "tracks": tracks,
            "arena": combine(wer, weights, how), "arena_arith": combine(wer, weights, "arithmetic"),
            "arena_cer": combine(cer, weights, how), "arena_strict": combine(strict, weights, how),
            "zero_shot": combine(wer, zero_shot, how) if zero_shot else None,
            "arena_real": combine(wer, real, how) if real else None,
            "exposure": round(sum(weights[k] for k in exposed), 4), "incomplete": sorted(set(sets) - set(complete)),
            "term_recall": sum(t["n"] * t["recall"] for t in terms) / n_terms if n_terms else None, "term_n": n_terms,
        }
    # bag of hallucinations, mined from every model's local noise-only predictions
    outs = {}
    for row in lb["models"]:
        f = RESULTS_DIR / suite.language / row["model"].replace("/", "__") / "predictions" / "noise_only__clean.jsonl"
        if f.exists():
            outs[row["model"]] = [json.loads(line).get("hyp_norm", "") for line in f.open()]
    bag = mine_bag(outs) if outs else []
    for row in lb["models"]:
        if row["model"] in outs:
            row["v2"]["boh_share"] = bag_share(outs[row["model"]], [p for p, _, _ in bag])
    ranked = _ranked_v2(lb)
    for i, r in enumerate(ranked, 1):
        r["v2"]["rank"] = i
    lb["v2"] = {"headline": head, "aggregate": how, "weights": weights, "track_weights": track_weights,
                "tracks": {t: layout[t] for t in track_weights},
                # sets moved to a track without a weight (suite scoring.v2.set_tracks): scored, not in the Arena
                "diagnostic_sets": sorted(k for t, keys in layout.items() if t not in track_weights
                                          for k in keys if k.endswith("/clean")),
                "zero_shot_sets": sorted(zero_shot), "real_audio_sets": sorted(real),
                "floors": {s.name: s.floor for s in suite.sets.values() if s.floor},
                "bag_of_hallucinations": bag[:30], "num_ranked": len(ranked)}
    return lb


def _ranked_v2(lb: dict) -> list[dict]:
    return sorted((r for r in lb["models"] if r.get("v2", {}).get("arena") is not None and is_ranked(r)),
                  key=lambda r: r["v2"]["arena"])


def bootstrap_v2(suite: Suite, lb: dict, n_boot: int = 2000) -> dict | None:
    """Joint cluster bootstrap of the v2 board from the local v2 predictions of the ranked models
    (sttarena/stats.py): Arena and track intervals, simultaneous rank sets, and the sets whose intervals
    are likely too narrow. None when no ranked model has v2 predictions here."""
    from . import stats

    head = lb["v2"]["headline"]
    geometric = lb["v2"]["aggregate"] == "geometric"
    models = [r["model"] for r in _ranked_v2(lb)]
    data = []
    for key in lb["v2"]["weights"]:
        name, cond = key.split("/")
        recs = {}
        for m in models:
            f = RESULTS_DIR / suite.language / m.replace("/", "__") / "predictions" / f"{name}__{cond}.jsonl"
            if f.exists():
                rows = [json.loads(line) for line in f.open()]
                if rows and "scores" in rows[0]:
                    recs[m] = rows
        if len(recs) == len(models) and models:
            data.append(stats.records_to_setdata(name, cond, recs, head))
    if len(data) != len(lb["v2"]["weights"]) or len(models) < 2:
        return None
    boot = stats.joint_cluster_bootstrap(data, n_boot=n_boot)
    tracks = {t: [k for k in keys if k in boot.draws] for t, keys in lb["v2"]["tracks"].items()}
    weights = lb["v2"]["track_weights"]
    est, est_tr = stats.aggregate(boot.estimates, tracks, weights, geometric=geometric)
    draws, draws_tr = stats.aggregate(boot.draws, tracks, weights, geometric=geometric)
    ci, lo_hi = stats.percentile_ci(draws), stats.rank_sets(est, draws)
    order = list(boot.models)
    out = {"n_boot": n_boot, "headline": head, "aggregate": lb["v2"]["aggregate"], "flags": boot.flags(), "models": {}}
    for j, m in enumerate(order):
        out["models"][m] = {
            "arena": round(float(est[j]), 6), "arena_ci": [round(float(x), 5) for x in ci[:, j]],
            "rank_set": [int(lo_hi[0][j]), int(lo_hi[1][j])],
            "tracks": {t: [round(float(x), 5) for x in stats.percentile_ci(d)[:, j]] for t, d in draws_tr.items()},
        }
    return out


def _attach_v2_stats(suite: Suite, lb: dict) -> None:
    """Effective weights and leave-one-set-out stability (point estimates), and the bootstrap (local v2
    predictions, else the committed bootstrap_v2.json)."""
    import numpy as np

    from . import stats

    ranked = _ranked_v2(lb)
    if len(ranked) >= 2:
        keys = list(lb["v2"]["weights"])
        est = {k: np.array([r["v2"]["sets"].get(k, {}).get("wer") or np.nan for r in ranked]) for k in keys}
        tracks = {t: list(ks) for t, ks in lb["v2"]["tracks"].items()}
        tw = lb["v2"]["track_weights"]
        try:
            lb["v2"]["effective_weights"] = {
                how: stats.effective_weights(est, tracks, tw, geometric=how == "geometric")["tracks"]
                for how in ("geometric", "arithmetic")}
            loso = stats.leave_one_set_out(est, tracks, tw,
                                           geometric=lb["v2"]["aggregate"] == "geometric")
            lb["v2"]["leave_one_set_out"] = {"mean_moved": round(sum(v["moved"] for v in loso.values()) / len(loso), 2),
                                            "max_shift": max(v["max_shift"] for v in loso.values()), "sets": loso}
        except ValueError:
            pass
    path = RESULTS_DIR / suite.language / "bootstrap_v2.json"
    boot = bootstrap_v2(suite, lb)
    if boot is not None:
        path.write_text(json.dumps(boot, indent=1))
    elif path.exists():
        boot = json.loads(path.read_text())
    if not boot or boot.get("headline") != lb["v2"]["headline"]:
        return
    lb["v2"]["bootstrap"] = {"n_boot": boot["n_boot"], "flags": boot["flags"]}
    for r in lb["models"]:
        b = boot["models"].get(r["model"])
        if b and r["v2"].get("arena") is not None and abs(b["arena"] - r["v2"]["arena"]) < 1e-6:
            r["v2"].update(arena_ci=b["arena_ci"], rank_set=b["rank_set"])
            for t, c in b["tracks"].items():
                if t in r["v2"]["tracks"]:
                    r["v2"]["tracks"][t]["ci"] = c


def _pct(x):
    return "—" if x is None else f"{x * 100:.2f}"


def to_markdown_v2(lb: dict) -> str:
    """The v2 board (models with complete v2 results), then the per-set view with floors."""
    tracks = list(lb["v2"]["tracks"])
    rows = _ranked_v2(lb)
    if not rows:
        return ""
    head = ["#", "Model", "Params (B)", "**Arena WER v2**", "95% CI", "Rank set", "Arena CER v2",
            *[TRACK_LABEL.get(t, t) for t in tracks],
            "Strict (L1)", "Arithmetic", "Real audio", "Zero-shot", "Exposure", "Halluc. ≥3 words", "Terms missed",
            "v1 Arena", "RTFx"]
    lines = ["| " + " | ".join(head) + " |", "|" + "---|" * len(head)]
    for rank, r in enumerate(rows, 1):
        v = r["v2"]
        kind = r.get("kind", "open")
        mark = (" †" if v["exposure"] else "") + (f" *({kind} weights)*" if kind != "open" else "")
        ci, rs = v.get("arena_ci"), v.get("rank_set")
        cells = [str(rank), f"{_name_md(r)}{mark}",
                 f"{r['params_b']:.2f}" if r["params_b"] else "—", f"**{_pct(v['arena'])}**",
                 f"{_pct(ci[0])}–{_pct(ci[1])}" if ci else "—",
                 ("—" if not rs else str(rs[0]) if rs[0] == rs[1] else f"{rs[0]}–{rs[1]}"), _pct(v["arena_cer"]),
                 *[_pct(v["tracks"][t]["wer"]) for t in tracks], _pct(v["arena_strict"]), _pct(v["arena_arith"]),
                 _pct(v["arena_real"]), _pct(v["zero_shot"]), f"{v['exposure']:.0%}" if v["exposure"] else "—", _pct(v.get("halluc_3plus")),
                 _pct(1 - v["term_recall"]) if v.get("term_recall") is not None else "—",
                 _pct(r.get("arena_wer")), str(r["rtfx"] or "—")]
        lines.append("| " + " | ".join(cells) + " |")
    meta = lb["v2"]
    lines += ["", f"WER/CER in %, lower is better. Per set: profile `{meta['headline']}` (dialect-lenient "
              "normalization, space-insensitive alignment, multi-reference where available, errors capped per "
              f"utterance). Arena: weighted {meta['aggregate']} mean over sets (track weight split evenly over its "
              "sets; " + ", ".join(f"{TRACK_LABEL.get(t, t)} {w:.0%}" for t, w in meta["track_weights"].items())
              + (", not weighted: " + ", ".join(k.split("/")[0] for k in meta["diagnostic_sets"])
                 if meta["diagnostic_sets"] else "") + "). Strict (L1): the same aggregation of orthographic-only WER. Real audio: the Arena over "
              "the clean sets whose audio is not simulated (no telephony, call-center, added noise or "
              "band-limiting). Zero-shot: Arena over the sets no "
              "ranked model trained on (" + (", ".join(sorted({k.split('/')[0] for k in meta['zero_shot_sets']}))
                                             or "none") + "). Exposure: share of the Arena weight on sets whose "
              "training split the model saw (†). Halluc. ≥3 words: share of noise-only clips (silence, hold, line noise, "
              "distant chatter) on which the model wrote three or more words; not part of the Arena. Terms missed: share of "
              "key terms the hypothesis does not contain after the same normalization, pooled over the SVQ queries' "
              "salient terms (names, places, question words) and the named entities of the CV18 test sentences "
              "(Elyadata/CV18-NER); not part of the Arena. 95% CI and "
              "rank set: joint cluster bootstrap (speakers / videos / recordings / sentences resampled together "
              "across a set's conditions and across models) and simultaneous rank confidence sets (Mogstad et al. "
              "2024): models whose rank sets overlap are not separated by this benchmark."]
    eff = meta.get("effective_weights", {}).get(meta["aggregate"])
    if eff:
        lines.append("Effective track weights (share of the between-model spread of the Arena): "
                     + ", ".join(f"{TRACK_LABEL.get(t, t)} {w:.0%}" for t, w in eff.items()) + ".")
    flags = meta.get("bootstrap", {}).get("flags")
    if flags:
        lines.append("Intervals likely too narrow on: " + ", ".join(f"{k} ({v})" for k, v in sorted(flags.items())) + ".")
    keys = [k for t in tracks for k in meta["tracks"][t]] + meta["diagnostic_sets"]
    floors = meta.get("floors", {})
    lines += ["", "<details><summary>Per-set WER v2 (%)</summary>", "",
              "| Model | " + " | ".join(keys) + " |", "|---|" + "---|" * len(keys)]
    floor_row = [_pct(floors.get(k.split("/")[0], {}).get(meta["headline"])) if k.endswith("/clean") else "—"
                 for k in keys]
    if any(c != "—" for c in floor_row):
        lines.append("| *human floor* | " + " | ".join(floor_row) + " |")
    for r in rows:
        lines.append(f"| {r['model']} | " + " | ".join(_pct(r["v2"]["sets"].get(k, {}).get("wer")) for k in keys) + " |")
    lines += ["", "</details>"]
    return "\n".join(lines)


def to_markdown(lb: dict) -> str:
    tracks = list(lb["tracks"])
    head = ["#", "Model", "Params (B)", "**Arena WER**", "95% CI", "Rank range", "Arena CER",
            *[TRACK_LABEL.get(t, t) for t in tracks], "RTFx"]
    head.insert(-1, "Halluc. %")
    lines = ["| " + " | ".join(head) + " |", "|" + "---|" * len(head)]
    ranked = [r for r in lb["models"] if is_ranked(r)]  # closed APIs are unranked
    for i, r in enumerate(ranked, 1):
        kind = r.get("kind", "open")
        mark = (" †" if r.get("in_domain") else "") + (f" *({kind} weights)*" if kind != "open" else "")
        cells = [str(i), f"{_name_md(r)}{mark}",
                 f"{r['params_b']:.2f}" if r["params_b"] else "—", f"**{_pct(r['arena_wer'])}**",
                 f"{_pct(r['arena_ci'][0])}–{_pct(r['arena_ci'][1])}" if r.get("arena_ci") else "—",
                 (lambda rr: "—" if not rr else str(rr[0]) if rr[0] == rr[1] else f"{rr[0]}–{rr[1]}")(r.get("rank_range")),
                 _pct(r["arena_cer"])]
        for t in tracks:
            tr = r["tracks"][t]
            cells.append(_pct(tr["wer"]) if tr["wer"] is not None else f"({tr['done']}/{tr['total']})")
        cells.append(_pct(r["hallucination_rate"]))
        cells.append(str(r["rtfx"] or "—"))
        lines.append("| " + " | ".join(cells) + " |")
    weights = ", ".join(f"{TRACK_LABEL.get(t, t)} {w:.0%}" for t, w in lb["weights"].items())
    lines.append("")
    lines.append(f"WER/CER in %, lower is better. Arena = weighted mean of track WERs ({weights}). "
                 "Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which "
                 "the model output any words; not part of the Arena score. 95% CI and rank range: paired "
                 "bootstrap over utterances (1000 resamples); models whose rank ranges overlap are not "
                 "reliably separated by this benchmark.")
    flagged = [f"{r['model']} ({', '.join(r['in_domain'])})" for r in ranked if r.get("in_domain")]
    if flagged:
        lines.append("")
        lines.append("† Trained on the train split of a benchmark corpus (in-domain, not zero-shot): " + "; ".join(flagged) + ".")

    # Per-set detail
    keys = [k for t in tracks for k in lb["tracks"][t]]
    lines += ["", "<details><summary>Per-set WER (%)</summary>", "",
              "| Model | " + " | ".join(keys) + " |", "|---|" + "---|" * len(keys)]
    for r in ranked:
        lines.append(f"| {r['model']} | " + " | ".join(_pct(r["sets"].get(k, {}).get("wer")) for k in keys) + " |")
    lines += ["", "</details>"]
    return "\n".join(lines)


def build(suite_name: str) -> dict:
    suite = Suite.load(suite_name)
    if any((RESULTS_DIR / suite.language).glob("*/predictions")):
        bootstrap.save(suite_name)  # otherwise keep the committed bootstrap.json
    lb = collect_v2(suite, collect(suite))
    _attach_v2_stats(suite, lb)
    lang = suite.language
    LB_DIR.mkdir(exist_ok=True)
    SITE_DATA.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(lb, indent=1, ensure_ascii=False)
    (LB_DIR / f"{lang}.json").write_text(payload)
    (SITE_DATA / f"{lang}.json").write_text(payload)
    # Same data as a script so the page also renders from file:// and before any fetch.
    (SITE_DATA / f"{lang}.js").write_text(
        f"window.ARENA_DATA = window.ARENA_DATA || {{}};\nwindow.ARENA_DATA[{lang!r}] = {payload};\n")
    md, md_v2 = to_markdown(lb), to_markdown_v2(lb)
    if md_v2:
        md = f"{md_v2}\n\n<details><summary>v1 leaderboard (previous scorer)</summary>\n\n{md}\n\n</details>"
    (LB_DIR / f"{lang}.md").write_text(md + "\n")
    readme = ROOT / "README.md"
    text = readme.read_text()
    pat = re.compile(rf"(<!-- LEADERBOARD:{lang}:START -->)(.*?)(<!-- LEADERBOARD:{lang}:END -->)", re.S)
    if pat.search(text):
        readme.write_text(pat.sub(lambda m: f"{m.group(1)}\n{md}\n{m.group(3)}", text))
    print(md)
    return lb
