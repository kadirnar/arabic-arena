"""Error taxonomy (the "error budget"): which of a model's word errors are recognition errors.

A WER is a sum of very different things. On the six re-hosted clean sets, research 09 attributed every
word error of three models (90,626 errors; 156 utterance x model items checked by hand) and found that
only 47 % of Cohere-ar's errors are genuine recognition errors: 29 % are scoring artefacts (spelling,
spacing, dialect spelling, numbers, script, fillers), 13 % are consensus disagreements with the
reference, 9 % are hallucination or truncation. On Mixat it is 39 % genuine; Whisper-v3 loses 25 % of
its clean-set errors to loops and canned phrases, and once those are set aside it ranks above
Qwen3-1.7B (P = 1.0 over 15 sets). This module reproduces that attribution for any saved predictions.

Every error is put in exactly one of ten categories, and the category counts of a set sum *exactly* to
its corpus error count (S + D + I) under the v1 normalizer:

====  ===============  =========================================================================  ====  ====
code  name             definition                                                                 P %   R %
====  ===============  =========================================================================  ====  ====
a     orthographic     spelling only: hamza seat, tanween alef, silent alef after plural waw,      100    68
                       dagger alef, Persian letters, elongation, loanword spellings
b     split_merge      same letters, other word boundaries: ما راح/مراح, قال لي/قالي, الحمد لله     95    95
c     dialect_variant  the same word in a dialect spelling: اللي/الي, هذي/هذه, كده/كذا, يالسه/جالسه  100    80
d     number           the same number written differently, or number words where the text had    100   100
                       digits (verbalization is a guess)
e     script           a code-switched word in Latin vs Arabic script: okay/اوكي, ال laptop         95    86
f     filler           a hesitation, laughter, يعني or an immediate repetition dropped or added    100    83
g     consensus        every panel model makes the same error here: the reference is likely wrong  100    75
h     msa_translation  a dialect word replaced by its MSA equivalent, or speech translated         100    73
i     hallucination    a loop, a canned phrase, empty output, truncation or most words omitted     100    81
j     genuine          everything else: a recognition error                                         87   100
====  ===============  =========================================================================  ====  ====

P and R are the precision and recall of the automatic label against the manual review of research 09
(698 errors); misses fall into j, so the a-i shares are lower bounds.

How it works
------------
1. Both texts are normalized with the scorer's ``v1`` profile (the v1 arena normalizer, first reference
   only): the categories are defined against what that normalizer does *not* fold, which is where the
   heuristics were validated. The baseline error count of an utterance is the plain Levenshtein
   distance, i.e. ``scores["v1"]`` S + D + I of a v2 record. Pass ``normalizer=`` to work at another
   level (the totals then sum to that level's plain error count).
2. A relaxed alignment runs on the error regions of the plain alignment (+3 anchor words). Besides
   exact matches it may use zero-cost operations tagged a-f: 1:1 folds (an orthographic fold with 46
   table pairs, a dialect table of 127 pairs plus suffix ـو/ـه, future حـ/هـ and prothetic-alef rules,
   number values, Latin/Arabic consonant skeletons), k:l merges with equal letters or one attested junction
   contraction, and free deletion/insertion of fillers and repeated words whose other copy is present.
3. a-f are counted by a cascade: the residual error count with a, a+b, ..., a..f enabled; each step's
   decrease is that category's share, split over its operations. The residual operations are then
   labeled in this order: i (phrase hallucination, empty output, loop insertions, truncation or
   omission deletions), d (number words when digits were present), h (the model answers in English,
   translates a code-switched segment, or replaces a dialect word by an MSA one from a lexicon), g
   (every peer model has the same operation at the same reference position; on a degraded copy it must
   also be a consensus error on the clean audio, because a channel makes all models mishear alike),
   and j (sub-kinds: cs code-switch, affix = same stem with a clitic or suffix more or less).
4. Truncations and empty outputs on which all peers agree are g, not i: the reference covers speech
   that is not in the clip.

A loop or a phrase hallucination can cost more errors than the utterance has words, so a few clips can
dominate a set: ``worst5_share`` reports the share of errors in the worst 5 % of utterances.

API: ``attribute(records, others, clean=..., clean_others=...)`` for one model, ``attribute_models`` for
every model of a set (each model's peers are the other panel models), ``pool`` to add sets, ``main(argv)``
for ``sttarena audit taxonomy``.
"""

from __future__ import annotations

import argparse
import json
import sys
from collections import Counter, defaultdict
from collections.abc import Callable, Iterable, Mapping, Sequence
from concurrent.futures import ProcessPoolExecutor
from dataclasses import dataclass, field
from functools import lru_cache
from pathlib import Path

import regex as re
from rapidfuzz.distance import Levenshtein

from .normalizers.arabic import ArabicTextNormalizer

TAXONOMY_VERSION = "1.0"


@dataclass(frozen=True)
class Category:
    code: str
    name: str
    definition: str
    precision: float  # of the automatic label against the research-09 manual review (%)
    recall: float


CATEGORIES: tuple[Category, ...] = (
    Category("a", "orthographic", "Spelling-only difference the v1 normalizer leaves: hamza seat, tanween "
             "alef, silent alef after plural waw, dagger alef, Persian letters, elongation, loanword "
             "spellings.", 100, 68),
    Category("b", "split_merge", "Same letters, different word boundaries (clitics and contractions: "
             "ما راح/مراح, قال لي/قالي, الحمد لله/الحمدلله).", 95, 95),
    Category("c", "dialect_variant", "The same word in another dialect or pronunciation spelling "
             "(اللي/الي, هذي/هذه, كده/كذا, يالسه/جالسه).", 100, 80),
    Category("d", "number", "The same number written differently, or number words where the text had digits.",
             100, 100),
    Category("e", "script", "A code-switched word in Latin vs Arabic script (okay/اوكي, ال laptop/اللابتوب).",
             95, 86),
    Category("f", "filler", "A hesitation, laughter, discourse filler or immediate repetition dropped or "
             "added.", 100, 83),
    Category("g", "consensus", "Every panel model makes the same error here: the reference is likely wrong "
             "(on degraded audio only if it is also a consensus error on clean audio).", 100, 75),
    Category("h", "msa_translation", "A dialect word replaced by its MSA equivalent, or speech translated "
             "(an English segment into Arabic, or an answer in English).", 100, 73),
    Category("i", "hallucination", "Repetition loop, canned phrase, empty output, truncation, or most of the "
             "utterance omitted.", 100, 81),
    Category("j", "genuine", "Everything else: a recognition error.", 87, 100),
)
CODES = tuple(c.code for c in CATEGORIES)
NAMES = {c.code: c.name for c in CATEGORIES}
SPURIOUS = ("a", "b", "c", "d", "e", "f")
_FREE = SPURIOUS
_RESIDUAL_KINDS = ("sub", "del", "ins")

# ------------------------------------------------------------------------------------------------
# token classes
# ------------------------------------------------------------------------------------------------
_LAT = re.compile(r"[a-z]")


def is_latin(t: str) -> bool:
    return bool(_LAT.search(t))


# hesitations and interjections in v1 spelling; not ام (أم "mother"/"or") nor اخ (أخ "brother")
HESITATIONS = frozenset({
    "اه", "ااه", "اهه", "امم", "مم", "ا", "اا", "اوه", "همم", "اح", "يي", "اوو", "ايي", "اييه",
    "uh", "um", "umm", "hmm", "hm", "mm", "ah", "oh", "eh", "er", "erm", "uhm",
})
_LAUGH = re.compile(r"^(?:ه{2,}|(?:ها){2,}ه?|(?:هه)+ا?|ha(?:ha)+|h[ae]h[ae]+)$")
# discourse fillers whose transcription is an annotation-policy choice; not اي (أي "any" after v1)
DISCOURSE = frozenset({"يعني", "ها", "هاه", "اها"})


def is_filler(t: str) -> bool:
    return t in HESITATIONS or t in DISCOURSE or bool(_LAUGH.match(t))


def _filler_kind(tokens: Sequence[str]) -> str:
    if all(_LAUGH.match(t) for t in tokens):
        return "laugh"
    if all(t in HESITATIONS for t in tokens):
        return "hes"
    if all(t in DISCOURSE for t in tokens):
        return "disc"
    return "rep"


