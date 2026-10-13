# Methodology

## Test-set construction
1. Load the test split of the source dataset (only that split's parquet files are downloaded).
2. Keep rows with a non-empty reference and 1–30 s of audio (the 30 s cap keeps every model in
   its short-form regime; long-form is a separate future track).
3. Rank the rows by `sha256(source + "|" + row_uid)` and keep the first `n` (1,000 per set, split
   evenly across configs for multi-country sets). This selection is deterministic and
   unbiased, and new rows in the source do not reshuffle it.
4. Convert to 16 kHz mono FLAC. Each set's manifest records the source revision and the selected ids.

## Degraded conditions
Each degraded utterance is generated with `seed = sha256(lang | utterance_id | condition)`. The
parameters used are stored in `meta.degradation`.

| Condition | Chain |
|---|---|
| `noisy` | background noise at 0–15 dB SNR. Categories: babble, street, cafe, transport, office, home, outdoor, misc, colored, hum |
| `telephony` | resample to 8 kHz → band-pass (250–400 Hz to 3.2–3.5 kHz) → line level −26 dBFS ± gain (−12…+6 dB) → 10% chance of clipping → codec → packet loss (0–2%) |
| `callcenter` | 40% chance of room reverb (RT60 0.2–0.7 s) → noise at 5–20 dB SNR (babble 40%, office, transport, street, cafe, home, hum, misc) → the telephony chain with 0–5% packet loss |

Codecs and their sampling weights:

| Codec | Weight |
|---|---|
| G.711 μ-law | 22% |
| G.711 A-law | 18% |
| GSM-FR | 12% |
| AMR-NB 12.2k | 14% |
| AMR-NB 7.4k | 10% |
| AMR-NB 4.75k | 6% |
| G.726 32k | 6% |
| G.726 16k | 4% |
| Opus-NB 10k | 8% |

All codecs run through ffmpeg, and the codec's algorithmic delay is compensated.

Packet loss uses Gilbert-style bursts on 20 ms frames, with concealment by attenuated
repetition of the previous frame.

Models always receive 16 kHz input. 8 kHz telephony audio is upsampled, as a deployed system
would do.

## Inference
- The language is forced (Whisper `ar`, Qwen `Arabic`, Cohere `ar`, Seamless `arb`, MMS `ara`,
  omniASR `arb_Arab`).
- Decoding is greedy (`num_beams=1`, `do_sample=False`), in bf16/fp16 with SDPA attention.
- Batches are sorted by length.
- Promptable LLMs get a verbatim-transcription prompt.

## Scoring
- References and hypotheses pass through the same normalizer.
  - **Arabic:** NFKC, then remove diacritics, tatweel and Quranic marks. Unify أ/إ/آ/ٱ→ا,
    ؤ→و, ئ→ي, ى→ي, ة→ه, پ→ب, ڤ→ف, and delete ء. Convert digits to ASCII, turn punctuation
    into spaces, lowercase Latin text, remove `[...]`/`<...>` annotation tags, and attach a
    standalone و to the next word.
  - **English:** the Whisper English normalizer.
- **WER and CER** are computed at corpus level with jiwer: total errors divided by total
  reference words (or characters, spaces included). An empty hypothesis counts as all deletions.
- **Track score:** the unweighted mean over the sets in the track.
- **Arena score:** the weighted mean of the track scores (weights are in
  `configs/suites/<lang>.yaml`).
- **RTFx:** audio seconds divided by transcription seconds, over all sets, after a warm-up.
  Model loading is excluded.

## Known limitations
- Number formats are not verbalized: "2024" and "ألفين وأربعة وعشرين" do not match.
- Reference quality varies. SADA and MGB-2 use light supervision, and MASC is weakly
  normalised. A cleaning pass is on the roadmap.
- Contamination: some fine-tunes (e.g. Lemura, oddadmix) train on the train splits of these
  corpora. They are flagged rather than excluded.
- The telephony tracks are simulated. Real call recordings are a roadmap priority.
