"""Shared by the audits: one scoring profile's view of a text, normalized once and compared exactly as
`sttarena.scoring.Scorer` compares a single reference with a hypothesis (same normalizer, plain or
space-insensitive alignment, CER on the space-free canonical words)."""

from __future__ import annotations

from ..align import Tokens, align_tokens, char_errors, word_errors
from ..normalizers import get_normalizer, get_text_normalizer
from ..scoring import Profile


class _V1:
    """The v1 normalizer behind the v2 interface (the scorer's `v1` profile)."""

    def __init__(self, lang: str):
        self._norm = get_normalizer(lang)

    def tokens(self, text: str) -> list[str]:
        return self._norm(text or "").split()

    def canon(self, w: str) -> str:
        return w

    words = tokens


class ProfileView:
    """Normalization and single-reference error counts under one scoring profile (v1, L1, L2sp, ...)."""

    def __init__(self, profile: str, lang: str = "ar", markup=None, max_merge: int = 3):
        self.profile = Profile.named(profile)
        level = self.profile.level
        self.norm = _V1(lang) if level == "v1" else get_text_normalizer(lang, level, markup)
        self.max_merge = max_merge

    def prepare(self, text: str | None) -> Tokens:
        if self.profile.merge:
            return Tokens.from_normalizer(self.norm, text or "")
        return Tokens.plain(self.norm.words(text or ""))

    def errors(self, ref: Tokens, hyp: Tokens) -> int:
        """S + D + I of `hyp` against `ref`, with zero-cost merges for the space-insensitive profiles."""
        if self.profile.merge:
            return align_tokens(ref, hyp, self._key, merge=True, max_merge=self.max_merge).errors
        return word_errors(ref.words, hyp.words)

    @staticmethod
    def char_errors(ref: Tokens, hyp: Tokens) -> tuple[int, int]:
        """(character errors, reference characters), both without spaces."""
        r = "".join(ref.words)
        return char_errors(r, "".join(hyp.words)), len(r)

    def _key(self, s: str) -> str:
        return self.norm.canon(s).replace(" ", "")
