# Why Arabic STT benchmarks mislead, and what Arabic Arena v2 does about it

*Research synthesis, 2026-10-18.* Nine parallel studies fed this page: public benchmarks and their
defects, Arabic orthography and a measured human floor, metrics and statistics, an inventory of Arabic
test data, telephony and robustness, benchmark integrity, evaluation tooling, the model landscape, and
an error audit with real model outputs. Numbers marked *(measured)* were computed for this study on our
own sets; the rest come from the cited sources. The design that follows from them is in
[METHODOLOGY.md](METHODOLOGY.md).

## 1. The short version

A WER on an Arabic set mixes recognition errors with five other things. Ranked by measured effect:

| # | Problem | Measured effect | v2 response |
|---|---|---|---|
| 1 | **Orthographic conventions** (no standard spelling for dialects; hamza, ة/ه, clitic spacing, numbers) | two humans transcribing the same MGB-3 audio disagree on **13.2 %** of words after the v1 normalizer; rescoring one public benchmark's released outputs with three normalizers moves vendors by up to 6 ranks (Kendall τ 0.71) | normalization levels L0–L3 with a measured human floor per level; space-insensitive alignment; multi-reference scoring |
| 2 | **Single references** | multi-reference scoring takes the best MGB-3 system from 37.5 → 29.3 and MGB-5's from 59.4 → 37.6 | MGB-3 ×4, MGB-5 ×4 (rebuilt), Mixat ×2 |
| 3 | **Engineering errors in leaderboards** | the public Arabic board's punctuation regex matched nothing for 19 months; rows were never recomputed after the fix (a perfect transcript scored 17.2 % on Casablanca) | versioned normalizer with golden tests; v1/v2 never mixed; raw texts kept for rescoring |
| 4 | **Contamination and benchmark fitting** | NADI-2026's public train split contains ~94 % of the Casablanca test set; fine-tunes trained on CV/MASC/MGB-2/SADA were listed as zero-shot; top open models reproduce *erroneous* reference spans 18–30 % of the time | in-domain flags as set keys, exposure share, zero-shot Arena, contamination checker |
| 5 | **Unbounded insertions and failures** | one repetition loop on one clip = 1.5 WER points on SADA; Whisper's SADA WER 68.7 → 46.2 when each utterance is capped | per-utterance cap; loops, bursts, collapse and bag-of-hallucinations reported separately; failed ≠ empty |
| 6 | **Reference noise** | three strong models agree on a different reading than the reference on **33 % of SADA** and **38 % of Mixat** utterances; by hand, 25–40 % of those references contain a wrong or missing word | reference audit queue; markup stripping; errata files |
| 7 | **Broken test-set construction and statistics** | MGB-5's HF test stores each recording 4×: 492 of our 1,000 v1 rows were duplicated speech; MGB-2's 1,000 rows come from 17 recordings, so iid intervals are 2–3× too narrow | MGB-5 de-duplication; joint cluster bootstrap; simultaneous rank sets |
| 8 | **Aggregation** | with an arithmetic mean, the call-center sets carried ~34 % of the ranking signal for a nominal 20 % | weighted geometric mean; effective weights and leave-one-set-out shown |
| 9 | **Simulated conditions taken at face value** | on the English suite, simulated telephony WER adds no ranking information beyond clean WER (partial Spearman 0.03 vs real phone sets, n = 10) | real-audio Arena next to the full Arena; degradation chain v2; validation plan |
| 10 | **Missing conditions** | no public Arabic board has real telephony, long-form, streaming latency, children, or domain speech | roadmap (§9) |

The net effect on our own board *(measured, 4 models × the 15 re-hosted set-conditions)*:

| Model | v1 Arena | v2 Arena [95 % CI] | v2 rank set |
|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 20.08 | **11.98** [10.99–12.92] | 1 |
| voxtral-mini-4b-realtime-arabic | 27.54 | **19.78** [18.80–20.68] | 2 |
| qwen3-asr-1.7b | 29.76 | **22.59** [21.63–23.52] | 3 |
| whisper-large-v3 | 39.22 | **23.91** [22.82–24.96] | 4 |

