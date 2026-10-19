"""Score anything: references and hypotheses in, per-utterance records and set-level metrics out.

A *profile* is one way of turning text into words and counting errors:

=========  =========================================================  ===============================
profile    normalization and alignment                                use
=========  =========================================================  ===============================
v1         the v1 arena normalizer, plain Levenshtein                 compatibility with v1 results
L1         normalizer v2 L1 (orthographic), plain                     "strict" WER, OUAAL-comparable
L2         L2 dialect-lenient, plain                                  diagnostic
L2sp       L2 + space-insensitive merges                              **headline** (Arena WER v2)
L3sp       consonant skeleton + merges                                spelling upper bound (diagnostic)
=========  =========================================================  ===============================

Sets with several references (MGB-3's four annotators, Mixat's transliteration) are scored with
multi-reference alignment in every profile (no merges inside the confusion network); the
per-reference errors are kept so AV-WER can be reported too.

Each utterance record keeps, per profile, n (reference words; the mean over references for
multi-reference), C/S/D/I/M counts and character errors without spaces, so every set metric, the
per-utterance cap and the cluster bootstrap can be recomputed without re-running a model.
"""

from __future__ import annotations

import math
from dataclasses import dataclass, field
from typing import Iterable, Sequence

import regex as re

from .align import Alignment, Tokens, align_multi, align_plain, align_tokens, char_errors
from .normalizers import NORMALIZER_VERSION, ArabicTextNormalizer, get_normalizer, get_text_normalizer

SCORING_VERSION = "2.0"
HEADLINE = "L2sp"
DEFAULT_PROFILES = ("v1", "L1", "L2", "L2sp")
ALL_PROFILES = ("v1", "L0", "L1", "L1m", "L2", "L2sp", "L3", "L3sp")

_LATIN = re.compile(r"[A-Za-z]")
_ARABIC = re.compile(r"\p{Arabic}")

# High-frequency dialect words (L2 canonical spelling) and the MSA words a model writes when it
# "translates" dialect speech into MSA instead of transcribing it. Retention = share of reference
# markers the hypothesis keeps; MSA replacement = share aligned to an MSA equivalent.
DIALECT_MARKERS = frozenset({
    "مش", "عايز", "عايزه", "فين", "ده", "دي", "كده", "ازاي", "بتاع", "بتاعه", "دلوقتي", "اوي", "قوي", "برضه",  # EGY
    "شو", "ليش", "يبي", "ابي", "وايد", "هني", "الحين", "زين", "وش", "ايش",  # GLF
    "بدي", "هيك", "هلق", "هلا", "منيح", "شلون", "هسه",  # LEV / IRQ (كتير is folded to كثير at L2)
    "ديال", "بزاف", "واش", "كيفاش", "دابا", "علاش", "فاش", "برشا", "باش", "شنو",  # MAG
})
MSA_EQUIVALENTS = frozenset({"ليس", "لا", "لم", "لن", "اريد", "يريد", "اين", "هذا", "هذه", "ذلك", "هكذا", "كيف", "لماذا",
                             "ماذا", "الان", "كثيرا", "جدا", "ايضا", "متي", "هنا", "هناك", "جيد", "حسنا"})


@dataclass(frozen=True)
class Profile:
    name: str
    level: str  # "v1" or a normalizer v2 level
    merge: bool = False

    @classmethod
    def named(cls, name: str) -> "Profile":
        if name == "v1":
            return cls("v1", "v1")
        merge = name.endswith("sp")
        level = name[:-2] if merge else name
        return cls(name, level, merge)


class _V1:
    """The v1 normalizer behind the v2 normalizer interface."""

    def __init__(self, lang: str):
        self._norm = ArabicTextNormalizer() if lang == "ar" else get_normalizer(lang)

    def tokens(self, text: str) -> list[str]:
        return self._norm(text or "").split()

    def canon(self, w: str) -> str:
        return w

    words = tokens


