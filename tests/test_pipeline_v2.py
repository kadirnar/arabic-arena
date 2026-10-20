"""End to end: runner records -> summary.json -> rescore -> leaderboard v2 with the cluster bootstrap.

A toy suite with two clean sets and one degraded condition, three fake models with known error
patterns, written through the runner's own functions into a temporary results directory.
"""

import json

import pytest

from sttarena import bootstrap, leaderboard, rescore, runner
from sttarena.data import Suite

SUITE = """
language: ar
hf_repo: none/none
datasets:
  read:
    source: none/read
    split: test
    text: text
    n: 40
    track: clean
    cluster: {field: speaker}
  talk:
    source: none/talk
    split: test
    text: text
    n: 40
    track: codeswitch
    references: [alt]
degraded:
  telephony:
    from: [read]
    n: 20
scoring:
  version: 2
  headline: L2sp
  aggregate: geometric
  tracks:
    clean: {weight: 0.5}
    codeswitch: {weight: 0.2}
    telephony: {weight: 0.3}
"""

WORDS = "ذهب الولد الى المدرسه في الصباح الباكر مع اخيه الصغير".split()


def _rows(name: str, n: int) -> list[dict]:
    rows = []
    for i in range(n):
        words = [WORDS[(i + k) % len(WORDS)] for k in range(6)]
        meta = {"speaker": f"spk{i % 8}"}
        if name == "talk":
            meta["alt"] = " ".join(words).replace("الى", "إلى")
        rows.append({"id": f"{name}/{i}", "text": " ".join(words), "duration": 3.0, "meta": meta})
    return rows


def _hyp(model: int, row: dict, i: int) -> str:
    words = row["text"].split()
    if model == 1 and i % 2:  # model 1 drops a word on every other utterance
        words = words[:-1]
    if model == 2:  # model 2 substitutes two words everywhere
        words = ["كلام", "اخر", *words[2:]]
    return " ".join(words)


# the same suite with a simulated set that the v2 board moves out of the Arena, and v2 track weights
SUITE_V2 = SUITE.replace("degraded:", """  band:
    source: none/band
    split: test
    text: text
    n: 40
    track: clean
    simulated: true
degraded:""") + """  v2:
    tracks:
      clean: {weight: 0.6}
      codeswitch: {weight: 0.3}
      telephony: {weight: 0.1}
    set_tracks: {band: bandlimited}
"""


def _build(tmp_path, monkeypatch, text: str):
    (tmp_path / "toy.yaml").write_text(text)
    suite = Suite.load(str(tmp_path / "toy.yaml"))
    results = tmp_path / "results"
    for mod in (runner, leaderboard, bootstrap, rescore):
        monkeypatch.setattr(mod, "RESULTS_DIR", results)
    for m in range(3):
        out = results / "ar" / f"toy-model-{m}"
        (out / "predictions").mkdir(parents=True)
        summary = {"results": {}, "model": f"toy-model-{m}", "hf_id": f"toy/m{m}", "params_b": 1.0, "kind": "open"}
        for name, cond, track in suite.eval_sets():
            rows = _rows(name, 40)[: (20 if cond != "clean" else 40)]
            hyps = [_hyp(m, r, i) for i, r in enumerate(rows)]
            scored = runner.score_rows(suite, name, rows, hyps, [False] * len(rows), cond)
            summary["results"][f"{name}/{cond}"] = runner.result_entry(scored, rows, name, cond, track, 1.0)
            runner.write_predictions(out / "predictions" / f"{name}__{cond}.jsonl", scored)
        (out / "summary.json").write_text(json.dumps(summary, ensure_ascii=False))
    return suite, results


@pytest.fixture()
def toy(tmp_path, monkeypatch):
    return _build(tmp_path, monkeypatch, SUITE)


@pytest.fixture()
def toy_v2(tmp_path, monkeypatch):
    return _build(tmp_path, monkeypatch, SUITE_V2)


