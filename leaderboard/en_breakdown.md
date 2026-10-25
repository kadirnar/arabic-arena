### WER (%) by codec

| Model | amr_nb_12k2 | amr_nb_4k75 | amr_nb_7k4 | g711_alaw | g711_mulaw | g726_16k | g726_32k | gsm_fr | opus_nb_10k |
|---|---|---|---|---|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 11.5 | 14.6 | 12.1 | 9.2 | 9.7 | 10.1 | 8.7 | 10.3 | 11.7 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 11.3 | 15.1 | 11.8 | 9.0 | 9.7 | 9.6 | 8.6 | 10.1 | 11.8 |
| qwen3-asr-1.7b | 12.5 | 15.7 | 13.6 | 10.1 | 10.4 | 12.3 | 8.8 | 11.6 | 12.7 |
| whisper-large-v3 | 15.8 | 18.1 | 16.5 | 12.8 | 13.8 | 17.0 | 9.8 | 14.2 | 15.4 |

### WER (%) by noise:callcenter

| Model | babble | cafe | home | hum | misc | office | street | transport |
|---|---|---|---|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 16.0 | 16.4 | 8.6 | 9.1 | 10.9 | 12.2 | 10.9 | 10.4 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 16.0 | 16.2 | 8.9 | 8.4 | 11.0 | 11.8 | 10.9 | 10.4 |
| qwen3-asr-1.7b | 20.8 | 16.3 | 9.4 | 9.5 | 13.8 | 12.4 | 12.3 | 10.7 |
| whisper-large-v3 | 25.9 | 20.0 | 11.5 | 14.4 | 15.8 | 16.3 | 16.4 | 14.7 |

### WER (%) by snr:callcenter

| Model | 10–15 dB | 5–10 dB | ≥15 dB |
|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 11.9 | 16.6 | 11.8 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 11.9 | 16.4 | 11.8 |
| qwen3-asr-1.7b | 14.0 | 21.1 | 12.5 |
| whisper-large-v3 | 18.3 | 25.7 | 16.2 |

### WER (%) by packet_loss

| Model | 0% | 1% | 2% | 5% |
|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 9.5 | 11.0 | 9.8 | 15.8 |
| arabic-stt-qwen3-asr-1.7b-best-task06 | 9.4 | 11.1 | 9.6 | 15.9 |
| qwen3-asr-1.7b | 10.1 | 12.1 | 10.3 | 19.2 |
| whisper-large-v3 | 12.7 | 14.9 | 13.2 | 23.9 |
