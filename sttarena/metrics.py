"""Corpus-level WER / CER.

Errors are summed over the whole test set and divided by the total number of reference
words (characters), i.e. long utterances weigh more than short ones. This is the standard
definition used by the Open ASR Leaderboard and Artificial Analysis, and it is not the same
as the mean of per-utterance WERs.
"""

from __future__ import annotations

from dataclasses import asdict, dataclass

import jiwer


@dataclass
class ErrorStats:
    wer: float
    cer: float
    substitutions: int
    deletions: int
    insertions: int
    ref_words: int
    ref_chars: int
    char_errors: int
    num_utterances: int
    num_empty_hyp: int

    def to_dict(self) -> dict:
        return asdict(self)


def utterance_wer(ref: str, hyp: str) -> float:
    if not ref:
        return 0.0 if not hyp else 1.0
    return jiwer.wer(ref, hyp if hyp else "")


def corpus_error_rates(refs: list[str], hyps: list[str]) -> ErrorStats:
    """refs/hyps must already be normalized. Pairs with an empty reference are dropped."""
    assert len(refs) == len(hyps)
    pairs = [(r, h) for r, h in zip(refs, hyps) if r.strip()]
    if not pairs:
        raise ValueError("No non-empty references to score")
    r, h = zip(*pairs)
    # jiwer rejects empty hypotheses inside a list; an empty string scores as all deletions
    # once we substitute a token that can never match.
    h = [x if x.strip() else "∅" for x in h]
    w = jiwer.process_words(list(r), list(h))
    c = jiwer.process_characters(list(r), list(h))
    ref_words = sum(len(x.split()) for x in r)
    ref_chars = sum(len(x) for x in r)
    char_errors = c.substitutions + c.deletions + c.insertions
    return ErrorStats(
        wer=w.wer,
        cer=c.cer,
        substitutions=w.substitutions,
        deletions=w.deletions,
        insertions=w.insertions,
        ref_words=ref_words,
        ref_chars=ref_chars,
        char_errors=char_errors,
        num_utterances=len(r),
        num_empty_hyp=sum(1 for x in h if x == "∅"),
    )
