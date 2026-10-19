"""Frame codecs through ctypes, with packet loss applied to the bitstream and concealed by the decoder.

v1 dropped 20 ms frames of the *decoded* PCM and repeated the previous frame at half gain, with a burst
model that used `rate` as P(good->bad) and 0.5 as P(bad->bad): nominal 1 / 2 / 5 % loss realized
1.9 / 3.8 / 9.1 % (mean burst 2 frames), and codec state never saw a loss. v2 draws a two-state Gilbert mask
from (mean loss pi, mean burst B frames): q = 1/B, p = pi*q/(1-pi), first state drawn from the stationary
distribution, so the realized fraction is unbiased at any length (and recorded). Lost frames are erased
before the decoder, which conceals them and carries the error into the frames that follow:

  AMR-NB  libopencore-amrnb; an erased frame is an RFC 4867 NO_DATA frame (FT 15), concealed by the decoder
          (its payload bytes are ignored: checked)
  AMR-WB  libvo-amrwbenc + libopencore-amrwb; the decoder's lost-frame indicator (bits ignored: checked)
  Opus    libopus, VoIP application at 16 kHz; a lost packet is rebuilt from the in-band FEC carried by the
          next packet when FEC is on and that packet arrived, else by Opus PLC
  GSM-FR  libgsm, which has no concealment: a lost frame repeats the last good frame's parameters, then
          mutes 3 dB per further lost frame, silent after 16 frames (320 ms), in the manner of GSM 06.11

At 5 % bursty loss the robustness study measured AMR-NB native PLC at WB-PESQ 2.25 / STOI 0.925 against
2.18 / 0.944 for half-gain repetition (Opus-WB 16k native PLC 2.82 / 0.951). These are the libraries ffmpeg
links on this machine. Each decoder's delay is a fixed constant measured on FLEURS speech (AMR-NB 39
samples at 8 kHz in every mode, AMR-WB 94 at 16 kHz, Opus 104 = its lookahead, GSM 0), so DTX, which made
v1's cross-correlation lag search pick 43 ms (STOI 0.13), cannot misalign the output.

Codecs with no frame-level access here (G.711, G.722, G.726 through ffmpeg) use `conceal_repeat`: v1's
half-gain repetition, but on the 20 ms packet grid of the encoded stream.
"""

from __future__ import annotations

import ctypes as C
import functools

import numpy as np

FRAME_MS = 20
RATE = {"amr_nb": 8000, "amr_wb": 16000, "opus": 16000, "gsm_fr": 8000}
DELAY = {"amr_nb": 39, "amr_wb": 94, "opus": 104, "gsm_fr": 0}
AMR_NB_MODES = {4.75: 0, 5.15: 1, 5.9: 2, 6.7: 3, 7.4: 4, 7.95: 5, 10.2: 6, 12.2: 7}
AMR_WB_MODES = {6.6: 0, 8.85: 1, 12.65: 2, 14.25: 3, 15.85: 4, 18.25: 5, 19.85: 6, 23.05: 7, 23.85: 8}
_LIBS = {"amr_nb": ("libopencore-amrnb.so.0",), "amr_wb": ("libvo-amrwbenc.so.0", "libopencore-amrwb.so.0"),
         "opus": ("libopus.so.0",), "gsm_fr": ("libgsm.so.1",)}
_NO_DATA = (15 << 3) | 0x04  # RFC 4867 storage-format header of a NO_DATA frame
_LOST_FRAME = 2  # opencore-amrwb D_IF_decode: 0 good, 1 bad, 2 lost, 3 no frame
_OPUS_VOIP, _OPUS_SET_BITRATE, _OPUS_SET_INBAND_FEC, _OPUS_SET_PACKET_LOSS_PERC = 2048, 4002, 4012, 4014
_P, _B, _S = C.c_void_p, C.POINTER(C.c_ubyte), C.POINTER(C.c_short)
_PROTOTYPES = {  # function: (restype, argtypes)
    "Encoder_Interface_init": (_P, [C.c_int]),
    "Encoder_Interface_Encode": (C.c_int, [_P, C.c_int, _S, _B, C.c_int]),
    "Encoder_Interface_exit": (None, [_P]), "Decoder_Interface_init": (_P, []),
    "Decoder_Interface_Decode": (None, [_P, _B, _S, C.c_int]), "Decoder_Interface_exit": (None, [_P]),
    "E_IF_init": (_P, []), "E_IF_encode": (C.c_int, [_P, C.c_int, _S, _B, C.c_int]),
    "E_IF_exit": (None, [_P]),
    "D_IF_init": (_P, []), "D_IF_decode": (None, [_P, _B, _S, C.c_int]), "D_IF_exit": (None, [_P]),
    "opus_encoder_create": (_P, [C.c_int, C.c_int, C.c_int, C.POINTER(C.c_int)]),
    "opus_decoder_create": (_P, [C.c_int, C.c_int, C.POINTER(C.c_int)]),
    "opus_encode": (C.c_int, [_P, _S, C.c_int, _B, C.c_int]),
    "opus_decode": (C.c_int, [_P, _B, C.c_int, _S, C.c_int, C.c_int]),
    "opus_encoder_ctl": (C.c_int, [_P, C.c_int, C.c_int]),
    "opus_encoder_destroy": (None, [_P]), "opus_decoder_destroy": (None, [_P]),
    "gsm_create": (_P, []), "gsm_encode": (None, [_P, _S, _B]), "gsm_decode": (C.c_int, [_P, _B, _S]),
    "gsm_destroy": (None, [_P]),
}


