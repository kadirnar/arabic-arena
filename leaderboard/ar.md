| # | Model | Params (B) | **Arena WER** | Arena CER | Clean | Code-switch | Noisy | Telephony | Call-center | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | 2.07 | **27.96** | 16.02 | 22.15 | 32.24 | 26.15 | 23.77 | 41.54 | 330.4 |
| 2 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **—** | — | (1/8) | (0/2) | (0/6) | (0/6) | (0/6) | 205.8 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Noisy 15%, Code-switch 10%, Telephony 20%, Call-center 20%).

<details><summary>Per-set WER (%)</summary>

| Model | fleurs_ar/clean | cv18_ar/clean | masc_clean/clean | mgb2/clean | sada/clean | casablanca/clean | mgb3_egy/clean | mgb5_mor/clean | mixat_cs/clean | algerian_cs/clean | masc_noisy/clean | nadi_robust/clean | fleurs_ar/noisy | cv18_ar/noisy | mgb2/noisy | sada/noisy | fleurs_ar/telephony | cv18_ar/telephony | mgb2/telephony | sada/telephony | casablanca/telephony | mgb3_egy/telephony | fleurs_ar/callcenter | cv18_ar/callcenter | mgb2/callcenter | sada/callcenter | casablanca/callcenter | mgb3_egy/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 4.81 | 4.71 | 5.15 | 12.86 | 36.11 | 42.27 | 24.66 | 46.63 | 17.79 | 46.68 | 16.39 | 55.49 | 6.78 | 13.32 | 16.53 | 48.39 | 5.92 | 8.93 | 13.48 | 40.32 | 45.77 | 28.19 | 16.15 | 29.25 | 26.71 | 62.52 | 65.45 | 49.17 |
| qwen3-asr-1.7b | 9.23 | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — | — |

</details>
