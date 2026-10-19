import json

import numpy as np
import pytest

from sttarena.audit import (FLOOR_PROFILES, Flag, MinHasher, audit_references, audit_sample, build_errata,
                            exposure, floor_table, fold_stats, human_floor, id_overlap, id_segment,
                            idempotence_failures, reference_error_rate, residual_screen, text_overlap,
                            unintended_merges, write_errata)
from sttarena.audit._common import ProfileView
from sttarena.audit.cli import main_audit
from sttarena.audit.variants import _trace
from sttarena.normalizers.variants import RULES, VariantFolder
from sttarena.scoring import Scorer
from sttarena.stats import wilson

approx = pytest.approx


# --- floor -------------------------------------------------------------------------------------------
# three annotators, two utterances; Latin letters are words every profile leaves alone
THREE = [["a b c d", "a b x d", "a b c d e"], ["f g", "f g", "f"]]


def test_floor_pairwise_by_hand():
    p = human_floor(THREE, ("L1",))["profiles"]["L1"]["pairwise"]
    # e.g. 2>3: "a b x d" -> "a b c d e" is S + I, "f g" -> "f" is D: 3 errors over 4 + 2 words
    assert {k: v["wer"] for k, v in p["pairs"].items()} == approx(
        {"1>2": 1 / 6, "1>3": 2 / 6, "2>1": 1 / 6, "2>3": 3 / 6, "3>1": 2 / 6, "3>2": 3 / 6})
    assert (p["wer"], p["wer_min"], p["wer_max"]) == approx((1 / 3, 1 / 6, 1 / 2))
    assert p["pairs"]["1>2"]["cer_ns"] == approx(1 / 6)  # "abcd" vs "abxd" + "fg" vs "fg": 1 of 6 characters
    assert p["pairs"]["3>1"]["n_words"] == 6


def test_floor_one_vs_rest_by_hand():
    o = human_floor(THREE, ("L1",))["profiles"]["L1"]["one_vs_rest"]
    # annotator 1 against {2, 3}: every word is in its slot of the confusion network (x|c, e optional) -> 0;
    # annotator 3 inserts "e" (utterance 1) and drops "g" (utterance 2) against {1, 2}: 2 errors over 4 + 2
    assert {k: v["mr_wer"] for k, v in o["annotators"].items()} == approx({"1": 0, "2": 1 / 6, "3": 1 / 3})
    # AV-WER: mean of single-reference WERs, e.g. annotator 1 = mean(2>1, 3>1) = mean(1/6, 2/6)
    av = {k: v["av_wer"] for k, v in o["annotators"].items()}
    assert av == approx({"1": 1 / 4, "2": 1 / 3, "3": 5 / 12})
    assert (o["mr_wer"], o["av_wer"]) == approx((1 / 6, 1 / 3))


def test_floor_space_insensitive_and_inputs():
    fl = human_floor([{"x": "ما فيش حاجه", "y": "مافيش حاجه"}, {"x": "زي ما انت", "y": None}], ("L1", "L2sp"))
    assert fl["n_utterances"] == 1  # the second utterance has only one transcription
    pairs = {p: {k: v["wer"] for k, v in fl["profiles"][p]["pairwise"]["pairs"].items()}
             for p in ("L1", "L2sp")}
    assert pairs["L1"] == approx({"x>y": 2 / 3, "y>x": 1.0})
    assert pairs["L2sp"] == approx({"x>y": 0.0, "y>x": 0.0})  # ما+فيش = مافيش (-> مفيش) is one word
    table = floor_table(human_floor(THREE, ("L1",)))
    assert "| L1 | 33.33 [16.67–50.00] | 33.33 | 16.67 | 33.33 |" in table
    with pytest.raises(TypeError):
        human_floor(["a b c"])


@pytest.mark.parametrize("profile", FLOOR_PROFILES)
def test_profile_view_matches_scorer(profile):
    pairs = [("حيبقى كانوا هنا يا ريت", "هيبقي كانو هنا ياريت"), ("@@@موسيقى ال# قال لي", "قالي"),
             ("خمستاشر سنه ٢٥", "خمسطاشر سنة خمسة وعشرين"), ("اه امم الولد", "")]
    view, scorer = ProfileView(profile), Scorer(profiles=(profile,), headline=profile)
    for ref, hyp in pairs:
        rec = scorer.score_utterance(ref, hyp)["scores"][profile]
        if not rec["n"]:
            assert not view.prepare(ref).words
            continue
        r, h = view.prepare(ref), view.prepare(hyp)
        assert view.errors(r, h) == rec["S"] + rec["D"] + rec["I"]
        assert view.char_errors(r, h) == (rec["ce"], rec["nc"])


