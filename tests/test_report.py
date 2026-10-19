"""Report renderers (sttarena/report.py) and the score / compare commands (sttarena/score_cli.py).

Records keep only the non-correct alignment ops, so the first tests check that the full alignment
rebuilt from them is exact; the rest render real Scorer output and run the commands end to end."""

import json
import random
from html.parser import HTMLParser

import pytest

from sttarena.align import Tokens, align_plain, align_tokens
from sttarena.report import (aligned_text, alignment, compare_markdown, to_html, to_markdown, top_errors,
                             worst_utterances, write_utterances)
from sttarena.score_cli import main_compare, main_score
from sttarena.scoring import Scorer, SetScore

ITEMS = [
    {"id": "merge", "ref": "ما فيش حاجة اسمها كده", "hyp": "مفيش حاجه اسمها كدا"},
    {"id": "loop", "ref": "شكرا جزيلا لكم على الحضور", "hyp": "شكرا شكرا شكرا شكرا شكرا جزيلا"},
    {"id": "sub", "ref": "ذهب الولد الى المدرسة", "hyp": "ذهب الولد إلى الجامعة"},
    {"id": "multi", "refs": ["انا رايح السوق", "أنا رايح ع السوق"], "hyp": "انا رايح عالسوق"},
    {"id": "code", "ref": "عندي meeting مهم", "hyp": "عندي meting مهم"},
    {"id": "silence", "ref": "", "hyp": "ترجمة نانسي قنقر"},
    {"id": "failed", "ref": "كلمة واحدة", "hyp": "", "failed": True},
]


@pytest.fixture(scope="module")
def scored() -> SetScore:
    return Scorer().score(ITEMS)


def by_id(score: SetScore, uid: str) -> dict:
    return next(r for r in score.utterances if r["id"] == uid)


# --- alignment reconstruction ----------------------------------------------------------------------
def _record(R, H, ops):
    """A record as the scorer stores it: normalized texts and the non-correct ops only."""
    return {"ref_norm": " ".join(R), "hyp_norm": " ".join(H), "scores": {"X": {}},
            "ops": [(op, " ".join(r), " ".join(h)) for op, r, h in ops if op != "C"]}


def _check(R, H, full_ops):
    cols = alignment(_record(R, H, full_ops), "X")
    expected = [(op, tuple(r), tuple(h)) for op, r, h in full_ops if op != "C"]
    assert [c for c in cols if c[0] != "C"] == expected
    assert all(r == h for op, r, h in cols if op == "C")
    assert [w for _, r, _ in cols for w in r] == R and [w for _, _, h in cols for w in h] == H


def test_alignment_rebuilds_plain_alignments():
    rng = random.Random(0)
    for _ in range(400):
        R = [rng.choice("abc") for _ in range(rng.randint(0, 8))]
        H = [rng.choice("abc") for _ in range(rng.randint(0, 8))]
        _check(R, H, align_plain(R, H).ops)


def test_alignment_rebuilds_space_insensitive_alignments():
    rng = random.Random(1)
    merges = 0
    for _ in range(400):
        R = [rng.choice(["a", "b", "ab", "ba"]) for _ in range(rng.randint(1, 7))]
        H = [rng.choice(["a", "b", "ab", "ba"]) for _ in range(rng.randint(0, 7))]
        ops = align_tokens(Tokens.plain(R), Tokens.plain(H), merge=True).ops
        merges += sum(op == "M" for op, _, _ in ops)
        _check(R, H, ops)
    assert merges > 50


def test_alignment_of_scored_records(scored):
    assert alignment(by_id(scored, "merge"), "L2sp")[0] == ("M", ("ما", "فيش"), ("مفيش",))
    multi = alignment(by_id(scored, "multi"), "L2sp")  # reference side of a slot: its alternatives
    assert [c[0] for c in multi] == ["C", "C", "d", "S"] and multi[-1][2] == ("عالسوق",)
    assert alignment(by_id(scored, "silence"), "L2sp") == [("I", (), ("ترجمه",)), ("I", (), ("نانسي",)),
                                                           ("I", (), ("قنقر",))]


def test_aligned_text_is_sctk_style(scored):
    sub = aligned_text(by_id(scored, "sub"), "L2sp").split("\n")
    assert [line[:5] for line in sub] == ["REF: ", "HYP: ", "EVAL:"]
    assert "«المدرسه»" in sub[0] and "«الجامعه»" in sub[1] and sub[2].rstrip(chr(0x2069)).endswith("S")
    assert sub[0][6] == chr(0x2067) and sub[0].endswith(chr(0x2069))  # Arabic columns in an RTL isolate
    assert len(sub[0]) == len(sub[1]) == len(sub[2])  # padded to the same width
    assert "ما=فيش" in aligned_text(by_id(scored, "merge"), "L2sp")
    loop = aligned_text(by_id(scored, "loop"), "L2sp").split("\n")  # the scorer's alignment: 1 I + 4 S
    assert loop[0].count("***") == 1 and loop[2].count("I") == 1 and loop[2].count("S") == 4
    english = Scorer("en", profiles=["L1"], headline="L1").score([{"ref": "the cat sat",
                                                                    "hyp": "the bat sat"}])
    lines = aligned_text(english.utterances[0], "L1").split("\n")
    assert lines == ["REF:  the CAT sat", "HYP:  the BAT sat", "EVAL:     S"]
    wrapped = aligned_text(by_id(scored, "loop"), "L2sp", width=20)
    assert wrapped.count("REF:") > 1


