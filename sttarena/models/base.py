from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

import numpy as np

SR = 16000

LANG_NAMES = {"ar": "Arabic", "en": "English"}


@dataclass
class ModelSpec:
    key: str
    backend: str
    hf_id: str
    params_b: float | None = None
    license: str = ""
    kind: str = "open"  # "open" (ranked); "api", "gated" or "private" (unranked references)
    env: str = "main"  # which virtualenv can run it (see scripts/setup_envs.sh)
    languages: tuple[str, ...] = ("ar", "en")
    batch_size: int = 16
    kwargs: dict[str, Any] = field(default_factory=dict)
    notes: str = ""
    finetune_of: str | None = None  # base checkpoint, for fine-tunes
    in_domain: tuple[str, ...] = ()  # benchmark corpora whose *train* split the model was trained on
    repo: str | None = None  # HF model page, when hf_id is a loader name rather than a repo id


class ASRModel:
    """All backends receive 16 kHz mono float32 arrays of <= 30 s and return plain text."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        self.spec = spec
        self.device = device

    def transcribe(self, audios: list[np.ndarray], language: str) -> list[str]:
        raise NotImplementedError


# Every model runs in the precision its weights were released in: no down-casting, no quantization.
NATIVE = "auto"


def cuda_sync():
    try:
        import torch

        if torch.cuda.is_available():
            torch.cuda.synchronize()
    except ImportError:
        pass
