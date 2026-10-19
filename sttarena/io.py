"""Read references and hypotheses from the formats ASR tools actually write, and join them by id.

Every reader returns records ``{"id": str, "text": str}``, or ``{"id", "texts": [...]}`` when one
utterance has several references, plus ``duration``, ``failed``, ``cluster``, ``stratum`` and ``group``
when the source carries them. `pair` joins references and hypotheses **by id, never by position**: a
hypothesis file in another order, or with one line missing, must not silently shift every
utterance against the wrong reference.

Text is only decoded (UTF-8, a leading BOM dropped, CRLF/CR line endings turned into LF) and never
normalized: normalization belongs to the scoring profiles, so no reader can change a score.

=======  ====================================  ===================================================
format   detected from                         one record per
=======  ====================================  ===================================================
jsonl    .jsonl .ndjson, ``{...}`` lines        line; id/text fields configurable. Predictions and
                                               sttarena utterance records carry both sides (``ref``
                                               [+ ``refs_extra``] / ``hyp``; NeMo ``text`` /
                                               ``pred_text``)
json     .json                                 list element, ``{id: text}`` entry, or the whole
                                               object (one transcript; id = its id field, else the
                                               file stem)
csv/tsv  .csv .tsv                             row; columns by header name (TSV is unquoted)
kaldi    ``<id> <text>`` lines (file ``text``)  line
trn      .trn, ``text (id)`` lines              line (SCTK)
txt      only when asked for                   line; id = line number, 1-based
srt/vtt  .srt .vtt                             file: cue text in time order, id = file stem
stm      .stm                                  file (file_channel if several channels): segments in
                                               time order (SCTK)
ctm      .ctm                                  file / file_channel: words in time order (SCTK)
hf       ``hf://repo[:config]/split?id=&text=``   dataset row; text columns only, audio never decoded
=======  ====================================  ===================================================

A directory reads every file with a known extension in it (sorted), e.g. one SRT per recording.
Several references per utterance come from several reference files (``pair([refs_a, refs_b],
hyps)``), a list-valued field, or several fields (``text_field="a,b,c"``).
"""

from __future__ import annotations

import csv
import html
import io
import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Mapping, Sequence
from urllib.parse import parse_qsl

import regex as re

FORMATS = ("jsonl", "json", "csv", "tsv", "kaldi", "trn", "txt", "srt", "vtt", "stm", "ctm", "hf")
EXTENSIONS = {".jsonl": "jsonl", ".ndjson": "jsonl", ".json": "json", ".csv": "csv", ".tsv": "tsv",
              ".trn": "trn", ".srt": "srt", ".vtt": "vtt", ".stm": "stm", ".ctm": "ctm"}
# auto-detected field names, first match wins (the role order lets one predictions file serve both sides)
ID_FIELDS = ("id", "utt_id", "uttid", "utterance_id", "key", "segment_id", "audio_id", "audio_filepath",
             "path", "file", "filename")
TEXT_FIELDS = {
    "ref": ("refs", "references", "ref", "reference", "text", "sentence", "transcript", "transcription"),
    "hyp": ("hyp", "hypothesis", "pred_text", "prediction", "pred", "text", "transcript", "transcription"),
}
META_FIELDS = ("duration", "failed", "cluster", "stratum", "group")
LINE_ID = "@line"  # id_field value: use the 1-based record number as id

_TRN = re.compile(r"^(.*?)\s*\(([^()\s]+)\)\s*$")
# a Kaldi utterance id: no spaces, no Arabic, and some digit or separator (plain text lines rarely start so)
_ID_LIKE = re.compile(r"^(?=\S*[\d_\-./:])[^\s\p{Arabic}]+$")
_CUE_TIME = re.compile(r"^\s*((?:\d+:)?\d{1,2}:\d{1,2}[.,]\d{1,3})\s*-->")
_CUE_TAG = re.compile(r"<[^>\n]*>|\{\\[^}\n]*\}")  # <i>, <v Name>, <00:00:01.000>, <c.x>; SRT {\an8}
_STM_LABEL = re.compile(r"^<[^>]*>\s*")


