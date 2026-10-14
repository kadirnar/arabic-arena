# Arabic Arena 🎙️

**A multi-dataset WER/CER benchmark for Arabic and English speech-to-text, built for real-world
conditions, especially phone calls.**

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

### Commercial APIs

The following backends are registered:

| Provider | Model key(s) | Key variable |
|---|---|---|
| OpenAI | `openai/gpt-4o-transcribe`, `openai/gpt-4o-mini-transcribe`, `openai/whisper-1` | `OPENAI_API_KEY` |
| ElevenLabs | `elevenlabs/scribe-v2` | `ELEVENLABS_API_KEY` |
| Deepgram | `deepgram/nova-3` | `DEEPGRAM_API_KEY` |
| Mistral | `mistral/voxtral-mini-transcribe` | `MISTRAL_API_KEY` |
| Google | `google/gemini-2.5-flash` | `GEMINI_API_KEY` |
| AssemblyAI | `assemblyai/universal` | `ASSEMBLYAI_API_KEY` |

Export the key, then run the model the same way as an open one:

```bash
export DEEPGRAM_API_KEY=...
sttarena run -m deepgram/nova-3 --suite arabic
```

- Requests run concurrently and retry with backoff.
- Responses are cached by audio hash, so a re-run is never billed twice.
- The leaderboard adds two columns for these models, measured the way Artificial Analysis does:
  - **speed factor**: audio duration ÷ end-to-end latency, as the median per request.
  - **$ / 1000 min**: the list price.

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
