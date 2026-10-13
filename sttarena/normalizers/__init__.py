from __future__ import annotations

import warnings
from typing import Callable

from .arabic import ArabicTextNormalizer


def get_normalizer(language: str) -> Callable[[str], str]:
    """Return the scoring normalizer for a language code ("ar", "en")."""
    if language == "ar":
        return ArabicTextNormalizer()
    if language == "en":
        with warnings.catch_warnings():
            warnings.simplefilter("ignore", SyntaxWarning)
            from whisper_normalizer.english import EnglishTextNormalizer
        return EnglishTextNormalizer()
    raise ValueError(f"No normalizer for language {language!r}")


__all__ = ["ArabicTextNormalizer", "get_normalizer"]
