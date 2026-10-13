"""Reproducible acoustic degradations: phone-channel codecs, background noise, reverb.

Every degradation is driven by a seed derived from (dataset, utterance id, condition), so the
same input always produces the same degraded audio and the exact parameters are recorded.

Conditions
----------
noisy       wideband (16 kHz) speech + background noise at 0-15 dB SNR
telephony   8 kHz narrowband phone channel: 300-3400 Hz band-pass, a random telephony codec
            (G.711 mu/A-law, GSM-FR, AMR-NB, G.726, Opus-NB), level changes, packet loss
callcenter  noise (babble/office/street) + optional room reverb at the caller side, then the
            telephony channel. This is the hardest and most realistic contact-center setting.
"""

from .chain import CONDITIONS, degrade
from .noise import NoiseBank

__all__ = ["CONDITIONS", "degrade", "NoiseBank"]