# --- decoding ----------------------------------------------------------------------------------
def _decode(path: Path) -> str:
    raw = path.read_bytes()
    if raw.startswith((b"\xff\xfe", b"\xfe\xff")):
        raise ValueError(f"{path}: UTF-16 text; save it as UTF-8")
    try:
        text = raw.decode("utf-8-sig")
    except UnicodeDecodeError as e:
        raise ValueError(f"{path}: not UTF-8 ({e.reason} at byte {e.start})") from None
    return text.replace("\r\n", "\n").replace("\r", "\n")


def _lines(text: str) -> list[str]:
    lines = text.split("\n")
    if lines and lines[-1] == "":
        lines.pop()
    return lines


# --- field-based records (jsonl, json, csv/tsv, hf) ---------------------------------------------
def _fields(spec: str | Sequence[str] | None) -> list[str] | None:
    if spec is None:
        return None
    names = spec.split(",") if isinstance(spec, str) else list(spec)
    return [n.strip() for n in names if n.strip()] or None


def _text(v) -> str:
    if v is None:
        return ""
    if isinstance(v, (dict, list)):
        raise ValueError(f"expected text, got {type(v).__name__}")
    return str(v)


def _is_text(v) -> bool:
    return v is None or isinstance(v, str) or (isinstance(v, list) and all(x is None or isinstance(x, str)
                                                                          for x in v))


def _id(v, where: str) -> str:
    if v is None or not str(v).strip():
        raise ValueError(f"{where}: empty id")
    return str(v).strip()


def _meta(row: Mapping, where: str) -> dict:
    out = {}
    if isinstance(row.get("diag"), Mapping) and row["diag"].get("failed"):
        out["failed"] = True  # sttarena utterance records keep the flag with the diagnostics
    for f in META_FIELDS:
        v = row.get(f)
        if v is None or v == "":
            continue
        if f == "duration":
            try:
                v = float(v)
            except (TypeError, ValueError):
                raise ValueError(f"{where}: duration {v!r} is not a number") from None
        elif f == "failed":
            v = v if isinstance(v, bool) else str(v).strip().lower() in ("1", "true", "yes")
        else:
            v = str(v)
        out[f] = v
    return out


def _pick(keys: Sequence[str], candidates: Sequence[str], what: str, where: str) -> str:
    for c in candidates:
        if c in keys:
            return c
    have = ", ".join(map(str, keys)) or "(none)"
    raise ValueError(f"{where}: no {what} field among {have}; name it explicitly")


def _record(row: Mapping, rid: str, fields: list[str], where: str) -> dict:
    """The first text field is required; further reference fields may be absent or null on some rows
    (an annotator who skipped a segment), and are then left out."""
    if fields[0] not in row:
        raise ValueError(f"{where}: no field {fields[0]!r} (has {', '.join(map(str, row))})")
    rec: dict = {"id": rid}
    vals = [row.get(f) for f in fields]
    try:
        if len(vals) == 1 and not isinstance(vals[0], list):
            rec["text"] = _text(vals[0])
        else:  # several references: list-valued field and/or several fields; absent (null) ones are skipped
            flat = [x for v in vals for x in (v if isinstance(v, list) else [v])]
            rec["texts"] = [_text(x) for x in flat if x is not None]
    except ValueError as e:
        raise ValueError(f"{where}: {e}") from None
    rec.update(_meta(row, where))
    return rec


def _from_rows(rows: Sequence, where: str, role: str, id_field: str | None,
               fields: list[str] | None) -> list[dict]:
    if not rows:
        return []
    bad = next((k for k, r in enumerate(rows, 1) if not isinstance(r, Mapping)), None)
    if bad:
        raise ValueError(f"{where}: record {bad} is not an object")
    keys = list(rows[0])
    id_field = id_field or _pick(keys, ID_FIELDS, "id", where)
    if fields is None:
        fields = [_pick(keys, TEXT_FIELDS[role], f"{role} text", where)]
        if role == "ref" and fields == ["ref"] and any("refs_extra" in r for r in rows):
            fields.append("refs_extra")  # sttarena utterance records keep further references there
    absent = [f for f in fields[1:] if not any(f in r for r in rows)]
    if absent:
        raise ValueError(f"{where}: no record has a field {absent[0]!r}")
    out = []
    for k, row in enumerate(rows, 1):
        loc = f"{where}: record {k}"
        if id_field == LINE_ID:
            rid = str(k)
        elif id_field not in row:
            raise ValueError(f"{loc}: no id field {id_field!r}")
        else:
            rid = _id(row[id_field], loc)
        out.append(_record(row, rid, fields, loc))
    return out


