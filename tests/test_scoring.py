"""Normalizer v2 levels, the aligner and the scoring engine.

The normalization cases come from the human-floor study on MGB-3 (four transcribers of the same
audio): each case is a spelling difference two humans actually produced, or a pair that must stay
distinct. Changing one of these is a methodology change, not a refactor.
"""

import pytest

from sttarena.align import Tokens, align_multi, align_plain, align_tokens, sa_counts
from sttarena.metrics import corpus_error_rates
from sttarena.normalizers import ArabicNormalizer, get_normalizer
from sttarena.normalizers.variants import load_table
from sttarena.scoring import Scorer, aggregate, max_ngram_repeat

L1, L1M, L2, L3 = (ArabicNormalizer(lvl) for lvl in ("L1", "L1m", "L2", "L3"))

LEVEL_CASES = [
    # L1: v1 arena behaviour, kept
    (L1, "ذَهَبَ الوَلَدُ إلى المَدرَسةِ", "ذهب الولد الي المدرسه"),
    (L1, "أإآٱ", "اااا"),
    (L1, "مسؤول رئيس شيء", "مسوول رييس شي"),
    (L1, "جمـــيل", "جميل"),
    (L1, "ﻻ", "لا"),
    (L1, "«مرحباً»! كيف حالك؟", "مرحبا كيف حالك"),
    (L1, "و قال", "وقال"),
    (L1, "Hello, World", "hello world"),
    (L1, "25 سنة", "خمسه وعشرين سنه"),
    (L1, "خمسة وعشرون سنة", "خمسه وعشرين سنه"),
    (L1, "1,500,000", "مليون وخمسميه الف"),
    (L1, "0501", "صفر خمسه صفر واحد"),
    (L1, "٢٠٢٤", "الفين واربعه وعشرين"),
    # L1: safe fixes
    (L1, "شيئ", "شي"),
    (L1, "ڨال ڢي", "قال في"),
    (L1, "کتاب فی", "كتاب في"),
    (L1, "يعنيtransfert", "يعني transfert"),
    (L1, "café très", "cafe tres"),
    (L1, "06:30", "سته وثلاثين"),
    (L1, "6.5 درجة", "سته فاصل خمسه درجه"),
    (L1, "50%", "خمسين في الميه"),
    (L1, "24½ بوصة", "اربعه وعشرين ونص بوصه"),
    (L1, "١٢٫٥", "اثني عشر فاصل خمسه"),
    (L1, "3aref mp3", "3aref mp3"),  # digits inside Latin words are not numbers
    (L1, "‏كلمة​‎أخرى", "كلمه اخري"),  # bidi marks dropped, zero-width space splits
    # L1m: corpus markup
    (L1M, "@@@موسيقى", ""),
    (L1M, "###غير_واضح ** كلشي من عندك...", "كلشي من عندك"),
    (L1M, "نخاف على صحته يعجبه غيرواضح", "نخاف علي صحته يعجبه"),
    (L1M, "الأمر غير واضح", "الامر غير واضح"),  # with a space it is ordinary Arabic
    (L1M, "لو حد بص على ال# الترجمة", "لو حد بص علي الترجمه"),
    (L1M, "أأ# الأفكار آ# مفيش", "الافكار مفيش"),
    (L1M, "[music] كلام (music)", "كلام"),
    (L1M, "هههه والله هاهاها", "والله"),
    (L1M, "الـ (uncertainty)", "الuncertainty"),
    # L2: dialect-lenient
    (L2, "اممم يعني اااه", "يعني"),
    (L2, "يااااا سلااااام", "يا سلام"),
    (L2, "حيبقى", "هيبقي"),
    (L2, "حاعمل", "هعمل"),
    (L2, "مافيش", "مفيش"),
    (L2, "كانوا", "كانو"),
    (L2, "عليكم", "عليكو"),
    (L2, "باحب", "بحب"),
    (L2, "باقي", "باقي"),  # exception list: not a 1sg verb
    (L2, "قولتلك", "قلتلك"),
    (L2, "برضو", "برضه"),
    (L2, "علشان", "عشان"),
    (L2, "دا كدا", "ده كده"),
    (L2, "ف الدنيا", "في الدنيا"),
    (L2, "ع المعتقد", "علي المعتقد"),
    (L2, "الي", "اللي"),
    (L2, "تلاتين", "ثلاثين"),
    (L2, "حداشر", "احد عشر"),
    (L2, "تمنتاشر", "ثمانيه عشر"),
    (L2, "اتنين", "اثنين"),
    (L2, "Okay", "اوكي"),
    (L2, "إن شاء الله", "انشالله"),
    (L2, "50 بالمية", "خمسين في الميه"),
    # L2: distinct words that must not be folded
    (L2, "ده دي", "ده دي"),
    (L2, "هو هي", "هو هي"),
    (L2, "فهم", "فهم"),
    (L2, "ممكن لكن", "ممكن لكن"),
    (L2, "عالم حكم", "عالم حكم"),
    (L2, "ايش شو ايه", "ايش شو ايه"),  # different dialect words for "what"
    # L3: consonant skeleton (diagnostic only)
    (L3, "ثلاثة", "تلت"),
    (L3, "تلاته", "تلت"),
    (L3, "قوي اوي", "ا ا"),
    (L3, "برضه برضو", "برض برض"),
]