# ------------------------------------------------------------------------------------------------
# variant table: a = spelling-only, c = same word in a dialect spelling, h = MSA equivalent (not
# folded). Curated in research 09 from residual substitution pairs of three models on six sets (each
# pair seen in >= 3 utterances or confirmed in the manual review). Pairs are "canonical variant" in v1
# spelling; a and c pairs are closed transitively (ايش, اش, شو, وش, ويش, وايش, شنو are one group).
# ------------------------------------------------------------------------------------------------
_TABLE = """
a: ده دا | ايوه ايوا | ايوه ايوة | الجينيه الچينيه | بكره بكرا | وبكره وبكرا | الفيلم الفلم |
  فيلم فلم | الامريكيه الاميركيه | تري ترا | قراتنا قرايتنا | بالحمام بلحمام | الفيدرالي الفدرالي |
  المنتزهات المتنزهات | الاولمبيه الاوليمبيه | لغتين لغتان | متواجدين متواجدون |
  السوفيتي السوفييتي | يبه يبا | شنغن شينغن | شنغن شنجن | غوما جوما | بسم باسم | واعين واعيين |
  ملليمتر ميليمتر | ملليمترا ميليمترا | الكاتالونيه الكتالونيه | بالكاتالونيه بالكتالونيه | ابن بن |
  لميا لميه | مبتدي مبتدا | الحمدلله الحمدالله | يعني يعنى | بالميه بالاميه | ف فا |
  التلفون التليفون | بالضبط بالظبط | وياي ويايه | وياي ويايا | ميه اميه | يمه يما |
  الاستوديو الاستديو | لانني لاني | ستينيات ستينات | التونه الطونا | فهاته فهته |
c: اللي الي | هذه هذي | هذه هاذي | هذه هادي | هذه هاي | هذا هاد | هذا هادا | هذا ده | هذه دي |
  كذا كده | كذا كدا | كذا كذه | كذا كذي | كذا جي | راح رح | يلا يالله | يلا يلله | ولا والا |
  جالسه يالسه | جالس يالس | اجلس ايلس | جديده يديده | جديد يديد | الجايه اليايه | الرجال الريال |
  رجال ريال | مو مب | مو موب | انه انو | لانه لانو | وانه وانو | انتم انتو | انتم انتوا |
  عندنا عدنا | معك معاك | معي معاي | معي معايا | معه معاه | معهم معاهم | وش ويش | وش وايش | ايش اش |
  ايش شو | ايش وش | الشارقه الشارجه | ابغي ابي | ابغي ابا | تجي تيجي | يجي ييجي | اكثر اكتر |
  هنا اهنا | هني اهني | هني اهنيه | خلينا خلنا | نكون انكون | تخيلوا اتخيلوا | تخرجوا اتخرجوا |
  اقدر اجدر | اصير اسير | قدام جدام | قم قوم | احنا حنا | نحن نحنا | كيفك كيفتش | كيفك كيفتس |
  ثاني تاني | بيننا بينا | عندك عندج | عليك عليج | لك لج | بدات بديت | ورجالته ورجالتو | نص نصف |
  ونص ونصف | نقول نغول | وقلنا وجلنا | لها الها | حد احد | يعرفون يعرفوا | الطريق الطريج | اكله اكلو |
  عطونا اعطونا | قد اد | طيب طب | الحين ذحين | الحين دحين | بقول بيقول | انت انتي | عليا علي |
  شوي شويه | ايش شنو | تخرجت اتخرجت | تجيني تيني | عشان علشان | اقول اجول | اقولكم اجولكم |
  تكون اتكون | تخيلت اتخيلت | جيت ييت | جالسين يالسين | بالك بالج | انك انج | لما لمن | دي ذي |
  ذلك دلك | ابغاه اباه | ثانيه تانيه | كثير كتير | لكم الكم | اخوك خوك | وايد ويد | هنا هني |
  هذا ذا | باكر باجر | باكر باتشر | ابو بو | بيكونون بيكونوا | تكونون تكونوا | جالسه يلسه |
  اختي ختي | اخوي خوي | اخوه خوه | اختك ختك | اخويا خويا | عيشتنا عيشتنه | القرفه الارفه |
  الذرات الزرات |
h: ماذا ايش | لا ما | نحن احنا | التي اللي | الذي اللي | بها فيها | اكيد بالتاكيد | بسرعه سريع |
  ذلك ذاك | الذي الي | لما يوم | هناك فيه | هناك في | لم ما | الان الحين | اين وين | ليس مو |
  ليس مش | عندما لما | قليلا شوي | لكن بس | فقط بس | ماذا شو | ماذا وش | استطيع اقدر | نستطيع نقدر |
  يستطيع يقدر | لديه عنده | لدي عندي | اريد ابغي | نريد نبغي | لماذا ليش | اشخاص ناس | اقوم اسوي |
  اخري ثانيه | لكي عشان | من مين | شييا شي | كيف شلون | جيد زين |
"""

# dialect word in the reference -> MSA word in the hypothesis (h), in addition to the table's h pairs
_MSA_BASE = [
    ("ايش", "ماذا"), ("وش", "ماذا"), ("شو", "ماذا"), ("شنو", "ماذا"), ("ايه", "ماذا"), ("اش", "ماذا"),
    ("ايش", "ما"), ("وش", "ما"), ("شو", "ما"), ("ليش", "لماذا"), ("ليه", "لماذا"), ("علاش", "لماذا"),
    ("وين", "اين"), ("فين", "اين"), ("شلون", "كيف"), ("ازاي", "كيف"), ("كيفاش", "كيف"),
    ("الحين", "الان"), ("ذحين", "الان"), ("دحين", "الان"), ("هلق", "الان"), ("دلوقتي", "الان"),
    ("دابا", "الان"),
    ("ابغي", "اريد"), ("ابي", "اريد"), ("بدي", "اريد"), ("عايز", "اريد"), ("عاوز", "اريد"), ("نبغي", "نريد"),
    ("نبي", "نريد"), ("يبغي", "يريد"), ("يبي", "يريد"), ("تبغي", "تريد"), ("تبي", "تريد"),
    ("مو", "ليس"), ("مب", "ليس"), ("مش", "ليس"), ("موب", "ليس"),
    ("زين", "جيد"), ("كويس", "جيد"), ("منيح", "جيد"), ("مزيان", "جيد"),
    ("هذي", "هذه"), ("هاي", "هذه"), ("دي", "هذه"), ("هادي", "هذه"), ("هاد", "هذا"), ("ده", "هذا"),
    ("هادا", "هذا"),
    ("اللي", "الذي"), ("الي", "الذي"), ("اللي", "التي"), ("الي", "التي"), ("اللي", "الذين"),
    ("عشان", "لان"), ("علشان", "لان"), ("عشان", "لكي"), ("كذا", "هكذا"), ("كده", "هكذا"), ("هيك", "هكذا"),
    ("وايد", "كثيرا"), ("وايد", "كثير"), ("واجد", "كثير"), ("احنا", "نحن"), ("حنا", "نحن"),
    ("بس", "فقط"), ("بس", "لكن"), ("ايوه", "نعم"), ("اي", "نعم"), ("ايه", "نعم"), ("طيب", "حسنا"),
    ("كمان", "ايضا"), ("برضو", "ايضا"), ("انتي", "انت"), ("سوي", "فعل"), ("يسوي", "يفعل"), ("يشتغل", "يعمل"),
]


def _parse_table(text: str) -> dict[str, list[tuple[str, str]]]:
    out: dict[str, list[tuple[str, str]]] = {"a": [], "c": [], "h": []}
    label = ""
    for line in text.strip().splitlines():
        line = line.strip()
        if line[:2] in ("a:", "c:", "h:"):
            label, line = line[0], line[2:]
        for pair in line.split("|"):
            ws = pair.split()
            if len(ws) == 2:
                out[label].append((ws[0], ws[1]))
    return out


def _groups(edges: Iterable[tuple[str, str]]) -> dict[str, str]:
    """Union-find over (canonical, variant) edges; every member maps to its group's root."""
    parent: dict[str, str] = {}

    def find(x: str) -> str:
        parent.setdefault(x, x)
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for canon, var in edges:
        rc, rv = find(canon), find(var)
        if rc != rv:
            parent[rv] = rc
    return {x: find(x) for x in parent}


_PAIRS = _parse_table(_TABLE)
ORTHO = _groups(_PAIRS["a"])
VARIANTS = _groups(_PAIRS["c"])
MSA_PAIRS = frozenset({(a, b) for a, b in _MSA_BASE} | {(x, y) for p in _PAIRS["h"] for x, y in (p, p[::-1])})

# ------------------------------------------------------------------------------------------------
# a: orthographic fold, c: dialect fold, letter rules
# ------------------------------------------------------------------------------------------------
_CF = re.compile(r"[\p{Cf}\p{Mn}]")
_PERSIAN = str.maketrans({"ی": "ي", "ې": "ي", "ے": "ي", "ک": "ك", "ھ": "ه", "ۀ": "ه", "ە": "ه", "ۃ": "ه",
                          "ٹ": "ت", "ڈ": "د", "ٸ": "ي", "ٶ": "و", "ٵ": "ا"})