def _read_jsonl(text: str, path: Path, role: str, id_field: str | None,
                fields: list[str] | None) -> list[dict]:
    rows = []
    for ln, line in enumerate(text.split("\n"), 1):
        if line.strip():
            try:
                rows.append(json.loads(line))
            except json.JSONDecodeError as e:
                raise ValueError(f"{path}:{ln}: not JSON ({e.msg})") from None
    return _from_rows(rows, str(path), role, id_field, fields)


def _read_json(text: str, path: Path, role: str, id_field: str | None,
               fields: list[str] | None) -> list[dict]:
    try:
        data = json.loads(text)
    except json.JSONDecodeError as e:
        if e.msg == "Extra data":  # JSON Lines saved as .json
            return _read_jsonl(text, path, role, id_field, fields)
        raise ValueError(f"{path}: not JSON ({e.msg}, line {e.lineno})") from None
    where = str(path)
    if isinstance(data, list):
        return _from_rows(data, where, role, id_field, fields)
    if not isinstance(data, dict):
        raise ValueError(f"{where}: expected a list or an object")
    one = fields or [f for f in TEXT_FIELDS[role] if data.get(f) is not None and _is_text(data[f])][:1]
    if one and all(f in data and _is_text(data[f]) for f in one):
        # one record: a long-form output ({"text": ..., "segments": [...]}; id = its id field, else file stem)
        idf = id_field or next((f for f in ID_FIELDS if f in data), None)
        rid = path.stem if idf is None else "1" if idf == LINE_ID else _id(data.get(idf), where)
        return [_record(data, rid, one, where)]
    lists = [v for v in data.values() if isinstance(v, list) and v and all(isinstance(x, dict) for x in v)]
    if len(lists) == 1:  # {"utterances": [...], ...}
        return _from_rows(lists[0], where, role, id_field, fields)
    if data and all(isinstance(v, dict) for v in data.values()):  # {id: {record}}
        return _from_rows([{"id": k, **v} for k, v in data.items()], where, role, id_field, fields)
    if all(v is None or isinstance(v, (str, list)) for v in data.values()):  # {id: text or [texts]}
        return [_record({"text": v}, _id(k, where), ["text"], f"{where}: {k}") for k, v in data.items()]
    raise ValueError(f"{where}: unsupported JSON layout (expected records, {{id: text}} or one transcript)")


def _read_csv(text: str, path: Path, delimiter: str, role: str, id_field: str | None,
              fields: list[str] | None) -> list[dict]:
    # TSV has no quoting (Common Voice and Kaldi-style tables put bare quote characters in sentences)
    quoting = csv.QUOTE_NONE if delimiter == "\t" else csv.QUOTE_MINIMAL
    reader = csv.DictReader(io.StringIO(text, newline=""), delimiter=delimiter, quoting=quoting)
    if not reader.fieldnames:
        return []
    reader.fieldnames = [h.strip() for h in reader.fieldnames]
    return _from_rows(list(reader), str(path), role, id_field, fields)


# --- line-based formats ----------------------------------------------------------------------------
def _read_kaldi(text: str) -> list[dict]:
    out = []
    for line in _lines(text):
        parts = line.split(None, 1)
        if parts:
            out.append({"id": parts[0], "text": parts[1].strip() if len(parts) > 1 else ""})
    return out


def _read_trn(text: str, path: Path) -> list[dict]:
    out = []
    for ln, line in enumerate(_lines(text), 1):
        if not line.strip():
            continue
        m = _TRN.match(line)
        if not m:
            raise ValueError(f"{path}:{ln}: a trn line is 'text (id)'")
        out.append({"id": m.group(2), "text": m.group(1).strip()})
    return out


def _read_txt(text: str) -> list[dict]:
    return [{"id": str(k), "text": line.strip()} for k, line in enumerate(_lines(text), 1)]


def _seconds(t: str) -> float:
    *hms, frac = re.split(r"[:.,]", t)
    s = 0
    for x in hms:
        s = s * 60 + int(x)
    return s + int(frac) / 10 ** len(frac)


