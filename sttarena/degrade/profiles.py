"""Degradation chain v2 assumptions, in one table (`PROFILE_V2`).

No MENA codec- or network-share figures were found (GSMA reports are paywalled, Opensignal's MENA page
returned 403), so every weight here is an *assumption* from the robustness study (recommendation R7), to be
refitted once real-channel data exist (re-transmitted sets, real calls). Each item draws device, network and
storage independently and records all three in meta.degradation, so results can be reported per value and
re-weighted later: the mix only sets the aggregate.

Network paths: access codec, then for calls that leave the mobile / OTT network the PSTN trunk
(8 kHz, G.712 300-3400 Hz band, G.711 A-law), i.e. tandem coding, the normal case for contact centers that
record 8 kHz even when the caller is on HD voice.
  mobile_cs     2G/3G circuit switched: AMR-NB > trunk
  volte_nb      VoLTE handset, call leaves the IMS: AMR-WB > trunk
  volte_wb      VoLTE HD end to end: AMR-WB
  ott_nb        app call (Opus is mandatory in WhatsApp Business Calling; Meta's MLow is not public, Opus-WB
                at 6 kbps stands in for it) bridged to the PSTN: Opus > trunk
  ott_wb        the same app end to end (e.g. a WebRTC contact-center leg)
  landline      PSTN G.711: A-law, the MENA law (mu-law is North American / Japanese), 15 % mu-law for
                international legs
  sip_wb        enterprise SIP desk phone, G.722 end to end: not in R7, 3 points taken from landline
  legacy_gsm    GSM-FR on 2G > trunk
  legacy_adpcm  G.726 32/24 kbit/s (DECT, old trunks) > trunk; G.729 has no encoder here (R7 lists it as P2)
Loss profiles give the mean loss pi as a mixture of uniform ranges and the mean burst B in frames. VoLTE uses
a stand-in for the TS 26.114 delay/loss profiles 1-4 (0-2.4 % loss), OTT a G.1050 profile B/C mix, SIP a
G.1050 profile A/B mix. Landline (TDM) and the G.726 paths carry no packet loss.

Device: TS 26.131 V19 handset/headset send masks (hands-free masks are the same in narrowband; the handset
wideband mask is used for every device), talker offsets from its loudness-rating tolerances (handset +-3 dB,
hands-free +-4 dB) plus 2 % extremes at +-10 dB, mic SNRs of R7 (handset TruncN(20, 7) on [5, 40] dB, from
ETSI handset-position noise levels; speakerphone / car TruncN(10, 6) on [-5, 25] dB, listener-position
studies). Bluetooth HFP links are CVSD (narrowband; only its 8 kHz band is modelled, not its delta-modulation
noise) or mSBC (wideband, ffmpeg's sbc encoder).

Call-center noise (R2): babble falls from 0.40 to 0.15 and becomes `babble_v2`; ETSI call-center noise
(TS 103 224 Callcenter1/2, ES 202 396-1, CC BY 4.0: imported with build_noise_bank.py --add) takes 0.15,
office 0.10, and the remaining 0.60 keeps v1's proportions over transport, street, cafe, home, hum, misc.
Categories missing from the noise bank are dropped and the weights renormalized, as in v1.
"""

from __future__ import annotations

_AMR_WB_KBPS = {12.65: 0.55, 23.85: 0.15, 15.85: 0.10, 8.85: 0.12, 6.6: 0.08}
_OPUS_KBPS = {6: 0.10, 10: 0.20, 16: 0.35, 24: 0.25, 32: 0.10}
_V1_REST = {"transport": 0.10, "street": 0.10, "cafe": 0.08, "home": 0.07, "hum": 0.05, "misc": 0.05}