def test_worst_utterances_and_top_errors(scored):
    worst = [r["id"] for r in worst_utterances(scored, 3)]
    assert worst[0] == "loop" and "silence" not in worst
    errs = top_errors(scored)
    assert (1, "المدرسه", "الجامعه") in errs["substitutions"]
    assert errs["merges"] == [(1, "ما فيش", "مفيش")]
    assert errs["insertions"] == [(1, "", "شكرا")]
    assert errs["deletions"] == [(1, "كلمه", ""), (1, "واحده", "")]  # the failed utterance


# --- renderers --------------------------------------------------------------------------------------
META = {"system": "نظام-تجريبي", "inputs": [{"role": "ref", "source": "refs.jsonl", "format": "jsonl"}],
        "ids": {"missing": ["x1"]}}


def test_markdown_report(scored):
    md = to_markdown(scored, META)
    assert md.startswith("# STT report: نظام-تجريبي")
    for text in ("## Scores", "**L2sp — dialect-lenient + space-insensitive (headline)**", "L1 — strict",
                 "v1 — previous arena scorer", "## Diagnostics", "Code-switching and dialect markers",
                 "Clips without speech", "had no hypothesis", "## Worst", "```text", "«الجامعه»",
                 "Space-insensitive matches", "ترجمه نانسي قنقر", "## How to read this", "Headline = L2sp"):
        assert text in md, text
    assert "http" not in md


