"""Arabic text normalization for WER/CER scoring.

Arabic transcripts in public corpora are inconsistent: some carry full diacritics (tashkeel),
some use different hamza/alef spellings, Eastern-Arabic digits, tatweel, Quranic marks and
Arabic punctuation. Without normalization, WER mostly measures orthographic conventions
instead of recognition quality. The rules below are applied identically to references and
hypotheses and follow common practice in Arabic ASR evaluation (MGB, Open Universal Arabic
ASR Leaderboard):

1. Unicode NFKC (folds presentation forms such as U+FEFB to base letters)
2. Remove diacritics (fatha, damma, kasra, tanwin, shadda, sukun, superscript alef, ...)
3. Remove tatweel (kashida) and Quranic annotation marks
4. Unify alef variants  أ إ آ ٱ  -> ا
5. Hamza carriers  ؤ -> و , ئ -> ي ; bare hamza ء dropped ; پ -> ب , ڤ -> ف
   (identical to the Open Universal Arabic ASR Leaderboard normalizer)
6. Alef maqsura  ى -> ي ; ta marbuta  ة -> ه  (stricter than that leaderboard: these are
   spelled inconsistently in dialectal transcripts and carry almost no recognition signal)
7. Eastern-Arabic / Persian digits -> ASCII digits
8. Drop punctuation and symbols (Arabic and Latin), lowercase Latin (code-switching)
9. Attach a standalone conjunction و to the following word ("و ذهب" -> "وذهب")
10. Collapse whitespace
"""

from __future__ import annotations

import unicodedata

import regex as re

_DIACRITICS = re.compile(r"[ؐ-ًؚ-ٰٟۖ-ۭ࣓-ࣿ]")
_TATWEEL = "ـ"
_ALEF = re.compile(r"[آأإٱٲٳ]")
_DIGITS = str.maketrans("٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷۸۹", "01234567890123456789")
# Every Unicode punctuation / symbol char becomes a space (covers ، ؛ ؟ « » etc.)
_PUNCT = re.compile(r"[\p{P}\p{S}]")
# Bracketed annotations frequently found in corpora: [laughter], <noise>, (inaudible)
_TAGS = re.compile(r"\[[^\]]*\]|<[^>]*>|\{[^}]*\}")
_SPACES = re.compile(r"\s+")
_LETTERS = str.maketrans({"\u0624": "\u0648", "\u0626": "\u064A", "\u0621": None, "\u067E": "\u0628", "\u06A4": "\u0641"})
_WAW = re.compile(r"(?:^|(?<=\s))\u0648\s+(?=\S)")


class ArabicTextNormalizer:
    def __init__(self, normalize_ta_marbuta: bool = True, normalize_alef_maqsura: bool = True):
        self.normalize_ta_marbuta = normalize_ta_marbuta
        self.normalize_alef_maqsura = normalize_alef_maqsura

    def __call__(self, text: str) -> str:
        if not text:
            return ""
        text = unicodedata.normalize("NFKC", text)
        text = _TAGS.sub(" ", text)
        text = _DIACRITICS.sub("", text)
        text = text.replace(_TATWEEL, "")
        text = _ALEF.sub("ا", text)
        text = text.translate(_LETTERS)
        if self.normalize_alef_maqsura:
            text = text.replace("ى", "ي")
        if self.normalize_ta_marbuta:
            text = text.replace("ة", "ه")
        text = text.translate(_DIGITS)
        text = _PUNCT.sub(" ", text)
        text = _SPACES.sub(" ", text.lower()).strip()
        return _WAW.sub("\u0648", text)
