"""Error taxonomy (sttarena.taxonomy): one synthetic case per category, the exact-total invariant, and
the consensus rules (peers must all agree; degraded copies are anchored to the clean audio).

The cases are the patterns research 09 validated on real outputs; a case that changes category is a
methodology change, not a refactor.
"""

import json

import pytest

from sttarena import taxonomy as T
from sttarena.scoring import Scorer


def rec(ref: str, hyp: str, rid: str = "u1") -> dict:
    return {"id": rid, "ref": ref, "hyp": hyp}


def counts_of(ref: str, hyp: str) -> dict[str, float]:
    t = T.attribute([rec(ref, hyp)])
    return {c: round(v, 6) for c, v in t.counts.items() if v}


CASES = [
    # a: spelling only (hamza seat, dagger alef, tanween alef, silent alef after plural waw)
    ("هذا الشي بيؤثر على حياتي", "هذا الشي بيأثر على حياتي", {"a": 1}),
    ("هاذا الشي حلو", "هذا الشي حلو", {"a": 1}),
    ("مشيت كيلومتر واحد", "مشيت كيلومترًا واحد", {"a": 1}),
    ("لم يقومو بالكثير", "لم يقوموا بالكثير", {"a": 1}),
    # b: word boundaries and attested contractions
    ("ما راح يجي بكره", "مراح يجي بكره", {"b": 2}),
    ("قال لي امس", "قالي امس", {"b": 2}),
    ("الحمد لله على كل حال", "الحمدلله على كل حال", {"b": 2}),
    ("يا اخوي تعال", "ياخوي تعال", {"b": 2}),
    # c: the same word in a dialect spelling (table and rules)
    ("هذا اللي قلته", "هذا الي قلته", {"c": 1}),
    ("تقدر تقول كده", "تقدر تقول كذا", {"c": 1}),
    ("ما فيه غيرو اليوم", "ما فيه غيره اليوم", {"c": 1}),
    ("محدش حيقدر يشيله", "محدش هيقدر يشيله", {"c": 1}),
    ("هي يالسه في البيت", "هي جالسه في البيت", {"c": 1}),
    # d: number forms, and verbalization when the text had digits
    ("الساعة العاشرة الحين", "الساعة عشرة الحين", {"d": 1}),
    ("تمت استعادة 30% من الموقع", "تمت استعادة ثلاثين في المية من الموقع", {"d": 2}),
    # e: code-switched words in Latin vs Arabic script
    ("okay حلو", "اوكي حلو", {"e": 1}),
    ("هذا ال laptop حقي", "هذا اللابتوب حقي", {"e": 2}),
    # f: hesitations, laughter, discourse fillers, repetitions
    ("اه طيب نروح", "طيب نروح", {"f": 1}),
    ("هههه طيب نروح", "طيب نروح", {"f": 1}),
    ("تكون يعني جديده", "تكون جديده", {"f": 1}),
    ("انا انا رحت للسوق", "انا رحت للسوق", {"f": 1}),
    # h: MSA-ization of a dialect word, English answer
    ("بعدين وين رايحين", "بعدين أين رايحين", {"h": 1}),
    ("كيف حالك اليوم يا صديقي", "how are you today my friend", {"h": 6}),
    # i: loop, canned phrase, empty output, truncation
    ("قال كلمة", "قال كلمة وي وي وي وي وي وي وي", {"i": 7}),  # only the inserted repeats are i
    ("قال كلمة", "قال وي وي وي وي وي وي وي وي", {"i": 7, "j": 1}),
    ("بس احنا كمان", "اشتركوا في القناة", {"i": 3}),
    ("ما قلت شي", "", {"i": 3}),
    ("الله يغفر للعراق احسن الله عزاك ماذا ترك تروحين", "ماذا ترك تروحين", {"i": 6}),
    # j: a recognition error, an affix-only error
    ("يكتب الدرس", "تكتب الدرس", {"j": 1}),
    ("ذهب الى البيت", "ذهب الى بيت", {"j": 1}),
]


@pytest.mark.parametrize("ref, hyp, expected", CASES)
def test_category_cases(ref, hyp, expected):
    assert counts_of(ref, hyp) == expected


def test_affix_and_codeswitch_sub_kinds():
    assert "j.affix" in T.attribute([rec("ذهب الى البيت", "ذهب الى بيت")]).sub_counts
    t = T.attribute([rec("this is very nice", "this is very bad")])
    assert t.sub_counts == {"j.cs": 1.0}


def test_category_table_is_stable():
    assert T.CODES == tuple("abcdefghij")
    assert len({c.name for c in T.CATEGORIES}) == 10
    assert T.SPURIOUS == tuple("abcdef")
    assert all(0 < c.precision <= 100 and 0 < c.recall <= 100 for c in T.CATEGORIES)


def test_totals_equal_the_plain_v1_error_count():
    items = [rec(r, h, f"u{k}") for k, (r, h, _) in enumerate(CASES)]
    items += [rec("", "شي ما", "empty-ref"), rec("كلام مختلف تماما", "شي ثاني", "far")]
    scored = Scorer(profiles=("v1",)).score(items).utterances
    expected = sum(u["scores"]["v1"]["S"] + u["scores"]["v1"]["D"] + u["scores"]["v1"]["I"] for u in scored
                   if u["scores"]["v1"].get("n", 0) > 0)
    for records in (items, scored):  # v1-style and v2 records give the same attribution
        t = T.attribute(records)
        assert t.errors == expected
        assert sum(t.counts.values()) == pytest.approx(expected, abs=1e-9)
        assert sum(t.shares.values()) == pytest.approx(1.0)
        assert t.n_utterances == len(items) - 1  # the empty reference is left out, as the scorer does