PROFILE_V2: dict = {
    "level": {"target_dbov": -26.0, "extreme_p": 0.02, "extreme_db": 10.0},
    # weight, talker offset sd [dB], mic SNR TruncN (mean, sd, lo, hi) [dB], room/device IR kind, BT link mix
    "device": {
        "handset": {"weight": 0.60, "offset_sd": 3.0, "snr": (20, 7, 5, 40), "rir": "handset"},
        "headset": {"weight": 0.05, "offset_sd": 3.0, "snr": (20, 7, 5, 40), "rir": "handset"},
        "bt_headset": {"weight": 0.10, "offset_sd": 3.0, "snr": (20, 7, 5, 40), "rir": "handset",
                       "link": {"cvsd": 0.4, "msbc": 0.6}},
        "speakerphone": {"weight": 0.15, "offset_sd": 4.0, "snr": (10, 6, -5, 25), "rir": "speakerphone"},
        "car": {"weight": 0.10, "offset_sd": 4.0, "snr": (10, 6, -5, 25), "rir": "car"},
    },
    # TS 26.131 handset/headset sending masks: (Hz, upper dB, lower dB or None); 10 % of devices 3 dB outside
    "send_mask": {
        "nb": [(100, -12, None), (200, 0, None), (300, 0, -12), (1000, 0, -6), (2000, 4, -6), (3000, 4, -6),
               (3400, 4, -9), (4000, 0, None)],
        "wb": [(100, 0, None), (200, 5, -5), (5000, 5, -5), (6300, 5, -10), (8000, 5, None)],
        "outside_p": 0.10, "outside_db": 3.0,
    },
    "uplink": {"hpf_hz": (80, 150), "clip_p": 0.03, "clip_quantile": (0.95, 0.999)},
    # weight, access codec mix, its bitrate mix [kbps], DTX probability, in-band FEC, loss profile, PSTN trunk
    "network": {
        "mobile_cs": {"weight": 0.30, "codec": {"amr_nb": 1.0}, "dtx": 0.7, "loss": "cs", "trunk": True,
                      "kbps": {12.2: 0.50, 10.2: 0.10, 7.95: 0.10, 7.4: 0.10, 6.7: 0.08, 5.9: 0.06,
                               5.15: 0.03, 4.75: 0.03}},
        "volte_nb": {"weight": 0.25, "codec": {"amr_wb": 1.0}, "kbps": _AMR_WB_KBPS, "dtx": 0.7,
                     "loss": "volte", "trunk": True},
        "volte_wb": {"weight": 0.05, "codec": {"amr_wb": 1.0}, "kbps": _AMR_WB_KBPS, "dtx": 0.7,
                     "loss": "volte", "trunk": False},
        "ott_nb": {"weight": 0.10, "codec": {"opus": 1.0}, "kbps": _OPUS_KBPS, "fec": True, "loss": "ott",
                   "trunk": True},
        "ott_wb": {"weight": 0.10, "codec": {"opus": 1.0}, "kbps": _OPUS_KBPS, "fec": True, "loss": "ott",
                   "trunk": False},
        "landline": {"weight": 0.07, "codec": {"g711_alaw": 0.85, "g711_mulaw": 0.15}, "trunk": False},
        "sip_wb": {"weight": 0.03, "codec": {"g722": 1.0}, "loss": "managed", "trunk": False},
        "legacy_gsm": {"weight": 0.05, "codec": {"gsm_fr": 1.0}, "loss": "cs", "trunk": True},
        "legacy_adpcm": {"weight": 0.05, "codec": {"g726": 1.0}, "kbps": {32: 0.6, 24: 0.4}, "trunk": True},
    },
    # mean loss pi ~ mixture of (probability, lo, hi) uniform ranges; mean burst B ~ U(lo, hi) frames
    "loss": {
        "cs": {"mix": [(0.5, 0.0, 0.0), (0.4, 0.0, 0.01), (0.1, 0.01, 0.03)], "burst": (1.0, 2.0)},
        "volte": {"mix": [(0.4, 0.0, 0.0), (0.4, 0.0, 0.01), (0.2, 0.01, 0.024)], "burst": (1.0, 2.0)},
        "ott": {"mix": [(0.4, 0.0, 0.0), (0.4, 0.005, 0.03), (0.2, 0.03, 0.10)], "burst": (1.5, 4.0)},
        "managed": {"mix": [(0.6, 0.0, 0.0), (0.4, 0.0, 0.01)], "burst": (1.0, 2.0)},
    },
    "trunk": {"band_hz": (300, 3400), "codec": "g711_alaw"},
    # recording format mix per band, and the bitrates [kbps] a lossy format draws from
    "storage": {
        "nb": {"pcm16": 0.45, "g711_alaw": 0.25, "mp3": 0.15, "gsm_wav49": 0.10, "opus": 0.05},
        "wb": {"pcm16": 0.50, "opus": 0.40, "mp3": 0.10},
        "kbps": {"nb": {"mp3": (16, 24, 32), "opus": (8, 12, 16)},
                 "wb": {"opus": (16, 20, 24), "mp3": (32,)}},
    },
    # synthetic IR per kind when <noise root>/rir/<kind>/ holds no measured ones: RT60 [s], DRR [dB], C50 [dB]
    "rir": {
        "handset": {"rt60": (0.2, 0.6), "drr": (5.0, 15.0), "c50": (20.0, 30.0)},
        "speakerphone": {"rt60": (0.3, 0.8), "drr": (-3.0, 10.0), "c50": None},
        "car": {"rt60": (0.05, 0.15), "drr": (0.0, 10.0), "c50": None},
        "farfield": {"rt60": (0.4, 0.9), "drr": (-10.0, -3.0), "c50": None},
    },
    "callcenter_noise": {"babble_v2": 0.15, "callcenter": 0.15, "office": 0.10,
                         **{k: 0.60 * w / sum(_V1_REST.values()) for k, w in _V1_REST.items()}},
    # K distinct far-field talkers, each P.56-normalized, per-talker gain jitter [dB]
    "babble": {"talkers": (8, 16), "level_dbov": -26.0, "gain_db": (-6.0, 0.0), "rir": "farfield"},
}