def max_ngram_repeat(words: Sequence[str], max_n: int = 4) -> int:
    """Longest run of consecutive repetitions of any 1..max_n-gram (1 = no repetition)."""
    best = 1
    L = len(words)
    for n in range(1, max_n + 1):
        i = 0
        while i + 2 * n <= L:
            k = 1
            while i + (k + 1) * n <= L and words[i + k * n:i + (k + 1) * n] == words[i:i + n]:
                k += 1
            if k > best:
                best = k
            i += max(1, (k - 1) * n) if k > 1 else 1
    return best


def latin_share(words: Sequence[str]) -> float:
    if not words:
        return 0.0
    return sum(1 for w in words if _LATIN_WORD.fullmatch(w)) / len(words)


# a Latin-script word, possibly carrying an Arabic clitic (MGB-3 "الـ (word)" becomes "الword")
_LATIN_WORD = re.compile(r"(?:[وفبلك]?ال|[وفبل])?[A-Za-z][A-Za-z0-9'’-]*")


def _is_latin(words) -> bool:
    return any(_LATIN_WORD.fullmatch(w) for w in words)


def codeswitch_counts(ops) -> tuple[int, int]:
    """(Latin-script reference words, errors on them): substitutions and deletions of Latin reference
    words plus insertions of Latin hypothesis words, i.e. WER restricted to the embedded language."""
    n = e = 0
    for op, r, h in ops:  # r is one word, a merged block (M), or a multi-reference slot's alternatives
        if op == "I":
            e += _is_latin(h)
        elif r and _is_latin(r):
            n += len(r) if op == "M" else 1
            e += op in ("S", "D")
    return n, e


def marker_counts(ops) -> tuple[int, int, int]:
    """(dialect markers in the reference, kept by the hypothesis, replaced by an MSA equivalent)."""
    n = kept = msa = 0
    for op, r, h in ops:
        k = sum(w in DIALECT_MARKERS for w in r) if op == "M" else int(any(w in DIALECT_MARKERS for w in r))
        if k:
            n += k
            kept += k if op in ("C", "M") else 0
            msa += op == "S" and bool(h) and h[0] in MSA_EQUIVALENTS
    return n, kept, msa


def insertion_runs(ops) -> tuple[int, int]:
    """(longest run of consecutive insertions, insertions after the last reference word)."""
    longest = run = 0
    for op, _, _ in ops:
        if op == "I":
            run += 1
            longest = max(longest, run)
        elif op != "i":
            run = 0
    trailing = 0
    for op, _, _ in reversed(ops):
        if op == "I":
            trailing += 1
        elif op not in ("i", "d"):
            break
    return longest, trailing