_ELONG = re.compile(r"(.)\1{2,}")
# words written with a full alef where the standard spelling has a dagger alef
_DAGGER = {
    "هاذا": "هذا", "هاذه": "هذه", "هاذي": "هذي", "هاذول": "هذول", "هاذولا": "هذولا", "هاولا": "هولا",
    "ذالك": "ذلك", "ذالكم": "ذلكم", "لاكن": "لكن", "ولاكن": "ولكن", "هاكذا": "هكذا", "الرحمان": "الرحمن",
    "هاوليك": "هوليك", "هاكذاك": "هكذاك", "اولايك": "اوليك", "اولاييك": "اوليك", "لاكنه": "لكنه",
    "ابراهام": "ابراهيم",
}
_PREFIXES = ("وال", "بال", "فال", "كال", "لل", "ال", "و", "ف", "ب", "ل", "ك")


@lru_cache(maxsize=1 << 18)
def fold_a(t: str) -> str:
    """Orthographic fold of one v1 token."""
    t = _ELONG.sub(r"\1", _CF.sub("", t).translate(_PERSIAN))
    if t in ORTHO:
        return ORTHO[t]
    if len(t) > 3 and t.endswith("وا"):  # silent alef after plural waw: قالوا / قالو
        t = t[:-1]
    t = _DAGGER.get(t, t)
    if t.startswith("و") and t[1:] in _DAGGER:
        t = "و" + _DAGGER[t[1:]]
    if t in ORTHO:
        return ORTHO[t]
    for pre in _PREFIXES:
        if t.startswith(pre) and t[len(pre):] in ORTHO and len(t) - len(pre) >= 2:
            return pre + ORTHO[t[len(pre):]]
    # tanween-fath alef / accusative ending (كيلومترا / كيلومتر), not the suffixes ـها / ـنا
    if len(t) >= 4 and t.endswith("ا") and t[-2] not in "اويهن":
        t = t[:-1]
    return t


@lru_cache(maxsize=1 << 18)
def fold_c(t: str) -> str:
    """Dialect fold (after the orthographic one); a و/ف/ب/ل/ال... prefix is kept around a table word."""
    t = fold_a(t)
    if t in VARIANTS:
        return VARIANTS[t]
    if ORTHO.get(t, t) in VARIANTS:
        return VARIANTS[ORTHO.get(t, t)]
    for pre in _PREFIXES:
        if t.startswith(pre) and len(t) - len(pre) >= 2 and t[len(pre):] in VARIANTS:
            return pre + VARIANTS[t[len(pre):]]
    return t


@lru_cache(maxsize=1 << 18)
def rule_variant(r: str, h: str) -> str | None:
    """Letter rules for a 1:1 pair: 'a' (hamza seat), 'c' (dialect morphology) or None."""
    a, b = fold_c(r), fold_c(h)
    lo, hi = (a, b) if len(a) < len(b) else (b, a)
    if len(hi) == len(lo) + 1 and hi == "ا" + lo and lo[:1] in "تني" and len(lo) >= 3:
        return "c"  # prothetic alef in Gulf/Emirati verbs: اتعلمت / تعلمت, انكون / نكون
    if len(a) != len(b) or len(a) < 4:
        return None
    diff = [k for k in range(len(a)) if a[k] != b[k]]
    if len(diff) != 1:
        return None
    k = diff[0]
    pair = {a[k], b[k]}
    if 0 < k < len(a) - 1 and pair in ({"و", "ا"}, {"و", "ي"}) and not (k == len(a) - 2 and a[-1] == "ن"):
        return "a"  # hamza seat: بيؤثر / بيأثر -> بيوثر / بياثر (not the suffixes ـون / ـين / ـان)
    if k == len(a) - 1 and pair == {"و", "ه"} and a[-2] != "ا":
        return "c"  # 3rd-person suffix ـو = ـه (Egyptian, Levantine, Hijazi): غيرو / غيره
    if k == 0 and pair == {"ح", "ه"} and a[1] in "يتنا":
        return "c"  # future prefix حـ / هـ (Egyptian, Levantine): حيقدر / هيقدر
    return None


# ------------------------------------------------------------------------------------------------
# d: number words (v1 spelling, dialect forms included)
# ------------------------------------------------------------------------------------------------
_NUMVAL = {
    "صفر": 0, "واحد": 1, "واحده": 1, "وحده": 1, "اثنين": 2, "اثنان": 2, "اتنين": 2, "ثنين": 2, "تنين": 2,
    "اثنتين": 2,
    "ثلاثه": 3, "ثلاث": 3, "تلاته": 3, "تلات": 3, "اربعه": 4, "اربع": 4, "خمسه": 5, "خمس": 5,
    "سته": 6, "ست": 6, "سبعه": 7, "سبع": 7, "ثمانيه": 8, "ثمان": 8, "ثماني": 8, "تمانيه": 8, "تمن": 8,
    "ثمن": 8,
    "تسعه": 9, "تسع": 9, "عشره": 10, "عشر": 10, "عشرا": 10, "احدعش": 11, "حداش": 11, "اطناش": 12, "اثنعش": 12,
    "عشرين": 20, "ثلاثين": 30, "تلاتين": 30, "اربعين": 40, "خمسين": 50, "ستين": 60, "سبعين": 70, "ثمانين": 80,
    "تمانين": 80, "تسعين": 90, "ميه": 100, "مايه": 100, "ميتين": 200, "الف": 1000, "الفين": 2000,
    "الاف": 1000,
    "مليون": 10**6, "مليونين": 2 * 10**6, "ملايين": 10**6, "مليار": 10**9, "احد": 1, "اثني": 2, "اثنا": 2,
    "ثلاثميه": 300, "اربعميه": 400, "خمسميه": 500, "ستميه": 600, "سبعميه": 700, "ثمانميه": 800, "تسعميه": 900,
    "تلتميه": 300, "ربعميه": 400, "ثنتين": 2, "ثنتينه": 2,
    "حداشر": 11, "اتناشر": 12, "اطناشر": 12, "تلتاشر": 13, "اربعتاشر": 14, "اربعطاشر": 14, "خمستاشر": 15,
    "خمسطاشر": 15, "ستاشر": 16, "سطاشر": 16, "سبعتاشر": 17, "سبعطاشر": 17, "تمنتاشر": 18, "تمنطاشر": 18,
    "تسعتاشر": 19, "تسعطاشر": 19, "احدعشر": 11, "ثنعش": 12, "ثلطعش": 13, "ثلتعش": 13, "ثلتطعش": 13,
    "ثلتاعش": 13, "اربعطعش": 14, "اربعتعش": 14, "خمسطعش": 15, "ستطعش": 16, "سبعطعش": 17, "ثمنطعش": 18,
    "ثمنتعش": 18, "تسعطعش": 19, "اربعطاعش": 14, "خمسطاعش": 15, "ثمنطاعش": 18,
    "الثالث": 3, "الثالثه": 3, "الرابع": 4, "الرابعه": 4, "الخامس": 5, "الخامسه": 5, "السادس": 6,
    "السادسه": 6, "السابع": 7, "السابعه": 7, "الثامن": 8, "الثامنه": 8, "التاسع": 9, "التاسعه": 9,
    "العاشر": 10, "العاشره": 10, "الحادي": 1, "الحاديه": 1,
}
# words around a verbalized number whose errors are counted as number errors when the text had digits
_NUM_CONTEXT = frozenset({"في", "الميه", "المايه", "بالميه", "بالمايه", "ونص", "نص", "ربع", "وربع", "ارباع",
                          "ثلث", "وثلث", "و", "الا", "بوصه", "درجه", "ساعه", "دقيقه", "صفر", "فاصله",
                          "بالمئه", "المئه"})
_DIGITS = re.compile(r"[0-9٠-٩۰-۹]")


@lru_cache(maxsize=1 << 16)
def num_word(t: str) -> int | None:
    t = fold_a(t)
    if t in _NUMVAL:
        return _NUMVAL[t]
    if t[:1] in "وب" and t[1:] in _NUMVAL:
        return _NUMVAL[t[1:]]
    if t.isdigit():
        return int(t)
    return None


def _is_num(t: str) -> bool:
    return num_word(t) is not None or t == "صفر"


# ------------------------------------------------------------------------------------------------
# e: Latin <-> Arabic consonant skeletons
# ------------------------------------------------------------------------------------------------
_AR2SK = {"ب": "b", "ت": "t", "ث": "t", "ج": "j", "ح": "h", "خ": "k", "د": "d", "ذ": "d", "ر": "r", "ز": "z",
          "س": "s", "ش": "s", "ص": "s", "ض": "d", "ط": "t", "ظ": "z", "ع": "", "غ": "j", "ف": "f", "ق": "k",
          "ك": "k", "ل": "l", "م": "m", "ن": "n", "ه": "h", "و": "", "ي": "", "ا": "", "پ": "b", "ڤ": "f",
          "گ": "j", "چ": "s", "ة": ""}
_LAT_DIGRAPH = (("sh", "s"), ("ch", "s"), ("th", "t"), ("ph", "f"), ("gh", "j"), ("kh", "k"), ("ck", "k"),
                ("qu", "k"), ("x", "ks"))
