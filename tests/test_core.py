import numpy as np
import pytest

from sttarena.degrade import NoiseBank, degrade
from sttarena.degrade.chain import seed_for
from sttarena.metrics import corpus_error_rates
from sttarena.normalizers import get_normalizer

ar = get_normalizer("ar")


@pytest.mark.parametrize("raw, expected", [
    ("ذَهَبَ الوَلَدُ إلى المَدرَسةِ، وَ قالَ: «مرحباً»!", "ذهب الولد الي المدرسه وقال مرحبا"),
    ("مسؤول رئيس شيء ٢٠٢٤", "مسوول رييس شي الفين واربعه وعشرين"),
    ("[ضحك] كلمة <noise> فى", "كلمه في"),
    ("جمـــيل Hello, World", "جميل hello world"),
    ("أإآٱ", "اااا"),
    ("", ""),
])
def test_arabic_normalizer(raw, expected):
    assert ar(raw) == expected


def test_normalizer_is_idempotent():
    s = "وَ قالَ المسؤولُ: «أهلاً» ٣ مرات"
    assert ar(ar(s)) == ar(s)


def test_corpus_wer_weights_by_length():
    refs = ["a b c d", "e f"]
    hyps = ["a b c d", "x y"]  # 2 errors over 6 words; mean of per-utterance WER would be 0.5
    s = corpus_error_rates(refs, hyps)
    assert s.wer == pytest.approx(2 / 6)
    assert s.ref_words == 6


def test_empty_hypothesis_counts_as_deletions():
    s = corpus_error_rates(["a b c"], [""])
    assert s.wer == pytest.approx(1.0)
    assert s.num_empty_hyp == 1


def test_empty_references_are_dropped():
    s = corpus_error_rates(["", "a b"], ["x", "a b"])
    assert s.num_utterances == 1 and s.wer == 0


@pytest.fixture(scope="module")
def bank():
    rng = np.random.default_rng(0)
    b = NoiseBank(None)
    b.add_speech_pool([rng.standard_normal(32000).astype(np.float32) * 0.1 for _ in range(5)])
    return b


@pytest.mark.parametrize("cond, sr", [("noisy", 16000), ("telephony", 8000), ("callcenter", 8000)])
def test_degrade_is_deterministic(bank, cond, sr):
    t = np.arange(16000 * 3) / 16000
    x = (0.2 * np.sin(2 * np.pi * 220 * t) * np.sin(2 * np.pi * 3 * t)).astype(np.float32)
    seed = seed_for("ar", "set/1", cond)
    y1, sr1, p1 = degrade(x, 16000, cond, seed, bank)
    y2, sr2, p2 = degrade(x, 16000, cond, seed, bank)
    assert sr1 == sr2 == sr
    assert p1 == p2
    np.testing.assert_array_equal(y1, y2)
    assert len(y1) == len(x) * sr // 16000
    assert np.isfinite(y1).all() and np.abs(y1).max() <= 1.0


@pytest.mark.parametrize("raw, expected", [
    ("25 سنة", "خمسه وعشرين سنه"),
    ("خمسة وعشرون سنة", "خمسه وعشرين سنه"),
    ("عام 1963", "عام الف وتسعميه وثلاثه وستين"),
    ("ألف وتسعمائة وثلاثة وستون", "الف وتسعميه وثلاثه وستين"),
    ("ثلاث مئة", "ثلاثميه"),
    ("مائتان", "ميتين"),
    ("1,500,000", "مليون وخمسميه الف"),
    ("3000", "ثلاثه الاف"),
    ("12", "اثني عشر"),
    ("0501", "صفر خمسه صفر واحد"),
])
def test_arabic_numbers_are_verbalized(raw, expected):
    assert ar(raw) == expected


def test_bootstrap_utterance_errors_sum_to_corpus_wer(tmp_path):
    import json

    from sttarena.bootstrap import _utterance_errors

    rows = [("a", "x y z", "x y"), ("b", "p q", "p q r s"), ("c", "u v w", ""), ("d", "", "noise")]
    f = tmp_path / "s.jsonl"
    f.write_text("\n".join(json.dumps({"id": i, "ref_norm": r, "hyp_norm": h}) for i, r, h in rows))
    errs = _utterance_errors(f)
    assert set(errs) == {"a", "b", "c"}  # empty reference dropped, as in corpus_error_rates
    s = corpus_error_rates([r for _, r, _ in rows], [h for _, _, h in rows])
    assert sum(e for e, _ in errs.values()) / sum(n for _, n in errs.values()) == pytest.approx(s.wer)


def test_registry_in_domain_uses_set_keys():
    from sttarena.data import Suite
    from sttarena.models.registry import MODELS

    keys = {k for suite in ("arabic", "english") for k in Suite.load(suite).sets}
    bad = {m.key: [d for d in m.in_domain if d not in keys] for m in MODELS.values()}
    assert not {k: v for k, v in bad.items() if v}, "in_domain must list suite set keys"
