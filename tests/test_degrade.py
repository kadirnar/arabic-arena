"""Degradation chain v2: determinism, the measured properties the v2 fixes promise, and a v1 regression check.

Codec paths need ffmpeg and the system codec libraries; a missing encoder or library skips that test.
"""

from __future__ import annotations

import json
from collections import Counter

import numpy as np
import pytest
import soundfile as sf
from scipy import signal

from sttarena.degrade import NoiseBank, degrade, degrade_v2, native, nonspeech, robustness, tones
from sttarena.degrade.chain import seed_for
from sttarena.degrade.chain_v2 import telephone
from sttarena.degrade.codecs import ffmpeg_v2
from sttarena.degrade.level import active_level, rms_dbov, to_level
from sttarena.degrade.profiles import PROFILE_V2
from sttarena.degrade.rir import rir_stats, synthetic_rir

SR = 16000
SWEEP = {"noises": ["ssn", "babble_v2", "ambient"], "snrs": [20, 10, 5, 0, -5], "ambient": ["cafe", "street"]}
PADDED = {"positions": ["lead", "trail", "both"], "pad_s": [2, 8, 20], "max_total_s": 30,
          "fillers": {"silence": 0.25, "comfort_noise": 0.25, "tones": 0.25, "office": 0.25}}
# v1 degrade() on test_core's input and bank, recorded with the HEAD (published) code
V1_GOLDEN = {
    "noisy/0": {"condition": "noisy", "noise": "babble", "snr_db": 11.74, "_rms": 0.103272},
    "noisy/2": {"condition": "noisy", "noise": "hum", "snr_db": 11.63, "_rms": 0.103296},
    "noisy/3": {"condition": "noisy", "noise": "pink", "snr_db": 13.26, "_rms": 0.102446},
    "telephony/0": {"condition": "telephony", "band": [317, 3348], "gain_db": -10.83, "clipped": False,
                    "codec": "amr_nb_12k2", "packet_loss": 0.0},
    "telephony/3": {"condition": "telephony", "band": [352, 3232], "gain_db": -0.95, "clipped": False,
                    "codec": "g711_mulaw", "packet_loss": 0.01},
    "callcenter/0": {"condition": "callcenter", "rt60": 0.58, "noise": "babble", "snr_db": 9.24,
                     "band": [320, 3409], "gain_db": -0.28, "clipped": False, "codec": "amr_nb_4k75",
                     "packet_loss": 0.01},
}


FORMANTS = ((730, 1090, 2440), (270, 2290, 3010), (300, 870, 2240), (530, 1840, 2480))  # a, i, u, e


def speechlike(sec: float = 2.0, sr: int = SR, seed: int = 0) -> np.ndarray:
    """Deterministic source-filter stand-in for speech, which speech codecs model as they model speech:
    200 ms syllables of a gliding glottal pulse train (or noise, for fricatives) through three formant
    resonators, with a syllable envelope and pauses; peak 0.3."""
    rng = np.random.default_rng(seed)
    n = int(sec * sr)
    t = np.arange(n) / sr
    pulses = np.diff(np.floor(np.cumsum((110 + 40 * np.sin(2 * np.pi * 0.6 * t + seed)) / sr)), prepend=0.0)
    glottal = signal.lfilter([1.0], [1.0, -0.95], pulses)
    out, syl = np.zeros(n), int(0.2 * sr)
    for start in range(0, n, syl):
        m = min(n, start + syl) - start
        y = glottal[start: start + m] if rng.random() < 0.8 else 0.05 * rng.standard_normal(m)
        for f in FORMANTS[int(rng.integers(len(FORMANTS)))]:
            if f < sr / 2 - 300:
                r = np.exp(-np.pi * (60 + 0.06 * f) / sr)
                y = signal.lfilter([1 - r], [1, -2 * r * np.cos(2 * np.pi * f / sr), r * r], y)
        out[start: start + m] = y * np.hanning(m)
    out *= np.sin(2 * np.pi * 0.5 * t) > -0.3
    return (0.3 * out / np.abs(out).max()).astype(np.float32)


def _or_skip(fn, *args, **kwargs):
    try:
        return fn(*args, **kwargs)
    except (RuntimeError, FileNotFoundError) as e:  # missing ffmpeg encoder or codec library
        pytest.skip(str(e))


