#!/usr/bin/env bash
# Quick sanity check of model backends on 8 FLEURS utterances (nothing is saved to summary.json).
cd "$(dirname "$0")/.."
for m in "$@"; do
  env=$(.venv/bin/python -c "from sttarena.models.registry import get_spec; print(get_spec('$m').env)")
  py=.venv/bin/python; [ "$env" != main ] && py=.venvs/$env/bin/python
  echo "=== $m"
  "$py" -m sttarena.cli run -m "$m" --sets fleurs_ar --conditions clean --limit 8 2>&1 \
    | grep -E "WER|Error|error:" | tr '\r' '\n' | grep -E "WER|Error|error:" | tail -3
done
