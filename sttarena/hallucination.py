"""Bag of hallucinations: the canned phrases models emit on audio with no speech.

On non-speech audio, ASR decoders fall back on text they memorized: subtitle credits ("ترجمة
نانسي قنقر"), outros ("شكرا على المشاهدة", "اشتركوا في القناة"). Barański et al. (ICASSP 2025)
found that the ten most frequent phrases cover more than half of Whisper's outputs on 301k
non-speech clips. "Any output" saturates (10 of 19 ranked models produced words on 100 % of our
noise-only clips), so the bag separates a filler such as "اه" from a fabricated sentence.

The bag is mined from every model's normalized outputs on the noise-only set: a word n-gram
(2..6 words) enters it when it occurs on clips of at least `min_models` different models and on at
least `min_clips` clips overall, so a phrase one model likes is not blamed on the others.
"""

from __future__ import annotations

from collections import Counter, defaultdict
from typing import Iterable, Mapping


def _ngrams(words: list[str], lo: int, hi: int) -> set[tuple[str, ...]]:
    return {tuple(words[i:i + n]) for n in range(lo, hi + 1) for i in range(len(words) - n + 1)}


def mine_bag(outputs: Mapping[str, Iterable[str]], min_models: int = 2, min_clips: int = 5,
             lo: int = 2, hi: int = 6) -> list[tuple[str, int, int]]:
    """outputs: model -> normalized outputs on non-speech clips. Returns (phrase, clips, models), most
    frequent first, keeping only maximal phrases (an n-gram inside a kept longer one with the same
    clip count is dropped)."""
    clips: Counter = Counter()
    models: dict[tuple[str, ...], set[str]] = defaultdict(set)
    for model, outs in outputs.items():
        for text in outs:
            for g in _ngrams(text.split(), lo, hi):
                clips[g] += 1
                models[g].add(model)
    keep = {g: c for g, c in clips.items() if c >= min_clips and len(models[g]) >= min_models}
    maximal = []
    for g, c in sorted(keep.items(), key=lambda kv: (-len(kv[0]), -kv[1])):
        if any(c == keep[k] and _contains(k, g) for k, _, _ in maximal):
            continue
        maximal.append((g, c, len(models[g])))
    maximal.sort(key=lambda t: (-t[1], -len(t[0])))
    return [(" ".join(g), c, m) for g, c, m in maximal]


def _has(words: tuple[str, ...], phrase: tuple[str, ...]) -> bool:
    n = len(phrase)
    return any(words[i:i + n] == phrase for i in range(len(words) - n + 1))


def _contains(big: tuple[str, ...], small: tuple[str, ...]) -> bool:
    return len(big) > len(small) and _has(big, small)


def bag_share(outputs: Iterable[str], bag: Iterable[str]) -> float | None:
    """Share of clips whose output contains a phrase of the bag."""
    phrases = [tuple(p.split()) for p in bag]
    outs = [tuple(o.split()) for o in outputs]
    if not outs:
        return None
    return sum(any(_has(w, p) for p in phrases) for w in outs) / len(outs)