_LAT2SK = {"b": "b", "c": "k", "d": "d", "f": "f", "g": "j", "h": "h", "j": "j", "k": "k", "l": "l", "m": "m",
           "n": "n", "p": "b", "q": "k", "r": "r", "s": "s", "t": "t", "v": "f", "z": "z", "x": "ks"}
_SOFT_C = re.compile(r"c(?=[eiy])")
_REPEAT = re.compile(r"(.)\1+")
# an Arabic token may sit next to a Latin one inside a script span only if it is a clitic (ال laptop)
_SCRIPT_CLITICS = frozenset({"ال", "وال", "بال", "فال", "لل", "و", "ب", "ل", "ف", "ك"})
_OKAY = frozenset({"ok", "okay", "okey", "okk", "k"})


@lru_cache(maxsize=1 << 16)
def skeleton(t: str) -> str:
    if is_latin(t):
        s = t.lower()
        for a, b in _LAT_DIGRAPH:
            s = s.replace(a, b)
        out = "".join(_LAT2SK.get(ch, "") for ch in _SOFT_C.sub("s", s))
    else:
        out = "".join(_AR2SK.get(ch, "") for ch in t)
        if t.endswith("ه") and out.endswith("h"):
            out = out[:-1]
    return _REPEAT.sub(r"\1", out.replace("h", ""))  # h / ح / ه are too unreliable across scripts


def script_equiv(ref_toks: Sequence[str], hyp_toks: Sequence[str]) -> bool:
    joined = [*ref_toks, *hyp_toks]
    if not any(is_latin(t) for t in joined):
        return False
    lat_r = any(is_latin(t) for t in ref_toks)
    lat_h = any(is_latin(t) for t in hyp_toks)
    if lat_r == lat_h and all(is_latin(t) for t in joined):  # both Latin: only ok/okay-type spellings
        a, b = "".join(ref_toks), "".join(hyp_toks)
        return a == b or {a, b} <= _OKAY
    if len(joined) > 2:
        for side in (ref_toks, hyp_toks):
            if any(is_latin(t) for t in side) and \
                    any(not is_latin(t) and t not in _SCRIPT_CLITICS for t in side):
                return False
    a = skeleton("".join(ref_toks)) if len(ref_toks) == 1 else "".join(skeleton(t) for t in ref_toks)
    b = skeleton("".join(hyp_toks)) if len(hyp_toks) == 1 else "".join(skeleton(t) for t in hyp_toks)
    if not a or not b:
        return False
    if a == b:
        return True
    if len(ref_toks) == 1 and len(hyp_toks) == 1:  # Arabic article on the code-switched noun
        ar = hyp_toks[0] if lat_r else ref_toks[0]
        if ar.startswith("ال") and len(ar) > 4:
            a2, other = skeleton(ar[2:]), (a if lat_r else b)
            if a2 == other or (min(len(a2), len(other)) >= 3 and
                               Levenshtein.normalized_similarity(a2, other) >= 0.7):
                return True
    if min(len(a), len(b)) < 3:
        return False
    return Levenshtein.normalized_similarity(a, b) >= 0.7


# ------------------------------------------------------------------------------------------------
# b: merges and contractions
# ------------------------------------------------------------------------------------------------
_ALEFS = re.compile(r"ا{2,}")
_L_PRON = frozenset({"لي", "لك", "له", "لها", "لنا", "لكم", "لهم", "لج"})
_ELIDE_END = frozenset({"ما", "يا", "في", "ابو", "اخو", "لا", "ولا", "وما", "فما", "شو", "وش", "بو"})


def _collapse(s: str) -> str:
    return _ALEFS.sub("ا", s.replace("لال", "لل"))


def _bounds(tokens: Sequence[str]) -> tuple[int, ...]:
    acc, out = 0, []
    for t in tokens[:-1]:
        acc += len(t)
        out.append(acc)
    return tuple(out)


def _elisions(toks: Sequence[str]) -> frozenset[str]:
    """Strings a multi-token span can contract to with one attested junction contraction: the final
    vowel of a short function word dropped (ما راح / مراح, ابو رامي / ابرامي, في الحياه / فالحياه), the
    next word's initial alef dropped (اقدر اني / اقدرني, ما ادري / مدري), a junction ة becoming ا before
    a ل-pronoun (بالنسبه لي / بالنسبالي), de-gemination (بقول لك / بقولك) or a ل-pronoun turning into an
    object suffix (يجي لنا / يجينا)."""
    out = set()
    for q in range(len(toks) - 1):
        left, right = toks[q], toks[q + 1]
        cands = []
        if left in _ELIDE_END and left[-1] in "اوي":
            cands.append(left[:-1] + right)
        if right.startswith("ا") and len(right) > 2:
            cands.append(left + right[1:])
        if left.endswith("ه") and right.startswith("ل") and len(right) <= 4:
            cands.append(left[:-1] + "ا" + right)
        if left == "ما" and right.startswith("ا") and len(right) > 2:
            cands.append("م" + right[1:])
        if left[-1:] == right[:1]:
            cands.append(left + right[1:])
        if right in _L_PRON:
            cands.append(left + right[1:])
        head, tail = "".join(toks[:q]), "".join(toks[q + 2:])
        out.update(_collapse(head + c + tail) for c in cands)
    return frozenset(out)


class _Spans:
    """Merge keys of every span (<= MAXSPAN tokens) of one side under one fold."""

    __slots__ = ("bounds", "elide", "joined", "key")

    def __init__(self, toks: Sequence[str], fold: Callable[[str], str], maxspan: int):
        f = [fold(t) for t in toks]
        n = len(f)
        self.key: dict[tuple[int, int], str] = {}
        self.joined: dict[tuple[int, int], str] = {}
        self.bounds: dict[tuple[int, int], tuple[int, ...]] = {}
        self.elide: dict[tuple[int, int], frozenset[str]] = {}
        for i in range(n):
            for k in range(1, maxspan + 1):
                if i + k > n:
                    break
                part = f[i:i + k]
                joined = "".join(part)
                self.joined[i, k] = joined
                self.key[i, k] = _collapse(joined)
                self.bounds[i, k] = _bounds(part)
                if k > 1:
                    self.elide[i, k] = _elisions(part)


# ------------------------------------------------------------------------------------------------
# relaxed alignment
# ------------------------------------------------------------------------------------------------
_EPS = 1e-4  # cost of an explained (zero-cost) operation, so that exact matches are preferred
_SIM_W = 1e-3  # tie-break that pairs similar words in substitutions
_MAXSPAN = 4
_MAX_CELLS = 6000  # larger regions (garbage outputs) get the plain alignment

Op = tuple  # (kind, ref tokens, hyp tokens, ref index, hyp index); kind: eq, a-f, sub, del, ins


def _identity(t: str) -> str:
    return t


def _plain_ops(R: Sequence[str], H: Sequence[str]) -> list[Op]:
    if not H:
        return [("del", (r,), (), i, 0) for i, r in enumerate(R)]
    if not R:
        return [("ins", (), (h,), 0, j) for j, h in enumerate(H)]
    ops: list[Op] = []
    for tag, i1, i2, j1, j2 in Levenshtein.opcodes(list(R), list(H)):
        if tag == "equal":
            ops += [("eq", (R[i1 + k],), (H[j1 + k],), i1 + k, j1 + k) for k in range(i2 - i1)]
        elif tag == "replace":
            n = min(i2 - i1, j2 - j1)
            ops += [("sub", (R[i1 + k],), (H[j1 + k],), i1 + k, j1 + k) for k in range(n)]
            ops += [("del", (R[i1 + k],), (), i1 + k, j1 + n) for k in range(n, i2 - i1)]
            ops += [("ins", (), (H[j1 + k],), i1 + n, j1 + k) for k in range(n, j2 - j1)]
        elif tag == "delete":
            ops += [("del", (R[k],), (), k, j1) for k in range(i1, i2)]
        else:
            ops += [("ins", (), (H[k],), i1, k) for k in range(j1, j2)]
    return ops