class _Tags(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack, self.ok = [], True

    def handle_starttag(self, tag, attrs):
        if tag not in ("meta", "br"):
            self.stack.append(tag)

    def handle_endtag(self, tag):
        self.ok &= bool(self.stack) and self.stack.pop() == tag


def test_html_report_is_self_contained(scored):
    page = to_html(scored, META)
    assert page.startswith("<!doctype html>") and "<title>STT report: نظام-تجريبي</title>" in page
    for text in ('dir="auto"', 'dir="rtl"', "prefers-color-scheme:dark", "<script>", "table.sort",
                 'class="S"', "الجامعه", "raw text", "REF: أنا رايح ع السوق"):
        assert text in page, text
    for external in ("http://", "https://", "src=", "<link", "@import", "url("):
        assert external not in page, external
    tags = _Tags()
    tags.feed(page)
    assert tags.ok and not tags.stack  # every element is closed, in order


def test_reports_render_again_from_saved_utterances(scored, tmp_path):
    path = tmp_path / "utts.jsonl"
    write_utterances(path, scored)
    reloaded = SetScore([json.loads(line) for line in path.open(encoding="utf-8")], scored.config)
    assert to_markdown(reloaded, META) == to_markdown(scored, META)  # ops come back as lists


def test_compare_markdown(scored):
    worse = Scorer().score([{**it, "hyp": ""} if it["id"] == "sub" else it for it in ITEMS])
    table = compare_markdown({"worse": worse, "best": scored}, extra={"p": {"worse": "0.01"}})
    rows = [line for line in table.splitlines() if line.startswith("| ")]
    assert rows[1].startswith("| best | **") and rows[2].startswith("| worse |")  # sorted by headline WER
    assert rows[0].endswith("| Utterances | p |") and rows[2].endswith("| 0.01 |")
    assert "No significance test" in table
    assert "different utterances" in compare_markdown({"a": scored, "b": Scorer().score(ITEMS[:3])})
    with pytest.raises(ValueError, match="different scoring configurations"):
        compare_markdown({"a": scored, "b": Scorer(headline="L1").score(ITEMS)})


# --- the commands ------------------------------------------------------------------------------------
def _refs(tmp_path):
    rows = [{"id": "u1", "text": "ما فيش حاجة اسمها كده", "duration": 2.0},
            {"id": "u2", "text": "ذهب الولد الى المدرسة", "duration": 2.5},
            {"id": "u3", "text": "", "duration": 1.0}]
    data = "".join(json.dumps(r, ensure_ascii=False) + "\n" for r in rows).replace("\n", "\r\n")
    path = tmp_path / "refs.jsonl"
    path.write_bytes(b"\xef\xbb\xbf" + data.encode("utf-8"))
    return path


def test_main_score_end_to_end(tmp_path, capsys):
    hyps = tmp_path / "text"  # Kaldi format, detected from the content
    hyps.write_text("u2 ذهب الولد إلى الجامعة\nu1 مفيش حاجه اسمها كدا\nu3 اشتركوا في القناة\n",
                    encoding="utf-8")
    out = tmp_path / "out"
    main_score(["--ref", str(_refs(tmp_path)), "--hyp", str(hyps), "--name", "demo",
                "--out-json", str(out / "s.json"), "--out-utts", str(out / "u.jsonl"),
                "--out-md", str(out / "r.md"), "--out-html", str(out / "r.html")])
    printed = capsys.readouterr().out
    assert printed.startswith("demo: 3 utterances (1 without speech), headline L2sp") and "L2sp *" in printed
    summary = json.loads((out / "s.json").read_text(encoding="utf-8"))
    assert summary["headline"]["profile"] == "L2sp" and summary["headline"]["wer"] == pytest.approx(1 / 9)
    assert summary["nonspeech"]["num_clips"] == 1 and summary["meta"]["system"] == "demo"
    assert [i["format"] for i in summary["meta"]["inputs"]] == ["jsonl", "kaldi"]
    assert len(summary["meta"]["inputs"][0]["sha256"]) == 64 and summary["meta"]["ids"] == {"num_items": 3}
    utts = [json.loads(line) for line in (out / "u.jsonl").open(encoding="utf-8")]
    assert [u["id"] for u in utts] == ["u1", "u2", "u3"] and utts[0]["ref"] == "ما فيش حاجة اسمها كده"
    assert "«الجامعه»" in (out / "r.md").read_text(encoding="utf-8")
    assert "https://" not in (out / "r.html").read_text(encoding="utf-8")


def test_main_score_one_predictions_file_ids_and_limit(tmp_path, capsys):
    preds = tmp_path / "preds.jsonl"
    rows = [{"id": "a", "ref": "السلام عليكم", "hyp": "السلام عليكم"},
            {"id": "b", "ref": "كيف الحال", "hyp": "كيف الحال يا"},
            {"id": "c", "ref": "مع السلامة", "hyp": ""}]
    preds.write_text("".join(json.dumps(r, ensure_ascii=False) + "\n" for r in rows), encoding="utf-8")
    main_score(["--hyp", str(preds), "--limit", "2", "--profiles", "L1", "--headline", "L1"])
    assert "2 utterances" in capsys.readouterr().out
    partial = tmp_path / "partial.jsonl"
    partial.write_text(json.dumps({"id": "a", "text": "السلام عليكم"}) + "\n", encoding="utf-8")
    with pytest.raises(SystemExit, match="2 reference ids have no hypothesis"):
        main_score(["--ref", str(preds), "--hyp", str(partial)])
    main_score(["--ref", str(preds), "--hyp", str(partial), "--lenient-ids",
                "--out-json", str(tmp_path / "s.json")])
    assert "ids: 2 missing: b, c" in capsys.readouterr().out
    summary = json.loads((tmp_path / "s.json").read_text(encoding="utf-8"))
    assert summary["meta"]["ids"]["missing"] == ["b", "c"]
    assert summary["hallucination"]["failure_rate"] == pytest.approx(2 / 3)


def test_main_score_multi_reference(tmp_path, capsys):
    (tmp_path / "a.trn").write_text("انا رايح السوق (u1)\nشكرا (u2)\n", encoding="utf-8")
    (tmp_path / "b.trn").write_text("أنا رايح ع السوق (u1)\nشكرا ليك (u2)\n", encoding="utf-8")
    (tmp_path / "h.trn").write_text("انا رايح عالسوق (u1)\nشكرا ليك (u2)\n", encoding="utf-8")
    main_score(["--ref", str(tmp_path / "a.trn"), "--ref", str(tmp_path / "b.trn"),
                "--hyp", str(tmp_path / "h.trn"), "--out-md", str(tmp_path / "r.md")])
    assert "AV-WER" in capsys.readouterr().out
    assert "2 references" in (tmp_path / "r.md").read_text(encoding="utf-8")


def test_main_compare(tmp_path, capsys):
    refs = _refs(tmp_path)
    def hyps(name, pairs):
        rows = [json.dumps({"id": i, "hyp": h}, ensure_ascii=False) + "\n" for i, h in pairs]
        (tmp_path / name).write_text("".join(rows), encoding="utf-8")

    hyps("a.jsonl", [("u1", "مفيش حاجه اسمها كده"), ("u2", "ذهب الولد الى المدرسه"), ("u3", "")])
    hyps("b.jsonl", [("u1", "حاجه"), ("u2", "ذهب"), ("u3", "شكرا")])
    main_compare(["--ref", str(refs), "--hyp", f"good={tmp_path / 'a.jsonl'}", f"bad={tmp_path / 'b.jsonl'}",
                  "--out-json", str(tmp_path / "cmp.json")])
    table = capsys.readouterr().out
    rows = [line for line in table.splitlines() if line.startswith("| ")]
    assert rows[1].startswith("| good |") and rows[2].startswith("| bad |")
    assert "p vs best (Holm)" in rows[0] and "| best |" in rows[1] and "sign-flip" in table
    sig = json.loads((tmp_path / "cmp.json").read_text(encoding="utf-8"))["significance"]
    assert sig["good"]["best"] and sig["bad"]["delta"] > 0 and 0 < sig["bad"]["p_holm"] <= 1
    with pytest.raises(SystemExit):
        main_compare(["--ref", str(refs), "--hyp", str(tmp_path / "a.jsonl")])  # one system only
