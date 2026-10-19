"""Readers and id pairing (sttarena/io.py) on tiny fixtures: Arabic text, a BOM, CRLF line endings,
multi-reference inputs, every format. No network: the hf:// reader runs against a fake `datasets`."""

import json
import sys
import types

import pytest

from sttarena.io import IdMismatchError, detect_format, pair, parse_hf_spec, read

BOM = b"\xef\xbb\xbf"


def write(path, text, *, crlf=False, bom=False):
    data = text.replace("\n", "\r\n") if crlf else text
    path.write_bytes((BOM if bom else b"") + data.encode("utf-8"))
    return path


def jsonl(rows):
    return "".join(json.dumps(r, ensure_ascii=False) + "\n" for r in rows)


# --- field-based formats ---------------------------------------------------------------------------
def test_jsonl_with_bom_crlf_and_arabic(tmp_path):
    rows = [{"id": "u1", "text": "مرحبا بكم"}, {"id": 2, "text": "كيف الحال"}]
    p = write(tmp_path / "refs.jsonl", jsonl(rows), crlf=True, bom=True)
    assert read(p) == [{"id": "u1", "text": "مرحبا بكم"}, {"id": "2", "text": "كيف الحال"}]


def test_predictions_file_serves_both_sides(tmp_path):
    p = write(tmp_path / "preds.jsonl", jsonl([
        {"id": "a", "ref": "السلام عليكم", "hyp": "السلام عليكم ورحمة", "ref_norm": "x", "hyp_norm": "y",
         "wer": 0.5, "duration": 2.5, "failed": False},
    ]))
    assert read(p, role="ref") == [{"id": "a", "text": "السلام عليكم", "duration": 2.5, "failed": False}]
    assert read(p, role="hyp")[0]["text"] == "السلام عليكم ورحمة"
    manifest = [{"audio_filepath": "a.wav", "text": "نص", "pred_text": "نص"}]
    nemo = write(tmp_path / "nemo.json", jsonl(manifest))
    assert read(nemo, role="ref") == [{"id": "a.wav", "text": "نص"}]  # JSON Lines saved as .json
    assert read(nemo, role="hyp") == [{"id": "a.wav", "text": "نص"}]


def test_custom_fields_line_ids_and_multi_reference(tmp_path):
    p = write(tmp_path / "x.jsonl", jsonl([
        {"utt": "k1", "a": "واحد", "b": "وحده", "c": None, "all": ["واحد", "وحده"], "group": "snr5"},
        {"utt": "k2", "a": "اثنين", "all": []},  # the second annotator skipped this one
    ]))
    assert read(p, id_field="utt", text_field="a")[0] == {"id": "k1", "text": "واحد", "group": "snr5"}
    multi = read(p, id_field="utt", text_field="a,b,c")
    assert [r["texts"] for r in multi] == [["واحد", "وحده"], ["اثنين"]]  # null and absent ones skipped
    assert read(p, id_field="utt", text_field="all")[0]["texts"] == ["واحد", "وحده"]
    assert read(p, id_field="@line", text_field="a")[0]["id"] == "1"
    with pytest.raises(ValueError, match="no id field"):
        read(p)
    with pytest.raises(ValueError, match="no field 'nope'"):
        read(p, id_field="utt", text_field="nope")
    with pytest.raises(ValueError, match="no record has a field 'typo'"):
        read(p, id_field="utt", text_field="a,typo")


def test_sttarena_records_round_trip(tmp_path):
    from sttarena.report import write_utterances
    from sttarena.scoring import Scorer

    score = Scorer().score([
        {"id": "a", "refs": ["انا رايح السوق", "أنا رايح ع السوق"], "hyp": "انا رايح عالسوق"},
        {"id": "b", "ref": "شكرا", "hyp": "شكرا جزيلا"},
        {"id": "c", "ref": "نعم", "hyp": "", "failed": True}])
    path = tmp_path / "utts.jsonl"
    write_utterances(path, score)
    items = pair(read(path, role="ref"), read(path, role="hyp")).items
    assert items == [{"id": "a", "refs": ["انا رايح السوق", "أنا رايح ع السوق"], "hyp": "انا رايح عالسوق"},
                     {"id": "b", "ref": "شكرا", "hyp": "شكرا جزيلا"},
                     {"id": "c", "ref": "نعم", "hyp": "", "failed": True}]  # diag.failed survives


