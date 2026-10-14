| # | Model | Params (B) | **Arena WER** | 95% CI | Rank range | Arena CER | Clean | Accented | Noisy | Telephony | Call-center | Halluc. % | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **9.63** | 9.35–9.93 | 1 | 5.98 | 6.02 | 14.15 | 8.96 | 6.79 | 17.54 | 99.67 | 211.4 |
| 2 | [cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | 2.07 | **10.74** | 9.68–12.14 | 2–6 | 6.84 | 5.73 | 18.81 | 9.31 | 6.90 | 21.51 | 67.00 | 469.3 |
| 3 | [parakeet-tdt-0.6b-v3](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3) | 0.60 | **11.07** | 10.75–11.39 | 2–4 | 6.98 | 6.71 | 15.15 | 10.26 | 7.98 | 20.58 | 23.33 | 959.8 |
| 4 | [cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | 2.07 | **11.22** | 10.04–12.84 | 2–8 | 6.95 | 5.95 | 19.78 | 10.47 | 7.07 | 22.18 | 68.67 | 467.9 |
| 5 | [qwen3-asr-0.6b](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf) | 0.94 | **11.54** | 11.19–11.90 | 3–6 | 7.16 | 6.89 | 15.72 | 10.84 | 7.89 | 21.95 | 92.67 | 243.0 |
| 6 | [canary-1b-v2](https://huggingface.co/nvidia/canary-1b-v2) | 0.98 | **11.81** | 11.45–12.19 | 5–6 | 7.51 | 7.30 | 18.95 | 11.37 | 8.14 | 21.20 | 23.67 | 219.0 |
| 7 | [whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | 1.54 | **12.28** | 11.93–12.64 | 6–8 | 7.94 | 7.69 | 19.18 | 11.03 | 8.51 | 22.46 | 99.00 | 114.2 |
| 8 | [distil-large-v3.5](https://huggingface.co/distil-whisper/distil-large-v3.5) | 0.76 | **12.38** | 12.04–12.73 | 7–8 | 7.50 | 7.80 | 17.58 | 10.92 | 8.94 | 22.77 | 100.00 | 190.6 |
| 9 | [whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) | 0.81 | **14.34** | 13.02–16.14 | 9 | 9.44 | 8.23 | 19.55 | 12.07 | 10.65 | 27.87 | 85.00 | 177.7 |
| 10 | [whisper-small](https://huggingface.co/openai/whisper-small) | 0.24 | **18.04** | 17.09–19.22 | 10–11 | 11.97 | 9.58 | 26.36 | 15.79 | 11.67 | 37.21 | 95.67 | 421.7 |
| 11 | [nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | 0.64 | **18.92** | 18.50–19.37 | 10–11 | 13.15 | 10.04 | 23.82 | 17.88 | 12.95 | 38.33 | 4.33 | 696.0 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Accented 5%, Noisy 15%, Telephony 22%, Call-center 22%). Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which the model output any words; not part of the Arena score. 95% CI and rank range: paired bootstrap over utterances (1000 resamples); models whose rank ranges overlap are not reliably separated by this benchmark.

<details><summary>Per-set WER (%)</summary>

| Model | librispeech_clean/clean | librispeech_other/clean | fleurs_en/clean | common_voice_en/clean | voxpopuli_en/clean | earnings22/clean | gigaspeech/clean | spgispeech/clean | ami_sdm/clean | edacc/clean | urgent2024/clean | librispeech_clean/noisy | fleurs_en/noisy | voxpopuli_en/noisy | earnings22/noisy | minds14_tel/clean | vystadial_voip/clean | librispeech_clean/telephony | fleurs_en/telephony | voxpopuli_en/telephony | earnings22/telephony | common_voice_en/telephony | gigaspeech/telephony | librispeech_clean/callcenter | fleurs_en/callcenter | voxpopuli_en/callcenter | earnings22/callcenter | common_voice_en/callcenter | gigaspeech/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| qwen3-asr-1.7b | 1.57 | 3.23 | 4.78 | 7.68 | 6.02 | 10.26 | 8.41 | 3.33 | 8.85 | 14.15 | 10.10 | 1.98 | 9.05 | 8.70 | 14.95 | 1.00 | 6.47 | 1.90 | 5.59 | 7.08 | 10.33 | 13.43 | 8.55 | 8.55 | 14.80 | 12.04 | 19.93 | 34.50 | 15.44 |
| cohere-transcribe-arabic-07-2026 | 1.36 | 2.35 | 6.62 | 7.00 | 5.38 | 10.21 | 8.63 | 3.24 | 6.77 | 18.81 | 10.16 | 2.02 | 12.66 | 6.57 | 15.16 | 1.54 | 8.38 | 1.78 | 7.31 | 5.83 | 10.09 | 11.73 | 8.56 | 7.82 | 21.57 | 15.02 | 21.10 | 48.30 | 15.25 |
| parakeet-tdt-0.6b-v3 | 1.85 | 3.51 | 6.68 | 8.82 | 6.01 | 10.83 | 8.74 | 4.26 | 9.70 | 15.15 | 11.75 | 3.27 | 12.40 | 8.76 | 15.11 | 1.63 | 9.96 | 2.28 | 7.58 | 7.45 | 11.21 | 14.74 | 9.02 | 10.97 | 20.48 | 13.86 | 21.88 | 40.35 | 15.96 |
| cohere-transcribe-03-2026 | 1.25 | 2.31 | 7.17 | 7.47 | 5.82 | 10.49 | 8.73 | 3.48 | 6.78 | 19.78 | 9.89 | 1.88 | 14.53 | 7.31 | 18.77 | 1.54 | 8.42 | 1.74 | 7.16 | 6.22 | 10.05 | 12.49 | 8.90 | 7.28 | 23.21 | 10.64 | 20.63 | 54.50 | 16.84 |
| qwen3-asr-0.6b | 2.02 | 4.32 | 5.82 | 9.78 | 6.92 | 11.22 | 8.75 | 3.49 | 9.72 | 15.72 | 11.91 | 2.66 | 11.57 | 10.29 | 17.75 | 1.32 | 6.16 | 2.63 | 7.45 | 8.12 | 11.36 | 16.37 | 9.74 | 12.10 | 19.52 | 16.79 | 25.55 | 39.83 | 17.92 |
| canary-1b-v2 | 1.86 | 3.49 | 6.22 | 9.32 | 6.16 | 11.74 | 11.08 | 2.43 | 13.42 | 18.95 | 15.12 | 2.86 | 12.53 | 8.68 | 17.65 | 2.14 | 9.07 | 2.45 | 6.91 | 7.11 | 11.74 | 15.54 | 10.18 | 10.74 | 19.52 | 14.23 | 22.84 | 41.63 | 18.23 |
| whisper-large-v3 | 1.82 | 3.44 | 5.76 | 10.37 | 9.11 | 11.28 | 9.62 | 3.12 | 14.73 | 19.18 | 13.89 | 3.27 | 12.08 | 9.58 | 16.32 | 1.58 | 8.51 | 2.42 | 7.05 | 7.93 | 12.28 | 18.06 | 10.26 | 11.30 | 21.86 | 14.52 | 24.22 | 44.91 | 17.97 |
| distil-large-v3.5 | 2.29 | 4.74 | 6.67 | 11.96 | 7.47 | 11.11 | 9.40 | 3.06 | 13.46 | 17.58 | 12.87 | 3.33 | 12.55 | 9.65 | 16.20 | 1.74 | 9.03 | 3.06 | 8.07 | 8.35 | 11.79 | 19.83 | 9.65 | 12.01 | 22.80 | 14.49 | 23.67 | 45.33 | 18.31 |
| whisper-large-v3-turbo | 1.96 | 3.72 | 6.13 | 11.51 | 11.36 | 11.67 | 9.61 | 3.11 | 15.00 | 19.55 | 14.52 | 2.98 | 12.17 | 10.75 | 19.95 | 1.82 | 8.40 | 2.35 | 10.08 | 9.00 | 11.85 | 30.97 | 10.75 | 16.94 | 30.16 | 15.11 | 24.35 | 59.79 | 20.86 |
| whisper-small | 3.19 | 6.94 | 8.39 | 16.02 | 8.03 | 12.89 | 10.38 | 3.74 | 16.66 | 26.36 | 21.62 | 5.34 | 18.31 | 11.71 | 21.98 | 2.66 | 10.57 | 4.75 | 11.67 | 9.52 | 14.20 | 28.86 | 11.09 | 21.61 | 47.73 | 23.04 | 37.62 | 64.15 | 29.09 |
| nemotron-3.5-asr-streaming-0.6b | 3.15 | 7.26 | 9.98 | 17.60 | 8.71 | 15.50 | 10.54 | 3.96 | 13.67 | 23.82 | 20.41 | 6.30 | 22.40 | 15.54 | 24.75 | 2.60 | 11.42 | 5.61 | 13.11 | 11.03 | 16.85 | 30.55 | 12.41 | 27.89 | 38.01 | 31.90 | 42.50 | 56.06 | 33.62 |

</details>