def _relaxed(R: Sequence[str], H: Sequence[str], enabled: frozenset[str]) -> list[Op]:
    """Minimum-cost alignment with category-tagged zero-cost operations (ref/hyp indices are local)."""
    m, n = len(R), len(H)
    if m * n > _MAX_CELLS:
        return _plain_ops(R, H)
    use_a, use_b, use_c = "a" in enabled, "b" in enabled, "c" in enabled
    use_d, use_e, use_f = "d" in enabled, "e" in enabled, "f" in enabled
    fa = fold_a if use_a else _identity
    fc = fold_c if use_c else fa
    folds = ((fc, fa) if fc is not fa else (fc,)) if use_b else ()
    spans = [(_Spans(R, f, _MAXSPAN), _Spans(H, f, _MAXSPAN)) for f in folds]
    lat_r = [is_latin(t) for t in R]
    lat_h = [is_latin(t) for t in H]
    Hset, Rset = set(H), set(R)
    Hstr, Rstr = " " + " ".join(H) + " ", " " + " ".join(R) + " "
    INF = float("inf")
    D = [[INF] * (n + 1) for _ in range(m + 1)]
    B: list[list[tuple | None]] = [[None] * (n + 1) for _ in range(m + 1)]
    D[0][0] = 0.0
    for i in range(m + 1):
        Di, Bi = D[i], B[i]
        for j in range(n + 1):
            d0 = Di[j]
            if d0 == INF:
                continue
            if i < m and j < n:  # 1:1
                r, h = R[i], H[j]
                if r == h:
                    cand = [(0.0, "eq")]
                else:
                    cand = []
                    if use_a and fa(r) == fa(h):
                        cand.append((_EPS, "a"))
                    elif use_c and (fc(r) == fc(h) or rule_variant(r, h) == "c"):
                        cand.append((_EPS, "c"))
                    elif use_a and rule_variant(r, h) == "a":
                        cand.append((_EPS, "a"))
                    elif use_d and num_word(r) is not None and num_word(r) == num_word(h):
                        cand.append((_EPS, "d"))
                    elif use_e and (lat_r[i] or lat_h[j]) and script_equiv((r,), (h,)):
                        cand.append((_EPS, "e"))
                    cand.append((1.0 + _SIM_W * (1 - Levenshtein.normalized_similarity(fc(r), fc(h))), "sub"))
                for c, k in cand:
                    if d0 + c < D[i + 1][j + 1]:
                        D[i + 1][j + 1] = d0 + c
                        B[i + 1][j + 1] = (i, j, k)
            if i < m:  # deletion
                r = R[i]
                k, c = "del", 1.0
                if use_f and (is_filler(r) or (((i > 0 and R[i - 1] == r) or (i + 1 < m and R[i + 1] == r))
                                               and r in Hset)):
                    k, c = "f", _EPS
                if d0 + c < D[i + 1][j]:
                    D[i + 1][j] = d0 + c
                    B[i + 1][j] = (i, j, k)
            if j < n:  # insertion
                h = H[j]
                k, c = "ins", 1.0
                if use_f and (is_filler(h) or (((j > 0 and H[j - 1] == h) or (j + 1 < n and H[j + 1] == h))
                                               and h in Rset)):
                    k, c = "f", _EPS
                if d0 + c < Di[j + 1]:
                    Di[j + 1] = d0 + c
                    Bi[j + 1] = (i, j, k)
            if use_f:  # a repeated 2-/3-gram deleted from the reference or inserted in the hypothesis
                for kk in (2, 3):
                    if i + kk <= m and i - kk >= 0 and R[i:i + kk] == R[i - kk:i] and \
                            (" " + " ".join(R[i:i + kk]) + " ") in Hstr and d0 + _EPS * kk < D[i + kk][j]:
                        D[i + kk][j] = d0 + _EPS * kk
                        B[i + kk][j] = (i, j, "f")
                    if j + kk <= n and j - kk >= 0 and H[j:j + kk] == H[j - kk:j] and \
                            (" " + " ".join(H[j:j + kk]) + " ") in Rstr and d0 + _EPS * kk < Di[j + kk]:
                        Di[j + kk] = d0 + _EPS * kk
                        Bi[j + kk] = (i, j, "f")
            if i < m and j < n and (use_b or use_e):  # k:l spans: merges and script spans
                for kk in range(1, _MAXSPAN + 1):
                    if i + kk > m:
                        break
                    for ll in range(1, _MAXSPAN + 1):
                        if j + ll > n or kk + ll < 3:
                            continue
                        lab = None
                        for sr, sh in spans:
                            k1, k2 = sr.key[i, kk], sh.key[j, ll]
                            if kk != ll and k1 == k2:
                                lab = "b"
                            elif kk == ll and sr.joined[i, kk] == sh.joined[j, ll] and \
                                    sr.bounds[i, kk] != sh.bounds[j, ll]:
                                lab = "b"  # same letters, boundary moved (موب انا / مو بانا)
                            elif (kk == 1 or ll == 1) and kk != ll and min(len(k1), len(k2)) >= 3 and (
                                    k2 in sr.elide[i, kk] if kk > ll else k1 in sh.elide[j, ll]):
                                lab = "b"
                            if lab:
                                break
                        if lab is None and use_e and kk + ll <= 5 and (
                                any(lat_r[i:i + kk]) or any(lat_h[j:j + ll])) and \
                                script_equiv(R[i:i + kk], H[j:j + ll]):
                            lab = "e"
                        if lab:
                            c = _EPS * (kk + ll - 1)
                            if d0 + c < D[i + kk][j + ll]:
                                D[i + kk][j + ll] = d0 + c
                                B[i + kk][j + ll] = (i, j, lab)
    ops: list[Op] = []
    i, j = m, n
    while i > 0 or j > 0:
        pi, pj, k = B[i][j]
        ops.append((k, tuple(R[pi:i]), tuple(H[pj:j]), pi, pj))
        i, j = pi, pj
    ops.reverse()
    return ops


def _regions(R: Sequence[str], H: Sequence[str], pad: int = 3) -> list[tuple[int, int, int, int]]:
    """Error regions of the plain alignment, widened by `pad` anchor words (a merge may straddle one)."""
    regs: list[list[int]] = []
    cur = None
    for tag, i1, i2, j1, j2 in Levenshtein.opcodes(list(R), list(H)):
        if tag == "equal":
            if cur:
                regs.append(cur)
                cur = None
        elif cur is None:
            cur = [i1, i2, j1, j2]
        else:
            cur[1], cur[3] = i2, j2
    if cur:
        regs.append(cur)
    merged: list[list[int]] = []
    for i0, i1, j0, j1 in regs:
        a, b = min(pad, i0, j0), min(pad, len(R) - i1, len(H) - j1)
        w = [i0 - a, i1 + b, j0 - a, j1 + b]
        if merged and w[0] <= merged[-1][1] and w[2] <= merged[-1][3]:
            merged[-1][1], merged[-1][3] = max(merged[-1][1], w[1]), max(merged[-1][3], w[3])
        else:
            merged.append(w)
    return [tuple(w) for w in merged]


def relaxed_alignment(R: Sequence[str], H: Sequence[str], enabled: Iterable[str] = _FREE) -> list[Op]:
    """Relaxed alignment of two token lists, restricted to the plain alignment's error regions."""
    enabled = frozenset(enabled)
    if not R or not H:
        return _relaxed(R, H, enabled)
    ops: list[Op] = []
    ci = cj = 0
    for i0, i1, j0, j1 in _regions(R, H):
        while ci < i0:
            ops.append(("eq", (R[ci],), (H[cj],), ci, cj))
            ci, cj = ci + 1, cj + 1
        ops += [(k, r, h, i + i0, j + j0) for k, r, h, i, j in _relaxed(R[i0:i1], H[j0:j1], enabled)]
        ci, cj = i1, j1
    while ci < len(R):
        ops.append(("eq", (R[ci],), (H[cj],), ci, cj))
        ci, cj = ci + 1, cj + 1
    return ops


def _n_err(op: Op) -> int:
    return 0 if op[0] == "eq" else max(len(op[1]), len(op[2]))


def _residual(ops: Iterable[Op]) -> int:
    return sum(_n_err(o) for o in ops if o[0] in _RESIDUAL_KINDS)


# ------------------------------------------------------------------------------------------------
# utterance flags (category i)
# ------------------------------------------------------------------------------------------------
HALLUCINATION_PHRASES = ("اشتركوا في القناه", "ترجمه نانسي قنقر", "موسيقي", "شكرا للمشاهده",
                         "اشترك في القناه", "لا تنسوا الاشتراك")
_HALLUC_WHOLE = frozenset({"شكرا", "شكرا لكم", "شكرا جزيلا", "شكرا لكم علي المشاهده"})


def _loop_info(H: Sequence[str]) -> tuple[int, int]:
    """(most consecutive repeats of any 1..6-gram, n of that n-gram)."""
    best, bestn = 1, 0
    L = len(H)
    for n in range(1, 7):
        if n * 3 > L:
            break
        i = 0
        while i + n <= L:
            k = 1
            while i + (k + 1) * n <= L and H[i + k * n:i + (k + 1) * n] == H[i:i + n]:
                k += 1
            if k > best:
                best, bestn = k, n
            i += max(1, (k - 1) * n) if k > 1 else 1
    return best, bestn