def test_json_layouts(tmp_path):
    def j(name, data):
        return write(tmp_path / name, json.dumps(data, ensure_ascii=False))

    assert read(j("list.json", [{"id": "a", "sentence": "جملة"}])) == [{"id": "a", "text": "جملة"}]
    assert read(j("map.json", {"a": "واحد", "b": ["اثنين", "إثنان"]})) == [
        {"id": "a", "text": "واحد"}, {"id": "b", "texts": ["اثنين", "إثنان"]}]
    assert read(j("wrapped.json", {"version": 2, "utterances": [{"key": "k", "transcript": "نص"}]})) == [
        {"id": "k", "text": "نص"}]
    assert read(j("records.json", {"u1": {"hyp": "مخرج"}}), role="hyp") == [{"id": "u1", "text": "مخرج"}]
    whisper = j("talk_01.json", {"text": "نص طويل", "segments": [{"start": 0, "text": "نص"}],
                                 "language": "ar"})
    assert read(whisper, role="hyp") == [{"id": "talk_01", "text": "نص طويل"}]  # long-form: id = file stem


def test_csv_and_tsv(tmp_path):
    p = write(tmp_path / "x.csv", 'utt, transcript ,duration\n1,"قال، ثم ""مشى""",2.5\n2,"سطر\nثان",1\n',
              crlf=True, bom=True)
    assert read(p, id_field="utt", text_field="transcript") == [
        {"id": "1", "text": 'قال، ثم "مشى"', "duration": 2.5},
        {"id": "2", "text": "سطر\nثان", "duration": 1.0}]
    t = write(tmp_path / "cv.tsv", 'client_id\tpath\tsentence\nc1\ta.mp3\tقال "مرحبا\n')  # bare quote kept
    assert read(t) == [{"id": "a.mp3", "text": 'قال "مرحبا'}]


# --- line-based formats ----------------------------------------------------------------------------
def test_kaldi_and_trn(tmp_path):
    k = write(tmp_path / "text", "utt_1 السلام عليكم\nutt_2\nutt-3 hello (world)\n", crlf=True, bom=True)
    assert detect_format(k) == "kaldi"
    assert read(k) == [{"id": "utt_1", "text": "السلام عليكم"}, {"id": "utt_2", "text": ""},
                       {"id": "utt-3", "text": "hello (world)"}]
    t = write(tmp_path / "hyp.trn", "السلام (عليكم) (spk1_utt1)\n\nhello (spk1_utt2)\n")
    assert read(t) == [{"id": "spk1_utt1", "text": "السلام (عليكم)"}, {"id": "spk1_utt2", "text": "hello"}]
    assert detect_format(write(tmp_path / "hyp", "نص (u1)\n")) == "trn"
    assert detect_format(write(tmp_path / "rows", '{"id": 1}\n')) == "jsonl"


def test_plain_text_only_when_asked(tmp_path):
    p = write(tmp_path / "hyps.txt", "السلام عليكم\n\nكيف الحال\n", crlf=True)
    with pytest.raises(ValueError, match="txt = one utterance per line"):
        read(p)
    assert read(p, "txt") == [{"id": "1", "text": "السلام عليكم"}, {"id": "2", "text": ""},
                              {"id": "3", "text": "كيف الحال"}]