def _lag(ref: np.ndarray, y: np.ndarray, m: int = 200) -> int:
    n = min(len(ref), len(y))
    nfft = 1 << int(np.ceil(np.log2(2 * n)))
    xc = np.fft.irfft(np.fft.rfft(y[:n], nfft) * np.conj(np.fft.rfft(ref[:n], nfft)), nfft)
    return int(np.argmax(np.concatenate([xc[-m:], xc[: m + 1]]))) - m


def _peak_hz(x: np.ndarray, sr: int, lo: float = 0, hi: float = 1e9) -> float:
    f = np.fft.rfftfreq(8 * len(x), 1 / sr)
    mag = np.abs(np.fft.rfft(x * np.hanning(len(x)), 8 * len(x))) * ((f >= lo) & (f < hi))
    return float(f[np.argmax(mag)])


@pytest.fixture(scope="module")
def bank(tmp_path_factory):
    """A file-based bank: five noise categories, one measured handset IR, a reserved babble_pool dir, and a
    talker pool of 20 speakers."""
    root = tmp_path_factory.mktemp("noise")
    rng = np.random.default_rng(1)
    for cat in ("office", "cafe", "street", "home", "transport"):
        (root / cat).mkdir()
        sf.write(root / cat / f"{cat}.flac", (0.1 * rng.standard_normal(4 * SR)).astype(np.float32), SR)
    (root / "rir" / "handset").mkdir(parents=True)
    h = np.concatenate([np.zeros(40), synthetic_rir(np.random.default_rng(2), SR, 0.4, 10.0, 25.0)])
    sf.write(root / "rir" / "handset" / "measured.wav", h.astype(np.float32), SR, subtype="FLOAT")
    (root / "babble_pool").mkdir()
    b = NoiseBank(root)
    b.add_talkers([speechlike(2.5, seed=s) for s in range(24)], [f"spk{i % 20}" for i in range(24)],
                  [f"utt{i}" for i in range(24)])
    return b


# ---- v1 ---------------------------------------------------------------------------------------------
def test_v1_degrade_is_unchanged():
    rng = np.random.default_rng(0)
    b = NoiseBank(None)
    b.add_speech_pool([rng.standard_normal(32000).astype(np.float32) * 0.1 for _ in range(5)])
    t = np.arange(16000 * 3) / 16000
    x = (0.2 * np.sin(2 * np.pi * 220 * t) * np.sin(2 * np.pi * 3 * t)).astype(np.float32)
    for key, want in V1_GOLDEN.items():
        cond, i = key.split("/")
        y, _, params = _or_skip(degrade, x, 16000, cond, seed_for("ar", f"set/{i}", cond), b)
        want = dict(want)
        if "_rms" in want:
            assert round(float(np.sqrt(np.mean(y.astype(np.float64) ** 2))), 6) == want.pop("_rms")
        assert params == want


# ---- determinism ------------------------------------------------------------------------------------
@pytest.mark.parametrize("chain", ["telephony", "callcenter", "sweep", "padded"])
def test_v2_chain_is_deterministic(bank, chain):
    x, cfg = speechlike(1.5), {"sweep": SWEEP, "padded": PADDED}.get(chain, {})
    seed = seed_for("ar", "set/1", f"{chain}_v2")
    a = _or_skip(degrade_v2, x, SR, chain, seed, bank, cfg)
    b = degrade_v2(x, SR, chain, seed, bank, cfg)
    assert [(s, sr, json.dumps(p, sort_keys=True)) for s, _, sr, p in a] == \
           [(s, sr, json.dumps(p, sort_keys=True)) for s, _, sr, p in b]
    for (_, ya, sr, p), (_, yb, _, _) in zip(a, b):
        np.testing.assert_array_equal(ya, yb)
        assert p["chain_version"] == 2 and p["chain"] == chain and sr in (8000, 16000)
        assert np.isfinite(ya).all() and np.abs(ya).max() <= 1.0
    c = _or_skip(degrade_v2, x, SR, chain, seed + 1, bank, cfg)
    assert any(not np.array_equal(ya, yc) for (_, ya, _, _), (_, yc, _, _) in zip(a, c))


