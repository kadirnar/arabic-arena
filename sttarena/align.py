"""Word alignment for scoring: plain Levenshtein, space-insensitive merges, optional words, and
multi-reference confusion networks.

Every metric in the library is computed from per-utterance alignments, so this module is the
one place where "what counts as an error" is decided.

* **Plain** alignment (unit costs) runs on canonical words through rapidfuzz (C++).
* **Space-insensitive** alignment adds zero-cost k:1 and 1:k transitions (k = 2, 3 surface
  tokens) when the concatenation of adjacent tokens on one side, canonicalized, equals the token on
  the other side: "ما فيش" = "مفيش", "يا ريت" = "ياريت", "قال لي" = "قالي" (de-gemination at the
  junction), "بالنسبة لي" = "بالنسبالي" (ه+ل -> ال). Concatenations are built from *surface*
  tokens and then canonicalized: "ف انا" must be compared as "فانا", not "فيانا". A merged block
  counts as correct words; the denominator stays the number of reference words.
* **Optional** reference words (fillers, fragments) cost nothing to delete and count as correct when
  matched; they are not counted in the denominator (sclite's "(word)" convention).
* **Multi-reference**: several references are progressively aligned into a confusion network of
  slots (word sets, "" = some reference omitted the word). A hypothesis word is free if it is in its
  slot; skipping a slot is free if the slot contains "". The best pivot is used, and the
  denominator is the mean reference length so it is the same for every system (Ali et al. 2015
  MR-WER with a fixed denominator).
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Callable, Sequence

from rapidfuzz.distance import Levenshtein

# op codes: C correct, S substitution, D deletion, I insertion, M merge/split match (correct),
# d / i free deletion of an optional reference word / free insertion
Op = tuple[str, tuple[str, ...], tuple[str, ...]]


@dataclass(slots=True)
class Alignment:
    ops: list[Op] = field(default_factory=list)
    n_ref: float = 0.0  # reference words that count (mean length for multi-reference)

    def counts(self) -> dict[str, int]:
        c = {"C": 0, "S": 0, "D": 0, "I": 0, "M": 0, "d": 0, "i": 0}
        for op, r, h in self.ops:
            if op == "M":
                c["M"] += 1
                c["C"] += len(r)  # a merged block is len(r) correct reference words
            else:
                c[op] += 1
        return c

    @property
    def errors(self) -> int:
        return sum(1 for op, _, _ in self.ops if op in "SDI")


# --- plain ------------------------------------------------------------------------------------
def align_plain(ref: Sequence[str], hyp: Sequence[str]) -> Alignment:
    """Unit-cost Levenshtein alignment of two token lists (rapidfuzz)."""
    ops: list[Op] = []
    for tag, i1, i2, j1, j2 in Levenshtein.opcodes(list(ref), list(hyp)):
        if tag == "equal":
            ops += [("C", (ref[i1 + k],), (hyp[j1 + k],)) for k in range(i2 - i1)]
        elif tag == "replace":
            n = min(i2 - i1, j2 - j1)
            ops += [("S", (ref[i1 + k],), (hyp[j1 + k],)) for k in range(n)]
            ops += [("D", (ref[i1 + k],), ()) for k in range(n, i2 - i1)]
            ops += [("I", (), (hyp[j1 + k],)) for k in range(n, j2 - j1)]
        elif tag == "delete":
            ops += [("D", (ref[i1 + k],), ()) for k in range(i2 - i1)]
        else:
            ops += [("I", (), (hyp[j1 + k],)) for k in range(j2 - j1)]
    return Alignment(ops, float(len(ref)))


def word_errors(ref: Sequence[str], hyp: Sequence[str]) -> int:
    return Levenshtein.distance(list(ref), list(hyp))


# --- space-insensitive / optional words --------------------------------------------------------
def junction_variants(tokens: Sequence[str]) -> set[str]:
    """Concatenations of adjacent tokens: plain, de-geminated at the junction (قال+لي -> قالي) and
    with ه before ل turned into ا (بالنسبه+لي -> بالنسبالي)."""
    out = {"".join(tokens)}
    if len(tokens) == 2:
        a, b = tokens
        if a and b and a[-1] == b[0]:
            out.add(a + b[1:])
        if a.endswith("ه") and b.startswith("ل"):
            out.add(a[:-1] + "ا" + b)
    return out


@dataclass(slots=True)
class Tokens:
    """One side of an utterance: canonical words plus where they came from.

    words[k] is the k-th canonical word; src[k] the index of the surface token that produced it.
    surface[t] is surface token t. optional[k] marks free-deletion reference words.
    """

    words: list[str]
    src: list[int]
    surface: list[str]
    optional: list[bool] | None = None

    @classmethod
    def plain(cls, words: Sequence[str]) -> "Tokens":
        return cls(list(words), list(range(len(words))), list(words))

    @classmethod
    def from_normalizer(cls, norm, text: str) -> "Tokens":
        words, src = [], []
        surface = norm.tokens(text)
        for t, tok in enumerate(surface):
            for w in norm.canon(tok).split():
                words.append(w)
                src.append(t)
        return cls(words, src, surface)


def _merge_spans(side: Tokens, key_of: Callable[[str], str], max_merge: int) -> list[list[tuple[int, set[str]]]]:
    """For each word index i that starts a surface token: [(end word index, join keys)] for spans of
    1..max_merge whole surface tokens that cover at least two canonical words (one surface token can
    expand to several words, e.g. حداشر -> احد عشر)."""
    n = len(side.words)
    starts = [i for i in range(n) if i == 0 or side.src[i] != side.src[i - 1]]
    ends_after: dict[int, int] = {}  # surface token -> index after its last word
    for i in range(n):
        ends_after[side.src[i]] = i + 1
    spans: list[list[tuple[int, set[str]]]] = [[] for _ in range(n + 1)]
    for i in starts:
        t0 = side.src[i]
        for k in range(1, max_merge + 1):
            tk = t0 + k - 1
            if tk not in ends_after:
                break
            end = ends_after[tk]
            if end - i < 2:
                continue
            toks = side.surface[t0:tk + 1]
            spans[i].append((end, {key_of(v) for v in junction_variants(toks)}))
    return spans


_DP_CELLS = 250_000  # above this many cells (e.g. 500 x 500 words), anchor on long exact matches first


def _starts(side: Tokens) -> set[int]:
    """Word indices at which a surface token starts (plus the end), the only safe cut points."""
    return {i for i in range(len(side.words)) if i == 0 or side.src[i] != side.src[i - 1]} | {len(side.words)}


def _slice(side: Tokens, i0: int, i1: int) -> Tokens:
    t0 = side.src[i0] if i0 < len(side.words) else len(side.surface)
    t1 = side.src[i1 - 1] + 1 if i1 > i0 else t0
    opt = side.optional[i0:i1] if side.optional else None
    return Tokens(side.words[i0:i1], [s - t0 for s in side.src[i0:i1]], side.surface[t0:t1], opt)


def _align_anchored(ref: Tokens, hyp: Tokens, key_of, max_merge: int, anchor: int = 8) -> Alignment:
    """Long-form speed-up: keep the interior of every run of >= `anchor` identical words of the plain
    alignment as correct, and run the merge DP only on the gaps between those anchors. Each kept run gives
    `max_merge` words of context back to its neighbouring gaps, so a merge touching an anchor is still found."""
    rs, hs = _starts(ref), _starts(hyp)
    cuts = []  # (ref start, hyp start, ref end, hyp end) of the kept part of each anchor
    for tag, i1, i2, j1, j2 in Levenshtein.opcodes(ref.words, hyp.words):
        if tag != "equal" or i2 - i1 < anchor:
            continue
        a, b = i1 + max_merge, i2 - max_merge
        while a < b and not (a in rs and a - i1 + j1 in hs):
            a += 1
        while b > a and not (b in rs and b - i1 + j1 in hs):
            b -= 1
        if b - a >= 1:
            cuts.append((a, a - i1 + j1, b, b - i1 + j1))
    ops: list[Op] = []
    pi = pj = 0
    for a, aj, b, bj in [*cuts, (len(ref.words), len(hyp.words), None, None)]:
        gap = align_tokens(_slice(ref, pi, a), _slice(hyp, pj, aj), key_of, merge=True, max_merge=max_merge)
        ops += gap.ops
        if b is None:
            break
        ops += [("C", (ref.words[k],), (hyp.words[k - a + aj],)) for k in range(a, b)]
        pi, pj = b, bj
    n_ref = sum(1 for o in (ref.optional or [False] * len(ref.words)) if not o)
    return Alignment(ops, float(n_ref))


def align_tokens(ref: Tokens, hyp: Tokens, key_of: Callable[[str], str] | None = None, merge: bool = True,
                 max_merge: int = 3) -> Alignment:
    """Levenshtein alignment over canonical words with zero-cost space-insensitive merges.

    key_of(surface concatenation) -> comparable key (canonical form without spaces); defaults to the
    identity. Ties prefer match/substitution, then deletion, then insertion, then merges. Very long pairs
    (long-form) are split on long exact matches first (_align_anchored).
    """
    R, H = ref.words, hyp.words
    n, m = len(R), len(H)
    if merge and n * m > _DP_CELLS:
        return _align_anchored(ref, hyp, key_of, max_merge)
    opt = ref.optional or [False] * n
    if key_of is None:
        def key_of(s: str) -> str:
            return s
    rspans = _merge_spans(ref, key_of, max_merge) if merge else [[] for _ in range(n + 1)]
    hspans = _merge_spans(hyp, key_of, max_merge) if merge else [[] for _ in range(m + 1)]
    INF = 1 << 30
    D = [[INF] * (m + 1) for _ in range(n + 1)]
    B: list[list[tuple | None]] = [[None] * (m + 1) for _ in range(n + 1)]
    D[0][0] = 0
    # forward pass with "push" transitions so merges can jump several cells ahead
    for i in range(n + 1):
        Di, Bi = D[i], B[i]
        for j in range(m + 1):
            c = Di[j]
            if c >= INF:
                continue
            if i < n and j < m:
                cc = c + (0 if R[i] == H[j] else 1)
                if cc < D[i + 1][j + 1]:
                    D[i + 1][j + 1], B[i + 1][j + 1] = cc, ("CS", i, j)
            if i < n:
                cc = c + (0 if opt[i] else 1)
                if cc < D[i + 1][j]:
                    D[i + 1][j], B[i + 1][j] = cc, ("D", i, j)
            if j < m:
                cc = c + 1
                if cc < Di[j + 1]:
                    Di[j + 1], Bi[j + 1] = cc, ("I", i, j)
            if merge:
                if j < m:
                    for e, keys in rspans[i]:  # k ref tokens == 1 hyp word
                        if H[j] in keys and c < D[e][j + 1]:
                            D[e][j + 1], B[e][j + 1] = c, ("M", i, j)
                if i < n:
                    for e, keys in hspans[j]:  # 1 ref word == k hyp tokens
                        if R[i] in keys and c < D[i + 1][e]:
                            D[i + 1][e], B[i + 1][e] = c, ("M", i, j)
    ops: list[Op] = []
    i, j = n, m
    while i or j:
        kind, pi, pj = B[i][j]
        r, h = tuple(R[pi:i]), tuple(H[pj:j])
        if kind == "CS":
            kind = "C" if r[0] == h[0] else "S"
        elif kind == "D" and opt[pi]:
            kind = "d"
        ops.append((kind, r, h))
        i, j = pi, pj
    ops.reverse()
    return Alignment(ops, float(sum(1 for o in opt if not o)))


# --- multi-reference ---------------------------------------------------------------------------
EPS = ""


def confusion_network(refs: Sequence[Sequence[str]]) -> list[set[str]]:
    """Progressively align refs[1:] onto refs[0]; returns slots (word sets, EPS = omitted)."""
    pivot = list(refs[0])
    slots: list[tuple[set[str], list[list[str]]]] = [({w}, []) for w in pivot]  # (slot, insertions before it)
    tail: list[list[str]] = []
    for r in refs[1:]:
        k, pending = 0, []
        for op, a, b in align_plain(pivot, r).ops:
            if op in ("C", "S"):
                if pending:
                    (slots[k][1] if k < len(slots) else tail).append(pending)
                    pending = []
                slots[k][0].add(b[0])
                k += 1
            elif op == "D":
                if pending:
                    (slots[k][1] if k < len(slots) else tail).append(pending)
                    pending = []
                slots[k][0].add(EPS)
                k += 1
            else:
                pending = pending + [b[0]]
        if pending:
            tail.append(pending)
    net: list[set[str]] = []
    for slot, inserted in slots + [(None, tail)]:
        for seq in inserted:
            net.extend({w, EPS} for w in seq)
        if slot is not None:
            net.append(slot)
    return net


def align_network(net: Sequence[set[str]], hyp: Sequence[str]) -> list[Op]:
    """DP of a hypothesis against a confusion network; returns ops (C/S/D/I, d = free slot skip)."""
    n, m = len(net), len(hyp)
    INF = 1 << 30
    D = [[INF] * (m + 1) for _ in range(n + 1)]
    B: list[list[str | None]] = [[None] * (m + 1) for _ in range(n + 1)]
    D[0][0] = 0
    for i in range(n + 1):
        for j in range(m + 1):
            if not i and not j:
                continue
            best, bp = INF, None
            if i and j:
                c = D[i - 1][j - 1] + (0 if hyp[j - 1] in net[i - 1] else 1)
                if c < best:
                    best, bp = c, "CS"
            if i:
                c = D[i - 1][j] + (0 if EPS in net[i - 1] else 1)
                if c < best:
                    best, bp = c, "D"
            if j:
                c = D[i][j - 1] + 1
                if c < best:
                    best, bp = c, "I"
            D[i][j], B[i][j] = best, bp
    ops: list[Op] = []
    i, j = n, m
    while i or j:
        bp = B[i][j]
        slot = tuple(sorted(w for w in net[i - 1] if w)) if i else ()
        if bp == "CS":
            ops.append(("C" if hyp[j - 1] in net[i - 1] else "S", slot, (hyp[j - 1],)))
            i, j = i - 1, j - 1
        elif bp == "D":
            ops.append(("d" if EPS in net[i - 1] else "D", slot, ()))
            i -= 1
        else:
            ops.append(("I", (), (hyp[j - 1],)))
            j -= 1
    ops.reverse()
    return ops


def align_multi(refs: Sequence[Sequence[str]], hyp: Sequence[str]) -> Alignment:
    """Multi-reference alignment: best pivot over the confusion networks of the non-empty refs."""
    refs = [list(r) for r in refs if r]
    if not refs:
        return Alignment([("I", (), (w,)) for w in hyp], 0.0)
    if len(refs) == 1:
        return align_plain(refs[0], hyp)
    best = None
    for p in range(len(refs)):
        ops = align_network(confusion_network([refs[p], *refs[:p], *refs[p + 1:]]), hyp)
        e = sum(1 for op, _, _ in ops if op in "SDI")
        if best is None or e < best[0]:
            best = (e, ops)
    return Alignment(best[1], sum(len(r) for r in refs) / len(refs))


# --- characters ----------------------------------------------------------------------------------
def char_errors(ref: str, hyp: str) -> int:
    return Levenshtein.distance(ref, hyp)


def sa_counts(ref_words: Sequence[str], hyp_words: Sequence[str]) -> tuple[int, int]:
    """Segmentation-agnostic word errors: align the space-free character strings, keeping each
    character's word index. A reference word is correct iff all its characters are aligned 'equal'
    and nothing is inserted inside it; a hypothesis word with no aligned character is an insertion.
    Returns (wrong reference words, inserted hypothesis words)."""
    def chars(words):
        s, owner = [], []
        for k, w in enumerate(words):
            s.extend(w)
            owner.extend([k] * len(w))
        return "".join(s), owner

    r, ro = chars(ref_words)
    h, ho = chars(hyp_words)
    ops = Levenshtein.opcodes(r, h)
    hyp_matched: set[int] = set()
    for tag, i1, i2, j1, j2 in ops:
        if tag in ("equal", "replace"):
            hyp_matched.update(ho[j1:j2])
    bad: set[int] = set()
    for tag, i1, i2, j1, j2 in ops:
        if tag in ("replace", "delete"):
            bad.update(ro[i1:i2])
        elif tag == "insert":
            left = ro[i1 - 1] if i1 > 0 else None
            right = ro[i1] if i1 < len(ro) else None
            if left is not None and left == right:
                bad.add(left)
            elif any(k in hyp_matched for k in ho[j1:j2]):
                bad.add(left if left is not None else right)
    inserted = sum(1 for k in range(len(hyp_words)) if k not in hyp_matched)
    return len(bad), inserted
