### WER (%) by codec

| Model | amr_nb_12k2 | amr_nb_4k75 | amr_nb_7k4 | g711_alaw | g711_mulaw | g726_16k | g726_32k | gsm_fr | opus_nb_10k |
|---|---|---|---|---|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 11.5 | 14.6 | 12.1 | 9.2 | 9.7 | 10.1 | 8.7 | 10.3 | 11.7 |
| qwen3-asr-1.7b | 12.5 | 15.7 | 13.6 | 10.1 | 10.4 | 12.3 | 8.8 | 11.6 | 12.7 |

### WER (%) by noise:callcenter

| Model | babble | cafe | home | hum | misc | office | street | transport |
|---|---|---|---|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 16.0 | 16.4 | 8.6 | 9.1 | 10.9 | 12.2 | 10.9 | 10.4 |
| qwen3-asr-1.7b | 20.8 | 16.3 | 9.4 | 9.5 | 13.8 | 12.4 | 12.3 | 10.7 |

### WER (%) by snr:callcenter

| Model | 10–15 dB | 5–10 dB | ≥15 dB |
|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 11.9 | 16.6 | 11.8 |
| qwen3-asr-1.7b | 14.0 | 21.1 | 12.5 |

### WER (%) by packet_loss

| Model | 0% | 1% | 2% | 5% |
|---|---|---|---|---|
| arabic-stt-qwen3-asr-1.7b-best-grpo2 | 9.5 | 11.0 | 9.8 | 15.8 |
| qwen3-asr-1.7b | 10.1 | 12.1 | 10.3 | 19.2 |
