| # | Model | Params (B) | **Arena WER** | 95% CI | Rank range | Arena CER | Clean | Code-switch | Noisy | Telephony | Call-center | Halluc. % | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | 2.07 | **27.69** | 27.10–28.27 | 1 | 15.73 | 21.87 | 31.91 | 25.80 | 23.58 | 41.28 | 100.00 | 330.4 |
| 2 | [audar-asr-v1-turbo](https://huggingface.co/audarai/Audar-ASR-V1-Turbo) | 2.35 | **31.38** | 30.59–32.28 | 2 | 16.44 | 23.46 | 33.70 | 27.48 | 27.69 | 50.69 | 87.67 | 82.5 |
| 3 | [voxtral-mini-4b-realtime-arabic](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-Arabic) | 4.43 | **34.91** | 34.39–35.40 | 3–4 | 20.80 | 25.86 | 28.40 | 32.11 | 33.23 | 57.78 | 7.00 | 28.6 |
| 4 | [lemura-arabic-asr-qwen3](https://huggingface.co/lemuralabs/lemura-arabic-asr-qwen3) † | 2.04 | **35.21** | 34.45–36.05 | 3–5 | 18.34 | 27.15 | 34.96 | 30.27 | 31.63 | 56.70 | 100.00 | 55.8 |
| 5 | [nvidia-fastconformer-ar-pc](https://huggingface.co/nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0) † | 0.12 | **35.73** | 35.30–36.20 | 4–5 | 19.60 | 29.68 | 42.57 | 31.03 | 31.72 | 50.42 | 66.00 | 2404.9 |
| 6 | [lemura-arabic-asr-lite](https://huggingface.co/lemuralabs/lemura-arabic-asr-lite) † | 0.11 | **37.44** | 36.99–37.91 | 6 | 19.72 | 29.74 | 49.76 | 33.00 | 32.54 | 53.00 | 66.67 | 3412.7 |
| 7 | [cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | 2.07 | **38.76** | 37.70–39.90 | 7 | 23.72 | 31.17 | 54.99 | 33.30 | 34.39 | 52.39 | 100.00 | 306.3 |
| 8 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **39.94** | 39.22–40.77 | 8 | 19.46 | 33.01 | 38.03 | 35.63 | 37.04 | 59.17 | 100.00 | 105.6 |
| 9 | [audar-asr-v1-flash](https://huggingface.co/audarai/Audar-ASR-V1-Flash) | 0.78 | **41.62** | 40.77–42.47 | 9 | 22.46 | 33.67 | 42.20 | 38.34 | 38.42 | 60.89 | 27.67 | 52.3 |
| 10 | [voxtral-mini-4b-realtime-2602](https://huggingface.co/mistralai/Voxtral-Mini-4B-Realtime-2602) | 4.43 | **44.65** | 44.03–45.26 | 10 | 30.77 | 34.89 | 36.79 | 40.90 | 43.75 | 69.38 | 8.67 | 28.1 |
| 11 | [qwen3-asr-arabic-ksa](https://huggingface.co/vadimbelsky/qwen3-asr-arabic-ksa) | 2.04 | **45.63** | 45.02–46.24 | 11–13 | 23.38 | 38.10 | 42.43 | 41.46 | 42.17 | 66.97 | 100.00 | 87.8 |
| 12 | [nemotron-3.5-asr-arabic-dialectal-v2](https://huggingface.co/oddadmix/nemotron-3.5-asr-arabic-dialectal-v2) | 0.64 | **45.84** | 45.37–46.31 | 11–13 | 23.52 | 37.23 | 42.04 | 43.38 | 44.15 | 66.37 | 21.00 | 773.4 |
| 13 | [gemma-4-e2b-it](https://huggingface.co/google/gemma-4-E2B-it) | 5.10 | **45.94** | 44.81–47.35 | 11–14 | 25.07 | 33.89 | 39.82 | 44.94 | 41.55 | 75.26 | 100.00 | 39.1 |
| 14 | [qwen3-asr-arabic-uae](https://huggingface.co/vadimbelsky/qwen3-asr-arabic-uae) | 2.04 | **46.75** | 46.15–47.31 | 13–14 | 24.02 | 39.15 | 44.18 | 42.55 | 43.89 | 67.35 | 100.00 | 108.7 |
| 15 | [whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | 1.54 | **50.12** | 47.89–52.80 | 15–17 | 30.87 | 40.05 | 48.97 | 46.65 | 44.16 | 76.88 | 100.00 | 45.4 |
| 16 | [qwencleo-asr](https://huggingface.co/mohammedaly22/QwenCleo-ASR) | 2.04 | **50.14** | 48.53–51.85 | 15–17 | 26.33 | 40.18 | 51.26 | 47.56 | 42.95 | 76.12 | 100.00 | 48.2 |
| 17 | [qwen3-asr-0.6b](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf) | 0.94 | **50.15** | 49.69–50.60 | 15–17 | 24.69 | 42.37 | 45.39 | 45.57 | 49.52 | 70.22 | 48.33 | 100.5 |
| 18 | [moulsot-v0.3](https://huggingface.co/atlasia/moulsot.v0.3) | 2.04 | **62.03** | 59.76–64.70 | 18–19 | 35.68 | 46.99 | 43.36 | 59.33 | 59.60 | 102.15 | 98.67 | 41.1 |
| 19 | [whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) | 0.81 | **62.25** | 58.83–66.06 | 18–19 | 40.01 | 47.32 | 56.49 | 51.68 | 58.53 | 102.94 | 100.00 | 105.1 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Noisy 15%, Code-switch 10%, Telephony 20%, Call-center 20%). Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which the model output any words; not part of the Arena score. 95% CI and rank range: paired bootstrap over utterances (1000 resamples); models whose rank ranges overlap are not reliably separated by this benchmark.

† Trained on the train split of a benchmark corpus (in-domain, not zero-shot): lemura-arabic-asr-qwen3 (cv18_ar, masc_clean, masc_noisy, mgb2, sada, casablanca); nvidia-fastconformer-ar-pc (masc_clean, masc_noisy, cv18_ar, fleurs_ar); lemura-arabic-asr-lite (masc_clean, masc_noisy, cv18_ar, fleurs_ar).

<details><summary>Per-set WER (%)</summary>

| Model | fleurs_ar/clean | cv18_ar/clean | masc_clean/clean | mgb2/clean | sada/clean | casablanca/clean | mgb3_egy/clean | mgb5_mor/clean | mixat_cs/clean | algerian_cs/clean | masc_noisy/clean | nadi_robust/clean | fleurs_ar/noisy | cv18_ar/noisy | mgb2/noisy | sada/noisy | fleurs_ar/telephony | cv18_ar/telephony | mgb2/telephony | sada/telephony | casablanca/telephony | mgb3_egy/telephony | fleurs_ar/callcenter | cv18_ar/callcenter | mgb2/callcenter | sada/callcenter | casablanca/callcenter | mgb3_egy/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 4.62 | 4.71 | 4.33 | 12.24 | 35.90 | 42.18 | 24.37 | 46.64 | 17.73 | 46.09 | 15.33 | 55.47 | 6.61 | 13.32 | 15.92 | 48.15 | 5.72 | 8.93 | 12.95 | 40.20 | 45.77 | 27.90 | 15.69 | 29.25 | 26.13 | 62.40 | 65.38 | 48.86 |
| audar-asr-v1-turbo | 5.89 | 7.65 | 5.69 | 10.49 | 27.69 | 45.61 | 25.06 | 59.60 | 15.33 | 52.08 | 18.00 | 58.87 | 8.61 | 17.79 | 15.54 | 46.04 | 8.49 | 13.72 | 13.09 | 37.97 | 57.06 | 35.79 | 28.20 | 39.24 | 29.95 | 65.49 | 81.31 | 59.94 |
| voxtral-mini-4b-realtime-arabic | 7.30 | 11.71 | 7.86 | 12.43 | 34.83 | 49.26 | 29.08 | 54.40 | 17.61 | 39.18 | 20.86 | 64.86 | 11.17 | 22.45 | 18.67 | 54.66 | 10.24 | 21.32 | 15.57 | 50.17 | 64.78 | 37.29 | 36.03 | 51.17 | 39.08 | 75.38 | 82.04 | 62.99 |
| lemura-arabic-asr-qwen3 | 11.34 | 10.62 | 10.03 | 13.98 | 32.55 | 41.60 | 36.05 | 61.07 | 23.40 | 46.52 | 23.00 | 48.58 | 12.41 | 23.58 | 26.29 | 47.76 | 12.28 | 19.32 | 17.96 | 42.70 | 54.55 | 42.96 | 33.57 | 50.90 | 40.95 | 73.97 | 74.89 | 65.92 |
| nvidia-fastconformer-ar-pc | 6.02 | 6.14 | 4.90 | 14.24 | 43.00 | 56.69 | 30.61 | 75.80 | 27.85 | 57.29 | 19.03 | 69.20 | 8.42 | 14.59 | 20.49 | 54.43 | 8.06 | 11.59 | 16.91 | 51.53 | 63.51 | 38.70 | 23.52 | 33.78 | 35.92 | 70.10 | 79.43 | 59.78 |
| lemura-arabic-asr-lite | 9.22 | 8.65 | 7.16 | 14.84 | 36.95 | 55.06 | 37.62 | 68.41 | 43.76 | 55.75 | 23.55 | 65.31 | 13.67 | 22.25 | 22.85 | 50.38 | 11.98 | 15.19 | 17.71 | 45.87 | 62.62 | 41.89 | 32.90 | 43.64 | 37.87 | 65.74 | 76.16 | 61.70 |
| cohere-transcribe-03-2026 | 7.12 | 7.18 | 5.70 | 13.01 | 50.13 | 54.64 | 32.73 | 78.86 | 49.45 | 60.53 | 17.64 | 69.23 | 8.63 | 16.39 | 16.97 | 70.94 | 8.60 | 12.33 | 17.08 | 68.13 | 61.25 | 38.96 | 21.38 | 39.71 | 32.70 | 81.40 | 82.26 | 56.86 |
| qwen3-asr-1.7b | 8.93 | 15.19 | 11.42 | 15.97 | 41.70 | 59.00 | 36.30 | 75.55 | 21.00 | 55.06 | 24.64 | 69.87 | 12.21 | 27.25 | 22.30 | 57.49 | 13.03 | 22.92 | 20.74 | 52.18 | 69.23 | 44.17 | 35.80 | 51.30 | 42.38 | 72.97 | 89.35 | 63.24 |
| audar-asr-v1-flash | 11.19 | 15.23 | 12.05 | 16.11 | 44.23 | 55.73 | 35.83 | 79.00 | 21.98 | 62.42 | 25.30 | 71.16 | 15.15 | 25.92 | 22.41 | 70.10 | 15.01 | 26.18 | 21.48 | 55.01 | 68.40 | 44.42 | 38.87 | 50.03 | 43.07 | 83.56 | 81.12 | 68.67 |
| voxtral-mini-4b-realtime-2602 | 10.58 | 15.39 | 10.39 | 15.87 | 49.33 | 63.91 | 34.43 | 79.20 | 23.97 | 49.61 | 24.81 | 79.63 | 15.86 | 31.18 | 26.51 | 67.40 | 16.04 | 31.98 | 23.24 | 65.41 | 80.10 | 45.74 | 51.47 | 60.96 | 54.15 | 86.67 | 91.64 | 71.37 |
| qwen3-asr-arabic-ksa | 12.49 | 20.50 | 14.82 | 19.10 | 46.86 | 63.09 | 41.40 | 86.57 | 23.01 | 61.85 | 30.51 | 74.97 | 16.43 | 40.57 | 25.19 | 61.07 | 16.64 | 28.58 | 24.70 | 59.12 | 74.73 | 49.25 | 38.43 | 73.55 | 48.40 | 78.21 | 94.72 | 68.51 |
| nemotron-3.5-asr-arabic-dialectal-v2 | 14.67 | 25.73 | 18.96 | 20.77 | 47.40 | 62.73 | 35.13 | 72.45 | 27.87 | 56.21 | 30.76 | 73.72 | 21.02 | 44.57 | 30.83 | 59.39 | 22.90 | 38.64 | 27.72 | 58.32 | 72.31 | 44.99 | 49.82 | 65.62 | 53.47 | 76.80 | 85.79 | 66.69 |
| gemma-4-e2b-it | 12.96 | 24.97 | 16.66 | 19.83 | 44.28 | 57.55 | 29.68 | 65.16 | 27.65 | 51.99 | 27.86 | 73.91 | 17.28 | 54.50 | 31.85 | 64.22 | 16.70 | 43.84 | 27.83 | 54.19 | 66.53 | 40.22 | 48.17 | 103.13 | 58.20 | 92.85 | 82.77 | 66.43 |
| qwen3-asr-arabic-uae | 12.74 | 24.91 | 16.27 | 19.39 | 48.04 | 64.40 | 41.81 | 85.67 | 23.94 | 64.43 | 33.45 | 75.86 | 17.12 | 40.84 | 26.21 | 61.81 | 17.23 | 34.58 | 25.85 | 60.45 | 75.97 | 49.25 | 39.72 | 76.55 | 48.87 | 78.23 | 91.45 | 69.26 |
| whisper-large-v3 | 9.22 | 14.97 | 9.55 | 15.24 | 68.61 | 62.54 | 36.97 | 103.32 | 28.26 | 69.68 | 22.72 | 96.86 | 12.87 | 28.11 | 21.20 | 98.12 | 12.97 | 26.38 | 17.77 | 80.65 | 72.66 | 54.51 | 34.08 | 74.55 | 50.85 | 87.96 | 143.42 | 70.40 |
| qwencleo-asr | 11.33 | 25.47 | 19.00 | 22.94 | 54.90 | 64.80 | 26.90 | 96.08 | 28.78 | 73.75 | 31.37 | 75.04 | 16.43 | 47.63 | 33.61 | 81.30 | 15.99 | 40.04 | 30.31 | 68.24 | 68.09 | 35.05 | 51.35 | 88.41 | 64.71 | 92.05 | 90.34 | 69.86 |
| qwen3-asr-0.6b | 17.70 | 27.34 | 20.06 | 24.76 | 52.10 | 67.76 | 47.85 | 81.39 | 28.47 | 62.31 | 34.05 | 78.43 | 21.92 | 39.57 | 34.79 | 64.63 | 25.06 | 39.64 | 32.45 | 64.00 | 78.89 | 57.04 | 50.60 | 71.22 | 57.70 | 79.34 | 88.72 | 73.73 |
| moulsot-v0.3 | 22.19 | 33.14 | 20.39 | 27.48 | 73.02 | 72.78 | 65.60 | 61.33 | 41.72 | 45.00 | 40.49 | 91.35 | 29.26 | 49.83 | 49.31 | 95.72 | 30.54 | 46.44 | 38.39 | 89.06 | 81.56 | 71.63 | 84.62 | 113.12 | 85.92 | 106.92 | 102.57 | 119.75 |
| whisper-large-v3-turbo | 9.82 | 22.98 | 9.39 | 16.20 | 85.10 | 85.45 | 42.64 | 106.93 | 24.44 | 88.54 | 25.16 | 115.32 | 13.91 | 37.77 | 28.49 | 89.43 | 14.25 | 30.98 | 20.74 | 95.15 | 110.24 | 79.82 | 45.34 | 103.00 | 64.14 | 124.08 | 156.68 | 124.39 |

</details>