@dataclass
class Scorer:
    """Scores utterances under several profiles. `markup` follows MarkupSpec.parse (per set)."""

    lang: str = "ar"
    profiles: Sequence[str] = DEFAULT_PROFILES
    headline: str = HEADLINE
    markup: object = None
    max_merge: int = 3
    _norms: dict = field(default_factory=dict, init=False, repr=False)

    def __post_init__(self):
        names = list(dict.fromkeys([*self.profiles, self.headline]))
        self._profiles = [Profile.named(n) for n in names]
        for p in self._profiles:
            if p.level == "v1":
                self._norms[p.name] = _V1(self.lang)
            else:
                self._norms[p.name] = get_text_normalizer(self.lang, p.level, self.markup)

    @property
    def config(self) -> dict:
        return {"scoring_version": SCORING_VERSION, "normalizer_version": NORMALIZER_VERSION, "lang": self.lang,
                "profiles": [p.name for p in self._profiles], "headline": self.headline,
                "markup": getattr(self._norms.get(self.headline), "config", {}).get("markup"),
                "max_merge": self.max_merge, "aligner": "rapidfuzz Levenshtein / sttarena.align DP"}

    # -- one utterance ---------------------------------------------------------------------------
    def _profile_counts(self, p: Profile, refs: list[str], hyp: str) -> tuple[dict, Alignment, list[str], list[str]]:
        norm = self._norms[p.name]
        hyp_words = norm.words(hyp)
        if p.level == "v1":  # the v1 scorer knew one reference only; keep its numbers exactly
            refs = refs[:1]
        ref_words = [norm.words(r) for r in refs]
        primary = ref_words[0]
        others = [w for w in ref_words[1:] if w]
        if not primary:
            return {"n": 0}, Alignment([], 0.0), primary, hyp_words
        def key_of(s: str) -> str:
            return norm.canon(s).replace(" ", "")

        def single(ref_text: str) -> Alignment:
            if p.merge:
                return align_tokens(Tokens.from_normalizer(norm, ref_text), Tokens.from_normalizer(norm, hyp), key_of,
                                    merge=True, max_merge=self.max_merge)
            return align_plain(norm.words(ref_text), hyp_words)

        if others:
            a = align_multi([primary, *others], hyp_words)  # no merges inside the confusion network
            texts = [t for t, w in zip(refs, ref_words) if w]
            per_ref = [single(t) for t in texts]  # AV-WER: each reference on its own, with this profile's merges
            av = {"av_e": [x.errors for x in per_ref], "av_n": [x.n_ref for x in per_ref]}
        elif p.merge:
            a = single(refs[0])
            av = {}
        else:
            a = align_plain(primary, hyp_words)
            av = {}
        c = a.counts()
        r_chars, h_chars = "".join(primary), "".join(hyp_words)
        r_sp, h_sp = " ".join(primary), " ".join(hyp_words)
        rec = {"n": round(a.n_ref, 4), "C": c["C"], "S": c["S"], "D": c["D"], "I": c["I"], "M": c["M"],
               "nc": len(r_chars), "ce": char_errors(r_chars, h_chars),
               "ncs": len(r_sp), "ces": char_errors(r_sp, h_sp), **av}
        return rec, a, primary, hyp_words

    def score_utterance(self, ref: str | Sequence[str], hyp: str, *, failed: bool = False) -> dict:
        refs = [ref] if isinstance(ref, str) else [r or "" for r in ref]
        hyp = hyp or ""
        out: dict = {"scores": {}}
        for p in self._profiles:
            rec, a, ref_words, hyp_words = self._profile_counts(p, refs, hyp)
            out["scores"][p.name] = rec
            if p.name == self.headline:
                out["ref_norm"], out["hyp_norm"] = " ".join(ref_words), " ".join(hyp_words)
                run, trail = insertion_runs(a.ops)
                n_lat, e_lat = codeswitch_counts(a.ops)
                n_dm, dm_kept, dm_msa = marker_counts(a.ops)
                out["diag"] = {
                    "n_lat": n_lat, "e_lat": e_lat, "n_dm": n_dm, "dm_kept": dm_kept, "dm_msa": dm_msa,
                    "n_hyp": len(hyp_words), "ins_run": run, "trail_ins": trail,
                    "rep_hyp": max_ngram_repeat(hyp_words), "rep_ref": max_ngram_repeat(ref_words),
                    "lat_ref": round(latin_share(ref_words), 4), "lat_hyp": round(latin_share(hyp_words), 4),
                    "chars_ref": len("".join(ref_words)), "chars_hyp": len("".join(hyp_words)),
                    "empty_hyp": not hyp_words, "failed": bool(failed),
                    # U+FFFD: the model emitted bytes that are not valid UTF-8 (seen from Cohere); the
                    # normalizer would silently turn such an output into an empty hypothesis
                    "invalid_chars": "\ufffd" in hyp,
                }
                out["ops"] = [(op, " ".join(r), " ".join(h)) for op, r, h in a.ops if op != "C"]
        return out

    # -- a set ---------------------------------------------------------------------------------------
    def score(self, items: Iterable[dict], keep_ops: bool = True) -> "SetScore":
        """items: dicts with 'ref' (str or list of str), 'hyp', and optionally 'id', 'duration', 'failed',
        'cluster', 'stratum' (passed through)."""
        recs = []
        for k, it in enumerate(items):
            refs = list(it.get("refs") or [it["ref"]])
            r = self.score_utterance(refs, it.get("hyp", ""), failed=it.get("failed", False))
            if not keep_ops:
                r.pop("ops", None)
            # raw texts, so a record can always be re-scored (sttarena rescore) without the built set
            r = {"id": it.get("id", str(k)), "ref": refs[0], **({"refs_extra": refs[1:]} if refs[1:] else {}),
                 "hyp": it.get("hyp", "") or "", **r}
            for f in ("duration", "cluster", "stratum", "source_utt", "group"):
                if it.get(f) is not None:
                    r[f] = it[f]
            recs.append(r)
        return SetScore(recs, self.config)