def panel(hyps: dict[str, str], ref: str, rid: str = "u1") -> dict[str, list[dict]]:
    return {m: [rec(ref, h, rid)] for m, h in hyps.items()}


def test_consensus_needs_every_peer():
    ref = "لا يوجد بين اسبانيا والمانيا"
    agree = panel({"m1": "لا يوجد فرق بين اسبانيا والمانيا", "m2": "لا يوجد فرق بين اسبانيا والمانيا",
                   "m3": "لا يوجد فرق بين اسبانيا والمانيا"}, ref)
    res = T.attribute_models(agree)
    assert all(t.counts["g"] == 1 and t.errors == 1 for t in res.values())
    split = dict(agree, m3=[rec(ref, "لا يوجد بين اسبانيا والمانيا")])
    res = T.attribute_models(split)
    assert res["m1"].counts["g"] == 0 and res["m1"].counts["j"] == 1
    # without a panel there is no consensus
    assert T.attribute(agree["m1"]).counts["j"] == 1


def test_consensus_truncation_is_a_reference_problem():
    ref = "الله يغفر للعراق احسن الله عزاك ماذا ترك تروحين"
    res = T.attribute_models(panel({m: "ماذا ترك تروحين" for m in ("m1", "m2", "m3")}, ref))
    assert res["m1"].counts["g"] == 6 and res["m1"].counts["i"] == 0


def test_degraded_consensus_is_anchored_to_clean_audio():
    ref = "بالروح أفدى حبيبا كان يمنحني"
    degraded = panel({m: "بالروح ابدى حبيبا كان يمنحني" for m in ("m1", "m2", "m3")}, ref)
    clean_ok = panel({m: ref for m in ("m1", "m2", "m3")}, ref)
    clean_bad = degraded
    # every model mishears on the degraded copy only: a channel error, not a reference error
    res = T.attribute_models(degraded, clean=clean_ok)
    assert res["m1"].counts["g"] == 0 and res["m1"].counts["j"] == 1
    # the same consensus error on the clean copy: likely a reference error
    res = T.attribute_models(degraded, clean=clean_bad)
    assert res["m1"].counts["g"] == 1
    # single-model API with the panel's clean records
    t = T.attribute(degraded["m1"], {"m2": degraded["m2"], "m3": degraded["m3"]}, clean=clean_ok["m1"],
                    clean_others={"m2": clean_ok["m2"], "m3": clean_ok["m3"]}, model="m1")
    assert t.counts["g"] == 0


def test_degraded_copy_ids_map_to_clean_ids():
    ref = "لا يوجد بين اسبانيا والمانيا"
    hyp = "لا يوجد فرق بين اسبانيا والمانيا"
    clean = panel({m: hyp for m in ("m1", "m2")}, ref, rid="u7")
    noisy = {m: [{**rec(ref, hyp, "u7#snr5"), "source_utt": "u7"}] for m in ("m1", "m2")}
    assert T.attribute_models(noisy, clean=clean)["m1"].counts["g"] == 1


def test_pool_worst_share_and_wer_without():
    a = T.attribute([rec("كلمة اولى ثانية", "كلمة اولى ثانية", "x"),
                     rec("قال كلمة", "قال كلمة وي وي وي وي وي وي", "y")])
    b = T.attribute([rec("يكتب الدرس", "تكتب الدرس", "z")])
    p = T.pool([a, b])
    assert p.errors == a.errors + b.errors == 7
    assert p.counts["i"] == 6 and p.counts["j"] == 1
    assert p.worst_share(0.05) == pytest.approx(6 / 7)  # one utterance holds 6 of the 7 errors
    assert p.wer_without(("i",)) == pytest.approx(1 / p.n_ref)
    d = p.to_dict()
    assert d["categories"]["i"]["share"] == pytest.approx(6 / 7, abs=1e-4)
    assert set(d["categories"]) == set(T.CODES)


def test_utterance_labels_are_optional():
    t = T.attribute([rec("ما راح يجي", "مراح يجي")], keep_utterances=True)
    (u,) = t.utterances
    assert u["counts"] == {"b": 2.0} and u["ops"][0][0] == "b"
    assert T.attribute([rec("ما راح يجي", "مراح يجي")]).utterances is None


def test_cli_reads_saved_predictions(tmp_path):
    results = tmp_path / "results"
    ref, hyp = "لا يوجد بين اسبانيا والمانيا", "لا يوجد فرق بين اسبانيا والمانيا"
    for m in ("m1", "m2", "m3"):
        d = results / m / "predictions"
        d.mkdir(parents=True)
        own = "تكتب الدرس" if m == "m1" else "يكتب الدرس"  # only m1 makes this error: genuine, not consensus
        rows = [rec(ref, hyp, "s1"), rec("okay حلو", "اوكي حلو", "s2"), rec("يكتب الدرس", own, "s3")]
        (d / "sada__clean.jsonl").write_text("\n".join(json.dumps(r, ensure_ascii=False) for r in rows))
    out_json, out_md = tmp_path / "tax.json", tmp_path / "tax.md"
    res = T.main(["--suite", "arabic", "--results", str(results), "--out", str(out_json), str(out_md)])
    cell = res["cells"]["m1"]["sada__clean"]
    assert cell["errors"] == 3
    assert {c: v["errors"] for c, v in cell["categories"].items() if v["errors"]} == {"e": 1, "g": 1, "j": 1}
    assert json.loads(out_json.read_text())["pooled"]["m1"]["clean"]["errors"] == 3
    assert "consensus" in out_md.read_text()
