| # | Model | Params (B) | **Arena WER v2** | 95% CI | Rank set | Arena CER v2 | Clean | Accented | Noisy | Telephony | Call-center | Strict (L1) | Arithmetic | Real audio | Zero-shot | Exposure | Halluc. ≥3 words | Terms missed | v1 Arena | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **6.82** | 6.54–7.05 | 1–2 | 4.25 | 4.65 | 12.45 | 7.04 | 4.71 | 15.33 | 7.37 | 8.99 | 4.92 | 5.52 | — | 44.33 | — | 9.64 | 164.1 |
| 2 | [arabic-stt-qwen3-asr-1.7b-best-grpo2](https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-best-grpo2) † *(gated weights)* | 2.04 | **6.94** | 6.66–7.17 | 1–2 | 4.22 | 5.29 | 12.94 | 6.69 | 5.20 | 12.57 | 7.54 | 8.37 | 5.51 | 6.14 | 78% | 41.00 | — | 9.08 | 168.2 |

WER/CER in %, lower is better. Per set: profile `L2sp` (dialect-lenient normalization, space-insensitive alignment, multi-reference where available, errors capped per utterance). Arena: weighted geometric mean over sets (track weight split evenly over its sets; Clean 35%, Accented 5%, Noisy 15%, Telephony 22%, Call-center 22%). Strict (L1): the same aggregation of orthographic-only WER. Real audio: the Arena over the clean sets whose audio is not simulated (no telephony, call-center, added noise or band-limiting). Zero-shot: Arena over the sets no ranked model trained on (fleurs_en, minds14_tel, urgent2024, vystadial_voip). Exposure: share of the Arena weight on sets whose training split the model saw (†). Halluc. ≥3 words: share of noise-only clips (silence, hold, line noise, distant chatter) on which the model wrote three or more words; not part of the Arena. Terms missed: share of key terms the hypothesis does not contain after the same normalization, pooled over the SVQ queries' salient terms (names, places, question words) and the named entities of the CV18 test sentences (Elyadata/CV18-NER); not part of the Arena. 95% CI and rank set: joint cluster bootstrap (speakers / videos / recordings / sentences resampled together across a set's conditions and across models) and simultaneous rank confidence sets (Mogstad et al. 2024): models whose rank sets overlap are not separated by this benchmark.
Effective track weights (share of the between-model spread of the Arena): Clean 265%, Accented 11%, Noisy -44%, Telephony 130%, Call-center -262%.
Intervals likely too narrow on: ami_sdm/clean (iid: no cluster key), common_voice_en/callcenter (iid: no cluster key), common_voice_en/clean (iid: no cluster key), common_voice_en/telephony (iid: no cluster key), earnings22/callcenter (iid: no cluster key), earnings22/clean (iid: no cluster key), earnings22/noisy (iid: no cluster key), earnings22/telephony (iid: no cluster key), edacc/clean (iid: no cluster key), fleurs_en/callcenter (iid: no cluster key), fleurs_en/clean (iid: no cluster key), fleurs_en/noisy (iid: no cluster key), fleurs_en/telephony (iid: no cluster key), gigaspeech/callcenter (iid: no cluster key), gigaspeech/clean (iid: no cluster key), gigaspeech/telephony (iid: no cluster key), librispeech_clean/callcenter (iid: no cluster key), librispeech_clean/clean (iid: no cluster key), librispeech_clean/noisy (iid: no cluster key), librispeech_clean/telephony (iid: no cluster key), librispeech_other/clean (iid: no cluster key), minds14_tel/clean (iid: no cluster key), spgispeech/clean (iid: no cluster key), urgent2024/clean (iid: no cluster key), voxpopuli_en/callcenter (iid: no cluster key), voxpopuli_en/clean (iid: no cluster key), voxpopuli_en/noisy (iid: no cluster key), voxpopuli_en/telephony (iid: no cluster key), vystadial_voip/clean (iid: no cluster key).

<details><summary>Per-set WER v2 (%)</summary>

