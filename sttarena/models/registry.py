from __future__ import annotations

import importlib

from .base import ASRModel, ModelSpec

BACKENDS = {
    "whisper_hf": "sttarena.models.hf_backends:WhisperHF",
    "qwen3_asr_hf": "sttarena.models.hf_backends:Qwen3ASRHF",
    "cohere_asr": "sttarena.models.hf_backends:CohereASR",
    "voxtral_realtime": "sttarena.models.hf_backends:VoxtralRealtime",
    "seamless": "sttarena.models.hf_backends:SeamlessM4T",
    "ctc_hf": "sttarena.models.hf_backends:CTCHF",
    "gemma_audio": "sttarena.models.hf_backends:GemmaAudio",
    "nemotron_rnnt": "sttarena.models.hf_backends:NemotronRNNT",
    "moonshine": "sttarena.models.hf_backends:MoonshineHF",
    "kyutai": "sttarena.models.hf_backends:KyutaiSTT",
    "fun_asr_nano": "sttarena.models.hf_backends:FunASRNano",
    "phi4mm": "sttarena.models.hf_backends:Phi4Multimodal",
    "parakeet_tdt_hf": "sttarena.models.hf_backends:ParakeetTDTHF",
    "qwen_asr_pkg": "sttarena.models.extra_backends:QwenASRPackage",
    "faster_whisper": "sttarena.models.extra_backends:FasterWhisper",
    "nemo": "sttarena.models.extra_backends:NeMoASR",
    "omniasr": "sttarena.models.extra_backends:OmniASR",
    "fun_asr_mlt": "sttarena.models.extra_backends:FunASRMLT",
    "soniox_api": "sttarena.models.api_backends:SonioxAPI",
    "jais_asr": "sttarena.models.hf_backends:JaisASR",
}

_M = ModelSpec

# English sets the Arabic-STT rounds trained on (run/streams.json of runs 4-8, the model cards after): runs 4-5 the
# train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI (IHM) and GigaSpeech; run 6 adds EdAcc's dev split
# and distil-whisper/earnings22 (all 38 shards of its "chunked" split: 57,391 segments of the 125 Earnings-22 calls,
# every one of the benchmark's 1,000 earnings22 rows among them under the same file and segment id); round 13 adds
# SPGISpeech. Exposure is cumulative along the line (run 8 continues run 6b).
EN_RUN5 = ("librispeech_clean", "librispeech_other", "common_voice_en", "voxpopuli_en", "ami_sdm", "gigaspeech")
EN_RUN6 = (*EN_RUN5, "edacc", "earnings22")
EN_RUN13 = (*EN_RUN6, "spgispeech")
RUN13_LINE = {"run13", "run16", "run13-sft-s3000", "run13c-rl-s750", "run16-rl-s250", "run16-rl-s1000"}

