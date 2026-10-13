#!/usr/bin/env bash
# Evaluate every registered model of a suite in its own virtualenv, then rebuild the leaderboard.
#   scripts/run_queue.sh arabic                     # all models
#   scripts/run_queue.sh arabic whisper-small ...   # selected models
set -uo pipefail
cd "$(dirname "$0")/.."
SUITE=${1:-arabic}; shift || true

py_for_env() {
  case "$1" in
    main) echo .venv/bin/python ;;
    *) echo ".venvs/$1/bin/python" ;;
  esac
}

LANG_CODE=$(.venv/bin/python -c "from sttarena.data import Suite; print(Suite.load('$SUITE').language)")
MODELS=("$@")
if [ ${#MODELS[@]} -eq 0 ]; then
  mapfile -t MODELS < <(.venv/bin/python -c "
from sttarena.models.registry import MODELS
for k, m in MODELS.items():
    if '$LANG_CODE' in m.languages: print(k)")
fi

for m in "${MODELS[@]}"; do
  env=$(.venv/bin/python -c "from sttarena.models.registry import get_spec; print(get_spec('$m').env)")
  py=$(py_for_env "$env")
  if [ ! -x "$py" ]; then echo "[skip] $m: env '$env' missing (scripts/setup_envs.sh $env)"; continue; fi
  echo "=== $m ($env) $(date -Is)"
  "$py" -m sttarena.cli run -m "$m" --suite "$SUITE" || echo "[fail] $m"
done
.venv/bin/python -m sttarena.cli leaderboard --suite "$SUITE"
