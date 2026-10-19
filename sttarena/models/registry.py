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
MODELS: dict[str, ModelSpec] = {m.key: m for m in [
    # --- Closed APIs (internal comparison only; out of the public board's scope) ---------------
    _M("soniox-stt-async-v5", "soniox_api", "soniox/stt-async-v5", None, "proprietary API", kind="api",
       batch_size=400, kwargs={"model_id": "stt-async-v5", "language_hints": ("ar", "en"), "workers": 32},
       notes="closed commercial API; RTFx is API wall-clock time", repo="https://soniox.com"),
    # --- Whisper family ---------------------------------------------------------------------
    _M("whisper-large-v3", "whisper_hf", "openai/whisper-large-v3", 1.54, "Apache-2.0", batch_size=32),
    _M("whisper-large-v3-turbo", "whisper_hf", "openai/whisper-large-v3-turbo", 0.81, "MIT", batch_size=32),
    _M("whisper-medium", "whisper_hf", "openai/whisper-medium", 0.76, "Apache-2.0", batch_size=32),
    _M("whisper-small", "whisper_hf", "openai/whisper-small", 0.24, "Apache-2.0", batch_size=64),
    _M("whisper-large-v2", "whisper_hf", "openai/whisper-large-v2", 1.54, "Apache-2.0", batch_size=32),
    # --- Qwen3-ASR ----------------------------------------------------------------------------
    _M("arabic-stt-qwen3-asr-1.7b", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run3", 2.04, "gated weights",
       kind="gated", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar"),
       notes="Arabic-STT run 3: full fine-tune, weights gated on the Hub; trained on the train splits of CV18 and MASC "
             "and on MGB-2/SADA/MGB-3 train rows (rows overlapping their test sets excluded). Its kejue-common-voice "
             "stream also holds 20 FLEURS ar_eg *test* sentences (37 of our 428 fleurs_ar rows), which the "
             "contamination guard did not cover; labels of that stream come from Soniox stt-async-v5"),
    _M("arabic-stt-qwen3-asr-1.7b-run5", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run5", 2.04, "gated weights",
       kind="gated", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar"),
       notes="Arabic-STT run 5: run 3 continued twice (runs 4 and 5) with more call, dialect and code-switching data; "
             "same in-domain train rows as run 3, including MGB-3 train and the 20 leaked FLEURS ar_eg test "
             "sentences; also trained on clips of the lahgtna-v3-small test split"),
    _M("arabic-stt-qwen3-asr-1.7b-run5base", "qwen3_asr_hf", "Arabic-STT/qwen3-asr-1.7b-ar-run5base", 2.04, "gated weights",
       kind="gated", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B",
       in_domain=("cv18_ar", "masc_clean", "masc_noisy", "mgb2", "sada", "mgb3_egy", "fleurs_ar"),
       notes="Arabic-STT run5base: run 5's data and targets trained from the base model (40,000 steps); "
             "same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences"),
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
       "Apache-2.0", languages=("ar",), batch_size=32, finetune_of="Qwen/Qwen3-ASR-1.7B", notes="lahgtna-v3 (13 dialects)"),
    _M("egytalk-asr-v2", "nemo", "NAMAA-Space/EgypTalk-ASR-v2", 0.115, "CC-BY-4.0", env="nemo", languages=("ar",),
       batch_size=32, kwargs={"nemo_file": "asr-egyptian-nemo-v2.0.nemo"},
       finetune_of="nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0", in_domain=("masc_clean", "masc_noisy", "cv18_ar", "fleurs_ar"),
       training_data="undisclosed", notes="Egyptian, 200+ h proprietary data on the NVIDIA base"),
    _M("nemotron-3.5-asr-jordanian", "nemo", "RamaBashar22/nemotron-3.5-asr-streaming-0.6b-jordanian", 0.64,
       "OpenMDW-1.1", env="nemo", languages=("ar",), batch_size=32, finetune_of="nvidia/nemotron-3.5-asr-streaming-0.6b",
       notes="Jordanian"),
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





def get_spec(key: str) -> ModelSpec:
    if key not in MODELS:
        raise KeyError(f"unknown model {key!r}; known: {', '.join(MODELS)}")
    return MODELS[key]


def load_model(key: str, device: str = "cuda") -> ASRModel:
    spec = get_spec(key)
    module, cls = BACKENDS[spec.backend].split(":")
    return getattr(importlib.import_module(module), cls)(spec, device)