@pytest.mark.parametrize("network", list(PROFILE_V2["network"]))
def test_every_network_path_runs_and_records_its_profile(network):
    x = speechlike(1.0)
    y, sr, p = _or_skip(telephone, x, SR, seed_for("ar", "set/2", network), network=network)
    net = PROFILE_V2["network"][network]
    wideband = not net["trunk"] and any(c in ("amr_wb", "opus", "g722") for c in net["codec"])
    assert sr == (16000 if wideband else 8000) and len(y) == len(x) * sr // SR
    assert p["network"] == network and p["codec"] in net["codec"]
    assert p["band"] == ("wb" if wideband else "nb")
    assert p["trunk"] == ("g711_alaw" if net["trunk"] else None)
    assert p["storage"] in PROFILE_V2["storage"][p["band"]] and p["device"] in PROFILE_V2["device"]
    assert -26 - 15 < p["level_dbov"] < -26 + 15


def test_nonspeech_clips_are_deterministic_per_group(bank):
    full = nonspeech.plan("ar", 830, list(nonspeech.GROUPS))
    assert Counter(g for _, g, _ in full) == Counter(nonspeech.GROUPS)
    assert set(nonspeech.plan("ar", 830, ["G1", "G3"])) <= set(full)  # ids do not depend on the other groups
    for group in nonspeech.GROUPS:
        durs = [d for _, g, d in full if g == group]
        share = [np.mean([lo <= d <= hi for d in durs]) for _, lo, hi in nonspeech.DURATION_STRATA]
        assert np.allclose(share, [p for p, _, _ in nonspeech.DURATION_STRATA], atol=0.01)
        cid, _, sec = min((r for r in full if r[1] == group), key=lambda r: r[2])
        xa, sra, ma = _or_skip(nonspeech.clip, "ar", cid, group, sec, bank)
        xb, srb, mb = nonspeech.clip("ar", cid, group, sec, bank)
        np.testing.assert_array_equal(xa, xb)
        assert sra == srb and json.dumps(ma, sort_keys=True) == json.dumps(mb, sort_keys=True)
        assert ma["group"] == group and ma["kind"] and ma["degradation"]["chain_version"] == 2
        assert abs(len(xa) / sra - sec) < 0.01
        if group in nonspeech.NETWORK_GROUPS:
            assert sra == 8000 and ma["degradation"]["trunk"] == "g711_alaw"


# ---- packet loss -------------------------------------------------------------------------------------
@pytest.mark.parametrize("loss, burst", [(0.01, 1.0), (0.05, 2.0), (0.10, 4.0)])
def test_gilbert_mask_realizes_mean_loss_and_burst(loss, burst):
    lost = native.gilbert_mask(200_000, np.random.default_rng(0), loss, burst)
    edges = np.diff(np.concatenate([[0], lost.astype(int), [0]]))
    bursts = np.flatnonzero(edges == -1) - np.flatnonzero(edges == 1)
    assert abs(lost.mean() - loss) < max(0.1 * loss, 0.002)
    assert abs(bursts.mean() - burst) < 0.1 * burst


def test_native_codec_conceals_erased_frames_and_reports_them():
    x = speechlike(20.0, sr=8000)
    clean, info0 = _or_skip(native.roundtrip, x, "amr_nb", kbps=12.2)
    lossy, info = native.roundtrip(x, "amr_nb", kbps=12.2, rng=np.random.default_rng(4), loss=0.05, burst=2.0)
    assert info0["loss_realized"] == 0 and abs(info["loss_realized"] - 0.05) < 0.02
    frames = np.abs(lossy - clean).reshape(-1, 160).max(axis=1)
    assert np.mean(frames > 1e-4) >= info["loss_realized"]  # erasures, plus error propagation after them


# ---- room impulse responses ---------------------------------------------------------------------------
@pytest.mark.parametrize("kind", list(PROFILE_V2["rir"]))
def test_synthetic_rir_meets_its_drr_and_c50(kind):
    cfg, b = PROFILE_V2["rir"][kind], NoiseBank(None)
    for s in range(8):
        h, lead, st = b.rir(kind, np.random.default_rng(s))
        assert st["rir"] == f"synthetic/{kind}" and lead == 0
        assert np.isclose(np.sum(h.astype(np.float64) ** 2), 1)
        assert cfg["drr"][0] - 0.05 <= st["drr_db"] <= cfg["drr"][1] + 0.05
        if cfg["c50"]:
            assert st["c50_db"] >= cfg["c50"][0] - 0.05
    h = synthetic_rir(np.random.default_rng(0), SR, 0.5, -6.0)
    assert rir_stats(h, SR, peak=0)["drr_db"] == pytest.approx(-6, abs=0.05)