@functools.cache
def _lib(name: str) -> C.CDLL:
    lib = C.CDLL(name)
    for fn, (res, args) in _PROTOTYPES.items():
        if hasattr(lib, fn):
            getattr(lib, fn).restype, getattr(lib, fn).argtypes = res, args
    return lib


def check(codec: str) -> None:
    """Raise if the system library behind `codec` is missing (v2 sets would not be reproducible)."""
    for name in _LIBS[codec]:
        try:
            _lib(name)
        except OSError as e:
            raise RuntimeError(f"{name} is missing ({codec}); install the system codec libraries (Debian / "
                               "Ubuntu: libopencore-amrnb0 libopencore-amrwb0 libvo-amrwbenc0 libopus0 "
                               "libgsm1)") from e


def gilbert_mask(n: int, rng: np.random.Generator, loss: float, burst: float) -> np.ndarray:
    """Two-state Gilbert frame-erasure mask with stationary loss `loss` and mean burst `burst` frames."""
    lost = np.zeros(n, dtype=bool)
    if loss <= 0 or n <= 0:
        return lost
    q = 1.0 / burst
    p = loss * q / (1.0 - loss)
    if not (burst >= 1 and 0 < p <= 1):
        raise ValueError(f"no Gilbert chain has loss {loss} with mean burst {burst}")
    i, bad = 0, bool(rng.random() < loss)
    while i < n:
        run = int(rng.geometric(q if bad else p))
        lost[i: i + run] = bad
        i, bad = i + run, not bad
    return lost


def conceal_repeat(y: np.ndarray, lost: np.ndarray, frame: int) -> np.ndarray:
    """Fallback concealment: a lost packet repeats the previous output packet at half gain."""
    y = y.copy()
    for i in np.flatnonzero(lost):
        seg = y[i * frame: (i + 1) * frame]
        seg[:] = 0.5 * y[(i - 1) * frame: (i - 1) * frame + len(seg)] if i else 0.0
    return y


def _amr_nb(pcm: np.ndarray, lost: np.ndarray, kbps: float, dtx: bool, fec: bool, hint: float) -> int:
    lib, mode, f = _lib("libopencore-amrnb.so.0"), AMR_NB_MODES[kbps], 160
    enc, dec = lib.Encoder_Interface_init(int(dtx)), lib.Decoder_Interface_init()
    buf, erased = (C.c_ubyte * 64)(), (C.c_ubyte * 64)(_NO_DATA)
    try:
        for i, gone in enumerate(lost):
            lib.Encoder_Interface_Encode(enc, mode, pcm[i * f:].ctypes.data_as(_S), buf, 0)
            lib.Decoder_Interface_Decode(dec, erased if gone else buf, pcm[i * f:].ctypes.data_as(_S), 0)
    finally:
        lib.Encoder_Interface_exit(enc)
        lib.Decoder_Interface_exit(dec)
    return 0


def _amr_wb(pcm: np.ndarray, lost: np.ndarray, kbps: float, dtx: bool, fec: bool, hint: float) -> int:
    enc_lib, dec_lib = _lib("libvo-amrwbenc.so.0"), _lib("libopencore-amrwb.so.0")
    mode, f = AMR_WB_MODES[kbps], 320
    enc, dec = enc_lib.E_IF_init(), dec_lib.D_IF_init()
    buf = (C.c_ubyte * 64)()
    try:
        for i, gone in enumerate(lost):
            enc_lib.E_IF_encode(enc, mode, pcm[i * f:].ctypes.data_as(_S), buf, int(dtx))
            dec_lib.D_IF_decode(dec, buf, pcm[i * f:].ctypes.data_as(_S), _LOST_FRAME if gone else 0)
    finally:
        enc_lib.E_IF_exit(enc)
        dec_lib.D_IF_exit(dec)
    return 0


