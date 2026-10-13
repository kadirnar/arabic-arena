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
    kind: str = "open"  # open | api
    env: str = "main"  # which virtualenv can run it (see scripts/setup_envs.sh)
    languages: tuple[str, ...] = ("ar", "en")
    batch_size: int = 16
    kwargs: dict[str, Any] = field(default_factory=dict)
    notes: str = ""


class ASRModel:
    """All backends receive 16 kHz mono float32 arrays of <= 30 s and return plain text."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        self.spec = spec
        self.device = device

    def transcribe(self, audios: list[np.ndarray], language: str) -> list[str]:
        raise NotImplementedError


def torch_dtype(name: str = "bfloat16"):
    import torch

    return getattr(torch, name)


def cuda_sync():
    try:
        import torch

        if torch.cuda.is_available():
            torch.cuda.synchronize()
    except ImportError:
        pass