def test_measured_rirs_are_preferred_and_reserved_dirs_are_not_noise(bank):
    assert set(bank.clips) == {"office", "cafe", "street", "home", "transport"}
    h, lead, st = bank.rir("handset", np.random.default_rng(0))
    assert st["rir"] == "handset/measured" and lead == 16  # trimmed to 1 ms before the direct path
    assert st["drr_db"] == pytest.approx(10.0, abs=0.1) and st["c50_db"] == pytest.approx(25.0, abs=0.1)
    assert bank.rir("farfield", np.random.default_rng(0))[2]["rir"] == "synthetic/farfield"


# ---- levels and SNR -----------------------------------------------------------------------------------
def test_p56_meter_matches_the_stl_sv56_reference():
    # reference values: ITU-T G.191 STL sv-p56.c, compiled, on the same signals
    t = np.arange(16000 * 6) / 16000
    sine = (0.5 * np.sin(2 * np.pi * 1000 * t)).astype(np.float32)
    assert active_level(sine, 16000) == pytest.approx((-9.0138, 0.9961), abs=1e-3)
    gated = (sine * (np.floor(t) % 2 == 0)).astype(np.float32)
    assert active_level(gated, 16000) == pytest.approx((-10.0832, 0.6371), abs=1e-3)
    assert active_level(np.zeros(16000, dtype=np.float32), 16000) == (-100.0, 0.0)


@pytest.mark.parametrize("target", [-26.0, -36.0, -16.0])
def test_p56_normalization_hits_the_target(target):
    x = speechlike(4.0)
    y, _ = to_level(x, SR, target)
    level, activity = active_level(y, SR)
    assert abs(level - target) <= 0.5 and activity < 0.9
    assert rms_dbov(y) < level - 1  # the v1 RMS definition would put this clip > 1 dB low


def test_sweep_snr_is_active_level_over_noise_rms_with_one_segment_per_noise(bank):
    x = speechlike(3.0)
    rows = _or_skip(degrade_v2, x, SR, "sweep", seed_for("ar", "set/3", "sweep"), bank, SWEEP)
    assert len(rows) == 15
    xn, _ = to_level(x, SR, -26.0)
    level = active_level(xn, SR)[0]
    segments: dict[str, list[np.ndarray]] = {}
    for suffix, y, sr, p in rows:
        assert sr == SR and suffix == f"{p['noise']}@{p['snr_db']:g}"
        noise = y / 10 ** (p["peak_scale_db"] / 20) - xn
        assert abs(level - rms_dbov(noise) - p["snr_db"]) <= 0.5
        segments.setdefault(p["noise"], []).append(noise / np.std(noise))
    for segs in segments.values():
        assert min(np.corrcoef(segs[0], s)[0, 1] for s in segs) > 0.999


def test_callcenter_records_device_room_and_mic_snr(bank):
    for i in range(3):
        seed = seed_for("ar", f"set/{i}", "cc")
        [(_, y, sr, p)] = _or_skip(degrade_v2, speechlike(1.5), SR, "callcenter", seed, bank, {})
        dev = PROFILE_V2["device"][p["device"]]
        assert p["noise"] in PROFILE_V2["callcenter_noise"] and dev["snr"][2] <= p["snr_db"] <= dev["snr"][3]
        assert p["rir"].endswith(dev["rir"]) or p["rir"] == "handset/measured"
        assert "rir_drr_db" in p and "rir_c50_db" in p


# ---- babble and padding ------------------------------------------------------------------------------
def test_babble_v2_has_distinct_far_field_talkers_and_a_screen_hook(bank):
    x, p = bank.babble_v2(2 * SR, np.random.default_rng(3))
    talkers = p["babble"]
    assert 8 <= p["babble_talkers"] <= 16 and len({t["speaker"] for t in talkers}) == p["babble_talkers"]
    assert all(-10.05 <= t["drr_db"] <= -2.95 and -6 <= t["gain_db"] <= 0 for t in talkers)
    assert np.std(x) == pytest.approx(1, abs=1e-3)
    calls: list[int] = []

    def screen(audio: np.ndarray, sr: int) -> bool:  # stands in for "two ASR models agree on >= 3 words"
        calls.append(1)
        return len(calls) > 2

    _, drawn = bank.babble_v2(SR, np.random.default_rng(3), screen=screen)
    assert drawn["screen_redraws"] == 2 and len(calls) == 3