@pytest.mark.parametrize("norm, raw, expected", LEVEL_CASES, ids=[f"{n.level}:{r}" for n, r, _ in LEVEL_CASES])
def test_levels(norm, raw, expected):
    assert norm(raw) == expected


@pytest.mark.parametrize("norm", [L1, L1M, L2])
def test_levels_are_idempotent(norm):
    for _, raw, _ in LEVEL_CASES:
        once = norm(raw)
        assert norm(once) == once, raw


def test_v1_normalizer_is_unchanged():
    v1 = get_normalizer("ar")
    assert v1("06:30") == "صفر سته ثلاثين"  # the v1 bug stays in v1, for reproducible v1 scores
    assert v1("@@@موسيقى") == "موسيقي"


def test_variant_table_loads_without_duplicates():
    rows = load_table()
    assert len(rows) > 50
    assert all(r.variant != r.canonical for r in rows)


def _sp_errors(ref: str, hyp: str, norm=L2) -> int:
    return align_tokens(Tokens.from_normalizer(norm, ref), Tokens.from_normalizer(norm, hyp),
                        lambda s: norm.canon(s).replace(" ", "")).errors


@pytest.mark.parametrize("ref, hyp, errors", [
    ("ما فيش", "مفيش", 0),
    ("ما لوش", "مالوش", 0),
    ("يا ريت", "ياريت", 0),
    ("ف انا", "فانا", 0),  # concatenate surface tokens, then fold: not "فيانا"
    ("حصل لهم", "حصلهم", 0),  # de-gemination at the junction
    ("ان شاء الله", "انشالله", 0),
    ("قال لي", "قالي", 0),
    ("بالنسبة لي", "بالنسبالي", 0),  # ه + ل -> ال at the junction
    ("حداشر", "احدعشر", 0),  # one surface token that expands to two words
    ("ده", "دي", 1),  # a real error
    ("وانت عارف يا معلم كويس", "وانت عارف يامعلم كويس", 0),
])
def test_space_insensitive_alignment(ref, hyp, errors):
    assert _sp_errors(ref, hyp) == errors


def test_merges_count_reference_words_as_correct():
    a = align_tokens(Tokens.from_normalizer(L2, "يا ريت"), Tokens.from_normalizer(L2, "ياريت"),
                     lambda s: L2.canon(s).replace(" ", ""))
    c = a.counts()
    assert (c["C"], c["M"], a.n_ref, a.errors) == (2, 1, 2.0, 0)


def test_plain_alignment_matches_rapidfuzz_distance():
    a = align_plain("a b c d".split(), "a x c d e".split())
    assert a.errors == 2 and a.counts()["S"] == 1 and a.counts()["I"] == 1