def _read_subtitles(text: str, path: Path, vtt: bool) -> list[dict]:
    """One long-form record: the cue text of the whole file in time order."""
    cues = []
    for block in re.split(r"\n\s*\n", text):
        lines = block.strip("\n").split("\n")
        k = next((i for i, line in enumerate(lines) if _CUE_TIME.match(line)), None)
        if k is None or (vtt and lines[0].startswith(("NOTE", "STYLE", "REGION"))):
            continue  # header, comment, style or a block without timing
        body = _CUE_TAG.sub("", " ".join(line.strip() for line in lines[k + 1:]))
        cues.append((_seconds(_CUE_TIME.match(lines[k]).group(1)), html.unescape(body) if vtt else body))
    cues.sort(key=lambda c: c[0])
    return [{"id": path.stem, "text": " ".join(c for _, c in cues if c.strip())}]


def _float(s: str, path: Path, ln: int) -> float:
    try:
        return float(s)
    except ValueError:
        raise ValueError(f"{path}:{ln}: {s!r} is not a time") from None


def _grouped(groups: dict[tuple[str, str], list[tuple[float, int, str]]]) -> list[dict]:
    """One record per file, per file and channel when a file has several channels; in time order."""
    channels: dict[str, int] = {}
    for f, _ in groups:
        channels[f] = channels.get(f, 0) + 1
    out = []
    for (f, c), xs in groups.items():
        xs.sort()  # by start time, then line number
        out.append({"id": f if channels[f] == 1 else f"{f}_{c}", "text": " ".join(w for _, _, w in xs if w)})
    return out


def _read_stm(text: str, path: Path) -> list[dict]:
    groups: dict[tuple[str, str], list[tuple[float, int, str]]] = {}
    for ln, line in enumerate(_lines(text), 1):
        s = line.strip()
        if not s or s.startswith(";;"):
            continue
        parts = s.split(None, 5)
        if len(parts) < 5:
            raise ValueError(f"{path}:{ln}: an STM line is 'file channel speaker begin end [<label>] text'")
        words = _STM_LABEL.sub("", parts[5]).strip() if len(parts) > 5 else ""
        if words.lower() == "ignore_time_segment_in_scoring":
            continue
        groups.setdefault((parts[0], parts[1]), []).append((_float(parts[3], path, ln), ln, words))
    return _grouped(groups)


def _read_ctm(text: str, path: Path) -> list[dict]:
    groups: dict[tuple[str, str], list[tuple[float, int, str]]] = {}
    for ln, line in enumerate(_lines(text), 1):
        s = line.strip()
        if not s or s.startswith(";;"):
            continue
        parts = s.split()
        if len(parts) < 5:
            raise ValueError(f"{path}:{ln}: a CTM line is 'file channel begin duration word [confidence]'")
        groups.setdefault((parts[0], parts[1]), []).append((_float(parts[2], path, ln), ln, parts[4]))
    return _grouped(groups)


# --- Hugging Face datasets ---------------------------------------------------------------------------
def parse_hf_spec(spec: str) -> dict:
    """``hf://<repo>[:<config>]/<split>?id=<col>&text=<col>[,<col>...]&revision=<rev>`` -> its parts."""
    if not spec.startswith("hf://"):
        raise ValueError(f"{spec}: an HF source starts with hf://")
    body, _, query = spec[len("hf://"):].partition("?")
    repo_cfg, _, split = body.rpartition("/")
    repo, _, config = repo_cfg.partition(":")
    if not repo or not split:
        raise ValueError(f"{spec}: expected hf://<repo>[:<config>]/<split>[?id=<col>&text=<col>]")
    q = dict(parse_qsl(query))
    unknown = sorted(set(q) - {"id", "text", "revision"})
    if unknown:
        raise ValueError(f"{spec}: unknown parameter(s) {', '.join(unknown)}; known: id, text, revision")
    return {"repo": repo, "config": config or None, "split": split, "id": q.get("id"), "text": q.get("text"),
            "revision": q.get("revision")}


