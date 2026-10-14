"""Commercial STT APIs (Artificial-Analysis-style measurement).

* One request per utterance, `batch_size` requests in flight.
* Speed factor = audio duration / end-to-end request latency, network included (median per set).
* Responses are cached on disk by audio hash, so re-running a set never bills twice.
* Keys come from environment variables; nothing is logged.
"""

from __future__ import annotations

import base64
import hashlib
import io
import json
import os
import statistics
import threading
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import numpy as np
import requests
import soundfile as sf

from .base import LANG_NAMES, SR, ASRModel, ModelSpec

CACHE_DIR = Path(__file__).resolve().parents[2] / "results" / "_api_cache"


def wav_bytes(audio: np.ndarray) -> bytes:
    buf = io.BytesIO()
    sf.write(buf, np.clip(audio, -1, 1), SR, format="WAV", subtype="PCM_16")
    return buf.getvalue()


class APIModel(ASRModel):
    key_env: str = ""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        self.key = os.environ.get(self.key_env)
        if not self.key:
            raise RuntimeError(f"{spec.key}: set {self.key_env}")
        self.session = requests.Session()
        self.cache_path = CACHE_DIR / f"{spec.key}.jsonl"
        self.cache_path.parent.mkdir(parents=True, exist_ok=True)
        self.cache: dict[str, str] = {}
        if self.cache_path.exists():
            for line in self.cache_path.open():
                r = json.loads(line)
                self.cache[r["k"]] = r["text"]
        self._lock = threading.Lock()
        self.speed_factors: list[float] = []

    # subclasses implement one request
    def request(self, wav: bytes, language: str) -> str:
        raise NotImplementedError

    def _one(self, audio: np.ndarray, language: str) -> str:
        wav = wav_bytes(audio)
        k = hashlib.sha1(wav + language.encode()).hexdigest()
        if k in self.cache:
            return self.cache[k]
        for attempt in range(6):
            try:
                t0 = time.perf_counter()
                text = self.request(wav, language)
                dt = time.perf_counter() - t0
                break
            except requests.HTTPError as e:
                code = e.response.status_code if e.response is not None else 0
                if code not in (408, 409, 429, 500, 502, 503, 504) or attempt == 5:
                    raise
                time.sleep(min(60, 2**attempt))
            except requests.ConnectionError:
                if attempt == 5:
                    raise
                time.sleep(min(60, 2**attempt))
        with self._lock:
            self.speed_factors.append(len(audio) / SR / dt)
            self.cache[k] = text
            with self.cache_path.open("a") as f:
                f.write(json.dumps({"k": k, "text": text}, ensure_ascii=False) + "\n")
        return text

    def transcribe(self, audios, language):
        with ThreadPoolExecutor(self.spec.batch_size) as ex:
            return list(ex.map(lambda a: self._one(a, language), audios))

    def pop_speed_factor(self) -> float | None:
        sf_, self.speed_factors = self.speed_factors, []
        return round(statistics.median(sf_), 2) if sf_ else None


class OpenAITranscribe(APIModel):
    key_env = "OPENAI_API_KEY"

    def request(self, wav, language):
        r = self.session.post(
            "https://api.openai.com/v1/audio/transcriptions",
            headers={"Authorization": f"Bearer {self.key}"},
            data={"model": self.spec.hf_id, "language": language, "response_format": "json"},
            files={"file": ("audio.wav", wav, "audio/wav")}, timeout=120,
        )
        r.raise_for_status()
        return r.json()["text"]


class ElevenLabsScribe(APIModel):
    key_env = "ELEVENLABS_API_KEY"

    def request(self, wav, language):
        r = self.session.post(
            "https://api.elevenlabs.io/v1/speech-to-text",
            headers={"xi-api-key": self.key},
            data={"model_id": self.spec.hf_id, "language_code": language, "tag_audio_events": "false"},
            files={"file": ("audio.wav", wav, "audio/wav")}, timeout=120,
        )
        r.raise_for_status()
        return r.json()["text"]


class DeepgramListen(APIModel):
    key_env = "DEEPGRAM_API_KEY"

    def request(self, wav, language):
        r = self.session.post(
            "https://api.deepgram.com/v1/listen",
            params={"model": self.spec.hf_id, "language": language, "smart_format": "false"},
            headers={"Authorization": f"Token {self.key}", "Content-Type": "audio/wav"},
            data=wav, timeout=120,
        )
        r.raise_for_status()
        return r.json()["results"]["channels"][0]["alternatives"][0]["transcript"]


class MistralTranscribe(APIModel):
    key_env = "MISTRAL_API_KEY"

    def request(self, wav, language):
        r = self.session.post(
            "https://api.mistral.ai/v1/audio/transcriptions",
            headers={"Authorization": f"Bearer {self.key}"},
            data={"model": self.spec.hf_id, "language": language},
            files={"file": ("audio.wav", wav, "audio/wav")}, timeout=120,
        )
        r.raise_for_status()
        return r.json()["text"]


class GeminiTranscribe(APIModel):
    key_env = "GEMINI_API_KEY"
    PROMPT = "Transcribe the audio verbatim in {lang}, outputting only the spoken words in sequence. Do not translate."

    def request(self, wav, language):
        body = {
            "contents": [{"parts": [
                {"text": self.PROMPT.format(lang=LANG_NAMES[language])},
                {"inline_data": {"mime_type": "audio/wav", "data": base64.b64encode(wav).decode()}},
            ]}],
            "generationConfig": {"temperature": 0},
        }
        r = self.session.post(
            f"https://generativelanguage.googleapis.com/v1beta/models/{self.spec.hf_id}:generateContent",
            headers={"x-goog-api-key": self.key}, json=body, timeout=120,
        )
        r.raise_for_status()
        parts = r.json()["candidates"][0]["content"].get("parts", [])
        return " ".join(p.get("text", "") for p in parts).strip()


class AssemblyAITranscribe(APIModel):
    key_env = "ASSEMBLYAI_API_KEY"

    def request(self, wav, language):
        h = {"authorization": self.key}
        up = self.session.post("https://api.assemblyai.com/v2/upload", headers=h, data=wav, timeout=120)
        up.raise_for_status()
        job = self.session.post("https://api.assemblyai.com/v2/transcript", headers=h, timeout=60, json={
            "audio_url": up.json()["upload_url"], "language_code": language, "speech_model": self.spec.hf_id,
            "punctuate": False, "format_text": False,
        })
        job.raise_for_status()
        tid = job.json()["id"]
        while True:
            s = self.session.get(f"https://api.assemblyai.com/v2/transcript/{tid}", headers=h, timeout=60)
            s.raise_for_status()
            j = s.json()
            if j["status"] == "completed":
                return j.get("text") or ""
            if j["status"] == "error":
                raise RuntimeError(j.get("error"))
            time.sleep(0.5)
