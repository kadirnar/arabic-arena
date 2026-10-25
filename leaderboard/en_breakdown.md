### WER (%) by codec

| Model | amr_nb_12k2 | amr_nb_4k75 | amr_nb_7k4 | g711_alaw | g711_mulaw | g726_16k | g726_32k | gsm_fr | opus_nb_10k |
|---|---|---|---|---|---|---|---|---|---|
| qwen3-asr-1.7b | 12.5 | 15.7 | 13.6 | 10.1 | 10.4 | 12.3 | 8.8 | 11.6 | 12.7 |

### WER (%) by noise:callcenter

| Model | babble | cafe | home | hum | misc | office | street | transport |
|---|---|---|---|---|---|---|---|---|
| qwen3-asr-1.7b | 20.8 | 16.3 | 9.4 | 9.5 | 13.8 | 12.4 | 12.3 | 10.7 |

### WER (%) by snr:callcenter

| Model | 10–15 dB | 5–10 dB | ≥15 dB |
|---|---|---|---|
| qwen3-asr-1.7b | 14.0 | 21.1 | 12.5 |

### WER (%) by packet_loss

| Model | 0% | 1% | 2% | 5% |
|---|---|---|---|---|
| qwen3-asr-1.7b | 10.1 | 12.1 | 10.3 | 19.2 |