def _flags(R: Sequence[str], H: Sequence[str], ops: Sequence[Op], phrases: Sequence[str]) -> dict:
    reps, rn = _loop_info(H)
    m, n = len(R), len(H)
    tail = 0
    for o in reversed(ops):
        if o[0] != "del":
            break
        tail += 1
    head = 0
    for o in ops:
        if o[0] != "del":
            break
        head += 1
    hs, rs = " " + " ".join(H) + " ", " " + " ".join(R) + " "
    return {
        "empty": n == 0 and m > 0,
        "loop": (reps >= 4 and reps * rn >= 6) or (reps >= 3 and rn >= 3),
        "long": n > 2 * m + 8,
        "translation": (n >= 3 and sum(map(is_latin, H)) / max(n, 1) > 0.6
                        and sum(map(is_latin, R)) / max(m, 1) < 0.2),
        "trunc": m >= 6 and max(tail, head) >= max(4, 0.3 * m) and n < 0.8 * m,
        "trunc_block": "tail" if tail >= head else "head",
        "omission": m >= 8 and n < 0.4 * m,
        "halluc_phrase": any(f" {p} " in hs and f" {p} " not in rs for p in phrases) or (
            " ".join(H) in _HALLUC_WHOLE and not any(t in R for t in H)),
        "loop_reps": reps, "n_ins": sum(_n_err(o) for o in ops if o[0] == "ins"),
    }


# ------------------------------------------------------------------------------------------------
# per-utterance stage 1: relaxed alignment, cascade, flags
# ------------------------------------------------------------------------------------------------
@dataclass
class _Aligned:
    id: str
    src: str  # clean-condition id this utterance is a copy of
    R: list[str]
    H: list[str]
    digits: bool
    e0: int
    ops: list[Op]  # non-eq operations of the full relaxed alignment
    casc: tuple[int, ...]  # residual errors with a, a+b, ..., a..f enabled
    flags: dict


def _v1_tokens() -> Callable[[str], list[str]]:
    norm = ArabicTextNormalizer()
    return lambda text: norm(text or "").split()


def _align_record(rec: Mapping, tokenize: Callable[[str], list[str]],
                  phrases: Sequence[str]) -> _Aligned | None:
    R, H = tokenize(rec.get("ref") or ""), tokenize(rec.get("hyp") or "")
    if not R:  # the scorer leaves out utterances with an empty reference
        return None
    rid = str(rec.get("id"))
    full = relaxed_alignment(R, H)
    casc = tuple(_residual(relaxed_alignment(R, H, _FREE[:k])) for k in range(1, len(_FREE)))
    casc += (_residual(full),)
    return _Aligned(rid, str(rec.get("source_utt") or rid.split("#")[0]), R, H,
                    bool(_DIGITS.search(f"{rec.get('ref') or ''} {rec.get('hyp') or ''}")),
                    Levenshtein.distance(R, H), [o for o in full if o[0] != "eq"], casc,
                    _flags(R, H, full, phrases))


def align_records(records: Iterable[Mapping], normalizer: Callable[[str], str] | None = None,
                  phrases: Sequence[str] = HALLUCINATION_PHRASES) -> list[_Aligned]:
    """Stage 1 for one model's records (v1 or v2: id, ref, hyp); reusable as peers' input."""
    tokenize = _v1_tokens() if normalizer is None else (lambda t: normalizer(t or "").split())
    return [a for a in (_align_record(r, tokenize, phrases) for r in records) if a is not None]


# ------------------------------------------------------------------------------------------------
# stage 2: label residual operations
# ------------------------------------------------------------------------------------------------
_AFFIX_PRE = ("وال", "بال", "فال", "كال", "لل", "ال", "و", "ف", "ب", "ل", "ك", "س", "ه", "ع")
_AFFIX_SUF = ("كم", "كن", "هم", "هن", "ها", "نا", "ني", "لي", "لك", "له", "لها", "لهم", "لنا", "ه", "ك", "ي",
              "و", "ا", "ت", "ين", "ون", "ات")


def _strips(t: str) -> set[str]:
    stems = {t, *(t[len(p):] for p in _AFFIX_PRE if t.startswith(p) and len(t) - len(p) >= 2)}
    return stems | {x[:-len(s)] for x in stems for s in _AFFIX_SUF if x.endswith(s) and len(x) - len(s) >= 2}


def affix_only(a: str, b: str) -> bool:
    """One token is the other plus or minus clitics or suffixes (same stem)."""
    return a != b and (b in _strips(a) or a in _strips(b))


def _outcomes(ops: Sequence[Op]) -> tuple[dict[int, object], dict[int, list[str]]]:
    """What a model did at each reference position, and what it inserted where (for consensus)."""
    out: dict[int, object] = {}
    ins: dict[int, list[str]] = defaultdict(list)
    for k, r, h, i, _ in ops:
        if k in ("a", "b", "c", "d", "e"):
            out.update((i + t, "EQ") for t in range(len(r)))
        elif k == "f":
            if r:
                out.update((i + t, "DEL") for t in range(len(r)))
            else:
                ins[i].extend(fold_c(t) for t in h)
        elif k == "sub":
            out[i] = ("SUB", fold_c(h[0]))
        elif k == "del":
            out[i] = "DEL"
        elif k == "ins":
            ins[i].append(fold_c(h[0]))
    return out, ins


def _agree(kind: str, h: tuple, i: int, peers: Sequence[tuple]) -> bool:
    if not peers:
        return False
    for out, ins in peers:
        if kind == "sub":
            if out.get(i, "EQ") != ("SUB", fold_c(h[0])):
                return False
        elif kind == "del":
            if out.get(i, "EQ") != "DEL":
                return False
        else:
            t = fold_c(h[0])
            if not any(t in ins.get(p, ()) for p in (i - 1, i, i + 1)):
                return False
    return True


def _label(u: _Aligned, peers: Sequence[tuple] | None, anchor: set | None) -> list[list]:
    """Labels [code, sub-kind, ref, hyp, i, j, n_err] for each non-eq operation of one utterance.
    peers: outcomes of the other panel models (None: no consensus possible); anchor: on a degraded copy,
    the (kind, ref position) of this model's consensus errors on the clean copy."""
    fl, ops, R, H = u.flags, u.ops, u.R, u.H
    loopish = fl["loop"] or fl["long"]
    cs_trans = (not any(map(is_latin, H)) and sum(map(is_latin, R)) >= 3 and
                sum(1 for k, r, *_ in ops if k in ("sub", "del") and r and is_latin(r[0])) >= 3)

    def cons(kind: str, h: tuple, i: int) -> bool:
        ok = peers is not None and _agree(kind, h, i, peers)
        return ok and (anchor is None or (kind, i) in anchor)

    trunc_pos = set()
    if fl["trunc"]:
        for k, _, _, i, _ in (ops if fl["trunc_block"] == "head" else reversed(ops)):
            if k != "del":
                break
            trunc_pos.add(i)
    out = []
    for k, r, h, i, j in ops:
        n = max(len(r), len(h))
        if k in _FREE:
            if k == "f" and not r and loopish:  # inserted repeats in a looping output are hallucination
                out.append(["i", "loop", r, h, i, j, n])
            else:
                out.append([k, _filler_kind(r or h) if k == "f" else "", r, h, i, j, n])
        elif fl["halluc_phrase"]:
            out.append(["i", "phrase", r, h, i, j, n])
        elif fl["empty"]:
            out.append(["g" if cons(k, h, i) else "i", "empty", r, h, i, j, n])
        elif k == "ins" and loopish:
            out.append(["i", "loop", r, h, i, j, n])
        elif k == "del" and (i in trunc_pos or fl["omission"]):
            kind = "trunc" if i in trunc_pos else "omission"
            out.append(["g" if cons(k, h, i) else "i", kind, r, h, i, j, n])
        elif u.digits and (any(_is_num(t) for t in r + h) or (
                all(t in _NUM_CONTEXT for t in r + h) and
                any(_is_num(x) for x in R[max(0, i - 2):i + len(r) + 2]))):
            out.append(["d", "verbalization", r, h, i, j, n])
        elif fl["translation"]:
            out.append(["h", "translation", r, h, i, j, n])
        elif cs_trans and k in ("sub", "del") and r and is_latin(r[0]):
            out.append(["h", "cs-translation", r, h, i, j, n])
        elif k == "sub" and ((fold_c(r[0]), fold_c(h[0])) in MSA_PAIRS or (r[0], h[0]) in MSA_PAIRS):
            out.append(["h", "msa", r, h, i, j, n])
        elif cons(k, h, i):
            out.append(["g", k, r, h, i, j, n])
        elif any(is_latin(t) for t in r + h):
            out.append(["j", "cs", r, h, i, j, n])
        elif k == "sub" and affix_only(fold_c(r[0]), fold_c(h[0])):
            out.append(["j", "affix", r, h, i, j, n])
        else:
            out.append(["j", k, r, h, i, j, n])
    return out