def test_srt_and_vtt(tmp_path):
    srt = write(tmp_path / "talk.srt", "1\n00:00:02,000 --> 00:00:03,500\n<i>ثاني</i> سطر\n\n"
                                       "2\n00:00:00,500 --> 00:00:01,000\n{\\an8}أول\n", crlf=True, bom=True)
    assert read(srt) == [{"id": "talk", "text": "أول ثاني سطر"}]  # cues in time order, tags removed
    vtt = write(tmp_path / "talk2.vtt",
                "WEBVTT - a title\n\nSTYLE\n::cue { color: red }\n\nNOTE a comment\n\n"
                "c1\n00:01.000 --> 00:02.000 align:start position:10%\n<v أحمد>مرحبا &amp; أهلا</v>\n\n"
                "00:00.000 --> 00:00.900\nبداية<00:00:00.500><c> النص</c>\n")
    assert read(vtt) == [{"id": "talk2", "text": "بداية النص مرحبا & أهلا"}]


def test_stm_and_ctm(tmp_path):
    stm = write(tmp_path / "ref.stm", ";; comment\nrec1 1 spk1 2.0 3.0 <o,f0,male> ثانية\n"
                                      "rec1 1 spk1 0.0 1.0 أولى\n"
                                      "rec2 A s 1 2 IGNORE_TIME_SEGMENT_IN_SCORING\n"
                                      "rec2 A s 0 1 قناة أ\nrec2 B s 0 1 قناة ب\n")
    assert read(stm) == [{"id": "rec1", "text": "أولى ثانية"}, {"id": "rec2_A", "text": "قناة أ"},
                         {"id": "rec2_B", "text": "قناة ب"}]
    ctm = write(tmp_path / "hyp.ctm", ";; system\nrec1 1 0.50 0.20 ثانية 0.9\nrec1 1 0.10 0.20 أولى\n")
    assert read(ctm) == [{"id": "rec1", "text": "أولى ثانية"}]
    with pytest.raises(ValueError, match="ref.stm:1"):
        read(write(tmp_path / "ref.stm", "rec1 1 spk1\n"))


def test_directory_of_subtitles(tmp_path):
    d = tmp_path / "srt"
    d.mkdir()
    write(d / "b.srt", "1\n00:00:00,000 --> 00:00:01,000\nثاني\n")
    write(d / "a.srt", "1\n00:00:00,000 --> 00:00:01,000\nأول\n")
    write(d / "README", "not a transcript")  # no known extension: skipped
    assert read(d) == [{"id": "a", "text": "أول"}, {"id": "b", "text": "ثاني"}]


def test_decoding_errors(tmp_path):
    bad = tmp_path / "bad.jsonl"
    bad.write_bytes(b'{"id": "a", "text": "\xff"}\n')
    with pytest.raises(ValueError, match="not UTF-8"):
        read(bad)
    utf16 = tmp_path / "w.txt"
    utf16.write_bytes("نص".encode("utf-16"))
    with pytest.raises(ValueError, match="UTF-16"):
        read(utf16, "txt")
    with pytest.raises(ValueError, match="unknown format"):
        read(bad, "docx")


# --- Hugging Face datasets ---------------------------------------------------------------------------
def test_hf_spec_parsing():
    assert parse_hf_spec("hf://google/fleurs:ar_eg/test?id=path&text=transcription") == {
        "repo": "google/fleurs", "config": "ar_eg", "split": "test", "id": "path", "text": "transcription",
        "revision": None}
    assert parse_hf_spec("hf://org/ds/validation?text=a,b&revision=abc123")["text"] == "a,b"
    assert parse_hf_spec("hf://ds/test")["repo"] == "ds"
    with pytest.raises(ValueError, match="unknown parameter"):
        parse_hf_spec("hf://org/ds/test?column=x")
    with pytest.raises(ValueError, match="expected hf://"):
        parse_hf_spec("hf://test")


class _Audio:
    """An audio cell that fails loudly if anything touches it."""

    def __getattr__(self, name):
        raise AssertionError("audio was accessed")