def test_padded_keeps_the_utterance_and_records_the_padding(bank):
    x = speechlike(2.0)
    seen = set()
    for i in range(8):
        [(suffix, y, sr, p)] = degrade_v2(x, SR, "padded", seed_for("ar", f"set/{i}", "padded"), bank, PADDED)
        lead, trail = int(round(p["pad_lead_s"] * SR)), int(round(p["pad_trail_s"] * SR))
        np.testing.assert_array_equal(y[lead: lead + len(x)], x)
        assert suffix == "pad" and sr == SR and len(y) == lead + len(x) + trail and len(y) <= 30 * SR
        assert max(p["pad_lead_s"], p["pad_trail_s"]) in PADDED["pad_s"] and p["filler"] in PADDED["fillers"]
        seen.add(p["pad_position"])
    assert seen <= set(PADDED["positions"]) and len(seen) >= 2


# ---- tones -----------------------------------------------------------------------------------------
@pytest.mark.parametrize("digit", list("0123456789*#ABCD"))
def test_dtmf_digits_carry_their_row_and_column_tones(digit):
    x = tones.dtmf(digit, 8000, 0.2, 0.0)
    r = next(i for i, row in enumerate(tones.DTMF_KEYS) if digit in row)
    c = tones.DTMF_KEYS[r].index(digit)
    assert abs(_peak_hz(x, 8000, hi=1100) - tones.DTMF_ROWS[r]) < 3
    assert abs(_peak_hz(x, 8000, lo=1100) - tones.DTMF_COLS[c]) < 3
    expected = 10 * np.log10(10 ** (tones.DTMF_ROW_DBOV / 10) + 10 ** (tones.DTMF_COL_DBOV / 10))
    assert rms_dbov(x[80:-80]) == pytest.approx(expected, abs=0.2)  # -6 / -4 dBm0 per component


def test_network_tones_have_the_documented_frequencies_and_cadences():
    rng, sr = np.random.default_rng(0), 8000
    sa = tones.tone(*tones.TONE_PLANS["SA"]["ringback"], 11.6, sr, rng, -15.0)  # 425 Hz, 1.2 s on / 4.6 s off
    on = np.abs(sa) > 0.5 * np.abs(sa).max()
    env = np.convolve(on, np.ones(80) / 80, mode="same") > 0.05
    assert abs(_peak_hz(sa, sr) - 425) < 2 and env.mean() == pytest.approx(1.2 / 5.8, abs=0.01)
    assert rms_dbov(sa[env]) == pytest.approx(-15.0, abs=0.3)
    dual = tones.tone("400+450", (), 1.0, sr, rng, -15.0)
    assert {round(_peak_hz(dual, sr, hi=425)), round(_peak_hz(dual, sr, lo=425))} == {400, 450}
    am = tones.tone("425x50", (), 1.0, sr, rng, -15.0)  # Egypt: 425 Hz modulated by 50 Hz
    bands = ((350, 400), (400, 450), (450, 500))
    assert [round(_peak_hz(am, sr, lo, hi)) for lo, hi in bands] == [375, 425, 475]
    sit = tones.tone(*tones.STD_SIT, 3.98, sr, rng, -15.0)  # two cycles: one whole burst is always in view
    on = np.convolve(np.abs(sit) > 1e-3, np.ones(80) / 80, mode="same") > 0.5
    start = next(r for r in np.flatnonzero(np.diff(on.astype(int)) == 1) if r + int(0.99 * sr) <= len(sit))
    thirds = [sit[start + int(k * 0.33 * sr) + 200: start + int((k + 1) * 0.33 * sr) - 200] for k in range(3)]
    assert [round(_peak_hz(s, sr), -1) for s in thirds] == [950, 1400, 1800]
    assert abs(_peak_hz(tones.tone(*tones.FAX["fax_cng"], 3.5, sr, rng, -15.0), sr) - 1100) < 2
    ced = tones.fax_ced(6.0, sr, rng, -15.0)
    ced_on = np.convolve(np.abs(ced) > 1e-4, np.ones(80) / 80, mode="same") > 0.5  # 2100 Hz sampled at 8 kHz
    # hits exact zeros on 2 of every 80 samples, so on-time is read from the envelope
    assert abs(_peak_hz(ced, sr) - 2100) < 2 and 2.6 - 0.01 <= ced_on.mean() * 6.0 <= 4.0 + 0.01