# --- variant-table collisions ----------------------------------------------------------------------------
VOCAB = {"برضو": 9, "برضه": 30, "حيبقي": 7, "هيبقي": 8, "كانوا": 50, "كانو": 6, "حيكون": 2, "هيكون": 40}


def test_fold_stats():
    # future_h: حيبقي -> هيبقي and حيكون -> هيكون (two groups of two types)
    assert fold_stats(VOCAB, RULES["future_h"].apply) == {
        "types_changed": 2, "tokens_changed": 9, "merge_groups": 2, "tokens_in_merges": 57}


def test_collision_audit_flags_only_unintended_merges():
    merges = unintended_merges(VOCAB, allow_rules=["alef_fariqa"])
    # برضو/برضه is a table entry, كانوا/كانو an allowed rule, حيكون too rare: only the future_h pair is left
    assert [m["types"] for m in merges] == [["هيبقي", "حيبقي"]]
    assert merges[0]["unintended"] == ["future_h"] and merges[0]["canonical"] == "هيبقي"
    assert [m["types"] for m in unintended_merges(VOCAB)] == [["هيبقي", "حيبقي"], ["كانوا", "كانو"]]
    assert unintended_merges(VOCAB, allow_rules=["alef_fariqa"], allow_pairs=[("حيبقي", "هيبقي")]) == []
    assert unintended_merges(VOCAB, min_count=10) == []
    with pytest.raises(ValueError):
        unintended_merges(VOCAB, allow_rules=["no_such_rule"])


def test_trace_follows_the_folder():
    folder = VariantFolder()
    for w in [*VOCAB, "وبرضو", "فحيبقي", "حداشر", "بارده", "معاكم", "مافيش", "قولت"]:
        assert _trace(folder, w)[0] == folder(w)


def test_idempotence():
    assert idempotence_failures(VOCAB) == []
    assert idempotence_failures({"ab": 3}, normalizer=lambda s: s + "x") == [
        {"type": "ab", "count": 3, "once": "abx", "twice": "abxx"}]


# --- reference audit -----------------------------------------------------------------------------------
WORDS = "كتاب قلم بيت شمس قمر نهر بحر جبل شجره زهره باب نافذه سياره طريق مدينه".split()
ITEMS = [{"id": f"n{k}", "ref": " ".join(WORDS[k:k + 5]), "duration": 2.0} for k in range(10)] + [
    {"id": "empty", "ref": "...", "duration": 2.0},
    {"id": "tag", "ref": "@@@موسيقى", "duration": 2.0},
    {"id": "filler", "ref": "اه امم", "duration": 1.0},
    {"id": "markup", "ref": "كان ال# الولد غير_واضح هنا", "duration": 1.2},
    {"id": "fast", "ref": " ".join(WORDS[:14]), "duration": 1.0},
    {"id": "slow", "ref": "كلمه واحده", "duration": 20.0},
    {"id": "dup1", "ref": "ذهب الولد الي المدرسه"},
    {"id": "dup2", "ref": "ذهب الولد إلى المدرسة"},
    {"id": "seg1", "ref": "الجزء الاول من الكلام", "meta": {"recording": "r1", "start": 0.0, "end": 4.0}},
    {"id": "seg2", "ref": "الكلام نفسه مره ثانيه", "meta": {"recording": "r1", "start": 1.0, "end": 4.5}},
    {"id": "seg3", "ref": "كلام اخر بعد ذلك", "meta": {"recording": "r1", "start": 10.0, "end": 12.0}},
    {"id": "quran", "ref": "قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ"},
    {"id": "marks", "ref": "ذلك الكتاب لا ريب ۛ فيه"},
    {"id": "wrong", "ref": "الجو جميل اليوم في المدينه"},
]
EXPECTED = {"empty": {"empty_ref"}, "tag": {"tag_only", "markup_leak"}, "filler": {"filler_only"},
            "markup": {"markup_leak"}, "fast": {"rate_high"}, "slow": {"rate_low"}, "dup1": {"duplicate_ref"},
            "dup2": {"duplicate_ref"}, "seg1": {"overlap"}, "seg2": {"overlap"}, "quran": {"quranic"},
            "marks": {"quranic"}, "wrong": {"consensus_disagreement"}}


