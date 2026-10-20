# Roadmap

Every item below is tracked as a GitHub issue; milestones group them. The research behind the v2
items is summarized in [RESEARCH.md](RESEARCH.md).

## M1 — Arabic v1 (open models, local GPU) ✅
- [x] Core package: dataset builder, normalizers, corpus WER/CER, runner, leaderboard aggregation
- [x] Arabic normalizer aligned with the Open Universal Arabic ASR Leaderboard (+ ة/ى folding)
- [x] 12 Arabic test sets: MSA read (FLEURS, CV18), broadcast (MGB-2), YouTube (MASC clean/noisy),
      Gulf (SADA), 8 dialects (Casablanca), Egyptian (MGB-3), Moroccan (MGB-5),
      code-switching (Mixat, Algerian), NADI-2026 (band-limited dialects)
- [x] Simulated phone-channel tracks: telephony (codecs + band-limit + packet loss) and
      call-center (babble/office/street noise + reverb + codec)
- [x] First batch of open models on RTX 5070 Ti; redistributable sets on the HF Hub; README board and site

## M2 — Scoring v2: measure recognition, not spelling ✅ (2026-10)
- [x] Normalizer v2 with levels L0–L3, versioned variant table and seven audited dialect rules;
      human floor measured on MGB-3 (13.2 % → 7.0 % between transcribers)
- [x] Corpus-markup stripping per set (`@@@` events, `غير_واضح`, `#` partial words, laughter)
- [x] Number fixes: times, decimals, percent, fractions, digits inside Latin words
- [x] Space-insensitive alignment (ما فيش = مفيش) and multi-reference scoring (MGB-3 ×4, Mixat ×2)
- [x] Per-utterance error cap, uncapped WER kept as a diagnostic; failed ≠ empty output
- [x] MGB-5 de-duplication: one annotator's segmentation, the others as alternative references
- [x] Diagnostics: loops, insertion bursts, collapse, over-generation, invalid output, bag of
      hallucinations, Latin-word WER for code-switching, dialect-marker retention (MSA-ization)
- [x] `sttarena score` / `compare` for any references + hypotheses; `sttarena rescore` upgrades v1 results
- [x] Joint cluster bootstrap, simultaneous rank sets, sign-flip tests, MDE (`sttarena/stats.py`)
- [x] Geometric Arena with effective weights, leave-one-set-out stability, real-audio and zero-shot
      views, exposure per model, human floor per set
- [x] Registry: contamination flags as set keys, `training_data: undisclosed`, Jais-ASR, Gemma-4-E4B,
      omniASR v2, more dialect fine-tunes
- [x] v2 Arena weights: simulated channels halved (telephony and call-center 10 % each), the freed weight
      on real recordings; `nadi_robust` scored as an unweighted diagnostic ([RESEARCH.md §11](RESEARCH.md))
- [x] Re-run every board model on one A10 and publish the v2 board (v1 → v2 rank-change table:
      [RESEARCH.md §12](RESEARCH.md)); the Soniox API reference keeps its v1-only run
- [ ] Error budget next to WER (scoring artefacts / reference / hallucination / genuine) on every set

## M3 — References and contamination
- [ ] Reference audit queue: model consensus against the reference (SADA 33 %, Mixat 38 % of utterances),
      speaking-rate outliers, markup; human adjudication and versioned errata files
- [ ] Double-transcribe 200 utterances per dialect set to measure floors beyond Egyptian and Moroccan
- [ ] Variant-proposal programme for single-reference dialect sets (OIWER-style: LLM proposes
      same-word spellings, native speakers post-edit)
- [ ] Contamination checks on every set (n-gram coverage, MinHash, id and audio overlap); re-check NADI
      val against Casablanca (the 37 FLEURS rows found in a training bundle stay flagged, not dropped)
- [ ] Episode/show keys for SADA, Mixat, Casablanca and NADI (clustered intervals)
- [ ] Private held-out Arabic set (dialects, real calls, numbers/entities), aggregates only
- [ ] Benchmark-fitting probes (does a model reproduce a corpus's reference errors and spelling conventions?)

## M4 — Telephony & robustness
- [x] Degradation chain v2: realistic room responses, packet loss by (mean loss, burst) on encoded frames,
      A-law-first codec mix, wideband (AMR-WB, G.722, Opus) and tandem coding, P.56 speech level
- [x] Unintelligible babble (8–16 far-field talkers from a disjoint pool)
- [x] SNR sweep (20/10/5/0/−5 dB × noise types) and its summaries: SNR₅₀, SNR×2, WER over 0–20 dB
- [x] Hallucination set v2 (network tones, DTMF, office, environment, non-target speech) and padded utterances
- [ ] Build the v2 conditions and run the models on them; competing-talker condition; hold music, vocal sounds
- [ ] Uplink noise suppression / AGC artefacts, jitter-buffer warping, measured room and handset responses
- [ ] Real-channel validation set by re-transmission (2G/3G, VoLTE, WhatsApp, SIP, landline, handset);
      then revisit the simulated tracks' weight and move the Arena to the chain-v2 conditions
- [ ] Real Arabic call-center speech (LDC CTS builder, commissioned role-play calls, partners)
- [ ] Stereo call (agent + customer) long-form evaluation; streaming latency track

## M5 — English suite
- [x] LibriSpeech, AMI, Earnings22, GigaSpeech, SPGISpeech, VoxPopuli, CV, FLEURS, EdAcc, URGENT-2024
- [x] Real telephony: MInDS-14, Vystadial VoIP
- [ ] Remaining English models (Canary-Qwen-2.5B, Granite-Speech)

## M6 — Leaderboard UX
- [x] Interactive site: WER vs speed, per-dialect, per-condition charts; v1/v2 scorer toggle
- [x] HF Space mirror
- [ ] Model submission flow (verified / reproduced / self-reported tiers, training-data attestation)
- [ ] Per-dialect breakdown everywhere (Casablanca / NADI countries, SADA dialect labels)
- [ ] Human-preference side board (dialect-matched raters, Bradley–Terry)

## Out of scope
Closed APIs are not ranked; they appear as unranked references on the re-hosted sets, subject to
their terms of service (several vendors forbid publishing benchmark results without consent).
