#!/usr/bin/env bash
# Create the virtualenvs used by models whose dependencies conflict with the main env.
#   .venv            transformers >= 5.13 (Whisper, Qwen3-ASR-hf, Cohere, Voxtral, Seamless, MMS, Gemma)
#   .venvs/qwenasr   qwen-asr package (Audar-ASR and other Qwen3-ASR fine-tunes)
#   .venvs/nemo      NVIDIA NeMo (FastConformer Arabic, Nemotron streaming)
#   .venvs/omniasr   Meta omnilingual-asr (fairseq2)
#   .venvs/funasr    funasr + the Fun-ASR model code (Fun-ASR-MLT-Nano)
set -euo pipefail
cd "$(dirname "$0")/.."
TORCH_INDEX=https://download.pytorch.org/whl/cu128

mk() {  # mk <name> <packages...>
  local env=".venvs/$1"; shift
  uv venv --python 3.12 "$env"
  uv pip install --python "$env" torch torchaudio --index-url "$TORCH_INDEX"
  uv pip install --python "$env" -e . "$@" --index-strategy unsafe-best-match --extra-index-url "$TORCH_INDEX"
}

case "${1:-all}" in
  main|all)    uv venv --python 3.12 .venv
               uv pip install --python .venv -e ".[gpu,dev]" --index-strategy unsafe-best-match ;;&
  qwenasr|all) mk qwenasr qwen-asr ;;&
  nemo|all)    mk nemo "nemo_toolkit[asr] @ git+https://github.com/NVIDIA/NeMo.git" ;;&
  omniasr|all) mk omniasr omnilingual-asr ;;&
  funasr|all)  mk funasr "funasr>=1.4.1"
               git clone --depth 1 https://github.com/FunAudioLLM/Fun-ASR.git .venvs/funasr/src/Fun-ASR ;;
esac