@pytest.mark.parametrize("builder_takes_columns", [True, False])
def test_hf_reader_reads_text_columns_only(monkeypatch, builder_takes_columns):
    rows = [{"audio": _Audio(), "id": "s1", "sentence": "جملة اولى", "text_2": "جمله اولي"},
            {"audio": _Audio(), "id": "s2", "sentence": "جملة ثانية", "text_2": None}]
    calls = []

    class FakeDataset:
        def __init__(self, rows):
            self.rows, self.column_names = rows, list(rows[0])

        def select_columns(self, cols):
            calls.append(("select", list(cols)))
            return FakeDataset([{c: r[c] for c in cols} for r in self.rows])

        def __iter__(self):
            return iter(self.rows)

    def load_dataset(repo, config=None, **kw):
        calls.append(("load", repo, config, kw.get("columns"), kw.get("streaming")))
        if "columns" in kw:
            if not builder_takes_columns:
                raise ValueError("BuilderConfig AudioFolderConfig doesn't have a 'columns' key")
            return FakeDataset([{c: r[c] for c in kw["columns"]} for r in rows])
        return FakeDataset(rows)

    fake = types.ModuleType("datasets")
    fake.load_dataset = load_dataset
    monkeypatch.setitem(sys.modules, "datasets", fake)
    out = read("hf://org/arabic_set:dialects/test?text=sentence,text_2")
    assert out == [{"id": "s1", "texts": ["جملة اولى", "جمله اولي"]}, {"id": "s2", "texts": ["جملة ثانية"]}]
    assert calls[0] == ("load", "org/arabic_set", "dialects", None, True)
    assert calls[1][3] == ["id", "sentence", "text_2"]  # only the text columns are requested
    assert calls[-1] == ("select", ["id", "sentence", "text_2"])


# --- pairing ---------------------------------------------------------------------------------------
REFS = [{"id": "a", "text": "واحد", "duration": 1.0}, {"id": "b", "text": "اثنين"},
        {"id": "c", "text": "ثلاثة"}]


def test_pair_joins_by_id_not_position():
    hyps = [{"id": "c", "text": "ثلاثه"}, {"id": "a", "text": "واحد", "failed": True},
            {"id": "b", "text": ""}]
    p = pair(REFS, hyps)
    assert [(it["id"], it["ref"], it["hyp"]) for it in p.items] == [
        ("a", "واحد", "واحد"), ("b", "اثنين", ""), ("c", "ثلاثة", "ثلاثه")]
    assert p.items[0]["failed"] and "failed" not in p.items[1]  # an empty output is not a failure
    assert p.items[0]["duration"] == 1.0 and not p.problems


@pytest.mark.parametrize("hyps, problem", [
    ([{"id": "a", "text": "x"}, {"id": "b", "text": "y"}], "reference ids have no hypothesis"),
    ([{"id": i, "text": "x"} for i in "abcd"], "hypothesis ids have no reference"),
    ([{"id": i, "text": "x"} for i in "abcc"], "hypothesis ids are repeated"),
])
def test_pair_strict_raises_on_any_mismatch(hyps, problem):
    with pytest.raises(IdMismatchError, match=problem):
        pair(REFS, hyps)


def test_pair_lenient_scores_missing_as_failed_and_lists_ids():
    p = pair(REFS, [{"id": "a", "text": "x"}, {"id": "z", "text": "y"}, {"id": "a", "text": "again"}],
             strict=False)
    assert [it["id"] for it in p.items] == ["a", "b", "c"]
    assert p.items[0]["hyp"] == "x" and p.items[1] == {"id": "b", "ref": "اثنين", "hyp": "", "failed": True}
    assert p.to_dict() == {"num_items": 3, "missing": ["b", "c"], "extra": ["z"], "duplicate_hyps": ["a"]}


def test_pair_multi_reference_files(tmp_path):
    a = write(tmp_path / "ann1.trn", "انا رايح السوق (u1)\nكلمة (u2)\n")
    b = write(tmp_path / "ann2.trn", "أنا رايح ع السوق (u1)\n")
    hyps = [{"id": "u1", "text": "انا رايح عالسوق"}, {"id": "u2", "text": "كلمه"}]
    with pytest.raises(IdMismatchError, match="missing from some reference files"):
        pair([read(a), read(b)], hyps)
    p = pair([read(a), read(b)], hyps, strict=False)
    assert p.items[0]["refs"] == ["انا رايح السوق", "أنا رايح ع السوق"] and p.items[1]["ref"] == "كلمة"
    assert p.partial_refs == ["u2"]
