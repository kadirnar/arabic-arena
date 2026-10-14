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

- 🇸🇦 **Arabic suite**: 12 test sets covering MSA, Gulf, Egyptian, Levantine, Maghrebi and
  code-switching, plus 16 degraded sets
- 📞 **Telephony and call-center tracks**: band-limited 8 kHz audio, G.711/GSM/AMR-NB/G.726/Opus
  codecs, packet loss, clipping, plus background babble/office/street noise and room reverb.
  Every degraded set is reproducible and records its parameters.
- 🇬🇧 **English suite**: in progress (see the [roadmap](docs/ROADMAP.md))
- 📊 **Corpus-level WER and CER**, a per-track macro average, a weighted Arena score, and RTFx
  measured on a local GPU

## 🏆 Arabic leaderboard

<!-- LEADERBOARD:ar:START -->
| # | Model | Params (B) | **Arena WER** | Arena CER | Clean | Code-switch | Noisy | Telephony | Call-center | Halluc. % | RTFx |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026) | 2.07 | **27.96** | 16.02 | 22.15 | 32.24 | 26.15 | 23.77 | 41.54 | — | 330.4 |
| 2 | [audar-asr-v1-turbo](https://huggingface.co/audarai/Audar-ASR-V1-Turbo) | 2.35 | **31.64** | 16.77 | 23.74 | 33.95 | 27.91 | 27.89 | 50.87 | — | 87.6 |
| 3 | [nvidia-fastconformer-ar-pc](https://huggingface.co/nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0) | 0.12 | **36.24** | 19.95 | 30.11 | 43.32 | 31.60 | 32.27 | 50.90 | 66.00 | 2404.9 |
| 4 | [cohere-transcribe-03-2026](https://huggingface.co/CohereLabs/cohere-transcribe-03-2026) | 2.07 | **38.82** | 23.75 | 31.20 | 55.34 | 33.35 | 34.39 | 52.41 | 100.00 | 306.3 |
| 5 | [qwen3-asr-1.7b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf) | 2.04 | **40.10** | 19.59 | 33.13 | 38.45 | 35.81 | 37.16 | 59.26 | — | 112.4 |
| 6 | [audar-asr-v1-flash](https://huggingface.co/audarai/Audar-ASR-V1-Flash) | 0.78 | **41.92** | 22.84 | 34.03 | 42.54 | 38.73 | 38.68 | 61.07 | 27.67 | 52.3 |
| 7 | [qwen3-asr-0.6b](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf) | 0.94 | **50.33** | 24.85 | 42.49 | 45.88 | 45.69 | 49.70 | 70.38 | 48.33 | 100.5 |
| 8 | [whisper-large-v3](https://huggingface.co/openai/whisper-large-v3) | 1.54 | **50.45** | 31.29 | 40.44 | 49.26 | 47.06 | 44.48 | 77.09 | — | 45.1 |
| 9 | [whisper-large-v3-turbo](https://huggingface.co/openai/whisper-large-v3-turbo) | 0.81 | **62.58** | 40.41 | 47.69 | 56.88 | 52.09 | 58.78 | 103.16 | 100.00 | 105.1 |
| 10 | [mms-1b-all](https://huggingface.co/facebook/mms-1b-all) | 0.96 | **63.73** | 32.12 | 56.59 | 68.13 | 58.21 | 62.57 | 79.31 | 49.67 | 445.5 |
| 11 | [whisper-medium](https://huggingface.co/openai/whisper-medium) | 0.76 | **73.82** | 51.43 | 58.28 | 75.95 | 64.35 | 69.54 | 111.35 | 100.00 | 56.8 |
| 12 | [wav2vec2-large-xlsr-53-arabic](https://huggingface.co/jonatasgrosman/wav2vec2-large-xlsr-53-arabic) | 0.32 | **77.75** | 48.19 | 69.52 | 87.17 | 75.25 | 77.72 | 89.32 | 77.00 | 1186.0 |
| 13 | [whisper-small](https://huggingface.co/openai/whisper-small) | 0.24 | **107.40** | 74.36 | 77.43 | 88.45 | 90.49 | 88.88 | 200.54 | 100.00 | 117.4 |
| 14 | [gemma-4-e2b-it](https://huggingface.co/google/gemma-4-E2B-it) | 5.10 | **—** | — | 34.19 | 40.10 | 45.29 | 41.85 | (3/6) | — | 40.9 |

WER/CER in %, lower is better. Arena = weighted mean of track WERs (Clean 35%, Noisy 15%, Code-switch 10%, Telephony 20%, Call-center 20%). Halluc. % = share of noise-only clips (silence, hold, line noise, distant chatter) for which the model output any words; not part of the Arena score.

<details><summary>Per-set WER (%)</summary>

| Model | fleurs_ar/clean | cv18_ar/clean | masc_clean/clean | mgb2/clean | sada/clean | casablanca/clean | mgb3_egy/clean | mgb5_mor/clean | mixat_cs/clean | algerian_cs/clean | masc_noisy/clean | nadi_robust/clean | fleurs_ar/noisy | cv18_ar/noisy | mgb2/noisy | sada/noisy | fleurs_ar/telephony | cv18_ar/telephony | mgb2/telephony | sada/telephony | casablanca/telephony | mgb3_egy/telephony | fleurs_ar/callcenter | cv18_ar/callcenter | mgb2/callcenter | sada/callcenter | casablanca/callcenter | mgb3_egy/callcenter |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 4.81 | 4.71 | 5.15 | 12.86 | 36.11 | 42.27 | 24.66 | 46.63 | 17.79 | 46.68 | 16.39 | 55.49 | 6.78 | 13.32 | 16.53 | 48.39 | 5.92 | 8.93 | 13.48 | 40.32 | 45.77 | 28.19 | 16.15 | 29.25 | 26.71 | 62.52 | 65.45 | 49.17 |
| audar-asr-v1-turbo | 6.25 | 7.65 | 6.54 | 11.41 | 27.70 | 45.67 | 25.06 | 59.66 | 15.34 | 52.57 | 19.15 | 58.90 | 9.06 | 17.85 | 16.31 | 46.16 | 8.60 | 13.72 | 13.92 | 38.03 | 57.12 | 35.95 | 28.34 | 39.24 | 30.58 | 65.72 | 81.18 | 60.14 |
| nvidia-fastconformer-ar-pc | 8.11 | 6.14 | 5.06 | 14.90 | 43.25 | 56.76 | 30.79 | 75.85 | 28.01 | 58.63 | 19.33 | 69.24 | 10.53 | 14.59 | 21.18 | 54.70 | 10.21 | 11.59 | 17.66 | 51.69 | 63.57 | 38.92 | 25.52 | 33.78 | 36.55 | 70.22 | 79.43 | 59.90 |
| cohere-transcribe-03-2026 | 7.10 | 7.18 | 5.91 | 13.05 | 50.13 | 54.67 | 32.73 | 78.87 | 49.46 | 61.22 | 17.77 | 69.23 | 8.74 | 16.39 | 17.02 | 70.94 | 8.52 | 12.33 | 17.16 | 68.13 | 61.25 | 38.96 | 21.46 | 39.71 | 32.78 | 81.40 | 82.26 | 56.86 |
| qwen3-asr-1.7b | 9.23 | 15.19 | 11.78 | 16.14 | 41.76 | 59.07 | 36.31 | 75.56 | 21.01 | 55.89 | 24.89 | 69.87 | 12.87 | 27.25 | 22.47 | 57.49 | 13.33 | 22.92 | 21.01 | 52.20 | 69.29 | 44.20 | 36.25 | 51.30 | 42.41 | 72.97 | 89.35 | 63.28 |
| audar-asr-v1-flash | 11.32 | 15.27 | 13.03 | 17.12 | 44.45 | 55.86 | 36.05 | 79.11 | 22.13 | 62.95 | 26.37 | 71.19 | 15.18 | 25.92 | 23.40 | 70.28 | 15.17 | 26.18 | 22.47 | 55.15 | 68.47 | 44.64 | 39.11 | 50.03 | 43.73 | 83.60 | 81.12 | 68.86 |
| qwen3-asr-0.6b | 18.07 | 27.36 | 20.24 | 25.04 | 52.18 | 67.79 | 47.87 | 81.39 | 28.49 | 63.27 | 34.19 | 78.42 | 22.45 | 39.51 | 34.93 | 64.63 | 25.86 | 39.64 | 32.73 | 64.04 | 78.89 | 57.04 | 51.42 | 71.22 | 57.89 | 79.34 | 88.72 | 73.72 |
| whisper-large-v3 | 9.48 | 15.01 | 10.54 | 16.14 | 69.02 | 62.67 | 37.22 | 103.40 | 28.41 | 70.11 | 23.79 | 96.89 | 13.12 | 28.11 | 22.11 | 98.32 | 13.17 | 26.38 | 18.89 | 81.00 | 72.76 | 54.70 | 34.49 | 74.55 | 51.24 | 88.22 | 143.42 | 70.62 |
| whisper-large-v3-turbo | 10.13 | 23.02 | 10.34 | 17.15 | 85.47 | 85.55 | 42.88 | 106.98 | 24.58 | 89.18 | 26.21 | 115.33 | 14.23 | 37.77 | 29.26 | 89.72 | 14.50 | 30.98 | 21.48 | 95.31 | 110.33 | 80.06 | 45.85 | 103.00 | 64.63 | 124.14 | 156.68 | 124.63 |
| mms-1b-all | 23.62 | 26.26 | 34.62 | 39.34 | 80.87 | 85.20 | 73.62 | 89.16 | 61.34 | 74.93 | 52.08 | 92.14 | 29.61 | 40.71 | 47.85 | 86.89 | 31.05 | 38.71 | 46.42 | 87.69 | 91.80 | 79.75 | 58.58 | 66.76 | 70.27 | 94.78 | 96.03 | 89.45 |
| whisper-medium | 16.22 | 27.77 | 16.04 | 33.44 | 103.24 | 88.27 | 59.02 | 122.27 | 70.31 | 81.59 | 32.83 | 123.36 | 20.78 | 56.96 | 44.80 | 107.39 | 25.70 | 40.24 | 34.74 | 129.92 | 104.42 | 82.21 | 54.11 | 107.93 | 72.77 | 152.77 | 166.02 | 114.49 |
| wav2vec2-large-xlsr-53-arabic | 69.19 | 22.96 | 41.78 | 55.89 | 93.84 | 91.51 | 85.93 | 95.10 | 86.94 | 87.39 | 63.95 | 96.47 | 76.15 | 48.03 | 70.38 | 96.54 | 75.50 | 38.91 | 68.12 | 96.97 | 96.57 | 90.24 | 85.64 | 71.02 | 85.75 | 98.98 | 98.95 | 95.56 |
| whisper-small | 27.74 | 41.37 | 26.18 | 46.95 | 122.43 | 104.75 | 69.35 | 180.68 | 64.44 | 112.46 | 46.96 | 168.00 | 36.06 | 90.21 | 62.82 | 138.93 | 39.43 | 76.48 | 47.61 | 151.46 | 129.18 | 89.10 | 90.49 | 321.65 | 142.16 | 238.87 | 230.07 | 179.99 |
| gemma-4-e2b-it | 13.47 | 24.99 | 17.12 | 20.62 | 44.58 | 57.61 | 29.95 | 65.18 | 27.78 | 52.42 | 28.73 | 73.97 | 17.79 | 54.16 | 32.45 | 64.63 | 17.12 | 43.84 | 28.47 | 54.58 | 66.59 | 40.54 | 48.87 | 103.00 | 58.69 | — | — | — |

</details>
<!-- LEADERBOARD:ar:END -->

Hardware: 1× RTX 5070 Ti (16 GB), batch inference, greedy decoding, language forced to Arabic.
Models that only fit with quantization are not included yet.

## Tracks and scoring

| Track | Weight | What it measures | Sets |
|---|---|---|---|
| Clean | 35% | Studio, broadcast and TV speech across dialects | FLEURS, CV18, MASC-clean, MGB-2, SADA, Casablanca, MGB-3, MGB-5 |
| Noisy | 15% | Real noisy recordings and synthetic noise (0–15 dB SNR) | MASC-noisy, NADI-2026 Robust, and 4 sets with added noise |
| Code-switch | 10% | Arabic–English and Arabic–French mixing | Mixat, Algerian CS |
| Telephony | 20% | Phone channel: 8 kHz, 300–3400 Hz, codec, packet loss | 6 sets |
| Call-center | 20% | Noisy caller environment, then the phone channel | 6 sets |

- **Within each set**: errors are summed over all utterances. This is corpus WER, not the mean
  of per-utterance WERs.
- **Track score**: the plain mean over that track's sets.
- **Arena WER**: the weighted mean of the five track scores.
- **Normalization**: identical for references and hypotheses. Diacritics, tatweel and punctuation
  are removed, and alef/hamza/yaa/taa-marbuta forms are unified (see
  [`sttarena/normalizers/arabic.py`](sttarena/normalizers/arabic.py)).
- **Full methodology**: [docs/METHODOLOGY.md](docs/METHODOLOGY.md).

## Datasets

All sets are deterministic subsets of public Hugging Face datasets: at most 1,000 utterances of
1–30 s, chosen by hash rank. Manifests with the exact ids and source revisions are in
[`manifests/`](manifests/). Sets whose licence allows it are re-hosted on the Hub; for the
others, you rebuild them locally from the original source.

| Set | Source | Dialect | Domain | Licence |
|---|---|---|---|---|
| fleurs_ar | google/fleurs `ar_eg` | MSA | read | CC-BY-4.0 |
| cv18_ar | Common Voice 18 (MohamedRashad mirror) | MSA | read, crowd | CC0 |
| masc_clean / masc_noisy | MASC | mixed | YouTube | CC-BY-4.0 |
| mgb2 | MGB-2 (Al Jazeera) | mostly MSA | broadcast | QCRI agreement |
| sada | SADA 2022 | Saudi / Gulf | TV | CC-BY-NC-SA-4.0 |
| casablanca | UBC-NLP/Casablanca (8 countries) | DZ, EG, JO, MR, MA, PS, AE, YE | TV series | CC-BY-NC-ND-4.0 |
| mgb3_egy | MGB-3 | Egyptian | YouTube | unspecified |
| mgb5_mor | MGB-5 | Moroccan | YouTube | unspecified |
| mixat_cs | Mixat | Emirati + English | podcast | CC-BY-NC-SA-4.0 |
| algerian_cs | OIST Algerian CS | Algerian + French | conversation | controlled |
| nadi_robust | NADI-2026 Robust ASR (validation) | 8 dialects | noisy | unspecified |

Noise for the degraded tracks comes from DEMAND and MUSAN (both CC-BY-4.0). Babble noise is
synthesized from other test speakers.

## Quickstart

```bash
uv venv --python 3.12 && uv pip install -e ".[gpu]"
python scripts/build_noise_bank.py                 # DEMAND + MUSAN noise
python scripts/build_benchmark.py --suite arabic   # build the clean and degraded sets
sttarena models                                    # list registered models
sttarena run -m whisper-large-v3 --suite arabic    # evaluate (cached per set)
sttarena run -m qwen3-asr-1.7b --limit 32          # quick smoke test, not saved
sttarena leaderboard --suite arabic                # refresh tables
```

Some models need their own environment (`qwen-asr`, NeMo, omniASR/fairseq2); see
[`scripts/setup_envs.sh`](scripts/setup_envs.sh).

### Scope: open-weight models only

The arena only evaluates models whose weights are public and that run locally. Closed
commercial APIs are out of scope.

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