The order of these four does not change, but the gaps do: Whisper's distance to Qwen3 falls from 9.5
to 1.3 points, because most of it was repetition loops rather than recognition errors. (v1 Arena here
is the v1 formula on the same 15 set-conditions, not the full board.)

## 2. Public benchmarks and their defects

- **Only one live public Arabic STT board exists**: the Open Universal Arabic ASR Leaderboard (OUAAL,
  Elm; 38 models, unweighted mean of SADA, CV18, MASC clean/noisy, MGB-2, Casablanca). The HF Open ASR
  Leaderboard and Artificial Analysis have no Arabic.
- **OUAAL defects** *(verified in its code and data)*:
  - its punctuation regex (`[...@[\\]^_...]`) closes the character class early and removed nothing
    from 2025-01 to 2026-07-27; the fix came with a new و rule, and per-set numbers were never
    recomputed, so the board mixes two scorers;
  - no ة/ى folding: MASC references contain no ة, so a model that writes correct ة loses ≥ 7.6 % WER;
  - per-model scripts differ: Seamless gets the best of three language codes per test set (an oracle),
    Whisper is capped at 128 new tokens, Qwen-Omni gets an unseeded random prompt;
  - no in-domain flag. Under our normalizer on the same six sets, Cohere-Arabic and Audar tie
    (19.12 vs 19.19), whereas OUAAL shows Audar ahead (23.17 vs 25.87).
- **Whisper's `BasicTextNormalizer`**, used by several papers for Arabic, turns every diacritic into a
  space: a perfect undiacritized transcript scores 36–40 % WER on CV18 *(measured)*.
- **Vendor numbers** are mostly on internal sets; one vendor page quotes 3.1 % and 11.1 % FLEURS for the
  same model; another vendor's comparison chart relabels OUAAL's open-model numbers as competitors.
- **New in 2026**: GigaSpeechBench (7 Arabic regions × 20 h, per-segment outputs of 15 systems
  released, no licence on its card), Nuha-Speech, Perle code-switching, Arab Voices (repo 404).
- **The best new public model is missing from our registry and now added**: IFM's Jais-ASR (2026-10-06,
  Apache-2.0, 5.7 B, OUAAL rank 1 at 22.82).

## 3. Orthography: a measured human floor

MGB-3 (Egyptian YouTube) has four independent transcriptions of every test segment, and its authors
deliberately let transcribers spell as they liked. That makes it a direct measurement of how much
"error" is spelling. Pairwise inter-annotator WER, 2,467 test segments *(measured)*:

| Level | Pairwise WER | One annotator vs the other three (multi-ref) |
|---|---|---|
| raw | 20.8 % | 10.5 % |
| Whisper BasicTextNormalizer | 17.5 % | 8.6 % |
| **L1** (v1 arena normalizer) | **13.2 %** | 5.8 % |
| L1m (+ corpus markup removed) | 10.7 % | 4.4 % |
| L2 (dialect-lenient) | 8.6 % | 3.6 % |
| **L2 + space-insensitive alignment** | **7.0 %** | — |
| L3 consonant skeleton + space-insensitive (diagnostic) | 4.6 % | — |

- Where the 13.2 points go: corpus markup −2.5 (`ال#` partial words, `آ#` filled pauses), the variant
  table −1.0, seven Egyptian morpho-orthographic rules −0.75, fillers −0.2, space-insensitive merges
  −1.6. The rest (4.6 % at L3) is real disagreement: dropped or added يعني, ف, ما, يا.
- **Normalization removes noise, not signal.** On the five MGB-3 2017 challenge systems, L1 → L2+sp
  lowers system WER by 2.1–3.9 points (6.2 for humans), and the ranking AALTO < NDSC < JHU < MIT < BUT
  is identical at all seven levels.
- **MGB-5 (Moroccan)**: 45.9 % pairwise human disagreement at recording level; the best model scores
  46.6 %, i.e. single-reference WER on MGB-5 is at the human floor. With the v2 rebuild (one
  segmentation, the other annotators' overlapping text as references) the floor is 22.9 %.
- **Cross-dialect check (MADAR raw vs CODA, 5 cities)**: 15.3 % → 9.8 % from L1 to L2+sp; the gain is
  largest for Cairo and smallest for Beirut, Rabat and Tunis, whose residuals are consonant spellings
  (كتير/كثير, تاني/ثاني).
- **Markup leaking into references**: 4.8 % of MGB-3, 7.2 % of MGB-5 and 0.6 % of SADA reference words;
  74 MGB-5 rows were nothing but tags (`@@@فراغ`), scored 100 % for a model that correctly said nothing.
- **Code-switching script**: Mixat's transcript (English in Latin) and transliteration (English in
  Arabic script) columns differ by 11.5 % WER on code-switched utterances: a model writing English in
  Arabic script loses ~11 points for a legitimate transcription.