def test_v2_board_from_runner_records(toy):
    suite, _ = toy
    lb = leaderboard.collect_v2(suite, leaderboard.collect(suite))
    leaderboard._attach_v2_stats(suite, lb)
    rows = {r["model"]: r["v2"] for r in lb["models"]}
    assert rows["toy-model-0"]["arena"] == pytest.approx(leaderboard.FLOOR)  # perfect: floored geometric mean
    assert rows["toy-model-0"]["arena"] < rows["toy-model-1"]["arena"] < rows["toy-model-2"]["arena"]
    # the multi-reference set forgives the إلى/الى spelling of model 0's reference variant
    assert rows["toy-model-0"]["sets"]["talk/clean"]["wer"] == 0
    for v in rows.values():
        lo, hi = v["arena_ci"]  # stored rounded to 5 decimals
        assert lo <= v["arena"] + 1e-5 and v["arena"] <= hi + 1e-5
        assert 1 <= v["rank_set"][0] <= v["rank_set"][1] <= 3
    assert rows["toy-model-2"]["rank_set"] == [3, 3]
    flags = lb["v2"]["bootstrap"]["flags"]
    assert flags["talk/clean"].startswith("iid")  # no cluster key declared for "talk"
    assert set(lb["v2"]["effective_weights"]["geometric"]) == {"clean", "codeswitch", "telephony"}
    assert leaderboard.to_markdown_v2(lb).count("toy-model-") == 6  # board + per-set table


def test_rescore_upgrades_and_keeps_scores(toy):
    suite, results = toy
    before = json.loads((results / "ar" / "toy-model-1" / "summary.json").read_text())
    rescore.rescore(str(results.parent / "toy.yaml"))
    after = json.loads((results / "ar" / "toy-model-1" / "summary.json").read_text())
    for key, res in before["results"].items():
        assert after["results"][key]["wer_v2"] == pytest.approx(res["wer_v2"])
        assert after["results"][key]["seconds"] == res["seconds"]  # timing of the original run is kept
    assert after["schema"] == runner.RESULT_SCHEMA


def test_v2_condition_tracks_swap_the_phone_chain(tmp_path):
    text = SUITE.replace("degraded:", "degraded:\n  telephony_v2:\n    version: 2\n    chain: telephony\n"
                                      "    from: [read, talk]\n    n: 20") + """
  v2:
    tracks:
      clean: {weight: 0.6}
      codeswitch: {weight: 0.2}
      telephony: {weight: 0.2}
    condition_tracks: {telephony: telephony_v1, telephony_v2: telephony}
"""
    (tmp_path / "swap.yaml").write_text(text)
    suite = Suite.load(str(tmp_path / "swap.yaml"))
    tracks, tw = leaderboard.v2_layout(suite)
    assert tracks["telephony"] == ["read/telephony_v2", "talk/telephony_v2"]
    assert tracks["telephony_v1"] == ["read/telephony"] and "telephony_v1" not in tw
    assert leaderboard.set_weights(suite) == pytest.approx(
        {"read/clean": 0.6, "talk/clean": 0.2, "read/telephony_v2": 0.1, "talk/telephony_v2": 0.1})
    v1_tracks = {t for _, _, t in suite.eval_sets()}  # the v1 board keeps each condition in its own track
    assert {"telephony", "telephony_v2"} <= v1_tracks


def test_v2_weights_and_set_moves_leave_v1_alone(toy_v2):
    suite, _ = toy_v2
    tracks, tw = leaderboard.v2_layout(suite)
    assert tracks["bandlimited"] == ["band/clean"] and "band/clean" not in tracks["clean"]
    assert tw == pytest.approx({"clean": 0.6, "codeswitch": 0.3, "telephony": 0.1})
    w = {"read/clean": 0.6, "talk/clean": 0.3, "read/telephony": 0.1}
    assert leaderboard.set_weights(suite) == pytest.approx(w)
    lb = leaderboard.collect(suite)  # v1: the sets' own tracks and scoring.tracks
    assert lb["tracks"]["clean"] == ["read/clean", "band/clean"]
    assert lb["weights"] == {"clean": 0.5, "codeswitch": 0.2, "telephony": 0.3}
    leaderboard.collect_v2(suite, lb)
    leaderboard._attach_v2_stats(suite, lb)
    assert lb["v2"]["diagnostic_sets"] == ["band/clean"] and set(lb["v2"]["tracks"]) == set(tw)
    for r in lb["models"]:
        v1 = {k: r["sets"][k]["wer"] for k in r["sets"]}
        want_v1 = (0.5 * (v1["read/clean"] + v1["band/clean"]) / 2 + 0.2 * v1["talk/clean"]
                   + 0.3 * v1["read/telephony"])
        assert r["arena_wer"] == pytest.approx(want_v1)
        v2 = r["v2"]
        assert "band/clean" in v2["sets"]  # still scored
        sets = {k: v2["sets"][k]["wer"] for k in w}
        assert v2["arena"] == pytest.approx(leaderboard.combine(sets, w))
        assert v2.get("arena_ci")  # the bootstrap uses the same v2 weights, so its intervals attach
    assert set(lb["v2"]["effective_weights"]["geometric"]) == set(tw)
    md = leaderboard.to_markdown_v2(lb)
    assert "Clean 60%" in md and "not weighted: band" in md and "band/clean" in md
