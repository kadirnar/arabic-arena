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


@pytest.fixture()
def toy(tmp_path, monkeypatch):
    (tmp_path / "toy.yaml").write_text(SUITE)
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