def _read_hf(spec: str, role: str, id_field: str | None, fields: list[str] | None) -> list[dict]:
    p = parse_hf_spec(spec)
    try:
        import datasets
    except ImportError:
        raise ImportError("hf:// sources need the `datasets` package (pip install datasets)") from None
    kw = {"split": p["split"], "streaming": True, **({"revision": p["revision"]} if p["revision"] else {})}
    ds = datasets.load_dataset(p["repo"], p["config"], **kw)
    names = ds.column_names
    id_field, fields = p["id"] or id_field, _fields(p["text"]) or fields
    if names is None:
        if not id_field or not fields:
            raise ValueError(f"{spec}: the dataset does not list its columns; give id= and text=")
    else:
        id_field = id_field or _pick(names, ID_FIELDS, "id", spec)
        fields = fields or [_pick(names, TEXT_FIELDS[role], f"{role} text", spec)]
        absent = [c for c in [id_field, *fields] if c != LINE_ID and c not in names]
        if absent:
            raise ValueError(f"{spec}: no column {absent[0]!r} (has {', '.join(names)})")
    cols = [c for c in dict.fromkeys([id_field, *fields]) if c != LINE_ID]
    cols += [m for m in META_FIELDS if names and m in names and m not in cols]
    try:  # parquet-backed datasets read only these columns, so the audio is never even downloaded
        ds = datasets.load_dataset(p["repo"], p["config"], columns=cols, **kw)
    except (TypeError, ValueError):  # builders without a `columns` option: drop the other columns instead
        pass
    return _from_rows(list(ds.select_columns(cols)), spec, role, id_field, fields)


# --- entry points -------------------------------------------------------------------------------
def detect_format(source: str | Path) -> str:
    """Format of a file from its extension, else from its content (jsonl, trn, kaldi or vtt lines)."""
    s = str(source)
    if s.startswith("hf://"):
        return "hf"
    path = Path(s)
    fmt = EXTENSIONS.get(path.suffix.lower())
    if fmt:
        return fmt
    text = _decode(path)
    lines = [line for line in _lines(text) if line.strip()]
    if not lines:
        return "kaldi"  # an empty file has no records in any line format
    if lines[0].startswith("WEBVTT"):
        return "vtt"
    if all(line.lstrip().startswith("{") for line in lines):
        return "jsonl"
    if all(_TRN.match(line) for line in lines):
        return "trn"
    ids = [line.split(None, 1)[0] for line in lines]
    if len(set(ids)) == len(ids) and all(_ID_LIKE.match(i) for i in ids):
        return "kaldi"
    raise ValueError(f"{path}: cannot tell the format; pass it explicitly "
                     f"(one of {', '.join(FORMATS)}; txt = one utterance per line, ids = line numbers)")


def read(source: str | Path, fmt: str | None = None, *, role: str = "ref", id_field: str | None = None,
         text_field: str | Sequence[str] | None = None) -> list[dict]:
    """Records from a file, a directory of files, or an hf:// dataset spec.

    role ("ref"/"hyp") picks the default text field, so one predictions file can be read as both sides.
    id_field / text_field apply to jsonl, json, csv, tsv and hf; text_field "a,b,c" (or a list) reads
    several references per record; id_field "@line" numbers the records from 1.
    """
    if role not in TEXT_FIELDS:
        raise ValueError(f"role must be 'ref' or 'hyp', not {role!r}")
    if fmt is not None and fmt not in FORMATS:
        raise ValueError(f"unknown format {fmt!r}; known: {', '.join(FORMATS)}")
    fields = _fields(text_field)
    s = str(source)
    if fmt == "hf" or s.startswith("hf://"):
        return _read_hf(s, role, id_field, fields)
    path = Path(s)
    if path.is_dir():
        files = [f for f in sorted(path.iterdir()) if f.is_file() and not f.name.startswith(".")
                 and (fmt or f.suffix.lower() in EXTENSIONS)]
        if not files:
            raise ValueError(f"{path}: no files with a known extension ({', '.join(EXTENSIONS)})")
        return [r for f in files for r in read(f, fmt, role=role, id_field=id_field, text_field=fields)]
    fmt = fmt or detect_format(path)
    text = _decode(path)
    if fmt == "jsonl":
        return _read_jsonl(text, path, role, id_field, fields)
    if fmt == "json":
        return _read_json(text, path, role, id_field, fields)
    if fmt in ("csv", "tsv"):
        return _read_csv(text, path, "," if fmt == "csv" else "\t", role, id_field, fields)
    if fmt == "kaldi":
        return _read_kaldi(text)
    if fmt == "trn":
        return _read_trn(text, path)
    if fmt == "txt":
        return _read_txt(text)
    if fmt in ("srt", "vtt"):
        return _read_subtitles(text, path, fmt == "vtt")
    return _read_stm(text, path) if fmt == "stm" else _read_ctm(text, path)


