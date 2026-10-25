### WER (%) by codec

| Model | amr_nb_12k2 | amr_nb_4k75 | amr_nb_7k4 | g711_alaw | g711_mulaw | g726_16k | g726_32k | gsm_fr | opus_nb_10k |
|---|---|---|---|---|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 11.5 | 14.6 | 12.1 | 9.2 | 9.7 | 10.1 | 8.7 | 10.3 | 11.7 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 11.3 | 15.1 | 11.8 | 9.0 | 9.7 | 9.6 | 8.6 | 10.1 | 11.8 |
| canary-1b-v2 | 16.2 | 18.2 | 15.7 | 11.9 | 13.1 | 14.9 | 10.0 | 12.8 | 14.0 |
| cohere-transcribe-03-2026 | 16.6 | 15.1 | 16.1 | 13.5 | 10.7 | 13.2 | 8.9 | 10.9 | 11.6 |
| cohere-transcribe-arabic-07-2026 | 15.1 | 16.1 | 13.5 | 13.0 | 10.8 | 12.8 | 8.8 | 11.1 | 12.3 |
| parakeet-tdt-0.6b-v3 | 14.1 | 17.6 | 15.5 | 11.6 | 12.3 | 14.4 | 10.0 | 13.2 | 14.5 |
| qwen3-asr-0.6b | 15.3 | 19.5 | 17.3 | 12.1 | 12.8 | 15.2 | 10.9 | 14.7 | 15.5 |
| qwen3-asr-1.7b | 12.5 | 15.7 | 13.6 | 10.1 | 10.4 | 12.3 | 8.8 | 11.6 | 12.7 |
| voxtral-mini-4b-realtime-2602 | 22.6 | 28.7 | 23.3 | 19.0 | 19.3 | 28.1 | 17.2 | 22.6 | 23.0 |
| whisper-large-v3 | 15.8 | 18.1 | 16.5 | 12.8 | 13.8 | 17.0 | 9.8 | 14.2 | 15.4 |
| whisper-large-v3-turbo | 16.4 | 19.0 | 21.4 | 13.0 | 17.8 | 17.6 | 11.9 | 14.1 | 22.7 |

### WER (%) by noise:callcenter

| Model | babble | cafe | home | hum | misc | office | street | transport |
|---|---|---|---|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 16.0 | 16.4 | 8.6 | 9.1 | 10.9 | 12.2 | 10.9 | 10.4 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 16.0 | 16.2 | 8.9 | 8.4 | 11.0 | 11.8 | 10.9 | 10.4 |
| canary-1b-v2 | 25.7 | 19.4 | 10.8 | 12.6 | 14.5 | 15.0 | 13.4 | 13.5 |
| cohere-transcribe-03-2026 | 27.2 | 14.7 | 8.7 | 10.0 | 12.3 | 13.8 | 11.5 | 10.8 |
| cohere-transcribe-arabic-07-2026 | 25.9 | 15.5 | 8.8 | 9.4 | 12.7 | 13.2 | 12.0 | 10.3 |
| parakeet-tdt-0.6b-v3 | 24.4 | 18.6 | 10.9 | 12.3 | 13.7 | 15.3 | 13.6 | 12.4 |
| qwen3-asr-0.6b | 26.2 | 19.1 | 11.6 | 12.6 | 17.3 | 15.8 | 15.7 | 14.5 |
| qwen3-asr-1.7b | 20.8 | 16.3 | 9.4 | 9.5 | 13.8 | 12.4 | 12.3 | 10.7 |
| voxtral-mini-4b-realtime-2602 | 40.1 | 35.5 | 23.4 | 21.5 | 30.2 | 23.6 | 26.8 | 25.2 |
| whisper-large-v3 | 25.9 | 20.0 | 11.5 | 14.4 | 15.8 | 16.3 | 16.4 | 14.7 |
| whisper-large-v3-turbo | 30.4 | 20.3 | 11.5 | 13.7 | 15.9 | 25.0 | 16.2 | 15.5 |

### WER (%) by snr:callcenter

| Model | 10–15 dB | 5–10 dB | ≥15 dB |
|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 11.9 | 16.6 | 11.8 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 11.9 | 16.4 | 11.8 |
| canary-1b-v2 | 16.7 | 26.4 | 14.6 |
| cohere-transcribe-03-2026 | 13.9 | 29.3 | 12.3 |
| cohere-transcribe-arabic-07-2026 | 13.9 | 27.5 | 12.4 |
| parakeet-tdt-0.6b-v3 | 16.3 | 24.2 | 15.0 |
| qwen3-asr-0.6b | 17.8 | 26.3 | 15.9 |
| qwen3-asr-1.7b | 14.0 | 21.1 | 12.5 |
| voxtral-mini-4b-realtime-2602 | 28.6 | 40.7 | 27.7 |
| whisper-large-v3 | 18.3 | 25.7 | 16.2 |
| whisper-large-v3-turbo | 21.5 | 31.8 | 16.7 |

### WER (%) by packet_loss

| Model | 0% | 1% | 2% | 5% |
|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 9.5 | 11.0 | 9.8 | 15.8 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 9.4 | 11.1 | 9.6 | 15.9 |
| canary-1b-v2 | 12.4 | 14.1 | 12.3 | 22.1 |
| cohere-transcribe-03-2026 | 12.8 | 11.9 | 10.5 | 19.3 |
| cohere-transcribe-arabic-07-2026 | 11.0 | 11.3 | 13.2 | 19.7 |
| parakeet-tdt-0.6b-v3 | 11.5 | 13.8 | 11.9 | 22.8 |
| qwen3-asr-0.6b | 12.3 | 15.1 | 13.0 | 23.7 |
| qwen3-asr-1.7b | 10.1 | 12.1 | 10.3 | 19.2 |
| voxtral-mini-4b-realtime-2602 | 18.7 | 21.3 | 20.3 | 36.7 |
| whisper-large-v3 | 12.7 | 14.9 | 13.2 | 23.9 |
| whisper-large-v3-turbo | 15.0 | 15.5 | 13.5 | 32.6 |