def _distribute(u: _Aligned, labels: list[list]) -> tuple[Counter, Counter]:
    """Category and sub-kind counts of one utterance that sum exactly to its plain error count: the
    cascade decrease of each free category is split over that category's operations in proportion to
    the errors they explain (loop repeats carry their share of f over to i); residual ops count fully."""
    cat: Counter = Counter()
    sub: Counter = Counter()
    prev, delta = u.e0, {}
    for c, after in zip(_FREE, u.casc):
        delta[c], prev = prev - after, after
    src = ["R" if o[0] in _RESIDUAL_KINDS else o[0] for o in u.ops]
    for c in _FREE:
        idx = [k for k, s in enumerate(src) if s == c]
        tot = sum(labels[k][6] for k in idx)
        if not idx or tot == 0:
            if delta[c]:
                cat[c] += delta[c]
                sub[c, ""] += delta[c]
            continue
        for k in idx:
            share = delta[c] * labels[k][6] / tot
            cat[labels[k][0]] += share
            sub[labels[k][0], labels[k][1]] += share
    for k, s in enumerate(src):
        if s == "R":
            cat[labels[k][0]] += labels[k][6]
            sub[labels[k][0], labels[k][1]] += labels[k][6]
    return cat, sub


# ------------------------------------------------------------------------------------------------
# results
# ------------------------------------------------------------------------------------------------
@dataclass
class Taxonomy:
    """Attribution of one model's errors on one set (or several, pooled)."""

    model: str | None
    n_utterances: int
    n_ref: int  # reference words (v1)
    errors: int  # plain corpus errors (v1 S + D + I); the counts sum to it
    counts: dict[str, float]
    sub_counts: dict[str, float]
    utt_errors: list[tuple[int, int]] = field(default_factory=list, repr=False)  # (errors, n_ref) / utterance
    flags: dict[str, int] = field(default_factory=dict)  # utterances flagged loop, trunc, ...
    utterances: list[dict] | None = field(default=None, repr=False)
    panel: list[str] = field(default_factory=list)

    @property
    def shares(self) -> dict[str, float]:
        return {c: (self.counts[c] / self.errors if self.errors else 0.0) for c in CODES}

    @property
    def wer(self) -> float | None:
        return self.errors / self.n_ref if self.n_ref else None

    def wer_without(self, codes: Iterable[str]) -> float | None:
        """WER once the errors of `codes` are set aside (e.g. SPURIOUS + ('g',))."""
        if not self.n_ref:
            return None
        return (self.errors - sum(self.counts[c] for c in set(codes))) / self.n_ref

    def worst_share(self, frac: float = 0.05, by: str = "errors") -> float | None:
        """Share of all errors that come from the worst `frac` of utterances (by error count or WER)."""
        if not self.errors or not self.utt_errors:
            return None
        k = max(1, round(frac * len(self.utt_errors)))
        key = (lambda x: x[0]) if by == "errors" else (lambda x: x[0] / max(x[1], 1))
        return sum(e for e, _ in sorted(self.utt_errors, key=key, reverse=True)[:k]) / self.errors

    def to_dict(self, utterances: bool = False) -> dict:
        d = {"model": self.model, "n_utterances": self.n_utterances, "n_ref": self.n_ref,
             "errors": self.errors, "wer": self.wer,
             "categories": {c: {"name": NAMES[c], "errors": round(self.counts[c], 3),
                                "share": round(self.shares[c], 5)} for c in CODES},
             "spurious_share": round(sum(self.shares[c] for c in SPURIOUS), 5),
             "wer_without_spurious": self.wer_without(SPURIOUS),
             "wer_without_spurious_consensus": self.wer_without((*SPURIOUS, "g")),
             "wer_genuine": self.wer_without(tuple(c for c in CODES if c != "j")),
             "worst5_share": self.worst_share(0.05, "errors"),
             "worst5_share_by_wer": self.worst_share(0.05, "wer"),
             "sub_kinds": {k: round(v, 3) for k, v in sorted(self.sub_counts.items()) if v},
             "flags": self.flags, "panel": self.panel}
        if utterances and self.utterances is not None:
            d["utterances"] = self.utterances
        return d


def _taxonomy(model: str | None, aligned: Sequence[_Aligned], labels: Sequence[list[list]], panel: list[str],
              keep_utterances: bool) -> Taxonomy:
    cat: Counter = Counter()
    sub: Counter = Counter()
    flags: Counter = Counter()
    utts = [] if keep_utterances else None
    for u, lab in zip(aligned, labels):
        c, s = _distribute(u, lab)
        cat.update(c)
        sub.update(s)
        for f in ("empty", "loop", "long", "translation", "trunc", "omission", "halluc_phrase"):
            flags[f] += bool(u.flags[f])
        if utts is not None:
            utts.append({"id": u.id, "n_ref": len(u.R), "errors": u.e0,
                         "counts": {k: round(v, 4) for k, v in c.items() if v},
                         "flags": {k: v for k, v in u.flags.items()
                                   if v and k not in ("trunc_block", "loop_reps")},
                         "ops": [[L[0], L[1], " ".join(L[2]), " ".join(L[3]), L[4], L[5], L[6]]
                                 for L in lab]})
    return Taxonomy(model, len(aligned), sum(len(u.R) for u in aligned), sum(u.e0 for u in aligned),
                    {c: float(cat[c]) for c in CODES},
                    {f"{a}.{b}" if b else a: float(v) for (a, b), v in sub.items()},
                    [(u.e0, len(u.R)) for u in aligned], dict(flags), utts, panel)


def _anchor_map(aligned: Sequence[_Aligned], labels: Sequence[list[list]]) -> dict[str, set]:
    """Clean-condition consensus errors per utterance: {(kind, ref position)}."""
    return {u.id: {(L[1] if L[1] in _RESIDUAL_KINDS else "del", L[4]) for L in lab if L[0] == "g"}
            for u, lab in zip(aligned, labels)}


def _own_errors(aligned: Sequence[_Aligned]) -> dict[str, set]:
    """Fallback anchor without the panel's clean records: this model's own clean residual errors."""
    return {u.id: {(k, i) for k, _, _, i, _ in u.ops if k in _RESIDUAL_KINDS} for u in aligned}


def _label_all(aligned: Sequence[_Aligned], peers: Mapping[str, Sequence[_Aligned]],
               anchor: Mapping[str, set] | None) -> list[list[list]]:
    peer_out = {p: {u.id: _outcomes(u.ops) for u in us} for p, us in peers.items()}
    out = []
    for u in aligned:
        ps = [peer_out[p].get(u.id) for p in peer_out]
        ok = bool(ps) and all(x is not None for x in ps)  # every peer must have the utterance
        a = None if anchor is None else anchor.get(u.src, set())
        out.append(_label(u, ps if ok else None, a))
    return out


def _as_aligned(x, normalizer, phrases) -> list[_Aligned]:
    if x and isinstance(x[0], _Aligned):
        return list(x)
    return align_records(x, normalizer, phrases)


def attribute(records: Sequence[Mapping], others: Mapping[str, Sequence[Mapping]] | None = None, *,
              clean: Sequence[Mapping] | None = None,
              clean_others: Mapping[str, Sequence[Mapping]] | None = None,
              model: str | None = None, keep_utterances: bool = False,
              normalizer: Callable[[str], str] | None = None,
              phrases: Sequence[str] = HALLUCINATION_PHRASES) -> Taxonomy:
    """Attribute one model's errors on one set/condition.

    records: the model's prediction records (v1 or v2; id, ref, hyp). others: {model: records} of the
    other models on the same set and condition, the consensus panel for g (without it, g is empty).
    clean: the model's records on the clean condition when `records` is a degraded copy;
    clean_others: the panel's clean records. With both, a degraded-copy consensus error counts as g only
    if it is also a consensus error on the clean audio (research 09: channel-induced shared errors are
    not reference errors); with `clean` only, it must at least be an error of this model on clean audio.
    """
    aligned = _as_aligned(records, normalizer, phrases)
    peers = {m: _as_aligned(v, normalizer, phrases) for m, v in (others or {}).items() if m != model}
    anchor = None
    if clean is not None:
        c_al = _as_aligned(clean, normalizer, phrases)
        if clean_others:
            c_peers = {m: _as_aligned(v, normalizer, phrases) for m, v in clean_others.items() if m != model}
            anchor = _anchor_map(c_al, _label_all(c_al, c_peers, None))
        else:
            anchor = _own_errors(c_al)
    return _taxonomy(model, aligned, _label_all(aligned, peers, anchor), sorted(peers), keep_utterances)


