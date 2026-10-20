# Methodology

This page describes scoring **v2** (October 2026). The v1 scorer is kept unchanged as the `v1`
profile and the "v1 leaderboard", so every published v1 number can still be reproduced; see
[v1 scoring](#v1-scoring-previous) at the end. The evidence behind each v2 choice is summarized in
[RESEARCH.md](RESEARCH.md).

## Why v2

Measured on our own sets and on public Arabic boards:

- **Spelling, not recognition.** Two careful human transcribers of the same MGB-3 Egyptian audio
  disagree on 13.2 % of words under the v1 normalizer. A second human would score 13.65 % WER on
  our `mgb3_egy` set, where the best model scores 24.4 %.
- **Markup became reference words.** 4.8 % of MGB-3 and 7.2 % of MGB-5 reference words were corpus
  tags (`ال#`, `غير_واضح`, `@@@موسيقى`); a model that correctly outputs nothing for `@@@فراغ`
  scored 100 % WER.
- **Duplicated audio.** MGB-5's test split stores every recording once per annotator: 492 of the
  1,000 v1 rows overlapped another annotator's row of the same speech.
- **Loops dominated averages.** One repetition loop on one SADA clip cost 1.5 WER points; capping
  each utterance at its reference length moves Whisper-large-v3's SADA score from 68.7 to 46.2.
- **Intervals were 2–3× too narrow.** The 1,000 MGB-2 rows come from 17 recordings, MGB-5 from 14
  videos; v1 resampled utterances as if they were independent.
- **Only about half of a model's WER is recognition error.** An error audit of four models on the
  re-hosted sets attributed 15–29 % of clean-set word errors to scoring artefacts and 7–13 % to
  references that all models contradict.

## Test sets

1. Load the test split of the source dataset (only that split's parquet files are downloaded).
2. Keep rows with a non-empty reference and 1–30 s of audio (the 30 s cap keeps every model in
   its short-form regime; long-form is a separate future track).
3. Rank the rows by `sha256(source + "|" + row_uid)` and keep the first `n` (1,000 per set, split
   evenly across configs for multi-country sets). The selection is deterministic and new rows in
   the source do not reshuffle it.
4. Convert to 16 kHz mono FLAC. Each set's manifest records the source revision and selected ids.

Per-set options in `configs/suites/<lang>.yaml` (v2):

| Key | Meaning | Used by |
|---|---|---|
| `references` | meta fields holding further independent transcriptions, scored as multi-reference | MGB-3 (annotators 2–4), Mixat (`transliteration`: English in Arabic script), MGB-5 (rebuilt) |
| `multi_annotator` | the split stores several annotators' segmentations of the same audio: keep the annotator with the most segments, attach the others' time-overlapping text (> 50 % of their own duration) as alternative references, drop tag-only segments | MGB-5 |
| `markup` / `markup_extra` | corpus markup patterns stripped before scoring (default: all) | all |
| `cluster` | bootstrap cluster: speaker, video, recording or sentence (`{field, regex}`) | FLEURS (sentence), CV18 (speaker), MASC (video), MGB-2 (recording), MGB-3 (programme), MGB-5 (recording), Algerian CS (video) |
| `stratum` | design stratum for the bootstrap | Casablanca and NADI (country), Algerian CS (type) |
| `floor` | measured human disagreement on this set, per profile | MGB-3, MGB-5 |
| `simulated` | the audio is a simulation (NADI-2026 1.1 is Casablanca audio band-limited to 4 kHz) | NADI |
| `text_fixes` | corrected references keyed by a meta field, applied on top of the source text (and to built sets by `sttarena rescore`) | MGB-2 (6 official transcripts), SVQ (2.0.0 `transcript_truth`: what the speaker said) |
| `terms` / `terms_file` | each utterance's key terms, from a meta field or a side file keyed by a meta field, scored as key-term recall | SVQ (salient terms), CV18 (CV18-NER entities) |
| `filter` | keep rows whose column equals a value or is in a list | Shams (LangMedia rows), WASIL (Arabic prompts), SVQ-noisy (noise environments) |
| `balance` | equal quotas per value of a column (rare dialects get as many rows as common ones) | EchoNova (dialect) |
| `loader` / `data_dir` | a source with its own layout; `gigaspeechbench`: per-region metadata.json and an archive of whole recordings, cut into segments (only the recordings the ranking can reach are extracted) | GigaSpeechBench |
| `manifest` / `audio_field` | a JSON-lines manifest with relative audio paths, for repos that are not a loadable split; nested fields flatten with `.` | Hassaniya, WASIL, Perle |

## Degraded conditions

Each degraded utterance is generated with `seed = sha256(lang | utterance_id | condition)`. The
parameters used are stored in `meta.degradation`.

| Condition | Chain (v1) |
|---|---|
| `noisy` | background noise at 0–15 dB SNR. Categories: babble, street, cafe, transport, office, home, outdoor, misc, colored, hum |
| `telephony` | resample to 8 kHz → band-pass (250–400 Hz to 3.2–3.5 kHz) → line level −26 dBFS ± gain (−12…+6 dB) → 10% chance of clipping → codec → packet loss |
| `callcenter` | 40% chance of room reverb (RT60 0.2–0.7 s) → noise at 5–20 dB SNR (babble 40%, office, transport, street, cafe, home, hum, misc) → the telephony chain with more packet loss |

Codecs (v1 weights): G.711 µ-law 22 %, A-law 18 %, GSM-FR 12 %, AMR-NB 12.2k/7.4k/4.75k 14/10/6 %,
G.726 32k/16k 6/4 %, Opus-NB 10k 8 %, all through ffmpeg with the codec delay compensated.
Packet loss uses Gilbert-style bursts on 20 ms frames, concealed by attenuated repetition of the
previous frame. Models always receive 16 kHz input; 8 kHz telephony audio is upsampled, as a
deployed system would do.

Known issues of the v1 chain, measured in the robustness study: the synthetic room response is
extreme far-field (direct-to-reverberant ratio −23 to −29 dB); the packet-loss `rate` is the
good→bad transition probability, so nominal 1/2/5 % are 1.9/3.8/9.1 % frame loss; µ-law is weighted
above A-law although MENA networks use A-law; there is no wideband (VoLTE, WhatsApp) or tandem
coding; the call-center babble is 3–6 intelligible near-field talkers, so some models transcribe it
and others go silent. On the English suite, simulated telephony WER adds no ranking information
beyond clean WER when compared with real telephone sets (partial Spearman 0.03, n = 10). The
simulated tracks therefore weigh half as much in the v2 Arena and appear next to a **real-audio
Arena** on the v2 board. The v1 chain is kept unchanged. Its output is bit-exact for a given ffmpeg
build, but the AMR-NB and Opus rows depend on the encoder build: rebuilt with ffmpeg 6.1.1 (Ubuntu
24.04, libopencore-amrnb 0.1.6, libopus 1.4), every noisy row of the published fleurs_ar, cv18_ar and
sada sets came out identical, while 33–40 % of their telephony and call-center rows differed (in
fleurs_ar telephony: every AMR-NB and Opus row, and no G.711, G.726 or GSM-FR row). The board
therefore runs on the published Hub copies where they exist; mgb2, casablanca and mgb3_egy, which
cannot be re-hosted, were rebuilt with that ffmpeg for the 2026-10 re-run.

**Chain v2** (`version: 2` conditions, [`sttarena/degrade/chain_v2.py`](../sttarena/degrade/chain_v2.py)):
`telephony_v2` and `callcenter_v2` are the v2 Arena's telephony and call-center tracks since
2026-10-20; the SNR sweep and the padded clips are reported per group:

| Condition | What it builds |
|---|---|
| `telephony_v2` | device × network × storage profiles (A-law-first MENA codec mix, AMR-NB/WB, Opus, GSM-FR, G.722, tandem coding to G.711 A-law at the network edge); packet loss as Gilbert (mean loss π, burst B) on the *encoded* frames, concealed by the codec's own decoder; P.56 active speech level at −26 dBov; scored per network |
| `callcenter_v2` | a handset room response with a target DRR (C50 20–30 dB), environment noise with unintelligible babble at 15 % (8–16 far-field talkers from a pool disjoint from every test set), then `telephony_v2`; scored per noise type |
| `sweep` | each utterance × speech-shaped noise / babble / ambience × SNR 20, 10, 5, 0, −5 dB, the same noise segment at every SNR; scored per (noise, SNR): WER over 0–20 dB, SNR₅₀, SNR×2 ([`robustness.py`](../sttarena/degrade/robustness.py)) |
| `padded` | the clean utterance with 2, 8 or 20 s of silence, comfort noise, network tones or office noise before, after or around it, paired with the clean row: hallucination inside real speech |
| `noise_only_v2` | non-speech clips by group: silence-like, network tones (ringback, busy, congestion, SIT for 16 Arab networks), DTMF, office, environment, plus unintelligible babble reported separately |

Measured: nominal 1/2/5 % loss realizes 0.93/1.94/5.00 % (v1: 1.97/3.90/9.09 %); synthetic room
responses hit the target DRR within ±0.03 dB; the P.56 implementation matches the ITU-T STL C code
within 5·10⁻⁷ dB; codec delays are compensated within ±2 samples. Not modelled yet: uplink noise
suppression and AGC, jitter-buffer warping, EVS/G.729/iLBC (no encoders available), real measured room
and device responses (supported when installed under `data/noise/rir/`).

## Inference

- The language is forced (Whisper `ar`, Qwen `Arabic`, Cohere `ar`, Seamless `arb`, MMS `ara`,
  omniASR `arb_Arab`, Jais-ASR `ar`, which covers MSA and all dialects; per-set dialect codes would
  leak test metadata).
- Decoding is greedy (`num_beams=1`, `do_sample=False`); prompts are the model card's (Gemma 4:
  the card's ASR prompt with the text before the audio).
- Every model runs as released, in the precision of its published weights (fp32, fp16 or bf16).
  We never down-cast, autocast or quantize.
- Batches are sorted by length. A batch that raises is retried one utterance at a time; an
  utterance that still fails is recorded as `failed`: it scores as deletions, the set is marked
  incomplete and is left out of the ranked Arena. A failure is never passed off as an empty
  transcript.
- Every run records a protocol block in `summary.json` (decoding, precision, batching, backend
  arguments, library versions, scoring configuration).

## Scoring (v2)

References and hypotheses pass through the same normalizer, then an alignment decides what is an
error. Each utterance record keeps the raw texts and, per profile, the counts (n, C, S, D, I, merges,
character errors), so every number can be recomputed with `sttarena rescore` without re-running a
model.

### Normalization levels

Every level includes the previous one ([`sttarena/normalizers/levels.py`](../sttarena/normalizers/levels.py)).
The MGB-3 column is the pairwise WER between four human transcribers of the same audio, i.e. the
share of "errors" that is only spelling.

| Level | Adds | MGB-3 human floor |
|---|---|---|
| L0 raw | NFC + whitespace split | 20.8 % |
| L1 orthographic | the v1 normalizer (diacritics, tatweel, alef/hamza/yaa/taa-marbuta, punctuation, numbers as words) plus safe fixes: spoken times, decimals, percentages and fractions; ڨ ڭ گ→ق, ڢ→ف, ک→ك, ی→ي; a space at Arabic\|Latin boundaries; Latin accents; final يي→ي; bidi/zero-width marks; digits inside Latin words stay digits | 13.2 % |
| L1m corpus markup | event tags, unclear tags, `#` partial words and filled pauses, laughter tokens (parentheses are kept: they hold real speech in FLEURS, MGB-3 and Casablanca) | 10.7 % |
| L2 dialect-lenient | fillers and interjections, elongation, a same-lexeme variant table ([`data/ar_variants.tsv`](../sttarena/normalizers/data/ar_variants.tsv)), seven audited dialect rules with exception lists, dialect number words | 8.6 % (7.0 % with space-insensitive alignment) |
| L3 consonant skeleton | ث→ت, ذ→د, ظ→ض, ق→ا, vowel letters dropped; diagnostic only, it merges ده/دي and هو/هي | 4.6 % |

The variant table admits only the same word spelled differently (برضو/برضه, ف/في, كانوا/كانو),
never synonyms or dialect alternants (ايش/شو/ايه). On the five MGB-3 2017 challenge systems the
ranking is identical at every level, while system WER drops 2.1–3.9 points against 6.2 for humans:
the folds remove spelling noise, not recognition errors. Known, documented collisions: الي (MSA
"to") with اللي, ميه "water" with "hundred".

### Alignment

- **Plain**: unit-cost Levenshtein over canonical words (rapidfuzz).
- **Space-insensitive** (`sp`): zero-cost k:1 and 1:k merges (k ≤ 3 surface tokens) when the
  concatenation, canonicalized, equals the token on the other side: ما فيش = مفيش, يا ريت = ياريت,
  قال لي = قالي (de-gemination at the junction), بالنسبة لي = بالنسبالي. Concatenations are built from
  surface tokens and then folded, so ف انا matches فانا. A merged block counts as correct reference
  words; the denominator is unchanged.
- **Multi-reference**: the references are progressively aligned into a confusion network; a
  hypothesis word is correct if it is in its slot and a slot is skippable when some reference
  omitted the word. The best pivot is used and the denominator is the mean reference length, so it
  is the same for every system. AV-WER (the mean of single-reference WERs) is reported too.

### Profiles

| Profile | Normalization + alignment | Shown as |
|---|---|---|
| `v1` | the v1 normalizer, plain, primary reference only | v1 compatibility |
| `L1` | L1, plain (multi-reference where available) | Strict WER |
| `L2` | L2, plain | diagnostic |
| `L2sp` | L2, space-insensitive (multi-reference where available) | **headline** |

Every v2 profile reports corpus WER with each utterance's errors **capped at its reference length**
(a 400-word loop on a 10-word utterance costs 10 errors, as an empty output would), the uncapped
WER, CER without spaces (capped), S/D/I shares, MER, the share of utterances with WER > 100 % and
the 90th-percentile utterance WER. Utterances whose reference is empty after normalization (tag-only
references) leave the WER denominator and are evaluated as non-speech.

### Diagnostics (not in the Arena)

From the headline alignment of every utterance:

- **Hallucination on speech**: loop rate (a 1–4-gram repeated ≥ 4 times in a row and ≥ 2 more
  than in the reference), insertion-burst rate (≥ 5 consecutive insertions, ≥ 3 for short
  references), trailing insertions, long-output rate, over-generation (|h| > 2|r| + 5), collapse
  (|r| ≥ 5 and |h| < 0.2|r|), empty-output, failure and invalid-UTF-8 rates.
- **Non-speech clips**: share of clips with any output and with ≥ 3 words (Wilson intervals),
  inserted words per minute, loop share, and the share of outputs containing a phrase of the **bag
  of hallucinations** (n-grams that several models emit on several clips, e.g. ترجمة نانسي قنقر).
- **Code-switching**: WER restricted to Latin-script reference words (the embedded language), and
  the Latin share of references and hypotheses (wrong-script rate).
- **MSA-ization**: share of reference dialect markers (مش، عايز، شو، ديال …) the hypothesis keeps,
  and the share aligned to an MSA equivalent (ليس، أريد، ماذا …): a model that "translates" dialect
  speech into MSA keeps few markers.
- Per-group scores when a condition declares `group_by` (e.g. an SNR sweep scored per noise × SNR).
- **Key-term recall**: on sets with `terms`, the share of an utterance's key terms (SVQ salient terms:
  names, places, question words; CV18-NER named entities) that the hypothesis contains after the same
  normalization, matched as the aligner matches merges (canonical form, spaces ignored). Terms the
  normalized reference does not contain are not counted. The board's *Terms missed* pools the real
  recordings that have terms (`svq_ar`, `svq_ar_noisy`, `cv18_ar` clean); Wilson intervals per set.

## Aggregation (v2)

- **Per set**: the headline profile's capped corpus WER.
- **Arena WER v2**: weighted **geometric** mean over sets, each set weighing its track's weight
  divided by the number of sets in the track, with a floor of 0.5 % WER. Track weights (suite
  `scoring.v2`): clean 50 %, code-switching 15 %, noisy 15 %, telephony 10 %, call-center 10 %. The
  simulated channel tracks weigh half their v1 weight because the simulation is not validated
  against real calls: on the English suite, simulated-telephony WER adds no information about WER on
  real telephone sets once clean WER is known (partial Spearman 0.03, 10 models). Simulated audio is
  32 % of the v2 Arena (52.5 % with the v1 weights). `nadi_robust` (Casablanca audio band-limited to
  4 kHz, partly the same utterances as `casablanca`) is scored but not weighted. Since 2026-10-20,
  when every ranked model had results on them, the telephony and call-center tracks take the chain-v2
  conditions (`telephony_v2`, `callcenter_v2`; suite `scoring.v2.condition_tracks`); the v1 board
  keeps the v1 chain. A geometric mean is scale-free per set: a 10 % relative gain counts the same on FLEURS
  (4.6 → 4.1) as on MGB-5 (46 → 41). With the arithmetic mean the high-WER call-center sets carried
  about 34 % of the ranking signal for a nominal 20 %. The board shows the **effective weights**
  (each track's share of the between-model spread) and a leave-one-set-out stability check.
- **Arithmetic** column: the weighted arithmetic mean of the same set scores.
- **Strict (L1)**: the same aggregation over L1 WER, comparable with orthography-only boards.
- **Real audio**: the Arena over clean sets whose audio is not simulated.
- **Zero-shot**: the Arena over the sets no ranked model trained on, and per model the
  **exposure**, the share of Arena weight on sets whose training split it saw (registry
  `in_domain`, as set keys; `training_data: undisclosed` marks models whose card does not say).
- **Human floor and headroom** per set where the floor was measured.

## Uncertainty (v2)

[`sttarena/stats.py`](../sttarena/stats.py):

- **Joint cluster bootstrap**: per source set, one stratified draw of cluster multiplicities per
  replicate, shared by every condition built from that set (degraded conditions reuse clean
  utterances) and by every model, so comparisons stay paired. Sets without a cluster key are
  resampled iid and flagged as "likely too narrow" on the board (SADA, Mixat, Casablanca and NADI
  have no episode key in their mirrors).
- **Rank sets**: simultaneous confidence sets for ranks from intervals on all pairwise differences
  (Mogstad, Romano, Shaikh & Wilhelm 2024). Models whose rank sets overlap are not separated.
- **Paired tests**: cluster sign-flip permutation test (exact when 2^G ≤ R); MAPSSWE-style
  matched pairs and Wilcoxon only for comparability with older papers; Holm / Benjamini–Hochberg.
- **Minimum detectable difference**: MDE = 2.80 × SE of a paired difference. On a single
  1,000-utterance set at 30 % WER, differences below about 1.5–2.5 points between different model
  families are not reliably detectable; on a 300-utterance degraded set, about 3 points.

## References and audits

- **MGB-2**: the parquet mirror (`MohamedRashad/mgb2-arabic`) was checked against the official
  gated `QCRI/mgb2` test set (`text.non_overlap_speech`). All 1,000 selected segments are official
  test segments. Six references had their English words garbled by a Buckwalter round trip in the
  mirror; they are restored from the official transcripts (`configs/fixes/mgb2_refs.json`).
- A fix is applied when a set is built, and `sttarena rescore` patches already-built sets and
  re-scores the saved predictions without re-running any model.
- `sttarena audit` measures human floors on multi-annotator data, audits the variant table for
  unintended merges, flags suspicious references (speaking-rate outliers, markup, duplicates and
  time overlaps, and model consensus against the reference) and checks test/train overlap
  (n-gram coverage, MinHash near-duplicates, id joins) and contamination residuals.

## Known limitations

- **References.** In the error audit, all three strong models agreed on a reading different from
  the reference on 33 % of SADA and 38 % of Mixat utterances (4–8 % on FLEURS, CV18, MASC-clean); by
  hand, 25–40 % of SADA and Mixat references contain at least one wrong or missing word. FLEURS
  references are the reading prompt, not what was said. A cleaning pass is on the roadmap.
- **Contamination.** NADI-2026 Subtask 1.1's public train split contains about 94 % of the
  Casablanca test set; several fine-tunes train on CV, MASC, MGB-2 or SADA train splits. In-domain
  models are flagged and the zero-shot score excludes their sets, but undisclosed training data
  cannot be checked.
- **Dialect rules** were designed and validated on Egyptian (MGB-3) and checked on MADAR's five
  cities; their gains are smaller for Levantine and Maghrebi spelling.
- **Simulated telephony** is not yet validated against real Arabic calls; no public real Arabic
  call set exists.
- **Numbers.** Arabic numbers are scored as spoken words and English numbers as digits, so a
  missed year costs about four errors in Arabic and one in English.

## v1 scoring (previous)

The v1 board stays reproducible: profile `v1` (and the "v1 leaderboard" section of the README).

- **Normalizer**: NFKC, remove diacritics, tatweel and Quranic marks; unify أ/إ/آ/ٱ→ا, ؤ→و, ئ→ي,
  ى→ي, ة→ه, پ→ب, ڤ→ف, delete ء; digits to ASCII, then written out as words in the genitive form
  ("25" → "خمسه وعشرين"), nominative number words folded (عشرون→عشرين, مائة→ميه); punctuation to
  spaces; lowercase Latin; remove `[...]`/`<...>` tags; attach a standalone و to the next word.
- **WER and CER** at corpus level with jiwer, uncapped; empty references dropped; one reference.
- **Track**: the unweighted mean over the track's sets. **Arena**: the weighted arithmetic mean of
  the track scores. **Uncertainty**: iid paired bootstrap over utterances, percentile rank ranges.
- **RTFx**: audio seconds divided by transcription seconds, over all sets, after a warm-up. Model
  loading is excluded.

## Acknowledgements

MGB-2 is used under the QCRI-ALT Corpus research licence, which requires published results to
carry this acknowledgement:

> QCRI-AL Jazeera Corpus, used by Arabic Arena, was developed by Qatar Computing Research Institute
> ("QCRI"), an institute within the Hamad Bin Khalifa University ("HBKU") a member of the Qatar
> Foundation for Education, Science and Community Development and the Data provided courtesy of
> Al Jazeera.
