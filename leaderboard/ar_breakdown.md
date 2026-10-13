### WER (%) by codec

| Model | amr_nb_12k2 | amr_nb_4k75 | amr_nb_7k4 | g711_alaw | g711_mulaw | g726_16k | g726_32k | gsm_fr | opus_nb_10k |
|---|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 32.1 | 42.4 | 34.3 | 30.3 | 30.7 | 36.2 | 31.1 | 36.5 | 34.0 |
| qwen3-asr-1.7b | 43.9 | 47.5 | 42.6 | 34.8 | 33.4 | 36.2 | 35.6 | 39.9 | 38.9 |

### WER (%) by noise:callcenter

| Model | babble | cafe | home | hum | misc | office | street | transport |
|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 48.0 | 40.3 | 41.6 | 34.2 | 42.6 | 37.0 | 36.0 | 33.3 |
| qwen3-asr-1.7b | 48.6 | 39.1 | 35.9 | 36.9 | 33.2 | 37.0 | 32.1 | 28.6 |

### WER (%) by snr:callcenter

| Model | 10–15 dB | 5–10 dB | ≥15 dB |
|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 41.0 | 43.3 | 40.9 |
| qwen3-asr-1.7b | 43.7 | 43.7 | 33.3 |

### WER (%) by packet_loss

| Model | 0% | 1% | 2% | 5% |
|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 30.6 | 32.6 | 33.4 | 46.3 |
| qwen3-asr-1.7b | 37.7 | 35.3 | 38.4 | 51.3 |

### WER (%) by dialect

| Model | casablanca:Algeria | casablanca:Egypt | casablanca:Jordan | casablanca:Mauritania | casablanca:Morocco | casablanca:Palestine | casablanca:UAE | casablanca:Yemen | fleurs_ar:ar_eg | nadi_robust:Algeria | nadi_robust:Egypt | nadi_robust:Jordan | nadi_robust:Mauritania | nadi_robust:Morocco | nadi_robust:Palestine | nadi_robust:UAE | nadi_robust:Yemen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| cohere-transcribe-arabic-07-2026 | 61.2 | 21.7 | 20.5 | 83.4 | 52.9 | 28.2 | 31.4 | 43.8 | 4.8 | 72.1 | 35.5 | 44.4 | 87.7 | 68.1 | 39.1 | 52.1 | 54.2 |
| qwen3-asr-1.7b | 83.9 | 48.2 | 34.0 | 80.6 | 83.2 | 47.7 | 42.7 | 54.3 | 9.2 | 86.9 | 62.9 | 55.2 | 89.1 | 89.7 | 58.0 | 59.0 | 62.4 |