# --- set-level aggregation -------------------------------------------------------------------------
def _ratio(a: float, b: float) -> float | None:
    return a / b if b else None


def aggregate(recs: Sequence[dict], profile: str) -> dict:
    """Corpus metrics for one profile over utterance records (utterances with an empty reference
    under this profile are excluded and counted)."""
    xs = [r["scores"][profile] for r in recs if r["scores"].get(profile, {}).get("n", 0) > 0]
    n = sum(x["n"] for x in xs)
    e = [x["S"] + x["D"] + x["I"] for x in xs]
    E, E_cap = sum(e), sum(min(ei, x["n"]) for ei, x in zip(e, xs))
    S, D, I, C = (sum(x[k] for x in xs) for k in ("S", "D", "I", "C"))  # noqa: E741 (the usual S/D/I names)
    nc, ce = sum(x["nc"] for x in xs), sum(x["ce"] for x in xs)
    ce_cap = sum(min(x["ce"], x["nc"]) for x in xs)
    utt = sorted(ei / x["n"] for ei, x in zip(e, xs))
    out = {
        "wer": _ratio(E_cap, n), "wer_uncapped": _ratio(E, n), "cer_ns": _ratio(ce_cap, nc),
        "cer_ns_uncapped": _ratio(ce, nc),
        "cer": _ratio(sum(x.get("ces", 0) for x in xs), sum(x.get("ncs", 0) for x in xs)),
        "mer": _ratio(E, C + S + D + I),
        "sub": _ratio(S, n), "del": _ratio(D, n), "ins": _ratio(I, n),
        "n_words": round(n, 2), "n_chars": nc, "num_utterances": len(xs), "num_excluded": len(recs) - len(xs),
        "catastrophic_rate": _ratio(sum(1 for u in utt if u > 1), len(utt)),
        "p90_utt_wer": utt[min(len(utt) - 1, math.ceil(0.9 * len(utt)) - 1)] if utt else None,
    }
    if xs and "av_e" in xs[0]:
        k = len(xs[0]["av_e"])
        if all(len(x.get("av_e", ())) == k for x in xs):
            out["av_wer"] = sum(sum(x["av_e"][j] for x in xs) / sum(x["av_n"][j] for x in xs) for j in range(k)) / k
            out["num_references"] = k
    return out


def hallucination_stats(recs: Sequence[dict], duration_key: str = "duration") -> dict:
    """Loop, burst and length diagnostics on speech, from the headline alignment."""
    d = [r["diag"] for r in recs if "diag" in r]
    if not d:
        return {}
    speech = [(r["diag"], r) for r in recs if r.get("ref_norm")]
    n = len(speech) or 1

    def loop(x):
        return x["rep_hyp"] >= 4 and x["rep_hyp"] >= x["rep_ref"] + 2

    def burst(x, r):
        return x["ins_run"] >= (3 if len(r["ref_norm"].split()) <= 5 else 5)

    def long_out(x):
        return x["chars_hyp"] > 2 * x["chars_ref"] and x["chars_hyp"] - x["chars_ref"] >= 20

    def n_ref(r):
        return len(r["ref_norm"].split())

    return {
        "loop_rate": sum(loop(x) for x, _ in speech) / n,
        "burst_rate": sum(burst(x, r) for x, r in speech) / n,
        "long_output_rate": sum(long_out(x) for x, _ in speech) / n,
        "overgeneration_rate": sum(x["n_hyp"] > 2 * n_ref(r) + 5 for x, r in speech) / n,
        "collapse_rate": sum(n_ref(r) >= 5 and x["n_hyp"] < 0.2 * n_ref(r) for x, r in speech) / n,
        "trailing_insert_rate": sum(x["trail_ins"] >= 3 for x, _ in speech) / n,
        "empty_output_rate": sum(x["empty_hyp"] and not x["failed"] for x, _ in speech) / n,
        "failure_rate": sum(x["failed"] for x in d) / len(d),
        "invalid_output_rate": sum(x.get("invalid_chars", False) for x in d) / len(d),
        "wrong_script_rate": sum(x["lat_hyp"] - x["lat_ref"] > 0.5 for x, _ in speech) / n,
        "latin_share_ref": sum(x["lat_ref"] for x, _ in speech) / n,
        "latin_share_hyp": sum(x["lat_hyp"] for x, _ in speech) / n,
        **_codeswitch_and_markers([x for x, _ in speech]),
    }