def _opus(pcm: np.ndarray, lost: np.ndarray, kbps: float, dtx: bool, fec: bool, hint: float) -> int:
    lib, f, err = _lib("libopus.so.0"), 320, C.c_int()
    enc = lib.opus_encoder_create(16000, 1, _OPUS_VOIP, C.byref(err))
    dec = lib.opus_decoder_create(16000, 1, C.byref(err))
    recovered = 0
    try:
        if not enc or not dec:
            raise RuntimeError(f"opus init failed ({err.value})")
        lib.opus_encoder_ctl(enc, _OPUS_SET_BITRATE, int(round(kbps * 1000)))
        if fec:  # LBRR is only sent when the encoder expects losses
            lib.opus_encoder_ctl(enc, _OPUS_SET_INBAND_FEC, 1)
            lib.opus_encoder_ctl(enc, _OPUS_SET_PACKET_LOSS_PERC, max(1, int(round(100 * hint))))
        buf, packets = (C.c_ubyte * 1500)(), []
        for i in range(len(lost)):
            size = lib.opus_encode(enc, pcm[i * f:].ctypes.data_as(_S), f, buf, 1500)
            if size < 0:
                raise RuntimeError(f"opus_encode failed ({size})")
            packets.append((C.c_ubyte * size).from_buffer_copy(buf, 0))
        for i, gone in enumerate(lost):
            out = pcm[i * f:].ctypes.data_as(_S)
            if not gone:
                lib.opus_decode(dec, packets[i], len(packets[i]), out, f, 0)
            elif fec and i + 1 < len(lost) and not lost[i + 1]:
                lib.opus_decode(dec, packets[i + 1], len(packets[i + 1]), out, f, 1)
                recovered += 1
            else:
                lib.opus_decode(dec, None, 0, out, f, 0)
    finally:
        if enc:
            lib.opus_encoder_destroy(enc)
        if dec:
            lib.opus_decoder_destroy(dec)
    return recovered


def _gsm_fr(pcm: np.ndarray, lost: np.ndarray, kbps: float, dtx: bool, fec: bool, hint: float) -> int:
    lib, f = _lib("libgsm.so.1"), 160
    enc, dec = lib.gsm_create(), lib.gsm_create()
    buf, last, run = (C.c_ubyte * 33)(), None, 0
    try:
        for i, gone in enumerate(lost):
            frame = pcm[i * f: (i + 1) * f]
            lib.gsm_encode(enc, frame.ctypes.data_as(_S), buf)
            run = run + 1 if gone else 0
            if not gone:
                last = (C.c_ubyte * 33).from_buffer_copy(buf)
            if last is None or run > 16:
                frame[:] = 0
                continue
            lib.gsm_decode(dec, last, frame.ctypes.data_as(_S))
            if run > 1:
                frame[:] = np.round(frame * 10 ** (-3 * (run - 1) / 20)).astype(np.int16)
    finally:
        lib.gsm_destroy(enc)
        lib.gsm_destroy(dec)
    return 0


_IMPL = {"amr_nb": _amr_nb, "amr_wb": _amr_wb, "opus": _opus, "gsm_fr": _gsm_fr}
PLC = {"amr_nb": "native", "amr_wb": "native", "opus": "native", "gsm_fr": "substitution"}


def roundtrip(x: np.ndarray, codec: str, kbps: float | None = None, rng: np.random.Generator | None = None,
              loss: float = 0.0, burst: float = 1.0, dtx: bool = False,
              fec: bool = False) -> tuple[np.ndarray, dict]:
    """Encode/decode float audio at RATE[codec] with Gilbert(loss, burst) frame erasures; output has the
    input's length and alignment. Returns (audio, {loss_realized, fec_recovered})."""
    check(codec)
    f, d, n = RATE[codec] * FRAME_MS // 1000, DELAY[codec], len(x)
    frames = -(-(n + d) // f)
    pcm = np.zeros(frames * f, dtype=np.int16)  # encoded in place: each frame is overwritten by its decode
    pcm[:n] = np.round(np.clip(x, -1, 1) * 32767).astype(np.int16)
    lost = gilbert_mask(frames, rng, loss, burst) if rng is not None else np.zeros(frames, dtype=bool)
    recovered = _IMPL[codec](pcm, lost, kbps, dtx, fec, loss)
    return pcm[d: d + n].astype(np.float32) / 32768, {"loss_realized": round(float(lost.mean()), 4),
                                                       "fec_recovered": recovered}