def test_tone_plans_cover_every_tone_type():
    rng = np.random.default_rng(0)
    for tone in ("ringback", "busy", "congestion", "sit", "call_waiting", "fax_cng"):
        country, spec, cadence = tones.tone_plan(rng, tone)
        assert spec and (country == "ITU" or country in tones.TONE_PLANS)
        assert len(tones.tone(spec, cadence, 2.0, 8000, rng, -15.0)) == 16000
    assert sum(tones.COUNTRY_WEIGHTS.values()) == pytest.approx(1.0)


# ---- codecs --------------------------------------------------------------------------------------------
@pytest.mark.parametrize("codec, sr, kbps", [
    ("g711_alaw", 8000, None), ("g711_mulaw", 8000, None), ("g726", 8000, 24), ("gsm_wav49", 8000, None),
    ("mp3", 8000, 16), ("opus", 8000, 12), ("g722", 16000, None), ("msbc", 16000, None), ("opus", 16000, 20),
])
def test_ffmpeg_v2_compensates_the_codec_delay(codec, sr, kbps):
    x = speechlike(1.0, sr=sr, seed=2)
    y = _or_skip(ffmpeg_v2, x, sr, codec, kbps)
    assert len(y) == len(x) and abs(_lag(x, y)) <= 1


@pytest.mark.parametrize("codec, kbps", [("amr_nb", 12.2), ("amr_nb", 4.75), ("amr_wb", 12.65),
                                         ("amr_wb", 23.85), ("opus", 16), ("gsm_fr", None)])
def test_native_codecs_compensate_their_delay(codec, kbps):
    x = speechlike(1.0, sr=native.RATE[codec], seed=3)
    y, _ = _or_skip(native.roundtrip, x, codec, kbps=kbps)
    assert len(y) == len(x) and abs(_lag(x, y)) <= 2


# ---- robustness summaries ------------------------------------------------------------------------------
def test_robustness_summaries_on_a_toy_curve():
    curve = {20: 0.10, 10: 0.20, 5: 0.40, 0: 0.70, -5: 0.90}
    s = robustness.summarize(curve, wer_clean=0.08)
    assert s["wer_avg_0_20"] == pytest.approx(0.35)
    assert s["snr50"] == {"snr_db": pytest.approx(3.3817, abs=1e-3), "censored": None}  # logit-linear 0..5 dB
    assert s["snr_x2"] == {"snr_db": pytest.approx(13.353, abs=1e-3), "censored": None}  # WER 0.16, 10..20 dB
    assert s["werd_10"] == pytest.approx(0.12) and s["werd_0"] == pytest.approx(0.62)
    assert robustness.snr50({20: 0.1, 0: 0.3}) == {"snr_db": 0.0, "censored": "below"}
    assert robustness.snr50({20: 0.6, 0: 0.9}) == {"snr_db": 20.0, "censored": "above"}
    groups = {"noise=ssn|snr_db=20": {"wer": 0.1}, "noise=ssn|snr_db=-5": {"wer": 0.9},
              "noise=babble_v2|snr_db=0": {"wer": 0.5}}
    assert robustness.curves_from_groups(groups) == {"ssn": {20.0: 0.1, -5.0: 0.9}, "babble_v2": {0.0: 0.5}}


def test_kendall_tau_against_the_clean_ranking():
    clean = {"a": 0.1, "b": 0.2, "c": 0.3, "d": 0.4}
    assert robustness.kendall_tau(clean, {k: 2 * v for k, v in clean.items()}) == pytest.approx(1.0)
    assert robustness.kendall_tau(clean, {k: -v for k, v in clean.items()}) == pytest.approx(-1.0)
    curves = {"a": {"ssn": {0: 0.9, 20: 0.15}}, "b": {"ssn": {0: 0.5, 20: 0.25}},
              "c": {"ssn": {0: 0.6, 20: 0.35}}, "d": {"ssn": {0: 0.7, 20: 0.45}}}
    tau = robustness.tau_vs_clean(curves, clean)["ssn"]
    assert tau[20] == pytest.approx(1.0) and tau[0] == pytest.approx(0.0)  # "a" falls from first to last