def _codeswitch_and_markers(d: Sequence[dict]) -> dict:
    n_lat, e_lat = sum(x.get("n_lat", 0) for x in d), sum(x.get("e_lat", 0) for x in d)
    n_dm = sum(x.get("n_dm", 0) for x in d)
    out = {"latin_ref_words": n_lat, "wer_latin": _ratio(e_lat, n_lat), "dialect_markers": n_dm,
           "marker_retention": _ratio(sum(x.get("dm_kept", 0) for x in d), n_dm),
           "marker_msa_replacement": _ratio(sum(x.get("dm_msa", 0) for x in d), n_dm)}
    return out


def wilson(k: int, n: int, z: float = 1.96) -> list[float] | None:
    if not n:
        return None
    p = k / n
    den = 1 + z * z / n
    mid = (p + z * z / (2 * n)) / den
    half = z * math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / den
    return [round(max(0.0, mid - half), 5), round(min(1.0, mid + half), 5)]


def nonspeech_stats(recs: Sequence[dict], profile: str = HEADLINE) -> dict:
    """For clips with no target speech (empty reference): any output, >= 3 words, inserted words/min."""
    xs = [r for r in recs if not r.get("ref_norm")]
    if not xs:
        return {}
    words = [len(r.get("hyp_norm", "").split()) for r in xs]
    any_out, three = sum(w > 0 for w in words), sum(w >= 3 for w in words)
    minutes = sum(r.get("duration") or 0 for r in xs) / 60
    return {"num_clips": len(xs), "halluc_any": any_out / len(xs), "halluc_any_ci": wilson(any_out, len(xs)),
            "halluc_3plus": three / len(xs), "halluc_3plus_ci": wilson(three, len(xs)),
            "inserted_wpm": sum(words) / minutes if minutes else None,
            "loop_share": sum(r["diag"]["rep_hyp"] >= 4 for r in xs) / len(xs)}


@dataclass
class SetScore:
    utterances: list[dict]
    config: dict

    def summary(self) -> dict:
        profiles = list(self.utterances[0]["scores"]) if self.utterances else []
        out = {"config": self.config, "profiles": {p: aggregate(self.utterances, p) for p in profiles}}
        head = self.config.get("headline", HEADLINE)
        if head in out["profiles"]:
            out["headline"] = {"profile": head, **out["profiles"][head]}
        out["hallucination"] = hallucination_stats(self.utterances)
        ns = nonspeech_stats(self.utterances, head)
        if ns:
            out["nonspeech"] = ns
        groups: dict[str, list[dict]] = {}
        for u in self.utterances:
            if u.get("group") is not None:
                groups.setdefault(u["group"], []).append(u)
        if groups:  # e.g. an SNR sweep scored per (noise, SNR)
            out["groups"] = {g: {**aggregate(us, head), **({"nonspeech": nonspeech_stats(us, head)}
                                                         if any(not u.get("ref_norm") for u in us) else {})}
                             for g, us in sorted(groups.items())}
        return out
