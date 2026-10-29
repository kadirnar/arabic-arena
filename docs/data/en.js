window.ARENA_DATA = window.ARENA_DATA || {};
window.ARENA_DATA['en'] = {
 "language": "en",
 "tracks": {
  "clean": [
   "librispeech_clean/clean",
   "librispeech_other/clean",
   "fleurs_en/clean",
   "common_voice_en/clean",
   "voxpopuli_en/clean",
   "earnings22/clean",
   "gigaspeech/clean",
   "spgispeech/clean",
   "ami_sdm/clean"
  ],
  "accented": [
   "edacc/clean"
  ],
  "noisy": [
   "urgent2024/clean",
   "librispeech_clean/noisy",
   "fleurs_en/noisy",
   "voxpopuli_en/noisy",
   "earnings22/noisy"
  ],
  "telephony": [
   "minds14_tel/clean",
   "vystadial_voip/clean",
   "librispeech_clean/telephony",
   "fleurs_en/telephony",
   "voxpopuli_en/telephony",
   "earnings22/telephony",
   "common_voice_en/telephony",
   "gigaspeech/telephony"
  ],
  "callcenter": [
   "librispeech_clean/callcenter",
   "fleurs_en/callcenter",
   "voxpopuli_en/callcenter",
   "earnings22/callcenter",
   "common_voice_en/callcenter",
   "gigaspeech/callcenter"
  ]
 },
 "extra_tracks": {
  "telephony_v2": [
   "librispeech_clean/telephony_v2",
   "fleurs_en/telephony_v2",
   "voxpopuli_en/telephony_v2",
   "earnings22/telephony_v2",
   "common_voice_en/telephony_v2",
   "gigaspeech/telephony_v2"
  ],
  "callcenter_v2": [
   "librispeech_clean/callcenter_v2",
   "fleurs_en/callcenter_v2",
   "voxpopuli_en/callcenter_v2",
   "earnings22/callcenter_v2",
   "common_voice_en/callcenter_v2",
   "gigaspeech/callcenter_v2"
  ],
  "sweep": [
   "librispeech_clean/sweep",
   "fleurs_en/sweep"
  ],
  "padded": [
   "librispeech_clean/padded",
   "fleurs_en/padded",
   "voxpopuli_en/padded",
   "common_voice_en/padded"
  ]
 },
 "weights": {
  "clean": 0.35,
  "accented": 0.05,
  "noisy": 0.15,
  "telephony": 0.225,
  "callcenter": 0.225
 },
 "sets": {
  "librispeech_clean": {
   "dialect": "US/UK read",
   "domain": "audiobooks",
   "source": "openslr/librispeech_asr",
   "track": "clean",
   "license": "CC-BY-4.0"
  },
  "librispeech_other": {
   "dialect": "US/UK read (hard)",
   "domain": "audiobooks",
   "source": "openslr/librispeech_asr",
   "track": "clean",
   "license": "CC-BY-4.0"
  },
  "fleurs_en": {
   "dialect": "various",
   "domain": "read wikipedia",
   "source": "google/fleurs",
   "track": "clean",
   "license": "CC-BY-4.0"
  },
  "common_voice_en": {
   "dialect": "global accents",
   "domain": "read (crowd-sourced)",
   "source": "hf-audio/open-asr-leaderboard",
   "track": "clean",
   "license": "CC0-1.0"
  },
  "voxpopuli_en": {
   "dialect": "European accents",
   "domain": "parliament",
   "source": "hf-audio/open-asr-leaderboard",
   "track": "clean",
   "license": "CC0-1.0"
  },
  "earnings22": {
   "dialect": "global accents",
   "domain": "earnings calls",
   "source": "hf-audio/open-asr-leaderboard",
   "track": "clean",
   "license": "CC-BY-SA-4.0"
  },
  "gigaspeech": {
   "dialect": "US",
   "domain": "podcasts / youtube",
   "source": "hf-audio/open-asr-leaderboard",
   "track": "clean",
   "license": "GigaSpeech terms"
  },
  "spgispeech": {
   "dialect": "US",
   "domain": "finance calls",
   "source": "hf-audio/open-asr-leaderboard",
   "track": "clean",
   "license": "Kensho SPGISpeech terms"
  },
  "ami_sdm": {
   "dialect": "various",
   "domain": "meetings",
   "source": "hf-audio/open-asr-leaderboard",
   "track": "clean",
   "license": "CC-BY-4.0"
  },
  "edacc": {
   "dialect": "40+ accents",
   "domain": "conversation",
   "source": "edinburghcstr/edacc",
   "track": "accented",
   "license": "CC-BY-SA-4.0"
  },
  "urgent2024": {
   "dialect": "various",
   "domain": "noisy (-5..20 dB)",
   "source": "hf-audio/open-asr-leaderboard",
   "track": "noisy",
   "license": "mixed"
  },
  "minds14_tel": {
   "dialect": "US",
   "domain": "banking IVR calls (8 kHz)",
   "source": "BrunoHays/minds14-telephony-en-us",
   "track": "telephony",
   "license": "CC-BY-4.0"
  },
  "vystadial_voip": {
   "dialect": "various",
   "domain": "VoIP dialogue system",
   "source": "BrunoHays/vystadial-telephony-en",
   "track": "telephony",
   "license": "CC-BY-SA-3.0"
  }
 },
 "models": [
  {
   "model": "cohere-transcribe-ar-soup-v4c70",
   "hf_id": "https://huggingface.co/Cohere-AR/cohere-transcribe-ar-soup-v4c70",
   "params_b": 2.07,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.013980387226552678,
     "cer": 0.004242918976383932,
     "rtfx": 198.96,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.024097059152409707,
     "cer": 0.0087995108956723,
     "rtfx": 79.41,
     "n": 1000
    },
    "gigaspeech/clean": {
     "wer": 0.08482816858159113,
     "cer": 0.042369584438549955,
     "rtfx": 358.48,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02541782729805014,
     "cer": 0.009954871250331829,
     "rtfx": 236.09,
     "n": 300
    },
    "librispeech_clean/telephony": {
     "wer": 0.01915041782729805,
     "cer": 0.005740642421024688,
     "rtfx": 395.37,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08399516574585636,
     "cer": 0.04135069881320774,
     "rtfx": 539.09,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.04961699164345404,
     "cer": 0.02578311653835944,
     "rtfx": 571.19,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.12327348066298342,
     "cer": 0.07011935933621247,
     "rtfx": 795.86,
     "n": 300
    },
    "fleurs_en/clean": {
     "wer": 0.05707682610827089,
     "cer": 0.03287991524288515,
     "rtfx": 508.15,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07155826124105522,
     "cer": 0.03594934760016935,
     "rtfx": 639.48,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.05804024349002367,
     "cer": 0.03448706826836835,
     "rtfx": 719.86,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.07746211092400457,
     "cer": 0.04844452582962013,
     "rtfx": 608.37,
     "n": 997
    },
    "spgispeech/clean": {
     "wer": 0.021767097205783976,
     "cer": 0.010109082558273051,
     "rtfx": 767.5,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08009280742459397,
     "cer": 0.041673148724331054,
     "rtfx": 518.62,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.13760763450885757,
     "cer": 0.09859353023909986,
     "rtfx": 702.58,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.09429387359232717,
     "cer": 0.06023369693004427,
     "rtfx": 776.34,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.012970548078798518,
     "cer": 0.00788540989451167,
     "rtfx": 753.91,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.05411130367802811,
     "cer": 0.02287036334673443,
     "rtfx": 703.49,
     "n": 1000
    },
    "fleurs_en/noisy": {
     "wer": 0.07462686567164178,
     "cer": 0.04388565378507147,
     "rtfx": 653.83,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.06888567293777134,
     "cer": 0.03936496842315469,
     "rtfx": 751.45,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10109717868338558,
     "cer": 0.06353071389042612,
     "rtfx": 667.17,
     "n": 298
    },
    "fleurs_en/telephony": {
     "wer": 0.060615290892476394,
     "cer": 0.03459502382212811,
     "rtfx": 842.75,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.06801736613603473,
     "cer": 0.03881580589600859,
     "rtfx": 862.59,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.07817398119122257,
     "cer": 0.0496956281128943,
     "rtfx": 720.26,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11557093425605536,
     "cer": 0.05879799044842771,
     "rtfx": 847.86,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.12244897959183673,
     "cer": 0.07183695076760191,
     "rtfx": 847.09,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.0930535455861071,
     "cer": 0.052619754873817426,
     "rtfx": 865.41,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.13891065830721003,
     "cer": 0.08928242021767202,
     "rtfx": 716.85,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2681660899653979,
     "cer": 0.16653228307386964,
     "rtfx": 1003.05,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 633.02,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.05432255126158731,
     "cer": 0.028772789170472587,
     "done": 9,
     "total": 9
    },
    "accented": {
     "wer": 0.13760763450885757,
     "cer": 0.09859353023909986,
     "done": 1,
     "total": 1
    },
    "noisy": {
     "wer": 0.0728642836366352,
     "cer": 0.043393980855805675,
     "done": 5,
     "total": 5
    },
    "telephony": {
     "wer": 0.06157562597572126,
     "cer": 0.03246894534436715,
     "done": 8,
     "total": 8
    },
    "callcenter": {
     "wer": 0.13257829095949822,
     "cer": 0.07936231413458882,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.15",
    "host": "86c83ed0473a",
    "torch": "2.13.0+cu130",
    "gpu": "NVIDIA H100 NVL",
    "transformers": "5.17.0"
   },
   "finetune_of": "Cohere-AR/cohere-transcribe-ar-rl-v4c",
   "in_domain": [
    "earnings22"
   ],
   "notes": "Cohere-AR weight average 0.7 x cohere-transcribe-ar-rl-v4c + 0.3 x cohere-transcribe-ar-rl-r4-step-800 (commit 857dadf087; the main of Cohere-AR/cohere-transcribe-ar-rl since 2026-10-29), weights gated on the Hub; run with the card's prompt (<|pnc|>, language forced). Both SFT bases name Earnings-22 among their training sources. Run on 4 x H100 NVL (the other entries on an A10), so its RTFx is not comparable; mgb2, casablanca and mgb3_egy rebuilt with ffmpeg 6.1.1, libopencore-amrnb 0.1.6 and libopus 1.4",
   "training_data": "undisclosed",
   "hallucination_rate": 0.48333333333333334,
   "inserted_wpm": 81.03,
   "arena_wer": 0.08050754852291811,
   "arena_cer": 0.04667128323275634,
   "arena_ci": null,
   "rank_range": null,
   "rtfx": 427.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.48333333333333334,
    "halluc_3plus": 0.45666666666666667,
    "halluc_3plus_ci": [
     0.4012,
     0.51323
    ],
    "inserted_wpm": 81.03496347515754,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.010208700025144582,
      "wer_uncapped": 0.010208700025144582,
      "cer": 0.004128742757352516,
      "av_wer": null,
      "strict_wer": 0.013980387226552678,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0011566507417651497,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.02035111260203511,
      "wer_uncapped": 0.02035111260203511,
      "cer": 0.009597108820773657,
      "av_wer": null,
      "strict_wer": 0.024041149502404116,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0019568377501956837,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07566723815860181,
      "wer_uncapped": 0.07566723815860181,
      "cer": 0.0416963827684146,
      "av_wer": null,
      "strict_wer": 0.08482816858159113,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017758898641213952,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.020891364902506964,
      "wer_uncapped": 0.020891364902506964,
      "cer": 0.010043738862789567,
      "av_wer": null,
      "strict_wer": 0.02541782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.013927576601671309,
      "wer_uncapped": 0.013927576601671309,
      "cer": 0.005750850477887575,
      "av_wer": null,
      "strict_wer": 0.01915041782729805,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001392757660167131,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07294544198895028,
      "wer_uncapped": 0.07294544198895028,
      "cer": 0.0406480117820324,
      "av_wer": null,
      "strict_wer": 0.08399516574585636,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01648825966850829,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.04717966573816156,
      "wer_uncapped": 0.04752785515320334,
      "cer": 0.027984772395917706,
      "av_wer": null,
      "strict_wer": 0.049268802228412255,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006093314763231198,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.11334599447513811,
      "wer_uncapped": 0.11334599447513811,
      "cer": 0.07210183042289081,
      "av_wer": null,
      "strict_wer": 0.12327348066298342,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019164364640883978,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05161425870158975,
      "wer_uncapped": 0.05161425870158975,
      "cer": 0.03283930787763744,
      "av_wer": null,
      "strict_wer": 0.05707682610827089,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022900763358778626,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.06600448574174944,
      "wer_uncapped": 0.06824735661646908,
      "cer": 0.037409114887956146,
      "av_wer": null,
      "strict_wer": 0.06931539036633558,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00758303962405212,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.054827527899898545,
      "wer_uncapped": 0.054827527899898545,
      "cer": 0.03480761427588518,
      "av_wer": null,
      "strict_wer": 0.05804024349002367,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013358133243151844,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07311641045140964,
      "wer_uncapped": 0.07327937421913194,
      "cer": 0.0489207032119279,
      "av_wer": null,
      "strict_wer": 0.07729914715628225,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01922972459123255,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.019451448566870786,
      "wer_uncapped": 0.019451448566870786,
      "cer": 0.01021355617455896,
      "av_wer": null,
      "strict_wer": 0.021767097205783976,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003936602686152421,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06645011600928075,
      "wer_uncapped": 0.06700696055684455,
      "cer": 0.0404178674351585,
      "av_wer": null,
      "strict_wer": 0.07953596287703016,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014477958236658933,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.12033126748203807,
      "wer_uncapped": 0.13239730159600724,
      "cer": 0.09086102053406186,
      "av_wer": null,
      "strict_wer": 0.12548675478527943,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031645916744364615,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.0891211810981195,
      "wer_uncapped": 0.09095317635648473,
      "cer": 0.061662098180912034,
      "av_wer": null,
      "strict_wer": 0.09246187833396195,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.015194784201735007,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.011995318899941486,
      "wer_uncapped": 0.011995318899941486,
      "cer": 0.00800273777871377,
      "av_wer": null,
      "strict_wer": 0.012970548078798518,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003998439633313829,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04024648565376468,
      "wer_uncapped": 0.04101675332177932,
      "cer": 0.02160285031344428,
      "av_wer": null,
      "strict_wer": 0.05314846909300982,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009628345850182938,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.0696009747182455,
      "wer_uncapped": 0.0696009747182455,
      "cer": 0.04544012185060608,
      "av_wer": null,
      "strict_wer": 0.07462686567164178,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019646664636003654,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06599131693198264,
      "wer_uncapped": 0.06599131693198264,
      "cer": 0.03990912080356342,
      "av_wer": null,
      "strict_wer": 0.06888567293777134,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016208393632416787,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09482758620689655,
      "wer_uncapped": 0.0954153605015674,
      "cer": 0.0652047177003453,
      "av_wer": null,
      "strict_wer": 0.10050940438871474,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019004702194357365,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.05558939993908011,
      "wer_uncapped": 0.05558939993908011,
      "cer": 0.03487338960462017,
      "av_wer": null,
      "strict_wer": 0.060615290892476394,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019951264087724643,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06526772793053545,
      "wer_uncapped": 0.06526772793053545,
      "cer": 0.03907207557322651,
      "av_wer": null,
      "strict_wer": 0.06801736613603473,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017366136034732273,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07268808777429467,
      "wer_uncapped": 0.07288401253918496,
      "cer": 0.05036100273554868,
      "av_wer": null,
      "strict_wer": 0.07797805642633229,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019984326018808778,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.11245674740484429,
      "wer_uncapped": 0.11245674740484429,
      "cer": 0.06413951082538978,
      "av_wer": null,
      "strict_wer": 0.11557093425605536,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00726643598615917,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.11742308863844045,
      "wer_uncapped": 0.11742308863844045,
      "cer": 0.07536333058323284,
      "av_wer": null,
      "strict_wer": 0.12244897959183673,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281754492841913,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.08986975397973951,
      "wer_uncapped": 0.08986975397973951,
      "cer": 0.05401931182924277,
      "av_wer": null,
      "strict_wer": 0.0930535455861071,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019681620839363242,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.132641065830721,
      "wer_uncapped": 0.13420846394984326,
      "cer": 0.09336741557917395,
      "av_wer": null,
      "strict_wer": 0.13734326018808776,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02664576802507837,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.25017301038062284,
      "wer_uncapped": 0.26539792387543254,
      "cer": 0.17475799896549177,
      "av_wer": null,
      "strict_wer": 0.2529411764705882,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03183391003460208,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.04025389152820105,
      "cer": 0.02289401436200887,
      "wer_arith": 0.048632366461842276,
      "done": 9,
      "total": 9
     },
     "accented": {
      "wer": 0.1203312674820381,
      "cer": 0.09086102053406186,
      "wer_arith": 0.12033126748203807,
      "done": 1,
      "total": 1
     },
     "noisy": {
      "wer": 0.060505786727394685,
      "cer": 0.0374059660648889,
      "wer_arith": 0.06808648477155023,
      "done": 5,
      "total": 5
     },
     "telephony": {
      "wer": 0.044192044075668804,
      "cer": 0.025483713295413133,
      "wer_arith": 0.05563959827413528,
      "done": 8,
      "total": 8
     },
     "callcenter": {
      "wer": 0.1110216705261258,
      "cer": 0.07153769346980837,
      "wer_arith": 0.1251054298404706,
      "done": 6,
      "total": 6
     }
    },
    "arena": 0.057994977243271566,
    "arena_arith": 0.07391849567726555,
    "arena_cer": 0.034949596374943756,
    "arena_strict": 0.06393886795322708,
    "zero_shot": 0.05406168073929901,
    "arena_real": 0.04411525239110504,
    "exposure": 0.1345,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 1
   }
  },
  {
   "model": "cohere-transcribe-ar-rl-r4-step-800",
   "hf_id": "https://huggingface.co/Cohere-AR/cohere-transcribe-ar-rl/tree/r4-step-800",
   "params_b": 2.07,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.014131254714609002,
     "cer": 0.0043283468752373,
     "rtfx": 72.83,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.024712065302471206,
     "cer": 0.009006943534652168,
     "rtfx": 48.15,
     "n": 1000
    },
    "gigaspeech/clean": {
     "wer": 0.08485375777271681,
     "cer": 0.042364532019704436,
     "rtfx": 269.38,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.024895543175487464,
     "cer": 0.01008760286700292,
     "rtfx": 159.7,
     "n": 300
    },
    "librispeech_clean/telephony": {
     "wer": 0.018802228412256268,
     "cer": 0.005840191133528006,
     "rtfx": 385.11,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0832182320441989,
     "cer": 0.0413166933043153,
     "rtfx": 464.13,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.04944289693593315,
     "cer": 0.0252190071675073,
     "rtfx": 733.63,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.12422306629834254,
     "cer": 0.07018737035399734,
     "rtfx": 782.63,
     "n": 300
    },
    "fleurs_en/clean": {
     "wer": 0.05854751733314658,
     "cer": 0.033634935518832884,
     "rtfx": 513.26,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07262629499092171,
     "cer": 0.0356414302759709,
     "rtfx": 660.33,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.058124788637132226,
     "cer": 0.034303274470306275,
     "rtfx": 725.72,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.077516432179912,
     "cer": 0.048546257299232946,
     "rtfx": 565.72,
     "n": 997
    },
    "spgispeech/clean": {
     "wer": 0.022153038645602842,
     "cer": 0.010329544149730164,
     "rtfx": 769.72,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08129930394431555,
     "cer": 0.04283991910392035,
     "rtfx": 504.64,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.13815609060494707,
     "cer": 0.09885138302859822,
     "rtfx": 676.54,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.0928929360418126,
     "cer": 0.059252292499412176,
     "rtfx": 753.72,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.012580456407255705,
     "cer": 0.007633747876601724,
     "rtfx": 726.07,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.053533602927017136,
     "cer": 0.023477205491921414,
     "rtfx": 683.72,
     "n": 1000
    },
    "fleurs_en/noisy": {
     "wer": 0.07310386841303686,
     "cer": 0.04335627316040233,
     "rtfx": 621.86,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.0678726483357453,
     "cer": 0.038666034297696016,
     "rtfx": 712.51,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10148902821316615,
     "cer": 0.06353071389042612,
     "rtfx": 625.07,
     "n": 298
    },
    "fleurs_en/telephony": {
     "wer": 0.0628997867803838,
     "cer": 0.03411858125992589,
     "rtfx": 780.48,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0678726483357453,
     "cer": 0.038915653628216966,
     "rtfx": 796.47,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.07660658307210032,
     "cer": 0.0484781405644715,
     "rtfx": 679.44,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11280276816608996,
     "cer": 0.05737145692488991,
     "rtfx": 796.68,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.12640877246420956,
     "cer": 0.07368978295394389,
     "rtfx": 790.83,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.09276410998552823,
     "cer": 0.0527944884051821,
     "rtfx": 815.81,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.13891065830721003,
     "cer": 0.0898358236487733,
     "rtfx": 675.77,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2688581314878893,
     "cer": 0.16553991192706072,
     "rtfx": 921.49,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 716.6,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.05488493928009199,
     "cer": 0.028999464805287492,
     "done": 9,
     "total": 9
    },
    "accented": {
     "wer": 0.13815609060494707,
     "cer": 0.09885138302859822,
     "done": 1,
     "total": 1
    },
    "noisy": {
     "wer": 0.07205080483584966,
     "cer": 0.04297858334298792,
     "done": 5,
     "total": 5
    },
    "telephony": {
     "wer": 0.061039538268130925,
     "cer": 0.03214395877298384,
     "done": 8,
     "total": 8
    },
    "callcenter": {
     "wer": 0.13343460591318546,
     "cer": 0.07954439740941077,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.15",
    "host": "86c83ed0473a",
    "torch": "2.13.0+cu130",
    "gpu": "NVIDIA H100 NVL",
    "transformers": "5.17.0"
   },
   "finetune_of": "Cohere-AR/cohere-transcribe-ar-sft",
   "in_domain": [
    "earnings22"
   ],
   "notes": "Cohere-AR MWER post-training (decoder only) of cohere-transcribe-ar-sft at step 10000: rounds 1, 2 and 4 of 800 steps each, snapshot round 4 step 800 (branch `r4-step-800`, commit beba661319; the repo's main since 2026-10-28), weights gated on the Hub; run with the card's prompt (<|pnc|>, language forced). Its SFT base names Earnings-22 among its training sources; the MWER pools (~45-48k clips each) are named only by kind. Run on 4 x H100 NVL (the other entries on an A10), so its RTFx is not comparable; mgb2, casablanca and mgb3_egy rebuilt with ffmpeg 6.1.1, libopencore-amrnb 0.1.6 and libopus 1.4",
   "training_data": "undisclosed",
   "hallucination_rate": 0.48333333333333334,
   "inserted_wpm": 71.78,
   "arena_wer": 0.08068183644445319,
   "arena_cer": 0.046669049475767506,
   "arena_ci": null,
   "rank_range": null,
   "rtfx": 300.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.48333333333333334,
    "halluc_3plus": 0.45,
    "halluc_3plus_ci": [
     0.39469,
     0.50658
    ],
    "inserted_wpm": 71.77828584174428,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.010258989187830022,
      "wer_uncapped": 0.010258989187830022,
      "cer": 0.00425595892074433,
      "av_wer": null,
      "strict_wer": 0.014131254714609002,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001257229067136032,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.020966118752096613,
      "wer_uncapped": 0.020966118752096613,
      "cer": 0.009851425511979655,
      "av_wer": null,
      "strict_wer": 0.024656155652465615,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0022363860002236387,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07584636249648148,
      "wer_uncapped": 0.07584636249648148,
      "cer": 0.04174017491835892,
      "av_wer": null,
      "strict_wer": 0.08485375777271681,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017835666214590956,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.020717270194986072,
      "wer_uncapped": 0.020717270194986072,
      "cer": 0.010408229386035963,
      "av_wer": null,
      "strict_wer": 0.024895543175487464,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.014623955431754874,
      "wer_uncapped": 0.014623955431754874,
      "cer": 0.005953345213024461,
      "av_wer": null,
      "strict_wer": 0.018802228412256268,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0017409470752089136,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.0726864640883978,
      "wer_uncapped": 0.0726864640883978,
      "cer": 0.0406480117820324,
      "av_wer": null,
      "strict_wer": 0.0832182320441989,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01640193370165746,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.04648328690807799,
      "wer_uncapped": 0.04700557103064067,
      "cer": 0.02733678924347967,
      "av_wer": null,
      "strict_wer": 0.04892061281337047,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006789693593314763,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.11438190607734806,
      "wer_uncapped": 0.11438190607734806,
      "cer": 0.07222806648432568,
      "av_wer": null,
      "strict_wer": 0.12422306629834254,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01950966850828729,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05252468660270327,
      "wer_uncapped": 0.05252468660270327,
      "cer": 0.0335693947579762,
      "av_wer": null,
      "strict_wer": 0.05854751733314658,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02311086210518944,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.06685891274164264,
      "wer_uncapped": 0.06867457011641567,
      "cer": 0.03729443335856327,
      "av_wer": null,
      "strict_wer": 0.07081063761614867,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0067286126241589235,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.0549120730470071,
      "wer_uncapped": 0.0549120730470071,
      "cer": 0.03464883651182894,
      "av_wer": null,
      "strict_wer": 0.058124788637132226,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013231315522489009,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07295344668368732,
      "wer_uncapped": 0.07311641045140964,
      "cer": 0.049019607843137254,
      "av_wer": null,
      "strict_wer": 0.0773534684121897,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.01906676082351024,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.019683013430762106,
      "wer_uncapped": 0.019683013430762106,
      "cer": 0.010441512518139209,
      "av_wer": null,
      "strict_wer": 0.022153038645602842,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004090979262079967,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06756380510440835,
      "wer_uncapped": 0.06812064965197216,
      "cer": 0.04173871277617675,
      "av_wer": null,
      "strict_wer": 0.08074245939675175,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01419953596287703,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.12098941479734547,
      "wer_uncapped": 0.13283606647287885,
      "cer": 0.09115478393701712,
      "av_wer": null,
      "strict_wer": 0.12625459331980474,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031097460648275104,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.08723530362627296,
      "wer_uncapped": 0.08939059216552615,
      "cer": 0.06076501370545726,
      "av_wer": null,
      "strict_wer": 0.0907376475025594,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015949135190473626,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.011605227228398674,
      "wer_uncapped": 0.011605227228398674,
      "cer": 0.007739489825466607,
      "av_wer": null,
      "strict_wer": 0.012580456407255705,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0038033937975424223,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.03986135181975736,
      "wer_uncapped": 0.04082418640477566,
      "cer": 0.022279348757497857,
      "av_wer": null,
      "strict_wer": 0.052378201424995184,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010206046601193916,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.06853487663722205,
      "wer_uncapped": 0.06853487663722205,
      "cer": 0.04477375134860697,
      "av_wer": null,
      "strict_wer": 0.07310386841303686,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02025586353944563,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06497829232995658,
      "wer_uncapped": 0.06497829232995658,
      "cer": 0.03919165346327464,
      "av_wer": null,
      "strict_wer": 0.0678726483357453,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015918958031837915,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09482758620689655,
      "wer_uncapped": 0.0954153605015674,
      "cer": 0.0652047177003453,
      "av_wer": null,
      "strict_wer": 0.1009012539184953,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020963949843260186,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.05650319829424307,
      "wer_uncapped": 0.05650319829424307,
      "cer": 0.03401662753062131,
      "av_wer": null,
      "strict_wer": 0.0628997867803838,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019646664636003654,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06497829232995658,
      "wer_uncapped": 0.06497829232995658,
      "cer": 0.03916175899076261,
      "av_wer": null,
      "strict_wer": 0.0678726483357453,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0170767004341534,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07053291536050156,
      "wer_uncapped": 0.07092476489028213,
      "cer": 0.049015650926050494,
      "av_wer": null,
      "strict_wer": 0.07621473354231975,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01841692789968652,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.11038062283737024,
      "wer_uncapped": 0.11038062283737024,
      "cer": 0.06251385502105963,
      "av_wer": null,
      "strict_wer": 0.11280276816608996,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006228373702422145,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1209259823332318,
      "wer_uncapped": 0.12123058178495279,
      "cer": 0.0769816589452307,
      "av_wer": null,
      "strict_wer": 0.12610417301248858,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027566250380749314,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.08958031837916064,
      "wer_uncapped": 0.08958031837916064,
      "cer": 0.05410899524677887,
      "av_wer": null,
      "strict_wer": 0.09276410998552823,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019536903039073805,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.132641065830721,
      "wer_uncapped": 0.1338166144200627,
      "cer": 0.09489214762993856,
      "av_wer": null,
      "strict_wer": 0.13773510971786834,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026057993730407524,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.24740484429065743,
      "wer_uncapped": 0.2664359861591695,
      "cer": 0.17246730215029926,
      "av_wer": null,
      "strict_wer": 0.24982698961937716,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.03737024221453287,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.04068177971077184,
      "cer": 0.02314415418055901,
      "wer_arith": 0.04906304533851322,
      "done": 9,
      "total": 9
     },
     "accented": {
      "wer": 0.12098941479734547,
      "cer": 0.09115478393701713,
      "wer_arith": 0.12098941479734547,
      "done": 1,
      "total": 1
     },
     "noisy": {
      "wer": 0.059776142622561555,
      "cer": 0.03731687851858838,
      "wer_arith": 0.06725866579906684,
      "done": 5,
      "total": 5
     },
     "telephony": {
      "wer": 0.044002895856634056,
      "cer": 0.0253460310498453,
      "wer_arith": 0.055146503423797524,
      "done": 8,
      "total": 8
     },
     "callcenter": {
      "wer": 0.11119333715204585,
      "cer": 0.07158816204309523,
      "wer_arith": 0.12523623396986616,
      "done": 6,
      "total": 6
     }
    },
    "arena": 0.05808413649280141,
    "arena_arith": 0.07389645239178125,
    "arena_cer": 0.0350387209083577,
    "arena_strict": 0.06400371392619957,
    "zero_shot": 0.054045982669620164,
    "arena_real": 0.04430906649597635,
    "exposure": 0.1345,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 2
   }
  },
  {
   "model": "cohere-transcribe-ar-rl-v4c",
   "hf_id": "https://huggingface.co/Cohere-AR/cohere-transcribe-ar-rl-v4c",
   "params_b": 2.07,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01408096555192356,
     "cer": 0.004280886931429874,
     "rtfx": 156.38,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.02432069775243207,
     "cer": 0.008690335822525002,
     "rtfx": 136.36,
     "n": 1000
    },
    "gigaspeech/clean": {
     "wer": 0.08500729291947082,
     "cer": 0.042298850574712644,
     "rtfx": 259.86,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02524373259052925,
     "cer": 0.009623042208654101,
     "rtfx": 367.8,
     "n": 300
    },
    "librispeech_clean/telephony": {
     "wer": 0.018454038997214484,
     "cer": 0.005508362091850278,
     "rtfx": 372.81,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08459944751381215,
     "cer": 0.041605740129901043,
     "rtfx": 429.86,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.05013927576601671,
     "cer": 0.026380408813379348,
     "rtfx": 656.58,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.12430939226519337,
     "cer": 0.07073145849627639,
     "rtfx": 608.76,
     "n": 300
    },
    "fleurs_en/clean": {
     "wer": 0.05826738567126549,
     "cer": 0.03325742538085902,
     "rtfx": 507.14,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07294670511588167,
     "cer": 0.03593010276740695,
     "rtfx": 674.36,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.05888569496110923,
     "cer": 0.03478849009719016,
     "rtfx": 714.55,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.07805964473898637,
     "cer": 0.04888197114895522,
     "rtfx": 588.23,
     "n": 997
    },
    "spgispeech/clean": {
     "wer": 0.021664179488498945,
     "cer": 0.010095303708806982,
     "rtfx": 783.54,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.0797215777262181,
     "cer": 0.041673148724331054,
     "rtfx": 514.79,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1374430976800307,
     "cer": 0.09828879512423816,
     "rtfx": 704.06,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.09450940244625249,
     "cer": 0.06063239247998855,
     "rtfx": 795.63,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01306807099668422,
     "cer": 0.008011240903466645,
     "rtfx": 773.0,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.05565183901405738,
     "cer": 0.022946218614882805,
     "rtfx": 699.34,
     "n": 1000
    },
    "fleurs_en/noisy": {
     "wer": 0.07538836430094426,
     "cer": 0.04396506087877184,
     "rtfx": 691.44,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.07178002894356006,
     "cer": 0.04023863607997803,
     "rtfx": 775.92,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10227272727272728,
     "cer": 0.06437926581811473,
     "rtfx": 682.96,
     "n": 298
    },
    "fleurs_en/telephony": {
     "wer": 0.0604629911666159,
     "cer": 0.034462678665960825,
     "rtfx": 866.37,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0683068017366136,
     "cer": 0.03924015875789421,
     "rtfx": 882.62,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08013322884012539,
     "cer": 0.05047039291643608,
     "rtfx": 731.37,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11487889273356401,
     "cer": 0.05774359610494325,
     "rtfx": 842.52,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1233627779469997,
     "cer": 0.07207517204870302,
     "rtfx": 855.29,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.09218523878437047,
     "cer": 0.052020668480567134,
     "rtfx": 857.99,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.13851880877742948,
     "cer": 0.08928242021767202,
     "rtfx": 714.86,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2629757785467128,
     "cer": 0.16144638094647398,
     "rtfx": 984.75,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 245.37,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.054772682658420696,
     "cer": 0.02887739057291299,
     "done": 9,
     "total": 9
    },
    "accented": {
     "wer": 0.1374430976800307,
     "cer": 0.09828879512423816,
     "done": 1,
     "total": 1
    },
    "noisy": {
     "wer": 0.07383885111080266,
     "cer": 0.04376767949310145,
     "done": 5,
     "total": 5
    },
    "telephony": {
     "wer": 0.061944413874835895,
     "cer": 0.032498548523166894,
     "done": 8,
     "total": 8
    },
    "callcenter": {
     "wer": 0.13191521201445375,
     "cer": 0.07865608483384531,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.15",
    "host": "86c83ed0473a",
    "torch": "2.13.0+cu130",
    "gpu": "NVIDIA H100 NVL",
    "transformers": "5.17.0"
   },
   "finetune_of": "Cohere-AR/cohere-transcribe-ar-rl-v4b",
   "in_domain": [
    "earnings22"
   ],
   "notes": "Cohere-AR MWER post-training (decoder only), second stage after cohere-transcribe-ar-rl-v4b on cohere-transcribe-ar-sft-v4 (commit 4fd9a97ccc), weights gated on the Hub; run with the card's prompt (<|pnc|>, language forced). Its SFT base names Earnings-22 among its training sources; the MWER pools are named only by kind. Run on 4 x H100 NVL (the other entries on an A10), so its RTFx is not comparable; mgb2, casablanca and mgb3_egy rebuilt with ffmpeg 6.1.1, libopencore-amrnb 0.1.6 and libopus 1.4",
   "training_data": "undisclosed",
   "hallucination_rate": 0.48333333333333334,
   "inserted_wpm": 89.13,
   "arena_wer": 0.08073683730615934,
   "arena_cer": 0.04659647088602442,
   "arena_ci": null,
   "rank_range": null,
   "rtfx": 434.8,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.48333333333333334,
    "halluc_3plus": 0.4666666666666667,
    "halluc_3plus_ci": [
     0.41099,
     0.52319
    ],
    "inserted_wpm": 89.13176824848047,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.010309278350515464,
      "wer_uncapped": 0.010309278350515464,
      "cer": 0.004175003180404085,
      "av_wer": null,
      "strict_wer": 0.01408096555192356,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0011566507417651497,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.02035111260203511,
      "wer_uncapped": 0.02035111260203511,
      "cer": 0.00940971757462187,
      "av_wer": null,
      "strict_wer": 0.02426478810242648,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0019568377501956837,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07579518411423015,
      "wer_uncapped": 0.07579518411423015,
      "cer": 0.04160254244710534,
      "av_wer": null,
      "strict_wer": 0.08500729291947082,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017835666214590956,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.020717270194986072,
      "wer_uncapped": 0.020717270194986072,
      "cer": 0.009679248339543171,
      "av_wer": null,
      "strict_wer": 0.02524373259052925,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.013579387186629526,
      "wer_uncapped": 0.013579387186629526,
      "cer": 0.005548355742750689,
      "av_wer": null,
      "strict_wer": 0.018454038997214484,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001392757660167131,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07346339779005524,
      "wer_uncapped": 0.07346339779005524,
      "cer": 0.04077424784346728,
      "av_wer": null,
      "strict_wer": 0.08459944751381215,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016660911602209946,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.047701949860724235,
      "wer_uncapped": 0.04805013927576602,
      "cer": 0.028470759760246232,
      "av_wer": null,
      "strict_wer": 0.04979108635097493,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006093314763231198,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.11455455801104972,
      "wer_uncapped": 0.11464088397790055,
      "cer": 0.07277508941721018,
      "av_wer": null,
      "strict_wer": 0.12422306629834254,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01976864640883978,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.0529448840955249,
      "wer_uncapped": 0.0529448840955249,
      "cer": 0.03317514784259327,
      "av_wer": null,
      "strict_wer": 0.05826738567126549,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023320960851600254,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.06696571611662928,
      "wer_uncapped": 0.06942219374132222,
      "cer": 0.03697332507626322,
      "av_wer": null,
      "strict_wer": 0.07049022749118872,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008651073373918615,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05558843422387555,
      "wer_uncapped": 0.05558843422387555,
      "cer": 0.035089885856429616,
      "av_wer": null,
      "strict_wer": 0.05888569496110923,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013654041258031789,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07371394426639144,
      "wer_uncapped": 0.07393122929002119,
      "cer": 0.04929159557896298,
      "av_wer": null,
      "strict_wer": 0.07784235971535662,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019609973382584606,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.01939998970822827,
      "wer_uncapped": 0.01939998970822827,
      "cer": 0.01021355617455896,
      "av_wer": null,
      "strict_wer": 0.021664179488498945,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003910873256831164,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06607888631090487,
      "wer_uncapped": 0.06663573085846868,
      "cer": 0.04056195965417867,
      "av_wer": null,
      "strict_wer": 0.07916473317865429,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01419953596287703,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1201667306532112,
      "wer_uncapped": 0.13223276476718038,
      "cer": 0.09047912811022003,
      "av_wer": null,
      "strict_wer": 0.1253222179564526,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03159107113475566,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.08955223880597014,
      "wer_uncapped": 0.09127646963737271,
      "cer": 0.0622975330176925,
      "av_wer": null,
      "strict_wer": 0.09278517161484993,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.014817608707365698,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.012190364735712892,
      "wer_uncapped": 0.012190364735712892,
      "cer": 0.008108036960012636,
      "av_wer": null,
      "strict_wer": 0.01306807099668422,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003998439633313829,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04101675332177932,
      "wer_uncapped": 0.041787020989793956,
      "cer": 0.0215126505209038,
      "av_wer": null,
      "strict_wer": 0.05468900442903909,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009628345850182938,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.07051477307340846,
      "wer_uncapped": 0.07051477307340846,
      "cer": 0.0455987814939392,
      "av_wer": null,
      "strict_wer": 0.07538836430094426,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019342065184282668,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06859623733719247,
      "wer_uncapped": 0.06859623733719247,
      "cer": 0.040776060506412366,
      "av_wer": null,
      "strict_wer": 0.07178002894356006,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017510853835021708,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09600313479623825,
      "wer_uncapped": 0.09659090909090909,
      "cer": 0.06610161890667743,
      "av_wer": null,
      "strict_wer": 0.10168495297805642,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02115987460815047,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.05543710021321962,
      "wer_uncapped": 0.05543710021321962,
      "cer": 0.034778193818620295,
      "av_wer": null,
      "strict_wer": 0.0604629911666159,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019646664636003654,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06555716353111432,
      "wer_uncapped": 0.06555716353111432,
      "cer": 0.039580281605931064,
      "av_wer": null,
      "strict_wer": 0.0683068017366136,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017221418234442835,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07484326018808778,
      "wer_uncapped": 0.07484326018808778,
      "cer": 0.0512579039418808,
      "av_wer": null,
      "strict_wer": 0.08013322884012539,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019788401253918494,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.11176470588235295,
      "wer_uncapped": 0.11176470588235295,
      "cer": 0.0631050025862706,
      "av_wer": null,
      "strict_wer": 0.11487889273356401,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00795847750865052,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1184891867194639,
      "wer_uncapped": 0.1184891867194639,
      "cer": 0.07568064986989909,
      "av_wer": null,
      "strict_wer": 0.1233627779469997,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025890953396283885,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.08871201157742402,
      "wer_uncapped": 0.08871201157742402,
      "cer": 0.053242055543929925,
      "av_wer": null,
      "strict_wer": 0.09218523878437047,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02040520984081042,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.132641065830721,
      "wer_uncapped": 0.1338166144200627,
      "cer": 0.09341226063949055,
      "av_wer": null,
      "strict_wer": 0.13734326018808776,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02664576802507837,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2477508650519031,
      "wer_uncapped": 0.2602076124567474,
      "cer": 0.17106332668292323,
      "av_wer": null,
      "strict_wer": 0.2505190311418685,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029411764705882353,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.04054600742497188,
      "cer": 0.022883011350593573,
      "wer_arith": 0.049016381087592785,
      "done": 9,
      "total": 9
     },
     "accented": {
      "wer": 0.12016673065321119,
      "cer": 0.09047912811022003,
      "wer_arith": 0.12016673065321122,
      "done": 1,
      "total": 1
     },
     "noisy": {
      "wer": 0.06124278893582187,
      "cer": 0.03749528128852683,
      "wer_arith": 0.06907673084155908,
      "done": 5,
      "total": 5
     },
     "telephony": {
      "wer": 0.04442228560580577,
      "cer": 0.02544463962280106,
      "wer_arith": 0.055981516606118956,
      "done": 8,
      "total": 8
     },
     "callcenter": {
      "wer": 0.11116902728194078,
      "cer": 0.07148205750632436,
      "wer_arith": 0.12497493950854767,
      "done": 6,
      "total": 6
     }
    },
    "arena": 0.058329176961404716,
    "arena_arith": 0.07424078216535189,
    "arena_cer": 0.03493067900654132,
    "arena_strict": 0.06428746102780335,
    "zero_shot": 0.05474540569805414,
    "arena_real": 0.044442517559907586,
    "exposure": 0.1345,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 3
   }
  },
  {
   "model": "cohere-transcribe-ar-rl-step-800",
   "hf_id": "https://huggingface.co/Cohere-AR/cohere-transcribe-ar-rl/tree/step-800",
   "params_b": 2.07,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.013930098063867236,
     "cer": 0.0042524109651454174,
     "rtfx": 287.27,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.024432517052443252,
     "cer": 0.009072448578540547,
     "rtfx": 330.9,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.058337418586735766,
     "cer": 0.03325742538085902,
     "rtfx": 129.86,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07155826124105522,
     "cer": 0.03533351295177245,
     "rtfx": 198.76,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.05808251606357795,
     "cer": 0.034266515710693855,
     "rtfx": 245.59,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.0779510022271715,
     "cer": 0.04893283688376162,
     "rtfx": 172.49,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08480257939046547,
     "cer": 0.04238474169508652,
     "rtfx": 251.74,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.022230226933566615,
     "cer": 0.010269835802043863,
     "rtfx": 161.41,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08241299303944316,
     "cer": 0.0430343808338519,
     "rtfx": 340.92,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1399111501124335,
     "cer": 0.09995311767463666,
     "rtfx": 387.35,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.0950482245810658,
     "cer": 0.060887966550465654,
     "rtfx": 412.66,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.012970548078798518,
     "cer": 0.008053184573118303,
     "rtfx": 399.21,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.05449643751203543,
     "cer": 0.024311613441553515,
     "rtfx": 382.22,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02541782729805014,
     "cer": 0.010153968675338465,
     "rtfx": 292.94,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.07538836430094426,
     "cer": 0.04404446797247221,
     "rtfx": 300.93,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.06816208393632417,
     "cer": 0.03899053942737325,
     "rtfx": 236.22,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10168495297805642,
     "cer": 0.06338313964213245,
     "rtfx": 323.44,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.019498607242339833,
     "cer": 0.006072471462702416,
     "rtfx": 324.24,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.06350898568382576,
     "cer": 0.03464796188459503,
     "rtfx": 377.94,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.06845151953690304,
     "cer": 0.03938993035620678,
     "rtfx": 381.64,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.07699843260188088,
     "cer": 0.04810920494373732,
     "rtfx": 294.75,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11141868512110727,
     "cer": 0.056130992991378775,
     "rtfx": 421.95,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08347720994475138,
     "cer": 0.04135069881320774,
     "rtfx": 391.41,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.05118384401114206,
     "cer": 0.02641359171754712,
     "rtfx": 323.28,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1256472738349071,
     "cer": 0.07223398623610376,
     "rtfx": 386.77,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.09261939218523878,
     "cer": 0.05276952647213,
     "rtfx": 388.87,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1391065830721003,
     "cer": 0.08972514296255303,
     "rtfx": 331.8,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2730103806228374,
     "cer": 0.16721453823730076,
     "rtfx": 429.76,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.12422306629834254,
     "cer": 0.07071445574183018,
     "rtfx": 395.86,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 226.29,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.05485973473314735,
     "cer": 0.028978234311306132,
     "done": 9,
     "total": 9,
     "ci": [
      0.05304,
      0.0568
     ]
    },
    "accented": {
     "wer": 0.1399111501124335,
     "cer": 0.09995311767463666,
     "done": 1,
     "total": 1,
     "ci": [
      0.12541,
      0.15669
     ]
    },
    "noisy": {
     "wer": 0.07314029061888816,
     "cer": 0.0434920164535564,
     "done": 5,
     "total": 5,
     "ci": [
      0.06816,
      0.07854
     ]
    },
    "telephony": {
     "wer": 0.06135255321520527,
     "cer": 0.032258257308312485,
     "done": 8,
     "total": 8,
     "ci": [
      0.05746,
      0.0652
     ]
    },
    "callcenter": {
     "wer": 0.13429842333742803,
     "cer": 0.07984520689457747,
     "done": 6,
     "total": 6,
     "ci": [
      0.12572,
      0.14317
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Cohere-AR/cohere-transcribe-ar-sft",
   "in_domain": [
    "earnings22"
   ],
   "notes": "Cohere-AR MWER post-training (decoder only, KL to the SFT) of cohere-transcribe-ar-sft at step 10000, snapshot step 800 of 800 (branch `step-800`, commit eb22db2e4c), weights gated on the Hub; run with the card's prompt (<|pnc|>, language forced). Its SFT base names Earnings-22 among its training sources; the MWER data (48,061 clips, 119 h) is named only by kind",
   "training_data": "undisclosed",
   "hallucination_rate": 0.48333333333333334,
   "inserted_wpm": 111.19,
   "arena_wer": 0.08118897797939896,
   "arena_cer": 0.04688711980637268,
   "arena_ci": [
    0.07886,
    0.08364
   ],
   "rank_range": [
    1,
    1
   ],
   "rtfx": 256.5,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.48333333333333334,
    "halluc_3plus": 0.46,
    "halluc_3plus_ci": [
     0.40446,
     0.51655
    ],
    "inserted_wpm": 111.19165783750628,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.010057832537088257,
      "wer_uncapped": 0.010057832537088257,
      "cer": 0.004186568286166977,
      "av_wer": null,
      "strict_wer": 0.013930098063867236,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001257229067136032,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.02079838980207984,
      "wer_uncapped": 0.02079838980207984,
      "cer": 0.009918350957033865,
      "av_wer": null,
      "strict_wer": 0.02437660740243766,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0021245667002124566,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05224455494082219,
      "wer_uncapped": 0.05224455494082219,
      "cer": 0.03314594436737972,
      "av_wer": null,
      "strict_wer": 0.058337418586735766,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022970796274248896,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.06621809249172274,
      "wer_uncapped": 0.06803374986649578,
      "cer": 0.03711094291153467,
      "av_wer": null,
      "strict_wer": 0.06974260386628217,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006942219374132223,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05478525532634427,
      "wer_uncapped": 0.05478525532634427,
      "cer": 0.034622373551152906,
      "av_wer": null,
      "strict_wer": 0.05808251606357795,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013315860669597565,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07333369547503939,
      "wer_uncapped": 0.07360530175457657,
      "cer": 0.04951413099918404,
      "av_wer": null,
      "strict_wer": 0.0776793959476343,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.01939268835895486,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07582077330535582,
      "wer_uncapped": 0.07582077330535582,
      "cer": 0.04179022308972386,
      "av_wer": null,
      "strict_wer": 0.08480257939046547,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017733309450088282,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.019657284001440848,
      "wer_uncapped": 0.019657284001440848,
      "cer": 0.010363673766672783,
      "av_wer": null,
      "strict_wer": 0.022230226933566615,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004013790974116194,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06830626450116009,
      "wer_uncapped": 0.06895591647331786,
      "cer": 0.04188280499519693,
      "av_wer": null,
      "strict_wer": 0.08176334106728539,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015498839907192575,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.12236055503756925,
      "wer_uncapped": 0.13453628037075632,
      "cer": 0.0921976440175083,
      "av_wer": null,
      "strict_wer": 0.12768057916963746,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03312674820380628,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.08922894552508218,
      "wer_uncapped": 0.09149199849129802,
      "cer": 0.06227261400448542,
      "av_wer": null,
      "strict_wer": 0.09278517161484993,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01691901503313756,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.011995318899941486,
      "wer_uncapped": 0.011995318899941486,
      "cer": 0.008239660936636218,
      "av_wer": null,
      "strict_wer": 0.012970548078798518,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003608347961771016,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.040631619487772004,
      "wer_uncapped": 0.042172154823801274,
      "cer": 0.023000947097821675,
      "av_wer": null,
      "strict_wer": 0.0527633352590025,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011554015020219527,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.020891364902506964,
      "wer_uncapped": 0.020891364902506964,
      "cer": 0.01044872833306334,
      "av_wer": null,
      "strict_wer": 0.02541782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.07021017362168748,
      "wer_uncapped": 0.07021017362168748,
      "cer": 0.045249730278606334,
      "av_wer": null,
      "strict_wer": 0.07538836430094426,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02071276271702711,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06526772793053545,
      "wer_uncapped": 0.06526772793053545,
      "cer": 0.039460703715882936,
      "av_wer": null,
      "strict_wer": 0.06816208393632417,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01649782923299566,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09502351097178684,
      "wer_uncapped": 0.09561128526645768,
      "cer": 0.06498049239876227,
      "av_wer": null,
      "strict_wer": 0.10109717868338558,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02115987460815047,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.014972144846796657,
      "wer_uncapped": 0.014972144846796657,
      "cer": 0.006155839948161348,
      "av_wer": null,
      "strict_wer": 0.019498607242339833,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0015668523676880223,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.05696009747182455,
      "wer_uncapped": 0.05696009747182455,
      "cer": 0.034619534175287174,
      "av_wer": null,
      "strict_wer": 0.06350898568382576,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019951264087724643,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06570188133140377,
      "wer_uncapped": 0.06570188133140377,
      "cer": 0.039580281605931064,
      "av_wer": null,
      "strict_wer": 0.06845151953690304,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01780028943560058,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07053291536050156,
      "wer_uncapped": 0.07092476489028213,
      "cer": 0.04856720032288443,
      "av_wer": null,
      "strict_wer": 0.07660658307210032,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01841692789968652,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.10899653979238755,
      "wer_uncapped": 0.10899653979238755,
      "cer": 0.06118377299933496,
      "av_wer": null,
      "strict_wer": 0.11141868512110727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00726643598615917,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07294544198895028,
      "wer_uncapped": 0.07294544198895028,
      "cer": 0.040563854407742475,
      "av_wer": null,
      "strict_wer": 0.08347720994475138,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016660911602209946,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.04822423398328691,
      "wer_uncapped": 0.04874651810584958,
      "cer": 0.028511258707273612,
      "av_wer": null,
      "strict_wer": 0.050661559888579386,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00766016713091922,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.12016448370392933,
      "wer_uncapped": 0.12046908315565032,
      "cer": 0.07533159865456622,
      "av_wer": null,
      "strict_wer": 0.1253426743831861,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02771855010660981,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.0894356005788712,
      "wer_uncapped": 0.0894356005788712,
      "cer": 0.05410899524677887,
      "av_wer": null,
      "strict_wer": 0.09261939218523878,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01997105643994211,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.13244514106583072,
      "wer_uncapped": 0.13401253918495298,
      "cer": 0.09404009148392305,
      "av_wer": null,
      "strict_wer": 0.13753918495297807,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026841692789968653,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2519031141868512,
      "wer_uncapped": 0.27024221453287195,
      "cer": 0.1749057858567945,
      "av_wer": null,
      "strict_wer": 0.2546712802768166,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.037024221453287195,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.11455455801104972,
      "wer_uncapped": 0.11455455801104972,
      "cer": 0.07296444350936251,
      "av_wer": null,
      "strict_wer": 0.12422306629834254,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01950966850828729,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.04054350203211254,
      "cer": 0.02313278944418335,
      "wer_arith": 0.04902468248678372,
      "done": 9,
      "total": 9,
      "ci": [
       0.03768,
       0.04322
      ]
     },
     "accented": {
      "wer": 0.12236055503756924,
      "cer": 0.09219764401750831,
      "wer_arith": 0.12236055503756925,
      "done": 1,
      "total": 1,
      "ci": [
       0.10539,
       0.14118
      ]
     },
     "noisy": {
      "wer": 0.060517424630067713,
      "cer": 0.03763438908311077,
      "wer_arith": 0.06812434459031978,
      "done": 5,
      "total": 5,
      "ci": [
       0.05429,
       0.06665
      ]
     },
     "telephony": {
      "wer": 0.04447734944913062,
      "cer": 0.02573994575477143,
      "wer_arith": 0.05534199489744723,
      "done": 8,
      "total": 8,
      "ci": [
       0.04067,
       0.04807
      ]
     },
     "callcenter": {
      "wer": 0.11206559600196256,
      "cer": 0.07201372174870878,
      "wer_arith": 0.12612118858830318,
      "done": 6,
      "total": 6,
      "ci": [
       0.10337,
       0.12092
      ]
     }
    },
    "arena": 0.058398151318721926,
    "arena_arith": 0.07432453459509457,
    "arena_cer": 0.03526620049947258,
    "arena_strict": 0.06439798210479716,
    "zero_shot": 0.05469919097273809,
    "arena_real": 0.044447589996051015,
    "exposure": 0.1345,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 4,
    "boh_share": 0.4633333333333333,
    "arena_ci": [
     0.05473,
     0.06197
    ],
    "rank_set": [
     1,
     3
    ]
   }
  },
  {
   "model": "cohere-transcribe-ar-sft-step-10000",
   "hf_id": "https://huggingface.co/Cohere-AR/cohere-transcribe-ar-sft/tree/step-10000",
   "params_b": 2.07,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01408096555192356,
     "cer": 0.0043758068190447265,
     "rtfx": 380.12,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.024544336352454434,
     "cer": 0.009061531071225818,
     "rtfx": 377.19,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.05840745150220604,
     "cer": 0.033281780873631525,
     "rtfx": 371.79,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07198547474100181,
     "cer": 0.035275778453485236,
     "rtfx": 415.71,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.057997970916469396,
     "cer": 0.03400185264148447,
     "rtfx": 404.53,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.07827692976261612,
     "cer": 0.049085434088180835,
     "rtfx": 379.31,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08487934696384247,
     "cer": 0.04248073765315145,
     "rtfx": 375.25,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.022204497504245357,
     "cer": 0.010265242852221839,
     "rtfx": 426.23,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08269141531322506,
     "cer": 0.04307327317983821,
     "rtfx": 324.02,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14073383425656777,
     "cer": 0.10046882325363338,
     "rtfx": 378.83,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.09946656608653484,
     "cer": 0.06346415318087488,
     "rtfx": 354.3,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.015701189779598206,
     "cer": 0.009668015854707128,
     "rtfx": 402.85,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.064895051030233,
     "cer": 0.03239019949935523,
     "rtfx": 384.32,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02541782729805014,
     "cer": 0.010120785771170693,
     "rtfx": 335.44,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.07493146512336278,
     "cer": 0.04412387506617258,
     "rtfx": 375.04,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.06772793053545587,
     "cer": 0.03846633883327925,
     "rtfx": 392.7,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1042319749216301,
     "cer": 0.06504334993543627,
     "rtfx": 321.76,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.019672701949860726,
     "cer": 0.006072471462702416,
     "rtfx": 334.99,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.06381358513554676,
     "cer": 0.03501852832186342,
     "rtfx": 382.09,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0678726483357453,
     "cer": 0.03919023489179002,
     "rtfx": 392.03,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.07699843260188088,
     "cer": 0.04855192768861834,
     "rtfx": 328.72,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11176470588235295,
     "cer": 0.056130992991378775,
     "rtfx": 426.8,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08373618784530387,
     "cer": 0.041622742884347266,
     "rtfx": 388.06,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.05118384401114206,
     "cer": 0.026679054950889302,
     "rtfx": 343.23,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1251903746573256,
     "cer": 0.07196929592376919,
     "rtfx": 384.99,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.09261939218523878,
     "cer": 0.052619754873817426,
     "rtfx": 388.25,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1400862068965517,
     "cer": 0.09009407858328722,
     "rtfx": 327.44,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.27439446366782005,
     "cer": 0.16671835266389629,
     "rtfx": 426.95,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.12474102209944751,
     "cer": 0.07149658244635632,
     "rtfx": 382.48,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 131.02,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.055007598734220474,
     "cer": 0.02898904862580712,
     "done": 9,
     "total": 9,
     "ci": [
      0.05314,
      0.05701
     ]
    },
    "accented": {
     "wer": 0.14073383425656777,
     "cer": 0.10046882325363338,
     "done": 1,
     "total": 1,
     "ci": [
      0.12635,
      0.15779
     ]
    },
    "noisy": {
     "wer": 0.07435515279300674,
     "cer": 0.04424370055738673,
     "done": 5,
     "total": 5,
     "ci": [
      0.06917,
      0.08034
     ]
    },
    "telephony": {
     "wer": 0.06305681282006521,
     "cer": 0.03358063919934533,
     "done": 8,
     "total": 8,
     "ci": [
      0.05915,
      0.06681
     ]
    },
    "callcenter": {
     "wer": 0.13470255058625427,
     "cer": 0.07992951990700263,
     "done": 6,
     "total": 6,
     "ci": [
      0.12588,
      0.14334
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "CohereLabs/cohere-transcribe-arabic-07-2026",
   "in_domain": [
    "earnings22"
   ],
   "notes": "Cohere-AR SFT for Arabic, English and code-switched phone calls, snapshot step 10000 of 10,000 (branch `step-10000`, commit 2c712c47f4), the last one and the base of cohere-transcribe-ar-rl, weights gated on the Hub; run with the card's prompt (<|pnc|>, language forced). 69 training sources named only by kind on the card, except Earnings-22, SpokenWOZ and L2-ARCTIC",
   "training_data": "undisclosed",
   "hallucination_rate": 0.99,
   "inserted_wpm": 359.03,
   "arena_wer": 0.08193848095517844,
   "arena_cer": 0.047345949064250464,
   "arena_ci": [
    0.0796,
    0.0844
   ],
   "rank_range": [
    2,
    2
   ],
   "rtfx": 367.4,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.99,
    "halluc_3plus": 0.9766666666666667,
    "halluc_3plus_ci": [
     0.95263,
     0.98865
    ],
    "inserted_wpm": 359.02526069257794,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.010208700025144582,
      "wer_uncapped": 0.010208700025144582,
      "cer": 0.004313784449558791,
      "av_wer": null,
      "strict_wer": 0.01408096555192356,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0013578073925069147,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.020910209102091022,
      "wer_uncapped": 0.020910209102091022,
      "cer": 0.009904965868023023,
      "av_wer": null,
      "strict_wer": 0.024488426702448843,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0021245667002124566,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.052454653687233,
      "wer_uncapped": 0.052454653687233,
      "cer": 0.033116740892166166,
      "av_wer": null,
      "strict_wer": 0.05840745150220604,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023320960851600254,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.06621809249172274,
      "wer_uncapped": 0.06867457011641567,
      "cer": 0.03711094291153467,
      "av_wer": null,
      "strict_wer": 0.06952899711630887,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00790344974901207,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05470071017923571,
      "wer_uncapped": 0.05470071017923571,
      "cer": 0.0343577439443925,
      "av_wer": null,
      "strict_wer": 0.057997970916469396,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013358133243151844,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07387690803411374,
      "wer_uncapped": 0.0740941930577435,
      "cer": 0.04968721410380041,
      "av_wer": null,
      "strict_wer": 0.07805964473898637,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.019772937150306914,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07582077330535582,
      "wer_uncapped": 0.07582077330535582,
      "cer": 0.04192159953955683,
      "av_wer": null,
      "strict_wer": 0.08487934696384247,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017707720258962615,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.01963155457211959,
      "wer_uncapped": 0.01963155457211959,
      "cer": 0.010363673766672783,
      "av_wer": null,
      "strict_wer": 0.022204497504245357,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003988061544794937,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06858468677494199,
      "wer_uncapped": 0.06923433874709976,
      "cer": 0.041978866474543707,
      "av_wer": null,
      "strict_wer": 0.08204176334106729,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016148491879350347,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.12301870235287665,
      "wer_uncapped": 0.13508473646684582,
      "cer": 0.0928732998443054,
      "av_wer": null,
      "strict_wer": 0.12861295453298963,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03373004990950475,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09095317635648473,
      "wer_uncapped": 0.09607198663721106,
      "cer": 0.06318215798654374,
      "av_wer": null,
      "strict_wer": 0.09434775580580851,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.020421358909424,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01336063975034133,
      "wer_uncapped": 0.014823483518626878,
      "cer": 0.009582225498196751,
      "av_wer": null,
      "strict_wer": 0.014238346011312658,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0017921146953405018,
      "insertions": 0.0052662375658279695,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04679376083188908,
      "wer_uncapped": 0.05257076834199884,
      "cer": 0.02913453299057412,
      "av_wer": null,
      "strict_wer": 0.058925476603119586,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02041209320238783,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.020891364902506964,
      "wer_uncapped": 0.020891364902506964,
      "cer": 0.010408229386035963,
      "av_wer": null,
      "strict_wer": 0.02541782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.07036247334754797,
      "wer_uncapped": 0.07036247334754797,
      "cer": 0.04550358570793933,
      "av_wer": null,
      "strict_wer": 0.07493146512336278,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020103563813585135,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06483357452966715,
      "wer_uncapped": 0.06483357452966715,
      "cer": 0.03904218110071448,
      "av_wer": null,
      "strict_wer": 0.06772793053545587,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016208393632416787,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09561128526645768,
      "wer_uncapped": 0.09815830721003135,
      "cer": 0.06641553432889367,
      "av_wer": null,
      "strict_wer": 0.10168495297805642,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022139498432601882,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.014798050139275766,
      "wer_uncapped": 0.014798050139275766,
      "cer": 0.006155839948161348,
      "av_wer": null,
      "strict_wer": 0.019672701949860726,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0015668523676880223,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.057264696923545536,
      "wer_uncapped": 0.057264696923545536,
      "cer": 0.03503204924795329,
      "av_wer": null,
      "strict_wer": 0.06381358513554676,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02040816326530612,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06512301013024602,
      "wer_uncapped": 0.06512301013024602,
      "cer": 0.039430809243370904,
      "av_wer": null,
      "strict_wer": 0.0678726483357453,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017655571635311142,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07092476489028213,
      "wer_uncapped": 0.0713166144200627,
      "cer": 0.04915018610700032,
      "av_wer": null,
      "strict_wer": 0.07660658307210032,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01920062695924765,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.10934256055363321,
      "wer_uncapped": 0.10934256055363321,
      "cer": 0.06110987955368359,
      "av_wer": null,
      "strict_wer": 0.11176470588235295,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006920415224913495,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07337707182320442,
      "wer_uncapped": 0.07337707182320442,
      "cer": 0.04085840521775721,
      "av_wer": null,
      "strict_wer": 0.08373618784530387,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016574585635359115,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.0483983286908078,
      "wer_uncapped": 0.04874651810584958,
      "cer": 0.02867325449538312,
      "av_wer": null,
      "strict_wer": 0.05083565459610028,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00766016713091922,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.11955528480048735,
      "wer_uncapped": 0.11985988425220835,
      "cer": 0.07523640286856635,
      "av_wer": null,
      "strict_wer": 0.12488577520560463,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02771855010660981,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.0894356005788712,
      "wer_uncapped": 0.0894356005788712,
      "cer": 0.05386983946668261,
      "av_wer": null,
      "strict_wer": 0.09261939218523878,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02011577424023155,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.13322884012539185,
      "wer_uncapped": 0.1349921630094044,
      "cer": 0.09426431678550608,
      "av_wer": null,
      "strict_wer": 0.13832288401253917,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028409090909090908,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2505190311418685,
      "wer_uncapped": 0.27162629757785467,
      "cer": 0.1743885317372349,
      "av_wer": null,
      "strict_wer": 0.2532871972318339,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.038408304498269895,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.11507251381215469,
      "wer_uncapped": 0.11507251381215469,
      "cer": 0.07357458447296444,
      "av_wer": null,
      "strict_wer": 0.12474102209944751,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01968232044198895,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.04069179097694573,
      "cer": 0.023130257085975135,
      "wer_arith": 0.04915625424132869,
      "done": 9,
      "total": 9,
      "ci": [
       0.03779,
       0.04337
      ]
     },
     "accented": {
      "wer": 0.12301870235287667,
      "cer": 0.09287329984430538,
      "wer_arith": 0.12301870235287665,
      "done": 1,
      "total": 1,
      "ci": [
       0.10594,
       0.1416
      ]
     },
     "noisy": {
      "wer": 0.060769684425952104,
      "cer": 0.03784113331150345,
      "wer_arith": 0.0685303748805329,
      "done": 5,
      "total": 5,
      "ci": [
       0.0545,
       0.06699
      ]
     },
     "telephony": {
      "wer": 0.045880018225731255,
      "cer": 0.02710488854245355,
      "wer_arith": 0.05637306938030219,
      "done": 8,
      "total": 8,
      "ci": [
       0.04186,
       0.04971
      ]
     },
     "callcenter": {
      "wer": 0.11212953564098219,
      "cer": 0.0721064242640707,
      "wer_arith": 0.12603493319159692,
      "done": 6,
      "total": 6,
      "ci": [
       0.10346,
       0.12111
      ]
     }
    },
    "arena": 0.0589428725568001,
    "arena_arith": 0.0746769809128661,
    "arena_cer": 0.03572993134272803,
    "arena_strict": 0.06489254739503143,
    "zero_shot": 0.05665552813536318,
    "arena_real": 0.045289415401174565,
    "exposure": 0.1345,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 5,
    "boh_share": 0.9766666666666667,
    "arena_ci": [
     0.05521,
     0.06261
    ],
    "rank_set": [
     1,
     3
    ]
   }
  },
  {
   "model": "cohere-transcribe-ar-sft-step-6000",
   "hf_id": "https://huggingface.co/Cohere-AR/cohere-transcribe-ar-sft/tree/step-6000",
   "params_b": 2.07,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.014181543877294443,
     "cer": 0.0044232667628521525,
     "rtfx": 372.66,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.02499161355249916,
     "cer": 0.009258046202890956,
     "rtfx": 374.01,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.05896771482596821,
     "cer": 0.03339138059110781,
     "rtfx": 386.85,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07230588486596176,
     "cer": 0.035487471613871675,
     "rtfx": 407.27,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.05867433209333784,
     "cer": 0.03470762082604285,
     "rtfx": 401.58,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08023249497528383,
     "cer": 0.050784349630714765,
     "rtfx": 379.57,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08503288211059648,
     "cer": 0.04257168119237085,
     "rtfx": 384.89,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.022667627232027993,
     "cer": 0.010559191640831325,
     "rtfx": 431.94,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.07879350348027843,
     "cer": 0.040759178593652766,
     "rtfx": 341.01,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.16546920419020458,
     "cer": 0.12047585560243788,
     "rtfx": 352.62,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.1167627566140417,
     "cer": 0.06858585755323608,
     "rtfx": 363.06,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01306807099668422,
     "cer": 0.007864438059685843,
     "rtfx": 405.07,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.05950317735413056,
     "cer": 0.027611317606007737,
     "rtfx": 368.14,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.023676880222841225,
     "cer": 0.009656225112821874,
     "rtfx": 348.85,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.0766067621078282,
     "cer": 0.04560614081524616,
     "rtfx": 395.02,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.07105643994211289,
     "cer": 0.0398642070841966,
     "rtfx": 401.55,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10325235109717869,
     "cer": 0.06626083748385907,
     "rtfx": 333.77,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.018279944289693595,
     "cer": 0.005740642421024688,
     "rtfx": 346.66,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.06183368869936034,
     "cer": 0.03358920063525675,
     "rtfx": 394.5,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.06874095513748191,
     "cer": 0.03886572976211278,
     "rtfx": 399.44,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.0832680250783699,
     "cer": 0.05235196458218041,
     "rtfx": 335.15,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11660899653979238,
     "cer": 0.05761954971159214,
     "rtfx": 429.73,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0844267955801105,
     "cer": 0.042217839289964976,
     "rtfx": 406.52,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.05170612813370474,
     "cer": 0.028470931775949032,
     "rtfx": 353.06,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.12305817849527871,
     "cer": 0.0716516675489677,
     "rtfx": 397.16,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.09710564399421129,
     "cer": 0.05519083397818327,
     "rtfx": 397.56,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14322100313479624,
     "cer": 0.09359896698026195,
     "rtfx": 333.67,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2778546712802768,
     "cer": 0.1744092290516653,
     "rtfx": 441.54,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.12689917127071823,
     "cer": 0.07236372292311355,
     "rtfx": 398.32,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 116.81,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.055094177445916465,
     "cer": 0.029104687450481684,
     "done": 9,
     "total": 9,
     "ci": [
      0.05309,
      0.05712
     ]
    },
    "accented": {
     "wer": 0.16546920419020458,
     "cer": 0.12047585560243788,
     "done": 1,
     "total": 1,
     "ci": [
      0.13148,
      0.22714
     ]
    },
    "noisy": {
     "wer": 0.07827103799680055,
     "cer": 0.045994653609871955,
     "done": 5,
     "total": 5,
     "ci": [
      0.07012,
      0.09
     ]
    },
    "telephony": {
     "wer": 0.06321620670945292,
     "cer": 0.033232585258478164,
     "done": 8,
     "total": 8,
     "ci": [
      0.05913,
      0.06724
     ]
    },
    "callcenter": {
     "wer": 0.136640799384831,
     "cer": 0.0826142253763568,
     "done": 6,
     "total": 6,
     "ci": [
      0.12796,
      0.1454
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "CohereLabs/cohere-transcribe-arabic-07-2026",
   "in_domain": [
    "earnings22"
   ],
   "notes": "Cohere-AR SFT for Arabic, English and code-switched phone calls, snapshot step 6000 of 10,000 (branch `step-6000`, commit 4005a4913c), weights gated on the Hub; run with the card's prompt (<|pnc|>, language forced). 69 training sources named only by kind on the card, except Earnings-22, SpokenWOZ and L2-ARCTIC",
   "training_data": "undisclosed",
   "hallucination_rate": 1.0,
   "inserted_wpm": 502.92,
   "arena_wer": 0.08426490438631495,
   "arena_cer": 0.049175163822109146,
   "arena_ci": [
    0.08096,
    0.08818
   ],
   "rank_range": [
    3,
    3
   ],
   "rtfx": 368.7,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.9866666666666667,
    "halluc_3plus_ci": [
     0.96622,
     0.9948
    ],
    "inserted_wpm": 502.916411085708,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.010611013326628112,
      "wer_uncapped": 0.010611013326628112,
      "cer": 0.0043716099783732525,
      "av_wer": null,
      "strict_wer": 0.014181543877294443,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001408096555192356,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.020630660852063065,
      "wer_uncapped": 0.02074248015207425,
      "cer": 0.009971891313077233,
      "av_wer": null,
      "strict_wer": 0.024823884602482388,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0021804763502180475,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05266475243364381,
      "wer_uncapped": 0.05266475243364381,
      "cer": 0.03299992699131197,
      "av_wer": null,
      "strict_wer": 0.05896771482596821,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024161355837243506,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.06557727224180285,
      "wer_uncapped": 0.06814055324148244,
      "cer": 0.037179751829170396,
      "av_wer": null,
      "strict_wer": 0.06974260386628217,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008651073373918615,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.055630706797429826,
      "wer_uncapped": 0.055630706797429826,
      "cer": 0.035028138948185523,
      "av_wer": null,
      "strict_wer": 0.05867433209333784,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014076766993574569,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07615840078222609,
      "wer_uncapped": 0.07653864957357814,
      "cer": 0.05146749746556883,
      "av_wer": null,
      "strict_wer": 0.07985224618393177,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.022163072410234123,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07625578955449218,
      "wer_uncapped": 0.07635814631899486,
      "cer": 0.042096768139334106,
      "av_wer": null,
      "strict_wer": 0.08493052534609381,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017503006729957266,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.02009468429990223,
      "wer_uncapped": 0.02009468429990223,
      "cer": 0.010630549485986246,
      "av_wer": null,
      "strict_wer": 0.022667627232027993,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004245355838007513,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06533642691415313,
      "wer_uncapped": 0.06589327146171693,
      "cer": 0.03943323727185399,
      "av_wer": null,
      "strict_wer": 0.07823665893271461,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015591647331786543,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.12713212307354796,
      "wer_uncapped": 0.1600943344485274,
      "cer": 0.09579624570371023,
      "av_wer": null,
      "strict_wer": 0.13245214720561618,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.003015075376884422,
      "insertions": 0.05479076399934185,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09089929414300339,
      "wer_uncapped": 0.11347594159168059,
      "cer": 0.0624595066035385,
      "av_wer": null,
      "strict_wer": 0.09402446252492053,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.03771754943693087,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.012482933489370003,
      "wer_uncapped": 0.012482933489370003,
      "cer": 0.00800273777871377,
      "av_wer": null,
      "strict_wer": 0.01306807099668422,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004095962551199532,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04371269015983054,
      "wer_uncapped": 0.04756402849990372,
      "cer": 0.024669643259820503,
      "av_wer": null,
      "strict_wer": 0.05545927209705372,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016368187945310995,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.020020891364902507,
      "wer_uncapped": 0.02054317548746518,
      "cer": 0.00988174307468006,
      "av_wer": null,
      "strict_wer": 0.023154596100278552,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002959610027855153,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.07112397197685044,
      "wer_uncapped": 0.07112397197685044,
      "cer": 0.04705845021260392,
      "av_wer": null,
      "strict_wer": 0.0766067621078282,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021778860798050564,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.0678726483357453,
      "wer_uncapped": 0.0678726483357453,
      "cer": 0.04029774894621985,
      "av_wer": null,
      "strict_wer": 0.07105643994211289,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0170767004341534,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09639498432601881,
      "wer_uncapped": 0.0985501567398119,
      "cer": 0.06829902686219112,
      "av_wer": null,
      "strict_wer": 0.10109717868338558,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023706896551724137,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.014449860724233984,
      "wer_uncapped": 0.014449860724233984,
      "cer": 0.005993844160051839,
      "av_wer": null,
      "strict_wer": 0.018279944289693595,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001392757660167131,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.0557416996649406,
      "wer_uncapped": 0.0557416996649406,
      "cer": 0.03357238052928857,
      "av_wer": null,
      "strict_wer": 0.06183368869936034,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02040816326530612,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06599131693198264,
      "wer_uncapped": 0.06599131693198264,
      "cer": 0.038922603210666346,
      "av_wer": null,
      "strict_wer": 0.06874095513748191,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018523878437047756,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07817398119122257,
      "wer_uncapped": 0.0789576802507837,
      "cer": 0.05305170635454505,
      "av_wer": null,
      "strict_wer": 0.08248432601880877,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024294670846394983,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.11245674740484429,
      "wer_uncapped": 0.11280276816608996,
      "cer": 0.062587748466711,
      "av_wer": null,
      "strict_wer": 0.11626297577854672,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00865051903114187,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07415400552486189,
      "wer_uncapped": 0.07415400552486189,
      "cer": 0.041510624868504105,
      "av_wer": null,
      "strict_wer": 0.0844267955801105,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016574585635359115,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.049965181058495824,
      "wer_uncapped": 0.049965181058495824,
      "cer": 0.030536206058642476,
      "av_wer": null,
      "strict_wer": 0.05170612813370474,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00644150417827298,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.11742308863844045,
      "wer_uncapped": 0.11772768809016143,
      "cer": 0.07485561972456686,
      "av_wer": null,
      "strict_wer": 0.12275357904355773,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028175449284191287,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.09377713458755427,
      "wer_uncapped": 0.09377713458755427,
      "cer": 0.05656034199276554,
      "av_wer": null,
      "strict_wer": 0.09710564399421129,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02199710564399421,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.13655956112852666,
      "wer_uncapped": 0.13891065830721003,
      "cer": 0.09870397775685008,
      "av_wer": null,
      "strict_wer": 0.14086990595611285,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.029780564263322883,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.25432525951557095,
      "wer_uncapped": 0.2750865051903114,
      "cer": 0.1822212369762802,
      "av_wer": null,
      "strict_wer": 0.25674740484429065,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04083044982698962,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.11723066298342541,
      "wer_uncapped": 0.11723066298342541,
      "cer": 0.0747107090258784,
      "av_wer": null,
      "strict_wer": 0.12689917127071823,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020027624309392266,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.040906021474930464,
      "cer": 0.02319876637977056,
      "wer_arith": 0.04921774524470459,
      "done": 9,
      "total": 9,
      "ci": [
       0.03799,
       0.04351
      ]
     },
     "accented": {
      "wer": 0.12713212307354796,
      "cer": 0.09579624570371023,
      "wer_arith": 0.12713212307354796,
      "done": 1,
      "total": 1,
      "ci": [
       0.10821,
       0.14887
      ]
     },
     "noisy": {
      "wer": 0.061032594312167655,
      "cer": 0.03806738163753941,
      "wer_arith": 0.0692623580293041,
      "done": 5,
      "total": 5,
      "ci": [
       0.05487,
       0.06709
      ]
     },
     "telephony": {
      "wer": 0.045664599414274004,
      "cer": 0.026066328220135465,
      "wer_arith": 0.05714540438641082,
      "done": 8,
      "total": 8,
      "ci": [
       0.04194,
       0.04916
      ]
     },
     "callcenter": {
      "wer": 0.1143874711725073,
      "cer": 0.07469840632601574,
      "wer_arith": 0.12821348131866894,
      "done": 6,
      "total": 6,
      "ci": [
       0.10563,
       0.12326
      ]
     }
    },
    "arena": 0.05938997593870937,
    "arena_arith": 0.07567791997736256,
    "arena_cer": 0.035824167466145695,
    "arena_strict": 0.06504964760387928,
    "zero_shot": 0.05543720641132076,
    "arena_real": 0.04525569403799312,
    "exposure": 0.1345,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 6,
    "boh_share": 0.9866666666666667,
    "arena_ci": [
     0.05578,
     0.06288
    ],
    "rank_set": [
     1,
     3
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-best-task06",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-best-task06",
   "params_b": 2.04,
   "license": "Apache-2.0 (gated)",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01951219512195122,
     "cer": 0.006710836054370111,
     "rtfx": 178.72,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04288270155428827,
     "cer": 0.018079392113192715,
     "rtfx": 169.11,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06057847188178444,
     "cer": 0.03602177381053862,
     "rtfx": 186.83,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09174409911353198,
     "cer": 0.0455525191486086,
     "rtfx": 224.05,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06594521474467366,
     "cer": 0.03888341591801326,
     "rtfx": 190.9,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08512140800695311,
     "cer": 0.05277828643512584,
     "rtfx": 167.79,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08935745541083447,
     "cer": 0.04461791082480738,
     "rtfx": 160.48,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04250501723871764,
     "cer": 0.02254679067631186,
     "rtfx": 201.4,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08278422273781902,
     "cer": 0.04404558182949596,
     "rtfx": 141.06,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14676685131355235,
     "cer": 0.10425457102672292,
     "rtfx": 166.21,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10275338110889595,
     "cer": 0.06713419683292612,
     "rtfx": 182.6,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.015116052272283987,
     "cer": 0.009143719984061405,
     "rtfx": 190.25,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.07182746004236472,
     "cer": 0.028180232117120535,
     "rtfx": 201.75,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02524373259052925,
     "cer": 0.00985532253782851,
     "rtfx": 155.84,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08406944867499239,
     "cer": 0.05087347803070408,
     "rtfx": 178.35,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08277858176555716,
     "cer": 0.04795187339307556,
     "rtfx": 180.84,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10227272727272728,
     "cer": 0.06766279284264896,
     "rtfx": 149.04,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.023676880222841225,
     "cer": 0.008063445712768782,
     "rtfx": 158.71,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07051477307340846,
     "cer": 0.03946532556908417,
     "rtfx": 177.74,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07583212735166425,
     "cer": 0.042709867452135494,
     "rtfx": 184.67,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08503134796238244,
     "cer": 0.05368013281682346,
     "rtfx": 149.83,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13217993079584775,
     "cer": 0.068411585933139,
     "rtfx": 225.53,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08917472375690608,
     "cer": 0.04436018635018873,
     "rtfx": 165.44,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06302228412256268,
     "cer": 0.033547916113618265,
     "rtfx": 156.35,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.13554675601583918,
     "cer": 0.08335097935415564,
     "rtfx": 176.77,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.10622286541244573,
     "cer": 0.06028306832081076,
     "rtfx": 181.96,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1481191222570533,
     "cer": 0.09780483305663162,
     "rtfx": 148.28,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.28027681660899656,
     "cer": 0.17720027290206536,
     "rtfx": 224.77,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.13838052486187846,
     "cer": 0.0770224776413779,
     "rtfx": 160.54,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 56.89,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06449230953450598,
     "cer": 0.03435961186782937,
     "done": 9,
     "total": 9,
     "ci": [
      0.06242,
      0.06664
     ]
    },
    "accented": {
     "wer": 0.14676685131355235,
     "cer": 0.10425457102672292,
     "done": 1,
     "total": 1,
     "ci": [
      0.13163,
      0.16404
     ]
    },
    "noisy": {
     "wer": 0.0794235742825404,
     "cer": 0.048695532727436645,
     "done": 5,
     "total": 5,
     "ci": [
      0.07443,
      0.08469
     ]
    },
    "telephony": {
     "wer": 0.07041916193471237,
     "cer": 0.0367518119919152,
     "done": 8,
     "total": 8,
     "ci": [
      0.06617,
      0.07475
     ]
    },
    "callcenter": {
     "wer": 0.14526139487979597,
     "cer": 0.08820159123144326,
     "done": 6,
     "total": 6,
     "ci": [
      0.13618,
      0.15419
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT best-task06: task-arithmetic merge run6b + 0.6 x (run10 - run6b) + 0.6 x (avg - run6b), avg the 0.5/0.5 average of run6b-soup70-sip-v5 and sip-v5-grpo1, no further training (merge weights picked on the Audioluna calls); weights gated on the Hub. Every parent carries run 5's in-domain train rows (MGB-3 train and the 20 leaked FLEURS ar_eg test sentences included); sip-v5 adds an MGB-2 part of kejue-voice, sip-v5-grpo1 EdAcc and Earnings-22 (English); English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.4866666666666667,
   "inserted_wpm": 89.22,
   "arena_wer": 0.09035231232840014,
   "arena_cer": 0.052657438339447575,
   "arena_ci": [
    0.08794,
    0.09297
   ],
   "rank_range": [
    4,
    5
   ],
   "rtfx": 170.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.4866666666666667,
    "halluc_3plus": 0.4266666666666667,
    "halluc_3plus_ci": [
     0.37197,
     0.48322
    ],
    "inserted_wpm": 89.22098923771819,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01594166457128489,
      "wer_uncapped": 0.01594166457128489,
      "cer": 0.006962193669261105,
      "av_wer": null,
      "strict_wer": 0.01951219512195122,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0018606990193613276,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.03930448395393045,
      "wer_uncapped": 0.03930448395393045,
      "cer": 0.020024093160219514,
      "av_wer": null,
      "strict_wer": 0.04282679190428268,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003913675500391367,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.056376496953568174,
      "wer_uncapped": 0.056376496953568174,
      "cer": 0.03609549536394831,
      "av_wer": null,
      "strict_wer": 0.06057847188178444,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281882484767843,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08586991348926626,
      "wer_uncapped": 0.08693794723913276,
      "cer": 0.04823505126264364,
      "av_wer": null,
      "strict_wer": 0.09067606536366549,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011427961123571504,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06243659113966858,
      "wer_uncapped": 0.06243659113966858,
      "cer": 0.039174002787431855,
      "av_wer": null,
      "strict_wer": 0.06594521474467366,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01551403449442002,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08044977999891358,
      "wer_uncapped": 0.0809386713020805,
      "cer": 0.053457953168657125,
      "av_wer": null,
      "strict_wer": 0.08463251670378619,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.003009027081243731,
      "insertions": 0.02210875115432669,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07940326006294941,
      "wer_uncapped": 0.07950561682745208,
      "cer": 0.0441862792938203,
      "av_wer": null,
      "strict_wer": 0.08925509864633178,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019806033931267432,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.0381567436834251,
      "wer_uncapped": 0.0381567436834251,
      "cer": 0.021811530143056507,
      "av_wer": null,
      "strict_wer": 0.04250501723871764,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019245613132300724,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06747099767981439,
      "wer_uncapped": 0.06951276102088166,
      "cer": 0.04181075888568684,
      "av_wer": null,
      "strict_wer": 0.08064965197215777,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01531322505800464,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1294356386771239,
      "wer_uncapped": 0.14183074644874677,
      "cer": 0.0968391057842014,
      "av_wer": null,
      "strict_wer": 0.13437174354192946,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03466242527285691,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09844280403038957,
      "wer_uncapped": 0.09968209494046015,
      "cer": 0.07005980563169699,
      "av_wer": null,
      "strict_wer": 0.10151409019882537,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018373834797133465,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.014628437682855471,
      "wer_uncapped": 0.014628437682855471,
      "cer": 0.009055729591702425,
      "av_wer": null,
      "strict_wer": 0.015116052272283987,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005558806319485079,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04467552474484884,
      "wer_uncapped": 0.04525322549585981,
      "cer": 0.026203039733008613,
      "av_wer": null,
      "strict_wer": 0.07105719237435008,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010206046601193916,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.022806406685236768,
      "wer_uncapped": 0.022806406685236768,
      "cer": 0.01077271990928236,
      "av_wer": null,
      "strict_wer": 0.02524373259052925,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.07980505635089857,
      "wer_uncapped": 0.07980505635089857,
      "cer": 0.05229421844259694,
      "av_wer": null,
      "strict_wer": 0.08406944867499239,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026195552848004875,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.07916063675832127,
      "wer_uncapped": 0.07916063675832127,
      "cer": 0.04878777913963708,
      "av_wer": null,
      "strict_wer": 0.08277858176555716,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01939218523878437,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09678683385579938,
      "wer_uncapped": 0.09815830721003135,
      "cer": 0.06995829409390555,
      "av_wer": null,
      "strict_wer": 0.1009012539184953,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022139498432601882,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.020891364902506964,
      "wer_uncapped": 0.020891364902506964,
      "cer": 0.008464279928721853,
      "av_wer": null,
      "strict_wer": 0.023676880222841225,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002959610027855153,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06625038074931465,
      "wer_uncapped": 0.06625038074931465,
      "cer": 0.040458209049946056,
      "av_wer": null,
      "strict_wer": 0.07051477307340846,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022692659153213526,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07178002894356006,
      "wer_uncapped": 0.07178002894356006,
      "cer": 0.043227407252399035,
      "av_wer": null,
      "strict_wer": 0.07583212735166425,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01678726483357453,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07954545454545454,
      "wer_uncapped": 0.08013322884012539,
      "cer": 0.05498004394815911,
      "av_wer": null,
      "strict_wer": 0.0844435736677116,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02018025078369906,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.12629757785467127,
      "wer_uncapped": 0.12802768166089964,
      "cer": 0.07330229808615976,
      "av_wer": null,
      "strict_wer": 0.13044982698961938,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01314878892733564,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07855662983425414,
      "wer_uncapped": 0.07855662983425414,
      "cer": 0.04361455922575216,
      "av_wer": null,
      "strict_wer": 0.08917472375690608,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.019941298342541436,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06023676880222841,
      "wer_uncapped": 0.06023676880222841,
      "cer": 0.03665154705977645,
      "av_wer": null,
      "strict_wer": 0.06302228412256268,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009052924791086351,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13143466341760585,
      "wer_uncapped": 0.13143466341760585,
      "cer": 0.08758012311988322,
      "av_wer": null,
      "strict_wer": 0.13554675601583918,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031982942430703626,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.10173661360347323,
      "wer_uncapped": 0.10173661360347323,
      "cer": 0.06256913096768407,
      "av_wer": null,
      "strict_wer": 0.10622286541244573,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01997105643994211,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.1426332288401254,
      "wer_uncapped": 0.1445924764890282,
      "cer": 0.10215704740122876,
      "av_wer": null,
      "strict_wer": 0.14615987460815047,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030760188087774296,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.26262975778546715,
      "wer_uncapped": 0.2771626297577855,
      "cer": 0.19027562255227962,
      "av_wer": null,
      "strict_wer": 0.2657439446366782,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.037024221453287195,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.12733080110497239,
      "wer_uncapped": 0.12879834254143646,
      "cer": 0.07954975804754892,
      "av_wer": null,
      "strict_wer": 0.13691298342541436,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02365331491712707,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.0526610508749833,
      "cer": 0.030133040527599773,
      "wer_arith": 0.05837888128142454,
      "done": 9,
      "total": 9,
      "ci": [
       0.04917,
       0.05583
      ]
     },
     "accented": {
      "wer": 0.1294356386771239,
      "cer": 0.09683910578420142,
      "wer_arith": 0.1294356386771239,
      "done": 1,
      "total": 1,
      "ci": [
       0.10876,
       0.15161
      ]
     },
     "noisy": {
      "wer": 0.06722322785796708,
      "cer": 0.04225514989154217,
      "wer_arith": 0.0754003475361291,
      "done": 5,
      "total": 5,
      "ci": [
       0.06103,
       0.07375
      ]
     },
     "telephony": {
      "wer": 0.05172523327614904,
      "cer": 0.029773037381127257,
      "wer_arith": 0.06282817490718325,
      "done": 8,
      "total": 8,
      "ci": [
       0.04745,
       0.05577
      ]
     },
     "callcenter": {
      "wer": 0.12514816808097906,
      "cer": 0.08229208298445301,
      "wer_arith": 0.13766697225897875,
      "done": 6,
      "total": 6,
      "ci": [
       0.11548,
       0.13426
      ]
     }
    },
    "arena": 0.06914415844451904,
    "arena_arith": 0.0833258506251606,
    "arena_cer": 0.042016056611934686,
    "arena_strict": 0.07500631432306158,
    "zero_shot": 0.06142794948012354,
    "arena_real": 0.05522119532074743,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 10,
    "boh_share": 0.43333333333333335,
    "arena_ci": [
     0.0649,
     0.07323
    ],
    "rank_set": [
     4,
     9
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-best-grpo2",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-best-grpo2",
   "params_b": 2.04,
   "license": "Apache-2.0 (gated)",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.019713351772692983,
     "cer": 0.006986103728453185,
     "rtfx": 180.58,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.0427149726042715,
     "cer": 0.01777370190838028,
     "rtfx": 168.9,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.061558932698368235,
     "cer": 0.03582692986835856,
     "rtfx": 189.5,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09195770586350528,
     "cer": 0.046803433278164816,
     "rtfx": 229.21,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06810111599594183,
     "cer": 0.040000882210230695,
     "rtfx": 193.39,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08474115921560106,
     "cer": 0.0525849966428615,
     "rtfx": 170.85,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08986923923334783,
     "cer": 0.04496652772514841,
     "rtfx": 160.66,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04137292234858231,
     "cer": 0.022147204041795845,
     "rtfx": 202.51,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08306264501160093,
     "cer": 0.04437616677037959,
     "rtfx": 145.62,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14594416716941808,
     "cer": 0.1043834974214721,
     "rtfx": 165.13,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.0994126838730535,
     "cer": 0.06348459910651305,
     "rtfx": 181.2,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.014530914764969769,
     "cer": 0.008388733930331564,
     "rtfx": 190.07,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.07490853071442326,
     "cer": 0.02874914662823333,
     "rtfx": 202.15,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.024895543175487464,
     "cer": 0.00935757897531192,
     "rtfx": 156.75,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08544014620773682,
     "cer": 0.050847008999470616,
     "rtfx": 182.08,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08567293777134588,
     "cer": 0.049449589376201294,
     "rtfx": 180.53,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10364420062695925,
     "cer": 0.06699870872532743,
     "rtfx": 151.15,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.024547353760445683,
     "cer": 0.008693920891956464,
     "rtfx": 157.02,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07081937252512946,
     "cer": 0.04004764425622022,
     "rtfx": 178.77,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07858176555716354,
     "cer": 0.043558573175906744,
     "rtfx": 180.62,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08679467084639499,
     "cer": 0.053901494189263974,
     "rtfx": 153.18,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13217993079584775,
     "cer": 0.07138869937356572,
     "rtfx": 225.36,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09064226519337017,
     "cer": 0.0448362634746829,
     "rtfx": 164.61,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06232590529247911,
     "cer": 0.03334881868861163,
     "rtfx": 159.58,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.13783125190374657,
     "cer": 0.08499205929062996,
     "rtfx": 179.17,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.10911722141823445,
     "cer": 0.06300391902348917,
     "rtfx": 183.16,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.15066614420062696,
     "cer": 0.09909610772920126,
     "rtfx": 150.19,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2740484429065744,
     "cer": 0.17019165167772746,
     "rtfx": 224.13,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.13812154696132597,
     "cer": 0.07717550243139389,
     "rtfx": 163.35,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 43.55,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06478800497154577,
     "cer": 0.03460732735264143,
     "done": 9,
     "total": 9,
     "ci": [
      0.06273,
      0.06693
     ]
    },
    "accented": {
     "wer": 0.14594416716941808,
     "cer": 0.1043834974214721,
     "done": 1,
     "total": 1,
     "ci": [
      0.13101,
      0.16313
     ]
    },
    "noisy": {
     "wer": 0.07981310233091658,
     "cer": 0.04802749703656486,
     "done": 5,
     "total": 5,
     "ci": [
      0.07498,
      0.08496
     ]
    },
    "telephony": {
     "wer": 0.07162560051971807,
     "cer": 0.03744555949002011,
     "done": 8,
     "total": 8,
     "ci": [
      0.06744,
      0.07567
     ]
    },
    "callcenter": {
     "wer": 0.14535175211383125,
     "cer": 0.08796800980684223,
     "done": 6,
     "total": 6,
     "ci": [
      0.13708,
      0.15378
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT best-grpo2: task06 + 0.3 x (run20 - task06), then GRPO (LoRA r 16, merged; 935 steps) on human-annotated Arabic customer-service call segments, English call-centre clips, quiet short answers under a louder turn, joined multi-turn pieces and windows without speech; weights gated on the Hub. Carries its parents' in-domain train rows (run 5's, MGB-3 train and the 20 leaked FLEURS ar_eg test sentences included); English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.45,
   "inserted_wpm": 56.34,
   "arena_wer": 0.09076487979069801,
   "arena_cer": 0.05275391709177686,
   "arena_ci": [
    0.08844,
    0.09325
   ],
   "rank_range": [
    4,
    5
   ],
   "rtfx": 168.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.45,
    "halluc_3plus": 0.41,
    "halluc_3plus_ci": [
     0.35582,
     0.46645
    ],
    "inserted_wpm": 56.34305470361903,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.016042242896655772,
      "wer_uncapped": 0.016042242896655772,
      "cer": 0.0073207119479107635,
      "av_wer": null,
      "strict_wer": 0.019713351772692983,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0018104098566758863,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.03913675500391368,
      "wer_uncapped": 0.03913675500391368,
      "cer": 0.019729621201980994,
      "av_wer": null,
      "strict_wer": 0.04265906295426591,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0035223079503522306,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05735695777015197,
      "wer_uncapped": 0.05735695777015197,
      "cer": 0.035774257136599256,
      "av_wer": null,
      "strict_wer": 0.061558932698368235,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02507178373835703,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08608352023923956,
      "wer_uncapped": 0.0876855708640393,
      "cer": 0.04917543980366522,
      "av_wer": null,
      "strict_wer": 0.09035565523870555,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011641567873544804,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06438112952316537,
      "wer_uncapped": 0.06438112952316537,
      "cer": 0.04021487924068945,
      "av_wer": null,
      "strict_wer": 0.06810111599594183,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015979032803517076,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08006953120756152,
      "wer_uncapped": 0.08072138627845075,
      "cer": 0.0532230546695349,
      "av_wer": null,
      "strict_wer": 0.08408930414471183,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.021456896083437448,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07981268712096011,
      "wer_uncapped": 0.07991504388546278,
      "cer": 0.044492824343430555,
      "av_wer": null,
      "strict_wer": 0.08976688246884516,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019217482535377056,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03741059023310863,
      "wer_uncapped": 0.03741059023310863,
      "cer": 0.02148905531555274,
      "av_wer": null,
      "strict_wer": 0.04137292234858231,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.018448000823341738,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06774941995359629,
      "wer_uncapped": 0.0694199535962877,
      "cer": 0.042483189241114314,
      "av_wer": null,
      "strict_wer": 0.08129930394431555,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015034802784222737,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.12938079306751493,
      "wer_uncapped": 0.14161136401031096,
      "cer": 0.09710349284686114,
      "av_wer": null,
      "strict_wer": 0.13371359622662207,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03378489551911369,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09456328465973382,
      "wer_uncapped": 0.09558704671587909,
      "cer": 0.0666957388487416,
      "av_wer": null,
      "strict_wer": 0.0983350396034269,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015571959696104316,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.013750731421884143,
      "wer_uncapped": 0.013750731421884143,
      "cer": 0.008318635322610367,
      "av_wer": null,
      "strict_wer": 0.014530914764969769,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005363760483713673,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.045060658578856154,
      "wer_uncapped": 0.04544579241286347,
      "cer": 0.02633833942181933,
      "av_wer": null,
      "strict_wer": 0.07413826304640862,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011361448103215868,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02176183844011142,
      "wer_uncapped": 0.02176183844011142,
      "cer": 0.010165235703871699,
      "av_wer": null,
      "strict_wer": 0.024895543175487464,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08178495278708499,
      "wer_uncapped": 0.08178495278708499,
      "cer": 0.05245287808593006,
      "av_wer": null,
      "strict_wer": 0.08544014620773682,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026347852573865366,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08176555716353111,
      "wer_uncapped": 0.08176555716353111,
      "cer": 0.050282502765238705,
      "av_wer": null,
      "strict_wer": 0.08567293777134588,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01997105643994211,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.0975705329153605,
      "wer_uncapped": 0.09933385579937304,
      "cer": 0.06874747746535718,
      "av_wer": null,
      "strict_wer": 0.10188087774294671,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02233542319749216,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.021413649025069637,
      "wer_uncapped": 0.021413649025069637,
      "cer": 0.00911226308115989,
      "av_wer": null,
      "strict_wer": 0.024547353760445683,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06716417910447761,
      "wer_uncapped": 0.06716417910447761,
      "cer": 0.04080726026527892,
      "av_wer": null,
      "strict_wer": 0.07081937252512946,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02254035942735303,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07467438494934878,
      "wer_uncapped": 0.07467438494934878,
      "cer": 0.043885085647663746,
      "av_wer": null,
      "strict_wer": 0.07858176555716354,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018234442836468887,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.08013322884012539,
      "wer_uncapped": 0.08130877742946709,
      "cer": 0.05457643840530965,
      "av_wer": null,
      "strict_wer": 0.08561912225705329,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020963949843260186,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.12802768166089964,
      "wer_uncapped": 0.128719723183391,
      "cer": 0.0769969703687283,
      "av_wer": null,
      "strict_wer": 0.1314878892733564,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01245674740484429,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07864295580110497,
      "wer_uncapped": 0.07864295580110497,
      "cer": 0.043867031348621924,
      "av_wer": null,
      "strict_wer": 0.09064226519337017,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01950966850828729,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.05971448467966574,
      "wer_uncapped": 0.05971448467966574,
      "cer": 0.036854041794913334,
      "av_wer": null,
      "strict_wer": 0.06232590529247911,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007311977715877437,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13402375875723424,
      "wer_uncapped": 0.13402375875723424,
      "cer": 0.08935711112521419,
      "av_wer": null,
      "strict_wer": 0.13783125190374657,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030612244897959183,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.1044862518089725,
      "wer_uncapped": 0.1044862518089725,
      "cer": 0.06555857821888733,
      "av_wer": null,
      "strict_wer": 0.10911722141823445,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019681620839363242,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14184952978056425,
      "wer_uncapped": 0.14635579937304075,
      "cer": 0.1017085967980627,
      "av_wer": null,
      "strict_wer": 0.14615987460815047,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03017241379310345,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2615916955017301,
      "wer_uncapped": 0.27197231833910035,
      "cer": 0.18384689278061037,
      "av_wer": null,
      "strict_wer": 0.26366782006920414,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03183391003460208,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1270718232044199,
      "wer_uncapped": 0.128021408839779,
      "cer": 0.08055964653902799,
      "av_wer": null,
      "strict_wer": 0.13717196132596685,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.020545580110497237,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.052879065989037195,
      "cer": 0.030387089301657278,
      "wer_arith": 0.058671425994261436,
      "done": 9,
      "total": 9,
      "ci": [
       0.04941,
       0.05605
      ]
     },
     "accented": {
      "wer": 0.12938079306751493,
      "cer": 0.09710349284686112,
      "wer_arith": 0.12938079306751493,
      "done": 1,
      "total": 1,
      "ci": [
       0.11089,
       0.14941
      ]
     },
     "noisy": {
      "wer": 0.06692619325135167,
      "cer": 0.04148887927241896,
      "wer_arith": 0.07548923319316436,
      "done": 5,
      "total": 5,
      "ci": [
       0.06117,
       0.07319
      ]
     },
     "telephony": {
      "wer": 0.05202804011833144,
      "cer": 0.030016999179615814,
      "wer_arith": 0.06360843367272079,
      "done": 8,
      "total": 8,
      "ci": [
       0.04795,
       0.05591
      ]
     },
     "callcenter": {
      "wer": 0.12569083880233575,
      "cer": 0.0829269857554361,
      "wer_arith": 0.13812292395543113,
      "done": 6,
      "total": 6,
      "ci": [
       0.11666,
       0.13454
      ]
     }
    },
    "arena": 0.0693551915959009,
    "arena_arith": 0.08371697919667609,
    "arena_cer": 0.04218003088007064,
    "arena_strict": 0.07543470861301944,
    "zero_shot": 0.06137718591285812,
    "arena_real": 0.055075998534930684,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 11,
    "boh_share": 0.42,
    "arena_ci": [
     0.06526,
     0.07328
    ],
    "rank_set": [
     4,
     10
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run20-mwer-s800",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-run20-mwer-s800",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.021222026653256225,
     "cer": 0.007660034930518643,
     "rtfx": 179.92,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.046125461254612546,
     "cer": 0.019236647888554087,
     "rtfx": 171.23,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06316968975418447,
     "cer": 0.03605830704969738,
     "rtfx": 190.29,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09281213286339848,
     "cer": 0.04813132673877064,
     "rtfx": 227.5,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07313155224890092,
     "cer": 0.04271367866962697,
     "rtfx": 192.25,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08349177032973003,
     "cer": 0.05129300697877882,
     "rtfx": 169.14,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09219785562578367,
     "cer": 0.04628015662498421,
     "rtfx": 160.09,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.030103432305871456,
     "cer": 0.014532093236881387,
     "rtfx": 204.84,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08677494199535962,
     "cer": 0.04781813939016801,
     "rtfx": 145.63,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14890583008830144,
     "cer": 0.10571964369432724,
     "rtfx": 166.98,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10404655423244787,
     "cer": 0.06521227982293828,
     "rtfx": 183.39,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01579871269748391,
     "cer": 0.009458297506448839,
     "rtfx": 192.91,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.0770267668014635,
     "cer": 0.029659409846013805,
     "rtfx": 209.65,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02837743732590529,
     "cer": 0.011945845500398195,
     "rtfx": 159.86,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08635394456289978,
     "cer": 0.050158814187400744,
     "rtfx": 182.18,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09044862518089725,
     "cer": 0.052145478145827616,
     "rtfx": 181.28,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10677899686520376,
     "cer": 0.0681424091496034,
     "rtfx": 153.7,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02541782729805014,
     "cer": 0.009423944783647465,
     "rtfx": 160.68,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0699055741699665,
     "cer": 0.039862361037586024,
     "rtfx": 180.05,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08060781476121563,
     "cer": 0.04570529941838696,
     "rtfx": 185.83,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08385579937304075,
     "cer": 0.052462645268400665,
     "rtfx": 152.81,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1328719723183391,
     "cer": 0.07107858339018792,
     "rtfx": 227.31,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09504488950276244,
     "cer": 0.04782874825721767,
     "rtfx": 165.14,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06302228412256268,
     "cer": 0.03391292805946376,
     "rtfx": 159.01,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.139811148339933,
     "cer": 0.085283218634198,
     "rtfx": 181.4,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11635311143270623,
     "cer": 0.06607423678889693,
     "rtfx": 183.16,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14949059561128528,
     "cer": 0.09688249400479616,
     "rtfx": 152.13,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2750865051903114,
     "cer": 0.1755876697885009,
     "rtfx": 225.98,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.1433011049723757,
     "cer": 0.08050804230285306,
     "rtfx": 159.08,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 105.58,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06544765144789971,
     "cer": 0.03485815461199779,
     "done": 9,
     "total": 9,
     "ci": [
      0.06337,
      0.06774
     ]
    },
    "accented": {
     "wer": 0.14890583008830144,
     "cer": 0.10571964369432724,
     "done": 1,
     "total": 1,
     "ci": [
      0.13414,
      0.16578
     ]
    },
    "noisy": {
     "wer": 0.0832011116334708,
     "cer": 0.04952096536123365,
     "done": 5,
     "total": 5,
     "ci": [
      0.07812,
      0.08834
     ]
    },
    "telephony": {
     "wer": 0.07256616961529025,
     "cer": 0.038184911188486166,
     "done": 8,
     "total": 8,
     "ci": [
      0.06824,
      0.07679
     ]
    },
    "callcenter": {
     "wer": 0.14784412494486238,
     "cer": 0.08970809826311814,
     "done": 6,
     "total": 6,
     "ci": [
      0.13943,
      0.15635
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 20 (the same weights as tag run20-mwer-s800 of Arabic-STT/qwen3-asr-1.7b-ar-run20): online RL (RLOO) from run16-soup on English call windows, far-end mixes (AMI, ICSI, HarperValleyBank, PriMock57), Arabic phone-call windows and synthetic TTS turns, then 800 steps of MWER; weights gated on the Hub. Carries the run9 line's in-domain train rows (run 5's, MGB-3 train and the 20 leaked FLEURS ar_eg test sentences included). Run without the card's two-channel front end, which only chunks mono; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.37333333333333335,
   "inserted_wpm": 51.86,
   "arena_wer": 0.09242445253223494,
   "arena_cer": 0.053690408229711606,
   "arena_ci": [
    0.09003,
    0.09495
   ],
   "rank_range": [
    6,
    7
   ],
   "rtfx": 176.7,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.37333333333333335,
    "halluc_3plus": 0.35333333333333333,
    "halluc_3plus_ci": [
     0.30141,
     0.40897
    ],
    "inserted_wpm": 51.85969999442369,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017852652753331658,
      "wer_uncapped": 0.017852652753331658,
      "cer": 0.008130269351313217,
      "av_wer": null,
      "strict_wer": 0.021222026653256225,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002061855670103093,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.042435424354243544,
      "wer_uncapped": 0.042435424354243544,
      "cer": 0.021335831883282023,
      "av_wer": null,
      "strict_wer": 0.046069551604606955,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003913675500391367,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.058477484417676306,
      "wer_uncapped": 0.058477484417676306,
      "cer": 0.03600788493830766,
      "av_wer": null,
      "strict_wer": 0.06316968975418447,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02507178373835703,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08843319448894585,
      "wer_uncapped": 0.08928762148883905,
      "cer": 0.051079153191586964,
      "av_wer": null,
      "strict_wer": 0.09185090248851864,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011321157748584856,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06920020290835306,
      "wer_uncapped": 0.06920020290835306,
      "cer": 0.04296702715099766,
      "av_wer": null,
      "strict_wer": 0.07313155224890092,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016824484274602636,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07882014232169048,
      "wer_uncapped": 0.07947199739257972,
      "cer": 0.052011472937220284,
      "av_wer": null,
      "strict_wer": 0.08283991525884078,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.019772937150306914,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08242278461577829,
      "wer_uncapped": 0.08242278461577829,
      "cer": 0.04595673335585501,
      "av_wer": null,
      "strict_wer": 0.09219785562578367,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.019268660917628393,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.026552771059537898,
      "wer_uncapped": 0.026552771059537898,
      "cer": 0.014505807326850478,
      "av_wer": null,
      "strict_wer": 0.030103432305871456,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0078989348016261,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07071925754060325,
      "wer_uncapped": 0.07424593967517401,
      "cer": 0.04397214217098944,
      "av_wer": null,
      "strict_wer": 0.08324825986078886,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0180046403712297,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13201338232874457,
      "wer_uncapped": 0.14429879888114958,
      "cer": 0.09836667547956876,
      "av_wer": null,
      "strict_wer": 0.13662041353589646,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.035265726978555366,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09925103723260952,
      "wer_uncapped": 0.10000538822134813,
      "cer": 0.0684774482930476,
      "av_wer": null,
      "strict_wer": 0.10329220324370925,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015625841909585644,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.015018529354398284,
      "wer_uncapped": 0.015018529354398284,
      "cer": 0.009529575907547319,
      "av_wer": null,
      "strict_wer": 0.01579871269748391,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004681100058513751,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04698632774889274,
      "wer_uncapped": 0.047756595416907376,
      "cer": 0.027150137554683623,
      "av_wer": null,
      "strict_wer": 0.07587136529944155,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011939148854226844,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.024895543175487464,
      "wer_uncapped": 0.024895543175487464,
      "cer": 0.0128381662076786,
      "av_wer": null,
      "strict_wer": 0.02837743732590529,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08163265306122448,
      "wer_uncapped": 0.08163265306122448,
      "cer": 0.0515961160119312,
      "av_wer": null,
      "strict_wer": 0.08635394456289978,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024977155041120927,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08654124457308249,
      "wer_uncapped": 0.08654124457308249,
      "cer": 0.05291321634629757,
      "av_wer": null,
      "strict_wer": 0.09044862518089725,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021562952243125905,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10050940438871474,
      "wer_uncapped": 0.10266457680250783,
      "cer": 0.06982375891295574,
      "av_wer": null,
      "strict_wer": 0.10462382445141066,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021747648902821316,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02193593314763231,
      "wer_uncapped": 0.02193593314763231,
      "cer": 0.01000323991576219,
      "av_wer": null,
      "strict_wer": 0.02541782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06533658239415169,
      "wer_uncapped": 0.06533658239415169,
      "cer": 0.04093418797994542,
      "av_wer": null,
      "strict_wer": 0.0699055741699665,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02193116052391106,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07727930535455861,
      "wer_uncapped": 0.07727930535455861,
      "cer": 0.04630653792113838,
      "av_wer": null,
      "strict_wer": 0.08060781476121563,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01837916063675832,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07876175548589341,
      "wer_uncapped": 0.07934952978056427,
      "cer": 0.05403829768151038,
      "av_wer": null,
      "strict_wer": 0.0832680250783699,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018612852664576802,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.12906574394463668,
      "wer_uncapped": 0.13044982698961938,
      "cer": 0.07662750314047144,
      "av_wer": null,
      "strict_wer": 0.1314878892733564,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011418685121107266,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08399516574585636,
      "wer_uncapped": 0.08399516574585636,
      "cer": 0.047043972228066486,
      "av_wer": null,
      "strict_wer": 0.09504488950276244,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01907803867403315,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06006267409470752,
      "wer_uncapped": 0.06023676880222841,
      "cer": 0.03774501862951563,
      "av_wer": null,
      "strict_wer": 0.06284818941504178,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007486072423398328,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13524215656411817,
      "wer_uncapped": 0.13524215656411817,
      "cer": 0.08992828584121343,
      "av_wer": null,
      "strict_wer": 0.139811148339933,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02832774901005178,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11186685962373372,
      "wer_uncapped": 0.11186685962373372,
      "cer": 0.06827897521748229,
      "av_wer": null,
      "strict_wer": 0.11635311143270623,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021562952243125905,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14204545454545456,
      "wer_uncapped": 0.1455721003134796,
      "cer": 0.10081169559173057,
      "av_wer": null,
      "strict_wer": 0.1459639498432602,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025666144200626958,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2667820069204152,
      "wer_uncapped": 0.27197231833910035,
      "cer": 0.19020172910662825,
      "av_wer": null,
      "strict_wer": 0.2698961937716263,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02768166089965398,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13294198895027623,
      "wer_uncapped": 0.13294198895027623,
      "cer": 0.0834630759520303,
      "av_wer": null,
      "strict_wer": 0.1433011049723757,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02166781767955801,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05301345133828261,
      "cer": 0.03020074535810665,
      "wer_arith": 0.059434879384462264,
      "done": 9,
      "total": 9,
      "ci": [
       0.0496,
       0.05613
      ]
     },
     "accented": {
      "wer": 0.13201338232874457,
      "cer": 0.09836667547956876,
      "wer_arith": 0.13201338232874457,
      "done": 1,
      "total": 1,
      "ci": [
       0.1123,
       0.15317
      ]
     },
     "noisy": {
      "wer": 0.07060412603437582,
      "cer": 0.044141490318072685,
      "wer_arith": 0.07856597648622374,
      "done": 5,
      "total": 5,
      "ci": [
       0.06465,
       0.07692
      ]
     },
     "telephony": {
      "wer": 0.05346190312079867,
      "cer": 0.031444025369080385,
      "wer_arith": 0.06479741789700251,
      "done": 8,
      "total": 8,
      "ci": [
       0.04931,
       0.0576
      ]
     },
     "callcenter": {
      "wer": 0.12885779861233196,
      "cer": 0.08476380687320939,
      "wer_arith": 0.14149019011645092,
      "done": 6,
      "total": 6,
      "ci": [
       0.11927,
       0.13783
      ]
     }
    },
    "arena": 0.07087212265886324,
    "arena_arith": 0.08560248517695959,
    "arena_cer": 0.043168709215449436,
    "arena_strict": 0.07689018327756607,
    "zero_shot": 0.06288813053964651,
    "arena_real": 0.05587510441863304,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 13,
    "boh_share": 0.36333333333333334,
    "arena_ci": [
     0.06677,
     0.07472
    ],
    "rank_set": [
     6,
     12
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run20-mwer-s1000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run20/tree/run20-mwer-s1000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02137289414131255,
     "cer": 0.007650542941757157,
     "rtfx": 179.12,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.0464050095046405,
     "cer": 0.019345822961701384,
     "rtfx": 172.85,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.0626094264304223,
     "cer": 0.0359487073322211,
     "rtfx": 193.93,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09291893623838514,
     "cer": 0.04818906123705785,
     "rtfx": 234.05,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07308927967534663,
     "cer": 0.042838658452309185,
     "rtfx": 193.63,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08381769786517464,
     "cer": 0.051221794950049845,
     "rtfx": 170.72,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09291435297730238,
     "cer": 0.046846027535682705,
     "rtfx": 161.47,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.029743220295373848,
     "cer": 0.014228958548627857,
     "rtfx": 206.59,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08593967517401392,
     "cer": 0.04645690728064717,
     "rtfx": 144.14,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14857675643064772,
     "cer": 0.10571964369432724,
     "rtfx": 166.24,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10415431865941052,
     "cer": 0.06530428648831005,
     "rtfx": 182.92,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.015701189779598206,
     "cer": 0.00943732567162301,
     "rtfx": 191.72,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.07625649913344887,
     "cer": 0.029280133505271942,
     "rtfx": 207.22,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.027681058495821725,
     "cer": 0.011448101937881603,
     "rtfx": 158.92,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08528784648187633,
     "cer": 0.049470619375330864,
     "rtfx": 181.6,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08929088277858177,
     "cer": 0.05169616335088989,
     "rtfx": 183.37,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10677899686520376,
     "cer": 0.06847445120826416,
     "rtfx": 152.51,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02524373259052925,
     "cer": 0.009324396071144147,
     "rtfx": 159.32,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07051477307340846,
     "cer": 0.03973001588141874,
     "rtfx": 179.73,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08060781476121563,
     "cer": 0.045630413619230675,
     "rtfx": 181.33,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08463949843260188,
     "cer": 0.052868474451208264,
     "rtfx": 152.64,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13460207612456748,
     "cer": 0.07163679216026794,
     "rtfx": 229.65,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0955628453038674,
     "cer": 0.04833883089060428,
     "rtfx": 166.11,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06371866295264624,
     "cer": 0.03434430581364481,
     "rtfx": 158.82,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.139201949436491,
     "cer": 0.08549497088406564,
     "rtfx": 180.09,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11794500723589002,
     "cer": 0.06747210503981428,
     "rtfx": 180.45,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.15184169278996865,
     "cer": 0.09854270429809998,
     "rtfx": 150.75,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2740484429065744,
     "cer": 0.17484339142839422,
     "rtfx": 225.65,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14140193370165746,
     "cer": 0.07923283571938654,
     "rtfx": 163.64,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 104.84,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06542338803355244,
     "cer": 0.03474738680445047,
     "done": 9,
     "total": 9,
     "ci": [
      0.06328,
      0.06772
     ]
    },
    "accented": {
     "wer": 0.14857675643064772,
     "cer": 0.10571964369432724,
     "done": 1,
     "total": 1,
     "ci": [
      0.13381,
      0.16524
     ]
    },
    "noisy": {
     "wer": 0.08263862065617882,
     "cer": 0.04927872447213531,
     "done": 5,
     "total": 5,
     "ci": [
      0.07768,
      0.08783
     ]
    },
    "telephony": {
     "wer": 0.07289105364990464,
     "cer": 0.038280797781346125,
     "done": 8,
     "total": 8,
     "ci": [
      0.06872,
      0.07723
     ]
    },
    "callcenter": {
     "wer": 0.1480262815038713,
     "cer": 0.08998838553056758,
     "done": 6,
     "total": 6,
     "ci": [
      0.13955,
      0.15637
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 20, S7all step 1000 + 1,000 MWER steps (the card's pick with its levelling front end and MBR decoding); tag `run20-mwer-s1000` of Arabic-STT/qwen3-asr-1.7b-ar-run20 (commit ae7e8163ce), weights gated on the Hub. Online RL (RLOO) from run16-soup on English call windows, far-end mixes (AMI, ICSI, HarperValleyBank, PriMock57), Arabic phone-call windows and synthetic TTS turns; carries the run9 line's in-domain train rows; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.37666666666666665,
   "inserted_wpm": 53.0,
   "arena_wer": 0.09242921714130214,
   "arena_cer": 0.0536999424822749,
   "arena_ci": [
    0.09007,
    0.09492
   ],
   "rank_range": [
    6,
    7
   ],
   "rtfx": 177.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.37666666666666665,
    "halluc_3plus": 0.3566666666666667,
    "halluc_3plus_ci": [
     0.30459,
     0.41237
    ],
    "inserted_wpm": 52.9972676072046,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017802363590646214,
      "wer_uncapped": 0.017802363590646214,
      "cer": 0.008130269351313217,
      "av_wer": null,
      "strict_wer": 0.02137289414131255,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002061855670103093,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.042491334004249134,
      "wer_uncapped": 0.042491334004249134,
      "cer": 0.02144291259536876,
      "av_wer": null,
      "strict_wer": 0.0464050095046405,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0038577658503857765,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.058197352755795226,
      "wer_uncapped": 0.058197352755795226,
      "cer": 0.03587646929984668,
      "av_wer": null,
      "strict_wer": 0.0626094264304223,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02521184956929757,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08821958773897255,
      "wer_uncapped": 0.0898216383637723,
      "cer": 0.05080391752104406,
      "av_wer": null,
      "strict_wer": 0.09131688561358539,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012068781373491402,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06915793033479878,
      "wer_uncapped": 0.06915793033479878,
      "cer": 0.0431258049150539,
      "av_wer": null,
      "strict_wer": 0.07308927967534663,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016697666553939804,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07925471236894997,
      "wer_uncapped": 0.07979792492802433,
      "cer": 0.05211037756842964,
      "av_wer": null,
      "strict_wer": 0.08327448530610028,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.019664294638492043,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08324163873179968,
      "wer_uncapped": 0.08324163873179968,
      "cer": 0.04642593496240131,
      "av_wer": null,
      "strict_wer": 0.09291435297730238,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.019089536579748715,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.026269747337004067,
      "wer_uncapped": 0.026269747337004067,
      "cer": 0.014227811785898953,
      "av_wer": null,
      "strict_wer": 0.029743220295373848,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0073843462152009464,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07044083526682135,
      "wer_uncapped": 0.07331786542923434,
      "cer": 0.04320365033621518,
      "av_wer": null,
      "strict_wer": 0.08306264501160093,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017540603248259862,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13173915428069982,
      "wer_uncapped": 0.1440245708331048,
      "cer": 0.09839605181986429,
      "av_wer": null,
      "strict_wer": 0.13629133987824274,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03515603575933746,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09946656608653484,
      "wer_uncapped": 0.10011315264831079,
      "cer": 0.0685771243458759,
      "av_wer": null,
      "strict_wer": 0.10350773209763457,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015356430842178997,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01492100643651258,
      "wer_uncapped": 0.01492100643651258,
      "cer": 0.009476926316897887,
      "av_wer": null,
      "strict_wer": 0.015701189779598206,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004681100058513751,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04660119391488542,
      "wer_uncapped": 0.04698632774889274,
      "cer": 0.026879538177062193,
      "av_wer": null,
      "strict_wer": 0.07548623146543423,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01097631426920855,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.0241991643454039,
      "wer_uncapped": 0.0241991643454039,
      "cer": 0.01239267779037745,
      "av_wer": null,
      "strict_wer": 0.027681058495821725,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002959610027855153,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08026195552848005,
      "wer_uncapped": 0.08026195552848005,
      "cer": 0.05073935393793235,
      "av_wer": null,
      "strict_wer": 0.08528784648187633,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281754492841913,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08567293777134588,
      "wer_uncapped": 0.08567293777134588,
      "cer": 0.05255448267615318,
      "av_wer": null,
      "strict_wer": 0.08929088277858177,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020984081041968163,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10050940438871474,
      "wer_uncapped": 0.10266457680250783,
      "cer": 0.0702273644558052,
      "av_wer": null,
      "strict_wer": 0.10462382445141066,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021551724137931036,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02176183844011142,
      "wer_uncapped": 0.02176183844011142,
      "cer": 0.009922242021707436,
      "av_wer": null,
      "strict_wer": 0.02524373259052925,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06594578129759367,
      "wer_uncapped": 0.06594578129759367,
      "cer": 0.0407755283366123,
      "av_wer": null,
      "strict_wer": 0.07051477307340846,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02208346024977155,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07727930535455861,
      "wer_uncapped": 0.07727930535455861,
      "cer": 0.046186960031090254,
      "av_wer": null,
      "strict_wer": 0.08060781476121563,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01837916063675832,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07954545454545454,
      "wer_uncapped": 0.08013322884012539,
      "cer": 0.054486748284676444,
      "av_wer": null,
      "strict_wer": 0.08405172413793104,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018808777429467086,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13079584775086506,
      "wer_uncapped": 0.13217993079584775,
      "cer": 0.0772186507056824,
      "av_wer": null,
      "strict_wer": 0.13321799307958476,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01314878892733564,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08434046961325967,
      "wer_uncapped": 0.08434046961325967,
      "cer": 0.047527877130233535,
      "av_wer": null,
      "strict_wer": 0.0955628453038674,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018732734806629833,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.0604108635097493,
      "wer_uncapped": 0.060584958217270196,
      "cer": 0.038150008099789405,
      "av_wer": null,
      "strict_wer": 0.06354456824512535,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007311977715877437,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1346329576606762,
      "wer_uncapped": 0.1346329576606762,
      "cer": 0.09037253284254616,
      "av_wer": null,
      "strict_wer": 0.139201949436491,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02832774901005178,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11331403762662808,
      "wer_uncapped": 0.11345875542691751,
      "cer": 0.06992317120564408,
      "av_wer": null,
      "strict_wer": 0.11780028943560057,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021562952243125905,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14420062695924765,
      "wer_uncapped": 0.14772727272727273,
      "cer": 0.10206735728059554,
      "av_wer": null,
      "strict_wer": 0.14831504702194356,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027821316614420062,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2657439446366782,
      "wer_uncapped": 0.2709342560553633,
      "cer": 0.1893150077588118,
      "av_wer": null,
      "strict_wer": 0.2688581314878893,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025951557093425604,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.131042817679558,
      "wer_uncapped": 0.131042817679558,
      "cer": 0.08220071533768146,
      "av_wer": null,
      "strict_wer": 0.14140193370165746,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020200276243093923,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05296274511801575,
      "cer": 0.03011600507015475,
      "wer_arith": 0.059452833569893004,
      "done": 9,
      "total": 9,
      "ci": [
       0.04952,
       0.05605
      ]
     },
     "accented": {
      "wer": 0.13173915428069985,
      "cer": 0.09839605181986429,
      "wer_arith": 0.13173915428069982,
      "done": 1,
      "total": 1,
      "ci": [
       0.11207,
       0.15294
      ]
     },
     "noisy": {
      "wer": 0.06985661185333837,
      "cer": 0.04368789294820046,
      "wer_arith": 0.07802200562409588,
      "done": 5,
      "total": 5,
      "ci": [
       0.06406,
       0.07605
      ]
     },
     "telephony": {
      "wer": 0.05355478606632185,
      "cer": 0.031428413012813225,
      "wer_arith": 0.06514886216915512,
      "done": 8,
      "total": 8,
      "ci": [
       0.04945,
       0.05775
      ]
     },
     "callcenter": {
      "wer": 0.12909189683831257,
      "cer": 0.08521511203920086,
      "wer_arith": 0.14155754134542292,
      "done": 6,
      "total": 6,
      "ci": [
       0.11943,
       0.13808
      ]
     }
    },
    "arena": 0.0707845422103458,
    "arena_arith": 0.08560769109789197,
    "arena_cer": 0.043106813056293034,
    "arena_strict": 0.07685434277528636,
    "zero_shot": 0.0626173347490893,
    "arena_real": 0.05578456748845737,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 12,
    "boh_share": 0.36666666666666664,
    "arena_ci": [
     0.06669,
     0.07466
    ],
    "rank_set": [
     5,
     12
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run20-s7all-s500",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run20/tree/run20-s7all-s500",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02147347246668343,
     "cer": 0.008115650391069937,
     "rtfx": 178.94,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04785866040478587,
     "cer": 0.02060133630289532,
     "rtfx": 171.33,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06316968975418447,
     "cer": 0.03670372760816883,
     "rtfx": 192.0,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09452098686318487,
     "cer": 0.050017320349486166,
     "rtfx": 231.61,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07342746026378086,
     "cer": 0.04300039699460381,
     "rtfx": 193.42,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08523005051876799,
     "cer": 0.051791491179881584,
     "rtfx": 169.02,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09186519614114998,
     "cer": 0.04594669698117974,
     "rtfx": 161.61,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.033859928986775076,
     "cer": 0.017292456079917327,
     "rtfx": 206.9,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08751740139211137,
     "cer": 0.04688472308649658,
     "rtfx": 146.65,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14846706521142983,
     "cer": 0.10487576183778716,
     "rtfx": 167.88,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10733336925480899,
     "cer": 0.06752266942005132,
     "rtfx": 182.73,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016871464794226642,
     "cer": 0.009982593377094562,
     "rtfx": 190.79,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08299634122857694,
     "cer": 0.03625881817492225,
     "rtfx": 204.93,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02663649025069638,
     "cer": 0.011315370321210513,
     "rtfx": 157.87,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08939993908010965,
     "cer": 0.05029115934356802,
     "rtfx": 179.59,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08986975397973951,
     "cer": 0.051746087216994086,
     "rtfx": 179.05,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10501567398119123,
     "cer": 0.06884338682899833,
     "rtfx": 152.18,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02576601671309192,
     "cer": 0.009556676400318556,
     "rtfx": 157.45,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07142857142857142,
     "cer": 0.04089465325569084,
     "rtfx": 180.55,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08219971056439943,
     "cer": 0.04682858640573126,
     "rtfx": 182.74,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.0832680250783699,
     "cer": 0.05275779376498801,
     "rtfx": 152.47,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13494809688581316,
     "cer": 0.07442783601066799,
     "rtfx": 228.64,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0955628453038674,
     "cer": 0.04765872071275547,
     "rtfx": 165.14,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06354456824512535,
     "cer": 0.03421157419697372,
     "rtfx": 157.79,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.139811148339933,
     "cer": 0.08642138697723663,
     "rtfx": 178.52,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1166425470332851,
     "cer": 0.06662339931604304,
     "rtfx": 183.75,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1500783699059561,
     "cer": 0.09780483305663162,
     "rtfx": 152.35,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2844290657439446,
     "cer": 0.18197605904608324,
     "rtfx": 224.1,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14502762430939226,
     "cer": 0.08113714421736322,
     "rtfx": 101.65,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 58.25,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06654698297682488,
     "cer": 0.035594866552633254,
     "done": 9,
     "total": 9,
     "ci": [
      0.06429,
      0.06892
     ]
    },
    "accented": {
     "wer": 0.14846706521142983,
     "cer": 0.10487576183778716,
     "done": 1,
     "total": 1,
     "ci": [
      0.13342,
      0.16545
     ]
    },
    "noisy": {
     "wer": 0.08365104530930915,
     "cer": 0.04994373462616446,
     "done": 5,
     "total": 5,
     "ci": [
      0.07886,
      0.08902
     ]
    },
    "telephony": {
     "wer": 0.0741301339996146,
     "cer": 0.039795709762771116,
     "done": 8,
     "total": 8,
     "ci": [
      0.06985,
      0.07869
     ]
    },
    "callcenter": {
     "wer": 0.14992222059627272,
     "cer": 0.09136239946838857,
     "done": 6,
     "total": 6,
     "ci": [
      0.14122,
      0.15854
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 20, S7all RL step 500; tag `run20-s7all-s500` of Arabic-STT/qwen3-asr-1.7b-ar-run20 (commit 9d547ba6af), weights gated on the Hub. Online RL (RLOO) from run16-soup on English call windows, far-end mixes (AMI, ICSI, HarperValleyBank, PriMock57), Arabic phone-call windows and synthetic TTS turns; carries the run9 line's in-domain train rows; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.38,
   "inserted_wpm": 63.66,
   "arena_wer": 0.09367423388293122,
   "arena_cer": 0.0547041261562466,
   "arena_ci": [
    0.09117,
    0.09627
   ],
   "rank_range": [
    8,
    10
   ],
   "rtfx": 169.4,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.38,
    "halluc_3plus": 0.37,
    "halluc_3plus_ci": [
     0.31733,
     0.42596
    ],
    "inserted_wpm": 63.65917582111192,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017902941916017098,
      "wer_uncapped": 0.017902941916017098,
      "cer": 0.008673829322169152,
      "av_wer": null,
      "strict_wer": 0.02147347246668343,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0022127231581594168,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.043889075254388905,
      "wer_uncapped": 0.043944984904394496,
      "cer": 0.022875117119528846,
      "av_wer": null,
      "strict_wer": 0.04774684110477469,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004528681650452868,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05805728692485468,
      "wer_uncapped": 0.05805728692485468,
      "cer": 0.03669416660582609,
      "av_wer": null,
      "strict_wer": 0.06316968975418447,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02507178373835703,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.0900352451137456,
      "wer_uncapped": 0.09099647548862544,
      "cer": 0.053166357026537304,
      "av_wer": null,
      "strict_wer": 0.09345295311331839,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011748371248531453,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06974974636455868,
      "wer_uncapped": 0.06974974636455868,
      "cer": 0.04335515057424625,
      "av_wer": null,
      "strict_wer": 0.07342746026378086,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01703584714237403,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08066706502254332,
      "wer_uncapped": 0.08131892009343256,
      "cer": 0.05255544840887175,
      "av_wer": null,
      "strict_wer": 0.08457819544787876,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.02161985985115976,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08191100079326492,
      "wer_uncapped": 0.08191100079326492,
      "cer": 0.045618908199141675,
      "av_wer": null,
      "strict_wer": 0.09186519614114998,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.019729266357890428,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.030206350023156487,
      "wer_uncapped": 0.030206350023156487,
      "cer": 0.017113405500975766,
      "av_wer": null,
      "strict_wer": 0.033859928986775076,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011423866618638399,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07211136890951277,
      "wer_uncapped": 0.07480278422273783,
      "cer": 0.04385206532180595,
      "av_wer": null,
      "strict_wer": 0.0848259860788863,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017540603248259862,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13135523501343718,
      "wer_uncapped": 0.1433664235177974,
      "cer": 0.09814635292735231,
      "av_wer": null,
      "strict_wer": 0.1364558767070696,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.034552734053639005,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10210679454711999,
      "wer_uncapped": 0.10323832103022793,
      "cer": 0.07084475454771991,
      "av_wer": null,
      "strict_wer": 0.10620184277170105,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01713454388706288,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.016286327286912424,
      "wer_uncapped": 0.016286327286912424,
      "cer": 0.009977097428067497,
      "av_wer": null,
      "strict_wer": 0.016871464794226642,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005461283401599376,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.052185634507991525,
      "wer_uncapped": 0.05449643751203543,
      "cer": 0.03332882334370631,
      "av_wer": null,
      "strict_wer": 0.08049297130752936,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01694588869632197,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.023850974930362118,
      "wer_uncapped": 0.023850974930362118,
      "cer": 0.012311679896322696,
      "av_wer": null,
      "strict_wer": 0.02663649025069638,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08285105086810844,
      "wer_uncapped": 0.08285105086810844,
      "cer": 0.051627847940597826,
      "av_wer": null,
      "strict_wer": 0.08939993908010965,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025434054218702408,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08596237337192475,
      "wer_uncapped": 0.08596237337192475,
      "cer": 0.05249469373112912,
      "av_wer": null,
      "strict_wer": 0.08986975397973951,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02141823444283647,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.09952978056426333,
      "wer_uncapped": 0.10129310344827586,
      "cer": 0.0709897304811875,
      "av_wer": null,
      "strict_wer": 0.10325235109717869,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02292319749216301,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02193593314763231,
      "wer_uncapped": 0.02193593314763231,
      "cer": 0.010165235703871699,
      "av_wer": null,
      "strict_wer": 0.02576601671309192,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06594578129759367,
      "wer_uncapped": 0.06594578129759367,
      "cer": 0.04188614583994415,
      "av_wer": null,
      "strict_wer": 0.07142857142857142,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02208346024977155,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07872648335745297,
      "wer_uncapped": 0.07872648335745297,
      "cer": 0.04747242234910765,
      "av_wer": null,
      "strict_wer": 0.08219971056439943,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01881331403762663,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07856583072100314,
      "wer_uncapped": 0.07915360501567398,
      "cer": 0.05453159334499305,
      "av_wer": null,
      "strict_wer": 0.08268025078369906,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019004702194357365,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13044982698961938,
      "wer_uncapped": 0.13217993079584775,
      "cer": 0.07943545407522352,
      "av_wer": null,
      "strict_wer": 0.13321799307958476,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014186851211072665,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.0844267955801105,
      "wer_uncapped": 0.0844267955801105,
      "cer": 0.04685461813591416,
      "av_wer": null,
      "strict_wer": 0.0955628453038674,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020200276243093923,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.060584958217270196,
      "wer_uncapped": 0.060759052924791085,
      "cer": 0.03823100599384416,
      "av_wer": null,
      "strict_wer": 0.06337047353760446,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008008356545961003,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13524215656411817,
      "wer_uncapped": 0.13524215656411817,
      "cer": 0.09062638827187916,
      "av_wer": null,
      "strict_wer": 0.139811148339933,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030155345720377702,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11201157742402315,
      "wer_uncapped": 0.11215629522431259,
      "cer": 0.06896654808525904,
      "av_wer": null,
      "strict_wer": 0.11649782923299566,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02141823444283647,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14106583072100312,
      "wer_uncapped": 0.14537617554858934,
      "cer": 0.1002735548679313,
      "av_wer": null,
      "strict_wer": 0.14576802507836992,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028409090909090908,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.27162629757785467,
      "wer_uncapped": 0.28131487889273354,
      "cer": 0.19722160644350847,
      "av_wer": null,
      "strict_wer": 0.27474048442906573,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03356401384083045,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1331146408839779,
      "wer_uncapped": 0.13440953038674033,
      "cer": 0.08396802019776983,
      "av_wer": null,
      "strict_wer": 0.14373273480662985,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.023394337016574587,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05432827486765069,
      "cer": 0.03146088128473497,
      "wer_arith": 0.06050334225800472,
      "done": 9,
      "total": 9,
      "ci": [
       0.05077,
       0.05756
      ]
     },
     "accented": {
      "wer": 0.1313552350134372,
      "cer": 0.09814635292735233,
      "wer_arith": 0.13135523501343718,
      "done": 1,
      "total": 1,
      "ci": [
       0.11091,
       0.15313
      ]
     },
     "noisy": {
      "wer": 0.07037591408709078,
      "cer": 0.04415338398742209,
      "wer_arith": 0.07886019485635573,
      "done": 5,
      "total": 5,
      "ci": [
       0.06442,
       0.07682
      ]
     },
     "telephony": {
      "wer": 0.05500148988353506,
      "cer": 0.03287445424177458,
      "wer_arith": 0.06606532661103949,
      "done": 8,
      "total": 8,
      "ci": [
       0.05065,
       0.05925
      ]
     },
     "callcenter": {
      "wer": 0.1293381209566623,
      "cer": 0.08572232680351635,
      "wer_arith": 0.1422742435647079,
      "done": 6,
      "total": 6,
      "ci": [
       0.11979,
       0.13822
      ]
     }
    },
    "arena": 0.07194784195497404,
    "arena_arith": 0.08644936405897002,
    "arena_cer": 0.044340177761356306,
    "arena_strict": 0.07800783205468853,
    "zero_shot": 0.06476935706888416,
    "arena_real": 0.05755536492508779,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 15,
    "boh_share": 0.37333333333333335,
    "arena_ci": [
     0.06776,
     0.07593
    ],
    "rank_set": [
     11,
     19
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run16-rl-s1000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run16-rl-s1000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.022026653256223282,
     "cer": 0.008153618346115879,
     "rtfx": 181.76,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.048305937604830596,
     "cer": 0.02091794401502249,
     "rtfx": 172.68,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06450031514811962,
     "cer": 0.03702034901421143,
     "rtfx": 192.02,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09217131261347859,
     "cer": 0.04841999923020669,
     "rtfx": 233.69,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07435745688197498,
     "cer": 0.04360324065224743,
     "rtfx": 194.09,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08533869303058286,
     "cer": 0.052178070764410264,
     "rtfx": 170.44,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09204432047902966,
     "cer": 0.0459820639130984,
     "rtfx": 162.49,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03542942417537179,
     "cer": 0.018371799288092776,
     "rtfx": 206.86,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08547563805104408,
     "cer": 0.044803982576229,
     "rtfx": 147.76,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15104480886305052,
     "cer": 0.10662212845757149,
     "rtfx": 120.17,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10938089336709952,
     "cer": 0.06933213383902923,
     "rtfx": 183.23,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01735907938365516,
     "cer": 0.01021328356017868,
     "rtfx": 195.45,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.07664163296745619,
     "cer": 0.03038003489342335,
     "rtfx": 212.16,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02681058495821727,
     "cer": 0.011448101937881603,
     "rtfx": 160.92,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08726774291806275,
     "cer": 0.049788247750132346,
     "rtfx": 183.35,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09015918958031838,
     "cer": 0.05212051621277552,
     "rtfx": 184.07,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1085423197492163,
     "cer": 0.07109389411547686,
     "rtfx": 153.43,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02663649025069638,
     "cer": 0.010187151579506238,
     "rtfx": 161.39,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07188547060615291,
     "cer": 0.04107993647432504,
     "rtfx": 181.85,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08277858176555716,
     "cer": 0.046953396070991735,
     "rtfx": 185.89,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08424764890282131,
     "cer": 0.05238885814425383,
     "rtfx": 154.87,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13391003460207612,
     "cer": 0.0722570241270235,
     "rtfx": 232.77,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09521754143646409,
     "cer": 0.047471690413847044,
     "rtfx": 167.05,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06493732590529248,
     "cer": 0.03510751260950359,
     "rtfx": 160.72,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.13904964971063052,
     "cer": 0.08541556379036527,
     "rtfx": 182.85,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1175108538350217,
     "cer": 0.0673722573076059,
     "rtfx": 184.47,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14674764890282133,
     "cer": 0.09448441247002398,
     "rtfx": 152.41,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.28512110726643597,
     "cer": 0.18197605904608324,
     "rtfx": 224.74,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14614986187845305,
     "cer": 0.08217431223858265,
     "rtfx": 98.59,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 34.76,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.0666277501378506,
     "cer": 0.03549456308884827,
     "done": 9,
     "total": 9,
     "ci": [
      0.06452,
      0.06882
     ]
    },
    "accented": {
     "wer": 0.15104480886305052,
     "cer": 0.10662212845757149,
     "done": 1,
     "total": 1,
     "ci": [
      0.13599,
      0.16834
     ]
    },
    "noisy": {
     "wer": 0.08443214611458284,
     "cer": 0.050756578771059116,
     "done": 5,
     "total": 5,
     "ci": [
      0.07956,
      0.0894
     ]
    },
    "telephony": {
     "wer": 0.07358455998935992,
     "cer": 0.03886642190794368,
     "done": 8,
     "total": 8,
     "ci": [
      0.06936,
      0.07804
     ]
    },
    "callcenter": {
     "wer": 0.1499194079164425,
     "cer": 0.09108835291036077,
     "done": 6,
     "total": 6,
     "ci": [
      0.14128,
      0.15891
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 16 GSPO step 1,000, from run13-soup (short replies after silence); tag `run16-rl-s1000` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit b6a96f0e6a), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.43333333333333335,
   "inserted_wpm": 105.46,
   "arena_wer": 0.09382516768739321,
   "arena_cer": 0.05460751465375283,
   "arena_ci": [
    0.09141,
    0.09639
   ],
   "rank_range": [
    8,
    11
   ],
   "rtfx": 161.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.43333333333333335,
    "halluc_3plus": 0.39666666666666667,
    "halluc_3plus_ci": [
     0.34295,
     0.453
    ],
    "inserted_wpm": 105.4592092789829,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01845612270555695,
      "wer_uncapped": 0.01845612270555695,
      "cer": 0.008650699110643367,
      "av_wer": null,
      "strict_wer": 0.022026653256223282,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002263012320844858,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.043889075254388905,
      "wer_uncapped": 0.043944984904394496,
      "cer": 0.023169589077767366,
      "av_wer": null,
      "strict_wer": 0.048194118304819414,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004528681650452868,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05938791231878983,
      "wer_uncapped": 0.05938791231878983,
      "cer": 0.03694239614514127,
      "av_wer": null,
      "strict_wer": 0.06450031514811962,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025491981231178653,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08736516073907935,
      "wer_uncapped": 0.08843319448894585,
      "cer": 0.051790178673822795,
      "av_wer": null,
      "strict_wer": 0.09099647548862544,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011107550998611555,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07051065268853568,
      "wer_uncapped": 0.07051065268853568,
      "cer": 0.04389323077465907,
      "av_wer": null,
      "strict_wer": 0.07435745688197498,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017543118025025364,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.0809386713020805,
      "wer_uncapped": 0.0815362051170623,
      "cer": 0.05298815617041268,
      "av_wer": null,
      "strict_wer": 0.08474115921560106,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.021511217339344885,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08198776836664193,
      "wer_uncapped": 0.08198776836664193,
      "cer": 0.045781564756077725,
      "av_wer": null,
      "strict_wer": 0.09204432047902966,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01952455282888508,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03167292749446817,
      "wer_uncapped": 0.03167292749446817,
      "cer": 0.01811974935922028,
      "av_wer": null,
      "strict_wer": 0.03542942417537179,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01283898523130757,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07127610208816705,
      "wer_uncapped": 0.07192575406032482,
      "cer": 0.043659942363112395,
      "av_wer": null,
      "strict_wer": 0.0848259860788863,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014849187935034803,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13360390500740416,
      "wer_uncapped": 0.14594416716941808,
      "cer": 0.0998942451749361,
      "av_wer": null,
      "strict_wer": 0.13870454670103657,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.003015075376884422,
      "insertions": 0.03647233038995228,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10388490759200388,
      "wer_uncapped": 0.10528584514251846,
      "cer": 0.07268876152504361,
      "av_wer": null,
      "strict_wer": 0.10797995581658494,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.017835012662320168,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.016481373122683832,
      "wer_uncapped": 0.016481373122683832,
      "cer": 0.010187695790665228,
      "av_wer": null,
      "strict_wer": 0.01735907938365516,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0052662375658279695,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04698632774889274,
      "wer_uncapped": 0.04756402849990372,
      "cer": 0.028007035583818157,
      "av_wer": null,
      "strict_wer": 0.07587136529944155,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010783747352204892,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.023676880222841225,
      "wer_uncapped": 0.023676880222841225,
      "cer": 0.012352178843350072,
      "av_wer": null,
      "strict_wer": 0.02681058495821727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.0813280536095035,
      "wer_uncapped": 0.0813280536095035,
      "cer": 0.050929745509932095,
      "av_wer": null,
      "strict_wer": 0.08726774291806275,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281754492841913,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08596237337192475,
      "wer_uncapped": 0.08596237337192475,
      "cer": 0.052943110818809605,
      "av_wer": null,
      "strict_wer": 0.09015918958031838,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02199710564399421,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10325235109717869,
      "wer_uncapped": 0.10501567398119123,
      "cer": 0.0732319834970178,
      "av_wer": null,
      "strict_wer": 0.10677899686520376,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024098746081504703,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.022806406685236768,
      "wer_uncapped": 0.022806406685236768,
      "cer": 0.010853717803337113,
      "av_wer": null,
      "strict_wer": 0.02663649025069638,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06670727992689614,
      "wer_uncapped": 0.06670727992689614,
      "cer": 0.041981341625944024,
      "av_wer": null,
      "strict_wer": 0.07188547060615291,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02208346024977155,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07872648335745297,
      "wer_uncapped": 0.07872648335745297,
      "cer": 0.04762189471166781,
      "av_wer": null,
      "strict_wer": 0.08277858176555716,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018668596237337194,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07915360501567398,
      "wer_uncapped": 0.07974137931034483,
      "cer": 0.0541728328624602,
      "av_wer": null,
      "strict_wer": 0.08365987460815047,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018612852664576802,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.12975778546712802,
      "wer_uncapped": 0.1314878892733564,
      "cer": 0.077735904825242,
      "av_wer": null,
      "strict_wer": 0.13217993079584775,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01245674740484429,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08425414364640885,
      "wer_uncapped": 0.08425414364640885,
      "cer": 0.046812539448769196,
      "av_wer": null,
      "strict_wer": 0.09521754143646409,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020027624309392266,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06162952646239554,
      "wer_uncapped": 0.06197771587743733,
      "cer": 0.03916248177547384,
      "av_wer": null,
      "strict_wer": 0.06458913649025069,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008704735376044569,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13448065793481573,
      "wer_uncapped": 0.13448065793481573,
      "cer": 0.08957923462588056,
      "av_wer": null,
      "strict_wer": 0.13904964971063052,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03091684434968017,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11316931982633864,
      "wer_uncapped": 0.11331403762662808,
      "cer": 0.06947475411796358,
      "av_wer": null,
      "strict_wer": 0.11736613603473227,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024023154848046308,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14086990595611285,
      "wer_uncapped": 0.1424373040752351,
      "cer": 0.0988385129377999,
      "av_wer": null,
      "strict_wer": 0.14518025078369906,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02664576802507837,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2726643598615917,
      "wer_uncapped": 0.2820069204152249,
      "cer": 0.19633488509569202,
      "av_wer": null,
      "strict_wer": 0.2757785467128028,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03183391003460208,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13440953038674033,
      "wer_uncapped": 0.13570441988950277,
      "cer": 0.08487271197138649,
      "av_wer": null,
      "strict_wer": 0.14485497237569062,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02382596685082873,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05477617409967607,
      "cer": 0.031697656078708225,
      "wer_arith": 0.06060937699530093,
      "done": 9,
      "total": 9,
      "ci": [
       0.05123,
       0.05799
      ]
     },
     "accented": {
      "wer": 0.13360390500740413,
      "cer": 0.09989424517493613,
      "wer_arith": 0.13360390500740416,
      "done": 1,
      "total": 1,
      "ci": [
       0.11304,
       0.15497
      ]
     },
     "noisy": {
      "wer": 0.07077259696820758,
      "cer": 0.044641473377978774,
      "wer_arith": 0.07962091317869041,
      "done": 5,
      "total": 5,
      "ci": [
       0.06503,
       0.07725
      ]
     },
     "telephony": {
      "wer": 0.0547096459983793,
      "cer": 0.03242042870599843,
      "wer_arith": 0.06560917562129666,
      "done": 8,
      "total": 8,
      "ci": [
       0.05049,
       0.05895
      ]
     },
     "callcenter": {
      "wer": 0.13006955990514874,
      "cer": 0.08588804573642765,
      "wer_arith": 0.14287055007133248,
      "done": 6,
      "total": 6,
      "ci": [
       0.12048,
       0.13915
      ]
     }
    },
    "arena": 0.07228226038840141,
    "arena_arith": 0.08674455245637065,
    "arena_cer": 0.04444944936663574,
    "arena_strict": 0.0785516966373938,
    "zero_shot": 0.06428323501430026,
    "arena_real": 0.057747841795477685,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 17,
    "boh_share": 0.41333333333333333,
    "arena_ci": [
     0.06817,
     0.07635
    ],
    "rank_set": [
     11,
     21
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run20-s7all-s1000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run20/tree/run20-s7all-s1000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02142318330399799,
     "cer": 0.008039714480978054,
     "rtfx": 177.02,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04852957620485296,
     "cer": 0.020623171317524783,
     "rtfx": 168.22,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06379998599341691,
     "cer": 0.03683768281841762,
     "rtfx": 188.22,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09441418348819823,
     "cer": 0.049690158192525306,
     "rtfx": 225.75,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07346973283733514,
     "cer": 0.043184190792665895,
     "rtfx": 189.91,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08512140800695311,
     "cer": 0.05197460782518464,
     "rtfx": 168.19,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09173725018552163,
     "cer": 0.04609826954654541,
     "rtfx": 159.71,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.033113775536458605,
     "cer": 0.016566770008037662,
     "rtfx": 203.42,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08668213457076566,
     "cer": 0.04626244555071562,
     "rtfx": 142.07,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14923490374595513,
     "cer": 0.10514533520862634,
     "rtfx": 164.51,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10684842933347702,
     "cer": 0.06717508868420245,
     "rtfx": 176.31,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01706651062999805,
     "cer": 0.010360086403959483,
     "rtfx": 188.71,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09243212016175621,
     "cer": 0.04414776606235303,
     "rtfx": 191.98,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02837743732590529,
     "cer": 0.012045394212901513,
     "rtfx": 158.38,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.09031373743527261,
     "cer": 0.05111169931180519,
     "rtfx": 179.28,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08972503617945007,
     "cer": 0.05169616335088989,
     "rtfx": 179.25,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10736677115987461,
     "cer": 0.06910164176351227,
     "rtfx": 151.74,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02559192200557103,
     "cer": 0.00958985930448633,
     "rtfx": 157.0,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07051477307340846,
     "cer": 0.04036527263102171,
     "rtfx": 178.29,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0813314037626628,
     "cer": 0.046304385811637254,
     "rtfx": 183.29,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08307210031347963,
     "cer": 0.052204390333886734,
     "rtfx": 148.68,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13183391003460207,
     "cer": 0.0731253488804813,
     "rtfx": 222.6,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0949585635359116,
     "cer": 0.04757370694052437,
     "rtfx": 165.52,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06354456824512535,
     "cer": 0.03457658614281922,
     "rtfx": 156.34,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14011574779165398,
     "cer": 0.0860772895712017,
     "rtfx": 179.83,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11693198263386397,
     "cer": 0.06664836124909514,
     "rtfx": 177.04,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.15047021943573669,
     "cer": 0.09732521674967719,
     "rtfx": 146.36,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2837370242214533,
     "cer": 0.18154189666935433,
     "rtfx": 220.75,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14373273480662985,
     "cer": 0.08071207535620771,
     "rtfx": 156.15,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 86.43,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06647680334750003,
     "cer": 0.03547522339251055,
     "done": 9,
     "total": 9,
     "ci": [
      0.06419,
      0.06882
     ]
    },
    "accented": {
     "wer": 0.14923490374595513,
     "cer": 0.10514533520862634,
     "done": 1,
     "total": 1,
     "ci": [
      0.13427,
      0.16634
     ]
    },
    "noisy": {
     "wer": 0.08452628228679591,
     "cer": 0.05022599746466226,
     "done": 5,
     "total": 5,
     "ci": [
      0.07949,
      0.08985
     ]
    },
    "telephony": {
     "wer": 0.07460016293967373,
     "cer": 0.040458852046043776,
     "done": 8,
     "total": 8,
     "ci": [
      0.07018,
      0.07913
     ]
    },
    "callcenter": {
     "wer": 0.14975537952241053,
     "cer": 0.09114690428972588,
     "done": 6,
     "total": 6,
     "ci": [
      0.14098,
      0.15807
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 20, S7all RL step 1000; tag `run20-s7all-s1000` of Arabic-STT/qwen3-asr-1.7b-ar-run20 (commit dc649d570d), weights gated on the Hub. Online RL (RLOO) from run16-soup on English call windows, far-end mixes (AMI, ICSI, HarperValleyBank, PriMock57), Arabic phone-call windows and synthetic TTS turns; carries the run9 line's in-domain train rows; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.36,
   "inserted_wpm": 51.06,
   "arena_wer": 0.09388756575591112,
   "arena_cer": 0.054818789743057525,
   "arena_ci": [
    0.09137,
    0.09654
   ],
   "rank_range": [
    8,
    12
   ],
   "rtfx": 172.8,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.36,
    "halluc_3plus": 0.3433333333333333,
    "halluc_3plus_ci": [
     0.29189,
     0.39874
    ],
    "inserted_wpm": 51.05671109128423,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017852652753331658,
      "wer_uncapped": 0.017852652753331658,
      "cer": 0.008569743370303121,
      "av_wer": null,
      "strict_wer": 0.02142318330399799,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002263012320844858,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.044448171754444814,
      "wer_uncapped": 0.04450408140445041,
      "cer": 0.022888502208539687,
      "av_wer": null,
      "strict_wer": 0.04841775690484178,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004584591300458459,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05882764899502766,
      "wer_uncapped": 0.05882764899502766,
      "cer": 0.03678177703146675,
      "av_wer": null,
      "strict_wer": 0.06379998599341691,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025491981231178653,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08992844173875894,
      "wer_uncapped": 0.0908896721136388,
      "cer": 0.05259294937957293,
      "av_wer": null,
      "strict_wer": 0.09334614973833173,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012068781373491402,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06970747379100439,
      "wer_uncapped": 0.06970747379100439,
      "cer": 0.04351392833830249,
      "av_wer": null,
      "strict_wer": 0.07346973283733514,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017162664863036862,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.080504101254821,
      "wer_uncapped": 0.08110163506980281,
      "cer": 0.05279034690799397,
      "av_wer": null,
      "strict_wer": 0.08452387419197131,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.021022326036177957,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08183423321988792,
      "wer_uncapped": 0.08183423321988792,
      "cer": 0.045781564756077725,
      "av_wer": null,
      "strict_wer": 0.09173725018552163,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019396606873256738,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.0294087377141975,
      "wer_uncapped": 0.0294087377141975,
      "cer": 0.01645733602433017,
      "av_wer": null,
      "strict_wer": 0.033113775536458605,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010394689445788093,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07081206496519722,
      "wer_uncapped": 0.07415313225058005,
      "cer": 0.043323727185398654,
      "av_wer": null,
      "strict_wer": 0.08334106728538283,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0010090817356205853,
      "insertions": 0.016890951276102087,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13239730159600724,
      "wer_uncapped": 0.14440849010036746,
      "cer": 0.09839605181986429,
      "av_wer": null,
      "strict_wer": 0.1372237152415949,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.03488180771129271,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10151409019882537,
      "wer_uncapped": 0.1026456166819333,
      "cer": 0.07028407675056068,
      "av_wer": null,
      "strict_wer": 0.1057169028503691,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017080661673581552,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.016481373122683832,
      "wer_uncapped": 0.016481373122683832,
      "cer": 0.010398294153262959,
      "av_wer": null,
      "strict_wer": 0.01706651062999805,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005656329237370782,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05642210668207202,
      "wer_uncapped": 0.06393221644521471,
      "cer": 0.03783881297073017,
      "av_wer": null,
      "strict_wer": 0.08472944348160986,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02638166762950125,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02524373259052925,
      "wer_uncapped": 0.02524373259052925,
      "cer": 0.012959663048760733,
      "av_wer": null,
      "strict_wer": 0.02837743732590529,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08406944867499239,
      "wer_uncapped": 0.08406944867499239,
      "cer": 0.052484610014596686,
      "av_wer": null,
      "strict_wer": 0.09031373743527261,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0255863539445629,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08581765557163532,
      "wer_uncapped": 0.08581765557163532,
      "cer": 0.05249469373112912,
      "av_wer": null,
      "strict_wer": 0.08972503617945007,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02141823444283647,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10129310344827586,
      "wer_uncapped": 0.1030564263322884,
      "cer": 0.0709897304811875,
      "av_wer": null,
      "strict_wer": 0.10560344827586207,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023315047021943574,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.022110027855153203,
      "wer_uncapped": 0.022110027855153203,
      "cer": 0.010205734650899077,
      "av_wer": null,
      "strict_wer": 0.02559192200557103,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06533658239415169,
      "wer_uncapped": 0.06533658239415169,
      "cer": 0.041568826553277906,
      "av_wer": null,
      "strict_wer": 0.07051477307340846,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021778860798050564,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07800289435600578,
      "wer_uncapped": 0.07800289435600578,
      "cer": 0.047024005261427165,
      "av_wer": null,
      "strict_wer": 0.0813314037626628,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01808972503617945,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07797805642633229,
      "wer_uncapped": 0.07856583072100314,
      "cer": 0.05403829768151038,
      "av_wer": null,
      "strict_wer": 0.08248432601880877,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01763322884012539,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.127681660899654,
      "wer_uncapped": 0.12941176470588237,
      "cer": 0.07840094583610434,
      "av_wer": null,
      "strict_wer": 0.1301038062283737,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012802768166089966,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08390883977900553,
      "wer_uncapped": 0.08390883977900553,
      "cer": 0.0469177361666316,
      "av_wer": null,
      "strict_wer": 0.0949585635359116,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01976864640883978,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.060584958217270196,
      "wer_uncapped": 0.060759052924791085,
      "cer": 0.0385144986230358,
      "av_wer": null,
      "strict_wer": 0.06337047353760446,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00766016713091922,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1349375571123972,
      "wer_uncapped": 0.1349375571123972,
      "cer": 0.09068985212921242,
      "av_wer": null,
      "strict_wer": 0.14011574779165398,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030155345720377702,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11230101302460202,
      "wer_uncapped": 0.11244573082489147,
      "cer": 0.06890675914023497,
      "av_wer": null,
      "strict_wer": 0.11678726483357453,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021852387843704777,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14165360501567398,
      "wer_uncapped": 0.1459639498432602,
      "cer": 0.09951118884254899,
      "av_wer": null,
      "strict_wer": 0.14615987460815047,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02821316614420063,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2709342560553633,
      "wer_uncapped": 0.28062283737024224,
      "cer": 0.19633488509569202,
      "av_wer": null,
      "strict_wer": 0.2740484429065744,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0328719723183391,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13328729281767956,
      "wer_uncapped": 0.13328729281767956,
      "cer": 0.08375762676204503,
      "av_wer": null,
      "strict_wer": 0.14373273480662985,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.022790055248618785,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.054167529147920994,
      "cer": 0.03125363013055792,
      "wer_arith": 0.0603692806874079,
      "done": 9,
      "total": 9,
      "ci": [
       0.05063,
       0.0574
      ]
     },
     "accented": {
      "wer": 0.13239730159600727,
      "cer": 0.09839605181986429,
      "wer_arith": 0.13239730159600724,
      "done": 1,
      "total": 1,
      "ci": [
       0.11168,
       0.15482
      ]
     },
     "noisy": {
      "wer": 0.07153110336584283,
      "cer": 0.04468468620704835,
      "wer_arith": 0.07958760609685164,
      "done": 5,
      "total": 5,
      "ci": [
       0.06535,
       0.07823
      ]
     },
     "telephony": {
      "wer": 0.05530647376341624,
      "cer": 0.033430964659846414,
      "wer_arith": 0.06599019268938229,
      "done": 8,
      "total": 8,
      "ci": [
       0.05106,
       0.05948
      ]
     },
     "callcenter": {
      "wer": 0.12940774556544984,
      "cer": 0.08561629293633477,
      "wer_arith": 0.1422831137071644,
      "done": 6,
      "total": 6,
      "ci": [
       0.11984,
       0.1382
      ]
     }
    },
    "arena": 0.07217594993402338,
    "arena_arith": 0.08654874817414387,
    "arena_cer": 0.04447813341321929,
    "arena_strict": 0.07819078151025263,
    "zero_shot": 0.0656437651786363,
    "arena_real": 0.057758533321735646,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 16,
    "boh_share": 0.35,
    "arena_ci": [
     0.06806,
     0.07615
    ],
    "rank_set": [
     11,
     20
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run16-rl-s250",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run16-rl-s250",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02182549660548152,
     "cer": 0.008239046244969246,
     "rtfx": 181.46,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04802638935480264,
     "cer": 0.0208851914930783,
     "rtfx": 172.11,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06387001890888717,
     "cer": 0.03661848338346506,
     "rtfx": 192.7,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09516180711310478,
     "cer": 0.05036372733920942,
     "rtfx": 231.08,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.0743151843084207,
     "cer": 0.04355177838879005,
     "rtfx": 194.29,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08561029931012006,
     "cer": 0.052534130908055095,
     "rtfx": 170.71,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.092172266434658,
     "cer": 0.0461184792219275,
     "rtfx": 162.38,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03460608243709155,
     "cer": 0.017788494660695833,
     "rtfx": 205.5,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08584686774941995,
     "cer": 0.04569850653391413,
     "rtfx": 147.26,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.150496352766961,
     "cer": 0.10651664322550398,
     "rtfx": 165.77,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10911148229969288,
     "cer": 0.06900499902881853,
     "rtfx": 180.56,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016871464794226642,
     "cer": 0.010318142734307825,
     "rtfx": 192.97,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08049297130752936,
     "cer": 0.034286581203064555,
     "rtfx": 208.58,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.027681058495821725,
     "cer": 0.011813113883727104,
     "rtfx": 162.25,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08863844045080718,
     "cer": 0.050847008999470616,
     "rtfx": 182.06,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09015918958031838,
     "cer": 0.051970744614462945,
     "rtfx": 183.39,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10717084639498432,
     "cer": 0.06980261944290721,
     "rtfx": 152.31,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.026462395543175487,
     "cer": 0.01008760286700292,
     "rtfx": 161.14,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07142857142857142,
     "cer": 0.040709370037056644,
     "rtfx": 180.98,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08321273516642547,
     "cer": 0.04725293926761688,
     "rtfx": 183.95,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08424764890282131,
     "cer": 0.05316362294779561,
     "rtfx": 155.39,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13771626297577855,
     "cer": 0.07548223035415245,
     "rtfx": 227.85,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09513121546961326,
     "cer": 0.047437684904954605,
     "rtfx": 165.42,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06319637883008357,
     "cer": 0.03424475710114149,
     "rtfx": 160.1,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.139201949436491,
     "cer": 0.0859449444150344,
     "rtfx": 177.63,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11736613603473227,
     "cer": 0.06692294251266818,
     "rtfx": 184.68,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14851097178683387,
     "cer": 0.09562811289429994,
     "rtfx": 153.25,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.28754325259515573,
     "cer": 0.18340259256962105,
     "rtfx": 228.68,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.1464088397790055,
     "cer": 0.08156221307851871,
     "rtfx": 98.09,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 34.57,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06682604580244293,
     "cer": 0.03575531535267829,
     "done": 9,
     "total": 9,
     "ci": [
      0.06471,
      0.06909
     ]
    },
    "accented": {
     "wer": 0.150496352766961,
     "cer": 0.10651664322550398,
     "done": 1,
     "total": 1,
     "ci": [
      0.13567,
      0.16808
     ]
    },
    "noisy": {
     "wer": 0.0845522034443249,
     "cer": 0.05068769719387728,
     "done": 5,
     "total": 5,
     "ci": [
      0.07946,
      0.09002
     ]
    },
    "telephony": {
     "wer": 0.07444540819851769,
     "cer": 0.039842271789493934,
     "done": 8,
     "total": 8,
     "ci": [
      0.07017,
      0.07899
     ]
    },
    "callcenter": {
     "wer": 0.150371254743717,
     "cer": 0.0912842604285473,
     "done": 6,
     "total": 6,
     "ci": [
      0.14174,
      0.15927
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 16 GSPO step 250, from run13-soup (short replies after silence); tag `run16-rl-s250` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 9478d27adb), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.4266666666666667,
   "inserted_wpm": 86.81,
   "arena_wer": 0.09418051334785461,
   "arena_cer": 0.05494681686285347,
   "arena_ci": [
    0.09168,
    0.09686
   ],
   "rank_range": [
    9,
    13
   ],
   "rtfx": 163.4,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.4266666666666667,
    "halluc_3plus": 0.3933333333333333,
    "halluc_3plus_ci": [
     0.33974,
     0.44963
    ],
    "inserted_wpm": 86.81202252829979,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01835554438018607,
      "wer_uncapped": 0.01835554438018607,
      "cer": 0.008754785062509396,
      "av_wer": null,
      "strict_wer": 0.02182549660548152,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023635906462157407,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04405680420440568,
      "wer_uncapped": 0.04411271385441127,
      "cer": 0.023236514522821577,
      "av_wer": null,
      "strict_wer": 0.04791457005479146,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0044727720004472775,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05861755024861685,
      "wer_uncapped": 0.05861755024861685,
      "cer": 0.03648974227933124,
      "av_wer": null,
      "strict_wer": 0.06387001890888717,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281882484767843,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09046245861369219,
      "wer_uncapped": 0.09142368898857203,
      "cer": 0.05362508314410881,
      "av_wer": null,
      "strict_wer": 0.09409377336323828,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010680337498664958,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.0704683801149814,
      "wer_uncapped": 0.0704683801149814,
      "cer": 0.043902051761551084,
      "av_wer": null,
      "strict_wer": 0.0743151843084207,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017331755157253975,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08131892009343256,
      "wer_uncapped": 0.08191645390841436,
      "cer": 0.053346685458546594,
      "av_wer": null,
      "strict_wer": 0.08501276549513825,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.003009027081243731,
      "insertions": 0.02161985985115976,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08219248189564728,
      "wer_uncapped": 0.08219248189564728,
      "cer": 0.045831612927442665,
      "av_wer": null,
      "strict_wer": 0.092172266434658,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01949896363775941,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.030901044614830443,
      "wer_uncapped": 0.030901044614830443,
      "cer": 0.0175581983664982,
      "av_wer": null,
      "strict_wer": 0.03460608243709155,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01217002006895487,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07266821345707657,
      "wer_uncapped": 0.07322505800464037,
      "cer": 0.04481268011527378,
      "av_wer": null,
      "strict_wer": 0.08529002320185615,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014663573085846867,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13349421378818627,
      "wer_uncapped": 0.14566993912137333,
      "cer": 0.09983549249434505,
      "av_wer": null,
      "strict_wer": 0.13832062743377393,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.003015075376884422,
      "insertions": 0.03548510941699117,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10323832103022793,
      "wer_uncapped": 0.10496255186163048,
      "cer": 0.07204086718165961,
      "av_wer": null,
      "strict_wer": 0.10738725146829031,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01751171938143219,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.016286327286912424,
      "wer_uncapped": 0.016286327286912424,
      "cer": 0.010371969357938242,
      "av_wer": null,
      "strict_wer": 0.016871464794226642,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005461283401599376,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05103023300596957,
      "wer_uncapped": 0.05199306759098787,
      "cer": 0.031479727596626525,
      "av_wer": null,
      "strict_wer": 0.07933756980550741,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01424995185827075,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.024547353760445683,
      "wer_uncapped": 0.024547353760445683,
      "cer": 0.012676170419569092,
      "av_wer": null,
      "strict_wer": 0.027681058495821725,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08269875114224795,
      "wer_uncapped": 0.08269875114224795,
      "cer": 0.05226248651393032,
      "av_wer": null,
      "strict_wer": 0.08863844045080718,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0255863539445629,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08625180897250362,
      "wer_uncapped": 0.08625180897250362,
      "cer": 0.05282353292876147,
      "av_wer": null,
      "strict_wer": 0.09015918958031838,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021852387843704777,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10188087774294671,
      "wer_uncapped": 0.10364420062695925,
      "cer": 0.07193147674783623,
      "av_wer": null,
      "strict_wer": 0.10540752351097178,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02311912225705329,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.022632311977715876,
      "wer_uncapped": 0.022632311977715876,
      "cer": 0.010732220962254981,
      "av_wer": null,
      "strict_wer": 0.026462395543175487,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06564118184587268,
      "wer_uncapped": 0.06564118184587268,
      "cer": 0.04179095005394428,
      "av_wer": null,
      "strict_wer": 0.07142857142857142,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021778860798050564,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07945007235890014,
      "wer_uncapped": 0.07945007235890014,
      "cer": 0.04789094496427611,
      "av_wer": null,
      "strict_wer": 0.08321273516642547,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019102749638205498,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07954545454545454,
      "wer_uncapped": 0.08013322884012539,
      "cer": 0.055024889008475714,
      "av_wer": null,
      "strict_wer": 0.08365987460815047,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01920062695924765,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.1328719723183391,
      "wer_uncapped": 0.13529411764705881,
      "cer": 0.08039606886869134,
      "av_wer": null,
      "strict_wer": 0.13529411764705881,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015570934256055362,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08390883977900553,
      "wer_uncapped": 0.08390883977900553,
      "cer": 0.04674942141805176,
      "av_wer": null,
      "strict_wer": 0.09513121546961326,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01976864640883978,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06006267409470752,
      "wer_uncapped": 0.06023676880222841,
      "cer": 0.03827150494087154,
      "av_wer": null,
      "strict_wer": 0.06302228412256268,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007834261838440111,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1349375571123972,
      "wer_uncapped": 0.1349375571123972,
      "cer": 0.0901504093418798,
      "av_wer": null,
      "strict_wer": 0.139201949436491,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031830642704843135,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11273516642547034,
      "wer_uncapped": 0.11287988422575977,
      "cer": 0.0691160204478192,
      "av_wer": null,
      "strict_wer": 0.11722141823444283,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022865412445730825,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.1424373040752351,
      "wer_uncapped": 0.14400470219435738,
      "cer": 0.09995963944571505,
      "av_wer": null,
      "strict_wer": 0.1469435736677116,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026253918495297807,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2737024221453287,
      "wer_uncapped": 0.2844290657439446,
      "cer": 0.19751718022611395,
      "av_wer": null,
      "strict_wer": 0.2768166089965398,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03321799307958478,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13406422651933703,
      "wer_uncapped": 0.13535911602209943,
      "cer": 0.08434672838207448,
      "av_wer": null,
      "strict_wer": 0.1451139502762431,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.0237396408839779,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.0549064732532751,
      "cer": 0.03183866395873281,
      "wer_arith": 0.06100459973587434,
      "done": 9,
      "total": 9,
      "ci": [
       0.05132,
       0.05817
      ]
     },
     "accented": {
      "wer": 0.13349421378818627,
      "cer": 0.09983549249434504,
      "wer_arith": 0.13349421378818627,
      "done": 1,
      "total": 1,
      "ci": [
       0.11273,
       0.15585
      ]
     },
     "noisy": {
      "wer": 0.07129204805698598,
      "cer": 0.044843623543091495,
      "wer_arith": 0.07972342252967438,
      "done": 5,
      "total": 5,
      "ci": [
       0.06511,
       0.07781
      ]
     },
     "telephony": {
      "wer": 0.05526349510189735,
      "cer": 0.033127293808422525,
      "wer_arith": 0.06642079913977124,
      "done": 8,
      "total": 8,
      "ci": [
       0.05088,
       0.05952
      ]
     },
     "callcenter": {
      "wer": 0.12976832582742023,
      "cer": 0.08573404105690088,
      "wer_arith": 0.142989891728746,
      "done": 6,
      "total": 6,
      "ci": [
       0.12023,
       0.1385
      ]
     }
    },
    "arena": 0.07254527212916467,
    "arena_arith": 0.08710223942183286,
    "arena_cer": 0.04474606791248899,
    "arena_strict": 0.07864033382513547,
    "zero_shot": 0.06471201326666046,
    "arena_real": 0.05805630548436989,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 18,
    "boh_share": 0.4033333333333333,
    "arena_ci": [
     0.06837,
     0.07655
    ],
    "rank_set": [
     11,
     21
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run16",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run16",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.021976364093537842,
     "cer": 0.008258030222492217,
     "rtfx": 179.99,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.047467292854746726,
     "cer": 0.020590418795580594,
     "rtfx": 169.58,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06436024931717907,
     "cer": 0.03702034901421143,
     "rtfx": 190.35,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09644344761294457,
     "cer": 0.05117201031523036,
     "rtfx": 229.37,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07385018599932364,
     "cer": 0.04331652232727059,
     "rtfx": 192.62,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08588190558965723,
     "cer": 0.05251378461413254,
     "rtfx": 167.64,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09199314209677832,
     "cer": 0.04591133004926108,
     "rtfx": 160.82,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.0346318118664128,
     "cer": 0.017903318406246413,
     "rtfx": 203.77,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08696055684454757,
     "cer": 0.045504044803982575,
     "rtfx": 143.81,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15044150715735205,
     "cer": 0.10642287857477731,
     "rtfx": 164.9,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.1107818309176141,
     "cer": 0.07037487604657582,
     "rtfx": 177.66,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01735907938365516,
     "cer": 0.010611748421869429,
     "rtfx": 192.66,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09493549008280378,
     "cer": 0.04665098991124934,
     "rtfx": 201.54,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.028203342618384402,
     "cer": 0.011879479692062649,
     "rtfx": 159.42,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08863844045080718,
     "cer": 0.05127051349920593,
     "rtfx": 182.32,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08929088277858177,
     "cer": 0.05172112528394199,
     "rtfx": 183.27,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10677899686520376,
     "cer": 0.06969193875668696,
     "rtfx": 153.66,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02681058495821727,
     "cer": 0.01008760286700292,
     "rtfx": 160.54,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07188547060615291,
     "cer": 0.04131815775542615,
     "rtfx": 179.93,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08263386396526773,
     "cer": 0.046953396070991735,
     "rtfx": 184.71,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08287617554858934,
     "cer": 0.05238885814425383,
     "rtfx": 153.46,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13529411764705881,
     "cer": 0.07399367363393909,
     "rtfx": 229.02,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0949585635359116,
     "cer": 0.04702961879824531,
     "rtfx": 166.03,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06354456824512535,
     "cer": 0.03424475710114149,
     "rtfx": 159.48,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.13783125190374657,
     "cer": 0.0859449444150344,
     "rtfx": 179.95,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11591895803183791,
     "cer": 0.06612416065500112,
     "rtfx": 182.21,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14890282131661442,
     "cer": 0.0955543257701531,
     "rtfx": 152.41,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.286159169550173,
     "cer": 0.18439496371642994,
     "rtfx": 227.7,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14917127071823205,
     "cer": 0.08392559594654334,
     "rtfx": 97.9,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 34.67,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06706277291945864,
     "cer": 0.03579886761648975,
     "done": 9,
     "total": 9,
     "ci": [
      0.0649,
      0.06925
     ]
    },
    "accented": {
     "wer": 0.15044150715735205,
     "cer": 0.10642287857477731,
     "done": 1,
     "total": 1,
     "ci": [
      0.13554,
      0.16767
     ]
    },
    "noisy": {
     "wer": 0.08473869872611825,
     "cer": 0.050987586655694674,
     "done": 5,
     "total": 5,
     "ci": [
      0.07959,
      0.09002
     ]
    },
    "telephony": {
     "wer": 0.07584416821595708,
     "cer": 0.04112925570037223,
     "done": 8,
     "total": 8,
     "ci": [
      0.07142,
      0.08068
     ]
    },
    "callcenter": {
     "wer": 0.1502546732942882,
     "cer": 0.09169812460071723,
     "done": 6,
     "total": 6,
     "ci": [
      0.14152,
      0.15911
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 16 (tag run16-soup): weight average 0.5 x run13-soup + 0.5 x run16-rl-s250 (GSPO with short replies after silence); branch `run16` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 01ffe1a9ba), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.42333333333333334,
   "inserted_wpm": 102.76,
   "arena_wer": 0.09457709002840106,
   "arena_cer": 0.05538504616060961,
   "arena_ci": [
    0.09203,
    0.09726
   ],
   "rank_range": [
    11,
    16
   ],
   "rtfx": 162.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.42333333333333334,
    "halluc_3plus": 0.39666666666666667,
    "halluc_3plus_ci": [
     0.34295,
     0.453
    ],
    "inserted_wpm": 102.76027435454192,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.018305255217500628,
      "wer_uncapped": 0.018305255217500628,
      "cer": 0.00876635016827229,
      "av_wer": null,
      "strict_wer": 0.021976364093537842,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002413879808901182,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04355361735435536,
      "wer_uncapped": 0.04355361735435536,
      "cer": 0.02292865747557221,
      "av_wer": null,
      "strict_wer": 0.047411383204741135,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004081404450408141,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05924784648784929,
      "wer_uncapped": 0.05924784648784929,
      "cer": 0.036883989194714174,
      "av_wer": null,
      "strict_wer": 0.06436024931717907,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025421948315708383,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09142368898857203,
      "wer_uncapped": 0.09249172273843853,
      "cer": 0.05406087295580174,
      "av_wer": null,
      "strict_wer": 0.09526861048809142,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012495994873438,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07017247210010145,
      "wer_uncapped": 0.07017247210010145,
      "cer": 0.043699169063034775,
      "av_wer": null,
      "strict_wer": 0.07385018599932364,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017289482583699695,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08110163506980281,
      "wer_uncapped": 0.08169916888478462,
      "cer": 0.05324778082733724,
      "av_wer": null,
      "strict_wer": 0.08528437177467543,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.021674181107067196,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08191100079326492,
      "wer_uncapped": 0.08191100079326492,
      "cer": 0.04560639615630044,
      "av_wer": null,
      "strict_wer": 0.09199314209677832,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01965249878451342,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03105542119075799,
      "wer_uncapped": 0.03105542119075799,
      "cer": 0.017702756047792992,
      "av_wer": null,
      "strict_wer": 0.0346318118664128,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01217002006895487,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07294663573085847,
      "wer_uncapped": 0.07350348027842227,
      "cer": 0.04447646493756004,
      "av_wer": null,
      "strict_wer": 0.08640371229698376,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015127610208816705,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1331102945209236,
      "wer_uncapped": 0.1452860198541107,
      "cer": 0.0995417290913898,
      "av_wer": null,
      "strict_wer": 0.13826578182416496,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.003015075376884422,
      "insertions": 0.03608841112268963,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10501643407511181,
      "wer_uncapped": 0.10674066490651436,
      "cer": 0.07369798155993022,
      "av_wer": null,
      "strict_wer": 0.10905760008621154,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.018319952583652137,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.016676418958455237,
      "wer_uncapped": 0.016676418958455237,
      "cer": 0.010635217311185406,
      "av_wer": null,
      "strict_wer": 0.01735907938365516,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005851375073142188,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.060658578856152515,
      "wer_uncapped": 0.06624301944925862,
      "cer": 0.04122130519099806,
      "av_wer": null,
      "strict_wer": 0.08915848257269401,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027344502214519544,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.025069637883008356,
      "wer_uncapped": 0.025069637883008356,
      "cer": 0.012716669366596468,
      "av_wer": null,
      "strict_wer": 0.028203342618384402,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08300335059396893,
      "wer_uncapped": 0.08300335059396893,
      "cer": 0.05286539315859618,
      "av_wer": null,
      "strict_wer": 0.08863844045080718,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024977155041120927,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.085383502170767,
      "wer_uncapped": 0.085383502170767,
      "cer": 0.052584377148665214,
      "av_wer": null,
      "strict_wer": 0.08929088277858177,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021562952243125905,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10148902821316615,
      "wer_uncapped": 0.10325235109717869,
      "cer": 0.07193147674783623,
      "av_wer": null,
      "strict_wer": 0.10501567398119123,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023706896551724137,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02298050139275766,
      "wer_uncapped": 0.02298050139275766,
      "cer": 0.01077271990928236,
      "av_wer": null,
      "strict_wer": 0.02681058495821727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06640268047517514,
      "wer_uncapped": 0.06640268047517514,
      "cer": 0.04223519705527702,
      "av_wer": null,
      "strict_wer": 0.07188547060615291,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02208346024977155,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.0788712011577424,
      "wer_uncapped": 0.0788712011577424,
      "cer": 0.04762189471166781,
      "av_wer": null,
      "strict_wer": 0.08263386396526773,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01881331403762663,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07817398119122257,
      "wer_uncapped": 0.07876175548589341,
      "cer": 0.0541728328624602,
      "av_wer": null,
      "strict_wer": 0.0822884012539185,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018808777429467086,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13044982698961938,
      "wer_uncapped": 0.1328719723183391,
      "cer": 0.07921377373826942,
      "av_wer": null,
      "strict_wer": 0.1328719723183391,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014186851211072665,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08339088397790055,
      "wer_uncapped": 0.08339088397790055,
      "cer": 0.046286555859457186,
      "av_wer": null,
      "strict_wer": 0.0949585635359116,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02037292817679558,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.05988857938718663,
      "wer_uncapped": 0.060584958217270196,
      "cer": 0.038190507046816785,
      "av_wer": null,
      "strict_wer": 0.06284818941504178,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008182451253481894,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13356685957965275,
      "wer_uncapped": 0.13356685957965275,
      "cer": 0.0901504093418798,
      "av_wer": null,
      "strict_wer": 0.13783125190374657,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031069144075540664,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11143270622286541,
      "wer_uncapped": 0.11143270622286541,
      "cer": 0.06830886968999432,
      "av_wer": null,
      "strict_wer": 0.11591895803183791,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02199710564399421,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.1424373040752351,
      "wer_uncapped": 0.14400470219435738,
      "cer": 0.09982510426476524,
      "av_wer": null,
      "strict_wer": 0.14733542319749215,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026841692789968653,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.27335640138408307,
      "wer_uncapped": 0.28304498269896194,
      "cer": 0.19929062292174685,
      "av_wer": null,
      "strict_wer": 0.27647058823529413,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0328719723183391,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13544544198895028,
      "wer_uncapped": 0.13846685082872928,
      "cer": 0.08573532505785819,
      "av_wer": null,
      "strict_wer": 0.14614986187845305,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02598411602209945,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05494020724561654,
      "cer": 0.0318247904494808,
      "wer_arith": 0.061079730325895885,
      "done": 9,
      "total": 9,
      "ci": [
       0.05135,
       0.05826
      ]
     },
     "accented": {
      "wer": 0.13311029452092357,
      "cer": 0.09954172909138978,
      "wer_arith": 0.1331102945209236,
      "done": 1,
      "total": 1,
      "ci": [
       0.11274,
       0.15515
      ]
     },
     "noisy": {
      "wer": 0.07169003659544006,
      "cer": 0.045139342625996434,
      "wer_arith": 0.07999239058720445,
      "done": 5,
      "total": 5,
      "ci": [
       0.06532,
       0.07834
      ]
     },
     "telephony": {
      "wer": 0.05647878737582983,
      "cer": 0.034234498748880744,
      "wer_arith": 0.06720050912487818,
      "done": 8,
      "total": 8,
      "ci": [
       0.05203,
       0.06078
      ]
     },
     "callcenter": {
      "wer": 0.12942816644677016,
      "cer": 0.08587783958274628,
      "wer_arith": 0.14268788210632888,
      "done": 6,
      "total": 6,
      "ci": [
       0.1197,
       0.13852
      ]
     }
    },
    "arena": 0.07292420306562782,
    "arena_arith": 0.08725716695521199,
    "arena_cer": 0.045126238132137404,
    "arena_strict": 0.07898813894384553,
    "zero_shot": 0.06664777281378985,
    "arena_real": 0.05879044002107464,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 19,
    "boh_share": 0.4066666666666667,
    "arena_ci": [
     0.06872,
     0.07695
    ],
    "rank_set": [
     13,
     25
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run6b-soup70",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-run6b-soup70",
   "params_b": 2.04,
   "license": "private weights",
   "kind": "private",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.017299471963791804,
     "cer": 0.006160300706203964,
     "rtfx": 183.64,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.039751761153975176,
     "cer": 0.01745709419625311,
     "rtfx": 174.51,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06078857062819525,
     "cer": 0.03600959606415237,
     "rtfx": 194.79,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09302573961337178,
     "cer": 0.04828528540086987,
     "rtfx": 234.94,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.061717957389245855,
     "cer": 0.036986663922012615,
     "rtfx": 194.74,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.0919115649953827,
     "cer": 0.058729577407475225,
     "rtfx": 173.31,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08971570408659382,
     "cer": 0.04533030188202602,
     "rtfx": 164.79,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04224772294550507,
     "cer": 0.02238603743254105,
     "rtfx": 207.21,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08334106728538283,
     "cer": 0.043851120099564406,
     "rtfx": 147.93,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1536225525146712,
     "cer": 0.10982184716361931,
     "rtfx": 168.21,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11810981195107495,
     "cer": 0.07948353591837987,
     "rtfx": 185.94,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01492100643651258,
     "cer": 0.00887108613132563,
     "rtfx": 196.07,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09743886000385134,
     "cer": 0.047826746567549115,
     "rtfx": 209.2,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02402506963788301,
     "cer": 0.008959384125298646,
     "rtfx": 162.36,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08955223880597014,
     "cer": 0.0571201694017999,
     "rtfx": 91.76,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.07366136034732272,
     "cer": 0.04256009585382292,
     "rtfx": 184.57,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.11892633228840126,
     "cer": 0.07987456188895038,
     "rtfx": 62.16,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02193593314763231,
     "cer": 0.007233873108574463,
     "rtfx": 161.94,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.06533658239415169,
     "cer": 0.0368713605082054,
     "rtfx": 182.68,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0698986975397974,
     "cer": 0.039964054816404984,
     "rtfx": 184.95,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08836206896551724,
     "cer": 0.058328721638074156,
     "rtfx": 156.42,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1408304498269896,
     "cer": 0.07901755256465919,
     "rtfx": 230.97,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08943370165745856,
     "cer": 0.045805420478117455,
     "rtfx": 167.89,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06615598885793872,
     "cer": 0.03616936554287231,
     "rtfx": 162.21,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14331404203472434,
     "cer": 0.0888300688194812,
     "rtfx": 182.38,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.10057887120115774,
     "cer": 0.0589600858690497,
     "rtfx": 184.56,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1875,
     "cer": 0.12340896513558385,
     "rtfx": 158.73,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.30761245674740484,
     "cer": 0.19686162624821682,
     "rtfx": 235.58,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14174723756906077,
     "cer": 0.08217431223858265,
     "rtfx": 168.27,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 21.94,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06442217334016048,
     "cer": 0.03502177523456652,
     "done": 9,
     "total": 9,
     "ci": [
      0.06221,
      0.06663
     ]
    },
    "accented": {
     "wer": 0.1536225525146712,
     "cer": 0.10982184716361931,
     "done": 1,
     "total": 1,
     "ci": [
      0.13865,
      0.17079
     ]
    },
    "noisy": {
     "wer": 0.08485496260613042,
     "cer": 0.05359954943765034,
     "done": 5,
     "total": 5,
     "ci": [
      0.07903,
      0.09088
     ]
    },
    "telephony": {
     "wer": 0.07351966249648884,
     "cer": 0.0404898519766138,
     "done": 8,
     "total": 8,
     "ci": [
      0.069,
      0.0782
     ]
    },
    "callcenter": {
     "wer": 0.1578180994017144,
     "cer": 0.09773407064229776,
     "done": 6,
     "total": 6,
     "ci": [
      0.14833,
      0.16718
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run6b-soup70: weight average of 0.7 x run 6b (step 10,000) and 0.3 x run 5 (step 15,000), no further training; private weights. Trained on the train splits of MASC and Common Voice and on MGB-2/SADA train rows; the run-5 share carries run 5's exposure (MGB-3 train, the 20 leaked FLEURS ar_eg test sentences); English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 332.82,
   "arena_wer": 0.09500812911280501,
   "arena_cer": 0.0568890286951819,
   "arena_ci": [
    0.09241,
    0.09784
   ],
   "rank_range": [
    9,
    19
   ],
   "rtfx": 153.4,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.9766666666666667,
    "halluc_3plus_ci": [
     0.95263,
     0.98865
    ],
    "inserted_wpm": 332.8165951039982,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.014734724666834297,
      "wer_uncapped": 0.014734724666834297,
      "cer": 0.006430198804168064,
      "av_wer": null,
      "strict_wer": 0.017299471963791804,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0020115665074176515,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.03628536285362854,
      "wer_uncapped": 0.03628536285362854,
      "cer": 0.019368223798688262,
      "av_wer": null,
      "strict_wer": 0.039695851503969586,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0036900369003690036,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05651656278450872,
      "wer_uncapped": 0.05651656278450872,
      "cer": 0.036022486675914435,
      "av_wer": null,
      "strict_wer": 0.06078857062819525,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025351915400238113,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08715155398910605,
      "wer_uncapped": 0.08939442486382569,
      "cer": 0.05073510860340834,
      "av_wer": null,
      "strict_wer": 0.09078286873865214,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013670831998291146,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05884342238755495,
      "wer_uncapped": 0.05884342238755495,
      "cer": 0.037595046133761446,
      "av_wer": null,
      "strict_wer": 0.061717957389245855,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014161312140683125,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08745722201097289,
      "wer_uncapped": 0.08789179205823239,
      "cer": 0.05933041564671266,
      "av_wer": null,
      "strict_wer": 0.0914769949481232,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.024390243902439025,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08042682770797616,
      "wer_uncapped": 0.08042682770797616,
      "cer": 0.04485567358582636,
      "av_wer": null,
      "strict_wer": 0.08971570408659382,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019089536579748715,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03851695569392271,
      "wer_uncapped": 0.03851695569392271,
      "cer": 0.02188936889452293,
      "av_wer": null,
      "strict_wer": 0.04224772294550507,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017727576802346524,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.0696983758700696,
      "wer_uncapped": 0.07044083526682135,
      "cer": 0.042867435158501443,
      "av_wer": null,
      "strict_wer": 0.08259860788863109,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016334106728538283,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13711402402237702,
      "wer_uncapped": 0.149399440574782,
      "cer": 0.1024793631209424,
      "av_wer": null,
      "strict_wer": 0.1413371359622662,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.035594800636209074,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11390699929953123,
      "wer_uncapped": 0.1151462902096018,
      "cer": 0.08228258160976826,
      "av_wer": null,
      "strict_wer": 0.11687052104100436,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.021067945471199955,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.014530914764969769,
      "wer_uncapped": 0.014530914764969769,
      "cer": 0.008687182457156396,
      "av_wer": null,
      "strict_wer": 0.01492100643651258,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0059488979910278916,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.06373964952821105,
      "wer_uncapped": 0.06932409012131716,
      "cer": 0.042664501871645694,
      "av_wer": null,
      "strict_wer": 0.09127671865973426,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030810706720585404,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02054317548746518,
      "wer_uncapped": 0.02054317548746518,
      "cer": 0.009598250445488418,
      "av_wer": null,
      "strict_wer": 0.02402506963788301,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08589704538531831,
      "wer_uncapped": 0.08589704538531831,
      "cer": 0.05876753189058831,
      "av_wer": null,
      "strict_wer": 0.08955223880597014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0255863539445629,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.07018813314037627,
      "wer_uncapped": 0.07018813314037627,
      "cer": 0.04334698514244716,
      "av_wer": null,
      "strict_wer": 0.07366136034732272,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015629522431259046,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.1106974921630094,
      "wer_uncapped": 0.11461598746081504,
      "cer": 0.08085564375084084,
      "av_wer": null,
      "strict_wer": 0.11500783699059561,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029192789968652037,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.018802228412256268,
      "wer_uncapped": 0.018802228412256268,
      "cer": 0.007573303094119553,
      "av_wer": null,
      "strict_wer": 0.02193593314763231,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.061529089247639356,
      "wer_uncapped": 0.061529089247639356,
      "cer": 0.03766579932728311,
      "av_wer": null,
      "strict_wer": 0.06533658239415169,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022235759975632045,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06642547033285094,
      "wer_uncapped": 0.06642547033285094,
      "cer": 0.040746166033900334,
      "av_wer": null,
      "strict_wer": 0.0698986975397974,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015050651230101303,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.08287617554858934,
      "wer_uncapped": 0.0834639498432602,
      "cer": 0.05955424010045293,
      "av_wer": null,
      "strict_wer": 0.0877742946708464,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020963949843260186,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13529411764705881,
      "wer_uncapped": 0.1384083044982699,
      "cer": 0.08497746249907633,
      "av_wer": null,
      "strict_wer": 0.13771626297577855,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017993079584775088,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07890193370165746,
      "wer_uncapped": 0.07890193370165746,
      "cer": 0.04533978539869556,
      "av_wer": null,
      "strict_wer": 0.08943370165745856,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018560082872928176,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06389275766016714,
      "wer_uncapped": 0.06424094707520892,
      "cer": 0.03936497651061072,
      "av_wer": null,
      "strict_wer": 0.06580779944289694,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009749303621169917,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1393542491623515,
      "wer_uncapped": 0.1393542491623515,
      "cer": 0.09338706606587549,
      "av_wer": null,
      "strict_wer": 0.14331404203472434,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03457203777033201,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.09768451519536903,
      "wer_uncapped": 0.09768451519536903,
      "cer": 0.06194134704493139,
      "av_wer": null,
      "strict_wer": 0.10057887120115774,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018668596237337194,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.17378526645768025,
      "wer_uncapped": 0.18181818181818182,
      "cer": 0.1244898874388986,
      "av_wer": null,
      "strict_wer": 0.17946708463949843,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.04584639498432602,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2885813148788927,
      "wer_uncapped": 0.3055363321799308,
      "cer": 0.2069755412694894,
      "av_wer": null,
      "strict_wer": 0.2906574394463668,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.05051903114186851,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13242403314917128,
      "wer_uncapped": 0.1325103591160221,
      "cer": 0.08533557752998107,
      "av_wer": null,
      "strict_wer": 0.14166091160220995,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022876381215469612,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.052297033950190766,
      "cer": 0.030275195563384132,
      "wer_arith": 0.058847889773841554,
      "done": 9,
      "total": 9,
      "ci": [
       0.04888,
       0.05544
      ]
     },
     "accented": {
      "wer": 0.13711402402237702,
      "cer": 0.1024793631209424,
      "wer_arith": 0.13711402402237702,
      "done": 1,
      "total": 1,
      "ci": [
       0.11614,
       0.15947
      ]
     },
     "noisy": {
      "wer": 0.06897941982119014,
      "cer": 0.04387946612537075,
      "wer_arith": 0.08024656909514008,
      "done": 5,
      "total": 5,
      "ci": [
       0.06284,
       0.07576
      ]
     },
     "telephony": {
      "wer": 0.05307505065746381,
      "cer": 0.0315769442771149,
      "wer_arith": 0.06526244739790413,
      "done": 8,
      "total": 8,
      "ci": [
       0.04875,
       0.05706
      ]
     },
     "callcenter": {
      "wer": 0.1339494468421006,
      "cer": 0.08911006651747173,
      "wer_arith": 0.14928702275060532,
      "done": 6,
      "total": 6,
      "ci": [
       0.12408,
       0.1438
      ]
     }
    },
    "arena": 0.07092364490716732,
    "arena_arith": 0.08776307876964903,
    "arena_cer": 0.043786804441735556,
    "arena_strict": 0.07638891296007012,
    "zero_shot": 0.06622572097676513,
    "arena_real": 0.05690882454920447,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 14,
    "boh_share": 0.9833333333333333,
    "arena_ci": [
     0.06672,
     0.07498
    ],
    "rank_set": [
     5,
     18
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run9b",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/main",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.020618556701030927,
     "cer": 0.007726478851849039,
     "rtfx": 178.7,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.0464050095046405,
     "cer": 0.020459408707803835,
     "rtfx": 168.56,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06344982141606555,
     "cer": 0.03683768281841762,
     "rtfx": 190.45,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09612303748798462,
     "cer": 0.050498441168546244,
     "rtfx": 227.5,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07275109908691241,
     "cer": 0.04292687947537898,
     "rtfx": 190.86,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08474115921560106,
     "cer": 0.05163889397546237,
     "rtfx": 167.18,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09334936922643876,
     "cer": 0.04660856384994316,
     "rtfx": 160.55,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.044486183296454485,
     "cer": 0.023947640372028935,
     "rtfx": 202.01,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08464037122969838,
     "cer": 0.04398724331051649,
     "rtfx": 139.24,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15208687544562058,
     "cer": 0.10799343647444913,
     "rtfx": 165.94,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11272159060294197,
     "cer": 0.0744640611742095,
     "rtfx": 178.69,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016871464794226642,
     "cer": 0.00983579053331376,
     "rtfx": 190.68,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08357404197958791,
     "cer": 0.035765758931957825,
     "rtfx": 201.41,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.028725626740947075,
     "cer": 0.012808601008760287,
     "rtfx": 158.25,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08909533962838867,
     "cer": 0.052885124404446794,
     "rtfx": 177.29,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08972503617945007,
     "cer": 0.051746087216994086,
     "rtfx": 179.8,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10717084639498432,
     "cer": 0.06851134477033757,
     "rtfx": 150.61,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02541782729805014,
     "cer": 0.009390761879479691,
     "rtfx": 159.09,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07005787389582699,
     "cer": 0.03980942297511911,
     "rtfx": 178.21,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08176555716353111,
     "cer": 0.045880032949751626,
     "rtfx": 182.46,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08463949843260188,
     "cer": 0.05275779376498801,
     "rtfx": 152.18,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1408304498269896,
     "cer": 0.07833529740122806,
     "rtfx": 223.28,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09487223756906077,
     "cer": 0.04731866562383106,
     "rtfx": 162.79,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06702646239554318,
     "cer": 0.036567560392885584,
     "rtfx": 159.53,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14727383490709717,
     "cer": 0.09147697194282689,
     "rtfx": 178.47,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1170767004341534,
     "cer": 0.06714759991013704,
     "rtfx": 179.73,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14870689655172414,
     "cer": 0.09703006825308984,
     "rtfx": 150.67,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.28581314878892733,
     "cer": 0.182286175029461,
     "rtfx": 225.88,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14709944751381215,
     "cer": 0.0836365491209576,
     "rtfx": 164.45,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 43.29,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06739606746275852,
     "cer": 0.03607013694777186,
     "done": 9,
     "total": 9,
     "ci": [
      0.06533,
      0.06953
     ]
    },
    "accented": {
     "wer": 0.15208687544562058,
     "cer": 0.10799343647444913,
     "done": 1,
     "total": 1,
     "ci": [
      0.13723,
      0.16915
     ]
    },
    "noisy": {
     "wer": 0.08548768790934243,
     "cer": 0.05208304371494965,
     "done": 5,
     "total": 5,
     "ci": [
      0.0806,
      0.09111
     ]
    },
    "telephony": {
     "wer": 0.07475361886998438,
     "cer": 0.03988669050745864,
     "done": 8,
     "total": 8,
     "ci": [
      0.07037,
      0.07921
     ]
    },
    "callcenter": {
     "wer": 0.15216608176520954,
     "cer": 0.09302415410822633,
     "done": 6,
     "total": 6,
     "ci": [
      0.14301,
      0.161
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run 9b final (tag run9b-final): run 9 (SFT with a two-view consistency loss and call windows, then GSPO) continued on 27 h of human-annotated Arabic phone calls; branch `main` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit e5a0100ceb), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.3933333333333333,
   "inserted_wpm": 75.28,
   "arena_wer": 0.0950730532135665,
   "arena_cer": 0.05574161635121417,
   "arena_ci": [
    0.09266,
    0.09762
   ],
   "rank_range": [
    11,
    18
   ],
   "rtfx": 167.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.3933333333333333,
    "halluc_3plus": 0.39,
    "halluc_3plus_ci": [
     0.33653,
     0.44625
    ],
    "inserted_wpm": 75.28020966932472,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017500628614533567,
      "wer_uncapped": 0.017500628614533567,
      "cer": 0.008234355303179248,
      "av_wer": null,
      "strict_wer": 0.020618556701030927,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002464168971586623,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.042603153304260316,
      "wer_uncapped": 0.042603153304260316,
      "cer": 0.022834961852496317,
      "av_wer": null,
      "strict_wer": 0.04634909985463491,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004193223750419322,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.058897681910497934,
      "wer_uncapped": 0.058897681910497934,
      "cer": 0.03700080309556837,
      "av_wer": null,
      "strict_wer": 0.06344982141606555,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024721619161005674,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09078286873865214,
      "wer_uncapped": 0.09174409911353198,
      "cer": 0.053487465308837356,
      "av_wer": null,
      "strict_wer": 0.09505500373811812,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01046673074869166,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06814338856949612,
      "wer_uncapped": 0.06814338856949612,
      "cer": 0.043099341954377854,
      "av_wer": null,
      "strict_wer": 0.07275109908691241,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01568312478863713,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07947199739257972,
      "wer_uncapped": 0.08012385246346895,
      "cer": 0.05244418069876122,
      "av_wer": null,
      "strict_wer": 0.08408930414471183,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.021402574827530014,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08313928196729702,
      "wer_uncapped": 0.08313928196729702,
      "cer": 0.046257022384044645,
      "av_wer": null,
      "strict_wer": 0.09334936922643876,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.020983136723048183,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03972623887202182,
      "wer_uncapped": 0.03972623887202182,
      "cer": 0.02321818758027121,
      "av_wer": null,
      "strict_wer": 0.044486183296454485,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01911696598569444,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06979118329466358,
      "wer_uncapped": 0.07053364269141531,
      "cer": 0.04296349663784822,
      "av_wer": null,
      "strict_wer": 0.08380510440835266,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015406032482598609,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13508473646684582,
      "wer_uncapped": 0.1473701530192508,
      "cer": 0.1014071267001557,
      "av_wer": null,
      "strict_wer": 0.1398014588932156,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.035869028684253824,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.1075488981087343,
      "wer_uncapped": 0.1086265423783609,
      "cer": 0.07739845502118116,
      "av_wer": null,
      "strict_wer": 0.11164394633331537,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.018589363651058784,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01609128145114102,
      "wer_uncapped": 0.01609128145114102,
      "cer": 0.00974017427014505,
      "av_wer": null,
      "strict_wer": 0.016871464794226642,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005363760483713673,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05314846909300982,
      "wer_uncapped": 0.05545927209705372,
      "cer": 0.033058223966084876,
      "av_wer": null,
      "strict_wer": 0.08068553822453303,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01713845561332563,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02663649025069638,
      "wer_uncapped": 0.02663649025069638,
      "cer": 0.013850639883363033,
      "av_wer": null,
      "strict_wer": 0.028725626740947075,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004178272980501393,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08513554675601584,
      "wer_uncapped": 0.08513554675601584,
      "cer": 0.05492796852192676,
      "av_wer": null,
      "strict_wer": 0.08909533962838867,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025434054218702408,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08523878437047756,
      "wer_uncapped": 0.08523878437047756,
      "cer": 0.05249469373112912,
      "av_wer": null,
      "strict_wer": 0.08972503617945007,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01997105643994211,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10207680250783699,
      "wer_uncapped": 0.10266457680250783,
      "cer": 0.07103457554150411,
      "av_wer": null,
      "strict_wer": 0.10658307210031348,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021355799373040753,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02193593314763231,
      "wer_uncapped": 0.02193593314763231,
      "cer": 0.00988174307468006,
      "av_wer": null,
      "strict_wer": 0.02541782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06548888212001218,
      "wer_uncapped": 0.06548888212001218,
      "cer": 0.04106111569461192,
      "av_wer": null,
      "strict_wer": 0.07005787389582699,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021474261346329578,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07756874095513748,
      "wer_uncapped": 0.07756874095513748,
      "cer": 0.04630653792113838,
      "av_wer": null,
      "strict_wer": 0.08176555716353111,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01780028943560058,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07856583072100314,
      "wer_uncapped": 0.07856583072100314,
      "cer": 0.054710973586259475,
      "av_wer": null,
      "strict_wer": 0.08463949843260188,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01841692789968652,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13494809688581316,
      "wer_uncapped": 0.1384083044982699,
      "cer": 0.08438631493386536,
      "av_wer": null,
      "strict_wer": 0.13737024221453287,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01764705882352941,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08287292817679558,
      "wer_uncapped": 0.08287292817679558,
      "cer": 0.046770460761624236,
      "av_wer": null,
      "strict_wer": 0.09487223756906077,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020804558011049724,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06337047353760446,
      "wer_uncapped": 0.06371866295264624,
      "cer": 0.04045844808034991,
      "av_wer": null,
      "strict_wer": 0.0666782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008704735376044569,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.14270484313128237,
      "wer_uncapped": 0.14270484313128237,
      "cer": 0.09633813543187154,
      "av_wer": null,
      "strict_wer": 0.14727383490709717,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030307645446238197,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11215629522431259,
      "wer_uncapped": 0.11215629522431259,
      "cer": 0.06968401542554782,
      "av_wer": null,
      "strict_wer": 0.1170767004341534,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02170767004341534,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14184952978056425,
      "wer_uncapped": 0.14380877742946707,
      "cer": 0.10184313197901251,
      "av_wer": null,
      "strict_wer": 0.14674764890282133,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027233542319749216,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2709342560553633,
      "wer_uncapped": 0.28304498269896194,
      "cer": 0.19544816374787558,
      "av_wer": null,
      "strict_wer": 0.2737024221453287,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04013840830449827,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13604972375690608,
      "wer_uncapped": 0.13604972375690608,
      "cer": 0.08729223648222176,
      "av_wer": null,
      "strict_wer": 0.14709944751381215,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022790055248618785,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05547562215003251,
      "cer": 0.03235081151477009,
      "wer_arith": 0.061117380296000244,
      "done": 9,
      "total": 9,
      "ci": [
       0.05195,
       0.05866
      ]
     },
     "accented": {
      "wer": 0.1350847364668458,
      "cer": 0.10140712670015568,
      "wer_arith": 0.13508473646684582,
      "done": 1,
      "total": 1,
      "ci": [
       0.11435,
       0.1578
      ]
     },
     "noisy": {
      "wer": 0.07334181272852362,
      "cer": 0.0465925170192954,
      "wer_arith": 0.08132730439875221,
      "done": 5,
      "total": 5,
      "ci": [
       0.06648,
       0.07991
      ]
     },
     "telephony": {
      "wer": 0.05500005482623565,
      "cer": 0.032697072618080754,
      "wer_arith": 0.06632752031881808,
      "done": 8,
      "total": 8,
      "ci": [
       0.05052,
       0.0594
      ]
     },
     "callcenter": {
      "wer": 0.13205549192291963,
      "cer": 0.08823615963703163,
      "wer_arith": 0.14451085358100554,
      "done": 6,
      "total": 6,
      "ci": [
       0.12288,
       0.14069
      ]
     }
    },
    "arena": 0.0733703737163756,
    "arena_arith": 0.08778304971421552,
    "arena_cer": 0.04545123027184821,
    "arena_strict": 0.07953489718628265,
    "zero_shot": 0.06623102477348172,
    "arena_real": 0.05880537994331011,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 21,
    "boh_share": 0.38666666666666666,
    "arena_ci": [
     0.06917,
     0.07735
    ],
    "rank_set": [
     12,
     26
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run13",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run13",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.021724918280110635,
     "cer": 0.008201078289923305,
     "rtfx": 180.4,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.047635021804763505,
     "cer": 0.020612253810210052,
     "rtfx": 170.35,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06415015057076826,
     "cer": 0.03697163802866642,
     "rtfx": 189.55,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09601623411299796,
     "cer": 0.050613910165120665,
     "rtfx": 228.78,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07380791342576937,
     "cer": 0.04343415035803032,
     "rtfx": 193.01,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08577326307784236,
     "cer": 0.05238153370363588,
     "rtfx": 168.46,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09232580158141201,
     "cer": 0.046062902614626755,
     "rtfx": 161.06,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03483764730098286,
     "cer": 0.017990584452864854,
     "rtfx": 204.31,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08529002320185615,
     "cer": 0.04490121344119477,
     "rtfx": 145.13,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15104480886305052,
     "cer": 0.10689170182841069,
     "rtfx": 162.81,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11029689099628212,
     "cer": 0.07002729531072696,
     "rtfx": 178.39,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.018431831480397894,
     "cer": 0.01155548098903173,
     "rtfx": 190.83,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.1251684960523782,
     "cer": 0.07380717590836684,
     "rtfx": 189.12,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02681058495821727,
     "cer": 0.011680382267056012,
     "rtfx": 158.57,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08879074017666769,
     "cer": 0.051138168343038644,
     "rtfx": 182.51,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08914616497829234,
     "cer": 0.05159631561868151,
     "rtfx": 182.76,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10677899686520376,
     "cer": 0.0702084486257148,
     "rtfx": 151.9,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02663649025069638,
     "cer": 0.010153968675338465,
     "rtfx": 159.54,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0721900700578739,
     "cer": 0.04126521969295924,
     "rtfx": 180.19,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0833574529667149,
     "cer": 0.04737774893287736,
     "rtfx": 183.44,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.0844435736677116,
     "cer": 0.053089835823648776,
     "rtfx": 153.04,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13460207612456748,
     "cer": 0.07293927929045463,
     "rtfx": 228.79,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09582182320441988,
     "cer": 0.04745468765940082,
     "rtfx": 166.13,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06302228412256268,
     "cer": 0.03434430581364481,
     "rtfx": 160.23,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.13904964971063052,
     "cer": 0.0859449444150344,
     "rtfx": 180.83,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11635311143270623,
     "cer": 0.06649858965078255,
     "rtfx": 182.86,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14772727272727273,
     "cer": 0.09507470946319867,
     "rtfx": 153.91,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2816608996539792,
     "cer": 0.18079761830924765,
     "rtfx": 222.73,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14796270718232044,
     "cer": 0.08316047199646343,
     "rtfx": 98.29,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 34.63,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06684010815072257,
     "cer": 0.03568547387380811,
     "done": 9,
     "total": 9,
     "ci": [
      0.06474,
      0.06904
     ]
    },
    "accented": {
     "wer": 0.15104480886305052,
     "cer": 0.10689170182841069,
     "done": 1,
     "total": 1,
     "ci": [
      0.13617,
      0.16834
     ]
    },
    "noisy": {
     "wer": 0.08436467559493263,
     "cer": 0.05093012203304359,
     "done": 5,
     "total": 5,
     "ci": [
      0.07933,
      0.08957
     ]
    },
    "telephony": {
     "wer": 0.08008147672559503,
     "cer": 0.04470542462150973,
     "done": 8,
     "total": 8,
     "ci": [
      0.07546,
      0.08519
     ]
    },
    "callcenter": {
     "wer": 0.14929598747157866,
     "cer": 0.09097010660806192,
     "done": 6,
     "total": 6,
     "ci": [
      0.14058,
      0.15818
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT rounds 12-13 (tag run13-soup): weight average 0.5 x run12-rl-s1500 + 0.5 x run13c-rl-s750; branch `run13` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 7dba8c7a51), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.42333333333333334,
   "inserted_wpm": 93.88,
   "arena_wer": 0.09521090907950941,
   "arena_cer": 0.05600101377886353,
   "arena_ci": [
    0.0927,
    0.09792
   ],
   "rank_range": [
    13,
    19
   ],
   "rtfx": 162.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.42333333333333334,
    "halluc_3plus": 0.4033333333333333,
    "halluc_3plus_ci": [
     0.34938,
     0.45973
    ],
    "inserted_wpm": 93.88278592538896,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01805380940407342,
      "wer_uncapped": 0.01805380940407342,
      "cer": 0.008754785062509396,
      "av_wer": null,
      "strict_wer": 0.021724918280110635,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023635906462157407,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04360952700436095,
      "wer_uncapped": 0.04360952700436095,
      "cer": 0.022942042564583053,
      "av_wer": null,
      "strict_wer": 0.047579112154757915,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004081404450408141,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05896771482596821,
      "wer_uncapped": 0.05896771482596821,
      "cer": 0.036898590932320945,
      "av_wer": null,
      "strict_wer": 0.06415015057076826,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025351915400238113,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09121008223859874,
      "wer_uncapped": 0.09227811598846523,
      "cer": 0.05369389206174453,
      "av_wer": null,
      "strict_wer": 0.09484139698814482,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011427961123571504,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07013019952654717,
      "wer_uncapped": 0.07013019952654717,
      "cer": 0.04379619991884692,
      "av_wer": null,
      "strict_wer": 0.07380791342576937,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017331755157253975,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08099299255798795,
      "wer_uncapped": 0.08164484762887718,
      "cer": 0.053074697722720866,
      "av_wer": null,
      "strict_wer": 0.08512140800695311,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.022054429898419253,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08221807108677295,
      "wer_uncapped": 0.08221807108677295,
      "cer": 0.045781564756077725,
      "av_wer": null,
      "strict_wer": 0.09232580158141201,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019780444740141765,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.031235527196006793,
      "wer_uncapped": 0.031235527196006793,
      "cer": 0.01778615471007845,
      "av_wer": null,
      "strict_wer": 0.03483764730098286,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01240158493284619,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07164733178654292,
      "wer_uncapped": 0.07248259860788864,
      "cer": 0.043659942363112395,
      "av_wer": null,
      "strict_wer": 0.08445475638051043,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015220417633410673,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13371359622662207,
      "wer_uncapped": 0.14599901277902705,
      "cer": 0.10026144942863018,
      "av_wer": null,
      "strict_wer": 0.13875939231064555,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.03597871990347173,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10453149415377984,
      "wer_uncapped": 0.10614796055821973,
      "cer": 0.07331173685522054,
      "av_wer": null,
      "strict_wer": 0.10868042459184224,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01810442372972682,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.017749171055197972,
      "wer_uncapped": 0.017749171055197972,
      "cer": 0.011503935556901044,
      "av_wer": null,
      "strict_wer": 0.018431831480397894,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006924127169884923,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.07567879838243789,
      "wer_uncapped": 0.09724629308684768,
      "cer": 0.05578857168628512,
      "av_wer": null,
      "strict_wer": 0.10340843443096476,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05411130367802811,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02402506963788301,
      "wer_uncapped": 0.02402506963788301,
      "cer": 0.012635671472541713,
      "av_wer": null,
      "strict_wer": 0.02681058495821727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08285105086810844,
      "wer_uncapped": 0.08285105086810844,
      "cer": 0.05257980580059656,
      "av_wer": null,
      "strict_wer": 0.08879074017666769,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024824855315260432,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.0849493487698987,
      "wer_uncapped": 0.0849493487698987,
      "cer": 0.05249469373112912,
      "av_wer": null,
      "strict_wer": 0.08914616497829234,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02141823444283647,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10148902821316615,
      "wer_uncapped": 0.10325235109717869,
      "cer": 0.07255930759226871,
      "av_wer": null,
      "strict_wer": 0.10501567398119123,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023510971786833857,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.022806406685236768,
      "wer_uncapped": 0.022806406685236768,
      "cer": 0.010813218856309736,
      "av_wer": null,
      "strict_wer": 0.02663649025069638,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06701187937861712,
      "wer_uncapped": 0.06701187937861712,
      "cer": 0.04217173319794377,
      "av_wer": null,
      "strict_wer": 0.0721900700578739,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022235759975632045,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07959479015918958,
      "wer_uncapped": 0.07959479015918958,
      "cer": 0.048010522854324236,
      "av_wer": null,
      "strict_wer": 0.0833574529667149,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01939218523878437,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07993730407523511,
      "wer_uncapped": 0.08052507836990595,
      "cer": 0.0548903538275259,
      "av_wer": null,
      "strict_wer": 0.08385579937304075,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01920062695924765,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13044982698961938,
      "wer_uncapped": 0.13217993079584775,
      "cer": 0.07817926549915022,
      "av_wer": null,
      "strict_wer": 0.1328719723183391,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014186851211072665,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08425414364640885,
      "wer_uncapped": 0.08425414364640885,
      "cer": 0.046686303387334316,
      "av_wer": null,
      "strict_wer": 0.09582182320441988,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020631906077348067,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.05988857938718663,
      "wer_uncapped": 0.06006267409470752,
      "cer": 0.038109509152762025,
      "av_wer": null,
      "strict_wer": 0.06284818941504178,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008356545961002786,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1347852573865367,
      "wer_uncapped": 0.1347852573865367,
      "cer": 0.09024560512787967,
      "av_wer": null,
      "strict_wer": 0.13904964971063052,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03091684434968017,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11215629522431259,
      "wer_uncapped": 0.11215629522431259,
      "cer": 0.06875728677767481,
      "av_wer": null,
      "strict_wer": 0.11635311143270623,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022141823444283646,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14165360501567398,
      "wer_uncapped": 0.14322100313479624,
      "cer": 0.0995560339028656,
      "av_wer": null,
      "strict_wer": 0.14615987460815047,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026449843260188087,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2698961937716263,
      "wer_uncapped": 0.27854671280276816,
      "cer": 0.1955959506391783,
      "av_wer": null,
      "strict_wer": 0.2730103806228374,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0314878892733564,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13440953038674033,
      "wer_uncapped": 0.13743093922651933,
      "cer": 0.08501998737639385,
      "av_wer": null,
      "strict_wer": 0.14494129834254144,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02598411602209945,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05475726932311433,
      "cer": 0.03176054935598121,
      "wer_arith": 0.06089613951409546,
      "done": 9,
      "total": 9,
      "ci": [
       0.05116,
       0.05808
      ]
     },
     "accented": {
      "wer": 0.13371359622662207,
      "cer": 0.10026144942863019,
      "wer_arith": 0.13371359622662207,
      "done": 1,
      "total": 1,
      "ci": [
       0.11297,
       0.15553
      ]
     },
     "noisy": {
      "wer": 0.0709182150920794,
      "cer": 0.04504845176337763,
      "wer_arith": 0.07956919832856722,
      "done": 5,
      "total": 5,
      "ci": [
       0.06454,
       0.07741
      ]
     },
     "telephony": {
      "wer": 0.058834048627983956,
      "cer": 0.03599027857584496,
      "wer_arith": 0.06968529004649283,
      "done": 8,
      "total": 8,
      "ci": [
       0.05419,
       0.06332
      ]
     },
     "callcenter": {
      "wer": 0.12920443432571485,
      "cer": 0.08553051853211274,
      "wer_arith": 0.14213157686201278,
      "done": 6,
      "total": 6,
      "ci": [
       0.11976,
       0.13824
      ]
     }
    },
    "arena": 0.07338054896427704,
    "arena_arith": 0.08759350344496336,
    "arena_cer": 0.045565737285419655,
    "arena_strict": 0.07926836581767518,
    "zero_shot": 0.06916824490422349,
    "arena_real": 0.05963009515229533,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 23,
    "boh_share": 0.41,
    "arena_ci": [
     0.06918,
     0.07746
    ],
    "rank_set": [
     16,
     26
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run9-final",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run9-final",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02026653256223284,
     "cer": 0.00742273521148151,
     "rtfx": 183.17,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04567818405456782,
     "cer": 0.0198261932835495,
     "rtfx": 171.44,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06253939351495202,
     "cer": 0.03687421605757638,
     "rtfx": 193.23,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09227811598846523,
     "cer": 0.04753473692313614,
     "rtfx": 226.21,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07190564761582685,
     "cer": 0.042081428004293424,
     "rtfx": 193.18,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08544733554239774,
     "cer": 0.052228936499216665,
     "rtfx": 172.09,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09209549886128099,
     "cer": 0.04659340659340659,
     "rtfx": 162.58,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.043559923840889206,
     "cer": 0.0234653806407165,
     "rtfx": 204.97,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.0839907192575406,
     "cer": 0.04429838207840697,
     "rtfx": 147.42,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1501672791093073,
     "cer": 0.10618846694796062,
     "rtfx": 166.44,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11498464356915782,
     "cer": 0.07571126263813778,
     "rtfx": 185.01,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01804173980885508,
     "cer": 0.01115701612734098,
     "rtfx": 194.22,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.0966685923358367,
     "cer": 0.047712963665326555,
     "rtfx": 203.88,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.026114206128133706,
     "cer": 0.012211308733740376,
     "rtfx": 159.92,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08787694182150473,
     "cer": 0.051535203811540496,
     "rtfx": 180.94,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08842257597684515,
     "cer": 0.051171962756795884,
     "rtfx": 182.37,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10952194357366771,
     "cer": 0.06924921601180593,
     "rtfx": 152.4,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02437325905292479,
     "cer": 0.009025749933634192,
     "rtfx": 158.65,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07097167225098995,
     "cer": 0.03999470619375331,
     "rtfx": 179.46,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08162083936324167,
     "cer": 0.04655400514215821,
     "rtfx": 185.44,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08522727272727272,
     "cer": 0.05316362294779561,
     "rtfx": 152.55,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13875432525951556,
     "cer": 0.07833529740122806,
     "rtfx": 230.2,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09444060773480663,
     "cer": 0.04680858299044445,
     "rtfx": 164.43,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06685236768802229,
     "cer": 0.037065303955402175,
     "rtfx": 161.35,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14773073408467866,
     "cer": 0.09224457384859715,
     "rtfx": 179.99,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11562952243125904,
     "cer": 0.06754699083897057,
     "rtfx": 176.16,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.15262539184952978,
     "cer": 0.0995757240361557,
     "rtfx": 154.68,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2892733564013841,
     "cer": 0.18408484773305217,
     "rtfx": 231.26,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15029350828729282,
     "cer": 0.0860679430067671,
     "rtfx": 163.8,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 29.16,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06641792791535037,
     "cer": 0.03559171281019819,
     "done": 9,
     "total": 9,
     "ci": [
      0.06425,
      0.06858
     ]
    },
    "accented": {
     "wer": 0.1501672791093073,
     "cer": 0.10618846694796062,
     "done": 1,
     "total": 1,
     "ci": [
      0.13517,
      0.16737
     ]
    },
    "noisy": {
     "wer": 0.08538406221386183,
     "cer": 0.0519757907904041,
     "done": 5,
     "total": 5,
     "ci": [
      0.08024,
      0.0907
     ]
    },
    "telephony": {
     "wer": 0.0762622885666804,
     "cer": 0.04159399305021017,
     "done": 8,
     "total": 8,
     "ci": [
      0.07176,
      0.08086
     ]
    },
    "callcenter": {
     "wer": 0.1537341467903611,
     "cer": 0.0944308972364908,
     "done": 6,
     "total": 6,
     "ci": [
      0.14464,
      0.16278
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run 9 final: Stage B (GSPO) step 2,000 of 4,500, the same weights as tag rl-step-2000; tag `run9-final` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 3e47cf38ea), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.37333333333333335,
   "inserted_wpm": 108.38,
   "arena_wer": 0.0953114460132516,
   "arena_cer": 0.05616849176403573,
   "arena_ci": [
    0.09277,
    0.09795
   ],
   "rank_range": [
    12,
    19
   ],
   "rtfx": 163.5,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.37333333333333335,
    "halluc_3plus": 0.35333333333333333,
    "halluc_3plus_ci": [
     0.30141,
     0.40897
    ],
    "inserted_wpm": 108.38119667651816,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01724918280110636,
      "wer_uncapped": 0.01724918280110636,
      "cer": 0.00782957660147802,
      "av_wer": null,
      "strict_wer": 0.02026653256223284,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023635906462157407,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04204405680420441,
      "wer_uncapped": 0.04204405680420441,
      "cer": 0.0222861732030518,
      "av_wer": null,
      "strict_wer": 0.04562227440456223,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004305043050430504,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05826738567126549,
      "wer_uncapped": 0.05826738567126549,
      "cer": 0.03721982915967,
      "av_wer": null,
      "strict_wer": 0.06253939351495202,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024371454583654317,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08725835736409271,
      "wer_uncapped": 0.08800598098899926,
      "cer": 0.05052868185050116,
      "av_wer": null,
      "strict_wer": 0.09142368898857203,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01035992737370501,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06746702739262767,
      "wer_uncapped": 0.06746702739262767,
      "cer": 0.04232309510788067,
      "av_wer": null,
      "strict_wer": 0.07190564761582685,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016317213391951302,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08039545874300613,
      "wer_uncapped": 0.08104731381389538,
      "cer": 0.053062334643819695,
      "av_wer": null,
      "strict_wer": 0.0847954804715085,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.02129393231571514,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08237160623352696,
      "wer_uncapped": 0.08237160623352696,
      "cer": 0.04642593496240131,
      "av_wer": null,
      "strict_wer": 0.09209549886128099,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.020496942091660482,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.039031544280347864,
      "wer_uncapped": 0.039031544280347864,
      "cer": 0.022745595160653623,
      "av_wer": null,
      "strict_wer": 0.043559923840889206,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019065507127051923,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06988399071925754,
      "wer_uncapped": 0.07062645011600928,
      "cer": 0.04334774255523535,
      "av_wer": null,
      "strict_wer": 0.08324825986078886,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01531322505800464,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1327812208632699,
      "wer_uncapped": 0.14534086546371963,
      "cer": 0.0995417290913898,
      "av_wer": null,
      "strict_wer": 0.13760763450885757,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.03553995502660012,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11018912656931946,
      "wer_uncapped": 0.11083571313109543,
      "cer": 0.07875654124096686,
      "av_wer": null,
      "strict_wer": 0.11433805700738187,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01993641898809203,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.017164033547883754,
      "wer_uncapped": 0.017164033547883754,
      "cer": 0.011056414036380868,
      "av_wer": null,
      "strict_wer": 0.01804173980885508,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007216695923542032,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.06277681494319276,
      "wer_uncapped": 0.06855382245330252,
      "cer": 0.04334100031569928,
      "av_wer": null,
      "strict_wer": 0.09069901790872328,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03119584055459272,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.023676880222841225,
      "wer_uncapped": 0.023676880222841225,
      "cer": 0.013243155677952373,
      "av_wer": null,
      "strict_wer": 0.026114206128133706,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00383008356545961,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08346024977155041,
      "wer_uncapped": 0.08346024977155041,
      "cer": 0.053182712445262424,
      "av_wer": null,
      "strict_wer": 0.08787694182150473,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026195552848004875,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08393632416787265,
      "wer_uncapped": 0.08393632416787265,
      "cer": 0.05216585453349676,
      "av_wer": null,
      "strict_wer": 0.08842257597684515,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020984081041968163,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10286050156739812,
      "wer_uncapped": 0.10501567398119123,
      "cer": 0.07152787120498677,
      "av_wer": null,
      "strict_wer": 0.10736677115987461,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023706896551724137,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.021239554317548745,
      "wer_uncapped": 0.021239554317548745,
      "cer": 0.009598250445488418,
      "av_wer": null,
      "strict_wer": 0.02437325905292479,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06670727992689614,
      "wer_uncapped": 0.06670727992689614,
      "cer": 0.040838992193945545,
      "av_wer": null,
      "strict_wer": 0.07097167225098995,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021474261346329578,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07713458755426918,
      "wer_uncapped": 0.07713458755426918,
      "cer": 0.04711368867896326,
      "av_wer": null,
      "strict_wer": 0.08162083936324167,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017945007235890015,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07856583072100314,
      "wer_uncapped": 0.07993730407523511,
      "cer": 0.05484550876720929,
      "av_wer": null,
      "strict_wer": 0.08385579937304075,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019984326018808778,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.1356401384083045,
      "wer_uncapped": 0.13667820069204153,
      "cer": 0.08416463459691126,
      "av_wer": null,
      "strict_wer": 0.13771626297577855,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014186851211072665,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08252762430939227,
      "wer_uncapped": 0.08252762430939227,
      "cer": 0.04622343782873974,
      "av_wer": null,
      "strict_wer": 0.09444060773480663,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02037292817679558,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06424094707520892,
      "wer_uncapped": 0.06424094707520892,
      "cer": 0.04094443544467844,
      "av_wer": null,
      "strict_wer": 0.06685236768802229,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008182451253481894,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.14377094121230583,
      "wer_uncapped": 0.14377094121230583,
      "cer": 0.09741702100653678,
      "av_wer": null,
      "strict_wer": 0.14773073408467866,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031678342978982636,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11099855282199711,
      "wer_uncapped": 0.11099855282199711,
      "cer": 0.0702221159307644,
      "av_wer": null,
      "strict_wer": 0.11562952243125904,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021852387843704777,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14498432601880878,
      "wer_uncapped": 0.14655172413793102,
      "cer": 0.10439930041705905,
      "av_wer": null,
      "strict_wer": 0.1510579937304075,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027233542319749216,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2740484429065744,
      "wer_uncapped": 0.28685121107266437,
      "cer": 0.19751718022611395,
      "av_wer": null,
      "strict_wer": 0.27647058823529413,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.039792387543252594,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1394164364640884,
      "wer_uncapped": 0.1394164364640884,
      "cer": 0.08964864296233957,
      "av_wer": null,
      "strict_wer": 0.15029350828729282,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02520718232044199,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05485014141429783,
      "cer": 0.03185072862911472,
      "wer_arith": 0.06044095666771502,
      "done": 9,
      "total": 9,
      "ci": [
       0.05128,
       0.05812
      ]
     },
     "accented": {
      "wer": 0.1327812208632699,
      "cer": 0.09954172909138978,
      "wer_arith": 0.1327812208632699,
      "done": 1,
      "total": 1,
      "ci": [
       0.11241,
       0.15512
      ]
     },
     "noisy": {
      "wer": 0.07158603300746616,
      "cer": 0.04604495424589141,
      "wer_arith": 0.08082461645979637,
      "done": 5,
      "total": 5,
      "ci": [
       0.06509,
       0.07824
      ]
     },
     "telephony": {
      "wer": 0.05648081599864831,
      "cer": 0.03423793377519404,
      "wer_arith": 0.06771948296606131,
      "done": 8,
      "total": 8,
      "ci": [
       0.05193,
       0.0609
      ]
     },
     "callcenter": {
      "wer": 0.1335704706764316,
      "cer": 0.08961037707485478,
      "wer_arith": 0.14624327441649723,
      "done": 6,
      "total": 6,
      "ci": [
       0.1243,
       0.14254
      ]
     }
    },
    "arena": 0.07337630860893302,
    "arena_arith": 0.08805870875690888,
    "arena_cer": 0.04571030960061411,
    "arena_strict": 0.07932417217207034,
    "zero_shot": 0.0683673202234436,
    "arena_real": 0.059095961622329954,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 22,
    "boh_share": 0.37,
    "arena_ci": [
     0.06911,
     0.07735
    ],
    "rank_set": [
     12,
     25
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run10",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run10",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.021523761629368872,
     "cer": 0.008011238514693599,
     "rtfx": 176.89,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04567818405456782,
     "cer": 0.019083802786147866,
     "rtfx": 169.48,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06534071013376287,
     "cer": 0.03712994873168771,
     "rtfx": 188.89,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09526861048809142,
     "cer": 0.049459220199376465,
     "rtfx": 228.38,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07406154886709503,
     "cer": 0.04356648189263501,
     "rtfx": 190.6,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08599054810147211,
     "cer": 0.052218763352255386,
     "rtfx": 167.97,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09160930422989329,
     "cer": 0.045764809902740934,
     "rtfx": 160.89,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.043559923840889206,
     "cer": 0.02316224595246297,
     "rtfx": 201.12,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08751740139211137,
     "cer": 0.04649579962663348,
     "rtfx": 143.43,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15159326495914002,
     "cer": 0.1076418190342241,
     "rtfx": 118.66,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10868042459184224,
     "cer": 0.0683813982968544,
     "rtfx": 179.5,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016676418958455237,
     "cer": 0.009730931359184614,
     "rtfx": 190.04,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08935104948969767,
     "cer": 0.04062049609345369,
     "rtfx": 201.79,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.027855153203342618,
     "cer": 0.012410406158747014,
     "rtfx": 156.0,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.09473042948522693,
     "cer": 0.05492323980942297,
     "rtfx": 180.31,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08972503617945007,
     "cer": 0.051796011083098274,
     "rtfx": 182.56,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.11010971786833856,
     "cer": 0.07149972329828445,
     "rtfx": 152.39,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02541782729805014,
     "cer": 0.009689408016989648,
     "rtfx": 159.57,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07097167225098995,
     "cer": 0.03943885653785072,
     "rtfx": 178.64,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08263386396526773,
     "cer": 0.046703776740470784,
     "rtfx": 183.3,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08581504702194358,
     "cer": 0.05364323925475004,
     "rtfx": 148.32,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13806228373702423,
     "cer": 0.07461390560069465,
     "rtfx": 223.15,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09392265193370165,
     "cer": 0.046230489339272964,
     "rtfx": 164.01,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06789693593314763,
     "cer": 0.03723121847624104,
     "rtfx": 154.8,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1439232409381663,
     "cer": 0.08864478560084701,
     "rtfx": 177.09,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11837916063675832,
     "cer": 0.0679713437008562,
     "rtfx": 181.14,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.14537617554858934,
     "cer": 0.0965504519461354,
     "rtfx": 149.54,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2878892733564014,
     "cer": 0.18377473174967437,
     "rtfx": 226.19,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14761740331491713,
     "cer": 0.08249736457306084,
     "rtfx": 161.93,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 43.2,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06783888808191689,
     "cer": 0.03609914566207038,
     "done": 9,
     "total": 9,
     "ci": [
      0.06576,
      0.07
     ]
    },
    "accented": {
     "wer": 0.15159326495914002,
     "cer": 0.1076418190342241,
     "done": 1,
     "total": 1,
     "ci": [
      0.13647,
      0.16891
     ]
    },
    "noisy": {
     "wer": 0.08622015226564009,
     "cer": 0.051802155729281416,
     "done": 5,
     "total": 5,
     "ci": [
      0.08113,
      0.09162
     ]
    },
    "telephony": {
     "wer": 0.07535635183189128,
     "cer": 0.04008388786783339,
     "done": 8,
     "total": 8,
     "ci": [
      0.07095,
      0.07986
     ]
    },
    "callcenter": {
     "wer": 0.15184703162133004,
     "cer": 0.09277831600780247,
     "done": 6,
     "total": 6,
     "ci": [
      0.14264,
      0.16061
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT round 10 (tag run10-rl-s750): run 9b with English raised to 35 % of the hours, then GSPO; branch `run10` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit e938b6d583), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.46,
   "inserted_wpm": 90.38,
   "arena_wer": 0.09537705819344873,
   "arena_cer": 0.055681111164846114,
   "arena_ci": [
    0.09292,
    0.09793
   ],
   "rank_range": [
    13,
    19
   ],
   "rtfx": 163.9,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.46,
    "halluc_3plus": 0.41,
    "halluc_3plus_ci": [
     0.35582,
     0.46645
    ],
    "inserted_wpm": 90.38086209780852,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.018204676892129745,
      "wer_uncapped": 0.018204676892129745,
      "cer": 0.008454092312674199,
      "av_wer": null,
      "strict_wer": 0.021523761629368872,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002464168971586623,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04198814715419882,
      "wer_uncapped": 0.04198814715419882,
      "cer": 0.021215366082184446,
      "av_wer": null,
      "strict_wer": 0.04562227440456223,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003913675500391367,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.060088241473492544,
      "wer_uncapped": 0.060088241473492544,
      "cer": 0.03714682047163612,
      "av_wer": null,
      "strict_wer": 0.06534071013376287,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025491981231178653,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.0900352451137456,
      "wer_uncapped": 0.0911032788636121,
      "cer": 0.052638821991330076,
      "av_wer": null,
      "strict_wer": 0.09409377336323828,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010573534123678308,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07021474467365574,
      "wer_uncapped": 0.07021474467365574,
      "cer": 0.043849125840199,
      "av_wer": null,
      "strict_wer": 0.07406154886709503,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017712208319242476,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08121027758161768,
      "wer_uncapped": 0.08180781139659948,
      "cer": 0.05296343001261034,
      "av_wer": null,
      "strict_wer": 0.0853930142864903,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.021782823618882067,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08183423321988792,
      "wer_uncapped": 0.08183423321988792,
      "cer": 0.04543748357794377,
      "av_wer": null,
      "strict_wer": 0.09160930422989329,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019729266357890428,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03934029743220295,
      "wer_uncapped": 0.03934029743220295,
      "cer": 0.022539878460349497,
      "av_wer": null,
      "strict_wer": 0.043559923840889206,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018911130551124377,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07359628770301624,
      "wer_uncapped": 0.07452436194895591,
      "cer": 0.04526897214217099,
      "av_wer": null,
      "strict_wer": 0.0865893271461717,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0010090817356205853,
      "insertions": 0.016148491879350347,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13497504524762793,
      "wer_uncapped": 0.147150770580815,
      "cer": 0.1011280514673482,
      "av_wer": null,
      "strict_wer": 0.13941753962595294,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.003015075376884422,
      "insertions": 0.03564964624581802,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10296890996282128,
      "wer_uncapped": 0.10436984751333585,
      "cer": 0.07148018938450038,
      "av_wer": null,
      "strict_wer": 0.10727948704132766,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01745783716795086,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01618880436902672,
      "wer_uncapped": 0.01618880436902672,
      "cer": 0.009634875088846185,
      "av_wer": null,
      "strict_wer": 0.016676418958455237,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005753852155256485,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05584440593106104,
      "wer_uncapped": 0.06008087810514154,
      "cer": 0.03648581608262301,
      "av_wer": null,
      "strict_wer": 0.08492201039861352,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02233776237242442,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02541782729805014,
      "wer_uncapped": 0.02541782729805014,
      "cer": 0.013364652519034506,
      "av_wer": null,
      "strict_wer": 0.027855153203342618,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00383008356545961,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08939993908010965,
      "wer_uncapped": 0.08939993908010965,
      "cer": 0.05638763724059148,
      "av_wer": null,
      "strict_wer": 0.09473042948522693,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02726165092902833,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08639652677279305,
      "wer_uncapped": 0.08639652677279305,
      "cer": 0.05297300529132164,
      "av_wer": null,
      "strict_wer": 0.08972503617945007,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02141823444283647,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.1040360501567398,
      "wer_uncapped": 0.10638714733542319,
      "cer": 0.07354589891923405,
      "av_wer": null,
      "strict_wer": 0.10775862068965517,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025078369905956112,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02193593314763231,
      "wer_uncapped": 0.02193593314763231,
      "cer": 0.010327231491981208,
      "av_wer": null,
      "strict_wer": 0.02541782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06579348157173318,
      "wer_uncapped": 0.06579348157173318,
      "cer": 0.040299549406612935,
      "av_wer": null,
      "strict_wer": 0.07097167225098995,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02254035942735303,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07916063675832127,
      "wer_uncapped": 0.07916063675832127,
      "cer": 0.04744252787659562,
      "av_wer": null,
      "strict_wer": 0.08263386396526773,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018234442836468887,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.08032915360501568,
      "wer_uncapped": 0.08130877742946709,
      "cer": 0.054935198887842505,
      "av_wer": null,
      "strict_wer": 0.08483542319749217,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020963949843260186,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13391003460207612,
      "wer_uncapped": 0.1356401384083045,
      "cer": 0.08120889677085642,
      "av_wer": null,
      "strict_wer": 0.13633217993079585,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016262975778546712,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08261395027624309,
      "wer_uncapped": 0.08261395027624309,
      "cer": 0.04559225752156533,
      "av_wer": null,
      "strict_wer": 0.09392265193370165,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020113950276243093,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06476323119777158,
      "wer_uncapped": 0.06476323119777158,
      "cer": 0.04086343755062368,
      "av_wer": null,
      "strict_wer": 0.06789693593314763,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010619777158774373,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1396588486140725,
      "wer_uncapped": 0.1396588486140725,
      "cer": 0.09300628292187599,
      "av_wer": null,
      "strict_wer": 0.1439232409381663,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03335363996344807,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11418234442836468,
      "wer_uncapped": 0.11418234442836468,
      "cer": 0.0705808496009088,
      "av_wer": null,
      "strict_wer": 0.11837916063675832,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02170767004341534,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.13969435736677116,
      "wer_uncapped": 0.14165360501567398,
      "cer": 0.10112561101394682,
      "av_wer": null,
      "strict_wer": 0.14341692789968652,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02586206896551724,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.27335640138408307,
      "wer_uncapped": 0.2844290657439446,
      "cer": 0.19810832779132492,
      "av_wer": null,
      "strict_wer": 0.2768166089965398,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.038408304498269895,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1355317679558011,
      "wer_uncapped": 0.13674033149171272,
      "cer": 0.08558804965285083,
      "av_wer": null,
      "strict_wer": 0.1464088397790055,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.024084944751381215,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05619356996157466,
      "cer": 0.032252321659104494,
      "wer_arith": 0.061834683471549697,
      "done": 9,
      "total": 9,
      "ci": [
       0.05258,
       0.05944
      ]
     },
     "accented": {
      "wer": 0.13497504524762793,
      "cer": 0.10112805146734818,
      "wer_arith": 0.13497504524762793,
      "done": 1,
      "total": 1,
      "ci": [
       0.11382,
       0.15791
      ]
     },
     "noisy": {
      "wer": 0.0732103326798066,
      "cer": 0.046172997267071435,
      "wer_arith": 0.08164385065410279,
      "done": 5,
      "total": 5,
      "ci": [
       0.06675,
       0.08004
      ]
     },
     "telephony": {
      "wer": 0.05563496276364347,
      "cer": 0.033015732393257995,
      "wer_arith": 0.06697205003263867,
      "done": 8,
      "total": 8,
      "ci": [
       0.0512,
       0.05992
      ]
     },
     "callcenter": {
      "wer": 0.1322282315626425,
      "cer": 0.08785878262772365,
      "wer_arith": 0.144531158491144,
      "done": 6,
      "total": 6,
      "ci": [
       0.12244,
       0.14144
      ]
     }
    },
    "arena": 0.07389074536035345,
    "arena_arith": 0.08822569099339031,
    "arena_cer": 0.045390191211069436,
    "arena_strict": 0.07982884004368251,
    "zero_shot": 0.06677988717616586,
    "arena_real": 0.059378481813363616,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 25,
    "boh_share": 0.4266666666666667,
    "arena_ci": [
     0.06962,
     0.07793
    ],
    "rank_set": [
     16,
     27
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run9-rl-step-500",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/rl-step-500",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.020015086748805633,
     "cer": 0.007375275267674083,
     "rtfx": 182.13,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04551045510455105,
     "cer": 0.019989955893270447,
     "rtfx": 172.96,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.0628195251768331,
     "cer": 0.036642838876237566,
     "rtfx": 193.27,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09302573961337178,
     "cer": 0.047996612909433814,
     "rtfx": 231.65,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07173655732160975,
     "cer": 0.04207407625237094,
     "rtfx": 193.99,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08457819544787876,
     "cer": 0.051710106004191334,
     "rtfx": 170.68,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09119987717188259,
     "cer": 0.04590627763041556,
     "rtfx": 163.56,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.0438686769927443,
     "cer": 0.02337811459409806,
     "rtfx": 204.21,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.0863109048723898,
     "cer": 0.04552349097697573,
     "rtfx": 144.98,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15164811056874897,
     "cer": 0.10746601031411158,
     "rtfx": 166.24,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11374535265908724,
     "cer": 0.07469918931904845,
     "rtfx": 182.14,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016578896040569533,
     "cer": 0.00983579053331376,
     "rtfx": 191.98,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.0845368765646062,
     "cer": 0.037017370856405975,
     "rtfx": 205.59,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02663649025069638,
     "cer": 0.01247677196708256,
     "rtfx": 159.96,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08879074017666769,
     "cer": 0.05235574377977766,
     "rtfx": 182.26,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08885672937771345,
     "cer": 0.05144654402036894,
     "rtfx": 182.63,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10873824451410659,
     "cer": 0.06917542888765911,
     "rtfx": 153.56,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02437325905292479,
     "cer": 0.009092115741969737,
     "rtfx": 161.75,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07127627170271093,
     "cer": 0.03983589200635257,
     "rtfx": 181.79,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08176555716353111,
     "cer": 0.04620453807942887,
     "rtfx": 184.64,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08463949843260188,
     "cer": 0.05297915513742852,
     "rtfx": 153.29,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1397923875432526,
     "cer": 0.07858339018793029,
     "rtfx": 228.34,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09409530386740332,
     "cer": 0.04716564083381508,
     "rtfx": 163.99,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07224930362116992,
     "cer": 0.03902309530130077,
     "rtfx": 160.81,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14498933901918976,
     "cer": 0.08819481206987824,
     "rtfx": 179.33,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11591895803183791,
     "cer": 0.06727240957539751,
     "rtfx": 177.72,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.15438871473354232,
     "cer": 0.10071942446043165,
     "rtfx": 150.84,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2948096885813149,
     "cer": 0.18563542764994106,
     "rtfx": 222.53,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14882596685082872,
     "cer": 0.08526881354779474,
     "rtfx": 163.55,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 35.12,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06656277982778519,
     "cer": 0.035621860933851945,
     "done": 9,
     "total": 9,
     "ci": [
      0.0644,
      0.06884
     ]
    },
    "accented": {
     "wer": 0.15164811056874897,
     "cer": 0.10746601031411158,
     "done": 1,
     "total": 1,
     "ci": [
      0.13661,
      0.16848
     ]
    },
    "noisy": {
     "wer": 0.08535351139565427,
     "cer": 0.052030735594787346,
     "done": 5,
     "total": 5,
     "ci": [
      0.08011,
      0.09081
     ]
    },
    "telephony": {
     "wer": 0.07463225629595005,
     "cer": 0.0400892366720806,
     "done": 8,
     "total": 8,
     "ci": [
      0.07025,
      0.07904
     ]
    },
    "callcenter": {
     "wer": 0.15519699513964727,
     "cer": 0.094352330434124,
     "done": 6,
     "total": 6,
     "ci": [
      0.14559,
      0.16455
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run 9 Stage B (GSPO) step 500; tag `rl-step-500` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 13d439b0a8), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.9966666666666667,
   "inserted_wpm": 83.02,
   "arena_wer": 0.0953939867505198,
   "arena_cer": 0.055894914780667895,
   "arena_ci": [
    0.09284,
    0.09783
   ],
   "rank_range": [
    13,
    19
   ],
   "rtfx": 166.5,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9966666666666667,
    "halluc_3plus": 0.4533333333333333,
    "halluc_3plus_ci": [
     0.39794,
     0.5099
    ],
    "inserted_wpm": 83.02013048569677,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.016947447824993713,
      "wer_uncapped": 0.016947447824993713,
      "cer": 0.007748620861137775,
      "av_wer": null,
      "strict_wer": 0.020015086748805633,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023133014835302994,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04198814715419882,
      "wer_uncapped": 0.04198814715419882,
      "cer": 0.022339713559095167,
      "av_wer": null,
      "strict_wer": 0.045454545454545456,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004360952700436095,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05854751733314658,
      "wer_uncapped": 0.05854751733314658,
      "cer": 0.036883989194714174,
      "av_wer": null,
      "strict_wer": 0.0628195251768331,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02458155333006513,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08651073373918616,
      "wer_uncapped": 0.0885399978639325,
      "cer": 0.050299318791715404,
      "av_wer": null,
      "strict_wer": 0.0908896721136388,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011855174623518103,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06750929996618193,
      "wer_uncapped": 0.06750929996618193,
      "cer": 0.04224370622585255,
      "av_wer": null,
      "strict_wer": 0.07173655732160975,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016232668244842745,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.07963496116030203,
      "wer_uncapped": 0.08012385246346895,
      "cer": 0.05255544840887175,
      "av_wer": null,
      "strict_wer": 0.08408930414471183,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.02037047096528872,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08129686020624888,
      "wer_uncapped": 0.08129686020624888,
      "cer": 0.04565644432766538,
      "av_wer": null,
      "strict_wer": 0.09119987717188259,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019729266357890428,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03936602686152421,
      "wer_uncapped": 0.03936602686152421,
      "cer": 0.022651076676730105,
      "av_wer": null,
      "strict_wer": 0.0438686769927443,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01919415427365821,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07183294663573085,
      "wer_uncapped": 0.07266821345707657,
      "cer": 0.044164265129682995,
      "av_wer": null,
      "strict_wer": 0.08547563805104408,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016241299303944315,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13448143476114738,
      "wer_uncapped": 0.14698623375198816,
      "cer": 0.10071678270321083,
      "av_wer": null,
      "strict_wer": 0.13914331157790819,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.03553995502660012,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10873430680532356,
      "wer_uncapped": 0.10938089336709952,
      "cer": 0.07802143035135808,
      "av_wer": null,
      "strict_wer": 0.11309876609731127,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019343714639797404,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01579871269748391,
      "wer_uncapped": 0.01579871269748391,
      "cer": 0.009898123042093348,
      "av_wer": null,
      "strict_wer": 0.016578896040569533,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0052662375658279695,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05411130367802811,
      "wer_uncapped": 0.0560369728480647,
      "cer": 0.034411220854192036,
      "av_wer": null,
      "strict_wer": 0.08241864047756596,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018101290198343924,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.023850974930362118,
      "wer_uncapped": 0.023850974930362118,
      "cer": 0.013526648307144014,
      "av_wer": null,
      "strict_wer": 0.02663649025069638,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08437404812671337,
      "wer_uncapped": 0.08437404812671337,
      "cer": 0.05413467030526115,
      "av_wer": null,
      "strict_wer": 0.08879074017666769,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025738653670423394,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08437047756874096,
      "wer_uncapped": 0.08437047756874096,
      "cer": 0.05243490478610505,
      "av_wer": null,
      "strict_wer": 0.08885672937771345,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019826338639652677,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10168495297805642,
      "wer_uncapped": 0.10344827586206896,
      "cer": 0.0717520965065698,
      "av_wer": null,
      "strict_wer": 0.10697492163009405,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020768025078369907,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02158774373259053,
      "wer_uncapped": 0.02158774373259053,
      "cer": 0.009679248339543171,
      "av_wer": null,
      "strict_wer": 0.02437325905292479,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06670727992689614,
      "wer_uncapped": 0.06670727992689614,
      "cer": 0.04068033255061242,
      "av_wer": null,
      "strict_wer": 0.07127627170271093,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021017362168748097,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07698986975397974,
      "wer_uncapped": 0.07698986975397974,
      "cer": 0.04663537711877074,
      "av_wer": null,
      "strict_wer": 0.08176555716353111,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017655571635311142,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07817398119122257,
      "wer_uncapped": 0.0789576802507837,
      "cer": 0.05480066370689268,
      "av_wer": null,
      "strict_wer": 0.08385579937304075,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01822100313479624,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13633217993079585,
      "wer_uncapped": 0.13737024221453287,
      "cer": 0.084312421488214,
      "av_wer": null,
      "strict_wer": 0.13875432525951556,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014186851211072665,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.0820096685082873,
      "wer_uncapped": 0.0820096685082873,
      "cer": 0.04647590995160951,
      "av_wer": null,
      "strict_wer": 0.09409530386740332,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02175414364640884,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.0684192200557103,
      "wer_uncapped": 0.06928969359331476,
      "cer": 0.042969382796047305,
      "av_wer": null,
      "strict_wer": 0.07137883008356546,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010445682451253482,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.14118184587267743,
      "wer_uncapped": 0.14118184587267743,
      "cer": 0.09329187027987561,
      "av_wer": null,
      "strict_wer": 0.14498933901918976,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03000304599451721,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11128798842257598,
      "wer_uncapped": 0.11128798842257598,
      "cer": 0.0701324325132283,
      "av_wer": null,
      "strict_wer": 0.11591895803183791,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020839363241678725,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14713949843260188,
      "wer_uncapped": 0.14870689655172414,
      "cer": 0.10578949728687385,
      "av_wer": null,
      "strict_wer": 0.15282131661442006,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028996865203761754,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2768166089965398,
      "wer_uncapped": 0.2916955017301038,
      "cer": 0.19877336880218724,
      "av_wer": null,
      "strict_wer": 0.2799307958477509,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04463667820069204,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.137603591160221,
      "wer_uncapped": 0.1379488950276243,
      "cer": 0.08851251840942563,
      "av_wer": null,
      "strict_wer": 0.1484806629834254,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024948204419889503,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.054796787866974596,
      "cer": 0.03172604729339011,
      "wer_arith": 0.060403771209057024,
      "done": 9,
      "total": 9,
      "ci": [
       0.05126,
       0.05809
      ]
     },
     "accented": {
      "wer": 0.13448143476114735,
      "cer": 0.10071678270321084,
      "wer_arith": 0.13448143476114738,
      "done": 1,
      "total": 1,
      "ci": [
       0.11331,
       0.15726
      ]
     },
     "noisy": {
      "wer": 0.07156583822544217,
      "cer": 0.04639454675307063,
      "wer_arith": 0.08060295208183929,
      "done": 5,
      "total": 5,
      "ci": [
       0.06546,
       0.07768
      ]
     },
     "telephony": {
      "wer": 0.054926405575287184,
      "cer": 0.032810472071462725,
      "wer_arith": 0.06646384242741052,
      "done": 8,
      "total": 8,
      "ci": [
       0.05057,
       0.05918
      ]
     },
     "callcenter": {
      "wer": 0.13489403382027895,
      "cer": 0.08976793009891493,
      "wer_arith": 0.14707479215672106,
      "done": 6,
      "total": 6,
      "ci": [
       0.12574,
       0.14375
      ]
     }
    },
    "arena": 0.07309747893414179,
    "arena_arith": 0.08800202725493282,
    "arena_cer": 0.04530809490025376,
    "arena_strict": 0.07920479789792631,
    "zero_shot": 0.06621074045543474,
    "arena_real": 0.058297798462443026,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 20,
    "boh_share": 0.4666666666666667,
    "arena_ci": [
     0.06888,
     0.07695
    ],
    "rank_set": [
     11,
     25
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run12-rl-s1500",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run12-rl-s1500",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02137289414131255,
     "cer": 0.007954286582124687,
     "rtfx": 176.84,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04623728055462373,
     "cer": 0.019575090615310712,
     "rtfx": 167.57,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06499054555641151,
     "cer": 0.036813327325645115,
     "rtfx": 188.46,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09302573961337178,
     "cer": 0.04865093722335553,
     "rtfx": 227.63,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07410382144064931,
     "cer": 0.04329446707150314,
     "rtfx": 191.33,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08609919061328698,
     "cer": 0.052605342936784066,
     "rtfx": 167.72,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09158371503876762,
     "cer": 0.045805229253505116,
     "rtfx": 160.89,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.043302629547676635,
     "cer": 0.02310253760477667,
     "rtfx": 200.2,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.09178654292343387,
     "cer": 0.04956829495955196,
     "rtfx": 142.69,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15109965447265947,
     "cer": 0.10646976090014065,
     "rtfx": 164.44,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10905760008621154,
     "cer": 0.06898455310318036,
     "rtfx": 178.24,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.018529354398283595,
     "cer": 0.011534509154205902,
     "rtfx": 190.9,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.11034084344309647,
     "cer": 0.058484411742395506,
     "rtfx": 194.92,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.027158774373259052,
     "cer": 0.012377223254579241,
     "rtfx": 159.26,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.0904660371611331,
     "cer": 0.0525145579671784,
     "rtfx": 173.18,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.0914616497829233,
     "cer": 0.05217044007887971,
     "rtfx": 179.41,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1106974921630094,
     "cer": 0.07098321342925659,
     "rtfx": 151.7,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02541782729805014,
     "cer": 0.009457127687815238,
     "rtfx": 158.02,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0720377703320134,
     "cer": 0.040127051349920596,
     "rtfx": 177.29,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08408104196816209,
     "cer": 0.04737774893287736,
     "rtfx": 182.08,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.0834639498432602,
     "cer": 0.05161409334071205,
     "rtfx": 151.41,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13529411764705881,
     "cer": 0.07306332568380575,
     "rtfx": 223.18,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09349102209944751,
     "cer": 0.045856428741456116,
     "rtfx": 164.32,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.0666782729805014,
     "cer": 0.0366671091053889,
     "rtfx": 156.37,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14224794395370088,
     "cer": 0.0874801482265749,
     "rtfx": 175.15,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11736613603473227,
     "cer": 0.06772172437033525,
     "rtfx": 178.18,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1536050156739812,
     "cer": 0.10083010514665192,
     "rtfx": 149.07,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2892733564013841,
     "cer": 0.18687589158345222,
     "rtfx": 221.22,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14796270718232044,
     "cer": 0.08210630122079778,
     "rtfx": 163.0,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 56.74,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06805581771439267,
     "cer": 0.03637439039695078,
     "done": 9,
     "total": 9,
     "ci": [
      0.06567,
      0.07063
     ]
    },
    "accented": {
     "wer": 0.15109965447265947,
     "cer": 0.10646976090014065,
     "done": 1,
     "total": 1,
     "ci": [
      0.13596,
      0.16856
     ]
    },
    "noisy": {
     "wer": 0.08576831071330729,
     "cer": 0.05140599756661486,
     "done": 5,
     "total": 5,
     "ci": [
      0.08081,
      0.091
     ]
    },
    "telephony": {
     "wer": 0.07783199087867153,
     "cer": 0.04218933707914856,
     "done": 8,
     "total": 8,
     "ci": [
      0.07346,
      0.08271
     ]
    },
    "callcenter": {
     "wer": 0.15285557203777003,
     "cer": 0.09361354660886682,
     "done": 6,
     "total": 6,
     "ci": [
      0.14403,
      0.16176
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT round 12 GSPO step 1,500, from a 70/30 weight average of rounds 10 and 11; tag `run12-rl-s1500` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit f7e4817efe), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.4066666666666667,
   "inserted_wpm": 61.34,
   "arena_wer": 0.09614446718686585,
   "arena_cer": 0.056321073148735495,
   "arena_ci": [
    0.09369,
    0.09881
   ],
   "rank_range": [
    16,
    21
   ],
   "rtfx": 169.6,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.4066666666666667,
    "halluc_3plus": 0.4033333333333333,
    "halluc_3plus_ci": [
     0.34938,
     0.45973
    ],
    "inserted_wpm": 61.33943010093125,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017701785265275334,
      "wer_uncapped": 0.017701785265275334,
      "cer": 0.008419396995385523,
      "av_wer": null,
      "strict_wer": 0.02137289414131255,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023133014835302994,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04232360505423236,
      "wer_uncapped": 0.04232360505423236,
      "cer": 0.021750769642618125,
      "av_wer": null,
      "strict_wer": 0.04618137090461814,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004025494800402549,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.0594579452342601,
      "wer_uncapped": 0.0594579452342601,
      "cer": 0.03667956486821932,
      "av_wer": null,
      "strict_wer": 0.06499054555641151,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025632047062119197,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08725835736409271,
      "wer_uncapped": 0.08832639111395921,
      "cer": 0.051629624532672766,
      "av_wer": null,
      "strict_wer": 0.09185090248851864,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01003951724874506,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07021474467365574,
      "wer_uncapped": 0.07021474467365574,
      "cer": 0.04354039129897853,
      "av_wer": null,
      "strict_wer": 0.07410382144064931,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017247210010145418,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08104731381389538,
      "wer_uncapped": 0.0819707751643218,
      "cer": 0.05303760848601736,
      "av_wer": null,
      "strict_wer": 0.08517572926286056,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.021782823618882067,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08173187645538524,
      "wer_uncapped": 0.08173187645538524,
      "cer": 0.04550629981357056,
      "av_wer": null,
      "strict_wer": 0.09158371503876762,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019806033931267432,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03898008542170535,
      "wer_uncapped": 0.03898008542170535,
      "cer": 0.022495399173797254,
      "av_wer": null,
      "strict_wer": 0.043302629547676635,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01888540112180312,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07331786542923434,
      "wer_uncapped": 0.07870069605568446,
      "cer": 0.04517291066282421,
      "av_wer": null,
      "strict_wer": 0.0863109048723898,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0020181634712411706,
      "insertions": 0.020696055684454755,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1340975154938847,
      "wer_uncapped": 0.14610870399824494,
      "cer": 0.10015863223759584,
      "av_wer": null,
      "strict_wer": 0.13908846596829924,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.004020100502512563,
      "insertions": 0.03674655843799704,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10372326095155988,
      "wer_uncapped": 0.10480090522118649,
      "cer": 0.07221530027410915,
      "av_wer": null,
      "strict_wer": 0.10797995581658494,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01718842610054421,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01804173980885508,
      "wer_uncapped": 0.01804173980885508,
      "cer": 0.011503935556901044,
      "av_wer": null,
      "strict_wer": 0.018529354398283595,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00653403549834211,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.06970922395532447,
      "wer_uncapped": 0.08068553822453303,
      "cer": 0.04933928651964101,
      "av_wer": null,
      "strict_wer": 0.09917196225688427,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04005391873676102,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.024721448467966575,
      "wer_uncapped": 0.024721448467966575,
      "cer": 0.013486149360116637,
      "av_wer": null,
      "strict_wer": 0.027158774373259052,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0036559888579387185,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08452634785257386,
      "wer_uncapped": 0.08452634785257386,
      "cer": 0.05394427873326141,
      "av_wer": null,
      "strict_wer": 0.0904660371611331,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025890953396283885,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08697539797395079,
      "wer_uncapped": 0.08697539797395079,
      "cer": 0.05318226659890586,
      "av_wer": null,
      "strict_wer": 0.0914616497829233,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02141823444283647,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10384012539184953,
      "wer_uncapped": 0.10677899686520376,
      "cer": 0.0724696174716355,
      "av_wer": null,
      "strict_wer": 0.10775862068965517,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023510971786833857,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02158774373259053,
      "wer_uncapped": 0.02158774373259053,
      "cer": 0.01000323991576219,
      "av_wer": null,
      "strict_wer": 0.02541782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06685957965275663,
      "wer_uncapped": 0.06685957965275663,
      "cer": 0.0407755283366123,
      "av_wer": null,
      "strict_wer": 0.0720377703320134,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022388059701492536,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.08017366136034733,
      "wer_uncapped": 0.08017366136034733,
      "cer": 0.0480703117993483,
      "av_wer": null,
      "strict_wer": 0.08408104196816209,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018668596237337194,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07719435736677116,
      "wer_uncapped": 0.077782131661442,
      "cer": 0.05287232611327862,
      "av_wer": null,
      "strict_wer": 0.08287617554858934,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01920062695924765,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13079584775086506,
      "wer_uncapped": 0.13252595155709343,
      "cer": 0.07869651961870983,
      "av_wer": null,
      "strict_wer": 0.13356401384083044,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01522491349480969,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08226864640883978,
      "wer_uncapped": 0.08226864640883978,
      "cer": 0.04510835261939827,
      "av_wer": null,
      "strict_wer": 0.09349102209944751,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01968232044198895,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06354456824512535,
      "wer_uncapped": 0.06354456824512535,
      "cer": 0.04086343755062368,
      "av_wer": null,
      "strict_wer": 0.0666782729805014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009575208913649024,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1376789521778861,
      "wer_uncapped": 0.1376789521778861,
      "cer": 0.09161007806054453,
      "av_wer": null,
      "strict_wer": 0.14224794395370088,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03213524215656412,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11316931982633864,
      "wer_uncapped": 0.11316931982633864,
      "cer": 0.07025201040327643,
      "av_wer": null,
      "strict_wer": 0.11736613603473227,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021562952243125905,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14518025078369906,
      "wer_uncapped": 0.1500783699059561,
      "cer": 0.10278487824566124,
      "av_wer": null,
      "strict_wer": 0.14870689655172414,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03154388714733542,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2730103806228374,
      "wer_uncapped": 0.286159169550173,
      "cer": 0.20121185250868248,
      "av_wer": null,
      "strict_wer": 0.27612456747404845,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.041176470588235294,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13535911602209943,
      "wer_uncapped": 0.13682665745856354,
      "cer": 0.08501998737639385,
      "av_wer": null,
      "strict_wer": 0.14649516574585636,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02443024861878453,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05570756621153622,
      "cer": 0.03218266731409652,
      "wer_arith": 0.06133706430130407,
      "done": 9,
      "total": 9,
      "ci": [
       0.05207,
       0.05901
      ]
     },
     "accented": {
      "wer": 0.1340975154938847,
      "cer": 0.10015863223759586,
      "wer_arith": 0.1340975154938847,
      "done": 1,
      "total": 1,
      "ci": [
       0.11323,
       0.15681
      ]
     },
     "noisy": {
      "wer": 0.07216735057948233,
      "cer": 0.04584342723070322,
      "wer_arith": 0.08075731612758012,
      "done": 5,
      "total": 5,
      "ci": [
       0.06574,
       0.07865
      ]
     },
     "telephony": {
      "wer": 0.05758351118280774,
      "cer": 0.03467266148823438,
      "wer_arith": 0.06832885000454375,
      "done": 8,
      "total": 8,
      "ci": [
       0.05299,
       0.06208
      ]
     },
     "callcenter": {
      "wer": 0.13209148334694343,
      "cer": 0.0879373663907558,
      "wer_arith": 0.144657097946331,
      "done": 6,
      "total": 6,
      "ci": [
       0.12242,
       0.14125
      ]
     }
    },
    "arena": 0.07403823066173126,
    "arena_arith": 0.08820828398823449,
    "arena_cer": 0.04579624142811877,
    "arena_strict": 0.08013568777751366,
    "zero_shot": 0.06903401483063756,
    "arena_real": 0.06013272131911627,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 26,
    "boh_share": 0.4033333333333333,
    "arena_ci": [
     0.06977,
     0.07816
    ],
    "rank_set": [
     16,
     28
    ]
   }
  },
  {
   "model": "qwen3-asr-1.7b",
   "hf_id": "Qwen/Qwen3-ASR-1.7B-hf",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.0155896404324868,
     "cer": 0.004850406257118992,
     "rtfx": 167.76,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.032539416303253944,
     "cer": 0.012686143499716146,
     "rtfx": 159.69,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.04783248126619511,
     "cer": 0.028593348514923827,
     "rtfx": 180.73,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.0758303962405212,
     "cer": 0.03825872753165775,
     "rtfx": 217.22,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.060703415623943185,
     "cer": 0.03547955477790357,
     "rtfx": 179.74,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.10239556738551796,
     "cer": 0.06961484465604591,
     "rtfx": 160.6,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08411167123007242,
     "cer": 0.0428091448781104,
     "rtfx": 146.91,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.033190963824422375,
     "cer": 0.018091629348949364,
     "rtfx": 190.79,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08835266821345708,
     "cer": 0.050326695706285,
     "rtfx": 130.85,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14122744474304832,
     "cer": 0.10462962962962963,
     "rtfx": 152.44,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10097526806401207,
     "cer": 0.0696797145748781,
     "rtfx": 169.68,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.010142383460113126,
     "cer": 0.0060398884298387264,
     "rtfx": 176.09,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.064895051030233,
     "cer": 0.026132139877114467,
     "rtfx": 186.38,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.020020891364902507,
     "cer": 0.008030262808601009,
     "rtfx": 150.74,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.0907706366128541,
     "cer": 0.055876124933827424,
     "rtfx": 171.72,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08625180897250362,
     "cer": 0.051970744614462945,
     "rtfx": 169.28,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1500783699059561,
     "cer": 0.10802434975096846,
     "rtfx": 146.76,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.01897632311977716,
     "cer": 0.006702946641890098,
     "rtfx": 151.58,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.05558939993908011,
     "cer": 0.03234515616728428,
     "rtfx": 168.71,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.070767004341534,
     "cer": 0.03991413095030079,
     "rtfx": 171.59,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.1030564263322884,
     "cer": 0.0703929164360819,
     "rtfx": 146.15,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13217993079584775,
     "cer": 0.07349748806053465,
     "rtfx": 216.65,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0862396408839779,
     "cer": 0.04488727173802156,
     "rtfx": 146.02,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.08426183844011143,
     "cer": 0.050603928855853464,
     "rtfx": 151.16,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14620773682607371,
     "cer": 0.09502382212811011,
     "rtfx": 169.92,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.12214182344428365,
     "cer": 0.07306357804348369,
     "rtfx": 168.1,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.20141065830721003,
     "cer": 0.13536247924737133,
     "rtfx": 146.79,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.3477508650519031,
     "cer": 0.23085033802642188,
     "rtfx": 215.91,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15426450276243095,
     "cer": 0.09708572788791785,
     "rtfx": 147.88,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 93.48,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.060060691168874455,
     "cer": 0.03341227724119011,
     "done": 9,
     "total": 9,
     "ci": [
      0.05803,
      0.06208
     ]
    },
    "accented": {
     "wer": 0.14122744474304832,
     "cer": 0.10462962962962963,
     "done": 1,
     "total": 1,
     "ci": [
      0.1266,
      0.15804
     ]
    },
    "noisy": {
     "wer": 0.08961939498404567,
     "cer": 0.058716239336547585,
     "done": 5,
     "total": 5,
     "ci": [
      0.08233,
      0.09769
     ]
    },
    "telephony": {
     "wer": 0.06773076998785643,
     "cer": 0.03748899228763331,
     "done": 8,
     "total": 8,
     "ci": [
      0.06369,
      0.07203
     ]
    },
    "callcenter": {
     "wer": 0.17600623747200214,
     "cer": 0.11366497903152639,
     "done": 6,
     "total": 6,
     "ci": [
      0.16534,
      0.18667
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.9966666666666667,
   "inserted_wpm": 37.79,
   "arena_wer": 0.0963663500723335,
   "arena_cer": 0.05974285796319109,
   "arena_ci": [
    0.09348,
    0.09932
   ],
   "rank_range": [
    13,
    22
   ],
   "rtfx": 164.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9966666666666667,
    "halluc_3plus": 0.44333333333333336,
    "halluc_3plus_ci": [
     0.38819,
     0.49991
    ],
    "inserted_wpm": 37.78508894217365,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01171737490570782,
      "wer_uncapped": 0.01171737490570782,
      "cer": 0.004892039737703401,
      "av_wer": null,
      "strict_wer": 0.0155896404324868,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001257229067136032,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.029184837302918484,
      "wer_uncapped": 0.029184837302918484,
      "cer": 0.014081113639405701,
      "av_wer": null,
      "strict_wer": 0.032539416303253944,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0016772895001677288,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.043210308845157225,
      "wer_uncapped": 0.043210308845157225,
      "cer": 0.028254362269110024,
      "av_wer": null,
      "strict_wer": 0.04783248126619511,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021009874641081307,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.07027662074121542,
      "wer_uncapped": 0.07209227811598846,
      "cer": 0.03972568178169224,
      "av_wer": null,
      "strict_wer": 0.07401473886574816,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008651073373918615,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05727933716604667,
      "wer_uncapped": 0.05727933716604667,
      "cer": 0.03580438579468271,
      "av_wer": null,
      "strict_wer": 0.060703415623943185,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013146770375380453,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.0977239393774784,
      "wer_uncapped": 0.09848443696018253,
      "cer": 0.06896125411072374,
      "av_wer": null,
      "strict_wer": 0.10163506980281384,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030419903308164485,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07582077330535582,
      "wer_uncapped": 0.07582077330535582,
      "cer": 0.04242833727462683,
      "av_wer": null,
      "strict_wer": 0.08411167123007242,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.016940044525192557,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03069520918026038,
      "wer_uncapped": 0.03069520918026038,
      "cer": 0.017830633996630693,
      "av_wer": null,
      "strict_wer": 0.033190963824422375,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01283898523130757,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07480278422273783,
      "wer_uncapped": 0.07582366589327146,
      "cer": 0.04767050912584054,
      "av_wer": null,
      "strict_wer": 0.08733178654292344,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00825986078886311,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.12449953381231832,
      "wer_uncapped": 0.13673010475511435,
      "cer": 0.09566405217238036,
      "av_wer": null,
      "strict_wer": 0.12894202819064335,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.02654527505073219,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09747292418772563,
      "wer_uncapped": 0.09817339296298291,
      "cer": 0.07140543234487914,
      "av_wer": null,
      "strict_wer": 0.10027479928875478,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010183738347971335,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.009459723034913204,
      "wer_uncapped": 0.009459723034913204,
      "cer": 0.006107352515334194,
      "av_wer": null,
      "strict_wer": 0.010142383460113126,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0024380729471425787,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.04833429616791835,
      "wer_uncapped": 0.04833429616791835,
      "cer": 0.024534343571009788,
      "av_wer": null,
      "strict_wer": 0.06470248411322935,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008087810514153668,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.01793175487465181,
      "wer_uncapped": 0.01793175487465181,
      "cer": 0.008788271504940872,
      "av_wer": null,
      "strict_wer": 0.020020891364902507,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001915041782729805,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08483094730429486,
      "wer_uncapped": 0.08528784648187633,
      "cer": 0.0568001523132576,
      "av_wer": null,
      "strict_wer": 0.09031373743527261,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023606457508376484,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.0824891461649783,
      "wer_uncapped": 0.0824891461649783,
      "cer": 0.05279363845624944,
      "av_wer": null,
      "strict_wer": 0.08625180897250362,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01780028943560058,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.14106583072100312,
      "wer_uncapped": 0.1455721003134796,
      "cer": 0.10879411632808646,
      "av_wer": null,
      "strict_wer": 0.1455721003134796,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030760188087774296,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.01653899721448468,
      "wer_uncapped": 0.01653899721448468,
      "cer": 0.007127814676818403,
      "av_wer": null,
      "strict_wer": 0.01897632311977716,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0015668523676880223,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.0511727078891258,
      "wer_uncapped": 0.0511727078891258,
      "cer": 0.03262042266928984,
      "av_wer": null,
      "strict_wer": 0.05558939993908011,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01903746573256168,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06729377713458755,
      "wer_uncapped": 0.06729377713458755,
      "cer": 0.04017817105617171,
      "av_wer": null,
      "strict_wer": 0.070767004341534,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016063675832127353,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.09619905956112852,
      "wer_uncapped": 0.09815830721003135,
      "cer": 0.07045158975738823,
      "av_wer": null,
      "strict_wer": 0.10109717868338558,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029584639498432604,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.12802768166089964,
      "wer_uncapped": 0.12906574394463668,
      "cer": 0.08039606886869134,
      "av_wer": null,
      "strict_wer": 0.13114186851211074,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009342560553633217,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07613950276243094,
      "wer_uncapped": 0.07613950276243094,
      "cer": 0.04403534609720177,
      "av_wer": null,
      "strict_wer": 0.0862396408839779,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01571132596685083,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.08234679665738162,
      "wer_uncapped": 0.08252089136490251,
      "cer": 0.05459258059290458,
      "av_wer": null,
      "strict_wer": 0.08408774373259052,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004178272980501393,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.14072494669509594,
      "wer_uncapped": 0.1414864453243984,
      "cer": 0.09824205115186901,
      "av_wer": null,
      "strict_wer": 0.14544623819677124,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.024063356685957965,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11939218523878437,
      "wer_uncapped": 0.1195369030390738,
      "cer": 0.07626079937819497,
      "av_wer": null,
      "strict_wer": 0.12199710564399421,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019102749638205498,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.19494514106583072,
      "wer_uncapped": 0.19690438871473354,
      "cer": 0.1397820530068613,
      "av_wer": null,
      "strict_wer": 0.1994514106583072,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027233542319749216,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.33079584775086507,
      "wer_uncapped": 0.3456747404844291,
      "cer": 0.24362669031256928,
      "av_wer": null,
      "strict_wer": 0.3328719723183391,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03633217993079585,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1454592541436464,
      "wer_uncapped": 0.1454592541436464,
      "cer": 0.09993688196928256,
      "av_wer": null,
      "strict_wer": 0.15426450276243095,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013380524861878454,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.046477220875951665,
      "cer": 0.026760019592207567,
      "wer_arith": 0.05452346500520868,
      "done": 9,
      "total": 9,
      "ci": [
       0.04336,
       0.04915
      ]
     },
     "accented": {
      "wer": 0.12449953381231832,
      "cer": 0.09566405217238036,
      "wer_arith": 0.12449953381231832,
      "done": 1,
      "total": 1,
      "ci": [
       0.10479,
       0.14395
      ]
     },
     "noisy": {
      "wer": 0.07036812009415071,
      "cer": 0.04594457561732658,
      "wer_arith": 0.08475812065053075,
      "done": 5,
      "total": 5,
      "ci": [
       0.06391,
       0.07755
      ]
     },
     "telephony": {
      "wer": 0.04714847284183929,
      "cer": 0.027725144949400413,
      "wer_arith": 0.06164571817818608,
      "done": 8,
      "total": 8,
      "ci": [
       0.04315,
       0.05102
      ]
     },
     "callcenter": {
      "wer": 0.1532973288163293,
      "cer": 0.10566692736848839,
      "wer_arith": 0.16894402859193403,
      "done": 6,
      "total": 6,
      "ci": [
       0.14278,
       0.16362
      ]
     }
    },
    "arena": 0.0681827212698253,
    "arena_arith": 0.08990460056329558,
    "arena_cer": 0.042464471978716,
    "arena_strict": 0.07369399731585759,
    "zero_shot": 0.0552109197139012,
    "arena_real": 0.049213326370366794,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 9,
    "boh_share": 0.4666666666666667,
    "arena_ci": [
     0.06436,
     0.07183
    ],
    "rank_set": [
     4,
     11
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run13c-rl-s750",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run13c-rl-s750",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.021926074930852402,
     "cer": 0.008220062267446275,
     "rtfx": 180.13,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.048865034104886504,
     "cer": 0.021343726800296958,
     "rtfx": 171.07,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06443028223264935,
     "cer": 0.036849860564803875,
     "rtfx": 190.6,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09665705436291787,
     "cer": 0.05244216927754898,
     "rtfx": 232.04,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07494927291173487,
     "cer": 0.043963476496449105,
     "rtfx": 191.91,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08555597805421261,
     "cer": 0.05216789761744898,
     "rtfx": 168.89,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09439852606259116,
     "cer": 0.047740305671340154,
     "rtfx": 162.65,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.027273195080533115,
     "cer": 0.012419336318750718,
     "rtfx": 206.18,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08983758700696055,
     "cer": 0.04760423148724331,
     "rtfx": 145.26,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15389678056271597,
     "cer": 0.10860290670417252,
     "rtfx": 166.23,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11293711945686728,
     "cer": 0.07185720565534304,
     "rtfx": 159.32,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.02057733567388336,
     "cer": 0.013757523645743766,
     "rtfx": 190.9,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.13518197573656845,
     "cer": 0.08237882120913298,
     "rtfx": 186.08,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.030118384401114206,
     "cer": 0.012908149721263605,
     "rtfx": 160.0,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08939993908010965,
     "cer": 0.05079407093700371,
     "rtfx": 180.32,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09204052098408104,
     "cer": 0.053668156062005444,
     "rtfx": 183.57,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10775862068965517,
     "cer": 0.07072495849474267,
     "rtfx": 152.19,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.027158774373259052,
     "cer": 0.010518980621183966,
     "rtfx": 159.71,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07310386841303686,
     "cer": 0.04221810481736368,
     "rtfx": 180.92,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08451519536903039,
     "cer": 0.04810164499138813,
     "rtfx": 183.52,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08522727272727272,
     "cer": 0.054528684744512085,
     "rtfx": 151.56,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13494809688581316,
     "cer": 0.07548223035415245,
     "rtfx": 227.89,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09953383977900553,
     "cer": 0.05082123303975244,
     "rtfx": 165.39,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06598189415041783,
     "cer": 0.03567162198035572,
     "rtfx": 159.56,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14224794395370088,
     "cer": 0.08766543144520911,
     "rtfx": 179.04,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1154848046309696,
     "cer": 0.06597438905668855,
     "rtfx": 181.63,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.15262539184952978,
     "cer": 0.09894853348090758,
     "rtfx": 151.88,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2910034602076125,
     "cer": 0.18613161322334554,
     "rtfx": 218.87,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.1529696132596685,
     "cer": 0.08798925425918999,
     "rtfx": 94.58,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 43.52,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06709922274970427,
     "cer": 0.035861229611258705,
     "done": 9,
     "total": 9,
     "ci": [
      0.06497,
      0.06935
     ]
    },
    "accented": {
     "wer": 0.15389678056271597,
     "cer": 0.10860290670417252,
     "done": 1,
     "total": 1,
     "ci": [
      0.13876,
      0.17136
     ]
    },
    "noisy": {
     "wer": 0.08645091692236548,
     "cer": 0.05199050817407169,
     "done": 5,
     "total": 5,
     "ci": [
      0.0811,
      0.09159
     ]
    },
    "telephony": {
     "wer": 0.08253079486973369,
     "cer": 0.047225902927903685,
     "done": 8,
     "total": 8,
     "ci": [
      0.0779,
      0.08762
     ]
    },
    "callcenter": {
     "wer": 0.15338551800864986,
     "cer": 0.09373014057428275,
     "done": 6,
     "total": 6,
     "ci": [
      0.1444,
      0.16225
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 13c GSPO step 750, from run13-sft-s3000 with English call windows; tag `run13c-rl-s750` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit dd52a9dfdc), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.43666666666666665,
   "inserted_wpm": 93.95,
   "arena_wer": 0.0972283749265234,
   "arena_cer": 0.05749526171325187,
   "arena_ci": [
    0.09475,
    0.09995
   ],
   "rank_range": [
    20,
    22
   ],
   "rtfx": 164.3,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.43666666666666665,
    "halluc_3plus": 0.39666666666666667,
    "halluc_3plus_ci": [
     0.34295,
     0.453
    ],
    "inserted_wpm": 93.94970166731724,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01865727935629872,
      "wer_uncapped": 0.01865727935629872,
      "cer": 0.00877791527403518,
      "av_wer": null,
      "strict_wer": 0.021926074930852402,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002413879808901182,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.044783629654478366,
      "wer_uncapped": 0.04483953930448396,
      "cer": 0.02389238388435283,
      "av_wer": null,
      "strict_wer": 0.04875321480487532,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004249133400424913,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05924784648784929,
      "wer_uncapped": 0.05924784648784929,
      "cer": 0.03685478571950062,
      "av_wer": null,
      "strict_wer": 0.06443028223264935,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02521184956929757,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09174409911353198,
      "wer_uncapped": 0.09281213286339848,
      "cer": 0.055505860226151976,
      "av_wer": null,
      "strict_wer": 0.09548221723806473,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011748371248531453,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07097565099763274,
      "wer_uncapped": 0.07097565099763274,
      "cer": 0.04429017518479968,
      "av_wer": null,
      "strict_wer": 0.07494927291173487,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01758539059857964,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08083002879026563,
      "wer_uncapped": 0.08148188386115487,
      "cer": 0.05279034690799397,
      "av_wer": null,
      "strict_wer": 0.08490412298332338,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.021782823618882067,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08431638475907777,
      "wer_uncapped": 0.08431638475907777,
      "cer": 0.04735182613265268,
      "av_wer": null,
      "strict_wer": 0.09439852606259116,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019908390695770106,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.023954098698090877,
      "wer_uncapped": 0.023954098698090877,
      "cer": 0.012532038986094663,
      "av_wer": null,
      "strict_wer": 0.027273195080533115,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005686203879997942,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07619489559164733,
      "wer_uncapped": 0.07675174013921114,
      "cer": 0.046661863592699325,
      "av_wer": null,
      "strict_wer": 0.08928074245939675,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015591647331786543,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1365655679262875,
      "wer_uncapped": 0.14874129325947458,
      "cer": 0.1018771481448841,
      "av_wer": null,
      "strict_wer": 0.14172105522952888,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03674655843799704,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.10803383803006628,
      "wer_uncapped": 0.10927312894013685,
      "cer": 0.07554198853725393,
      "av_wer": null,
      "strict_wer": 0.1116978285467967,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019235950212834745,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01960210649502633,
      "wer_uncapped": 0.01989467524868344,
      "cer": 0.013530944796904204,
      "av_wer": null,
      "strict_wer": 0.020284766920226252,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008874585527598986,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.08126323897554401,
      "wer_uncapped": 0.10687463893703061,
      "cer": 0.06268885581563162,
      "av_wer": null,
      "strict_wer": 0.10860774119006354,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06181398035817447,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02698467966573816,
      "wer_uncapped": 0.02698467966573816,
      "cer": 0.013972136724445165,
      "av_wer": null,
      "strict_wer": 0.030118384401114206,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004004178272980502,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.0837648492232714,
      "wer_uncapped": 0.0837648492232714,
      "cer": 0.05213555879926382,
      "av_wer": null,
      "strict_wer": 0.08939993908010965,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026195552848004875,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08813314037626628,
      "wer_uncapped": 0.08813314037626628,
      "cer": 0.05464709575199546,
      "av_wer": null,
      "strict_wer": 0.09204052098408104,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02272069464544139,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10266457680250783,
      "wer_uncapped": 0.10442789968652037,
      "cer": 0.07314229337638459,
      "av_wer": null,
      "strict_wer": 0.10599529780564264,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02292319749216301,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.023676880222841225,
      "wer_uncapped": 0.023676880222841225,
      "cer": 0.011218208326583509,
      "av_wer": null,
      "strict_wer": 0.027158774373259052,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002959610027855153,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06853487663722205,
      "wer_uncapped": 0.06853487663722205,
      "cer": 0.043536206130608615,
      "av_wer": null,
      "strict_wer": 0.07310386841303686,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022692659153213526,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.0804630969609262,
      "wer_uncapped": 0.0804630969609262,
      "cer": 0.048638306777076916,
      "av_wer": null,
      "strict_wer": 0.08451519536903039,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02011577424023155,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.08091692789968652,
      "wer_uncapped": 0.08150470219435736,
      "cer": 0.05623570563702408,
      "av_wer": null,
      "strict_wer": 0.08463949843260188,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020572100313479624,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.12941176470588237,
      "wer_uncapped": 0.13252595155709343,
      "cer": 0.08150447055346191,
      "av_wer": null,
      "strict_wer": 0.13183391003460207,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01384083044982699,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08736187845303868,
      "wer_uncapped": 0.08736187845303868,
      "cer": 0.050157795076793604,
      "av_wer": null,
      "strict_wer": 0.09953383977900553,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019941298342541436,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06267409470752089,
      "wer_uncapped": 0.06284818941504178,
      "cer": 0.03952697229872024,
      "av_wer": null,
      "strict_wer": 0.06580779944289694,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009052924791086351,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1372220530003046,
      "wer_uncapped": 0.1372220530003046,
      "cer": 0.09259376784920988,
      "av_wer": null,
      "strict_wer": 0.14224794395370088,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029393847091075235,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11099855282199711,
      "wer_uncapped": 0.11099855282199711,
      "cer": 0.068009924964874,
      "av_wer": null,
      "strict_wer": 0.1154848046309696,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02243125904486252,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14655172413793102,
      "wer_uncapped": 0.1481191222570533,
      "cer": 0.10327817390914391,
      "av_wer": null,
      "strict_wer": 0.1510579937304075,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028017241379310345,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2768166089965398,
      "wer_uncapped": 0.2878892733564014,
      "cer": 0.2003990246065174,
      "av_wer": null,
      "strict_wer": 0.2799307958477509,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03771626297577855,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.14157458563535913,
      "wer_uncapped": 0.1418335635359116,
      "cer": 0.09074268882810857,
      "av_wer": null,
      "strict_wer": 0.15271063535911603,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02788328729281768,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05416014162389398,
      "cer": 0.031170277835018412,
      "wer_arith": 0.06118932371654142,
      "done": 9,
      "total": 9,
      "ci": [
       0.05067,
       0.05738
      ]
     },
     "accented": {
      "wer": 0.1365655679262875,
      "cer": 0.10187714814488412,
      "wer_arith": 0.1365655679262875,
      "done": 1,
      "total": 1,
      "ci": [
       0.11499,
       0.15932
      ]
     },
     "noisy": {
      "wer": 0.07393664672152706,
      "cer": 0.04660839913281199,
      "wer_arith": 0.08191621681957,
      "done": 5,
      "total": 5,
      "ci": [
       0.06779,
       0.08036
      ]
     },
     "telephony": {
      "wer": 0.060942547543072184,
      "cer": 0.0383023461111204,
      "wer_arith": 0.07140384629377093,
      "done": 8,
      "total": 8,
      "ci": [
       0.05619,
       0.06561
      ]
     },
     "callcenter": {
      "wer": 0.1327902776743142,
      "cer": 0.08809688784993766,
      "wer_arith": 0.14597293654994212,
      "done": 6,
      "total": 6,
      "ci": [
       0.12299,
       0.14155
      ]
     }
    },
    "arena": 0.07467986068058659,
    "arena_arith": 0.0894417503598748,
    "arena_cer": 0.046486252812662554,
    "arena_strict": 0.08050271854956197,
    "zero_shot": 0.07159126396776379,
    "arena_real": 0.05999929634897707,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 28,
    "boh_share": 0.4033333333333333,
    "arena_ci": [
     0.07043,
     0.0787
    ],
    "rank_set": [
     17,
     29
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run9-step-12000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/step-12000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02031682172491828,
     "cer": 0.007536639076619334,
     "rtfx": 179.35,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.045398635804539865,
     "cer": 0.020262893576138696,
     "rtfx": 170.24,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06330975558512501,
     "cer": 0.03733697042025403,
     "rtfx": 193.0,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09548221723806473,
     "cer": 0.0496324236942381,
     "rtfx": 230.74,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07177882989516401,
     "cer": 0.04218435253120819,
     "rtfx": 193.38,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08506708675104568,
     "cer": 0.05197460782518464,
     "rtfx": 169.28,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09178842856777297,
     "cer": 0.04627510420613869,
     "rtfx": 161.92,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.0443575361498482,
     "cer": 0.024080835916867608,
     "rtfx": 202.8,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08853828306264501,
     "cer": 0.046943061605476046,
     "rtfx": 143.09,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15417100861076072,
     "cer": 0.10903656821378341,
     "rtfx": 165.87,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11832534080500028,
     "cer": 0.07844079371083328,
     "rtfx": 181.52,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.017164033547883754,
     "cer": 0.010506889247740285,
     "rtfx": 191.62,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.11496244945118429,
     "cer": 0.06079799742092088,
     "rtfx": 194.84,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02681058495821727,
     "cer": 0.012509954871250333,
     "rtfx": 156.13,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08848614072494669,
     "cer": 0.052143991529910005,
     "rtfx": 179.31,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08885672937771345,
     "cer": 0.05124684855595217,
     "rtfx": 178.08,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.10952194357366771,
     "cer": 0.06843755764619074,
     "rtfx": 151.48,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02576601671309192,
     "cer": 0.009291213166976373,
     "rtfx": 158.4,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07036247334754797,
     "cer": 0.03959767072525146,
     "rtfx": 178.12,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08075253256150507,
     "cer": 0.045904994882803724,
     "rtfx": 183.19,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.0832680250783699,
     "cer": 0.052204390333886734,
     "rtfx": 153.1,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.14325259515570934,
     "cer": 0.08087824846492588,
     "rtfx": 220.97,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09573549723756906,
     "cer": 0.048083789573910976,
     "rtfx": 160.61,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07364206128133705,
     "cer": 0.039653570480488454,
     "rtfx": 155.85,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14803533353639964,
     "cer": 0.09126521969295924,
     "rtfx": 177.08,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11895803183791606,
     "cer": 0.0690447068220963,
     "rtfx": 176.68,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1610501567398119,
     "cer": 0.10522043903338868,
     "rtfx": 149.04,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.3041522491349481,
     "cer": 0.18991502822055448,
     "rtfx": 226.61,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14891229281767956,
     "cer": 0.08555786037338049,
     "rtfx": 164.18,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 22.3,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06733751053101375,
     "cer": 0.03624743209468059,
     "done": 9,
     "total": 9,
     "ci": [
      0.06508,
      0.06962
     ]
    },
    "accented": {
     "wer": 0.15417100861076072,
     "cer": 0.10903656821378341,
     "done": 1,
     "total": 1,
     "ci": [
      0.13908,
      0.17167
     ]
    },
    "noisy": {
     "wer": 0.08640014788790909,
     "cer": 0.0525558292628273,
     "done": 5,
     "total": 5,
     "ci": [
      0.08123,
      0.09187
     ]
    },
    "telephony": {
     "wer": 0.07890795288660767,
     "cer": 0.04340814922705204,
     "done": 8,
     "total": 8,
     "ci": [
      0.07389,
      0.08388
     ]
    },
    "callcenter": {
     "wer": 0.15912502089134872,
     "cer": 0.0967761374371446,
     "done": 6,
     "total": 6,
     "ci": [
      0.14946,
      0.16864
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run 9 Stage A (SFT) step 12,000 of 12,000, after the decay; tag `step-12000` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 58da29c3f1), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.9966666666666667,
   "inserted_wpm": 358.31,
   "arena_wer": 0.0977941203996194,
   "arena_cer": 0.057563268532695715,
   "arena_ci": [
    0.0951,
    0.10052
   ],
   "rank_range": [
    20,
    23
   ],
   "rtfx": 156.7,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9966666666666667,
    "halluc_3plus": 0.7833333333333333,
    "halluc_3plus_ci": [
     0.73329,
     0.82621
    ],
    "inserted_wpm": 358.3114927786762,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017048026150364597,
      "wer_uncapped": 0.017048026150364597,
      "cer": 0.007875837024529589,
      "av_wer": null,
      "strict_wer": 0.02031682172491828,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002413879808901182,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04232360505423236,
      "wer_uncapped": 0.04232360505423236,
      "cer": 0.022647570606344532,
      "av_wer": null,
      "strict_wer": 0.045342726154534274,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004584591300458459,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05882764899502766,
      "wer_uncapped": 0.05882764899502766,
      "cer": 0.03761407607505293,
      "av_wer": null,
      "strict_wer": 0.06330975558512501,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02451152041459486,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08800598098899926,
      "wer_uncapped": 0.09131688561358539,
      "cer": 0.05172136975618707,
      "av_wer": null,
      "strict_wer": 0.09206450923849194,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01238919149845135,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06738248224551911,
      "wer_uncapped": 0.06738248224551911,
      "cer": 0.042358379055448724,
      "av_wer": null,
      "strict_wer": 0.07177882989516401,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01619039567128847,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08012385246346895,
      "wer_uncapped": 0.08066706502254332,
      "cer": 0.05286452538140098,
      "av_wer": null,
      "strict_wer": 0.08452387419197131,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.02129393231571514,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08175746564651092,
      "wer_uncapped": 0.08175746564651092,
      "cer": 0.0460255495914818,
      "av_wer": null,
      "strict_wer": 0.09178842856777297,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01967808797563909,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.039880615447949366,
      "wer_uncapped": 0.039880615447949366,
      "cer": 0.023357185350746976,
      "av_wer": null,
      "strict_wer": 0.0443575361498482,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01875675397519683,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07350348027842227,
      "wer_uncapped": 0.07461716937354988,
      "cer": 0.04579731027857829,
      "av_wer": null,
      "strict_wer": 0.08742459396751741,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016612529002320187,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13634618548785168,
      "wer_uncapped": 0.14923490374595513,
      "cer": 0.10239123410005581,
      "av_wer": null,
      "strict_wer": 0.14128229035265727,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.003015075376884422,
      "insertions": 0.0377886250205671,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11288323724338596,
      "wer_uncapped": 0.11390699929953123,
      "cer": 0.08154747072015948,
      "av_wer": null,
      "strict_wer": 0.11730157874885501,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020744652190311977,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.016481373122683832,
      "wer_uncapped": 0.016481373122683832,
      "cer": 0.010503593334561823,
      "av_wer": null,
      "strict_wer": 0.017164033547883754,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006436512580456407,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.06874638937030618,
      "wer_uncapped": 0.08646254573464279,
      "cer": 0.04933928651964101,
      "av_wer": null,
      "strict_wer": 0.09705372616984402,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.045060658578856154,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02437325905292479,
      "wer_uncapped": 0.02437325905292479,
      "cer": 0.013526648307144014,
      "av_wer": null,
      "strict_wer": 0.02681058495821727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00383008356545961,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.0837648492232714,
      "wer_uncapped": 0.0837648492232714,
      "cer": 0.05394427873326141,
      "av_wer": null,
      "strict_wer": 0.08848614072494669,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025434054218702408,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08437047756874096,
      "wer_uncapped": 0.08437047756874096,
      "cer": 0.05231532689605692,
      "av_wer": null,
      "strict_wer": 0.08885672937771345,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020260492040520984,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10246865203761756,
      "wer_uncapped": 0.1042319749216301,
      "cer": 0.07090004036055428,
      "av_wer": null,
      "strict_wer": 0.10775862068965517,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02233542319749216,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.022284122562674095,
      "wer_uncapped": 0.022284122562674095,
      "cer": 0.009800745180625304,
      "av_wer": null,
      "strict_wer": 0.02576601671309192,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06579348157173318,
      "wer_uncapped": 0.06579348157173318,
      "cer": 0.04042647712127943,
      "av_wer": null,
      "strict_wer": 0.07036247334754797,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021474261346329578,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07626628075253256,
      "wer_uncapped": 0.07626628075253256,
      "cer": 0.04630653792113838,
      "av_wer": null,
      "strict_wer": 0.08075253256150507,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017945007235890015,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07758620689655173,
      "wer_uncapped": 0.07758620689655173,
      "cer": 0.05435221310372663,
      "av_wer": null,
      "strict_wer": 0.0832680250783699,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01763322884012539,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13598615916955017,
      "wer_uncapped": 0.1411764705882353,
      "cer": 0.08652922485775512,
      "av_wer": null,
      "strict_wer": 0.13806228373702423,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019377162629757784,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08373618784530387,
      "wer_uncapped": 0.08373618784530387,
      "cer": 0.047359562381653696,
      "av_wer": null,
      "strict_wer": 0.09573549723756906,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021581491712707183,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06981197771587744,
      "wer_uncapped": 0.07103064066852367,
      "cer": 0.04373886278956747,
      "av_wer": null,
      "strict_wer": 0.07242339832869081,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012186629526462395,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1440755406640268,
      "wer_uncapped": 0.1440755406640268,
      "cer": 0.09662372278987116,
      "av_wer": null,
      "strict_wer": 0.14803533353639964,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030307645446238197,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11389290882778581,
      "wer_uncapped": 0.11403762662807525,
      "cer": 0.07195599533646228,
      "av_wer": null,
      "strict_wer": 0.11881331403762663,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021562952243125905,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.15027429467084638,
      "wer_uncapped": 0.15576018808777428,
      "cer": 0.10749360957890489,
      "av_wer": null,
      "strict_wer": 0.155564263322884,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03428683385579937,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2833910034602076,
      "wer_uncapped": 0.3013840830449827,
      "cer": 0.20232025419345304,
      "av_wer": null,
      "strict_wer": 0.286159169550173,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05328719723183391,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13768991712707182,
      "wer_uncapped": 0.13768991712707182,
      "cer": 0.0888701872501578,
      "av_wer": null,
      "strict_wer": 0.14891229281767956,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02512085635359116,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.0552961837971286,
      "cer": 0.03229900168197294,
      "wer_arith": 0.06098368414116606,
      "done": 9,
      "total": 9,
      "ci": [
       0.05176,
       0.05858
      ]
     },
     "accented": {
      "wer": 0.13634618548785168,
      "cer": 0.10239123410005581,
      "wer_arith": 0.13634618548785168,
      "done": 1,
      "total": 1,
      "ci": [
       0.11538,
       0.1595
      ]
     },
     "noisy": {
      "wer": 0.072423128331683,
      "cer": 0.046640618622750804,
      "wer_arith": 0.08157209502518814,
      "done": 5,
      "total": 5,
      "ci": [
       0.06631,
       0.07881
      ]
     },
     "telephony": {
      "wer": 0.057031964860225735,
      "cer": 0.03473247443378405,
      "wer_arith": 0.06836002516141695,
      "done": 8,
      "total": 8,
      "ci": [
       0.05234,
       0.06147
      ]
     },
     "callcenter": {
      "wer": 0.13736148059458625,
      "cer": 0.09152352188287703,
      "wer_arith": 0.14985594041096933,
      "done": 6,
      "total": 6,
      "ci": [
       0.12797,
       0.14658
      ]
     }
    },
    "arena": 0.07443947295720331,
    "arena_arith": 0.08949600523136583,
    "arena_cer": 0.0464573431995628,
    "arena_strict": 0.08045473702953602,
    "zero_shot": 0.06908673213656276,
    "arena_real": 0.05986629463708131,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 27,
    "boh_share": 0.9966666666666667,
    "arena_ci": [
     0.07019,
     0.07838
    ],
    "rank_set": [
     18,
     29
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run13-sft-s3000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/run13-sft-s3000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02222780990696505,
     "cer": 0.008419394031437467,
     "rtfx": 180.44,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.05048641395504864,
     "cer": 0.022610157648805626,
     "rtfx": 171.16,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06590097345752503,
     "cer": 0.038311190131154325,
     "rtfx": 191.63,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09847271173769091,
     "cer": 0.05400100073130364,
     "rtfx": 231.67,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07511836320595199,
     "cer": 0.044294305332960845,
     "rtfx": 192.91,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08713129447552827,
     "cer": 0.05332763637103501,
     "rtfx": 169.82,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.0935540827554441,
     "cer": 0.04733105974485285,
     "rtfx": 162.64,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.027556218803066947,
     "cer": 0.012621426110919738,
     "rtfx": 206.58,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.09280742459396751,
     "cer": 0.05096841941505911,
     "rtfx": 147.37,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15658421543355455,
     "cer": 0.11052508204406938,
     "rtfx": 167.57,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11520017242308314,
     "cer": 0.07396313599607439,
     "rtfx": 128.0,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.021259996099083283,
     "cer": 0.013694608141266279,
     "rtfx": 193.24,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.1887155786635856,
     "cer": 0.12557839641963134,
     "rtfx": 182.78,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.030292479108635098,
     "cer": 0.013638173612954605,
     "rtfx": 160.41,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.09031373743527261,
     "cer": 0.05203811540497618,
     "rtfx": 181.36,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09059334298118668,
     "cer": 0.052594792940765335,
     "rtfx": 183.6,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.11167711598746081,
     "cer": 0.0734181885261022,
     "rtfx": 152.38,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.026114206128133706,
     "cer": 0.01055216352535174,
     "rtfx": 160.48,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07279926896131587,
     "cer": 0.042535733192165165,
     "rtfx": 180.24,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.085383502170767,
     "cer": 0.04852599785327376,
     "rtfx": 184.41,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.09051724137931035,
     "cer": 0.05755395683453238,
     "rtfx": 152.08,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13598615916955017,
     "cer": 0.07814922781120139,
     "rtfx": 230.16,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09832527624309392,
     "cer": 0.05026014214302717,
     "rtfx": 166.65,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07120473537604456,
     "cer": 0.03759623042208654,
     "rtfx": 160.81,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14011574779165398,
     "cer": 0.08671254632080466,
     "rtfx": 181.58,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.11490593342981187,
     "cer": 0.06550011232869873,
     "rtfx": 183.93,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.15027429467084638,
     "cer": 0.09662423907028224,
     "rtfx": 151.76,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.3017301038062284,
     "cer": 0.1993425541152391,
     "rtfx": 223.59,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15037983425414364,
     "cer": 0.08577889618118135,
     "rtfx": 97.95,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 28.75,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06813947698790983,
     "cer": 0.03687606550194763,
     "done": 9,
     "total": 9,
     "ci": [
      0.06596,
      0.07043
     ]
    },
    "accented": {
     "wer": 0.15658421543355455,
     "cer": 0.11052508204406938,
     "done": 1,
     "total": 1,
     "ci": [
      0.14096,
      0.17317
     ]
    },
    "noisy": {
     "wer": 0.08761536958712766,
     "cer": 0.053130481296174537,
     "done": 5,
     "total": 5,
     "ci": [
      0.08216,
      0.09298
     ]
    },
    "telephony": {
     "wer": 0.089887653601855,
     "cer": 0.05335627824005615,
     "done": 8,
     "total": 8,
     "ci": [
      0.08471,
      0.09544
     ]
    },
    "callcenter": {
     "wer": 0.15476844155478814,
     "cer": 0.0952590964063821,
     "done": 6,
     "total": 6,
     "ci": [
      0.14562,
      0.16371
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22",
    "spgispeech"
   ],
   "notes": "Arabic-STT round 13 supervised fine-tuning step 3,000 (English call turns weighted up, SPGISpeech added); tag `run13-sft-s3000` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 08a56c295b), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included), SPGISpeech",
   "training_data": "",
   "hallucination_rate": 0.8266666666666667,
   "inserted_wpm": 138.94,
   "arena_wer": 0.09986795456576002,
   "arena_cer": 0.05984090851775992,
   "arena_ci": [
    0.09724,
    0.10263
   ],
   "rank_range": [
    23,
    26
   ],
   "rtfx": 157.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.8266666666666667,
    "halluc_3plus": 0.5566666666666666,
    "halluc_3plus_ci": [
     0.50009,
     0.61181
    ],
    "inserted_wpm": 138.93938549043665,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.018808146844355042,
      "wer_uncapped": 0.018808146844355042,
      "cer": 0.009009217389293025,
      "av_wer": null,
      "strict_wer": 0.02222780990696505,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023635906462157407,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04685228670468523,
      "wer_uncapped": 0.04690819635469082,
      "cer": 0.025230892785437022,
      "av_wer": null,
      "strict_wer": 0.05037459465503746,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005143687800514368,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.06071853771272498,
      "wer_uncapped": 0.06078857062819525,
      "cer": 0.03840256990581879,
      "av_wer": null,
      "strict_wer": 0.06583094054205477,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025491981231178653,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09227811598846523,
      "wer_uncapped": 0.09441418348819823,
      "cer": 0.05672148443771646,
      "av_wer": null,
      "strict_wer": 0.09622984086297127,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013564028623304497,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07114474129184985,
      "wer_uncapped": 0.07114474129184985,
      "cer": 0.04466065663426424,
      "av_wer": null,
      "strict_wer": 0.07511836320595199,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018134934054785255,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.0825683089793036,
      "wer_uncapped": 0.0831658427942854,
      "cer": 0.05413792250822145,
      "av_wer": null,
      "strict_wer": 0.08653376066054647,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.022814927481123362,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08367665498093606,
      "wer_uncapped": 0.08367665498093606,
      "cer": 0.04693892871889194,
      "av_wer": null,
      "strict_wer": 0.0935540827554441,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019908390695770106,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.024211392991303454,
      "wer_uncapped": 0.024211392991303454,
      "cer": 0.012709956132303638,
      "av_wer": null,
      "strict_wer": 0.027556218803066947,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005866309885246745,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07842227378190256,
      "wer_uncapped": 0.0797215777262181,
      "cer": 0.04923150816522574,
      "av_wer": null,
      "strict_wer": 0.09150812064965197,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017540603248259862,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1390336203586903,
      "wer_uncapped": 0.15181264739757583,
      "cer": 0.10397755647601421,
      "av_wer": null,
      "strict_wer": 0.14380518839466902,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.039159765260790874,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11040465542324479,
      "wer_uncapped": 0.11142841747939006,
      "cer": 0.07767256416645901,
      "av_wer": null,
      "strict_wer": 0.11417641036693787,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019074303572390754,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.020382289838111956,
      "wer_uncapped": 0.02047981275599766,
      "cer": 0.01363624397820307,
      "av_wer": null,
      "strict_wer": 0.021162473181197582,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008191925102399064,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.10494896976699403,
      "wer_uncapped": 0.16098594261505872,
      "cer": 0.08596040229107473,
      "av_wer": null,
      "strict_wer": 0.13190833814750627,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.10167533217793183,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.027506963788300837,
      "wer_uncapped": 0.027506963788300837,
      "cer": 0.01478211566499271,
      "av_wer": null,
      "strict_wer": 0.030292479108635098,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004352367688022284,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08467864757843437,
      "wer_uncapped": 0.08467864757843437,
      "cer": 0.053722155232595034,
      "av_wer": null,
      "strict_wer": 0.09031373743527261,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025890953396283885,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08668596237337192,
      "wer_uncapped": 0.08668596237337192,
      "cer": 0.05363068368658635,
      "av_wer": null,
      "strict_wer": 0.09059334298118668,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022141823444283646,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10697492163009405,
      "wer_uncapped": 0.10913009404388714,
      "cer": 0.07628144759854702,
      "av_wer": null,
      "strict_wer": 0.10952194357366771,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024882445141065832,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.023328690807799445,
      "wer_uncapped": 0.023328690807799445,
      "cer": 0.011380204114693019,
      "av_wer": null,
      "strict_wer": 0.026114206128133706,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06792567773378008,
      "wer_uncapped": 0.06792567773378008,
      "cer": 0.04375832963127499,
      "av_wer": null,
      "strict_wer": 0.07279926896131587,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022692659153213526,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.08104196816208394,
      "wer_uncapped": 0.08104196816208394,
      "cer": 0.04899704044722131,
      "av_wer": null,
      "strict_wer": 0.085383502170767,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020549927641099856,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.08581504702194358,
      "wer_uncapped": 0.08640282131661442,
      "cer": 0.05901609937665366,
      "av_wer": null,
      "strict_wer": 0.0899294670846395,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02233542319749216,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13079584775086506,
      "wer_uncapped": 0.13356401384083044,
      "cer": 0.08497746249907633,
      "av_wer": null,
      "strict_wer": 0.13321799307958476,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014878892733564015,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08667127071823204,
      "wer_uncapped": 0.08667127071823204,
      "cer": 0.04950557542604671,
      "av_wer": null,
      "strict_wer": 0.09832527624309392,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02045925414364641,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06772284122562675,
      "wer_uncapped": 0.06824512534818941,
      "cer": 0.04122792807387008,
      "av_wer": null,
      "strict_wer": 0.0706824512534819,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01270891364902507,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13554675601583918,
      "wer_uncapped": 0.13554675601583918,
      "cer": 0.09148315034587802,
      "av_wer": null,
      "strict_wer": 0.14011574779165398,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029698446542796225,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11041968162083936,
      "wer_uncapped": 0.11041968162083936,
      "cer": 0.06780066365728976,
      "av_wer": null,
      "strict_wer": 0.11490593342981187,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02272069464544139,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.14341692789968652,
      "wer_uncapped": 0.14537617554858934,
      "cer": 0.10058747029014754,
      "av_wer": null,
      "strict_wer": 0.14831504702194356,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028996865203761754,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2889273356401384,
      "wer_uncapped": 0.29792387543252596,
      "cer": 0.21296091036725043,
      "av_wer": null,
      "strict_wer": 0.29204152249134946,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.04498269896193772,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13984806629834254,
      "wer_uncapped": 0.13984806629834254,
      "cer": 0.08870187250157795,
      "av_wer": null,
      "strict_wer": 0.15037983425414364,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02460290055248619,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05500355072826795,
      "cer": 0.03199774712142981,
      "wer_arith": 0.062075606586169556,
      "done": 9,
      "total": 9,
      "ci": [
       0.05152,
       0.05817
      ]
     },
     "accented": {
      "wer": 0.13903362035869032,
      "cer": 0.10397755647601423,
      "wer_arith": 0.1390336203586903,
      "done": 1,
      "total": 1,
      "ci": [
       0.11657,
       0.1635
      ]
     },
     "noisy": {
      "wer": 0.07507354804531653,
      "cer": 0.047906890739666176,
      "wer_arith": 0.0832502301586892,
      "done": 5,
      "total": 5,
      "ci": [
       0.06892,
       0.08169
      ]
     },
     "telephony": {
      "wer": 0.06358610980761456,
      "cer": 0.04040292211888781,
      "wer_arith": 0.07511372022497627,
      "done": 8,
      "total": 8,
      "ci": [
       0.05901,
       0.06819
      ]
     },
     "callcenter": {
      "wer": 0.1343237219610905,
      "cer": 0.08866601482895747,
      "wer_arith": 0.14764693478341212,
      "done": 6,
      "total": 6,
      "ci": [
       0.12475,
       0.14334
      ]
     }
    },
    "arena": 0.0762441725983194,
    "arena_arith": 0.09128682522378463,
    "arena_cer": 0.04779546718060932,
    "arena_strict": 0.08186518588296837,
    "zero_shot": 0.0747426545868388,
    "arena_real": 0.061910418507297615,
    "exposure": 0.7792,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 30,
    "boh_share": 0.7133333333333334,
    "arena_ci": [
     0.07204,
     0.08023
    ],
    "rank_set": [
     24,
     31
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run9-step-6000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/step-6000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.020668845863716367,
     "cer": 0.007792922773179436,
     "rtfx": 182.06,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.048976853404897686,
     "cer": 0.021594829468535744,
     "rtfx": 173.39,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.062399327684011484,
     "cer": 0.03698381577505267,
     "rtfx": 193.3,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.10391968386201005,
     "cer": 0.055463608021246294,
     "rtfx": 231.73,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07118701386540413,
     "cer": 0.042257870050433015,
     "rtfx": 192.95,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08843500461730676,
     "cer": 0.05420252700970518,
     "rtfx": 169.11,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09107193121625426,
     "cer": 0.04553745105469243,
     "rtfx": 162.53,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04422888900324191,
     "cer": 0.023975198070961073,
     "rtfx": 204.89,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08389791183294663,
     "cer": 0.044803982576229,
     "rtfx": 145.82,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.16003948883891844,
     "cer": 0.11221284575714956,
     "rtfx": 167.05,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11886416293981357,
     "cer": 0.07893149592614931,
     "rtfx": 111.12,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.017456602301540863,
     "cer": 0.010758551265650233,
     "rtfx": 193.91,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08530714423262084,
     "cer": 0.03652431161344155,
     "rtfx": 208.76,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.030118384401114206,
     "cer": 0.013770905229625697,
     "rtfx": 158.62,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.09290283277490101,
     "cer": 0.056087877183695074,
     "rtfx": 178.79,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08625180897250362,
     "cer": 0.05099722922543122,
     "rtfx": 182.69,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1140282131661442,
     "cer": 0.07456188895037816,
     "rtfx": 61.9,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.026462395543175487,
     "cer": 0.010220334483674012,
     "rtfx": 158.88,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0720377703320134,
     "cer": 0.04142403388035998,
     "rtfx": 182.06,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08075253256150507,
     "cer": 0.046254461945533065,
     "rtfx": 184.7,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08973354231974921,
     "cer": 0.05615200147574248,
     "rtfx": 151.74,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.14567474048442908,
     "cer": 0.0834211995286237,
     "rtfx": 233.13,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09383632596685083,
     "cer": 0.04697861053490666,
     "rtfx": 163.56,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07207520891364902,
     "cer": 0.04068224050968941,
     "rtfx": 159.24,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.16082851050868108,
     "cer": 0.10092641609317099,
     "rtfx": 180.73,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.12141823444283648,
     "cer": 0.07056738473827413,
     "rtfx": 182.77,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.16829937304075235,
     "cer": 0.11053311197196089,
     "rtfx": 151.8,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.32941176470588235,
     "cer": 0.2076536624697637,
     "rtfx": 225.63,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15219267955801105,
     "cer": 0.0892644608426565,
     "rtfx": 98.66,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 34.71,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06830949570553214,
     "cer": 0.036956911644448316,
     "done": 9,
     "total": 9,
     "ci": [
      0.06611,
      0.07057
     ]
    },
    "accented": {
     "wer": 0.16003948883891844,
     "cer": 0.11221284575714956,
     "done": 1,
     "total": 1,
     "ci": [
      0.14454,
      0.17717
     ]
    },
    "noisy": {
     "wer": 0.08843308045089532,
     "cer": 0.05486987930305589,
     "done": 5,
     "total": 5,
     "ci": [
      0.08278,
      0.09416
     ]
    },
    "telephony": {
     "wer": 0.0764076317177356,
     "cer": 0.04146668809099146,
     "done": 8,
     "total": 8,
     "ci": [
      0.07196,
      0.08103
     ]
    },
    "callcenter": {
     "wer": 0.1673709618616354,
     "cer": 0.10327121277091927,
     "done": 6,
     "total": 6,
     "ci": [
      0.15782,
      0.17712
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run 9 Stage A (SFT) step 6,000 of 12,000, before the decay; tag `step-6000` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit c28c548519), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.9933333333333333,
   "inserted_wpm": 358.62,
   "arena_wer": 0.10002544356187494,
   "arena_cer": 0.05934207095280268,
   "arena_ci": [
    0.09734,
    0.10285
   ],
   "rank_range": [
    23,
    26
   ],
   "rtfx": 155.4,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9933333333333333,
    "halluc_3plus": 0.7133333333333334,
    "halluc_3plus_ci": [
     0.65972,
     0.76155
    ],
    "inserted_wpm": 358.62376624100824,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017802363590646214,
      "wer_uncapped": 0.017802363590646214,
      "cer": 0.008211225091653463,
      "av_wer": null,
      "strict_wer": 0.020668845863716367,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002413879808901182,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04523090685452309,
      "wer_uncapped": 0.04523090685452309,
      "cer": 0.024186855842591354,
      "av_wer": null,
      "strict_wer": 0.048920943754892095,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004920049200492005,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05784718817844387,
      "wer_uncapped": 0.05784718817844387,
      "cer": 0.0371614222092429,
      "av_wer": null,
      "strict_wer": 0.062399327684011484,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024931717907416485,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09612303748798462,
      "wer_uncapped": 0.09964754886254405,
      "cer": 0.05736370100231657,
      "av_wer": null,
      "strict_wer": 0.10028836911246396,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014845669123144292,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06691748393642205,
      "wer_uncapped": 0.06691748393642205,
      "cer": 0.04243776793747685,
      "av_wer": null,
      "strict_wer": 0.07118701386540413,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015767669935745687,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08322016405019284,
      "wer_uncapped": 0.08365473409745233,
      "cer": 0.05505279034690799,
      "av_wer": null,
      "strict_wer": 0.08800043457004726,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0020060180541624875,
      "insertions": 0.022054429898419253,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08178305483763658,
      "wer_uncapped": 0.08178305483763658,
      "cer": 0.0453373872352139,
      "av_wer": null,
      "strict_wer": 0.09107193121625426,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019908390695770106,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.039751968301343074,
      "wer_uncapped": 0.039751968301343074,
      "cer": 0.02330158624255667,
      "av_wer": null,
      "strict_wer": 0.04422888900324191,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019245613132300724,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07109048723897912,
      "wer_uncapped": 0.07183294663573085,
      "cer": 0.04399615754082613,
      "av_wer": null,
      "strict_wer": 0.08315545243619489,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015591647331786543,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1408983710853946,
      "wer_uncapped": 0.15466461909724127,
      "cer": 0.10481478217443671,
      "av_wer": null,
      "strict_wer": 0.14621839521746285,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.004020100502512563,
      "insertions": 0.03773377941095815,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11433805700738187,
      "wer_uncapped": 0.11552346570397112,
      "cer": 0.08281834039372041,
      "av_wer": null,
      "strict_wer": 0.11767875424322431,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020044183415054692,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.016871464794226642,
      "wer_uncapped": 0.016871464794226642,
      "cer": 0.01060889251586069,
      "av_wer": null,
      "strict_wer": 0.017456602301540863,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006729081334113517,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05314846909300982,
      "wer_uncapped": 0.0560369728480647,
      "cer": 0.03269742479592297,
      "av_wer": null,
      "strict_wer": 0.08203350664355864,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019064124783362217,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.027332869080779944,
      "wer_uncapped": 0.027332869080779944,
      "cer": 0.014903612506074842,
      "av_wer": null,
      "strict_wer": 0.030118384401114206,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00383008356545961,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08818154127322571,
      "wer_uncapped": 0.08818154127322571,
      "cer": 0.057847305959256204,
      "av_wer": null,
      "strict_wer": 0.09290283277490101,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026804751751446847,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08263386396526773,
      "wer_uncapped": 0.08263386396526773,
      "cer": 0.05201638217093659,
      "av_wer": null,
      "strict_wer": 0.08625180897250362,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019826338639652677,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10697492163009405,
      "wer_uncapped": 0.10834639498432602,
      "cer": 0.07749226422709539,
      "av_wer": null,
      "strict_wer": 0.11265673981191222,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020768025078369907,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.023676880222841225,
      "wer_uncapped": 0.023676880222841225,
      "cer": 0.011056212538473999,
      "av_wer": null,
      "strict_wer": 0.026462395543175487,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06685957965275663,
      "wer_uncapped": 0.06685957965275663,
      "cer": 0.04248905248461001,
      "av_wer": null,
      "strict_wer": 0.0720377703320134,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02254035942735303,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07655571635311144,
      "wer_uncapped": 0.07655571635311144,
      "cer": 0.047024005261427165,
      "av_wer": null,
      "strict_wer": 0.08075253256150507,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01678726483357453,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.08424764890282131,
      "wer_uncapped": 0.08424764890282131,
      "cer": 0.05776043768778869,
      "av_wer": null,
      "strict_wer": 0.08973354231974921,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019592476489028215,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.1408304498269896,
      "wer_uncapped": 0.14325259515570934,
      "cer": 0.09022389714032365,
      "av_wer": null,
      "strict_wer": 0.14325259515570934,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01764705882352941,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.0832182320441989,
      "wer_uncapped": 0.0832182320441989,
      "cer": 0.04656006732589943,
      "av_wer": null,
      "strict_wer": 0.09383632596685083,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020113950276243093,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.0684192200557103,
      "wer_uncapped": 0.06928969359331476,
      "cer": 0.0451158269884983,
      "av_wer": null,
      "strict_wer": 0.07120473537604456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008878830083565459,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.15702101736216875,
      "wer_uncapped": 0.15702101736216875,
      "cer": 0.10671447610585771,
      "av_wer": null,
      "strict_wer": 0.16082851050868108,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.03274444106000609,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11736613603473227,
      "wer_uncapped": 0.11736613603473227,
      "cer": 0.07336103554452782,
      "av_wer": null,
      "strict_wer": 0.12141823444283648,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02170767004341534,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.16202978056426331,
      "wer_uncapped": 0.16418495297805644,
      "cer": 0.11637293152159289,
      "av_wer": null,
      "strict_wer": 0.16614420062695925,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031739811912225704,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.31003460207612454,
      "wer_uncapped": 0.3259515570934256,
      "cer": 0.22094140249759847,
      "av_wer": null,
      "strict_wer": 0.3134948096885813,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.050173010380622836,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.14217886740331492,
      "wer_uncapped": 0.1430421270718232,
      "cer": 0.09362507889753839,
      "av_wer": null,
      "strict_wer": 0.15132941988950277,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02382596685082873,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.056387193709074024,
      "cer": 0.0329652339213346,
      "wer_arith": 0.06219629494179683,
      "done": 9,
      "total": 9,
      "ci": [
       0.05284,
       0.05961
      ]
     },
     "accented": {
      "wer": 0.14089837108539457,
      "cer": 0.1048147821744367,
      "wer_arith": 0.1408983710853946,
      "done": 1,
      "total": 1,
      "ci": [
       0.11968,
       0.16404
      ]
     },
     "noisy": {
      "wer": 0.07539434115860154,
      "cer": 0.04918355778732276,
      "wer_arith": 0.08389225059134986,
      "done": 5,
      "total": 5,
      "ci": [
       0.06911,
       0.08225
      ]
     },
     "telephony": {
      "wer": 0.0567313040836568,
      "cer": 0.034171892961279,
      "wer_arith": 0.06817605511124444,
      "done": 8,
      "total": 8,
      "ci": [
       0.05238,
       0.06113
      ]
     },
     "callcenter": {
      "wer": 0.14424024863132834,
      "cer": 0.09733219070098126,
      "wer_arith": 0.15950827058271902,
      "done": 6,
      "total": 6,
      "ci": [
       0.13471,
       0.15387
      ]
     }
    },
    "arena": 0.07627177547067154,
    "arena_arith": 0.09262643265374287,
    "arena_cer": 0.04770314585045586,
    "arena_strict": 0.08224321614166268,
    "zero_shot": 0.0685788563889804,
    "arena_real": 0.060148281093476724,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 31,
    "boh_share": 0.9866666666666667,
    "arena_ci": [
     0.07213,
     0.08039
    ],
    "rank_set": [
     22,
     31
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run9-step-3000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/step-3000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.020668845863716367,
     "cer": 0.007660034930518643,
     "rtfx": 182.27,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04685228670468523,
     "cer": 0.02063408882483951,
     "rtfx": 173.84,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06464038097906016,
     "cer": 0.037714480558227896,
     "rtfx": 193.77,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.1025312399871836,
     "cer": 0.053192717755282705,
     "rtfx": 231.79,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.0718211024687183,
     "cer": 0.04250047786387496,
     "rtfx": 193.99,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08734857949915802,
     "cer": 0.053236078048383484,
     "rtfx": 171.29,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08951099055758847,
     "cer": 0.045193886573196916,
     "rtfx": 163.96,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04597849019708743,
     "cer": 0.025486278562406706,
     "rtfx": 203.59,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08770301624129931,
     "cer": 0.04669026135656503,
     "rtfx": 145.67,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15526792080293972,
     "cer": 0.10962259728082513,
     "rtfx": 120.29,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.1243601487149092,
     "cer": 0.0832864780870792,
     "rtfx": 142.68,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016286327286912424,
     "cer": 0.010443973743262797,
     "rtfx": 194.2,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.10571923743500866,
     "cer": 0.05507092467571873,
     "rtfx": 211.11,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.03046657381615599,
     "cer": 0.013638173612954605,
     "rtfx": 161.64,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.0909229363387146,
     "cer": 0.053123345685547906,
     "rtfx": 181.91,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08871201157742402,
     "cer": 0.05147150595342103,
     "rtfx": 182.33,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.11912225705329153,
     "cer": 0.07441431470208448,
     "rtfx": 153.14,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.0241991643454039,
     "cer": 0.008793469604459783,
     "rtfx": 162.11,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07158087115443192,
     "cer": 0.0407358390682901,
     "rtfx": 183.54,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0813314037626628,
     "cer": 0.04610469034722049,
     "rtfx": 185.17,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08757836990595612,
     "cer": 0.0541597491237779,
     "rtfx": 153.44,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.15294117647058825,
     "cer": 0.08770080009923711,
     "rtfx": 222.23,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09150552486187845,
     "cer": 0.0460944673037032,
     "rtfx": 166.71,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07190111420612813,
     "cer": 0.040383594372179456,
     "rtfx": 162.98,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.15519342065184283,
     "cer": 0.09499735309687665,
     "rtfx": 181.2,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1191027496382055,
     "cer": 0.07001822221112804,
     "rtfx": 185.24,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.17398119122257052,
     "cer": 0.11389042612064194,
     "rtfx": 152.04,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.32076124567474046,
     "cer": 0.21069279910686597,
     "rtfx": 232.25,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.146667817679558,
     "cer": 0.08435066480769884,
     "rtfx": 79.41,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 23.05,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06856165916649964,
     "cer": 0.03692314494147732,
     "done": 9,
     "total": 9,
     "ci": [
      0.06642,
      0.07088
     ]
    },
    "accented": {
     "wer": 0.15526792080293972,
     "cer": 0.10962259728082513,
     "done": 1,
     "total": 1,
     "ci": [
      0.14038,
      0.17251
     ]
    },
    "noisy": {
     "wer": 0.09071678550009907,
     "cer": 0.05518676360821745,
     "done": 5,
     "total": 5,
     "ci": [
      0.08532,
      0.09659
     ]
    },
    "telephony": {
     "wer": 0.07889275940285531,
     "cer": 0.04363798924570876,
     "done": 8,
     "total": 8,
     "ci": [
      0.07429,
      0.08346
     ]
    },
    "callcenter": {
     "wer": 0.16460125651217425,
     "cer": 0.10238884328589848,
     "done": 6,
     "total": 6,
     "ci": [
      0.155,
      0.17405
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run 9 Stage A (SFT) step 3,000 of 12,000, flat learning rate, before the decay; tag `step-3000` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit 4634e9ca16), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.9966666666666667,
   "inserted_wpm": 226.89,
   "arena_wer": 0.10015364815431836,
   "arena_cer": 0.05953828245440257,
   "arena_ci": [
    0.09748,
    0.1029
   ],
   "rank_range": [
    23,
    26
   ],
   "rtfx": 150.7,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9966666666666667,
    "halluc_3plus": 0.97,
    "halluc_3plus_ci": [
     0.94398,
     0.98414
    ],
    "inserted_wpm": 226.88897563151733,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017349761126477244,
      "wer_uncapped": 0.017349761126477244,
      "cer": 0.00803774850521008,
      "av_wer": null,
      "strict_wer": 0.020668845863716367,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002112144832788534,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04282679190428268,
      "wer_uncapped": 0.04282679190428268,
      "cer": 0.022834961852496317,
      "av_wer": null,
      "strict_wer": 0.046796377054679636,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004305043050430504,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05973807689614118,
      "wer_uncapped": 0.05980810981161146,
      "cer": 0.03811053515368329,
      "av_wer": null,
      "strict_wer": 0.06457034806358988,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0246515862455354,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09687066111289117,
      "wer_uncapped": 0.09836590836270426,
      "cer": 0.056285694626023536,
      "av_wer": null,
      "strict_wer": 0.10092918936238385,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013670831998291146,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.067974298275279,
      "wer_uncapped": 0.067974298275279,
      "cer": 0.04265829260977718,
      "av_wer": null,
      "strict_wer": 0.0718211024687183,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016909029421711193,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08202509642022923,
      "wer_uncapped": 0.08267695149111848,
      "cer": 0.054026654798110925,
      "av_wer": null,
      "strict_wer": 0.08669672442826878,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.020913683524363083,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08060595204585583,
      "wer_uncapped": 0.08060595204585583,
      "cer": 0.04506837831412735,
      "av_wer": null,
      "strict_wer": 0.08951099055758847,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01916630415312572,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.041527298924509855,
      "wer_uncapped": 0.041527298924509855,
      "cer": 0.02490284055843744,
      "av_wer": null,
      "strict_wer": 0.04597849019708743,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019580095713477075,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07378190255220418,
      "wer_uncapped": 0.07470997679814385,
      "cer": 0.0457492795389049,
      "av_wer": null,
      "strict_wer": 0.08677494199535962,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014663573085846867,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13760763450885757,
      "wer_uncapped": 0.1499478966708715,
      "cer": 0.10284656737463647,
      "av_wer": null,
      "strict_wer": 0.14281796742170788,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03504634454011956,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11988792499595884,
      "wer_uncapped": 0.12069615819817878,
      "cer": 0.0866683279342138,
      "av_wer": null,
      "strict_wer": 0.12355191551268926,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019343714639797404,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01589623561536961,
      "wer_uncapped": 0.01589623561536961,
      "cer": 0.010424618948587676,
      "av_wer": null,
      "strict_wer": 0.016286327286912424,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006143943826799298,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.0737531292124013,
      "wer_uncapped": 0.07818216830348546,
      "cer": 0.05109818247418031,
      "av_wer": null,
      "strict_wer": 0.1009050645099172,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03774311573271712,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02837743732590529,
      "wer_uncapped": 0.02837743732590529,
      "cer": 0.014660618823910579,
      "av_wer": null,
      "strict_wer": 0.03046657381615599,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004874651810584958,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08650624428876028,
      "wer_uncapped": 0.08650624428876028,
      "cer": 0.05476930887859364,
      "av_wer": null,
      "strict_wer": 0.0909229363387146,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024824855315260432,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08480463096960926,
      "wer_uncapped": 0.08480463096960926,
      "cer": 0.05216585453349676,
      "av_wer": null,
      "strict_wer": 0.08871201157742402,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02011577424023155,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.11108934169278997,
      "wer_uncapped": 0.11383228840125392,
      "cer": 0.07672989820171308,
      "av_wer": null,
      "strict_wer": 0.11637931034482758,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02586206896551724,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02176183844011142,
      "wer_uncapped": 0.02176183844011142,
      "cer": 0.009314757816296777,
      "av_wer": null,
      "strict_wer": 0.0241991643454039,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06792567773378008,
      "wer_uncapped": 0.06792567773378008,
      "cer": 0.04201307355461065,
      "av_wer": null,
      "strict_wer": 0.07158087115443192,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021778860798050564,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07742402315484805,
      "wer_uncapped": 0.07742402315484805,
      "cer": 0.04645601028369854,
      "av_wer": null,
      "strict_wer": 0.0813314037626628,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018523878437047756,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.08189655172413793,
      "wer_uncapped": 0.08268025078369906,
      "cer": 0.055428494551325175,
      "av_wer": null,
      "strict_wer": 0.08679467084639499,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019984326018808778,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.14809688581314878,
      "wer_uncapped": 0.15017301038062283,
      "cer": 0.0934013153033326,
      "av_wer": null,
      "strict_wer": 0.1508650519031142,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021453287197231833,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08071477900552486,
      "wer_uncapped": 0.08071477900552486,
      "cer": 0.04563433620871029,
      "av_wer": null,
      "strict_wer": 0.09150552486187845,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01985497237569061,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06946378830083566,
      "wer_uncapped": 0.07016016713091922,
      "cer": 0.044265349100923376,
      "av_wer": null,
      "strict_wer": 0.07120473537604456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0100974930362117,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.15047212915016753,
      "wer_uncapped": 0.1510813280536095,
      "cer": 0.10001903915719998,
      "av_wer": null,
      "strict_wer": 0.15458422174840086,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0325921413341456,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11490593342981187,
      "wer_uncapped": 0.11490593342981187,
      "cer": 0.07288272398433529,
      "av_wer": null,
      "strict_wer": 0.1191027496382055,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02243125904486252,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.1634012539184953,
      "wer_uncapped": 0.1688871473354232,
      "cer": 0.11659715682317592,
      "av_wer": null,
      "strict_wer": 0.16849529780564262,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03742163009404389,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.3065743944636678,
      "wer_uncapped": 0.3179930795847751,
      "cer": 0.2248577551171211,
      "av_wer": null,
      "strict_wer": 0.30934256055363324,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04325259515570934,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13743093922651933,
      "wer_uncapped": 0.13743093922651933,
      "cer": 0.08840732169156322,
      "av_wer": null,
      "strict_wer": 0.146667817679558,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.023998618784530388,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05655725162274933,
      "cer": 0.03301409361796245,
      "wer_arith": 0.0625222043619856,
      "done": 9,
      "total": 9,
      "ci": [
       0.05284,
       0.0599
      ]
     },
     "accented": {
      "wer": 0.13760763450885757,
      "cer": 0.10284656737463647,
      "wer_arith": 0.13760763450885757,
      "done": 1,
      "total": 1,
      "ci": [
       0.11643,
       0.15975
      ]
     },
     "noisy": {
      "wer": 0.07737089259781181,
      "cer": 0.0488630065607646,
      "wer_arith": 0.08613311585460473,
      "done": 5,
      "total": 5,
      "ci": [
       0.07066,
       0.08482
      ]
     },
     "telephony": {
      "wer": 0.05818426873902026,
      "cer": 0.03506954839277674,
      "wer_arith": 0.07093364008741526,
      "done": 8,
      "total": 8,
      "ci": [
       0.05381,
       0.06246
      ]
     },
     "callcenter": {
      "wer": 0.14220192015433114,
      "cer": 0.09527432314102875,
      "wer_arith": 0.15704140641491626,
      "done": 6,
      "total": 6,
      "ci": [
       0.13297,
       0.15136
      ]
     }
    },
    "arena": 0.07674934110504152,
    "arena_arith": 0.09297750609335313,
    "arena_cer": 0.047684821427560524,
    "arena_strict": 0.08238717199021584,
    "zero_shot": 0.07126591728577875,
    "arena_real": 0.0612510682658535,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 32,
    "boh_share": 0.9866666666666667,
    "arena_ci": [
     0.07253,
     0.08077
    ],
    "rank_set": [
     24,
     31
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run9-step-9000",
   "hf_id": "https://huggingface.co/Arabic-STT/qwen3-asr-1.7b-ar-run9/tree/step-9000",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.020920291677143574,
     "cer": 0.007821398739463893,
     "rtfx": 182.71,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.05003913675500391,
     "cer": 0.022337219965937377,
     "rtfx": 172.46,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06408011765529799,
     "cer": 0.03686203831119013,
     "rtfx": 192.56,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.1008223859873972,
     "cer": 0.05130672414456718,
     "rtfx": 231.82,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07266655393980385,
     "cer": 0.042529884871564894,
     "rtfx": 193.3,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.08838068336139931,
     "cer": 0.05347006042849295,
     "rtfx": 171.79,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09099516364287726,
     "cer": 0.04548187444739169,
     "rtfx": 163.14,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04641589049554881,
     "cer": 0.02539441956596624,
     "rtfx": 203.09,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.09280742459396751,
     "cer": 0.050812850031113875,
     "rtfx": 141.89,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15850381176986783,
     "cer": 0.11291608063759963,
     "rtfx": 167.55,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.1229053289509133,
     "cer": 0.08129300033735777,
     "rtfx": 185.34,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.022625316949483127,
     "cer": 0.015665960614894198,
     "rtfx": 192.88,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.17850953206239167,
     "cer": 0.11958583023590988,
     "rtfx": 193.77,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.030292479108635098,
     "cer": 0.013372710379612424,
     "rtfx": 161.02,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.09214133414559854,
     "cer": 0.05471148755955532,
     "rtfx": 183.09,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09261939218523878,
     "cer": 0.05314395546791144,
     "rtfx": 182.41,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.11892633228840126,
     "cer": 0.07544733444014019,
     "rtfx": 155.25,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.026288300835654595,
     "cer": 0.009689408016989648,
     "rtfx": 162.22,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07249466950959488,
     "cer": 0.042085759661196404,
     "rtfx": 181.22,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08451519536903039,
     "cer": 0.048376226254961185,
     "rtfx": 183.52,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.08738244514106583,
     "cer": 0.05316362294779561,
     "rtfx": 152.97,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.14844290657439446,
     "cer": 0.0824288283818148,
     "rtfx": 220.66,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09444060773480663,
     "cer": 0.047437684904954605,
     "rtfx": 165.04,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.0745125348189415,
     "cer": 0.040914520838863815,
     "rtfx": 162.08,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.15397502284495887,
     "cer": 0.09653255690841715,
     "rtfx": 182.11,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.12937771345875543,
     "cer": 0.08863982426799132,
     "rtfx": 117.63,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.1710423197492163,
     "cer": 0.11068068622025456,
     "rtfx": 152.58,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.2996539792387543,
     "cer": 0.19580723190473237,
     "rtfx": 230.37,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.1517610497237569,
     "cer": 0.08710511102798653,
     "rtfx": 160.09,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 21.82,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06968084978982661,
     "cer": 0.03733516338952091,
     "done": 9,
     "total": 9,
     "ci": [
      0.06708,
      0.07279
     ]
    },
    "accented": {
     "wer": 0.15850381176986783,
     "cer": 0.11291608063759963,
     "done": 1,
     "total": 1,
     "ci": [
      0.14351,
      0.17527
     ]
    },
    "noisy": {
     "wer": 0.0913769733357574,
     "cer": 0.05559369763691543,
     "done": 5,
     "total": 5,
     "ci": [
      0.08593,
      0.09757
     ]
    },
    "telephony": {
     "wer": 0.0893373717720527,
     "cer": 0.05230416512731454,
     "done": 8,
     "total": 8,
     "ci": [
      0.08417,
      0.09517
     ]
    },
    "callcenter": {
     "wer": 0.16338710330573056,
     "cer": 0.10327998852804095,
     "done": 6,
     "total": 6,
     "ci": [
      0.15351,
      0.17319
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech",
    "edacc",
    "earnings22"
   ],
   "notes": "Arabic-STT run 9 Stage A (SFT) step 9,000 of 12,000, before the decay; tag `step-9000` of Arabic-STT/qwen3-asr-1.7b-ar-run9 (commit c52fd76c9e), weights gated on the Hub. Descends from run 8 and run 6b, with the same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech, EdAcc's dev split and the whole Earnings-22 corpus (every earnings22 test row here included)",
   "training_data": "",
   "hallucination_rate": 0.9933333333333333,
   "inserted_wpm": 594.1,
   "arena_wer": 0.10288304090779754,
   "arena_cer": 0.0620586004362046,
   "arena_ci": [
    0.10008,
    0.10576
   ],
   "rank_range": [
    26,
    29
   ],
   "rtfx": 156.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9933333333333333,
    "halluc_3plus": 0.9633333333333334,
    "halluc_3plus_ci": [
     0.93555,
     0.9794
    ],
    "inserted_wpm": 594.1002620866559,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.017349761126477244,
      "wer_uncapped": 0.017349761126477244,
      "cer": 0.008280615726230817,
      "av_wer": null,
      "strict_wer": 0.020920291677143574,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002263012320844858,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04629319020462932,
      "wer_uncapped": 0.04634909985463491,
      "cer": 0.02485611029313345,
      "av_wer": null,
      "strict_wer": 0.04992731745499273,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0057027843005702785,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05931787940331956,
      "wer_uncapped": 0.05931787940331956,
      "cer": 0.036810980506680295,
      "av_wer": null,
      "strict_wer": 0.06408011765529799,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025772112893059737,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09377336323827833,
      "wer_uncapped": 0.09633664423795792,
      "cer": 0.05383150989701599,
      "av_wer": null,
      "strict_wer": 0.09804549823774432,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014632062373170992,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06843929658437606,
      "wer_uncapped": 0.06843929658437606,
      "cer": 0.042737681491805304,
      "av_wer": null,
      "strict_wer": 0.07266655393980385,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01703584714237403,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.08311152153837796,
      "wer_uncapped": 0.08381769786517464,
      "cer": 0.054150285587122614,
      "av_wer": null,
      "strict_wer": 0.08767450703460264,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.004012036108324975,
      "insertions": 0.02335814004019773,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08114332505949487,
      "wer_uncapped": 0.08124568182399754,
      "cer": 0.04526231497816648,
      "av_wer": null,
      "strict_wer": 0.09089280687837457,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.020778423194042835,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.04204188751093501,
      "wer_uncapped": 0.04204188751093501,
      "cer": 0.02463040492830495,
      "av_wer": null,
      "strict_wer": 0.04641589049554881,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02060927288632738,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07211136890951277,
      "wer_uncapped": 0.07981438515081206,
      "cer": 0.04526897214217099,
      "av_wer": null,
      "strict_wer": 0.0851044083526682,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0010090817356205853,
      "insertions": 0.023294663573085846,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1407886798661767,
      "wer_uncapped": 0.153841934953107,
      "cer": 0.10594577127581446,
      "av_wer": null,
      "strict_wer": 0.14545055668293752,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.004020100502512563,
      "insertions": 0.04064059672023255,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11730157874885501,
      "wer_uncapped": 0.11897192736677623,
      "cer": 0.08474956391726887,
      "av_wer": null,
      "strict_wer": 0.12123498033299208,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.003,
      "insertions": 0.024139231639635755,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.0217476106885118,
      "wer_uncapped": 0.0217476106885118,
      "cer": 0.015557954036907363,
      "av_wer": null,
      "strict_wer": 0.022625316949483127,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010434952213770237,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.10745233968804159,
      "wer_uncapped": 0.1517427305988831,
      "cer": 0.09038019212555812,
      "av_wer": null,
      "strict_wer": 0.13325630656653187,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09974966300789524,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.026114206128133706,
      "wer_uncapped": 0.026114206128133706,
      "cer": 0.01433662724769156,
      "av_wer": null,
      "strict_wer": 0.030292479108635098,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00383008356545961,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08757234236978373,
      "wer_uncapped": 0.08757234236978373,
      "cer": 0.05638763724059148,
      "av_wer": null,
      "strict_wer": 0.09214133414559854,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026347852573865366,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08856729377713458,
      "wer_uncapped": 0.08856729377713458,
      "cer": 0.054079100774266836,
      "av_wer": null,
      "strict_wer": 0.09261939218523878,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02243125904486252,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.10932601880877743,
      "wer_uncapped": 0.11285266457680251,
      "cer": 0.0768644333826629,
      "av_wer": null,
      "strict_wer": 0.11539968652037617,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027037617554858933,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.022458217270194987,
      "wer_uncapped": 0.022458217270194987,
      "cer": 0.010327231491981208,
      "av_wer": null,
      "strict_wer": 0.026288300835654595,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06792567773378008,
      "wer_uncapped": 0.06792567773378008,
      "cer": 0.04286983562860951,
      "av_wer": null,
      "strict_wer": 0.07249466950959488,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02193116052391106,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.08017366136034733,
      "wer_uncapped": 0.08017366136034733,
      "cer": 0.04899704044722131,
      "av_wer": null,
      "strict_wer": 0.08451519536903039,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019102749638205498,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.07934952978056427,
      "wer_uncapped": 0.08052507836990595,
      "cer": 0.0541728328624602,
      "av_wer": null,
      "strict_wer": 0.08620689655172414,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020963949843260186,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.1422145328719723,
      "wer_uncapped": 0.14602076124567473,
      "cer": 0.08785930687947979,
      "av_wer": null,
      "strict_wer": 0.14463667820069204,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02041522491349481,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08364986187845304,
      "wer_uncapped": 0.08364986187845304,
      "cer": 0.04698085419734904,
      "av_wer": null,
      "strict_wer": 0.09444060773480663,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02175414364640884,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.07137883008356546,
      "wer_uncapped": 0.07172701949860724,
      "cer": 0.04527782277660781,
      "av_wer": null,
      "strict_wer": 0.07416434540389973,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01149025069637883,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.15016752969844654,
      "wer_uncapped": 0.15016752969844654,
      "cer": 0.1012248524465317,
      "av_wer": null,
      "strict_wer": 0.15397502284495887,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03381053914102954,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.12547033285094067,
      "wer_uncapped": 0.1256150506512301,
      "cer": 0.08427251801141969,
      "av_wer": null,
      "strict_wer": 0.129232995658466,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.023878437047756874,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.16026645768025077,
      "wer_uncapped": 0.16673197492163008,
      "cer": 0.11386160814386295,
      "av_wer": null,
      "strict_wer": 0.164576802507837,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.040556426332288405,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2799307958477509,
      "wer_uncapped": 0.2975778546712803,
      "cer": 0.20734500849774626,
      "av_wer": null,
      "strict_wer": 0.2820069204152249,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04602076124567474,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.14079765193370167,
      "wer_uncapped": 0.14105662983425415,
      "cer": 0.09099516095097833,
      "av_wer": null,
      "strict_wer": 0.1515020718232044,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.028142265193370167,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05689957547799815,
      "cer": 0.033095583677541444,
      "wer_arith": 0.06262017706393345,
      "done": 9,
      "total": 9,
      "ci": [
       0.05321,
       0.06025
      ]
     },
     "accented": {
      "wer": 0.1407886798661767,
      "cer": 0.10594577127581448,
      "wer_arith": 0.1407886798661767,
      "done": 1,
      "total": 1,
      "ci": [
       0.12012,
       0.16206
      ]
     },
     "noisy": {
      "wer": 0.07636755948713324,
      "cer": 0.049080010948570264,
      "wer_arith": 0.0857762879665369,
      "done": 5,
      "total": 5,
      "ci": [
       0.0702,
       0.08299
      ]
     },
     "telephony": {
      "wer": 0.06366162880167367,
      "cer": 0.040200151882921,
      "wer_arith": 0.07562142890898318,
      "done": 8,
      "total": 8,
      "ci": [
       0.05852,
       0.06866
      ]
     },
     "callcenter": {
      "wer": 0.14284417666912336,
      "cer": 0.09693738701979591,
      "wer_arith": 0.15466859968244268,
      "done": 6,
      "total": 6,
      "ci": [
       0.13266,
       0.15293
      ]
     }
    },
    "arena": 0.07849996211827515,
    "arena_arith": 0.09363819559373689,
    "arena_cer": 0.04951321994604728,
    "arena_strict": 0.08455100276029746,
    "zero_shot": 0.07758731289813002,
    "arena_real": 0.0640859146880427,
    "exposure": 0.7403,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 34,
    "boh_share": 0.97,
    "arena_ci": [
     0.07397,
     0.08281
    ],
    "rank_set": [
     26,
     33
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run5base",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-run5base",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.015036459642946944,
     "cer": 0.005030754043587212,
     "rtfx": 181.33,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03634127250363413,
     "cer": 0.015710293025896327,
     "rtfx": 174.51,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.05924784648784929,
     "cer": 0.03469439945443696,
     "rtfx": 196.74,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.08864680123891915,
     "cer": 0.04638004695739194,
     "rtfx": 147.65,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06197159283057153,
     "cer": 0.0368616841393304,
     "rtfx": 191.43,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.1477538160682275,
     "cer": 0.10277930374982197,
     "rtfx": 176.1,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08945981217533713,
     "cer": 0.04553745105469243,
     "rtfx": 166.2,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04237637009211136,
     "cer": 0.022537604776667816,
     "rtfx": 205.5,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08167053364269142,
     "cer": 0.04484287492221531,
     "rtfx": 145.57,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.17084407393188175,
     "cer": 0.1240506329113924,
     "rtfx": 168.12,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.14074034161323348,
     "cer": 0.09849824676187653,
     "rtfx": 132.96,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.020284766920226252,
     "cer": 0.012750875574103978,
     "rtfx": 197.49,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.11130367802811476,
     "cer": 0.05442615489645756,
     "rtfx": 202.71,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.01932451253481894,
     "cer": 0.007598885054419963,
     "rtfx": 160.82,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08452634785257386,
     "cer": 0.05002646903123346,
     "rtfx": 183.2,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.0703328509406657,
     "cer": 0.04096253213848881,
     "rtfx": 181.74,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.18906739811912227,
     "cer": 0.13270614277808523,
     "rtfx": 160.61,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.019498607242339833,
     "cer": 0.006702946641890098,
     "rtfx": 161.05,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.06487968321657021,
     "cer": 0.03745367919534145,
     "rtfx": 180.46,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.06685962373371925,
     "cer": 0.03806694790444572,
     "rtfx": 180.37,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.16163793103448276,
     "cer": 0.11647297546578123,
     "rtfx": 159.03,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.12352941176470589,
     "cer": 0.06990014265335236,
     "rtfx": 222.53,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09046961325966851,
     "cer": 0.04646852790152005,
     "rtfx": 165.68,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.05901810584958217,
     "cer": 0.03168967348022299,
     "rtfx": 161.08,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14042034724337496,
     "cer": 0.0874801482265749,
     "rtfx": 183.7,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.0930535455861071,
     "cer": 0.054766481116297644,
     "rtfx": 184.04,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.24255485893416928,
     "cer": 0.16686958125807047,
     "rtfx": 157.45,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.29792387543252596,
     "cer": 0.19611734788811017,
     "rtfx": 227.92,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.1409703038674033,
     "cer": 0.08239534804638352,
     "rtfx": 98.64,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 17.73,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06916716718692094,
     "cer": 0.03937493468044893,
     "done": 9,
     "total": 9,
     "ci": [
      0.06686,
      0.07141
     ]
    },
    "accented": {
     "wer": 0.17084407393188175,
     "cer": 0.1240506329113924,
     "done": 1,
     "total": 1,
     "ci": [
      0.15528,
      0.18862
     ]
    },
    "noisy": {
     "wer": 0.10079829021208284,
     "cer": 0.0659584551528208,
     "done": 5,
     "total": 5,
     "ci": [
      0.09159,
      0.11294
     ]
    },
    "telephony": {
     "wer": 0.08230791439997844,
     "cer": 0.047780281279111554,
     "done": 8,
     "total": 8,
     "ci": [
      0.07726,
      0.08753
     ]
    },
    "callcenter": {
     "wer": 0.1623235061521938,
     "cer": 0.10321976333594328,
     "done": 6,
     "total": 6,
     "ci": [
      0.15273,
      0.17232
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech"
   ],
   "notes": "Arabic-STT run5base: run 5's data and targets trained from the base model (40,000 steps); same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 649.68,
   "arena_wer": 0.1029125253680676,
   "arena_cer": 0.0638525370950372,
   "arena_ci": [
    0.10011,
    0.10592
   ],
   "rank_range": [
    26,
    29
   ],
   "rtfx": 146.7,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.99,
    "halluc_3plus_ci": [
     0.97102,
     0.99659
    ],
    "inserted_wpm": 649.6849383817544,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.012320844857933116,
      "wer_uncapped": 0.012320844857933116,
      "cer": 0.0052042975933014905,
      "av_wer": null,
      "strict_wer": 0.015036459642946944,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0014583857178777973,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.03309851280330985,
      "wer_uncapped": 0.03309851280330985,
      "cer": 0.017427385892116183,
      "av_wer": null,
      "strict_wer": 0.03634127250363413,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004081404450408141,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.054065410743049234,
      "wer_uncapped": 0.054065410743049234,
      "cer": 0.03451850770241659,
      "av_wer": null,
      "strict_wer": 0.05924784648784929,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02458155333006513,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08309302573961337,
      "wer_uncapped": 0.08490868311438642,
      "cer": 0.04873964999197229,
      "av_wer": null,
      "strict_wer": 0.0868311438641461,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011961977998504753,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.059097057828880625,
      "wer_uncapped": 0.059097057828880625,
      "cer": 0.037489194291057286,
      "av_wer": null,
      "strict_wer": 0.06197159283057153,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014710855596888738,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.1394426639143897,
      "wer_uncapped": 0.14346243685154,
      "cer": 0.10004203446826397,
      "av_wer": null,
      "strict_wer": 0.14373404313107718,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.039328589276984086,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08045241689910182,
      "wer_uncapped": 0.08045241689910182,
      "cer": 0.04510591444265105,
      "av_wer": null,
      "strict_wer": 0.08945981217533713,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018424217610481332,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03869706169917151,
      "wer_uncapped": 0.03869706169917151,
      "cer": 0.022022806754179662,
      "av_wer": null,
      "strict_wer": 0.04237637009211136,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017238717645242627,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06960556844547564,
      "wer_uncapped": 0.0699767981438515,
      "cer": 0.044020172910662826,
      "av_wer": null,
      "strict_wer": 0.08129930394431555,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01382830626450116,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.15236110349366533,
      "wer_uncapped": 0.1656885866286404,
      "cer": 0.11552245821215593,
      "av_wer": null,
      "strict_wer": 0.15751659079690672,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.033675204299895796,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.1163855811196724,
      "wer_uncapped": 0.13766905544479768,
      "cer": 0.08441315723897333,
      "av_wer": null,
      "strict_wer": 0.1194568672881082,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03960342690877741,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01979715233079774,
      "wer_uncapped": 0.01979715233079774,
      "cer": 0.012635901755863849,
      "av_wer": null,
      "strict_wer": 0.020284766920226252,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0076067875950848445,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.07317542846139033,
      "wer_uncapped": 0.07972270363951472,
      "cer": 0.04785098994272313,
      "av_wer": null,
      "strict_wer": 0.10437126901598305,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.036587714230695165,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.017235376044568245,
      "wer_uncapped": 0.017235376044568245,
      "cer": 0.008342783087639721,
      "av_wer": null,
      "strict_wer": 0.01932451253481894,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001915041782729805,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.07873895826987512,
      "wer_uncapped": 0.07873895826987512,
      "cer": 0.05134226058259821,
      "av_wer": null,
      "strict_wer": 0.08452634785257386,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026195552848004875,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06700434153400868,
      "wer_uncapped": 0.06700434153400868,
      "cer": 0.04179247257182147,
      "av_wer": null,
      "strict_wer": 0.0703328509406657,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01635311143270622,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.1733934169278997,
      "wer_uncapped": 0.1841692789968652,
      "cer": 0.13067850576259024,
      "av_wer": null,
      "strict_wer": 0.17829153605015674,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.054075235109717866,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.017061281337047353,
      "wer_uncapped": 0.017061281337047353,
      "cer": 0.007127814676818403,
      "av_wer": null,
      "strict_wer": 0.019498607242339833,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0020891364902506965,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.05970149253731343,
      "wer_uncapped": 0.05970149253731343,
      "cer": 0.03839563368661547,
      "av_wer": null,
      "strict_wer": 0.06487968321657021,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019951264087724643,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06324167872648336,
      "wer_uncapped": 0.06324167872648336,
      "cer": 0.03853397506800992,
      "av_wer": null,
      "strict_wer": 0.06685962373371925,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014905933429811866,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.1455721003134796,
      "wer_uncapped": 0.156935736677116,
      "cer": 0.10924256693125252,
      "av_wer": null,
      "strict_wer": 0.15027429467084638,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.046434169278996865,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.11868512110726644,
      "wer_uncapped": 0.11972318339100346,
      "cer": 0.07507574078179266,
      "av_wer": null,
      "strict_wer": 0.12249134948096886,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013494809688581315,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.0799378453038674,
      "wer_uncapped": 0.0799378453038674,
      "cer": 0.04611824111087734,
      "av_wer": null,
      "strict_wer": 0.09046961325966851,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018646408839779006,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.05692896935933148,
      "wer_uncapped": 0.05692896935933148,
      "cer": 0.03482909444354447,
      "av_wer": null,
      "strict_wer": 0.05901810584958217,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007834261838440111,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.13448065793481573,
      "wer_uncapped": 0.13448065793481573,
      "cer": 0.09240337627721013,
      "av_wer": null,
      "strict_wer": 0.14042034724337496,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.034724337496192505,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.09030390738060781,
      "wer_uncapped": 0.09030390738060781,
      "cer": 0.057367492750590415,
      "av_wer": null,
      "strict_wer": 0.0930535455861071,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01678726483357453,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.2249216300940439,
      "wer_uncapped": 0.23550156739811912,
      "cer": 0.16534373738732677,
      "av_wer": null,
      "strict_wer": 0.23177899686520376,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.05799373040752351,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2792387543252595,
      "wer_uncapped": 0.2958477508650519,
      "cer": 0.20653218059558118,
      "av_wer": null,
      "strict_wer": 0.28131487889273354,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04775086505190312,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13199240331491713,
      "wer_uncapped": 0.13199240331491713,
      "cer": 0.08575636440143068,
      "av_wer": null,
      "strict_wer": 0.1409703038674033,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0231353591160221,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.052949484820850844,
      "cer": 0.03081118263178877,
      "wer_arith": 0.06331917365899166,
      "done": 9,
      "total": 9,
      "ci": [
       0.04931,
       0.05602
      ]
     },
     "accented": {
      "wer": 0.15236110349366533,
      "cer": 0.11552245821215595,
      "wer_arith": 0.15236110349366533,
      "done": 1,
      "total": 1,
      "ci": [
       0.1306,
       0.17681
      ]
     },
     "noisy": {
      "wer": 0.07124083993971896,
      "cer": 0.04561415791749129,
      "wer_arith": 0.09055153477920483,
      "done": 5,
      "total": 5,
      "ci": [
       0.06442,
       0.07782
      ]
     },
     "telephony": {
      "wer": 0.05804627908565871,
      "cer": 0.0353014817243581,
      "wer_arith": 0.0721465125147057,
      "done": 8,
      "total": 8,
      "ci": [
       0.05338,
       0.06219
      ]
     },
     "callcenter": {
      "wer": 0.13377529683255893,
      "cer": 0.09025881394096756,
      "wer_arith": 0.15297772040149596,
      "done": 6,
      "total": 6,
      "ci": [
       0.12339,
       0.14386
      ]
     }
    },
    "arena": 0.07339872033097286,
    "arena_arith": 0.09401544857835643,
    "arena_cer": 0.04584423969353986,
    "arena_strict": 0.07913383076594933,
    "zero_shot": 0.06826914898162406,
    "arena_real": 0.05964546209999774,
    "exposure": 0.5558,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 24,
    "boh_share": 0.9866666666666667,
    "arena_ci": [
     0.06893,
     0.07729
    ],
    "rank_set": [
     9,
     29
    ]
   }
  },
  {
   "model": "cohere-transcribe-arabic-07-2026",
   "hf_id": "CohereLabs/cohere-transcribe-arabic-07-2026",
   "params_b": 2.07,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01362836308775459,
     "cer": 0.004261902953906903,
     "rtfx": 359.06,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.023537962652353795,
     "cer": 0.00877767588104284,
     "rtfx": 361.83,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.0669514671895791,
     "cer": 0.03798239097872548,
     "rtfx": 365.54,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.06995621061625547,
     "cer": 0.03223509487702552,
     "rtfx": 391.66,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.053432532972607374,
     "cer": 0.031913955095499255,
     "rtfx": 377.9,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.10201531859416589,
     "cer": 0.06934016968809131,
     "rtfx": 368.39,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08618439571125157,
     "cer": 0.04383983832259694,
     "rtfx": 369.1,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03249626923274842,
     "cer": 0.016713744402342405,
     "rtfx": 413.8,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.06793503480278422,
     "cer": 0.038308960796515246,
     "rtfx": 323.88,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.18735260242417595,
     "cer": 0.13754102203469293,
     "rtfx": 300.65,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.1010291502774934,
     "cer": 0.06881076273525594,
     "rtfx": 390.65,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.015408621025941096,
     "cer": 0.009688987689532956,
     "rtfx": 368.2,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08338147506258425,
     "cer": 0.031176515208981265,
     "rtfx": 339.27,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.0201949860724234,
     "cer": 0.007764799575258827,
     "rtfx": 331.6,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12732257081937254,
     "cer": 0.07586024351508734,
     "rtfx": 331.42,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.06570188133140377,
     "cer": 0.03943985422231098,
     "rtfx": 364.05,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.15262539184952978,
     "cer": 0.10983213429256594,
     "rtfx": 313.43,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.018105849582172703,
     "cer": 0.006105654366870188,
     "rtfx": 314.56,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07325616813889735,
     "cer": 0.04145050291159343,
     "rtfx": 370.47,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.057452966714905934,
     "cer": 0.033024637427922415,
     "rtfx": 360.11,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.10109717868338558,
     "cer": 0.06932300313595277,
     "rtfx": 318.75,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11730103806228373,
     "cer": 0.06214724306890777,
     "rtfx": 404.01,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08572168508287292,
     "cer": 0.04558438467031659,
     "rtfx": 380.95,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07903899721448468,
     "cer": 0.05047119723918237,
     "rtfx": 325.99,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.17514468473956746,
     "cer": 0.11784012705134993,
     "rtfx": 331.93,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.15094066570188133,
     "cer": 0.10184468685254987,
     "rtfx": 300.53,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.20787617554858934,
     "cer": 0.15004611695259176,
     "rtfx": 311.87,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.47474048442906575,
     "cer": 0.33436705327792593,
     "rtfx": 266.62,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15331491712707182,
     "cer": 0.09759581052130445,
     "rtfx": 313.86,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 231.43,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.057348617206611156,
     "cer": 0.03148597033286066,
     "done": 9,
     "total": 9,
     "ci": [
      0.05522,
      0.05938
     ]
    },
    "accented": {
     "wer": 0.18735260242417595,
     "cer": 0.13754102203469293,
     "done": 1,
     "total": 1,
     "ci": [
      0.14459,
      0.24521
     ]
    },
    "noisy": {
     "wer": 0.09337479607004458,
     "cer": 0.0603415588680958,
     "done": 5,
     "total": 5,
     "ci": [
      0.08157,
      0.10952
     ]
    },
    "telephony": {
     "wer": 0.06896562279413045,
     "cer": 0.03731261606000968,
     "done": 8,
     "total": 8,
     "ci": [
      0.06474,
      0.07339
     ]
    },
    "callcenter": {
     "wer": 0.20684265412677671,
     "cer": 0.14202749864915074,
     "done": 6,
     "total": 6,
     "ci": [
      0.16842,
      0.26591
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "undisclosed",
   "hallucination_rate": 0.6566666666666666,
   "inserted_wpm": 91.27,
   "arena_wer": 0.10550272786123349,
   "arena_cer": 0.06729990035801134,
   "arena_ci": [
    0.09586,
    0.11979
   ],
   "rank_range": [
    20,
    34
   ],
   "rtfx": 353.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.6566666666666666,
    "halluc_3plus": 0.45,
    "halluc_3plus_ci": [
     0.39469,
     0.50658
    ],
    "inserted_wpm": 91.2730719901857,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.010359567513200905,
      "wer_uncapped": 0.010359567513200905,
      "cer": 0.004325349555321684,
      "av_wer": null,
      "strict_wer": 0.01362836308775459,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0011063615790797084,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.020015654702001565,
      "wer_uncapped": 0.020015654702001565,
      "cer": 0.009543568464730291,
      "av_wer": null,
      "strict_wer": 0.023537962652353795,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0018450184501845018,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.06085860354366552,
      "wer_uncapped": 0.06085860354366552,
      "cer": 0.03827115426735782,
      "av_wer": null,
      "strict_wer": 0.0669514671895791,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019609216331675887,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.0652568621168429,
      "wer_uncapped": 0.06653850261668269,
      "cer": 0.03433564990022707,
      "av_wer": null,
      "strict_wer": 0.06867457011641567,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007049022749118872,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05060027054447075,
      "wer_uncapped": 0.05060027054447075,
      "cer": 0.0324612317626096,
      "av_wer": null,
      "strict_wer": 0.053432532972607374,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011920865742306391,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.09598565918844043,
      "wer_uncapped": 0.09723504807431148,
      "cer": 0.06887471255841555,
      "av_wer": null,
      "strict_wer": 0.10076592970829486,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02716062795371829,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07817497888891732,
      "wer_uncapped": 0.07817497888891732,
      "cer": 0.04351062898039363,
      "av_wer": null,
      "strict_wer": 0.08618439571125157,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017758898641213952,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.029511655431482528,
      "wer_uncapped": 0.029511655431482528,
      "cer": 0.016423976559415986,
      "av_wer": null,
      "strict_wer": 0.03249626923274842,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010600524880358154,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.06236658932714617,
      "wer_uncapped": 0.06273781902552204,
      "cer": 0.038304514889529295,
      "av_wer": null,
      "strict_wer": 0.06756380510440835,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013921113689095127,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13837547304338288,
      "wer_uncapped": 0.18159381341523612,
      "cer": 0.10848682471137745,
      "av_wer": null,
      "strict_wer": 0.14407941644271377,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.05857511106235946,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09709574869335633,
      "wer_uncapped": 0.09865833288431489,
      "cer": 0.06982307500622975,
      "av_wer": null,
      "strict_wer": 0.09946656608653484,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015464195269141657,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01492100643651258,
      "wer_uncapped": 0.01492100643651258,
      "cer": 0.009792823860794482,
      "av_wer": null,
      "strict_wer": 0.015408621025941096,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002828164618685391,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.052185634507991525,
      "wer_uncapped": 0.05545927209705372,
      "cer": 0.028142335272628872,
      "av_wer": null,
      "strict_wer": 0.07991527055651838,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012324282688234161,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.016713091922005572,
      "wer_uncapped": 0.016713091922005572,
      "cer": 0.008018791511420703,
      "av_wer": null,
      "strict_wer": 0.0201949860724234,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.09214133414559854,
      "wer_uncapped": 0.12031678342978983,
      "cer": 0.0629244145459161,
      "av_wer": null,
      "strict_wer": 0.09914712153518124,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04843131282363692,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06324167872648336,
      "wer_uncapped": 0.06324167872648336,
      "cer": 0.04050701025380407,
      "av_wer": null,
      "strict_wer": 0.06570188133140377,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012879884225759768,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.1414576802507837,
      "wer_uncapped": 0.14615987460815047,
      "cer": 0.11103636934391677,
      "av_wer": null,
      "strict_wer": 0.147923197492163,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03017241379310345,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.014623955431754874,
      "wer_uncapped": 0.014623955431754874,
      "cer": 0.006317835736270857,
      "av_wer": null,
      "strict_wer": 0.018105849582172703,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001392757660167131,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06670727992689614,
      "wer_uncapped": 0.06670727992689614,
      "cer": 0.04210826934061052,
      "av_wer": null,
      "strict_wer": 0.07325616813889735,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0185805665549802,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.05484804630969609,
      "wer_uncapped": 0.05484804630969609,
      "cer": 0.033661176048548624,
      "av_wer": null,
      "strict_wer": 0.057452966714905934,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010419681620839363,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.0942398119122257,
      "wer_uncapped": 0.09502351097178684,
      "cer": 0.06968922373200592,
      "av_wer": null,
      "strict_wer": 0.10031347962382445,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02586206896551724,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.11245674740484429,
      "wer_uncapped": 0.11418685121107267,
      "cer": 0.06679967486883913,
      "av_wer": null,
      "strict_wer": 0.11557093425605536,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010726643598615917,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07717541436464088,
      "wer_uncapped": 0.07717541436464088,
      "cer": 0.04515043130654323,
      "av_wer": null,
      "strict_wer": 0.08572168508287292,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0162292817679558,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.07712395543175488,
      "wer_uncapped": 0.07799442896935933,
      "cer": 0.05374210270532966,
      "av_wer": null,
      "strict_wer": 0.07816852367688022,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008356545961002786,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1672250989948218,
      "wer_uncapped": 0.16798659762412427,
      "cer": 0.1158215396331789,
      "av_wer": null,
      "strict_wer": 0.17438318611026501,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.03289674078586659,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.10072358900144718,
      "wer_uncapped": 0.14790159189580318,
      "cer": 0.06585752294400765,
      "av_wer": null,
      "strict_wer": 0.10376266280752533,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.06410998552821998,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.2006269592476489,
      "wer_uncapped": 0.20278213166144202,
      "cer": 0.1544015426700749,
      "av_wer": null,
      "strict_wer": 0.20572100313479624,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02821316614420063,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.3107266435986159,
      "wer_uncapped": 0.473356401384083,
      "cer": 0.23158205867139584,
      "av_wer": null,
      "strict_wer": 0.3121107266435986,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.18858131487889274,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1460635359116022,
      "wer_uncapped": 0.1460635359116022,
      "cer": 0.10084157374289922,
      "av_wer": null,
      "strict_wer": 0.15331491712707182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01968232044198895,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.04365194198536276,
      "cer": 0.025016545657289193,
      "wer_arith": 0.052569982361796455,
      "done": 9,
      "total": 9,
      "ci": [
       0.0406,
       0.04646
      ]
     },
     "accented": {
      "wer": 0.13837547304338288,
      "cer": 0.10848682471137747,
      "wer_arith": 0.13837547304338288,
      "done": 1,
      "total": 1,
      "ci": [
       0.11834,
       0.15821
      ]
     },
     "noisy": {
      "wer": 0.06687569168275365,
      "cer": 0.04365002571462697,
      "wer_arith": 0.0821299067476455,
      "done": 5,
      "total": 5,
      "ci": [
       0.06009,
       0.07429
      ]
     },
     "telephony": {
      "wer": 0.04915366488841486,
      "cer": 0.029131769852609103,
      "wer_arith": 0.060894737036820266,
      "done": 8,
      "total": 8,
      "ci": [
       0.04539,
       0.05305
      ]
     },
     "callcenter": {
      "wer": 0.15094610949464116,
      "cer": 0.10672944639067224,
      "wer_arith": 0.16708163036431514,
      "done": 6,
      "total": 6,
      "ci": [
       0.14014,
       0.16247
      ]
     }
    },
    "arena": 0.06693903690326443,
    "arena_arith": 0.0889324361562002,
    "arena_cer": 0.04197518302263948,
    "arena_strict": 0.07286742803373528,
    "zero_shot": 0.06756592648493284,
    "arena_real": 0.04903053612039019,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 7,
    "boh_share": 0.44,
    "arena_ci": [
     0.06313,
     0.0707
    ],
    "rank_set": [
     4,
     10
    ]
   }
  },
  {
   "model": "confucius4-r2t2",
   "hf_id": "netease-youdao/Confucius4-R2T2",
   "params_b": 2.04,
   "license": "NetEase Youdao Model Use License",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01674629117425195,
     "cer": 0.005211101830055433,
     "rtfx": 128.81,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.036173543553617356,
     "cer": 0.013832481767762785,
     "rtfx": 121.63,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.050983962462357306,
     "cer": 0.030237344277068087,
     "rtfx": 143.25,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.08234540211470683,
     "cer": 0.04174204226165275,
     "rtfx": 153.54,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06459249239093676,
     "cer": 0.03911132022761024,
     "rtfx": 143.77,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11570427508283991,
     "cer": 0.08347067081731063,
     "rtfx": 129.98,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09437293687146549,
     "cer": 0.04987242642415056,
     "rtfx": 124.88,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.027684865949673235,
     "cer": 0.013843150763577908,
     "rtfx": 163.35,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.1300232018561485,
     "cer": 0.09273879900435594,
     "rtfx": 94.85,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1743541929468546,
     "cer": 0.13867791842475385,
     "rtfx": 120.43,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.1182175763780376,
     "cer": 0.08572976620084033,
     "rtfx": 125.59,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01365320850399844,
     "cer": 0.00924857915819055,
     "rtfx": 140.0,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08819564798767572,
     "cer": 0.04096184480012137,
     "rtfx": 118.89,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.024895543175487464,
     "cer": 0.009058932837801964,
     "rtfx": 117.62,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.09473042948522693,
     "cer": 0.06220222339862361,
     "rtfx": 138.12,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08900144717800289,
     "cer": 0.053268765133171914,
     "rtfx": 137.13,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1743730407523511,
     "cer": 0.13196827153661686,
     "rtfx": 117.09,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02193593314763231,
     "cer": 0.00756570215025219,
     "rtfx": 116.64,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.05893999390801097,
     "cer": 0.03313922710428798,
     "rtfx": 135.27,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07351664254703329,
     "cer": 0.0432340680462295,
     "rtfx": 138.66,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.1206896551724138,
     "cer": 0.08791735842095555,
     "rtfx": 117.47,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1356401384083045,
     "cer": 0.07858339018793029,
     "rtfx": 156.28,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0991885359116022,
     "cer": 0.05445982249124358,
     "rtfx": 125.48,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.09505571030640668,
     "cer": 0.05889965489779665,
     "rtfx": 118.21,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1585440146207737,
     "cer": 0.11037586024351509,
     "rtfx": 138.73,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1321273516642547,
     "cer": 0.08337285639399915,
     "rtfx": 137.24,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.22648902821316613,
     "cer": 0.16362294779560965,
     "rtfx": 119.0,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.34498269896193773,
     "cer": 0.2590088693171246,
     "rtfx": 152.54,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.16937154696132597,
     "cer": 0.1123882068895161,
     "rtfx": 128.65,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 166.01,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06873633016177748,
     "cer": 0.041117704152616036,
     "done": 9,
     "total": 9,
     "ci": [
      0.06668,
      0.07102
     ]
    },
    "accented": {
     "wer": 0.1743541929468546,
     "cer": 0.13867791842475385,
     "done": 1,
     "total": 1,
     "ci": [
      0.1598,
      0.19205
     ]
    },
    "noisy": {
     "wer": 0.10024360739382118,
     "cer": 0.06844559182141094,
     "done": 5,
     "total": 5,
     "ci": [
      0.0933,
      0.10839
     ]
    },
    "telephony": {
     "wer": 0.0764699694483339,
     "cer": 0.04438874904490137,
     "done": 8,
     "total": 8,
     "ci": [
      0.07242,
      0.0809
     ]
    },
    "callcenter": {
     "wer": 0.1877617251213108,
     "cer": 0.13127806592292687,
     "done": 6,
     "total": 6,
     "ci": [
      0.17689,
      0.19816
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "4.57.6"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [],
   "notes": "streaming model, run offline (whole utterance)",
   "training_data": "",
   "hallucination_rate": 0.18333333333333332,
   "inserted_wpm": 17.49,
   "arena_wer": 0.10726409759120809,
   "arena_cer": 0.0711169645156263,
   "arena_ci": [
    0.10426,
    0.11044
   ],
   "rank_range": [
    28,
    31
   ],
   "rtfx": 132.7,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.18333333333333332,
    "halluc_3plus": 0.16333333333333333,
    "halluc_3plus_ci": [
     0.12581,
     0.20937
    ],
    "inserted_wpm": 17.487313890592763,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.012371134020618556,
      "wer_uncapped": 0.012371134020618556,
      "cer": 0.005238992910590167,
      "av_wer": null,
      "strict_wer": 0.01674629117425195,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001056072416394267,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.031700771553170075,
      "wer_uncapped": 0.031700771553170075,
      "cer": 0.015192076027305582,
      "av_wer": null,
      "strict_wer": 0.036173543553617356,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001565470200156547,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.04566146088661671,
      "wer_uncapped": 0.04566146088661671,
      "cer": 0.029875155143462073,
      "av_wer": null,
      "strict_wer": 0.050983962462357306,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02192030254219483,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.0764712164904411,
      "wer_uncapped": 0.07828687386521414,
      "cer": 0.043120255051721366,
      "av_wer": null,
      "strict_wer": 0.08052974473993378,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009825910498771762,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.060703415623943185,
      "wer_uncapped": 0.060703415623943185,
      "cer": 0.039606231145140516,
      "av_wer": null,
      "strict_wer": 0.06459249239093676,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013273588096043287,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.11124993209843012,
      "wer_uncapped": 0.11206475093704167,
      "cer": 0.08263481937541725,
      "av_wer": null,
      "strict_wer": 0.11488945624422836,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017708729425824327,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08400931446556974,
      "wer_uncapped": 0.08400931446556974,
      "cer": 0.04884701525218022,
      "av_wer": null,
      "strict_wer": 0.09437293687146549,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015123211955270093,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.024880358153656152,
      "wer_uncapped": 0.024880358153656152,
      "cer": 0.013855297761023913,
      "av_wer": null,
      "strict_wer": 0.027684865949673235,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005609015592034168,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.11647331786542924,
      "wer_uncapped": 0.11712296983758701,
      "cer": 0.08909702209414025,
      "av_wer": null,
      "strict_wer": 0.12937354988399072,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0064965197215777265,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1572972083584709,
      "wer_uncapped": 0.16892447759556847,
      "cer": 0.1288740048764725,
      "av_wer": null,
      "strict_wer": 0.16267207810014808,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020128338726484944,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11401476372649388,
      "wer_uncapped": 0.11406864593997522,
      "cer": 0.0867306254672315,
      "av_wer": null,
      "strict_wer": 0.11816369416455628,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006358101190796918,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01306807099668422,
      "wer_uncapped": 0.01306807099668422,
      "cer": 0.009266327954300156,
      "av_wer": null,
      "strict_wer": 0.01365320850399844,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0021455041934854693,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.056999807433083,
      "wer_uncapped": 0.056999807433083,
      "cer": 0.03819961214089208,
      "av_wer": null,
      "strict_wer": 0.08800308107067206,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005777007510109763,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.020717270194986072,
      "wer_uncapped": 0.020717270194986072,
      "cer": 0.009598250445488418,
      "av_wer": null,
      "strict_wer": 0.024895543175487464,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002263231197771588,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.09000913798355163,
      "wer_uncapped": 0.09000913798355163,
      "cer": 0.06336866154724884,
      "av_wer": null,
      "strict_wer": 0.09473042948522693,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01979896436186415,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.0849493487698987,
      "wer_uncapped": 0.0849493487698987,
      "cer": 0.0541388897192909,
      "av_wer": null,
      "strict_wer": 0.08900144717800289,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01577424023154848,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.16712382445141066,
      "wer_uncapped": 0.16849529780564262,
      "cer": 0.1333692093815866,
      "av_wer": null,
      "strict_wer": 0.17300156739811912,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017241379310344827,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.017757660167130918,
      "wer_uncapped": 0.017757660167130918,
      "cer": 0.007978292564393325,
      "av_wer": null,
      "strict_wer": 0.02193593314763231,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001392757660167131,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.05300030459945172,
      "wer_uncapped": 0.05300030459945172,
      "cer": 0.03312813352795583,
      "av_wer": null,
      "strict_wer": 0.05893999390801097,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019342065184282668,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06975397973950796,
      "wer_uncapped": 0.06975397973950796,
      "cer": 0.04364592986756749,
      "av_wer": null,
      "strict_wer": 0.07351664254703329,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01577424023154848,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.11304858934169279,
      "wer_uncapped": 0.11481191222570533,
      "cer": 0.08740302255706534,
      "av_wer": null,
      "strict_wer": 0.11892633228840126,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01743730407523511,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.1314878892733564,
      "wer_uncapped": 0.13217993079584775,
      "cer": 0.08357348703170028,
      "av_wer": null,
      "strict_wer": 0.13494809688581316,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010034602076124567,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08770718232044199,
      "wer_uncapped": 0.08770718232044199,
      "cer": 0.05314538186408584,
      "av_wer": null,
      "strict_wer": 0.0991885359116022,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015020718232044199,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.0908774373259053,
      "wer_uncapped": 0.0908774373259053,
      "cer": 0.06257087315729791,
      "av_wer": null,
      "strict_wer": 0.09505571030640668,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006615598885793872,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.1532135242156564,
      "wer_uncapped": 0.1532135242156564,
      "cer": 0.11315605762518245,
      "av_wer": null,
      "strict_wer": 0.1585440146207737,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023454157782515993,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.1283646888567294,
      "wer_uncapped": 0.1283646888567294,
      "cer": 0.08702280948252668,
      "av_wer": null,
      "strict_wer": 0.1321273516642547,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01837916063675832,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.2213949843260188,
      "wer_uncapped": 0.22217868338557994,
      "cer": 0.1668684694380914,
      "av_wer": null,
      "strict_wer": 0.22570532915360503,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019984326018808778,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.3394463667820069,
      "wer_uncapped": 0.343598615916955,
      "cer": 0.2708194783122737,
      "av_wer": null,
      "strict_wer": 0.3408304498269896,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020069204152249134,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.15918508287292818,
      "wer_uncapped": 0.15918508287292818,
      "cer": 0.1149168945928887,
      "av_wer": null,
      "strict_wer": 0.16937154696132597,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013294198895027625,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05079580393429958,
      "cer": 0.030092312818162704,
      "wer_arith": 0.06261343568420832,
      "done": 9,
      "total": 9,
      "ci": [
       0.04745,
       0.05373
      ]
     },
     "accented": {
      "wer": 0.1572972083584709,
      "cer": 0.1288740048764725,
      "wer_arith": 0.1572972083584709,
      "done": 1,
      "total": 1,
      "ci": [
       0.13708,
       0.17666
      ]
     },
     "noisy": {
      "wer": 0.07869655635938871,
      "cer": 0.05201885665151664,
      "wer_arith": 0.0953628690252682,
      "done": 5,
      "total": 5,
      "ci": [
       0.07167,
       0.08601
      ]
     },
     "telephony": {
      "wer": 0.053157311018265346,
      "cer": 0.03349729402920724,
      "wer_arith": 0.06785293548391863,
      "done": 8,
      "total": 8,
      "ci": [
       0.04877,
       0.05734
      ]
     },
     "callcenter": {
      "wer": 0.16659936540594394,
      "cer": 0.12139110483705662,
      "wer_arith": 0.18208034739654083,
      "done": 6,
      "total": 6,
      "ci": [
       0.15512,
       0.17814
      ]
     }
    },
    "arena": 0.0757525630279591,
    "arena_arith": 0.10031898190929006,
    "arena_cer": 0.04925621859707817,
    "arena_strict": 0.08277005487329786,
    "zero_shot": 0.0622601650203576,
    "arena_real": 0.055816156265831626,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 29,
    "boh_share": 0.16333333333333333,
    "arena_ci": [
     0.07144,
     0.07959
    ],
    "rank_set": [
     13,
     31
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run5",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-run5",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01639426703545386,
     "cer": 0.00572366922317564,
     "rtfx": 182.46,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04014312870401431,
     "cer": 0.01787195947421285,
     "rtfx": 174.75,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06148889978289796,
     "cer": 0.03614355127440116,
     "rtfx": 194.15,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09388016661326498,
     "cer": 0.048516223394018704,
     "rtfx": 230.19,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06028068988840041,
     "cer": 0.036420579023981416,
     "rtfx": 194.36,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.15106741267858112,
     "cer": 0.10417302488351747,
     "rtfx": 176.38,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.0916860718032703,
     "cer": 0.04690160414298345,
     "rtfx": 165.55,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04196469922297123,
     "cer": 0.021802732805144102,
     "rtfx": 205.98,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08436194895591648,
     "cer": 0.04472619788425638,
     "rtfx": 147.14,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.17764492952339164,
     "cer": 0.13008673230192216,
     "rtfx": 170.89,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.122528153456544,
     "cer": 0.08304112697942118,
     "rtfx": 183.89,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01960210649502633,
     "cer": 0.012373382547239058,
     "rtfx": 196.51,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.11573271711919893,
     "cer": 0.05636046423424107,
     "rtfx": 204.13,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02298050139275766,
     "cer": 0.008826652508627556,
     "rtfx": 160.44,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.08848614072494669,
     "cer": 0.05394388565378507,
     "rtfx": 184.31,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.07163531114327062,
     "cer": 0.041187189535957666,
     "rtfx": 182.51,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.2721394984326019,
     "cer": 0.20394761114185575,
     "rtfx": 43.17,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.020717270194986072,
     "cer": 0.007067958587735599,
     "rtfx": 159.92,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0696009747182455,
     "cer": 0.03883006881948121,
     "rtfx": 184.61,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.06700434153400868,
     "cer": 0.03756770924340381,
     "rtfx": 184.64,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.17476489028213166,
     "cer": 0.12488470761852057,
     "rtfx": 160.67,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.13944636678200692,
     "cer": 0.07932766854803697,
     "rtfx": 228.23,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09210980662983426,
     "cer": 0.0482708198728194,
     "rtfx": 168.93,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.06545961002785515,
     "cer": 0.03441067162198035,
     "rtfx": 161.47,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1507767286018885,
     "cer": 0.09375330862890419,
     "rtfx": 186.5,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.10101302460202605,
     "cer": 0.05993360125808143,
     "rtfx": 184.54,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.25293887147335425,
     "cer": 0.17660948164545287,
     "rtfx": 61.65,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.3169550173010381,
     "cer": 0.20715747689635924,
     "rtfx": 230.03,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.14727209944751382,
     "cer": 0.08637399258679906,
     "rtfx": 165.89,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 17.71,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.07125192052053007,
     "cer": 0.04025328245618791,
     "done": 9,
     "total": 9,
     "ci": [
      0.06886,
      0.07358
     ]
    },
    "accented": {
     "wer": 0.17764492952339164,
     "cer": 0.13008673230192216,
     "done": 1,
     "total": 1,
     "ci": [
      0.16177,
      0.19604
     ]
    },
    "noisy": {
     "wer": 0.11555392103002418,
     "cer": 0.07818929316392945,
     "done": 5,
     "total": 5,
     "ci": [
      0.09396,
      0.15334
     ]
    },
    "telephony": {
     "wer": 0.08737230921942979,
     "cer": 0.05058534743393471,
     "done": 8,
     "total": 8,
     "ci": [
      0.08244,
      0.09293
     ]
    },
    "callcenter": {
     "wer": 0.17240255857561262,
     "cer": 0.10970642210626286,
     "done": 6,
     "total": 6,
     "ci": [
      0.16226,
      0.18266
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [
    "librispeech_clean",
    "librispeech_other",
    "common_voice_en",
    "voxpopuli_en",
    "ami_sdm",
    "gigaspeech"
   ],
   "notes": "Arabic-STT run 5: run 3 continued twice (runs 4 and 5) with more call, dialect and code-switching data; same in-domain train rows as run 3, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; also trained on clips of the lahgtna-v3-small test split; English: the train splits of LibriSpeech, Common Voice 17, VoxPopuli, AMI and GigaSpeech",
   "training_data": "",
   "hallucination_rate": 0.9966666666666667,
   "inserted_wpm": 487.06,
   "arena_wer": 0.10960285206674328,
   "arena_cer": 0.06838702759589574,
   "arena_ci": [
    0.10509,
    0.11642
   ],
   "rank_range": [
    28,
    32
   ],
   "rtfx": 145.7,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9966666666666667,
    "halluc_3plus": 0.9833333333333333,
    "halluc_3plus_ci": [
     0.96158,
     0.99286
    ],
    "inserted_wpm": 487.05738024870357,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.014131254714609002,
      "wer_uncapped": 0.014131254714609002,
      "cer": 0.006025420102466837,
      "av_wer": null,
      "strict_wer": 0.01639426703545386,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0017098315313050039,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.03717991725371799,
      "wer_uncapped": 0.03717991725371799,
      "cer": 0.019716236112970152,
      "av_wer": null,
      "strict_wer": 0.04014312870401431,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004193223750419322,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05609636529168709,
      "wer_uncapped": 0.05609636529168709,
      "cer": 0.03600788493830766,
      "av_wer": null,
      "strict_wer": 0.06148889978289796,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02500175082288676,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.0876855708640393,
      "wer_uncapped": 0.0900352451137456,
      "cer": 0.05087272643867979,
      "av_wer": null,
      "strict_wer": 0.09153049236355869,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0129232083733846,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.057617517754480894,
      "wer_uncapped": 0.057617517754480894,
      "cer": 0.03703932395956459,
      "av_wer": null,
      "strict_wer": 0.06028068988840041,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013527223537368955,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.14367972187516975,
      "wer_uncapped": 0.14623282090281928,
      "cer": 0.10268773335311426,
      "av_wer": null,
      "strict_wer": 0.14851431365093162,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03405942745396274,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08234601704240128,
      "wer_uncapped": 0.08234601704240128,
      "cer": 0.04638839883387761,
      "av_wer": null,
      "strict_wer": 0.0916860718032703,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018449806801607002,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.0383368496886739,
      "wer_uncapped": 0.0383368496886739,
      "cer": 0.021450135939819526,
      "av_wer": null,
      "strict_wer": 0.04196469922297123,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01602943446714352,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.07118329466357308,
      "wer_uncapped": 0.07183294663573085,
      "cer": 0.04380403458213256,
      "av_wer": null,
      "strict_wer": 0.0837122969837587,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01568445475638051,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.15982010640048264,
      "wer_uncapped": 0.17199583173366972,
      "cer": 0.12213213477864927,
      "av_wer": null,
      "strict_wer": 0.16546920419020458,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03246860088849888,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11832534080500028,
      "wer_uncapped": 0.11934910286114554,
      "cer": 0.08565910789932718,
      "av_wer": null,
      "strict_wer": 0.12150439140039873,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.021014063257718627,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.019212014823483517,
      "wer_uncapped": 0.019212014823483517,
      "cer": 0.012241029825993103,
      "av_wer": null,
      "strict_wer": 0.01960210649502633,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007509264677199142,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.07452339688041594,
      "wer_uncapped": 0.08338147506258425,
      "cer": 0.0489784873494791,
      "av_wer": null,
      "strict_wer": 0.1064895051030233,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03716541498170614,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.019846796657381614,
      "wer_uncapped": 0.019846796657381614,
      "cer": 0.009476753604406285,
      "av_wer": null,
      "strict_wer": 0.02298050139275766,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.08330795004568992,
      "wer_uncapped": 0.08330795004568992,
      "cer": 0.05607031795392524,
      "av_wer": null,
      "strict_wer": 0.08848614072494669,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02436795613767895,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.0683068017366136,
      "wer_uncapped": 0.0683068017366136,
      "cer": 0.041882155989357565,
      "av_wer": null,
      "strict_wer": 0.07163531114327062,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016208393632416787,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.17946708463949843,
      "wer_uncapped": 0.2676332288401254,
      "cer": 0.13843670119736312,
      "av_wer": null,
      "strict_wer": 0.18397335423197492,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.12402037617554859,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.01793175487465181,
      "wer_uncapped": 0.01793175487465181,
      "cer": 0.007492305200064798,
      "av_wer": null,
      "strict_wer": 0.020717270194986072,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002437325905292479,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06350898568382576,
      "wer_uncapped": 0.06350898568382576,
      "cer": 0.03976010661928032,
      "av_wer": null,
      "strict_wer": 0.0696009747182455,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021474261346329578,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06338639652677279,
      "wer_uncapped": 0.06338639652677279,
      "cer": 0.038085557980329435,
      "av_wer": null,
      "strict_wer": 0.06700434153400868,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014616497829232996,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.15811128526645768,
      "wer_uncapped": 0.16908307210031348,
      "cer": 0.11753890308982466,
      "av_wer": null,
      "strict_wer": 0.16379310344827586,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.043691222570532914,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.13494809688581316,
      "wer_uncapped": 0.13737024221453287,
      "cer": 0.08519914283603044,
      "av_wer": null,
      "strict_wer": 0.1370242214532872,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016955017301038062,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08261395027624309,
      "wer_uncapped": 0.08261395027624309,
      "cer": 0.047927624658110665,
      "av_wer": null,
      "strict_wer": 0.09210980662983426,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01899171270718232,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.06284818941504178,
      "wer_uncapped": 0.06319637883008357,
      "cer": 0.03774501862951563,
      "av_wer": null,
      "strict_wer": 0.06511142061281337,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009575208913649024,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.14559853792263175,
      "wer_uncapped": 0.14559853792263175,
      "cer": 0.09878149393920163,
      "av_wer": null,
      "strict_wer": 0.1507767286018885,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.034724337496192505,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.0979739507959479,
      "wer_uncapped": 0.0979739507959479,
      "cer": 0.06274849780275626,
      "av_wer": null,
      "strict_wer": 0.10101302460202605,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02011577424023155,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.23373824451410657,
      "wer_uncapped": 0.24647335423197492,
      "cer": 0.17444728463159784,
      "av_wer": null,
      "strict_wer": 0.24020376175548588,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.05799373040752351,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.2968858131487889,
      "wer_uncapped": 0.31453287197231833,
      "cer": 0.2145865661715806,
      "av_wer": null,
      "strict_wer": 0.29930795847750863,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.050173010380622836,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.13907113259668508,
      "wer_uncapped": 0.13915745856353592,
      "cer": 0.08985903639806438,
      "av_wer": null,
      "strict_wer": 0.14718577348066297,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024084944751381215,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.055263410194629804,
      "cer": 0.03208919278565228,
      "wer_arith": 0.06536183434981693,
      "done": 9,
      "total": 9,
      "ci": [
       0.05171,
       0.05838
      ]
     },
     "accented": {
      "wer": 0.15982010640048264,
      "cer": 0.1221321347786493,
      "wer_arith": 0.15982010640048264,
      "done": 1,
      "total": 1,
      "ci": [
       0.13896,
       0.18182
      ]
     },
     "noisy": {
      "wer": 0.07515894550862436,
      "cer": 0.048338067674767816,
      "wer_arith": 0.09385079477683676,
      "done": 5,
      "total": 5,
      "ci": [
       0.06861,
       0.08193
      ]
     },
     "telephony": {
      "wer": 0.06061258781945936,
      "cer": 0.036663268258177055,
      "wer_arith": 0.07677948515220798,
      "done": 8,
      "total": 8,
      "ci": [
       0.05582,
       0.06498
      ]
     },
     "callcenter": {
      "wer": 0.14328017504360127,
      "cer": 0.09608623534625844,
      "wer_arith": 0.16268597806553367,
      "done": 6,
      "total": 6,
      "ci": [
       0.13242,
       0.15383
      ]
     }
    },
    "arena": 0.07720587867452755,
    "arena_arith": 0.09882499578297743,
    "arena_cer": 0.048112868160612866,
    "arena_strict": 0.08300901933228196,
    "zero_shot": 0.07079140793841329,
    "arena_real": 0.06183444386206604,
    "exposure": 0.5558,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 33,
    "boh_share": 0.98,
    "arena_ci": [
     0.07265,
     0.08127
    ],
    "rank_set": [
     22,
     32
    ]
   }
  },
  {
   "model": "cohere-transcribe-03-2026",
   "hf_id": "CohereLabs/cohere-transcribe-03-2026",
   "params_b": 2.07,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.012320844857933116,
     "cer": 0.003682891639456299,
     "rtfx": 369.18,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.022922956502292296,
     "cer": 0.008504738198174593,
     "rtfx": 371.53,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.07045311296309266,
     "cer": 0.039955185893298585,
     "rtfx": 374.61,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07401473886574816,
     "cer": 0.035679919941495705,
     "rtfx": 399.66,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.05770206290158945,
     "cer": 0.034847304112570025,
     "rtfx": 379.84,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.10527459394861209,
     "cer": 0.07151722313780545,
     "rtfx": 360.18,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08733590931190666,
     "cer": 0.04443097132752305,
     "rtfx": 372.24,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03470900015437658,
     "cer": 0.017921690205534503,
     "rtfx": 419.31,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.06774941995359629,
     "cer": 0.03883400746733043,
     "rtfx": 319.45,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.18587177096473428,
     "cer": 0.146812001875293,
     "rtfx": 314.41,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.09919715501912818,
     "cer": 0.06613234647665586,
     "rtfx": 380.64,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.015701189779598206,
     "cer": 0.009500241176100497,
     "rtfx": 395.68,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.0845368765646062,
     "cer": 0.03056967306379428,
     "rtfx": 374.51,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.018802228412256268,
     "cer": 0.00793071409609769,
     "rtfx": 318.56,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.11681388973499848,
     "cer": 0.07072525145579672,
     "rtfx": 378.0,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.0723589001447178,
     "cer": 0.04253513392077082,
     "rtfx": 379.14,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.18240595611285265,
     "cer": 0.12787308614646745,
     "rtfx": 279.89,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.017757660167130918,
     "cer": 0.006304751791876825,
     "rtfx": 329.98,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07523606457508376,
     "cer": 0.04041821069348862,
     "rtfx": 378.43,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.061070911722141824,
     "cer": 0.034946706272933774,
     "rtfx": 385.0,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.10188087774294671,
     "cer": 0.07172108467072495,
     "rtfx": 330.75,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.12422145328719723,
     "cer": 0.06134094151212553,
     "rtfx": 401.95,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08848411602209945,
     "cer": 0.04611147005814942,
     "rtfx": 381.25,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07311977715877438,
     "cer": 0.04443190868064773,
     "rtfx": 338.37,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.23332318001827596,
     "cer": 0.1434356802541027,
     "rtfx": 305.67,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.10578871201157743,
     "cer": 0.064002396345573,
     "rtfx": 390.75,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.20376175548589343,
     "cer": 0.14244604316546763,
     "rtfx": 333.48,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.5418685121107266,
     "cer": 0.336599888358246,
     "rtfx": 248.12,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15305593922651933,
     "cer": 0.09281803652191654,
     "rtfx": 394.46,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 161.77,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.05916473771768303,
     "cer": 0.03281932576924318,
     "done": 9,
     "total": 9,
     "ci": [
      0.05732,
      0.06116
     ]
    },
    "accented": {
     "wer": 0.18587177096473428,
     "cer": 0.146812001875293,
     "done": 1,
     "total": 1,
     "ci": [
      0.14266,
      0.24565
     ]
    },
    "noisy": {
     "wer": 0.09791562588479068,
     "cer": 0.06303930641915771,
     "done": 5,
     "total": 5,
     "ci": [
      0.08497,
      0.11847
     ]
    },
    "telephony": {
     "wer": 0.07111114373260054,
     "cer": 0.03761413490489924,
     "done": 8,
     "total": 8,
     "ci": [
      0.06725,
      0.07537
     ]
    },
    "callcenter": {
     "wer": 0.21848631266862786,
     "cer": 0.13728899222099225,
     "done": 6,
     "total": 6,
     "ci": [
      0.1719,
      0.28389
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "undisclosed",
   "hallucination_rate": 0.6866666666666666,
   "inserted_wpm": 183.71,
   "arena_wer": 0.10984801832242076,
   "arena_cer": 0.06763646367919901,
   "arena_ci": [
    0.09844,
    0.12577
   ],
   "rank_range": [
    23,
    35
   ],
   "rtfx": 357.5,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.6866666666666666,
    "halluc_3plus": 0.6166666666666667,
    "halluc_3plus_ci": [
     0.5605,
     0.66988
    ],
    "inserted_wpm": 183.70601684046173,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.009454362584862963,
      "wer_uncapped": 0.009454362584862963,
      "cer": 0.003666138526836828,
      "av_wer": null,
      "strict_wer": 0.012320844857933116,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001257229067136032,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.020071564352007156,
      "wer_uncapped": 0.020071564352007156,
      "cer": 0.009436487752643555,
      "av_wer": null,
      "strict_wer": 0.022922956502292296,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00173319915017332,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.06506057847188178,
      "wer_uncapped": 0.06506057847188178,
      "cer": 0.04028619405709279,
      "av_wer": null,
      "strict_wer": 0.07045311296309266,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024301421668184046,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.06963580049129553,
      "wer_uncapped": 0.07081063761614867,
      "cer": 0.037936649923163375,
      "av_wer": null,
      "strict_wer": 0.07283990174089501,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006942219374132223,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.055038890767669935,
      "wer_uncapped": 0.055038890767669935,
      "cer": 0.03524866362048586,
      "av_wer": null,
      "strict_wer": 0.05770206290158945,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014414947582008793,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.10005975338149818,
      "wer_uncapped": 0.1009832147319246,
      "cer": 0.07097643597161438,
      "av_wer": null,
      "strict_wer": 0.10435113259818567,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03281003856809169,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07881470866705903,
      "wer_uncapped": 0.07881470866705903,
      "cer": 0.04398608660836055,
      "av_wer": null,
      "strict_wer": 0.08733590931190666,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01781007702346529,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.031132609478721762,
      "wer_uncapped": 0.031132609478721762,
      "cer": 0.017569318188136264,
      "av_wer": null,
      "strict_wer": 0.03470900015437658,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013147738383162662,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.060696055684454756,
      "wer_uncapped": 0.06106728538283063,
      "cer": 0.03856868395773295,
      "av_wer": null,
      "strict_wer": 0.06737819025522042,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01419953596287703,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13475566280919213,
      "wer_uncapped": 0.1808259748807108,
      "cer": 0.1027143738433066,
      "av_wer": null,
      "strict_wer": 0.13974661328360666,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.0641145176328635,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.09537151786195378,
      "wer_uncapped": 0.09617975106417372,
      "cer": 0.06775479691004237,
      "av_wer": null,
      "strict_wer": 0.09838892181690824,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015841370763510967,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.015018529354398284,
      "wer_uncapped": 0.015018529354398284,
      "cer": 0.009608550293521468,
      "av_wer": null,
      "strict_wer": 0.015701189779598206,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0038033937975424223,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05180050067398421,
      "wer_uncapped": 0.053533602927017136,
      "cer": 0.02764623641365625,
      "av_wer": null,
      "strict_wer": 0.0822260735605623,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011361448103215868,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.016713091922005572,
      "wer_uncapped": 0.016713091922005572,
      "cer": 0.008383282034667098,
      "av_wer": null,
      "strict_wer": 0.018802228412256268,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002959610027855153,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.10767590618336886,
      "wer_uncapped": 0.10965580261955528,
      "cer": 0.0725709208605699,
      "av_wer": null,
      "strict_wer": 0.11483399329881207,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03122144380140116,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.06960926193921853,
      "wer_uncapped": 0.06960926193921853,
      "cer": 0.04307793488983887,
      "av_wer": null,
      "strict_wer": 0.0723589001447178,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01780028943560058,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.1391065830721003,
      "wer_uncapped": 0.1775078369905956,
      "cer": 0.10664155343288936,
      "av_wer": null,
      "strict_wer": 0.14400470219435738,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.0679858934169279,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.015146239554317549,
      "wer_uncapped": 0.01532033426183844,
      "cer": 0.006682326259517253,
      "av_wer": null,
      "strict_wer": 0.01758356545961003,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0015668523676880223,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06807797745964057,
      "wer_uncapped": 0.06807797745964057,
      "cer": 0.041156311480611794,
      "av_wer": null,
      "strict_wer": 0.07523606457508376,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02162656107219007,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.05832127351664255,
      "wer_uncapped": 0.05832127351664255,
      "cer": 0.03536516098173448,
      "av_wer": null,
      "strict_wer": 0.061070911722141824,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014182344428364689,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.09600313479623825,
      "wer_uncapped": 0.09698275862068965,
      "cer": 0.07184178662720302,
      "av_wer": null,
      "strict_wer": 0.1009012539184953,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03036833855799373,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.12006920415224913,
      "wer_uncapped": 0.12179930795847752,
      "cer": 0.06628242074927954,
      "av_wer": null,
      "strict_wer": 0.12249134948096886,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011418685121107266,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07950621546961326,
      "wer_uncapped": 0.07950621546961326,
      "cer": 0.04533978539869556,
      "av_wer": null,
      "strict_wer": 0.08848411602209945,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015366022099447514,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.0706824512534819,
      "wer_uncapped": 0.07120473537604456,
      "cer": 0.04750526486311356,
      "av_wer": null,
      "strict_wer": 0.0725974930362117,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008530640668523676,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.16113310996040206,
      "wer_uncapped": 0.2278403898872982,
      "cer": 0.10874531954052168,
      "av_wer": null,
      "strict_wer": 0.16661590009137983,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.10432531221443801,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.10115774240231548,
      "wer_uncapped": 0.10217076700434154,
      "cer": 0.06594720636154375,
      "av_wer": null,
      "strict_wer": 0.10477568740955137,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020260492040520984,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.19278996865203762,
      "wer_uncapped": 0.19886363636363635,
      "cer": 0.14377326337503923,
      "av_wer": null,
      "strict_wer": 0.19768808777429467,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.038989028213166146,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.30519031141868513,
      "wer_uncapped": 0.5404844290657439,
      "cer": 0.22500554200842385,
      "av_wer": null,
      "strict_wer": 0.3065743944636678,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.26089965397923875,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1424378453038674,
      "wer_uncapped": 0.14416436464088397,
      "cer": 0.09593940669051125,
      "av_wer": null,
      "strict_wer": 0.15132941988950277,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.02235842541436464,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.04464866541164694,
      "cer": 0.025972059482455474,
      "wer_arith": 0.054440480431050126,
      "done": 9,
      "total": 9,
      "ci": [
       0.0415,
       0.04738
      ]
     },
     "accented": {
      "wer": 0.13475566280919216,
      "cer": 0.10271437384330659,
      "wer_arith": 0.13475566280919213,
      "done": 1,
      "total": 1,
      "ci": [
       0.11357,
       0.15563
      ]
     },
     "noisy": {
      "wer": 0.06984281718134774,
      "cer": 0.04523344024743775,
      "wer_arith": 0.08569527219572941,
      "done": 5,
      "total": 5,
      "ci": [
       0.06309,
       0.07719
      ]
     },
     "telephony": {
      "wer": 0.050585639503630854,
      "cer": 0.029397545684177528,
      "wer_arith": 0.06299288437213547,
      "done": 8,
      "total": 8,
      "ci": [
       0.04667,
       0.05437
      ]
     },
     "callcenter": {
      "wer": 0.14592488119893648,
      "cer": 0.10093369735166634,
      "wer_arith": 0.1622319048317983,
      "done": 6,
      "total": 6,
      "ci": [
       0.13499,
       0.1571
      ]
     }
    },
    "arena": 0.06774290488247757,
    "arena_arith": 0.08932181969157166,
    "arena_cer": 0.04219450271318877,
    "arena_strict": 0.07345536917741569,
    "zero_shot": 0.06939231921761795,
    "arena_real": 0.0496406980561762,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 8,
    "boh_share": 0.63,
    "arena_ci": [
     0.06371,
     0.07147
    ],
    "rank_set": [
     4,
     11
    ]
   }
  },
  {
   "model": "parakeet-tdt-0.6b-v3",
   "hf_id": "nvidia/parakeet-tdt-0.6b-v3",
   "params_b": 0.6,
   "license": "CC-BY-4.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01845612270555695,
     "cer": 0.0060274128635431695,
     "rtfx": 475.89,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03505535055350553,
     "cer": 0.013122843792305341,
     "rtfx": 414.51,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06681140135863856,
     "cer": 0.036776794086486354,
     "rtfx": 487.24,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.08821958773897255,
     "cer": 0.04278126323082252,
     "rtfx": 480.02,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06006932702062902,
     "cer": 0.035406037258678746,
     "rtfx": 495.5,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.10831658427942854,
     "cer": 0.07333821644387475,
     "rtfx": 483.51,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08741267688528366,
     "cer": 0.04369837059492232,
     "rtfx": 513.09,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.042633664385323934,
     "cer": 0.022822367665633253,
     "rtfx": 531.53,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.09698375870069606,
     "cer": 0.05707451773490977,
     "rtfx": 409.87,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15153841934953108,
     "cer": 0.11114627285513362,
     "rtfx": 464.45,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11751710760278032,
     "cer": 0.08134411515145319,
     "rtfx": 476.88,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016286327286912424,
     "cer": 0.00983579053331376,
     "rtfx": 462.75,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09955709609089158,
     "cer": 0.0389137525601153,
     "rtfx": 427.66,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.032729805013927575,
     "cer": 0.01609370852136979,
     "rtfx": 407.13,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12397197685044167,
     "cer": 0.08123345685547909,
     "rtfx": 438.58,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08755426917510854,
     "cer": 0.05246998327550485,
     "rtfx": 440.81,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1510579937304075,
     "cer": 0.11138166389964951,
     "rtfx": 388.32,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.022458217270194987,
     "cer": 0.007963897000265464,
     "rtfx": 414.82,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07538836430094426,
     "cer": 0.039253573319216514,
     "rtfx": 459.54,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07568740955137482,
     "cer": 0.04350864930980255,
     "rtfx": 448.3,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11187304075235109,
     "cer": 0.0756686958125807,
     "rtfx": 393.49,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1508650519031142,
     "cer": 0.08094027166160143,
     "rtfx": 473.2,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0898653314917127,
     "cer": 0.045210324072499745,
     "rtfx": 499.16,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.1108983286908078,
     "cer": 0.06732811255641094,
     "rtfx": 405.45,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.2046908315565032,
     "cer": 0.13861831656961354,
     "rtfx": 451.9,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.13921852387843706,
     "cer": 0.08412171438556201,
     "rtfx": 444.54,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.21963166144200627,
     "cer": 0.15059952038369304,
     "rtfx": 380.32,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.4051903114186851,
     "cer": 0.3001302487130187,
     "rtfx": 456.26,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.162292817679558,
     "cer": 0.10279865338184786,
     "rtfx": 475.84,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 470.5,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06710649706978164,
     "cer": 0.03678309151901958,
     "done": 9,
     "total": 9,
     "ci": [
      0.06496,
      0.06944
     ]
    },
    "accented": {
     "wer": 0.15153841934953108,
     "cer": 0.11114627285513362,
     "done": 1,
     "total": 1,
     "ci": [
      0.13639,
      0.16886
     ]
    },
    "noisy": {
     "wer": 0.10256623047453313,
     "cer": 0.06850458554069129,
     "done": 5,
     "total": 5,
     "ci": [
      0.09483,
      0.11098
     ]
    },
    "telephony": {
     "wer": 0.08024760483093701,
     "cer": 0.042661869283674436,
     "done": 8,
     "total": 8,
     "ci": [
      0.07576,
      0.08485
     ]
    },
    "callcenter": {
     "wer": 0.20698707911099956,
     "cer": 0.14059942766502434,
     "done": 6,
     "total": 6,
     "ci": [
      0.19561,
      0.21755
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.20.1"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.23666666666666666,
   "inserted_wpm": 15.57,
   "arena_wer": 0.11107693340001583,
   "arena_cer": 0.06994087531897446,
   "arena_ci": [
    0.1079,
    0.11437
   ],
   "rank_range": [
    30,
    32
   ],
   "rtfx": 467.3,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.23666666666666666,
    "halluc_3plus": 0.2,
    "halluc_3plus_ci": [
     0.15866,
     0.24893
    ],
    "inserted_wpm": 15.569062621981823,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.014734724666834297,
      "wer_uncapped": 0.014734724666834297,
      "cer": 0.00619889668891022,
      "av_wer": null,
      "strict_wer": 0.01845612270555695,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0022127231581594168,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.03136531365313653,
      "wer_uncapped": 0.03136531365313653,
      "cer": 0.014442511042698433,
      "av_wer": null,
      "strict_wer": 0.03505535055350553,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0027954825002795484,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.06148889978289796,
      "wer_uncapped": 0.06148889978289796,
      "cer": 0.0368693874571074,
      "av_wer": null,
      "strict_wer": 0.06681140135863856,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021640170880313746,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08255900886468012,
      "wer_uncapped": 0.08394745273950657,
      "cer": 0.04454230601619303,
      "av_wer": null,
      "strict_wer": 0.08672434048915946,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008010253123998718,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05723706459249239,
      "wer_uncapped": 0.05723706459249239,
      "cer": 0.035945521584954926,
      "av_wer": null,
      "strict_wer": 0.06006932702062902,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014626310449780182,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.10217828236188821,
      "wer_uncapped": 0.1026128524091477,
      "cer": 0.07354795638305764,
      "av_wer": null,
      "strict_wer": 0.10788201423216905,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.003009027081243731,
      "insertions": 0.03503721006029659,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07891706543156171,
      "wer_uncapped": 0.07891706543156171,
      "cer": 0.043272900166410166,
      "av_wer": null,
      "strict_wer": 0.08741267688528366,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.021315796207681877,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.037899449390212524,
      "wer_uncapped": 0.037899449390212524,
      "cer": 0.02186156934042778,
      "av_wer": null,
      "strict_wer": 0.042633664385323934,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019683013430762106,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.08278422273781902,
      "wer_uncapped": 0.08770301624129931,
      "cer": 0.052425552353506245,
      "av_wer": null,
      "strict_wer": 0.09206496519721578,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023294663573085846,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.13519442768606374,
      "wer_uncapped": 0.14775407228651347,
      "cer": 0.10336065332980818,
      "av_wer": null,
      "strict_wer": 0.13892392913947238,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03290736576537048,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11401476372649388,
      "wer_uncapped": 0.11423029258041921,
      "cer": 0.08397707450784948,
      "av_wer": null,
      "strict_wer": 0.11730157874885501,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01460207985344038,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.015701189779598206,
      "wer_uncapped": 0.015701189779598206,
      "cer": 0.009924447837418065,
      "av_wer": null,
      "strict_wer": 0.016286327286912424,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005461283401599376,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.06393221644521471,
      "wer_uncapped": 0.06720585403427691,
      "cer": 0.034140621476570605,
      "av_wer": null,
      "strict_wer": 0.09532062391681109,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01733102253032929,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.029944289693593314,
      "wer_uncapped": 0.029944289693593314,
      "cer": 0.016847561963388952,
      "av_wer": null,
      "strict_wer": 0.032729805013927575,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.11833688699360341,
      "wer_uncapped": 0.1187937861711849,
      "cer": 0.0829789934632227,
      "av_wer": null,
      "strict_wer": 0.12351507767286019,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023149558330795003,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08422575976845152,
      "wer_uncapped": 0.08422575976845152,
      "cer": 0.053092583181369765,
      "av_wer": null,
      "strict_wer": 0.08755426917510854,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023299565846599132,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.14106583072100312,
      "wer_uncapped": 0.14615987460815047,
      "cer": 0.10987039777568501,
      "av_wer": null,
      "strict_wer": 0.1459639498432602,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.032327586206896554,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.020020891364902507,
      "wer_uncapped": 0.020020891364902507,
      "cer": 0.008423780981694476,
      "av_wer": null,
      "strict_wer": 0.022458217270194987,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002437325905292479,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06762107828205909,
      "wer_uncapped": 0.06777337800791959,
      "cer": 0.0394745192612807,
      "av_wer": null,
      "strict_wer": 0.07523606457508376,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02375875723423698,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07163531114327062,
      "wer_uncapped": 0.07163531114327062,
      "cer": 0.04349645750500732,
      "av_wer": null,
      "strict_wer": 0.07568740955137482,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019247467438494936,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.10286050156739812,
      "wer_uncapped": 0.10560344827586207,
      "cer": 0.0753845463922149,
      "av_wer": null,
      "strict_wer": 0.10913009404388714,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.042123824451410656,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.1467128027681661,
      "wer_uncapped": 0.1477508650519031,
      "cer": 0.08660311830340649,
      "av_wer": null,
      "strict_wer": 0.14982698961937715,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012802768166089966,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.07890193370165746,
      "wer_uncapped": 0.07890193370165746,
      "cer": 0.04485588049652851,
      "av_wer": null,
      "strict_wer": 0.0898653314917127,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020804558011049724,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.10776462395543175,
      "wer_uncapped": 0.10811281337047354,
      "cer": 0.0713186457152114,
      "av_wer": null,
      "strict_wer": 0.11055013927576601,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009401114206128134,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.2005787389582699,
      "wer_uncapped": 0.20073103868413036,
      "cer": 0.143015802500476,
      "av_wer": null,
      "strict_wer": 0.20453853183064272,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03411513859275053,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.13473227206946453,
      "wer_uncapped": 0.13473227206946453,
      "cer": 0.08711249290006277,
      "av_wer": null,
      "strict_wer": 0.13921852387843706,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027641099855282198,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.2125783699059561,
      "wer_uncapped": 0.21434169278996865,
      "cer": 0.15677833086685503,
      "av_wer": null,
      "strict_wer": 0.21786833855799373,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.039380877742946706,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.3965397923875433,
      "wer_uncapped": 0.4024221453287197,
      "cer": 0.3116825537574817,
      "av_wer": null,
      "strict_wer": 0.39930795847750866,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03044982698961938,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1534875690607735,
      "wer_uncapped": 0.1534875690607735,
      "cer": 0.10730065221965075,
      "av_wer": null,
      "strict_wer": 0.162292817679558,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02175414364640884,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.053171908068449944,
      "cer": 0.029930697034360288,
      "wer_arith": 0.061018225720169204,
      "done": 9,
      "total": 9,
      "ci": [
       0.04978,
       0.0562
      ]
     },
     "accented": {
      "wer": 0.13519442768606377,
      "cer": 0.10336065332980818,
      "wer_arith": 0.13519442768606374,
      "done": 1,
      "total": 1,
      "ci": [
       0.11595,
       0.15515
      ]
     },
     "noisy": {
      "wer": 0.08634802391484375,
      "cer": 0.058494644216294946,
      "wer_arith": 0.09751750618062906,
      "done": 5,
      "total": 5,
      "ci": [
       0.0786,
       0.09561
      ]
     },
     "telephony": {
      "wer": 0.05728206415553552,
      "cer": 0.0330834927003929,
      "wer_arith": 0.07092324063153334,
      "done": 8,
      "total": 8,
      "ci": [
       0.0529,
       0.06148
      ]
     },
     "callcenter": {
      "wer": 0.18309871673380884,
      "cer": 0.12923438333084664,
      "wer_arith": 0.2009468943895732,
      "done": 6,
      "total": 6,
      "ci": [
       0.17066,
       0.19599
      ]
     }
    },
    "arena": 0.08046981017505316,
    "arena_arith": 0.10391450669320573,
    "arena_cer": 0.05004937861524918,
    "arena_strict": 0.08677224364747346,
    "zero_shot": 0.07638084196716324,
    "arena_real": 0.05778073934348514,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 35,
    "boh_share": 0.17666666666666667,
    "arena_ci": [
     0.07606,
     0.08468
    ],
    "rank_set": [
     30,
     34
    ]
   }
  },
  {
   "model": "qwen3-asr-0.6b",
   "hf_id": "Qwen/Qwen3-ASR-0.6B-hf",
   "params_b": 0.94,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.020065375911491073,
     "cer": 0.0065209962791404055,
     "rtfx": 199.8,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.043329978754333,
     "cer": 0.017719114371806628,
     "rtfx": 190.11,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.05805728692485468,
     "cer": 0.03347662481581159,
     "rtfx": 215.67,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09954074548755741,
     "cer": 0.05103729648589354,
     "rtfx": 265.02,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06894656746702739,
     "cer": 0.03997882695446325,
     "rtfx": 219.88,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11184746591341192,
     "cer": 0.07463020610795744,
     "rtfx": 195.98,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08761739041428901,
     "cer": 0.043945939118352914,
     "rtfx": 178.07,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.035069212164874186,
     "cer": 0.0183763922379148,
     "rtfx": 228.75,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.09754060324825986,
     "cer": 0.05514934660858743,
     "rtfx": 151.89,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.157187517139253,
     "cer": 0.1149789029535865,
     "rtfx": 183.0,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11929522064766421,
     "cer": 0.0790030566658829,
     "rtfx": 196.64,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.013555685586112736,
     "cer": 0.008934001635803117,
     "rtfx": 209.64,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.06142884652416715,
     "cer": 0.02734582416748843,
     "rtfx": 231.75,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02663649025069638,
     "cer": 0.01081762675869392,
     "rtfx": 175.28,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.11605239110569601,
     "cer": 0.07196929592376919,
     "rtfx": 205.28,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.10289435600578871,
     "cer": 0.062080327500561645,
     "rtfx": 209.72,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.17731191222570533,
     "cer": 0.12337207157351042,
     "rtfx": 178.55,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.026462395543175487,
     "cer": 0.009656225112821874,
     "rtfx": 176.3,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07340846786475784,
     "cer": 0.04126521969295924,
     "rtfx": 203.55,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0804630969609262,
     "cer": 0.04530590848955343,
     "rtfx": 206.05,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11677115987460815,
     "cer": 0.08039107175797823,
     "rtfx": 173.78,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.16608996539792387,
     "cer": 0.09737641878062395,
     "rtfx": 250.72,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09582182320441988,
     "cer": 0.04951202094739348,
     "rtfx": 180.74,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.12029944289693593,
     "cer": 0.07044730554818157,
     "rtfx": 179.65,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.19631434663417605,
     "cer": 0.1266278454208576,
     "rtfx": 205.81,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.16512301013024602,
     "cer": 0.10099598112877861,
     "rtfx": 208.72,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.25803291536050155,
     "cer": 0.17531820697288322,
     "rtfx": 176.93,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.4051903114186851,
     "cer": 0.2737083669292315,
     "rtfx": 85.73,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.18068024861878454,
     "cer": 0.1136464107185364,
     "rtfx": 185.69,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 40.91,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06911273625401095,
     "cer": 0.03787052699776978,
     "done": 9,
     "total": 9,
     "ci": [
      0.06698,
      0.07144
     ]
    },
    "accented": {
     "wer": 0.157187517139253,
     "cer": 0.1149789029535865,
     "done": 1,
     "total": 1,
     "ci": [
      0.14235,
      0.1749
     ]
    },
    "noisy": {
     "wer": 0.10843807404711012,
     "cer": 0.06944847568448362,
     "done": 5,
     "total": 5,
     "ci": [
      0.10088,
      0.11686
     ]
    },
    "telephony": {
     "wer": 0.07925018011951142,
     "cer": 0.04497333632307772,
     "done": 8,
     "total": 8,
     "ci": [
      0.07458,
      0.0844
     ]
    },
    "callcenter": {
     "wer": 0.22094004584322155,
     "cer": 0.14345735278641147,
     "done": 6,
     "total": 6,
     "ci": [
      0.20873,
      0.23426
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.95,
   "inserted_wpm": 37.85,
   "arena_wer": 0.11585734549454792,
   "arena_cer": 0.07181780599920637,
   "arena_ci": [
    0.11247,
    0.11974
   ],
   "rank_range": [
    32,
    34
   ],
   "rtfx": 182.9,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.95,
    "halluc_3plus": 0.2966666666666667,
    "halluc_3plus_ci": [
     0.24781,
     0.35066
    ],
    "inserted_wpm": 37.852004684101935,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.015891375408599445,
      "wer_uncapped": 0.015891375408599445,
      "cer": 0.006730891554003261,
      "av_wer": null,
      "strict_wer": 0.020065375911491073,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0013578073925069147,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.038969026053896905,
      "wer_uncapped": 0.038969026053896905,
      "cer": 0.019609155400883416,
      "av_wer": null,
      "strict_wer": 0.043329978754333,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026277535502627755,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05280481826458436,
      "wer_uncapped": 0.05280481826458436,
      "cer": 0.03359859823318975,
      "av_wer": null,
      "strict_wer": 0.05805728692485468,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022200434204075914,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09334614973833173,
      "wer_uncapped": 0.09537541386307807,
      "cer": 0.05312048441478016,
      "av_wer": null,
      "strict_wer": 0.09751148136281107,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012495994873438,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06539567128846804,
      "wer_uncapped": 0.06539567128846804,
      "cer": 0.04048832983434186,
      "av_wer": null,
      "strict_wer": 0.06894656746702739,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015809942509299967,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.10657830409039057,
      "wer_uncapped": 0.10793633548807649,
      "cer": 0.07411665801251144,
      "av_wer": null,
      "strict_wer": 0.110489434515726,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02873594437503395,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07909618976944138,
      "wer_uncapped": 0.07909618976944138,
      "cer": 0.04350437295897301,
      "av_wer": null,
      "strict_wer": 0.08761739041428901,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016607385040558868,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03223897493953584,
      "wer_uncapped": 0.03223897493953584,
      "cer": 0.018297666505429255,
      "av_wer": null,
      "strict_wer": 0.035069212164874186,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011449596047959656,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.08306264501160093,
      "wer_uncapped": 0.0851044083526682,
      "cer": 0.05153698366954851,
      "av_wer": null,
      "strict_wer": 0.09549883990719257,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011415313225058005,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.14073383425656777,
      "wer_uncapped": 0.15279986837053694,
      "cer": 0.10668017978320261,
      "av_wer": null,
      "strict_wer": 0.14506663741567488,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.027038885537212745,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.11590064119834043,
      "wer_uncapped": 0.1163855811196724,
      "cer": 0.08151009220034887,
      "av_wer": null,
      "strict_wer": 0.11881028072633223,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012231262460261868,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.01306807099668422,
      "wer_uncapped": 0.01306807099668422,
      "cer": 0.00908205438702714,
      "av_wer": null,
      "strict_wer": 0.013555685586112736,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023405500292568754,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05103023300596957,
      "wer_uncapped": 0.05141536683997689,
      "cer": 0.026744238488251477,
      "av_wer": null,
      "strict_wer": 0.06085114577315617,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008665511265164644,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.023502785515320333,
      "wer_uncapped": 0.023502785515320333,
      "cer": 0.011623197796857282,
      "av_wer": null,
      "strict_wer": 0.02663649025069638,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0017409470752089136,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.1114833993298812,
      "wer_uncapped": 0.1114833993298812,
      "cer": 0.07415751729390112,
      "av_wer": null,
      "strict_wer": 0.11605239110569601,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02604325312214438,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.09942112879884225,
      "wer_uncapped": 0.09942112879884225,
      "cer": 0.06361543750560521,
      "av_wer": null,
      "strict_wer": 0.10289435600578871,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018958031837916063,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.16967084639498434,
      "wer_uncapped": 0.17300156739811912,
      "cer": 0.12529709852459753,
      "av_wer": null,
      "strict_wer": 0.17398119122257052,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03428683385579937,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.023328690807799445,
      "wer_uncapped": 0.023328690807799445,
      "cer": 0.010327231491981208,
      "av_wer": null,
      "strict_wer": 0.026462395543175487,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002263231197771588,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06670727992689614,
      "wer_uncapped": 0.06670727992689614,
      "cer": 0.041981341625944024,
      "av_wer": null,
      "strict_wer": 0.07340846786475784,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021321961620469083,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07756874095513748,
      "wer_uncapped": 0.07756874095513748,
      "cer": 0.04594780425099399,
      "av_wer": null,
      "strict_wer": 0.0804630969609262,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017945007235890015,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.10952194357366771,
      "wer_uncapped": 0.11187304075235109,
      "cer": 0.08018296784609175,
      "av_wer": null,
      "strict_wer": 0.11442006269592477,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03193573667711599,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.15847750865051904,
      "wer_uncapped": 0.1615916955017301,
      "cer": 0.10389418458582723,
      "av_wer": null,
      "strict_wer": 0.1629757785467128,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014186851211072665,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.0856353591160221,
      "wer_uncapped": 0.0856353591160221,
      "cer": 0.04885335577529981,
      "av_wer": null,
      "strict_wer": 0.09582182320441988,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01631560773480663,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.11716573816155988,
      "wer_uncapped": 0.11768802228412256,
      "cer": 0.07658350882877045,
      "av_wer": null,
      "strict_wer": 0.11977715877437325,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009401114206128134,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.19174535485836125,
      "wer_uncapped": 0.19174535485836125,
      "cer": 0.13162404010915785,
      "av_wer": null,
      "strict_wer": 0.19631434663417605,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03000304599451721,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.16164978292329957,
      "wer_uncapped": 0.161794500723589,
      "cer": 0.10567696033003497,
      "av_wer": null,
      "strict_wer": 0.1649782923299566,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02301013024602026,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.24882445141065831,
      "wer_uncapped": 0.25176332288401254,
      "cer": 0.18189156464415446,
      "av_wer": null,
      "strict_wer": 0.25509404388714735,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03213166144200627,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.37093425605536334,
      "wer_uncapped": 0.4,
      "cer": 0.2782088228774108,
      "av_wer": null,
      "strict_wer": 0.37612456747404843,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.05328719723183391,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.171875,
      "wer_uncapped": 0.171875,
      "cer": 0.11838838628234799,
      "av_wer": null,
      "strict_wer": 0.18068024861878454,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015193370165745856,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.054867146277147616,
      "cer": 0.031320097720534124,
      "wer_arith": 0.06304257272942769,
      "done": 9,
      "total": 9,
      "ci": [
       0.05146,
       0.05787
      ]
     },
     "accented": {
      "wer": 0.14073383425656774,
      "cer": 0.10668017978320264,
      "wer_arith": 0.14073383425656777,
      "done": 1,
      "total": 1,
      "ci": [
       0.12006,
       0.16058
      ]
     },
     "noisy": {
      "wer": 0.08747828474686994,
      "cer": 0.05618742707654888,
      "wer_arith": 0.1039957602474737,
      "done": 5,
      "total": 5,
      "ci": [
       0.0805,
       0.09546
      ]
     },
     "telephony": {
      "wer": 0.05750940970202485,
      "cer": 0.03441802028236915,
      "wer_arith": 0.07316722837908697,
      "done": 8,
      "total": 8,
      "ci": [
       0.05321,
       0.06202
      ]
     },
     "callcenter": {
      "wer": 0.19652473526173866,
      "cer": 0.1361937646635646,
      "wer_arith": 0.21036576390154038,
      "done": 6,
      "total": 6,
      "ci": [
       0.1852,
       0.20866
      ]
     }
    },
    "arena": 0.08306621549260296,
    "arena_arith": 0.10849587946839029,
    "arena_cer": 0.05168331320003115,
    "arena_strict": 0.08890644610442842,
    "zero_shot": 0.06951534390564094,
    "arena_real": 0.058016774803767365,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 37,
    "boh_share": 0.3,
    "arena_ci": [
     0.07894,
     0.08719
    ],
    "rank_set": [
     32,
     35
    ]
   }
  },
  {
   "model": "canary-1b-v2",
   "hf_id": "nvidia/canary-1b-v2",
   "params_b": 0.98,
   "license": "CC-BY-4.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.018606990193613275,
     "cer": 0.0062742045713417875,
     "rtfx": 123.31,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03494353125349435,
     "cer": 0.012969998689899122,
     "rtfx": 121.52,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06218922893760067,
     "cer": 0.03469439945443696,
     "rtfx": 117.21,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09323934636334508,
     "cer": 0.044898194834686884,
     "rtfx": 168.6,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.0616334122421373,
     "cer": 0.03692049815471027,
     "rtfx": 119.53,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11744255527187789,
     "cer": 0.08009318602616533,
     "rtfx": 121.44,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.11077560838301902,
     "cer": 0.06077554629278767,
     "rtfx": 91.25,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.02426285184994597,
     "cer": 0.011179239866804455,
     "rtfx": 113.26,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.13419953596287704,
     "cer": 0.08357965152457997,
     "rtfx": 128.21,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.18954642680853398,
     "cer": 0.1381504922644163,
     "rtfx": 111.36,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.15124737324209278,
     "cer": 0.10684018442224925,
     "rtfx": 133.73,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.021357519016968987,
     "cer": 0.014155988507434516,
     "rtfx": 123.74,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09069901790872328,
     "cer": 0.035651976029735265,
     "rtfx": 174.36,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.028551532033426183,
     "cer": 0.011912662596230422,
     "rtfx": 104.06,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.1253426743831861,
     "cer": 0.07792482795129699,
     "rtfx": 109.78,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08683068017366136,
     "cer": 0.05254486907466114,
     "rtfx": 111.67,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1765282131661442,
     "cer": 0.12304002951484966,
     "rtfx": 104.71,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.024721448467966575,
     "cer": 0.008859835412795327,
     "rtfx": 105.55,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0696009747182455,
     "cer": 0.03716251985177343,
     "rtfx": 111.45,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07091172214182344,
     "cer": 0.04103741793764509,
     "rtfx": 111.47,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11794670846394985,
     "cer": 0.08249400479616308,
     "rtfx": 105.52,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.15674740484429064,
     "cer": 0.08224275879178813,
     "rtfx": 164.97,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.10151933701657459,
     "cer": 0.05529295745910837,
     "rtfx": 100.72,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.10637186629526463,
     "cer": 0.0674940270772498,
     "rtfx": 104.19,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.19600974718245506,
     "cer": 0.12983059820010587,
     "rtfx": 110.11,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.14167872648335744,
     "cer": 0.0914605227028781,
     "rtfx": 67.41,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.2294278996865204,
     "cer": 0.1641025641025641,
     "rtfx": 105.25,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.41695501730103807,
     "cer": 0.2983315760094275,
     "rtfx": 170.56,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.18318370165745856,
     "cer": 0.12031149046145476,
     "rtfx": 102.1,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 81.59,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.07303256227310118,
     "cer": 0.04126499104615694,
     "done": 9,
     "total": 9,
     "ci": [
      0.07052,
      0.07555
     ]
    },
    "accented": {
     "wer": 0.18954642680853398,
     "cer": 0.1381504922644163,
     "done": 1,
     "total": 1,
     "ci": [
      0.17454,
      0.20789
     ]
    },
    "noisy": {
     "wer": 0.11370009459970212,
     "cer": 0.07445251471185749,
     "done": 5,
     "total": 5,
     "ci": [
      0.1059,
      0.1221
     ]
    },
    "telephony": {
     "wer": 0.08168801657231786,
     "cer": 0.0446121823483054,
     "done": 8,
     "total": 8,
     "ci": [
      0.07753,
      0.08639
     ]
    },
    "callcenter": {
     "wer": 0.21227115976768238,
     "cer": 0.1452551297589467,
     "done": 6,
     "total": 6,
     "ci": [
      0.19843,
      0.22596
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.20.1"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.24,
   "inserted_wpm": 41.0,
   "arena_wer": 0.11823454700246748,
   "arena_cer": 0.0752382939102861,
   "arena_ci": [
    0.11465,
    0.12198
   ],
   "rank_range": [
    33,
    34
   ],
   "rtfx": 113.3,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.24,
    "halluc_3plus": 0.23666666666666666,
    "halluc_3plus_ci": [
     0.19209,
     0.2879
    ],
    "inserted_wpm": 40.9970445547315,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.015137037968317828,
      "wer_uncapped": 0.015137037968317828,
      "cer": 0.006464894121456741,
      "av_wer": null,
      "strict_wer": 0.018606990193613275,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0015086748805632386,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.031141675053114166,
      "wer_uncapped": 0.03125349435312535,
      "cer": 0.01441574086467675,
      "av_wer": null,
      "strict_wer": 0.03483171195348317,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0020127474002012745,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05665662861544926,
      "wer_uncapped": 0.05665662861544926,
      "cer": 0.03460611812805724,
      "av_wer": null,
      "strict_wer": 0.06218922893760067,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022760697527838086,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.08651073373918616,
      "wer_uncapped": 0.0889672113638791,
      "cer": 0.046514828321750495,
      "av_wer": null,
      "strict_wer": 0.09078286873865214,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011961977998504753,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.05854751437267501,
      "wer_uncapped": 0.05854751437267501,
      "cer": 0.03733923751389306,
      "av_wer": null,
      "strict_wer": 0.0616334122421373,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014076766993574569,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.1121190721929491,
      "wer_uncapped": 0.11282524851974578,
      "cer": 0.07943278194001434,
      "av_wer": null,
      "strict_wer": 0.11673637894508121,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021728502362974633,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.09726451546866603,
      "wer_uncapped": 0.10143555362215001,
      "cer": 0.05778061384082179,
      "av_wer": null,
      "strict_wer": 0.10655339184728371,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.004,
      "insertions": 0.02469356943627012,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.02138115576596511,
      "wer_uncapped": 0.02138115576596511,
      "cer": 0.011314418516726992,
      "av_wer": null,
      "strict_wer": 0.02426285184994597,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003988061544794937,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.11767981438515081,
      "wer_uncapped": 0.12055684454756381,
      "cer": 0.07855427473583093,
      "av_wer": null,
      "strict_wer": 0.13132250580046403,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017354988399071927,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.17122799319914442,
      "wer_uncapped": 0.18340371853233148,
      "cer": 0.13006374665844128,
      "av_wer": null,
      "strict_wer": 0.17731585586573795,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.031042615038666156,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.1469367961635864,
      "wer_uncapped": 0.14796055821973167,
      "cer": 0.10935708945925741,
      "av_wer": null,
      "strict_wer": 0.15022361118594751,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.021445120965569265,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.020674858591769065,
      "wer_uncapped": 0.020674858591769065,
      "cer": 0.014241714270671545,
      "av_wer": null,
      "strict_wer": 0.021357519016968987,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026331187829139848,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05873290968611593,
      "wer_uncapped": 0.062006547275178125,
      "cer": 0.03269742479592297,
      "av_wer": null,
      "strict_wer": 0.08704024648565377,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014635085692278067,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.02541782729805014,
      "wer_uncapped": 0.02541782729805014,
      "cer": 0.012676170419569092,
      "av_wer": null,
      "strict_wer": 0.028551532033426183,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002959610027855153,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.11909838562290588,
      "wer_uncapped": 0.11985988425220835,
      "cer": 0.08085295424255887,
      "av_wer": null,
      "strict_wer": 0.12458117575388364,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02908924763935425,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08306801736613603,
      "wer_uncapped": 0.08321273516642547,
      "cer": 0.05351110579653822,
      "av_wer": null,
      "strict_wer": 0.08668596237337192,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02040520984081042,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.16477272727272727,
      "wer_uncapped": 0.17123824451410657,
      "cer": 0.1251625633436477,
      "av_wer": null,
      "strict_wer": 0.1700626959247649,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024490595611285266,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.021239554317548745,
      "wer_uncapped": 0.021239554317548745,
      "cer": 0.009436254657378908,
      "av_wer": null,
      "strict_wer": 0.024721448467966575,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0017409470752089136,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.06457508376484922,
      "wer_uncapped": 0.06457508376484922,
      "cer": 0.037887922827949484,
      "av_wer": null,
      "strict_wer": 0.0696009747182455,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021474261346329578,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.06700434153400868,
      "wer_uncapped": 0.06700434153400868,
      "cer": 0.04134405548414098,
      "av_wer": null,
      "strict_wer": 0.07091172214182344,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016208393632416787,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.11167711598746081,
      "wer_uncapped": 0.11226489028213166,
      "cer": 0.08300820664603793,
      "av_wer": null,
      "strict_wer": 0.11735893416927899,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020572100313479624,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.14913494809688582,
      "wer_uncapped": 0.1522491349480969,
      "cer": 0.08889381511859898,
      "av_wer": null,
      "strict_wer": 0.15363321799307958,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015570934256055362,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.09159185082872928,
      "wer_uncapped": 0.09159185082872928,
      "cer": 0.05419734904270987,
      "av_wer": null,
      "strict_wer": 0.10151933701657459,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017351519337016574,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.10254178272980502,
      "wer_uncapped": 0.10358635097493037,
      "cer": 0.0716831362384578,
      "av_wer": null,
      "strict_wer": 0.10532729805013928,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009227019498607242,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.19159305513250077,
      "wer_uncapped": 0.19204995431008223,
      "cer": 0.13486069683315352,
      "av_wer": null,
      "strict_wer": 0.1955528480048736,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031678342978982636,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.11490593342981187,
      "wer_uncapped": 0.13863965267727932,
      "cer": 0.0780245732564049,
      "av_wer": null,
      "strict_wer": 0.11794500723589002,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04399421128798842,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.21767241379310345,
      "wer_uncapped": 0.22296238244514108,
      "cer": 0.16713753979999102,
      "av_wer": null,
      "strict_wer": 0.22413793103448276,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030956112852664575,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.3958477508650519,
      "wer_uncapped": 0.41557093425605535,
      "cer": 0.306362225670583,
      "av_wer": null,
      "strict_wer": 0.3972318339100346,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.052941176470588235,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1742921270718232,
      "wer_uncapped": 0.1742921270718232,
      "cer": 0.12396381232905533,
      "av_wer": null,
      "strict_wer": 0.18318370165745856,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018646408839779006,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05369739736778608,
      "cer": 0.03050151050025253,
      "wer_arith": 0.06627090528460816,
      "done": 9,
      "total": 9,
      "ci": [
       0.05043,
       0.05656
      ]
     },
     "accented": {
      "wer": 0.17122799319914442,
      "cer": 0.13006374665844125,
      "wer_arith": 0.17122799319914442,
      "done": 1,
      "total": 1,
      "ci": [
       0.14772,
       0.19553
      ]
     },
     "noisy": {
      "wer": 0.09055215871058594,
      "cer": 0.059578539937953715,
      "wer_arith": 0.10785875074468115,
      "done": 5,
      "total": 5,
      "ci": [
       0.08273,
       0.09902
      ]
     },
     "telephony": {
      "wer": 0.06010072760437162,
      "cer": 0.035889713820028174,
      "wer_arith": 0.07307883285092094,
      "done": 8,
      "total": 8,
      "ci": [
       0.05563,
       0.06449
      ]
     },
     "callcenter": {
      "wer": 0.17990313760021487,
      "cer": 0.12982439998878653,
      "wer_arith": 0.19947551050368273,
      "done": 6,
      "total": 6,
      "ci": [
       0.16785,
       0.19214
      ]
     }
    },
    "arena": 0.08285693184969502,
    "arena_arith": 0.10925975637605807,
    "arena_cer": 0.05210233473974973,
    "arena_strict": 0.08927190882593629,
    "zero_shot": 0.07882671247638691,
    "arena_real": 0.06123334357077063,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 36,
    "boh_share": 0.24,
    "arena_ci": [
     0.07846,
     0.0869
    ],
    "rank_set": [
     31,
     34
    ]
   }
  },
  {
   "model": "whisper-large-v3",
   "hf_id": "openai/whisper-large-v3",
   "params_b": 1.54,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.018104098566758865,
     "cer": 0.005894525020882375,
     "rtfx": 78.94,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03438443475343844,
     "cer": 0.013657801650727107,
     "rtfx": 71.75,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.05763708943203306,
     "cer": 0.033172181156155243,
     "rtfx": 99.36,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.1035992737370501,
     "cer": 0.05157615180324083,
     "rtfx": 73.93,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.0910128508623605,
     "cer": 0.061732660893090825,
     "rtfx": 96.66,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.1127166060079309,
     "cer": 0.07734643634661946,
     "rtfx": 79.06,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09621535863251363,
     "cer": 0.0524643172919035,
     "rtfx": 98.09,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03131271548397056,
     "cer": 0.01714088873579056,
     "rtfx": 120.62,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.14737819025522042,
     "cer": 0.09754200373366521,
     "rtfx": 46.04,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1914111775352383,
     "cer": 0.14665963431786216,
     "rtfx": 74.43,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.13896222856834958,
     "cer": 0.0973532749261391,
     "rtfx": 76.19,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01579871269748391,
     "cer": 0.01002453704674622,
     "rtfx": 91.39,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08511457731561718,
     "cer": 0.03367973905787757,
     "rtfx": 45.03,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.032729805013927575,
     "cer": 0.014666843642155562,
     "rtfx": 77.57,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12046908315565032,
     "cer": 0.07924827951296982,
     "rtfx": 98.76,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09580318379160636,
     "cer": 0.058535733007164074,
     "rtfx": 96.42,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1634012539184953,
     "cer": 0.12160118059398635,
     "rtfx": 74.09,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02402506963788301,
     "cer": 0.008693920891956464,
     "rtfx": 78.13,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07036247334754797,
     "cer": 0.03951826363155109,
     "rtfx": 99.59,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07916063675832127,
     "cer": 0.045855071016699535,
     "rtfx": 97.12,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.12284482758620689,
     "cer": 0.08555617044825678,
     "rtfx": 73.71,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1809688581314879,
     "cer": 0.10053960181107734,
     "rtfx": 75.72,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.10350483425414364,
     "cer": 0.05876151936613731,
     "rtfx": 101.31,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.11281337047353761,
     "cer": 0.06729492965224317,
     "rtfx": 76.85,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.22007310386841303,
     "cer": 0.15031762837480148,
     "rtfx": 99.56,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1463096960926194,
     "cer": 0.09006265445196077,
     "rtfx": 96.57,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.24941222570532914,
     "cer": 0.17919203099059214,
     "rtfx": 73.68,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.4491349480968858,
     "cer": 0.3164423494386901,
     "rtfx": 74.78,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.17748618784530387,
     "cer": 0.11510864760091134,
     "rtfx": 99.66,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 99.11,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.07692895752569738,
     "cer": 0.0456141074035639,
     "done": 9,
     "total": 9,
     "ci": [
      0.07423,
      0.07941
     ]
    },
    "accented": {
     "wer": 0.1914111775352383,
     "cer": 0.14665963431786216,
     "done": 1,
     "total": 1,
     "ci": [
      0.17583,
      0.20976
     ]
    },
    "noisy": {
     "wer": 0.11027311088960583,
     "cer": 0.07428106233648299,
     "done": 5,
     "total": 5,
     "ci": [
      0.10271,
      0.11894
     ]
    },
    "telephony": {
     "wer": 0.08522249871608648,
     "cer": 0.047828602908787786,
     "done": 8,
     "total": 8,
     "ci": [
      0.07987,
      0.09101
     ]
    },
    "callcenter": {
     "wer": 0.22587158868034815,
     "cer": 0.15306970675153317,
     "done": 6,
     "total": 6,
     "ci": [
      0.21335,
      0.23851
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.99,
   "inserted_wpm": 32.97,
   "arena_wer": 0.12303283030839467,
   "arena_cer": 0.07964219833118513,
   "arena_ci": [
    0.11948,
    0.12671
   ],
   "rank_range": [
    34,
    35
   ],
   "rtfx": 84.5,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.99,
    "halluc_3plus": 0.23666666666666666,
    "halluc_3plus_ci": [
     0.19209,
     0.2879
    ],
    "inserted_wpm": 32.96715552333687,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.014282122202665325,
      "wer_uncapped": 0.014282122202665325,
      "cer": 0.005886638833312131,
      "av_wer": null,
      "strict_wer": 0.018104098566758865,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0020115665074176515,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.030582578553058258,
      "wer_uncapped": 0.030582578553058258,
      "cer": 0.014924374247088742,
      "av_wer": null,
      "strict_wer": 0.03438443475343844,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002963211450296321,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.05280481826458436,
      "wer_uncapped": 0.05280481826458436,
      "cer": 0.033116740892166166,
      "av_wer": null,
      "strict_wer": 0.05763708943203306,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022830730443308356,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09526861048809142,
      "wer_uncapped": 0.0991135319876108,
      "cer": 0.05312048441478016,
      "av_wer": null,
      "strict_wer": 0.09975435223753071,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014204848873224395,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.08767331755157254,
      "wer_uncapped": 0.08767331755157254,
      "cer": 0.061588130480038104,
      "av_wer": null,
      "strict_wer": 0.0910128508623605,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018642204937436593,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.1080992992557988,
      "wer_uncapped": 0.1092943668857624,
      "cer": 0.0762060183468091,
      "av_wer": null,
      "strict_wer": 0.1115215383779673,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024335922646531588,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08725914173852964,
      "wer_uncapped": 0.08725914173852964,
      "cer": 0.05103662274939629,
      "av_wer": null,
      "strict_wer": 0.09621535863251363,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.016709741805061542,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.028533937117274737,
      "wer_uncapped": 0.028533937117274737,
      "cer": 0.016907688800671637,
      "av_wer": null,
      "strict_wer": 0.03131271548397056,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006329439613029383,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.13150812064965198,
      "wer_uncapped": 0.1340139211136891,
      "cer": 0.09121037463976946,
      "av_wer": null,
      "strict_wer": 0.1448723897911833,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017540603248259862,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.17342181758350245,
      "wer_uncapped": 0.1852684692590358,
      "cer": 0.1360565200787286,
      "av_wer": null,
      "strict_wer": 0.17956452585970492,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026216201393078484,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.13486718034376852,
      "wer_uncapped": 0.1355676491190258,
      "cer": 0.09955145776227262,
      "av_wer": null,
      "strict_wer": 0.1382617597930923,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.016110781830917614,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.015408621025941096,
      "wer_uncapped": 0.015408621025941096,
      "cer": 0.010056071814041646,
      "av_wer": null,
      "strict_wer": 0.01579871269748391,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002047981275599766,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05257076834199884,
      "wer_uncapped": 0.05622953976506836,
      "cer": 0.029450232264465793,
      "av_wer": null,
      "strict_wer": 0.08107067205854035,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01424995185827075,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.029596100278551533,
      "wer_uncapped": 0.029596100278551533,
      "cer": 0.015187105135266483,
      "av_wer": null,
      "strict_wer": 0.032729805013927575,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0036559888579387185,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.11513859275053305,
      "wer_uncapped": 0.11529089247639354,
      "cer": 0.08091641809989211,
      "av_wer": null,
      "strict_wer": 0.12031678342978983,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.028023149558330795,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.09232995658465991,
      "wer_uncapped": 0.09232995658465991,
      "cer": 0.058862216376192045,
      "av_wer": null,
      "strict_wer": 0.09580318379160636,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02503617945007236,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.15478056426332287,
      "wer_uncapped": 0.1590909090909091,
      "cer": 0.12121619803578636,
      "av_wer": null,
      "strict_wer": 0.1590909090909091,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02586206896551724,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.02036908077994429,
      "wer_uncapped": 0.02054317548746518,
      "cer": 0.008909768346023004,
      "av_wer": null,
      "strict_wer": 0.023850974930362118,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.0651842826682912,
      "wer_uncapped": 0.0651842826682912,
      "cer": 0.04014088976327981,
      "av_wer": null,
      "strict_wer": 0.07036247334754797,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019951264087724643,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07554269175108538,
      "wer_uncapped": 0.07554269175108538,
      "cer": 0.04609727661355415,
      "av_wer": null,
      "strict_wer": 0.07916063675832127,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02069464544138929,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.11735893416927899,
      "wer_uncapped": 0.11853448275862069,
      "cer": 0.08520561460155164,
      "av_wer": null,
      "strict_wer": 0.12166927899686521,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02233542319749216,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.16608996539792387,
      "wer_uncapped": 0.17716262975778546,
      "cer": 0.10603709450971699,
      "av_wer": null,
      "strict_wer": 0.1698961937716263,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028719723183391003,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.09331837016574586,
      "wer_uncapped": 0.09331837016574586,
      "cer": 0.0571849358300021,
      "av_wer": null,
      "strict_wer": 0.10350483425414364,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016747237569060772,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.11002785515320335,
      "wer_uncapped": 0.11055013927576601,
      "cer": 0.0716831362384578,
      "av_wer": null,
      "strict_wer": 0.11229108635097493,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013753481894150418,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.21184891867194638,
      "wer_uncapped": 0.2136765153822723,
      "cer": 0.15364599860379513,
      "av_wer": null,
      "strict_wer": 0.2182455071580871,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03624733475479744,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.14283646888567295,
      "wer_uncapped": 0.14298118668596238,
      "cer": 0.09303159845744521,
      "av_wer": null,
      "strict_wer": 0.14616497829232997,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02662807525325615,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.23883228840125392,
      "wer_uncapped": 0.24490595611285265,
      "cer": 0.18269877572985335,
      "av_wer": null,
      "strict_wer": 0.24333855799373041,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.036246081504702196,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.4245674740484429,
      "wer_uncapped": 0.4463667820069204,
      "cer": 0.32394886573560927,
      "av_wer": null,
      "strict_wer": 0.4273356401384083,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05986159169550173,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.1682493093922652,
      "wer_uncapped": 0.1682493093922652,
      "cer": 0.11723122238586156,
      "av_wer": null,
      "strict_wer": 0.17748618784530387,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021926795580110497,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05745140307762057,
      "cer": 0.033768188269279804,
      "wer_arith": 0.07066799398013635,
      "done": 9,
      "total": 9,
      "ci": [
       0.05366,
       0.06064
      ]
     },
     "accented": {
      "wer": 0.17342181758350245,
      "cer": 0.13605652007872854,
      "wer_arith": 0.17342181758350245,
      "done": 1,
      "total": 1,
      "ci": [
       0.15161,
       0.19633
      ]
     },
     "noisy": {
      "wer": 0.09193569179867342,
      "cer": 0.0614032429293159,
      "wer_arith": 0.10534247884416717,
      "done": 5,
      "total": 5,
      "ci": [
       0.08255,
       0.10228
      ]
     },
     "telephony": {
      "wer": 0.05904800055911015,
      "cer": 0.03550027192052125,
      "wer_arith": 0.07573033928752619,
      "done": 8,
      "total": 8,
      "ci": [
       0.05466,
       0.0631
      ]
     },
     "callcenter": {
      "wer": 0.1960620363481267,
      "cer": 0.13866622361403666,
      "wer_arith": 0.21606038575879746,
      "done": 6,
      "total": 6,
      "ci": [
       0.18289,
       0.20972
      ]
     }
    },
    "arena": 0.08640576935275696,
    "arena_arith": 0.11485917373427074,
    "arena_cer": 0.05503486597136457,
    "arena_strict": 0.09291405225990522,
    "zero_shot": 0.07409140666250288,
    "arena_real": 0.06254818067103533,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 38,
    "boh_share": 0.8266666666666667,
    "arena_ci": [
     0.08154,
     0.09082
    ],
    "rank_set": [
     34,
     36
    ]
   }
  },
  {
   "model": "soniox-stt-async-v5",
   "hf_id": "https://soniox.com",
   "params_b": null,
   "license": "proprietary API",
   "kind": "api",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.027105858687452855,
     "cer": 0.009150277166071835,
     "rtfx": 30.64,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.059543777255954375,
     "cer": 0.025677977204244726,
     "rtfx": 26.24,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06204916310666013,
     "cer": 0.03523022029543213,
     "rtfx": 39.48,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.13179536473352557,
     "cer": 0.06964704976713752,
     "rtfx": 23.98,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07435745688197498,
     "cer": 0.04277249268500684,
     "rtfx": 38.0,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11429192242924656,
     "cer": 0.0788215426560052,
     "rtfx": 29.89,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09521738017861256,
     "cer": 0.04923582164961475,
     "rtfx": 50.37,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.035609530180620595,
     "cer": 0.018325869789872544,
     "rtfx": 59.57,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.15155452436194897,
     "cer": 0.09503344741754823,
     "rtfx": 15.27,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.18131958536719137,
     "cer": 0.12950070323488044,
     "rtfx": 27.17,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.13147260089444474,
     "cer": 0.0799742381336959,
     "rtfx": 28.24,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.013750731421884143,
     "cer": 0.008535536774112368,
     "rtfx": 32.71,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.0878105141536684,
     "cer": 0.03485549571417735,
     "rtfx": 12.54,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.03934540389972145,
     "cer": 0.016027342713034246,
     "rtfx": 27.54,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12366737739872068,
     "cer": 0.07752779248279514,
     "rtfx": 39.02,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09073806078147612,
     "cer": 0.05199570654751504,
     "rtfx": 37.91,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.16575235109717867,
     "cer": 0.11953514111787493,
     "rtfx": 25.78,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.03951949860724234,
     "cer": 0.014666843642155562,
     "rtfx": 28.55,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07462686567164178,
     "cer": 0.040788777130757015,
     "rtfx": 40.63,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08205499276410999,
     "cer": 0.04575522328449115,
     "rtfx": 35.8,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.12049373040752351,
     "cer": 0.0823464305478694,
     "rtfx": 27.49,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.21314878892733563,
     "cer": 0.11486696024313094,
     "rtfx": 23.4,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09228245856353591,
     "cer": 0.04750569592273948,
     "rtfx": 50.42,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.13370473537604458,
     "cer": 0.07499336341916644,
     "rtfx": 28.45,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.21855010660980811,
     "cer": 0.13409211222869244,
     "rtfx": 38.5,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.13357452966714906,
     "cer": 0.07723222086318364,
     "rtfx": 36.87,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.24490595611285265,
     "cer": 0.16380741560597675,
     "rtfx": 26.3,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.5197231833910034,
     "cer": 0.34063139614215715,
     "rtfx": 23.71,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15124309392265192,
     "cer": 0.08815928180365219,
     "rtfx": 50.23,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 34.78,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.08350277531288851,
     "cer": 0.047099410958992644,
     "done": 9,
     "total": 9,
     "ci": [
      0.08094,
      0.08648
     ]
    },
    "accented": {
     "wer": 0.18131958536719137,
     "cer": 0.12950070323488044,
     "done": 1,
     "total": 1,
     "ci": [
      0.16536,
      0.19899
     ]
    },
    "noisy": {
     "wer": 0.11019515881430833,
     "cer": 0.06901204419898305,
     "done": 5,
     "total": 5,
     "ci": [
      0.10325,
      0.11774
     ]
    },
    "telephony": {
     "wer": 0.09046094756461771,
     "cer": 0.04866512040742916,
     "done": 8,
     "total": 8,
     "ci": [
      0.08534,
      0.09624
     ]
    },
    "callcenter": {
     "wer": 0.23361693417991827,
     "cer": 0.14648596501047143,
     "done": 6,
     "total": 6,
     "ci": [
      0.22072,
      0.24621
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "closed commercial API; RTFx is API wall-clock time",
   "training_data": "",
   "hallucination_rate": 0.23,
   "inserted_wpm": 34.8,
   "arena_wer": 0.1277387478425374,
   "arena_cer": 0.07722062984626654,
   "arena_ci": [
    0.1241,
    0.13143
   ],
   "rank_range": null,
   "rtfx": 32.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.23,
    "halluc_3plus": 0.22333333333333333,
    "halluc_3plus_ci": [
     0.17987,
     0.27379
    ],
    "inserted_wpm": 34.79618580271009,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.022127231581594166,
      "wer_uncapped": 0.022127231581594166,
      "cer": 0.0093446054564169,
      "av_wer": null,
      "strict_wer": 0.027105858687452855,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002816193110384712,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.05344962540534496,
      "wer_uncapped": 0.05356144470535614,
      "cer": 0.027774059697496987,
      "av_wer": null,
      "strict_wer": 0.05943195795594319,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005758693950575869,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.0572869248546817,
      "wer_uncapped": 0.05735695777015197,
      "cer": 0.03481054245455209,
      "av_wer": null,
      "strict_wer": 0.061979130191189856,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026122277470411095,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.12090142048488732,
      "wer_uncapped": 0.1268824094841397,
      "cer": 0.07082731255304021,
      "av_wer": null,
      "strict_wer": 0.1258143757342732,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028516501121435438,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.0700879269529929,
      "wer_uncapped": 0.07013019952654717,
      "cer": 0.04286999629518551,
      "av_wer": null,
      "strict_wer": 0.0743151843084207,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0184308420696652,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.10983757944483677,
      "wer_uncapped": 0.11086968330707805,
      "cer": 0.07856736641693247,
      "av_wer": null,
      "strict_wer": 0.11325981856700527,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.032973002335814,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08572379027098953,
      "wer_uncapped": 0.08572379027098953,
      "cer": 0.04853421418114936,
      "av_wer": null,
      "strict_wer": 0.09521738017861256,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019933979886895777,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03257345752071219,
      "wer_uncapped": 0.03257345752071219,
      "cer": 0.01812530927003931,
      "av_wer": null,
      "strict_wer": 0.035609530180620595,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012916173519271342,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.12770301624129932,
      "wer_uncapped": 0.13819025522041764,
      "cer": 0.08568683957732949,
      "av_wer": null,
      "strict_wer": 0.1408816705336427,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.035359628770301625,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1623430044424944,
      "wer_uncapped": 0.17599956123512314,
      "cer": 0.12163273699362534,
      "av_wer": null,
      "strict_wer": 0.1676630285745626,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03877584599352822,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.1255994396249798,
      "wer_uncapped": 0.1270542593889757,
      "cer": 0.08319212559182657,
      "av_wer": null,
      "strict_wer": 0.13001778113044885,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021014063257718627,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.013555685586112736,
      "wer_uncapped": 0.013555685586112736,
      "cer": 0.008713507252481111,
      "av_wer": null,
      "strict_wer": 0.013750731421884143,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005168714647942266,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.055266705180050064,
      "wer_uncapped": 0.057770075101097634,
      "cer": 0.031479727596626525,
      "av_wer": null,
      "strict_wer": 0.08511457731561718,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01694588869632197,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.035515320334261836,
      "wer_uncapped": 0.035515320334261836,
      "cer": 0.016645067228252066,
      "av_wer": null,
      "strict_wer": 0.03934540389972145,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006789693593314763,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.11787998781602194,
      "wer_uncapped": 0.11925068534876637,
      "cer": 0.0777749571618963,
      "av_wer": null,
      "strict_wer": 0.12229667986597624,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04675601583917149,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08712011577424023,
      "wer_uncapped": 0.08712011577424023,
      "cer": 0.052405010313593015,
      "av_wer": null,
      "strict_wer": 0.09073806078147612,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02301013024602026,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.15634796238244514,
      "wer_uncapped": 0.16222570532915362,
      "cer": 0.11830126911520696,
      "av_wer": null,
      "strict_wer": 0.15987460815047022,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04741379310344827,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.03603760445682451,
      "wer_uncapped": 0.03603760445682451,
      "cer": 0.015430098817430746,
      "av_wer": null,
      "strict_wer": 0.03951949860724234,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004526462395543176,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.07021017362168748,
      "wer_uncapped": 0.07036247334754797,
      "cer": 0.041441898838611414,
      "av_wer": null,
      "strict_wer": 0.0744745659457813,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022235759975632045,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.07829232995658467,
      "wer_uncapped": 0.07829232995658467,
      "cer": 0.046007593196018055,
      "av_wer": null,
      "strict_wer": 0.08205499276410999,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020549927641099856,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.1152037617554859,
      "wer_uncapped": 0.11696708463949844,
      "cer": 0.0826942912238217,
      "av_wer": null,
      "strict_wer": 0.11873040752351097,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03702978056426332,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.20034602076124566,
      "wer_uncapped": 0.2093425605536332,
      "cer": 0.12103746397694524,
      "av_wer": null,
      "strict_wer": 0.2041522491349481,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03633217993079585,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08166436464088397,
      "wer_uncapped": 0.08166436464088397,
      "cer": 0.046728382074479276,
      "av_wer": null,
      "strict_wer": 0.09228245856353591,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01838743093922652,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.12952646239554316,
      "wer_uncapped": 0.1310933147632312,
      "cer": 0.0786489551271667,
      "av_wer": null,
      "strict_wer": 0.13213788300835655,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021413649025069637,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.2113920194943649,
      "wer_uncapped": 0.21459031373743528,
      "cer": 0.13682807641048422,
      "av_wer": null,
      "strict_wer": 0.21535181236673773,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06579348157173318,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.12952243125904486,
      "wer_uncapped": 0.12952243125904486,
      "cer": 0.07966876924456667,
      "av_wer": null,
      "strict_wer": 0.13357452966714906,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02503617945007236,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.22923197492163008,
      "wer_uncapped": 0.2413793103448276,
      "cer": 0.16422261087941165,
      "av_wer": null,
      "strict_wer": 0.23275862068965517,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06093260188087774,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.4508650519031142,
      "wer_uncapped": 0.5166089965397924,
      "cer": 0.33274218576812237,
      "av_wer": null,
      "strict_wer": 0.4536332179930796,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.15017301038062283,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.14157458563535913,
      "wer_uncapped": 0.14157458563535913,
      "cer": 0.09168945928887019,
      "av_wer": null,
      "strict_wer": 0.15124309392265192,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.025552486187845305,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.06559638588450725,
      "cer": 0.037929121776128685,
      "wer_arith": 0.07552121919525988,
      "done": 9,
      "total": 9
     },
     "accented": {
      "wer": 0.1623430044424944,
      "cer": 0.12163273699362534,
      "wer_arith": 0.1623430044424944,
      "done": 1,
      "total": 1
     },
     "noisy": {
      "wer": 0.0935429017773367,
      "cer": 0.05819878979687759,
      "wer_arith": 0.10449256518638979,
      "done": 5,
      "total": 5
     },
     "telephony": {
      "wer": 0.0639502911624925,
      "cer": 0.03733401864079033,
      "wer_arith": 0.08132208074485937,
      "done": 8,
      "total": 8
     },
     "callcenter": {
      "wer": 0.19313005226701868,
      "cer": 0.12749781810677288,
      "wer_arith": 0.21535208760150942,
      "done": 6,
      "total": 6
     }
    },
    "arena": 0.09177239385601936,
    "arena_arith": 0.11697514959635712,
    "arena_cer": 0.056116655341446955,
    "arena_strict": 0.09832805619240366,
    "zero_shot": 0.07461329140104618,
    "arena_real": 0.06773952182394335,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "boh_share": 0.21
   }
  },
  {
   "model": "fun-asr-mlt-nano-2512",
   "hf_id": "FunAudioLLM/Fun-ASR-MLT-Nano-2512",
   "params_b": 0.8,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.016595423686195626,
     "cer": 0.005714177234414155,
     "rtfx": 11.81,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03980767080398077,
     "cer": 0.016649198654963098,
     "rtfx": 11.43,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06821205966804399,
     "cer": 0.03809199069620176,
     "rtfx": 14.01,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.1012495994873438,
     "cer": 0.05149917247219122,
     "rtfx": 17.33,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06721339195130199,
     "cer": 0.039567128846804196,
     "rtfx": 13.41,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11831169536639687,
     "cer": 0.0763596410913752,
     "rtfx": 12.71,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08690089306277028,
     "cer": 0.044729064039408864,
     "rtfx": 11.09,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.02390263983944836,
     "cer": 0.011381329658973476,
     "rtfx": 12.99,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.16009280742459397,
     "cer": 0.10220908525202241,
     "rtfx": 10.11,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.19651181922887073,
     "cer": 0.1388654477262072,
     "rtfx": 12.58,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.14591303410744114,
     "cer": 0.09580960754045738,
     "rtfx": 12.35,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.02301540862102594,
     "cer": 0.01503680557011933,
     "rtfx": 15.03,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09031388407471597,
     "cer": 0.03766214063566715,
     "rtfx": 14.82,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.0241991643454039,
     "cer": 0.009788956729492966,
     "rtfx": 11.56,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.11818458726774292,
     "cer": 0.06715193223928004,
     "rtfx": 14.01,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09580318379160636,
     "cer": 0.053668156062005444,
     "rtfx": 13.48,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.16673197492163008,
     "cer": 0.10920494373731784,
     "rtfx": 12.45,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.02576601671309192,
     "cer": 0.00972259092115742,
     "rtfx": 11.52,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.08224185196466646,
     "cer": 0.044732662784542084,
     "rtfx": 13.98,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.0918958031837916,
     "cer": 0.049624322907565965,
     "rtfx": 13.45,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.14420062695924765,
     "cer": 0.0916805017524442,
     "rtfx": 12.25,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.19134948096885812,
     "cer": 0.10984308131241084,
     "rtfx": 16.9,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09590814917127072,
     "cer": 0.051229299146461724,
     "rtfx": 11.23,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.13405292479108635,
     "cer": 0.08182904167772763,
     "rtfx": 11.71,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.232409381663113,
     "cer": 0.1437268395976707,
     "rtfx": 14.14,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.19001447178002895,
     "cer": 0.11217892713611742,
     "rtfx": 13.61,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.29447492163009403,
     "cer": 0.19487179487179487,
     "rtfx": 12.54,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.46124567474048445,
     "cer": 0.31309309681821,
     "rtfx": 17.4,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.2079592541436464,
     "cer": 0.13136328085149795,
     "rtfx": 11.55,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 13.19,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.07580957569889729,
     "cer": 0.04291119866070604,
     "done": 9,
     "total": 9,
     "ci": [
      0.07306,
      0.07856
     ]
    },
    "accented": {
     "wer": 0.19651181922887073,
     "cer": 0.1388654477262072,
     "done": 1,
     "total": 1,
     "ci": [
      0.18145,
      0.21439
     ]
    },
    "noisy": {
     "wer": 0.11016638888676489,
     "cer": 0.06712471926171074,
     "done": 5,
     "total": 5,
     "ci": [
      0.10361,
      0.11765
     ]
    },
    "telephony": {
     "wer": 0.09308640270708354,
     "cer": 0.05119142562879609,
     "done": 8,
     "total": 8,
     "ci": [
      0.08805,
      0.09837
     ]
    },
    "callcenter": {
     "wer": 0.2533594381247422,
     "cer": 0.16284383015883644,
     "done": 6,
     "total": 6,
     "ci": [
      0.24063,
      0.26624
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.20.2"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.91,
   "inserted_wpm": 155.78,
   "arena_wer": 0.13083421497623313,
   "arena_cer": 0.0801888323590314,
   "arena_ci": [
    0.12748,
    0.13458
   ],
   "rank_range": [
    36,
    37
   ],
   "rtfx": 12.8,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.91,
    "halluc_3plus": 0.76,
    "halluc_3plus_ci": [
     0.70858,
     0.80485
    ],
    "inserted_wpm": 155.77984720905593,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01403067638923812,
      "wer_uncapped": 0.01403067638923812,
      "cer": 0.0059907247851781606,
      "av_wer": null,
      "strict_wer": 0.016595423686195626,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0018104098566758863,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.03622945320362295,
      "wer_uncapped": 0.03622945320362295,
      "cer": 0.018284031588810066,
      "av_wer": null,
      "strict_wer": 0.03980767080398077,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003186850050318685,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.0616289656138385,
      "wer_uncapped": 0.061698998529308775,
      "cer": 0.03813973862889684,
      "av_wer": null,
      "strict_wer": 0.0681420267525737,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025632047062119197,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.09452098686318487,
      "wer_uncapped": 0.09761828473779771,
      "cer": 0.05367095575586596,
      "av_wer": null,
      "strict_wer": 0.09815230161273096,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01281640499839795,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06442340209671965,
      "wer_uncapped": 0.06442340209671965,
      "cer": 0.04014431134555334,
      "av_wer": null,
      "strict_wer": 0.06721339195130199,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014161312140683125,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.10956597316529958,
      "wer_uncapped": 0.11010918572437395,
      "cer": 0.07600820908439038,
      "av_wer": null,
      "strict_wer": 0.11776848280732251,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02889890814275626,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.07996622226771412,
      "wer_uncapped": 0.07996622226771412,
      "cer": 0.04471178509315216,
      "av_wer": null,
      "strict_wer": 0.08690089306277028,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01865452033061235,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.021792826635105234,
      "wer_uncapped": 0.021792826635105234,
      "cer": 0.011603533879316575,
      "av_wer": null,
      "strict_wer": 0.02390263983944836,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004399732413935059,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.12129930394431554,
      "wer_uncapped": 0.15006960556844548,
      "cer": 0.08258885686839577,
      "av_wer": null,
      "strict_wer": 0.13132250580046403,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0020181634712411706,
      "insertions": 0.04900232018561485,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.1773707014753469,
      "wer_uncapped": 0.18976580924696979,
      "cer": 0.1323991657119356,
      "av_wer": null,
      "strict_wer": 0.18411671145724784,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.03279767454615258,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.14030928390538283,
      "wer_uncapped": 0.14251845465811736,
      "cer": 0.09806877647645153,
      "av_wer": null,
      "strict_wer": 0.1437038633547066,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018481599224096125,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.021942656524283205,
      "wer_uncapped": 0.021942656524283205,
      "cer": 0.015452654855608497,
      "av_wer": null,
      "strict_wer": 0.02301540862102594,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002925687536571094,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.06335451569420374,
      "wer_uncapped": 0.06528018486424032,
      "cer": 0.03571911784602896,
      "av_wer": null,
      "strict_wer": 0.08819564798767572,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012709416522241479,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.022458217270194987,
      "wer_uncapped": 0.022458217270194987,
      "cer": 0.01077271990928236,
      "av_wer": null,
      "strict_wer": 0.0241991643454039,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.11041730124885775,
      "wer_uncapped": 0.11056960097471824,
      "cer": 0.06898521292124135,
      "av_wer": null,
      "strict_wer": 0.11803228754188243,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03335363996344807,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.08972503617945007,
      "wer_uncapped": 0.08972503617945007,
      "cer": 0.05446772891692326,
      "av_wer": null,
      "strict_wer": 0.09580318379160636,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02170767004341534,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.15282131661442006,
      "wer_uncapped": 0.1588949843260188,
      "cer": 0.11040853849948429,
      "av_wer": null,
      "strict_wer": 0.16065830721003135,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.032327586206896554,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.022632311977715876,
      "wer_uncapped": 0.022632311977715876,
      "cer": 0.010246233597926454,
      "av_wer": null,
      "strict_wer": 0.02576601671309192,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0020891364902506965,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.07736826073713067,
      "wer_uncapped": 0.07736826073713067,
      "cer": 0.045979564637938695,
      "av_wer": null,
      "strict_wer": 0.08224185196466646,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023149558330795003,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.08683068017366136,
      "wer_uncapped": 0.08683068017366136,
      "cer": 0.04986398015007025,
      "av_wer": null,
      "strict_wer": 0.0918958031837916,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02069464544138929,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.13166144200626959,
      "wer_uncapped": 0.13322884012539185,
      "cer": 0.09273958473474146,
      "av_wer": null,
      "strict_wer": 0.1426332288401254,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03487460815047022,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.18304498269896194,
      "wer_uncapped": 0.18858131487889274,
      "cer": 0.11778615236828494,
      "av_wer": null,
      "strict_wer": 0.18581314878892732,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02629757785467128,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.08805248618784531,
      "wer_uncapped": 0.08805248618784531,
      "cer": 0.05137807700399748,
      "av_wer": null,
      "strict_wer": 0.09590814917127072,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017783149171270718,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.12970055710306408,
      "wer_uncapped": 0.13161559888579388,
      "cer": 0.0868297424266969,
      "av_wer": null,
      "strict_wer": 0.13213788300835655,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015146239554317549,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.22388059701492538,
      "wer_uncapped": 0.22707889125799574,
      "cer": 0.1503141460937996,
      "av_wer": null,
      "strict_wer": 0.22905878769418214,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.043100822418519646,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.1833574529667149,
      "wer_uncapped": 0.18364688856729378,
      "cer": 0.11745538249977579,
      "av_wer": null,
      "strict_wer": 0.18972503617945008,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027206946454413895,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.2795846394984326,
      "wer_uncapped": 0.28800940438871475,
      "cer": 0.19709404009148393,
      "av_wer": null,
      "strict_wer": 0.28605015673981193,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.050156739811912224,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.43356401384083043,
      "wer_uncapped": 0.4598615916955017,
      "cer": 0.3244661198551688,
      "av_wer": null,
      "strict_wer": 0.43494809688581315,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0698961937716263,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.20148480662983426,
      "wer_uncapped": 0.20165745856353592,
      "cer": 0.1374079528718704,
      "av_wer": null,
      "strict_wer": 0.20778660220994474,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021926795580110497,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.05474711749620298,
      "cer": 0.03135761027349974,
      "wer_arith": 0.06705086779767096,
      "done": 9,
      "total": 9,
      "ci": [
       0.05101,
       0.05794
      ]
     },
     "accented": {
      "wer": 0.17737070147534686,
      "cer": 0.13239916571193558,
      "wer_arith": 0.1773707014753469,
      "done": 1,
      "total": 1,
      "ci": [
       0.15099,
       0.20191
      ]
     },
     "noisy": {
      "wer": 0.08624209122842333,
      "cer": 0.053499634198688466,
      "wer_arith": 0.10314623104366114,
      "done": 5,
      "total": 5,
      "ci": [
       0.0793,
       0.09419
      ]
     },
     "telephony": {
      "wer": 0.06783810764970631,
      "cer": 0.040527016960117034,
      "wer_arith": 0.08436091700000896,
      "done": 8,
      "total": 8,
      "ci": [
       0.06291,
       0.07256
      ]
     },
     "callcenter": {
      "wer": 0.22508382353723552,
      "cer": 0.15425266209124414,
      "wer_arith": 0.2419286778423003,
      "done": 6,
      "total": 6,
      "ci": [
       0.21167,
       0.23884
      ]
     }
    },
    "arena": 0.08965767617647986,
    "arena_arith": 0.12122343229902093,
    "arena_cer": 0.05535563200181759,
    "arena_strict": 0.0959547319852531,
    "zero_shot": 0.08411859983630665,
    "arena_real": 0.06262894188532658,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 39,
    "boh_share": 0.7866666666666666,
    "arena_ci": [
     0.08506,
     0.09406
    ],
    "rank_set": [
     35,
     37
    ]
   }
  },
  {
   "model": "whisper-large-v3-turbo",
   "hf_id": "openai/whisper-large-v3-turbo",
   "params_b": 0.81,
   "license": "MIT",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.019612773447322103,
     "cer": 0.007565115042903789,
     "rtfx": 123.02,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03729173655372917,
     "cer": 0.013734224201930215,
     "rtfx": 110.17,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06120876812101688,
     "cer": 0.03430471157007684,
     "rtfx": 161.67,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.11513403823560825,
     "cer": 0.05636811516107925,
     "rtfx": 102.94,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.11371322286100778,
     "cer": 0.08372910264516034,
     "rtfx": 156.32,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11673637894508121,
     "cer": 0.08062218966815195,
     "rtfx": 123.15,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09598505591238261,
     "cer": 0.05258052292535051,
     "rtfx": 189.11,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.030978232902794216,
     "cer": 0.016098289126191295,
     "rtfx": 224.97,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.14979118329466357,
     "cer": 0.09892268201617922,
     "rtfx": 66.8,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.19590851752317226,
     "cer": 0.14844116268166901,
     "rtfx": 119.17,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.14483538983781455,
     "cer": 0.10800560218362486,
     "rtfx": 117.72,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.018236785644626486,
     "cer": 0.011534509154205902,
     "rtfx": 146.18,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08376660889659157,
     "cer": 0.03212470606083592,
     "rtfx": 59.63,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.029770194986072425,
     "cer": 0.011879479692062649,
     "rtfx": 123.58,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12214438014011575,
     "cer": 0.07638962413975649,
     "rtfx": 170.85,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.10795947901591896,
     "cer": 0.0679463817678041,
     "rtfx": 162.43,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.16712382445141066,
     "cer": 0.12160118059398635,
     "rtfx": 118.8,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.0241991643454039,
     "cer": 0.00829572604194319,
     "rtfx": 124.22,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07980505635089857,
     "cer": 0.044997353096876656,
     "rtfx": 169.67,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08986975397973951,
     "cer": 0.056214273233319186,
     "rtfx": 161.96,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11814263322884012,
     "cer": 0.08157166574432761,
     "rtfx": 118.5,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3110726643598616,
     "cer": 0.20114122681883023,
     "rtfx": 95.09,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.1069578729281768,
     "cer": 0.06367531540109497,
     "rtfx": 200.27,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.1693941504178273,
     "cer": 0.10479161136182638,
     "rtfx": 108.78,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.29896436186414865,
     "cer": 0.19467972472207518,
     "rtfx": 152.28,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.15296671490593344,
     "cer": 0.09370709667756671,
     "rtfx": 161.63,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.23981191222570533,
     "cer": 0.17317838037262498,
     "rtfx": 118.27,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.4491349480968858,
     "cer": 0.3102400297711344,
     "rtfx": 108.63,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.20959944751381215,
     "cer": 0.1388784983167273,
     "rtfx": 180.02,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 87.03,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.08227237669706731,
     "cer": 0.04932499470633593,
     "done": 9,
     "total": 9,
     "ci": [
      0.07933,
      0.08533
     ]
    },
    "accented": {
     "wer": 0.19590851752317226,
     "cer": 0.14844116268166901,
     "done": 1,
     "total": 1,
     "ci": [
      0.18075,
      0.21384
     ]
    },
    "noisy": {
     "wer": 0.11436665368626646,
     "cer": 0.07716445367544689,
     "done": 5,
     "total": 5,
     "ci": [
      0.10566,
      0.12367
     ]
    },
    "telephony": {
     "wer": 0.10400631746676732,
     "cer": 0.06244434694392921,
     "done": 8,
     "total": 8,
     "ci": [
      0.08494,
      0.13737
     ]
    },
    "callcenter": {
     "wer": 0.2533119225040521,
     "cer": 0.16924589020365918,
     "done": 6,
     "total": 6,
     "ci": [
      0.22532,
      0.28859
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.85,
   "inserted_wpm": 119.38,
   "arena_wer": 0.13614235976650652,
   "arena_cer": 0.08839077769082544,
   "arena_ci": [
    0.12763,
    0.14697
   ],
   "rank_range": [
    36,
    37
   ],
   "rtfx": 133.4,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.85,
    "halluc_3plus": 0.2733333333333333,
    "halluc_3plus_ci": [
     0.226,
     0.32639
    ],
    "inserted_wpm": 119.37768360006693,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.016293688710082976,
      "wer_uncapped": 0.01634397787276842,
      "cer": 0.00766766512079753,
      "av_wer": null,
      "strict_wer": 0.01956248428463666,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0032185064118682425,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.033266241753326625,
      "wer_uncapped": 0.033266241753326625,
      "cer": 0.014924374247088742,
      "av_wer": null,
      "strict_wer": 0.03723582690372358,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003242759700324276,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.055816233629806006,
      "wer_uncapped": 0.055816233629806006,
      "cer": 0.034372490326348835,
      "av_wer": null,
      "strict_wer": 0.06120876812101688,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023461026682540794,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.10829862223646267,
      "wer_uncapped": 0.11192993698600875,
      "cer": 0.05837289846097388,
      "av_wer": null,
      "strict_wer": 0.11150272348606216,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01772936024778383,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.11050050727088265,
      "wer_uncapped": 0.11050050727088265,
      "cer": 0.08352592488047562,
      "av_wer": null,
      "strict_wer": 0.11371322286100778,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019741291849847818,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.11173882340159705,
      "wer_uncapped": 0.11298821228746808,
      "cer": 0.07925969883539796,
      "av_wer": null,
      "strict_wer": 0.11548699005921016,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026834700418273672,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.08710560659177563,
      "wer_uncapped": 0.08710560659177563,
      "cer": 0.05120553532775296,
      "av_wer": null,
      "strict_wer": 0.09598505591238261,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016812098569564216,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.028147995677455875,
      "wer_uncapped": 0.028147995677455875,
      "cer": 0.015823506190960696,
      "av_wer": null,
      "strict_wer": 0.030978232902794216,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006766839911490763,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.1340139211136891,
      "wer_uncapped": 0.13614849187935035,
      "cer": 0.09214697406340058,
      "av_wer": null,
      "strict_wer": 0.1476566125290023,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01679814385150812,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.17775462074260956,
      "wer_uncapped": 0.18976580924696979,
      "cer": 0.13833318645163187,
      "av_wer": null,
      "strict_wer": 0.18389732901881203,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.02802610651017386,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.1344361226359179,
      "wer_uncapped": 0.1418718680963414,
      "cer": 0.09917767256416646,
      "av_wer": null,
      "strict_wer": 0.13739964437739102,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.02268441187563985,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.017846693973083673,
      "wer_uncapped": 0.017846693973083673,
      "cer": 0.011793508305472924,
      "av_wer": null,
      "strict_wer": 0.018236785644626486,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0025355958650282815,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.05314846909300982,
      "wer_uncapped": 0.05642210668207202,
      "cer": 0.028412934650250306,
      "av_wer": null,
      "strict_wer": 0.08010783747352204,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01579048719430002,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.025940111420612814,
      "wer_uncapped": 0.025940111420612814,
      "cer": 0.012595172525514337,
      "av_wer": null,
      "strict_wer": 0.029770194986072425,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.11529089247639354,
      "wer_uncapped": 0.11681388973499848,
      "cer": 0.07837786380656216,
      "av_wer": null,
      "strict_wer": 0.12062138288151081,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028480048735912276,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.10506512301013024,
      "wer_uncapped": 0.10506512301013024,
      "cer": 0.06851813099757854,
      "av_wer": null,
      "strict_wer": 0.10795947901591896,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024746743849493488,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.15928683385579936,
      "wer_uncapped": 0.16222570532915362,
      "cer": 0.1222476344230683,
      "av_wer": null,
      "strict_wer": 0.16418495297805644,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026057993730407524,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.021065459610027856,
      "wer_uncapped": 0.021065459610027856,
      "cer": 0.008585776769803984,
      "av_wer": null,
      "strict_wer": 0.0241991643454039,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026114206128133705,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.07371306731647884,
      "wer_uncapped": 0.07386536704233933,
      "cer": 0.04604302849527194,
      "av_wer": null,
      "strict_wer": 0.07965275662503807,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026804751751446847,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.08697539797395079,
      "wer_uncapped": 0.08697539797395079,
      "cer": 0.05635108068518131,
      "av_wer": null,
      "strict_wer": 0.08986975397973951,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020549927641099856,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.11187304075235109,
      "wer_uncapped": 0.11304858934169279,
      "cer": 0.0813040943540069,
      "av_wer": null,
      "strict_wer": 0.11696708463949844,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022727272727272728,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.19273356401384084,
      "wer_uncapped": 0.30761245674740484,
      "cer": 0.11815561959654179,
      "av_wer": null,
      "strict_wer": 0.1961937716262976,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.13633217993079585,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.09754834254143646,
      "wer_uncapped": 0.09754834254143646,
      "cer": 0.06231853566168735,
      "av_wer": null,
      "strict_wer": 0.1069578729281768,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015625,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.11107242339832869,
      "wer_uncapped": 0.16626044568245124,
      "cer": 0.07269560991414223,
      "av_wer": null,
      "strict_wer": 0.11420612813370473,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.06981197771587744,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.22860188851660068,
      "wer_uncapped": 0.2931769722814499,
      "cer": 0.16481563749444691,
      "av_wer": null,
      "strict_wer": 0.2343892780992994,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.11087420042643924,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.1492040520984081,
      "wer_uncapped": 0.1492040520984081,
      "cer": 0.09670861857642522,
      "av_wer": null,
      "strict_wer": 0.15296671490593344,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025904486251808974,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.23275862068965517,
      "wer_uncapped": 0.2349137931034483,
      "cer": 0.17884210054262523,
      "av_wer": null,
      "strict_wer": 0.23765673981191224,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02860501567398119,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.4204152249134948,
      "wer_uncapped": 0.4470588235294118,
      "cer": 0.3181851769748023,
      "av_wer": null,
      "strict_wer": 0.42249134948096884,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06747404844290658,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.17144337016574585,
      "wer_uncapped": 0.2003625690607735,
      "cer": 0.12047128129602357,
      "av_wer": null,
      "strict_wer": 0.18068024861878454,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04955110497237569,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.061874708270364,
      "cer": 0.036446998745556056,
      "wer_arith": 0.07613129337611985,
      "done": 9,
      "total": 9,
      "ci": [
       0.05785,
       0.06534
      ]
     },
     "accented": {
      "wer": 0.1777546207426096,
      "cer": 0.13833318645163187,
      "wer_arith": 0.17775462074260956,
      "done": 1,
      "total": 1,
      "ci": [
       0.15388,
       0.20183
      ]
     },
     "noisy": {
      "wer": 0.09238133925522886,
      "cer": 0.060641716466720806,
      "wer_arith": 0.10800381667977077,
      "done": 5,
      "total": 5,
      "ci": [
       0.08371,
       0.1017
      ]
     },
     "telephony": {
      "wer": 0.06365138882657118,
      "cer": 0.038130597352120064,
      "wer_arith": 0.08186300440927242,
      "done": 8,
      "total": 8,
      "ci": [
       0.05858,
       0.06847
      ]
     },
     "callcenter": {
      "wer": 0.19976923082500653,
      "cer": 0.14125402626829248,
      "wer_arith": 0.21891592996370557,
      "done": 6,
      "total": 6,
      "ci": [
       0.18667,
       0.21379
      ]
     }
    },
    "arena": 0.09074735987331899,
    "arena_arith": 0.11940951645465808,
    "arena_cer": 0.05762094971040761,
    "arena_strict": 0.097209263715636,
    "zero_shot": 0.07853257936616748,
    "arena_real": 0.06673931451540538,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 40,
    "boh_share": 0.74,
    "arena_ci": [
     0.08577,
     0.09545
    ],
    "rank_set": [
     36,
     37
    ]
   }
  },
  {
   "model": "voxtral-mini-4b-realtime-2602",
   "hf_id": "mistralai/Voxtral-Mini-4B-Realtime-2602",
   "params_b": 4.43,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.019813930098063866,
     "cer": 0.00636912445895664,
     "rtfx": 20.64,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.05266689030526669,
     "cer": 0.022992270404821172,
     "rtfx": 20.56,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.13957560053225015,
     "cer": 0.10056382965768355,
     "rtfx": 20.89,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.15326284310584215,
     "cer": 0.09256764558715985,
     "rtfx": 21.15,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.0850524179912073,
     "cer": 0.05293261384187852,
     "rtfx": 20.87,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11847465913411918,
     "cer": 0.08237197094549228,
     "rtfx": 20.6,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.10087259141738529,
     "cer": 0.0562485790071997,
     "rtfx": 21.33,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.02897133741573612,
     "cer": 0.01551498449879435,
     "rtfx": 21.21,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.13549883990719258,
     "cer": 0.09007467330429371,
     "rtfx": 19.31,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.22717051500027421,
     "cer": 0.17630098452883264,
     "rtfx": 20.24,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.18330729026348402,
     "cer": 0.1409644343123524,
     "rtfx": 21.76,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.021942656524283205,
     "cer": 0.013547805297485477,
     "rtfx": 20.46,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09782399383785866,
     "cer": 0.04217552909049534,
     "rtfx": 18.91,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.03812674094707521,
     "cer": 0.017454207592248475,
     "rtfx": 18.99,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.30292415473652146,
     "cer": 0.2618845950238221,
     "rtfx": 20.36,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.1301013024602026,
     "cer": 0.08841516687052245,
     "rtfx": 19.82,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.19984326018808776,
     "cer": 0.15583840619811842,
     "rtfx": 18.7,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.03307799442896936,
     "cer": 0.01393681975046456,
     "rtfx": 18.91,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.09488272921108742,
     "cer": 0.053361566966649024,
     "rtfx": 20.33,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.09363241678726483,
     "cer": 0.05469159531714136,
     "rtfx": 19.82,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.13166144200626959,
     "cer": 0.09138535325585685,
     "rtfx": 18.74,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.28754325259515573,
     "cer": 0.20269180673571915,
     "rtfx": 20.79,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.11075621546961326,
     "cer": 0.06537559084571701,
     "rtfx": 21.03,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.2217966573816156,
     "cer": 0.18585744624369524,
     "rtfx": 19.03,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.32881510813280534,
     "cer": 0.2652196929592377,
     "rtfx": 20.36,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.28422575976845155,
     "cer": 0.22817703002920547,
     "rtfx": 19.83,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.40830721003134796,
     "cer": 0.3586054233536248,
     "rtfx": 18.74,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.5366782006920415,
     "cer": 0.4612665136761149,
     "rtfx": 20.7,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.29652969613259667,
     "cer": 0.2435474546876594,
     "rtfx": 21.05,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 21.01,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.0926876788785626,
     "cer": 0.05773729907847553,
     "done": 9,
     "total": 9,
     "ci": [
      0.08923,
      0.09634
     ]
    },
    "accented": {
     "wer": 0.22717051500027421,
     "cer": 0.17630098452883264,
     "done": 1,
     "total": 1,
     "ci": [
      0.20949,
      0.24705
     ]
    },
    "noisy": {
     "wer": 0.17086054971907422,
     "cer": 0.13291136199941278,
     "done": 5,
     "total": 5,
     "ci": [
      0.15855,
      0.18347
     ]
    },
    "telephony": {
     "wer": 0.10891508760756276,
     "cer": 0.0671457584074411,
     "done": 8,
     "total": 8,
     "ci": [
      0.10239,
      0.11605
     ]
    },
    "callcenter": {
     "wer": 0.3460587720231431,
     "cer": 0.29044559349158955,
     "done": 6,
     "total": 6,
     "ci": [
      0.32758,
      0.36386
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.09333333333333334,
   "inserted_wpm": 8.68,
   "arena_wer": 0.17179741423228057,
   "arena_cer": 0.12941786238110187,
   "arena_ci": [
    0.1669,
    0.17682
   ],
   "rank_range": [
    38,
    39
   ],
   "rtfx": 20.5,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.09333333333333334,
    "halluc_3plus": 0.09,
    "halluc_3plus_ci": [
     0.06259,
     0.12778
    ],
    "inserted_wpm": 8.676741203368094,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.015338194619059593,
      "wer_uncapped": 0.015338194619059593,
      "cer": 0.006360808169590711,
      "av_wer": null,
      "strict_wer": 0.019813930098063866,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0018104098566758863,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04847366655484737,
      "wer_uncapped": 0.04847366655484737,
      "cer": 0.02457502342390577,
      "av_wer": null,
      "strict_wer": 0.05266689030526669,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004975958850497596,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.13481336228027171,
      "wer_uncapped": 0.13481336228027171,
      "cer": 0.10008030955683726,
      "av_wer": null,
      "strict_wer": 0.13957560053225015,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02738286994887597,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.14343693260707038,
      "wer_uncapped": 0.1497383317312827,
      "cer": 0.09686001972522305,
      "av_wer": null,
      "strict_wer": 0.14696144398162983,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01762255687279718,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.08145924923909367,
      "wer_uncapped": 0.08145924923909367,
      "cer": 0.05280242753559268,
      "av_wer": null,
      "strict_wer": 0.0850524179912073,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01741630030436253,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.11369438861426476,
      "wer_uncapped": 0.114346243685154,
      "cer": 0.08154686843211434,
      "av_wer": null,
      "strict_wer": 0.11782280406322994,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021130968547992828,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.09230021239028634,
      "wer_uncapped": 0.09230021239028634,
      "cer": 0.0549341240944409,
      "av_wer": null,
      "strict_wer": 0.10087259141738529,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01640267151155352,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.026938712499356764,
      "wer_uncapped": 0.026938712499356764,
      "cer": 0.01538427323625729,
      "av_wer": null,
      "strict_wer": 0.02897133741573612,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005660474450676684,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.12167053364269141,
      "wer_uncapped": 0.12222737819025523,
      "cer": 0.08712776176753122,
      "av_wer": null,
      "strict_wer": 0.13494199535962878,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01122969837587007,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.20967476553501893,
      "wer_uncapped": 0.22201502769703285,
      "cer": 0.1660203871801651,
      "av_wer": null,
      "strict_wer": 0.2147205616190424,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024461141885592057,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.17975106417371625,
      "wer_uncapped": 0.18012823966808555,
      "cer": 0.14249937702466983,
      "av_wer": null,
      "strict_wer": 0.18293011476911472,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01460207985344038,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.02145504193485469,
      "wer_uncapped": 0.02145504193485469,
      "cer": 0.013688893568852502,
      "av_wer": null,
      "strict_wer": 0.021942656524283205,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026331187829139848,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.06797612170229154,
      "wer_uncapped": 0.06951665703832081,
      "cer": 0.03973300861408019,
      "av_wer": null,
      "strict_wer": 0.09609089158482573,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009820912767186597,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.03534122562674095,
      "wer_uncapped": 0.03534122562674095,
      "cer": 0.018427020897456667,
      "av_wer": null,
      "strict_wer": 0.03812674094707521,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00383008356545961,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.2992689613158696,
      "wer_uncapped": 0.2992689613158696,
      "cer": 0.26283556514564954,
      "av_wer": null,
      "strict_wer": 0.30292415473652146,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281754492841913,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.12619392185238784,
      "wer_uncapped": 0.126917510853835,
      "cer": 0.08968341753609757,
      "av_wer": null,
      "strict_wer": 0.12937771345875543,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02272069464544139,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.19278996865203762,
      "wer_uncapped": 0.19572884012539185,
      "cer": 0.1566886407462218,
      "av_wer": null,
      "strict_wer": 0.19690438871473354,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019592476489028215,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.029944289693593314,
      "wer_uncapped": 0.029944289693593314,
      "cer": 0.014215130406609428,
      "av_wer": null,
      "strict_wer": 0.03307799442896936,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.08955223880597014,
      "wer_uncapped": 0.08955223880597014,
      "cer": 0.05426159801992765,
      "av_wer": null,
      "strict_wer": 0.09488272921108742,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02512945476698142,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.09044862518089725,
      "wer_uncapped": 0.09044862518089725,
      "cer": 0.05476667364204359,
      "av_wer": null,
      "strict_wer": 0.09363241678726483,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02170767004341534,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.12539184952978055,
      "wer_uncapped": 0.12676332288401254,
      "cer": 0.09108031750302704,
      "av_wer": null,
      "strict_wer": 0.13028996865203762,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020572100313479624,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.2771626297577855,
      "wer_uncapped": 0.2847750865051903,
      "cer": 0.2090445577477278,
      "av_wer": null,
      "strict_wer": 0.2799307958477509,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02179930795847751,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.10074240331491713,
      "wer_uncapped": 0.10074240331491713,
      "cer": 0.06412791920892068,
      "av_wer": null,
      "strict_wer": 0.11075621546961326,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015538674033149171,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.2193593314763231,
      "wer_uncapped": 0.2193593314763231,
      "cer": 0.18929207840596143,
      "av_wer": null,
      "strict_wer": 0.2217966573816156,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008182451253481894,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.32363691745354856,
      "wer_uncapped": 0.324398416082851,
      "cer": 0.2690232912356413,
      "av_wer": null,
      "strict_wer": 0.3280536095035029,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028784648187633263,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.28147612156295226,
      "wer_uncapped": 0.28147612156295226,
      "cer": 0.23072553884786703,
      "av_wer": null,
      "strict_wer": 0.28422575976845155,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02199710564399421,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.4036050156739812,
      "wer_uncapped": 0.4043887147335423,
      "cer": 0.3601506794026638,
      "av_wer": null,
      "strict_wer": 0.40752351097178685,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016065830721003135,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.5314878892733564,
      "wer_uncapped": 0.5359861591695502,
      "cer": 0.47114460947313974,
      "av_wer": null,
      "strict_wer": 0.5321799307958478,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022145328719723183,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.28919198895027626,
      "wer_uncapped": 0.28919198895027626,
      "cer": 0.24483484115295603,
      "av_wer": null,
      "strict_wer": 0.29652969613259667,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014848066298342542,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.06998632006120982,
      "cer": 0.042785137140232396,
      "wer_arith": 0.08645836138299356,
      "done": 9,
      "total": 9,
      "ci": [
       0.06511,
       0.07428
      ]
     },
     "accented": {
      "wer": 0.20967476553501888,
      "cer": 0.16602038718016504,
      "wer_arith": 0.20967476553501896,
      "done": 1,
      "total": 1,
      "ci": [
       0.18597,
       0.23411
      ]
     },
     "noisy": {
      "wer": 0.13583995364396334,
      "cer": 0.09938947062959609,
      "wer_arith": 0.16666902832415045,
      "done": 5,
      "total": 5,
      "ci": [
       0.12341,
       0.15004
      ]
     },
     "telephony": {
      "wer": 0.07702147105474504,
      "cer": 0.047973208719787844,
      "wer_arith": 0.10033414999001126,
      "done": 8,
      "total": 8,
      "ci": [
       0.07158,
       0.08202
      ]
     },
     "callcenter": {
      "wer": 0.32775449181115374,
      "cer": 0.28060039574770296,
      "wer_arith": 0.341459544065073,
      "done": 6,
      "total": 6,
      "ci": [
       0.30998,
       0.34718
      ]
     }
    },
    "arena": 0.1181060503621228,
    "arena_arith": 0.16514810017181522,
    "arena_cer": 0.08139659507740234,
    "arena_strict": 0.1250354337300017,
    "zero_shot": 0.12478707789549953,
    "arena_real": 0.0774205470593304,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 42,
    "boh_share": 0.08333333333333333,
    "arena_ci": [
     0.11215,
     0.12386
    ],
    "rank_set": [
     38,
     39
    ]
   }
  },
  {
   "model": "omniasr-llm-1b-v2",
   "hf_id": "facebook/omniASR-LLM-1B",
   "params_b": 2.28,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02026653256223284,
     "cer": 0.00635014048143367,
     "rtfx": 10.49,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.047467292854746726,
     "cer": 0.01869077252281759,
     "rtfx": 10.8,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.09328384340640102,
     "cer": 0.048698807798628785,
     "rtfx": 10.63,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.14899070810637616,
     "cer": 0.07087871906393134,
     "rtfx": 15.19,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07393473114643219,
     "cer": 0.04155210186587464,
     "rtfx": 10.19,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.13493399967407246,
     "cer": 0.08534252985818633,
     "rtfx": 10.57,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.10657898103840938,
     "cer": 0.05318681318681319,
     "rtfx": 9.38,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04896310399835332,
     "cer": 0.022147204041795845,
     "rtfx": 9.59,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.17104408352668213,
     "cer": 0.10205351586807716,
     "rtfx": 10.67,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.2182855262436242,
     "cer": 0.1490857946554149,
     "rtfx": 10.33,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.17398566733121396,
     "cer": 0.10924258068473405,
     "rtfx": 11.31,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.03364540667056758,
     "cer": 0.019231172535285113,
     "rtfx": 11.85,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.17427305988831118,
     "cer": 0.08355457786543276,
     "rtfx": 15.37,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.03725626740947075,
     "cer": 0.014500929121316697,
     "rtfx": 9.31,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.16692049954310081,
     "cer": 0.09002117522498676,
     "rtfx": 10.38,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.1,
     "cer": 0.05648885449689224,
     "rtfx": 9.44,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.20924764890282133,
     "cer": 0.1351042243128574,
     "rtfx": 9.23,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.031162952646239556,
     "cer": 0.010983541279532785,
     "rtfx": 9.3,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.11909838562290588,
     "cer": 0.05979354155637904,
     "rtfx": 10.32,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.09218523878437047,
     "cer": 0.04875065525074262,
     "rtfx": 9.46,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.15850313479623823,
     "cer": 0.101014572957019,
     "rtfx": 9.14,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.24636678200692042,
     "cer": 0.12268188302425106,
     "rtfx": 15.11,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.1207700276243094,
     "cer": 0.061600979358656105,
     "rtfx": 9.25,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.201949860724234,
     "cer": 0.1186620653039554,
     "rtfx": 9.04,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.3668900395979287,
     "cer": 0.21450502911593436,
     "rtfx": 9.87,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.2134587554269175,
     "cer": 0.12393599760365442,
     "rtfx": 9.48,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.38695141065830724,
     "cer": 0.24759269507470946,
     "rtfx": 8.78,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.8370242214532871,
     "cer": 0.5292439372325249,
     "rtfx": 9.52,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.26450276243093923,
     "cer": 0.1587207127554664,
     "rtfx": 9.43,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 8.06,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.09394036403485624,
     "cer": 0.04987784496528428,
     "done": 9,
     "total": 9,
     "ci": [
      0.09056,
      0.09763
     ]
    },
    "accented": {
     "wer": 0.2182855262436242,
     "cer": 0.1490857946554149,
     "done": 1,
     "total": 1,
     "ci": [
      0.20164,
      0.23714
     ]
    },
    "noisy": {
     "wer": 0.13748201663732137,
     "cer": 0.08107155276815743,
     "done": 5,
     "total": 5,
     "ci": [
      0.12884,
      0.14624
     ]
    },
    "telephony": {
     "wer": 0.12200062350498284,
     "cer": 0.0634513654784123,
     "done": 8,
     "total": 8,
     "ci": [
      0.11582,
      0.12926
     ]
    },
    "callcenter": {
     "wer": 0.37846284171526895,
     "cer": 0.2321100728477075,
     "done": 6,
     "total": 6,
     "ci": [
      0.35009,
      0.40667
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.8.0+cu128",
    "gpu": "NVIDIA A10"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 257.51,
   "arena_wer": 0.17701998589453574,
   "arena_cer": 0.10357359200922081,
   "arena_ci": [
    0.17039,
    0.1837
   ],
   "rank_range": [
    38,
    40
   ],
   "rtfx": 10.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 1.0,
    "halluc_3plus_ci": [
     0.98736,
     1.0
    ],
    "inserted_wpm": 257.5140801873641,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.016545134523510183,
      "wer_uncapped": 0.016545134523510183,
      "cer": 0.006534284756034094,
      "av_wer": null,
      "strict_wer": 0.02026653256223284,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002112144832788534,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.044448171754444814,
      "wer_uncapped": 0.04450408140445041,
      "cer": 0.020505956364609824,
      "av_wer": null,
      "strict_wer": 0.047411383204741135,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005255507100525551,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.0882414734925415,
      "wer_uncapped": 0.0882414734925415,
      "cer": 0.04992334087756443,
      "av_wer": null,
      "strict_wer": 0.09328384340640102,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02647244204776245,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.14033963473245756,
      "wer_uncapped": 0.14397094948200362,
      "cer": 0.0738778412348907,
      "av_wer": null,
      "strict_wer": 0.14535939335683007,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01730214674783723,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07093337842407846,
      "wer_uncapped": 0.0710601961447413,
      "cer": 0.04219960129139248,
      "av_wer": null,
      "strict_wer": 0.07380791342576937,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015344944200202909,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.12434135477212233,
      "wer_uncapped": 0.12939323157151394,
      "cer": 0.08341369334619093,
      "av_wer": null,
      "strict_wer": 0.12988212287468087,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030582867075886793,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.09703421274853502,
      "wer_uncapped": 0.09703421274853502,
      "cer": 0.053057317668255694,
      "av_wer": null,
      "strict_wer": 0.10657898103840938,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01745182834770593,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.043740029846138014,
      "wer_uncapped": 0.043740029846138014,
      "cer": 0.02212288514892221,
      "av_wer": null,
      "strict_wer": 0.04896310399835332,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010780630885606957,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.1334570765661253,
      "wer_uncapped": 0.15703016241299303,
      "cer": 0.08232468780019213,
      "av_wer": null,
      "strict_wer": 0.1474709976798144,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0030272452068617556,
      "insertions": 0.03777262180974478,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.19481160533099326,
      "wer_uncapped": 0.21236220040585752,
      "cer": 0.13906759495902002,
      "av_wer": null,
      "strict_wer": 0.20073493116875993,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.04129874403553996,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.16380192898324264,
      "wer_uncapped": 0.17075273452233417,
      "cer": 0.11051582357338649,
      "av_wer": null,
      "strict_wer": 0.16703486179212243,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.003,
      "insertions": 0.02640228460585161,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.03247513165593915,
      "wer_uncapped": 0.03257265457382485,
      "cer": 0.0207702635112012,
      "av_wer": null,
      "strict_wer": 0.03354788375268188,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005168714647942266,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.12497592913537454,
      "wer_uncapped": 0.1448103215867514,
      "cer": 0.06972443963378884,
      "av_wer": null,
      "strict_wer": 0.154053533602927,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04140188715578664,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.03307799442896936,
      "wer_uncapped": 0.03307799442896936,
      "cer": 0.015511096711485501,
      "av_wer": null,
      "strict_wer": 0.03725626740947075,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005222841225626741,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.16143770941212307,
      "wer_uncapped": 0.16235150776728602,
      "cer": 0.09481500285587358,
      "av_wer": null,
      "strict_wer": 0.16600670118793787,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03396283886689004,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.09696092619392185,
      "wer_uncapped": 0.09696092619392185,
      "cer": 0.05826432692595139,
      "av_wer": null,
      "strict_wer": 0.1,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019247467438494936,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.19553291536050157,
      "wer_uncapped": 0.20454545454545456,
      "cer": 0.1376294901116642,
      "av_wer": null,
      "strict_wer": 0.20023510971786834,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.039380877742946706,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.027158774373259052,
      "wer_uncapped": 0.027332869080779944,
      "cer": 0.011582698849829905,
      "av_wer": null,
      "strict_wer": 0.030988857938718663,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.11270179713676515,
      "wer_uncapped": 0.11270179713676515,
      "cer": 0.0627974868312496,
      "av_wer": null,
      "strict_wer": 0.11909838562290588,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024977155041120927,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.08885672937771345,
      "wer_uncapped": 0.08885672937771345,
      "cer": 0.04956503542494993,
      "av_wer": null,
      "strict_wer": 0.09218523878437047,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018523878437047756,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.13793103448275862,
      "wer_uncapped": 0.15262539184952978,
      "cer": 0.09381586618234002,
      "av_wer": null,
      "strict_wer": 0.14380877742946707,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04036050156739812,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.23840830449826989,
      "wer_uncapped": 0.24013840830449826,
      "cer": 0.1304958250203207,
      "av_wer": null,
      "strict_wer": 0.24463667820069204,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030103806228373702,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.1087707182320442,
      "wer_uncapped": 0.1087707182320442,
      "cer": 0.061939827477382706,
      "av_wer": null,
      "strict_wer": 0.1207700276243094,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016056629834254144,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.17844707520891365,
      "wer_uncapped": 0.1991643454038997,
      "cer": 0.11971488741292727,
      "av_wer": null,
      "strict_wer": 0.18123259052924792,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.03586350974930362,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.32668291197075844,
      "wer_uncapped": 0.3617118489186719,
      "cer": 0.2136510757123818,
      "av_wer": null,
      "strict_wer": 0.3317088029241547,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.08696314346634176,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.20390738060781477,
      "wer_uncapped": 0.21013024602026048,
      "cer": 0.12965232728468506,
      "av_wer": null,
      "strict_wer": 0.2072358900144718,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.036034732272069464,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.33914576802507834,
      "wer_uncapped": 0.38146551724137934,
      "cer": 0.23610924256693125,
      "av_wer": null,
      "strict_wer": 0.34463166144200624,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.006711409395973154,
      "insertions": 0.0889498432601881,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.4961937716262976,
      "wer_uncapped": 0.831833910034602,
      "cer": 0.3574225966156802,
      "av_wer": null,
      "strict_wer": 0.5013840830449827,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.05333333333333334,
      "insertions": 0.3875432525951557,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.250517955801105,
      "wer_uncapped": 0.256042817679558,
      "cer": 0.16667367978119083,
      "av_wer": null,
      "strict_wer": 0.2589779005524862,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.030818370165745856,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.07093942738435846,
      "cer": 0.038073047528926485,
      "wer_arith": 0.08434227409555035,
      "done": 9,
      "total": 9,
      "ci": [
       0.06693,
       0.07435
      ]
     },
     "accented": {
      "wer": 0.19481160533099323,
      "cer": 0.13906759495902002,
      "wer_arith": 0.19481160533099326,
      "done": 1,
      "total": 1,
      "ci": [
       0.16673,
       0.22349
      ]
     },
     "noisy": {
      "wer": 0.11064606156377454,
      "cer": 0.06652910077701878,
      "wer_arith": 0.1301622948757517,
      "done": 5,
      "total": 5,
      "ci": [
       0.1024,
       0.11928
      ]
     },
     "telephony": {
      "wer": 0.08903289588220617,
      "cer": 0.05008407690250965,
      "wer_arith": 0.10890980236151551,
      "done": 8,
      "total": 8,
      "ci": [
       0.0833,
       0.09431
      ]
     },
     "callcenter": {
      "wer": 0.2818323842224279,
      "cer": 0.18972851021644138,
      "wer_arith": 0.299149143873328,
      "done": 6,
      "total": 6,
      "ci": [
       0.26805,
       0.29625
      ]
     }
    },
    "arena": 0.11449292125514493,
    "arena_arith": 0.15059798333419483,
    "arena_cer": 0.06742818665802303,
    "arena_strict": 0.12146940735203246,
    "zero_shot": 0.1235594564230037,
    "arena_real": 0.08185049439445655,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 41,
    "boh_share": 0.99,
    "arena_ci": [
     0.10959,
     0.11937
    ],
    "rank_set": [
     38,
     39
    ]
   }
  },
  {
   "model": "nemotron-3.5-asr-streaming-0.6b",
   "hf_id": "nvidia/nemotron-3.5-asr-streaming-0.6b",
   "params_b": 0.64,
   "license": "OpenMDW-1.1",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.03193361830525522,
     "cer": 0.010659503379147998,
     "rtfx": 332.84,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.07206753885720675,
     "cer": 0.02997947508624831,
     "rtfx": 329.81,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.0995868057987254,
     "cer": 0.05046458102463558,
     "rtfx": 336.54,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.17505073160311865,
     "cer": 0.08796813055694545,
     "rtfx": 341.93,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08674332093337843,
     "cer": 0.05060210848245137,
     "rtfx": 338.73,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.15573904068662067,
     "cer": 0.10381696473987263,
     "rtfx": 330.91,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.10573453773126232,
     "cer": 0.05383857521788556,
     "rtfx": 347.82,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03957186229609427,
     "cer": 0.01788494660695832,
     "rtfx": 368.87,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.13735498839907193,
     "cer": 0.08315183571873055,
     "rtfx": 310.72,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.2383590193605002,
     "cer": 0.1759142053445851,
     "rtfx": 335.38,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.2045907645886093,
     "cer": 0.1457590038745029,
     "rtfx": 353.38,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.027111371172225472,
     "cer": 0.01698718620892142,
     "rtfx": 335.64,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.11554015020219527,
     "cer": 0.052112569217932184,
     "rtfx": 325.65,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.062151810584958216,
     "cer": 0.026712237855057074,
     "rtfx": 289.03,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.2254035942735303,
     "cer": 0.1577289571201694,
     "rtfx": 326.83,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.15890014471780028,
     "cer": 0.10845959911135518,
     "rtfx": 319.1,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.24745297805642633,
     "cer": 0.18682899833978972,
     "rtfx": 282.98,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.05483983286908078,
     "cer": 0.02113750995487125,
     "rtfx": 292.33,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.13158696314346635,
     "cer": 0.0669931180518793,
     "rtfx": 324.92,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.11215629522431259,
     "cer": 0.06153116497341554,
     "rtfx": 316.57,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.1634012539184953,
     "cer": 0.10905736948902417,
     "rtfx": 282.32,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.30899653979238756,
     "cer": 0.20715747689635924,
     "rtfx": 348.32,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.12085635359116022,
     "cer": 0.06408338150780427,
     "rtfx": 349.53,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.2747214484679666,
     "cer": 0.21253650119458456,
     "rtfx": 294.76,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.38074931465123363,
     "cer": 0.2842773954473266,
     "rtfx": 327.95,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.3211287988422576,
     "cer": 0.24961933052095553,
     "rtfx": 320.74,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.4196708463949843,
     "cer": 0.3494927135214905,
     "rtfx": 283.0,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.5605536332179931,
     "cer": 0.45611858835204366,
     "rtfx": 352.58,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.33934737569060774,
     "cer": 0.26905158635698984,
     "rtfx": 355.22,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 394.12,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.10042027162341485,
     "cer": 0.05426290231254175,
     "done": 9,
     "total": 9,
     "ci": [
      0.09778,
      0.10306
     ]
    },
    "accented": {
     "wer": 0.2383590193605002,
     "cer": 0.1759142053445851,
     "done": 1,
     "total": 1,
     "ci": [
      0.22175,
      0.25768
     ]
    },
    "noisy": {
     "wer": 0.1796998584442649,
     "cer": 0.12509775926017486,
     "done": 5,
     "total": 5,
     "ci": [
      0.16899,
      0.19093
     ]
    },
    "telephony": {
     "wer": 0.12931109498916543,
     "cer": 0.07488247203752592,
     "done": 8,
     "total": 8,
     "ci": [
      0.12309,
      0.13578
     ]
    },
    "callcenter": {
     "wer": 0.3826952362108405,
     "cer": 0.30351601923223176,
     "done": 6,
     "total": 6,
     "ci": [
      0.36762,
      0.39858
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.04,
   "inserted_wpm": 2.9,
   "arena_wer": 0.18922144932286128,
   "arena_cer": 0.13169205050134059,
   "arena_ci": [
    0.18484,
    0.19342
   ],
   "rank_range": [
    40,
    41
   ],
   "rtfx": 335.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.04,
    "halluc_3plus": 0.03,
    "halluc_3plus_ci": [
     0.01586,
     0.05602
    ],
    "inserted_wpm": 2.899682150225841,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.02765903947699271,
      "wer_uncapped": 0.02765903947699271,
      "cer": 0.011114066638139406,
      "av_wer": null,
      "strict_wer": 0.03193361830525522,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0030676389238119186,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.06614111595661411,
      "wer_uncapped": 0.06614111595661411,
      "cer": 0.03241868558425914,
      "av_wer": null,
      "strict_wer": 0.07206753885720675,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00581460360058146,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.09272358008263884,
      "wer_uncapped": 0.09293367882904965,
      "cer": 0.0514127181134555,
      "av_wer": null,
      "strict_wer": 0.09937670705231459,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281882484767843,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.16725408522909324,
      "wer_uncapped": 0.16842892235394638,
      "cer": 0.09114887956145783,
      "av_wer": null,
      "strict_wer": 0.1738758944782655,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015486489373064188,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.08323469732837335,
      "wer_uncapped": 0.08323469732837335,
      "cer": 0.051188186934354216,
      "av_wer": null,
      "strict_wer": 0.08674332093337843,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014795400743997295,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.1504155576076919,
      "wer_uncapped": 0.1514476614699332,
      "cer": 0.10271245951091659,
      "av_wer": null,
      "strict_wer": 0.1547069368243794,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0050150451354062184,
      "insertions": 0.03742734532022381,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.09624094782363929,
      "wer_uncapped": 0.09624094782363929,
      "cer": 0.05321371820377113,
      "av_wer": null,
      "strict_wer": 0.10573453773126232,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.017144758054197906,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.03594401276179694,
      "wer_uncapped": 0.03594401276179694,
      "cer": 0.018002991232020638,
      "av_wer": null,
      "strict_wer": 0.03957186229609427,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006998404775382082,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.12213457076566125,
      "wer_uncapped": 0.12417633410672854,
      "cer": 0.07937079731027857,
      "av_wer": null,
      "strict_wer": 0.13531322505800464,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0010090817356205853,
      "insertions": 0.013364269141531323,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.21877913673010477,
      "wer_uncapped": 0.2317775462074261,
      "cer": 0.16769483857701006,
      "av_wer": null,
      "strict_wer": 0.22536060988317885,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.006030150753768844,
      "insertions": 0.02851971699665442,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.20141171399321084,
      "wer_uncapped": 0.20141171399321084,
      "cer": 0.14952653874906555,
      "av_wer": null,
      "strict_wer": 0.2045907645886093,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.013578317797295113,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.026526233664911254,
      "wer_uncapped": 0.026526233664911254,
      "cer": 0.017505988890936373,
      "av_wer": null,
      "strict_wer": 0.027111371172225472,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004193485469085235,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.0831889081455806,
      "wer_uncapped": 0.08376660889659157,
      "cer": 0.0501510846525053,
      "av_wer": null,
      "strict_wer": 0.11457731561717698,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01116888118621221,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.05762534818941504,
      "wer_uncapped": 0.05762534818941504,
      "cer": 0.028511258707273612,
      "av_wer": null,
      "strict_wer": 0.062151810584958216,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.006789693593314763,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.21855010660980811,
      "wer_uncapped": 0.21855010660980811,
      "cer": 0.16056355905311925,
      "av_wer": null,
      "strict_wer": 0.2254035942735303,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024520255863539446,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.15600578871201157,
      "wer_uncapped": 0.15600578871201157,
      "cer": 0.10929419150399092,
      "av_wer": null,
      "strict_wer": 0.15890014471780028,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020260492040520984,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.242358934169279,
      "wer_uncapped": 0.24314263322884014,
      "cer": 0.18929099959639445,
      "av_wer": null,
      "strict_wer": 0.2466692789968652,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.03467868338557994,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.05100974930362117,
      "wer_uncapped": 0.05100974930362117,
      "cer": 0.022476915600194394,
      "av_wer": null,
      "strict_wer": 0.05483983286908078,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.006093314763231198,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.1251903746573256,
      "wer_uncapped": 0.1253426743831861,
      "cer": 0.06968331535190708,
      "av_wer": null,
      "strict_wer": 0.13143466341760585,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02771855010660981,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.10926193921852388,
      "wer_uncapped": 0.10926193921852388,
      "cer": 0.06271860333024423,
      "av_wer": null,
      "strict_wer": 0.11215629522431259,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021562952243125905,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.15673981191222572,
      "wer_uncapped": 0.15928683385579936,
      "cer": 0.10901834162966949,
      "av_wer": null,
      "strict_wer": 0.16085423197492163,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.006711409395973154,
      "insertions": 0.04447492163009405,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.30207612456747407,
      "wer_uncapped": 0.3027681660899654,
      "cer": 0.21362595137811277,
      "av_wer": null,
      "strict_wer": 0.3083044982698962,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014186851211072665,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.11032458563535912,
      "wer_uncapped": 0.11032458563535912,
      "cer": 0.06398064380391331,
      "av_wer": null,
      "strict_wer": 0.12085635359116022,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017351519337016574,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.27123955431754876,
      "wer_uncapped": 0.27123955431754876,
      "cer": 0.21889680868297423,
      "av_wer": null,
      "strict_wer": 0.2747214484679666,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0100974930362117,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.3745050258909534,
      "wer_uncapped": 0.37480962534267437,
      "cer": 0.289236529796281,
      "av_wer": null,
      "strict_wer": 0.3804447151995126,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03228754188242461,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.31852387843704777,
      "wer_uncapped": 0.31852387843704777,
      "cer": 0.25353502137454786,
      "av_wer": null,
      "strict_wer": 0.3211287988422576,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02141823444283647,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.414576802507837,
      "wer_uncapped": 0.4153605015673981,
      "cer": 0.3543656666218216,
      "av_wer": null,
      "strict_wer": 0.4188871473354232,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.030760188087774296,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.5591695501730104,
      "wer_uncapped": 0.5595155709342561,
      "cer": 0.466415428951452,
      "av_wer": null,
      "strict_wer": 0.5602076124567474,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016955017301038062,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.331664364640884,
      "wer_uncapped": 0.331664364640884,
      "cer": 0.2714706501157164,
      "av_wer": null,
      "strict_wer": 0.33934737569060774,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012603591160220995,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.08099860311193792,
      "cer": 0.0444325619169769,
      "wer_arith": 0.09352751189250019,
      "done": 9,
      "total": 9,
      "ci": [
       0.0767,
       0.08474
      ]
     },
     "accented": {
      "wer": 0.21877913673010477,
      "cer": 0.16769483857701006,
      "wer_arith": 0.2187791367301048,
      "done": 1,
      "total": 1,
      "ci": [
       0.1939,
       0.24206
      ]
     },
     "noisy": {
      "wer": 0.1571700573281758,
      "cer": 0.10720665379808415,
      "wer_arith": 0.1751903783347449,
      "done": 5,
      "total": 5,
      "ci": [
       0.14536,
       0.17121
      ]
     },
     "telephony": {
      "wer": 0.09731398547345066,
      "cer": 0.05802516485959433,
      "wer_arith": 0.12053971588812767,
      "done": 8,
      "total": 8,
      "ci": [
       0.09154,
       0.10283
      ]
     },
     "callcenter": {
      "wer": 0.368100718460498,
      "cer": 0.2993962294243965,
      "wer_arith": 0.3782798626612136,
      "done": 6,
      "total": 6,
      "ci": [
       0.35076,
       0.38698
      ]
     }
    },
    "arena": 0.13775419562293892,
    "arena_arith": 0.18218654792269381,
    "arena_cer": 0.08839421222892144,
    "arena_strict": 0.14536183534429636,
    "zero_shot": 0.1282092480221057,
    "arena_real": 0.08910196392798515,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 45,
    "boh_share": 0.03333333333333333,
    "arena_ci": [
     0.13252,
     0.14299
    ],
    "rank_set": [
     42,
     43
    ]
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-run3",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.04646718632134775,
     "cer": 0.021262054825727086,
     "rtfx": 181.89,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.0803980767080398,
     "cer": 0.040263766976723875,
     "rtfx": 177.49,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.08705091392954689,
     "cer": 0.04964867201675658,
     "rtfx": 133.48,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.16639965822920005,
     "cer": 0.09866825757284169,
     "rtfx": 83.94,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08395333107879607,
     "cer": 0.04780844275190778,
     "rtfx": 194.61,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.14721060350915313,
     "cer": 0.09693991739404667,
     "rtfx": 176.48,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.10944497044448424,
     "cer": 0.05854237716306682,
     "rtfx": 137.9,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.04546390161066228,
     "cer": 0.022928005511539788,
     "rtfx": 208.89,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.1531322505800464,
     "cer": 0.09699751088985688,
     "rtfx": 96.07,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.19448253167333954,
     "cer": 0.14054149085794657,
     "rtfx": 172.1,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.23266339781238213,
     "cer": 0.15648289187172226,
     "rtfx": 60.93,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.04066705675833821,
     "cer": 0.027661850135268333,
     "rtfx": 197.83,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.227999229732332,
     "cer": 0.15614806948342563,
     "rtfx": 196.63,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.06284818941504178,
     "cer": 0.030926466684364214,
     "rtfx": 48.77,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.2881510813280536,
     "cer": 0.20592906299629435,
     "rtfx": 91.21,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.13285094066570188,
     "cer": 0.08092658695489378,
     "rtfx": 182.61,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.3113244514106583,
     "cer": 0.253200516509869,
     "rtfx": 62.28,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.047876044568245124,
     "cer": 0.019909742500663657,
     "rtfx": 158.44,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.09716722509899482,
     "cer": 0.05614081524616199,
     "rtfx": 184.56,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.09261939218523878,
     "cer": 0.05189585881530666,
     "rtfx": 184.1,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.15830721003134796,
     "cer": 0.10743405275779376,
     "rtfx": 160.6,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.26747404844290656,
     "cer": 0.16405135520684735,
     "rtfx": 76.38,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.11576312154696132,
     "cer": 0.06272316115210665,
     "rtfx": 165.63,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.16591225626740946,
     "cer": 0.09788956729492965,
     "rtfx": 159.45,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.4166920499543101,
     "cer": 0.28763896241397563,
     "rtfx": 36.65,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.24761215629522432,
     "cer": 0.15428970819500262,
     "rtfx": 81.42,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.38773510971786834,
     "cer": 0.2813503043718871,
     "rtfx": 42.37,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.7688581314878893,
     "cer": 0.5072257024127024,
     "rtfx": 25.44,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.29670234806629836,
     "cer": 0.22815996191383003,
     "rtfx": 34.43,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 18.13,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.1021689880456974,
     "cer": 0.059228778344718576,
     "done": 9,
     "total": 9,
     "ci": [
      0.09941,
      0.10528
     ]
    },
    "accented": {
     "wer": 0.19448253167333954,
     "cer": 0.14054149085794657,
     "done": 1,
     "total": 1,
     "ci": [
      0.17879,
      0.21397
     ]
    },
    "noisy": {
     "wer": 0.20556761212636757,
     "cer": 0.14549310500342874,
     "done": 5,
     "total": 5,
     "ci": [
      0.16972,
      0.25999
     ]
    },
    "telephony": {
     "wer": 0.1309841660455456,
     "cer": 0.08074561316219675,
     "done": 8,
     "total": 8,
     "ci": [
      0.12486,
      0.13798
     ]
    },
    "callcenter": {
     "wer": 0.3805853419648333,
     "cer": 0.25942570110038793,
     "done": 6,
     "total": 6,
     "ci": [
      0.32089,
      0.45758
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [],
   "notes": "Arabic-STT run 3: full fine-tune, weights gated on the Hub; trained on the train splits of CV18 and MASC and on MGB-2/SADA/MGB-3 train rows (rows overlapping their test sets excluded). Its kejue-common-voice stream also holds 20 FLEURS ar_eg *test* sentences (37 of our 428 fleurs_ar rows), which the contamination guard did not cover; labels of that stream come from Soniox stt-async-v5",
   "training_data": "",
   "hallucination_rate": 0.9866666666666667,
   "inserted_wpm": 375.44,
   "arena_wer": 0.19142155352095147,
   "arena_cer": 0.1261196584231447,
   "arena_ci": [
    0.1762,
    0.21078
   ],
   "rank_range": [
    39,
    44
   ],
   "rtfx": 98.5,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.9866666666666667,
    "halluc_3plus": 0.8766666666666667,
    "halluc_3plus_ci": [
     0.83463,
     0.90918
    ],
    "inserted_wpm": 375.4419227123181,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.038169474478249935,
      "wer_uncapped": 0.038169474478249935,
      "cer": 0.022563521343402684,
      "av_wer": null,
      "strict_wer": 0.04646718632134775,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002967060598441036,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.07408028625740803,
      "wer_uncapped": 0.07413619590741362,
      "cer": 0.04443849551599518,
      "av_wer": null,
      "strict_wer": 0.08034216705803422,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007156435200715644,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.07955739197422788,
      "wer_uncapped": 0.07955739197422788,
      "cer": 0.050565817332262536,
      "av_wer": null,
      "strict_wer": 0.08705091392954689,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027733034526227326,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.15881661860514792,
      "wer_uncapped": 0.16191391647976075,
      "cer": 0.1051400261473887,
      "av_wer": null,
      "strict_wer": 0.1633023603545872,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021894691872263162,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07959925600270544,
      "wer_uncapped": 0.07959925600270544,
      "cer": 0.048427218037153996,
      "av_wer": null,
      "strict_wer": 0.08395333107879607,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019191748393642204,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.14080069531207562,
      "wer_uncapped": 0.1427019392688359,
      "cer": 0.09583858764186633,
      "av_wer": null,
      "strict_wer": 0.14530935955239285,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04595578249769135,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.09816013715806443,
      "wer_uncapped": 0.09816013715806443,
      "cer": 0.05819976727600315,
      "av_wer": null,
      "strict_wer": 0.10944497044448424,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01827068246372732,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.040343745175732006,
      "wer_uncapped": 0.040343745175732006,
      "cer": 0.023084749720614483,
      "av_wer": null,
      "strict_wer": 0.04546390161066228,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012247208356918643,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.13447795823665892,
      "wer_uncapped": 0.1403248259860789,
      "cer": 0.09060999039385206,
      "av_wer": null,
      "strict_wer": 0.1470997679814385,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025336426914153134,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.175012340262162,
      "wer_uncapped": 0.18790105852026545,
      "cer": 0.13405892893863283,
      "av_wer": null,
      "strict_wer": 0.18159381341523612,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.03641748478034333,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.19467643730804463,
      "wer_uncapped": 0.22802952745298777,
      "cer": 0.14089210067281335,
      "av_wer": null,
      "strict_wer": 0.19925642545395764,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.06050972573953338,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.03930173590793837,
      "wer_uncapped": 0.03930173590793837,
      "cer": 0.027509411114328586,
      "av_wer": null,
      "strict_wer": 0.04066705675833821,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018821923151940707,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.1840939726554978,
      "wer_uncapped": 0.2008472944348161,
      "cer": 0.1436882695169801,
      "av_wer": null,
      "strict_wer": 0.20989793953398805,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.13652994415559408,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.055536211699164346,
      "wer_uncapped": 0.055536211699164346,
      "cer": 0.03320913656244938,
      "av_wer": null,
      "strict_wer": 0.06284818941504178,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007834261838440111,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.2063661285409686,
      "wer_uncapped": 0.2809929942126104,
      "cer": 0.15088532080979883,
      "av_wer": null,
      "strict_wer": 0.21352421565641183,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.12762717027109352,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.12460202604920405,
      "wer_uncapped": 0.12821997105643995,
      "cer": 0.08277779438581806,
      "av_wer": null,
      "strict_wer": 0.129232995658466,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03227206946454414,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.21277429467084638,
      "wer_uncapped": 0.3068181818181818,
      "cer": 0.16283241400959683,
      "av_wer": null,
      "strict_wer": 0.21728056426332287,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.1524294670846395,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.04160863509749304,
      "wer_uncapped": 0.04160863509749304,
      "cer": 0.021423942977482586,
      "av_wer": null,
      "strict_wer": 0.047876044568245124,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004700557103064067,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.08894303990252818,
      "wer_uncapped": 0.08894303990252818,
      "cer": 0.0579742336739227,
      "av_wer": null,
      "strict_wer": 0.09716722509899482,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024063356685957965,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.08798842257597685,
      "wer_uncapped": 0.08798842257597685,
      "cer": 0.052614271621177246,
      "av_wer": null,
      "strict_wer": 0.09261939218523878,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020839363241678725,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.1490987460815047,
      "wer_uncapped": 0.15380094043887146,
      "cer": 0.10592403246782367,
      "av_wer": null,
      "strict_wer": 0.1536050156739812,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05211598746081505,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.24636678200692042,
      "wer_uncapped": 0.26332179930795846,
      "cer": 0.1731323431611616,
      "av_wer": null,
      "strict_wer": 0.2505190311418685,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05051903114186851,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.1039364640883978,
      "wer_uncapped": 0.10402279005524862,
      "cer": 0.06286555859457185,
      "av_wer": null,
      "strict_wer": 0.1156767955801105,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019164364640883978,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.15598885793871867,
      "wer_uncapped": 0.15964484679665739,
      "cer": 0.10517576543009882,
      "av_wer": null,
      "strict_wer": 0.16225626740947074,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031162952646239556,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.2816021931160524,
      "wer_uncapped": 0.40801096558026195,
      "cer": 0.19680142159040426,
      "av_wer": null,
      "strict_wer": 0.2902832774901005,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.2001218397806884,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.18480463096960925,
      "wer_uncapped": 0.24356005788712012,
      "cer": 0.12208902573914084,
      "av_wer": null,
      "strict_wer": 0.18885672937771347,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09739507959479016,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.2927115987460815,
      "wer_uncapped": 0.38283699059561127,
      "cer": 0.21633257096730796,
      "av_wer": null,
      "strict_wer": 0.29760971786833856,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.16477272727272727,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.4930795847750865,
      "wer_uncapped": 0.7653979238754325,
      "cer": 0.3884578437892559,
      "av_wer": null,
      "strict_wer": 0.4958477508650519,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.36055363321799305,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.2058011049723757,
      "wer_uncapped": 0.287810773480663,
      "cer": 0.14573953292657268,
      "av_wer": null,
      "strict_wer": 0.21469267955801105,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.11170580110497237,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.08422289737290042,
      "cer": 0.05246522378141538,
      "wer_arith": 0.09377839591114114,
      "done": 9,
      "total": 9,
      "ci": [
       0.07986,
       0.08825
      ]
     },
     "accented": {
      "wer": 0.175012340262162,
      "cer": 0.13405892893863283,
      "wer_arith": 0.175012340262162,
      "done": 1,
      "total": 1,
      "ci": [
       0.15065,
       0.20065
      ]
     },
     "noisy": {
      "wer": 0.1426903043926805,
      "cer": 0.0990123084678198,
      "wer_arith": 0.1587910196536456,
      "done": 5,
      "total": 5,
      "ci": [
       0.13285,
       0.15413
      ]
     },
     "telephony": {
      "wer": 0.09868463613154771,
      "cer": 0.06445264733388371,
      "wer_arith": 0.11766722478953215,
      "done": 8,
      "total": 8,
      "ci": [
       0.09265,
       0.10467
      ]
     },
     "callcenter": {
      "wer": 0.2494831311854464,
      "cer": 0.17719193608125414,
      "wer_arith": 0.26899799508632066,
      "done": 6,
      "total": 6,
      "ci": [
       0.23534,
       0.26412
      ]
     }
    },
    "arena": 0.1250989255794568,
    "arena_arith": 0.1523913830021212,
    "arena_cer": 0.08330139247029486,
    "arena_strict": 0.13319968887577252,
    "zero_shot": 0.13078710142991548,
    "arena_real": 0.09572811725347147,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 43,
    "boh_share": 0.8766666666666667,
    "arena_ci": [
     0.11988,
     0.13042
    ],
    "rank_set": [
     40,
     40
    ]
   }
  },
  {
   "model": "gemma-4-e4b-it",
   "hf_id": "google/gemma-4-E4B-it",
   "params_b": 8.0,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.029922051797837565,
     "cer": 0.010602551446579088,
     "rtfx": 10.1,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.0699429721569943,
     "cer": 0.031071225817721298,
     "rtfx": 9.94,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.07213390293437916,
     "cer": 0.041416515459649035,
     "rtfx": 11.26,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.14738865748157642,
     "cer": 0.08015472845540972,
     "rtfx": 14.1,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07943016570848833,
     "cer": 0.04630868535972122,
     "rtfx": 11.27,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.1370525286544625,
     "cer": 0.0884656859752996,
     "rtfx": 10.27,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09900458046521149,
     "cer": 0.05062523683213339,
     "rtfx": 8.77,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.05045541089898626,
     "cer": 0.026505913422895856,
     "rtfx": 10.85,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.15962877030162412,
     "cer": 0.0994477286869944,
     "rtfx": 8.58,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.2230570942796029,
     "cer": 0.15595405532114393,
     "rtfx": 9.98,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.22350342152055608,
     "cer": 0.150625134176387,
     "rtfx": 9.83,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.02662375658279696,
     "cer": 0.016043453641759117,
     "rtfx": 10.81,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.11592528403620259,
     "cer": 0.05306076006978685,
     "rtfx": 12.35,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.0625,
     "cer": 0.031026015396867532,
     "rtfx": 9.69,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.1996649406031069,
     "cer": 0.1293806246691371,
     "rtfx": 10.96,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.1361794500723589,
     "cer": 0.08214972167444647,
     "rtfx": 11.15,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.257641065830721,
     "cer": 0.19365430732337208,
     "rtfx": 8.73,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.05518802228412256,
     "cer": 0.023825325192460844,
     "rtfx": 9.34,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.11970758452634785,
     "cer": 0.06744309158284807,
     "rtfx": 10.61,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.11403762662807525,
     "cer": 0.062329946831082596,
     "rtfx": 10.74,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.17456896551724138,
     "cer": 0.11204574801697104,
     "rtfx": 9.44,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3190311418685121,
     "cer": 0.18848849469701667,
     "rtfx": 12.95,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.11403660220994476,
     "cer": 0.062196075764273814,
     "rtfx": 8.33,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.2827298050139276,
     "cer": 0.1860233607645341,
     "rtfx": 9.1,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.41120925982333234,
     "cer": 0.28001588141874006,
     "rtfx": 10.42,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.32301013024602027,
     "cer": 0.20843214098499788,
     "rtfx": 10.5,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.47198275862068967,
     "cer": 0.34432761483121194,
     "rtfx": 8.94,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.7588235294117647,
     "cer": 0.5660857160578057,
     "rtfx": 10.36,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.29911947513812154,
     "cer": 0.19592273948379638,
     "rtfx": 8.66,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 11.5,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.09388433782217336,
     "cer": 0.052733141272933735,
     "done": 9,
     "total": 9,
     "ci": [
      0.09103,
      0.09687
     ]
    },
    "accented": {
     "wer": 0.2230570942796029,
     "cer": 0.15595405532114393,
     "done": 1,
     "total": 1,
     "ci": [
      0.20509,
      0.24226
     ]
    },
    "noisy": {
     "wer": 0.17589777560534858,
     "cer": 0.11736716064804205,
     "done": 5,
     "total": 5,
     "ci": [
      0.16399,
      0.18841
     ]
    },
    "telephony": {
     "wer": 0.12988987295665544,
     "cer": 0.07317911197452487,
     "done": 8,
     "total": 8,
     "ci": [
      0.12291,
      0.13705
     ]
    },
    "callcenter": {
     "wer": 0.42447915970897604,
     "cer": 0.2968012422568477,
     "done": 6,
     "total": 6,
     "ci": [
      0.40279,
      0.44708
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "bf16 15.99 GB: borderline on 16 GB cards",
   "training_data": "undisclosed",
   "hallucination_rate": 0.43,
   "inserted_wpm": 70.86,
   "arena_wer": 0.1951300716423102,
   "arena_cer": 0.12710495601084915,
   "arena_ci": [
    0.18979,
    0.20091
   ],
   "rank_range": [
    41,
    43
   ],
   "rtfx": 10.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.43,
    "halluc_3plus": 0.42,
    "halluc_3plus_ci": [
     0.36551,
     0.47652
    ],
    "inserted_wpm": 70.86377070205766,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.024893135529293436,
      "wer_uncapped": 0.024893135529293436,
      "cer": 0.011021545792036269,
      "av_wer": null,
      "strict_wer": 0.029922051797837565,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023635906462157407,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.06507883260650789,
      "wer_uncapped": 0.06507883260650789,
      "cer": 0.03417213224467943,
      "av_wer": null,
      "strict_wer": 0.0699429721569943,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004249133400424913,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.06639120386581693,
      "wer_uncapped": 0.06639120386581693,
      "cer": 0.041687960867343214,
      "av_wer": null,
      "strict_wer": 0.07213390293437916,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02458155333006513,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.13435864573320516,
      "wer_uncapped": 0.14247570223219053,
      "cer": 0.08080460561022042,
      "av_wer": null,
      "strict_wer": 0.13927160098259106,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022001495247249814,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07554108894149476,
      "wer_uncapped": 0.07558336151504903,
      "cer": 0.04671594658010338,
      "av_wer": null,
      "strict_wer": 0.07938789313493405,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019234020967196484,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.13292411320549732,
      "wer_uncapped": 0.13428214460318322,
      "cer": 0.09059664218777044,
      "av_wer": null,
      "strict_wer": 0.13569449725677657,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03112607963496116,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.0894086337930858,
      "wer_uncapped": 0.08958775813096548,
      "cer": 0.0508927342567221,
      "av_wer": null,
      "strict_wer": 0.09882545612733182,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.018680109521738018,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.046364431636906296,
      "wer_uncapped": 0.046364431636906296,
      "cer": 0.026237219155004755,
      "av_wer": null,
      "strict_wer": 0.05045541089898626,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018370812535377964,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.139953596287703,
      "wer_uncapped": 0.1480278422273782,
      "cer": 0.09241114313160423,
      "av_wer": null,
      "strict_wer": 0.15155452436194897,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02580046403712297,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.20205122579937476,
      "wer_uncapped": 0.21812098941479735,
      "cer": 0.14683763696718663,
      "av_wer": null,
      "strict_wer": 0.20693248505457137,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.034552734053639005,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.21035616143111158,
      "wer_uncapped": 0.22043213535212028,
      "cer": 0.15,
      "av_wer": null,
      "strict_wer": 0.21342744759954738,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026186755751926288,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.025063389896625706,
      "wer_uncapped": 0.025551004486054223,
      "cer": 0.01671624503119488,
      "av_wer": null,
      "strict_wer": 0.02613614199336844,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0017921146953405018,
      "insertions": 0.004291008386970939,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.08164837280955133,
      "wer_uncapped": 0.08530714423262084,
      "cer": 0.05136878185180174,
      "av_wer": null,
      "strict_wer": 0.11168881186212208,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01579048719430002,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.05901810584958217,
      "wer_uncapped": 0.05901810584958217,
      "cer": 0.033411631297586265,
      "av_wer": null,
      "strict_wer": 0.0625,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007311977715877437,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.18915625951873286,
      "wer_uncapped": 0.19448674992385015,
      "cer": 0.13317890461382242,
      "av_wer": null,
      "strict_wer": 0.19418215047212914,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.046299116661590006,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.1321273516642547,
      "wer_uncapped": 0.1321273516642547,
      "cer": 0.0841828345938836,
      "av_wer": null,
      "strict_wer": 0.1361794500723589,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026772793053545588,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.23648119122257052,
      "wer_uncapped": 0.2552899686520376,
      "cer": 0.17485089017444727,
      "av_wer": null,
      "strict_wer": 0.23883228840125392,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05270376175548589,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.051357938718662954,
      "wer_uncapped": 0.051357938718662954,
      "cer": 0.026081321885630972,
      "av_wer": null,
      "strict_wer": 0.05518802228412256,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004004178272980502,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.11468169357295156,
      "wer_uncapped": 0.11468169357295156,
      "cer": 0.06968331535190708,
      "av_wer": null,
      "strict_wer": 0.11970758452634785,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02771855010660981,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.10998552821997105,
      "wer_uncapped": 0.10998552821997105,
      "cer": 0.06394427670323757,
      "av_wer": null,
      "strict_wer": 0.11403762662807525,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022865412445730825,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.17025862068965517,
      "wer_uncapped": 0.1720219435736677,
      "cer": 0.11538634019462757,
      "av_wer": null,
      "strict_wer": 0.17280564263322884,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031739811912225704,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.2975778546712803,
      "wer_uncapped": 0.31453287197231833,
      "cer": 0.19249242592182073,
      "av_wer": null,
      "strict_wer": 0.30207612456747407,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04775086505190312,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.10410911602209945,
      "wer_uncapped": 0.10410911602209945,
      "cer": 0.0634546602146013,
      "av_wer": null,
      "strict_wer": 0.11403660220994476,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016747237569060772,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.25853064066852366,
      "wer_uncapped": 0.27924791086350975,
      "cer": 0.18127328689454075,
      "av_wer": null,
      "strict_wer": 0.2620125348189415,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04213091922005571,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.3886689003959793,
      "wer_uncapped": 0.40831556503198296,
      "cer": 0.2831122675636225,
      "av_wer": null,
      "strict_wer": 0.39156259518732867,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.07188547060615291,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.3104196816208394,
      "wer_uncapped": 0.3208393632416787,
      "cer": 0.2124899106155272,
      "av_wer": null,
      "strict_wer": 0.3125904486251809,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.042981186685962375,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.4153605015673981,
      "wer_uncapped": 0.4684561128526646,
      "cer": 0.31243553522579487,
      "av_wer": null,
      "strict_wer": 0.4188871473354232,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09894200626959247,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.5671280276816609,
      "wer_uncapped": 0.7581314878892733,
      "cer": 0.43419788664745435,
      "av_wer": null,
      "strict_wer": 0.5678200692041523,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.23321799307958477,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.2909185082872928,
      "wer_uncapped": 0.2909185082872928,
      "cer": 0.20721649484536084,
      "av_wer": null,
      "strict_wer": 0.29911947513812154,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02097720994475138,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.07595934680727826,
      "cer": 0.044340854678061585,
      "wer_arith": 0.0861015201777234,
      "done": 9,
      "total": 9,
      "ci": [
       0.07185,
       0.07971
      ]
     },
     "accented": {
      "wer": 0.20205122579937473,
      "cer": 0.1468376369671866,
      "wer_arith": 0.2020512257993748,
      "done": 1,
      "total": 1,
      "ci": [
       0.17436,
       0.22776
      ]
     },
     "noisy": {
      "wer": 0.14897387389301217,
      "cer": 0.09964675355064401,
      "wer_arith": 0.16542781393725037,
      "done": 5,
      "total": 5,
      "ci": [
       0.13825,
       0.16085
      ]
     },
     "telephony": {
      "wer": 0.09562641647415093,
      "cer": 0.058683526711300685,
      "wer_arith": 0.1193353143250997,
      "done": 8,
      "total": 8,
      "ci": [
       0.08968,
       0.1018
      ]
     },
     "callcenter": {
      "wer": 0.3589107393748413,
      "cer": 0.2596672690929792,
      "wer_arith": 0.3718377100369491,
      "done": 6,
      "total": 6,
      "ci": [
       0.34279,
       0.37673
      ]
     }
    },
    "arena": 0.13180897840266126,
    "arena_arith": 0.17556619592422046,
    "arena_cer": 0.08426607821725351,
    "arena_strict": 0.13898570409168012,
    "zero_shot": 0.11752151780042913,
    "arena_real": 0.08424134693064134,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 44,
    "boh_share": 0.37666666666666665,
    "arena_ci": [
     0.12643,
     0.13739
    ],
    "rank_set": [
     41,
     42
    ]
   }
  },
  {
   "model": "omniasr-ctc-3b-v2",
   "hf_id": "facebook/omniASR-CTC-3B",
   "params_b": 3.08,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.02222780990696505,
     "cer": 0.0065209962791404055,
     "rtfx": 30.33,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.053170077155317005,
     "cer": 0.018472422376522992,
     "rtfx": 30.15,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.10329855031864976,
     "cer": 0.044558374027302505,
     "rtfx": 30.6,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.16939015272882624,
     "cer": 0.06978176359647435,
     "rtfx": 30.85,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08057152519445383,
     "cer": 0.040272897031362574,
     "rtfx": 30.44,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.1660057580531262,
     "cer": 0.09415247512665569,
     "rtfx": 30.49,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.1417641188362036,
     "cer": 0.0686219527598838,
     "rtfx": 31.21,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.05794267483147224,
     "cer": 0.022252841887702376,
     "rtfx": 31.26,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.18440835266821345,
     "cer": 0.09933105164903547,
     "rtfx": 29.98,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.2516316568858663,
     "cer": 0.1562236286919831,
     "rtfx": 29.82,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.19074303572390755,
     "cer": 0.10560320592114006,
     "rtfx": 31.09,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.05490540276965087,
     "cer": 0.026676173898454374,
     "rtfx": 29.99,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.3610629693818602,
     "cer": 0.19051050595463856,
     "rtfx": 29.99,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.036385793871866294,
     "cer": 0.012908149721263605,
     "rtfx": 28.18,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.1813889734998477,
     "cer": 0.0903123345685548,
     "rtfx": 29.76,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.17481910274963822,
     "cer": 0.11649734155412995,
     "rtfx": 29.28,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.2905564263322884,
     "cer": 0.19679026009961262,
     "rtfx": 27.89,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.040564066852367686,
     "cer": 0.014733209450491107,
     "rtfx": 28.31,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.13448065793481573,
     "cer": 0.05971413446267867,
     "rtfx": 29.71,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.10332850940665701,
     "cer": 0.051970744614462945,
     "rtfx": 29.19,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.1961206896551724,
     "cer": 0.11171370595831027,
     "rtfx": 27.91,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3110726643598616,
     "cer": 0.15263908701854492,
     "rtfx": 30.91,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.15210635359116023,
     "cer": 0.07161560172747986,
     "rtfx": 30.71,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.2036908077994429,
     "cer": 0.12831829041677728,
     "rtfx": 28.15,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.36155954919281147,
     "cer": 0.2179724722075172,
     "rtfx": 29.83,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.2287988422575977,
     "cer": 0.12193904295948678,
     "rtfx": 29.1,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.385384012539185,
     "cer": 0.2485150341265449,
     "rtfx": 28.02,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.6688581314878893,
     "cer": 0.4500403150778391,
     "rtfx": 30.69,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.3016229281767956,
     "cer": 0.17873295473866765,
     "rtfx": 30.78,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 30.91,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.10875322441035859,
     "cer": 0.05155164163712002,
     "done": 9,
     "total": 9,
     "ci": [
      0.10603,
      0.11164
     ]
    },
    "accented": {
     "wer": 0.2516316568858663,
     "cer": 0.1562236286919831,
     "done": 1,
     "total": 1,
     "ci": [
      0.23518,
      0.27071
     ]
    },
    "noisy": {
     "wer": 0.17477866643550963,
     "cer": 0.10442225837294021,
     "done": 5,
     "total": 5,
     "ci": [
      0.16438,
      0.18734
     ]
    },
    "telephony": {
     "wer": 0.16920516424394322,
     "cer": 0.08494664538563258,
     "done": 8,
     "total": 8,
     "ci": [
      0.16231,
      0.17656
     ]
    },
    "callcenter": {
     "wer": 0.358319045242287,
     "cer": 0.22425301825447216,
     "done": 6,
     "total": 6,
     "ci": [
      0.34379,
      0.37327
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.8.0+cu128",
    "gpu": "NVIDIA A10"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.19333333333333333,
   "inserted_wpm": 10.06,
   "arena_wer": 0.19555495848764706,
   "arena_cer": 0.11108751908255576,
   "arena_ci": [
    0.19153,
    0.19982
   ],
   "rank_range": [
    41,
    43
   ],
   "rtfx": 30.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.19333333333333333,
    "halluc_3plus": 0.10333333333333333,
    "halluc_3plus_ci": [
     0.07376,
     0.14294
    ],
    "inserted_wpm": 10.059666536552726,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.01840583354287151,
      "wer_uncapped": 0.01840583354287151,
      "cer": 0.006811847294343506,
      "av_wer": null,
      "strict_wer": 0.02222780990696505,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0018606990193613276,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.048920943754892095,
      "wer_uncapped": 0.048920943754892095,
      "cer": 0.020372105474501405,
      "av_wer": null,
      "strict_wer": 0.053170077155317005,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003075030750307503,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.09391413964563344,
      "wer_uncapped": 0.09391413964563344,
      "cer": 0.04487113966562021,
      "av_wer": null,
      "strict_wer": 0.10329855031864976,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024931717907416485,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.16234112997970737,
      "wer_uncapped": 0.16276834347965397,
      "cer": 0.07415307690543362,
      "av_wer": null,
      "strict_wer": 0.16896293922887964,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009078286873865214,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07499154548528915,
      "wer_uncapped": 0.07499154548528915,
      "cer": 0.040867632270698444,
      "av_wer": null,
      "strict_wer": 0.08057152519445383,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012893134934054785,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.15611928947797274,
      "wer_uncapped": 0.1569884295724917,
      "cer": 0.09374922730756868,
      "av_wer": null,
      "strict_wer": 0.1651366179586072,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024227280134716714,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.12789477724609125,
      "wer_uncapped": 0.12789477724609125,
      "cer": 0.06813432929194349,
      "av_wer": null,
      "strict_wer": 0.1417641188362036,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01760536349445994,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.04906602171563835,
      "wer_uncapped": 0.04906602171563835,
      "cer": 0.022000567110903542,
      "av_wer": null,
      "strict_wer": 0.05794267483147224,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007796017084341069,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.16733178654292344,
      "wer_uncapped": 0.16816705336426915,
      "cer": 0.09860710854947166,
      "av_wer": null,
      "strict_wer": 0.18357308584686774,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010301624129930395,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.2283222728020622,
      "wer_uncapped": 0.2403334613064224,
      "cer": 0.1485561528744749,
      "av_wer": null,
      "strict_wer": 0.23962046838150605,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023857840179893598,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.18319952583652135,
      "wer_uncapped": 0.183630583544372,
      "cer": 0.10943184649887865,
      "av_wer": null,
      "strict_wer": 0.1903119780160569,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010399267201896654,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.05051687146479423,
      "wer_uncapped": 0.051589623561536964,
      "cer": 0.02827283017874536,
      "av_wer": null,
      "strict_wer": 0.053832650672908135,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003608347961771016,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.2645869439630272,
      "wer_uncapped": 0.32331985364914306,
      "cer": 0.20881251973120463,
      "av_wer": null,
      "strict_wer": 0.30213749277874064,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06874638937030618,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.03394846796657382,
      "wer_uncapped": 0.03394846796657382,
      "cer": 0.014093633565527296,
      "av_wer": null,
      "strict_wer": 0.036385793871866294,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002785515320334262,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.1719463904964971,
      "wer_uncapped": 0.1719463904964971,
      "cer": 0.0935457257092086,
      "av_wer": null,
      "strict_wer": 0.1813889734998477,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029393847091075235,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.1678726483357453,
      "wer_uncapped": 0.1678726483357453,
      "cer": 0.11915936743296164,
      "av_wer": null,
      "strict_wer": 0.17481910274963822,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01447178002894356,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.28056426332288403,
      "wer_uncapped": 0.2817398119122257,
      "cer": 0.20198215166599398,
      "av_wer": null,
      "strict_wer": 0.2893808777429467,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0219435736677116,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.036211699164345405,
      "wer_uncapped": 0.03743036211699164,
      "cer": 0.016240077757978293,
      "av_wer": null,
      "strict_wer": 0.03934540389972145,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00383008356545961,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.12503807493146513,
      "wer_uncapped": 0.12503807493146513,
      "cer": 0.061496477755918,
      "av_wer": null,
      "strict_wer": 0.13448065793481573,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02604325312214438,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.09493487698986976,
      "wer_uncapped": 0.09652677279305355,
      "cer": 0.05327195001644196,
      "av_wer": null,
      "strict_wer": 0.10173661360347323,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017655571635311142,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.18456112852664577,
      "wer_uncapped": 0.18789184952978055,
      "cer": 0.11448943898829544,
      "av_wer": null,
      "strict_wer": 0.19278996865203762,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023510971786833857,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.2955017301038062,
      "wer_uncapped": 0.3027681660899654,
      "cer": 0.16396955590039164,
      "av_wer": null,
      "strict_wer": 0.3038062283737024,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.01522491349480969,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.1358770718232044,
      "wer_uncapped": 0.1358770718232044,
      "cer": 0.07065011571638966,
      "av_wer": null,
      "strict_wer": 0.15210635359116023,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013207872928176795,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.19759749303621169,
      "wer_uncapped": 0.19951253481894152,
      "cer": 0.1366029483233436,
      "av_wer": null,
      "strict_wer": 0.2017757660167131,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008530640668523676,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.35074626865671643,
      "wer_uncapped": 0.3522692659153214,
      "cer": 0.22789871168369613,
      "av_wer": null,
      "strict_wer": 0.36003655193420653,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03045994517209869,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.21881331403762663,
      "wer_uncapped": 0.22243125904486252,
      "cer": 0.12779886998893905,
      "av_wer": null,
      "strict_wer": 0.2251808972503618,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023299565846599132,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.37656739811912227,
      "wer_uncapped": 0.3771551724137931,
      "cer": 0.2553926185030719,
      "av_wer": null,
      "strict_wer": 0.3847962382445141,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020768025078369907,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.6152249134948097,
      "wer_uncapped": 0.6647058823529411,
      "cer": 0.4876228478533954,
      "av_wer": null,
      "strict_wer": 0.6193771626297578,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05847750865051903,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.2880697513812155,
      "wer_uncapped": 0.2880697513812155,
      "cer": 0.1825794235219861,
      "av_wer": null,
      "strict_wer": 0.3016229281767956,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01286256906077348,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.08206225118938139,
      "cer": 0.039988871702076184,
      "wer_arith": 0.0998872741545577,
      "done": 9,
      "total": 9,
      "ci": [
       0.07795,
       0.08566
      ]
     },
     "accented": {
      "wer": 0.22832227280206221,
      "cer": 0.1485561528744749,
      "wer_arith": 0.2283222728020622,
      "done": 1,
      "total": 1,
      "ci": [
       0.19638,
       0.26152
      ]
     },
     "noisy": {
      "wer": 0.13817516014763903,
      "cer": 0.08093313566510567,
      "wer_arith": 0.1675062591916443,
      "done": 5,
      "total": 5,
      "ci": [
       0.12773,
       0.14843
      ]
     },
     "telephony": {
      "wer": 0.11985220665057338,
      "cer": 0.06721450978934604,
      "wer_arith": 0.14840354962089475,
      "done": 8,
      "total": 8,
      "ci": [
       0.11296,
       0.12675
      ]
     },
     "callcenter": {
      "wer": 0.3168621907107902,
      "cer": 0.21187458388979466,
      "wer_arith": 0.34116985645428377,
      "done": 6,
      "total": 6,
      "ci": [
       0.30084,
       0.3336
      ]
     }
    },
    "arena": 0.1378266854685682,
    "arena_arith": 0.1816566148398601,
    "arena_cer": 0.07763170365937605,
    "arena_strict": 0.14736636979007314,
    "zero_shot": 0.1527230639856129,
    "arena_real": 0.09967342774440306,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 46,
    "boh_share": 0.08333333333333333,
    "arena_ci": [
     0.13218,
     0.14324
    ],
    "rank_set": [
     41,
     43
    ]
   }
  },
  {
   "model": "omniasr-ctc-1b-v2",
   "hf_id": "facebook/omniASR-CTC-1B",
   "params_b": 0.98,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.03168217249182801,
     "cer": 0.009729288480522439,
     "rtfx": 78.34,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.07066979760706699,
     "cer": 0.024007598585091054,
     "rtfx": 76.23,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.12430842495973107,
     "cer": 0.051828488619896,
     "rtfx": 76.72,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.20442165972444729,
     "cer": 0.08257957738347253,
     "rtfx": 81.85,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.0931264795400744,
     "cer": 0.04454426489832527,
     "rtfx": 78.61,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.19343799228638167,
     "cer": 0.10603471077743189,
     "rtfx": 78.86,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.1622354717367384,
     "cer": 0.07785272199065303,
     "rtfx": 86.0,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.09339782843616529,
     "cer": 0.04473533126650591,
     "rtfx": 85.88,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.19433874709976798,
     "cer": 0.10125622277535781,
     "rtfx": 79.76,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.27049854659134537,
     "cer": 0.15867323019221755,
     "rtfx": 76.24,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.21251144997036478,
     "cer": 0.11399625839560822,
     "rtfx": 86.94,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.06338989662570704,
     "cer": 0.02889918838999224,
     "rtfx": 73.65,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.3304448295782785,
     "cer": 0.17351892588940301,
     "rtfx": 75.61,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.05083565459610028,
     "cer": 0.018217414388107245,
     "rtfx": 65.11,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.20971672250989948,
     "cer": 0.09825304393859184,
     "rtfx": 74.47,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.19782923299565847,
     "cer": 0.1150745113701605,
     "rtfx": 66.16,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.32934952978056425,
     "cer": 0.20442722744881017,
     "rtfx": 59.39,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.04857242339832869,
     "cer": 0.016757366604725245,
     "rtfx": 66.2,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.16417910447761194,
     "cer": 0.06786659608258337,
     "rtfx": 74.75,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.11316931982633864,
     "cer": 0.052644716806869524,
     "rtfx": 72.22,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.22609717868338558,
     "cer": 0.12363032650802434,
     "rtfx": 64.98,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.34429065743944637,
     "cer": 0.16777274700738076,
     "rtfx": 81.99,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.1667817679558011,
     "cer": 0.07503315537117013,
     "rtfx": 82.78,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.22022980501392758,
     "cer": 0.12443589062914787,
     "rtfx": 66.47,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.38470910752360643,
     "cer": 0.2120169401799894,
     "rtfx": 75.07,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.2512301013024602,
     "cer": 0.1325229025735753,
     "rtfx": 72.65,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.41731974921630094,
     "cer": 0.258402508762221,
     "rtfx": 64.04,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.6173010380622838,
     "cer": 0.39372325249643364,
     "rtfx": 82.02,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.32251381215469616,
     "cer": 0.17823987485972728,
     "rtfx": 82.9,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 83.48,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.12973539709802234,
     "cer": 0.06028535608636178,
     "done": 9,
     "total": 9,
     "ci": [
      0.1266,
      0.13297
     ]
    },
    "accented": {
     "wer": 0.27049854659134537,
     "cer": 0.15867323019221755,
     "done": 1,
     "total": 1,
     "ci": [
      0.25459,
      0.28952
     ]
    },
    "noisy": {
     "wer": 0.20004851797051745,
     "cer": 0.10999369110825559,
     "done": 5,
     "total": 5,
     "ci": [
      0.18826,
      0.21214
     ]
    },
    "telephony": {
     "wer": 0.18211564724811224,
     "cer": 0.08826537783251857,
     "done": 8,
     "total": 8,
     "ci": [
      0.17536,
      0.19062
     ]
    },
    "callcenter": {
     "wer": 0.3688839355455458,
     "cer": 0.21655689491684907,
     "done": 6,
     "total": 6,
     "ci": [
      0.35513,
      0.38344
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.8.0+cu128",
    "gpu": "NVIDIA A10"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.23,
   "inserted_wpm": 16.64,
   "arena_wer": 0.21291450013802576,
   "arena_cer": 0.11411760117468356,
   "arena_ci": [
    0.20905,
    0.21737
   ],
   "rank_range": [
    44,
    45
   ],
   "rtfx": 77.9,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.23,
    "halluc_3plus": 0.18666666666666668,
    "halluc_3plus_ci": [
     0.14664,
     0.23462
    ],
    "inserted_wpm": 16.63971449283444,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.02665325622328388,
      "wer_uncapped": 0.02665325622328388,
      "cer": 0.010281379023211168,
      "av_wer": null,
      "strict_wer": 0.03168217249182801,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002112144832788534,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.06479928435647993,
      "wer_uncapped": 0.06479928435647993,
      "cer": 0.026368625351358588,
      "av_wer": null,
      "strict_wer": 0.07066979760706699,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004137314100413732,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.1140836193010715,
      "wer_uncapped": 0.1140836193010715,
      "cer": 0.05301890925020077,
      "av_wer": null,
      "strict_wer": 0.12430842495973107,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025562014146648927,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.19459574922567552,
      "wer_uncapped": 0.19512976610060878,
      "cer": 0.08768549737379298,
      "av_wer": null,
      "strict_wer": 0.20388764284951405,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009185090248851864,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.08657423063916131,
      "wer_uncapped": 0.08657423063916131,
      "cer": 0.04548100841522149,
      "av_wer": null,
      "strict_wer": 0.0931264795400744,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013104497801826175,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.17801075560866966,
      "wer_uncapped": 0.17931446575044815,
      "cer": 0.10663155552258735,
      "av_wer": null,
      "strict_wer": 0.19202563963278832,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024172958878809277,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.14757286522173035,
      "wer_uncapped": 0.14764963279510734,
      "cer": 0.0780939153935663,
      "av_wer": null,
      "strict_wer": 0.1621587041633614,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018040379743596305,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.08310605670766222,
      "wer_uncapped": 0.08310605670766222,
      "cer": 0.045079756920698995,
      "av_wer": null,
      "strict_wer": 0.09339782843616529,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008259146812123707,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.17503480278422273,
      "wer_uncapped": 0.17707656612529002,
      "cer": 0.09983189241114312,
      "av_wer": null,
      "strict_wer": 0.1922969837587007,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013921113689095127,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.24598255909614436,
      "wer_uncapped": 0.25804859321011353,
      "cer": 0.1519784965189037,
      "av_wer": null,
      "strict_wer": 0.2584325124773762,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02928755553117973,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.2022199471954308,
      "wer_uncapped": 0.2028126515437254,
      "cer": 0.11814104161475206,
      "av_wer": null,
      "strict_wer": 0.21191874562207016,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013362788943369794,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.0591964111566218,
      "wer_uncapped": 0.05929393407450751,
      "cer": 0.030721036143943982,
      "av_wer": null,
      "strict_wer": 0.06329237370782134,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005656329237370782,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.25611399961486614,
      "wer_uncapped": 0.3023300596957443,
      "cer": 0.19081766111937942,
      "av_wer": null,
      "strict_wer": 0.2840362025803967,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05680724051607934,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.04596100278551532,
      "wer_uncapped": 0.04596100278551532,
      "cer": 0.019722987202332738,
      "av_wer": null,
      "strict_wer": 0.05083565459610028,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003307799442896936,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.20042643923240938,
      "wer_uncapped": 0.20042643923240938,
      "cer": 0.10300184045186267,
      "av_wer": null,
      "strict_wer": 0.20971672250989948,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028784648187633263,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.18798842257597684,
      "wer_uncapped": 0.18798842257597684,
      "cer": 0.1184717945651849,
      "av_wer": null,
      "strict_wer": 0.19782923299565847,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015195369030390739,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.3177899686520376,
      "wer_uncapped": 0.31837774294670845,
      "cer": 0.2100542625229831,
      "av_wer": null,
      "strict_wer": 0.3287617554858934,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01939655172413793,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.04317548746518106,
      "wer_uncapped": 0.04369777158774373,
      "cer": 0.018143528268265024,
      "av_wer": null,
      "strict_wer": 0.04805013927576602,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.15260432531221443,
      "wer_uncapped": 0.15275662503807494,
      "cer": 0.07069873706923907,
      "av_wer": null,
      "strict_wer": 0.16402680475175144,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023301858056655498,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.10709117221418235,
      "wer_uncapped": 0.10723589001447179,
      "cer": 0.05398941735673074,
      "av_wer": null,
      "strict_wer": 0.1130246020260492,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015918958031837915,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.2051332288401254,
      "wer_uncapped": 0.21003134796238246,
      "cer": 0.12713574599757838,
      "av_wer": null,
      "strict_wer": 0.22119905956112854,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02468652037617555,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.3245674740484429,
      "wer_uncapped": 0.33771626297577856,
      "cer": 0.18111283529150965,
      "av_wer": null,
      "strict_wer": 0.33114186851211075,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02560553633217993,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.1493439226519337,
      "wer_uncapped": 0.1493439226519337,
      "cer": 0.07487902377445824,
      "av_wer": null,
      "strict_wer": 0.1667817679558011,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01640193370165746,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.21622562674094709,
      "wer_uncapped": 0.21709610027855153,
      "cer": 0.1314595820508667,
      "av_wer": null,
      "strict_wer": 0.2193593314763231,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008878830083565459,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.37480962534267437,
      "wer_uncapped": 0.37572342369783734,
      "cer": 0.2242178079583677,
      "av_wer": null,
      "strict_wer": 0.3837953091684435,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028936947913493757,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.24327062228654125,
      "wer_uncapped": 0.24457308248914617,
      "cer": 0.13945771426863174,
      "av_wer": null,
      "strict_wer": 0.24992764109985527,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018958031837916063,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.4034090909090909,
      "wer_uncapped": 0.40497648902821315,
      "cer": 0.2701017982869187,
      "av_wer": null,
      "strict_wer": 0.4157523510971787,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018612852664576802,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.5858131487889273,
      "wer_uncapped": 0.6124567474048442,
      "cer": 0.41786743515850144,
      "av_wer": null,
      "strict_wer": 0.5892733564013841,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04221453287197232,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.30818370165745856,
      "wer_uncapped": 0.30878798342541436,
      "cer": 0.18462023984851672,
      "av_wer": null,
      "strict_wer": 0.3219095303867403,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014502762430939226,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.10267744825594367,
      "cer": 0.05053177928582875,
      "wer_arith": 0.11893673556310634,
      "done": 9,
      "total": 9,
      "ci": [
       0.09779,
       0.10727
      ]
     },
     "accented": {
      "wer": 0.24598255909614433,
      "cer": 0.1519784965189037,
      "wer_arith": 0.2459825590961444,
      "done": 1,
      "total": 1,
      "ci": [
       0.21512,
       0.27805
      ]
     },
     "noisy": {
      "wer": 0.16191532555927493,
      "cer": 0.09020549371475356,
      "wer_arith": 0.190877156088274,
      "done": 5,
      "total": 5,
      "ci": [
       0.15047,
       0.17276
      ]
     },
     "telephony": {
      "wer": 0.13438533504358813,
      "cer": 0.07171899474053664,
      "wer_arith": 0.16215325266294597,
      "done": 8,
      "total": 8,
      "ci": [
       0.12789,
       0.14089
      ]
     },
     "callcenter": {
      "wer": 0.33588221222047127,
      "cer": 0.20995442602797906,
      "wer_arith": 0.35528530262093994,
      "done": 6,
      "total": 6,
      "ci": [
       0.32121,
       0.35118
      ]
     }
    },
    "arena": 0.1593037252054246,
    "arena_arith": 0.19898223375400986,
    "arena_cer": 0.08681954157686972,
    "arena_strict": 0.17021744512441647,
    "zero_shot": 0.1724063821134877,
    "arena_real": 0.11961269688744396,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 49,
    "boh_share": 0.11666666666666667,
    "arena_ci": [
     0.15351,
     0.16509
    ],
    "rank_set": [
     45,
     46
    ]
   }
  },
  {
   "model": "gemma-4-e2b-it",
   "hf_id": "google/gemma-4-E2B-it",
   "params_b": 5.1,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.04309781242142318,
     "cer": 0.019401625028475967,
     "rtfx": 37.8,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.09202728390920273,
     "cer": 0.04471810996113367,
     "rtfx": 36.6,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.09370404089922263,
     "cer": 0.05382563902724162,
     "rtfx": 40.95,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.18423582185197052,
     "cer": 0.10371040375659135,
     "rtfx": 49.08,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08699695637470409,
     "cer": 0.050749143520901034,
     "rtfx": 41.45,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.15774892715519584,
     "cer": 0.10096848359071395,
     "rtfx": 36.4,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.10483891604186392,
     "cer": 0.05413666792977138,
     "rtfx": 31.46,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.05591004991509288,
     "cer": 0.030318061775175105,
     "rtfx": 39.57,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.18895591647331786,
     "cer": 0.12338596764156815,
     "rtfx": 29.41,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.2393462403334613,
     "cer": 0.16458040318799813,
     "rtfx": 35.25,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.25346193221617547,
     "cer": 0.1736983612590601,
     "rtfx": 32.74,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.033450360834796175,
     "cer": 0.019776440240756664,
     "rtfx": 38.36,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.13672251107259772,
     "cer": 0.07020405067131913,
     "rtfx": 41.4,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.08182451253481894,
     "cer": 0.04622378550570746,
     "rtfx": 35.38,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.2214438014011575,
     "cer": 0.14039174166225515,
     "rtfx": 39.01,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.15832127351664255,
     "cer": 0.09203464716307631,
     "rtfx": 40.74,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.2754702194357367,
     "cer": 0.18612802066039477,
     "rtfx": 35.84,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.07311977715877438,
     "cer": 0.03719803557207327,
     "rtfx": 35.61,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.1605239110569601,
     "cer": 0.10381154049761779,
     "rtfx": 32.16,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.1276410998552822,
     "cer": 0.06936921195177355,
     "rtfx": 40.83,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.19807993730407525,
     "cer": 0.1263604501014573,
     "rtfx": 35.49,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3283737024221453,
     "cer": 0.19072132977733672,
     "rtfx": 47.0,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.12664019337016574,
     "cer": 0.06848709490937532,
     "rtfx": 31.14,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.2924791086350975,
     "cer": 0.1863883727103796,
     "rtfx": 35.92,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.45720377703320136,
     "cer": 0.3031498147167814,
     "rtfx": 32.57,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.340520984081042,
     "cer": 0.21557125383789721,
     "rtfx": 40.11,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.45454545454545453,
     "cer": 0.311160302527209,
     "rtfx": 36.23,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.7820069204152249,
     "cer": 0.5390436023072629,
     "rtfx": 31.35,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.3097375690607735,
     "cer": 0.20442411670690652,
     "rtfx": 31.73,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 22.96,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.11194619167133263,
     "cer": 0.06457934469239691,
     "done": 9,
     "total": 9,
     "ci": [
      0.10869,
      0.11527
     ]
    },
    "accented": {
     "wer": 0.2393462403334613,
     "cer": 0.16458040318799813,
     "done": 1,
     "total": 1,
     "ci": [
      0.22198,
      0.25815
     ]
    },
    "noisy": {
     "wer": 0.19810434782090622,
     "cer": 0.12769531125009875,
     "done": 5,
     "total": 5,
     "ci": [
      0.18393,
      0.2138
     ]
    },
    "telephony": {
     "wer": 0.1480689366343496,
     "cer": 0.08574101921521372,
     "done": 8,
     "total": 8,
     "ci": [
      0.14048,
      0.15674
     ]
    },
    "callcenter": {
     "wer": 0.4394156356284656,
     "cer": 0.2932895771344061,
     "done": 6,
     "total": 6,
     "ci": [
      0.40029,
      0.49559
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "results before 2026-10-18 used a generic prompt with the audio first",
   "training_data": "undisclosed",
   "hallucination_rate": 0.8866666666666667,
   "inserted_wpm": 67.81,
   "arena_wer": 0.21304816003390883,
   "arena_cer": 0.1352679716679181,
   "arena_ci": [
    0.20369,
    0.22549
   ],
   "rank_range": [
    43,
    46
   ],
   "rtfx": 36.2,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.8866666666666667,
    "halluc_3plus": 0.36333333333333334,
    "halluc_3plus_ci": [
     0.31095,
     0.41917
    ],
    "inserted_wpm": 67.80795182066582,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.037616293688710084,
      "wer_uncapped": 0.037616293688710084,
      "cer": 0.019984502758277723,
      "av_wer": null,
      "strict_wer": 0.04309781242142318,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003671108876037214,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.08682768645868277,
      "wer_uncapped": 0.08682768645868277,
      "cer": 0.04801231428188998,
      "av_wer": null,
      "strict_wer": 0.09202728390920273,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00698870625069887,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.08698088101407661,
      "wer_uncapped": 0.08733104559142797,
      "cer": 0.054727312550193474,
      "av_wer": null,
      "strict_wer": 0.09335387632187128,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027032705371524617,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.1738758944782655,
      "wer_uncapped": 0.1794296699775713,
      "cer": 0.10743365673524623,
      "av_wer": null,
      "strict_wer": 0.17868204635266474,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.025739613371782547,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.08226242813662496,
      "wer_uncapped": 0.08226242813662496,
      "cer": 0.0511793659474622,
      "av_wer": null,
      "strict_wer": 0.08699695637470409,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02012174501183632,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.15199087402900754,
      "wer_uncapped": 0.1534032266826009,
      "cer": 0.10325643498256806,
      "av_wer": null,
      "strict_wer": 0.1563365745016025,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.032701396056276824,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.09588269914787993,
      "wer_uncapped": 0.09606182348575962,
      "cer": 0.054758955494663614,
      "av_wer": null,
      "strict_wer": 0.10465979170398423,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019703677166764758,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.052179282663510525,
      "wer_uncapped": 0.052179282663510525,
      "cer": 0.030362672982725356,
      "av_wer": null,
      "strict_wer": 0.05591004991509288,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020171872587866003,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.1716937354988399,
      "wer_uncapped": 0.17754060324825985,
      "cer": 0.11945244956772334,
      "av_wer": null,
      "strict_wer": 0.1831090487238979,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02691415313225058,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.2232764767180387,
      "wer_uncapped": 0.23561673888005266,
      "cer": 0.16112922652096,
      "av_wer": null,
      "strict_wer": 0.22689628695222946,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03290736576537048,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.22786788081254378,
      "wer_uncapped": 0.2506600571151463,
      "cer": 0.16280837278843757,
      "av_wer": null,
      "strict_wer": 0.23056199148661027,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03992672018966539,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.03208503998439633,
      "wer_uncapped": 0.03208503998439633,
      "cer": 0.020822913101850634,
      "av_wer": null,
      "strict_wer": 0.033450360834796175,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005753852155256485,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.10148276526092817,
      "wer_uncapped": 0.10610437126901598,
      "cer": 0.06760474450908763,
      "av_wer": null,
      "strict_wer": 0.1317157712305026,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017523589447332948,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.07834261838440111,
      "wer_uncapped": 0.07834261838440111,
      "cer": 0.048720233273934876,
      "av_wer": null,
      "strict_wer": 0.08182451253481894,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011664345403899722,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.2136765153822723,
      "wer_uncapped": 0.21733170880292416,
      "cer": 0.1464428507964714,
      "av_wer": null,
      "strict_wer": 0.21778860798050564,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04751751446847396,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.15282199710564398,
      "wer_uncapped": 0.15412445730824892,
      "cer": 0.09488505575319124,
      "av_wer": null,
      "strict_wer": 0.15701881331403764,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03256150506512301,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.2601880877742947,
      "wer_uncapped": 0.2713557993730408,
      "cer": 0.18857347863132876,
      "av_wer": null,
      "strict_wer": 0.2643025078369906,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05113636363636364,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.06754874651810584,
      "wer_uncapped": 0.06754874651810584,
      "cer": 0.03960797019277499,
      "av_wer": null,
      "strict_wer": 0.07311977715877438,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005222841225626741,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.13874505025890954,
      "wer_uncapped": 0.1559549192811453,
      "cer": 0.08554927968521926,
      "av_wer": null,
      "strict_wer": 0.14331404203472434,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.050106609808102345,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.12344428364688857,
      "wer_uncapped": 0.12344428364688857,
      "cer": 0.07099937221607724,
      "av_wer": null,
      "strict_wer": 0.1276410998552822,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025904486251808974,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.19220219435736677,
      "wer_uncapped": 0.19455329153605017,
      "cer": 0.13085788600385667,
      "av_wer": null,
      "strict_wer": 0.19572884012539185,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03565830721003135,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.3197231833910035,
      "wer_uncapped": 0.3245674740484429,
      "cer": 0.20276361486736127,
      "av_wer": null,
      "strict_wer": 0.3235294117647059,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03183391003460208,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.11714433701657459,
      "wer_uncapped": 0.11714433701657459,
      "cer": 0.07020828950136755,
      "av_wer": null,
      "strict_wer": 0.12664019337016574,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01976864640883978,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.28568941504178275,
      "wer_uncapped": 0.2889972144846797,
      "cer": 0.19945731410983314,
      "av_wer": null,
      "strict_wer": 0.2891713091922006,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027681058495821725,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.419128845568078,
      "wer_uncapped": 0.45446238196771244,
      "cer": 0.29881957225360156,
      "av_wer": null,
      "strict_wer": 0.4218702406335669,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.0907706366128541,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.334876989869754,
      "wer_uncapped": 0.33733719247467436,
      "cer": 0.2269289408388389,
      "av_wer": null,
      "strict_wer": 0.33806078147612156,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03907380607814761,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.43789184952978055,
      "wer_uncapped": 0.4506269592476489,
      "cer": 0.3212700121081663,
      "av_wer": null,
      "strict_wer": 0.4418103448275862,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.056230407523510974,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.5878892733564014,
      "wer_uncapped": 0.7799307958477508,
      "cer": 0.45171063326682925,
      "av_wer": null,
      "strict_wer": 0.5896193771626298,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.24048442906574394,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.3028314917127072,
      "wer_uncapped": 0.3028314917127072,
      "cer": 0.21689459288870186,
      "av_wer": null,
      "strict_wer": 0.3097375690607735,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022185773480662984,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.09319919028976001,
      "cer": 0.05655722326924703,
      "wer_arith": 0.10436775279062199,
      "done": 9,
      "total": 9,
      "ci": [
       0.08813,
       0.09799
      ]
     },
     "accented": {
      "wer": 0.22327647671803874,
      "cer": 0.16112922652096,
      "wer_arith": 0.2232764767180387,
      "done": 1,
      "total": 1,
      "ci": [
       0.19134,
       0.25097
      ]
     },
     "noisy": {
      "wer": 0.17225913169441748,
      "cer": 0.11575680726661065,
      "wer_arith": 0.1865794198918312,
      "done": 5,
      "total": 5,
      "ci": [
       0.16083,
       0.18539
      ]
     },
     "telephony": {
      "wer": 0.11328092924703578,
      "cer": 0.07079356844303647,
      "wer_arith": 0.13654695005427164,
      "done": 8,
      "total": 8,
      "ci": [
       0.10704,
       0.12
      ]
     },
     "callcenter": {
      "wer": 0.3823828510593604,
      "cer": 0.2742761345646889,
      "wer_arith": 0.394717977513084,
      "done": 6,
      "total": 6,
      "ci": [
       0.36563,
       0.40021
      ]
     }
    },
    "arena": 0.15325376671602137,
    "arena_arith": 0.1952140589990493,
    "arena_cer": 0.09956402272871871,
    "arena_strict": 0.1603898777406748,
    "zero_shot": 0.1394754645152973,
    "arena_real": 0.10179714479581153,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 48,
    "boh_share": 0.2733333333333333,
    "arena_ci": [
     0.14737,
     0.15933
    ],
    "rank_set": [
     44,
     46
    ]
   }
  },
  {
   "model": "omniasr-llm-300m-v2",
   "hf_id": "facebook/omniASR-LLM-300M",
   "params_b": 1.63,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.024742268041237112,
     "cer": 0.007954286582124687,
     "rtfx": 11.26,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.06451973610645198,
     "cer": 0.028036158784226384,
     "rtfx": 11.67,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.1177253309055256,
     "cer": 0.05823398321906548,
     "rtfx": 11.4,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.189575990601303,
     "cer": 0.09354913205804241,
     "rtfx": 16.88,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08610923233006425,
     "cer": 0.04632338886356619,
     "rtfx": 10.79,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.1669292194035526,
     "cer": 0.10016480498077275,
     "rtfx": 11.24,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.11796617108933187,
     "cer": 0.05924971580143994,
     "rtfx": 9.92,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.06306283126640251,
     "cer": 0.028802388333907452,
     "rtfx": 10.25,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.2162412993039443,
     "cer": 0.1289281269446173,
     "rtfx": 11.34,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.2692919431799484,
     "cer": 0.18144631973745898,
     "rtfx": 11.09,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.22495824128455197,
     "cer": 0.13861315286396303,
     "rtfx": 12.29,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.065047786229764,
     "cer": 0.037728330851666214,
     "rtfx": 12.8,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.2322357019064125,
     "cer": 0.11302434954107562,
     "rtfx": 16.97,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.04474233983286908,
     "cer": 0.017819219538093973,
     "rtfx": 9.82,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.2167225098994822,
     "cer": 0.11664902064584436,
     "rtfx": 10.99,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.13863965267727932,
     "cer": 0.0774818401937046,
     "rtfx": 10.02,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.2697884012539185,
     "cer": 0.1712230215827338,
     "rtfx": 9.68,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.04178272980501393,
     "cer": 0.01642553756304752,
     "rtfx": 9.78,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.16098081023454158,
     "cer": 0.0793276866066702,
     "rtfx": 10.99,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.11722141823444283,
     "cer": 0.061106812111529914,
     "rtfx": 9.99,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.20650470219435738,
     "cer": 0.12473713337022689,
     "rtfx": 9.76,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3083044982698962,
     "cer": 0.16504372635365627,
     "rtfx": 16.46,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.14373273480662985,
     "cer": 0.07503315537117013,
     "rtfx": 9.82,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.272458217270195,
     "cer": 0.1645872046721529,
     "rtfx": 9.26,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.4763935424916235,
     "cer": 0.28525674960296454,
     "rtfx": 10.49,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.30274963820549927,
     "cer": 0.17887721225131675,
     "rtfx": 10.06,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.48040752351097177,
     "cer": 0.3172108467072496,
     "rtfx": 9.51,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.9764705882352941,
     "cer": 0.606462817093593,
     "rtfx": 9.89,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.34875690607734805,
     "cer": 0.21690413847043222,
     "rtfx": 10.12,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 8.53,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.11631911989420146,
     "cer": 0.06124910950752918,
     "done": 9,
     "total": 9,
     "ci": [
      0.11268,
      0.12027
     ]
    },
    "accented": {
     "wer": 0.2692919431799484,
     "cer": 0.18144631973745898,
     "done": 1,
     "total": 1,
     "ci": [
      0.25004,
      0.29097
     ]
    },
    "noisy": {
     "wer": 0.1789702289896202,
     "cer": 0.10435725096486796,
     "done": 5,
     "total": 5,
     "ci": [
      0.16991,
      0.18904
     ]
    },
    "telephony": {
     "wer": 0.15947629771013228,
     "cer": 0.08405334147113035,
     "done": 8,
     "total": 8,
     "ci": [
      0.15281,
      0.16608
     ]
    },
    "callcenter": {
     "wer": 0.47620606929848863,
     "cer": 0.29488316146628485,
     "done": 6,
     "total": 6,
     "ci": [
      0.44233,
      0.51524
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.8.0+cu128",
    "gpu": "NVIDIA A10"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 263.38,
   "arena_wer": 0.22405035604735066,
   "arena_cer": 0.13142380512015678,
   "arena_ci": [
    0.21614,
    0.23318
   ],
   "rank_range": [
    45,
    46
   ],
   "rtfx": 10.9,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.9933333333333333,
    "halluc_3plus_ci": [
     0.97602,
     0.99817
    ],
    "inserted_wpm": 263.3803602297441,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.021322604978627105,
      "wer_uncapped": 0.021322604978627105,
      "cer": 0.008269050620467924,
      "av_wer": null,
      "strict_wer": 0.024742268041237112,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0027659039476992707,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.06060606060606061,
      "wer_uncapped": 0.06077378955607738,
      "cer": 0.030558158211752107,
      "av_wer": null,
      "strict_wer": 0.0643520071564352,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007100525550710053,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.11086210518943904,
      "wer_uncapped": 0.11107220393584985,
      "cer": 0.059837920712564795,
      "av_wer": null,
      "strict_wer": 0.11751523215911479,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029063659920162476,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.18145893410231764,
      "wer_uncapped": 0.18647869272669015,
      "cer": 0.09683708341934448,
      "av_wer": null,
      "strict_wer": 0.18455623197693047,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.021253871622343268,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.08310787960771052,
      "wer_uncapped": 0.08310787960771052,
      "cer": 0.047633329216872786,
      "av_wer": null,
      "strict_wer": 0.08610923233006425,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015809942509299967,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.15899831604106687,
      "wer_uncapped": 0.1615514150687164,
      "cer": 0.10058600993991544,
      "av_wer": null,
      "strict_wer": 0.1643761203759031,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0010030090270812437,
      "insertions": 0.0323754685208322,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.10865170551958853,
      "wer_uncapped": 0.10865170551958853,
      "cer": 0.0595510679028565,
      "av_wer": null,
      "strict_wer": 0.11796617108933187,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01793802297909363,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.05794267483147224,
      "wer_uncapped": 0.05794267483147224,
      "cer": 0.029334089481204723,
      "av_wer": null,
      "strict_wer": 0.06306283126640251,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011861266917099779,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.1679814385150812,
      "wer_uncapped": 0.20361948955916473,
      "cer": 0.10367435158501441,
      "av_wer": null,
      "strict_wer": 0.18041763341067285,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.008072653884964682,
      "insertions": 0.054477958236658935,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.2397850052103329,
      "wer_uncapped": 0.2632040805133549,
      "cer": 0.16956023618577598,
      "av_wer": null,
      "strict_wer": 0.24587286787692644,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.003015075376884422,
      "insertions": 0.05045796084023474,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.21154157012770083,
      "wer_uncapped": 0.22107872191389621,
      "cer": 0.14107899327186643,
      "av_wer": null,
      "strict_wer": 0.21531332507139395,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.03529284983027103,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.06407255705090696,
      "wer_uncapped": 0.06407255705090696,
      "cer": 0.04069813357201148,
      "av_wer": null,
      "strict_wer": 0.065047786229764,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00682660425199922,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.18139803581744657,
      "wer_uncapped": 0.1981513575967649,
      "cer": 0.10729265322689757,
      "av_wer": null,
      "strict_wer": 0.21432697862507222,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04583092624687079,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.04195682451253482,
      "wer_uncapped": 0.04195682451253482,
      "cer": 0.019560991414223232,
      "av_wer": null,
      "strict_wer": 0.04474233983286908,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004004178272980502,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.20849832470301555,
      "wer_uncapped": 0.21123971976850442,
      "cer": 0.12286602779716951,
      "av_wer": null,
      "strict_wer": 0.2139811148339933,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.042187024063356685,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.13386396526772792,
      "wer_uncapped": 0.1353111432706223,
      "cer": 0.08017697527727123,
      "av_wer": null,
      "strict_wer": 0.13719247467438495,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.025759768451519536,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.257641065830721,
      "wer_uncapped": 0.2656739811912226,
      "cer": 0.17749674873312704,
      "av_wer": null,
      "strict_wer": 0.2617554858934169,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0438871473354232,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.03864902506963788,
      "wer_uncapped": 0.03864902506963788,
      "cer": 0.01777903774501863,
      "av_wer": null,
      "strict_wer": 0.04178272980501393,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.15488882120012185,
      "wer_uncapped": 0.15488882120012185,
      "cer": 0.08345497239322205,
      "av_wer": null,
      "strict_wer": 0.16098081023454158,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03320134023758757,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.1130246020260492,
      "wer_uncapped": 0.1130246020260492,
      "cer": 0.06310723147290066,
      "av_wer": null,
      "strict_wer": 0.11722141823444283,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020260492040520984,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.19768808777429467,
      "wer_uncapped": 0.2025862068965517,
      "cer": 0.12718059105789498,
      "av_wer": null,
      "strict_wer": 0.2016065830721003,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04075235109717868,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.2955017301038062,
      "wer_uncapped": 0.30311418685121105,
      "cer": 0.1749057858567945,
      "av_wer": null,
      "strict_wer": 0.30069204152249135,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04083044982698962,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.13337361878453038,
      "wer_uncapped": 0.13337361878453038,
      "cer": 0.07637281716810436,
      "av_wer": null,
      "strict_wer": 0.14373273480662985,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016833563535911603,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.23607242339832868,
      "wer_uncapped": 0.2707172701949861,
      "cer": 0.15758140288352504,
      "av_wer": null,
      "strict_wer": 0.2378133704735376,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.05692896935933148,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.42887602802314956,
      "wer_uncapped": 0.47258604934511117,
      "cer": 0.2849209874976201,
      "av_wer": null,
      "strict_wer": 0.4326835211696619,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.10265001522997258,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.29232995658465993,
      "wer_uncapped": 0.2995658465991317,
      "cer": 0.1874084481779319,
      "av_wer": null,
      "strict_wer": 0.2955137481910275,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0467438494934877,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.43456112852664575,
      "wer_uncapped": 0.4760971786833856,
      "cer": 0.3083097896766671,
      "av_wer": null,
      "strict_wer": 0.438871473354232,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.0954153605015674,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.5612456747404845,
      "wer_uncapped": 0.9757785467128027,
      "cer": 0.41025641025641024,
      "av_wer": null,
      "strict_wer": 0.5619377162629757,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03333333333333333,
      "insertions": 0.4674740484429066,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.3349447513812155,
      "wer_uncapped": 0.3415918508287293,
      "cer": 0.22642541552703555,
      "av_wer": null,
      "strict_wer": 0.34210980662983426,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.03375345303867403,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.0893590961120004,
      "cer": 0.04766727627200957,
      "wer_arith": 0.10565907993237375,
      "done": 9,
      "total": 9,
      "ci": [
       0.08489,
       0.09337
      ]
     },
     "accented": {
      "wer": 0.2397850052103329,
      "cer": 0.16956023618577598,
      "wer_arith": 0.2397850052103329,
      "done": 1,
      "total": 1,
      "ci": [
       0.2088,
       0.27032
      ]
     },
     "noisy": {
      "wer": 0.14487582944642266,
      "cer": 0.08643806188753633,
      "wer_arith": 0.17070035008834,
      "done": 5,
      "total": 5,
      "ci": [
       0.13541,
       0.15472
      ]
     },
     "telephony": {
      "wer": 0.12543127533739554,
      "cer": 0.07165037829219949,
      "wer_arith": 0.14732455972834924,
      "done": 8,
      "total": 8,
      "ci": [
       0.11892,
       0.13195
      ]
     },
     "callcenter": {
      "wer": 0.3663570630106724,
      "cer": 0.24945817377937762,
      "wer_arith": 0.38133832710908067,
      "done": 6,
      "total": 6,
      "ci": [
       0.35128,
       0.38199
      ]
     }
    },
    "arena": 0.14964385975395997,
    "arena_arith": 0.19352413028852017,
    "arena_cer": 0.08832786285658627,
    "arena_strict": 0.15629312725053737,
    "zero_shot": 0.17195298224018687,
    "arena_real": 0.10659560505753114,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 47,
    "boh_share": 0.9866666666666667,
    "arena_ci": [
     0.14453,
     0.15485
    ],
    "rank_set": [
     44,
     45
    ]
   }
  },
  {
   "model": "mms-1b-all",
   "hf_id": "facebook/mms-1b-all",
   "params_b": 0.96,
   "license": "CC-BY-NC-4.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.03540357053055067,
     "cer": 0.010735439289239881,
     "rtfx": 89.77,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.07793805210779381,
     "cer": 0.02776322110135814,
     "rtfx": 87.69,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.13712444849079067,
     "cer": 0.05859931561065309,
     "rtfx": 88.66,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.2147815870981523,
     "cer": 0.08583195412031869,
     "rtfx": 91.08,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08615150490361853,
     "cer": 0.04186087544661893,
     "rtfx": 89.33,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.24113205497311097,
     "cer": 0.12306455879061629,
     "rtfx": 89.65,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.17705161339850048,
     "cer": 0.08101553618794997,
     "rtfx": 92.18,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.08814902485462872,
     "cer": 0.031287174187622,
     "rtfx": 92.34,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.33410672853828305,
     "cer": 0.17837974486621033,
     "rtfx": 88.84,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.4285635934843416,
     "cer": 0.2569620253164557,
     "rtfx": 87.17,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.2916644215744383,
     "cer": 0.16177838661200789,
     "rtfx": 92.71,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.12317144528964306,
     "cer": 0.05536564394018833,
     "rtfx": 87.1,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.40188715578663586,
     "cer": 0.17207767579458394,
     "rtfx": 88.75,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.05762534818941504,
     "cer": 0.020108839925670294,
     "rtfx": 81.57,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.24352726165092903,
     "cer": 0.11739015352038115,
     "rtfx": 85.77,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.13024602026049203,
     "cer": 0.06347819575147899,
     "rtfx": 84.43,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.3751959247648903,
     "cer": 0.20273012359343295,
     "rtfx": 80.08,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.05727715877437326,
     "cer": 0.018947438279798248,
     "rtfx": 81.53,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.19402985074626866,
     "cer": 0.08192165166754897,
     "rtfx": 86.6,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.10752532561505065,
     "cer": 0.05039814283218092,
     "rtfx": 85.04,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.2919278996865204,
     "cer": 0.14919756502490317,
     "rtfx": 81.18,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3397923875432526,
     "cer": 0.15648452521242945,
     "rtfx": 90.85,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.21210290055248618,
     "cer": 0.09672867004454722,
     "rtfx": 91.47,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.28534122562674097,
     "cer": 0.15615874701353863,
     "rtfx": 82.49,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.48812062138288154,
     "cer": 0.27125463208046585,
     "rtfx": 86.72,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.28031837916063673,
     "cer": 0.14557799355982126,
     "rtfx": 85.19,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.5466300940438872,
     "cer": 0.31794871794871793,
     "rtfx": 81.03,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.6335640138408305,
     "cer": 0.35911430875147304,
     "rtfx": 90.77,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.440521408839779,
     "cer": 0.2474070799469514,
     "rtfx": 91.28,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 91.19,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.15464873165504767,
     "cer": 0.07094864662228748,
     "done": 9,
     "total": 9,
     "ci": [
      0.15125,
      0.15807
     ]
    },
    "accented": {
     "wer": 0.4285635934843416,
     "cer": 0.2569620253164557,
     "done": 1,
     "total": 1,
     "ci": [
      0.40811,
      0.45137
     ]
    },
    "noisy": {
     "wer": 0.21965179528803294,
     "cer": 0.11309713988059426,
     "done": 5,
     "total": 5,
     "ci": [
      0.2096,
      0.22986
     ]
    },
    "telephony": {
     "wer": 0.21596426549927883,
     "cer": 0.09764016409952253,
     "done": 8,
     "total": 8,
     "ci": [
      0.20831,
      0.22416
     ]
    },
    "callcenter": {
     "wer": 0.4457492904824593,
     "cer": 0.24957691321682804,
     "done": 6,
     "total": 6,
     "ci": [
      0.42987,
      0.45942
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.99,
   "inserted_wpm": 103.03,
   "arena_wer": 0.2573885551425798,
   "arena_cer": 0.13276854096189142,
   "arena_ci": [
    0.25294,
    0.2617
   ],
   "rank_range": [
    47,
    47
   ],
   "rtfx": 88.8,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.99,
    "halluc_3plus": 0.9733333333333334,
    "halluc_3plus_ci": [
     0.94827,
     0.98643
    ],
    "inserted_wpm": 103.02793732225507,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.03087754588886095,
      "wer_uncapped": 0.03087754588886095,
      "cer": 0.011530410445603524,
      "av_wer": null,
      "strict_wer": 0.03540357053055067,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0020115665074176515,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.07167617130716762,
      "wer_uncapped": 0.07167617130716762,
      "cer": 0.03083924508097979,
      "av_wer": null,
      "strict_wer": 0.07793805210779381,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0036341272503634127,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.1283703340570068,
      "wer_uncapped": 0.12844036697247707,
      "cer": 0.06068482149375776,
      "av_wer": null,
      "strict_wer": 0.1370544155753204,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02584214580853001,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.20474206984940724,
      "wer_uncapped": 0.2052760867243405,
      "cer": 0.09137824262024358,
      "av_wer": null,
      "strict_wer": 0.21424757022321905,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012495994873438,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.08095197835644234,
      "wer_uncapped": 0.08095197835644234,
      "cer": 0.0426053666884251,
      "av_wer": null,
      "strict_wer": 0.08615150490361853,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013484950963814676,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.2221739366614156,
      "wer_uncapped": 0.22890977239393775,
      "cer": 0.12309917661894518,
      "av_wer": null,
      "strict_wer": 0.23439621924058884,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.003009027081243731,
      "insertions": 0.028627301863219077,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.161263082473963,
      "wer_uncapped": 0.16136543923846566,
      "cer": 0.08092163707568535,
      "av_wer": null,
      "strict_wer": 0.1769492566339978,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014713784897259398,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.07739412339834302,
      "wer_uncapped": 0.07739412339834302,
      "cer": 0.031580293452093025,
      "av_wer": null,
      "strict_wer": 0.08814902485462872,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008825194257191376,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.3093271461716937,
      "wer_uncapped": 0.3183294663573086,
      "cer": 0.17848222862632085,
      "av_wer": null,
      "strict_wer": 0.32510440835266824,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01986078886310905,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.40338945867383313,
      "wer_uncapped": 0.416991169856853,
      "cer": 0.2539143973443788,
      "av_wer": null,
      "strict_wer": 0.41485219108210386,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.02391268578950255,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.28201950536128023,
      "wer_uncapped": 0.2841747939005334,
      "cer": 0.16887615250436083,
      "av_wer": null,
      "strict_wer": 0.2895091330351851,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.005,
      "insertions": 0.016164664044398945,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.11556465769455822,
      "wer_uncapped": 0.11566218061244392,
      "cer": 0.05933608866191065,
      "av_wer": null,
      "strict_wer": 0.12287887653598596,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007801833430856251,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.2921240130945504,
      "wer_uncapped": 0.38128249566724437,
      "cer": 0.1581653362197267,
      "av_wer": null,
      "strict_wer": 0.3106104371269016,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.004,
      "insertions": 0.11515501636818795,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.05362116991643454,
      "wer_uncapped": 0.05362116991643454,
      "cer": 0.021909930341811112,
      "av_wer": null,
      "strict_wer": 0.05762534818941504,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004352367688022284,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.23393237892171795,
      "wer_uncapped": 0.23545537618032286,
      "cer": 0.12486513930316685,
      "av_wer": null,
      "strict_wer": 0.2420042643923241,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03411513859275053,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.12315484804630969,
      "wer_uncapped": 0.12315484804630969,
      "cer": 0.06573794505395952,
      "av_wer": null,
      "strict_wer": 0.13024602026049203,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01635311143270622,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.3434561128526646,
      "wer_uncapped": 0.36226489028213166,
      "cer": 0.20745324902461995,
      "av_wer": null,
      "strict_wer": 0.35599529780564265,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.006711409395973154,
      "insertions": 0.040948275862068964,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.05222841225626741,
      "wer_uncapped": 0.05222841225626741,
      "cer": 0.020532966142880284,
      "av_wer": null,
      "strict_wer": 0.05727715877437326,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003481894150417827,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.1856533658239415,
      "wer_uncapped": 0.1856533658239415,
      "cer": 0.08656470140255125,
      "av_wer": null,
      "strict_wer": 0.19402985074626866,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027566250380749314,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.10086830680173661,
      "wer_uncapped": 0.10086830680173661,
      "cer": 0.05204627664344862,
      "av_wer": null,
      "strict_wer": 0.10752532561505065,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015195369030390739,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.266653605015674,
      "wer_uncapped": 0.2801724137931034,
      "cer": 0.15117269832727925,
      "av_wer": null,
      "strict_wer": 0.2784090909090909,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.003355704697986577,
      "insertions": 0.031739811912225704,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.32941176470588235,
      "wer_uncapped": 0.33217993079584773,
      "cer": 0.16603857237863,
      "av_wer": null,
      "strict_wer": 0.3370242214532872,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02110726643598616,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.19811809392265192,
      "wer_uncapped": 0.19811809392265192,
      "cer": 0.09947401641068798,
      "av_wer": null,
      "strict_wer": 0.21210290055248618,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01286256906077348,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.2802924791086351,
      "wer_uncapped": 0.2822075208913649,
      "cer": 0.17054106593228577,
      "av_wer": null,
      "strict_wer": 0.28342618384401114,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.012186629526462395,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.47776424002436796,
      "wer_uncapped": 0.48187633262260127,
      "cer": 0.29079139430094564,
      "av_wer": null,
      "strict_wer": 0.48385622905878767,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.04112092598233323,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.27539797395079596,
      "wer_uncapped": 0.27568740955137483,
      "cer": 0.1555110460075932,
      "av_wer": null,
      "strict_wer": 0.28002894356005786,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01997105643994211,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.5193965517241379,
      "wer_uncapped": 0.5380094043887147,
      "cer": 0.3318534463428853,
      "av_wer": null,
      "strict_wer": 0.5270376175548589,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.020134228187919462,
      "insertions": 0.038989028213166146,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.6031141868512111,
      "wer_uncapped": 0.6318339100346021,
      "cer": 0.3853543190718983,
      "av_wer": null,
      "strict_wer": 0.6044982698961938,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.05986159169550173,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.4299896408839779,
      "wer_uncapped": 0.4299896408839779,
      "cer": 0.26252892909741216,
      "av_wer": null,
      "strict_wer": 0.440521408839779,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015279696132596684,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.11677864511870299,
      "cer": 0.055146571325768716,
      "wer_arith": 0.14297515424047783,
      "done": 9,
      "total": 9,
      "ci": [
       0.11171,
       0.12145
      ]
     },
     "accented": {
      "wer": 0.40338945867383313,
      "cer": 0.2539143973443788,
      "wer_arith": 0.4033894586738332,
      "done": 1,
      "total": 1,
      "ci": [
       0.35129,
       0.45216
      ]
     },
     "noisy": {
      "wer": 0.17179309598709794,
      "cer": 0.091175337319884,
      "wer_arith": 0.2072368030196814,
      "done": 5,
      "total": 5,
      "ci": [
       0.16189,
       0.18291
      ]
     },
     "telephony": {
      "wer": 0.16592847543629172,
      "cer": 0.0826039001672635,
      "wer_arith": 0.1925777774144078,
      "done": 8,
      "total": 8,
      "ci": [
       0.1583,
       0.17358
      ]
     },
     "callcenter": {
      "wer": 0.4130700788403535,
      "cer": 0.2524600027516805,
      "wer_arith": 0.430992512090521,
      "done": 6,
      "total": 6,
      "ci": [
       0.397,
       0.42865
      ]
     }
    },
    "arena": 0.18932232667464438,
    "arena_arith": 0.24159961250942008,
    "arena_cer": 0.09898420725314634,
    "arena_strict": 0.1994343817012093,
    "zero_shot": 0.22252330560742467,
    "arena_real": 0.14761020137333483,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 50,
    "boh_share": 0.89,
    "arena_ci": [
     0.18331,
     0.1953
    ],
    "rank_set": [
     47,
     47
    ]
   }
  },
  {
   "model": "omniasr-ctc-300m-v2",
   "hf_id": "facebook/omniASR-CTC-300M",
   "params_b": 0.33,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.05285390998239879,
     "cer": 0.015576353557597388,
     "rtfx": 175.99,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.12277759141227776,
     "cer": 0.0429385562688327,
     "rtfx": 179.28,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.194831570838294,
     "cer": 0.0748200737971431,
     "rtfx": 182.84,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.3117590515860301,
     "cer": 0.12890188984257728,
     "rtfx": 186.37,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.13700541088941495,
     "cer": 0.058328799752981136,
     "rtfx": 183.57,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.26541365636373515,
     "cer": 0.12516022706464017,
     "rtfx": 182.24,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.20670948591315028,
     "cer": 0.09425792598206391,
     "rtfx": 191.96,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.14961663150311327,
     "cer": 0.06533011826845792,
     "rtfx": 194.83,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.2871461716937355,
     "cer": 0.1408875233354076,
     "rtfx": 182.07,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.38254812702243185,
     "cer": 0.2121659634317862,
     "rtfx": 157.91,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.30863731882105716,
     "cer": 0.16183972438892238,
     "rtfx": 199.85,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.16637409791300956,
     "cer": 0.07432418262273767,
     "rtfx": 176.3,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.4363566339302908,
     "cer": 0.23188955472957598,
     "rtfx": 176.92,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.09366295264623956,
     "cer": 0.03424475710114149,
     "rtfx": 152.04,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.32713981114833995,
     "cer": 0.14973530968766544,
     "rtfx": 167.81,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.2849493487698987,
     "cer": 0.14794937719977036,
     "rtfx": 165.44,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.3989028213166144,
     "cer": 0.2180409518539015,
     "rtfx": 149.1,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.08722144846796658,
     "cer": 0.02906822405096894,
     "rtfx": 147.75,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.2691136155954919,
     "cer": 0.10894653255690842,
     "rtfx": 169.22,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.1732272069464544,
     "cer": 0.07311350190958787,
     "rtfx": 165.48,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.31289184952978055,
     "cer": 0.147242206235012,
     "rtfx": 146.55,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.4671280276816609,
     "cer": 0.22346957762203065,
     "rtfx": 185.62,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.2262603591160221,
     "cer": 0.09569150202332778,
     "rtfx": 190.11,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.3368732590529248,
     "cer": 0.1857910804353597,
     "rtfx": 151.93,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.5668595796527566,
     "cer": 0.31953414505029115,
     "rtfx": 169.44,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.391027496382055,
     "cer": 0.19907141609046206,
     "rtfx": 164.26,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.549373040752351,
     "cer": 0.32326139088729017,
     "rtfx": 143.47,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.7072664359861591,
     "cer": 0.46548409105005273,
     "rtfx": 182.19,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.4463915745856354,
     "cer": 0.24762811575475227,
     "rtfx": 188.6,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 188.85,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.19201260890912775,
     "cer": 0.08291127420774458,
     "done": 9,
     "total": 9,
     "ci": [
      0.18848,
      0.19549
     ]
    },
    "accented": {
     "wer": 0.38254812702243185,
     "cer": 0.2121659634317862,
     "done": 1,
     "total": 1,
     "ci": [
      0.36455,
      0.40252
     ]
    },
    "noisy": {
     "wer": 0.28265845054043,
     "cer": 0.14236202404628023,
     "done": 5,
     "total": 5,
     "ci": [
      0.27152,
      0.29483
     ]
    },
    "telephony": {
     "wer": 0.2673216548975846,
     "cer": 0.12296816021876866,
     "done": 8,
     "total": 8,
     "ci": [
      0.25992,
      0.27572
     ]
    },
    "callcenter": {
     "wer": 0.49963189773531363,
     "cer": 0.29012837321136803,
     "done": 6,
     "total": 6,
     "ci": [
      0.48652,
      0.51293
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.8.0+cu128",
    "gpu": "NVIDIA A10"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.24666666666666667,
   "inserted_wpm": 12.87,
   "arena_wer": 0.3012951363927829,
   "arena_cer": 0.1539282677730227,
   "arena_ci": [
    0.29724,
    0.30577
   ],
   "rank_range": [
    48,
    48
   ],
   "rtfx": 178.1,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.24666666666666667,
    "halluc_3plus": 0.14666666666666667,
    "halluc_3plus_ci": [
     0.1111,
     0.19116
    ],
    "inserted_wpm": 12.870127697540848,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.04646718632134775,
      "wer_uncapped": 0.04646718632134775,
      "cer": 0.01644558039483271,
      "av_wer": null,
      "strict_wer": 0.05285390998239879,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003721398038722655,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.11405568601140557,
      "wer_uncapped": 0.11422341496142234,
      "cer": 0.04719582385222862,
      "av_wer": null,
      "strict_wer": 0.12260986246226098,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008554176450855417,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.18096505357518033,
      "wer_uncapped": 0.18131521815253168,
      "cer": 0.0774476162663357,
      "av_wer": null,
      "strict_wer": 0.19448140626094265,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03130471321521115,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.2991562533376055,
      "wer_uncapped": 0.3007583039624052,
      "cer": 0.1356682492717723,
      "av_wer": null,
      "strict_wer": 0.3101570009612304,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016234112997970736,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.1292272573554278,
      "wer_uncapped": 0.1292272573554278,
      "cer": 0.060159130603531924,
      "av_wer": null,
      "strict_wer": 0.13700541088941495,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01551403449442002,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.24824813949698518,
      "wer_uncapped": 0.24987777717420825,
      "cer": 0.12741389115545335,
      "av_wer": null,
      "strict_wer": 0.263784018686512,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03427671247759248,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.18982061977020906,
      "wer_uncapped": 0.18989738734358608,
      "cer": 0.0954418627929382,
      "av_wer": null,
      "strict_wer": 0.20660712914864762,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.020599298856163156,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.1394535069212165,
      "wer_uncapped": 0.1394535069212165,
      "cer": 0.06649653339560434,
      "av_wer": null,
      "strict_wer": 0.14961663150311327,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015077445582256986,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.27016241299303945,
      "wer_uncapped": 0.27044083526682133,
      "cer": 0.14490874159462055,
      "av_wer": null,
      "strict_wer": 0.2868677494199536,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016241299303944315,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.35666099928700706,
      "wer_uncapped": 0.3681237316952778,
      "cer": 0.2109074351517288,
      "av_wer": null,
      "strict_wer": 0.3710853946141611,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0010050251256281408,
      "insertions": 0.03202983601162727,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.295867234225982,
      "wer_uncapped": 0.29775311169782853,
      "cer": 0.16974831796660853,
      "av_wer": null,
      "strict_wer": 0.30669755913572927,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018212188156689478,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.15740198946752487,
      "wer_uncapped": 0.15798712697483908,
      "cer": 0.08036960012635902,
      "av_wer": null,
      "strict_wer": 0.16578896040569535,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01180027306417008,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.3718467167340651,
      "wer_uncapped": 0.41729250914692856,
      "cer": 0.2530104180760384,
      "av_wer": null,
      "strict_wer": 0.39033314076641634,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.062199114192181784,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.08774373259052924,
      "wer_uncapped": 0.08774373259052924,
      "cer": 0.036813542847885954,
      "av_wer": null,
      "strict_wer": 0.09366295264623956,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005919220055710306,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.31647883033810537,
      "wer_uncapped": 0.3167834297898264,
      "cer": 0.15751729390112332,
      "av_wer": null,
      "strict_wer": 0.32683521169661894,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.038988729820286325,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.2761215629522431,
      "wer_uncapped": 0.27626628075253257,
      "cer": 0.1545843173597202,
      "av_wer": null,
      "strict_wer": 0.2848046309696093,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014761215629522432,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.3824451410658307,
      "wer_uncapped": 0.38420846394984326,
      "cer": 0.22575003363379523,
      "av_wer": null,
      "strict_wer": 0.3971394984326019,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02390282131661442,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.08025766016713091,
      "wer_uncapped": 0.08043175487465182,
      "cer": 0.030819698687834116,
      "av_wer": null,
      "strict_wer": 0.08704735376044569,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005571030640668524,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.25753883643009445,
      "wer_uncapped": 0.2581480353335364,
      "cer": 0.11404455162784793,
      "av_wer": null,
      "strict_wer": 0.26850441669204994,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03777033201340237,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.16685962373371924,
      "wer_uncapped": 0.16700434153400867,
      "cer": 0.07563301545544229,
      "av_wer": null,
      "strict_wer": 0.17308248914616498,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019681620839363242,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.2946708463949843,
      "wer_uncapped": 0.2987852664576803,
      "cer": 0.15148661374949549,
      "av_wer": null,
      "strict_wer": 0.30877742946708464,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03409090909090909,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.4449826989619377,
      "wer_uncapped": 0.4536332179930796,
      "cer": 0.23993201803000075,
      "av_wer": null,
      "strict_wer": 0.458477508650519,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025951557093425604,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.20934046961325967,
      "wer_uncapped": 0.20934046961325967,
      "cer": 0.09776982958131707,
      "av_wer": null,
      "strict_wer": 0.2262603591160221,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023308011049723756,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.32886490250696376,
      "wer_uncapped": 0.33008356545961004,
      "cer": 0.1974323667584643,
      "av_wer": null,
      "strict_wer": 0.33565459610027853,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012360724233983288,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.5555893999390801,
      "wer_uncapped": 0.5581784952787086,
      "cer": 0.3365805673668846,
      "av_wer": null,
      "strict_wer": 0.5642704843131282,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.042491623515077674,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.3837916063675832,
      "wer_uncapped": 0.3846599131693198,
      "cer": 0.21030761412214882,
      "av_wer": null,
      "strict_wer": 0.39015918958031837,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025180897250361794,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.5331112852664577,
      "wer_uncapped": 0.5342868338557993,
      "cer": 0.3368760930983452,
      "av_wer": null,
      "strict_wer": 0.5481974921630094,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022727272727272728,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.6858131487889273,
      "wer_uncapped": 0.7031141868512111,
      "cer": 0.49456883174462424,
      "av_wer": null,
      "strict_wer": 0.6899653979238755,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.031141868512110725,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.4341332872928177,
      "wer_uncapped": 0.4341332872928177,
      "cer": 0.25962549968440984,
      "av_wer": null,
      "strict_wer": 0.4463915745856354,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017955801104972375,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.15923692336633438,
      "cer": 0.07280758960589895,
      "wer_arith": 0.17972845730915749,
      "done": 9,
      "total": 9,
      "ci": [
       0.15313,
       0.16507
      ]
     },
     "accented": {
      "wer": 0.35666099928700706,
      "cer": 0.21090743515172877,
      "wer_arith": 0.35666099928700706,
      "done": 1,
      "total": 1,
      "ci": [
       0.3197,
       0.39302
      ]
     },
     "noisy": {
      "wer": 0.24415488755147505,
      "cer": 0.12799320631207883,
      "wer_arith": 0.27173130023453806,
      "done": 5,
      "total": 5,
      "ci": [
       0.23226,
       0.25842
      ]
     },
     "telephony": {
      "wer": 0.22026653387766854,
      "cer": 0.10850231019018944,
      "wer_arith": 0.24786235518783953,
      "done": 8,
      "total": 8,
      "ci": [
       0.21211,
       0.22901
      ]
     },
     "callcenter": {
      "wer": 0.47251864882702427,
      "cer": 0.29078217306607346,
      "wer_arith": 0.48688393836030497,
      "done": 6,
      "total": 6,
      "ci": [
       0.45646,
       0.48938
      ]
     }
    },
    "arena": 0.24287655702604674,
    "arena_arith": 0.2868156211060687,
    "arena_cer": 0.12483057834846384,
    "arena_strict": 0.2550749375780107,
    "zero_shot": 0.2844450315606535,
    "arena_real": 0.18865472077448134,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 53,
    "boh_share": 0.07666666666666666,
    "arena_ci": [
     0.23625,
     0.25016
    ],
    "rank_set": [
     50,
     50
    ]
   }
  },
  {
   "model": "jais-asr",
   "hf_id": "IFM/Jais-ASR",
   "params_b": 5.72,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.026401810409856674,
     "cer": 0.010327283772496013,
     "rtfx": 47.38,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.05909650005590965,
     "cer": 0.029084239486440455,
     "rtfx": 44.87,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.10287835282582813,
     "cer": 0.06726987103766577,
     "rtfx": 55.38,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.1822065577272242,
     "cer": 0.11831723182325546,
     "rtfx": 63.24,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07799289820764288,
     "cer": 0.0482348443634118,
     "rtfx": 50.82,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.31935466347981967,
     "cer": 0.2777370851899327,
     "rtfx": 49.26,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.12362138232810461,
     "cer": 0.07683213338385753,
     "rtfx": 45.36,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.07834611228322956,
     "cer": 0.05472040417958434,
     "rtfx": 58.6,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.282784222737819,
     "cer": 0.23734054138145613,
     "rtfx": 38.32,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.24987659737837986,
     "cer": 0.19290904828879513,
     "rtfx": 39.15,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.4011530793685005,
     "cer": 0.3741808851041209,
     "rtfx": 48.6,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.033157792081139066,
     "cer": 0.023865948031793302,
     "rtfx": 49.55,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.12073945696129405,
     "cer": 0.07737237351134037,
     "rtfx": 51.14,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.3006615598885794,
     "cer": 0.28723121847624106,
     "rtfx": 46.97,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.46390496497106304,
     "cer": 0.4390682901005823,
     "rtfx": 54.35,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.22185238784370478,
     "cer": 0.19170764584009387,
     "rtfx": 51.93,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.6751567398119123,
     "cer": 0.6585500830105147,
     "rtfx": 51.36,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.05884401114206128,
     "cer": 0.03892354658879745,
     "rtfx": 45.01,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.3120621382881511,
     "cer": 0.27837480148226573,
     "rtfx": 54.82,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.13603473227206947,
     "cer": 0.09839994009136067,
     "rtfx": 50.92,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.5354623824451411,
     "cer": 0.5109758347168419,
     "rtfx": 49.08,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3245674740484429,
     "cer": 0.23606028654716865,
     "rtfx": 60.15,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.33339088397790057,
     "cer": 0.2935865610228857,
     "rtfx": 43.32,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.5919220055710307,
     "cer": 0.5854127953278471,
     "rtfx": 50.5,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.7607371306731648,
     "cer": 0.7415034409740604,
     "rtfx": 59.64,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.49696092619392185,
     "cer": 0.462644467187539,
     "rtfx": 53.58,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.8217084639498433,
     "cer": 0.8014019553587899,
     "rtfx": 58.04,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.7352941176470589,
     "cer": 0.6810767226942877,
     "rtfx": 62.84,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.7892783149171271,
     "cer": 0.777246914000068,
     "rtfx": 53.51,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 130.99,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.13918694445060384,
     "cer": 0.10220707051312224,
     "done": 9,
     "total": 9,
     "ci": [
      0.13402,
      0.14494
     ]
    },
    "accented": {
     "wer": 0.24987659737837986,
     "cer": 0.19290904828879513,
     "done": 1,
     "total": 1,
     "ci": [
      0.21154,
      0.30381
     ]
    },
    "noisy": {
     "wer": 0.412545746376752,
     "cer": 0.3901476245063106,
     "done": 5,
     "total": 5,
     "ci": [
      0.38945,
      0.43374
     ]
    },
    "telephony": {
     "wer": 0.23178235890202495,
     "cer": 0.19469491149905674,
     "done": 8,
     "total": 8,
     "ci": [
      0.21853,
      0.24513
     ]
    },
    "callcenter": {
     "wer": 0.6993168264920245,
     "cer": 0.6748810492570986,
     "done": 6,
     "total": 6,
     "ci": [
      0.67909,
      0.71872
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.16.1"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "Qwen3-Omni audio encoder + Jais-3-4B decoder; returns [IFM-NoTranscript] on non-speech",
   "training_data": "undisclosed",
   "hallucination_rate": 0.023333333333333334,
   "inserted_wpm": 2.32,
   "arena_wer": 0.33258843909680424,
   "arena_cer": 0.2995946619401141,
   "arena_ci": [
    0.32535,
    0.3401
   ],
   "rank_range": [
    49,
    49
   ],
   "rtfx": 50.6,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.023333333333333334,
    "halluc_3plus": 0.023333333333333334,
    "halluc_3plus_ci": [
     0.01135,
     0.04737
    ],
    "inserted_wpm": 2.3197457201806726,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.022378677395021373,
      "wer_uncapped": 0.022378677395021373,
      "cer": 0.011125631743902298,
      "av_wer": null,
      "strict_wer": 0.026401810409856674,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002061855670103093,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.055294643855529464,
      "wer_uncapped": 0.055294643855529464,
      "cer": 0.03248561102931335,
      "av_wer": null,
      "strict_wer": 0.05909650005590965,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004808229900480823,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.09720568667273619,
      "wer_uncapped": 0.09734575250367673,
      "cer": 0.07046798569029715,
      "av_wer": null,
      "strict_wer": 0.1027382869948876,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025281882484767843,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.17526433835309196,
      "wer_uncapped": 0.1775072092278116,
      "cer": 0.1273423702378495,
      "av_wer": null,
      "strict_wer": 0.17996368685250455,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018690590622663678,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.07532972607372337,
      "wer_uncapped": 0.07532972607372337,
      "cer": 0.04942398955595152,
      "av_wer": null,
      "strict_wer": 0.07799289820764288,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016021305377071356,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.31321636156227933,
      "wer_uncapped": 0.31517192677494704,
      "cer": 0.2823603590238113,
      "av_wer": null,
      "strict_wer": 0.31739909826715196,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020913683524363083,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.11405102484710458,
      "wer_uncapped": 0.11405102484710458,
      "cer": 0.077837418515321,
      "av_wer": null,
      "strict_wer": 0.12362138232810461,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017989201361344968,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.0743065918797921,
      "wer_uncapped": 0.0743065918797921,
      "cer": 0.05541007122245759,
      "av_wer": null,
      "strict_wer": 0.07834611228322956,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013353573817732722,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.2711832946635731,
      "wer_uncapped": 0.2729466357308585,
      "cer": 0.23693563880883767,
      "av_wer": null,
      "strict_wer": 0.28102088167053363,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013549883990719257,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.21104590577524268,
      "wer_uncapped": 0.24488564690396533,
      "cer": 0.16928116095296847,
      "av_wer": null,
      "strict_wer": 0.2160368562496572,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.0020100502512562816,
      "insertions": 0.05418746229364339,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.39899779082924725,
      "wer_uncapped": 0.3990516730427286,
      "cer": 0.37697483179666086,
      "av_wer": null,
      "strict_wer": 0.4010991971550191,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007597392100867503,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.032767700409596257,
      "wer_uncapped": 0.032767700409596257,
      "cer": 0.024850606786532236,
      "av_wer": null,
      "strict_wer": 0.033157792081139066,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004486054222742344,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.105526670518005,
      "wer_uncapped": 0.10687463893703061,
      "cer": 0.07987191629459252,
      "av_wer": null,
      "strict_wer": 0.11919892162526478,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01251684960523782,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.29752785515320335,
      "wer_uncapped": 0.29752785515320335,
      "cer": 0.287785517576543,
      "av_wer": null,
      "strict_wer": 0.3006615598885794,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.001915041782729805,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.45887907401766675,
      "wer_uncapped": 0.45933597319524827,
      "cer": 0.4431363838294092,
      "av_wer": null,
      "strict_wer": 0.4634480657934816,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01720986902223576,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.21881331403762663,
      "wer_uncapped": 0.21881331403762663,
      "cer": 0.19550985022869272,
      "av_wer": null,
      "strict_wer": 0.22185238784370478,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014182344428364689,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.6712382445141066,
      "wer_uncapped": 0.6718260188087775,
      "cer": 0.6623166958159559,
      "av_wer": null,
      "strict_wer": 0.6745689655172413,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011559561128526645,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.05466573816155989,
      "wer_uncapped": 0.05466573816155989,
      "cer": 0.04110643123278795,
      "av_wer": null,
      "strict_wer": 0.05884401114206128,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0031337047353760445,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.30520865062442887,
      "wer_uncapped": 0.3055132500761499,
      "cer": 0.284508472424954,
      "av_wer": null,
      "strict_wer": 0.3117575388364301,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01675296984465428,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.13285094066570188,
      "wer_uncapped": 0.13299565846599132,
      "cer": 0.10558727691249888,
      "av_wer": null,
      "strict_wer": 0.13589001447178004,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014182344428364689,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.5297805642633229,
      "wer_uncapped": 0.5321316614420063,
      "cer": 0.5156733485806538,
      "av_wer": null,
      "strict_wer": 0.5331112852664577,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014890282131661442,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.3169550173010381,
      "wer_uncapped": 0.3197231833910035,
      "cer": 0.2516071824429173,
      "av_wer": null,
      "strict_wer": 0.3217993079584775,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02179930795847751,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.3244993093922652,
      "wer_uncapped": 0.3244993093922652,
      "cer": 0.29408794445613295,
      "av_wer": null,
      "strict_wer": 0.33339088397790057,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01225828729281768,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.5908774373259053,
      "wer_uncapped": 0.5908774373259053,
      "cer": 0.5890571845132027,
      "av_wer": null,
      "strict_wer": 0.5919220055710307,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00504874651810585,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.7557112397197685,
      "wer_uncapped": 0.7569296375266524,
      "cer": 0.7466840134543378,
      "av_wer": null,
      "strict_wer": 0.7595187328662808,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011117879987816022,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.4959479015918958,
      "wer_uncapped": 0.4963820549927641,
      "cer": 0.47322949986547486,
      "av_wer": null,
      "strict_wer": 0.4965267727930536,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015629522431259046,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.8177899686520376,
      "wer_uncapped": 0.8195532915360502,
      "cer": 0.8034441006323153,
      "av_wer": null,
      "strict_wer": 0.8199451410658307,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010579937304075235,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.7259515570934256,
      "wer_uncapped": 0.7339100346020762,
      "cer": 0.6926771595359492,
      "av_wer": null,
      "strict_wer": 0.7273356401384083,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02422145328719723,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.7868611878453039,
      "wer_uncapped": 0.7868611878453039,
      "cer": 0.7807279612876078,
      "av_wer": null,
      "strict_wer": 0.7892783149171271,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004229972375690607,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.10149762724376016,
      "cer": 0.071069140247786,
      "wer_arith": 0.13313670503365016,
      "done": 9,
      "total": 9,
      "ci": [
       0.09374,
       0.10796
      ]
     },
     "accented": {
      "wer": 0.21104590577524268,
      "cer": 0.16928116095296847,
      "wer_arith": 0.2110459057752427,
      "done": 1,
      "total": 1,
      "ci": [
       0.17832,
       0.24369
      ]
     },
     "noisy": {
      "wer": 0.38074075127230705,
      "cer": 0.3621017379438879,
      "wer_arith": 0.4090912557103701,
      "done": 5,
      "total": 5,
      "ci": [
       0.34451,
       0.40861
      ]
     },
     "telephony": {
      "wer": 0.1594406440027943,
      "cer": 0.13224075694907172,
      "wer_arith": 0.22528182391698973,
      "done": 8,
      "total": 8,
      "ci": [
       0.14452,
       0.17184
      ]
     },
     "callcenter": {
      "wer": 0.6851560257903782,
      "cer": 0.6699752064540022,
      "wer_arith": 0.6955232153713895,
      "done": 6,
      "total": 6,
      "ci": [
       0.65603,
       0.70972
      ]
     }
    },
    "arena": 0.21837867653651485,
    "arena_arith": 0.3256949642469805,
    "arena_cer": 0.18051521268361087,
    "arena_strict": 0.22551425787432475,
    "zero_shot": 0.20970152504514952,
    "arena_real": 0.11179029956378037,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 52,
    "boh_share": 0.02,
    "arena_ci": [
     0.20606,
     0.22697
    ],
    "rank_set": [
     48,
     49
    ]
   }
  },
  {
   "model": "seamless-m4t-v2-large",
   "hf_id": "facebook/seamless-m4t-v2-large",
   "params_b": 2.31,
   "license": "CC-BY-NC-4.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.025194870505406086,
     "cer": 0.009064849267218468,
     "rtfx": 53.15,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.04590182265459018,
     "cer": 0.01857067994235556,
     "rtfx": 52.3,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.08081798445269277,
     "cer": 0.051548400453012164,
     "rtfx": 54.46,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.0887536046139058,
     "cer": 0.048554713059543515,
     "rtfx": 59.05,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06497294555292527,
     "cer": 0.04107423799091323,
     "rtfx": 53.18,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.33298929871258626,
     "cer": 0.23954709149728376,
     "rtfx": 46.56,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.33225005757568005,
     "cer": 0.23976758873310597,
     "rtfx": 46.73,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.18085215869912005,
     "cer": 0.12804684808818464,
     "rtfx": 51.19,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.39359628770301625,
     "cer": 0.2827473553204729,
     "rtfx": 45.12,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.4908133603905007,
     "cer": 0.4072667604313174,
     "rtfx": 43.48,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.2532464033622501,
     "cer": 0.18170294114640306,
     "rtfx": 56.16,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.11849034523112932,
     "cer": 0.1026361596376067,
     "rtfx": 53.27,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.18197573656845753,
     "cer": 0.10001517105362967,
     "rtfx": 51.82,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.05118384401114206,
     "cer": 0.026347225909211573,
     "rtfx": 48.97,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.15884861407249468,
     "cer": 0.10950238221281101,
     "rtfx": 53.63,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.1260492040520984,
     "cer": 0.09218441876138889,
     "rtfx": 51.66,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.4347570532915361,
     "cer": 0.3024534218778823,
     "rtfx": 38.62,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.3084958217270195,
     "cer": 0.19551367135651712,
     "rtfx": 32.89,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.19311605239110569,
     "cer": 0.11609317098994176,
     "rtfx": 49.27,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.26758321273516644,
     "cer": 0.18856244227552982,
     "rtfx": 48.55,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.8744122257053292,
     "cer": 0.5893377605607821,
     "rtfx": 32.52,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.15986159169550174,
     "cer": 0.09439930534019723,
     "rtfx": 59.73,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.8252762430939227,
     "cer": 0.5929030502941477,
     "rtfx": 35.41,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.5814763231197771,
     "cer": 0.40440005309264665,
     "rtfx": 36.22,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.5296984465427962,
     "cer": 0.34457384859714135,
     "rtfx": 43.68,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.5193921852387844,
     "cer": 0.37944634432490454,
     "rtfx": 47.79,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 1.0419278996865204,
     "cer": 0.7453237410071942,
     "rtfx": 26.01,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.6941176470588235,
     "cer": 0.46846120449047945,
     "rtfx": 50.2,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.8911429558011049,
     "cer": 0.652514707382596,
     "rtfx": 36.64,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 41.99,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.17170322560776918,
     "cer": 0.11765797381689892,
     "done": 9,
     "total": 9,
     "ci": [
      0.16568,
      0.17856
     ]
    },
    "accented": {
     "wer": 0.4908133603905007,
     "cer": 0.4072667604313174,
     "done": 1,
     "total": 1,
     "ci": [
      0.46534,
      0.5175
     ]
    },
    "noisy": {
     "wer": 0.20481702375790425,
     "cer": 0.14243807798153937,
     "done": 5,
     "total": 5,
     "ci": [
      0.18536,
      0.22755
     ]
    },
    "telephony": {
     "wer": 0.366151403643454,
     "cer": 0.24743259143854401,
     "done": 8,
     "total": 8,
     "ci": [
      0.34313,
      0.39436
     ]
    },
    "callcenter": {
     "wer": 0.7096259095746343,
     "cer": 0.4991199831491604,
     "done": 6,
     "total": 6,
     "ci": [
      0.67478,
      0.74751
     ]
    }
   },
   "env": {
    "python": "3.12.3",
    "host": "c81c69284a43",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA A10",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "training_data": "",
   "hallucination_rate": 0.8866666666666667,
   "inserted_wpm": 143.04,
   "arena_wer": 0.3574092460199998,
   "arena_cer": 0.2508836698369449,
   "arena_ci": [
    0.3467,
    0.36882
   ],
   "rank_range": [
    50,
    50
   ],
   "rtfx": 47.4,
   "audio_hours": 38.41,
   "v2": {
    "halluc_any": 0.8866666666666667,
    "halluc_3plus": 0.8866666666666667,
    "halluc_3plus_ci": [
     0.8458,
     0.91776
    ],
    "inserted_wpm": 143.04355099537167,
    "sets": {
     "librispeech_clean/clean": {
      "wer": 0.02142318330399799,
      "wer_uncapped": 0.02147347246668343,
      "cer": 0.00966842841777788,
      "av_wer": null,
      "strict_wer": 0.025144581342720643,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002514458134272064,
      "term_recall": null
     },
     "librispeech_other/clean": {
      "wer": 0.04126132170412613,
      "wer_uncapped": 0.04137314100413731,
      "cer": 0.020693347610761612,
      "av_wer": null,
      "strict_wer": 0.045790003354579,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0038577658503857765,
      "term_recall": null
     },
     "fleurs_en/clean": {
      "wer": 0.07703620701729813,
      "wer_uncapped": 0.07703620701729813,
      "cer": 0.053004307512593996,
      "av_wer": null,
      "strict_wer": 0.08081798445269277,
      "n": 647,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023601092513481338,
      "term_recall": null
     },
     "common_voice_en/clean": {
      "wer": 0.07006301399124212,
      "wer_uncapped": 0.08544269998931966,
      "cer": 0.042730337851785594,
      "av_wer": null,
      "strict_wer": 0.07337391861582826,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.02221510199722311,
      "term_recall": null
     },
     "voxpopuli_en/clean": {
      "wer": 0.06197159283057153,
      "wer_uncapped": 0.06197159283057153,
      "cer": 0.04192615069774006,
      "av_wer": null,
      "strict_wer": 0.06497294555292527,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013738586405140345,
      "term_recall": null
     },
     "earnings22/clean": {
      "wer": 0.29702862730186325,
      "wer_uncapped": 0.32886088326362106,
      "cer": 0.2262072546546992,
      "av_wer": null,
      "strict_wer": 0.3011570427508284,
      "n": 997,
      "failed": 0,
      "loop_rate": 0.006018054162487462,
      "insertions": 0.06746699983703623,
      "term_recall": null
     },
     "gigaspeech/clean": {
      "wer": 0.3065073313032575,
      "wer_uncapped": 0.3253921543540009,
      "cer": 0.23697183539156438,
      "av_wer": null,
      "strict_wer": 0.3133140561426853,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.021,
      "insertions": 0.04119859771232631,
      "term_recall": null
     },
     "spgispeech/clean": {
      "wer": 0.16924818607523284,
      "wer_uncapped": 0.1771728503061802,
      "cer": 0.12991843610828482,
      "av_wer": null,
      "strict_wer": 0.17292749446817268,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.009,
      "insertions": 0.024057016415375908,
      "term_recall": null
     },
     "ami_sdm/clean": {
      "wer": 0.33605568445475636,
      "wer_uncapped": 0.3840371229698376,
      "cer": 0.25878962536023054,
      "av_wer": null,
      "strict_wer": 0.34561484918793506,
      "n": 991,
      "failed": 0,
      "loop_rate": 0.004036326942482341,
      "insertions": 0.07378190255220418,
      "term_recall": null
     },
     "edacc/clean": {
      "wer": 0.45346350024680526,
      "wer_uncapped": 0.48642571162178466,
      "cer": 0.39433330395699306,
      "av_wer": null,
      "strict_wer": 0.4578511490155213,
      "n": 995,
      "failed": 0,
      "loop_rate": 0.012060301507537688,
      "insertions": 0.0544068447320792,
      "term_recall": null
     },
     "urgent2024/clean": {
      "wer": 0.23977584999191767,
      "wer_uncapped": 0.24985182391292635,
      "cer": 0.1839396959880389,
      "av_wer": null,
      "strict_wer": 0.24317042944124145,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.0310900371787273,
      "term_recall": null
     },
     "minds14_tel/clean": {
      "wer": 0.11712502438072947,
      "wer_uncapped": 0.11712502438072947,
      "cer": 0.10324584726353753,
      "av_wer": null,
      "strict_wer": 0.11849034523112932,
      "n": 558,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005071191730056563,
      "term_recall": null
     },
     "vystadial_voip/clean": {
      "wer": 0.11457731561717698,
      "wer_uncapped": 0.15347583285191604,
      "cer": 0.07802282054751274,
      "av_wer": null,
      "strict_wer": 0.14172925091469285,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06528018486424032,
      "term_recall": null
     },
     "librispeech_clean/noisy": {
      "wer": 0.04543871866295265,
      "wer_uncapped": 0.047701949860724235,
      "cer": 0.027377288190507047,
      "av_wer": null,
      "strict_wer": 0.04892061281337047,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.007137883008356546,
      "term_recall": null
     },
     "fleurs_en/noisy": {
      "wer": 0.1533658239415169,
      "wer_uncapped": 0.15427962229667985,
      "cer": 0.11366376848384845,
      "av_wer": null,
      "strict_wer": 0.1579348157173317,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025434054218702408,
      "term_recall": null
     },
     "voxpopuli_en/noisy": {
      "wer": 0.12286541244573082,
      "wer_uncapped": 0.12286541244573082,
      "cer": 0.0935696989626618,
      "av_wer": null,
      "strict_wer": 0.1260492040520984,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017221418234442835,
      "term_recall": null
     },
     "earnings22/noisy": {
      "wer": 0.3409090909090909,
      "wer_uncapped": 0.43142633228840127,
      "cer": 0.2665141934615902,
      "av_wer": null,
      "strict_wer": 0.3442398119122257,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.010067114093959731,
      "insertions": 0.12558777429467086,
      "term_recall": null
     },
     "librispeech_clean/telephony": {
      "wer": 0.2036908077994429,
      "wer_uncapped": 0.3058844011142061,
      "cer": 0.1677871375344241,
      "av_wer": null,
      "strict_wer": 0.20630222841225626,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.12012534818941505,
      "term_recall": null
     },
     "fleurs_en/telephony": {
      "wer": 0.15565031982942432,
      "wer_uncapped": 0.18885166006701187,
      "cer": 0.1145205305578473,
      "av_wer": null,
      "strict_wer": 0.15991471215351813,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.05924459335973195,
      "term_recall": null
     },
     "voxpopuli_en/telephony": {
      "wer": 0.23994211287988423,
      "wer_uncapped": 0.26512301013024603,
      "cer": 0.18968042808884636,
      "av_wer": null,
      "strict_wer": 0.24240231548480462,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.05267727930535456,
      "term_recall": null
     },
     "earnings22/telephony": {
      "wer": 0.637539184952978,
      "wer_uncapped": 0.8710815047021944,
      "cer": 0.5167496300282524,
      "av_wer": null,
      "strict_wer": 0.6406739811912225,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.030201342281879196,
      "insertions": 0.30054858934169276,
      "term_recall": null
     },
     "common_voice_en/telephony": {
      "wer": 0.1508650519031142,
      "wer_uncapped": 0.156401384083045,
      "cer": 0.09990393852065321,
      "av_wer": null,
      "strict_wer": 0.15432525951557094,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02422145328719723,
      "term_recall": null
     },
     "gigaspeech/telephony": {
      "wer": 0.7035566298342542,
      "wer_uncapped": 0.8208736187845304,
      "cer": 0.5806858826004628,
      "av_wer": null,
      "strict_wer": 0.7078729281767956,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.06333333333333334,
      "insertions": 0.14925759668508287,
      "term_recall": null
     },
     "librispeech_clean/callcenter": {
      "wer": 0.4831128133704735,
      "wer_uncapped": 0.5797353760445683,
      "cer": 0.4020735460878017,
      "av_wer": null,
      "strict_wer": 0.48485376044568246,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.12569637883008355,
      "term_recall": null
     },
     "fleurs_en/callcenter": {
      "wer": 0.42978982637831253,
      "wer_uncapped": 0.5268047517514468,
      "cer": 0.3440693025322079,
      "av_wer": null,
      "strict_wer": 0.4326835211696619,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.14971063052086506,
      "term_recall": null
     },
     "voxpopuli_en/callcenter": {
      "wer": 0.4629522431259045,
      "wer_uncapped": 0.5178002894356005,
      "cer": 0.383277032076769,
      "av_wer": null,
      "strict_wer": 0.46410998552821997,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.0939218523878437,
      "term_recall": null
     },
     "earnings22/callcenter": {
      "wer": 0.7541144200626959,
      "wer_uncapped": 1.0384012539184952,
      "cer": 0.6186376070675815,
      "av_wer": null,
      "strict_wer": 0.7570532915360502,
      "n": 298,
      "failed": 0,
      "loop_rate": 0.03691275167785235,
      "insertions": 0.3467868338557994,
      "term_recall": null
     },
     "common_voice_en/callcenter": {
      "wer": 0.48408304498269894,
      "wer_uncapped": 0.6930795847750865,
      "cer": 0.39569940146309024,
      "av_wer": null,
      "strict_wer": 0.485121107266436,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.2532871972318339,
      "term_recall": null
     },
     "gigaspeech/callcenter": {
      "wer": 0.7901415745856354,
      "wer_uncapped": 0.8884668508287292,
      "cer": 0.6499263622974963,
      "av_wer": null,
      "strict_wer": 0.7925587016574586,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.04666666666666667,
      "insertions": 0.13164709944751382,
      "term_recall": null
     },
     "noise_only/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null,
      "term_recall": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.10484629916731764,
      "cer": 0.06873392019980278,
      "wer_arith": 0.15339946088692732,
      "done": 9,
      "total": 9,
      "ci": [
       0.09924,
       0.10956
      ]
     },
     "accented": {
      "wer": 0.45346350024680526,
      "cer": 0.39433330395699306,
      "wer_arith": 0.45346350024680526,
      "done": 1,
      "total": 1,
      "ci": [
       0.39533,
       0.50981
      ]
     },
     "noisy": {
      "wer": 0.14757257881126662,
      "cer": 0.10737636643634407,
      "wer_arith": 0.18047097919024177,
      "done": 5,
      "total": 5,
      "ci": [
       0.13417,
       0.16032
      ]
     },
     "telephony": {
      "wer": 0.2264234256303433,
      "cer": 0.17501301779246897,
      "wer_arith": 0.29036830589962553,
      "done": 8,
      "total": 8,
      "ci": [
       0.21054,
       0.24064
      ]
     },
     "callcenter": {
      "wer": 0.5501534217204813,
      "cer": 0.45118537563937755,
      "wer_arith": 0.5673656537509535,
      "done": 6,
      "total": 6,
      "ci": [
       0.52844,
       0.57067
      ]
     }
    },
    "arena": 0.20503958685999654,
    "arena_arith": 0.29642377412268134,
    "arena_cer": 0.15113326899918217,
    "arena_strict": 0.21205333407752738,
    "zero_shot": 0.1604037540710376,
    "arena_real": 0.1297557338152912,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "rank": 51,
    "boh_share": 0.8766666666666667,
    "arena_ci": [
     0.19741,
     0.21148
    ],
    "rank_set": [
     48,
     49
    ]
   }
  }
 ],
 "v2": {
  "headline": "L2sp",
  "aggregate": "geometric",
  "weights": {
   "librispeech_clean/clean": 0.03888888888888889,
   "librispeech_other/clean": 0.03888888888888889,
   "fleurs_en/clean": 0.03888888888888889,
   "common_voice_en/clean": 0.03888888888888889,
   "voxpopuli_en/clean": 0.03888888888888889,
   "earnings22/clean": 0.03888888888888889,
   "gigaspeech/clean": 0.03888888888888889,
   "spgispeech/clean": 0.03888888888888889,
   "ami_sdm/clean": 0.03888888888888889,
   "edacc/clean": 0.05,
   "urgent2024/clean": 0.03,
   "librispeech_clean/noisy": 0.03,
   "fleurs_en/noisy": 0.03,
   "voxpopuli_en/noisy": 0.03,
   "earnings22/noisy": 0.03,
   "minds14_tel/clean": 0.028125,
   "vystadial_voip/clean": 0.028125,
   "librispeech_clean/telephony": 0.028125,
   "fleurs_en/telephony": 0.028125,
   "voxpopuli_en/telephony": 0.028125,
   "earnings22/telephony": 0.028125,
   "common_voice_en/telephony": 0.028125,
   "gigaspeech/telephony": 0.028125,
   "librispeech_clean/callcenter": 0.0375,
   "fleurs_en/callcenter": 0.0375,
   "voxpopuli_en/callcenter": 0.0375,
   "earnings22/callcenter": 0.0375,
   "common_voice_en/callcenter": 0.0375,
   "gigaspeech/callcenter": 0.0375
  },
  "track_weights": {
   "clean": 0.35,
   "accented": 0.05,
   "noisy": 0.15,
   "telephony": 0.225,
   "callcenter": 0.225
  },
  "tracks": {
   "clean": [
    "librispeech_clean/clean",
    "librispeech_other/clean",
    "fleurs_en/clean",
    "common_voice_en/clean",
    "voxpopuli_en/clean",
    "earnings22/clean",
    "gigaspeech/clean",
    "spgispeech/clean",
    "ami_sdm/clean"
   ],
   "accented": [
    "edacc/clean"
   ],
   "noisy": [
    "urgent2024/clean",
    "librispeech_clean/noisy",
    "fleurs_en/noisy",
    "voxpopuli_en/noisy",
    "earnings22/noisy"
   ],
   "telephony": [
    "minds14_tel/clean",
    "vystadial_voip/clean",
    "librispeech_clean/telephony",
    "fleurs_en/telephony",
    "voxpopuli_en/telephony",
    "earnings22/telephony",
    "common_voice_en/telephony",
    "gigaspeech/telephony"
   ],
   "callcenter": [
    "librispeech_clean/callcenter",
    "fleurs_en/callcenter",
    "voxpopuli_en/callcenter",
    "earnings22/callcenter",
    "common_voice_en/callcenter",
    "gigaspeech/callcenter"
   ]
  },
  "diagnostic_sets": [],
  "zero_shot_sets": [
   "fleurs_en/callcenter",
   "fleurs_en/clean",
   "fleurs_en/noisy",
   "fleurs_en/telephony",
   "minds14_tel/clean",
   "urgent2024/clean",
   "vystadial_voip/clean"
  ],
  "real_audio_sets": [
   "ami_sdm/clean",
   "common_voice_en/clean",
   "earnings22/clean",
   "edacc/clean",
   "fleurs_en/clean",
   "gigaspeech/clean",
   "librispeech_clean/clean",
   "librispeech_other/clean",
   "minds14_tel/clean",
   "spgispeech/clean",
   "urgent2024/clean",
   "voxpopuli_en/clean",
   "vystadial_voip/clean"
  ],
  "floors": {},
  "bag_of_hallucinations": [
   [
    "of the",
    1464,
    51
   ],
   [
    "i am",
    1407,
    45
   ],
   [
    "going to",
    867,
    44
   ],
   [
    "is a",
    823,
    49
   ],
   [
    "and the",
    791,
    45
   ],
   [
    "in the",
    782,
    47
   ],
   [
    "i think",
    687,
    45
   ],
   [
    "it is",
    683,
    43
   ],
   [
    "have a",
    651,
    40
   ],
   [
    "and then",
    631,
    39
   ],
   [
    "thank you",
    623,
    42
   ],
   [
    "i am not",
    517,
    32
   ],
   [
    "is the",
    510,
    46
   ],
   [
    "to the",
    510,
    47
   ],
   [
    "to do",
    503,
    45
   ],
   [
    "not sure",
    498,
    30
   ],
   [
    "the 1st",
    494,
    40
   ],
   [
    "i am not sure",
    458,
    28
   ],
   [
    "a good",
    457,
    39
   ],
   [
    "to be",
    433,
    48
   ],
   [
    "i am going",
    422,
    37
   ],
   [
    "i am going to",
    421,
    37
   ],
   [
    "that is",
    413,
    44
   ],
   [
    "i am sorry",
    412,
    25
   ],
   [
    "to have",
    397,
    40
   ],
   [
    "do not",
    396,
    45
   ],
   [
    "but i",
    365,
    36
   ],
   [
    "it is a",
    355,
    36
   ],
   [
    "is a good",
    347,
    33
   ],
   [
    "and i",
    346,
    49
   ]
  ],
  "num_ranked": 53,
  "effective_weights": {
   "geometric": {
    "clean": 0.2726737616674988,
    "accented": 0.03869368970414804,
    "noisy": 0.1579324333611546,
    "telephony": 0.24611309582816135,
    "callcenter": 0.28458701943903736
   },
   "arithmetic": {
    "clean": 0.1573730575302933,
    "accented": 0.04988487359829911,
    "noisy": 0.14423358211025225,
    "telephony": 0.18447891937644062,
    "callcenter": 0.4640295673847148
   }
  },
  "leave_one_set_out": {
   "mean_moved": 10.24,
   "max_shift": 9,
   "sets": {
    "librispeech_clean/clean": {
     "moved": 13,
     "max_shift": 2
    },
    "librispeech_other/clean": {
     "moved": 15,
     "max_shift": 2
    },
    "fleurs_en/clean": {
     "moved": 5,
     "max_shift": 2
    },
    "common_voice_en/clean": {
     "moved": 5,
     "max_shift": 2
    },
    "voxpopuli_en/clean": {
     "moved": 7,
     "max_shift": 2
    },
    "earnings22/clean": {
     "moved": 22,
     "max_shift": 9
    },
    "gigaspeech/clean": {
     "moved": 5,
     "max_shift": 3
    },
    "spgispeech/clean": {
     "moved": 21,
     "max_shift": 4
    },
    "ami_sdm/clean": {
     "moved": 14,
     "max_shift": 3
    },
    "edacc/clean": {
     "moved": 14,
     "max_shift": 5
    },
    "urgent2024/clean": {
     "moved": 9,
     "max_shift": 3
    },
    "librispeech_clean/noisy": {
     "moved": 8,
     "max_shift": 2
    },
    "fleurs_en/noisy": {
     "moved": 7,
     "max_shift": 2
    },
    "voxpopuli_en/noisy": {
     "moved": 9,
     "max_shift": 2
    },
    "earnings22/noisy": {
     "moved": 19,
     "max_shift": 9
    },
    "minds14_tel/clean": {
     "moved": 11,
     "max_shift": 4
    },
    "vystadial_voip/clean": {
     "moved": 17,
     "max_shift": 3
    },
    "librispeech_clean/telephony": {
     "moved": 13,
     "max_shift": 2
    },
    "fleurs_en/telephony": {
     "moved": 2,
     "max_shift": 1
    },
    "voxpopuli_en/telephony": {
     "moved": 8,
     "max_shift": 1
    },
    "earnings22/telephony": {
     "moved": 16,
     "max_shift": 8
    },
    "common_voice_en/telephony": {
     "moved": 7,
     "max_shift": 2
    },
    "gigaspeech/telephony": {
     "moved": 2,
     "max_shift": 1
    },
    "librispeech_clean/callcenter": {
     "moved": 6,
     "max_shift": 1
    },
    "fleurs_en/callcenter": {
     "moved": 5,
     "max_shift": 2
    },
    "voxpopuli_en/callcenter": {
     "moved": 8,
     "max_shift": 2
    },
    "earnings22/callcenter": {
     "moved": 17,
     "max_shift": 8
    },
    "common_voice_en/callcenter": {
     "moved": 9,
     "max_shift": 2
    },
    "gigaspeech/callcenter": {
     "moved": 3,
     "max_shift": 2
    }
   }
  },
  "bootstrap": {
   "n_boot": 2000,
   "flags": {
    "earnings22/clean": "few clusters: G=6",
    "earnings22/noisy": "few clusters: G=6",
    "earnings22/telephony": "few clusters: G=6",
    "earnings22/callcenter": "few clusters: G=6",
    "ami_sdm/clean": "few clusters: G=16",
    "urgent2024/clean": "iid: no cluster key",
    "minds14_tel/clean": "iid: no cluster key"
   }
  }
 }
};