def attribute_models(records: Mapping[str, Sequence[Mapping]], *, panel: Sequence[str] | None = None,
                     clean: Mapping[str, Sequence[Mapping]] | None = None, keep_utterances: bool = False,
                     normalizer: Callable[[str], str] | None = None,
                     phrases: Sequence[str] = HALLUCINATION_PHRASES) -> dict[str, Taxonomy]:
    """Attribute every model of one set/condition. Each model's consensus peers are the other models of
    `panel` (default: all models given). `clean`: {model: clean-condition records} for a degraded copy."""
    al = {m: _as_aligned(v, normalizer, phrases) for m, v in records.items()}
    panel = list(panel) if panel is not None else list(al)
    c_al = {m: _as_aligned(v, normalizer, phrases) for m, v in (clean or {}).items()}
    out = {}
    for m, aligned in al.items():
        peers = {p: al[p] for p in panel if p != m and p in al}
        anchor = None
        if clean is not None and m in c_al:
            c_peers = {p: c_al[p] for p in panel if p != m and p in c_al}
            anchor = _anchor_map(c_al[m], _label_all(c_al[m], c_peers, None))
        elif clean is not None:
            anchor = {}
        out[m] = _taxonomy(m, aligned, _label_all(aligned, peers, anchor), sorted(peers), keep_utterances)
    return out


def pool(results: Iterable[Taxonomy]) -> Taxonomy:
    """Add several sets (or conditions) of one model: errors and counts are summed."""
    results = list(results)
    counts: Counter = Counter()
    sub: Counter = Counter()
    flags: Counter = Counter()
    utt: list[tuple[int, int]] = []
    for t in results:
        counts.update(t.counts)
        sub.update(t.sub_counts)
        flags.update(t.flags)
        utt += t.utt_errors
    return Taxonomy(results[0].model if results else None, sum(t.n_utterances for t in results),
                    sum(t.n_ref for t in results), sum(t.errors for t in results),
                    {c: float(counts[c]) for c in CODES}, dict(sub), utt, dict(flags), None,
                    sorted({p for t in results for p in t.panel}))


# ------------------------------------------------------------------------------------------------
# reports and CLI
# ------------------------------------------------------------------------------------------------
def to_markdown(rows: Sequence[tuple[str, Taxonomy]], title: str = "Error taxonomy") -> str:
    """One row per (label, taxonomy): WER and the share of each category in % of that row's errors."""
    head = ("| | WER | errors | " + " | ".join(f"{c} {NAMES[c]}" for c in CODES) +
            " | a–f | worst 5 % |")
    lines = [f"### {title}", "", "Shares in % of each row's word errors (they sum to 100).", "", head,
             "|---|---|---|" + "---|" * len(CODES) + "---|---|"]
    for label, t in rows:
        sh = t.shares
        w5 = t.worst_share()
        lines.append(f"| {label} | {100 * (t.wer or 0):.2f} | {t.errors} | " +
                     " | ".join(f"{100 * sh[c]:.1f}" for c in CODES) +
                     f" | {100 * sum(sh[c] for c in SPURIOUS):.1f} | "
                     f"{'' if w5 is None else f'{100 * w5:.1f}'} |")
    lines += ["", "Categories: " + "; ".join(f"**{c.code}** {c.name}: {c.definition}" for c in CATEGORIES)]
    return "\n".join(lines)


def _read_jsonl(path: Path) -> list[dict]:
    with path.open(encoding="utf-8") as f:
        return [json.loads(line) for line in f if line.strip()]


def _align_file(args: tuple[str, str]) -> tuple[str, list[_Aligned]]:
    path, key = args
    return key, align_records(_read_jsonl(Path(path)))


def _discover(pred_root: Path, sets: Sequence[str] | None) -> dict[tuple[str, str], dict[str, Path]]:
    """{(set, condition): {model: predictions path}} from <root>/<model>/predictions/<set>__<cond>.jsonl."""
    found: dict[tuple[str, str], dict[str, Path]] = defaultdict(dict)
    for path in sorted(pred_root.glob("*/predictions/*.jsonl")):
        name, _, cond = path.stem.partition("__")
        if cond and (not sets or name in sets):
            found[name, cond][path.parent.parent.name] = path
    return dict(found)


def main(argv: list[str] | None = None) -> dict:
    """sttarena audit taxonomy --suite S [--models ...] [--sets ...] [--out FILE.json FILE.md | json | md]

    Returns the JSON-ready result."""
    ap = argparse.ArgumentParser(prog="sttarena audit taxonomy",
                                 description="Error taxonomy: categories a-j of every model's word errors.")
    ap.add_argument("--suite", default="arabic")
    ap.add_argument("--models", nargs="*", help="models to report (default: every model with predictions)")
    ap.add_argument("--sets", nargs="*")
    ap.add_argument("--conditions", nargs="*", help="e.g. clean telephony (default: every saved condition)")
    ap.add_argument("--panel", nargs="*", help="consensus panel for g (default: the reported models)")
    ap.add_argument("--keep-in-domain", action="store_true",
                    help="keep models trained on a set in that set's consensus panel (left out by default)")
    ap.add_argument("--results", help="root holding <model>/predictions (default: <repo>/results/<lang>)")
    ap.add_argument("--out", nargs="*", default=[],
                    help="files to write (.json, .md), or 'json' / 'md' to print that format")
    ap.add_argument("--utterances", action="store_true", help="per-utterance labels in the JSON")
    ap.add_argument("--workers", type=int, default=1, help="processes for the alignments")
    args = ap.parse_args(argv)

    from .data import ROOT, Suite

    suite = Suite.load(args.suite)
    if suite.language != "ar":
        raise SystemExit("the taxonomy is defined for Arabic (its folds and lexicons are Arabic)")
    root = Path(args.results) if args.results else ROOT / "results" / suite.language
    found = {k: v for k, v in _discover(root, args.sets).items() if k[0] in suite.sets}
    cells = {k: sorted(m for m in v if not args.models or m in args.models) for k, v in found.items()
             if not args.conditions or k[1] in args.conditions}
    cells = {k: v for k, v in sorted(cells.items()) if v}
    if not cells:
        raise SystemExit(f"no predictions under {root} for this selection")
    try:
        from .models.registry import MODELS

        in_domain = {k: tuple(m.in_domain) for k, m in MODELS.items()}
    except ImportError:  # pragma: no cover
        in_domain = {}
    panels = {}
    jobs: dict[str, str] = {}
    for (name, cond), models in cells.items():
        panel = [p for p in (args.panel or models) if p in found[name, cond]
                 and (args.keep_in_domain or name not in in_domain.get(p, ()))]
        panels[name, cond] = panel
        for c in {cond, "clean"}:
            for m in {*models, *panel}:
                if m in found.get((name, c), {}):
                    jobs[f"{m}|{name}|{c}"] = str(found[name, c][m])
    work = [(p, k) for k, p in jobs.items()]
    if args.workers > 1:
        with ProcessPoolExecutor(args.workers) as ex:
            aligned = dict(ex.map(_align_file, work, chunksize=1))
    else:
        aligned = dict(map(_align_file, work))

    results: dict[str, dict[str, Taxonomy]] = defaultdict(dict)
    for (name, cond), models in cells.items():
        panel = panels[name, cond]
        involved = sorted({*models, *panel})
        recs = {m: aligned[f"{m}|{name}|{cond}"] for m in involved}
        clean = None
        if cond != "clean":
            clean = {m: aligned[f"{m}|{name}|clean"] for m in involved if f"{m}|{name}|clean" in aligned}
        tax = attribute_models(recs, panel=panel, clean=clean, keep_utterances=args.utterances)
        for m in models:
            results[m][f"{name}__{cond}"] = tax[m]
    pooled = {m: {"clean": pool(t for k, t in r.items() if k.endswith("__clean")),
                  "degraded": pool(t for k, t in r.items() if not k.endswith("__clean")),
                  "all": pool(r.values())} for m, r in results.items()}
    out = {"version": TAXONOMY_VERSION, "suite": args.suite, "normalizer": "v1",
           "categories": [c.__dict__ for c in CATEGORIES],
           "panels": {f"{n}__{c}": p for (n, c), p in panels.items()},
           "cells": {m: {k: t.to_dict(args.utterances) for k, t in sorted(r.items())}
                     for m, r in results.items()},
           "pooled": {m: {k: t.to_dict() for k, t in p.items() if t.n_utterances} for m, p in pooled.items()}}
    rows = [(f"{m} · {k.replace('__', '/')}", t)
            for m, r in sorted(results.items()) for k, t in sorted(r.items())]
    rows += [(f"**{m} · {k}**", t) for m, p in sorted(pooled.items()) for k, t in p.items() if t.n_utterances]
    md = to_markdown(rows)
    for target in args.out:
        if target in ("json", "md"):
            print(json.dumps(out, ensure_ascii=False, indent=1) if target == "json" else md)
            continue
        p = Path(target)
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(json.dumps(out, ensure_ascii=False, indent=1) if p.suffix == ".json" else md + "\n",
                     encoding="utf-8")
    for m, p in sorted(pooled.items()):
        for k, t in p.items():
            if t.n_utterances:
                sh = t.shares
                print(f"{m:34s} {k:9s} WER {100 * (t.wer or 0):6.2f}  " +
                      " ".join(f"{c}:{100 * sh[c]:4.1f}" for c in CODES), file=sys.stderr)
    return out


if __name__ == "__main__":
    main()
