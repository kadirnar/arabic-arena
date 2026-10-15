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
    "qwen_asr_pkg": "sttarena.models.extra_backends:QwenASRPackage",
    "faster_whisper": "sttarena.models.extra_backends:FasterWhisper",
    "nemo": "sttarena.models.extra_backends:NeMoASR",
    "omniasr": "sttarena.models.extra_backends:OmniASR",
}

_M = ModelSpec
MODELS: dict[str, ModelSpec] = {m.key: m for m in [
    # --- Whisper family ---------------------------------------------------------------------
    _M("whisper-large-v3", "whisper_hf", "openai/whisper-large-v3", 1.54, "Apache-2.0", batch_size=32),
    _M("whisper-large-v3-turbo", "whisper_hf", "openai/whisper-large-v3-turbo", 0.81, "MIT", batch_size=32),
    _M("whisper-medium", "whisper_hf", "openai/whisper-medium", 0.76, "Apache-2.0", batch_size=32),
    _M("whisper-small", "whisper_hf", "openai/whisper-small", 0.24, "Apache-2.0", batch_size=64),
    # --- Qwen3-ASR ----------------------------------------------------------------------------
    _M("qwen3-asr-1.7b", "qwen3_asr_hf", "Qwen/Qwen3-ASR-1.7B-hf", 2.04, "Apache-2.0", batch_size=32),
    _M("qwen3-asr-0.6b", "qwen3_asr_hf", "Qwen/Qwen3-ASR-0.6B-hf", 0.94, "Apache-2.0", batch_size=32),
    # --- Cohere Transcribe --------------------------------------------------------------------
    _M("cohere-transcribe-arabic-07-2026", "cohere_asr", "CohereLabs/cohere-transcribe-arabic-07-2026", 2.07,
       "Apache-2.0", languages=("ar", "en"), batch_size=32),
    _M("cohere-transcribe-03-2026", "cohere_asr", "CohereLabs/cohere-transcribe-03-2026", 2.07, "Apache-2.0",
       batch_size=32),
    # --- Mistral Voxtral ----------------------------------------------------------------------
    _M("voxtral-mini-4b-realtime-arabic", "voxtral_realtime", "mistralai/Voxtral-Mini-4B-Realtime-Arabic", 4.43,
       "Apache-2.0", languages=("ar",), batch_size=16),
    _M("voxtral-mini-4b-realtime-2602", "voxtral_realtime", "mistralai/Voxtral-Mini-4B-Realtime-2602", 4.43,
       "Apache-2.0", batch_size=16),
    # --- Meta ---------------------------------------------------------------------------------
    _M("seamless-m4t-v2-large", "seamless", "facebook/seamless-m4t-v2-large", 2.31, "CC-BY-NC-4.0", batch_size=16),
    _M("mms-1b-all", "ctc_hf", "facebook/mms-1b-all", 0.96, "CC-BY-NC-4.0", batch_size=16, kwargs={"mms": True}),
    _M("omniasr-llm-1b", "omniasr", "omniASR_LLM_1B", 2.28, "Apache-2.0", env="omniasr", batch_size=8,
       repo="facebook/omniASR-LLM-1B"),
    _M("omniasr-llm-3b", "omniasr", "omniASR_LLM_3B", 4.38, "Apache-2.0", env="omniasr", batch_size=8,
       repo="facebook/omniASR-LLM-3B"),
    _M("omniasr-llm-300m", "omniasr", "omniASR_LLM_300M", 1.63, "Apache-2.0", env="omniasr", batch_size=8,
       repo="facebook/omniASR-LLM-300M"),
    # --- Google -------------------------------------------------------------------------------
    _M("gemma-4-e2b-it", "gemma_audio", "google/gemma-4-E2B-it", 5.1, "Apache-2.0", batch_size=8),
    # --- NVIDIA -------------------------------------------------------------------------------
    _M("nvidia-fastconformer-ar-pc", "nemo", "nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0", 0.115, "CC-BY-4.0",
       env="nemo", languages=("ar",), batch_size=32),
    _M("nemotron-3.5-asr-streaming-0.6b", "nemotron_rnnt", "nvidia/nemotron-3.5-asr-streaming-0.6b", 0.64,
       "OpenMDW-1.1", batch_size=32),
    _M("parakeet-tdt-0.6b-v3", "nemo", "nvidia/parakeet-tdt-0.6b-v3", 0.6, "CC-BY-4.0", env="nemo",
       languages=("en",), batch_size=32),
    _M("canary-1b-v2", "nemo", "nvidia/canary-1b-v2", 0.98, "CC-BY-4.0", env="nemo", languages=("en",), batch_size=32,
       kwargs={"lang_kwargs": True}),
    _M("distil-large-v3.5", "whisper_hf", "distil-whisper/distil-large-v3.5", 0.76, "MIT", languages=("en",),
       batch_size=32),
    # --- Arabic specialists -------------------------------------------------------------------
    _M("audar-asr-v1-turbo", "qwen_asr_pkg", "audarai/Audar-ASR-V1-Turbo", 2.35, "AudarAI Community License",
       env="qwenasr", languages=("ar",), batch_size=32),
    _M("audar-asr-v1-flash", "qwen_asr_pkg", "audarai/Audar-ASR-V1-Flash", 0.78, "AudarAI Open License",
       env="qwenasr", languages=("ar",), batch_size=32),
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
       notes="multi-dialect; training data not disclosed"),
    _M("lemura-arabic-asr-lite", "nemo", "lemuralabs/lemura-arabic-asr-lite", 0.11, "CC-BY-4.0", env="nemo",
       languages=("ar",), batch_size=32, kwargs={"nemo_file": "asr_final.nemo"},
       finetune_of="NVIDIA FastConformer", notes="multi-dialect, ~2,900 h"),
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
       in_domain=("MGB-3", "MASC", "Common Voice"), notes="Egyptian"),
    _M("wav2vec2-xlsr-moroccan-darija", "ctc_hf", "boumehdi/wav2vec2-large-xlsr-moroccan-darija", 0.32,
       "Apache-2.0", languages=("ar",), batch_size=16, finetune_of="facebook/wav2vec2-large-xlsr-53",
       notes="Moroccan Darija"),
    _M("voho-saudi-stt-small", "whisper_hf", "VohoAI/voho-saudi-stt-small", 0.24, "CC-BY-NC-SA-4.0",
       languages=("ar",), batch_size=64, finetune_of="openai/whisper-small", in_domain=("SADA",), notes="Saudi"),
]}





def get_spec(key: str) -> ModelSpec:
    if key not in MODELS:
        raise KeyError(f"unknown model {key!r}; known: {', '.join(MODELS)}")
    return MODELS[key]


def load_model(key: str, device: str = "cuda") -> ASRModel:
    spec = get_spec(key)
    module, cls = BACKENDS[spec.backend].split(":")
    return getattr(importlib.import_module(module), cls)(spec, device)