def test_multi_reference_forgives_spelling_but_not_paraphrase():
    refs = ["سلامات عليكم حكلمكو النهارده عن ال (uncertainty)",
            "سلامات عليكوا اكلمكوا النهارده عن ( uncertainty )",
            "سلامات عليكم هكلمكو النهارده عن الـ uncertaintity",
            "سلامات عليكم، حأكلمكو النهارده عن الـ (uncertaintity)"]
    words = [L1.words(r) for r in refs]
    valid = L1.words("سلامات عليكم هكلمكو النهارده عن ال uncertainty")
    paraphrase = L1.words("السلام عليكم هكلمكم النهارده عن عدم اليقين")
    assert align_plain(words[0], valid).errors == 1
    assert align_multi(words, valid).errors == 0
    assert align_multi(words, paraphrase).errors >= 3
    assert align_multi(words, valid).n_ref == sum(map(len, words)) / 4


def test_segmentation_agnostic_counts():
    assert sa_counts("يا معلم".split(), ["يامعلم"]) == (0, 0)
    assert sa_counts("a b".split(), "a b c".split()) == (0, 1)


def test_scorer_v1_profile_reproduces_v1_corpus_wer():
    refs = ["ذهب الولد إلى المدرسة", "قال: «مرحباً» ٣ مرات", "@@@موسيقى", "كلمة"]
    hyps = ["ذهب ولد الى المدرسه", "قال مرحبا 3 مرات", "", "كلمات كلمات"]
    v1 = get_normalizer("ar")
    expected = corpus_error_rates([v1(r) for r in refs], [v1(h) for h in hyps])
    s = Scorer("ar", profiles=("v1",)).score([{"ref": r, "hyp": h} for r, h in zip(refs, hyps)])
    assert aggregate(s.utterances, "v1")["wer_uncapped"] == pytest.approx(expected.wer)


def test_scorer_caps_loops_and_routes_empty_references():
    items = [{"ref": "شكرا جزيلا", "hyp": " ".join(["شكرا جزيلا"] * 4)},
             {"ref": "@@@فراغ", "hyp": "", "duration": 3.0},
             {"ref": "مرحبا بكم", "hyp": "مرحبا بكم"}]
    summary = Scorer("ar", profiles=("v1", "L2sp")).score(items).summary()
    head = summary["profiles"]["L2sp"]
    assert head["num_utterances"] == 2 and head["num_excluded"] == 1  # the tag-only reference left WER
    assert head["wer_uncapped"] == pytest.approx(6 / 4)
    assert head["wer"] == pytest.approx(2 / 4)  # the loop costs at most its reference length
    assert summary["hallucination"]["loop_rate"] == pytest.approx(0.5)
    assert summary["nonspeech"]["num_clips"] == 1 and summary["nonspeech"]["halluc_any"] == 0
    # v1 scored the tag as a reference word that a silent model "deleted"
    assert summary["profiles"]["v1"]["num_utterances"] == 3


def test_scorer_multi_reference_records_av_wer():
    items = [{"refs": ["حتلاقي الترجمة", "هتلاقي الترجمه"], "hyp": "هتلاقي الترجمه"}]
    agg = aggregate(Scorer("ar", profiles=("L1",)).score(items).utterances, "L1")
    assert agg["wer"] == 0 and agg["num_references"] == 2 and agg["av_wer"] == pytest.approx(0.25)


def test_max_ngram_repeat():
    assert max_ngram_repeat("a b a b a b c".split()) == 3
    assert max_ngram_repeat("a b c".split()) == 1
    assert max_ngram_repeat(["x"] * 5) == 5


