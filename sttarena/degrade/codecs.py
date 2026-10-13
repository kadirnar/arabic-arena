"""Telephony codec round-trips through ffmpeg (encode -> decode) at 8 kHz."""

from __future__ import annotations

import functools
import os
import subprocess
import tempfile

import numpy as np
import soundfile as sf

# name -> (encoder args, container extension)
CODECS: dict[str, tuple[list[str], str]] = {
    "g711_mulaw": (["-c:a", "pcm_mulaw"], "wav"),
    "g711_alaw": (["-c:a", "pcm_alaw"], "wav"),
    "gsm_fr": (["-c:a", "libgsm_ms"], "wav"),
    "amr_nb_12k2": (["-c:a", "libopencore_amrnb", "-b:a", "12.2k"], "amr"),
    "amr_nb_7k4": (["-c:a", "libopencore_amrnb", "-b:a", "7.4k"], "amr"),
    "amr_nb_4k75": (["-c:a", "libopencore_amrnb", "-b:a", "4.75k"], "amr"),
    "g726_32k": (["-c:a", "g726", "-b:a", "32k"], "wav"),
    "g726_16k": (["-c:a", "g726", "-b:a", "16k"], "wav"),
    "opus_nb_10k": (["-c:a", "libopus", "-b:a", "10k", "-application", "voip"], "ogg"),
}

# Rough real-world prevalence in PSTN / mobile / VoIP call-center traffic.
CODEC_WEIGHTS: dict[str, float] = {
    "g711_mulaw": 0.22,
    "g711_alaw": 0.18,
    "gsm_fr": 0.12,
    "amr_nb_12k2": 0.14,
    "amr_nb_7k4": 0.10,
    "amr_nb_4k75": 0.06,
    "g726_32k": 0.06,
    "g726_16k": 0.04,
    "opus_nb_10k": 0.08,
}


@functools.lru_cache(maxsize=1)
def _available_encoders() -> str:
    return subprocess.run(["ffmpeg", "-hide_banner", "-encoders"], capture_output=True, text=True).stdout


def check_codec(codec: str) -> None:
    enc = CODECS[codec][0][1]
    if enc not in _available_encoders().split():
        raise RuntimeError(
            f"ffmpeg has no '{enc}' encoder (needed for {codec}). Degraded sets would not be reproducible; "
            "install an ffmpeg build with libopencore-amrnb, libgsm and libopus (e.g. a static build)."
        )


def _estimate_lag(ref: np.ndarray, out: np.ndarray, max_lag: int) -> int:
    m = min(len(ref), len(out))
    if m <= max_lag * 2:
        return 0
    a, b = ref[:m].astype(np.float64), out[:m].astype(np.float64)
    nfft = 1 << int(np.ceil(np.log2(2 * m)))
    xc = np.fft.irfft(np.fft.rfft(b, nfft) * np.conj(np.fft.rfft(a, nfft)), nfft)
    return int(np.argmax(xc[: max_lag + 1]))


def codec_roundtrip(audio: np.ndarray, codec: str, sr: int = 8000) -> np.ndarray:
    if sr != 8000:
        raise ValueError("telephony codecs run at 8 kHz")
    check_codec(codec)
    enc_args, ext = CODECS[codec]
    n = len(audio)
    with tempfile.TemporaryDirectory() as tmp:
        src = os.path.join(tmp, "in.wav")
        enc = os.path.join(tmp, f"enc.{ext}")
        dec = os.path.join(tmp, "dec.wav")
        sf.write(src, np.clip(audio, -1, 1).astype(np.float32), sr, subtype="PCM_16")
        base = ["ffmpeg", "-nostdin", "-hide_banner", "-loglevel", "error", "-y"]
        subprocess.run([*base, "-i", src, "-ar", "8000", "-ac", "1", *enc_args, enc], check=True)
        subprocess.run([*base, "-i", enc, "-ar", "8000", "-ac", "1", "-c:a", "pcm_s16le", dec], check=True)
        out, _ = sf.read(dec, dtype="float32")
    if out.ndim > 1:
        out = out.mean(axis=1)
    # Codecs add a few ms of algorithmic delay / padding: re-align, keep the original length.
    lag = _estimate_lag(audio, out, max_lag=int(0.04 * sr))
    if lag > 0:
        out = out[lag:]
    if len(out) >= n:
        out = out[:n]
    else:
        out = np.pad(out, (0, n - len(out)))
    return out