MODELS: dict[str, ModelSpec] = {m.key: m for m in [
    # --- Closed APIs (internal comparison only; out of the public board's scope) ---------------
    _M("soniox-stt-async-v5", "soniox_api", "soniox/stt-async-v5", None, "proprietary API", kind="api",
       batch_size=400, kwargs={"model_id": "stt-async-v5", "language_hints": {"ar": ("ar", "en"), "en": ("en",)},
                               "workers": 32},
       notes="closed commercial API; RTFx is API wall-clock time", repo="https://soniox.com"),
    # --- Whisper family ---------------------------------------------------------------------
    _M("whisper-large-v3", "whisper_hf", "openai/whisper-large-v3", 1.54, "Apache-2.0", batch_size=32),
    _M("whisper-large-v3-turbo", "whisper_hf", "openai/whisper-large-v3-turbo", 0.81, "MIT", batch_size=32),
    _M("whisper-medium", "whisper_hf", "openai/whisper-medium", 0.76, "Apache-2.0", batch_size=32),
    _M("whisper-small", "whisper_hf", "openai/whisper-small", 0.24, "Apache-2.0", batch_size=64),
    _M("whisper-large-v2", "whisper_hf", "openai/whisper-large-v2", 1.54, "Apache-2.0", batch_size=32),
    # --- Qwen3-ASR ----------------------------------------------------------------------------
    _M("arabic-stt-qwen3-asr-1.7b", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run3", 2.04, "gated weights",
       kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar"),
       notes="Arabic-STT run 3: full fine-tune, weights gated on the Hub; trained on the train splits of CV18 and MASC "
             "and on MGB-2/SADA/MGB-3 train rows (rows overlapping their test sets excluded). Its kejue-common-voice "
             "stream also holds 20 FLEURS ar_eg *test* sentences (37 of our 428 fleurs_ar rows), which the "
             "contamination guard did not cover; labels of that stream come from Soniox stt-async-v5"),
    _M("arabic-stt-qwen3-asr-1.7b-run5", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run5", 2.04, "gated weights",
       kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                  *EN_RUN5),
       notes="Arabic-STT run 5: run 3 continued twice (runs 4 and 5) with more call, dialect and code-switching data; "
             "same in-domain train rows as run 3, including MGB-3 train and the 20 leaked FLEURS ar_eg test "
             "sentences; also trained on clips of the lahgtna-v3-small test split"),
    _M("arabic-stt-qwen3-asr-1.7b-run5base", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run5base", 2.04, "gated weights",
       kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                  *EN_RUN5),
       notes="Arabic-STT run5base: run 5's data and targets trained from the base model (40,000 steps); "
             "same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences"),
    _M("arabic-stt-qwen3-asr-1.7b-run6b-soup70", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run6b-soup70", 2.04,
       "private weights", kind="private", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                  *EN_RUN6),
       notes="Arabic-STT run6b-soup70: weight average of 0.7 x run 6b (step 10,000) and 0.3 x run 5 (step 15,000), "
             "no further training; private weights. Trained on the train splits of MASC and Common Voice and on "
             "MGB-2/SADA train rows; the run-5 share carries run 5's exposure (MGB-3 train, the 20 leaked FLEURS "
             "ar_eg test sentences)"),
    # Arabic-STT/qwen3-asr-1.7b-ar-run9 holds rounds 9 to 16: a branch per round (its head the round's recommended
    # model) and a tag per kept checkpoint. Each entry pins a commit with distinct weights (rl-step-2000 has
    # run9-final's file). The line descends from run 8 (run/streams.json), which streams the same kejue-voice and
    # kejue-common-voice revisions as run 3 (MGB-2/SADA/MGB-3 train rows, the 20 leaked FLEURS ar_eg test
    # sentences) plus MASC, CV18 and TEDxTN train; its Hassaniya data (hassaniya-read-speech-v1) is a separate
    # read-speech collection, not the benchmark corpus.
    *[_M(f"arabic-stt-qwen3-asr-1.7b-{key}", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run9", 2.04,
         "gated weights", kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
         kwargs={"revision": sha}, repo=f"https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/{ref}",
         in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                    *(EN_RUN13 if key in RUN13_LINE else EN_RUN6)),
         notes=f"Arabic-STT {note}; {kind} `{ref}` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit {sha[:10]}), "
               "weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as "
               "run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences")
      for key, kind, ref, sha, note in [
          # branch heads, the recommended model of each round
          ("run9b", "branch", "main", "e5a0100cebf66fa0cc11323522b1a325171646e4",
           "run 9b final (tag run9b-final): run 9 (SFT with a two-view consistency loss and call windows, then "
           "GSPO) continued on 27 h of human-annotated Arabic phone calls"),
          ("run10", "branch", "run10", "e938b6d58309a288b8cc0e0c97e1ed2308bf2332",
           "round 10 (tag run10-rl-s750): run 9b with English raised to 35 % of the hours, then GSPO"),
          ("run13", "branch", "run13", "7dba8c7a51b7ac97d24fc7fc78f204f423e7dc5f",
           "rounds 12-13 (tag run13-soup): weight average 0.5 x run12-rl-s1500 + 0.5 x run13c-rl-s750"),
          ("run16", "branch", "run16", "01ffe1a9badbcacea01c56947b222d95f3cfb354",
           "round 16 (tag run16-soup): weight average 0.5 x run13-soup + 0.5 x run16-rl-s250 (GSPO with "
           "short replies after silence)"),
          # intermediate checkpoints
          ("run9-step-3000", "tag", "step-3000", "4634e9ca16b1fef5eba1bf274e450f85abcc9e1d",
           "run 9 Stage A (SFT) step 3,000 of 12,000, flat learning rate, before the decay"),
          ("run9-step-6000", "tag", "step-6000", "c28c54851961ccd70c471360d4095db3f5ae5ac9",
           "run 9 Stage A (SFT) step 6,000 of 12,000, before the decay"),
          ("run9-step-9000", "tag", "step-9000", "c52fd76c9ea8e31a638dbae6127447389047cde6",
           "run 9 Stage A (SFT) step 9,000 of 12,000, before the decay"),
          ("run9-step-12000", "tag", "step-12000", "58da29c3f1ef6ce71337d31ae299eb7238124cf8",
           "run 9 Stage A (SFT) step 12,000 of 12,000, after the decay"),
          ("run9-rl-step-500", "tag", "rl-step-500", "13d439b0a8cd68672c271bd4727cb5c781a830e9",
           "run 9 Stage B (GSPO) step 500"),
          ("run9-final", "tag", "run9-final", "3e47cf38ea8d45165c49c2846303aaee538065bc",
           "run 9 final: Stage B (GSPO) step 2,000 of 4,500, the same weights as tag rl-step-2000"),
          ("run12-rl-s1500", "tag", "run12-rl-s1500", "f7e4817efefd15d998a6c415e2c6682f710aef82",
           "round 12 GSPO step 1,500, from a 70/30 weight average of rounds 10 and 11"),
          ("run13-sft-s3000", "tag", "run13-sft-s3000", "08a56c295b7ba347513040c119740f4fbf6efc56",
           "round 13 supervised fine-tuning step 3,000 (English call turns weighted up, SPGISpeech added)"),
          ("run13c-rl-s750", "tag", "run13c-rl-s750", "dd52a9dfdc5573a519222c404545f4ba69ab2057",
           "round 13c GSPO step 750, from run13-sft-s3000 with English call windows"),
          ("run16-rl-s250", "tag", "run16-rl-s250", "9478d27adb5e182c396a57b34897442151cdd3b0",
           "round 16 GSPO step 250, from run13-soup (short replies after silence)"),
          ("run16-rl-s1000", "tag", "run16-rl-s1000", "b6a96f0e6a13a88748125497f0573e3c2f248501",
           "round 16 GSPO step 1,000, from run13-soup (short replies after silence)"),
      ]],
    _M("arabic-stt-qwen3-asr-1.7b-run20-mwer-s800", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run20-mwer-s800",
       2.04, "gated weights", kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       kwargs={"revision": "1e523e84318c0c2d83481335e6f4c8e5e1f83d4a"},
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                  *EN_RUN13),
       notes="Arabic-STT round 20 (the same weights as tag run20-mwer-s800 of Arabic-STT/qwen3-asr-1.7b-ar-run20): "
             "online RL (RLOO) from run16-soup on English call windows, far-end mixes (AMI, ICSI, HarperValleyBank, "
             "PriMock57), Arabic phone-call windows and synthetic TTS turns, then 800 steps of MWER; weights gated on "
             "the Hub. Carries the run9 line's in-domain train rows (run 5's, MGB-3 train and the 20 leaked FLEURS "
             "ar_eg test sentences included). Run without the card's two-channel front end, which only chunks mono"),
    # the other round-20 checkpoints, tags of Arabic-STT/qwen3-asr-1.7b-ar-run20 (its main is run20-mwer-s800)
    *[_M(f"arabic-stt-qwen3-asr-1.7b-{tag}", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run20", 2.04,
         "gated weights", kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
         kwargs={"revision": sha}, repo=f"https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run20/tree/{tag}",
         in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                    *EN_RUN13),
         notes=f"Arabic-STT round 20, {note}; tag `{tag}` of Arabic-STT/qwen3-asr-1.7b-ar-run20 (commit {sha[:10]}), "
               "weights gated on the Hub. Online RL (RLOO) from run16-soup on English call windows, far-end mixes "
               "(AMI, ICSI, HarperValleyBank, PriMock57), Arabic phone-call windows and synthetic TTS turns; carries "
               "the run9 line's in-domain train rows")
      for tag, sha, note in [
          ("run20-s7all-s500", "9d547ba6af6340dfd6b9612e74463c07999bb97d", "S7all RL step 500"),
          ("run20-s7all-s1000", "dc649d570d62a00af3f17662055ac9cf3f314cad", "S7all RL step 1000"),
          ("run20-mwer-s1000", "ae7e8163ce052ac90740e9b5eb9dad4f803a1fec",
           "S7all step 1000 + 1,000 MWER steps (the card's pick with its levelling front end and MBR decoding)"),
      ]],
    _M("arabic-stt-qwen3-asr-1.7b-best-grpo2", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-best-grpo2", 2.04,
       "Apache-2.0 (gated)", kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       kwargs={"revision": "cdd28b086d66069727b279f4a0424daeec561a05"},
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                  *EN_RUN13),
       notes="Arabic-STT best-grpo2: task06 + 0.3 x (run20 - task06), then GRPO (LoRA r 16, merged; 935 steps) on "
             "human-annotated Arabic customer-service call segments, English call-centre clips, quiet short answers "
             "under a louder turn, joined multi-turn pieces and windows without speech; weights gated on the Hub. "
             "Carries its parents' in-domain train rows (run 5's, MGB-3 train and the 20 leaked FLEURS ar_eg test "
             "sentences included)"),
    _M("arabic-stt-qwen3-asr-1.7b-best-task06", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-best-task06", 2.04,
       "Apache-2.0 (gated)", kind="gated", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       kwargs={"revision": "43617315cfbee8dbfe286f2ab4f544d4b959087d"},
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar", "tedxtn_cs",
                  *EN_RUN6),
       notes="Arabic-STT best-task06: task-arithmetic merge run6b + 0.6 x (run10 - run6b) + 0.6 x (avg - run6b), avg "
             "the 0.5/0.5 average of run6b-soup70-sip-v5 and sip-v5-grpo1, no further training (merge weights picked "
             "on the Audioluna calls); weights gated on the Hub. Every parent carries run 5's in-domain train rows "
             "(MGB-3 train and the 20 leaked FLEURS ar_eg test sentences included); sip-v5 adds an MGB-2 part of "
             "kejue-voice, sip-v5-grpo1 EdAcc and Earnings-22 (English)"),
    _M("qwen3-asr-1.7b", "qwen3_asr_hf", "Qwen/Qwen3-ASR-1.7B-hf", 2.04, "Apache-2.0", batch_size=32),
    _M("qwen3-asr-0.6b", "qwen3_asr_hf", "Qwen/Qwen3-ASR-0.6B-hf", 0.94, "Apache-2.0", batch_size=32),
    # --- Cohere Transcribe --------------------------------------------------------------------
    _M("cohere-transcribe-arabic-07-2026", "cohere_asr", "CohereLabs/cohere-transcribe-arabic-07-2026", 2.07,
       "Apache-2.0", languages=("ar", "en"), batch_size=32, training_data="undisclosed"),
    _M("cohere-transcribe-03-2026", "cohere_asr", "CohereLabs/cohere-transcribe-03-2026", 2.07, "Apache-2.0",
       batch_size=32, training_data="undisclosed"),
    # --- Mistral Voxtral ----------------------------------------------------------------------
    _M("voxtral-mini-4b-realtime-arabic", "voxtral_realtime", "mistralai/Voxtral-Mini-4B-Realtime-Arabic", 4.43,
       "Apache-2.0", languages=("ar",), batch_size=16, training_data="undisclosed",
       notes="run at the default 480 ms delay (its card: FLEURS-ar 22.53 at 480 ms, 14.71 at 2400 ms)"),
    _M("voxtral-mini-4b-realtime-2602", "voxtral_realtime", "mistralai/Voxtral-Mini-4B-Realtime-2602", 4.43,
       "Apache-2.0", batch_size=16),
    # --- Meta ---------------------------------------------------------------------------------
    _M("seamless-m4t-v2-large", "seamless", "facebook/seamless-m4t-v2-large", 2.31, "CC-BY-NC-4.0", batch_size=16),
    _M("mms-1b-all", "ctc_hf", "facebook/mms-1b-all", 0.96, "CC-BY-NC-4.0", batch_size=16, kwargs={"mms": True},
       in_domain=("fleurs_ar",)),
    _M("omniasr-llm-1b", "omniasr", "omniASR_LLM_1B", 2.28, "Apache-2.0", env="omniasr", batch_size=8,
       repo="facebook/omniASR-LLM-1B"),
    _M("omniasr-llm-300m", "omniasr", "omniASR_LLM_300M", 1.63, "Apache-2.0", env="omniasr", batch_size=8,
       repo="facebook/omniASR-LLM-300M"),
    # omniASR-LLM-3B / LLM-7B / CTC-7B (fp32 checkpoints of 17.5, 31 and 26 GB) do not fit a 16 GB card; see #50.
    _M("omniasr-ctc-300m", "omniasr", "omniASR_CTC_300M", 0.33, "Apache-2.0", env="omniasr", batch_size=32,
       repo="facebook/omniASR-CTC-300M"),
    _M("omniasr-ctc-1b", "omniasr", "omniASR_CTC_1B", 0.98, "Apache-2.0", env="omniasr", batch_size=32,
       repo="facebook/omniASR-CTC-1B"),
    _M("omniasr-ctc-3b", "omniasr", "omniASR_CTC_3B", 3.08, "Apache-2.0", env="omniasr", batch_size=16,
       repo="facebook/omniASR-CTC-3B"),
    # omnilingual-asr >= 0.2.0 (Dec 2025) checkpoints; the v1 rows above stay as OUAAL comparators
    *[_M(f"omniasr-{kind.lower()}-{size.lower()}-v2", "omniasr", f"omniASR_{kind}_{size}_v2", params, "Apache-2.0",
         env="omniasr", batch_size=bs, repo=f"facebook/omniASR-{kind}-{size}")
      for kind, size, params, bs in [("LLM", "300M", 1.63, 8), ("LLM", "1B", 2.28, 8), ("CTC", "300M", 0.33, 32),
                                     ("CTC", "1B", 0.98, 32), ("CTC", "3B", 3.08, 16)]],
    # --- Google -------------------------------------------------------------------------------
    _M("gemma-4-e2b-it", "gemma_audio", "google/gemma-4-E2B-it", 5.1, "Apache-2.0", batch_size=8,
       training_data="undisclosed", notes="results before 2026-10-18 used a generic prompt with the audio first"),
    _M("gemma-4-e4b-it", "gemma_audio", "google/gemma-4-E4B-it", 8.0, "Apache-2.0", batch_size=2,
       training_data="undisclosed", notes="bf16 15.99 GB: borderline on 16 GB cards"),
    # --- NVIDIA -------------------------------------------------------------------------------
    _M("nvidia-fastconformer-ar-pc", "nemo", "nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0", 0.115, "CC-BY-4.0",
       env="nemo", languages=("ar",), batch_size=32, in_domain=("masc_clean", "masc_noisy", "cv18_ar", "fleurs_ar"),
       notes="trained on MASC (690 h), Common Voice 17 (65 h) and FLEURS (5 h), per its card"),
    _M("nvidia-fastconformer-ar-pcd", "nemo", "nvidia/stt_ar_fastconformer_hybrid_large_pcd_v1.0", 0.115,
       "CC-BY-4.0", env="nemo", languages=("ar",), batch_size=32, in_domain=("masc_clean", "masc_noisy", "cv18_ar", "fleurs_ar"),
       notes="diacritized output (removed by the normalizer); trained on MASC, CV17, FLEURS and EveryAyah"),
    _M("nemotron-3.5-asr-streaming-0.6b", "nemotron_rnnt", "nvidia/nemotron-3.5-asr-streaming-0.6b", 0.64,
       "OpenMDW-1.1", batch_size=32),
    _M("parakeet-tdt-0.6b-v3", "nemo", "nvidia/parakeet-tdt-0.6b-v3", 0.6, "CC-BY-4.0", env="nemo",
       languages=("en",), batch_size=32),
    _M("canary-1b-v2", "nemo", "nvidia/canary-1b-v2", 0.98, "CC-BY-4.0", env="nemo", languages=("en",), batch_size=32,
       kwargs={"lang_kwargs": True}),
    _M("parakeet-tdt-0.6b-v2", "nemo", "nvidia/parakeet-tdt-0.6b-v2", 0.6, "CC-BY-4.0", env="nemo",
       languages=("en",), batch_size=32),
    _M("parakeet-tdt-1.1b", "nemo", "nvidia/parakeet-tdt-1.1b", 1.1, "CC-BY-4.0", env="nemo", languages=("en",),
       batch_size=32),
    _M("parakeet-ctc-1.1b", "nemo", "nvidia/parakeet-ctc-1.1b", 1.06, "CC-BY-4.0", env="nemo", languages=("en",),
       batch_size=32),
    _M("parakeet-unified-en-0.6b", "nemo", "nvidia/parakeet-unified-en-0.6b", 0.6, "NVIDIA Open Model License",
       env="nemo", languages=("en",), batch_size=32),
    _M("nemotron-speech-streaming-en-0.6b", "nemo", "nvidia/nemotron-speech-streaming-en-0.6b", 0.62,
       "NVIDIA Open Model License", env="nemo", languages=("en",), batch_size=32),
    _M("distil-large-v3.5", "whisper_hf", "distil-whisper/distil-large-v3.5", 0.76, "MIT", languages=("en",),
       batch_size=32),
    _M("parakeet-ultra", "parakeet_tdt_hf", "moondream/parakeet-ultra", 0.63, "CC-BY-4.0", languages=("en",),
       batch_size=32, kwargs={"processor": "nvidia/parakeet-tdt-0.6b-v3"},
       finetune_of="nvidia/parakeet-tdt-0.6b-v3", notes="Moondream re-training of Parakeet-TDT v3"),
    # --- Microsoft ------------------------------------------------------------------------------
    _M("phi-4-multimodal-instruct", "phi4mm", "microsoft/Phi-4-multimodal-instruct", 5.57, "MIT", languages=("en",),
       batch_size=16, kwargs={"revision": "refs/pr/94"}),
    # --- Kyutai ---------------------------------------------------------------------------------
    _M("kyutai-stt-2.6b-en", "kyutai", "kyutai/stt-2.6b-en-trfs", 2.7, "CC-BY-4.0", languages=("en",), batch_size=32),
    _M("kyutai-stt-1b-en_fr", "kyutai", "kyutai/stt-1b-en_fr-trfs", 1.09, "CC-BY-4.0", languages=("en",),
       batch_size=32),
    # --- FunAudioLLM ----------------------------------------------------------------------------
    _M("fun-asr-nano-2512", "fun_asr_nano", "FunAudioLLM/Fun-ASR-Nano-2512-hf", 0.83, "Apache-2.0",
       languages=("en",), batch_size=32),
    _M("fun-asr-mlt-nano-2512", "fun_asr_mlt", "FunAudioLLM/Fun-ASR-MLT-Nano-2512", 0.8, "Apache-2.0", env="funasr",
       batch_size=16),
    # --- Moonshine (edge models) ----------------------------------------------------------------
    _M("moonshine-tiny", "moonshine", "UsefulSensors/moonshine-tiny", 0.027, "MIT", languages=("en",), batch_size=32),
    _M("moonshine-base", "moonshine", "UsefulSensors/moonshine-base", 0.062, "MIT", languages=("en",), batch_size=32),
    _M("moonshine-streaming-tiny", "moonshine", "moonshine-ai/moonshine-streaming-tiny", 0.044, "MIT",
       languages=("en",), batch_size=32),
    _M("moonshine-streaming-small", "moonshine", "moonshine-ai/moonshine-streaming-small", 0.14, "MIT",
       languages=("en",), batch_size=32),
    _M("moonshine-streaming-medium", "moonshine", "moonshine-ai/moonshine-streaming-medium", 0.27, "MIT",
       languages=("en",), batch_size=32),
    _M("moonshine-tiny-ar", "moonshine", "moonshine-ai/moonshine-tiny-ar", 0.027, "Moonshine Community License",
       languages=("ar",), batch_size=64),
    _M("moonshine-base-ar", "moonshine", "moonshine-ai/moonshine-base-ar", 0.062, "Moonshine Community License",
       languages=("ar",), batch_size=64),
    _M("moonshine-streaming-tiny-ar", "moonshine", "moonshine-ai/moonshine-streaming-tiny-ar", 0.027, "MIT",
       languages=("ar",), batch_size=64),
    # --- NetEase Youdao -------------------------------------------------------------------------
    _M("confucius4-r2t2", "qwen_asr_pkg", "netease-youdao/Confucius4-R2T2", 2.04,
       "NetEase Youdao Model Use License", env="qwenasr", batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       notes="streaming model, run offline (whole utterance)"),
    # --- Arabic specialists -------------------------------------------------------------------
    # Jais-ASR needs its own env (transformers==5.16.1, trust_remote_code); one global code_switch setting,
    # language "ar" (MSA + all dialects: per-set dialect codes would leak test metadata)
    _M("jais-asr", "jais_asr", "IFM/Jais-ASR", 5.72, "Apache-2.0", env="jais", languages=("ar", "en"), batch_size=8,
       kwargs={"code_switch": True}, training_data="undisclosed",
       notes="Qwen3-Omni audio encoder + Jais-3-4B decoder; returns [IFM-NoTranscript] on non-speech"),
    _M("audar-asr-v1-turbo", "qwen_asr_pkg", "audarai/Audar-ASR-V1-Turbo", 2.35, "AudarAI Community License",
       env="qwenasr", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B", training_data="undisclosed"),
    _M("audar-asr-v1-flash", "qwen_asr_pkg", "audarai/Audar-ASR-V1-Flash", 0.78, "AudarAI Open License",
       env="qwenasr", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-0.6B", training_data="undisclosed"),
    _M("wav2vec2-large-xlsr-53-arabic", "ctc_hf", "jonatasgrosman/wav2vec2-large-xlsr-53-arabic", 0.32,
       "Apache-2.0", languages=("ar",), batch_size=32),
    # --- Arabic dialect fine-tunes (issue #17) ---------------------------------------------
    # in_domain lists benchmark corpora whose train split the model saw (from its model card).
    _M("qwencleo-asr", "qwen_asr_pkg", "mohammedaly22/QwenCleo-ASR", 2.04, "Apache-2.0", env="qwenasr",
       languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B", notes="Egyptian + code-switching"),
    _M("moulsot-v0.3", "qwen_asr_pkg", "atlasia/moulsot.v0.3", 2.04, "Apache-2.0", env="qwenasr",
       languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B", notes="Moroccan Darija"),
    _M("qwen3-asr-arabic-uae", "qwen_asr_pkg", "vadimbelsky/qwen3-asr-arabic-uae", 2.04, "Apache-2.0",
       env="qwenasr", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B", notes="Emirati"),
    _M("qwen3-asr-arabic-ksa", "qwen_asr_pkg", "vadimbelsky/qwen3-asr-arabic-ksa", 2.04, "Apache-2.0",
       env="qwenasr", languages=("ar",), batch_size=32, finetune_of="vadimbelsky/qwen3-asr-arabic-uae", notes="Saudi"),
    _M("lemura-arabic-asr-qwen3", "qwen_asr_pkg", "lemuralabs/lemura-arabic-asr-qwen3", 2.04, "Apache-2.0",
       env="qwenasr", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "casablanca"),
       notes="multi-dialect; its card labels every result on these sets in-domain"),
    _M("lemura-arabic-asr-lite", "nemo", "lemuralabs/lemura-arabic-asr-lite", 0.11, "CC-BY-4.0", env="nemo",
       languages=("ar",), batch_size=32, kwargs={"nemo_file": "asr_final.nemo"},
       finetune_of="nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0", in_domain=("masc_clean", "masc_noisy", "cv18_ar", "fleurs_ar"),
       training_data="undisclosed", notes="multi-dialect, ~2,900 h undisclosed data on top of the NVIDIA base"),
    _M("whisper-large-v3-arabic-dialectal-v2", "whisper_hf", "oddadmix/whisper-large-v3-arabic-dialectal-v2", 1.54,
       "Apache-2.0", languages=("ar",), batch_size=32, kwargs={"processor": "openai/whisper-large-v3"},
       finetune_of="openai/whisper-large-v3", notes="lahgtna-v3 (13 dialects)"),
    _M("whisper-large-v3-turbo-arabic-dialectal-v2", "whisper_hf",
       "oddadmix/whisper-large-v3-turbo-arabic-dialectal-v2", 0.81, "Apache-2.0", languages=("ar",), batch_size=32,
       kwargs={"processor": "openai/whisper-large-v3-turbo"}, finetune_of="openai/whisper-large-v3-turbo",
       notes="lahgtna-v3 (13 dialects)"),
    _M("cohere-transcribe-arabic-dialectal-v2", "cohere_asr", "oddadmix/cohere-transcribe-arabic-07-2026-dialectal-v2",
       2.07, "Apache-2.0", languages=("ar",), batch_size=32,
       kwargs={"processor": "CohereLabs/cohere-transcribe-arabic-07-2026"},
       finetune_of="CohereLabs/cohere-transcribe-arabic-07-2026", notes="lahgtna-v3 (13 dialects)"),
    # Cohere-AR's SFT of cohere-transcribe-arabic-07-2026 for calls (10,000-step run, a branch step-<N> every
    # 2,000 steps, main = the latest). The card names its 69 training sources only by kind, except Earnings-22
    # (all of it, so in-domain on the English board), SpokenWOZ and L2-ARCTIC.
    *[_M(f"cohere-transcribe-ar-sft-step-{step}", "cohere_asr", "Cohere-AR/cohere-transcribe-ar-sft", 2.07,
         "gated weights", kind="gated", batch_size=32, finetune_of="CohereLabs/cohere-transcribe-arabic-07-2026",
         kwargs={"revision": sha, "punctuation": True},
         repo=f"https://huggingface.co/Cohere-AR/cohere-transcribe-ar-sft/tree/step-{step}", in_domain=("earnings22",),
         training_data="undisclosed",
         notes=f"Cohere-AR SFT for Arabic, English and code-switched phone calls, snapshot step {step} of 10,000 "
               f"(branch `step-{step}`, commit {sha[:10]}){extra}, weights gated on the Hub; run with the card's prompt "
               "(<|pnc|>, language forced). 69 training sources named only by kind on the card, except Earnings-22, "
               "SpokenWOZ and L2-ARCTIC")
      for step, sha, extra in [
          ("6000", "4005a4913c3ead33599987154bb72f7ae4060748", ""),
          ("10000", "2c712c47f44e04776757cacc0c5e2ae28ff697f6", ", the last one and the base of cohere-transcribe-ar-rl"),
      ]],
    # Cohere-AR's MWER post-training of that SFT at step 10000 (800 steps, a branch step-<N> every 200, main = the
    # latest); it inherits the SFT's Earnings-22 exposure, and its own data is named only by kind.
    _M("cohere-transcribe-ar-rl-step-800", "cohere_asr", "Cohere-AR/cohere-transcribe-ar-rl", 2.07,
       "gated weights", kind="gated", batch_size=32, finetune_of="Cohere-AR/cohere-transcribe-ar-sft",
       kwargs={"revision": "eb22db2e4ce4e610c9eb4998026de12d8e19da59", "punctuation": True},
       repo="https://huggingface.co/Cohere-AR/cohere-transcribe-ar-rl/tree/step-800", in_domain=("earnings22",),
       training_data="undisclosed",
       notes="Cohere-AR MWER post-training (decoder only, KL to the SFT) of cohere-transcribe-ar-sft at step 10000, "
             "snapshot step 800 of 800 (branch `step-800`, commit eb22db2e4c), weights gated on the Hub; run with "
             "the card's prompt (<|pnc|>, language forced). Its SFT base names Earnings-22 among its training "
             "sources; the MWER data (48,061 clips, 119 h) is named only by kind"),
    # The same repo's branch r4-step-800 (main since 2026-10-28): three MWER rounds on the SFT (rounds 1, 2 and 4, 800
    # steps each, on pools of ~45-48k human-labelled clips named only by kind, a penalty for English words not written
    # in Latin script); the SFT base is the step-10000 entry's.
    _M("cohere-transcribe-ar-rl-r4-step-800", "cohere_asr", "Cohere-AR/cohere-transcribe-ar-rl", 2.07,
       "gated weights", kind="gated", batch_size=32, finetune_of="Cohere-AR/cohere-transcribe-ar-sft",
       kwargs={"revision": "beba661319dbe0aa7657ff86aa8f02cedebfdd0b", "punctuation": True},
       repo="https://huggingface.co/Cohere-AR/cohere-transcribe-ar-rl/tree/r4-step-800", in_domain=("earnings22",),
       training_data="undisclosed",
       notes="Cohere-AR MWER post-training (decoder only) of cohere-transcribe-ar-sft at step 10000: rounds 1, 2 and 4 "
             "of 800 steps each, snapshot round 4 step 800 (branch `r4-step-800`, commit beba661319; the repo's main "
             "since 2026-10-28), weights gated on the Hub; run with the card's prompt (<|pnc|>, language forced). Its "
             "SFT base names Earnings-22 among its training sources; the MWER pools (~45-48k clips each) are named "
             "only by kind. Run on 4 x H100 NVL (the other entries on an A10), so its RTFx is not comparable; "
             "mgb2, casablanca and mgb3_egy rebuilt with ffmpeg 6.1.1, libopencore-amrnb 0.1.6 and libopus 1.4"),
    _M("nemotron-3.5-asr-arabic-dialectal-v2", "nemo", "oddadmix/nemotron-3.5-asr-arabic-dialectal-v2", 0.64,
       "OpenMDW-1.1", env="nemo", languages=("ar",), batch_size=32, kwargs={"nemo_file": "nemotron-v2.nemo"},
       finetune_of="nvidia/nemotron-3.5-asr-streaming-0.6b", notes="lahgtna-v3 (13 dialects)"),
    _M("arabic-whisper-codeswitching", "whisper_hf", "MohamedRashad/Arabic-Whisper-CodeSwitching-Edition", 1.54,
       "GPL-3.0", languages=("ar",), batch_size=32, finetune_of="openai/whisper-large-v2",
       notes="Arabic-English code-switching"),
    _M("egyptian-arabic-wav2vec2-xlsr-53", "ctc_hf", "IbrahimAmin/egyptian-arabic-wav2vec2-xlsr-53", 0.32,
       "Apache-2.0", languages=("ar",), batch_size=16, finetune_of="facebook/wav2vec2-large-xlsr-53",
       in_domain=("mgb3_egy", "masc_clean", "masc_noisy", "cv18_ar"), notes="Egyptian"),
    _M("wav2vec2-xlsr-moroccan-darija", "ctc_hf", "boumehdi/wav2vec2-large-xlsr-moroccan-darija", 0.32,
       "Apache-2.0", languages=("ar",), batch_size=16, finetune_of="facebook/wav2vec2-large-xlsr-53",
       notes="Moroccan Darija"),
    _M("voho-saudi-stt-small", "whisper_hf", "VohoAI/voho-saudi-stt-small", 0.24, "CC-BY-NC-SA-4.0",
       languages=("ar",), batch_size=64, finetune_of="openai/whisper-small", in_domain=("sada",), notes="Saudi"),
    # --- Arabic dialect fine-tunes, batch 3 (model survey 2026-10-18) -----------------------
    _M("qwen3-asr-1.7b-arabic-dialectal-v2", "qwen3_asr_hf", "oddadmix/qwen3-asr-1.7b-arabic-dialectal-v2", 2.04,
       "Apache-2.0", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B", notes="lahgtna-v3 (13 dialects); "
       "the base model's processor, as the saved chat template drops the final message",
       kwargs={"processor": "Qwen/Qwen3-ASR-1.7B-hf"}),
    _M("egytalk-asr-v2", "nemo", "NAMAA-Space/EgypTalk-ASR-v2", 0.115, "CC-BY-4.0", env="nemo", languages=("ar",),
       batch_size=32, kwargs={"nemo_file": "asr-egyptian-nemo-v2.0.nemo"},
       finetune_of="nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0", in_domain=("masc_clean", "masc_noisy", "cv18_ar", "fleurs_ar"),
       training_data="undisclosed", notes="Egyptian, 200+ h proprietary data on the NVIDIA base"),
    _M("nemotron-3.5-asr-jordanian", "nemotron_rnnt", "RamaBashar22/nemotron-3.5-asr-streaming-0.6b-jordanian", 0.64,
       "OpenMDW-1.1", languages=("ar",), batch_size=32, finetune_of="nvidia/nemotron-3.5-asr-streaming-0.6b",
       notes="Jordanian; the repo's transformers weights, run like the base model"),
    _M("whisper-levantine", "faster_whisper", "HebArabNlpProject/WhisperLevantine", 1.54, "Apache-2.0",
       languages=("ar",), batch_size=16, finetune_of="openai/whisper-large-v2", notes="~1,200 h Levantine; CTranslate2"),
    _M("whisper-large-v3-turbo-darija", "whisper_hf", "anaszil/whisper-large-v3-turbo-darija", 0.81, "MIT",
       languages=("ar",), batch_size=32,
       kwargs={"lora_base": "openai/whisper-large-v3-turbo", "processor": "openai/whisper-large-v3-turbo"},
       finetune_of="openai/whisper-large-v3-turbo", notes="Moroccan Darija; LoRA"),
    # --- Arabic dialect fine-tunes, batch 2 (issue #53) -------------------------------------
    _M("qwen3-asr-jordanian", "qwen_asr_pkg", "sarapd/Qwen3-ASR-1.7B_Jordanian_Dialect_Arabic", 2.04, "Apache-2.0",
       env="qwenasr", languages=("ar",), batch_size=32, kwargs={"zip": "checkpoint-560.zip"},
       finetune_of="Qwen/Qwen3-ASR-1.7B", notes="Jordanian (~11 h)"),
    _M("cohere-speech-tashkeel-2b", "cohere_asr", "NAMAA-Space/Cohere-Speech-Tashkeel-2B", 2.07, "Apache-2.0",
       languages=("ar",), batch_size=32, finetune_of="CohereLabs/cohere-transcribe-arabic-07-2026",
       notes="diacritized output (removed by the normalizer)"),
    _M("whisper-large-v3-egyptian-arabic", "whisper_hf", "AbdelrahmanHassan/whisper-large-v3-egyptian-arabic", 1.54,
       "Apache-2.0", languages=("ar",), batch_size=32,
       kwargs={"lora_base": "openai/whisper-large-v3", "processor": "openai/whisper-large-v3"},
       finetune_of="openai/whisper-large-v3", in_domain=("mgb3_egy",), notes="Egyptian; LoRA, 100 steps"),
    _M("arabic-morocco-whisper-v3", "whisper_hf", "smerchi/Arabic-Morocco-Speech_To_Text", 1.54, "Apache-2.0",
       languages=("ar",), batch_size=32, finetune_of="openai/whisper-large-v3", notes="Moroccan Darija"),
    _M("cs-egyptian-whisper-small", "whisper_hf", "IbrahimAmin/code-switched-egyptian-arabic-whisper-small", 0.24,
       "Apache-2.0", languages=("ar",), batch_size=64, finetune_of="openai/whisper-small", in_domain=("fleurs_ar",),
       notes="Egyptian Arabic-English code-switching"),
    _M("whisper-large-v3-turbo-arabic-dialectal", "whisper_hf", "oddadmix/whisper-large-v3-turbo-arabic-dialectal",
       0.81, "Apache-2.0", languages=("ar",), batch_size=32, kwargs={"processor": "openai/whisper-large-v3-turbo"},
       finetune_of="openai/whisper-large-v3-turbo", notes="lahgtna-v2 (v1 of the dialectal-v2 model)"),
    _M("hubert-large-arabic-egyptian", "ctc_hf", "omarxadel/hubert-large-arabic-egyptian", 0.32, "CC-BY-NC-4.0",
       languages=("ar",), batch_size=16, finetune_of="asafaya/hubert-large-arabic", in_domain=("mgb3_egy",),
       notes="Egyptian"),
    _M("wav2vec2-xlsr-53-levantine-arabic", "ctc_hf", "elgeish/wav2vec2-large-xlsr-53-levantine-arabic", 0.32,
       "Apache-2.0", languages=("ar",), batch_size=16, kwargs={"buckwalter": True},
       finetune_of="facebook/wav2vec2-large-xlsr-53",
       notes="trained on the Arabic Speech Corpus (single-speaker MSA) despite the name; Buckwalter output"),
]}

# the Arabic-STT line's English exposure (EN_RUN5 above), appended to its notes
for _m in MODELS.values():
    if _m.key.startswith("arabic-stt-") and "gigaspeech" in _m.in_domain:
        _m.notes += ("; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech"
                     + (", EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)"
                        if "earnings22" in _m.in_domain else "")
                     + (", SPGISpeech" if "spgispeech" in _m.in_domain else ""))





def get_spec(key: str) -> ModelSpec:
    if key not in MODELS:
        raise KeyError(f"unknown model {key!r}; known: {', '.join(MODELS)}")
    return MODELS[key]


def load_model(key: str, device: str = "cuda") -> ASRModel:
    spec = get_spec(key)
    module, cls = BACKENDS[spec.backend].split(":")
    return getattr(importlib.import_module(module), cls)(spec, device)