- **Number bugs in the v1 verbalizer**: `06:30` → "صفر سته ثلاثين", `6.5` → "سته خمسه", `50%` → "خمسين",
  `29¾` broken by NFKC, `3aref` (Arabizi) → "ثلاثه aref"; fixed in L1.

Literature anchors: multi-reference WER for dialects (Ali, Magdy, Bell & Renals, ASRU 2015); MGB-3
(Ali, Vogel & Renals 2017); clitic-tokenized scoring matches human rankings best (Ali, Khalifa & Habash,
Interspeech 2019); WERd's 11 M automatic variant pairs had ~8 % wrong pairs (a warning against
unconstrained lists); OIWER (ICASSP 2026) shows LLM-proposed, human-edited variant sets work for
languages without a standard orthography; CODA* (Habash et al. 2018) for dialect spelling conventions.

## 4. What a model's WER is made of

Every word error of four models on the six clean re-hosted sets was attributed automatically
(precision ≥ 95 % against 156 hand-labelled items) *(measured)*:

| Model | scoring artefacts (spelling, clitics, script, fillers, numbers) | all models disagree with the reference | MSA-ization | hallucination / truncation | genuine |
|---|---|---|---|---|---|
| Cohere-Arabic | 29.0 % | 13.4 % | 1.2 % | 9.1 % | 47.3 % |
| Qwen3-ASR-1.7B | 21.8 % | 10.2 % | 0.6 % | 0.5 % | 66.8 % |
| Whisper-large-v3 | 14.9 % | 7.5 % | 2.4 % | 25.4 % | 49.8 % |
| Voxtral-Arabic | 22.8 % | 10.4 % | 0.5 % | 6.9 % | 59.3 % |

- On degraded audio hallucination dominates: 19 % of Cohere's errors, 38 % of Whisper's, 43 % of
  Voxtral's.
- On Mixat only 38.5 % of Cohere's errors are genuine; its WER goes from 17.75 to 9.98 without the
  scoring artefacts.
- Three of the six model pairs reverse order under some reasonable metric (WER vs CER vs capped WER):
  a single number hides that two systems fail differently.
- The worst 5 % of utterances carry 41–51 % of a model's errors on the MSA sets.
- Whisper emitted «اشتركوا في القناة» ("subscribe to the channel") for 58 different references and
  «ترجمة نانسي قنقر» (a subtitle credit) 18 times.

## 5. References

- Share of utterances where three strong models agree on a reading different from the reference:
  SADA 33.1 %, Mixat 37.5 %, MASC-noisy 15.6 %, FLEURS 8.2 %, MASC-clean 6.6 %, CV18 3.7 %; a fourth
  model confirms 79–92 % of them. The signal had 100 % precision and 75 % recall against hand labels,
  but only when errors on a degraded copy were also required on the clean audio.
- SADA: `#غير_واضح` survives as a word in 24 references, laughter is written as words in 49, drum
  sounds are transcribed («دوم تتك»), 21–23 % of segments have more than one speaker (Cohere 39.3 % WER
  there vs 26.5 % on single-speaker clips), and 4.6 test hours are spoken by speakers who also appear
  in train.
- FLEURS references are the reading prompt, not what was said; every FLEURS ar_eg test row is
  labelled female; 428 rows contain only 283 distinct sentences. CV18 prompts contain typos and 21 %
  of its test clips have at least one down-vote.
- Benchmark fitting (Lebryk et al., arXiv 2608.19936): the lowest-WER open models reproduce erroneous
  reference spans 18–30 % of the time; a unanimous four-model panel flags reference errors with 93 %
  precision; fresh audio cut one model's error-following rate from 0.30 to 0.12.

## 6. Contamination

