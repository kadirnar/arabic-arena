"""Backends for hosted (closed) speech-to-text APIs.

The arena's scope is open-weight models; API backends exist for internal comparisons. Check the provider's
terms before publishing their scores (Soniox's terms of service forbid publishing benchmark results without
a separate agreement).
"""
from __future__ import annotations

import os
import random
import threading
import time
from concurrent.futures import ThreadPoolExecutor

import numpy as np

from ..data import encode_flac
from .base import SR, ASRModel


class SonioxAPI(ASRModel):
    """Soniox async STT (default stt-async-v5): upload -> create transcription -> poll -> fetch -> delete.

    One request per clip, as a client would call it. The key comes from $SONIOX_API_KEY. A 429 (the
    organisation's requests-per-minute limit) pauses every worker for a while instead of each retrying alone.
    """

    API = "https://api.soniox.com/v1"

    def __init__(self, spec, device: str = "cpu"):
        super().__init__(spec, device)
        import requests

        self._requests = requests
        self.key = os.environ.get("SONIOX_API_KEY", "").strip()
        if not self.key:
            raise RuntimeError("set SONIOX_API_KEY")
        self.model_id = spec.kwargs.get("model_id", "stt-async-v5")
        self.hints = list(spec.kwargs.get("language_hints", ("ar", "en")))
        self.workers = int(spec.kwargs.get("workers", 24))
        self._local = threading.local()
        self._cool_until = 0.0
        self._lock = threading.Lock()

    def _call(self, method: str, path: str, **kw):
        for attempt in range(200):
            wait = self._cool_until - time.time()
            if wait > 0:
                time.sleep(wait)
            s = getattr(self._local, "s", None) or self._requests.Session()
            self._local.s = s
            try:
                r = s.request(method, self.API + path, headers={"Authorization": f"Bearer {self.key}"}, timeout=120, **kw)
            except self._requests.RequestException:
                time.sleep(min(30, 2 ** min(attempt, 5)))
                continue
            if r.status_code == 429:
                with self._lock:
                    self._cool_until = max(self._cool_until, time.time() + 2 + random.uniform(0, 2))
                continue
            if r.status_code >= 500:
                time.sleep(min(30, 2 ** min(attempt, 5)))
                continue
            if r.status_code == 404 and method == "DELETE":
                return None
            if r.status_code >= 400:
                raise RuntimeError(f"soniox {method} {path.split('/')[1]}: HTTP {r.status_code} {r.text[:200]}")
            return r.json() if r.content else None
        raise RuntimeError("soniox: retries exhausted")

    def _one(self, audio: np.ndarray) -> str:
        fid = tid = None
        try:
            fid = self._call("POST", "/files", files={"file": ("clip.flac", encode_flac(audio, SR), "audio/flac")})["id"]
            tid = self._call("POST", "/transcriptions", json={"model": self.model_id, "file_id": fid,
                                                             "language_hints": self.hints})["id"]
            time.sleep(4.0)   # few status calls: the requests-per-minute limit is the bottleneck
            while (st := self._call("GET", f"/transcriptions/{tid}"))["status"] not in ("completed", "error"):
                time.sleep(3.0)
            if st["status"] == "error":
                raise RuntimeError(f"soniox transcription error: {st.get('error_message')}")
            return (self._call("GET", f"/transcriptions/{tid}/transcript").get("text") or "").strip()
        finally:
            for path in ([f"/transcriptions/{tid}"] if tid else []) + ([f"/files/{fid}"] if fid else []):
                try:
                    self._call("DELETE", path)
                except Exception:  # noqa: BLE001
                    pass

    def transcribe(self, audios: list[np.ndarray], language: str) -> list[str]:
        with ThreadPoolExecutor(self.workers) as ex:
            return list(ex.map(self._one, audios))
