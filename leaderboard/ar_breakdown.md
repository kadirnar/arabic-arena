### WER (%) by codec

| Model | amr_nb_12k2 | amr_nb_4k75 | amr_nb_7k4 | g711_alaw | g711_mulaw | g726_16k | g726_32k | gsm_fr | opus_nb_10k |
|---|---|---|---|---|---|---|---|---|---|
| audar-asr-v1-flash | 50.3 | 61.0 | 51.7 | 49.1 | 44.1 | 57.5 | 47.3 | 53.2 | 52.9 |
| audar-asr-v1-turbo | 41.0 | 61.9 | 41.4 | 34.8 | 33.3 | 39.1 | 35.4 | 45.7 | 40.1 |
| cohere-transcribe-03-2026 | 44.0 | 53.7 | 45.7 | 45.0 | 38.6 | 43.8 | 43.8 | 43.8 | 48.2 |
| cohere-transcribe-arabic-07-2026 | 32.1 | 42.4 | 34.3 | 30.3 | 30.7 | 36.2 | 31.1 | 36.5 | 34.0 |
| nvidia-fastconformer-ar-pc | 42.3 | 48.3 | 45.0 | 41.3 | 39.2 | 46.1 | 42.0 | 43.0 | 43.4 |
| qwen3-asr-0.6b | 61.1 | 71.4 | 62.5 | 56.4 | 53.9 | 62.5 | 56.9 | 62.4 | 60.5 |
| qwen3-asr-1.7b | 51.1 | 58.1 | 51.1 | 45.8 | 42.0 | 48.1 | 44.0 | 52.0 | 48.7 |
| whisper-large-v3 | 53.1 | 72.1 | 62.7 | 53.2 | 54.1 | 56.7 | 56.3 | 69.2 | 70.7 |
| whisper-large-v3-turbo | 88.5 | 90.8 | 80.6 | 67.7 | 78.2 | 100.0 | 81.0 | 95.9 | 59.8 |

### WER (%) by noise:callcenter

| Model | babble | cafe | home | hum | misc | office | street | transport |
|---|---|---|---|---|---|---|---|---|
| audar-asr-v1-flash | 72.0 | 56.6 | 59.7 | 55.3 | 56.8 | 56.3 | 51.4 | 47.6 |
| audar-asr-v1-turbo | 63.0 | 45.6 | 47.9 | 42.3 | 46.9 | 42.5 | 40.4 | 37.1 |
| cohere-transcribe-03-2026 | 58.6 | 49.3 | 62.6 | 43.3 | 52.8 | 45.9 | 47.1 | 40.3 |
| cohere-transcribe-arabic-07-2026 | 48.0 | 40.3 | 41.6 | 34.2 | 42.6 | 37.0 | 36.0 | 33.3 |
| nvidia-fastconformer-ar-pc | 58.5 | 48.8 | 53.2 | 46.1 | 52.6 | 46.5 | 45.1 | 39.3 |
| qwen3-asr-0.6b | 75.5 | 67.9 | 71.0 | 65.9 | 66.2 | 64.6 | 62.8 | 58.3 |
| qwen3-asr-1.7b | 66.9 | 61.3 | 58.3 | 53.6 | 53.9 | 52.0 | 50.0 | 43.6 |
| whisper-large-v3 | 79.4 | 66.4 | 86.2 | 69.7 | 73.7 | 68.8 | 62.8 | 57.0 |
| whisper-large-v3-turbo | 116.1 | 91.0 | 121.7 | 111.5 | 75.0 | 93.1 | 61.7 | 83.2 |

### WER (%) by snr:callcenter

| Model | 10–15 dB | 5–10 dB | ≥15 dB |
|---|---|---|---|
| audar-asr-v1-flash | 56.8 | 65.8 | 62.5 |
| audar-asr-v1-turbo | 50.8 | 55.1 | 46.7 |
| cohere-transcribe-03-2026 | 53.2 | 54.2 | 49.2 |
| cohere-transcribe-arabic-07-2026 | 41.0 | 43.3 | 40.9 |
| nvidia-fastconformer-ar-pc | 50.2 | 55.7 | 48.4 |
| qwen3-asr-0.6b | 67.1 | 73.2 | 67.1 |
| qwen3-asr-1.7b | 57.1 | 65.0 | 53.3 |
| whisper-large-v3 | 72.8 | 74.8 | 70.2 |
| whisper-large-v3-turbo | 113.8 | 97.5 | 88.1 |