def test_codeswitch_and_dialect_marker_diagnostics():
    items = [{"ref": "داخل ال deep inside", "hyp": "داخل الديب انسايد"},  # English written in Arabic script
             {"refs": ["داخل ال deep inside", "داخل ال ديب انسايد"], "hyp": "داخل الديب انسايد"},
             {"ref": "مش عايز اروح دلوقتي", "hyp": "لا اريد ان اذهب الان"},  # dialect "translated" to MSA
             {"ref": "مش عايز اروح دلوقتي", "hyp": "مش عايز اروح دلوقتي"}]
    h = Scorer("ar", profiles=("L2sp",)).score(items).summary()["hallucination"]
    assert h["latin_ref_words"] == 4 and h["wer_latin"] == pytest.approx(0.5)  # the transliteration ref forgives
    assert h["dialect_markers"] == 6 and h["marker_retention"] == pytest.approx(0.5)
    assert h["marker_msa_replacement"] == pytest.approx(2 / 6)


def test_multi_annotator_groups_keep_one_segmentation():
    from sttarena.data import multi_annotator_groups

    rx = r"^(?P<rec>.*)_annotator_(?P<ann>\d+)_(?P<start>[\d.]+)_(?P<end>[\d.]+)$"
    rows = [(0, "rec_annotator_1_0.0_2.0", "a b"), (1, "rec_annotator_1_2.0_4.0", "c d"),
            (2, "rec_annotator_1_4.0_6.0", "e"),  # annotator 1 has the most segments: pivot
            (3, "rec_annotator_2_0.1_3.9", "A B C D"),  # half inside each of the first two pivot segments
            (4, "rec_annotator_3_0.0_1.9", "a2"), (5, "rec_annotator_3_2.1_4.0", "c2")]
    groups = multi_annotator_groups(rows, rx)
    assert set(groups) == {0, 1, 2}  # annotators 2 and 3 are copies of the same audio
    assert groups[0] == ["a2"] and groups[1] == ["c2"] and groups[2] == []


def test_bag_of_hallucinations():
    from sttarena.hallucination import bag_share, mine_bag

    canned = "ترجمه نانسي قنقر"
    outputs = {"a": [canned] * 4 + ["اه"], "b": [canned, "شكرا"] * 2, "c": ["اه", "", "موسيقي"]}
    bag = mine_bag(outputs, min_models=2, min_clips=5)
    assert [p for p, _, _ in bag] == [canned]  # its sub-phrases are dropped, single words never enter
    assert bag_share(outputs["a"], [canned]) == pytest.approx(0.8)
    assert bag_share(outputs["c"], [canned]) == 0


def test_v1_profile_ignores_extra_references():
    items = [{"refs": ["حتلاقي الترجمة", "هتلاقي الترجمه"], "hyp": "هتلاقي الترجمه"}]
    s = Scorer("ar", profiles=("v1", "L1")).score(items).summary()["profiles"]
    assert s["v1"]["wer_uncapped"] == pytest.approx(0.5) and s["L1"]["wer"] == 0


def test_anchored_alignment_matches_full_dp_on_long_form(monkeypatch):
    import random

    from sttarena import align

    rng = random.Random(0)
    words = [w for _, raw, _ in LEVEL_CASES for w in raw.split()]
    ref = " ".join(rng.choice(words) for _ in range(700))
    hyp = " ".join(w for w in ref.split() if rng.random() > 0.05).replace("يا ريت", "ياريت")
    R, H = Tokens.from_normalizer(L2, ref), Tokens.from_normalizer(L2, hyp)
    def key(s):
        return L2.canon(s).replace(" ", "")

    fast = align_tokens(R, H, key)  # 700 x 665 words: anchored
    monkeypatch.setattr(align, "_DP_CELLS", 10**12)
    full = align_tokens(R, H, key)
    assert fast.errors == full.errors and fast.counts()["C"] == full.counts()["C"]


def test_variant_table_canonical_forms_are_fixed_points():
    from sttarena.normalizers.variants import VariantFolder

    fold = VariantFolder()
    unstable = {r.variant: r.canonical for r in load_table() if " " not in r.canonical and fold(r.canonical) != r.canonical}
    assert not unstable, "a canonical form must not be re-folded by the rules (idempotence)"