def _hyps(**wrong: str) -> dict:
    hyps = {m: {it["id"]: it["ref"] for it in ITEMS} for m in ("m1", "m2", "m3", "indom", *wrong)}
    for m, h in wrong.items():
        hyps[m]["wrong"] = h
    return hyps


HYPS = _hyps(m1="ذهبت الي السوق امس مع اخي", m2="ذهبت الي السوق امس مع اخي", m3="ذهبت إلى السوق أمس مع أخي")


def test_every_reference_flag():
    audit = audit_references(ITEMS, HYPS, exclude=["indom"])
    got: dict = {}
    for f in audit.flags:
        got.setdefault(f.id, set()).add(f.reason)
    assert got == EXPECTED
    ev = {(f.id, f.reason): f.evidence for f in audit.flags}
    assert ev["markup", "markup_leak"]["patterns"] == {"unclear": ["غير_واضح"], "partial_hash": ["ال#"]}
    assert ev["tag", "tag_only"]["l1"] == "موسيقي"  # what v1 would score as a one-word reference
    assert ev["seg1", "overlap"]["covered"] == approx(0.75) and ev["seg1", "overlap"]["with"] == ["seg2"]
    assert ev["marks", "quranic"]["marks"] == ["\u06db"]
    assert ev["quran", "quranic"]["phrases"] == ["قل هو الله أحد"]
    c = ev["wrong", "consensus_disagreement"]
    assert c["models"] == ["m1", "m2", "m3"] and c["suggestion"] == "ذهبت الي السوق امس مع اخي"
    assert c["support"] == [] and c["max_pair_wer"] == 0
    assert audit.summary()["reasons"]["overlap"] == {"items": 2, "share": round(2 / len(ITEMS), 4)}
    assert audit.ids("duplicate_ref") == ["dup1", "dup2"]


def test_consensus_needs_enough_independent_models():
    # with m3 excluded only two models disagree with the reference: below min_agree = 3
    assert audit_references(ITEMS, HYPS, exclude=["indom", "m3"]).ids("consensus_disagreement") == []
    # an in-domain model left in the panel reproduces the reference: it shows up as support
    flag = next(f for f in audit_references(ITEMS, HYPS).flags if f.reason == "consensus_disagreement")
    assert flag.evidence["support"] == ["indom"]
    # models far from the reference that disagree with each other: hard audio, not a reference error
    split = _hyps(m1="ذهبت الي السوق امس", m2="كان الطقس باردا جدا هناك", m3="لا اعرف ماذا حدث بعد ذلك")
    assert audit_references(ITEMS, split, exclude=["indom"]).ids("consensus_disagreement") == []


def test_id_segment_and_quran_text():
    seg = id_segment("id", r"^(?P<rec>.*)_annotator_(?P<ann>\d+)_(?P<start>[0-9.]+)_(?P<end>[0-9.]+)$")
    items = [{"id": "s/1", "ref": "نص اول", "meta": {"id": "show_annotator_2_0.0_3.0"}},
             {"id": "s/2", "ref": "نص ثان", "meta": {"id": "show_annotator_5_0.5_3.2"}}]
    assert audit_references(items, segment=seg).ids("overlap") == ["s/1", "s/2"]
    verse = "والذين يؤمنون بما أنزل إليك وما أنزل من قبلك وبالآخرة هم يوقنون"
    ref = [{"id": "q", "ref": verse}]
    assert audit_references(ref).ids("quranic") == []  # no marks, no listed opening
    assert audit_references(ref, quran=["الم", verse]).ids("quranic") == ["q"]


