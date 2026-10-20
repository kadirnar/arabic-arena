# Arabic Arena 🎙️

**A multi-dataset WER/CER benchmark for Arabic and English speech-to-text, built for real-world
conditions, especially phone calls.**

**Interactive leaderboard:** [Hugging Face Space](https://huggingface.co/spaces/kadirnar/arabic-arena) ·
[GitHub Pages](https://kadirnar.github.io/arabic-arena/)

A single test set is a poor predictor of how an STT model behaves in production: models that
lead on read MSA can fall apart on Gulf TV dialogue, Darija, code-switching or an 8 kHz
call-center line. Arabic Arena scores every model on **many** public test sets plus **simulated
telephony and call-center channels**, and averages them into one Arena score, in the style of
[Artificial Analysis](https://artificialanalysis.ai/speech-to-text) and the
[Open Universal Arabic ASR Leaderboard](https://huggingface.co/spaces/elmresearchcenter/open_universal_arabic_asr_leaderboard).

- 🇸🇦 **Arabic suite**: 24 test sets covering MSA and 20+ dialects (incl. Iraqi, Syrian, Sudanese,
  Kuwaiti, Qatari, Omani, Tunisian, Hassaniya), code-switching, real phone noise (SVQ), assistant
  commands, plus 16 degraded sets
- 🔎 **Key-term recall**: names, places and query words the model misses (SVQ salient terms, CV18
  named entities), next to WER
- 📞 **Telephony and call-center tracks**: band-limited 8 kHz audio, G.711/GSM/AMR-NB/G.726/Opus
  codecs, packet loss, clipping, plus background babble/office/street noise and room reverb.
  Every degraded set is reproducible and records its parameters.
- 🇬🇧 **English suite**: in progress (see the [roadmap](docs/ROADMAP.md))
- 📊 **Corpus-level WER and CER**, a per-track macro average, a weighted Arena score, and RTFx
  measured on a local GPU
- 🧰 **Scoring v2 and a library that scores anything**: dialect-aware normalization levels,
  space-insensitive and multi-reference alignment, hallucination / code-switching / MSA-ization
  diagnostics, cluster-bootstrap intervals and rank sets, reference and contamination audits
  ([how and why](docs/METHODOLOGY.md), [research](docs/RESEARCH.md))

## 🏆 Arabic leaderboard

<!-- LEADERBOARD:ar:START -->
| # | Model | Params (B) | **Arena WER v2** | 95% CI | Rank set | Arena CER v2 | Clean | Code-switch | Noisy | Telephony | Call-center | Strict (L1) | Arithmetic | Real audio | Zero-shot | Exposure | Halluc. ≥3 words | v1 Arena | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | 2.07 | **14.25** | 13.24–15.15 | 1 | 7.97 | 11.11 | 23.49 | 13.65 | 14.64 | 24.23 | 15.85 | 19.21 | 13.22 | 20.87 | — | 64.33 | 27.69 | 265.9 |
| 2 | [audar-asr-v1-turbo](https://huggingface.co/audarai/Audar-ASR-V1-Turbo) | 2.35 | **17.26** | 16.26–18.13 | 2 | 8.51 | 13.61 | 25.11 | 16.54 | 19.26 | 30.80 | 18.47 | 22.52 | 15.70 | 25.55 | — | 49.00 | 31.75 | 59.3 |
| 3 | [voxtral-mini-4b-realtime-arabic](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-Arabic) | 4.43 | **20.08** | 19.11–21.08 | 3–4 | 10.18 | 16.10 | 22.89 | 21.00 | 24.64 | 37.93 | 21.69 | 24.53 | 17.52 | 24.23 | — | 6.33 | 34.85 | 20.1 |
| 4 | [nvidia-fastconformer-ar-pc](https://huggingface.co/nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0) † | 0.12 | **20.30** | 19.21–21.31 | 3–4 | 10.70 | 15.95 | 36.28 | 18.08 | 20.98 | 32.67 | 21.64 | 28.06 | 19.21 | 34.63 | 34% | 25.00 | 35.69 | 655.9 |
| 5 | [cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | 2.07 | **21.94** | 20.83–22.98 | 5–6 | 12.13 | 17.02 | 48.61 | 17.56 | 22.66 | 32.02 | 23.18 | 29.70 | 21.39 | 40.57 | — | 66.00 | 38.66 | 254.1 |
| 6 | [lemura-arabic-asr-qwen3](https://huggingface.co/lemuralabs/lemura-arabic-asr-qwen3) † | 2.04 | **22.08** | 20.98–23.17 | 5–6 | 11.02 | 18.06 | 28.77 | 21.48 | 24.54 | 38.00 | 23.58 | 25.80 | 20.14 | 31.23 | 57% | 43.67 | 35.84 | 40.2 |
| 7 | [lemura-arabic-asr-lite](https://huggingface.co/lemuralabs/lemura-arabic-asr-lite) † | 0.11 | **24.39** | 23.21–25.50 | 7–8 | 12.98 | 18.84 | 46.67 | 23.12 | 23.97 | 36.99 | 25.50 | 30.17 | 23.17 | 41.30 | 34% | 9.33 | 37.43 | 790.2 |
| 8 | [gemma-4-e2b-it](https://huggingface.co/google/gemma-4-E2B-it) | 5.10 | **24.45** | 23.49–25.47 | 7–8 | 12.13 | 19.58 | 28.76 | 26.41 | 28.90 | 43.83 | 26.03 | 28.76 | 21.39 | 27.54 | — | 85.67 | 41.59 | 26.3 |
| 9 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **25.64** | 24.51–26.70 | 9–10 | 11.71 | 22.44 | 29.50 | 23.73 | 28.35 | 41.10 | 26.91 | 31.08 | 23.82 | 35.08 | — | 37.33 | 39.68 | 75.5 |
| 10 | [whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | 1.54 | **26.02** | 24.78–27.25 | 9–10 | 13.49 | 21.79 | 34.48 | 24.13 | 28.73 | 41.92 | 27.30 | 31.84 | 24.05 | 36.47 | — | 54.33 | 49.52 | 37.4 |
| 11 | [audar-asr-v1-flash](https://huggingface.co/audarai/Audar-ASR-V1-Flash) | 0.78 | **26.95** | 25.83–28.09 | 11–12 | 12.96 | 23.13 | 32.08 | 25.70 | 29.85 | 43.17 | 28.28 | 32.08 | 24.88 | 35.82 | — | 23.67 | 41.97 | 35.6 |
| 12 | [voxtral-mini-4b-realtime-2602](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602) | 4.43 | **27.48** | 26.40–28.67 | 11–13 | 16.17 | 22.85 | 30.61 | 27.65 | 32.52 | 49.19 | 28.79 | 33.48 | 24.36 | 34.43 | — | 7.67 | 44.60 | 20.1 |
| 13 | [whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) | 0.81 | **28.38** | 27.12–29.64 | 12–13 | 14.58 | 24.23 | 33.57 | 26.59 | 32.61 | 46.74 | 29.70 | 34.37 | 26.00 | 37.94 | — | 71.00 | 63.67 | 83.2 |
| 14 | [qwen3-asr-arabic-ksa](https://huggingface.co/vadimbelsky/qwen3-asr-arabic-ksa) | 2.04 | **29.85** | 28.66–30.99 | 14 | 14.07 | 26.74 | 32.79 | 27.61 | 33.33 | 45.22 | 31.23 | 34.87 | 27.91 | 39.38 | — | 99.67 | 45.39 | 66.7 |
| 15 | [qwen3-asr-arabic-uae](https://huggingface.co/vadimbelsky/qwen3-asr-arabic-uae) | 2.04 | **31.00** | 29.79–32.19 | 15 | 14.79 | 27.77 | 33.74 | 29.16 | 34.21 | 47.01 | 32.40 | 35.93 | 28.96 | 40.08 | — | 100.00 | 46.59 | 84.8 |
| 16 | [qwencleo-asr](https://huggingface.co/mohammedaly22/QwenCleo-ASR) | 2.04 | **32.09** | 31.00–33.22 | 16–17 | 15.53 | 27.37 | 39.50 | 32.50 | 34.25 | 47.78 | 33.60 | 37.34 | 29.74 | 36.52 | — | 97.00 | 50.64 | 32.2 |
| 17 | [nemotron-3.5-asr-arabic-dialectal-v2](https://huggingface.co/oddadmix/nemotron-3.5-asr-arabic-dialectal-v2) | 0.64 | **33.06** | 31.83–34.33 | 16–17 | 15.27 | 28.68 | 35.35 | 33.30 | 38.08 | 52.28 | 34.37 | 36.77 | 30.02 | 37.31 | — | 18.00 | 45.83 | 311.9 |
| 18 | [qwen3-asr-0.6b](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf) | 0.94 | **36.98** | 35.77–38.20 | 18 | 16.91 | 33.54 | 38.52 | 34.75 | 42.18 | 54.54 | 38.17 | 41.02 | 34.51 | 44.93 | — | 30.67 | 50.10 | 75.2 |
| 19 | [moulsot-v0.3](https://huggingface.co/atlasia/moulsot.v0.3) | 2.04 | **40.83** | 39.52–42.22 | 19 | 20.21 | 35.97 | 38.81 | 41.97 | 50.22 | 64.75 | 42.32 | 44.62 | 36.67 | 43.95 | — | 71.33 | 61.81 | 23.6 |

WER/CER in %, lower is better. Per set: profile `L2sp` (dialect-lenient normalization, space-insensitive alignment, multi-reference where available, errors capped per utterance). Arena: weighted geometric mean over sets (track weight split evenly over its sets; Clean 50%, Code-switch 15%, Noisy 15%, Telephony 10%, Call-center 10%, not weighted: nadi_robust). Strict (L1): the same aggregation of orthographic-only WER. Real audio: the Arena over the clean sets whose audio is not simulated (no telephony, call-center, added noise or band-limiting). Zero-shot: Arena over the sets no ranked model trained on (algerian_cs, mgb3_egy, mgb5_mor, mixat_cs). Exposure: share of the Arena weight on sets whose training split the model saw (†). Halluc. ≥3 words: share of noise-only clips (silence, hold, line noise, distant chatter) on which the model wrote three or more words; not part of the Arena. 95% CI and rank set: joint cluster bootstrap (speakers / videos / recordings / sentences resampled together across a set's conditions and across models) and simultaneous rank confidence sets (Mogstad et al. 2024): models whose rank sets overlap are not separated by this benchmark.
Effective track weights (share of the between-model spread of the Arena): Clean 58%, Code-switch 6%, Noisy 16%, Telephony 11%, Call-center 9%.
Intervals likely too narrow on: algerian_cs/clean (few clusters: G=8), casablanca/callcenter_v2 (iid: no cluster key), casablanca/clean (iid: no cluster key), casablanca/telephony_v2 (iid: no cluster key), mgb2/callcenter_v2 (few clusters: G=17), mgb2/clean (few clusters: G=17), mgb2/noisy (few clusters: G=17), mgb2/telephony_v2 (few clusters: G=17), mgb5_mor/clean (few clusters: G=14), mixat_cs/clean (iid: no cluster key), sada/callcenter_v2 (iid: no cluster key), sada/clean (iid: no cluster key), sada/noisy (iid: no cluster key), sada/telephony_v2 (iid: no cluster key).

<details><summary>Per-set WER v2 (%)</summary>

| Model | fleurs_ar/clean | cv18_ar/clean | masc_clean/clean | mgb2/clean | sada/clean | casablanca/clean | mgb3_egy/clean | mgb5_mor/clean | mixat_cs/clean | algerian_cs/clean | masc_noisy/clean | fleurs_ar/noisy | cv18_ar/noisy | mgb2/noisy | sada/noisy | fleurs_ar/telephony_v2 | cv18_ar/telephony_v2 | mgb2/telephony_v2 | sada/telephony_v2 | casablanca/telephony_v2 | mgb3_egy/telephony_v2 | fleurs_ar/callcenter_v2 | cv18_ar/callcenter_v2 | mgb2/callcenter_v2 | sada/callcenter_v2 | casablanca/callcenter_v2 | mgb3_egy/callcenter_v2 | nadi_robust/clean |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| *human floor* | — | — | — | — | — | — | 3.48 | 22.86 | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |
| cohere-transcribe-arabic-07-2026 | 4.04 | 4.32 | 4.01 | 9.75 | 29.51 | 36.78 | 12.92 | 24.24 | 14.23 | 38.76 | 13.52 | 5.31 | 11.76 | 13.89 | 40.39 | 5.01 | 7.68 | 10.48 | 35.62 | 39.80 | 17.21 | 8.26 | 18.44 | 17.71 | 47.72 | 52.05 | 30.20 | 52.25 |
| audar-asr-v1-turbo | 5.29 | 7.05 | 5.28 | 9.54 | 25.19 | 40.95 | 15.81 | 38.32 | 13.32 | 47.32 | 16.24 | 7.96 | 16.50 | 14.79 | 39.30 | 7.30 | 12.49 | 11.82 | 34.82 | 52.85 | 25.71 | 14.26 | 24.78 | 20.29 | 48.58 | 62.48 | 39.25 | 55.84 |
| voxtral-mini-4b-realtime-arabic | 6.65 | 11.05 | 7.03 | 11.11 | 31.98 | 44.86 | 18.91 | 28.95 | 15.65 | 33.47 | 18.90 | 10.55 | 21.84 | 17.79 | 52.66 | 10.00 | 20.84 | 14.30 | 45.41 | 58.60 | 28.22 | 18.75 | 33.47 | 24.94 | 60.47 | 69.53 | 45.26 | 62.31 |
| nvidia-fastconformer-ar-pc | 5.42 | 5.81 | 4.45 | 12.93 | 39.88 | 53.55 | 20.14 | 53.77 | 24.60 | 53.51 | 17.59 | 7.69 | 14.16 | 19.44 | 51.91 | 7.23 | 9.89 | 15.29 | 47.28 | 58.60 | 28.16 | 12.88 | 21.71 | 24.88 | 60.47 | 70.27 | 41.11 | 67.43 |
| cohere-transcribe-03-2026 | 6.58 | 6.75 | 5.35 | 11.98 | 42.87 | 50.13 | 21.71 | 53.08 | 47.68 | 49.56 | 15.97 | 7.96 | 15.43 | 15.89 | 53.58 | 8.03 | 12.09 | 15.09 | 56.78 | 55.16 | 29.49 | 12.98 | 21.51 | 22.13 | 65.54 | 63.53 | 41.87 | 64.35 |
| lemura-arabic-asr-qwen3 | 8.56 | 10.00 | 8.99 | 12.74 | 29.98 | 37.50 | 26.63 | 38.64 | 20.35 | 40.68 | 20.76 | 11.61 | 21.71 | 20.21 | 43.26 | 11.51 | 18.37 | 16.00 | 38.57 | 49.97 | 33.50 | 20.96 | 32.53 | 27.30 | 51.80 | 62.70 | 49.79 | 46.62 |
| lemura-arabic-asr-lite | 8.89 | 8.08 | 6.71 | 14.18 | 34.18 | 51.60 | 28.23 | 46.58 | 42.24 | 51.56 | 21.94 | 13.14 | 21.51 | 22.22 | 47.91 | 11.70 | 12.63 | 16.03 | 41.50 | 58.34 | 33.08 | 20.56 | 28.26 | 26.29 | 54.33 | 67.64 | 45.63 | 62.83 |
| gemma-4-e2b-it | 7.41 | 18.08 | 9.75 | 14.54 | 36.64 | 49.02 | 15.80 | 40.17 | 20.97 | 39.45 | 21.14 | 13.16 | 35.74 | 25.82 | 50.02 | 12.73 | 33.00 | 20.84 | 47.55 | 56.41 | 24.78 | 24.44 | 49.10 | 35.85 | 60.41 | 67.61 | 40.36 | 67.25 |
| qwen3-asr-1.7b | 8.41 | 14.04 | 10.40 | 14.50 | 38.97 | 55.52 | 29.02 | 57.47 | 17.86 | 48.73 | 22.20 | 11.77 | 25.78 | 21.47 | 51.97 | 11.99 | 21.58 | 17.82 | 47.03 | 64.53 | 37.11 | 20.17 | 35.94 | 30.57 | 59.53 | 72.58 | 50.31 | 67.34 |
| whisper-large-v3 | 8.61 | 13.88 | 8.83 | 13.98 | 43.96 | 55.02 | 25.22 | 56.48 | 23.39 | 50.84 | 20.62 | 12.27 | 26.85 | 20.26 | 59.44 | 12.06 | 25.32 | 16.83 | 52.74 | 60.46 | 34.36 | 20.99 | 40.35 | 27.25 | 64.91 | 73.06 | 49.59 | 68.64 |
| audar-asr-v1-flash | 10.32 | 14.28 | 11.61 | 14.88 | 40.78 | 51.88 | 26.70 | 56.91 | 19.54 | 52.65 | 23.59 | 14.51 | 25.18 | 21.80 | 59.69 | 14.51 | 22.24 | 18.61 | 52.53 | 63.73 | 35.15 | 23.99 | 37.07 | 29.97 | 63.90 | 72.77 | 52.22 | 67.19 |
| voxtral-mini-4b-realtime-2602 | 9.70 | 14.42 | 9.57 | 14.50 | 45.90 | 59.63 | 24.51 | 57.13 | 21.11 | 44.37 | 22.62 | 15.06 | 29.39 | 25.05 | 64.45 | 14.62 | 27.92 | 18.92 | 60.39 | 74.86 | 33.92 | 27.35 | 45.29 | 33.54 | 74.92 | 84.22 | 54.04 | 75.92 |
| whisper-large-v3-turbo | 9.30 | 20.93 | 8.68 | 14.93 | 48.65 | 58.31 | 29.14 | 57.00 | 21.64 | 52.08 | 23.54 | 13.25 | 29.33 | 23.56 | 61.64 | 13.05 | 27.25 | 20.43 | 56.51 | 67.13 | 43.58 | 24.13 | 42.95 | 32.00 | 69.56 | 77.58 | 58.20 | 71.65 |
| qwen3-asr-arabic-ksa | 11.79 | 18.12 | 13.38 | 17.17 | 42.47 | 58.61 | 34.40 | 62.30 | 19.87 | 54.14 | 25.32 | 15.41 | 30.79 | 23.84 | 55.95 | 15.68 | 27.05 | 21.72 | 50.98 | 68.22 | 42.75 | 24.45 | 39.41 | 32.91 | 63.51 | 75.88 | 55.95 | 70.54 |
| qwen3-asr-arabic-uae | 11.96 | 20.47 | 14.35 | 17.76 | 43.54 | 59.78 | 34.71 | 62.79 | 20.60 | 55.28 | 27.20 | 16.07 | 34.47 | 24.97 | 56.07 | 16.05 | 29.39 | 21.94 | 52.47 | 69.40 | 42.51 | 25.40 | 43.29 | 35.11 | 63.71 | 77.49 | 56.64 | 71.01 |
| qwencleo-asr | 10.48 | 23.66 | 17.60 | 21.02 | 49.53 | 60.64 | 17.63 | 64.88 | 26.12 | 59.75 | 28.70 | 15.11 | 41.88 | 31.45 | 63.46 | 15.61 | 37.07 | 27.50 | 59.07 | 62.86 | 27.34 | 25.25 | 50.57 | 42.37 | 70.31 | 73.00 | 42.87 | 71.69 |
| nemotron-3.5-asr-arabic-dialectal-v2 | 13.89 | 24.37 | 18.24 | 19.28 | 45.00 | 59.12 | 27.26 | 52.98 | 24.53 | 50.93 | 28.49 | 20.23 | 41.75 | 29.69 | 57.31 | 21.84 | 39.35 | 25.05 | 54.56 | 68.22 | 38.05 | 35.36 | 54.31 | 40.12 | 67.32 | 75.85 | 51.91 | 71.51 |
| qwen3-asr-0.6b | 17.22 | 25.61 | 18.94 | 23.00 | 49.46 | 64.72 | 41.24 | 63.15 | 25.59 | 57.97 | 32.13 | 21.24 | 37.47 | 32.17 | 61.62 | 23.30 | 38.01 | 28.81 | 59.38 | 74.28 | 50.03 | 34.03 | 51.30 | 42.40 | 69.85 | 81.94 | 62.13 | 76.62 |
| moulsot-v0.3 | 21.53 | 30.90 | 19.47 | 25.62 | 64.06 | 65.88 | 59.50 | 33.63 | 39.50 | 38.13 | 38.10 | 28.18 | 42.82 | 37.09 | 76.40 | 29.39 | 42.22 | 33.13 | 74.25 | 78.64 | 66.81 | 45.82 | 58.58 | 49.88 | 84.42 | 84.06 | 77.55 | 80.14 |

</details>

<details><summary>v1 leaderboard (previous scorer)</summary>

| # | Model | Params (B) | **Arena WER** | 95% CI | Rank range | Arena CER | Clean | Code-switch | Noisy | Telephony | Call-center | Halluc. % | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | 2.07 | **27.69** | 27.11–28.29 | 1 | 15.70 | 21.72 | 31.86 | 25.97 | 23.54 | 41.49 | 82.33 | 265.9 |
| 2 | [audar-asr-v1-turbo](https://huggingface.co/audarai/Audar-ASR-V1-Turbo) | 2.35 | **31.75** | 30.85–32.70 | 2 | 16.85 | 23.40 | 33.72 | 27.36 | 28.37 | 52.04 | 64.33 | 59.3 |
| 3 | [voxtral-mini-4b-realtime-arabic](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-Arabic) | 4.43 | **34.85** | 34.33–35.34 | 3–4 | 20.79 | 25.63 | 28.45 | 32.17 | 33.32 | 57.74 | 7.33 | 20.1 |
| 4 | [nvidia-fastconformer-ar-pc](https://huggingface.co/nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0) † | 0.12 | **35.69** | 35.26–36.13 | 4–5 | 19.57 | 29.58 | 42.57 | 31.03 | 31.65 | 50.46 | 66.67 | 655.9 |
| 5 | [lemura-arabic-asr-qwen3](https://huggingface.co/lemuralabs/lemura-arabic-asr-qwen3) † | 2.04 | **35.84** | 34.67–37.40 | 3–5 | 18.78 | 27.03 | 40.78 | 30.06 | 31.69 | 57.27 | 100.00 | 40.2 |
| 6 | [lemura-arabic-asr-lite](https://huggingface.co/lemuralabs/lemura-arabic-asr-lite) † | 0.11 | **37.43** | 36.99–37.89 | 6 | 19.71 | 29.69 | 49.76 | 33.00 | 32.57 | 53.00 | 48.00 | 790.2 |
| 7 | [cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | 2.07 | **38.66** | 37.55–39.83 | 7–8 | 23.65 | 30.95 | 55.06 | 32.02 | 34.74 | 52.86 | 99.67 | 254.1 |
| 8 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **39.68** | 39.11–40.28 | 7–8 | 19.26 | 32.99 | 38.66 | 35.48 | 37.18 | 57.56 | 99.67 | 75.5 |
| 9 | [gemma-4-e2b-it](https://huggingface.co/google/gemma-4-E2B-it) | 5.10 | **41.59** | 39.94–43.56 | 9–10 | 21.63 | 29.13 | 35.58 | 38.75 | 37.84 | 72.27 | 95.00 | 26.3 |
| 10 | [audar-asr-v1-flash](https://huggingface.co/audarai/Audar-ASR-V1-Flash) | 0.78 | **41.97** | 41.08–42.90 | 9–10 | 22.76 | 33.71 | 42.56 | 38.57 | 39.37 | 61.28 | 27.67 | 35.6 |
| 11 | [voxtral-mini-4b-realtime-2602](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602) | 4.43 | **44.60** | 43.98–45.21 | 11 | 30.81 | 34.93 | 36.67 | 40.77 | 43.46 | 69.49 | 8.67 | 20.1 |
| 12 | [qwen3-asr-arabic-ksa](https://huggingface.co/vadimbelsky/qwen3-asr-arabic-ksa) | 2.04 | **45.39** | 44.77–46.00 | 12–13 | 23.17 | 37.51 | 42.52 | 41.74 | 42.07 | 66.68 | 100.00 | 66.7 |
| 13 | [nemotron-3.5-asr-arabic-dialectal-v2](https://huggingface.co/oddadmix/nemotron-3.5-asr-arabic-dialectal-v2) | 0.64 | **45.83** | 45.36–46.30 | 12–13 | 23.53 | 37.18 | 42.04 | 43.38 | 44.16 | 66.37 | 21.00 | 311.9 |
| 14 | [qwen3-asr-arabic-uae](https://huggingface.co/vadimbelsky/qwen3-asr-arabic-uae) | 2.04 | **46.59** | 46.01–47.15 | 14 | 23.80 | 38.72 | 44.25 | 42.52 | 43.77 | 67.39 | 100.00 | 84.8 |
| 15 | [whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | 1.54 | **49.52** | 47.36–52.04 | 15–17 | 30.47 | 39.47 | 49.00 | 46.69 | 44.66 | 74.35 | 100.00 | 37.4 |
| 16 | [qwen3-asr-0.6b](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf) | 0.94 | **50.10** | 49.63–50.56 | 15–17 | 24.65 | 42.29 | 45.59 | 45.29 | 49.49 | 70.23 | 48.33 | 75.2 |
| 17 | [qwencleo-asr](https://huggingface.co/mohammedaly22/QwenCleo-ASR) | 2.04 | **50.64** | 48.87–52.64 | 15–17 | 26.63 | 38.31 | 51.99 | 48.08 | 42.63 | 81.50 | 100.00 | 32.2 |
| 18 | [moulsot-v0.3](https://huggingface.co/atlasia/moulsot.v0.3) | 2.04 | **61.81** | 59.53–64.65 | 18–19 | 35.68 | 45.83 | 43.37 | 59.69 | 61.14 | 101.24 | 97.67 | 23.6 |
| 19 | [whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) | 0.81 | **63.67** | 60.22–67.34 | 18–19 | 41.63 | 47.81 | 58.40 | 52.08 | 58.87 | 107.55 | 100.00 | 83.2 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Noisy 15%, Code-switch 10%, Telephony 20%, Call-center 20%). Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which the model output any words; not part of the Arena score. 95% CI and rank range: paired bootstrap over utterances (1000 resamples); models whose rank ranges overlap are not reliably separated by this benchmark.

† Trained on the train split of a benchmark corpus (in-domain, not zero-shot): nvidia-fastconformer-ar-pc (masc_clean, masc_noisy, cv18_ar, fleurs_ar); lemura-arabic-asr-qwen3 (cv18_ar, masc_clean, masc_noisy, mgb2, sada, casablanca); lemura-arabic-asr-lite (masc_clean, masc_noisy, cv18_ar, fleurs_ar).

<details><summary>Per-set WER (%)</summary>

| Model | fleurs_ar/clean | cv18_ar/clean | masc_clean/clean | mgb2/clean | sada/clean | casablanca/clean | mgb3_egy/clean | mgb5_mor/clean | mixat_cs/clean | algerian_cs/clean | masc_noisy/clean | nadi_robust/clean | fleurs_ar/noisy | cv18_ar/noisy | mgb2/noisy | sada/noisy | fleurs_ar/telephony | cv18_ar/telephony | mgb2/telephony | sada/telephony | casablanca/telephony | mgb3_egy/telephony | fleurs_ar/callcenter | cv18_ar/callcenter | mgb2/callcenter | sada/callcenter | casablanca/callcenter | mgb3_egy/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 4.94 | 4.73 | 4.33 | 12.24 | 35.93 | 42.22 | 24.27 | 45.06 | 17.75 | 45.97 | 15.23 | 56.54 | 6.01 | 13.72 | 16.03 | 48.29 | 5.72 | 8.99 | 12.98 | 40.18 | 45.45 | 27.88 | 15.56 | 29.05 | 25.91 | 62.73 | 65.45 | 50.22 |
| audar-asr-v1-turbo | 5.77 | 7.67 | 5.74 | 10.45 | 27.82 | 45.61 | 25.04 | 59.13 | 15.34 | 52.11 | 17.93 | 58.56 | 8.53 | 17.52 | 15.48 | 46.12 | 8.58 | 13.86 | 12.98 | 37.70 | 61.19 | 35.90 | 28.18 | 39.57 | 30.28 | 73.40 | 80.74 | 60.05 |
| voxtral-mini-4b-realtime-arabic | 7.38 | 11.89 | 7.84 | 12.42 | 34.84 | 49.27 | 29.03 | 52.34 | 17.58 | 39.32 | 20.88 | 64.74 | 11.25 | 22.65 | 18.62 | 54.86 | 10.33 | 21.19 | 15.81 | 49.85 | 65.26 | 37.51 | 35.91 | 51.03 | 39.19 | 75.42 | 81.75 | 63.15 |
| nvidia-fastconformer-ar-pc | 6.02 | 6.14 | 4.90 | 14.24 | 43.01 | 56.69 | 30.61 | 75.01 | 27.85 | 57.29 | 19.03 | 69.20 | 8.42 | 14.59 | 20.49 | 54.43 | 8.06 | 11.59 | 17.02 | 51.53 | 62.97 | 38.74 | 23.52 | 33.78 | 35.89 | 70.10 | 79.66 | 59.79 |
| lemura-arabic-asr-qwen3 | 11.30 | 10.76 | 10.03 | 13.94 | 32.72 | 41.27 | 36.17 | 60.07 | 23.25 | 58.30 | 23.15 | 48.70 | 12.37 | 23.38 | 26.51 | 46.24 | 12.12 | 19.39 | 18.07 | 42.23 | 55.12 | 43.21 | 33.76 | 51.23 | 46.01 | 73.42 | 75.27 | 63.94 |
| lemura-arabic-asr-lite | 9.22 | 8.65 | 7.16 | 14.84 | 36.95 | 55.06 | 37.62 | 68.05 | 43.77 | 55.75 | 23.55 | 65.31 | 13.67 | 22.25 | 22.85 | 50.38 | 11.98 | 15.19 | 17.74 | 45.87 | 62.78 | 41.87 | 32.90 | 43.64 | 37.73 | 65.74 | 76.32 | 61.68 |
| cohere-transcribe-03-2026 | 7.15 | 7.16 | 5.69 | 13.13 | 49.72 | 55.20 | 32.88 | 76.68 | 49.45 | 60.68 | 17.66 | 69.71 | 8.63 | 16.52 | 16.97 | 62.65 | 8.51 | 12.26 | 16.86 | 70.02 | 61.79 | 38.98 | 21.41 | 39.91 | 32.34 | 86.14 | 79.66 | 57.72 |
| qwen3-asr-1.7b | 8.91 | 14.97 | 11.27 | 15.97 | 41.75 | 59.00 | 36.36 | 75.69 | 21.00 | 56.32 | 24.42 | 69.74 | 12.32 | 26.98 | 22.41 | 56.99 | 13.05 | 23.05 | 21.01 | 52.34 | 69.29 | 44.33 | 32.44 | 52.17 | 42.02 | 73.07 | 82.14 | 63.52 |
| gemma-4-e2b-it | 8.13 | 19.34 | 10.51 | 16.44 | 39.73 | 53.49 | 25.35 | 60.06 | 25.39 | 45.77 | 23.62 | 69.91 | 13.90 | 40.17 | 27.01 | 57.89 | 13.74 | 33.78 | 24.23 | 51.61 | 70.09 | 33.58 | 50.07 | 80.95 | 50.88 | 105.00 | 79.24 | 67.46 |
| audar-asr-v1-flash | 11.13 | 15.25 | 12.26 | 16.21 | 46.20 | 55.58 | 35.98 | 77.10 | 22.65 | 62.48 | 25.50 | 71.18 | 15.31 | 26.25 | 22.74 | 70.45 | 14.87 | 26.85 | 21.70 | 54.82 | 73.33 | 44.64 | 37.20 | 50.43 | 48.21 | 84.44 | 81.37 | 66.01 |
| voxtral-mini-4b-realtime-2602 | 10.64 | 15.19 | 10.45 | 15.95 | 48.96 | 63.80 | 34.67 | 79.76 | 23.76 | 49.58 | 24.74 | 79.50 | 15.86 | 31.05 | 26.32 | 67.13 | 16.04 | 30.85 | 23.05 | 65.53 | 80.04 | 45.25 | 50.83 | 61.36 | 54.07 | 87.20 | 91.89 | 71.61 |
| qwen3-asr-arabic-ksa | 12.53 | 20.52 | 14.70 | 18.93 | 47.13 | 63.32 | 41.56 | 81.42 | 23.08 | 61.97 | 30.33 | 75.11 | 16.29 | 38.97 | 25.30 | 64.43 | 16.54 | 28.71 | 24.64 | 58.20 | 75.17 | 49.14 | 38.53 | 73.15 | 47.83 | 78.50 | 93.87 | 68.21 |
| nemotron-3.5-asr-arabic-dialectal-v2 | 14.67 | 25.73 | 18.96 | 20.77 | 47.40 | 62.73 | 35.14 | 72.08 | 27.87 | 56.21 | 30.76 | 73.72 | 21.02 | 44.57 | 30.83 | 59.39 | 22.90 | 38.64 | 27.70 | 58.32 | 72.47 | 44.90 | 49.82 | 65.62 | 53.52 | 76.80 | 85.73 | 66.75 |
| qwen3-asr-arabic-uae | 12.91 | 24.93 | 16.35 | 19.44 | 47.91 | 64.58 | 42.04 | 81.59 | 23.86 | 64.63 | 32.93 | 75.71 | 17.17 | 41.91 | 26.35 | 61.07 | 17.37 | 34.18 | 26.21 | 59.80 | 76.13 | 48.95 | 39.79 | 77.08 | 49.06 | 78.29 | 90.72 | 69.39 |
| whisper-large-v3 | 9.20 | 14.97 | 9.58 | 15.27 | 68.65 | 63.16 | 36.94 | 97.97 | 28.35 | 69.65 | 22.79 | 96.88 | 12.87 | 28.25 | 21.18 | 98.20 | 12.96 | 26.45 | 17.90 | 80.73 | 75.81 | 54.13 | 34.12 | 74.15 | 50.74 | 91.83 | 122.50 | 72.73 |
| qwen3-asr-0.6b | 17.69 | 27.10 | 20.18 | 24.84 | 51.93 | 67.44 | 48.13 | 81.01 | 28.37 | 62.80 | 34.12 | 78.61 | 21.82 | 39.31 | 33.39 | 64.49 | 24.88 | 40.31 | 32.67 | 63.20 | 78.80 | 57.10 | 51.08 | 71.42 | 56.79 | 79.71 | 88.81 | 73.59 |
| qwencleo-asr | 11.43 | 25.23 | 18.95 | 23.07 | 54.47 | 64.54 | 26.83 | 81.97 | 28.80 | 75.18 | 31.49 | 74.71 | 16.25 | 47.77 | 33.39 | 84.89 | 15.93 | 40.24 | 30.36 | 65.14 | 68.82 | 35.25 | 54.41 | 90.07 | 64.00 | 103.32 | 106.90 | 70.29 |
| moulsot-v0.3 | 22.41 | 33.02 | 20.39 | 27.34 | 71.07 | 70.17 | 65.43 | 56.82 | 41.68 | 45.06 | 40.51 | 87.79 | 29.28 | 50.03 | 49.39 | 101.15 | 30.56 | 45.24 | 38.37 | 92.14 | 88.59 | 71.96 | 88.41 | 118.59 | 77.75 | 108.03 | 94.53 | 120.16 |
| whisper-large-v3-turbo | 9.88 | 22.86 | 9.42 | 16.26 | 84.73 | 86.20 | 42.58 | 110.51 | 24.50 | 92.29 | 25.23 | 117.41 | 13.93 | 37.91 | 28.55 | 89.43 | 14.23 | 31.18 | 20.90 | 94.72 | 113.86 | 78.34 | 47.80 | 103.00 | 70.13 | 128.30 | 166.31 | 129.79 |

</details>

</details>
<!-- LEADERBOARD:ar:END -->

<!-- API:ar:START -->
### Unranked references: scores on the re-hosted sets only

These models are not on the ranked board above: the board ranks open-weight models run on every set.

- `soniox-stt-async-v5`: a closed commercial API, run one request per clip with language hints `ar, en` (with those hints it sometimes answers in English on short or noisy Arabic clips: about 3 % of SADA clips, 10 % of SADA call-center clips, counted as errors); its RTFx is the wall-clock time of the API calls.
- `arabic-stt-qwen3-asr-1.7b`: a fine-tune of Qwen3-ASR-1.7B whose weights are on the Hub with gated access (granted on request), run with the same backend and settings as `qwen3-asr-1.7b`; it was trained on the train splits of CV18 and MASC and on MGB-2/SADA/MGB-3 train rows (rows that overlap their test sets were excluded), so those sets are in-domain for it (†). One of its training streams also holds 20 FLEURS ar_eg test sentences (37 of the 428 fleurs_ar rows), so FLEURS is in-domain too; that stream's labels come from `soniox-stt-async-v5`.
- `arabic-stt-qwen3-asr-1.7b-run5`: a fine-tune of Qwen3-ASR-1.7B whose weights are on the Hub with gated access (granted on request), run with the same backend and settings as `qwen3-asr-1.7b`; run 3 continued twice with more call, dialect and code-switching data, so it has the same in-domain sets (CV18, MASC, MGB-2, SADA, MGB-3 and the 20 FLEURS test sentences) and was also trained on clips of the lahgtna-v3-small test split (†).
- `arabic-stt-qwen3-asr-1.7b-run5base`: a fine-tune of Qwen3-ASR-1.7B whose weights are on the Hub with gated access (granted on request), run with the same backend and settings as `qwen3-asr-1.7b`; run 5's data trained from the base model, so it has the same in-domain sets as run 5 (†).
- `arabic-stt-qwen3-asr-1.7b-run6b-soup70`: a weight average (model soup) of two Qwen3-ASR-1.7B fine-tunes, 0.7 × run 6b and 0.3 × run 5, with no further training; its weights are private (not downloadable). Run with the same backend and settings as `qwen3-asr-1.7b`. Run 6b was trained on the train splits of MASC and Common Voice and on MGB-2/SADA train rows; the run-5 share carries run 5's in-domain sets (†).

They were run on the 15 sets that are re-hosted on the Hub; the other sets need gated sources, so they have no Arena score. For a like-for-like view, the table scores every model on those same sets: track means over the re-hosted sets, combined with the v1 Arena weights (the v1 scorer: Soniox's hypotheses were not kept, so it has no v2 score). Subset WER v2 applies the v2 Arena formula to the same sets (phone tracks on chain v2). † = trained on at least one of these sets.

| # | Model | Kind | **Subset WER** | Subset WER v2 | Clean | Noisy | Code-switch | Telephony | Call-center |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **arabic-stt-qwen3-asr-1.7b-run6b-soup70** † | private weights | **16.37** | 10.07 | 10.70 | 15.94 | 17.83 | 15.05 | 27.23 |
| 2 | **arabic-stt-qwen3-asr-1.7b-run5** † | gated weights | **16.42** | 10.10 | 10.79 | 15.99 | 17.28 | 15.27 | 27.32 |
| 3 | **arabic-stt-qwen3-asr-1.7b-run5base** † | gated weights | **17.62** | 10.89 | 11.81 | 16.90 | 19.64 | 16.05 | 28.91 |
| 4 | **arabic-stt-qwen3-asr-1.7b** † | gated weights | **18.71** | 10.80 | 10.87 | 23.48 | 17.18 | 15.61 | 32.71 |
| 5 | cohere-transcribe-arabic-07-2026 | open | **20.08** | 9.79 | 12.48 | 20.81 | 17.75 | 18.30 | 35.78 |
| 6 | **soniox-stt-async-v5** | closed API | **20.65** | — | 12.54 | 21.08 | 16.80 | 19.57 | 37.53 |
| 7 | audar-asr-v1-turbo | open | **22.44** | 11.83 | 11.75 | 22.52 | 15.34 | 20.05 | 47.05 |
| 8 | nvidia-fastconformer-ar-pc † | open | **24.90** | 13.28 | 15.02 | 24.12 | 27.85 | 23.73 | 42.47 |
| 9 | lemura-arabic-asr-qwen3 † | open | **27.42** | 16.76 | 16.20 | 26.29 | 23.25 | 24.58 | 52.81 |
| 10 | voxtral-mini-4b-realtime-arabic | open | **27.54** | 15.58 | 15.49 | 27.41 | 17.58 | 27.12 | 54.12 |
| 11 | lemura-arabic-asr-lite † | open | **28.27** | 17.88 | 15.49 | 27.46 | 43.77 | 24.35 | 47.42 |
| 12 | qwen3-asr-1.7b | open | **29.76** | 18.68 | 19.22 | 30.18 | 21.00 | 29.48 | 52.56 |
| 13 | cohere-transcribe-03-2026 | open | **30.88** | 16.14 | 17.43 | 26.37 | 49.45 | 30.26 | 49.15 |
| 14 | audar-asr-v1-flash | open | **32.75** | 20.55 | 21.21 | 34.38 | 22.65 | 32.18 | 57.36 |
| 15 | qwen3-asr-arabic-ksa | open | **35.81** | 22.53 | 23.72 | 37.50 | 23.08 | 34.48 | 63.39 |
| 16 | voxtral-mini-4b-realtime-2602 | open | **35.83** | 21.24 | 21.31 | 34.70 | 23.76 | 37.47 | 66.46 |
| 17 | gemma-4-e2b-it | open | **36.77** | 20.05 | 19.43 | 33.90 | 25.39 | 33.04 | 78.67 |
| 18 | qwen3-asr-arabic-uae | open | **37.50** | 23.73 | 25.53 | 38.27 | 23.86 | 37.12 | 65.05 |
| 19 | nemotron-3.5-asr-arabic-dialectal-v2 | open | **38.78** | 27.88 | 26.69 | 38.94 | 27.87 | 39.96 | 64.08 |
| 20 | whisper-large-v3 | open | **39.22** | 19.82 | 25.60 | 40.53 | 28.35 | 40.04 | 66.70 |
| 21 | qwen3-asr-0.6b | open | **41.10** | 29.68 | 29.22 | 39.93 | 28.37 | 42.80 | 67.40 |
| 22 | qwencleo-asr | open | **43.88** | 26.48 | 27.52 | 45.10 | 28.80 | 40.44 | 82.60 |
| 23 | whisper-large-v3-turbo | open | **47.75** | 21.66 | 31.72 | 41.63 | 24.50 | 46.71 | 93.03 |
| 24 | moulsot-v0.3 | open | **57.50** | 37.05 | 36.72 | 55.24 | 41.68 | 55.98 | 105.01 |

Per-set WER (%, v1 scorer) of the references next to the top two ranked models:

| Set | soniox-stt-async-v5 | arabic-stt-qwen3-asr-1.7b | arabic-stt-qwen3-asr-1.7b-run5 | arabic-stt-qwen3-asr-1.7b-run5base | arabic-stt-qwen3-asr-1.7b-run6b-soup70 | cohere-transcribe-arabic-07-2026 | audar-asr-v1-turbo |
|---|---|---|---|---|---|---|---|
| cv18_ar/callcenter | 45.70 | 32.58 | 24.25 | 25.45 | **23.72** | 29.05 | 39.57 |
| cv18_ar/clean | 9.40 | 7.67 | 7.18 | 7.87 | 7.00 | **4.73** | 7.67 |
| cv18_ar/noisy | 20.12 | 24.85 | **11.46** | 12.13 | 11.53 | 13.72 | 17.52 |
| cv18_ar/telephony | 15.46 | 10.86 | 10.19 | 10.33 | 9.46 | **8.99** | 13.86 |
| fleurs_ar/callcenter | 14.68 | 18.82 | 14.66 | 15.33 | **14.29** | 15.56 | 28.18 |
| fleurs_ar/clean | **4.23** | 5.82 | 5.68 | 5.84 | 5.39 | 4.94 | 5.77 |
| fleurs_ar/noisy | 6.93 | 9.59 | 7.07 | 6.88 | 6.95 | **6.01** | 8.53 |
| fleurs_ar/telephony | 5.97 | 7.11 | 6.79 | 6.93 | 6.50 | **5.72** | 8.58 |
| masc_clean/clean | 5.46 | 5.76 | 5.50 | 6.20 | 5.64 | **4.33** | 5.74 |
| masc_noisy/clean | 16.65 | 16.15 | 15.25 | 15.26 | 15.53 | **15.23** | 17.93 |
| mixat_cs/clean | 16.80 | 17.18 | 17.28 | 19.64 | 17.83 | 17.75 | **15.34** |
| sada/callcenter | 52.20 | 46.73 | **43.05** | 45.93 | 43.68 | 62.73 | 73.40 |
| sada/clean | 31.05 | **24.21** | 24.81 | 27.32 | 24.76 | 35.93 | 27.82 |
| sada/noisy | 40.61 | 43.33 | 30.17 | 33.34 | **29.78** | 48.29 | 46.12 |
| sada/telephony | 37.29 | 28.86 | **28.81** | 30.90 | 29.18 | 40.18 | 37.70 |
<!-- API:ar:END -->

Hardware: 1× NVIDIA A10 (24 GB) for every model on the board (re-run 2026-10-19/20, so RTFx is
measured on that GPU), batch inference, greedy decoding, language forced to Arabic. The Soniox API
reference keeps its 2026-10-16 run. Models that only fit with quantization are not included yet.

## 🧰 Score anything

The scorer is a library and a CLI: point it at references and hypotheses in any common format and get
the v2 scores, the v1-compatible number, diagnostics and an alignment report.

```bash
uv pip install -e .     # scoring needs no GPU
# references and hypotheses as JSONL, CSV/TSV, Kaldi text, SCTK trn, SRT/VTT, STM/CTM or hf://repo/split
sttarena score --ref refs.tsv --hyp hyps.jsonl --out-md report.md --out-html report.html
sttarena score --hyp results/ar/<model>/predictions/sada__clean.jsonl     # one predictions file
sttarena score --ref annot1/text --ref annot2/text --hyp decode/text     # Kaldi text, several references
sttarena compare --ref refs.tsv --hyp a=model_a.jsonl --hyp b=model_b.jsonl   # paired tests, Holm
```

```python
from sttarena.normalizers import ArabicNormalizer
from sttarena.scoring import Scorer

ArabicNormalizer("L2")("حيبقى برضو كدا")          # 'هيبقي برضه كده'
res = Scorer("ar").score([{"id": "1", "ref": "ما فيش حد", "hyp": "مفيش حد"},
                          {"id": "2", "refs": ["حتلاقي الترجمة", "هتلاقي الترجمه"], "hyp": "هتلاقي الترجمه"}])
res.summary()["headline"]["wer"]                    # 0.0: a space and a spelling are not errors
```

| Profile | Normalization and alignment | Shown as |
|---|---|---|
| `v1` | the previous arena scorer: orthographic normalization, one reference, uncapped | v1 board |
| `L1` | v1 + safe fixes (spoken times/decimals/%, Maghrebi and Persian letters, markup) | Strict WER |
| `L2sp` | + dialect-lenient spelling (variant table and seven audited rules), space-insensitive merges, multi-reference, per-utterance cap | **Arena WER v2** |

Audits: `sttarena audit floor` (human disagreement on multi-annotator data), `audit variants`
(unintended merges of the spelling folds), `audit refs` (suspect references: model consensus,
speaking rate, markup, duplicates, Qur'an), `audit contamination` (n-gram / MinHash / id overlap with
training text, residual screen, exposure). `sttarena rescore` upgrades saved v1 predictions to v2
without a GPU.

## Tracks and scoring

| Track | Weight v1 | Weight v2 | What it measures | Sets |
|---|---|---|---|---|
| Clean | 35% | 50% | Studio, broadcast, TV, phone and assistant speech across dialects | FLEURS, CV18, MASC-clean, MGB-2, SADA, Casablanca, MGB-3, MGB-5, SVQ, Shams, Hassaniya, WASIL, EchoNova, GigaSpeechBench, Speech-MASSIVE, Sudanese, mTEDx |
| Noisy | 15% | 15% | Real noisy recordings and synthetic noise (0–15 dB SNR) | MASC-noisy, SVQ-noisy and 4 sets with added noise (v1 also NADI-2026 Robust) |
| Code-switch | 10% | 15% | Arabic–English and Arabic–French mixing | Mixat, Algerian CS, Perle, TEDxTN |
| Telephony | 20% | 10% | Simulated phone channel: 8 kHz, codec, packet loss (v2: chain v2) | 6 sets |
| Call-center | 20% | 10% | Simulated noisy caller environment, then the phone channel (v2: chain v2) | 6 sets |

The v2 weights halve the two simulated channel tracks: the simulation has not been validated
against real calls (in English it adds no ranking information about real telephone speech beyond
clean speech), so simulated audio falls from 52.5 % to 32 % of the Arena. NADI-2026 Robust is
Casablanca audio band-limited to 4 kHz; v2 scores it as a diagnostic, outside the Arena. The v2
board takes both phone tracks from chain v2 (A-law-first MENA codec mix, tandem coding, wideband
paths, handset rooms and unintelligible babble; [METHODOLOGY](docs/METHODOLOGY.md)); the v1 board keeps
the v1 chain.

- **Within each set**: errors are summed over all utterances. This is corpus WER, not the mean
  of per-utterance WERs.
- **v1**: track score = the plain mean over that track's sets; Arena = the weighted mean of the
  five track scores; one normalizer that removes diacritics, tatweel and punctuation and unifies
  alef/hamza/yaa/taa-marbuta forms.
- **v2**: per set the `L2sp` profile above; Arena = the weighted geometric mean of the set scores
  (each set weighs its track's weight split over the track's sets), next to the arithmetic mean, a
  real-audio Arena, a zero-shot Arena (sets no ranked model trained on) and each model's exposure;
  95 % intervals from a bootstrap that resamples whole speakers, videos or recordings, and
  simultaneous rank sets. Two human transcribers of the same MGB-3 audio disagree on 13.2 % of
  words under v1 and 7.0 % under v2, while system rankings do not change.
- **Full methodology**: [docs/METHODOLOGY.md](docs/METHODOLOGY.md).

## Datasets

All sets are deterministic subsets of public Hugging Face datasets: at most 1,000 utterances of
1–30 s, chosen by hash rank. Manifests with the exact ids and source revisions are in
[`manifests/`](manifests/). Sets whose licence allows it are re-hosted on the Hub; for the
others, you rebuild them locally from the original source. Rebuilt telephony and call-center audio
matches the published sets only with the same ffmpeg build: the AMR-NB and Opus rows depend on the
encoder.

| Set | Source | Dialect | Domain | Licence |
|---|---|---|---|---|
| fleurs_ar | google/fleurs `ar_eg` | MSA | read | CC-BY-4.0 |
| cv18_ar | Common Voice 18 (MohamedRashad mirror) | MSA | read, crowd | CC0 |
| masc_clean / masc_noisy | MASC | mixed | YouTube | CC-BY-4.0 |
| mgb2 | MGB-2 (Al Jazeera) | mostly MSA | broadcast | QCRI agreement |
| sada | SADA 2022 | Saudi / Gulf | TV | CC-BY-NC-SA-4.0 |
| casablanca | UBC-NLP/Casablanca (8 countries) | DZ, EG, JO, MR, MA, PS, AE, YE | TV series | CC-BY-NC-ND-4.0 |
| mgb3_egy | MGB-3 (4 annotators: multi-reference in v2) | Egyptian | YouTube | unspecified |
| mgb5_mor | MGB-5 (v2: one segmentation per recording, other annotators as references) | Moroccan | YouTube | unspecified |
| mixat_cs | Mixat (v2: + Arabic-script transliteration as a 2nd reference) | Emirati + English | podcast | CC-BY-NC-SA-4.0 |
| algerian_cs | OIST Algerian CS | Algerian + French | conversation | controlled |
| nadi_robust | NADI-2026 Robust ASR (validation): Casablanca audio band-limited to 4 kHz | 8 dialects | band-limited TV | unspecified |
| svq_ar | google/svq, clean environment; references = what was said (2.0.0 `transcript_truth`: 11 % differ from the read prompt, often in dialect); key terms per query | Egyptian, Gulf, Levantine, Maghrebi | spoken queries on phones | CC-BY-4.0 |
| svq_ar_noisy | google/svq, background speech / media / traffic noise (real, not added); references as svq_ar | same | spoken queries on phones | CC-BY-4.0 |
| shams_lev | shams-nlp/shams, LangMedia rows (corrected orthography) | Levantine (LB, SY, PS, JO) | conversations, interviews | CC-BY-SA-4.0 |
| hassaniya | MauriAI-lab/hassaniya-speech-test-v1 | Hassaniya (Mauritania) | YouTube | CC-BY-NC-4.0 |
| wasil | QCRI/WASIL test (gold transcriptions, Arabic prompts) | MSA, Egyptian, Sudanese, Algerian, Syrian | prompts to a chat assistant | CC-BY-NC-SA-4.0 |
| perle_cs | Perle-ai/ASR_Code_Switch (Egyptian and Saudi subsets) | Egyptian / Saudi + English | code-switched speech | MIT |
| echonova | echonova-ai/arabic-dialect-asr-benchmark (gated), 112 rows per variety | MSA, Egyptian, Emirati, Saudi, Kuwaiti, Qatari, Omani, Syrian, Lebanese | public recordings | transcripts CC-BY-4.0, audio evaluation-only (never re-hosted) |
| gsb_ar | speechcolab/GigaSpeechBench low-resource Arabic, professional transcripts (Emirati region left out: drafted with GPT-4o) | Algerian, Egyptian, Iraqi, Moroccan, Saudi, Syrian | YouTube 2025–26 | unspecified |
| massive_ar | FBK-MT/Speech-MASSIVE-test `ar-SA` (validated rows) | MSA / Gulf prompts, speakers across the region | voice-assistant commands | CC-BY-NC-SA-4.0 |
| sudanese_sdn | arbml/sudanese_dialect_speech (Zenodo 6721683; no test split, one transcriber) | Sudanese | TV programmes | CC-BY-4.0 |
| mtedx_ar | deepdml/mtedx `ar` test (7 talks) | mostly MSA | TEDx talks | CC-BY-NC-ND-4.0 |
| tedxtn_cs | TEDxTN test (KBayoud/ASR_TEDx_Tunisie mirror) | Tunisian + French | TEDx talks | CC-BY-NC-ND-4.0 |

CV18 also carries the named entities of 233 of its sentences (Elyadata/CV18-NER, CC-BY-NC-4.0), scored as
key-term recall like the SVQ salient terms.

Noise for the degraded tracks comes from DEMAND (CC BY-SA 3.0) and MUSAN (CC-BY-4.0). Babble noise
is synthesized from other test speakers.

## Quickstart

```bash
uv venv --python 3.12 && uv pip install -e ".[gpu]"
python scripts/build_noise_bank.py                 # DEMAND + MUSAN noise
python scripts/build_benchmark.py --suite arabic   # build the clean and degraded sets (v1 and chain-v2 conditions)
python scripts/build_hallucination_set.py --lang ar --version 2   # noise-only clips v2 (tones, DTMF, office ...)
sttarena models                                    # list registered models
sttarena run -m whisper-large-v3 --suite arabic    # evaluate (cached per set)
sttarena run -m qwen3-asr-1.7b --limit 32          # quick smoke test, not saved
sttarena rescore --suite arabic                    # re-score saved predictions with the current scorer
sttarena leaderboard --suite arabic                # refresh tables (v2 board + v1 board)
```

Some models need their own environment (`qwen-asr`, NeMo, omniASR/fairseq2); see
[`scripts/setup_envs.sh`](scripts/setup_envs.sh).

### Scope: open-weight models are ranked

The ranked board only includes models whose weights are public and that run locally. Closed
commercial APIs are not ranked: when one is run, it appears as an unranked reference under the
board, scored on the re-hosted sets only (see "Unranked references"). Fine-tunes with gated weights are listed the same way.
Models run unmodified, in the precision of their released weights: no down-casting and no
quantization. Quantized or otherwise optimized variants are not evaluated.

### Adding a model

1. Add a `ModelSpec` to [`sttarena/models/registry.py`](sttarena/models/registry.py).
2. Implement a backend if needed. It only has to provide
   `transcribe(list[np.ndarray @ 16 kHz], language) -> list[str]`.
3. Run `sttarena run -m <key>` and open a PR with the `results/**/summary.json` files.

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) and the
[GitHub issues](https://github.com/kadirnar/arabic-arena/issues).

## Licence

Code: Apache-2.0. Each dataset keeps its own licence (table above). Results are CC-BY-4.0.

MGB-2 is used under the QCRI-ALT Corpus research licence, which requires published results to
carry this acknowledgement:

> QCRI-AL Jazeera Corpus, used by Arabic Arena, was developed by Qatar Computing Research Institute
> ("QCRI"), an institute within the Hamad Bin Khalifa University ("HBKU") a member of the Qatar
> Foundation for Education, Science and Community Development and the Data provided courtesy of
> Al Jazeera.