- **Casablanca**: 92–99 % of its test `seg_id`s and transcripts are in the public *train* split of
  NADI-2026 Subtask 1.1 (as 4 kHz copies). `nadi_robust` (NADI validation) also shares 6–42 exact
  seg_ids per country with Casablanca test.
- **Registry flags were wrong for leaderboard ranks 4–6**: Lemura-qwen3's card labels all its results
  in-domain; NVIDIA's FastConformer-ar (and Lemura-lite on top of it) trained on MASC, Common Voice 17
  and FLEURS; MMS on FLEURS. Corrected, as set keys.
- **Arabic-STT runs (gated references on our board)**: their training stream `kejue-common-voice` holds
  20 FLEURS ar_eg *test* sentences (37 of our 428 FLEURS rows); the bundles' contamination guard covered
  only the OUAAL sets, not FLEURS, MGB-3, MGB-5, Mixat, oist or NADI. Runs 4/5/5base also trained on
  clips of the lahgtna-v3-small test split, and runs 3/5/5base on MGB-3 train. That stream's labels come
  from Soniox stt-async-v5, which is itself an unranked reference on the board. Flags updated.
- **Common Voice**: 97–99 % of CV18 test clips are still in later test splits, but 193 (1.8 %) moved
  into CV22 dev, so they leak into models trained on train+dev of a later release. CV splits are
  speaker-disjoint, not sentence-disjoint: after trivial normalization 14.9 % of CV18 test rows (115
  of our 1,000) share their sentence with CV train, so any model trained on CV train has seen that
  text. MASC's official split, by contrast, is video-disjoint (1 of 209 test videos in train); re-split
  mirrors break this.
- **Candidate additions are already in some training sets**: Arabic-STT run 5 trained on LinTO,
  TEDxTN and TUNIFRA, so the proposed Tunisian sets would be in-domain for it.
- **Differential exposure is what reorders rankings**: on the sets no ranked model admits training on,
  the board reorders (e.g. Gemma-4-E2B 12 → 5). Uniform contamination rarely changes rankings.

## 7. Statistics and aggregation

- **Clusters** in our subsets: MGB-2 17 recordings, MGB-5 14 videos, Algerian CS 8 videos, MGB-3 31
  programmes, MASC ~100 videos, CV18 431 speakers. Treating MGB-3 annotators as systems, clustering by
  programme widens a system's interval 2.0–3.0× and a paired difference's 2.2–2.7× *(measured)*.
- **The v1 bootstrap** resampled utterances iid and each condition independently, although the
  degraded conditions reuse the same clean utterances, and it used percentile rank ranges, which are
  invalid near ties.
- **Minimum detectable difference** (80 % power) on one 1,000-utterance set at 30 % WER: 0.84 points
  between two checkpoints of one model, 1.5 between model families, 2.2–2.6 with episode effects,
  ~2.8 on a 300-utterance degraded set. On dialect sets, a 1–2 point gap is inside the spelling noise
  even when the interval excludes zero.
- **Aggregation**: the arithmetic mean gave call-center 33.8 % of the between-model spread (nominal
  20 %); the geometric mean gives clean 39 %, noisy 16 %, code-switch 4 %, telephony 22 %, call-center
  19 %. Dropping one set moved 4.0 models on average under the arithmetic mean and 0.7 under the
  geometric mean. Rank aggregation (Borda) reordered unrelated models in 12 of 19 cases when one model
  was removed.

## 8. Robustness: telephony, noise, hallucination

- **Simulation fidelity** *(measured in our code)*: the synthetic room response is extreme far-field
  (DRR −23 to −29 dB) where a handset caller has C50 > 20 dB; the packet-loss parameter is a transition
  probability, so nominal 1/2/5 % loss is really 1.9/3.8/9.1 %; 40 % of codec draws are G.711, which is
  nearly transparent (NB-PESQ 4.4); µ-law outweighs A-law although MENA networks use A-law; no wideband
  (VoLTE AMR-WB/EVS, WhatsApp Opus) or tandem coding.
- **Call-center difficulty is babble, not SNR**: Cohere-Arabic scores 40.5 / 40.6 / 43.1 % at
  ≥15 / 10–15 / 5–10 dB, but babble costs 10–15 points more than transport noise. The babble is 3–6
  intelligible Arabic talkers, so some models transcribe it (Whisper 143 % WER on Casablanca call-center)
  and others go silent (Voxtral-Arabic: 145 of 296 clips empty).
