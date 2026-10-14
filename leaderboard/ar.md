| # | Model | Params (B) | **Arena WER** | Arena CER | Clean | Code-switch | Noisy | Telephony | Call-center | Halluc. % | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | 2.07 | **27.96** | 16.02 | 22.15 | 32.24 | 26.15 | 23.77 | 41.54 | — | 330.4 |
| 2 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **40.10** | 19.59 | 33.14 | 38.45 | 35.81 | 37.16 | 59.26 | — | 112.4 |
| 3 | [whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | 1.54 | **50.45** | 31.29 | 40.44 | 49.26 | 47.06 | 44.48 | 77.09 | — | 45.1 |
| 4 | [audar-asr-v1-turbo](https://huggingface.co/audarai/Audar-ASR-V1-Turbo) | 2.35 | **—** | — | (3/8) | (0/2) | (0/6) | (0/6) | (0/6) | — | 148.4 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Noisy 15%, Code-switch 10%, Telephony 20%, Call-center 20%). Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which the model output any words; not part of the Arena score.

<details><summary>Per-set WER (%)</summary>

| Model | fleurs_ar/clean | cv18_ar/clean | masc_clean/clean | mgb2/clean | sada/clean | casablanca/clean | mgb3_egy/clean | mgb5_mor/clean | mixat_cs/clean | algerian_cs/clean | masc_noisy/clean | nadi_robust/clean | fleurs_ar/noisy | cv18_ar/noisy | mgb2/noisy | sada/noisy | fleurs_ar/telephony | cv18_ar/telephony | mgb2/telephony | sada/telephony | casablanca/telephony | mgb3_egy/telephony | fleurs_ar/callcenter | cv18_ar/callcenter | mgb2/callcenter | sada/callcenter | casablanca/callcenter | mgb3_egy/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 4.81 | 4.71 | 5.15 | 12.86 | 36.11 | 42.27 | 24.66 | 46.63 | 17.79 | 46.68 | 16.39 | 55.49 | 6.78 | 13.32 | 16.53 | 48.39 | 5.92 | 8.93 | 13.48 | 40.32 | 45.77 | 28.19 | 16.15 | 29.25 | 26.71 | 62.52 | 65.45 | 49.17 |
| qwen3-asr-1.7b | 9.23 | 15.19 | 11.78 | 16.19 | 41.76 | 59.07 | 36.31 | 75.56 | 21.01 | 55.89 | 24.89 | 69.87 | 12.87 | 27.25 | 22.47 | 57.49 | 13.33 | 22.92 | 21.01 | 52.20 | 69.29 | 44.20 | 36.25 | 51.30 | 42.41 | 72.97 | 89.35 | 63.28 |
| whisper-large-v3 | 9.48 | 15.01 | 10.54 | 16.20 | 69.02 | 62.67 | 37.22 | 103.40 | 28.41 | 70.11 | 23.79 | 96.89 | 13.12 | 28.11 | 22.11 | 98.32 | 13.17 | 26.38 | 18.89 | 81.00 | 72.76 | 54.70 | 34.49 | 74.55 | 51.24 | 88.22 | 143.42 | 70.62 |
| audar-asr-v1-turbo | 6.25 | 7.65 | 6.54 | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |

</details>