| Model | librispeech_clean/clean | librispeech_other/clean | fleurs_en/clean | common_voice_en/clean | voxpopuli_en/clean | earnings22/clean | gigaspeech/clean | spgispeech/clean | ami_sdm/clean | edacc/clean | urgent2024/clean | librispeech_clean/noisy | fleurs_en/noisy | voxpopuli_en/noisy | earnings22/noisy | minds14_tel/clean | vystadial_voip/clean | librispeech_clean/telephony | fleurs_en/telephony | voxpopuli_en/telephony | earnings22/telephony | common_voice_en/telephony | gigaspeech/telephony | librispeech_clean/callcenter | fleurs_en/callcenter | voxpopuli_en/callcenter | earnings22/callcenter | common_voice_en/callcenter | gigaspeech/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| qwen3-asr-1.7b | 1.17 | 2.92 | 4.32 | 7.03 | 5.73 | 9.77 | 7.58 | 3.07 | 7.48 | 12.45 | 9.75 | 1.79 | 8.48 | 8.25 | 14.11 | 0.95 | 4.83 | 1.65 | 5.12 | 6.73 | 9.62 | 12.80 | 7.61 | 8.23 | 14.07 | 11.94 | 19.49 | 33.08 | 14.55 |
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 1.60 | 3.91 | 5.74 | 8.61 | 6.44 | 8.01 | 7.98 | 3.74 | 6.77 | 12.94 | 9.46 | 2.18 | 8.18 | 8.18 | 9.76 | 1.38 | 4.51 | 2.14 | 6.72 | 7.47 | 8.01 | 12.80 | 7.86 | 5.97 | 13.40 | 10.45 | 14.18 | 26.16 | 12.71 |

</details>

<details><summary>v1 leaderboard (previous scorer)</summary>

| # | Model | Params (B) | **Arena WER** | 95% CI | Rank range | Arena CER | Clean | Accented | Noisy | Telephony | Call-center | Halluc. % | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [arabic-stt-qwen3-asr-1.7b-best-grpo2](https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-best-grpo2) † *(gated weights)* | 2.04 | **9.08** | 8.84–9.32 | 1 | 5.28 | 6.48 | 14.59 | 7.98 | 7.16 | 14.54 | 45.00 | 168.2 |
| 2 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **9.64** | 9.35–9.93 | 2 | 5.97 | 6.01 | 14.12 | 8.96 | 6.77 | 17.60 | 99.67 | 164.1 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Accented 5%, Noisy 15%, Telephony 22%, Call-center 22%). Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which the model output any words; not part of the Arena score. 95% CI and rank range: paired bootstrap over utterances (1000 resamples); models whose rank ranges overlap are not reliably separated by this benchmark.

† Trained on the train split of a benchmark corpus (in-domain, not zero-shot): arabic-stt-qwen3-asr-1.7b-best-grpo2 (librispeech_clean, librispeech_other, common_voice_en, voxpopuli_en, ami_sdm, gigaspeech, edacc, earnings22, spgispeech).

<details><summary>Per-set WER (%)</summary>

| Model | librispeech_clean/clean | librispeech_other/clean | fleurs_en/clean | common_voice_en/clean | voxpopuli_en/clean | earnings22/clean | gigaspeech/clean | spgispeech/clean | ami_sdm/clean | edacc/clean | urgent2024/clean | librispeech_clean/noisy | fleurs_en/noisy | voxpopuli_en/noisy | earnings22/noisy | minds14_tel/clean | vystadial_voip/clean | librispeech_clean/telephony | fleurs_en/telephony | voxpopuli_en/telephony | earnings22/telephony | common_voice_en/telephony | gigaspeech/telephony | librispeech_clean/callcenter | fleurs_en/callcenter | voxpopuli_en/callcenter | earnings22/callcenter | common_voice_en/callcenter | gigaspeech/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 1.97 | 4.27 | 6.16 | 9.20 | 6.81 | 8.47 | 8.99 | 4.14 | 8.31 | 14.59 | 9.94 | 2.49 | 8.54 | 8.57 | 10.36 | 1.45 | 7.49 | 2.45 | 7.08 | 7.86 | 8.68 | 13.22 | 9.06 | 6.23 | 13.78 | 10.91 | 15.07 | 27.40 | 13.81 |
| qwen3-asr-1.7b | 1.56 | 3.25 | 4.78 | 7.58 | 6.07 | 10.24 | 8.41 | 3.32 | 8.84 | 14.12 | 10.10 | 2.00 | 9.08 | 8.63 | 15.01 | 1.01 | 6.49 | 1.90 | 5.56 | 7.08 | 10.31 | 13.22 | 8.62 | 8.43 | 14.62 | 12.21 | 20.14 | 34.78 | 15.43 |

</details>

</details>