- **`nadi_robust`** is Casablanca audio downsampled to 4 kHz and back (arXiv 2609.27086), i.e. a
  2 kHz-band simulation, filed under "noisy".
- **Hallucination set saturated**: 11 of 19 models write words on ≥ 98 % of our noise-only clips; 25 %
  of the clips are intelligible babble; forcing the language bypasses Qwen3-ASR's own no-speech path.
- **Real Arabic call data** is not public: Maqsam's 132 h benchmark is unreleased; LDC has CALLHOME
  Egyptian and Gulf/Iraqi/Levantine CTS (licensed, 2003–07); BOLT/CALLHOME Egyptian CTS (LDC2025S09)
  and IWSLT Tunisian CTS (LDC2025S05) are newer licensed options.
- **Principled sources for a v2 chain**: ETSI ES 202 396-1 / TS 103 224 noise including call-center
  recordings (CC BY 4.0), 3GPP TS 26.131 send masks, ITU-T G.1050 loss profiles, P.56 active speech
  level. This machine's ffmpeg encodes AMR-WB, G.722, Opus FEC but not G.729, iLBC or EVS.

## 9. Data: what to add (inventory of 129 Arabic evaluation sets)

None of our 12 sources changed revision. The most valuable additions, with schemas verified on the Hub:

| Set | Adds | Size | Licence / access |
|---|---|---|---|
| `google/svq` (Arabic locales; columns `utt_id, waveform, locale, speaker_id, environment, text`) | **real noise** (clean, background speech, media, traffic) recorded on phones; Egyptian, Gulf, Levantine, Maghrebi accents; 215 speakers; entity-rich | 52k Arabic utterances (171k rows all locales) | CC-BY-4.0 |
| `echonova-ai/arabic-dialect-asr-benchmark` | the only human-referenced **Kuwaiti, Qatari, Omani, Syrian, Lebanese** | 8,925 clips, 20 h | gated, eval-only audio |
| `shams-nlp/shams` | **Levantine** with corrected orthography | 907 rows with audio | CC-BY-SA-4.0 |
| `QCRI/WASIL` (`prompt_transcription`, `prompt_dialect`) | in-the-wild **spoken queries**, incl. Sudanese | 1,416 | CC-BY-NC-SA-4.0 |
| `Perle-ai/ASR_Code_Switch` | Egyptian–English and Saudi–English code-switching | 1,200 rows (split `train`) | MIT |
| `MauriAI-lab/hassaniya-speech-test-v1` (`text, video_id, transcript_from_model_draft`) | **Hassaniya** | 408 | CC-BY-NC-4.0 |
| `mabahboh/sada2022-speakers` (`ShowName, Speaker, SegmentID`) | speaker and episode ids for SADA (clustered intervals, per-speaker caps) | 6,193 test | — |
| `Elyadata/CV18-NER` | named entities on CV18 test (entity WER) | 2,325 | CC-BY-NC-4.0 |
| TEDxTN, TUNIFRA, UFAL North Levantine, Quran-Lab, DAI-ASR (ar) | Tunisian, Syrian spontaneous, Quranic (incl. phone mic), real two-channel conversation | | mixed; some gated |

Not trustworthy as gold: WorldSpeech `ar_kw` (the letters ص ض ط ظ ق ح غ خ never occur in its human
transcripts), Lahgtna and other pseudo-labelled "dialect" corpora (useful audio, not references).
Still open: Iraqi, Sudanese, Libyan and Bahraini conversational speech, children, domain speech
(medical, finance, customer service) and real call-center audio — the case for a private held-out set.
Sample size: at 30–50 % WER, ±2 points needs ~10–12k reference words *and* ≥ 35–140 clusters
depending on between-cluster spread; adding utterances from the same few videos does not help.

## 10. Tooling verdicts

- **Alignment engines** agree on total errors (14 engines, 300,069 errors on 100k pairs) but split
  S/D/I differently; rapidfuzz is the fastest (0.28 s / 100k pairs vs 3.9 s for jiwer 4).
