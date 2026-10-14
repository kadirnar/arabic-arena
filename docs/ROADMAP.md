# Roadmap

Every item below is tracked as a GitHub issue; milestones group them.

## M1 — Arabic v1 (open models, local GPU) ✅ in progress
- [x] Core package: dataset builder, normalizers, corpus WER/CER, runner, leaderboard aggregation
- [x] Arabic normalizer aligned with the Open Universal Arabic ASR Leaderboard (+ ة/ى folding)
- [x] 12 Arabic test sets: MSA read (FLEURS, CV18), broadcast (MGB-2), YouTube (MASC clean/noisy),
      Gulf (SADA), 8 dialects (Casablanca), Egyptian (MGB-3), Moroccan (MGB-5),
      code-switching (Mixat, Algerian), noisy dialectal (NADI-2026)
- [x] Simulated phone-channel tracks: telephony (codecs + band-limit + packet loss) and
      call-center (babble/office/street noise + reverb + codec)
- [ ] Evaluate first batch of open models on RTX 5070 Ti (Whisper, Qwen3-ASR, Cohere, Voxtral,
      Seamless, MMS, Gemma-4, NVIDIA, omniASR, Audar)
- [ ] Publish redistributable sets to the HF Hub (`kadirnar/arabic-arena-ar`)
- [ ] Leaderboard in README + static site (GitHub Pages)

## M2 — Telephony & robustness
- [ ] Real Arabic call-center speech (request access: InfoBayAI, Maqsam benchmark, partners)
- [ ] SNR sweep track (20/10/5/0/-5 dB) to plot robustness curves per model
- [ ] Codec-specific breakdown (G.711 vs AMR-NB vs Opus) and 8 kHz-native models
- [ ] Real RIRs (OpenSLR-28 / MIT) instead of synthetic reverb; speakerphone/handset IRs
- [ ] Stereo call (agent + customer) long-form evaluation with diarization-free WER
- [ ] Hallucination metrics on silence / noise-only segments (insertion rate)

## M3 — English suite
- [ ] LibriSpeech clean/other, AMI, Earnings22, GigaSpeech, SPGISpeech, VoxPopuli, CV, FLEURS
- [ ] Real telephony: CallHome-telephony (8 kHz), MInDS-14 telephony, Vystadial VoIP
- [ ] Noisy: URGENT-2024; accented: EdAcc
- [ ] Same simulated telephony / call-center tracks as Arabic
- [ ] English models: Parakeet-TDT v3, Canary-1B-v2, Canary-Qwen-2.5B, Granite-Speech, distil-whisper

## M4 — API models (dropped)
Out of scope: the arena evaluates open-weight models only.

## M5 — Leaderboard UX
- [ ] Interactive site: WER vs speed, per-dialect, per-condition charts
- [ ] HF Space mirror; model submission flow (PR with summary.json, or request issue)
- [ ] Per-dialect breakdown (Casablanca / NADI countries)

## M6 — Methodology quality
- [ ] Bootstrap 95% confidence intervals per set and for the Arena score
- [ ] Reference cleaning pass (AA "Cleaned" style) for noisy transcripts (SADA, MGB-2, MASC)
- [ ] Multi-reference WER for MGB-3 (4 annotators)
- [ ] Contamination audit: flag models trained on these corpora' train splits
- [ ] Private held-out Arabic set (dialects + phone calls) to prevent overfitting
- [ ] Long-form and streaming (latency) tracks
