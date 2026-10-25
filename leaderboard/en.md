| # | Model | Params (B) | **Arena WER v2** | 95% CI | Rank set | Arena CER v2 | Clean | Accented | Noisy | Telephony | Call-center | Strict (L1) | Arithmetic | Real audio | Zero-shot | Exposure | Halluc. ≥3 words | Terms missed | v1 Arena | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **6.82** | — | — | 4.25 | 4.65 | 12.45 | 7.04 | 4.71 | 15.33 | 7.37 | 8.99 | 4.92 | 6.82 | — | 44.33 | — | 9.64 | 164.1 |

WER/CER in %, lower is better. Per set: profile `L2sp` (dialect-lenient normalization, space-insensitive alignment, multi-reference where available, errors capped per utterance). Arena: weighted geometric mean over sets (track weight split evenly over its sets; Clean 35%, Accented 5%, Noisy 15%, Telephony 22%, Call-center 22%). Strict (L1): the same aggregation of orthographic-only WER. Real audio: the Arena over the clean sets whose audio is not simulated (no telephony, call-center, added noise or band-limiting). Zero-shot: Arena over the sets no ranked model trained on (ami_sdm, common_voice_en, earnings22, edacc, fleurs_en, gigaspeech, librispeech_clean, librispeech_other, minds14_tel, spgispeech, urgent2024, voxpopuli_en, vystadial_voip). Exposure: share of the Arena weight on sets whose training split the model saw (†). Halluc. ≥3 words: share of noise-only clips (silence, hold, line noise, distant chatter) on which the model wrote three or more words; not part of the Arena. Terms missed: share of key terms the hypothesis does not contain after the same normalization, pooled over the SVQ queries' salient terms (names, places, question words) and the named entities of the CV18 test sentences (Elyadata/CV18-NER); not part of the Arena. 95% CI and rank set: joint cluster bootstrap (speakers / videos / recordings / sentences resampled together across a set's conditions and across models) and simultaneous rank confidence sets (Mogstad et al. 2024): models whose rank sets overlap are not separated by this benchmark.

<details><summary>Per-set WER v2 (%)</summary>

| Model | librispeech_clean/clean | librispeech_other/clean | fleurs_en/clean | common_voice_en/clean | voxpopuli_en/clean | earnings22/clean | gigaspeech/clean | spgispeech/clean | ami_sdm/clean | edacc/clean | urgent2024/clean | librispeech_clean/noisy | fleurs_en/noisy | voxpopuli_en/noisy | earnings22/noisy | minds14_tel/clean | vystadial_voip/clean | librispeech_clean/telephony | fleurs_en/telephony | voxpopuli_en/telephony | earnings22/telephony | common_voice_en/telephony | gigaspeech/telephony | librispeech_clean/callcenter | fleurs_en/callcenter | voxpopuli_en/callcenter | earnings22/callcenter | common_voice_en/callcenter | gigaspeech/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| qwen3-asr-1.7b | 1.17 | 2.92 | 4.32 | 7.03 | 5.73 | 9.77 | 7.58 | 3.07 | 7.48 | 12.45 | 9.75 | 1.79 | 8.48 | 8.25 | 14.11 | 0.95 | 4.83 | 1.65 | 5.12 | 6.73 | 9.62 | 12.80 | 7.61 | 8.23 | 14.07 | 11.94 | 19.49 | 33.08 | 14.55 |

</details>

<details><summary>v1 leaderboard (previous scorer)</summary>

| # | Model | Params (B) | **Arena WER** | 95% CI | Rank range | Arena CER | Clean | Accented | Noisy | Telephony | Call-center | Halluc. % | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **9.64** | 9.35–9.93 | 1 | 5.97 | 6.01 | 14.12 | 8.96 | 6.77 | 17.60 | 99.67 | 164.1 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Accented 5%, Noisy 15%, Telephony 22%, Call-center 22%). Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which the model output any words; not part of the Arena score. 95% CI and rank range: paired bootstrap over utterances (1000 resamples); models whose rank ranges overlap are not reliably separated by this benchmark.

<details><summary>Per-set WER (%)</summary>

| Model | librispeech_clean/clean | librispeech_other/clean | fleurs_en/clean | common_voice_en/clean | voxpopuli_en/clean | earnings22/clean | gigaspeech/clean | spgispeech/clean | ami_sdm/clean | edacc/clean | urgent2024/clean | librispeech_clean/noisy | fleurs_en/noisy | voxpopuli_en/noisy | earnings22/noisy | minds14_tel/clean | vystadial_voip/clean | librispeech_clean/telephony | fleurs_en/telephony | voxpopuli_en/telephony | earnings22/telephony | common_voice_en/telephony | gigaspeech/telephony | librispeech_clean/callcenter | fleurs_en/callcenter | voxpopuli_en/callcenter | earnings22/callcenter | common_voice_en/callcenter | gigaspeech/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| qwen3-asr-1.7b | 1.56 | 3.25 | 4.78 | 7.58 | 6.07 | 10.24 | 8.41 | 3.32 | 8.84 | 14.12 | 10.10 | 2.00 | 9.08 | 8.63 | 15.01 | 1.01 | 6.49 | 1.90 | 5.56 | 7.08 | 10.31 | 13.22 | 8.62 | 8.43 | 14.62 | 12.21 | 20.14 | 34.78 | 15.43 |

</details>

</details>
