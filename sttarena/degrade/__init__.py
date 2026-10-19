"""Reproducible acoustic degradations: phone-channel codecs, background noise, reverb.

Every degradation is driven by a seed derived from (dataset, utterance id, condition), so the
same input always produces the same degraded audio and the exact parameters are recorded.

Conditions (v1, chain.py: the published sets; kept bit-for-bit)
----------
noisy       wideband (16 kHz) speech + background noise at 0-15 dB SNR
telephony   8 kHz narrowband phone channel: 300-3400 Hz band-pass, a random telephony codec
            (G.711 mu/A-law, GSM-FR, AMR-NB, G.726, Opus-NB), level changes, packet loss
callcenter  noise (babble/office/street) + optional room reverb at the caller side, then the
            telephony channel. This is the hardest and most realistic contact-center setting.

Chains v2 (chain_v2.py; a suite condition opts in with `version: 2` and `chain:`)
---------
telephony   device x network x storage profiles (profiles.py): P.56 level, TS 26.131 send response,
            AMR-NB/WB, Opus, G.722, GSM-FR, G.726 with bitstream losses and codec concealment
            (native.py), G.711 A-law tandem trunk, recording formats; narrowband or wideband output
callcenter  device-dependent room IR (rir.py) and environment noise with babble_v2 (noise.py), then telephony
sweep       paired SNR grid per noise type (speech-shaped, babble_v2, ambient); several rows per utterance
padded      silence / comfort noise / tones / office noise around the clean utterance (tones.py)
The hallucination set v2 (nonspeech.py) and the sweep summaries (robustness.py) build on these.
"""

from .chain import CONDITIONS, degrade
from .chain_v2 import CHAINS_V2, degrade_v2
from .noise import NoiseBank

__all__ = ["CHAINS_V2", "CONDITIONS", "degrade", "degrade_v2", "NoiseBank"]
