"""Collision audit of the L2 spelling folds: the variant table, the dialect number words and the seven rules.

A fold that maps two different words to one form hides a real recognition error, so every merge of
two frequent vocabulary types has to be one we meant (research 02 §2.7, CI checks 1 and 2). On the
union vocabulary of all reference sets (42,404 L1m types, 418,453 tokens) the research audit found
the largest merges intended (future_h: هيبقي/حيبقي, هيكون/حيكون; ba_alef: بقول/باقول) and the
unintended ones rare (هاويه/هويه); this module re-runs that audit whenever the table or a rule changes.

* `fold_stats`: for one fold, the types and tokens it changes and the groups of distinct types it
  maps to one form (the research's rule_collisions.json; `audit_variants` gives it for each rule
  alone, the table, the number words and the full L2 folder).
* `unintended_merges`: pairs of types folded together by the L2 folder, both seen at least
  `min_count` times, where a step on the way is neither a table entry nor an allow-listed rule
  (and the pair is not in a reviewed list).
* `idempotence_failures`: types for which norm(norm(w)) != norm(w).

The vocabulary is of L1m surface tokens (`build_vocab`), the input of the L2 folds. Multi-word table
keys (ان شا الله) act on running text and are outside a single-token audit.
"""

from __future__ import annotations

from collections import Counter, defaultdict
from itertools import combinations
from typing import Callable, Iterable, Mapping

from ..normalizers import get_text_normalizer
from ..normalizers.variants import RULES, VariantFolder


def build_vocab(texts: Iterable[str], *, level: str = "L1m", lang: str = "ar", markup=None) -> Counter:
    """Token counts of reference texts at a normalization level (surface tokens, before any fold)."""
    norm = get_text_normalizer(lang, level, markup)
    return Counter(w for t in texts for w in norm.tokens(t))


def fold_stats(vocab: Mapping[str, int], fold: Callable[[str], str]) -> dict[str, int]:
    """types/tokens a fold changes, and its merge groups: folded forms shared by two or more types."""
    groups: dict[str, list[str]] = defaultdict(list)
    changed = []
    for w in vocab:
        v = fold(w)
        groups[v].append(w)
        if v != w:
            changed.append(w)
    merged = [g for g in groups.values() if len(g) > 1]
    return {"types_changed": len(changed), "tokens_changed": sum(vocab[w] for w in changed),
            "merge_groups": len(merged), "tokens_in_merges": sum(vocab[w] for g in merged for w in g)}


def _trace(folder: VariantFolder, w: str) -> tuple[str, frozenset[str]]:
    """The folded form of w and the steps that made it ("table" or rule names), as VariantFolder.__call__."""
    table = folder.table
    if w in table:
        return table[w], frozenset({"table"})
    steps = set()
    for rule in folder.rules:
        v = rule.apply(w)
        if v != w:
            steps.add(rule.name)
            w = v
    if w in table:
        return table[w], frozenset(steps | {"table"})
    if len(w) > 4 and w[0] in "وفب" and w[1:] in table:
        return w[0] + table[w[1:]], frozenset(steps | {"table"})
    return w, frozenset(steps)


def unintended_merges(vocab: Mapping[str, int], *, min_count: int = 5, allow_rules: Iterable[str] = (),
                      allow_pairs: Iterable[tuple[str, str]] = (),
                      folder: VariantFolder | None = None) -> list[dict]:
    """Merges of two frequent types that no table entry, allow-listed rule or reviewed pair accounts for.

    Every type is folded with `folder` (default: the L2 folder) and traced: a merge is intended when
    every step on both types' paths is a table entry or a rule in `allow_rules`, or when the pair is in
    `allow_pairs`. Sorted by the rarer type's count, most frequent first.
    """
    unknown = sorted(set(allow_rules) - set(RULES))
    if unknown:
        raise ValueError(f"unknown rules {unknown}; known: {', '.join(RULES)}")
    folder = folder or VariantFolder()
    intended = {"table", *allow_rules}
    reviewed = {frozenset(p) for p in allow_pairs}
    groups: dict[str, list[str]] = defaultdict(list)
    via: dict[str, frozenset[str]] = {}
    for w, c in vocab.items():
        if c < min_count:
            continue
        canon, via[w] = _trace(folder, w)
        if canon != folder(w):  # the folder changed and the trace no longer explains it: never intended
            canon, via[w] = folder(w), frozenset({"untraced"})
        groups[canon].append(w)
    out = []
    for canon, ws in groups.items():
        for a, b in combinations(sorted(ws, key=lambda w: (-vocab[w], w)), 2):
            bad = (via[a] | via[b]) - intended
            if bad and frozenset((a, b)) not in reviewed:
                out.append({"types": [a, b], "counts": [vocab[a], vocab[b]], "canonical": canon,
                            "via": {a: sorted(via[a]), b: sorted(via[b])}, "unintended": sorted(bad)})
    return sorted(out, key=lambda m: (-min(m["counts"]), m["types"]))


def idempotence_failures(vocab: Mapping[str, int], *, normalizer: Callable[[str], str] | None = None,
                         level: str = "L2", lang: str = "ar", markup=None) -> list[dict]:
    """Types whose normalized form changes when normalized again (default: the L2 normalizer)."""
    norm = normalizer or get_text_normalizer(lang, level, markup)
    out = []
    for w, c in vocab.items():
        once = norm(w)
        twice = norm(once)
        if twice != once:
            out.append({"type": w, "count": c, "once": once, "twice": twice})
    return sorted(out, key=lambda f: -f["count"])


def audit_variants(vocab: Mapping[str, int], *, min_count: int = 5, allow_rules: Iterable[str] = (),
                   allow_pairs: Iterable[tuple[str, str]] = (), level: str = "L2") -> dict:
    """The full audit: per-fold statistics, unintended merges and idempotence failures."""
    folds: dict[str, Callable[[str], str]] = {name: rule.apply for name, rule in RULES.items()}
    folds["table"] = VariantFolder((), table=True, numbers=False)
    folds["numbers"] = VariantFolder((), table=False, numbers=True)
    folds["all"] = VariantFolder()
    return {"vocab": {"types": len(vocab), "tokens": sum(vocab.values())},
            "folds": {name: fold_stats(vocab, f) for name, f in folds.items()},
            "unintended": unintended_merges(vocab, min_count=min_count, allow_rules=allow_rules,
                                            allow_pairs=allow_pairs, folder=folds["all"]),
            "idempotence_failures": idempotence_failures(vocab, level=level)}