# --- pairing -----------------------------------------------------------------------------------
_PROBLEMS = {"missing": "reference ids have no hypothesis", "extra": "hypothesis ids have no reference",
             "duplicate_refs": "reference ids are repeated", "duplicate_hyps": "hypothesis ids are repeated",
             "partial_refs": "ids are missing from some reference files"}
_PASSED = ("duration", "cluster", "stratum", "group")  # item fields the Scorer keeps in its records


@dataclass
class Pairing:
    """Scorer items joined by id (in reference order), and every id that did not join cleanly."""

    items: list[dict]
    missing: list[str] = field(default_factory=list)  # scored as empty, failed hypotheses in lenient mode
    extra: list[str] = field(default_factory=list)  # dropped
    duplicate_refs: list[str] = field(default_factory=list)  # first occurrence kept
    duplicate_hyps: list[str] = field(default_factory=list)
    partial_refs: list[str] = field(default_factory=list)  # multi-reference ids absent from some files

    @property
    def problems(self) -> dict[str, list[str]]:
        return {k: getattr(self, k) for k in _PROBLEMS if getattr(self, k)}

    def describe(self) -> str:
        return "; ".join(f"{len(v)} {_PROBLEMS[k]} (e.g. {', '.join(v[:3])})"
                         for k, v in self.problems.items())

    def to_dict(self) -> dict:
        return {"num_items": len(self.items), **self.problems}


class IdMismatchError(ValueError):
    def __init__(self, pairing: Pairing):
        self.pairing = pairing
        super().__init__(pairing.describe() + "; score them anyway with lenient id matching (--lenient-ids)")


def pair(refs: Sequence[dict] | Sequence[Sequence[dict]], hyps: Sequence[dict], *,
         strict: bool = True) -> Pairing:
    """Join references and hypotheses by id into Scorer items ({id, ref | refs, hyp, ...}).

    `refs` is one list of records, or one list per reference file; the texts of all files are combined
    per id (multi-reference). Strict mode raises IdMismatchError on any missing, extra, repeated or
    partially referenced id. Lenient mode scores a missing hypothesis as an empty *failed* output (it
    counts as deletions, but not as an empty model output), drops extra hypotheses, keeps the first of
    a repeated id, and lists every case in the result.
    """
    ref_sets = list(refs) if refs and not isinstance(refs[0], Mapping) else [refs]
    merged: dict[str, dict] = {}
    files_with: dict[str, int] = {}
    out = Pairing([])
    for rs in ref_sets:
        seen: set[str] = set()
        for r in rs:
            i = r["id"]
            if i in seen:
                out.duplicate_refs.append(i)
                continue
            seen.add(i)
            texts = list(r["texts"]) if "texts" in r else [r["text"]]
            if i in merged:
                merged[i]["texts"] += texts
                files_with[i] += 1
            else:
                merged[i] = {"texts": texts, **{k: r[k] for k in _PASSED if k in r}}
                files_with[i] = 1
    out.partial_refs = [i for i, k in files_with.items() if k < len(ref_sets)]
    by_id: dict[str, dict] = {}
    for h in hyps:
        if h["id"] in by_id:
            out.duplicate_hyps.append(h["id"])
        else:
            by_id[h["id"]] = h
    out.missing = [i for i in merged if i not in by_id]
    out.extra = [i for i in by_id if i not in merged]
    if strict and out.problems:
        raise IdMismatchError(out)
    for i, r in merged.items():
        h = by_id.get(i)
        texts = r.pop("texts")
        item = {"id": i, **({"ref": texts[0]} if len(texts) == 1 else {"refs": texts}), "hyp": ""}
        if h is not None:
            htexts = h["texts"] if "texts" in h else [h["text"]]
            if len(htexts) != 1:
                raise ValueError(f"hypothesis {i}: expected one text, got {len(htexts)}")
            item["hyp"] = htexts[0]
        item.update(r)
        for k in _PASSED:
            if k not in item and h is not None and k in h:
                item[k] = h[k]
        if h is None or h.get("failed"):
            item["failed"] = True
        out.items.append(item)
    return out