### WER (%) by packet_loss

| Model | 0% | 1% | 2% | 5% |
|---|---|---|---|---|
| audar-asr-v1-flash | 48.6 | 46.2 | 49.7 | 66.3 |
| audar-asr-v1-turbo | 36.4 | 38.5 | 40.6 | 55.2 |
| cohere-transcribe-03-2026 | 41.4 | 42.8 | 45.2 | 57.9 |
| cohere-transcribe-arabic-07-2026 | 30.6 | 32.6 | 33.4 | 46.3 |
| nvidia-fastconformer-ar-pc | 40.1 | 39.9 | 43.9 | 55.3 |
| qwen3-asr-0.6b | 57.2 | 56.7 | 60.5 | 72.1 |
| qwen3-asr-1.7b | 44.7 | 47.0 | 49.3 | 62.4 |
| whisper-large-v3 | 56.0 | 57.2 | 65.1 | 67.5 |
| whisper-large-v3-turbo | 75.7 | 76.1 | 81.6 | 108.0 |

### WER (%) by dialect

| Model | casablanca:Algeria | casablanca:Egypt | casablanca:Jordan | casablanca:Mauritania | casablanca:Morocco | casablanca:Palestine | casablanca:UAE | casablanca:Yemen | nadi_robust:Algeria | nadi_robust:Egypt | nadi_robust:Jordan | nadi_robust:Mauritania | nadi_robust:Morocco | nadi_robust:Palestine | nadi_robust:UAE | nadi_robust:Yemen |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| audar-asr-v1-flash | 80.9 | 43.1 | 29.5 | 78.1 | 81.3 | 45.4 | 38.4 | 52.2 | 98.3 | 64.3 | 55.2 | 87.6 | 89.9 | 58.2 | 56.6 | 65.4 |
| audar-asr-v1-turbo | 72.9 | 27.8 | 20.1 | 75.5 | 60.8 | 35.4 | 28.4 | 48.1 | 78.3 | 47.6 | 38.5 | 85.8 | 82.8 | 47.5 | 45.0 | 51.0 |
| cohere-transcribe-03-2026 | 78.9 | 35.9 | 25.7 | 86.2 | 79.5 | 39.0 | 42.3 | 53.3 | 85.7 | 54.9 | 50.7 | 94.3 | 90.9 | 48.7 | 68.0 | 68.2 |
| cohere-transcribe-arabic-07-2026 | 61.2 | 21.7 | 20.5 | 83.4 | 52.9 | 28.2 | 31.4 | 43.8 | 72.1 | 35.5 | 44.4 | 87.7 | 68.1 | 39.1 | 52.1 | 54.2 |
| nvidia-fastconformer-ar-pc | 80.3 | 38.4 | 30.1 | 79.8 | 82.8 | 42.8 | 48.3 | 54.6 | 85.7 | 53.9 | 55.8 | 90.5 | 89.5 | 54.7 | 65.9 | 64.5 |
| qwen3-asr-0.6b | 87.7 | 61.8 | 44.9 | 84.3 | 91.0 | 58.5 | 54.3 | 60.9 | 90.7 | 75.0 | 68.7 | 92.9 | 92.1 | 68.4 | 68.4 | 74.4 |
| qwen3-asr-1.7b | 83.9 | 48.2 | 34.0 | 80.6 | 83.2 | 47.7 | 42.7 | 54.3 | 86.9 | 62.9 | 55.2 | 89.1 | 89.7 | 58.0 | 59.0 | 62.4 |
| whisper-large-v3 | 91.5 | 41.1 | 31.8 | 83.8 | 92.8 | 45.1 | 47.1 | 70.5 | 151.6 | 84.6 | 68.6 | 159.6 | 124.6 | 56.3 | 77.4 | 68.0 |
| whisper-large-v3-turbo | 118.5 | 44.1 | 35.2 | 135.2 | 115.3 | 75.7 | 60.2 | 103.2 | 147.0 | 75.2 | 141.4 | 183.5 | 158.6 | 59.4 | 91.9 | 84.1 |