- **Avoid** for Arabic scoring: NeMo Arabic ITN (`عشرين جنيه` → `2/10 جنيه`), num2words (`200` → مئتا),
  Farasa (research-only licence), PyArabic/Tashaphyne/Qalsadi (GPL), Whisper BasicTextNormalizer.
  CAMeL Tools' morphological tokenizers exist only for MSA (GPLv2 database) and rewrite dialect words.
- **Useful optional extras**: GlotLID / OpenLID for sentence-level dialect labels; CAMeL text DID
  (MIT, 10/10 on our probes); GATE-AraBERT-v1, the only embedding that ranked every meaning flip below
  spelling variants (most embeddings score a dropped negation ≥ 0.83 cosine); an LLM judge needs ≥ 7 B.
- **Semantic metrics are diagnostics, never headlines**: they score an MSA paraphrase or an English
  translation about as well as a harmless spelling variant. No LLM judge has been validated for
  verbatim fidelity on dialectal Arabic.

## 11. Decisions left to the maintainer

1. **Weight of the simulated tracks** (telephony + call-center = 40 % of the Arena) while the
   simulation is unvalidated: keep, cap at 20 %, or headline the real-audio Arena.
2. **`nadi_robust`**: move it out of "noisy" (it is band-limited Casablanca audio, partly overlapping
   our `casablanca` set), demote it to a diagnostic, or drop it.
3. **Casablanca**: keep with a contamination flag (NADI-2026 train contains its test), down-weight,
   or move to a legacy track.
4. **Transcription style**: whether fillers, repetitions and fragments count (v2 drops fillers on both
   sides; a verbatim track would keep them as optional words).
5. **API results**: several vendors' terms forbid publishing benchmark results without consent
   (Deepgram, AssemblyAI, Cohere's hosted API, NVIDIA NIM); Soniox's current terms are ambiguous.
6. **The 37 FLEURS rows** seen by the Arabic-STT runs: flag (done) or drop from FLEURS scoring.

## Sources (selected)

- Ali, Magdy, Bell, Renals — Multi-reference WER for evaluating ASR for languages with no orthographic
  rules, ASRU 2015. Ali, Vogel, Renals — Speech recognition challenge in the wild: Arabic MGB-3, 2017
  (arXiv 1709.07276). Ali et al. — The MGB-5 challenge, ASRU 2019. Ali, Khalifa, Habash — Towards
  variability resistant dialectal speech evaluation, Interspeech 2019. Ali et al. — WERd, ASRU 2017.
- Habash et al. — Unified guidelines and resources for Arabic dialect orthography (CODA*), LREC 2018;
  Eryani et al. — MADAR CODA corpus, LREC 2020.
- Wang et al. — Open Universal Arabic ASR Leaderboard (arXiv 2412.13788) and its `eval.py`.
- Srivastav et al. — Open ASR Leaderboard (arXiv 2510.06961); Gandhi et al. — ESB (arXiv 2210.13352).
- McNamara et al. — Style-agnostic evaluation of ASR using multiple reference transcripts (arXiv
  2412.07937); Bhogale et al. — OIWER, ICASSP 2026 (arXiv 2603.00941).
- Hamed et al. — Benchmarking evaluation metrics for code-switching ASR, SLT 2022 (arXiv 2211.16319);
  Ugan et al. — PIER, ICASSP 2025 (arXiv 2501.09512).
- Koenecke et al. — Careless Whisper, FAccT 2024 (arXiv 2402.08021); Barański et al. — bag of
  hallucinations, ICASSP 2025 (arXiv 2501.11378); Atwany et al. — HER, Findings ACL 2025.
- Liu & Peng — Statistical testing on ASR performance via blockwise bootstrap, Interspeech 2020;
  Mogstad, Romano, Shaikh, Wilhelm — Inference for ranks, REStud 2024; Card et al. — With little power
  comes great responsibility, EMNLP 2020.
- Lebryk et al. — benchmark fitting in open ASR models (arXiv 2608.19936).
- NADI 2026 overview (arXiv 2609.27086); Talafha et al. — Casablanca, EMNLP 2024; Mixat, SIGUL 2024.
- ITU-T G.711, P.56; ETSI ES 202 396-1, TS 103 224; 3GPP TS 26.131.