def test_blind_random_sample_and_error_rate():
    items = [{"id": f"u{k}", "c": k // 10} for k in range(100)]
    work = audit_sample(items, 20, flagged=["u3", "u55"], seed=1, cluster=lambda it: it["c"])
    assert work == audit_sample(items, 20, flagged=["u3", "u55"], seed=1, cluster=lambda it: it["c"])
    rand = [t["id"] for t in work if t["random"]]
    assert len(rand) == 20 and len(work) in (20, 21, 22)
    clusters = sorted(int(i[1:]) // 10 for i in rand)
    assert clusters == sorted(list(range(10)) * 2)  # proportional: two items from each cluster of ten
    assert {t["id"] for t in work if t["flagged"]} == {"u3", "u55"}
    # five errors in the random part; the flagged-only items do not count
    judged = {"u3": True, "u55": True} | {i: k < 5 for k, i in enumerate(rand)}
    rer = reference_error_rate(work, judged)
    assert (rer["n"], rer["errors"], rer["rer_utt"], rer["pending"]) == (20, 5, 0.25, 0)
    assert rer["ci95"] == wilson(5, 20)
    with pytest.raises(ValueError):
        audit_sample(items, 5, flagged=["nope"])


def test_errata_in_the_fixes_format(tmp_path):
    items = [{"id": "c1", "meta": {"segment_id": "S1"}}, {"id": "c2", "meta": {"segment_id": "S2"}},
             {"id": "c3", "meta": {"segment_id": "S3"}}]
    cand = [Flag("c1", "consensus_disagreement", {"suggestion": "ذهبت الي  السوق"})]
    err = build_errata({"c1": True, "c2": "نص مصحح", "c3": False}, items, key="segment_id", source="audit",
                       reason="consensus, adjudicated", candidates=cand)
    assert err == {"key": "segment_id", "source": "audit", "reason": "consensus, adjudicated",
                   "texts": {"S1": "ذهبت الي السوق", "S2": "نص مصحح"}}
    path = tmp_path / "fixes.json"
    path.write_text(json.dumps({"key": "segment_id", "source": "official", "reason": "garbled",
                                "texts": {"S0": "old fix", "S2": "older"}}), encoding="utf-8")
    written = write_errata(path, err)
    assert json.loads(path.read_text(encoding="utf-8")) == written
    assert written["texts"] == {"S0": "old fix", "S2": "نص مصحح", "S1": "ذهبت الي السوق"}
    assert written["source"] == "official; audit"
    with pytest.raises(ValueError):
        write_errata(path, {**err, "key": "id"})
    with pytest.raises(ValueError):
        build_errata({"c2": True}, items, key="segment_id", source="", reason="", candidates=cand)


# --- contamination -------------------------------------------------------------------------------------
T1 = "كان الطقس في المدينة جميلا جدا صباح يوم الجمعة الماضي"
T2 = "ذهب الطلاب الى المكتبة الكبيرة لقراءة الكتب القديمة مساء امس"
T4 = "اهلا وسهلا بكم في البرنامج"


def test_text_overlap_ngrams_exact_and_minhash():
    test = {"t1": T1, "t2": T2, "t3": "نعم شكرا", "t4": T4}
    train = ["في البداية " + T1 + " ثم عاد", T2.replace("الكبيرة", "الكثيرة"), T4, "نص اخر لا علاقة له"]
    rep = text_overlap(test, iter(train))  # a generator: the corpus is read once
    assert rep["t1"]["coverage"] == 1.0 and "ngram" in rep["t1"]["flags"]
    # one changed word in the middle kills every 8-gram, but the character shingles still match
    assert rep["t2"]["coverage"] == 0.0 and rep["t2"]["jaccard"] >= 0.7 and rep["t2"]["match_index"] == 1
    assert rep["t2"]["flags"] == ["near_dup"]
    assert rep["t3"] == {"words": 2, "ngrams": 0, "coverage": None, "exact": False, "jaccard": None,
                         "match_index": None, "match": None, "flags": []}
    assert rep["t4"]["exact"] and rep["t4"]["coverage"] is None


def test_minhash_estimates_jaccard():
    h = MinHasher(seed=3)
    a, b = T1, T1.replace("جميلا", "حارا")
    sh = [{s[i:i + 5] for i in range(len(s) - 4)} for s in (a, b)]
    true = len(sh[0] & sh[1]) / len(sh[0] | sh[1])
    assert abs(h.jaccard(h.signature(a), h.signature(b)) - true) < 0.12
    assert h.jaccard(h.signature(a), h.signature(a)) == 1.0
    assert h.signature("") is None


def test_id_overlap():
    items = [{"id": "Egypt/1", "ref": "مش سامع حاجه", "meta": {"seg_id": "2_3", "country": "Egypt"}},
             {"id": "Egypt/2", "ref": "وريني ايدك", "meta": {"seg_id": "5_4", "country": "Egypt"}},
             {"id": "Jordan/1", "ref": "شو بدك", "meta": {"seg_id": "2_3", "country": "Jordan"}}]
    train = {"Egypt/2_3": "مش سامع حاجة", "Egypt/5_4": "شيء اخر"}
    out = id_overlap(items, train, key=lambda it: f"{it['meta']['country']}/{it['meta']['seg_id']}")
    assert (out["n"], out["matched"], out["same_text"], out["ids"]) == (3, 2, 1, ["Egypt/1", "Egypt/2"])
    assert id_overlap(items, ["5_4"], key="seg_id")["ids"] == ["Egypt/2"]


def test_residual_screen_finds_a_planted_anomaly():
    rng = np.random.default_rng(7)
    models = [f"m{k:02d}" for k in range(14)]
    sets = ["ref_a/clean", "ref_b/clean", "s1/clean", "s2/clean", "s3/clean", "s4/clean"]
    ability, difficulty = np.linspace(-2.5, -0.5, len(models)), rng.normal(0, 0.4, len(sets))
    wer = {m: {s: float(np.exp(a + d + rng.normal(0, 0.05))) for s, d in zip(sets, difficulty)}
           for m, a in zip(models, ability)}
    wer["m05"]["s3/clean"] *= 0.4  # trained on s3, claims to be clean
    clean = {m: {s.split("/")[0] for s in sets} for m in models}
    cells = residual_screen(wer, clean, reference_sets=["ref_a/clean", "ref_b/clean"])
    assert len(cells) == len(models) * 4 and all(c["n_fit"] == len(models) - 1 for c in cells)
    top = cells[0]
    assert (top["model"], top["set"], top["flag"], top["claimed_clean"]) == ("m05", "s3/clean", True, True)
    assert top["z"] < -10 and cells[1]["z"] > -4
    assert top["predicted"] == approx(wer["m05"]["s3/clean"] / 0.4, rel=0.15)


def test_exposure():
    weights = {"a/clean": 0.3, "a/noisy": 0.15, "b/clean": 0.15}
    out = exposure({"ft": ["a"], "zs": []}, weights)
    assert out["ft"] == {"exposure": 0.75, "zero_shot_share": 0.25, "in_domain_sets": ["a/clean", "a/noisy"]}
    assert out["zs"]["exposure"] == 0


# --- command line ----------------------------------------------------------------------------------------
def test_cli_on_files(tmp_path, capsys):
    refs = tmp_path / "refs.jsonl"
    rows = [("ما فيش حاجه", "مافيش حاجه"), ("قلت له", "قولت له")]
    refs.write_text("".join(json.dumps({"id": f"u{k}", "a": a, "b": b}, ensure_ascii=False) + "\n"
                            for k, (a, b) in enumerate(rows)), encoding="utf-8")
    main_audit(["floor", "--ref", str(refs), "--ref-field", "a,b", "--profiles", "L1", "L2sp"])
    assert "| L2sp | 0.00 [0.00–0.00] |" in capsys.readouterr().out
    out = tmp_path / "variants.json"
    main_audit(["variants", "--ref", str(refs), "--ref-field", "a,b", "--min-count", "1", "--json", str(out)])
    assert {tuple(m["types"]) for m in json.loads(out.read_text())["unintended"]} == {("قلت", "قولت")}
    with pytest.raises(SystemExit):
        main_audit(["variants", "--ref", str(refs), "--ref-field", "a,b", "--min-count", "1", "--check"])
    hyp = tmp_path / "hyp.jsonl"
    hyp.write_text(json.dumps({"id": "u0", "text": "مفيش حاجه"}, ensure_ascii=False) + "\n", encoding="utf-8")
    main_audit(["refs", "--ref", str(refs), "--ref-field", "a", "--hyp", f"m1={hyp}"])
    assert "2 items" in capsys.readouterr().out
    train = tmp_path / "train.txt"
    train.write_text("ما فيش حاجه\n", encoding="utf-8")
    main_audit(["contamination", "--ref", str(refs), "--ref-field", "a", "--train", str(train),
                "--train-format", "txt"])
    assert "2 test references against 1 train texts" in capsys.readouterr().out
