window.ARENA_DATA = window.ARENA_DATA || {};
window.ARENA_DATA['ar'] = {
 "language": "ar",
 "tracks": {
  "clean": [
   "fleurs_ar/clean",
   "cv18_ar/clean",
   "masc_clean/clean",
   "mgb2/clean",
   "sada/clean",
   "casablanca/clean",
   "mgb3_egy/clean",
   "mgb5_mor/clean"
  ],
  "codeswitch": [
   "mixat_cs/clean",
   "algerian_cs/clean"
  ],
  "noisy": [
   "masc_noisy/clean",
   "nadi_robust/clean",
   "fleurs_ar/noisy",
   "cv18_ar/noisy",
   "mgb2/noisy",
   "sada/noisy"
  ],
  "telephony": [
   "fleurs_ar/telephony",
   "cv18_ar/telephony",
   "mgb2/telephony",
   "sada/telephony",
   "casablanca/telephony",
   "mgb3_egy/telephony"
  ],
  "callcenter": [
   "fleurs_ar/callcenter",
   "cv18_ar/callcenter",
   "mgb2/callcenter",
   "sada/callcenter",
   "casablanca/callcenter",
   "mgb3_egy/callcenter"
  ]
 },
 "extra_tracks": {
  "telephony_v2": [
   "fleurs_ar/telephony_v2",
   "cv18_ar/telephony_v2",
   "mgb2/telephony_v2",
   "sada/telephony_v2",
   "casablanca/telephony_v2",
   "mgb3_egy/telephony_v2"
  ],
  "callcenter_v2": [
   "fleurs_ar/callcenter_v2",
   "cv18_ar/callcenter_v2",
   "mgb2/callcenter_v2",
   "sada/callcenter_v2",
   "casablanca/callcenter_v2",
   "mgb3_egy/callcenter_v2"
  ],
  "sweep": [
   "fleurs_ar/sweep",
   "masc_clean/sweep"
  ],
  "padded": [
   "fleurs_ar/padded",
   "cv18_ar/padded",
   "masc_clean/padded",
   "sada/padded"
  ]
 },
 "weights": {
  "clean": 0.35,
  "noisy": 0.15,
  "codeswitch": 0.1,
  "telephony": 0.2,
  "callcenter": 0.2
 },
 "sets": {
  "fleurs_ar": {
   "dialect": "MSA",
   "domain": "read",
   "source": "google/fleurs",
   "track": "clean",
   "license": "CC-BY-4.0"
  },
  "cv18_ar": {
   "dialect": "MSA",
   "domain": "read (crowd-sourced)",
   "source": "MohamedRashad/common-voice-18-arabic",
   "track": "clean",
   "license": "CC0-1.0"
  },
  "masc_clean": {
   "dialect": "mixed",
   "domain": "youtube",
   "source": "MohamedRashad/MASC-Arabic",
   "track": "clean",
   "license": "CC-BY-4.0"
  },
  "mgb2": {
   "dialect": "MSA (mostly)",
   "domain": "broadcast news",
   "source": "MohamedRashad/mgb2-arabic",
   "track": "clean",
   "license": "QCRI MGB-2 agreement"
  },
  "sada": {
   "dialect": "Gulf (Saudi)",
   "domain": "tv shows",
   "source": "MohamedRashad/SADA22",
   "track": "clean",
   "license": "CC-BY-NC-SA-4.0"
  },
  "casablanca": {
   "dialect": "8 dialects",
   "domain": "tv series",
   "source": "UBC-NLP/Casablanca",
   "track": "clean",
   "license": "CC-BY-NC-ND-4.0"
  },
  "mgb3_egy": {
   "dialect": "Egyptian",
   "domain": "youtube",
   "source": "ArabicSpeech/MGB-3",
   "track": "clean",
   "license": "unspecified"
  },
  "mgb5_mor": {
   "dialect": "Moroccan (Darija)",
   "domain": "youtube",
   "source": "ArabicSpeech/MGB-5",
   "track": "clean",
   "license": "unspecified"
  },
  "mixat_cs": {
   "dialect": "Emirati + English",
   "domain": "podcast",
   "source": "sqrk/mixat-tri",
   "track": "codeswitch",
   "license": "CC-BY-NC-SA-4.0"
  },
  "algerian_cs": {
   "dialect": "Algerian + French",
   "domain": "conversational",
   "source": "oist/algerian-code-switched-asr-eval",
   "track": "codeswitch",
   "license": "controlled-access terms"
  },
  "masc_noisy": {
   "dialect": "mixed",
   "domain": "youtube (noisy)",
   "source": "MohamedRashad/MASC-Arabic",
   "track": "noisy",
   "license": "CC-BY-4.0"
  },
  "nadi_robust": {
   "dialect": "8 dialects",
   "domain": "band-limited (4 kHz) TV series",
   "source": "UBC-NLP/NADI2026_subtask1.1_Robust_ASR",
   "track": "noisy",
   "license": "unspecified"
  }
 },
 "models": [
  {
   "model": "cohere-transcribe-arabic-07-2026",
   "hf_id": "CohereLabs/cohere-transcribe-arabic-07-2026",
   "params_b": 2.07,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.04941932295527551,
     "cer": 0.022071781646249733,
     "rtfx": 314.28,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.04731610337972167,
     "cer": 0.013928138877674606,
     "rtfx": 273.36,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.04331023454157783,
     "cer": 0.03000575589979729,
     "rtfx": 234.87,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.12239302035729123,
     "cer": 0.06574557146323708,
     "rtfx": 296.81,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.3593305325924922,
     "cer": 0.24988632762445404,
     "rtfx": 158.59,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.4222222222222222,
     "cer": 0.17889310806596592,
     "rtfx": 183.64,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.24270328486806678,
     "cer": 0.13554817984866757,
     "rtfx": 260.08,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.45055560743300027,
     "cer": 0.1934880374168016,
     "rtfx": 222.2,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.17746986065445436,
     "cer": 0.08173826740394159,
     "rtfx": 334.34,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.4597305818286042,
     "cer": 0.2791968827795216,
     "rtfx": 188.44,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.15234484695310307,
     "cer": 0.06399569776821726,
     "rtfx": 276.56,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.5654038598999285,
     "cer": 0.29691962281095646,
     "rtfx": 232.4,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.060085076214108475,
     "cer": 0.02789910796677945,
     "rtfx": 318.28,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.13724183877415055,
     "cer": 0.07281156258521952,
     "rtfx": 277.17,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.16034103410341033,
     "cer": 0.08682679397284798,
     "rtfx": 306.1,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.48289985664550483,
     "cer": 0.32987586436724153,
     "rtfx": 187.96,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.057249202410492736,
     "cer": 0.02617656105813596,
     "rtfx": 320.96,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.0899400399733511,
     "cer": 0.03190619034633215,
     "rtfx": 281.36,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.12981298129812982,
     "cer": 0.06837734347804465,
     "rtfx": 318.82,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.40180217079664143,
     "cer": 0.2416479213529951,
     "rtfx": 258.63,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.45454545454545453,
     "cer": 0.21395203986297104,
     "rtfx": 194.33,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.27879677182685253,
     "cer": 0.15210050470208053,
     "rtfx": 256.06,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.1556185749734137,
     "cer": 0.07366964011073515,
     "rtfx": 297.82,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.290473017988008,
     "cer": 0.16539405508590127,
     "rtfx": 284.24,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.2590759075907591,
     "cer": 0.15938137152518772,
     "rtfx": 320.36,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.6272783125127995,
     "cer": 0.47625593601599603,
     "rtfx": 164.17,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.654481881754609,
     "cer": 0.38586110246029276,
     "rtfx": 208.53,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.5022010271460015,
     "cer": 0.34849860208416544,
     "rtfx": 227.17,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 195.97,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.054945054945054944,
     "cer": 0.024730852045524453,
     "rtfx": 312.58,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.08127914723517655,
     "cer": 0.027406599400054542,
     "rtfx": 286.83,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.1201870187018702,
     "cer": 0.062012034412452136,
     "rtfx": 317.63,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.4095842719639566,
     "cer": 0.24793801549612596,
     "rtfx": 238.41,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.4488239033693579,
     "cer": 0.1990657116163189,
     "rtfx": 199.74,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.27842993396918564,
     "cer": 0.14999455357467048,
     "rtfx": 295.42,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.08755760368663594,
     "cer": 0.040572131651799445,
     "rtfx": 309.97,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.19586942038640906,
     "cer": 0.09558221979820017,
     "rtfx": 282.55,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.18729372937293728,
     "cer": 0.10592272116962555,
     "rtfx": 314.54,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.5492525087036658,
     "cer": 0.3672831792051987,
     "rtfx": 217.64,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.5642085187539733,
     "cer": 0.30140143257552166,
     "rtfx": 200.34,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.39490095377842993,
     "cer": 0.25703496605061543,
     "rtfx": 208.69,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.09285546966502693,
     "cer": 0.04076572470373747,
     "rtfx": 353.44,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.18325965222516946,
     "cer": 0.11022430010574943,
     "rtfx": 305.61,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.07917737789203085,
     "cer": 0.04820137463179505,
     "rtfx": 336.69,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.07331975560081466,
     "cer": 0.0379746835443038,
     "rtfx": 366.5,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.1717948717948718,
     "cer": 0.2329911673430413,
     "rtfx": 232.15,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.3033779477374124,
     "cer": 0.21260245901639344,
     "rtfx": 221.31,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 256.81,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.21715629104370596,
     "cer": 0.11119586260535598,
     "done": 8,
     "total": 8,
     "ci": [
      0.21092,
      0.2242
     ]
    },
    "codeswitch": {
     "wer": 0.3186002212415293,
     "cer": 0.18046757509173159,
     "done": 2,
     "total": 2,
     "ci": [
      0.29165,
      0.3449
     ]
    },
    "noisy": {
     "wer": 0.2597194187650343,
     "cer": 0.14638810824521037,
     "done": 6,
     "total": 6,
     "ci": [
      0.24437,
      0.27586
     ]
    },
    "telephony": {
     "wer": 0.23535777014182035,
     "cer": 0.12236009346675991,
     "done": 6,
     "total": 6,
     "ci": [
      0.22455,
      0.24756
     ]
    },
    "callcenter": {
     "wer": 0.41485478699426515,
     "cer": 0.2681767845470464,
     "done": 6,
     "total": 6,
     "ci": [
      0.39623,
      0.43431
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
   "hallucination_rate": 0.8233333333333334,
   "inserted_wpm": 45.11,
   "arena_wer": 0.2768651482314223,
   "arena_cer": 0.15703090126059058,
   "arena_ci": [
    0.27109,
    0.28287
   ],
   "rank_range": [
    1,
    1
   ],
   "rtfx": 265.9,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.8233333333333334,
    "halluc_3plus": 0.6433333333333333,
    "halluc_3plus_ci": [
     0.58763,
     0.69541
    ],
    "inserted_wpm": 45.105722085562505,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.04044526901669759,
      "wer_uncapped": 0.043042671614100185,
      "cer": 0.020736319431938047,
      "av_wer": null,
      "strict_wer": 0.045010510696179055,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0058132343846629565
     },
     "cv18_ar/clean": {
      "wer": 0.043209876543209874,
      "wer_uncapped": 0.04340900039824771,
      "cer": 0.014855544301355328,
      "av_wer": null,
      "strict_wer": 0.046520874751491054,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0011947431302270011
     },
     "masc_clean/clean": {
      "wer": 0.04013868515802107,
      "wer_uncapped": 0.04013868515802107,
      "cer": 0.019740974486286006,
      "av_wer": null,
      "strict_wer": 0.043443496801705755,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0036004800640085347
     },
     "mgb2/clean": {
      "wer": 0.09747172322022621,
      "wer_uncapped": 0.10404191616766467,
      "cer": 0.054887944710880945,
      "av_wer": null,
      "strict_wer": 0.11441628583298712,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.014886892880904857
     },
     "sada/clean": {
      "wer": 0.29508196721311475,
      "wer_uncapped": 0.3188074980978073,
      "cer": 0.17855724914121973,
      "av_wer": null,
      "strict_wer": 0.3361566607941455,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.01002004008016032,
      "insertions": 0.05443729681123331
     },
     "casablanca/clean": {
      "wer": 0.36777356396263067,
      "wer_uncapped": 0.3775783923781334,
      "cer": 0.1675697642915199,
      "av_wer": null,
      "strict_wer": 0.41069958847736626,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0030181086519114686,
      "insertions": 0.036536860604939415
     },
     "mgb3_egy/clean": {
      "wer": 0.12923133934807088,
      "wer_uncapped": 0.12930260401077523,
      "cer": 0.10312863676960134,
      "av_wer": 0.16041651247064986,
      "strict_wer": 0.1666354113644279,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0044469149527515284
     },
     "mgb5_mor/clean": {
      "wer": 0.24237851031284524,
      "wer_uncapped": 0.2446886371743859,
      "cer": 0.18394819012374233,
      "av_wer": null,
      "strict_wer": 0.24939128513813222,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024949370104639046
     },
     "mixat_cs/clean": {
      "wer": 0.14232135807343071,
      "wer_uncapped": 0.1439005132254244,
      "cer": 0.07642220699108979,
      "av_wer": 0.1484776855240968,
      "strict_wer": 0.1622945359794683,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.012751677852348993
     },
     "algerian_cs/clean": {
      "wer": 0.38763240767248786,
      "wer_uncapped": 0.4122530775837389,
      "cer": 0.24741051527468205,
      "av_wer": null,
      "strict_wer": 0.4301628106255356,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0031645569620253164,
      "insertions": 0.052104208416833664
     },
     "masc_noisy/clean": {
      "wer": 0.1352112676056338,
      "wer_uncapped": 0.13633802816901408,
      "cer": 0.06198879371417531,
      "av_wer": null,
      "strict_wer": 0.14995787700084245,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014084507042253521
     },
     "nadi_robust/clean": {
      "wer": 0.5225054229934925,
      "wer_uncapped": 0.5394070860448301,
      "cer": 0.29109073188020557,
      "av_wer": null,
      "strict_wer": 0.5481593995711223,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.005,
      "insertions": 0.041124367317425886
     },
     "fleurs_ar/noisy": {
      "wer": 0.05309891671106375,
      "wer_uncapped": 0.05327650506126798,
      "cer": 0.027245949926362298,
      "av_wer": null,
      "strict_wer": 0.05770596590909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004262120404901438
     },
     "cv18_ar/noisy": {
      "wer": 0.11756847027388109,
      "wer_uncapped": 0.1289245156980628,
      "cer": 0.06659050106087808,
      "av_wer": null,
      "strict_wer": 0.1245836109260493,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02404809619238477
     },
     "mgb2/noisy": {
      "wer": 0.13885070112730272,
      "wer_uncapped": 0.14050041242782513,
      "cer": 0.0808279646862324,
      "av_wer": null,
      "strict_wer": 0.15896589658965896,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.012097882870497663
     },
     "sada/noisy": {
      "wer": 0.40389447236180903,
      "wer_uncapped": 0.4489112227805695,
      "cer": 0.2777777777777778,
      "av_wer": null,
      "strict_wer": 0.43948392381732543,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.023333333333333334,
      "insertions": 0.07056113902847572
     },
     "fleurs_ar/telephony": {
      "wer": 0.052033386609838396,
      "wer_uncapped": 0.052033386609838396,
      "cer": 0.026804123711340205,
      "av_wer": null,
      "strict_wer": 0.05575284090909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004617297105309891
     },
     "cv18_ar/telephony": {
      "wer": 0.08483633934535738,
      "wer_uncapped": 0.08550434201736808,
      "cer": 0.03460094662967195,
      "av_wer": null,
      "strict_wer": 0.08860759493670886,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0033400133600534404
     },
     "mgb2/telephony": {
      "wer": 0.1135551278526258,
      "wer_uncapped": 0.1135551278526258,
      "cer": 0.06412550703889286,
      "av_wer": null,
      "strict_wer": 0.1300880088008801,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.007973604619191641
     },
     "sada/telephony": {
      "wer": 0.35845896147403683,
      "wer_uncapped": 0.36892797319932996,
      "cer": 0.2302486622599937,
      "av_wer": null,
      "strict_wer": 0.39217694040548845,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.03706030150753769
     },
     "casablanca/telephony": {
      "wer": 0.3964079538165491,
      "wer_uncapped": 0.4041051956382296,
      "cer": 0.21449851042701093,
      "av_wer": null,
      "strict_wer": 0.4443738080101716,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.03880692751763951
     },
     "mgb3_egy/telephony": {
      "wer": 0.17362765595371227,
      "wer_uncapped": 0.17387076384499442,
      "cer": 0.13269443420567636,
      "av_wer": 0.20731833766909807,
      "strict_wer": 0.20550760378133992,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.005251130451694462
     },
     "fleurs_ar/callcenter": {
      "wer": 0.14224826851358552,
      "wer_uncapped": 0.15041733262297993,
      "cer": 0.07650957290132548,
      "av_wer": null,
      "strict_wer": 0.14524147727272727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.01562777481797194
     },
     "cv18_ar/callcenter": {
      "wer": 0.27187708750835005,
      "wer_uncapped": 0.2845691382765531,
      "cer": 0.17120940101191448,
      "av_wer": null,
      "strict_wer": 0.27714856762158563,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028056112224448898
     },
     "mgb2/callcenter": {
      "wer": 0.2502062139125653,
      "wer_uncapped": 0.2507561176794061,
      "cer": 0.1612980195657361,
      "av_wer": null,
      "strict_wer": 0.25797579757975797,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.012922738520758868
     },
     "sada/callcenter": {
      "wer": 0.5737018425460636,
      "wer_uncapped": 0.6101340033500837,
      "cer": 0.42870632672332387,
      "av_wer": null,
      "strict_wer": 0.594101986483719,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03666666666666667,
      "insertions": 0.06155778894472362
     },
     "casablanca/callcenter": {
      "wer": 0.6093649775497113,
      "wer_uncapped": 0.631494547787043,
      "cer": 0.39454587120922774,
      "av_wer": null,
      "strict_wer": 0.6331849968213604,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.042976266837716486
     },
     "mgb3_egy/callcenter": {
      "wer": 0.3900423007730831,
      "wer_uncapped": 0.41911800457042836,
      "cer": 0.30902137854773315,
      "av_wer": 0.4492578313500001,
      "strict_wer": 0.41147189112663834,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.035979967909758354
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.0500799147575919,
      "wer_uncapped": 0.0500799147575919,
      "cer": 0.024742268041237112,
      "av_wer": null,
      "strict_wer": 0.05362215909090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004084532054697212
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.07682030728122913,
      "wer_uncapped": 0.07682030728122913,
      "cer": 0.02937816223274033,
      "av_wer": null,
      "strict_wer": 0.08061292471685542,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0026720106880427524
     },
     "mgb2/telephony_v2": {
      "wer": 0.10475666758317294,
      "wer_uncapped": 0.10475666758317294,
      "cer": 0.05732522071104748,
      "av_wer": null,
      "strict_wer": 0.1201870187018702,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.005499037668408029
     },
     "sada/telephony_v2": {
      "wer": 0.35615577889447236,
      "wer_uncapped": 0.37541876046901174,
      "cer": 0.22022872731088028,
      "av_wer": null,
      "strict_wer": 0.39217694040548845,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.016666666666666666,
      "insertions": 0.052345058626465664
     },
     "casablanca/telephony_v2": {
      "wer": 0.3980115458627325,
      "wer_uncapped": 0.4060295060936498,
      "cer": 0.19937361546100374,
      "av_wer": null,
      "strict_wer": 0.4392879847425302,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.043296985246953176
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.17212038702776292,
      "wer_uncapped": 0.17212038702776292,
      "cer": 0.1291927755252488,
      "av_wer": 0.20644271937192515,
      "strict_wer": 0.2027675023975887,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0054456167647201825
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.08257858284496537,
      "wer_uncapped": 0.08257858284496537,
      "cer": 0.04212076583210604,
      "av_wer": null,
      "strict_wer": 0.08558238636363637,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004794885455514118
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.1843687374749499,
      "wer_uncapped": 0.19104876419505679,
      "cer": 0.09858005549208422,
      "av_wer": null,
      "strict_wer": 0.18854097268487674,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02004008016032064
     },
     "mgb2/callcenter_v2": {
      "wer": 0.17706901292273852,
      "wer_uncapped": 0.17706901292273852,
      "cer": 0.10379384395132427,
      "av_wer": null,
      "strict_wer": 0.18811881188118812,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.00577398955182843
     },
     "sada/callcenter_v2": {
      "wer": 0.47717755443886095,
      "wer_uncapped": 0.5221943048576214,
      "cer": 0.32997586821949426,
      "av_wer": null,
      "strict_wer": 0.5064509522834323,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02666666666666667,
      "insertions": 0.07432998324958123
     },
     "casablanca/callcenter_v2": {
      "wer": 0.5205259781911482,
      "wer_uncapped": 0.5272610647851187,
      "cer": 0.307386754258651,
      "av_wer": null,
      "strict_wer": 0.5559440559440559,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.03495830660679923
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.30203724412894445,
      "wer_uncapped": 0.30203724412894445,
      "cer": 0.22627165499447108,
      "av_wer": 0.333830608572526,
      "strict_wer": 0.3289948394757273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005251130451694462
     },
     "fleurs_ar/sweep": {
      "wer": 0.08750586029067042,
      "wer_uncapped": 0.08771683075480544,
      "cer": 0.043315896541702995,
      "av_wer": null,
      "strict_wer": 0.09097515236755743,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.00044444444444444447,
      "insertions": 0.00590717299578059
     },
     "masc_clean/sweep": {
      "wer": 0.17767936226749337,
      "wer_uncapped": 0.1796279893711249,
      "cer": 0.10963879465176611,
      "av_wer": null,
      "strict_wer": 0.1811965811965812,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.00044444444444444447,
      "insertions": 0.014348981399468556
     },
     "fleurs_ar/padded": {
      "wer": 0.05970149253731343,
      "wer_uncapped": 0.07205352547606794,
      "cer": 0.03493589743589744,
      "av_wer": null,
      "strict_wer": 0.06433350488934637,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023160061760164694
     },
     "cv18_ar/padded": {
      "wer": 0.044989775051124746,
      "wer_uncapped": 0.06339468302658487,
      "cer": 0.02070707070707071,
      "av_wer": null,
      "strict_wer": 0.05702647657841141,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02044989775051125
     },
     "masc_clean/padded": {
      "wer": 0.11439588688946016,
      "wer_uncapped": 0.16323907455012854,
      "cer": 0.08717948717948718,
      "av_wer": null,
      "strict_wer": 0.12179487179487179,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.10925449871465295
     },
     "sada/padded": {
      "wer": 0.25928338762214986,
      "wer_uncapped": 0.26905537459283385,
      "cer": 0.14991974317817014,
      "av_wer": null,
      "strict_wer": 0.29509241555130655,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.046905537459283386
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.11111807509018479,
      "cer": 0.06091008668557884,
      "wer_arith": 0.15696636684685203,
      "done": 8,
      "total": 8,
      "ci": [
       0.10261,
       0.11889
      ]
     },
     "codeswitch": {
      "wer": 0.23487948120945396,
      "cer": 0.137505118486891,
      "wer_arith": 0.2649768828729593,
      "done": 2,
      "total": 2,
      "ci": [
       0.19081,
       0.29114
      ]
     },
     "noisy": {
      "wer": 0.13647122184783583,
      "cer": 0.07593767792827093,
      "wer_arith": 0.16972476561593808,
      "done": 5,
      "total": 5,
      "ci": [
       0.12114,
       0.14979
      ]
     },
     "telephony": {
      "wer": 0.1463686990002619,
      "cer": 0.0786318134337787,
      "wer_arith": 0.19299076690116027,
      "done": 6,
      "total": 6,
      "ci": [
       0.13204,
       0.15859
      ]
     },
     "callcenter": {
      "wer": 0.2422776568307252,
      "cer": 0.14651285548209309,
      "wer_arith": 0.2906261850002679,
      "done": 6,
      "total": 6,
      "ci": [
       0.22306,
       0.25782
      ]
     }
    },
    "arena": 0.1424791896130692,
    "arena_arith": 0.19205012588690343,
    "arena_cer": 0.0796724987112934,
    "arena_strict": 0.15845454174694337,
    "zero_shot": 0.20874716557262768,
    "arena_real": 0.13220542276405522,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.37,
    "rank": 1,
    "arena_ci": [
     0.13242,
     0.15147
    ],
    "rank_set": [
     1,
     1
    ]
   }
  },
  {
   "model": "audar-asr-v1-turbo",
   "hf_id": "audarai/Audar-ASR-V1-Turbo",
   "params_b": 2.35,
   "license": "AudarAI Community License",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.05769705955028416,
     "cer": 0.024328390285837095,
     "rtfx": 120.76,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.07673956262425448,
     "cer": 0.022365765038352844,
     "rtfx": 118.69,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.05743603411513859,
     "cer": 0.024349958707675368,
     "rtfx": 89.44,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.10452845866223515,
     "cer": 0.046575467119631155,
     "rtfx": 98.23,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.2781542214392194,
     "cer": 0.1280570979786985,
     "rtfx": 42.27,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.45614997713763145,
     "cer": 0.1763982903160714,
     "rtfx": 53.49,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.2503500269251481,
     "cer": 0.1079177383379046,
     "rtfx": 73.72,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.5912783639929031,
     "cer": 0.27666846555135816,
     "rtfx": 35.57,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.1533583842179427,
     "cer": 0.053940797454196006,
     "rtfx": 118.95,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5210662080825451,
     "cer": 0.2911029332178807,
     "rtfx": 76.42,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.17930356641392867,
     "cer": 0.07346060769023931,
     "rtfx": 75.94,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.5855968548963545,
     "cer": 0.2828199371351594,
     "rtfx": 48.98,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.08525345622119816,
     "cer": 0.03546601045832052,
     "rtfx": 120.84,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.17521652231845436,
     "cer": 0.07881101718025633,
     "rtfx": 118.02,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.15484048404840484,
     "cer": 0.07533940026853647,
     "rtfx": 98.49,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.4611918902314151,
     "cer": 0.29267683079230195,
     "rtfx": 29.1,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.0857851825593761,
     "cer": 0.03789603199015688,
     "rtfx": 119.33,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.13857428381079281,
     "cer": 0.048541041723479686,
     "rtfx": 116.36,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.12981298129812982,
     "cer": 0.05738723954448257,
     "rtfx": 98.86,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.377022322342822,
     "cer": 0.19624260601516288,
     "rtfx": 36.52,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6118881118881119,
     "cer": 0.32519464341326687,
     "rtfx": 14.72,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.35895084372707264,
     "cer": 0.18343560509785412,
     "rtfx": 55.57,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.2818149592343141,
     "cer": 0.16111965549061827,
     "rtfx": 53.48,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.39573617588274485,
     "cer": 0.22129806381238068,
     "rtfx": 45.87,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3028052805280528,
     "cer": 0.16778556865085284,
     "rtfx": 28.19,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7339750153594102,
     "cer": 0.5431975339498458,
     "rtfx": 18.16,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8073744437380801,
     "cer": 0.5098100280286515,
     "rtfx": 18.42,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6005135730007337,
     "cer": 0.3970807160233833,
     "rtfx": 18.57,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 17.45,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.07993619283941865,
     "cer": 0.034081820978160565,
     "rtfx": 126.08,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.13391072618254496,
     "cer": 0.048541041723479686,
     "rtfx": 125.88,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.12486248624862487,
     "cer": 0.05365756626386195,
     "rtfx": 112.3,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.377022322342822,
     "cer": 0.2010330750645672,
     "rtfx": 30.38,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.5727908455181182,
     "cer": 0.27362192463407037,
     "rtfx": 36.4,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.3486793837123991,
     "cer": 0.178170727279329,
     "rtfx": 100.65,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.15047855370436017,
     "cer": 0.07194709320209167,
     "rtfx": 76.52,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.27048634243837444,
     "cer": 0.13730569948186527,
     "rtfx": 129.6,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.20874587458745875,
     "cer": 0.10472922571982694,
     "rtfx": 59.29,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.5476141716158099,
     "cer": 0.3427059901691244,
     "rtfx": 39.28,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.6633820724729815,
     "cer": 0.36381189660541885,
     "rtfx": 19.22,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.47212032281731475,
     "cer": 0.2724301949820268,
     "rtfx": 60.05,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.1716561255563364,
     "cer": 0.08467132583814443,
     "rtfx": 117.98,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.3058060713233127,
     "cer": 0.20070128569043247,
     "rtfx": 52.2,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.060668380462724936,
     "cer": 0.022493974828171025,
     "rtfx": 140.06,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.09775967413441955,
     "cer": 0.03291139240506329,
     "rtfx": 231.96,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.07435897435897436,
     "cer": 0.05204105991883504,
     "rtfx": 153.39,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.2708731676226896,
     "cer": 0.1247438524590164,
     "rtfx": 95.96,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 54.51,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.2340417130558518,
     "cer": 0.10083264666694114,
     "done": 8,
     "total": 8,
     "ci": [
      0.22954,
      0.23848
     ]
    },
    "codeswitch": {
     "wer": 0.3372122961502439,
     "cer": 0.17252186533603836,
     "done": 2,
     "total": 2,
     "ci": [
      0.3155,
      0.35742
     ]
    },
    "noisy": {
     "wer": 0.27356712902162594,
     "cer": 0.139762300587469,
     "done": 6,
     "total": 6,
     "ci": [
      0.25853,
      0.29349
     ]
    },
    "telephony": {
     "wer": 0.2836722876043842,
     "cer": 0.14144952796406715,
     "done": 6,
     "total": 6,
     "ci": [
      0.26818,
      0.30196
     ]
    },
    "callcenter": {
     "wer": 0.5203699079572226,
     "cer": 0.3333819276592887,
     "done": 6,
     "total": 6,
     "ci": [
      0.48296,
      0.56378
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
   "notes": "",
   "training_data": "undisclosed",
   "hallucination_rate": 0.6433333333333333,
   "inserted_wpm": 62.31,
   "arena_wer": 0.31747933765013775,
   "arena_cer": 0.16847424907982475,
   "arena_ci": [
    0.30847,
    0.32699
   ],
   "rank_range": [
    2,
    2
   ],
   "rtfx": 59.3,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.6433333333333333,
    "halluc_3plus": 0.49,
    "halluc_3plus_ci": [
     0.43392,
     0.54634
    ],
    "inserted_wpm": 62.308937940046235,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.052937538651824365,
      "wer_uncapped": 0.052937538651824365,
      "cer": 0.024569708508065554,
      "av_wer": null,
      "strict_wer": 0.056757759366885124,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005194805194805195
     },
     "cv18_ar/clean": {
      "wer": 0.07048984468339307,
      "wer_uncapped": 0.07048984468339307,
      "cer": 0.0239232141995852,
      "av_wer": null,
      "strict_wer": 0.07614314115308152,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0023894862604540022
     },
     "masc_clean/clean": {
      "wer": 0.052807040938791835,
      "wer_uncapped": 0.05294039205227364,
      "cer": 0.02371907995094667,
      "av_wer": null,
      "strict_wer": 0.05730277185501066,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003200426723563142
     },
     "mgb2/clean": {
      "wer": 0.09539254823685961,
      "wer_uncapped": 0.09539254823685961,
      "cer": 0.04343624063166725,
      "av_wer": null,
      "strict_wer": 0.10444536767760698,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011477045908183632
     },
     "sada/clean": {
      "wer": 0.2518503147264301,
      "wer_uncapped": 0.2536487514698762,
      "cer": 0.12525245550741398,
      "av_wer": null,
      "strict_wer": 0.2760536658083751,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.009018036072144289,
      "insertions": 0.032994397177837725
     },
     "casablanca/clean": {
      "wer": 0.4094903339191564,
      "wer_uncapped": 0.4134677643141245,
      "cer": 0.16989524067551703,
      "av_wer": null,
      "strict_wer": 0.44874256973022403,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03542688002959948
     },
     "mgb3_egy/clean": {
      "wer": 0.15809352774333318,
      "wer_uncapped": 0.15815053947349667,
      "cer": 0.09580773498606186,
      "av_wer": 0.19549377317878452,
      "strict_wer": 0.17344013716612638,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011060275651715341
     },
     "mgb5_mor/clean": {
      "wer": 0.3831884398664507,
      "wer_uncapped": 0.38690004677082845,
      "cer": 0.25523302879611426,
      "av_wer": null,
      "strict_wer": 0.389587051643624,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.024487344732330916
     },
     "mixat_cs/clean": {
      "wer": 0.13324121594946703,
      "wer_uncapped": 0.13335965258586657,
      "cer": 0.05016155879761089,
      "av_wer": 0.1404822421633846,
      "strict_wer": 0.1453284485629763,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014844058428740623
     },
     "algerian_cs/clean": {
      "wer": 0.47323217864300027,
      "wer_uncapped": 0.48897795591182364,
      "cer": 0.2841221974564049,
      "av_wer": null,
      "strict_wer": 0.5035704084547272,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.038935012882908675
     },
     "masc_noisy/clean": {
      "wer": 0.1623943661971831,
      "wer_uncapped": 0.16267605633802817,
      "cer": 0.07335608939267083,
      "av_wer": null,
      "strict_wer": 0.17761864644762707,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01591549295774648
     },
     "nadi_robust/clean": {
      "wer": 0.5583875632682574,
      "wer_uncapped": 0.5651663051337672,
      "cer": 0.28555289739500267,
      "av_wer": null,
      "strict_wer": 0.5780914939242316,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.03994938539407086
     },
     "fleurs_ar/noisy": {
      "wer": 0.07955958089149352,
      "wer_uncapped": 0.07955958089149352,
      "cer": 0.036450662739322535,
      "av_wer": null,
      "strict_wer": 0.08433948863636363,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008169064109394424
     },
     "cv18_ar/noisy": {
      "wer": 0.16499665998663995,
      "wer_uncapped": 0.1690046760187041,
      "cer": 0.08372776236330993,
      "av_wer": null,
      "strict_wer": 0.1692205196535643,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012692050768203072
     },
     "mgb2/noisy": {
      "wer": 0.14792411328017596,
      "wer_uncapped": 0.14792411328017596,
      "cer": 0.07313290384156526,
      "av_wer": null,
      "strict_wer": 0.1553905390539054,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015947209238383282
     },
     "sada/noisy": {
      "wer": 0.39300670016750416,
      "wer_uncapped": 0.43655778894472363,
      "cer": 0.254957507082153,
      "av_wer": null,
      "strict_wer": 0.4190047102191276,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.07139865996649916
     },
     "fleurs_ar/telephony": {
      "wer": 0.07920440419108507,
      "wer_uncapped": 0.07920440419108507,
      "cer": 0.03770250368188512,
      "av_wer": null,
      "strict_wer": 0.08291903409090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006038003906943704
     },
     "cv18_ar/telephony": {
      "wer": 0.13092852371409486,
      "wer_uncapped": 0.13159652638610556,
      "cer": 0.050922147870083236,
      "av_wer": null,
      "strict_wer": 0.13724183877415055,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006012024048096192
     },
     "mgb2/telephony": {
      "wer": 0.12345339565576025,
      "wer_uncapped": 0.12345339565576025,
      "cer": 0.05440229062276306,
      "av_wer": null,
      "strict_wer": 0.13036303630363036,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012647786637338466
     },
     "sada/telephony": {
      "wer": 0.34317420435510887,
      "wer_uncapped": 0.3479899497487437,
      "cer": 0.19273948169132304,
      "av_wer": null,
      "strict_wer": 0.3729264796231825,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.03077889447236181
     },
     "casablanca/telephony": {
      "wer": 0.5330339961513791,
      "wer_uncapped": 0.5772931366260423,
      "cer": 0.28072721717210297,
      "av_wer": null,
      "strict_wer": 0.5657978385251112,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.07761385503527903
     },
     "mgb3_egy/telephony": {
      "wer": 0.2709194340448291,
      "wer_uncapped": 0.2709194340448291,
      "cer": 0.16849428676741615,
      "av_wer": 0.30324747649837025,
      "strict_wer": 0.2902680732520437,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012836096659697574
     },
     "fleurs_ar/callcenter": {
      "wer": 0.24418398153081158,
      "wer_uncapped": 0.2763274729177766,
      "cer": 0.14337260677466862,
      "av_wer": null,
      "strict_wer": 0.24786931818181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04706091280412005
     },
     "cv18_ar/callcenter": {
      "wer": 0.3653974615898464,
      "wer_uncapped": 0.38810955243820977,
      "cer": 0.23110820956422393,
      "av_wer": null,
      "strict_wer": 0.37241838774150565,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04008016032064128
     },
     "mgb2/callcenter": {
      "wer": 0.29447346714324996,
      "wer_uncapped": 0.2958482265603519,
      "cer": 0.17281078501550942,
      "av_wer": null,
      "strict_wer": 0.3025302530253025,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019796535606268904
     },
     "sada/callcenter": {
      "wer": 0.5910804020100503,
      "wer_uncapped": 0.7198492462311558,
      "cer": 0.4289161682929388,
      "av_wer": null,
      "strict_wer": 0.6086422281384395,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.14824120603015076
     },
     "casablanca/callcenter": {
      "wer": 0.7187299550994227,
      "wer_uncapped": 0.7915330339961514,
      "cer": 0.46329539378198764,
      "av_wer": null,
      "strict_wer": 0.7342657342657343,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.09846055163566389
     },
     "mgb3_egy/callcenter": {
      "wer": 0.48840375358584137,
      "wer_uncapped": 0.5282248261778577,
      "cer": 0.3606708440840398,
      "av_wer": 0.562837899148334,
      "strict_wer": 0.49933780883226014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04998298244761025
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.07298881193393714,
      "wer_uncapped": 0.07298881193393714,
      "cer": 0.033468335787923416,
      "av_wer": null,
      "strict_wer": 0.07705965909090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005682827206535251
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.12491649966599866,
      "wer_uncapped": 0.12758851035404142,
      "cer": 0.051738207932103805,
      "av_wer": null,
      "strict_wer": 0.13057961359093936,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009352037408149633
     },
     "mgb2/telephony_v2": {
      "wer": 0.11822930987077261,
      "wer_uncapped": 0.11822930987077261,
      "cer": 0.050942495824385585,
      "av_wer": null,
      "strict_wer": 0.1254125412541254,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012097882870497663
     },
     "sada/telephony_v2": {
      "wer": 0.3481993299832496,
      "wer_uncapped": 0.3544807370184255,
      "cer": 0.2002413178050572,
      "av_wer": null,
      "strict_wer": 0.37231210321523656,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03496649916247906
     },
     "casablanca/telephony_v2": {
      "wer": 0.5285439384220654,
      "wer_uncapped": 0.5346375881975626,
      "cer": 0.27087311893667404,
      "av_wer": null,
      "strict_wer": 0.5629370629370629,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03848620910840282
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.2571109058200029,
      "wer_uncapped": 0.2571109058200029,
      "cer": 0.1635643199410247,
      "av_wer": 0.2944985559697226,
      "strict_wer": 0.27766360688678815,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013030582972723295
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.14260344521399396,
      "wer_uncapped": 0.1427810335641982,
      "cer": 0.0758100147275405,
      "av_wer": null,
      "strict_wer": 0.14772727272727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009234594210619783
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.24782899131596525,
      "wer_uncapped": 0.2631930527722111,
      "cer": 0.14052554267994125,
      "av_wer": null,
      "strict_wer": 0.25449700199866754,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.028724114896459586
     },
     "mgb2/callcenter_v2": {
      "wer": 0.20291448996425626,
      "wer_uncapped": 0.20291448996425626,
      "cer": 0.10570269625387736,
      "av_wer": null,
      "strict_wer": 0.20984598459845985,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014847401704701677
     },
     "sada/callcenter_v2": {
      "wer": 0.48576214405360135,
      "wer_uncapped": 0.5286850921273032,
      "cer": 0.31324100304270275,
      "av_wer": null,
      "strict_wer": 0.5064509522834323,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.06490787269681741
     },
     "casablanca/callcenter_v2": {
      "wer": 0.6247594611930725,
      "wer_uncapped": 0.6327774214239897,
      "cer": 0.3658238484454969,
      "av_wer": null,
      "strict_wer": 0.6513032422123332,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.042655548428479795
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.3924733796859046,
      "wer_uncapped": 0.3924733796859046,
      "cer": 0.26713969775156654,
      "av_wer": 0.4261658357185366,
      "strict_wer": 0.4077270859021784,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013419555598774736
     },
     "fleurs_ar/sweep": {
      "wer": 0.1603609939052977,
      "wer_uncapped": 0.16619784341303329,
      "cer": 0.08671897704155769,
      "av_wer": null,
      "strict_wer": 0.1643694327238631,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015471167369901548
     },
     "masc_clean/sweep": {
      "wer": 0.25178624151166223,
      "wer_uncapped": 0.3020962503690582,
      "cer": 0.1615113417148939,
      "av_wer": null,
      "strict_wer": 0.25517241379310346,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0017777777777777779,
      "insertions": 0.0637732506643047
     },
     "fleurs_ar/padded": {
      "wer": 0.05352547606793618,
      "wer_uncapped": 0.05352547606793618,
      "cer": 0.022863247863247862,
      "av_wer": null,
      "strict_wer": 0.05815748841996912,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004117344312918168
     },
     "cv18_ar/padded": {
      "wer": 0.08588957055214724,
      "wer_uncapped": 0.08588957055214724,
      "cer": 0.03333333333333333,
      "av_wer": null,
      "strict_wer": 0.09775967413441955,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0
     },
     "masc_clean/padded": {
      "wer": 0.05784061696658098,
      "wer_uncapped": 0.06812339331619537,
      "cer": 0.02905982905982906,
      "av_wer": null,
      "strict_wer": 0.06282051282051282,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.017994858611825194
     },
     "sada/padded": {
      "wer": 0.23973941368078175,
      "wer_uncapped": 0.24234527687296417,
      "cer": 0.12231139646869985,
      "av_wer": null,
      "strict_wer": 0.26896112173358827,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029315960912052116
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.13605864854682323,
      "cer": 0.06490965695498031,
      "wer_arith": 0.1842811985957799,
      "done": 8,
      "total": 8,
      "ci": [
       0.12746,
       0.14359
      ]
     },
     "codeswitch": {
      "wer": 0.25110561703954126,
      "cer": 0.11938179221898063,
      "wer_arith": 0.3032366972962336,
      "done": 2,
      "total": 2,
      "ci": [
       0.20694,
       0.30583
      ]
     },
     "noisy": {
      "wer": 0.16543808923222658,
      "cer": 0.08396887630668065,
      "wer_arith": 0.18957628410459934,
      "done": 5,
      "total": 5,
      "ci": [
       0.15031,
       0.17822
      ]
     },
     "telephony": {
      "wer": 0.19257731629929278,
      "cer": 0.09599655521889891,
      "wer_arith": 0.241664799282671,
      "done": 6,
      "total": 6,
      "ci": [
       0.17862,
       0.20559
      ]
     },
     "callcenter": {
      "wer": 0.3080280857574663,
      "cer": 0.18040261478627231,
      "wer_arith": 0.3493903185711323,
      "done": 6,
      "total": 6,
      "ci": [
       0.29068,
       0.32384
      ]
     }
    },
    "arena": 0.17256646832808253,
    "arena_arith": 0.22516805829339523,
    "arena_cer": 0.08514574896734002,
    "arena_strict": 0.1846518359109347,
    "zero_shot": 0.2554882707684481,
    "arena_real": 0.15697177620988012,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.29333333333333333,
    "rank": 2,
    "arena_ci": [
     0.16259,
     0.18129
    ],
    "rank_set": [
     2,
     2
    ]
   }
  },
  {
   "model": "voxtral-mini-4b-realtime-arabic",
   "hf_id": "mistralai/Voxtral-Mini-4B-Realtime-Arabic",
   "params_b": 4.43,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.0737583395107487,
     "cer": 0.03043197936814958,
     "rtfx": 20.52,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.11888667992047713,
     "cer": 0.037908760597496975,
     "rtfx": 20.69,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.07835820895522388,
     "cer": 0.02722790860632148,
     "rtfx": 18.91,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.12422102201911092,
     "cer": 0.05064001455957292,
     "rtfx": 21.23,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.3484211952839138,
     "cer": 0.18581644322581534,
     "rtfx": 19.58,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.4927297668038409,
     "cer": 0.20934456001320786,
     "rtfx": 19.03,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.2903069466882068,
     "cer": 0.13180222196134514,
     "rtfx": 21.38,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.5233915398263144,
     "cer": 0.2710919230077352,
     "rtfx": 20.06,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.17582589635196494,
     "cer": 0.06830820612190242,
     "rtfx": 20.73,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.3932358842075093,
     "cer": 0.17626366489879858,
     "rtfx": 18.34,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2087896658242067,
     "cer": 0.08456574347942995,
     "rtfx": 18.77,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6474267333809864,
     "cer": 0.3814997754827122,
     "rtfx": 19.09,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.11254874158099964,
     "cer": 0.05269147954475546,
     "rtfx": 20.15,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.22651565622918055,
     "cer": 0.1059449140987183,
     "rtfx": 19.55,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.18619361936193618,
     "cer": 0.0947337013277637,
     "rtfx": 20.75,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5486381322957199,
     "cer": 0.4003582437723902,
     "rtfx": 18.35,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.10333215171924849,
     "cer": 0.041802522300830515,
     "rtfx": 20.06,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.21185876082611593,
     "cer": 0.09230979001908918,
     "rtfx": 19.38,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.15814081408140815,
     "cer": 0.067233577005321,
     "rtfx": 20.59,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.4984640589801352,
     "cer": 0.3226276764142298,
     "rtfx": 18.45,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6525746980292435,
     "cer": 0.39358455309872314,
     "rtfx": 16.29,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.3750917094644167,
     "cer": 0.2006463091391017,
     "rtfx": 20.98,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.35909252038284295,
     "cer": 0.24727776068901877,
     "rtfx": 20.08,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5103264490339774,
     "cer": 0.37905644941368966,
     "rtfx": 19.37,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3919141914191419,
     "cer": 0.26550300860311304,
     "rtfx": 20.66,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.754249436821626,
     "cer": 0.6330917270682329,
     "rtfx": 18.45,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.817546090273363,
     "cer": 0.6636561818748054,
     "rtfx": 16.3,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6315113719735876,
     "cer": 0.4833884027449984,
     "rtfx": 21.02,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.51,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.10616802552286424,
     "cer": 0.046262688403568133,
     "rtfx": 20.29,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.2171885409726849,
     "cer": 0.08494682301608944,
     "rtfx": 19.36,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.15071507150715072,
     "cer": 0.06489631508279875,
     "rtfx": 20.74,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.4790088060618472,
     "cer": 0.30659001916187617,
     "rtfx": 18.76,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6322314049586777,
     "cer": 0.3657427592650265,
     "rtfx": 16.65,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.3743580337490829,
     "cer": 0.19055226752841217,
     "rtfx": 21.41,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.19266217653314427,
     "cer": 0.09950784374038757,
     "rtfx": 20.39,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.34443704197201863,
     "cer": 0.20207253886010362,
     "rtfx": 20.19,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.2563256325632563,
     "cer": 0.1386443880849371,
     "rtfx": 21.26,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.6215441327053041,
     "cer": 0.4589269349329334,
     "rtfx": 18.91,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.7294977749523204,
     "cer": 0.5114917471192775,
     "rtfx": 16.89,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.5284299339691856,
     "cer": 0.34109146363603354,
     "rtfx": 21.65,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.21131412508784259,
     "cer": 0.1212559505722678,
     "rtfx": 21.5,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.3339817270851754,
     "cer": 0.24134246117882785,
     "rtfx": 20.67,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.0884318766066838,
     "cer": 0.04445237882709988,
     "rtfx": 18.61,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.1446028513238289,
     "cer": 0.04683544303797468,
     "rtfx": 17.76,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.09102564102564102,
     "cer": 0.03533062783480544,
     "rtfx": 18.26,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.3467176545570427,
     "cer": 0.18442622950819673,
     "rtfx": 18.21,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.42,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.25625921237597954,
     "cer": 0.11803297641745557,
     "done": 8,
     "total": 8,
     "ci": [
      0.25153,
      0.26111
     ]
    },
    "codeswitch": {
     "wer": 0.2845308902797371,
     "cer": 0.1222859355103505,
     "done": 2,
     "total": 2,
     "ci": [
      0.26543,
      0.30264
     ]
    },
    "noisy": {
     "wer": 0.32168542477883827,
     "cer": 0.1866323096176283,
     "done": 6,
     "total": 6,
     "ci": [
      0.30937,
      0.33318
     ]
    },
    "telephony": {
     "wer": 0.3332436988500947,
     "cer": 0.18636740466288257,
     "done": 6,
     "total": 6,
     "ci": [
      0.32087,
      0.34581
     ]
    },
    "callcenter": {
     "wer": 0.5774400099840898,
     "cer": 0.4453289217323097,
     "done": 6,
     "total": 6,
     "ci": [
      0.56117,
      0.59452
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
   "notes": "run at the default 480 ms delay (its card: FLEURS-ar 22.53 at 480 ms, 14.71 at 2400 ms)",
   "training_data": "undisclosed",
   "hallucination_rate": 0.07333333333333333,
   "inserted_wpm": 5.9,
   "arena_wer": 0.34853336884322916,
   "arena_cer": 0.2078742470188272,
   "arena_ci": [
    0.34328,
    0.35339
   ],
   "rank_range": [
    3,
    4
   ],
   "rtfx": 20.1,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.07333333333333333,
    "halluc_3plus": 0.06333333333333334,
    "halluc_3plus_ci": [
     0.04092,
     0.09679
    ],
    "inserted_wpm": 5.904587635216352,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.06654298082869511,
      "wer_uncapped": 0.06654298082869511,
      "cer": 0.03030692840052484,
      "av_wer": null,
      "strict_wer": 0.07270928650921231,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005071119356833642
     },
     "cv18_ar/clean": {
      "wer": 0.11051373954599761,
      "wer_uncapped": 0.11051373954599761,
      "cer": 0.03829643563401341,
      "av_wer": null,
      "strict_wer": 0.11809145129224652,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0047789725209080045
     },
     "masc_clean/clean": {
      "wer": 0.07027603680490732,
      "wer_uncapped": 0.07094279237231631,
      "cer": 0.027218616337151915,
      "av_wer": null,
      "strict_wer": 0.07782515991471216,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004667288971862915
     },
     "mgb2/clean": {
      "wer": 0.1111111111111111,
      "wer_uncapped": 0.1111111111111111,
      "cer": 0.047502689691642806,
      "av_wer": null,
      "strict_wer": 0.12305774823431657,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011393878908848968
     },
     "sada/clean": {
      "wer": 0.319775887113509,
      "wer_uncapped": 0.32081344677318946,
      "cer": 0.17779772487959813,
      "av_wer": null,
      "strict_wer": 0.3472015178208429,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.00501002004008016,
      "insertions": 0.02593899149201079
     },
     "casablanca/clean": {
      "wer": 0.448617149199889,
      "wer_uncapped": 0.45203958930718713,
      "cer": 0.20520635780727897,
      "av_wer": null,
      "strict_wer": 0.48751714677640606,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.034409397835537876
     },
     "mgb3_egy/clean": {
      "wer": 0.18910790895226692,
      "wer_uncapped": 0.19002009663488262,
      "cer": 0.11210046280007578,
      "av_wer": 0.22857484889467244,
      "strict_wer": 0.2167867763281271,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.006898419349781217
     },
     "mgb5_mor/clean": {
      "wer": 0.2894588957510437,
      "wer_uncapped": 0.2905215541073524,
      "cer": 0.23561928992714237,
      "av_wer": null,
      "strict_wer": 0.3179875748996935,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02670506651940994
     },
     "mixat_cs/clean": {
      "wer": 0.15649427556257403,
      "wer_uncapped": 0.15653375444137385,
      "cer": 0.06501517673553314,
      "av_wer": 0.16163984956279942,
      "strict_wer": 0.16985678741453283,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.0124753257007501
     },
     "algerian_cs/clean": {
      "wer": 0.3346693386773547,
      "wer_uncapped": 0.34812482107071285,
      "cer": 0.15930247803854727,
      "av_wer": null,
      "strict_wer": 0.3730362753499,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.047237331806470086
     },
     "masc_noisy/clean": {
      "wer": 0.18901408450704224,
      "wer_uncapped": 0.18971830985915494,
      "cer": 0.08391833580215109,
      "av_wer": null,
      "strict_wer": 0.20738556585228868,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014647887323943662
     },
     "nadi_robust/clean": {
      "wer": 0.6231019522776573,
      "wer_uncapped": 0.6270788141720897,
      "cer": 0.3828415736310473,
      "av_wer": null,
      "strict_wer": 0.643048606147248,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.02774765003615329
     },
     "fleurs_ar/noisy": {
      "wer": 0.1054874800213106,
      "wer_uncapped": 0.1054874800213106,
      "cer": 0.05371870397643594,
      "av_wer": null,
      "strict_wer": 0.111328125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007458710708577517
     },
     "cv18_ar/noisy": {
      "wer": 0.218436873747495,
      "wer_uncapped": 0.21977287909151635,
      "cer": 0.11163701648441325,
      "av_wer": null,
      "strict_wer": 0.22385076615589608,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012024048096192385
     },
     "mgb2/noisy": {
      "wer": 0.1778938685729997,
      "wer_uncapped": 0.1778938685729997,
      "cer": 0.09269863994273443,
      "av_wer": null,
      "strict_wer": 0.18646864686468648,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00962331591971405
     },
     "sada/noisy": {
      "wer": 0.5265912897822446,
      "wer_uncapped": 0.5272194304857621,
      "cer": 0.39271849753436155,
      "av_wer": null,
      "strict_wer": 0.547818963751792,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.019891122278056953
     },
     "fleurs_ar/telephony": {
      "wer": 0.09767359261232463,
      "wer_uncapped": 0.09767359261232463,
      "cer": 0.04337260677466863,
      "av_wer": null,
      "strict_wer": 0.10209517045454546,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00781388740898597
     },
     "cv18_ar/telephony": {
      "wer": 0.20507682030728122,
      "wer_uncapped": 0.20774883099532399,
      "cer": 0.09825363146727599,
      "av_wer": null,
      "strict_wer": 0.20852764823451034,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009352037408149633
     },
     "mgb2/telephony": {
      "wer": 0.14957382458069837,
      "wer_uncapped": 0.14957382458069837,
      "cer": 0.06615366261035552,
      "av_wer": null,
      "strict_wer": 0.15841584158415842,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01347264228759967
     },
     "sada/telephony": {
      "wer": 0.47613065326633164,
      "wer_uncapped": 0.47717755443886095,
      "cer": 0.3168607701185605,
      "av_wer": null,
      "strict_wer": 0.4974400983002253,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.024288107202680067
     },
     "casablanca/telephony": {
      "wer": 0.6119307248236049,
      "wer_uncapped": 0.6151379089159718,
      "cer": 0.3893514628370636,
      "av_wer": null,
      "strict_wer": 0.6468531468531469,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03207184092366902
     },
     "mgb3_egy/telephony": {
      "wer": 0.2825886128263723,
      "wer_uncapped": 0.2839500170175524,
      "cer": 0.183560633984519,
      "av_wer": 0.3219649171086652,
      "strict_wer": 0.30415125359638306,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009918801964311762
     },
     "fleurs_ar/callcenter": {
      "wer": 0.35624223050967857,
      "wer_uncapped": 0.35624223050967857,
      "cer": 0.25489690721649483,
      "av_wer": null,
      "strict_wer": 0.3595525568181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013141537915112769
     },
     "cv18_ar/callcenter": {
      "wer": 0.5003340013360054,
      "wer_uncapped": 0.5063460253841016,
      "cer": 0.3820793210380284,
      "av_wer": null,
      "strict_wer": 0.5036642238507661,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020708082832331328
     },
     "mgb2/callcenter": {
      "wer": 0.3860324443222436,
      "wer_uncapped": 0.3860324443222436,
      "cer": 0.27040085898353616,
      "av_wer": null,
      "strict_wer": 0.39246424642464245,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01347264228759967
     },
     "sada/callcenter": {
      "wer": 0.7401591289782244,
      "wer_uncapped": 0.7403685092127303,
      "cer": 0.6296296296296297,
      "av_wer": null,
      "strict_wer": 0.754044644685644,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.009631490787269681
     },
     "casablanca/callcenter": {
      "wer": 0.7976266837716485,
      "wer_uncapped": 0.7995509942270687,
      "cer": 0.6644259414865175,
      "av_wer": null,
      "strict_wer": 0.8124602670057216,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02084669660038486
     },
     "mgb3_egy/callcenter": {
      "wer": 0.568483492974182,
      "wer_uncapped": 0.568483492974182,
      "cer": 0.47719314412089936,
      "av_wer": 0.6014439464514786,
      "strict_wer": 0.5717678220760835,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00719599358195167
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.09998224116497957,
      "wer_uncapped": 0.09998224116497957,
      "cer": 0.047496318114874814,
      "av_wer": null,
      "strict_wer": 0.10511363636363637,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008169064109394424
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.20841683366733466,
      "wer_uncapped": 0.21042084168336672,
      "cer": 0.08748163864860453,
      "av_wer": null,
      "strict_wer": 0.2145236508994004,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013360053440213761
     },
     "mgb2/telephony_v2": {
      "wer": 0.14297497937860873,
      "wer_uncapped": 0.14297497937860873,
      "cer": 0.06245526127415891,
      "av_wer": null,
      "strict_wer": 0.15126512651265125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014022546054440473
     },
     "sada/telephony_v2": {
      "wer": 0.45414572864321606,
      "wer_uncapped": 0.4551926298157454,
      "cer": 0.30143741475186236,
      "av_wer": null,
      "strict_wer": 0.4781896375179193,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.022822445561139028
     },
     "casablanca/telephony_v2": {
      "wer": 0.585952533675433,
      "wer_uncapped": 0.5894804361770366,
      "cer": 0.3621572072416164,
      "av_wer": null,
      "strict_wer": 0.6249205340114431,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03207184092366902
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.2821996402003209,
      "wer_uncapped": 0.2847279622696553,
      "cer": 0.1734242535938076,
      "av_wer": 0.3207984352049578,
      "strict_wer": 0.30437959537836234,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.013614041911800457
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.1875332978156633,
      "wer_uncapped": 0.1875332978156633,
      "cer": 0.10438144329896908,
      "av_wer": null,
      "strict_wer": 0.19193892045454544,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01047771266204937
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.3346693386773547,
      "wer_uncapped": 0.3380093520374082,
      "cer": 0.21086992002611393,
      "av_wer": null,
      "strict_wer": 0.3397734843437708,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011356045424181697
     },
     "mgb2/callcenter_v2": {
      "wer": 0.2493813582623041,
      "wer_uncapped": 0.2493813582623041,
      "cer": 0.14059890240992604,
      "av_wer": null,
      "strict_wer": 0.2568756875687569,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01347264228759967
     },
     "sada/callcenter_v2": {
      "wer": 0.6046901172529313,
      "wer_uncapped": 0.6059463986599665,
      "cer": 0.459185814709894,
      "av_wer": null,
      "strict_wer": 0.6197010034814663,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.0173785594639866
     },
     "casablanca/callcenter_v2": {
      "wer": 0.6953175112251443,
      "wer_uncapped": 0.6982039769082745,
      "cer": 0.5121839431670614,
      "av_wer": null,
      "strict_wer": 0.7234583598219961,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.028223220012828735
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.45256965041085234,
      "wer_uncapped": 0.45256965041085234,
      "cer": 0.33330261702911906,
      "av_wer": 0.48635583925827053,
      "strict_wer": 0.4634424807051194,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008946370399183157
     },
     "fleurs_ar/sweep": {
      "wer": 0.20511017346460383,
      "wer_uncapped": 0.20511017346460383,
      "cer": 0.12620362297781654,
      "av_wer": null,
      "strict_wer": 0.21050164088138773,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005368026254102203
     },
     "masc_clean/sweep": {
      "wer": 0.32884558606436376,
      "wer_uncapped": 0.329140832595217,
      "cer": 0.24354420275394134,
      "av_wer": null,
      "strict_wer": 0.33292071912761567,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008444050782403307
     },
     "fleurs_ar/padded": {
      "wer": 0.08234688625836335,
      "wer_uncapped": 0.08286155429747813,
      "cer": 0.04423076923076923,
      "av_wer": null,
      "strict_wer": 0.08697889861039629,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01080802882141019
     },
     "cv18_ar/padded": {
      "wer": 0.12883435582822086,
      "wer_uncapped": 0.12883435582822086,
      "cer": 0.04595959595959596,
      "av_wer": null,
      "strict_wer": 0.1446028513238289,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0081799591002045
     },
     "masc_clean/padded": {
      "wer": 0.08226221079691516,
      "wer_uncapped": 0.08226221079691516,
      "cer": 0.03504273504273504,
      "av_wer": null,
      "strict_wer": 0.08974358974358974,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006426735218508998
     },
     "sada/padded": {
      "wer": 0.3166123778501629,
      "wer_uncapped": 0.3166123778501629,
      "cer": 0.17624398073836275,
      "av_wer": null,
      "strict_wer": 0.3467176545570427,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.019543973941368076
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.16097657462919657,
      "cer": 0.0785285309014316,
      "wer_arith": 0.20067546366342748,
      "done": 8,
      "total": 8,
      "ci": [
       0.15145,
       0.16973
      ]
     },
     "codeswitch": {
      "wer": 0.2288533060921742,
      "cer": 0.10176973402777732,
      "wer_arith": 0.24558180711996438,
      "done": 2,
      "total": 2,
      "ci": [
       0.19708,
       0.26673
      ]
     },
     "noisy": {
      "wer": 0.20995737656843122,
      "cer": 0.1128727395645211,
      "wer_arith": 0.24348471932621843,
      "done": 5,
      "total": 5,
      "ci": [
       0.19323,
       0.22471
      ]
     },
     "telephony": {
      "wer": 0.24638918347328292,
      "cer": 0.1303842103401939,
      "wer_arith": 0.29561199278831546,
      "done": 6,
      "total": 6,
      "ci": [
       0.23101,
       0.26006
      ]
     },
     "callcenter": {
      "wer": 0.3793091283615628,
      "cer": 0.24973466776294848,
      "wer_arith": 0.420693545607375,
      "done": 6,
      "total": 6,
      "ci": [
       0.36098,
       0.39554
      ]
     }
    },
    "arena": 0.20076873541299708,
    "arena_arith": 0.2453282646382102,
    "arena_cer": 0.10181582292960208,
    "arena_strict": 0.21689506710671122,
    "zero_shot": 0.24230997222704892,
    "arena_real": 0.17520388903349,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.05333333333333334,
    "rank": 3,
    "arena_ci": [
     0.19107,
     0.21082
    ],
    "rank_set": [
     3,
     4
    ]
   }
  },
  {
   "model": "nvidia-fastconformer-ar-pc",
   "hf_id": "nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0",
   "params_b": 0.115,
   "license": "CC-BY-4.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.06016802569804794,
     "cer": 0.024049000644745324,
     "rtfx": 1402.9,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.06143141153081511,
     "cer": 0.020831651190956802,
     "rtfx": 1121.73,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.04904051172707889,
     "cer": 0.020671187967666857,
     "rtfx": 1214.73,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.14241794765267968,
     "cer": 0.05975491385586023,
     "rtfx": 1558.08,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4300718254506031,
     "cer": 0.20838557669785193,
     "rtfx": 1360.08,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5668952903520805,
     "cer": 0.2693669399959643,
     "rtfx": 1293.11,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3061389337641357,
     "cer": 0.14391521968815701,
     "rtfx": 1425.37,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7501167242506304,
     "cer": 0.4163518618456557,
     "rtfx": 1354.91,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2785345232503523,
     "cer": 0.13543488192573688,
     "rtfx": 1516.18,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5729435368300373,
     "cer": 0.34321896309124367,
     "rtfx": 1161.71,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.19025554619488907,
     "cer": 0.07916106480236623,
     "rtfx": 1314.09,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6920121515368121,
     "cer": 0.3876605298607993,
     "rtfx": 1317.61,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.08419000354484225,
     "cer": 0.034943094432482315,
     "rtfx": 1518.31,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.1459027315123251,
     "cer": 0.07703845104990456,
     "rtfx": 1382.81,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.2048954895489549,
     "cer": 0.10109901039335621,
     "rtfx": 1466.56,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5443374974400983,
     "cer": 0.3256685828542864,
     "rtfx": 1223.52,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.08064516129032258,
     "cer": 0.0332513072900646,
     "rtfx": 1526.66,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.11592271818787475,
     "cer": 0.04458685574038724,
     "rtfx": 1413.51,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.17024202420242024,
     "cer": 0.07374807300213834,
     "rtfx": 1501.87,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5152570141306574,
     "cer": 0.2757643922352745,
     "rtfx": 1274.45,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.629688493324857,
     "cer": 0.34824042354406726,
     "rtfx": 1026.86,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.3873807776962582,
     "cer": 0.20569332994444647,
     "rtfx": 1452.07,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.23520028358738035,
     "cer": 0.11639495539833897,
     "rtfx": 1498.87,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.33777481678880744,
     "cer": 0.20070902645214073,
     "rtfx": 1360.0,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3589108910891089,
     "cer": 0.19543487990452035,
     "rtfx": 1470.37,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7010034814663116,
     "cer": 0.4639256852453553,
     "rtfx": 1222.1,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.7965670692943421,
     "cer": 0.5259420741202118,
     "rtfx": 1024.38,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.5979457079970653,
     "cer": 0.38811226898079226,
     "rtfx": 1459.42,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 1444.49,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.07869549805033677,
     "cer": 0.031928637342356195,
     "rtfx": 370.77,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.10592938041305797,
     "cer": 0.0404963185164985,
     "rtfx": 169.58,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.16611661166116612,
     "cer": 0.07185837187329057,
     "rtfx": 329.74,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.5019455252918288,
     "cer": 0.26026826626676663,
     "rtfx": 286.72,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6083916083916084,
     "cer": 0.33410152600436,
     "rtfx": 223.49,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.3824284666177549,
     "cer": 0.1955266693293635,
     "rtfx": 242.48,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.1370081531371854,
     "cer": 0.06062749923100585,
     "rtfx": 375.25,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.22318454363757495,
     "cer": 0.11644395964003272,
     "rtfx": 174.03,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.26127612761276126,
     "cer": 0.12631160177035158,
     "rtfx": 265.72,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.6192914192095024,
     "cer": 0.3720319920019995,
     "rtfx": 452.43,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.7218690400508583,
     "cer": 0.43450638430395516,
     "rtfx": 190.25,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.49724871606749815,
     "cer": 0.2901129225518318,
     "rtfx": 321.82,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.15057390489576014,
     "cer": 0.07609845031905196,
     "rtfx": 666.97,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.23902151488358384,
     "cer": 0.15849056603773584,
     "rtfx": 261.19,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.06683804627249357,
     "cer": 0.02704632687672945,
     "rtfx": 467.74,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.13441955193482688,
     "cer": 0.08143459915611814,
     "rtfx": 930.3,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.18717948717948718,
     "cer": 0.14681308188111722,
     "rtfx": 455.86,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.4544295729764181,
     "cer": 0.24001024590163936,
     "rtfx": 378.39,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 458.78,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.2957850838032589,
     "cer": 0.14541579398585727,
     "done": 8,
     "total": 8,
     "ci": [
      0.29116,
      0.30043
     ]
    },
    "codeswitch": {
     "wer": 0.42573903004019475,
     "cer": 0.23932692250849028,
     "done": 2,
     "total": 2,
     "ci": [
      0.40476,
      0.44542
     ]
    },
    "noisy": {
     "wer": 0.31026556996298693,
     "cer": 0.16759512223219916,
     "done": 6,
     "total": 6,
     "ci": [
      0.29963,
      0.31992
     ]
    },
    "telephony": {
     "wer": 0.3165226981387317,
     "cer": 0.1635473969593964,
     "done": 6,
     "total": 6,
     "ci": [
      0.30667,
      0.32807
     ]
    },
    "callcenter": {
     "wer": 0.5045670417038359,
     "cer": 0.3150864816835599,
     "done": 6,
     "total": 6,
     "ci": [
      0.49107,
      0.51844
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
   "in_domain": [
    "masc_clean",
    "masc_noisy",
    "cv18_ar",
    "fleurs_ar"
   ],
   "notes": "trained on MASC (690 h), Common Voice 17 (65 h) and FLEURS (5 h), per its card",
   "training_data": "",
   "hallucination_rate": 0.6666666666666666,
   "inserted_wpm": 18.0,
   "arena_wer": 0.35685646579812164,
   "arena_cer": 0.1956942642093202,
   "arena_ci": [
    0.35259,
    0.36135
   ],
   "rank_range": [
    4,
    5
   ],
   "rtfx": 655.9,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.6666666666666666,
    "halluc_3plus": 0.25,
    "halluc_3plus_ci": [
     0.20437,
     0.30195
    ],
    "inserted_wpm": 18.002332978046844,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.05417439703153989,
      "wer_uncapped": 0.05417439703153989,
      "cer": 0.023875067534539093,
      "av_wer": null,
      "strict_wer": 0.058365277606034376,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0055658627087198514
     },
     "cv18_ar/clean": {
      "wer": 0.05814416567104739,
      "wer_uncapped": 0.05814416567104739,
      "cer": 0.023006800752423673,
      "av_wer": null,
      "strict_wer": 0.060834990059642144,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0013938669852648347
     },
     "masc_clean/clean": {
      "wer": 0.04453927190292039,
      "wer_uncapped": 0.04467262301640219,
      "cer": 0.02036909640175874,
      "av_wer": null,
      "strict_wer": 0.04877398720682303,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00440058674489932
     },
     "mgb2/clean": {
      "wer": 0.12932468396540253,
      "wer_uncapped": 0.12932468396540253,
      "cer": 0.058699101004759384,
      "av_wer": null,
      "strict_wer": 0.14216867469879518,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008982035928143712
     },
     "sada/clean": {
      "wer": 0.39876876253717924,
      "wer_uncapped": 0.3994604689769662,
      "cer": 0.20396678807546909,
      "av_wer": null,
      "strict_wer": 0.4293264670009486,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.003006012024048096,
      "insertions": 0.01916026838209864
     },
     "casablanca/clean": {
      "wer": 0.5354731292202386,
      "wer_uncapped": 0.5387105725649801,
      "cer": 0.267587826244017,
      "av_wer": null,
      "strict_wer": 0.5619570187471422,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.001006036217303823,
      "insertions": 0.023124595319581907
     },
     "mgb3_egy/clean": {
      "wer": 0.20136543093741538,
      "wer_uncapped": 0.20136543093741538,
      "cer": 0.12258789141790034,
      "av_wer": 0.2353895345822677,
      "strict_wer": 0.23575427974388513,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.006385313778309887
     },
     "mgb5_mor/clean": {
      "wer": 0.5376743204403768,
      "wer_uncapped": 0.5407544957494359,
      "cer": 0.38783393084306694,
      "av_wer": null,
      "strict_wer": 0.5403150398431317,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014322786541552045
     },
     "mixat_cs/clean": {
      "wer": 0.24603237268061587,
      "wer_uncapped": 0.24615080931701538,
      "cer": 0.13427004797806716,
      "av_wer": 0.23571876166856717,
      "strict_wer": 0.2685186999196756,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.004,
      "insertions": 0.010659297275957363
     },
     "algerian_cs/clean": {
      "wer": 0.5350701402805611,
      "wer_uncapped": 0.5490981963927856,
      "cer": 0.33551855251081686,
      "av_wer": null,
      "strict_wer": 0.5581262496429592,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02404809619238477
     },
     "masc_noisy/clean": {
      "wer": 0.17591549295774647,
      "wer_uncapped": 0.17591549295774647,
      "cer": 0.07992529142783539,
      "av_wer": null,
      "strict_wer": 0.19025554619488907,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014084507042253521
     },
     "nadi_robust/clean": {
      "wer": 0.6743492407809111,
      "wer_uncapped": 0.6775126536514823,
      "cer": 0.3978823320928584,
      "av_wer": null,
      "strict_wer": 0.6887062187276626,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.01581706435285611
     },
     "fleurs_ar/noisy": {
      "wer": 0.07689575563843012,
      "wer_uncapped": 0.07689575563843012,
      "cer": 0.03523564064801178,
      "av_wer": null,
      "strict_wer": 0.08167613636363637,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008524240809802876
     },
     "cv18_ar/noisy": {
      "wer": 0.14161656646626586,
      "wer_uncapped": 0.14161656646626586,
      "cer": 0.08258527827648116,
      "av_wer": null,
      "strict_wer": 0.145236508994004,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006680026720106881
     },
     "mgb2/noisy": {
      "wer": 0.19439098157822382,
      "wer_uncapped": 0.19439098157822382,
      "cer": 0.10170603674540682,
      "av_wer": null,
      "strict_wer": 0.2048954895489549,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012097882870497663
     },
     "sada/noisy": {
      "wer": 0.5190536013400335,
      "wer_uncapped": 0.5205192629815746,
      "cer": 0.32682824467527016,
      "av_wer": null,
      "strict_wer": 0.5429039524882244,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01654103852596315
     },
     "fleurs_ar/telephony": {
      "wer": 0.07369916533475404,
      "wer_uncapped": 0.07369916533475404,
      "cer": 0.033394698085419734,
      "av_wer": null,
      "strict_wer": 0.07794744318181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006215592257147931
     },
     "cv18_ar/telephony": {
      "wer": 0.10955243820975284,
      "wer_uncapped": 0.11022044088176353,
      "cer": 0.04994287579565856,
      "av_wer": null,
      "strict_wer": 0.1145902731512325,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004008016032064128
     },
     "mgb2/telephony": {
      "wer": 0.15782238108331043,
      "wer_uncapped": 0.15782238108331043,
      "cer": 0.0737294201861131,
      "av_wer": null,
      "strict_wer": 0.1696919691969197,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010448171569975254
     },
     "sada/telephony": {
      "wer": 0.48387772194304857,
      "wer_uncapped": 0.48576214405360135,
      "cer": 0.27447277305634243,
      "av_wer": null,
      "strict_wer": 0.5134138849068196,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.017587939698492462
     },
     "casablanca/telephony": {
      "wer": 0.6048749198203976,
      "wer_uncapped": 0.6084028223220013,
      "cer": 0.3526086624398442,
      "av_wer": null,
      "strict_wer": 0.6258741258741258,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01860166773572803
     },
     "mgb3_egy/telephony": {
      "wer": 0.28745077065201535,
      "wer_uncapped": 0.28745077065201535,
      "cer": 0.1886748986361961,
      "av_wer": 0.3195354310614443,
      "strict_wer": 0.3196784947709732,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006807020955900228
     },
     "fleurs_ar/callcenter": {
      "wer": 0.22606996980998045,
      "wer_uncapped": 0.22606996980998045,
      "cer": 0.12422680412371134,
      "av_wer": null,
      "strict_wer": 0.23295454545454544,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010832889362457822
     },
     "cv18_ar/callcenter": {
      "wer": 0.32531730126920505,
      "wer_uncapped": 0.32798931195724784,
      "cer": 0.21217561612534683,
      "av_wer": null,
      "strict_wer": 0.3344437041972019,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013360053440213761
     },
     "mgb2/callcenter": {
      "wer": 0.34808908441022823,
      "wer_uncapped": 0.34918889194390984,
      "cer": 0.2029348604151754,
      "av_wer": null,
      "strict_wer": 0.3572607260726073,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012372834753918064
     },
     "sada/callcenter": {
      "wer": 0.6834170854271356,
      "wer_uncapped": 0.684463986599665,
      "cer": 0.46967789319064107,
      "av_wer": null,
      "strict_wer": 0.7001843129223838,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005234505862646567
     },
     "casablanca/callcenter": {
      "wer": 0.7841565105837075,
      "wer_uncapped": 0.7876844130853111,
      "cer": 0.5381559850278818,
      "av_wer": null,
      "strict_wer": 0.7930705657978385,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013470173187940988
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5214178052219575,
      "wer_uncapped": 0.5214178052219575,
      "cer": 0.38485993365278287,
      "av_wer": 0.5556919821130338,
      "strict_wer": 0.5354158103849842,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005056644138668741
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.07227845853312023,
      "wer_uncapped": 0.07227845853312023,
      "cer": 0.03203240058910162,
      "av_wer": null,
      "strict_wer": 0.07599431818181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006570768957556384
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.09886439545758183,
      "wer_uncapped": 0.1008684034736139,
      "cer": 0.044067243349110496,
      "av_wer": null,
      "strict_wer": 0.10326449033977349,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005344021376085505
     },
     "mgb2/telephony_v2": {
      "wer": 0.1528732471817432,
      "wer_uncapped": 0.1528732471817432,
      "cer": 0.07104509663564781,
      "av_wer": null,
      "strict_wer": 0.16584158415841585,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012372834753918064
     },
     "sada/telephony_v2": {
      "wer": 0.47278056951423786,
      "wer_uncapped": 0.47361809045226133,
      "cer": 0.26093799181617877,
      "av_wer": null,
      "strict_wer": 0.5011263567479008,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018844221105527637
     },
     "casablanca/telephony_v2": {
      "wer": 0.585952533675433,
      "wer_uncapped": 0.5875561257216164,
      "cer": 0.33855320449163545,
      "av_wer": null,
      "strict_wer": 0.6064844246662429,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0163566388710712
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.2816161812612437,
      "wer_uncapped": 0.2816161812612437,
      "cer": 0.17784740140066346,
      "av_wer": 0.3146266978691874,
      "strict_wer": 0.3105448234918025,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.008557397773131716
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.12875155389806428,
      "wer_uncapped": 0.12875155389806428,
      "cer": 0.06380706921944035,
      "av_wer": null,
      "strict_wer": 0.13512073863636365,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007636299058781744
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.21710086840347362,
      "wer_uncapped": 0.21910487641950568,
      "cer": 0.12469397747674228,
      "av_wer": null,
      "strict_wer": 0.22051965356429049,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01002004008016032
     },
     "mgb2/callcenter_v2": {
      "wer": 0.2488314544954633,
      "wer_uncapped": 0.2488314544954633,
      "cer": 0.13129324743497972,
      "av_wer": null,
      "strict_wer": 0.2607260726072607,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014572449821281275
     },
     "sada/callcenter_v2": {
      "wer": 0.6046901172529313,
      "wer_uncapped": 0.6061557788944724,
      "cer": 0.38080998845871367,
      "av_wer": null,
      "strict_wer": 0.6182674585295924,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013819095477386936
     },
     "casablanca/callcenter_v2": {
      "wer": 0.7026940346375882,
      "wer_uncapped": 0.7059012187299551,
      "cer": 0.44335803223588727,
      "av_wer": null,
      "strict_wer": 0.717418944691672,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01796023091725465
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.4111440657363738,
      "wer_uncapped": 0.4111440657363738,
      "cer": 0.28335790637670477,
      "av_wer": 0.44454579435903296,
      "strict_wer": 0.43110928437685525,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006807020955900228
     },
     "fleurs_ar/sweep": {
      "wer": 0.14470229723394282,
      "wer_uncapped": 0.14472573839662448,
      "cer": 0.08022377215925602,
      "av_wer": null,
      "strict_wer": 0.1487810595405532,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006727613689639006
     },
     "masc_clean/sweep": {
      "wer": 0.23395335104812517,
      "wer_uncapped": 0.2340714496604665,
      "cer": 0.1624958424798776,
      "av_wer": null,
      "strict_wer": 0.23884468022399058,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009152642456451136
     },
     "fleurs_ar/padded": {
      "wer": 0.05970149253731343,
      "wer_uncapped": 0.05970149253731343,
      "cer": 0.026816239316239315,
      "av_wer": null,
      "strict_wer": 0.0638188368502316,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009264024704065878
     },
     "cv18_ar/padded": {
      "wer": 0.12678936605316973,
      "wer_uncapped": 0.12678936605316973,
      "cer": 0.08282828282828283,
      "av_wer": null,
      "strict_wer": 0.13441955193482688,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012269938650306749
     },
     "masc_clean/padded": {
      "wer": 0.18123393316195371,
      "wer_uncapped": 0.18123393316195371,
      "cer": 0.14387464387464388,
      "av_wer": null,
      "strict_wer": 0.18717948717948718,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.10025706940874037
     },
     "sada/padded": {
      "wer": 0.4175895765472313,
      "wer_uncapped": 0.4175895765472313,
      "cer": 0.23418940609951847,
      "av_wer": null,
      "strict_wer": 0.4544295729764181,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012377850162866449
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.15952765232611144,
      "cer": 0.08015680624236973,
      "wer_arith": 0.24493302021326502,
      "done": 8,
      "total": 8,
      "ci": [
       0.15001,
       0.16783
      ]
     },
     "codeswitch": {
      "wer": 0.3628285768290261,
      "cer": 0.2122500698307518,
      "wer_arith": 0.39055125648058847,
      "done": 2,
      "total": 2,
      "ci": [
       0.31091,
       0.43001
      ]
     },
     "noisy": {
      "wer": 0.18081804449049327,
      "cer": 0.09498325970927918,
      "wer_arith": 0.22157447959613996,
      "done": 5,
      "total": 5,
      "ci": [
       0.16478,
       0.19519
      ]
     },
     "telephony": {
      "wer": 0.20977802456004854,
      "cer": 0.10787195295657952,
      "wer_arith": 0.27739423093722665,
      "done": 6,
      "total": 6,
      "ci": [
       0.19389,
       0.22352
      ]
     },
     "callcenter": {
      "wer": 0.3266646051917494,
      "cer": 0.19192246758704226,
      "wer_arith": 0.38553534907064907,
      "done": 6,
      "total": 6,
      "ci": [
       0.30904,
       0.34188
      ]
     }
    },
    "arena": 0.20302320628674259,
    "arena_arith": 0.28057832851892933,
    "arena_cer": 0.10696652205422699,
    "arena_strict": 0.21641572775398124,
    "zero_shot": 0.3463208919391683,
    "arena_real": 0.1920568938484147,
    "exposure": 0.3442,
    "incomplete": [],
    "boh_share": 0.10333333333333333,
    "rank": 4,
    "arena_ci": [
     0.19213,
     0.21306
    ],
    "rank_set": [
     3,
     4
    ]
   }
  },
  {
   "model": "lemura-arabic-asr-qwen3",
   "hf_id": "lemuralabs/lemura-arabic-asr-qwen3",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.11304670126019274,
     "cer": 0.06004728132387707,
     "rtfx": 63.69,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.10755467196819085,
     "cer": 0.03467904723455793,
     "rtfx": 57.42,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.10034648187633262,
     "cer": 0.034485347481168195,
     "rtfx": 66.37,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.13942667220606564,
     "cer": 0.05948192186362533,
     "rtfx": 84.18,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.32721235939829246,
     "cer": 0.16215881064249005,
     "rtfx": 25.35,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.4127114769090078,
     "cer": 0.16599710160879055,
     "rtfx": 38.03,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3616585891222402,
     "cer": 0.1644592907226177,
     "rtfx": 58.56,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.6007096834438322,
     "cer": 0.28708400791509264,
     "rtfx": 26.04,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.23254266478785032,
     "cer": 0.11263922365581235,
     "rtfx": 93.63,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5829750644883921,
     "cer": 0.3366165169390627,
     "rtfx": 45.2,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2315360853692783,
     "cer": 0.09161064802366227,
     "rtfx": 37.09,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.48695496783416725,
     "cer": 0.23053435114503817,
     "rtfx": 31.82,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.12371499468273661,
     "cer": 0.052076284220239924,
     "rtfx": 71.06,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.23384410393071287,
     "cer": 0.11017180256340332,
     "rtfx": 28.45,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.26512651265126513,
     "cer": 0.1486896414540753,
     "rtfx": 56.31,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.46242064304730696,
     "cer": 0.2710572356910772,
     "rtfx": 20.68,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.12123360510457284,
     "cer": 0.054044909258689634,
     "rtfx": 117.1,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.1938707528314457,
     "cer": 0.07853831469866376,
     "rtfx": 40.7,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.1806930693069307,
     "cer": 0.07454373663533741,
     "rtfx": 106.4,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.42228138439483925,
     "cer": 0.22106973256685827,
     "rtfx": 37.14,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.551176096630642,
     "cer": 0.25966988477109937,
     "rtfx": 18.24,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.43213499633162145,
     "cer": 0.21288261137939798,
     "rtfx": 30.13,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.33764622474299893,
     "cer": 0.1770532143955706,
     "rtfx": 52.43,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5123251165889408,
     "cer": 0.2995636760294519,
     "rtfx": 20.66,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.46012101210121015,
     "cer": 0.26565219553433783,
     "rtfx": 19.1,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7341798074953921,
     "cer": 0.5233691577105724,
     "rtfx": 15.99,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.7527018436109345,
     "cer": 0.4461538461538462,
     "rtfx": 14.81,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6393983859134262,
     "cer": 0.39700809701898987,
     "rtfx": 19.17,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 14.35,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.12300602623183268,
     "cer": 0.052445401414949244,
     "rtfx": 124.79,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.19786808794137242,
     "cer": 0.07226615762203437,
     "rtfx": 46.16,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.16886688668866887,
     "cer": 0.0719081008503655,
     "rtfx": 58.51,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.4140896989555601,
     "cer": 0.2121552945097059,
     "rtfx": 38.41,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.54354736172918,
     "cer": 0.25288072251635,
     "rtfx": 18.54,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.4455245781364637,
     "cer": 0.22519153262408773,
     "rtfx": 40.16,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.2837646224742999,
     "cer": 0.17003998769609352,
     "rtfx": 43.78,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.351765489673551,
     "cer": 0.17862012544314154,
     "rtfx": 46.07,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.28740374037403743,
     "cer": 0.1407827340991596,
     "rtfx": 39.52,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.5424943682162605,
     "cer": 0.33095892693493295,
     "rtfx": 21.62,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.6627463445645264,
     "cer": 0.3583307380878231,
     "rtfx": 24.05,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.6582905355832722,
     "cer": 0.40038488072328526,
     "rtfx": 19.44,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.21782618880299837,
     "cer": 0.11077484047402006,
     "rtfx": 106.19,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.33297966401414675,
     "cer": 0.18458284632938166,
     "rtfx": 38.16,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.08586118251928021,
     "cer": 0.03865036151030974,
     "rtfx": 58.44,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.11608961303462322,
     "cer": 0.03713080168776371,
     "rtfx": 197.91,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.11666666666666667,
     "cer": 0.04368584387682024,
     "rtfx": 153.83,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.34161886551943915,
     "cer": 0.17840676229508196,
     "rtfx": 48.26,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.71,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.2703333295230193,
     "cer": 0.12104910109902743,
     "done": 8,
     "total": 8,
     "ci": [
      0.26352,
      0.27857
     ]
    },
    "codeswitch": {
     "wer": 0.4077588646381212,
     "cer": 0.22462787029743753,
     "done": 2,
     "total": 2,
     "ci": [
      0.3331,
      0.53542
     ]
    },
    "noisy": {
     "wer": 0.30059955125257787,
     "cer": 0.1506899938495827,
     "done": 6,
     "total": 6,
     "ci": [
      0.28194,
      0.32398
     ]
    },
    "telephony": {
     "wer": 0.316898317433342,
     "cer": 0.15012486488500773,
     "done": 6,
     "total": 6,
     "ci": [
      0.30525,
      0.32918
     ]
    },
    "callcenter": {
     "wer": 0.5727287317421504,
     "cer": 0.35146669780712814,
     "done": 6,
     "total": 6,
     "ci": [
      0.54482,
      0.60667
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
   "in_domain": [
    "cv18_ar",
    "masc_clean",
    "masc_noisy",
    "mgb2",
    "sada",
    "casablanca"
   ],
   "notes": "multi-dialect; its card labels every result on these sets in-domain",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 62.93,
   "arena_wer": 0.35840789431985404,
   "arena_cer": 0.18775178403026793,
   "arena_ci": [
    0.34667,
    0.37396
   ],
   "rank_range": [
    3,
    5
   ],
   "rtfx": 40.2,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.43666666666666665,
    "halluc_3plus_ci": [
     0.38169,
     0.49324
    ],
    "inserted_wpm": 62.930473480595325,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.08559059987631416,
      "wer_uncapped": 0.10748299319727891,
      "cer": 0.0418328230723713,
      "av_wer": null,
      "strict_wer": 0.09014467664152344,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027210884353741496
     },
     "cv18_ar/clean": {
      "wer": 0.09996017522899243,
      "wer_uncapped": 0.10015929908403026,
      "cer": 0.034100226691747455,
      "av_wer": null,
      "strict_wer": 0.1073558648111332,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004978096375945838
     },
     "masc_clean/clean": {
      "wer": 0.08987865048673156,
      "wer_uncapped": 0.09014535271369516,
      "cer": 0.034337331379176265,
      "av_wer": null,
      "strict_wer": 0.09981343283582089,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005600746766235498
     },
     "mgb2/clean": {
      "wer": 0.12741184298070526,
      "wer_uncapped": 0.12741184298070526,
      "cer": 0.05694852203723627,
      "av_wer": null,
      "strict_wer": 0.1382633984212713,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011393878908848968
     },
     "sada/clean": {
      "wer": 0.29978557100366604,
      "wer_uncapped": 0.30137649581517606,
      "cer": 0.15820545131276864,
      "av_wer": null,
      "strict_wer": 0.3256538826399241,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.00501002004008016,
      "insertions": 0.03230269073805077
     },
     "casablanca/clean": {
      "wer": 0.3749884377023402,
      "wer_uncapped": 0.37831837942836,
      "cer": 0.16181251693308046,
      "av_wer": null,
      "strict_wer": 0.4074074074074074,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.001006036217303823,
      "insertions": 0.03154194801590972
     },
     "mgb3_egy/clean": {
      "wer": 0.26631604452616126,
      "wer_uncapped": 0.26635880332378387,
      "cer": 0.1460661993558689,
      "av_wer": 0.2975555676480496,
      "strict_wer": 0.2936882149650387,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008323712603868246
     },
     "mgb5_mor/clean": {
      "wer": 0.38643802139852035,
      "wer_uncapped": 0.3919823258662179,
      "cer": 0.2617555221464092,
      "av_wer": null,
      "strict_wer": 0.3955583556163207,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.032249370987107506
     },
     "mixat_cs/clean": {
      "wer": 0.2034741413343861,
      "wer_uncapped": 0.2035530990919858,
      "cer": 0.11240575736806031,
      "av_wer": 0.20096868734104306,
      "strict_wer": 0.2191877436671042,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013738649822345045
     },
     "algerian_cs/clean": {
      "wer": 0.40681362725450904,
      "wer_uncapped": 0.5410821643286573,
      "cer": 0.22669463747213844,
      "av_wer": null,
      "strict_wer": 0.442159383033419,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.16060692814199828
     },
     "masc_noisy/clean": {
      "wer": 0.2076056338028169,
      "wer_uncapped": 0.20943661971830985,
      "cer": 0.09090616345720358,
      "av_wer": null,
      "strict_wer": 0.2294299354114013,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016619718309859154
     },
     "nadi_robust/clean": {
      "wer": 0.46619667389732466,
      "wer_uncapped": 0.4749638467100506,
      "cer": 0.23347510189615453,
      "av_wer": null,
      "strict_wer": 0.4778413152251608,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.04311279826464208
     },
     "fleurs_ar/noisy": {
      "wer": 0.1161427810335642,
      "wer_uncapped": 0.1161427810335642,
      "cer": 0.05279823269513991,
      "av_wer": null,
      "strict_wer": 0.12127130681818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007103534008169064
     },
     "cv18_ar/noisy": {
      "wer": 0.21710086840347362,
      "wer_uncapped": 0.22444889779559118,
      "cer": 0.11359556063326261,
      "av_wer": null,
      "strict_wer": 0.2285143237841439,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024716098864395457
     },
     "mgb2/noisy": {
      "wer": 0.20208963431399504,
      "wer_uncapped": 0.2581798185317569,
      "cer": 0.09979718444285374,
      "av_wer": null,
      "strict_wer": 0.2081958195819582,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.07423700852350838
     },
     "sada/noisy": {
      "wer": 0.4325795644891122,
      "wer_uncapped": 0.4361390284757119,
      "cer": 0.2694890357779876,
      "av_wer": null,
      "strict_wer": 0.45893917673561335,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.029522613065326633
     },
     "fleurs_ar/telephony": {
      "wer": 0.11720831113478956,
      "wer_uncapped": 0.11720831113478956,
      "cer": 0.05659057437407953,
      "av_wer": null,
      "strict_wer": 0.12091619318181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01047771266204937
     },
     "cv18_ar/telephony": {
      "wer": 0.1790247160988644,
      "wer_uncapped": 0.18704074816299265,
      "cer": 0.07801534192916598,
      "av_wer": null,
      "strict_wer": 0.18787475016655564,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018704074816299265
     },
     "mgb2/telephony": {
      "wer": 0.17102007148748968,
      "wer_uncapped": 0.17102007148748968,
      "cer": 0.0722381293247435,
      "av_wer": null,
      "strict_wer": 0.18124312431243125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015947209238383282
     },
     "sada/telephony": {
      "wer": 0.39112227805695143,
      "wer_uncapped": 0.3940536013400335,
      "cer": 0.22064841045011016,
      "av_wer": null,
      "strict_wer": 0.41961908662707353,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.0364321608040201
     },
     "casablanca/telephony": {
      "wer": 0.5073765234124439,
      "wer_uncapped": 0.5137908915971777,
      "cer": 0.26063707890917426,
      "av_wer": null,
      "strict_wer": 0.5432294977749523,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.04682488774855677
     },
     "mgb3_egy/telephony": {
      "wer": 0.3504643360723489,
      "wer_uncapped": 0.3506588223853746,
      "cer": 0.20263545890158496,
      "av_wer": 0.38147651548398726,
      "strict_wer": 0.36443348403890946,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016142363981134826
     },
     "fleurs_ar/callcenter": {
      "wer": 0.32498668087373467,
      "wer_uncapped": 0.33102468478067837,
      "cer": 0.18891752577319587,
      "av_wer": null,
      "strict_wer": 0.330078125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.024507192328183273
     },
     "cv18_ar/callcenter": {
      "wer": 0.4529058116232465,
      "wer_uncapped": 0.5063460253841016,
      "cer": 0.3021054349600131,
      "av_wer": null,
      "strict_wer": 0.4603597601598934,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.08149632598530394
     },
     "mgb2/callcenter": {
      "wer": 0.3942810008248557,
      "wer_uncapped": 0.45064613692603794,
      "cer": 0.23031496062992127,
      "av_wer": null,
      "strict_wer": 0.4042904290429043,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.08331042067638163
     },
     "sada/callcenter": {
      "wer": 0.6293969849246231,
      "wer_uncapped": 0.7208961474036851,
      "cer": 0.4423984891406988,
      "av_wer": null,
      "strict_wer": 0.6453000204792136,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.016666666666666666,
      "insertions": 0.1182998324958124
     },
     "casablanca/callcenter": {
      "wer": 0.7190506735086594,
      "wer_uncapped": 0.7363694676074407,
      "cer": 0.4561912764494691,
      "av_wer": null,
      "strict_wer": 0.7339478703115067,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.04810776138550353
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5810764817425974,
      "wer_uncapped": 0.5840423980162396,
      "cer": 0.40568558791006265,
      "av_wer": 0.6135006776613667,
      "strict_wer": 0.5785724071790657,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021004521806777848
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.11507725093233884,
      "wer_uncapped": 0.11507725093233884,
      "cer": 0.05320324005891016,
      "av_wer": null,
      "strict_wer": 0.12073863636363637,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009589770911028236
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.18370073480293922,
      "wer_uncapped": 0.18904475617902472,
      "cer": 0.07344540558185082,
      "av_wer": null,
      "strict_wer": 0.19253830779480346,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01736806947227789
     },
     "mgb2/telephony_v2": {
      "wer": 0.16002199615067364,
      "wer_uncapped": 0.16002199615067364,
      "cer": 0.07098544500119303,
      "av_wer": null,
      "strict_wer": 0.16886688668866887,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012372834753918064
     },
     "sada/telephony_v2": {
      "wer": 0.38567839195979897,
      "wer_uncapped": 0.3888190954773869,
      "cer": 0.2128318119819536,
      "av_wer": null,
      "strict_wer": 0.4116321933237764,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.045435510887772194
     },
     "casablanca/telephony_v2": {
      "wer": 0.4996792815907633,
      "wer_uncapped": 0.5070558050032072,
      "cer": 0.25521350546176763,
      "av_wer": null,
      "strict_wer": 0.5346471710108074,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04169339320076972
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.33495405260854766,
      "wer_uncapped": 0.36855156318374094,
      "cer": 0.18941208993733874,
      "av_wer": 0.3978618020944401,
      "strict_wer": 0.349317258071882,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05017746876063597
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.2095542532409874,
      "wer_uncapped": 0.28005682827206535,
      "cer": 0.1115979381443299,
      "av_wer": null,
      "strict_wer": 0.2139559659090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.08488723139762032
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.32531730126920505,
      "wer_uncapped": 0.3413493653974616,
      "cer": 0.18475599804145584,
      "av_wer": null,
      "strict_wer": 0.3344437041972019,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03674014696058784
     },
     "mgb2/callcenter_v2": {
      "wer": 0.27302722023645865,
      "wer_uncapped": 0.277426450371185,
      "cer": 0.14280601288475303,
      "av_wer": null,
      "strict_wer": 0.2841034103410341,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026670332691778938
     },
     "sada/callcenter_v2": {
      "wer": 0.5180067001675042,
      "wer_uncapped": 0.5217755443886097,
      "cer": 0.33810722904207324,
      "av_wer": null,
      "strict_wer": 0.5390129019045669,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.032663316582914576
     },
     "casablanca/callcenter_v2": {
      "wer": 0.6270044900577293,
      "wer_uncapped": 0.6350224502886466,
      "cer": 0.3648307997861126,
      "av_wer": null,
      "strict_wer": 0.6513032422123332,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.046183450930083386
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.4978849613458453,
      "wer_uncapped": 0.6036855156318374,
      "cer": 0.32053999262808697,
      "av_wer": 0.6319304923769306,
      "strict_wer": 0.49901813033748915,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.12758302134487284
     },
     "fleurs_ar/sweep": {
      "wer": 0.2075011720581341,
      "wer_uncapped": 0.2137599624941397,
      "cer": 0.11381865736704447,
      "av_wer": null,
      "strict_wer": 0.21099390529770276,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.00044444444444444447,
      "insertions": 0.017651195499296765
     },
     "masc_clean/sweep": {
      "wer": 0.31154413935636255,
      "wer_uncapped": 0.3229997047534691,
      "cer": 0.189303532229096,
      "av_wer": null,
      "strict_wer": 0.3219569702328323,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02787127251254798
     },
     "fleurs_ar/padded": {
      "wer": 0.08131755018013381,
      "wer_uncapped": 0.08131755018013381,
      "cer": 0.0405982905982906,
      "av_wer": null,
      "strict_wer": 0.08594956253216675,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003088008234688626
     },
     "cv18_ar/padded": {
      "wer": 0.11247443762781185,
      "wer_uncapped": 0.11247443762781185,
      "cer": 0.03888888888888889,
      "av_wer": null,
      "strict_wer": 0.12016293279022404,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006134969325153374
     },
     "masc_clean/padded": {
      "wer": 0.10154241645244216,
      "wer_uncapped": 0.10154241645244216,
      "cer": 0.042165242165242166,
      "av_wer": null,
      "strict_wer": 0.11666666666666667,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008997429305912597
     },
     "sada/padded": {
      "wer": 0.31074918566775245,
      "wer_uncapped": 0.3127035830618892,
      "cer": 0.17768860353130017,
      "av_wer": null,
      "strict_wer": 0.3409815168897387,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.031921824104234525
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.18063551870757436,
      "cer": 0.08502082640237629,
      "wer_arith": 0.2162961679004289,
      "done": 8,
      "total": 8,
      "ci": [
       0.17103,
       0.18896
      ]
     },
     "codeswitch": {
      "wer": 0.28770827845013125,
      "cer": 0.15963014256816782,
      "wer_arith": 0.30514388429444755,
      "done": 2,
      "total": 2,
      "ci": [
       0.23681,
       0.34757
      ]
     },
     "noisy": {
      "wer": 0.2148328009349107,
      "cer": 0.10795597715890903,
      "wer_arith": 0.2351036964085924,
      "done": 5,
      "total": 5,
      "ci": [
       0.19918,
       0.2291
      ]
     },
     "telephony": {
      "wer": 0.24539384024775845,
      "cer": 0.11909768484044406,
      "wer_arith": 0.27985195134084356,
      "done": 6,
      "total": 6,
      "ci": [
       0.22985,
       0.25889
      ]
     },
     "callcenter": {
      "wer": 0.3799771119100658,
      "cer": 0.22097250089955262,
      "wer_arith": 0.408465821052955,
      "done": 6,
      "total": 6,
      "ci": [
       0.36268,
       0.39657
      ]
     }
    },
    "arena": 0.22081146904037,
    "arena_arith": 0.2580169982950503,
    "arena_cer": 0.11021508886553891,
    "arena_strict": 0.23583308672991193,
    "zero_shot": 0.3122958484382267,
    "arena_real": 0.20140079520374082,
    "exposure": 0.5658,
    "incomplete": [],
    "boh_share": 0.72,
    "rank": 6,
    "arena_ci": [
     0.20982,
     0.23173
    ],
    "rank_set": [
     5,
     6
    ]
   }
  },
  {
   "model": "lemura-arabic-asr-lite",
   "hf_id": "lemuralabs/lemura-arabic-asr-lite",
   "params_b": 0.11,
   "license": "CC-BY-4.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.09216703731158883,
     "cer": 0.04775413711583924,
     "rtfx": 1853.81,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.08648111332007952,
     "cer": 0.027573677836092048,
     "rtfx": 1849.72,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.07156183368869937,
     "cer": 0.0333842188242949,
     "rtfx": 1625.82,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.14840049854590776,
     "cer": 0.06938546469303566,
     "rtfx": 1992.03,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.3694945114514162,
     "cer": 0.15814927594141395,
     "rtfx": 1801.52,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5506172839506173,
     "cer": 0.23348559059306953,
     "rtfx": 1626.92,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.37619816908993,
     "cer": 0.17964589492107874,
     "rtfx": 2032.41,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.680549070874965,
     "cer": 0.34461234034898364,
     "rtfx": 1798.18,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.43772506654141224,
     "cer": 0.2576760086330482,
     "rtfx": 1954.42,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5574663227285755,
     "cer": 0.31843273081502327,
     "rtfx": 1517.3,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2354675652906487,
     "cer": 0.10037644528098952,
     "rtfx": 1614.07,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6531451036454611,
     "cer": 0.3168926807364167,
     "rtfx": 1645.88,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.13665366891173342,
     "cer": 0.06524146416487235,
     "rtfx": 1872.41,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.22251832111925382,
     "cer": 0.11644395964003272,
     "rtfx": 1735.62,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.22854785478547854,
     "cer": 0.11895171316326023,
     "rtfx": 1926.12,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5037886545156666,
     "cer": 0.28617845538615344,
     "rtfx": 1586.21,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.11981566820276497,
     "cer": 0.060412180867425405,
     "rtfx": 1893.86,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.1518987341772152,
     "cer": 0.05535860376329425,
     "rtfx": 1746.85,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.1773927392739274,
     "cer": 0.08046148490725545,
     "rtfx": 1925.96,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.4587343845996314,
     "cer": 0.21615429475964343,
     "rtfx": 1595.96,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6277813095994914,
     "cer": 0.3095608844596699,
     "rtfx": 1275.43,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.41874541452677916,
     "cer": 0.2083802331070041,
     "rtfx": 1999.93,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.32896136121942576,
     "cer": 0.1721624115656721,
     "rtfx": 1893.47,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.4363757495003331,
     "cer": 0.2639760021816199,
     "rtfx": 1749.79,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3773377337733773,
     "cer": 0.2040877219155602,
     "rtfx": 1885.38,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.6573827565021503,
     "cer": 0.420769807548113,
     "rtfx": 1577.98,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.763191354100445,
     "cer": 0.4786670819059483,
     "rtfx": 1268.59,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6168378576669112,
     "cer": 0.39039976761918593,
     "rtfx": 1864.41,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 1901.81,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.12194257355547679,
     "cer": 0.05958166717932944,
     "rtfx": 647.88,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.13391072618254496,
     "cer": 0.048541041723479686,
     "rtfx": 205.49,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.16804180418041803,
     "cer": 0.07588641901636084,
     "rtfx": 301.99,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.44296539012901903,
     "cer": 0.20565691910355743,
     "rtfx": 364.08,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6115702479338843,
     "cer": 0.3017128620367487,
     "rtfx": 327.37,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.4156272927366104,
     "cer": 0.20358737881703642,
     "rtfx": 396.49,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.21127259836937257,
     "cer": 0.10101507228545063,
     "rtfx": 467.45,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.2931379080612925,
     "cer": 0.14589582765203163,
     "rtfx": 208.97,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.27117711771177117,
     "cer": 0.12984235914267245,
     "rtfx": 388.63,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.5607208683186565,
     "cer": 0.3077980504873782,
     "rtfx": 397.73,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.7031150667514304,
     "cer": 0.3862348178137652,
     "rtfx": 219.44,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.5293470286133529,
     "cer": 0.291674231146291,
     "rtfx": 381.56,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.23595689857109392,
     "cer": 0.13602349843006178,
     "rtfx": 694.0,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.3055702917771883,
     "cer": 0.21360271609061057,
     "rtfx": 301.61,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.09665809768637532,
     "cer": 0.05025439614389003,
     "rtfx": 563.04,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.1425661914460285,
     "cer": 0.05864978902953587,
     "rtfx": 555.6,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.09871794871794871,
     "cer": 0.051802339460491766,
     "rtfx": 395.07,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.4040790312300829,
     "cer": 0.19467213114754098,
     "rtfx": 690.34,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 526.02,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.29693368977915047,
     "cer": 0.13674882503422597,
     "done": 8,
     "total": 8,
     "ci": [
      0.29218,
      0.30191
     ]
    },
    "codeswitch": {
     "wer": 0.49759569463499387,
     "cer": 0.28805436972403575,
     "done": 2,
     "total": 2,
     "ci": [
      0.47575,
      0.51725
     ]
    },
    "noisy": {
     "wer": 0.33002019471137367,
     "cer": 0.16734745306195417,
     "done": 6,
     "total": 6,
     "ci": [
      0.31892,
      0.3403
     ]
    },
    "telephony": {
     "wer": 0.3257280417299682,
     "cer": 0.15505461364404874,
     "done": 6,
     "total": 6,
     "ci": [
      0.31583,
      0.33637
     ]
    },
    "callcenter": {
     "wer": 0.5300144687937738,
     "cer": 0.32167713212268323,
     "done": 6,
     "total": 6,
     "ci": [
      0.51646,
      0.5441
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
   "finetune_of": "nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0",
   "in_domain": [
    "masc_clean",
    "masc_noisy",
    "cv18_ar",
    "fleurs_ar"
   ],
   "notes": "multi-dialect, ~2,900 h undisclosed data on top of the NVIDIA base",
   "training_data": "undisclosed",
   "hallucination_rate": 0.48,
   "inserted_wpm": 7.53,
   "arena_wer": 0.3743378921976565,
   "arena_cer": 0.1971159928470222,
   "arena_ci": [
    0.36987,
    0.3789
   ],
   "rank_range": [
    6,
    6
   ],
   "rtfx": 790.2,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.48,
    "halluc_3plus": 0.09333333333333334,
    "halluc_3plus_ci": [
     0.06536,
     0.13159
    ],
    "inserted_wpm": 7.525019580219335,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.08893011750154607,
      "wer_uncapped": 0.08893011750154607,
      "cer": 0.04865059559031619,
      "av_wer": null,
      "strict_wer": 0.09125757388401137,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003339517625231911
     },
     "cv18_ar/clean": {
      "wer": 0.08084428514536042,
      "wer_uncapped": 0.08084428514536042,
      "cer": 0.0302898760430232,
      "av_wer": null,
      "strict_wer": 0.08588469184890656,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0013938669852648347
     },
     "masc_clean/clean": {
      "wer": 0.06707561008134418,
      "wer_uncapped": 0.06720896119482597,
      "cer": 0.033858762300720845,
      "av_wer": null,
      "strict_wer": 0.0708955223880597,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0029337244965995466
     },
     "mgb2/clean": {
      "wer": 0.14179973386560213,
      "wer_uncapped": 0.14196606786427146,
      "cer": 0.0705155090355404,
      "av_wer": null,
      "strict_wer": 0.14798504362276693,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007401862940785097
     },
     "sada/clean": {
      "wer": 0.34177215189873417,
      "wer_uncapped": 0.34322473542228676,
      "cer": 0.160294143032228,
      "av_wer": null,
      "strict_wer": 0.3671229163843339,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.001002004008016032,
      "insertions": 0.03278688524590164
     },
     "casablanca/clean": {
      "wer": 0.5159559707705115,
      "wer_uncapped": 0.5186384238275831,
      "cer": 0.23618260633974533,
      "av_wer": null,
      "strict_wer": 0.5463191586648377,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023957080751086855
     },
     "mgb3_egy/clean": {
      "wer": 0.2822650760393951,
      "wer_uncapped": 0.2823220877695586,
      "cer": 0.16264310265501097,
      "av_wer": 0.31446103477945825,
      "strict_wer": 0.3091595895732312,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004960020524222859
     },
     "mgb5_mor/clean": {
      "wer": 0.4658447882128826,
      "wer_uncapped": 0.46803170214813616,
      "cer": 0.3171041979877414,
      "av_wer": null,
      "strict_wer": 0.4733957777346253,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018850635190171723
     },
     "mixat_cs/clean": {
      "wer": 0.42238452427951045,
      "wer_uncapped": 0.42250296091591,
      "cer": 0.26286105943405463,
      "av_wer": 0.4152341134810362,
      "strict_wer": 0.43386948259310776,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006316620607974733
     },
     "algerian_cs/clean": {
      "wer": 0.5156026338391068,
      "wer_uncapped": 0.5296306899513312,
      "cer": 0.3118526288186705,
      "av_wer": null,
      "strict_wer": 0.5421308197657813,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02691096478671629
     },
     "masc_noisy/clean": {
      "wer": 0.21943661971830986,
      "wer_uncapped": 0.21985915492957747,
      "cer": 0.10201584336961422,
      "av_wer": null,
      "strict_wer": 0.2343442853131143,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012394366197183098
     },
     "nadi_robust/clean": {
      "wer": 0.6282537960954447,
      "wer_uncapped": 0.6326825741142444,
      "cer": 0.3293017898281056,
      "av_wer": null,
      "strict_wer": 0.6475160829163689,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.023228488792480115
     },
     "fleurs_ar/noisy": {
      "wer": 0.1314153791511277,
      "wer_uncapped": 0.1314153791511277,
      "cer": 0.06752577319587628,
      "av_wer": null,
      "strict_wer": 0.134765625,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005505238856331024
     },
     "cv18_ar/noisy": {
      "wer": 0.21509686038744155,
      "wer_uncapped": 0.21576486305945225,
      "cer": 0.12338828137750939,
      "av_wer": null,
      "strict_wer": 0.22051965356429049,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01002004008016032
     },
     "mgb2/noisy": {
      "wer": 0.22216112180368436,
      "wer_uncapped": 0.22271102557052516,
      "cer": 0.12216654736339776,
      "av_wer": null,
      "strict_wer": 0.22744774477447743,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012097882870497663
     },
     "sada/noisy": {
      "wer": 0.47906197654941374,
      "wer_uncapped": 0.48010887772194305,
      "cer": 0.29131255901794145,
      "av_wer": null,
      "strict_wer": 0.5027646938357567,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019891122278056953
     },
     "fleurs_ar/telephony": {
      "wer": 0.11543242763274729,
      "wer_uncapped": 0.11543242763274729,
      "cer": 0.06163475699558174,
      "av_wer": null,
      "strict_wer": 0.11754261363636363,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004084532054697212
     },
     "cv18_ar/telephony": {
      "wer": 0.14362057448229792,
      "wer_uncapped": 0.14362057448229792,
      "cer": 0.06153092867635058,
      "av_wer": null,
      "strict_wer": 0.15123251165889406,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004008016032064128
     },
     "mgb2/telephony": {
      "wer": 0.1721198790211713,
      "wer_uncapped": 0.1726697827880121,
      "cer": 0.08404915294679075,
      "av_wer": null,
      "strict_wer": 0.17656765676567657,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010173219686554854
     },
     "sada/telephony": {
      "wer": 0.4348827470686767,
      "wer_uncapped": 0.43572026800670016,
      "cer": 0.2257370685132725,
      "av_wer": null,
      "strict_wer": 0.4575056317837395,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02554438860971524
     },
     "casablanca/telephony": {
      "wer": 0.5987812700449006,
      "wer_uncapped": 0.6039127645926876,
      "cer": 0.31846306622870674,
      "av_wer": null,
      "strict_wer": 0.6204704386522568,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02245028864656831
     },
     "mgb3_egy/telephony": {
      "wer": 0.336461321534497,
      "wer_uncapped": 0.336461321534497,
      "cer": 0.19779764098783634,
      "av_wer": 0.36815774199037116,
      "strict_wer": 0.3543864456318217,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009335343025234599
     },
     "fleurs_ar/callcenter": {
      "wer": 0.32463150417332626,
      "wer_uncapped": 0.32463150417332626,
      "cer": 0.1842415316642121,
      "av_wer": null,
      "strict_wer": 0.3274147727272727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00728112235837329
     },
     "cv18_ar/callcenter": {
      "wer": 0.42150968603874417,
      "wer_uncapped": 0.4248496993987976,
      "cer": 0.2769707850497797,
      "av_wer": null,
      "strict_wer": 0.43104596935376416,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014696058784235137
     },
     "mgb2/callcenter": {
      "wer": 0.37145999450096234,
      "wer_uncapped": 0.37145999450096234,
      "cer": 0.21546170365068004,
      "av_wer": null,
      "strict_wer": 0.37706270627062705,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014297497937860875
     },
     "sada/callcenter": {
      "wer": 0.6411222780569514,
      "wer_uncapped": 0.6415410385259631,
      "cer": 0.43620816283705804,
      "av_wer": null,
      "strict_wer": 0.6561540036862584,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01256281407035176
     },
     "casablanca/callcenter": {
      "wer": 0.7472738935214881,
      "wer_uncapped": 0.7508017960230917,
      "cer": 0.4975937667099534,
      "av_wer": null,
      "strict_wer": 0.7568340750158932,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0163566388710712
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5525356153060729,
      "wer_uncapped": 0.5525356153060729,
      "cer": 0.3942130482860302,
      "av_wer": 0.5847667023801402,
      "strict_wer": 0.556971274603827,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006807020955900228
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.11703072278458533,
      "wer_uncapped": 0.11703072278458533,
      "cer": 0.060824742268041236,
      "av_wer": null,
      "strict_wer": 0.11949573863636363,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003906943704492985
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.12625250501002003,
      "wer_uncapped": 0.12692050768203073,
      "cer": 0.05239105598172025,
      "av_wer": null,
      "strict_wer": 0.13257828114590273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0033400133600534404
     },
     "mgb2/telephony_v2": {
      "wer": 0.16029694803409403,
      "wer_uncapped": 0.16084685180093483,
      "cer": 0.07856120257695061,
      "av_wer": null,
      "strict_wer": 0.16694169416941695,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01154797910365686
     },
     "sada/telephony_v2": {
      "wer": 0.41499162479061974,
      "wer_uncapped": 0.41561976549413737,
      "cer": 0.21367117826041337,
      "av_wer": null,
      "strict_wer": 0.44214622158509115,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025753768844221106
     },
     "casablanca/telephony_v2": {
      "wer": 0.5833867864015394,
      "wer_uncapped": 0.5878768441308531,
      "cer": 0.30746314261706514,
      "av_wer": null,
      "strict_wer": 0.6055308328035601,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025336754329698525
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.3308212184567511,
      "wer_uncapped": 0.3308212184567511,
      "cer": 0.1935127165499447,
      "av_wer": 0.3631033332329938,
      "strict_wer": 0.34963693656665296,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008362911460105996
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.2056473095364944,
      "wer_uncapped": 0.2056473095364944,
      "cer": 0.10677466863033873,
      "av_wer": null,
      "strict_wer": 0.20933948863636365,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006925945657964837
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.28256513026052105,
      "wer_uncapped": 0.2859051436205745,
      "cer": 0.15717316794516076,
      "av_wer": null,
      "strict_wer": 0.28780812791472354,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01603206412825651
     },
     "mgb2/callcenter_v2": {
      "wer": 0.26285400054990377,
      "wer_uncapped": 0.26367885620016496,
      "cer": 0.13606537819136244,
      "av_wer": null,
      "strict_wer": 0.2687018701870187,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01182293098707726
     },
     "sada/callcenter_v2": {
      "wer": 0.5433417085427136,
      "wer_uncapped": 0.5443886097152428,
      "cer": 0.3225789528905676,
      "av_wer": null,
      "strict_wer": 0.5592873233667827,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02198492462311558
     },
     "casablanca/callcenter_v2": {
      "wer": 0.6763951250801796,
      "wer_uncapped": 0.6812059012187299,
      "cer": 0.39989305629822014,
      "av_wer": null,
      "strict_wer": 0.6967577876668786,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024374599101988453
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.45626489035834106,
      "wer_uncapped": 0.45626489035834106,
      "cer": 0.29192775525248804,
      "av_wer": 0.4846583341079598,
      "strict_wer": 0.46545188838653695,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007973938834054553
     },
     "fleurs_ar/sweep": {
      "wer": 0.2317862165963432,
      "wer_uncapped": 0.2317862165963432,
      "cer": 0.14235687300203428,
      "av_wer": null,
      "strict_wer": 0.23537271448663855,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004219409282700422
     },
     "masc_clean/sweep": {
      "wer": 0.30097431355181575,
      "wer_uncapped": 0.3013286093888397,
      "cer": 0.2188119470498237,
      "av_wer": null,
      "strict_wer": 0.3048040082522841,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007026867434307647
     },
     "fleurs_ar/padded": {
      "wer": 0.09161091096242924,
      "wer_uncapped": 0.09161091096242924,
      "cer": 0.05245726495726496,
      "av_wer": null,
      "strict_wer": 0.0957282552753474,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002058672156459084
     },
     "cv18_ar/padded": {
      "wer": 0.12883435582822086,
      "wer_uncapped": 0.12883435582822086,
      "cer": 0.0601010101010101,
      "av_wer": null,
      "strict_wer": 0.14052953156822812,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0
     },
     "masc_clean/padded": {
      "wer": 0.09640102827763496,
      "wer_uncapped": 0.09640102827763496,
      "cer": 0.05441595441595442,
      "av_wer": null,
      "strict_wer": 0.09871794871794871,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007712082262210797
     },
     "sada/padded": {
      "wer": 0.3713355048859935,
      "wer_uncapped": 0.3719869706840391,
      "cer": 0.1942215088282504,
      "av_wer": null,
      "strict_wer": 0.40344168260038243,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024104234527687295
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.18837499022691975,
      "cer": 0.09541531173058657,
      "wer_arith": 0.248060966689422,
      "done": 8,
      "total": 8,
      "ci": [
       0.17854,
       0.19694
      ]
     },
     "codeswitch": {
      "wer": 0.46667180460297114,
      "cer": 0.28631086671408534,
      "wer_arith": 0.4689935790593086,
      "done": 2,
      "total": 2,
      "ci": [
       0.39795,
       0.55697
      ]
     },
     "noisy": {
      "wer": 0.2311691233298587,
      "cer": 0.12477986824104464,
      "wer_arith": 0.2534343915219955,
      "done": 5,
      "total": 5,
      "ci": [
       0.21354,
       0.24598
      ]
     },
     "telephony": {
      "wer": 0.23970425152415,
      "cer": 0.12128274321878398,
      "wer_arith": 0.2887966342462682,
      "done": 6,
      "total": 6,
      "ci": [
       0.22497,
       0.25184
      ]
     },
     "callcenter": {
      "wer": 0.3698915916276685,
      "cer": 0.21009139196393753,
      "wer_arith": 0.4045113607213589,
      "done": 6,
      "total": 6,
      "ci": [
       0.35336,
       0.38425
      ]
     }
    },
    "arena": 0.24390901326819098,
    "arena_arith": 0.3017254784286693,
    "arena_cer": 0.12983061577084215,
    "arena_strict": 0.2549784906882637,
    "zero_shot": 0.41303636817756684,
    "arena_real": 0.23166306994193803,
    "exposure": 0.3442,
    "incomplete": [],
    "boh_share": 0.03666666666666667,
    "rank": 7,
    "arena_ci": [
     0.2321,
     0.25501
    ],
    "rank_set": [
     7,
     8
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
    "fleurs_ar/clean": {
     "wer": 0.0715344699777613,
     "cer": 0.028562217923920052,
     "rtfx": 312.63,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.07157057654075547,
     "cer": 0.02208316511909568,
     "rtfx": 284.57,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.05690298507462686,
     "cer": 0.028654370729998248,
     "rtfx": 294.8,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.1312837557125052,
     "cer": 0.06409245328803688,
     "rtfx": 319.33,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4971540859195013,
     "cer": 0.35060694159306666,
     "rtfx": 170.45,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5519890260631002,
     "cer": 0.2757323941078275,
     "rtfx": 216.09,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3287560581583199,
     "cer": 0.18122538713567624,
     "rtfx": 259.61,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7668316369408908,
     "cer": 0.4859147328656233,
     "rtfx": 145.36,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.4945201189917019,
     "cer": 0.3304976605699702,
     "rtfx": 355.34,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6067641157924907,
     "cer": 0.39593029548652453,
     "rtfx": 173.87,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.17663577646728448,
     "cer": 0.0754503898897553,
     "rtfx": 298.67,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6971050750536097,
     "cer": 0.40088010776829813,
     "rtfx": 182.94,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.08631690889755406,
     "cer": 0.03491233466625654,
     "rtfx": 325.07,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.16522318454363757,
     "cer": 0.07703845104990456,
     "rtfx": 300.65,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.1696919691969197,
     "cer": 0.0805112138843304,
     "rtfx": 327.81,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6264591439688716,
     "cer": 0.4279763392485212,
     "rtfx": 203.83,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.08507621410847217,
     "cer": 0.03405106121193479,
     "rtfx": 330.31,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.12258494337108594,
     "cer": 0.044314153258794654,
     "rtfx": 278.81,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.1685918591859186,
     "cer": 0.08245064399025312,
     "rtfx": 328.29,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.7001843129223838,
     "cer": 0.46954927934682994,
     "rtfx": 222.33,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6179275270184361,
     "cer": 0.360759887885394,
     "rtfx": 136.89,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.3897652237710932,
     "cer": 0.24370937874441742,
     "rtfx": 211.73,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.2141084721729883,
     "cer": 0.09892340818209781,
     "rtfx": 326.57,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.3990672884743504,
     "cer": 0.23084265066812107,
     "rtfx": 246.48,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3234323432343234,
     "cer": 0.1731065691978716,
     "rtfx": 341.38,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8613557239402007,
     "cer": 0.6101807881362993,
     "rtfx": 174.45,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.7965670692943421,
     "cer": 0.5535970102771722,
     "rtfx": 88.14,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.5772193690388848,
     "cer": 0.3944301223630224,
     "rtfx": 192.58,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 178.73,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.08684863523573201,
     "cer": 0.03386650261458013,
     "rtfx": 301.99,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.12724850099933377,
     "cer": 0.0482683392418871,
     "rtfx": 270.56,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.1586908690869087,
     "cer": 0.08135660649460441,
     "rtfx": 308.18,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.6278926889207455,
     "cer": 0.43501624593851534,
     "rtfx": 185.71,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6106166560712015,
     "cer": 0.35590158829025226,
     "rtfx": 90.49,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.38573000733675716,
     "cer": 0.21241058785084058,
     "rtfx": 303.22,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.13505848989719957,
     "cer": 0.05622885266071978,
     "rtfx": 306.25,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.23650899400399733,
     "cer": 0.10635396782110718,
     "rtfx": 291.19,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.2403740374037404,
     "cer": 0.13028991993634692,
     "rtfx": 271.94,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.7583452795412656,
     "cer": 0.5808964425560277,
     "rtfx": 160.74,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.8184996821360457,
     "cer": 0.4251012145748988,
     "rtfx": 137.44,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.4976155539251651,
     "cer": 0.32475218764750735,
     "rtfx": 203.9,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.14300773014757553,
     "cer": 0.05874202370100273,
     "rtfx": 362.29,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.22133804892425582,
     "cer": 0.13232036511381978,
     "rtfx": 298.98,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.1012853470437018,
     "cer": 0.049718825314647865,
     "rtfx": 333.14,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.1710794297352342,
     "cer": 0.09282700421940929,
     "rtfx": 329.73,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.15,
     "cer": 0.10623060396275961,
     "rtfx": 343.21,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.6048438495857233,
     "cer": 0.4886014344262295,
     "rtfx": 214.02,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 258.59,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3095028242984326,
     "cer": 0.17960895784540556,
     "done": 8,
     "total": 8,
     "ci": [
      0.29992,
      0.32003
     ]
    },
    "codeswitch": {
     "wer": 0.5506421173920963,
     "cer": 0.3632139780282474,
     "done": 2,
     "total": 2,
     "ci": [
      0.50636,
      0.60385
     ]
    },
    "noisy": {
     "wer": 0.3202386763546462,
     "cer": 0.182794806084511,
     "done": 6,
     "total": 6,
     "ci": [
      0.30295,
      0.33888
     ]
    },
    "telephony": {
     "wer": 0.3473550133962316,
     "cer": 0.2058057340729373,
     "done": 6,
     "total": 6,
     "ci": [
      0.32518,
      0.37445
     ]
    },
    "callcenter": {
     "wer": 0.5286250443591817,
     "cer": 0.3435134248040974,
     "done": 6,
     "total": 6,
     "ci": [
      0.49663,
      0.56899
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
   "hallucination_rate": 0.9966666666666667,
   "inserted_wpm": 48.52,
   "arena_wer": 0.38662201324794065,
   "arena_cer": 0.23646758573680027,
   "arena_ci": [
    0.37545,
    0.39834
   ],
   "rank_range": [
    7,
    8
   ],
   "rtfx": 254.1,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.9966666666666667,
    "halluc_3plus": 0.66,
    "halluc_3plus_ci": [
     0.60467,
     0.71128
    ],
    "inserted_wpm": 48.5241675585825,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.0658008658008658,
      "wer_uncapped": 0.0658008658008658,
      "cer": 0.028608917131904603,
      "av_wer": null,
      "strict_wer": 0.06924693953258315,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0027210884353741495
     },
     "cv18_ar/clean": {
      "wer": 0.06750298685782556,
      "wer_uncapped": 0.06750298685782556,
      "cer": 0.023344426759272657,
      "av_wer": null,
      "strict_wer": 0.07137176938369781,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0017921146953405018
     },
     "masc_clean/clean": {
      "wer": 0.05347379650620083,
      "wer_uncapped": 0.05347379650620083,
      "cer": 0.028265486196273143,
      "av_wer": null,
      "strict_wer": 0.05690298507462686,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002800373383117749
     },
     "mgb2/clean": {
      "wer": 0.11976047904191617,
      "wer_uncapped": 0.11976047904191617,
      "cer": 0.06267437407684312,
      "av_wer": null,
      "strict_wer": 0.1309513917739925,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0065701929474384566
     },
     "sada/clean": {
      "wer": 0.4287196513799543,
      "wer_uncapped": 0.4708445735629799,
      "cer": 0.2713227805492741,
      "av_wer": null,
      "strict_wer": 0.4567014500609839,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.01603206412825651,
      "insertions": 0.06502040533997372
     },
     "casablanca/clean": {
      "wer": 0.5013412265285357,
      "wer_uncapped": 0.520303394690593,
      "cer": 0.2485550438002348,
      "av_wer": null,
      "strict_wer": 0.5311385459533607,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.009054325955734407,
      "insertions": 0.04264175376930904
     },
     "mgb3_egy/clean": {
      "wer": 0.2170864155299953,
      "wer_uncapped": 0.22673565086016448,
      "cer": 0.14365747381525887,
      "av_wer": 0.2596746623273306,
      "strict_wer": 0.25117207383395396,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.007,
      "insertions": 0.015222131953649463
     },
     "mgb5_mor/clean": {
      "wer": 0.530790151633493,
      "wer_uncapped": 0.5641329795882273,
      "cer": 0.3749508500057824,
      "av_wer": null,
      "strict_wer": 0.5343928591197918,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.011,
      "insertions": 0.04989874020927809
     },
     "mixat_cs/clean": {
      "wer": 0.4767864192656929,
      "wer_uncapped": 0.4767864192656929,
      "cer": 0.3355331440321159,
      "av_wer": 0.47462762189410024,
      "strict_wer": 0.4870403385380953,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.004,
      "insertions": 0.00986971969996052
     },
     "algerian_cs/clean": {
      "wer": 0.49556255367878616,
      "wer_uncapped": 0.5777268823361008,
      "cer": 0.3191294086796906,
      "av_wer": null,
      "strict_wer": 0.5238503284775778,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.012658227848101266,
      "insertions": 0.09762381906670484
     },
     "masc_noisy/clean": {
      "wer": 0.15971830985915492,
      "wer_uncapped": 0.16042253521126762,
      "cer": 0.07557802537515296,
      "av_wer": null,
      "strict_wer": 0.17565290648694187,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013661971830985916
     },
     "nadi_robust/clean": {
      "wer": 0.64352856109906,
      "wer_uncapped": 0.6806760665220535,
      "cer": 0.37072479177742335,
      "av_wer": null,
      "strict_wer": 0.660650464617584,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.015,
      "insertions": 0.057393347794649316
     },
     "fleurs_ar/noisy": {
      "wer": 0.07955958089149352,
      "wer_uncapped": 0.07955958089149352,
      "cer": 0.03549337260677467,
      "av_wer": null,
      "strict_wer": 0.08380681818181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0037293553542887587
     },
     "cv18_ar/noisy": {
      "wer": 0.15430861723446893,
      "wer_uncapped": 0.16032064128256512,
      "cer": 0.07932103802839889,
      "av_wer": null,
      "strict_wer": 0.15856095936042638,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012024048096192385
     },
     "mgb2/noisy": {
      "wer": 0.15892218861699203,
      "wer_uncapped": 0.16029694803409403,
      "cer": 0.08136482939632546,
      "av_wer": null,
      "strict_wer": 0.16831683168316833,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01182293098707726
     },
     "sada/noisy": {
      "wer": 0.5358040201005025,
      "wer_uncapped": 0.6067839195979899,
      "cer": 0.37440982058545796,
      "av_wer": null,
      "strict_wer": 0.5580585705508908,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.04666666666666667,
      "insertions": 0.09066164154103852
     },
     "fleurs_ar/telephony": {
      "wer": 0.07849405079026815,
      "wer_uncapped": 0.07849405079026815,
      "cer": 0.033910162002945506,
      "av_wer": null,
      "strict_wer": 0.08185369318181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003019001953471852
     },
     "cv18_ar/telephony": {
      "wer": 0.11823647294589178,
      "wer_uncapped": 0.12024048096192384,
      "cer": 0.04716827158478864,
      "av_wer": null,
      "strict_wer": 0.12058627581612258,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006012024048096192
     },
     "mgb2/telephony": {
      "wer": 0.16277151498487766,
      "wer_uncapped": 0.16277151498487766,
      "cer": 0.08279646862324028,
      "av_wer": null,
      "strict_wer": 0.1685918591859186,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0074237008523508384
     },
     "sada/telephony": {
      "wer": 0.5887772194304858,
      "wer_uncapped": 0.6882328308207705,
      "cer": 0.41239114468576227,
      "av_wer": null,
      "strict_wer": 0.6067990989146017,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.04,
      "insertions": 0.11536850921273031
     },
     "casablanca/telephony": {
      "wer": 0.567350865939705,
      "wer_uncapped": 0.5949326491340603,
      "cer": 0.3221297074325873,
      "av_wer": null,
      "strict_wer": 0.5886840432294977,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.04810776138550353
     },
     "mgb3_egy/telephony": {
      "wer": 0.29722370788155783,
      "wer_uncapped": 0.29775854524237855,
      "cer": 0.20074640619240694,
      "av_wer": 0.33052031246793095,
      "strict_wer": 0.3240626569849751,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.006223562016823066
     },
     "fleurs_ar/callcenter": {
      "wer": 0.20902148819037472,
      "wer_uncapped": 0.20902148819037472,
      "cer": 0.10511782032400589,
      "av_wer": null,
      "strict_wer": 0.21147017045454544,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008524240809802876
     },
     "cv18_ar/callcenter": {
      "wer": 0.31462925851703405,
      "wer_uncapped": 0.3921175684702739,
      "cer": 0.1906316304880039,
      "av_wer": null,
      "strict_wer": 0.3217854763491006,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.09151636606546426
     },
     "mgb2/callcenter": {
      "wer": 0.310970580148474,
      "wer_uncapped": 0.31509485839978,
      "cer": 0.17788117394416608,
      "av_wer": null,
      "strict_wer": 0.3193069306930693,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02117129502337091
     },
     "sada/callcenter": {
      "wer": 0.711892797319933,
      "wer_uncapped": 0.8448492462311558,
      "cer": 0.5262301962018676,
      "av_wer": null,
      "strict_wer": 0.7298791726397706,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.07,
      "insertions": 0.14321608040201006
     },
     "casablanca/callcenter": {
      "wer": 0.7132777421423989,
      "wer_uncapped": 0.7787042976266838,
      "cer": 0.4595523642196929,
      "av_wer": null,
      "strict_wer": 0.731404958677686,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.010135135135135136,
      "insertions": 0.08466966003848621
     },
     "mgb3_egy/callcenter": {
      "wer": 0.48592405309476344,
      "wer_uncapped": 0.5048864686147713,
      "cer": 0.3419185403612237,
      "av_wer": 0.5326921695456739,
      "strict_wer": 0.5001141708909896,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.016666666666666666,
      "insertions": 0.02839500170175524
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.08026993429231043,
      "wer_uncapped": 0.08026993429231043,
      "cer": 0.033910162002945506,
      "av_wer": null,
      "strict_wer": 0.08327414772727272,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0033741786538803056
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.12090848363393454,
      "wer_uncapped": 0.1229124916499666,
      "cer": 0.050922147870083236,
      "av_wer": null,
      "strict_wer": 0.1252498334443704,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006012024048096192
     },
     "mgb2/telephony_v2": {
      "wer": 0.1509485839978004,
      "wer_uncapped": 0.1509485839978004,
      "cer": 0.08094726795514197,
      "av_wer": null,
      "strict_wer": 0.1586908690869087,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006873797085510036
     },
     "sada/telephony_v2": {
      "wer": 0.5678391959798995,
      "wer_uncapped": 0.6105527638190955,
      "cer": 0.390252859091386,
      "av_wer": null,
      "strict_wer": 0.5871390538603317,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.043333333333333335,
      "insertions": 0.05757956448911223
     },
     "casablanca/telephony_v2": {
      "wer": 0.5516356638871072,
      "wer_uncapped": 0.5756895445798589,
      "cer": 0.3047895500725689,
      "av_wer": null,
      "strict_wer": 0.5829624920534011,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.010135135135135136,
      "insertions": 0.04682488774855677
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.2948898721252492,
      "wer_uncapped": 0.2956191957990956,
      "cer": 0.19521747143383708,
      "av_wer": 0.32716662185800327,
      "strict_wer": 0.3202265150477234,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006029075703797345
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.12981708399928965,
      "wer_uncapped": 0.12981708399928965,
      "cer": 0.059278350515463915,
      "av_wer": null,
      "strict_wer": 0.13299005681818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005860415556739478
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.21509686038744155,
      "wer_uncapped": 0.23112892451569805,
      "cer": 0.11049453239758446,
      "av_wer": null,
      "strict_wer": 0.21852098600932712,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02738810955243821
     },
     "mgb2/callcenter_v2": {
      "wer": 0.22133626615342314,
      "wer_uncapped": 0.23508386032444323,
      "cer": 0.11793128131710809,
      "av_wer": null,
      "strict_wer": 0.22634763476347636,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02309595820731372
     },
     "sada/callcenter_v2": {
      "wer": 0.6553601340033501,
      "wer_uncapped": 0.7464405360134003,
      "cer": 0.46752701710208794,
      "av_wer": null,
      "strict_wer": 0.6729469588367807,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.04666666666666667,
      "insertions": 0.10406197654941374
     },
     "casablanca/callcenter_v2": {
      "wer": 0.6353431686978832,
      "wer_uncapped": 0.7992302758178319,
      "cer": 0.37346268428691465,
      "av_wer": null,
      "strict_wer": 0.6535282898919262,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.016891891891891893,
      "insertions": 0.1892238614496472
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.41868041036612047,
      "wer_uncapped": 0.41931249088345407,
      "cer": 0.2926649465536307,
      "av_wer": 0.4495508008756115,
      "strict_wer": 0.43786820112344155,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009140856712208878
     },
     "fleurs_ar/sweep": {
      "wer": 0.1369901547116737,
      "wer_uncapped": 0.1371542428504454,
      "cer": 0.06333430204397947,
      "av_wer": null,
      "strict_wer": 0.14142053445850913,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006258790436005626
     },
     "masc_clean/sweep": {
      "wer": 0.20661352229111307,
      "wer_uncapped": 0.21718334809565987,
      "cer": 0.12713363932681435,
      "av_wer": null,
      "strict_wer": 0.21084585912172119,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0008888888888888889,
      "insertions": 0.023265426631237082
     },
     "fleurs_ar/padded": {
      "wer": 0.07462686567164178,
      "wer_uncapped": 0.09264024704065878,
      "cer": 0.03878205128205128,
      "av_wer": null,
      "strict_wer": 0.08131755018013381,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022645393721049924
     },
     "cv18_ar/padded": {
      "wer": 0.10633946830265849,
      "wer_uncapped": 0.1574642126789366,
      "cer": 0.04898989898989899,
      "av_wer": null,
      "strict_wer": 0.12016293279022404,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.05112474437627812
     },
     "masc_clean/padded": {
      "wer": 0.12982005141388175,
      "wer_uncapped": 0.14524421593830333,
      "cer": 0.09601139601139601,
      "av_wer": null,
      "strict_wer": 0.1346153846153846,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.033419023136246784
     },
     "sada/padded": {
      "wer": 0.5218241042345277,
      "wer_uncapped": 0.5811074918566775,
      "cer": 0.4027287319422151,
      "av_wer": null,
      "strict_wer": 0.5493945188017846,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.05,
      "insertions": 0.0755700325732899
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.17020955329795728,
      "cer": 0.08998193193020265,
      "wer_arith": 0.24805944665984833,
      "done": 8,
      "total": 8,
      "ci": [
       0.15945,
       0.18013
      ]
     },
     "codeswitch": {
      "wer": 0.4860838358664801,
      "cer": 0.3272285040264778,
      "wer_arith": 0.4861744864722395,
      "done": 2,
      "total": 2,
      "ci": [
       0.44954,
       0.53525
      ]
     },
     "noisy": {
      "wer": 0.17560043015728155,
      "cer": 0.09169444571312643,
      "wer_arith": 0.2176625433405224,
      "done": 5,
      "total": 5,
      "ci": [
       0.16021,
       0.18877
      ]
     },
     "telephony": {
      "wer": 0.2265840738760463,
      "cer": 0.12167945911998171,
      "wer_arith": 0.2944152889860502,
      "done": 6,
      "total": 6,
      "ci": [
       0.21023,
       0.24105
      ]
     },
     "callcenter": {
      "wer": 0.3201829887733251,
      "cer": 0.18452211559634188,
      "wer_arith": 0.3792723206012513,
      "done": 6,
      "total": 6,
      "ci": [
       0.30061,
       0.33551
      ]
     }
    },
    "arena": 0.21940182851946244,
    "arena_arith": 0.2969740387605686,
    "arena_cer": 0.12127836954562335,
    "arena_strict": 0.23175000630423337,
    "zero_shot": 0.4057496705112502,
    "arena_real": 0.21394052873160002,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.2,
    "rank": 5,
    "arena_ci": [
     0.20828,
     0.22985
    ],
    "rank_set": [
     5,
     6
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
    "fleurs_ar/clean": {
     "wer": 0.08907832962688411,
     "cer": 0.03500967117988395,
     "rtfx": 151.88,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.14970178926441352,
     "cer": 0.044529672991522,
     "rtfx": 122.22,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.11273987206823027,
     "cer": 0.033659500988513225,
     "rtfx": 110.89,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.1597008724553386,
     "cer": 0.059193763649599614,
     "rtfx": 139.63,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.41746849166553734,
     "cer": 0.18719429020213016,
     "rtfx": 72.11,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.590032007315958,
     "cer": 0.24346486159264763,
     "rtfx": 71.89,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3635971997845988,
     "cer": 0.15077747302590153,
     "rtfx": 118.74,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7569334204874405,
     "cer": 0.36143191221442705,
     "rtfx": 95.45,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.21003601064662597,
     "cer": 0.08451092521700773,
     "rtfx": 121.76,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5631986242476354,
     "cer": 0.2925100119060504,
     "rtfx": 36.64,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2441729851165403,
     "cer": 0.08779241731648292,
     "rtfx": 99.33,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.697373123659757,
     "cer": 0.3390929501571621,
     "rtfx": 90.16,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.12318326834455867,
     "cer": 0.049707782220855125,
     "rtfx": 146.04,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.2698201199200533,
     "cer": 0.11658031088082901,
     "rtfx": 115.8,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.22414741474147415,
     "cer": 0.09433586951116416,
     "rtfx": 131.68,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5699365144378455,
     "cer": 0.3078397067399817,
     "rtfx": 57.92,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.130450194966324,
     "cer": 0.0539526299600123,
     "rtfx": 140.3,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.23051299133910727,
     "cer": 0.08944641396236706,
     "rtfx": 112.59,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.21012101210121012,
     "cer": 0.0834949525088269,
     "rtfx": 130.4,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5234486995699366,
     "cer": 0.2571857035741065,
     "rtfx": 59.93,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6929434202161475,
     "cer": 0.33528495795702273,
     "rtfx": 36.8,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4433235509904622,
     "cer": 0.2063105914817908,
     "rtfx": 103.66,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.32435306628855015,
     "cer": 0.16481082743771147,
     "rtfx": 108.71,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5216522318454364,
     "cer": 0.27924734115080446,
     "rtfx": 49.51,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.42024202420242024,
     "cer": 0.21134815256850167,
     "rtfx": 42.93,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7306983411836986,
     "cer": 0.4594268099641756,
     "rtfx": 32.81,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.821360457724094,
     "cer": 0.49087511678604795,
     "rtfx": 26.34,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6351797505502568,
     "cer": 0.3693039468428888,
     "rtfx": 47.16,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 19.41,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.12300602623183268,
     "cer": 0.050322977545370656,
     "rtfx": 149.49,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.22318454363757495,
     "cer": 0.08140169075538588,
     "rtfx": 124.81,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.1916941694169417,
     "cer": 0.07394698891043812,
     "rtfx": 71.27,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.500307188203973,
     "cer": 0.24318920269932517,
     "rtfx": 62.02,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6811824539097266,
     "cer": 0.32369978199937716,
     "rtfx": 39.2,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.4356199559794571,
     "cer": 0.20129988017864275,
     "rtfx": 112.67,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.20471464019851116,
     "cer": 0.09437096278068287,
     "rtfx": 147.55,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.3770819453697535,
     "cer": 0.17589310062721572,
     "rtfx": 99.66,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.3201320132013201,
     "cer": 0.14575563180665374,
     "rtfx": 121.95,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.6215441327053041,
     "cer": 0.3419978338748646,
     "rtfx": 42.5,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.7851239669421488,
     "cer": 0.42665836188103395,
     "rtfx": 39.45,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.5552090975788702,
     "cer": 0.28778911441124144,
     "rtfx": 47.14,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.20323260716795502,
     "cer": 0.09332523042641548,
     "rtfx": 138.44,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.36640141467727677,
     "cer": 0.20980686814715868,
     "rtfx": 63.43,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.0884318766066838,
     "cer": 0.030349013657056147,
     "rtfx": 152.06,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.15478615071283094,
     "cer": 0.04472573839662447,
     "rtfx": 253.91,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.1282051282051282,
     "cer": 0.040582477918357604,
     "rtfx": 172.27,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.41045251752708733,
     "cer": 0.1786629098360656,
     "rtfx": 106.55,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 28.75,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.32990649783355014,
     "cer": 0.13940764323057814,
     "done": 8,
     "total": 8,
     "ci": [
      0.32507,
      0.33501
     ]
    },
    "codeswitch": {
     "wer": 0.3866173174471307,
     "cer": 0.1885104685615291,
     "done": 2,
     "total": 2,
     "ci": [
      0.35826,
      0.41838
     ]
    },
    "noisy": {
     "wer": 0.3547722377033715,
     "cer": 0.16589150613774584,
     "done": 6,
     "total": 6,
     "ci": [
      0.34085,
      0.37006
     ]
    },
    "telephony": {
     "wer": 0.37179997819719796,
     "cer": 0.17094587490735438,
     "done": 6,
     "total": 6,
     "ci": [
      0.36044,
      0.38352
     ]
    },
    "callcenter": {
     "wer": 0.5755809786324094,
     "cer": 0.32916869912502167,
     "done": 6,
     "total": 6,
     "ci": [
      0.55851,
      0.59467
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
   "inserted_wpm": 40.2,
   "arena_wer": 0.39682103300788285,
   "arena_cer": 0.19255036271399234,
   "arena_ci": [
    0.39113,
    0.40282
   ],
   "rank_range": [
    7,
    8
   ],
   "rtfx": 75.5,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.9966666666666667,
    "halluc_3plus": 0.37333333333333335,
    "halluc_3plus_ci": [
     0.32052,
     0.42935
    ],
    "inserted_wpm": 40.20003085480005,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.08410636982065553,
      "wer_uncapped": 0.08410636982065553,
      "cer": 0.03604414829298413,
      "av_wer": null,
      "strict_wer": 0.08915543464820082,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006926406926406926
     },
     "cv18_ar/clean": {
      "wer": 0.14038231780167265,
      "wer_uncapped": 0.14157706093189965,
      "cer": 0.045772440071383785,
      "av_wer": null,
      "strict_wer": 0.14791252485089462,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006371963361210673
     },
     "masc_clean/clean": {
      "wer": 0.1040138685158021,
      "wer_uncapped": 0.1042805707427657,
      "cer": 0.034098046839948555,
      "av_wer": null,
      "strict_wer": 0.11234008528784648,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006400853447126284
     },
     "mgb2/clean": {
      "wer": 0.14496007984031936,
      "wer_uncapped": 0.14496007984031936,
      "cer": 0.0590638049563267,
      "av_wer": null,
      "strict_wer": 0.15978396343996676,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014637391882900865
     },
     "sada/clean": {
      "wer": 0.3897074081759701,
      "wer_uncapped": 0.39406515874662795,
      "cer": 0.182078679808738,
      "av_wer": null,
      "strict_wer": 0.41319962054478926,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.0070140280561122245,
      "insertions": 0.03444698070139033
     },
     "casablanca/clean": {
      "wer": 0.5551752844325224,
      "wer_uncapped": 0.5598002034964388,
      "cer": 0.2365212679490653,
      "av_wer": null,
      "strict_wer": 0.5843621399176955,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.001006036217303823,
      "insertions": 0.03468689297937286
     },
     "mgb3_egy/clean": {
      "wer": 0.290189706532119,
      "wer_uncapped": 0.290189706532119,
      "cer": 0.14812308858155837,
      "av_wer": 0.32215866051160114,
      "strict_wer": 0.29394272242612585,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.016704436937899973
     },
     "mgb5_mor/clean": {
      "wer": 0.5746825620027655,
      "wer_uncapped": 0.5819671589593212,
      "cer": 0.33775876026367524,
      "av_wer": null,
      "strict_wer": 0.5612391611621655,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.003,
      "insertions": 0.036962029784650435
     },
     "mixat_cs/clean": {
      "wer": 0.17860244769048558,
      "wer_uncapped": 0.17868140544808528,
      "cer": 0.08087731322823852,
      "av_wer": 0.1803354919596194,
      "strict_wer": 0.19849930450796388,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01764705882352941
     },
     "algerian_cs/clean": {
      "wer": 0.48726023475522473,
      "wer_uncapped": 0.5293444030918981,
      "cer": 0.2613740658188016,
      "av_wer": null,
      "strict_wer": 0.5158526135389888,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.006329113924050633,
      "insertions": 0.06813627254509018
     },
     "masc_noisy/clean": {
      "wer": 0.2219718309859155,
      "wer_uncapped": 0.22450704225352114,
      "cer": 0.0879113801764668,
      "av_wer": null,
      "strict_wer": 0.2417860151642797,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01647887323943662
     },
     "nadi_robust/clean": {
      "wer": 0.673355025307303,
      "wer_uncapped": 0.6815798987707882,
      "cer": 0.34212741449583556,
      "av_wer": null,
      "strict_wer": 0.6895103645461044,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.03181489515545915
     },
     "fleurs_ar/noisy": {
      "wer": 0.11774107618540224,
      "wer_uncapped": 0.11774107618540224,
      "cer": 0.05261413843888071,
      "av_wer": null,
      "strict_wer": 0.12357954545454546,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010300124311845143
     },
     "cv18_ar/noisy": {
      "wer": 0.2578490313961256,
      "wer_uncapped": 0.2631930527722111,
      "cer": 0.12208258527827648,
      "av_wer": null,
      "strict_wer": 0.26515656229180545,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01603206412825651
     },
     "mgb2/noisy": {
      "wer": 0.21473742095133352,
      "wer_uncapped": 0.21528732471817433,
      "cer": 0.09770937723693629,
      "av_wer": null,
      "strict_wer": 0.2235973597359736,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017596920538905693
     },
     "sada/noisy": {
      "wer": 0.5196817420435511,
      "wer_uncapped": 0.551926298157454,
      "cer": 0.292781450005246,
      "av_wer": null,
      "strict_wer": 0.537988941224657,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.05862646566164154
     },
     "fleurs_ar/telephony": {
      "wer": 0.12768602379683894,
      "wer_uncapped": 0.12768602379683894,
      "cer": 0.057253313696612664,
      "av_wer": null,
      "strict_wer": 0.13121448863636365,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00994494761143669
     },
     "cv18_ar/telephony": {
      "wer": 0.22244488977955912,
      "wer_uncapped": 0.2237808951235805,
      "cer": 0.09482617920678962,
      "av_wer": null,
      "strict_wer": 0.229180546302465,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007348029392117568
     },
     "mgb2/telephony": {
      "wer": 0.19741545229584823,
      "wer_uncapped": 0.19741545229584823,
      "cer": 0.08512288236697685,
      "av_wer": null,
      "strict_wer": 0.2103960396039604,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018421776189166895
     },
     "sada/telephony": {
      "wer": 0.4935092127303183,
      "wer_uncapped": 0.5025125628140703,
      "cer": 0.2544853635505194,
      "av_wer": null,
      "strict_wer": 0.5150522219946754,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.0347571189279732
     },
     "casablanca/telephony": {
      "wer": 0.658434894162925,
      "wer_uncapped": 0.6658114175753689,
      "cer": 0.33725460239859445,
      "av_wer": null,
      "strict_wer": 0.684043229497775,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.03175112251443233
     },
     "mgb3_egy/telephony": {
      "wer": 0.3769144746438469,
      "wer_uncapped": 0.3769144746438469,
      "cer": 0.20779579800958348,
      "av_wer": 0.40700713016004064,
      "strict_wer": 0.37393250216924695,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018865172363494918
     },
     "fleurs_ar/callcenter": {
      "wer": 0.31912626531699523,
      "wer_uncapped": 0.3210797371692417,
      "cer": 0.17790868924889544,
      "av_wer": null,
      "strict_wer": 0.32262073863636365,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.016160539868584622
     },
     "cv18_ar/callcenter": {
      "wer": 0.48964595858383436,
      "wer_uncapped": 0.5156980627922512,
      "cer": 0.2913334421413416,
      "av_wer": null,
      "strict_wer": 0.49633577614923385,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.038744154976619906
     },
     "mgb2/callcenter": {
      "wer": 0.40692878746219413,
      "wer_uncapped": 0.41022821006323895,
      "cer": 0.22327606776425674,
      "av_wer": null,
      "strict_wer": 0.4166666666666667,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.022271102557052516
     },
     "sada/callcenter": {
      "wer": 0.6762981574539364,
      "wer_uncapped": 0.7192211055276382,
      "cer": 0.4449165879760781,
      "av_wer": null,
      "strict_wer": 0.6901494982592669,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.059045226130653265
     },
     "casablanca/callcenter": {
      "wer": 0.7998717126363053,
      "wer_uncapped": 0.8088518280949326,
      "cer": 0.504315942250401,
      "av_wer": null,
      "strict_wer": 0.8118245390972664,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.010135135135135136,
      "insertions": 0.028543938422065426
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5822433996207517,
      "wer_uncapped": 0.5832644527641367,
      "cer": 0.3848138591964615,
      "av_wer": 0.6155424785197406,
      "strict_wer": 0.5712198017993333,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.015364418729031944
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.11987213638785296,
      "wer_uncapped": 0.11987213638785296,
      "cer": 0.053350515463917524,
      "av_wer": null,
      "strict_wer": 0.12428977272727272,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010655301012253596
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.21576486305945225,
      "wer_uncapped": 0.21643286573146292,
      "cer": 0.08405418638811817,
      "av_wer": null,
      "strict_wer": 0.22185209860093272,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01068804275217101
     },
     "mgb2/telephony_v2": {
      "wer": 0.17816882045642013,
      "wer_uncapped": 0.17816882045642013,
      "cer": 0.07462419470293485,
      "av_wer": null,
      "strict_wer": 0.1916941694169417,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014847401704701677
     },
     "sada/telephony_v2": {
      "wer": 0.4702680067001675,
      "wer_uncapped": 0.4796901172529313,
      "cer": 0.23979645367747351,
      "av_wer": null,
      "strict_wer": 0.49211550276469385,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.038316582914572864
     },
     "casablanca/telephony_v2": {
      "wer": 0.6452854393842207,
      "wer_uncapped": 0.6529826812059012,
      "cer": 0.3244977465434268,
      "av_wer": null,
      "strict_wer": 0.6719643992371265,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.03495830660679923
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.37107988525307534,
      "wer_uncapped": 0.37107988525307534,
      "cer": 0.2021286398820494,
      "av_wer": 0.4016600154220196,
      "strict_wer": 0.36753893227382745,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019448631302572083
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.20174036583200142,
      "wer_uncapped": 0.20174036583200142,
      "cer": 0.10191458026509573,
      "av_wer": null,
      "strict_wer": 0.205078125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012253596164091636
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.3593854375417502,
      "wer_uncapped": 0.3680694722778891,
      "cer": 0.1852456340786682,
      "av_wer": null,
      "strict_wer": 0.3677548301132578,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018704074816299265
     },
     "mgb2/callcenter_v2": {
      "wer": 0.3057464943634864,
      "wer_uncapped": 0.3084960131976904,
      "cer": 0.1512168933428776,
      "av_wer": null,
      "strict_wer": 0.31683168316831684,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.024470717624415727
     },
     "sada/callcenter_v2": {
      "wer": 0.5952680067001676,
      "wer_uncapped": 0.6061557788944724,
      "cer": 0.34623858986465217,
      "av_wer": null,
      "strict_wer": 0.6117141101781691,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.029522613065326633
     },
     "casablanca/callcenter_v2": {
      "wer": 0.7257857601026299,
      "wer_uncapped": 0.7697241821680565,
      "cer": 0.41738599037506685,
      "av_wer": null,
      "strict_wer": 0.7403051493960585,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.06606799230275817
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.5031360917975397,
      "wer_uncapped": 0.5031360917975397,
      "cer": 0.30031330630298564,
      "av_wer": 0.5311883438344256,
      "strict_wer": 0.4912088413937982,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018476199737443477
     },
     "fleurs_ar/sweep": {
      "wer": 0.19882794186591654,
      "wer_uncapped": 0.19906235349273324,
      "cer": 0.1006296619199845,
      "av_wer": null,
      "strict_wer": 0.20164088138771682,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0056727613689639
     },
     "masc_clean/sweep": {
      "wer": 0.3306170652494833,
      "wer_uncapped": 0.362621789193977,
      "cer": 0.19217721013769706,
      "av_wer": null,
      "strict_wer": 0.3345122310639552,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0026666666666666666,
      "insertions": 0.04446412754650133
     },
     "fleurs_ar/padded": {
      "wer": 0.08286155429747813,
      "wer_uncapped": 0.08286155429747813,
      "cer": 0.03162393162393162,
      "av_wer": null,
      "strict_wer": 0.08594956253216675,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.003088008234688626
     },
     "cv18_ar/padded": {
      "wer": 0.1411042944785276,
      "wer_uncapped": 0.1411042944785276,
      "cer": 0.047474747474747475,
      "av_wer": null,
      "strict_wer": 0.15478615071283094,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0
     },
     "masc_clean/padded": {
      "wer": 0.12467866323907455,
      "wer_uncapped": 0.12467866323907455,
      "cer": 0.039601139601139604,
      "av_wer": null,
      "strict_wer": 0.1282051282051282,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007712082262210797
     },
     "sada/padded": {
      "wer": 0.38827361563517915,
      "wer_uncapped": 0.39087947882736157,
      "cer": 0.17592295345104333,
      "av_wer": null,
      "strict_wer": 0.4098151688973869,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.031921824104234525
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.22437267810513545,
      "cer": 0.09590826929175143,
      "wer_arith": 0.28540219964022834,
      "done": 8,
      "total": 8,
      "ci": [
       0.21448,
       0.23312
      ]
     },
     "codeswitch": {
      "wer": 0.29500147557177364,
      "cer": 0.1453933705193103,
      "wer_arith": 0.33293134122285517,
      "done": 2,
      "total": 2,
      "ci": [
       0.25083,
       0.3482
      ]
     },
     "noisy": {
      "wer": 0.2372724487255532,
      "cer": 0.11006676858016926,
      "wer_arith": 0.26639622031246557,
      "done": 5,
      "total": 5,
      "ci": [
       0.22067,
       0.25234
      ]
     },
     "telephony": {
      "wer": 0.2834757399150392,
      "cer": 0.13188942863787448,
      "wer_arith": 0.33340652520686476,
      "done": 6,
      "total": 6,
      "ci": [
       0.26864,
       0.29692
      ]
     },
     "callcenter": {
      "wer": 0.4109795418784854,
      "cer": 0.22327773663721046,
      "wer_arith": 0.44851035938959577,
      "done": 6,
      "total": 6,
      "ci": [
       0.3938,
       0.42577
      ]
     }
    },
    "arena": 0.25637715333329053,
    "arena_arith": 0.3107919225100583,
    "arena_cer": 0.1170748718099507,
    "arena_strict": 0.2691155600653135,
    "zero_shot": 0.3507511389894889,
    "arena_real": 0.23822190387536968,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.5366666666666666,
    "rank": 9,
    "arena_ci": [
     0.24514,
     0.26704
    ],
    "rank_set": [
     9,
     10
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
    "fleurs_ar/clean": {
     "wer": 0.08129478626142822,
     "cer": 0.03249516441005803,
     "rtfx": 34.68,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.19343936381709742,
     "cer": 0.06947920872022607,
     "rtfx": 32.91,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.10514392324093817,
     "cer": 0.03481068094797167,
     "rtfx": 29.58,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.16435396759451598,
     "cer": 0.07014377578257705,
     "rtfx": 30.73,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.39727605366580837,
     "cer": 0.18509996279813165,
     "rtfx": 27.22,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5348879743941473,
     "cer": 0.2244602204978629,
     "rtfx": 24.55,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.2535271943995692,
     "cer": 0.10859008975357787,
     "rtfx": 27.59,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.600616304043328,
     "cer": 0.27186544342507646,
     "rtfx": 25.46,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2539142007202129,
     "cer": 0.12087055153835248,
     "rtfx": 34.68,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.45772427629693324,
     "cer": 0.20343110726269076,
     "rtfx": 26.34,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.23616961527660768,
     "cer": 0.08690508201129336,
     "rtfx": 26.51,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6990707648320229,
     "cer": 0.37891333632689717,
     "rtfx": 22.46,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.13895781637717122,
     "cer": 0.07465395262996001,
     "rtfx": 30.32,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.40173217854763493,
     "cer": 0.22129806381238068,
     "rtfx": 37.26,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.2700770077007701,
     "cer": 0.13113531254662092,
     "rtfx": 31.8,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5789473684210527,
     "cer": 0.3333333333333333,
     "rtfx": 25.31,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.13736263736263737,
     "cer": 0.058935712088588124,
     "rtfx": 35.62,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.33777481678880744,
     "cer": 0.15694027815653122,
     "rtfx": 37.14,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.2422992299229923,
     "cer": 0.10816052513799791,
     "rtfx": 32.36,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5160761826745853,
     "cer": 0.28255436140964757,
     "rtfx": 25.76,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7008900190718372,
     "cer": 0.3598878853939583,
     "rtfx": 18.25,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.33584005869405725,
     "cer": 0.16121418975345847,
     "rtfx": 29.01,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.500708968450904,
     "cer": 0.28385112273146723,
     "rtfx": 29.54,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.8094603597601598,
     "cer": 0.4979547313880556,
     "rtfx": 24.38,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5088008800880088,
     "cer": 0.2817643841066189,
     "rtfx": 31.98,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.0499692811796026,
     "cer": 0.6786636674164792,
     "rtfx": 17.24,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.7924348378893833,
     "cer": 0.4862036748676425,
     "rtfx": 28.94,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6746148202494497,
     "cer": 0.4171961802403689,
     "rtfx": 21.71,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 18.17,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.13470400567174762,
     "cer": 0.05632113195939711,
     "rtfx": 37.23,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.34443704197201863,
     "cer": 0.14848650122716117,
     "rtfx": 39.2,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.22552255225522552,
     "cer": 0.10214331891192999,
     "rtfx": 32.15,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.5066557444194143,
     "cer": 0.2759726734982921,
     "rtfx": 26.16,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.7425301970756516,
     "cer": 0.5339146683276238,
     "rtfx": 19.37,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.3321716801173881,
     "cer": 0.15449693184706437,
     "rtfx": 30.1,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.2509748316199929,
     "cer": 0.11842509996924024,
     "rtfx": 37.2,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.9007328447701533,
     "cer": 0.6041723479683665,
     "rtfx": 19.02,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.37486248624862484,
     "cer": 0.1878263464120543,
     "rtfx": 33.4,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.6311693630964571,
     "cer": 0.3657002416062651,
     "rtfx": 33.43,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.721233312142403,
     "cer": 0.4001245717844908,
     "rtfx": 27.48,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.547505502567865,
     "cer": 0.3347736102538034,
     "rtfx": 25.1,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.283649566643242,
     "cer": 0.16338701509166415,
     "rtfx": 27.26,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.5005010315355143,
     "cer": 0.2982133912172316,
     "rtfx": 20.2,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.1609254498714653,
     "cer": 0.09506382219048469,
     "rtfx": 38.98,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.45417515274949083,
     "cer": 0.3059071729957806,
     "rtfx": 50.26,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.31794871794871793,
     "cer": 0.2353783719264741,
     "rtfx": 43.22,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.4187380497131931,
     "cer": 0.2184938524590164,
     "rtfx": 32.06,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 14.04,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.29131744592710407,
     "cer": 0.12461806829193521,
     "done": 8,
     "total": 8,
     "ci": [
      0.28611,
      0.29641
     ]
    },
    "codeswitch": {
     "wer": 0.3558192385085731,
     "cer": 0.1621508294005216,
     "done": 2,
     "total": 2,
     "ci": [
      0.33635,
      0.37634
     ]
    },
    "noisy": {
     "wer": 0.38749245852587655,
     "cer": 0.2043731801100809,
     "done": 6,
     "total": 6,
     "ci": [
      0.36958,
      0.40952
     ]
    },
    "telephony": {
     "wer": 0.3783738240858195,
     "cer": 0.18794882532336357,
     "done": 6,
     "total": 6,
     "ci": [
      0.35816,
      0.40937
     ]
    },
    "callcenter": {
     "wer": 0.7226648579362513,
     "cer": 0.4409389601251054,
     "done": 6,
     "total": 6,
     "ci": [
      0.6507,
      0.81518
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
   "hallucination_rate": 0.95,
   "inserted_wpm": 86.39,
   "arena_wer": 0.41587463510863937,
   "arena_cer": 0.21626494094843543,
   "arena_ci": [
    0.39938,
    0.43564
   ],
   "rank_range": [
    9,
    10
   ],
   "rtfx": 26.3,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.95,
    "halluc_3plus": 0.8566666666666667,
    "halluc_3plus_ci": [
     0.8125,
     0.89182
    ],
    "inserted_wpm": 86.39344013632346,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.0740878169449598,
      "wer_uncapped": 0.0740878169449598,
      "cer": 0.03244230620803211,
      "av_wer": null,
      "strict_wer": 0.07975763571163597,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006307977736549165
     },
     "cv18_ar/clean": {
      "wer": 0.18080446037435285,
      "wer_uncapped": 0.18399044205495818,
      "cer": 0.06969565427096899,
      "av_wer": null,
      "strict_wer": 0.18986083499005965,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016726403823178016
     },
     "masc_clean/clean": {
      "wer": 0.09747966395519403,
      "wer_uncapped": 0.09774636618215762,
      "cer": 0.03511500613166632,
      "av_wer": null,
      "strict_wer": 0.10474413646055437,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0073343112414988665
     },
     "mgb2/clean": {
      "wer": 0.1453759148369927,
      "wer_uncapped": 0.14845309381237526,
      "cer": 0.06484436258866864,
      "av_wer": null,
      "strict_wer": 0.16028250934773577,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02511643379906853
     },
     "sada/clean": {
      "wer": 0.3663969011551498,
      "wer_uncapped": 0.3750432316524867,
      "cer": 0.17885070169684625,
      "av_wer": null,
      "strict_wer": 0.3889415910014907,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.003006012024048096,
      "insertions": 0.041640727675174655
     },
     "casablanca/clean": {
      "wer": 0.49024142077513644,
      "wer_uncapped": 0.4957913236518361,
      "cer": 0.2219588187483067,
      "av_wer": null,
      "strict_wer": 0.5273891175125743,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.001006036217303823,
      "insertions": 0.03709185089260938
     },
     "mgb3_egy/clean": {
      "wer": 0.15795099841792448,
      "wer_uncapped": 0.15872065677513147,
      "cer": 0.09518525535197164,
      "av_wer": 0.1956337649908917,
      "strict_wer": 0.1786910279422402,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013739826969398954
     },
     "mgb5_mor/clean": {
      "wer": 0.4017464651478322,
      "wer_uncapped": 0.4068595428545397,
      "cer": 0.252364982074708,
      "av_wer": null,
      "strict_wer": 0.40832192134180534,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.03335823188064702
     },
     "mixat_cs/clean": {
      "wer": 0.2096723253059613,
      "wer_uncapped": 0.21283063560994867,
      "cer": 0.11941643004014492,
      "av_wer": 0.2087652766370729,
      "strict_wer": 0.22780792665007935,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.021910777733912357
     },
     "algerian_cs/clean": {
      "wer": 0.3945032922988835,
      "wer_uncapped": 0.4133982250214715,
      "cer": 0.18880293693457453,
      "av_wer": null,
      "strict_wer": 0.4361610968294773,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05124534783853421
     },
     "masc_noisy/clean": {
      "wer": 0.21140845070422534,
      "wer_uncapped": 0.2143661971830986,
      "cer": 0.08523861660333612,
      "av_wer": null,
      "strict_wer": 0.2325189553496209,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020422535211267606
     },
     "nadi_robust/clean": {
      "wer": 0.6725415762834418,
      "wer_uncapped": 0.6859182935647143,
      "cer": 0.37701577175261386,
      "av_wer": null,
      "strict_wer": 0.6858470335954253,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.035882140274765
     },
     "fleurs_ar/noisy": {
      "wer": 0.13159296750133193,
      "wer_uncapped": 0.13248090925235304,
      "cer": 0.06616347569955817,
      "av_wer": null,
      "strict_wer": 0.13689630681818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016870893269401527
     },
     "cv18_ar/noisy": {
      "wer": 0.3573814295257181,
      "wer_uncapped": 0.3954575818303273,
      "cer": 0.2045046515423535,
      "av_wer": null,
      "strict_wer": 0.3637574950033311,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.08617234468937876
     },
     "mgb2/noisy": {
      "wer": 0.2581798185317569,
      "wer_uncapped": 0.2612042892493814,
      "cer": 0.13010021474588404,
      "av_wer": null,
      "strict_wer": 0.2678767876787679,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.032169370360186966
     },
     "sada/noisy": {
      "wer": 0.5002093802345059,
      "wer_uncapped": 0.5609296482412061,
      "cer": 0.29325359353687963,
      "av_wer": null,
      "strict_wer": 0.5199672332582429,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.08961474036850921
     },
     "fleurs_ar/telephony": {
      "wer": 0.12999467234949388,
      "wer_uncapped": 0.1307050257503108,
      "cer": 0.060714285714285714,
      "av_wer": null,
      "strict_wer": 0.13494318181818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01047771266204937
     },
     "cv18_ar/telephony": {
      "wer": 0.32064128256513025,
      "wer_uncapped": 0.33266533066132264,
      "cer": 0.1612534682552636,
      "av_wer": null,
      "strict_wer": 0.3251165889407062,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03139612558450234
     },
     "mgb2/telephony": {
      "wer": 0.2271102557052516,
      "wer_uncapped": 0.2312345339565576,
      "cer": 0.10564304461942257,
      "av_wer": null,
      "strict_wer": 0.23872387238723872,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.032169370360186966
     },
     "sada/telephony": {
      "wer": 0.4849246231155779,
      "wer_uncapped": 0.49748743718592964,
      "cer": 0.26623649144895606,
      "av_wer": null,
      "strict_wer": 0.5048126151955765,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.03936348408710218
     },
     "casablanca/telephony": {
      "wer": 0.5949326491340603,
      "wer_uncapped": 0.6670942912123156,
      "cer": 0.31678252234359483,
      "av_wer": null,
      "strict_wer": 0.6265098537825811,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.10968569595894805
     },
     "mgb3_egy/telephony": {
      "wer": 0.25108183011620555,
      "wer_uncapped": 0.2512763164292313,
      "cer": 0.1540269074824917,
      "av_wer": 0.2845751853231822,
      "strict_wer": 0.2664748595698041,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017698254485340594
     },
     "fleurs_ar/callcenter": {
      "wer": 0.4221275084354466,
      "wer_uncapped": 0.4970697922216303,
      "cer": 0.25158321060382915,
      "av_wer": null,
      "strict_wer": 0.42613636363636365,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.0994494761143669
     },
     "cv18_ar/callcenter": {
      "wer": 0.5965263861055444,
      "wer_uncapped": 0.8022712090848363,
      "cer": 0.4062346988738371,
      "av_wer": null,
      "strict_wer": 0.6015989340439707,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.24649298597194388
     },
     "mgb2/callcenter": {
      "wer": 0.49106406378883694,
      "wer_uncapped": 0.5001374759417102,
      "cer": 0.2930088284418993,
      "av_wer": null,
      "strict_wer": 0.49944994499449946,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.040692878746219414
     },
     "sada/callcenter": {
      "wer": 0.6909547738693468,
      "wer_uncapped": 1.0475293132328307,
      "cer": 0.46595320532997586,
      "av_wer": null,
      "strict_wer": 0.7040753635060414,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02666666666666667,
      "insertions": 0.3706030150753769
     },
     "casablanca/callcenter": {
      "wer": 0.7642719692110327,
      "wer_uncapped": 0.7719692110327133,
      "cer": 0.5003437476128638,
      "av_wer": null,
      "strict_wer": 0.7828989192625556,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03143040410519564
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5087275732970292,
      "wer_uncapped": 0.592794282102397,
      "cer": 0.3563859196461482,
      "av_wer": 0.6225464446719001,
      "strict_wer": 0.5117139334155364,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.09899353333009189
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.12733084709643047,
      "wer_uncapped": 0.12733084709643047,
      "cer": 0.05751104565537555,
      "av_wer": null,
      "strict_wer": 0.13299005681818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011010477712662049
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.3299933199732799,
      "wer_uncapped": 0.3333333333333333,
      "cer": 0.1511343234862086,
      "av_wer": null,
      "strict_wer": 0.3397734843437708,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02137608550434202
     },
     "mgb2/telephony_v2": {
      "wer": 0.2084135276326643,
      "wer_uncapped": 0.2144624690679131,
      "cer": 0.0976497256024815,
      "av_wer": null,
      "strict_wer": 0.22002200220022003,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03326917789386857
     },
     "sada/telephony_v2": {
      "wer": 0.47550251256281406,
      "wer_uncapped": 0.4882747068676717,
      "cer": 0.25747560591753227,
      "av_wer": null,
      "strict_wer": 0.4953921769404055,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.04501675041876047
     },
     "casablanca/telephony_v2": {
      "wer": 0.564143681847338,
      "wer_uncapped": 0.7026940346375882,
      "cer": 0.30341455962111374,
      "av_wer": null,
      "strict_wer": 0.601716465352829,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.17511225144323284
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.2477755627947683,
      "wer_uncapped": 0.2477755627947683,
      "cer": 0.1471618134906008,
      "av_wer": 0.28443269401368043,
      "strict_wer": 0.2615883454354478,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01905965867652064
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.24436156988101582,
      "wer_uncapped": 0.24453915823122002,
      "cer": 0.12584683357879234,
      "av_wer": null,
      "strict_wer": 0.24964488636363635,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017048481619605753
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.4909819639278557,
      "wer_uncapped": 0.8964595858383434,
      "cer": 0.289048473967684,
      "av_wer": null,
      "strict_wer": 0.4943371085942705,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.43887775551102204
     },
     "mgb2/callcenter_v2": {
      "wer": 0.3585372559802035,
      "wer_uncapped": 0.3656860049491339,
      "cer": 0.19052732044858028,
      "av_wer": null,
      "strict_wer": 0.36743674367436746,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03381908166070938
     },
     "sada/callcenter_v2": {
      "wer": 0.6040619765494137,
      "wer_uncapped": 0.6172529313232831,
      "cer": 0.3722064841045011,
      "av_wer": null,
      "strict_wer": 0.6188818349375383,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.03685092127303183
     },
     "casablanca/callcenter_v2": {
      "wer": 0.6760744066709429,
      "wer_uncapped": 0.6937139191789609,
      "cer": 0.4124207470781453,
      "av_wer": null,
      "strict_wer": 0.7018436109345201,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04201411161000641
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.4036077211066271,
      "wer_uncapped": 0.48796615938153354,
      "cer": 0.26497419830446,
      "av_wer": 0.5174236656951724,
      "strict_wer": 0.40818376946613694,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.10249428696455487
     },
     "fleurs_ar/sweep": {
      "wer": 0.24641350210970464,
      "wer_uncapped": 0.2780121894045945,
      "cer": 0.14179986438050954,
      "av_wer": null,
      "strict_wer": 0.2509142053445851,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0022222222222222222,
      "insertions": 0.042498827941865915
     },
     "masc_clean/sweep": {
      "wer": 0.38612341304989667,
      "wer_uncapped": 0.481901387658695,
      "cer": 0.23693208275128053,
      "av_wer": null,
      "strict_wer": 0.39157088122605366,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.003111111111111111,
      "insertions": 0.11178033658104518
     },
     "fleurs_ar/padded": {
      "wer": 0.1276376737004632,
      "wer_uncapped": 0.15182707153885744,
      "cer": 0.07275641025641026,
      "av_wer": null,
      "strict_wer": 0.1327843540916109,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05867215645908389
     },
     "cv18_ar/padded": {
      "wer": 0.2985685071574642,
      "wer_uncapped": 0.4458077709611452,
      "cer": 0.18131313131313131,
      "av_wer": null,
      "strict_wer": 0.3075356415478615,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.22085889570552147
     },
     "masc_clean/padded": {
      "wer": 0.2159383033419023,
      "wer_uncapped": 0.31362467866323906,
      "cer": 0.1336182336182336,
      "av_wer": null,
      "strict_wer": 0.2205128205128205,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.16838046272493573
     },
     "sada/padded": {
      "wer": 0.36221498371335503,
      "wer_uncapped": 0.38957654723127033,
      "cer": 0.19630818619582666,
      "av_wer": null,
      "strict_wer": 0.39451880178457616,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.08859934853420195
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.1958392927318615,
      "cer": 0.09149145350800705,
      "wer_arith": 0.23926045520094277,
      "done": 8,
      "total": 8,
      "ci": [
       0.18615,
       0.20511
      ]
     },
     "codeswitch": {
      "wer": 0.2876046290259673,
      "cer": 0.15015383015368444,
      "wer_arith": 0.3020878088024224,
      "done": 2,
      "total": 2,
      "ci": [
       0.25321,
       0.32949
      ]
     },
     "noisy": {
      "wer": 0.264065841190735,
      "cer": 0.13449181365046686,
      "wer_arith": 0.29175440929950763,
      "done": 5,
      "total": 5,
      "ci": [
       0.24869,
       0.27883
      ]
     },
     "telephony": {
      "wer": 0.28895327174804913,
      "cer": 0.14618141869127427,
      "wer_arith": 0.3255265753178825,
      "done": 6,
      "total": 6,
      "ci": [
       0.27496,
       0.30234
      ]
     },
     "callcenter": {
      "wer": 0.43830662266767384,
      "cer": 0.2560646984062953,
      "wer_arith": 0.46293748235267645,
      "done": 6,
      "total": 6,
      "ci": [
       0.42253,
       0.45321
      ]
     }
    },
    "arena": 0.24450440936025442,
    "arena_arith": 0.2875529660828168,
    "arena_cer": 0.12128282145037436,
    "arena_strict": 0.260336072111726,
    "zero_shot": 0.2753700814748177,
    "arena_real": 0.21388524914003731,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.18333333333333332,
    "rank": 8,
    "arena_ci": [
     0.23486,
     0.25466
    ],
    "rank_set": [
     7,
     8
    ]
   }
  },
  {
   "model": "audar-asr-v1-flash",
   "hf_id": "audarai/Audar-ASR-V1-Flash",
   "params_b": 0.78,
   "license": "AudarAI Open License",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.11131702495675809,
     "cer": 0.039974210186976146,
     "rtfx": 120.24,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.15248508946322067,
     "cer": 0.047517157852240616,
     "rtfx": 83.15,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.12260127931769722,
     "cer": 0.04324432543356941,
     "rtfx": 95.44,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.16211051100955545,
     "cer": 0.06632188789128853,
     "rtfx": 87.27,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.46198671906762434,
     "cer": 0.2563622084131336,
     "rtfx": 27.72,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5558299039780521,
     "cer": 0.23157778878432667,
     "rtfx": 33.16,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3597738287560582,
     "cer": 0.16433122378629897,
     "rtfx": 33.94,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.771033709963582,
     "cer": 0.3857348443964742,
     "rtfx": 14.75,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.22647565367152028,
     "cer": 0.09523922050506482,
     "rtfx": 66.66,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6248208655775294,
     "cer": 0.3663816430349605,
     "rtfx": 21.92,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2549845549003089,
     "cer": 0.10077977951062113,
     "rtfx": 82.16,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7118477483917084,
     "cer": 0.3727166591827571,
     "rtfx": 15.6,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.15313718539524993,
     "cer": 0.05933558904952323,
     "rtfx": 123.55,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.262491672218521,
     "cer": 0.11085355876738479,
     "rtfx": 78.42,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.22744774477447743,
     "cer": 0.10651946889452484,
     "rtfx": 113.34,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.7044849477780053,
     "cer": 0.51978671998667,
     "rtfx": 17.63,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.14870613257710033,
     "cer": 0.057120885881267305,
     "rtfx": 118.72,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.2684876748834111,
     "cer": 0.1043086992091628,
     "rtfx": 80.63,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.21699669966996699,
     "cer": 0.09751852404396041,
     "rtfx": 110.39,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5482285480237559,
     "cer": 0.3134633008414563,
     "rtfx": 22.77,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7333121424030515,
     "cer": 0.39009654313298037,
     "rtfx": 37.77,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.44644167278063096,
     "cer": 0.23219926654805562,
     "rtfx": 23.89,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.37203119461183976,
     "cer": 0.18938788065210704,
     "rtfx": 42.79,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5043304463690873,
     "cer": 0.2847013907826561,
     "rtfx": 17.62,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.4821232123212321,
     "cer": 0.2887761698741857,
     "rtfx": 16.41,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8443579766536965,
     "cer": 0.6455886028492877,
     "rtfx": 20.08,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.813731722822632,
     "cer": 0.5268763625038929,
     "rtfx": 13.97,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6601247248716068,
     "cer": 0.43211938564322283,
     "rtfx": 14.95,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 19.47,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.15154200638071605,
     "cer": 0.05758228237465395,
     "rtfx": 89.33,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.23584277148567623,
     "cer": 0.08753749659121898,
     "rtfx": 34.18,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.1936193619361936,
     "cer": 0.08036202695310557,
     "rtfx": 91.13,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.5981978292033586,
     "cer": 0.38486211780388235,
     "rtfx": 24.74,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6668785759694851,
     "cer": 0.3359701027717222,
     "rtfx": 15.29,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.43983859134262654,
     "cer": 0.22493736610871065,
     "rtfx": 36.14,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.24494859978730946,
     "cer": 0.11033528145186097,
     "rtfx": 43.17,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.3877415056628914,
     "cer": 0.19089173711480775,
     "rtfx": 53.19,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.3083058305830583,
     "cer": 0.15495549256551794,
     "rtfx": 20.06,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.7388900266229776,
     "cer": 0.526576689161043,
     "rtfx": 16.9,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.7565162110616656,
     "cer": 0.42958579881656805,
     "rtfx": 15.3,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.5918928833455612,
     "cer": 0.34170872517337786,
     "rtfx": 17.54,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.3179198875614898,
     "cer": 0.17523751645902969,
     "rtfx": 35.17,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.3702917771883289,
     "cer": 0.22397729170145267,
     "rtfx": 38.04,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.12287917737789203,
     "cer": 0.03918593233955191,
     "rtfx": 130.17,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.164969450101833,
     "cer": 0.0540084388185654,
     "rtfx": 172.13,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.12692307692307692,
     "cer": 0.04464072571019336,
     "rtfx": 200.48,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.4569789674952199,
     "cer": 0.25922131147540983,
     "rtfx": 54.21,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 72.31,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3371422583140685,
     "cer": 0.15438295584303852,
     "done": 8,
     "total": 8,
     "ci": [
      0.3306,
      0.34404
     ]
    },
    "codeswitch": {
     "wer": 0.4256482596245248,
     "cer": 0.23081043177001268,
     "done": 2,
     "total": 2,
     "ci": [
      0.38108,
      0.47692
     ]
    },
    "noisy": {
     "wer": 0.38573230890971183,
     "cer": 0.21166529589858019,
     "done": 6,
     "total": 6,
     "ci": [
      0.36435,
      0.41142
     ]
    },
    "telephony": {
     "wer": 0.39369547838965274,
     "cer": 0.1991178699428138,
     "done": 6,
     "total": 6,
     "ci": [
      0.37759,
      0.41452
     ]
    },
    "callcenter": {
     "wer": 0.6127832129416824,
     "cer": 0.3945749653842254,
     "done": 6,
     "total": 6,
     "ci": [
      0.58506,
      0.64456
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
   "finetune_of": "Qwen/Qwen3-ASR-0.6B",
   "in_domain": [],
   "notes": "",
   "training_data": "undisclosed",
   "hallucination_rate": 0.27666666666666667,
   "inserted_wpm": 39.62,
   "arena_wer": 0.41972020097510027,
   "arena_cer": 0.22760343917225961,
   "arena_ci": [
    0.41081,
    0.429
   ],
   "rank_range": [
    9,
    10
   ],
   "rtfx": 35.6,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.27666666666666667,
    "halluc_3plus": 0.23666666666666666,
    "halluc_3plus_ci": [
     0.19209,
     0.2879
    ],
    "inserted_wpm": 39.62289071000446,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.10315398886827458,
      "wer_uncapped": 0.10315398886827458,
      "cer": 0.04082945277727752,
      "av_wer": null,
      "strict_wer": 0.10856930876715716,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0044526901669758815
     },
     "cv18_ar/clean": {
      "wer": 0.14277180406212664,
      "wer_uncapped": 0.14277180406212664,
      "cer": 0.048521680412868376,
      "av_wer": null,
      "strict_wer": 0.15188866799204773,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0047789725209080045
     },
     "masc_clean/clean": {
      "wer": 0.11614881984264569,
      "wer_uncapped": 0.11628217095612749,
      "cer": 0.04292166422397033,
      "av_wer": null,
      "strict_wer": 0.12260127931769722,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006534204560608081
     },
     "mgb2/clean": {
      "wer": 0.1487857618097139,
      "wer_uncapped": 0.1487857618097139,
      "cer": 0.06451612903225806,
      "av_wer": null,
      "strict_wer": 0.16136269214790194,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008649367930805056
     },
     "sada/clean": {
      "wer": 0.4077609462544096,
      "wer_uncapped": 0.43971778377256693,
      "cer": 0.22285132312578756,
      "av_wer": null,
      "strict_wer": 0.4312237430546145,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.003006012024048096,
      "insertions": 0.060455142837379815
     },
     "casablanca/clean": {
      "wer": 0.5188234205901396,
      "wer_uncapped": 0.5227083526038294,
      "cer": 0.22390047864174117,
      "av_wer": null,
      "strict_wer": 0.5498856881572931,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03357691240403293
     },
     "mgb3_egy/clean": {
      "wer": 0.26698593235558216,
      "wer_uncapped": 0.26704294408574564,
      "cer": 0.14885382554331647,
      "av_wer": 0.3010933367855216,
      "strict_wer": 0.2892142417017173,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.009235900286483944
     },
     "mgb5_mor/clean": {
      "wer": 0.5691382667755754,
      "wer_uncapped": 0.5791950067254724,
      "cer": 0.3475425002891176,
      "av_wer": null,
      "strict_wer": 0.5657158856420859,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.003,
      "insertions": 0.03243418113603076
     },
     "mixat_cs/clean": {
      "wer": 0.19542045005921832,
      "wer_uncapped": 0.20185550730359259,
      "cer": 0.08593948888671302,
      "av_wer": 0.2036153996243515,
      "strict_wer": 0.2106067433340517,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.021160679036715358
     },
     "algerian_cs/clean": {
      "wer": 0.5264815344975665,
      "wer_uncapped": 0.6060692814199828,
      "cer": 0.3071981119706306,
      "av_wer": null,
      "strict_wer": 0.5487003713224793,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.10077297452046952
     },
     "masc_noisy/clean": {
      "wer": 0.23591549295774647,
      "wer_uncapped": 0.23746478873239438,
      "cer": 0.10037354286082308,
      "av_wer": null,
      "strict_wer": 0.2525975849480483,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019295774647887325
     },
     "nadi_robust/clean": {
      "wer": 0.6719088937093276,
      "wer_uncapped": 0.6960412147505423,
      "cer": 0.3633926989190147,
      "av_wer": null,
      "strict_wer": 0.687276626161544,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.004,
      "insertions": 0.04962039045553145
     },
     "fleurs_ar/noisy": {
      "wer": 0.14508968211685314,
      "wer_uncapped": 0.14508968211685314,
      "cer": 0.062334315169366716,
      "av_wer": null,
      "strict_wer": 0.14985795454545456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004972473805718345
     },
     "cv18_ar/noisy": {
      "wer": 0.2518370073480294,
      "wer_uncapped": 0.2545090180360721,
      "cer": 0.1122898645340297,
      "av_wer": null,
      "strict_wer": 0.25916055962691537,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012692050768203072
     },
     "mgb2/noisy": {
      "wer": 0.21803684355237835,
      "wer_uncapped": 0.21831179543579873,
      "cer": 0.1066571224051539,
      "av_wer": null,
      "strict_wer": 0.22772277227722773,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009073412152873246
     },
     "sada/noisy": {
      "wer": 0.5969430485762144,
      "wer_uncapped": 0.6884422110552764,
      "cer": 0.4192109956982478,
      "av_wer": null,
      "strict_wer": 0.6156051607618267,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.10657453936348409
     },
     "fleurs_ar/telephony": {
      "wer": 0.1408275617119517,
      "wer_uncapped": 0.1408275617119517,
      "cer": 0.05913107511045655,
      "av_wer": null,
      "strict_wer": 0.14524147727272727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006215592257147931
     },
     "cv18_ar/telephony": {
      "wer": 0.2571810287241149,
      "wer_uncapped": 0.2605210420841683,
      "cer": 0.10723029214950221,
      "av_wer": null,
      "strict_wer": 0.26449033977348435,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014696058784235137
     },
     "mgb2/telephony": {
      "wer": 0.2108880945834479,
      "wer_uncapped": 0.2108880945834479,
      "cer": 0.09735146743020759,
      "av_wer": null,
      "strict_wer": 0.21782178217821782,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010723123453395655
     },
     "sada/telephony": {
      "wer": 0.5247068676716918,
      "wer_uncapped": 0.5286850921273032,
      "cer": 0.3130311614730878,
      "av_wer": null,
      "strict_wer": 0.5445422895760803,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02386934673366834
     },
     "casablanca/telephony": {
      "wer": 0.6561898652982682,
      "wer_uncapped": 0.7059012187299551,
      "cer": 0.35856695439615005,
      "av_wer": null,
      "strict_wer": 0.680864589955499,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.08082103912764593
     },
     "mgb3_egy/telephony": {
      "wer": 0.3633004327320465,
      "wer_uncapped": 0.3634949190450722,
      "cer": 0.2215720604496867,
      "av_wer": 0.397670885623022,
      "strict_wer": 0.3781339909576654,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008946370399183157
     },
     "fleurs_ar/callcenter": {
      "wer": 0.3663647664713195,
      "wer_uncapped": 0.36689753152193216,
      "cer": 0.20463917525773195,
      "av_wer": null,
      "strict_wer": 0.3700284090909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.022731308826141005
     },
     "cv18_ar/callcenter": {
      "wer": 0.48430193720774883,
      "wer_uncapped": 0.49899799599198397,
      "cer": 0.2950873184266362,
      "av_wer": null,
      "strict_wer": 0.48967355096602266,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.036072144288577156
     },
     "mgb2/callcenter": {
      "wer": 0.4286499862524058,
      "wer_uncapped": 0.47511685455045366,
      "cer": 0.2563827248866619,
      "av_wer": null,
      "strict_wer": 0.43454345434543457,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.06598845202089634
     },
     "sada/callcenter": {
      "wer": 0.722571189279732,
      "wer_uncapped": 0.8358458961474037,
      "cer": 0.5405518833280873,
      "av_wer": null,
      "strict_wer": 0.7345893917673562,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.12353433835845896
     },
     "casablanca/callcenter": {
      "wer": 0.7931366260423348,
      "wer_uncapped": 0.7995509942270687,
      "cer": 0.5358643342754564,
      "av_wer": null,
      "strict_wer": 0.8064208518753974,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026298909557408594
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5941070647153207,
      "wer_uncapped": 0.5961005494238343,
      "cer": 0.4338831551787689,
      "av_wer": 0.6303235372297857,
      "strict_wer": 0.5987578207060328,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.011085719842466087
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.14508968211685314,
      "wer_uncapped": 0.14508968211685314,
      "cer": 0.06093519882179676,
      "av_wer": null,
      "strict_wer": 0.14985795454545456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00781388740898597
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.22244488977955912,
      "wer_uncapped": 0.22444889779559118,
      "cer": 0.08992981883466623,
      "av_wer": null,
      "strict_wer": 0.23251165889407063,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013360053440213761
     },
     "mgb2/telephony_v2": {
      "wer": 0.18614242507561177,
      "wer_uncapped": 0.18614242507561177,
      "cer": 0.07993319016941064,
      "av_wer": null,
      "strict_wer": 0.19416941694169418,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0074237008523508384
     },
     "sada/telephony_v2": {
      "wer": 0.5253350083752094,
      "wer_uncapped": 0.5795644891122278,
      "cer": 0.32383800230825727,
      "av_wer": null,
      "strict_wer": 0.5459758345279542,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.07726130653266332
     },
     "casablanca/telephony_v2": {
      "wer": 0.6372674791533034,
      "wer_uncapped": 0.6414368184733804,
      "cer": 0.3361087770223818,
      "av_wer": null,
      "strict_wer": 0.6611570247933884,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.03431686978832585
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.35148538921573397,
      "wer_uncapped": 0.3516312539505032,
      "cer": 0.2126796903796535,
      "av_wer": 0.38575980064712057,
      "strict_wer": 0.3704160387267662,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.011085719842466087
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.23992186112591013,
      "wer_uncapped": 0.23992186112591013,
      "cer": 0.11936671575846834,
      "av_wer": null,
      "strict_wer": 0.2430752840909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013851891315929675
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.37074148296593185,
      "wer_uncapped": 0.3787575150300601,
      "cer": 0.2017300473314836,
      "av_wer": null,
      "strict_wer": 0.37841439040639574,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019372077488309953
     },
     "mgb2/callcenter_v2": {
      "wer": 0.2996975529282376,
      "wer_uncapped": 0.3018971679956008,
      "cer": 0.15765926986399428,
      "av_wer": null,
      "strict_wer": 0.30665566556655666,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01539730547154248
     },
     "sada/callcenter_v2": {
      "wer": 0.6390284757118928,
      "wer_uncapped": 0.7221524288107203,
      "cer": 0.44297555345713985,
      "av_wer": null,
      "strict_wer": 0.6584067171820602,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.10280569514237856
     },
     "casablanca/callcenter_v2": {
      "wer": 0.72771007055805,
      "wer_uncapped": 0.7341244387427839,
      "cer": 0.43709418684592466,
      "av_wer": null,
      "strict_wer": 0.7463445645263828,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.03239255933290571
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.5221957504740604,
      "wer_uncapped": 0.5235571546652404,
      "cer": 0.3412274235164025,
      "av_wer": 0.5548700024234802,
      "strict_wer": 0.5285198885692104,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.014586473476929061
     },
     "fleurs_ar/sweep": {
      "wer": 0.25578996718237224,
      "wer_uncapped": 0.3121190811064229,
      "cer": 0.13887435822919694,
      "av_wer": null,
      "strict_wer": 0.260126582278481,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0044444444444444444,
      "insertions": 0.06720581340834506
     },
     "masc_clean/sweep": {
      "wer": 0.35022143489813995,
      "wer_uncapped": 0.3651018600531444,
      "cer": 0.2201290494245992,
      "av_wer": null,
      "strict_wer": 0.3550250515767757,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02674933569530558
     },
     "fleurs_ar/padded": {
      "wer": 0.11322696860524961,
      "wer_uncapped": 0.11322696860524961,
      "cer": 0.04091880341880342,
      "av_wer": null,
      "strict_wer": 0.1204323211528564,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004632012352032939
     },
     "cv18_ar/padded": {
      "wer": 0.1574642126789366,
      "wer_uncapped": 0.1574642126789366,
      "cer": 0.05555555555555555,
      "av_wer": null,
      "strict_wer": 0.164969450101833,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010224948875255624
     },
     "masc_clean/padded": {
      "wer": 0.11825192802056556,
      "wer_uncapped": 0.11825192802056556,
      "cer": 0.044444444444444446,
      "av_wer": null,
      "strict_wer": 0.12564102564102564,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008997429305912597
     },
     "sada/padded": {
      "wer": 0.4208469055374593,
      "wer_uncapped": 0.4286644951140065,
      "cer": 0.24526484751203853,
      "av_wer": null,
      "strict_wer": 0.44933078393881454,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.02736156351791531
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.2312621196359406,
      "cer": 0.10444473466530334,
      "wer_arith": 0.28419611756980845,
      "done": 8,
      "total": 8,
      "ci": [
       0.22147,
       0.24014
      ]
     },
     "codeswitch": {
      "wer": 0.32075732013374586,
      "cer": 0.16248214895710617,
      "wer_arith": 0.3609509922783924,
      "done": 2,
      "total": 2,
      "ci": [
       0.26996,
       0.38429
      ]
     },
     "noisy": {
      "wer": 0.25703665774213996,
      "cer": 0.1257250758645082,
      "wer_arith": 0.28956441491024437,
      "done": 5,
      "total": 5,
      "ci": [
       0.24087,
       0.27205
      ]
     },
     "telephony": {
      "wer": 0.29846605893098554,
      "cer": 0.14712014028031,
      "wer_arith": 0.3446274789527118,
      "done": 6,
      "total": 6,
      "ci": [
       0.28423,
       0.312
      ]
     },
     "callcenter": {
      "wer": 0.4317072628955721,
      "cer": 0.2511281191003527,
      "wer_arith": 0.4665491989606805,
      "done": 6,
      "total": 6,
      "ci": [
       0.41501,
       0.44611
      ]
     }
    },
    "arena": 0.26945511233181296,
    "arena_arith": 0.320793037654539,
    "arena_cer": 0.12963854766116226,
    "arena_strict": 0.282778370758605,
    "zero_shot": 0.35817345895643754,
    "arena_real": 0.24878582623871437,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.14666666666666667,
    "rank": 11,
    "arena_ci": [
     0.25828,
     0.28089
    ],
    "rank_set": [
     11,
     12
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
    "fleurs_ar/clean": {
     "wer": 0.10637509266123055,
     "cer": 0.04642166344294004,
     "rtfx": 20.58,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.15188866799204773,
     "cer": 0.06725878078320549,
     "rtfx": 20.62,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1044776119402985,
     "cer": 0.03974073425260893,
     "rtfx": 19.3,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.15953469048608226,
     "cer": 0.0723277117204562,
     "rtfx": 21.57,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4896327415638975,
     "cer": 0.31175165686098905,
     "rtfx": 19.81,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6380429812528577,
     "cer": 0.37246161466072314,
     "rtfx": 19.4,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.34668820678513734,
     "cer": 0.1718017950715574,
     "rtfx": 21.72,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7975534597067887,
     "cer": 0.5010793308148948,
     "rtfx": 20.38,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.23755284170972288,
     "cer": 0.1158529861209572,
     "rtfx": 20.67,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.4958440813986816,
     "cer": 0.2628531226323195,
     "rtfx": 18.21,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2474024150519517,
     "cer": 0.11481581070180157,
     "rtfx": 18.56,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7950321658327377,
     "cer": 0.5757880556802873,
     "rtfx": 18.54,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1586316908897554,
     "cer": 0.07877576130421408,
     "rtfx": 20.08,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.3104596935376416,
     "cer": 0.18693755113171528,
     "rtfx": 19.46,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.2632013201320132,
     "cer": 0.15555224029041723,
     "rtfx": 20.68,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6713086217489248,
     "cer": 0.5402399400149962,
     "rtfx": 18.48,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.16040411201701524,
     "cer": 0.08062134727776069,
     "rtfx": 20.09,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.3084610259826782,
     "cer": 0.19048268339241886,
     "rtfx": 19.5,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.23047304730473048,
     "cer": 0.12894723755532347,
     "rtfx": 20.71,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6553348351423305,
     "cer": 0.5030409064400566,
     "rtfx": 18.46,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.8003814367450731,
     "cer": 0.6265960759887885,
     "rtfx": 16.22,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.452494497432135,
     "cer": 0.2640063904723866,
     "rtfx": 20.98,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.5083303792981212,
     "cer": 0.3971393417410028,
     "rtfx": 20.06,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.6135909393737509,
     "cer": 0.5036814835014999,
     "rtfx": 19.37,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5407040704070407,
     "cer": 0.4396041573424835,
     "rtfx": 20.61,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8720049150112635,
     "cer": 0.79680079980005,
     "rtfx": 18.42,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9189446916719644,
     "cer": 0.8406726876362504,
     "rtfx": 16.27,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7160674981658107,
     "cer": 0.5857085799353691,
     "rtfx": 20.96,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.44,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.15402339595887982,
     "cer": 0.074930790525992,
     "rtfx": 20.18,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.28914057295136575,
     "cer": 0.15912189800927187,
     "rtfx": 20.02,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.19911991199119913,
     "cer": 0.10090009448505645,
     "rtfx": 21.1,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.6387466721277902,
     "cer": 0.4753811547113222,
     "rtfx": 18.79,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.7762237762237763,
     "cer": 0.5834319526627219,
     "rtfx": 16.65,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.43103448275862066,
     "cer": 0.24334628372245015,
     "rtfx": 21.49,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.28961361219425735,
     "cer": 0.17877576130421408,
     "rtfx": 20.29,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.4890073284477015,
     "cer": 0.338014725934006,
     "rtfx": 19.72,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.3534103410341034,
     "cer": 0.22810681784275696,
     "rtfx": 20.91,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.7761621953716977,
     "cer": 0.6532950095809381,
     "rtfx": 18.57,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.8699936427209154,
     "cer": 0.740392401121146,
     "rtfx": 16.63,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.6107850330154072,
     "cer": 0.443447950328601,
     "rtfx": 21.15,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.2900210822206606,
     "cer": 0.19079104628785576,
     "rtfx": 21.22,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.4294134983790156,
     "cer": 0.3325986530862136,
     "rtfx": 20.5,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.15784061696658097,
     "cer": 0.09399268053200036,
     "rtfx": 18.56,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.23625254582484725,
     "cer": 0.1451476793248945,
     "rtfx": 17.68,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.2064102564102564,
     "cer": 0.14060634996419194,
     "rtfx": 18.17,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.5073295092415552,
     "cer": 0.3468237704918033,
     "rtfx": 18.17,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.19,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.34927418154854256,
     "cer": 0.19785541095092188,
     "done": 8,
     "total": 8,
     "ci": [
      0.34343,
      0.35555
     ]
    },
    "codeswitch": {
     "wer": 0.3666984615542022,
     "cer": 0.18935305437663835,
     "done": 2,
     "total": 2,
     "ci": [
      0.34558,
      0.38795
     ]
    },
    "noisy": {
     "wer": 0.4076726511988374,
     "cer": 0.2753515598539053,
     "done": 6,
     "total": 6,
     "ci": [
      0.39429,
      0.42111
     ]
    },
    "telephony": {
     "wer": 0.4345914924373271,
     "cer": 0.2989491068544558,
     "done": 6,
     "total": 6,
     "ci": [
      0.41964,
      0.45014
     ]
    },
    "callcenter": {
     "wer": 0.6949404156546586,
     "cer": 0.5939345083261093,
     "done": 6,
     "total": 6,
     "ci": [
      0.67736,
      0.71173
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
   "hallucination_rate": 0.08666666666666667,
   "inserted_wpm": 6.17,
   "arena_wer": 0.44597308899563287,
   "arena_cer": 0.3080641562846853,
   "arena_ci": [
    0.43978,
    0.45215
   ],
   "rank_range": [
    11,
    11
   ],
   "rtfx": 20.1,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.08666666666666667,
    "halluc_3plus": 0.07666666666666666,
    "halluc_3plus_ci": [
     0.05163,
     0.11241
    ],
    "inserted_wpm": 6.17096000973739,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.09696969696969697,
      "wer_uncapped": 0.10030921459492888,
      "cer": 0.046463762895881035,
      "av_wer": null,
      "strict_wer": 0.10251020155805614,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00878169449598021
     },
     "cv18_ar/clean": {
      "wer": 0.14416567104739147,
      "wer_uncapped": 0.14695340501792115,
      "cer": 0.06627116191578643,
      "av_wer": null,
      "strict_wer": 0.14831013916500993,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00796495420151334
     },
     "masc_clean/clean": {
      "wer": 0.09574609947993065,
      "wer_uncapped": 0.09827977063608481,
      "cer": 0.03948194897257201,
      "av_wer": null,
      "strict_wer": 0.10181236673773987,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007601013468462462
     },
     "mgb2/clean": {
      "wer": 0.14504324683965403,
      "wer_uncapped": 0.1469560878243513,
      "cer": 0.06947610277357355,
      "av_wer": null,
      "strict_wer": 0.15646032405484006,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01081170991350632
     },
     "sada/clean": {
      "wer": 0.45901639344262296,
      "wer_uncapped": 0.4702912084111503,
      "cer": 0.30078886951718425,
      "av_wer": null,
      "strict_wer": 0.47892668383249765,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.002004008016032064,
      "insertions": 0.026699868575776442
     },
     "casablanca/clean": {
      "wer": 0.5963370641013782,
      "wer_uncapped": 0.6132642678753122,
      "cer": 0.36435473674704233,
      "av_wer": null,
      "strict_wer": 0.6209419295839049,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.002012072434607646,
      "insertions": 0.035981870317269446
     },
     "mgb3_egy/clean": {
      "wer": 0.24505066917518278,
      "wer_uncapped": 0.24879919043343168,
      "cer": 0.15195269154780913,
      "av_wer": 0.2869094878045453,
      "strict_wer": 0.27394379403648833,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007240489730762105
     },
     "mgb5_mor/clean": {
      "wer": 0.5712712623498805,
      "wer_uncapped": 0.5966595657987197,
      "cer": 0.4712848386723719,
      "av_wer": null,
      "strict_wer": 0.5757499113651209,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.028830383232027343
     },
     "mixat_cs/clean": {
      "wer": 0.21113304382155546,
      "wer_uncapped": 0.21354125542834584,
      "cer": 0.1161950455302066,
      "av_wer": 0.21655885318164853,
      "strict_wer": 0.2257116548792195,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.014646664034741413
     },
     "algerian_cs/clean": {
      "wer": 0.44374463212138565,
      "wer_uncapped": 0.4589178356713427,
      "cer": 0.24924609938376818,
      "av_wer": null,
      "strict_wer": 0.47757783490431305,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.036072144288577156
     },
     "masc_noisy/clean": {
      "wer": 0.22619718309859155,
      "wer_uncapped": 0.23084507042253521,
      "cer": 0.11357635087267341,
      "av_wer": null,
      "strict_wer": 0.24206683515866328,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015070422535211268
     },
     "nadi_robust/clean": {
      "wer": 0.7592190889370932,
      "wer_uncapped": 0.7824475777295734,
      "cer": 0.5737639553429027,
      "av_wer": null,
      "strict_wer": 0.7730521801286633,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.035430224150397684
     },
     "fleurs_ar/noisy": {
      "wer": 0.15059492097318417,
      "wer_uncapped": 0.15308115787604334,
      "cer": 0.08044918998527247,
      "av_wer": null,
      "strict_wer": 0.1553622159090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011365654413070502
     },
     "cv18_ar/noisy": {
      "wer": 0.2939211756847027,
      "wer_uncapped": 0.3059452237808951,
      "cer": 0.1844295740166476,
      "av_wer": null,
      "strict_wer": 0.2978014656895403,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022712090848363394
     },
     "mgb2/noisy": {
      "wer": 0.2504811657959857,
      "wer_uncapped": 0.2537805883970305,
      "cer": 0.1523502743975185,
      "av_wer": null,
      "strict_wer": 0.26045104510451045,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01347264228759967
     },
     "sada/noisy": {
      "wer": 0.6444723618090452,
      "wer_uncapped": 0.6587102177554439,
      "cer": 0.5278040079739796,
      "av_wer": null,
      "strict_wer": 0.6577923407741143,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.027847571189279732
     },
     "fleurs_ar/telephony": {
      "wer": 0.15006215592257147,
      "wer_uncapped": 0.1555673947789025,
      "cer": 0.08232695139911635,
      "av_wer": null,
      "strict_wer": 0.1534090909090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013851891315929675
     },
     "cv18_ar/telephony": {
      "wer": 0.28724114896459585,
      "wer_uncapped": 0.3026052104208417,
      "cer": 0.18753060225232576,
      "av_wer": null,
      "strict_wer": 0.2931379080612925,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02137608550434202
     },
     "mgb2/telephony": {
      "wer": 0.21776189166895793,
      "wer_uncapped": 0.22298597745394555,
      "cer": 0.12938439513242664,
      "av_wer": null,
      "strict_wer": 0.22497249724972498,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013747594171020072
     },
     "sada/telephony": {
      "wer": 0.6247906197654941,
      "wer_uncapped": 0.6411222780569514,
      "cer": 0.4889833175952156,
      "av_wer": null,
      "strict_wer": 0.6395658406717182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02554438860971524
     },
     "casablanca/telephony": {
      "wer": 0.7677998717126363,
      "wer_uncapped": 0.7851186658114175,
      "cer": 0.6225651210755481,
      "av_wer": null,
      "strict_wer": 0.7822631913541005,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027261064785118666
     },
     "mgb3_egy/telephony": {
      "wer": 0.3638352700928672,
      "wer_uncapped": 0.36971848106189525,
      "cer": 0.24903243641725029,
      "av_wer": 0.4056400895422545,
      "strict_wer": 0.3830661734484176,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.010891233529440365
     },
     "fleurs_ar/callcenter": {
      "wer": 0.4910317883146866,
      "wer_uncapped": 0.5054164446812289,
      "cer": 0.40246686303387336,
      "av_wer": null,
      "strict_wer": 0.4939630681818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02823654768247203
     },
     "cv18_ar/callcenter": {
      "wer": 0.5891783567134269,
      "wer_uncapped": 0.6078824315297261,
      "cer": 0.49747021380773626,
      "av_wer": null,
      "strict_wer": 0.5936042638241172,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024716098864395457
     },
     "mgb2/callcenter": {
      "wer": 0.5323068463018972,
      "wer_uncapped": 0.5345064613692604,
      "cer": 0.4419589596754951,
      "av_wer": null,
      "strict_wer": 0.5396039603960396,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012647786637338466
     },
     "sada/callcenter": {
      "wer": 0.8525963149078727,
      "wer_uncapped": 0.8655778894472361,
      "cer": 0.7877452523344874,
      "av_wer": null,
      "strict_wer": 0.8599221789883269,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017587939698492462
     },
     "casablanca/callcenter": {
      "wer": 0.90891597177678,
      "wer_uncapped": 0.9121231558691469,
      "cer": 0.8397372240470552,
      "av_wer": null,
      "strict_wer": 0.9141767323585506,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008338678640153944
     },
     "mgb3_egy/callcenter": {
      "wer": 0.6505080954927797,
      "wer_uncapped": 0.6608644916613994,
      "cer": 0.5827957980095835,
      "av_wer": 0.6933375402639685,
      "strict_wer": 0.6514134356304516,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011085719842466087
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.1461552122180785,
      "wer_uncapped": 0.1488190374711419,
      "cer": 0.07680412371134021,
      "av_wer": null,
      "strict_wer": 0.15056818181818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011543242763274729
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.2792251169004676,
      "wer_uncapped": 0.28390113560454244,
      "cer": 0.15782601599477722,
      "av_wer": null,
      "strict_wer": 0.28314457028647566,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014028056112224449
     },
     "mgb2/telephony_v2": {
      "wer": 0.18916689579323617,
      "wer_uncapped": 0.1913665108605994,
      "cer": 0.10134812693867812,
      "av_wer": null,
      "strict_wer": 0.19774477447744773,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010723123453395655
     },
     "sada/telephony_v2": {
      "wer": 0.6038525963149078,
      "wer_uncapped": 0.625,
      "cer": 0.45965795824152766,
      "av_wer": null,
      "strict_wer": 0.6182674585295924,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.03329145728643216
     },
     "casablanca/telephony_v2": {
      "wer": 0.7485567671584349,
      "wer_uncapped": 0.7601026298909558,
      "cer": 0.5768084943854557,
      "av_wer": null,
      "strict_wer": 0.764780673871583,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.024695317511225143
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.3391841299168571,
      "wer_uncapped": 0.3428793698643458,
      "cer": 0.2282067821599705,
      "av_wer": 0.3792405291158723,
      "strict_wer": 0.3609170205964287,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.010696747216414644
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.273486059314509,
      "wer_uncapped": 0.28609483217900905,
      "cer": 0.1832842415316642,
      "av_wer": null,
      "strict_wer": 0.2766335227272727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025395134079204403
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.4529058116232465,
      "wer_uncapped": 0.48563794255177023,
      "cer": 0.32609760078341765,
      "av_wer": null,
      "strict_wer": 0.4563624250499667,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.041416165664662656
     },
     "mgb2/callcenter_v2": {
      "wer": 0.3354412977728897,
      "wer_uncapped": 0.3469892768765466,
      "cer": 0.22751133381054642,
      "av_wer": null,
      "strict_wer": 0.34213421342134215,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0189716799560077
     },
     "sada/callcenter_v2": {
      "wer": 0.7491624790619765,
      "wer_uncapped": 0.768425460636516,
      "cer": 0.6427971881229672,
      "av_wer": null,
      "strict_wer": 0.7579356952693017,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.029103852596314907
     },
     "casablanca/callcenter_v2": {
      "wer": 0.8422065426555484,
      "wer_uncapped": 0.8608082103912764,
      "cer": 0.7366129401879153,
      "av_wer": null,
      "strict_wer": 0.8506039415130324,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024053880692751765
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.5404288423202217,
      "wer_uncapped": 0.5432002722808382,
      "cer": 0.4381220051603391,
      "av_wer": 0.5762557413708437,
      "strict_wer": 0.5487053020961775,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.0075849662080031115
     },
     "fleurs_ar/sweep": {
      "wer": 0.2795827473042663,
      "wer_uncapped": 0.2844819503047351,
      "cer": 0.1967838806548484,
      "av_wer": null,
      "strict_wer": 0.28450539146741677,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.00044444444444444447,
      "insertions": 0.010947022972339428
     },
     "masc_clean/sweep": {
      "wer": 0.41051077649837614,
      "wer_uncapped": 0.4242102155299675,
      "cer": 0.32878334331138165,
      "av_wer": null,
      "strict_wer": 0.4153256704980843,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.00044444444444444447,
      "insertions": 0.021375848833776204
     },
     "fleurs_ar/padded": {
      "wer": 0.13484302624806999,
      "wer_uncapped": 0.1487390633041688,
      "cer": 0.08482905982905983,
      "av_wer": null,
      "strict_wer": 0.14307771487390633,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02624806999485332
     },
     "cv18_ar/padded": {
      "wer": 0.19222903885480572,
      "wer_uncapped": 0.22903885480572597,
      "cer": 0.11868686868686869,
      "av_wer": null,
      "strict_wer": 0.19959266802443992,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05112474437627812
     },
     "masc_clean/padded": {
      "wer": 0.17737789203084833,
      "wer_uncapped": 0.20051413881748073,
      "cer": 0.11994301994301994,
      "av_wer": null,
      "strict_wer": 0.18205128205128204,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05012853470437018
     },
     "sada/padded": {
      "wer": 0.48143322475570033,
      "wer_uncapped": 0.4866449511400652,
      "cer": 0.336115569823435,
      "av_wer": null,
      "strict_wer": 0.5022307202039515,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.024755700325732898
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.22852927727861352,
      "cer": 0.12667221954707725,
      "wer_arith": 0.2942000129257172,
      "done": 8,
      "total": 8,
      "ci": [
       0.21743,
       0.23876
      ]
     },
     "codeswitch": {
      "wer": 0.30608684202243086,
      "cer": 0.17017979276671877,
      "wer_arith": 0.32743883797147055,
      "done": 2,
      "total": 2,
      "ci": [
       0.27348,
       0.35458
      ]
     },
     "noisy": {
      "wer": 0.2765040859373456,
      "cer": 0.16841905061159687,
      "wer_arith": 0.3131333614723019,
      "done": 5,
      "total": 5,
      "ci": [
       0.25677,
       0.29524
      ]
     },
     "telephony": {
      "wer": 0.3252376802843562,
      "cer": 0.20505119574764638,
      "wer_arith": 0.38435678638366366,
      "done": 6,
      "total": 6,
      "ci": [
       0.30538,
       0.34335
      ]
     },
     "callcenter": {
      "wer": 0.4919060085615246,
      "cer": 0.37589281482211906,
      "wer_arith": 0.5322718387913986,
      "done": 6,
      "total": 6,
      "ci": [
       0.47157,
       0.50989
      ]
     }
    },
    "arena": 0.27479647245834726,
    "arena_arith": 0.3348486988969307,
    "arena_cer": 0.1616695405174373,
    "arena_strict": 0.2879143867331286,
    "zero_shot": 0.34431326679054075,
    "arena_real": 0.24363438690643188,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.06,
    "rank": 12,
    "arena_ci": [
     0.26401,
     0.28665
    ],
    "rank_set": [
     11,
     13
    ]
   }
  },
  {
   "model": "qwen3-asr-arabic-ksa",
   "hf_id": "vadimbelsky/qwen3-asr-arabic-ksa",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.12527798369162343,
     "cer": 0.044745325596389426,
     "rtfx": 118.87,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.205168986083499,
     "cer": 0.07363746467501009,
     "rtfx": 99.75,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.14698827292110875,
     "cer": 0.047323506594259115,
     "rtfx": 83.52,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.18928126298296635,
     "cer": 0.07117507886435331,
     "rtfx": 101.73,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4713375796178344,
     "cer": 0.22762032048720668,
     "rtfx": 59.59,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.633196159122085,
     "cer": 0.28052024287784566,
     "rtfx": 69.54,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.4156165858912224,
     "cer": 0.1770738839500112,
     "rtfx": 77.19,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8141749929965449,
     "cer": 0.4061701744918151,
     "rtfx": 31.95,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2307812744637545,
     "cer": 0.09469571655875357,
     "rtfx": 116.19,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6196617942103755,
     "cer": 0.3355341487173937,
     "rtfx": 31.49,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.3032855939342881,
     "cer": 0.12745361656359236,
     "rtfx": 70.41,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.751072194424589,
     "cer": 0.39184553210597217,
     "rtfx": 34.81,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.162885501595179,
     "cer": 0.062011688711165795,
     "rtfx": 111.24,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.38974017321785476,
     "cer": 0.20643577856558495,
     "rtfx": 86.46,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.253025302530253,
     "cer": 0.10960266547317121,
     "rtfx": 98.75,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6442760597993037,
     "cer": 0.3912771807048238,
     "rtfx": 29.0,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.16536689117334277,
     "cer": 0.061273454321747155,
     "rtfx": 106.63,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.2871419053964024,
     "cer": 0.12135260430869921,
     "rtfx": 110.02,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.24642464246424642,
     "cer": 0.09950768312695808,
     "rtfx": 53.01,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5820192504607823,
     "cer": 0.30908939431808713,
     "rtfx": 75.59,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7517482517482518,
     "cer": 0.3785736530675802,
     "rtfx": 54.26,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.49137931034482757,
     "cer": 0.22831414981300607,
     "rtfx": 54.69,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.38532435306628854,
     "cer": 0.1911719470932021,
     "rtfx": 114.93,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.7315123251165889,
     "cer": 0.4667302972457049,
     "rtfx": 80.63,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.4782728272827283,
     "cer": 0.249341091053757,
     "rtfx": 28.16,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7849682572189228,
     "cer": 0.49825043739065233,
     "rtfx": 49.35,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.938652256834075,
     "cer": 0.5940828402366863,
     "rtfx": 31.55,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6821349963316214,
     "cer": 0.3985330961112523,
     "rtfx": 31.15,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 36.01,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.16359447004608296,
     "cer": 0.06351891725622885,
     "rtfx": 76.24,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.30712858094603596,
     "cer": 0.1276247613853286,
     "rtfx": 96.29,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.23817381738173818,
     "cer": 0.0972698791585857,
     "rtfx": 58.59,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.5603112840466926,
     "cer": 0.29084395567774723,
     "rtfx": 38.98,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.7345835982199619,
     "cer": 0.3706633447524136,
     "rtfx": 55.12,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.4906456346294938,
     "cer": 0.2273337932536945,
     "rtfx": 92.2,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.24955689471818504,
     "cer": 0.1081820978160566,
     "rtfx": 112.25,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.4943371085942705,
     "cer": 0.28565584946823014,
     "rtfx": 78.07,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.3465346534653465,
     "cer": 0.1589835397085882,
     "rtfx": 99.58,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.6860536555396273,
     "cer": 0.3956094309755894,
     "rtfx": 36.39,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.828353464717101,
     "cer": 0.4700716287760822,
     "rtfx": 34.97,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.6148202494497432,
     "cer": 0.3246795686431139,
     "rtfx": 89.4,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.2509721246193488,
     "cer": 0.1105803707079915,
     "rtfx": 133.64,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.42281167108753315,
     "cer": 0.23350587187621752,
     "rtfx": 54.25,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.12596401028277635,
     "cer": 0.04168526287601535,
     "rtfx": 131.72,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.26272912423625255,
     "cer": 0.12236286919831224,
     "rtfx": 50.71,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.16794871794871793,
     "cer": 0.06135115779422296,
     "rtfx": 144.13,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.4684512428298279,
     "cer": 0.20952868852459017,
     "rtfx": 45.28,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 48.2,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.37513022791336054,
     "cer": 0.1660332496921113,
     "done": 8,
     "total": 8,
     "ci": [
      0.36984,
      0.38047
     ]
    },
    "codeswitch": {
     "wer": 0.425221534337065,
     "cer": 0.21511493263807363,
     "done": 2,
     "total": 2,
     "ci": [
      0.4011,
      0.44813
     ]
    },
    "noisy": {
     "wer": 0.41738080425024454,
     "cer": 0.21477107702071838,
     "done": 6,
     "total": 6,
     "ci": [
      0.40086,
      0.43578
     ]
    },
    "telephony": {
     "wer": 0.42068004193130887,
     "cer": 0.19968515649267962,
     "done": 6,
     "total": 6,
     "ci": [
      0.40806,
      0.43352
     ]
    },
    "callcenter": {
     "wer": 0.6668108359750375,
     "cer": 0.39968495152187583,
     "done": 6,
     "total": 6,
     "ci": [
      0.64818,
      0.68629
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
   "finetune_of": "vadimbelsky/qwen3-asr-arabic-uae",
   "in_domain": [],
   "notes": "Saudi",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 88.68,
   "arena_wer": 0.45392302942218865,
   "arena_cer": 0.23171281381206518,
   "arena_ci": [
    0.44775,
    0.45995
   ],
   "rank_range": [
    12,
    13
   ],
   "rtfx": 66.7,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.9966666666666667,
    "halluc_3plus_ci": [
     0.98136,
     0.99941
    ],
    "inserted_wpm": 88.67980301762904,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.11787260358688931,
      "wer_uncapped": 0.11787260358688931,
      "cer": 0.045949214026602174,
      "av_wer": null,
      "strict_wer": 0.12278966242116977,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00766852195423624
     },
     "cv18_ar/clean": {
      "wer": 0.1812027080844285,
      "wer_uncapped": 0.19414575866188769,
      "cer": 0.06540298075531761,
      "av_wer": null,
      "strict_wer": 0.19125248508946321,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023297491039426525
     },
     "masc_clean/clean": {
      "wer": 0.13375116682224297,
      "wer_uncapped": 0.13641818909187892,
      "cer": 0.046152005503544404,
      "av_wer": null,
      "strict_wer": 0.1441897654584222,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013335111348179758
     },
     "mgb2/clean": {
      "wer": 0.17173985362608118,
      "wer_uncapped": 0.1719061876247505,
      "cer": 0.07024198107186491,
      "av_wer": null,
      "strict_wer": 0.18911508101371002,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01746506986027944
     },
     "sada/clean": {
      "wer": 0.42470775402919003,
      "wer_uncapped": 0.44864079684581865,
      "cer": 0.21154476877664807,
      "av_wer": null,
      "strict_wer": 0.4482314676785472,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.006012024048096192,
      "insertions": 0.05720412257038113
     },
     "casablanca/clean": {
      "wer": 0.5860697437794838,
      "wer_uncapped": 0.6043844232725927,
      "cer": 0.2702293867967127,
      "av_wer": null,
      "strict_wer": 0.6137174211248285,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.001006036217303823,
      "insertions": 0.04874664693367866
     },
     "mgb3_egy/clean": {
      "wer": 0.3439945268739043,
      "wer_uncapped": 0.3441798149969356,
      "cer": 0.1740371863920539,
      "av_wer": 0.3745503753201662,
      "strict_wer": 0.3502558469740402,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.017046507318880858
     },
     "mgb5_mor/clean": {
      "wer": 0.6230181040483912,
      "wer_uncapped": 0.6542279271883128,
      "cer": 0.37754134381866544,
      "av_wer": null,
      "strict_wer": 0.6060835515236955,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.003,
      "insertions": 0.05581266497482216
     },
     "mixat_cs/clean": {
      "wer": 0.19865771812080538,
      "wer_uncapped": 0.19873667587840504,
      "cer": 0.09121707627533536,
      "av_wer": 0.19770100381013153,
      "strict_wer": 0.2195012048664851,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02009474930911962
     },
     "algerian_cs/clean": {
      "wer": 0.5413684511880905,
      "wer_uncapped": 0.5903235041511594,
      "cer": 0.30424806608102795,
      "av_wer": null,
      "strict_wer": 0.56583833190517,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0031645569620253164,
      "insertions": 0.07300314915545376
     },
     "masc_noisy/clean": {
      "wer": 0.2532394366197183,
      "wer_uncapped": 0.2776056338028169,
      "cer": 0.10971211438140015,
      "av_wer": null,
      "strict_wer": 0.2774501544509969,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.0452112676056338
     },
     "nadi_robust/clean": {
      "wer": 0.705350686912509,
      "wer_uncapped": 0.7366232827187275,
      "cer": 0.3850345560871877,
      "av_wer": null,
      "strict_wer": 0.7198892065761258,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.005,
      "insertions": 0.055856832971800434
     },
     "fleurs_ar/noisy": {
      "wer": 0.1541466879772687,
      "wer_uncapped": 0.1541466879772687,
      "cer": 0.06509572901325479,
      "av_wer": null,
      "strict_wer": 0.16051136363636365,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009234594210619783
     },
     "cv18_ar/noisy": {
      "wer": 0.3079492317969272,
      "wer_uncapped": 0.37808951235804944,
      "cer": 0.15929492410641424,
      "av_wer": null,
      "strict_wer": 0.31778814123917387,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09552438209752839
     },
     "mgb2/noisy": {
      "wer": 0.23838328292548805,
      "wer_uncapped": 0.24003299422601046,
      "cer": 0.11280124075399665,
      "av_wer": null,
      "strict_wer": 0.25165016501650167,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021721198790211713
     },
     "sada/noisy": {
      "wer": 0.559463986599665,
      "wer_uncapped": 0.6317001675041876,
      "cer": 0.33259888783968106,
      "av_wer": null,
      "strict_wer": 0.5758754863813229,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09736180904522614
     },
     "fleurs_ar/telephony": {
      "wer": 0.15876398508257858,
      "wer_uncapped": 0.15876398508257858,
      "cer": 0.06491163475699559,
      "av_wer": null,
      "strict_wer": 0.16352982954545456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011365654413070502
     },
     "cv18_ar/telephony": {
      "wer": 0.2651970607882432,
      "wer_uncapped": 0.2785571142284569,
      "cer": 0.11685980088134487,
      "av_wer": null,
      "strict_wer": 0.27381745502998,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02338009352037408
     },
     "mgb2/telephony": {
      "wer": 0.22738520758867198,
      "wer_uncapped": 0.22848501512235359,
      "cer": 0.10081126222858507,
      "av_wer": null,
      "strict_wer": 0.24504950495049505,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02337091009073412
     },
     "sada/telephony": {
      "wer": 0.5288944723618091,
      "wer_uncapped": 0.5661641541038526,
      "cer": 0.2911027174483265,
      "av_wer": null,
      "strict_wer": 0.5482285480237559,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.06427973199329984
     },
     "casablanca/telephony": {
      "wer": 0.6966003848620911,
      "wer_uncapped": 0.7280307889672867,
      "cer": 0.3741501795126423,
      "av_wer": null,
      "strict_wer": 0.7171010807374444,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.0651058370750481
     },
     "mgb3_egy/telephony": {
      "wer": 0.42631399815238,
      "wer_uncapped": 0.42631399815238,
      "cer": 0.2323995576852193,
      "av_wer": 0.4571850668385,
      "strict_wer": 0.42215828652326803,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019254144989546362
     },
     "fleurs_ar/callcenter": {
      "wer": 0.3766648907831646,
      "wer_uncapped": 0.3796838927366365,
      "cer": 0.20500736377025036,
      "av_wer": null,
      "strict_wer": 0.3806818181818182,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022020955425324097
     },
     "cv18_ar/callcenter": {
      "wer": 0.539746158984636,
      "wer_uncapped": 0.7267869071476286,
      "cer": 0.35955606332626083,
      "av_wer": null,
      "strict_wer": 0.5463024650233178,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.20975283901135605
     },
     "mgb2/callcenter": {
      "wer": 0.457519934011548,
      "wer_uncapped": 0.4674182018146824,
      "cer": 0.2592460033404915,
      "av_wer": null,
      "strict_wer": 0.4680968096809681,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.03161946659334616
     },
     "sada/callcenter": {
      "wer": 0.7085427135678392,
      "wer_uncapped": 0.7751256281407035,
      "cer": 0.46952051201342987,
      "av_wer": null,
      "strict_wer": 0.7227114478804014,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.08165829145728644
     },
     "casablanca/callcenter": {
      "wer": 0.8236048749198204,
      "wer_uncapped": 0.9268762026940346,
      "cer": 0.5552669773126575,
      "av_wer": null,
      "strict_wer": 0.8347107438016529,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.013513513513513514,
      "insertions": 0.12155227710070558
     },
     "mgb3_egy/callcenter": {
      "wer": 0.6261973063645646,
      "wer_uncapped": 0.6336364078377984,
      "cer": 0.4129192775525249,
      "av_wer": 0.6633865996179819,
      "strict_wer": 0.6166141480568115,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.020615549180726406
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.1568105132303321,
      "wer_uncapped": 0.1568105132303321,
      "cer": 0.06697349042709867,
      "av_wer": null,
      "strict_wer": 0.162109375,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010300124311845143
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.27054108216432865,
      "wer_uncapped": 0.2972611890447562,
      "cer": 0.11522768075730373,
      "av_wer": null,
      "strict_wer": 0.2798134576948701,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04008016032064128
     },
     "mgb2/telephony_v2": {
      "wer": 0.21721198790211713,
      "wer_uncapped": 0.22051141050316195,
      "cer": 0.09747077069911715,
      "av_wer": null,
      "strict_wer": 0.23514851485148514,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027770140225460545
     },
     "sada/telephony_v2": {
      "wer": 0.5098408710217756,
      "wer_uncapped": 0.5437604690117253,
      "cer": 0.273371104815864,
      "av_wer": null,
      "strict_wer": 0.5295924636493958,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06532663316582915
     },
     "casablanca/telephony_v2": {
      "wer": 0.6821680564464401,
      "wer_uncapped": 0.7123155869146889,
      "cer": 0.3571919639446948,
      "av_wer": null,
      "strict_wer": 0.7015257469802925,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06414368184733804
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.42748091603053434,
      "wer_uncapped": 0.42767540234356005,
      "cer": 0.23313674898636197,
      "av_wer": 0.45718891446364057,
      "strict_wer": 0.4206968991186007,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022949384937035057
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.24453915823122002,
      "wer_uncapped": 0.24578227668264963,
      "cer": 0.11752577319587629,
      "av_wer": null,
      "strict_wer": 0.24733664772727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014384656366542355
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.39412157648630597,
      "wer_uncapped": 0.48563794255177023,
      "cer": 0.22653827321690875,
      "av_wer": null,
      "strict_wer": 0.3984010659560293,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.10754843019372078
     },
     "mgb2/callcenter_v2": {
      "wer": 0.3291174044542205,
      "wer_uncapped": 0.3315919714050041,
      "cer": 0.16517537580529706,
      "av_wer": null,
      "strict_wer": 0.34433443344334436,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.026395380808358536
     },
     "sada/callcenter_v2": {
      "wer": 0.6350502512562815,
      "wer_uncapped": 0.6735762144053601,
      "cer": 0.38411499318014897,
      "av_wer": null,
      "strict_wer": 0.6502150317427811,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.06072026800670017
     },
     "casablanca/callcenter_v2": {
      "wer": 0.758819756254009,
      "wer_uncapped": 0.810455420141116,
      "cer": 0.45527461614849896,
      "av_wer": null,
      "strict_wer": 0.7743165924984107,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.07472738935214882
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.5594885009967423,
      "wer_uncapped": 0.5632323625224874,
      "cer": 0.338509030593439,
      "av_wer": 0.5904110493125642,
      "strict_wer": 0.5484312919578025,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02139349443282929
     },
     "fleurs_ar/sweep": {
      "wer": 0.24587435536802627,
      "wer_uncapped": 0.24671823722456634,
      "cer": 0.11912234815460622,
      "av_wer": null,
      "strict_wer": 0.2489451476793249,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010525082044069385
     },
     "masc_clean/sweep": {
      "wer": 0.362444641275465,
      "wer_uncapped": 0.41529377029819897,
      "cer": 0.21837291292489855,
      "av_wer": null,
      "strict_wer": 0.3705275567344533,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0013333333333333333,
      "insertions": 0.07009152642456451
     },
     "fleurs_ar/padded": {
      "wer": 0.11940298507462686,
      "wer_uncapped": 0.11940298507462686,
      "cer": 0.0438034188034188,
      "av_wer": null,
      "strict_wer": 0.12352032938754504,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004632012352032939
     },
     "cv18_ar/padded": {
      "wer": 0.2085889570552147,
      "wer_uncapped": 0.24948875255623723,
      "cer": 0.08636363636363636,
      "av_wer": null,
      "strict_wer": 0.22606924643584522,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05725971370143149
     },
     "masc_clean/padded": {
      "wer": 0.15295629820051415,
      "wer_uncapped": 0.15938303341902313,
      "cer": 0.05527065527065527,
      "av_wer": null,
      "strict_wer": 0.16153846153846155,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02442159383033419
     },
     "sada/padded": {
      "wer": 0.4319218241042345,
      "wer_uncapped": 0.44169381107491856,
      "cer": 0.20465489566613163,
      "av_wer": null,
      "strict_wer": 0.4588910133843212,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.04299674267100977
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.2674420791508626,
      "cer": 0.11760493586372214,
      "wer_arith": 0.3227945576063264,
      "done": 8,
      "total": 8,
      "ci": [
       0.25679,
       0.27648
      ]
     },
     "codeswitch": {
      "wer": 0.327943624996158,
      "cer": 0.16659117338663654,
      "wer_arith": 0.370013084654448,
      "done": 2,
      "total": 2,
      "ci": [
       0.27947,
       0.38857
      ]
     },
     "noisy": {
      "wer": 0.27605684406125514,
      "cer": 0.13367455201882847,
      "wer_arith": 0.30263652518381345,
      "done": 5,
      "total": 5,
      "ci": [
       0.2596,
       0.29178
      ]
     },
     "telephony": {
      "wer": 0.33326457954047645,
      "cer": 0.16054613802781292,
      "wer_arith": 0.3773422377992547,
      "done": 6,
      "total": 6,
      "ci": [
       0.31764,
       0.34788
      ]
     },
     "callcenter": {
      "wer": 0.45221457955233507,
      "cer": 0.2526896731300342,
      "wer_arith": 0.48685610794646317,
      "done": 6,
      "total": 6,
      "ci": [
       0.436,
       0.46699
      ]
     }
    },
    "arena": 0.2985024489512405,
    "arena_arith": 0.3487145548534742,
    "arena_cer": 0.1406651841315718,
    "arena_strict": 0.31233007649750105,
    "zero_shot": 0.3937875365867106,
    "arena_real": 0.2790754293338284,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.8766666666666667,
    "rank": 14,
    "arena_ci": [
     0.28656,
     0.30989
    ],
    "rank_set": [
     14,
     14
    ]
   }
  },
  {
   "model": "nemotron-3.5-asr-arabic-dialectal-v2",
   "hf_id": "oddadmix/nemotron-3.5-asr-arabic-dialectal-v2",
   "params_b": 0.64,
   "license": "OpenMDW-1.1",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.1466518408697801,
     "cer": 0.051214270363206534,
     "rtfx": 421.69,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.25725646123260437,
     "cer": 0.08155026241421073,
     "rtfx": 392.23,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1896321961620469,
     "cer": 0.061513050877149075,
     "rtfx": 404.98,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.2077274615704196,
     "cer": 0.07957716573647174,
     "rtfx": 453.45,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.47404797398021414,
     "cer": 0.2166251016162145,
     "rtfx": 409.41,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.627251943301326,
     "cer": 0.2667804010052648,
     "rtfx": 396.89,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.35137318255250405,
     "cer": 0.1502011718124673,
     "rtfx": 439.7,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7207955924922962,
     "cer": 0.3431552437488757,
     "rtfx": 408.93,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2787302332863629,
     "cer": 0.12224112670731131,
     "rtfx": 433.6,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5620521639438234,
     "cer": 0.2925100119060504,
     "rtfx": 354.93,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.3076383038472339,
     "cer": 0.1132831406292014,
     "rtfx": 411.26,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7372230164403145,
     "cer": 0.37815895823978446,
     "rtfx": 396.56,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.21020914569301666,
     "cer": 0.08000615195324516,
     "rtfx": 415.46,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.4457028647568288,
     "cer": 0.20016362148895556,
     "rtfx": 402.62,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.3083058305830583,
     "cer": 0.13919140683276146,
     "rtfx": 427.64,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.593897194347737,
     "cer": 0.342914271432142,
     "rtfx": 352.93,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.22899680964197094,
     "cer": 0.08228237465395263,
     "rtfx": 422.72,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.3864090606262492,
     "cer": 0.15366784837742023,
     "rtfx": 412.19,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.2769526952695269,
     "cer": 0.10642001094037495,
     "rtfx": 429.96,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5832480032766741,
     "cer": 0.31487961342997584,
     "rtfx": 359.36,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7247298156389066,
     "cer": 0.3689816256617876,
     "rtfx": 303.93,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.44900953778429936,
     "cer": 0.21270106386841436,
     "rtfx": 427.88,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.49822757887274016,
     "cer": 0.2586588741925561,
     "rtfx": 414.41,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.6562291805463024,
     "cer": 0.4357785655849468,
     "rtfx": 414.6,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5352035203520352,
     "cer": 0.3142871351136307,
     "rtfx": 421.87,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7679705099324186,
     "cer": 0.5571523785720237,
     "rtfx": 358.24,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8572790845518118,
     "cer": 0.6115851759576456,
     "rtfx": 310.33,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6674614820249449,
     "cer": 0.4386187865364366,
     "rtfx": 423.2,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 459.38,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.22580645161290322,
     "cer": 0.08212857582282375,
     "rtfx": 236.63,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.4090606262491672,
     "cer": 0.15325879465503137,
     "rtfx": 188.45,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.26265126512651266,
     "cer": 0.10129792630165597,
     "rtfx": 229.77,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.5682981773499898,
     "cer": 0.29775889360993085,
     "rtfx": 197.0,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.7123331214240305,
     "cer": 0.3656804733727811,
     "rtfx": 140.24,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.44772560528246513,
     "cer": 0.20769035256526633,
     "rtfx": 211.04,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.35944700460829493,
     "cer": 0.15044601661027376,
     "rtfx": 227.68,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.5616255829447035,
     "cer": 0.2714753204254159,
     "rtfx": 185.25,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.41254125412541254,
     "cer": 0.19026306628872644,
     "rtfx": 181.18,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.6868728240835552,
     "cer": 0.42835124552195286,
     "rtfx": 205.27,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.7863954227590592,
     "cer": 0.4790407972594207,
     "rtfx": 142.73,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.578136463683052,
     "cer": 0.31803492974111325,
     "rtfx": 190.9,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.32052002810962754,
     "cer": 0.14209257571153652,
     "rtfx": 276.74,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.45676392572944297,
     "cer": 0.26380586631045805,
     "rtfx": 226.02,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.19383033419023135,
     "cer": 0.08462019102026243,
     "rtfx": 240.93,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.41140529531568226,
     "cer": 0.2139240506329114,
     "rtfx": 207.74,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.3,
     "cer": 0.1506326092146097,
     "rtfx": 199.76,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.49012109623964306,
     "cer": 0.24372438524590165,
     "rtfx": 211.31,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 292.24,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3718420815201489,
     "cer": 0.15632708344673255,
     "done": 8,
     "total": 8,
     "ci": [
      0.36716,
      0.37741
     ]
    },
    "codeswitch": {
     "wer": 0.42039119861509316,
     "cer": 0.20737556930668086,
     "done": 2,
     "total": 2,
     "ci": [
      0.39708,
      0.43982
     ]
    },
    "noisy": {
     "wer": 0.43382939261136483,
     "cer": 0.208952925096015,
     "done": 6,
     "total": 6,
     "ci": [
      0.42221,
      0.44635
     ]
    },
    "telephony": {
     "wer": 0.44155765370627115,
     "cer": 0.20648875615532095,
     "done": 6,
     "total": 6,
     "ci": [
      0.43014,
      0.45288
     ]
    },
    "callcenter": {
     "wer": 0.6637285593800422,
     "cer": 0.43601348599287326,
     "done": 6,
     "total": 6,
     "ci": [
      0.65109,
      0.67649
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
   "finetune_of": "nvidia/nemotron-3.5-asr-streaming-0.6b",
   "in_domain": [],
   "notes": "lahgtna-v3 (13 dialects)",
   "training_data": "",
   "hallucination_rate": 0.21,
   "inserted_wpm": 12.34,
   "arena_wer": 0.45831549990252884,
   "arena_cer": 0.23529542333106557,
   "arena_ci": [
    0.45358,
    0.46296
   ],
   "rank_range": [
    12,
    13
   ],
   "rtfx": 311.9,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.21,
    "halluc_3plus": 0.18,
    "halluc_3plus_ci": [
     0.14066,
     0.22743
    ],
    "inserted_wpm": 12.34192001947478,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.1388991960420532,
      "wer_uncapped": 0.1388991960420532,
      "cer": 0.05194370835370089,
      "av_wer": null,
      "strict_wer": 0.14541857301842462,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012863327149041434
     },
     "cv18_ar/clean": {
      "wer": 0.24372759856630824,
      "wer_uncapped": 0.24532058940661092,
      "cer": 0.08103024164375633,
      "av_wer": null,
      "strict_wer": 0.2548707753479125,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017722023098367186
     },
     "masc_clean/clean": {
      "wer": 0.18242432324309907,
      "wer_uncapped": 0.18322442992398988,
      "cer": 0.06191487452516974,
      "av_wer": null,
      "strict_wer": 0.1882995735607676,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.016268835844779304
     },
     "mgb2/clean": {
      "wer": 0.19278110445775115,
      "wer_uncapped": 0.19394544244843645,
      "cer": 0.0791954630828425,
      "av_wer": null,
      "strict_wer": 0.20614873286248442,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025365934797072522
     },
     "sada/clean": {
      "wer": 0.4499550390814138,
      "wer_uncapped": 0.45431278965207167,
      "cer": 0.2113031019661321,
      "av_wer": null,
      "strict_wer": 0.470050142295704,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.009018036072144289,
      "insertions": 0.03154181365428512
     },
     "casablanca/clean": {
      "wer": 0.5911571547497919,
      "wer_uncapped": 0.5980020349643881,
      "cer": 0.2594373701797164,
      "av_wer": null,
      "strict_wer": 0.6186556927297668,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.005030181086519115,
      "insertions": 0.04005179909351586
     },
     "mgb3_egy/clean": {
      "wer": 0.27263009364176677,
      "wer_uncapped": 0.27268710537193025,
      "cer": 0.14046388264905682,
      "av_wer": 0.30583911865194835,
      "strict_wer": 0.28499477589948297,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.015336155413976425
     },
     "mgb5_mor/clean": {
      "wer": 0.5298121917684359,
      "wer_uncapped": 0.5334544948669675,
      "cer": 0.3154620099456459,
      "av_wer": null,
      "strict_wer": 0.5252920656723786,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.032249370987107506
     },
     "mixat_cs/clean": {
      "wer": 0.24532175286221872,
      "wer_uncapped": 0.24547966837741808,
      "cer": 0.12239302849309704,
      "av_wer": 0.23814052288235696,
      "strict_wer": 0.25974178633700995,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.004,
      "insertions": 0.018673509672325304
     },
     "algerian_cs/clean": {
      "wer": 0.5093043229315775,
      "wer_uncapped": 0.5250501002004008,
      "cer": 0.2894322800576898,
      "av_wer": null,
      "strict_wer": 0.5427020851185376,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0031645569620253164,
      "insertions": 0.04666475808760378
     },
     "masc_noisy/clean": {
      "wer": 0.28492957746478875,
      "wer_uncapped": 0.2863380281690141,
      "cer": 0.11238487795453082,
      "av_wer": null,
      "strict_wer": 0.3059533838809323,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.02323943661971831
     },
     "nadi_robust/clean": {
      "wer": 0.7151120751988431,
      "wer_uncapped": 0.7217100506146059,
      "cer": 0.38042707779549884,
      "av_wer": null,
      "strict_wer": 0.7295389563974267,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.006,
      "insertions": 0.02883224873463485
     },
     "fleurs_ar/noisy": {
      "wer": 0.2022731308826141,
      "wer_uncapped": 0.20262830758302255,
      "cer": 0.08251104565537555,
      "av_wer": null,
      "strict_wer": 0.208984375,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0193571301722607
     },
     "cv18_ar/noisy": {
      "wer": 0.41750167000668004,
      "wer_uncapped": 0.43286573146292584,
      "cer": 0.19846580708340134,
      "av_wer": null,
      "strict_wer": 0.43037974683544306,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.058784235136940546
     },
     "mgb2/noisy": {
      "wer": 0.29694803409403353,
      "wer_uncapped": 0.29832279351113555,
      "cer": 0.14131472202338344,
      "av_wer": null,
      "strict_wer": 0.3063806380638064,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03051965905966456
     },
     "sada/noisy": {
      "wer": 0.573073701842546,
      "wer_uncapped": 0.5778894472361809,
      "cer": 0.3411499318014899,
      "av_wer": null,
      "strict_wer": 0.5893917673561335,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.025753768844221106
     },
     "fleurs_ar/telephony": {
      "wer": 0.2216302610548748,
      "wer_uncapped": 0.2216302610548748,
      "cer": 0.08505154639175258,
      "av_wer": null,
      "strict_wer": 0.2276278409090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018469188421239565
     },
     "cv18_ar/telephony": {
      "wer": 0.37207748830995324,
      "wer_uncapped": 0.3760855043420174,
      "cer": 0.15652031989554432,
      "av_wer": null,
      "strict_wer": 0.38241172551632246,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022712090848363394
     },
     "mgb2/telephony": {
      "wer": 0.2642287599670058,
      "wer_uncapped": 0.2653285675006874,
      "cer": 0.10725363874970174,
      "av_wer": null,
      "strict_wer": 0.2755775577557756,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.032169370360186966
     },
     "sada/telephony": {
      "wer": 0.5649078726968174,
      "wer_uncapped": 0.5680485762144054,
      "cer": 0.31429021089077747,
      "av_wer": null,
      "strict_wer": 0.5807904976448904,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02365996649916248
     },
     "casablanca/telephony": {
      "wer": 0.689544579858884,
      "wer_uncapped": 0.6969211032713277,
      "cer": 0.36910854785730657,
      "av_wer": null,
      "strict_wer": 0.7148760330578512,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.03848620910840282
     },
     "mgb3_egy/telephony": {
      "wer": 0.38294355034764427,
      "wer_uncapped": 0.38294355034764427,
      "cer": 0.20996129745669,
      "av_wer": 0.41143192811193713,
      "strict_wer": 0.3865369685345024,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01905965867652064
     },
     "fleurs_ar/callcenter": {
      "wer": 0.49298526016693306,
      "wer_uncapped": 0.49316284851713726,
      "cer": 0.27065537555228275,
      "av_wer": null,
      "strict_wer": 0.49769176136363635,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.027526194281655123
     },
     "cv18_ar/callcenter": {
      "wer": 0.6406145624582499,
      "wer_uncapped": 0.6492985971943888,
      "cer": 0.4405092214787008,
      "av_wer": null,
      "strict_wer": 0.6469020652898068,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.036072144288577156
     },
     "mgb2/callcenter": {
      "wer": 0.5276326642837503,
      "wer_uncapped": 0.5281825680505912,
      "cer": 0.32247673586256265,
      "av_wer": null,
      "strict_wer": 0.5346534653465347,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02282100632389332
     },
     "sada/callcenter": {
      "wer": 0.7548157453936348,
      "wer_uncapped": 0.7585845896147404,
      "cer": 0.5621655649984262,
      "av_wer": null,
      "strict_wer": 0.764489043620725,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015284757118927973
     },
     "casablanca/callcenter": {
      "wer": 0.8389993585631815,
      "wer_uncapped": 0.8425272610647851,
      "cer": 0.6131693529906043,
      "av_wer": null,
      "strict_wer": 0.852511125238398,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.02052597819114817
     },
     "mgb3_egy/callcenter": {
      "wer": 0.6101035639616862,
      "wer_uncapped": 0.610881509213789,
      "cer": 0.4431441208993734,
      "av_wer": 0.6446209799541739,
      "strict_wer": 0.6062017627985569,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011474692468517528
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.2184336707511987,
      "wer_uncapped": 0.21861125910140294,
      "cer": 0.0843519882179676,
      "av_wer": null,
      "strict_wer": 0.22407670454545456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01740365832001421
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.39345357381429524,
      "wer_uncapped": 0.39879759519038077,
      "cer": 0.1537457156846744,
      "av_wer": null,
      "strict_wer": 0.40306462358427714,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.033400133600534405
     },
     "mgb2/telephony_v2": {
      "wer": 0.2504811657959857,
      "wer_uncapped": 0.2510310695628265,
      "cer": 0.10224290145549988,
      "av_wer": null,
      "strict_wer": 0.26182618261826185,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02914489964256255
     },
     "sada/telephony_v2": {
      "wer": 0.5456448911222781,
      "wer_uncapped": 0.5525544388609716,
      "cer": 0.2961389151190851,
      "av_wer": null,
      "strict_wer": 0.5617448289985665,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02931323283082077
     },
     "casablanca/telephony_v2": {
      "wer": 0.6821680564464401,
      "wer_uncapped": 0.6860166773572803,
      "cer": 0.3648307997861126,
      "av_wer": null,
      "strict_wer": 0.7062937062937062,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.03175112251443233
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.38046384985656634,
      "wer_uncapped": 0.38060971459133563,
      "cer": 0.20470880943604866,
      "av_wer": 0.4110468348146506,
      "strict_wer": 0.3854865963373978,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.019643117615597804
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.35357840525661516,
      "wer_uncapped": 0.35357840525661516,
      "cer": 0.15743740795287187,
      "av_wer": null,
      "strict_wer": 0.3586647727272727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02255372047593678
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.5430861723446894,
      "wer_uncapped": 0.552438209752839,
      "cer": 0.2763179370001632,
      "av_wer": null,
      "strict_wer": 0.5509660226515656,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04275217100868404
     },
     "mgb2/callcenter_v2": {
      "wer": 0.4011547979103657,
      "wer_uncapped": 0.4033544129777289,
      "cer": 0.19523979957050824,
      "av_wer": null,
      "strict_wer": 0.4095159515951595,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.036018696728072584
     },
     "sada/callcenter_v2": {
      "wer": 0.6731574539363484,
      "wer_uncapped": 0.6765075376884422,
      "cer": 0.4332179204700451,
      "av_wer": null,
      "strict_wer": 0.6842105263157895,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.021566164154103853
     },
     "casablanca/callcenter_v2": {
      "wer": 0.7584990378447722,
      "wer_uncapped": 0.7658755612572161,
      "cer": 0.48132304636773354,
      "av_wer": null,
      "strict_wer": 0.7768595041322314,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.0327132777421424
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.5190839694656488,
      "wer_uncapped": 0.5190839694656488,
      "cer": 0.32417987467747883,
      "av_wer": 0.5510773978951389,
      "strict_wer": 0.518975202082477,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016142363981134826
     },
     "fleurs_ar/sweep": {
      "wer": 0.3153070792311299,
      "wer_uncapped": 0.31542428504453823,
      "cer": 0.14935580742032356,
      "av_wer": null,
      "strict_wer": 0.31947960618846694,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015775902484763245
     },
     "masc_clean/sweep": {
      "wer": 0.44906997342781224,
      "wer_uncapped": 0.45090050191910247,
      "cer": 0.267584647109692,
      "av_wer": null,
      "strict_wer": 0.45434718538166813,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01771479185119575
     },
     "fleurs_ar/padded": {
      "wer": 0.17858980957282553,
      "wer_uncapped": 0.18630983015954708,
      "cer": 0.08151709401709402,
      "av_wer": null,
      "strict_wer": 0.184251158003088,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04632012352032939
     },
     "cv18_ar/padded": {
      "wer": 0.3333333333333333,
      "wer_uncapped": 0.3987730061349693,
      "cer": 0.15808080808080807,
      "av_wer": null,
      "strict_wer": 0.34623217922606925,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.13701431492842536
     },
     "masc_clean/padded": {
      "wer": 0.2532133676092545,
      "wer_uncapped": 0.2917737789203085,
      "cer": 0.11965811965811966,
      "av_wer": null,
      "strict_wer": 0.2602564102564103,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.10411311053984576
     },
     "sada/padded": {
      "wer": 0.4560260586319218,
      "wer_uncapped": 0.46905537459283386,
      "cer": 0.23595505617977527,
      "av_wer": null,
      "strict_wer": 0.4780114722753346,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.04820846905537459
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.286774104640149,
      "cer": 0.12232513135145329,
      "wer_arith": 0.3251733376938275,
      "done": 8,
      "total": 8,
      "ci": [
       0.2768,
       0.29625
      ]
     },
     "codeswitch": {
      "wer": 0.3534733784061822,
      "cer": 0.18821395617733253,
      "wer_arith": 0.3773130378968981,
      "done": 2,
      "total": 2,
      "ci": [
       0.29732,
       0.42491
      ]
     },
     "noisy": {
      "wer": 0.3330005695474139,
      "cer": 0.15474180992308476,
      "wer_arith": 0.3549452228581325,
      "done": 5,
      "total": 5,
      "ci": [
       0.31728,
       0.34846
      ]
     },
     "telephony": {
      "wer": 0.3807885118219083,
      "cer": 0.17560727484915262,
      "wer_arith": 0.411774201297794,
      "done": 6,
      "total": 6,
      "ci": [
       0.36697,
       0.39381
      ]
     },
     "callcenter": {
      "wer": 0.5227924373822543,
      "cer": 0.2882940949841601,
      "wer_arith": 0.5414266394597399,
      "done": 6,
      "total": 6,
      "ci": [
       0.50774,
       0.5364
      ]
     }
    },
    "arena": 0.33059138558215784,
    "arena_arith": 0.3677454920359217,
    "arena_cer": 0.1526984380829646,
    "arena_strict": 0.3436814411216164,
    "zero_shot": 0.3731396287526287,
    "arena_real": 0.3002267673866781,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.05,
    "rank": 17,
    "arena_ci": [
     0.31831,
     0.34331
    ],
    "rank_set": [
     16,
     17
    ]
   }
  },
  {
   "model": "qwen3-asr-arabic-uae",
   "hf_id": "vadimbelsky/qwen3-asr-arabic-uae",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.12910798122065728,
     "cer": 0.04539007092198582,
     "rtfx": 115.43,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.24930417495029822,
     "cer": 0.10549051271699636,
     "rtfx": 95.82,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1635127931769723,
     "cer": 0.05871017793238069,
     "rtfx": 79.96,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.19443290402991276,
     "cer": 0.07199405484105799,
     "rtfx": 100.51,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4791299634096761,
     "cer": 0.2322361078578613,
     "rtfx": 45.81,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6458161865569273,
     "cer": 0.2852347146552199,
     "rtfx": 53.71,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.4203554119547658,
     "cer": 0.18078782510325397,
     "rtfx": 76.09,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8159492016061257,
     "cer": 0.40471307789170713,
     "rtfx": 59.94,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.23864881791138248,
     "cer": 0.10179277533594845,
     "rtfx": 100.49,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.646316996274004,
     "cer": 0.3531226323195151,
     "rtfx": 74.55,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.32926144341477115,
     "cer": 0.14896477547727885,
     "rtfx": 70.62,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7570586132952108,
     "cer": 0.39263583295913784,
     "rtfx": 69.32,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1717476072314782,
     "cer": 0.06419563211319594,
     "rtfx": 110.44,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.41905396402398404,
     "cer": 0.22675211344423235,
     "rtfx": 93.94,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.26347634763476346,
     "cer": 0.11124372171664429,
     "rtfx": 104.96,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6106901494982593,
     "cer": 0.3433308339581771,
     "rtfx": 50.14,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.17369727047146402,
     "cer": 0.06450322977545371,
     "rtfx": 111.04,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.34177215189873417,
     "cer": 0.15734933187892008,
     "rtfx": 103.53,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.2621012101210121,
     "cer": 0.10617136605500024,
     "rtfx": 100.91,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5979930370673766,
     "cer": 0.3157127384820462,
     "rtfx": 37.99,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7612841703750794,
     "cer": 0.3920896916848334,
     "rtfx": 22.8,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.489545121056493,
     "cer": 0.2301296249228423,
     "rtfx": 89.89,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.39790854306983336,
     "cer": 0.19443248231313442,
     "rtfx": 110.13,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.770819453697535,
     "cer": 0.48486501227161166,
     "rtfx": 42.09,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.49064906490649063,
     "cer": 0.2583420359043214,
     "rtfx": 102.47,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.782920335859103,
     "cer": 0.5060401566275098,
     "rtfx": 51.0,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9071837253655436,
     "cer": 0.5568981625661787,
     "rtfx": 66.98,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6938738077769626,
     "cer": 0.4090265422461058,
     "rtfx": 98.34,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 110.5,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.17032967032967034,
     "cer": 0.06379575515226084,
     "rtfx": 118.47,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.3510992671552298,
     "cer": 0.165257703845105,
     "rtfx": 102.93,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.23404840484048406,
     "cer": 0.0947337013277637,
     "rtfx": 105.79,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.5723940200696294,
     "cer": 0.29459301841206365,
     "rtfx": 83.77,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.7412587412587412,
     "cer": 0.37514792899408284,
     "rtfx": 34.19,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.4897285399853265,
     "cer": 0.23060164845139974,
     "rtfx": 94.76,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.26019142148174407,
     "cer": 0.11168871116579514,
     "rtfx": 115.43,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.5329780146568954,
     "cer": 0.3003817834742296,
     "rtfx": 97.01,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.3666116611661166,
     "cer": 0.16679098910935403,
     "rtfx": 104.98,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.6860536555396273,
     "cer": 0.3950262434391402,
     "rtfx": 87.14,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.8232676414494596,
     "cer": 0.4632824665213329,
     "rtfx": 34.22,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.6227072633895818,
     "cer": 0.33161468356268836,
     "rtfx": 95.87,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.26654954321855234,
     "cer": 0.11600526688949661,
     "rtfx": 140.92,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.43460064839375184,
     "cer": 0.24120888295207882,
     "rtfx": 84.03,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.13161953727506426,
     "cer": 0.04266714272962599,
     "rtfx": 139.37,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.3136456211812627,
     "cer": 0.1518987341772152,
     "rtfx": 182.4,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.18846153846153846,
     "cer": 0.07734542850322272,
     "rtfx": 149.93,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.47737412364563414,
     "cer": 0.22425717213114754,
     "rtfx": 98.84,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 113.26,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3872010771131669,
     "cer": 0.17306956774005788,
     "done": 8,
     "total": 8,
     "ci": [
      0.38163,
      0.39291
     ]
    },
    "codeswitch": {
     "wer": 0.4424829070926932,
     "cer": 0.22745770382773176,
     "done": 2,
     "total": 2,
     "ci": [
      0.41803,
      0.46492
     ]
    },
    "noisy": {
     "wer": 0.42521468751641117,
     "cer": 0.2145204849447777,
     "done": 6,
     "total": 6,
     "ci": [
      0.41244,
      0.4389
     ]
    },
    "telephony": {
     "wer": 0.4377321601650266,
     "cer": 0.2109926637998493,
     "done": 6,
     "total": 6,
     "ci": [
      0.42471,
      0.45018
     ]
    },
    "callcenter": {
     "wer": 0.6738924884459113,
     "cer": 0.4016007319881436,
     "done": 6,
     "total": 6,
     "ci": [
      0.65534,
      0.69245
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
   "notes": "Emirati",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 74.21,
   "arena_wer": 0.465875800548527,
   "arena_cer": 0.2380168709911087,
   "arena_ci": [
    0.46005,
    0.47149
   ],
   "rank_range": [
    14,
    14
   ],
   "rtfx": 84.8,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 1.0,
    "halluc_3plus_ci": [
     0.98736,
     1.0
    ],
    "inserted_wpm": 74.20690400198595,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.11960420531849103,
      "wer_uncapped": 0.11960420531849103,
      "cer": 0.046206488461241604,
      "av_wer": null,
      "strict_wer": 0.1269939408927909,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007792207792207792
     },
     "cv18_ar/clean": {
      "wer": 0.20469932297889287,
      "wer_uncapped": 0.23735563520509756,
      "cer": 0.07987266676313123,
      "av_wer": null,
      "strict_wer": 0.21590457256461232,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.050378335324571887
     },
     "masc_clean/clean": {
      "wer": 0.14348579810641418,
      "wer_uncapped": 0.15295372716362182,
      "cer": 0.052104208416833664,
      "av_wer": null,
      "strict_wer": 0.15391791044776118,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.025470062675023337
     },
     "mgb2/clean": {
      "wer": 0.17756154357950765,
      "wer_uncapped": 0.17756154357950765,
      "cer": 0.07142726891445869,
      "av_wer": null,
      "strict_wer": 0.19451599501454092,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017714570858283433
     },
     "sada/clean": {
      "wer": 0.43536003320190914,
      "wer_uncapped": 0.45894722279864425,
      "cer": 0.2157911998757142,
      "av_wer": null,
      "strict_wer": 0.4564304106247459,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.003006012024048096,
      "insertions": 0.05575153904682852
     },
     "casablanca/clean": {
      "wer": 0.5978170382018315,
      "wer_uncapped": 0.6180741837017852,
      "cer": 0.2745642553960083,
      "av_wer": null,
      "strict_wer": 0.6245084590763603,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05512903524188327
     },
     "mgb3_egy/clean": {
      "wer": 0.34708741323527315,
      "wer_uncapped": 0.3478285657273984,
      "cer": 0.17628352594116214,
      "av_wer": 0.37745733613657334,
      "strict_wer": 0.35418061992659466,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.017958695001496557
     },
     "mgb5_mor/clean": {
      "wer": 0.6279309861612775,
      "wer_uncapped": 0.657369699720008,
      "cer": 0.37899849658841217,
      "av_wer": null,
      "strict_wer": 0.6084201476321204,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.0548886142302059
     },
     "mixat_cs/clean": {
      "wer": 0.20596131069877616,
      "wer_uncapped": 0.20611922621397552,
      "cer": 0.10039165769117792,
      "av_wer": 0.20282412141792971,
      "strict_wer": 0.22651489920263307,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018515594157125937
     },
     "algerian_cs/clean": {
      "wer": 0.5528199255654166,
      "wer_uncapped": 0.6180933295161752,
      "cer": 0.3074603382719287,
      "av_wer": null,
      "strict_wer": 0.5758354755784062,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09447466361294017
     },
     "masc_noisy/clean": {
      "wer": 0.2719718309859155,
      "wer_uncapped": 0.30704225352112674,
      "cer": 0.1223996908610807,
      "av_wer": null,
      "strict_wer": 0.2934568941308621,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06661971830985916
     },
     "nadi_robust/clean": {
      "wer": 0.7100506146059291,
      "wer_uncapped": 0.7423174258857556,
      "cer": 0.38687311713627504,
      "av_wer": null,
      "strict_wer": 0.7254288777698356,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.05983369486623283
     },
     "fleurs_ar/noisy": {
      "wer": 0.1607174569348251,
      "wer_uncapped": 0.1607174569348251,
      "cer": 0.06678939617083947,
      "av_wer": null,
      "strict_wer": 0.1690340909090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010300124311845143
     },
     "cv18_ar/noisy": {
      "wer": 0.34468937875751504,
      "wer_uncapped": 0.41148964595858384,
      "cer": 0.187857026277134,
      "av_wer": null,
      "strict_wer": 0.3524317121918721,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.10287241148964596
     },
     "mgb2/noisy": {
      "wer": 0.2496563101457245,
      "wer_uncapped": 0.2504811657959857,
      "cer": 0.11655929372464806,
      "av_wer": null,
      "strict_wer": 0.26375137513751373,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02337091009073412
     },
     "sada/noisy": {
      "wer": 0.5607202680067002,
      "wer_uncapped": 0.5933835845896147,
      "cer": 0.3276676109537299,
      "av_wer": null,
      "strict_wer": 0.5807904976448904,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.06197654941373534
     },
     "fleurs_ar/telephony": {
      "wer": 0.16373645888829694,
      "wer_uncapped": 0.16373645888829694,
      "cer": 0.06678939617083947,
      "av_wer": null,
      "strict_wer": 0.1708096590909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010832889362457822
     },
     "cv18_ar/telephony": {
      "wer": 0.3059452237808951,
      "wer_uncapped": 0.3353373413493654,
      "cer": 0.13709809041945487,
      "av_wer": null,
      "strict_wer": 0.3117921385742838,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.052772211088844355
     },
     "mgb2/telephony": {
      "wer": 0.24498212812757766,
      "wer_uncapped": 0.24718174319494088,
      "cer": 0.10832736816988786,
      "av_wer": null,
      "strict_wer": 0.2599009900990099,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02832004399230135
     },
     "sada/telephony": {
      "wer": 0.5462730318257957,
      "wer_uncapped": 0.580820770519263,
      "cer": 0.30101773161263246,
      "av_wer": null,
      "strict_wer": 0.565635879582224,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06469849246231156
     },
     "casablanca/telephony": {
      "wer": 0.7103912764592688,
      "wer_uncapped": 0.7427838357921744,
      "cer": 0.38698342372622413,
      "av_wer": null,
      "strict_wer": 0.7285441830896376,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06831302116741501
     },
     "mgb3_egy/telephony": {
      "wer": 0.4233967034569942,
      "wer_uncapped": 0.4237856760830457,
      "cer": 0.23461113158864724,
      "av_wer": 0.4514949661717941,
      "strict_wer": 0.42161026624651776,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017503768172314874
     },
     "fleurs_ar/callcenter": {
      "wer": 0.38820813354643935,
      "wer_uncapped": 0.39140472385011543,
      "cer": 0.2096097201767305,
      "av_wer": null,
      "strict_wer": 0.39399857954545453,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02095542532409874
     },
     "cv18_ar/callcenter": {
      "wer": 0.5744822979291917,
      "wer_uncapped": 0.7635270541082164,
      "cer": 0.39529949404276155,
      "av_wer": null,
      "strict_wer": 0.5796135909393737,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.23046092184368738
     },
     "mgb2/callcenter": {
      "wer": 0.46796810558152324,
      "wer_uncapped": 0.4825405554028045,
      "cer": 0.26962538773562394,
      "av_wer": null,
      "strict_wer": 0.4766226622662266,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0382183117954358
     },
     "sada/callcenter": {
      "wer": 0.7177554438860971,
      "wer_uncapped": 0.775963149078727,
      "cer": 0.48441926345609065,
      "av_wer": null,
      "strict_wer": 0.7288552119598607,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.07328308207705192
     },
     "casablanca/callcenter": {
      "wer": 0.8351507376523413,
      "wer_uncapped": 0.899615137908916,
      "cer": 0.5520586662592621,
      "av_wer": null,
      "strict_wer": 0.8432930705657978,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.0885182809493265
     },
     "mgb3_egy/callcenter": {
      "wer": 0.6395196188068265,
      "wer_uncapped": 0.6466669908105217,
      "cer": 0.42411537043862885,
      "av_wer": 0.6770997089397058,
      "strict_wer": 0.6287162625017125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019643117615597804
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.16053986858462085,
      "wer_uncapped": 0.16053986858462085,
      "cer": 0.06605301914580265,
      "av_wer": null,
      "strict_wer": 0.16761363636363635,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010300124311845143
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.2939211756847027,
      "wer_uncapped": 0.342685370741483,
      "cer": 0.13775093846907133,
      "av_wer": null,
      "strict_wer": 0.30246502331778813,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.07481629926519706
     },
     "mgb2/telephony_v2": {
      "wer": 0.21941160296948034,
      "wer_uncapped": 0.22078636238658234,
      "cer": 0.09526366022429014,
      "av_wer": null,
      "strict_wer": 0.23322332233223322,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02859499587572175
     },
     "sada/telephony_v2": {
      "wer": 0.5247068676716918,
      "wer_uncapped": 0.5531825795644891,
      "cer": 0.28396810408141854,
      "av_wer": null,
      "strict_wer": 0.5453614581200082,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06113902847571189
     },
     "casablanca/telephony_v2": {
      "wer": 0.6940346375881976,
      "wer_uncapped": 0.7196921103271328,
      "cer": 0.37002520815827666,
      "av_wer": null,
      "strict_wer": 0.7145581691036237,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.061577934573444515
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.4250984586959693,
      "wer_uncapped": 0.4253415665872514,
      "cer": 0.23557869517139698,
      "av_wer": 0.455777959456519,
      "strict_wer": 0.419372516783121,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018476199737443477
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.25395134079204407,
      "wer_uncapped": 0.2543065174924525,
      "cer": 0.11947717231222386,
      "av_wer": null,
      "strict_wer": 0.2579900568181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013851891315929675
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.43286573146292584,
      "wer_uncapped": 0.5277221108884436,
      "cer": 0.2537946792883956,
      "av_wer": null,
      "strict_wer": 0.43704197201865425,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.12491649966599866
     },
     "mgb2/callcenter_v2": {
      "wer": 0.35111355512785264,
      "wer_uncapped": 0.35523783337915865,
      "cer": 0.17460033404915296,
      "av_wer": null,
      "strict_wer": 0.3624862486248625,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.032169370360186966
     },
     "sada/callcenter_v2": {
      "wer": 0.6371440536013401,
      "wer_uncapped": 0.6748324958123953,
      "cer": 0.38930857202811875,
      "av_wer": null,
      "strict_wer": 0.6516485766946549,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.059254606365159126
     },
     "casablanca/callcenter_v2": {
      "wer": 0.7748556767158435,
      "wer_uncapped": 0.8117382937780628,
      "cer": 0.46314261706515925,
      "av_wer": null,
      "strict_wer": 0.7867132867132867,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06061577934573444
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.5663927651091555,
      "wer_uncapped": 0.5704283561044392,
      "cer": 0.34615739034279397,
      "av_wer": 0.5965865868395324,
      "strict_wer": 0.5592546924236197,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.020810035493752127
     },
     "fleurs_ar/sweep": {
      "wer": 0.2596108766994843,
      "wer_uncapped": 0.2603609939052977,
      "cer": 0.12455197132616487,
      "av_wer": null,
      "strict_wer": 0.26481481481481484,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010829817158931084
     },
     "masc_clean/sweep": {
      "wer": 0.3776203129613227,
      "wer_uncapped": 0.4266312370829643,
      "cer": 0.22692742632874344,
      "av_wer": null,
      "strict_wer": 0.3857353374594754,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.00044444444444444447,
      "insertions": 0.06956008266902863
     },
     "fleurs_ar/padded": {
      "wer": 0.12352032938754504,
      "wer_uncapped": 0.12352032938754504,
      "cer": 0.04487179487179487,
      "av_wer": null,
      "strict_wer": 0.1291816778178075,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004632012352032939
     },
     "cv18_ar/padded": {
      "wer": 0.24335378323108384,
      "wer_uncapped": 0.2965235173824131,
      "cer": 0.1005050505050505,
      "av_wer": null,
      "strict_wer": 0.25865580448065173,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.08384458077709611
     },
     "masc_clean/padded": {
      "wer": 0.15552699228791775,
      "wer_uncapped": 0.17737789203084833,
      "cer": 0.05897435897435897,
      "av_wer": null,
      "strict_wer": 0.16666666666666666,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.042416452442159386
     },
     "sada/padded": {
      "wer": 0.4358306188925081,
      "wer_uncapped": 0.45407166123778503,
      "cer": 0.21075441412520063,
      "av_wer": null,
      "strict_wer": 0.4608030592734226,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.05537459283387622
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.2777144892509267,
      "cer": 0.12357215413220032,
      "wer_arith": 0.3316932925979496,
      "done": 8,
      "total": 8,
      "ci": [
       0.26694,
       0.28718
      ]
     },
     "codeswitch": {
      "wer": 0.33743075800799943,
      "cer": 0.17568851138708308,
      "wer_arith": 0.37939061813209635,
      "done": 2,
      "total": 2,
      "ci": [
       0.28807,
       0.39736
      ]
     },
     "noisy": {
      "wer": 0.29162230346702894,
      "cer": 0.1424489133539814,
      "wer_arith": 0.31755104896613606,
      "done": 5,
      "total": 5,
      "ci": [
       0.27559,
       0.30648
      ]
     },
     "telephony": {
      "wer": 0.3420924313178306,
      "cer": 0.16669602024815905,
      "wer_arith": 0.38628543519911046,
      "done": 6,
      "total": 6,
      "ci": [
       0.32691,
       0.35654
      ]
     },
     "callcenter": {
      "wer": 0.47009746623063986,
      "cer": 0.26293544783266926,
      "wer_arith": 0.5027205204681936,
      "done": 6,
      "total": 6,
      "ci": [
       0.45337,
       0.48514
      ]
     }
    },
    "arena": 0.31001536405957375,
    "arena_arith": 0.3592884919304401,
    "arena_cer": 0.14787614534964635,
    "arena_strict": 0.3239556422981626,
    "zero_shot": 0.40079610744907945,
    "arena_real": 0.2896389024540971,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.5333333333333333,
    "rank": 15,
    "arena_ci": [
     0.29791,
     0.32186
    ],
    "rank_set": [
     15,
     15
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
    "fleurs_ar/clean": {
     "wer": 0.09204348900420065,
     "cer": 0.03154953793251666,
     "rtfx": 81.05,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.14970178926441352,
     "cer": 0.04953572870407751,
     "rtfx": 50.76,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.09581556503198294,
     "cer": 0.04089191421206737,
     "rtfx": 38.84,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.15272122974657248,
     "cer": 0.06668587721426839,
     "rtfx": 58.43,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.6865428919907847,
     "cer": 0.4500599363434697,
     "rtfx": 24.63,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6315500685871056,
     "cer": 0.35575000458606204,
     "rtfx": 23.13,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3693591814754981,
     "cer": 0.1845337829905764,
     "rtfx": 48.2,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.979736670090578,
     "cer": 0.6134556574923548,
     "rtfx": 16.88,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.28354470017222483,
     "cer": 0.15635584542432693,
     "rtfx": 62.04,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6964746345657782,
     "cer": 0.44831691741530466,
     "rtfx": 23.36,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.22788542544229148,
     "cer": 0.105969346598548,
     "rtfx": 32.33,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.9688170121515368,
     "cer": 0.6320969914683431,
     "rtfx": 14.52,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.12867777383906417,
     "cer": 0.04527837588434328,
     "rtfx": 81.11,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.28247834776815456,
     "cer": 0.12967002999727298,
     "rtfx": 53.55,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.21177117711771176,
     "cer": 0.0994082251728082,
     "rtfx": 60.77,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.9819782920335859,
     "cer": 0.7329001083062567,
     "rtfx": 17.79,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.1295639844026941,
     "cer": 0.04487849892340818,
     "rtfx": 81.65,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.26449033977348435,
     "cer": 0.11098991000818108,
     "rtfx": 53.61,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.17904290429042904,
     "cer": 0.07916853150330698,
     "rtfx": 60.63,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.8072906000409584,
     "cer": 0.5374906273431642,
     "rtfx": 21.77,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7581055308328035,
     "cer": 0.45499844285269386,
     "rtfx": 16.71,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.5412692589875275,
     "cer": 0.3434878907810174,
     "rtfx": 21.43,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.3411910669975186,
     "cer": 0.16382651491848663,
     "rtfx": 80.45,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.7415056628914057,
     "cer": 0.5083174256885737,
     "rtfx": 23.93,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5074257425742574,
     "cer": 0.3052861902630663,
     "rtfx": 32.25,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.9182879377431906,
     "cer": 0.6880363242522702,
     "rtfx": 25.26,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.2250476795931342,
     "cer": 0.8447212706322018,
     "rtfx": 9.9,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7272560528246516,
     "cer": 0.4897425656294252,
     "rtfx": 24.43,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 59.18,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.12619638426090038,
     "cer": 0.04407874500153799,
     "rtfx": 79.4,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.2671552298467688,
     "cer": 0.11044450504499591,
     "rtfx": 50.16,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.1740924092409241,
     "cer": 0.07573723208513601,
     "rtfx": 58.88,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.7327462625435184,
     "cer": 0.5229109389319336,
     "rtfx": 22.39,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6875397329942784,
     "cer": 0.39370912488321397,
     "rtfx": 17.83,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.49229640498899485,
     "cer": 0.28125340401583093,
     "rtfx": 28.94,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.2250974831619993,
     "cer": 0.0990772070132267,
     "rtfx": 60.07,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.43171219187208526,
     "cer": 0.23206981183528771,
     "rtfx": 48.27,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.27805280528052806,
     "cer": 0.1368541449102392,
     "rtfx": 59.38,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.9795207864018022,
     "cer": 0.6589186036824127,
     "rtfx": 19.26,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.9777495232040686,
     "cer": 0.6817813765182186,
     "rtfx": 12.8,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.6531548055759354,
     "cer": 0.41164082640427,
     "rtfx": 28.56,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.258608573436402,
     "cer": 0.12465106857084979,
     "rtfx": 60.27,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.4234600648393752,
     "cer": 0.2716201925752769,
     "rtfx": 29.58,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.106426735218509,
     "cer": 0.04382754619298402,
     "rtfx": 118.73,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.20366598778004075,
     "cer": 0.07383966244725738,
     "rtfx": 157.89,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.17051282051282052,
     "cer": 0.09930771067080449,
     "rtfx": 113.04,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.5621414913957935,
     "cer": 0.4577356557377049,
     "rtfx": 40.26,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 89.21,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.394683860648892,
     "cer": 0.2240578049344241,
     "done": 8,
     "total": 8,
     "ci": [
      0.3707,
      0.42125
     ]
    },
    "codeswitch": {
     "wer": 0.49000966736900153,
     "cer": 0.3023363814198158,
     "done": 2,
     "total": 2,
     "ci": [
      0.41787,
      0.57545
     ]
    },
    "noisy": {
     "wer": 0.46693467139205747,
     "cer": 0.29088717957126203,
     "done": 6,
     "total": 6,
     "ci": [
      0.42236,
      0.52139
     ]
    },
    "telephony": {
     "wer": 0.44662710305464953,
     "cer": 0.26183565023529526,
     "done": 6,
     "total": 6,
     "ci": [
      0.40365,
      0.49652
     ]
    },
    "callcenter": {
     "wer": 0.7434523571040264,
     "cer": 0.49998838189733735,
     "done": 6,
     "total": 6,
     "ci": [
      0.67333,
      0.81662
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
   "hallucination_rate": 1.0,
   "inserted_wpm": 27.35,
   "arena_wer": 0.4951964107045561,
   "arena_cer": 0.3046517532312458,
   "arena_ci": [
    0.47364,
    0.52045
   ],
   "rank_range": [
    15,
    17
   ],
   "rtfx": 37.4,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.5433333333333333,
    "halluc_3plus_ci": [
     0.48677,
     0.5988
    ],
    "inserted_wpm": 27.347563784159945,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.08608534322820037,
      "wer_uncapped": 0.08608534322820037,
      "cer": 0.03215930432992874,
      "av_wer": null,
      "strict_wer": 0.09113391863484605,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006184291898577613
     },
     "cv18_ar/clean": {
      "wer": 0.13878932696136997,
      "wer_uncapped": 0.14117881322182396,
      "cer": 0.05025804273380601,
      "av_wer": null,
      "strict_wer": 0.1463220675944334,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007367582636399841
     },
     "masc_clean/clean": {
      "wer": 0.08827843712495,
      "wer_uncapped": 0.09054540605414055,
      "cer": 0.03655071336703257,
      "av_wer": null,
      "strict_wer": 0.09301705756929637,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.011734897986398186
     },
     "mgb2/clean": {
      "wer": 0.1398037258815702,
      "wer_uncapped": 0.1398037258815702,
      "cer": 0.06464377541530662,
      "av_wer": null,
      "strict_wer": 0.15230577482343166,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007318695941450432
     },
     "sada/clean": {
      "wer": 0.4395794424846095,
      "wer_uncapped": 0.6577436535934149,
      "cer": 0.26923408882981475,
      "av_wer": null,
      "strict_wer": 0.4614446401951484,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.01503006012024048,
      "insertions": 0.24624749256415576
     },
     "casablanca/clean": {
      "wer": 0.5501803718434928,
      "wer_uncapped": 0.6030894459346962,
      "cer": 0.28205996568229025,
      "av_wer": null,
      "strict_wer": 0.5775948788294467,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.004024144869215292,
      "insertions": 0.07908611599297012
     },
     "mgb3_egy/clean": {
      "wer": 0.2521913883781588,
      "wer_uncapped": 0.27371331651487296,
      "cer": 0.1506130071179193,
      "av_wer": 0.30967365907388955,
      "strict_wer": 0.2785785088541806,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.02873391200239449
     },
     "mgb5_mor/clean": {
      "wer": 0.5648260176466895,
      "wer_uncapped": 0.7837798415835125,
      "cer": 0.4145483982884237,
      "av_wer": null,
      "strict_wer": 0.5659614513678737,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.014,
      "insertions": 0.2255607867608293
     },
     "mixat_cs/clean": {
      "wer": 0.23387287801026452,
      "wer_uncapped": 0.2598499802605606,
      "cer": 0.1343581709585822,
      "av_wer": 0.2590897033668921,
      "strict_wer": 0.24888819230844583,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.007,
      "insertions": 0.039834188709040666
     },
     "algerian_cs/clean": {
      "wer": 0.508445462353278,
      "wer_uncapped": 0.6681935299169768,
      "cer": 0.31617936279008785,
      "av_wer": null,
      "strict_wer": 0.5338474721508141,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.00949367088607595,
      "insertions": 0.1795018608645863
     },
     "masc_noisy/clean": {
      "wer": 0.20619718309859156,
      "wer_uncapped": 0.20859154929577464,
      "cer": 0.09274167579055838,
      "av_wer": null,
      "strict_wer": 0.2242347655153047,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017183098591549296
     },
     "nadi_robust/clean": {
      "wer": 0.6863702096890817,
      "wer_uncapped": 0.9576102675343456,
      "cer": 0.3963760411128832,
      "av_wer": null,
      "strict_wer": 0.6994281629735526,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.018,
      "insertions": 0.2932031814895155
     },
     "fleurs_ar/noisy": {
      "wer": 0.12271354999112058,
      "wer_uncapped": 0.12271354999112058,
      "cer": 0.04786450662739323,
      "av_wer": null,
      "strict_wer": 0.12819602272727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009057005860415556
     },
     "cv18_ar/noisy": {
      "wer": 0.2685370741482966,
      "wer_uncapped": 0.2758851035404142,
      "cer": 0.1361188183450302,
      "av_wer": null,
      "strict_wer": 0.27381745502998,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01736806947227789
     },
     "mgb2/noisy": {
      "wer": 0.20263953808083585,
      "wer_uncapped": 0.20456420126477867,
      "cer": 0.09854450011930327,
      "av_wer": null,
      "strict_wer": 0.21067106710671066,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013197690404179268
     },
     "sada/noisy": {
      "wer": 0.5944304857621441,
      "wer_uncapped": 0.9752931323283082,
      "cer": 0.42954569300178364,
      "av_wer": null,
      "strict_wer": 0.6115093180421872,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03333333333333333,
      "insertions": 0.40431323283082077
     },
     "fleurs_ar/telephony": {
      "wer": 0.1241342567927544,
      "wer_uncapped": 0.1241342567927544,
      "cer": 0.04683357879234168,
      "av_wer": null,
      "strict_wer": 0.12837357954545456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009057005860415556
     },
     "cv18_ar/telephony": {
      "wer": 0.25250501002004005,
      "wer_uncapped": 0.2578490313961256,
      "cer": 0.11506446874489963,
      "av_wer": null,
      "strict_wer": 0.25782811459027316,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015364061456245824
     },
     "mgb2/telephony": {
      "wer": 0.1726697827880121,
      "wer_uncapped": 0.1726697827880121,
      "cer": 0.07903841565258889,
      "av_wer": null,
      "strict_wer": 0.17986798679867988,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006598845202089634
     },
     "sada/telephony": {
      "wer": 0.544179229480737,
      "wer_uncapped": 0.7715661641541038,
      "cer": 0.34875668870003146,
      "av_wer": null,
      "strict_wer": 0.5627687896784763,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.023333333333333334,
      "insertions": 0.24958123953098826
     },
     "casablanca/telephony": {
      "wer": 0.6289288005131495,
      "wer_uncapped": 0.7334830019243105,
      "cer": 0.34336567107172866,
      "av_wer": null,
      "strict_wer": 0.6522568340750159,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.010135135135135136,
      "insertions": 0.12604233483001925
     },
     "mgb3_egy/telephony": {
      "wer": 0.3433169640686537,
      "wer_uncapped": 0.4599601303058297,
      "cer": 0.21549023221525987,
      "av_wer": 0.4943812863107799,
      "strict_wer": 0.3642964789697219,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.016666666666666666,
      "insertions": 0.12661058977974424
     },
     "fleurs_ar/callcenter": {
      "wer": 0.33741786538803054,
      "wer_uncapped": 0.3375954537382348,
      "cer": 0.1772459499263623,
      "av_wer": null,
      "strict_wer": 0.3410866477272727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019179541822056473
     },
     "cv18_ar/callcenter": {
      "wer": 0.5263861055444222,
      "wer_uncapped": 0.7321309285237141,
      "cer": 0.34894728251999346,
      "av_wer": null,
      "strict_wer": 0.5343104596935376,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.21977287909151635
     },
     "mgb2/callcenter": {
      "wer": 0.41407753643112455,
      "wer_uncapped": 0.500687379708551,
      "cer": 0.24337866857551896,
      "av_wer": null,
      "strict_wer": 0.42161716171617164,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.10365686004949135
     },
     "sada/callcenter": {
      "wer": 0.7322026800670016,
      "wer_uncapped": 0.9126884422110553,
      "cer": 0.554086664568251,
      "av_wer": null,
      "strict_wer": 0.7433954536145811,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03,
      "insertions": 0.19242043551088778
     },
     "casablanca/callcenter": {
      "wer": 0.7973059653624118,
      "wer_uncapped": 1.2139191789608723,
      "cer": 0.5504545107325644,
      "av_wer": null,
      "strict_wer": 0.8111888111888111,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.037162162162162164,
      "insertions": 0.4390635022450289
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5614333641269995,
      "wer_uncapped": 0.6398599698546215,
      "cer": 0.40508661997788425,
      "av_wer": 0.6719440000061974,
      "strict_wer": 0.5683883637027903,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.0859629503573686
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.12058248978866987,
      "wer_uncapped": 0.12058248978866987,
      "cer": 0.046170839469808544,
      "av_wer": null,
      "strict_wer": 0.1258877840909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00887941751021133
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.2531730126920508,
      "wer_uncapped": 0.2605210420841683,
      "cer": 0.11408519667047495,
      "av_wer": null,
      "strict_wer": 0.25849433710859426,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015364061456245824
     },
     "mgb2/telephony_v2": {
      "wer": 0.16827055265328567,
      "wer_uncapped": 0.16827055265328567,
      "cer": 0.07557862085421141,
      "av_wer": null,
      "strict_wer": 0.17546754675467546,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008523508386032445
     },
     "sada/telephony_v2": {
      "wer": 0.527428810720268,
      "wer_uncapped": 0.7198492462311558,
      "cer": 0.33527436785227155,
      "av_wer": null,
      "strict_wer": 0.5449518738480442,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.2162897822445561
     },
     "casablanca/telephony_v2": {
      "wer": 0.604554201411161,
      "wer_uncapped": 0.6574727389352149,
      "cer": 0.32976854327400507,
      "av_wer": null,
      "strict_wer": 0.6303242212333121,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.0750481077613855
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.3435600719599358,
      "wer_uncapped": 0.40530947634560216,
      "cer": 0.21088278658311832,
      "av_wer": 0.4413853137672704,
      "strict_wer": 0.36196739279353335,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.07254339475859387
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.20990942994139583,
      "wer_uncapped": 0.22056473095364945,
      "cer": 0.09219440353460973,
      "av_wer": null,
      "strict_wer": 0.21413352272727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.022376132125732553
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.4034736138944556,
      "wer_uncapped": 0.4288577154308617,
      "cer": 0.23225069365105272,
      "av_wer": null,
      "strict_wer": 0.4057295136575616,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03807615230460922
     },
     "mgb2/callcenter_v2": {
      "wer": 0.2724773164696178,
      "wer_uncapped": 0.27275226835303823,
      "cer": 0.13964447625864948,
      "av_wer": null,
      "strict_wer": 0.27915291529152914,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011273027220236459
     },
     "sada/callcenter_v2": {
      "wer": 0.6490787269681743,
      "wer_uncapped": 0.9621021775544388,
      "cer": 0.4572972405833596,
      "av_wer": null,
      "strict_wer": 0.6612738070858079,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.04,
      "insertions": 0.3335427135678392
     },
     "casablanca/callcenter_v2": {
      "wer": 0.7305965362411803,
      "wer_uncapped": 0.9672867222578576,
      "cer": 0.46665648155221146,
      "av_wer": null,
      "strict_wer": 0.7428480610298792,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.02364864864864865,
      "insertions": 0.25304682488774854
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.4959400982155881,
      "wer_uncapped": 0.589293528467934,
      "cer": 0.318881312200516,
      "av_wer": 0.6196341222632187,
      "strict_wer": 0.5052290268073252,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.016666666666666666,
      "insertions": 0.10327223221665775
     },
     "fleurs_ar/sweep": {
      "wer": 0.21957337083919362,
      "wer_uncapped": 0.2537974683544304,
      "cer": 0.1063256805192289,
      "av_wer": null,
      "strict_wer": 0.22419127988748241,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.004888888888888889,
      "insertions": 0.04430379746835443
     },
     "masc_clean/sweep": {
      "wer": 0.33197519929140834,
      "wer_uncapped": 0.4187776793622675,
      "cer": 0.20747688418811946,
      "av_wer": null,
      "strict_wer": 0.3363984674329502,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.007555555555555556,
      "insertions": 0.09837614408030705
     },
     "fleurs_ar/padded": {
      "wer": 0.0957282552753474,
      "wer_uncapped": 0.09830159547092125,
      "cer": 0.0438034188034188,
      "av_wer": null,
      "strict_wer": 0.10344827586206896,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011837364899639732
     },
     "cv18_ar/padded": {
      "wer": 0.16973415132924335,
      "wer_uncapped": 0.18404907975460122,
      "cer": 0.06717171717171717,
      "av_wer": null,
      "strict_wer": 0.1894093686354379,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02044989775051125
     },
     "masc_clean/padded": {
      "wer": 0.13110539845758354,
      "wer_uncapped": 0.16452442159383032,
      "cer": 0.07863247863247863,
      "av_wer": null,
      "strict_wer": 0.1358974358974359,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05912596401028278
     },
     "sada/padded": {
      "wer": 0.48729641693811077,
      "wer_uncapped": 0.545928338762215,
      "cer": 0.3473515248796148,
      "av_wer": null,
      "strict_wer": 0.5060548119821542,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.07947882736156352
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.21788671934989065,
      "cer": 0.10770366959311435,
      "wer_arith": 0.28246675669363014,
      "done": 8,
      "total": 8,
      "ci": [
       0.20664,
       0.22814
      ]
     },
     "codeswitch": {
      "wer": 0.34483561821804415,
      "cer": 0.20610987574428888,
      "wer_arith": 0.37115917018177125,
      "done": 2,
      "total": 2,
      "ci": [
       0.28673,
       0.41745
      ]
     },
     "noisy": {
      "wer": 0.2413242429185437,
      "cer": 0.12066176983373711,
      "wer_arith": 0.2789035662161977,
      "done": 5,
      "total": 5,
      "ci": [
       0.22418,
       0.25764
      ]
     },
     "telephony": {
      "wer": 0.2873328359274737,
      "cer": 0.14496877078678666,
      "wer_arith": 0.33626152320422853,
      "done": 6,
      "total": 6,
      "ci": [
       0.27097,
       0.30098
      ]
     },
     "callcenter": {
      "wer": 0.41920868814519235,
      "cer": 0.24252232066541635,
      "wer_arith": 0.46024595362173526,
      "done": 6,
      "total": 6,
      "ci": [
       0.4,
       0.43545
      ]
     }
    },
    "arena": 0.2601530332522172,
    "arena_arith": 0.3183935364891068,
    "arena_cer": 0.13491745530455337,
    "arena_strict": 0.27301389473915827,
    "zero_shot": 0.36471352237698274,
    "arena_real": 0.24052233481014507,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.4766666666666667,
    "rank": 10,
    "arena_ci": [
     0.24783,
     0.27245
    ],
    "rank_set": [
     9,
     10
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
    "fleurs_ar/clean": {
     "wer": 0.17692117617988634,
     "cer": 0.06391575327745541,
     "rtfx": 178.22,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.2709741550695825,
     "cer": 0.08909971740008074,
     "rtfx": 168.78,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.2017590618336887,
     "cer": 0.05896043444530644,
     "rtfx": 138.14,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.24844204403822184,
     "cer": 0.09140681873331716,
     "rtfx": 160.69,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.5193115598319555,
     "cer": 0.23646609807514776,
     "rtfx": 104.81,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6744398719707362,
     "cer": 0.29701172197457487,
     "rtfx": 53.73,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.4813139472267097,
     "cer": 0.2071055805167501,
     "rtfx": 138.75,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.810066299374358,
     "cer": 0.3973016729627631,
     "rtfx": 49.78,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2837404102082355,
     "cer": 0.11331663437150465,
     "rtfx": 140.98,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6279736314130123,
     "cer": 0.3263881372442905,
     "rtfx": 92.19,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.34119629317607414,
     "cer": 0.1269158375907502,
     "rtfx": 125.07,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.786097212294496,
     "cer": 0.4074000898069151,
     "rtfx": 48.35,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.21818504076568593,
     "cer": 0.08406644109504768,
     "rtfx": 166.34,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.3930712858094604,
     "cer": 0.17562039814562314,
     "rtfx": 159.79,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.3338833883388339,
     "cer": 0.14267243522800735,
     "rtfx": 133.69,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6448904362072496,
     "cer": 0.3666999916687495,
     "rtfx": 47.55,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.2488479262672811,
     "cer": 0.09615502922177792,
     "rtfx": 147.77,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.40306462358427714,
     "cer": 0.16703026997545678,
     "rtfx": 148.4,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.32673267326732675,
     "cer": 0.12889750857824855,
     "rtfx": 153.18,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.631988531640385,
     "cer": 0.31708739481796216,
     "rtfx": 46.78,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7879847425301971,
     "cer": 0.40323886639676115,
     "rtfx": 42.9,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.5709831254585473,
     "cer": 0.2747176936204205,
     "rtfx": 72.83,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.510811768876285,
     "cer": 0.26637957551522606,
     "rtfx": 88.97,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.7141905396402398,
     "cer": 0.40346332151622577,
     "rtfx": 37.87,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.567931793179318,
     "cer": 0.300412750509722,
     "rtfx": 40.23,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7970509932418595,
     "cer": 0.5055402815962676,
     "rtfx": 30.45,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8881118881118881,
     "cer": 0.5629398941139832,
     "rtfx": 22.92,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7358767424798239,
     "cer": 0.4413783087033877,
     "rtfx": 20.74,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 21.76,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.24122651542006382,
     "cer": 0.09384804675484466,
     "rtfx": 176.57,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.39506995336442374,
     "cer": 0.15775838560130898,
     "rtfx": 142.8,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.30665566556655666,
     "cer": 0.12079168531503306,
     "rtfx": 173.31,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.6211345484333402,
     "cer": 0.3091310505706907,
     "rtfx": 39.86,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.7628734901462174,
     "cer": 0.3869199626284647,
     "rtfx": 31.63,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.5577769625825385,
     "cer": 0.26389746196579644,
     "rtfx": 94.86,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.348103509393832,
     "cer": 0.15825899723162104,
     "rtfx": 143.8,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.5396402398401066,
     "cer": 0.2617943823288792,
     "rtfx": 135.08,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.4471947194719472,
     "cer": 0.2138843303993237,
     "rtfx": 51.02,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.7235306164243293,
     "cer": 0.4196867449804216,
     "rtfx": 31.58,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.8417037507946599,
     "cer": 0.4814699470569916,
     "rtfx": 43.04,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.6709464416727806,
     "cer": 0.3681783522747903,
     "rtfx": 145.95,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.3312953853361443,
     "cer": 0.15271143522738784,
     "rtfx": 114.26,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.446684350132626,
     "cer": 0.23668948628040296,
     "rtfx": 82.61,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.16760925449871467,
     "cer": 0.05819869677764884,
     "rtfx": 177.86,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.26883910386965376,
     "cer": 0.08818565400843882,
     "rtfx": 344.84,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.21923076923076923,
     "cer": 0.07901647171162568,
     "rtfx": 221.28,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.5251752708731676,
     "cer": 0.24526127049180327,
     "rtfx": 60.22,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 38.52,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.42290351444064234,
     "cer": 0.18015847467317445,
     "done": 8,
     "total": 8,
     "ci": [
      0.4177,
      0.42826
     ]
    },
    "codeswitch": {
     "wer": 0.4558570208106239,
     "cer": 0.21985238580789757,
     "done": 2,
     "total": 2,
     "ci": [
      0.43259,
      0.47761
     ]
    },
    "noisy": {
     "wer": 0.45288727609863333,
     "cer": 0.2172291989225155,
     "done": 6,
     "total": 6,
     "ci": [
      0.44113,
      0.46394
     ]
    },
    "telephony": {
     "wer": 0.4949336037913357,
     "cer": 0.23118779376843782,
     "done": 6,
     "total": 6,
     "ci": [
      0.48393,
      0.50617
     ]
    },
    "callcenter": {
     "wer": 0.7023289542549024,
     "cer": 0.41335235532580206,
     "done": 6,
     "total": 6,
     "ci": [
      0.68947,
      0.71555
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
   "hallucination_rate": 0.48333333333333334,
   "inserted_wpm": 26.73,
   "arena_wer": 0.5009875351593298,
   "arena_cer": 0.24653311437362613,
   "arena_ci": [
    0.49632,
    0.50555
   ],
   "rank_range": [
    15,
    17
   ],
   "rtfx": 75.2,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.48333333333333334,
    "halluc_3plus": 0.30666666666666664,
    "halluc_3plus_ci": [
     0.2572,
     0.36102
    ],
    "inserted_wpm": 26.726028243610855,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.17217068645640074,
      "wer_uncapped": 0.17217068645640074,
      "cer": 0.06704571766703543,
      "av_wer": null,
      "strict_wer": 0.17645604055892172,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009029066171923315
     },
     "cv18_ar/clean": {
      "wer": 0.25607327757865395,
      "wer_uncapped": 0.25686977299880526,
      "cer": 0.09053200212222061,
      "av_wer": null,
      "strict_wer": 0.268986083499006,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009159697331740343
     },
     "masc_clean/clean": {
      "wer": 0.18935858114415255,
      "wer_uncapped": 0.19002533671156155,
      "cer": 0.05979122423952382,
      "av_wer": null,
      "strict_wer": 0.20095948827292112,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008401120149353247
     },
     "mgb2/clean": {
      "wer": 0.22995675316034597,
      "wer_uncapped": 0.23003992015968064,
      "cer": 0.09143128065792593,
      "av_wer": null,
      "strict_wer": 0.24802658911508102,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015385894876912842
     },
     "sada/clean": {
      "wer": 0.4945701044476724,
      "wer_uncapped": 0.5026630697931798,
      "cer": 0.23172394745473063,
      "av_wer": null,
      "strict_wer": 0.5116546957582329,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.004008016032064128,
      "insertions": 0.03091927785847686
     },
     "casablanca/clean": {
      "wer": 0.6472111738044585,
      "wer_uncapped": 0.653038571824993,
      "cer": 0.29039104127156146,
      "av_wer": null,
      "strict_wer": 0.667946959304984,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024789566182591805
     },
     "mgb3_egy/clean": {
      "wer": 0.4123943501375408,
      "wer_uncapped": 0.41259389119311296,
      "cer": 0.2051205715986901,
      "av_wer": 0.44290741985400583,
      "strict_wer": 0.41546333753047393,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013967873890052879
     },
     "mgb5_mor/clean": {
      "wer": 0.6315193801393681,
      "wer_uncapped": 0.6406443812424537,
      "cer": 0.37996993176824334,
      "av_wer": null,
      "strict_wer": 0.6097814190543072,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.027813927412949455
     },
     "mixat_cs/clean": {
      "wer": 0.2559020923805764,
      "wer_uncapped": 0.25606000789577577,
      "cer": 0.10908645843532752,
      "av_wer": 0.255048085601717,
      "strict_wer": 0.27388672295907374,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01831819976312673
     },
     "algerian_cs/clean": {
      "wer": 0.5797308903521329,
      "wer_uncapped": 0.6049241339822502,
      "cer": 0.3175560508719025,
      "av_wer": null,
      "strict_wer": 0.598114824335904,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04065273403950759
     },
     "masc_noisy/clean": {
      "wer": 0.3212676056338028,
      "wer_uncapped": 0.323943661971831,
      "cer": 0.12929091260385137,
      "av_wer": null,
      "strict_wer": 0.33852850322942996,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018450704225352114
     },
     "nadi_robust/clean": {
      "wer": 0.7661785972523499,
      "wer_uncapped": 0.7744938539407086,
      "cer": 0.4107744107744108,
      "av_wer": null,
      "strict_wer": 0.7780557541100787,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.023409255242227044
     },
     "fleurs_ar/noisy": {
      "wer": 0.212395666844255,
      "wer_uncapped": 0.212395666844255,
      "cer": 0.09013254786450663,
      "av_wer": null,
      "strict_wer": 0.21839488636363635,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009057005860415556
     },
     "cv18_ar/noisy": {
      "wer": 0.374749498997996,
      "wer_uncapped": 0.38276553106212424,
      "cer": 0.1813285457809695,
      "av_wer": null,
      "strict_wer": 0.3844103930712858,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02004008016032064
     },
     "mgb2/noisy": {
      "wer": 0.32169370360186966,
      "wer_uncapped": 0.32169370360186966,
      "cer": 0.1471605821999523,
      "av_wer": null,
      "strict_wer": 0.3338833883388339,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018421776189166895
     },
     "sada/noisy": {
      "wer": 0.6162060301507538,
      "wer_uncapped": 0.6289782244556114,
      "cer": 0.3659112370160529,
      "av_wer": null,
      "strict_wer": 0.6330124923202949,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.029731993299832497
     },
     "fleurs_ar/telephony": {
      "wer": 0.24063221452672703,
      "wer_uncapped": 0.24063221452672703,
      "cer": 0.1018041237113402,
      "av_wer": null,
      "strict_wer": 0.24751420454545456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012253596164091636
     },
     "cv18_ar/telephony": {
      "wer": 0.3834335337341349,
      "wer_uncapped": 0.3921175684702739,
      "cer": 0.1700669169250857,
      "av_wer": null,
      "strict_wer": 0.3937375083277815,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024716098864395457
     },
     "mgb2/telephony": {
      "wer": 0.3073962056640088,
      "wer_uncapped": 0.30822106131427,
      "cer": 0.1298616082080649,
      "av_wer": null,
      "strict_wer": 0.3256325632563256,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.024470717624415727
     },
     "sada/telephony": {
      "wer": 0.6086683417085427,
      "wer_uncapped": 0.6191373534338358,
      "cer": 0.3167033889413493,
      "av_wer": null,
      "strict_wer": 0.622568093385214,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.03391959798994975
     },
     "casablanca/telephony": {
      "wer": 0.7626683771648493,
      "wer_uncapped": 0.7726106478511866,
      "cer": 0.4072263387059812,
      "av_wer": null,
      "strict_wer": 0.7790845518118246,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.025016035920461834
     },
     "mgb3_egy/telephony": {
      "wer": 0.5108183011620557,
      "wer_uncapped": 0.5111100306315943,
      "cer": 0.278612237375599,
      "av_wer": 0.5419295132913533,
      "strict_wer": 0.5034479609078869,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014780959789954782
     },
     "fleurs_ar/callcenter": {
      "wer": 0.4974249689220387,
      "wer_uncapped": 0.5050612679808204,
      "cer": 0.28243740795287187,
      "av_wer": null,
      "strict_wer": 0.501953125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.02184336707511987
     },
     "cv18_ar/callcenter": {
      "wer": 0.6593186372745491,
      "wer_uncapped": 0.7100868403473614,
      "cer": 0.41602741961808387,
      "av_wer": null,
      "strict_wer": 0.6655562958027982,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.072812291249165
     },
     "mgb2/callcenter": {
      "wer": 0.5408303546879296,
      "wer_uncapped": 0.5543029969755293,
      "cer": 0.31209735146743023,
      "av_wer": null,
      "strict_wer": 0.551980198019802,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03161946659334616
     },
     "sada/callcenter": {
      "wer": 0.7721943048576214,
      "wer_uncapped": 0.7864321608040201,
      "cer": 0.5109117616199769,
      "av_wer": null,
      "strict_wer": 0.7839442965390129,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.025753768844221106
     },
     "casablanca/callcenter": {
      "wer": 0.8672225785760103,
      "wer_uncapped": 0.8752405388069275,
      "cer": 0.5779543197616683,
      "av_wer": null,
      "strict_wer": 0.8782581055308328,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.01667735728030789
     },
     "mgb3_egy/callcenter": {
      "wer": 0.6847376865853065,
      "wer_uncapped": 0.6857587397286916,
      "cer": 0.457519351271655,
      "av_wer": 0.7180880359210531,
      "strict_wer": 0.6728318947801069,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.011280206155491808
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.2329959154679453,
      "wer_uncapped": 0.2329959154679453,
      "cer": 0.09988954344624448,
      "av_wer": null,
      "strict_wer": 0.2412997159090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010655301012253596
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.3800935203740815,
      "wer_uncapped": 0.38744154976619904,
      "cer": 0.1612534682552636,
      "av_wer": null,
      "strict_wer": 0.3870752831445703,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022044088176352707
     },
     "mgb2/telephony_v2": {
      "wer": 0.2881495738245807,
      "wer_uncapped": 0.2884245257080011,
      "cer": 0.12210689572894297,
      "av_wer": null,
      "strict_wer": 0.3061056105610561,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0189716799560077
     },
     "sada/telephony_v2": {
      "wer": 0.5938023450586265,
      "wer_uncapped": 0.606574539363484,
      "cer": 0.3094113943972301,
      "av_wer": null,
      "strict_wer": 0.6106901494982593,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.03559463986599665
     },
     "casablanca/telephony_v2": {
      "wer": 0.7427838357921744,
      "wer_uncapped": 0.7479153303399615,
      "cer": 0.3889695210449927,
      "av_wer": null,
      "strict_wer": 0.757787666878576,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.019884541372674792
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.5003160402586668,
      "wer_uncapped": 0.5008022560412311,
      "cer": 0.26875230372281605,
      "av_wer": 0.5317666738960114,
      "strict_wer": 0.4934009225007992,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014975446102980502
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.34025927899129815,
      "wer_uncapped": 0.3406144556917066,
      "cer": 0.17069219440353461,
      "av_wer": null,
      "strict_wer": 0.345703125,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00994494761143669
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.5130260521042084,
      "wer_uncapped": 0.533066132264529,
      "cer": 0.27338012077688917,
      "av_wer": null,
      "strict_wer": 0.5189873417721519,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03473613894455578
     },
     "mgb2/callcenter_v2": {
      "wer": 0.423975804234259,
      "wer_uncapped": 0.43057464943634866,
      "cer": 0.21880219518014793,
      "av_wer": null,
      "strict_wer": 0.4397689768976898,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.02309595820731372
     },
     "sada/callcenter_v2": {
      "wer": 0.6984924623115578,
      "wer_uncapped": 0.7114740368509213,
      "cer": 0.4236176686601616,
      "av_wer": null,
      "strict_wer": 0.7112430882654106,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.023241206030150754
     },
     "casablanca/callcenter_v2": {
      "wer": 0.8194355355997435,
      "wer_uncapped": 0.8268120590121874,
      "cer": 0.49056603773584906,
      "av_wer": null,
      "strict_wer": 0.8321678321678322,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.02052597819114817
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.6213351485389216,
      "wer_uncapped": 0.6229396606213837,
      "cer": 0.38232583855510505,
      "av_wer": 0.6527391483890469,
      "strict_wer": 0.6116362972096634,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012447124033646131
     },
     "fleurs_ar/sweep": {
      "wer": 0.32604313173933425,
      "wer_uncapped": 0.32684013127051104,
      "cer": 0.16360554102489586,
      "av_wer": null,
      "strict_wer": 0.329676511954993,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.009188935771214253
     },
     "masc_clean/sweep": {
      "wer": 0.4315913788012991,
      "wer_uncapped": 0.43861824623560675,
      "cer": 0.24648440098450078,
      "av_wer": null,
      "strict_wer": 0.4397877984084881,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0017777777777777779,
      "insertions": 0.01747859462651314
     },
     "fleurs_ar/padded": {
      "wer": 0.16212043232115286,
      "wer_uncapped": 0.16212043232115286,
      "cer": 0.062393162393162394,
      "av_wer": null,
      "strict_wer": 0.16623777663407102,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004632012352032939
     },
     "cv18_ar/padded": {
      "wer": 0.24948875255623723,
      "wer_uncapped": 0.24948875255623723,
      "cer": 0.08787878787878788,
      "av_wer": null,
      "strict_wer": 0.26883910386965376,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0081799591002045
     },
     "masc_clean/padded": {
      "wer": 0.20822622107969152,
      "wer_uncapped": 0.2095115681233933,
      "cer": 0.07977207977207977,
      "av_wer": null,
      "strict_wer": 0.21794871794871795,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.021850899742930592
     },
     "sada/padded": {
      "wer": 0.4996742671009772,
      "wer_uncapped": 0.5120521172638437,
      "cer": 0.23804173354735153,
      "av_wer": null,
      "strict_wer": 0.5156150414276609,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.04104234527687296
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.3353733012464158,
      "cer": 0.14291481446227708,
      "wer_arith": 0.37915678835857414,
      "done": 8,
      "total": 8,
      "ci": [
       0.32488,
       0.34494
      ]
     },
     "codeswitch": {
      "wer": 0.38516794760047895,
      "cer": 0.18612110289895809,
      "wer_arith": 0.41781649136635457,
      "done": 2,
      "total": 2,
      "ci": [
       0.33707,
       0.44425
      ]
     },
     "noisy": {
      "wer": 0.3475237027732477,
      "cer": 0.16263597375676397,
      "wer_arith": 0.36926250104573544,
      "done": 5,
      "total": 5,
      "ci": [
       0.33035,
       0.36362
      ]
     },
     "telephony": {
      "wer": 0.4217945097047337,
      "cer": 0.19980003453279102,
      "wer_arith": 0.4563568717960125,
      "done": 6,
      "total": 6,
      "ci": [
       0.40655,
       0.43529
      ]
     },
     "callcenter": {
      "wer": 0.5454004411424177,
      "cer": 0.3053910066854393,
      "wer_arith": 0.569420713629998,
      "done": 6,
      "total": 6,
      "ci": [
       0.53006,
       0.55984
      ]
     }
    },
    "arena": 0.3697780000328153,
    "arena_arith": 0.41021800158370164,
    "arena_cer": 0.16913583815736968,
    "arena_strict": 0.3817170956907178,
    "zero_shot": 0.44932072339526447,
    "arena_real": 0.34511776216036605,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.15333333333333332,
    "rank": 18,
    "arena_ci": [
     0.35768,
     0.38197
    ],
    "rank_set": [
     18,
     18
    ]
   }
  },
  {
   "model": "qwencleo-asr",
   "hf_id": "mohammedaly22/QwenCleo-ASR",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.11428218433407462,
     "cer": 0.04465935955297658,
     "rtfx": 121.77,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.252286282306163,
     "cer": 0.08502220427937021,
     "rtfx": 82.33,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.18949893390191896,
     "cer": 0.06416576991416202,
     "rtfx": 89.27,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.23066057332779394,
     "cer": 0.09401540888133948,
     "rtfx": 67.44,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.544653747120206,
     "cer": 0.26377502514570733,
     "rtfx": 38.16,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6453589391860997,
     "cer": 0.29198539797846385,
     "rtfx": 27.86,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.26833602584814215,
     "cer": 0.11821645446686802,
     "rtfx": 74.23,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8196843776262956,
     "cer": 0.4109552077711819,
     "rtfx": 20.47,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2879677469860654,
     "cer": 0.10546339619074625,
     "rtfx": 102.52,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.7517913442247062,
     "cer": 0.41481762095464875,
     "rtfx": 24.47,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.31493962370120754,
     "cer": 0.12446894326431837,
     "rtfx": 78.29,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7470514653323803,
     "cer": 0.3953659631791648,
     "rtfx": 18.77,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.16253101736972705,
     "cer": 0.0683482005536758,
     "rtfx": 71.81,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.4776815456362425,
     "cer": 0.21857103899645486,
     "rtfx": 43.35,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.3338833883388339,
     "cer": 0.1539609130240191,
     "rtfx": 55.14,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.8488634036453,
     "cer": 0.548779471798717,
     "rtfx": 20.77,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.15934065934065933,
     "cer": 0.06364195632113195,
     "rtfx": 119.64,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.40239840106595604,
     "cer": 0.16553040632669758,
     "rtfx": 115.35,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.30363036303630364,
     "cer": 0.134467154010642,
     "rtfx": 38.63,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6514437845586729,
     "cer": 0.3474548029659252,
     "rtfx": 20.71,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6881754609027336,
     "cer": 0.34219869199626285,
     "rtfx": 12.71,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.35253118121790167,
     "cer": 0.17047311281362332,
     "rtfx": 56.87,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.54413328606877,
     "cer": 0.32202399261765613,
     "rtfx": 22.65,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.9007328447701533,
     "cer": 0.5278156531224434,
     "rtfx": 11.94,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.63998899889989,
     "cer": 0.3524789895071858,
     "rtfx": 19.96,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.0331763260290805,
     "cer": 0.6998250437390653,
     "rtfx": 12.88,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.0689764780673872,
     "cer": 0.6812830893802554,
     "rtfx": 7.83,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7028613352898019,
     "cer": 0.4661050796993573,
     "rtfx": 13.13,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 13.11,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.16607585962424673,
     "cer": 0.06677945247616118,
     "rtfx": 124.43,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.3984010659560293,
     "cer": 0.16062176165803108,
     "rtfx": 119.81,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.29455445544554454,
     "cer": 0.1258640409766771,
     "rtfx": 57.76,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.6256399754249437,
     "cer": 0.3335416145963509,
     "rtfx": 30.14,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.6710108073744437,
     "cer": 0.3312986608533167,
     "rtfx": 18.97,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.3776595744680851,
     "cer": 0.19458262227224865,
     "rtfx": 40.97,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.2951081176887628,
     "cer": 0.15019993848046756,
     "rtfx": 42.71,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.7068620919387075,
     "cer": 0.39337332969730027,
     "rtfx": 16.72,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.45242024202420245,
     "cer": 0.2166691531155204,
     "rtfx": 39.05,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.7958222404259676,
     "cer": 0.49029409314338085,
     "rtfx": 21.22,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.8747616020343293,
     "cer": 0.5005917159763313,
     "rtfx": 13.09,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.5276962582538518,
     "cer": 0.2986819650702589,
     "rtfx": 26.25,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.29758725696884514,
     "cer": 0.15976501569938215,
     "rtfx": 40.73,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.5942823460064839,
     "cer": 0.35796738464963546,
     "rtfx": 17.18,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.10694087403598972,
     "cer": 0.04186378648576274,
     "rtfx": 140.96,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.31771894093686354,
     "cer": 0.1240506329113924,
     "rtfx": 216.65,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.2064102564102564,
     "cer": 0.08952017187873,
     "rtfx": 48.76,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.5219885277246654,
     "cer": 0.2489754098360656,
     "rtfx": 45.61,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.01,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.38309513295633674,
     "cer": 0.17159935349875868,
     "done": 8,
     "total": 8,
     "ci": [
      0.37678,
      0.38988
     ]
    },
    "codeswitch": {
     "wer": 0.5198795456053857,
     "cer": 0.2601405085726975,
     "done": 2,
     "total": 2,
     "ci": [
      0.45385,
      0.60232
     ]
    },
    "noisy": {
     "wer": 0.4808250740039486,
     "cer": 0.251582421802725,
     "done": 6,
     "total": 6,
     "ci": [
      0.45207,
      0.51417
     ]
    },
    "telephony": {
     "wer": 0.42625330835370456,
     "cer": 0.20396102073904712,
     "done": 6,
     "total": 6,
     "ci": [
      0.41409,
      0.43986
     ]
    },
    "callcenter": {
     "wer": 0.8149782115208472,
     "cer": 0.5082553080109938,
     "done": 6,
     "total": 6,
     "ci": [
      0.74182,
      0.90373
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
   "notes": "Egyptian + code-switching",
   "training_data": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 138.91,
   "arena_wer": 0.506441316170759,
   "arena_cer": 0.26625445360225225,
   "arena_ci": [
    0.48866,
    0.52644
   ],
   "rank_range": [
    15,
    17
   ],
   "rtfx": 32.2,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.97,
    "halluc_3plus_ci": [
     0.94398,
     0.98414
    ],
    "inserted_wpm": 138.91319331272152,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.10476190476190476,
      "wer_uncapped": 0.10476190476190476,
      "cer": 0.046000668913530066,
      "av_wer": null,
      "strict_wer": 0.11351551873377025,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007915893630179345
     },
     "cv18_ar/clean": {
      "wer": 0.23655913978494625,
      "wer_uncapped": 0.23994424532058942,
      "cer": 0.08619109631987652,
      "av_wer": null,
      "strict_wer": 0.2485089463220676,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02031063321385902
     },
     "masc_clean/clean": {
      "wer": 0.1760234697959728,
      "wer_uncapped": 0.17722362981730896,
      "cer": 0.06511530523734035,
      "av_wer": null,
      "strict_wer": 0.1886993603411514,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015468729163888518
     },
     "mgb2/clean": {
      "wer": 0.21016300731869594,
      "wer_uncapped": 0.2123253493013972,
      "cer": 0.09103010631120188,
      "av_wer": null,
      "strict_wer": 0.22750311591192354,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.029357950765136392
     },
     "sada/clean": {
      "wer": 0.49533098153143806,
      "wer_uncapped": 0.5218233381752784,
      "cer": 0.24912395781187965,
      "av_wer": null,
      "strict_wer": 0.519514839409134,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.002004008016032064,
      "insertions": 0.06751054852320675
     },
     "casablanca/clean": {
      "wer": 0.6064193876607159,
      "wer_uncapped": 0.6169642031264453,
      "cer": 0.2879526776844577,
      "av_wer": null,
      "strict_wer": 0.6323731138545954,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04828415502728702
     },
     "mgb3_egy/clean": {
      "wer": 0.17626601673294282,
      "wer_uncapped": 0.17645130485597413,
      "cer": 0.10648461392730521,
      "av_wer": 0.21255378485918572,
      "strict_wer": 0.1938007340530983,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013397756588418066
     },
     "mgb5_mor/clean": {
      "wer": 0.6487991290636922,
      "wer_uncapped": 0.6666102071661707,
      "cer": 0.39213600092517636,
      "av_wer": null,
      "strict_wer": 0.6304038121392895,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.05045317065604785
     },
     "mixat_cs/clean": {
      "wer": 0.26115278326095537,
      "wer_uncapped": 0.2611922621397552,
      "cer": 0.09990208557720552,
      "av_wer": 0.2675415372703165,
      "strict_wer": 0.27529729835628786,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.019542045005921833
     },
     "algerian_cs/clean": {
      "wer": 0.5974806756369883,
      "wer_uncapped": 0.7079874033781849,
      "cer": 0.33328962894978365,
      "av_wer": null,
      "strict_wer": 0.6206798057697801,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.1462925851703407
     },
     "masc_noisy/clean": {
      "wer": 0.2870422535211268,
      "wer_uncapped": 0.2915492957746479,
      "cer": 0.1248148386681265,
      "av_wer": null,
      "strict_wer": 0.3091828138163437,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02859154929577465
     },
     "nadi_robust/clean": {
      "wer": 0.7169197396963124,
      "wer_uncapped": 0.7312906724511931,
      "cer": 0.4028442317916002,
      "av_wer": null,
      "strict_wer": 0.7322194424588993,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.04799349240780911
     },
     "fleurs_ar/noisy": {
      "wer": 0.15112768602379684,
      "wer_uncapped": 0.15361392292665602,
      "cer": 0.07054491899852725,
      "av_wer": null,
      "strict_wer": 0.1590909090909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01740365832001421
     },
     "cv18_ar/noisy": {
      "wer": 0.4188376753507014,
      "wer_uncapped": 0.46893787575150303,
      "cer": 0.20760567977803165,
      "av_wer": null,
      "strict_wer": 0.42571618920719523,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.1008684034736139
     },
     "mgb2/noisy": {
      "wer": 0.31454495463293924,
      "wer_uncapped": 0.3200439923013473,
      "cer": 0.15408017179670722,
      "av_wer": null,
      "strict_wer": 0.3281078107810781,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.041792686279901015
     },
     "sada/noisy": {
      "wer": 0.6346314907872697,
      "wer_uncapped": 0.8287269681742043,
      "cer": 0.38883642849648514,
      "av_wer": null,
      "strict_wer": 0.6549252508703666,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.23722780569514237
     },
     "fleurs_ar/telephony": {
      "wer": 0.1495293908719588,
      "wer_uncapped": 0.1495293908719588,
      "cer": 0.06623711340206186,
      "av_wer": null,
      "strict_wer": 0.15678267045454544,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00994494761143669
     },
     "cv18_ar/telephony": {
      "wer": 0.3694054776219105,
      "wer_uncapped": 0.3921175684702739,
      "cer": 0.16729231271421577,
      "av_wer": null,
      "strict_wer": 0.37908061292471684,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05410821643286573
     },
     "mgb2/telephony": {
      "wer": 0.2848501512235359,
      "wer_uncapped": 0.2903491888919439,
      "cer": 0.1324862801240754,
      "av_wer": null,
      "strict_wer": 0.29895489548954896,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03739345614517459
     },
     "sada/telephony": {
      "wer": 0.6132747068676717,
      "wer_uncapped": 0.63107202680067,
      "cer": 0.3468156541810933,
      "av_wer": null,
      "strict_wer": 0.6344460372721688,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.06134840871021775
     },
     "casablanca/telephony": {
      "wer": 0.6465683130211675,
      "wer_uncapped": 0.6590763309813983,
      "cer": 0.3459628752578107,
      "av_wer": null,
      "strict_wer": 0.671646535282899,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05388069275176395
     },
     "mgb3_egy/telephony": {
      "wer": 0.2697525161666748,
      "wer_uncapped": 0.2699470024797005,
      "cer": 0.16513085145595283,
      "av_wer": 0.30315043899103056,
      "strict_wer": 0.27930766771703885,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019837603928623524
     },
     "fleurs_ar/callcenter": {
      "wer": 0.4045462617652282,
      "wer_uncapped": 0.5315219321612502,
      "cer": 0.23306332842415317,
      "av_wer": null,
      "strict_wer": 0.4153053977272727,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.15325874622624755
     },
     "cv18_ar/callcenter": {
      "wer": 0.648630594522378,
      "wer_uncapped": 0.8877755511022044,
      "cer": 0.4088460910723029,
      "av_wer": null,
      "strict_wer": 0.654230512991339,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.2865731462925852
     },
     "mgb2/callcenter": {
      "wer": 0.5565026120428925,
      "wer_uncapped": 0.6266153423150949,
      "cer": 0.32235743259365307,
      "av_wer": null,
      "strict_wer": 0.5695819581958196,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.12345339565576025
     },
     "sada/callcenter": {
      "wer": 0.772822445561139,
      "wer_uncapped": 1.0270100502512562,
      "cer": 0.5474766551253804,
      "av_wer": null,
      "strict_wer": 0.7861970100348147,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.2830820770519263
     },
     "casablanca/callcenter": {
      "wer": 0.8008338678640154,
      "wer_uncapped": 1.0429762668377165,
      "cer": 0.5375448781605683,
      "av_wer": null,
      "strict_wer": 0.817546090273363,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0033783783783783786,
      "insertions": 0.2783835792174471
     },
     "mgb3_egy/callcenter": {
      "wer": 0.5194243205134439,
      "wer_uncapped": 0.63947099722857,
      "cer": 0.376105786951714,
      "av_wer": 0.6708790141460007,
      "strict_wer": 0.5164634424807051,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.14430884426508483
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.1561001598295152,
      "wer_uncapped": 0.1561001598295152,
      "cer": 0.06907216494845361,
      "av_wer": null,
      "strict_wer": 0.16335227272727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011543242763274729
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.37074148296593185,
      "wer_uncapped": 0.38810955243820977,
      "cer": 0.1615798922800718,
      "av_wer": null,
      "strict_wer": 0.37908061292471684,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05744822979291917
     },
     "mgb2/telephony_v2": {
      "wer": 0.27495188342040144,
      "wer_uncapped": 0.27990101732196865,
      "cer": 0.12341923168694822,
      "av_wer": null,
      "strict_wer": 0.28987898789878985,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.040967830629639816
     },
     "sada/telephony_v2": {
      "wer": 0.5906616415410385,
      "wer_uncapped": 0.6063651591289783,
      "cer": 0.33212674430804745,
      "av_wer": null,
      "strict_wer": 0.6100757730903134,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05695142378559464
     },
     "casablanca/telephony_v2": {
      "wer": 0.6286080821039127,
      "wer_uncapped": 0.6420782552918538,
      "cer": 0.3350393400045833,
      "av_wer": null,
      "strict_wer": 0.6541640178003815,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.045862732520846695
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.27339913453590703,
      "wer_uncapped": 0.29950892205961005,
      "cer": 0.16706597862145225,
      "av_wer": 0.33378419612573895,
      "strict_wer": 0.2823217792391652,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04687120143919871
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.2525306339904102,
      "wer_uncapped": 0.2836085952761499,
      "cer": 0.1296759941089838,
      "av_wer": null,
      "strict_wer": 0.2604758522727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.04848161960575386
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.5056780227120908,
      "wer_uncapped": 0.698062792251169,
      "cer": 0.2851313856699853,
      "av_wer": null,
      "strict_wer": 0.5123251165889408,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.22244488977955912
     },
     "mgb2/callcenter_v2": {
      "wer": 0.4237008523508386,
      "wer_uncapped": 0.4401979653560627,
      "cer": 0.21814602720114531,
      "av_wer": null,
      "strict_wer": 0.43646864686468645,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.06268902941985152
     },
     "sada/callcenter_v2": {
      "wer": 0.7030988274706867,
      "wer_uncapped": 0.7830820770519263,
      "cer": 0.44370999895079216,
      "av_wer": null,
      "strict_wer": 0.7188203972967439,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.11557788944723618
     },
     "casablanca/callcenter_v2": {
      "wer": 0.7299550994227069,
      "wer_uncapped": 0.8563181526619628,
      "cer": 0.44893438240012223,
      "av_wer": null,
      "strict_wer": 0.7469802924348379,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.16164207825529187
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.4286964554869451,
      "wer_uncapped": 0.46657266494870425,
      "cer": 0.28239034279395503,
      "av_wer": 0.4971037676320533,
      "strict_wer": 0.4286431931314792,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0653474011766422
     },
     "fleurs_ar/sweep": {
      "wer": 0.243483356774496,
      "wer_uncapped": 0.28398968588842005,
      "cer": 0.13295553618134262,
      "av_wer": null,
      "strict_wer": 0.2498359118612283,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.00044444444444444447,
      "insertions": 0.05396155649320206
     },
     "masc_clean/sweep": {
      "wer": 0.4284617655742545,
      "wer_uncapped": 0.5767936226749336,
      "cer": 0.25157985764651103,
      "av_wer": null,
      "strict_wer": 0.4382552313586796,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0008888888888888889,
      "insertions": 0.17195157956894006
     },
     "fleurs_ar/padded": {
      "wer": 0.09727225939269171,
      "wer_uncapped": 0.09727225939269171,
      "cer": 0.04487179487179487,
      "av_wer": null,
      "strict_wer": 0.10602161605764282,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004117344312918168
     },
     "cv18_ar/padded": {
      "wer": 0.2822085889570552,
      "wer_uncapped": 0.30265848670756645,
      "cer": 0.10555555555555556,
      "av_wer": null,
      "strict_wer": 0.29124236252545826,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.049079754601226995
     },
     "masc_clean/padded": {
      "wer": 0.18637532133676094,
      "wer_uncapped": 0.18637532133676094,
      "cer": 0.08575498575498576,
      "av_wer": null,
      "strict_wer": 0.2012820512820513,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.030848329048843187
     },
     "sada/padded": {
      "wer": 0.4827361563517915,
      "wer_uncapped": 0.49315960912052115,
      "cer": 0.24237560192616373,
      "av_wer": null,
      "strict_wer": 0.5137029955385596,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.050814332247557006
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.27370149755137463,
      "cer": 0.12762752853820986,
      "wer_arith": 0.3317903795812886,
      "done": 8,
      "total": 8,
      "ci": [
       0.26349,
       0.2829
      ]
     },
     "codeswitch": {
      "wer": 0.39501106489215665,
      "cer": 0.18247281724502515,
      "wer_arith": 0.42931672944897187,
      "done": 2,
      "total": 2,
      "ci": [
       0.34339,
       0.45832
      ]
     },
     "noisy": {
      "wer": 0.3250184307841389,
      "cer": 0.1613975648536524,
      "wer_arith": 0.36123681206316677,
      "done": 5,
      "total": 5,
      "ci": [
       0.30846,
       0.34051
      ]
     },
     "telephony": {
      "wer": 0.3425372832517675,
      "cer": 0.1716828110087801,
      "wer_arith": 0.3824103973994511,
      "done": 6,
      "total": 6,
      "ci": [
       0.32801,
       0.35712
      ]
     },
     "callcenter": {
      "wer": 0.47784273026921786,
      "cer": 0.277202604953458,
      "wer_arith": 0.5072766485722797,
      "done": 6,
      "total": 6,
      "ci": [
       0.46087,
       0.4934
      ]
     }
    },
    "arena": 0.32085991016600085,
    "arena_arith": 0.37344692561463816,
    "arena_cer": 0.1552704691457664,
    "arena_strict": 0.33600908149398157,
    "zero_shot": 0.3652071289501726,
    "arena_real": 0.29739647060790275,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.33,
    "rank": 16,
    "arena_ci": [
     0.30995,
     0.33219
    ],
    "rank_set": [
     16,
     17
    ]
   }
  },
  {
   "model": "moulsot-v0.3",
   "hf_id": "atlasia/moulsot.v0.3",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.22411662960217446,
     "cer": 0.08673973780356758,
     "rtfx": 103.27,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.33021868787276343,
     "cer": 0.1255954784012919,
     "rtfx": 82.57,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.2038912579957356,
     "cer": 0.07037213143472058,
     "rtfx": 70.31,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.2733693394266722,
     "cer": 0.11280635768017472,
     "rtfx": 63.34,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.7106654018159643,
     "cer": 0.38754701902806676,
     "rtfx": 17.1,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.7016918152720621,
     "cer": 0.3139801515234898,
     "rtfx": 37.26,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.6543349488422187,
     "cer": 0.31012475854046384,
     "rtfx": 36.44,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.5682136520683537,
     "cer": 0.2828386400431732,
     "rtfx": 18.45,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.41678409268827304,
     "cer": 0.15689147250185106,
     "rtfx": 85.93,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.45055889939810834,
     "cer": 0.19634159541075874,
     "rtfx": 74.08,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.40508284189834315,
     "cer": 0.16862059693465986,
     "rtfx": 73.53,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.8779485346676197,
     "cer": 0.5090076335877862,
     "rtfx": 11.32,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.29280397022332505,
     "cer": 0.12396185788988004,
     "rtfx": 73.43,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.5003331112591606,
     "cer": 0.2692937005726752,
     "rtfx": 13.57,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.49394939493949397,
     "cer": 0.28996966532398427,
     "rtfx": 19.32,
     "n": 300
    },
    "sada/noisy": {
     "wer": 1.0114683596149907,
     "cer": 0.707073231692077,
     "rtfx": 17.76,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.3055654023395959,
     "cer": 0.1283605044601661,
     "rtfx": 114.87,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.45236508994004,
     "cer": 0.2038451049904554,
     "rtfx": 91.21,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.38366336633663367,
     "cer": 0.17181361579392312,
     "rtfx": 37.26,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.9213598197829204,
     "cer": 0.6165958510372407,
     "rtfx": 16.79,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.8858868404322949,
     "cer": 0.5117408906882591,
     "rtfx": 11.34,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.7195524578136464,
     "cer": 0.38016048799970953,
     "rtfx": 13.96,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.8840836582772067,
     "cer": 0.6366348815749,
     "rtfx": 17.84,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 1.1858760826115922,
     "cer": 0.8706026724843197,
     "rtfx": 9.94,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.7775027502750275,
     "cer": 0.5053458650355562,
     "rtfx": 10.76,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.0802785173049354,
     "cer": 0.8330833958177123,
     "rtfx": 14.02,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9453273998728544,
     "cer": 0.6480224229212084,
     "rtfx": 8.49,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 1.2015774027879678,
     "cer": 0.8981518463381867,
     "rtfx": 13.53,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 14.33,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.3020205600850762,
     "cer": 0.1271916333435866,
     "rtfx": 52.52,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.4530313124583611,
     "cer": 0.20302699754567766,
     "rtfx": 46.72,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.349009900990099,
     "cer": 0.15162365110149684,
     "rtfx": 58.59,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.9449109154208478,
     "cer": 0.6352578522036157,
     "rtfx": 21.2,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 0.8744437380801017,
     "cer": 0.49959514170040487,
     "rtfx": 15.47,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.7714600146735143,
     "cer": 0.42921462546748484,
     "rtfx": 19.53,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.5003544842254519,
     "cer": 0.26235004613964935,
     "rtfx": 23.0,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.6495669553630913,
     "cer": 0.35124079629124627,
     "rtfx": 21.9,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.5148514851485149,
     "cer": 0.27241533641652993,
     "rtfx": 20.25,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 1.018431292238378,
     "cer": 0.7689744230609015,
     "rtfx": 16.5,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 0.9726636999364272,
     "cer": 0.6256617876051075,
     "rtfx": 8.94,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 1.049156272927366,
     "cer": 0.7213245706401366,
     "rtfx": 13.95,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.5104708362614195,
     "cer": 0.3093244201357237,
     "rtfx": 19.87,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.5886825817860301,
     "cer": 0.36953303278232313,
     "rtfx": 14.42,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.24318766066838046,
     "cer": 0.10925644916540213,
     "rtfx": 138.27,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.6619144602851323,
     "cer": 0.4109704641350211,
     "rtfx": 155.37,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.3,
     "cer": 0.1745046550489377,
     "rtfx": 151.75,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.9502868068833652,
     "cer": 0.608734631147541,
     "rtfx": 31.08,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.76,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.4583127166119931,
     "cer": 0.21125053430686855,
     "done": 8,
     "total": 8,
     "ci": [
      0.4504,
      0.46735
     ]
    },
    "codeswitch": {
     "wer": 0.43367149604319066,
     "cer": 0.1766165339563049,
     "done": 2,
     "total": 2,
     "ci": [
      0.41439,
      0.45243
     ]
    },
    "noisy": {
     "wer": 0.5969310354338222,
     "cer": 0.3446544476668438,
     "done": 6,
     "total": 6,
     "ci": [
      0.55957,
      0.64334
     ]
    },
    "telephony": {
     "wer": 0.6113988294408552,
     "cer": 0.33541940916162566,
     "done": 6,
     "total": 6,
     "ci": [
      0.58373,
      0.64591
     ]
    },
    "callcenter": {
     "wer": 1.0124409685215974,
     "cer": 0.7319735140286472,
     "done": 6,
     "total": 6,
     "ci": [
      0.91465,
      1.14354
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
   "notes": "Moroccan Darija",
   "training_data": "",
   "hallucination_rate": 0.9766666666666667,
   "inserted_wpm": 69.92,
   "arena_wer": 0.6180842153260805,
   "arena_cer": 0.3567760921911156,
   "arena_ci": [
    0.59529,
    0.6465
   ],
   "rank_range": [
    18,
    19
   ],
   "rtfx": 23.6,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 0.9766666666666667,
    "halluc_3plus": 0.7133333333333334,
    "halluc_3plus_ci": [
     0.65972,
     0.76155
    ],
    "inserted_wpm": 69.92274831177258,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.21533704390847247,
      "wer_uncapped": 0.21595547309833024,
      "cer": 0.08981450513262497,
      "av_wer": null,
      "strict_wer": 0.22134289600593546,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017439703153988868
     },
     "cv18_ar/clean": {
      "wer": 0.30904022301871764,
      "wer_uncapped": 0.3176025487853445,
      "cer": 0.12728500458206723,
      "av_wer": null,
      "strict_wer": 0.32186878727634194,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02927120669056153
     },
     "masc_clean/clean": {
      "wer": 0.19469262568342446,
      "wer_uncapped": 0.19575943459127884,
      "cer": 0.07253312595339934,
      "av_wer": null,
      "strict_wer": 0.20362473347547974,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01693559141218829
     },
     "mgb2/clean": {
      "wer": 0.2562375249500998,
      "wer_uncapped": 0.25856620093147037,
      "cer": 0.113021754590711,
      "av_wer": null,
      "strict_wer": 0.27071042791857086,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02661343978709248
     },
     "sada/clean": {
      "wer": 0.6405893338866985,
      "wer_uncapped": 0.6859652763367227,
      "cer": 0.34637758712951616,
      "av_wer": null,
      "strict_wer": 0.6623526223065456,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.013026052104208416,
      "insertions": 0.08383482050217887
     },
     "casablanca/clean": {
      "wer": 0.6587734714642494,
      "wer_uncapped": 0.6686707982610305,
      "cer": 0.3124943556398447,
      "av_wer": null,
      "strict_wer": 0.6893461362597165,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.0030181086519114686,
      "insertions": 0.05105910646563685
     },
     "mgb3_egy/clean": {
      "wer": 0.5949744159860891,
      "wer_uncapped": 0.5970838500021379,
      "cer": 0.3062599799723944,
      "av_wer": 0.6202625581649951,
      "strict_wer": 0.598574758217912,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.02371687974800815
     },
     "mgb5_mor/clean": {
      "wer": 0.33632367242900096,
      "wer_uncapped": 0.3594557396557255,
      "cer": 0.24642072395050307,
      "av_wer": null,
      "strict_wer": 0.34724062987490784,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.04989874020927809
     },
     "mixat_cs/clean": {
      "wer": 0.3950256612712199,
      "wer_uncapped": 0.3951440979076194,
      "cer": 0.14972094389503574,
      "av_wer": 0.39233366443362716,
      "strict_wer": 0.41294594753443176,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026806158705092776
     },
     "algerian_cs/clean": {
      "wer": 0.3813340967649585,
      "wer_uncapped": 0.4002290294875465,
      "cer": 0.1829028451553691,
      "av_wer": null,
      "strict_wer": 0.42473578977435017,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05782994560549671
     },
     "masc_noisy/clean": {
      "wer": 0.38098591549295774,
      "wer_uncapped": 0.3850704225352113,
      "cer": 0.16835190313647194,
      "av_wer": null,
      "strict_wer": 0.39960685200786294,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.034788732394366195
     },
     "nadi_robust/clean": {
      "wer": 0.8014280549530007,
      "wer_uncapped": 0.8674078091106291,
      "cer": 0.47111465532518165,
      "av_wer": null,
      "strict_wer": 0.8115618298784847,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.007,
      "insertions": 0.10140997830802603
     },
     "fleurs_ar/noisy": {
      "wer": 0.2818327117741076,
      "wer_uncapped": 0.2850293020777837,
      "cer": 0.1313696612665685,
      "av_wer": null,
      "strict_wer": 0.2872869318181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.026815840880838215
     },
     "cv18_ar/noisy": {
      "wer": 0.42818971275885104,
      "wer_uncapped": 0.4863059452237809,
      "cer": 0.24563407866818998,
      "av_wer": null,
      "strict_wer": 0.4397068620919387,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09752839011356046
     },
     "mgb2/noisy": {
      "wer": 0.3709100907341215,
      "wer_uncapped": 0.4797910365686005,
      "cer": 0.19339059890240992,
      "av_wer": null,
      "strict_wer": 0.37843784378437845,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.14352488314544953
     },
     "sada/noisy": {
      "wer": 0.7640284757118928,
      "wer_uncapped": 0.9763400335008375,
      "cer": 0.5160004196831393,
      "av_wer": null,
      "strict_wer": 0.7755478189637518,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02666666666666667,
      "insertions": 0.23555276381909548
     },
     "fleurs_ar/telephony": {
      "wer": 0.2987036050435091,
      "wer_uncapped": 0.29923637009412185,
      "cer": 0.13611929307805595,
      "av_wer": null,
      "strict_wer": 0.302734375,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022198543775528327
     },
     "cv18_ar/telephony": {
      "wer": 0.4248496993987976,
      "wer_uncapped": 0.4415497661990648,
      "cer": 0.20874816386486045,
      "av_wer": null,
      "strict_wer": 0.4350433044636909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04676018704074816
     },
     "mgb2/telephony": {
      "wer": 0.3665108605993951,
      "wer_uncapped": 0.37283475391806437,
      "cer": 0.17424242424242425,
      "av_wer": null,
      "strict_wer": 0.37761276127612764,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04151773439648061
     },
     "sada/telephony": {
      "wer": 0.7590033500837521,
      "wer_uncapped": 0.9103852596314908,
      "cer": 0.4953310250760676,
      "av_wer": null,
      "strict_wer": 0.7716567683800942,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.17692629815745395
     },
     "casablanca/telephony": {
      "wer": 0.7841565105837075,
      "wer_uncapped": 0.8608082103912764,
      "cer": 0.4620731800473608,
      "av_wer": null,
      "strict_wer": 0.8064208518753974,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.010135135135135136,
      "insertions": 0.12572161642078256
     },
     "mgb3_egy/telephony": {
      "wer": 0.6637817863567851,
      "wer_uncapped": 0.6684494578694025,
      "cer": 0.38375414670106894,
      "av_wer": 0.6929542979480326,
      "strict_wer": 0.6642462437776865,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.023338357563086498
     },
     "fleurs_ar/callcenter": {
      "wer": 0.6270644645711241,
      "wer_uncapped": 0.8815485704137809,
      "cer": 0.42396907216494845,
      "av_wer": null,
      "strict_wer": 0.62890625,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.28911383413248093
     },
     "cv18_ar/callcenter": {
      "wer": 0.6867067468269873,
      "wer_uncapped": 1.1756847027388109,
      "cer": 0.4801697404929003,
      "av_wer": null,
      "strict_wer": 0.6948700866089274,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.5323981295925184
     },
     "mgb2/callcenter": {
      "wer": 0.6447621666208414,
      "wer_uncapped": 0.7695903216937036,
      "cer": 0.41815795752803625,
      "av_wer": null,
      "strict_wer": 0.652915291529153,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.16717074511960406
     },
     "sada/callcenter": {
      "wer": 0.8965661641541038,
      "wer_uncapped": 1.0483668341708543,
      "cer": 0.702654495855629,
      "av_wer": null,
      "strict_wer": 0.9045668646323981,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02666666666666667,
      "insertions": 0.1681323283082077
     },
     "casablanca/callcenter": {
      "wer": 0.8697883258499037,
      "wer_uncapped": 0.9342527261064785,
      "cer": 0.6175998777786266,
      "av_wer": null,
      "strict_wer": 0.8782581055308328,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.016891891891891893,
      "insertions": 0.08980115458627325
     },
     "mgb3_egy/callcenter": {
      "wer": 0.8133417610735645,
      "wer_uncapped": 1.185588564204794,
      "cer": 0.604036122373756,
      "av_wer": 1.213743811214198,
      "strict_wer": 0.8012056446088506,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.38236009140856714
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.293908719587995,
      "wer_uncapped": 0.29408630793819923,
      "cer": 0.13321060382916053,
      "av_wer": null,
      "strict_wer": 0.2995383522727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.022731308826141005
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.42217768871075484,
      "wer_uncapped": 0.44622578490313963,
      "cer": 0.20581034764158643,
      "av_wer": null,
      "strict_wer": 0.4290473017988008,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.052104208416833664
     },
     "mgb2/telephony_v2": {
      "wer": 0.3313170195215837,
      "wer_uncapped": 0.33599120153973056,
      "cer": 0.1534836554521594,
      "av_wer": null,
      "strict_wer": 0.34515951595159516,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03684355237833379
     },
     "sada/telephony_v2": {
      "wer": 0.742462311557789,
      "wer_uncapped": 0.9353015075376885,
      "cer": 0.48378973874724585,
      "av_wer": null,
      "strict_wer": 0.7581404874052836,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.22738693467336685
     },
     "casablanca/telephony_v2": {
      "wer": 0.7864015394483643,
      "wer_uncapped": 0.8508659397049391,
      "cer": 0.4535176839049729,
      "av_wer": null,
      "strict_wer": 0.8073744437380801,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.006756756756756757,
      "insertions": 0.10551635663887107
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.668060485243351,
      "wer_uncapped": 0.7213497350123985,
      "cer": 0.38149649834131955,
      "av_wer": 0.7469716183996334,
      "strict_wer": 0.6636068867881445,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.07623863470608255
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.4581779435269046,
      "wer_uncapped": 0.4945835553187711,
      "cer": 0.25132547864506627,
      "av_wer": null,
      "strict_wer": 0.4636008522727273,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0694370449298526
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.5858383433533734,
      "wer_uncapped": 0.6419505678022712,
      "cer": 0.3518850987432675,
      "av_wer": null,
      "strict_wer": 0.5929380413057961,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09886439545758183
     },
     "mgb2/callcenter_v2": {
      "wer": 0.4987627165246082,
      "wer_uncapped": 0.5064613692603794,
      "cer": 0.28161536626103556,
      "av_wer": null,
      "strict_wer": 0.5077007700770076,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.04564201264778664
     },
     "sada/callcenter_v2": {
      "wer": 0.8442211055276382,
      "wer_uncapped": 1.0161222780569514,
      "cer": 0.6129472248452419,
      "av_wer": null,
      "strict_wer": 0.8507065328691378,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.016666666666666666,
      "insertions": 0.19053601340033502
     },
     "casablanca/callcenter_v2": {
      "wer": 0.840602950609365,
      "wer_uncapped": 0.9432328415651058,
      "cer": 0.5410587426476205,
      "av_wer": null,
      "strict_wer": 0.8547361729179911,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.02364864864864865,
      "insertions": 0.13662604233483003
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.7754655516118053,
      "wer_uncapped": 1.0257208148976515,
      "cer": 0.5170936232952451,
      "av_wer": 1.0499411875668465,
      "strict_wer": 0.7647622962049596,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.2726698108620606
     },
     "fleurs_ar/sweep": {
      "wer": 0.41211908110642287,
      "wer_uncapped": 0.5059540553211439,
      "cer": 0.24164487067712875,
      "av_wer": null,
      "strict_wer": 0.41554149085794656,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.008444444444444444,
      "insertions": 0.11828410689170182
     },
     "masc_clean/sweep": {
      "wer": 0.47339828757012103,
      "wer_uncapped": 0.5819309123117803,
      "cer": 0.28961617774230025,
      "av_wer": null,
      "strict_wer": 0.479516651930445,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0044444444444444444,
      "insertions": 0.13475051668142898
     },
     "fleurs_ar/padded": {
      "wer": 0.2233659289758106,
      "wer_uncapped": 0.2393206381883685,
      "cer": 0.10085470085470086,
      "av_wer": null,
      "strict_wer": 0.2254246011322697,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03808543489449305
     },
     "cv18_ar/padded": {
      "wer": 0.4171779141104294,
      "wer_uncapped": 0.6421267893660532,
      "cer": 0.23383838383838385,
      "av_wer": null,
      "strict_wer": 0.43584521384928715,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.278118609406953
     },
     "masc_clean/padded": {
      "wer": 0.2506426735218509,
      "wer_uncapped": 0.2969151670951157,
      "cer": 0.1336182336182336,
      "av_wer": null,
      "strict_wer": 0.25256410256410255,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.11182519280205655
     },
     "sada/padded": {
      "wer": 0.6768729641693811,
      "wer_uncapped": 0.8644951140065147,
      "cer": 0.4070626003210273,
      "av_wer": null,
      "strict_wer": 0.6991714467813894,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.23713355048859935
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.3597180166277685,
      "cer": 0.17198782340936902,
      "wer_arith": 0.40074603891584404,
      "done": 8,
      "total": 8,
      "ci": [
       0.3448,
       0.37353
      ]
     },
     "codeswitch": {
      "wer": 0.38811950960991526,
      "cer": 0.16548228490611747,
      "wer_arith": 0.3881798790180892,
      "done": 2,
      "total": 2,
      "ci": [
       0.34948,
       0.43628
      ]
     },
     "noisy": {
      "wer": 0.41974250364517557,
      "cer": 0.22223754384630715,
      "wer_arith": 0.4451893812943862,
      "done": 5,
      "total": 5,
      "ci": [
       0.39893,
       0.43924
      ]
     },
     "telephony": {
      "wer": 0.5021664276293526,
      "cer": 0.265746933604593,
      "wer_arith": 0.5407212940116396,
      "done": 6,
      "total": 6,
      "ci": [
       0.48432,
       0.51761
      ]
     },
     "callcenter": {
      "wer": 0.6474694224169036,
      "cer": 0.4027990192963826,
      "wer_arith": 0.6671781018589491,
      "done": 6,
      "total": 6,
      "ci": [
       0.62967,
       0.66291
      ]
     }
    },
    "arena": 0.4083006320873711,
    "arena_arith": 0.4461683480918522,
    "arena_cer": 0.20208768896828844,
    "arena_strict": 0.42321295957737465,
    "zero_shot": 0.4395020388126647,
    "arena_real": 0.3667270267052541,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.24666666666666667,
    "rank": 19,
    "arena_ci": [
     0.39525,
     0.42223
    ],
    "rank_set": [
     19,
     19
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
    "fleurs_ar/clean": {
     "wer": 0.09883864591055103,
     "cer": 0.03316140124650763,
     "rtfx": 153.53,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.2286282306163022,
     "cer": 0.10048445700444085,
     "rtfx": 67.73,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.09421641791044776,
     "cer": 0.0332841162191246,
     "rtfx": 67.19,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.16260905691732447,
     "cer": 0.06842999272021354,
     "rtfx": 101.67,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.8472692776799025,
     "cer": 0.5753613403695386,
     "rtfx": 63.99,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.862002743484225,
     "cer": 0.48256379212297984,
     "rtfx": 47.33,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.4258481421647819,
     "cer": 0.21662522278310797,
     "rtfx": 97.51,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 1.1050518255672799,
     "cer": 0.6986328476344666,
     "rtfx": 44.49,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.24502896508532956,
     "cer": 0.11939757707516108,
     "rtfx": 184.04,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.9229005445686443,
     "cer": 0.7091676588375365,
     "rtfx": 55.63,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2523167649536647,
     "cer": 0.1006453347674106,
     "rtfx": 58.34,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 1.1741422444603289,
     "cer": 0.8214638527166592,
     "rtfx": 35.86,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.13931230060262317,
     "cer": 0.047739157182405415,
     "rtfx": 163.65,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.37908061292471684,
     "cer": 0.22975184074175076,
     "rtfx": 66.06,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.2854785478547855,
     "cer": 0.14132975284698393,
     "rtfx": 93.59,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.8943272578332992,
     "cer": 0.7069899191868699,
     "rtfx": 65.66,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.1423254165189649,
     "cer": 0.0478929560135343,
     "rtfx": 164.21,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.3117921385742838,
     "cer": 0.13635124079629124,
     "rtfx": 75.25,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.20902090209020902,
     "cer": 0.08608085931672385,
     "rtfx": 105.9,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.9471636289166496,
     "cer": 0.6604598850287429,
     "rtfx": 75.6,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 1.1385886840432295,
     "cer": 0.715104328869511,
     "rtfx": 42.79,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.7833822450476889,
     "cer": 0.5285574234777242,
     "rtfx": 73.9,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.47802197802197804,
     "cer": 0.24484773915718241,
     "rtfx": 106.71,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 1.0299800133244503,
     "cer": 0.7232069811835288,
     "rtfx": 47.64,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.7013201320132013,
     "cer": 0.496195733253767,
     "rtfx": 56.59,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.283022731927094,
     "cer": 0.9455136215946014,
     "rtfx": 75.95,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.663064208518754,
     "cer": 1.251946434132669,
     "rtfx": 38.42,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 1.297872340425532,
     "cer": 0.9753458480084238,
     "rtfx": 57.47,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 73.71,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.13665366891173342,
     "cer": 0.047185481390341434,
     "rtfx": 159.78,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.28914057295136575,
     "cer": 0.1184892282519771,
     "rtfx": 73.49,
     "n": 300
    },
    "mgb2/telephony_v2": {
     "wer": 0.21177117711771176,
     "cer": 0.09453478541946392,
     "rtfx": 102.95,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 1.2344869956993652,
     "cer": 0.8675747729734233,
     "rtfx": 56.87,
     "n": 300
    },
    "casablanca/telephony_v2": {
     "wer": 1.2612841703750794,
     "cer": 0.7882902522578636,
     "rtfx": 39.81,
     "n": 296
    },
    "mgb3_egy/telephony_v2": {
     "wer": 0.6661775495231108,
     "cer": 0.39639083548164555,
     "rtfx": 79.78,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.25203828429634884,
     "cer": 0.10981236542602277,
     "rtfx": 133.48,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.4463690872751499,
     "cer": 0.2879738205617671,
     "rtfx": 65.2,
     "n": 300
    },
    "mgb2/callcenter_v2": {
     "wer": 0.38063806380638066,
     "cer": 0.21806156447361877,
     "rtfx": 83.76,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 1.2334630350194553,
     "cer": 0.9927518120469883,
     "rtfx": 65.27,
     "n": 300
    },
    "casablanca/callcenter_v2": {
     "wer": 1.2167832167832169,
     "cer": 0.820678916225475,
     "rtfx": 40.27,
     "n": 296
    },
    "mgb3_egy/callcenter_v2": {
     "wer": 0.847028613352898,
     "cer": 0.59246214734396,
     "rtfx": 62.3,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.3076130241274303,
     "cer": 0.16358958776461055,
     "rtfx": 133.25,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.5452991452991452,
     "cer": 0.3800634496577058,
     "rtfx": 56.31,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.10848329048843187,
     "cer": 0.03936445594929929,
     "rtfx": 278.5,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.20977596741344195,
     "cer": 0.0890295358649789,
     "rtfx": 241.01,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.11282051282051282,
     "cer": 0.04750537121031272,
     "rtfx": 232.31,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.7667304015296367,
     "cer": 0.6460040983606558,
     "rtfx": 123.19,
     "n": 100
    },
    "noise_only_v2/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 151.38,
     "n": 830
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.4780580425313518,
     "cer": 0.27606789626254746,
     "done": 8,
     "total": 8,
     "ci": [
      0.44605,
      0.51375
     ]
    },
    "codeswitch": {
     "wer": 0.583964754826987,
     "cer": 0.4142826179563488,
     "done": 2,
     "total": 2,
     "ci": [
      0.46882,
      0.71897
     ]
    },
    "noisy": {
     "wer": 0.5207762881049031,
     "cer": 0.34131997624034666,
     "done": 6,
     "total": 6,
     "ci": [
      0.47479,
      0.57261
     ]
    },
    "telephony": {
     "wer": 0.5887121691985043,
     "cer": 0.36240778225042125,
     "done": 6,
     "total": 6,
     "ci": [
      0.50608,
      0.67967
     ]
    },
    "callcenter": {
     "wer": 1.0755469007051681,
     "cer": 0.7728427262216954,
     "done": 6,
     "total": 6,
     "ci": [
      0.96288,
      1.20664
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
   "hallucination_rate": 1.0,
   "inserted_wpm": 62.13,
   "arena_wer": 0.6366850475651418,
   "arena_cer": 0.41630012361800184,
   "arena_ci": [
    0.60223,
    0.67343
   ],
   "rank_range": [
    18,
    19
   ],
   "rtfx": 83.2,
   "audio_hours": 49.25,
   "v2": {
    "halluc_any": 1.0,
    "halluc_3plus": 0.71,
    "halluc_3plus_ci": [
     0.65625,
     0.75844
    ],
    "inserted_wpm": 62.13135635703221,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.0930117501546073,
      "wer_uncapped": 0.0930117501546073,
      "cer": 0.03432040958089995,
      "av_wer": null,
      "strict_wer": 0.09793495733893903,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004700061842918986
     },
     "cv18_ar/clean": {
      "wer": 0.20927917164476303,
      "wer_uncapped": 0.22122660294703306,
      "cer": 0.09815270341966913,
      "av_wer": null,
      "strict_wer": 0.2165009940357853,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.018916766228594187
     },
     "masc_clean/clean": {
      "wer": 0.08681157487665021,
      "wer_uncapped": 0.08721162821709562,
      "cer": 0.03349983549187928,
      "av_wer": null,
      "strict_wer": 0.0935501066098081,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004533937858381117
     },
     "mgb2/clean": {
      "wer": 0.1492847638057219,
      "wer_uncapped": 0.1492847638057219,
      "cer": 0.06608435602399752,
      "av_wer": null,
      "strict_wer": 0.1620274200249273,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0074850299401197605
     },
     "sada/clean": {
      "wer": 0.4865463097461437,
      "wer_uncapped": 0.8214013972470083,
      "cer": 0.2948852945745801,
      "av_wer": null,
      "strict_wer": 0.5060983873153544,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.026052104208416832,
      "insertions": 0.35775057065781285
     },
     "casablanca/clean": {
      "wer": 0.5831097955785773,
      "wer_uncapped": 0.8381278327629267,
      "cer": 0.2910232096089587,
      "av_wer": null,
      "strict_wer": 0.6087791495198902,
      "n": 994,
      "failed": 0,
      "loop_rate": 0.02012072434607646,
      "insertions": 0.2819350661363426
     },
     "mgb3_egy/clean": {
      "wer": 0.29135844700047037,
      "wer_uncapped": 0.33597012585339436,
      "cer": 0.16913854231508296,
      "av_wer": 0.3727432639574609,
      "strict_wer": 0.3149730757896429,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.005,
      "insertions": 0.05273585040122005
     },
     "mgb5_mor/clean": {
      "wer": 0.5699545085198171,
      "wer_uncapped": 0.8911545381079221,
      "cer": 0.3846883312131375,
      "av_wer": null,
      "strict_wer": 0.5746061749355871,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.027,
      "insertions": 0.32341776061569133
     },
     "mixat_cs/clean": {
      "wer": 0.2164232135807343,
      "wer_uncapped": 0.21966048164232135,
      "cer": 0.11537256437873299,
      "av_wer": 0.21585544819146354,
      "strict_wer": 0.23113845189350155,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.004,
      "insertions": 0.015436241610738255
     },
     "algerian_cs/clean": {
      "wer": 0.5207557973089035,
      "wer_uncapped": 0.8909247065559691,
      "cer": 0.3192605218303396,
      "av_wer": null,
      "strict_wer": 0.5504141673807483,
      "n": 316,
      "failed": 0,
      "loop_rate": 0.03164556962025317,
      "insertions": 0.38877755511022044
     },
     "masc_noisy/clean": {
      "wer": 0.23535211267605632,
      "wer_uncapped": 0.23690140845070423,
      "cer": 0.10140400592516262,
      "av_wer": null,
      "strict_wer": 0.2499297950014041,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.016056338028169016
     },
     "nadi_robust/clean": {
      "wer": 0.716467823571945,
      "wer_uncapped": 1.1646782357194505,
      "cer": 0.40231259968102073,
      "av_wer": null,
      "strict_wer": 0.7301644031451037,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.048,
      "insertions": 0.4682754880694143
     },
     "fleurs_ar/noisy": {
      "wer": 0.13248090925235304,
      "wer_uncapped": 0.13248090925235304,
      "cer": 0.050515463917525774,
      "av_wer": null,
      "strict_wer": 0.13849431818181818,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008169064109394424
     },
     "cv18_ar/noisy": {
      "wer": 0.29325317301269205,
      "wer_uncapped": 0.37341349365397464,
      "cer": 0.14738044720091398,
      "av_wer": null,
      "strict_wer": 0.2984676882078614,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.09418837675350701
     },
     "mgb2/noisy": {
      "wer": 0.23563376409128403,
      "wer_uncapped": 0.27907616167170746,
      "cer": 0.11309949892627058,
      "av_wer": null,
      "strict_wer": 0.24367436743674367,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.05554028045092109
     },
     "sada/noisy": {
      "wer": 0.6164154103852596,
      "wer_uncapped": 0.8877721943048577,
      "cer": 0.4308047424194733,
      "av_wer": null,
      "strict_wer": 0.6301454024165472,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03666666666666667,
      "insertions": 0.29690117252931325
     },
     "fleurs_ar/telephony": {
      "wer": 0.13443438110459954,
      "wer_uncapped": 0.13443438110459954,
      "cer": 0.050110456553755525,
      "av_wer": null,
      "strict_wer": 0.14115767045454544,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008701829160007104
     },
     "cv18_ar/telephony": {
      "wer": 0.2952571810287241,
      "wer_uncapped": 0.3066132264529058,
      "cer": 0.14281051085359883,
      "av_wer": null,
      "strict_wer": 0.3011325782811459,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02137608550434202
     },
     "mgb2/telephony": {
      "wer": 0.20043992301347263,
      "wer_uncapped": 0.20043992301347263,
      "cer": 0.08619661178716297,
      "av_wer": null,
      "strict_wer": 0.21012101210121012,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008798460269452846
     },
     "sada/telephony": {
      "wer": 0.5707705192629816,
      "wer_uncapped": 0.9175041876046901,
      "cer": 0.3580421781554926,
      "av_wer": null,
      "strict_wer": 0.5918492729879172,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.04666666666666667,
      "insertions": 0.3682998324958124
     },
     "casablanca/telephony": {
      "wer": 0.6680564464400257,
      "wer_uncapped": 1.1202694034637588,
      "cer": 0.3754487816056833,
      "av_wer": null,
      "strict_wer": 0.6897647806738716,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.02702702702702703,
      "insertions": 0.47209749839640797
     },
     "mgb3_egy/telephony": {
      "wer": 0.4360383138036661,
      "wer_uncapped": 0.7174600087518841,
      "cer": 0.28248249170659784,
      "av_wer": 0.7510506529350842,
      "strict_wer": 0.4547654929899073,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03,
      "insertions": 0.28803422959109254
     },
     "fleurs_ar/callcenter": {
      "wer": 0.3706268868762209,
      "wer_uncapped": 0.47345054164446815,
      "cer": 0.1888438880706922,
      "av_wer": null,
      "strict_wer": 0.375,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.013333333333333334,
      "insertions": 0.12093766648907832
     },
     "cv18_ar/callcenter": {
      "wer": 0.5537742150968604,
      "wer_uncapped": 1.0267201068804275,
      "cer": 0.36739023992165826,
      "av_wer": null,
      "strict_wer": 0.558960692871419,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02666666666666667,
      "insertions": 0.48830995323981297
     },
     "mgb2/callcenter": {
      "wer": 0.4462469067913115,
      "wer_uncapped": 0.6928787462194116,
      "cer": 0.25542829873538536,
      "av_wer": null,
      "strict_wer": 0.45489548954895487,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03,
      "insertions": 0.26147924113280174
     },
     "sada/callcenter": {
      "wer": 0.7659128978224455,
      "wer_uncapped": 1.236180904522613,
      "cer": 0.5729724058335957,
      "av_wer": null,
      "strict_wer": 0.7755478189637518,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.08333333333333333,
      "insertions": 0.48408710217755446
     },
     "casablanca/callcenter": {
      "wer": 0.8239255933290571,
      "wer_uncapped": 1.5949326491340603,
      "cer": 0.5877320296386831,
      "av_wer": null,
      "strict_wer": 0.8350286077558805,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.07094594594594594,
      "insertions": 0.7876844130853111
     },
     "mgb3_egy/callcenter": {
      "wer": 0.6283366558078475,
      "wer_uncapped": 1.2812758302134488,
      "cer": 0.46097493549576113,
      "av_wer": 1.3099640549559408,
      "strict_wer": 0.63447047540759,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.08,
      "insertions": 0.658336169592065
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
      "insertions": null
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.13052743740010656,
      "wer_uncapped": 0.13052743740010656,
      "cer": 0.04996318114874816,
      "av_wer": null,
      "strict_wer": 0.1358309659090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00728112235837329
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.2725450901803607,
      "wer_uncapped": 0.2798931195724783,
      "cer": 0.12322506936510527,
      "av_wer": null,
      "strict_wer": 0.2811459027315123,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.015364061456245824
     },
     "mgb2/telephony_v2": {
      "wer": 0.20428924938135826,
      "wer_uncapped": 0.20428924938135826,
      "cer": 0.09383202099737532,
      "av_wer": null,
      "strict_wer": 0.2125962596259626,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010723123453395655
     },
     "sada/telephony_v2": {
      "wer": 0.5651172529313233,
      "wer_uncapped": 1.199748743718593,
      "cer": 0.36082257895289055,
      "av_wer": null,
      "strict_wer": 0.5867294695883678,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.06,
      "insertions": 0.6587102177554439
     },
     "casablanca/telephony_v2": {
      "wer": 0.6712636305323926,
      "wer_uncapped": 1.1757536882617061,
      "cer": 0.3877473073103659,
      "av_wer": null,
      "strict_wer": 0.6961220597584233,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.030405405405405407,
      "insertions": 0.5314304041051956
     },
     "mgb3_egy/telephony_v2": {
      "wer": 0.4358438274906403,
      "wer_uncapped": 0.59629503573686,
      "cer": 0.27764467379284924,
      "av_wer": 0.6311581042197834,
      "strict_wer": 0.4521167283189478,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.02,
      "insertions": 0.16881411970632568
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.24134256792754397,
      "wer_uncapped": 0.24667021843367076,
      "cer": 0.10272459499263623,
      "av_wer": null,
      "strict_wer": 0.24644886363636365,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.016160539868584622
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.42952571810287243,
      "wer_uncapped": 0.44288577154308617,
      "cer": 0.24139056634568304,
      "av_wer": null,
      "strict_wer": 0.4323784143904064,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02404809619238477
     },
     "mgb2/callcenter_v2": {
      "wer": 0.3200439923013473,
      "wer_uncapped": 0.3750343689854275,
      "cer": 0.16404199475065617,
      "av_wer": null,
      "strict_wer": 0.32673267326732675,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.06681330767115755
     },
     "sada/callcenter_v2": {
      "wer": 0.6955611390284757,
      "wer_uncapped": 1.2370184254606365,
      "cer": 0.4899800650508866,
      "av_wer": null,
      "strict_wer": 0.707556829817735,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.09,
      "insertions": 0.5592546063651591
     },
     "casablanca/callcenter_v2": {
      "wer": 0.7758178319435536,
      "wer_uncapped": 1.2097498396407953,
      "cer": 0.4894202123596364,
      "av_wer": null,
      "strict_wer": 0.7857596948506039,
      "n": 296,
      "failed": 0,
      "loop_rate": 0.037162162162162164,
      "insertions": 0.4547787042976267
     },
     "mgb3_egy/callcenter_v2": {
      "wer": 0.582048913307726,
      "wer_uncapped": 0.7981718286575582,
      "cer": 0.39458164393660156,
      "av_wer": 0.8284681253453128,
      "strict_wer": 0.5886651139425492,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.03666666666666667,
      "insertions": 0.22579860942286187
     },
     "fleurs_ar/sweep": {
      "wer": 0.23956868260665728,
      "wer_uncapped": 0.3019924988279419,
      "cer": 0.11589654170299332,
      "av_wer": null,
      "strict_wer": 0.24481950304735114,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.012888888888888889,
      "insertions": 0.07093295827473042
     },
     "masc_clean/sweep": {
      "wer": 0.3520519633894302,
      "wer_uncapped": 0.541541186891054,
      "cer": 0.2214993680569414,
      "av_wer": null,
      "strict_wer": 0.35573239021514885,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.011555555555555555,
      "insertions": 0.2007676409802185
     },
     "fleurs_ar/padded": {
      "wer": 0.09624292331446217,
      "wer_uncapped": 0.09984559958826557,
      "cer": 0.039636752136752135,
      "av_wer": null,
      "strict_wer": 0.1044776119402985,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00977869274318065
     },
     "cv18_ar/padded": {
      "wer": 0.19222903885480572,
      "wer_uncapped": 0.19427402862985685,
      "cer": 0.0904040404040404,
      "av_wer": null,
      "strict_wer": 0.20773930753564154,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006134969325153374
     },
     "masc_clean/padded": {
      "wer": 0.10668380462724936,
      "wer_uncapped": 0.10668380462724936,
      "cer": 0.04757834757834758,
      "av_wer": null,
      "strict_wer": 0.11153846153846154,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010282776349614395
     },
     "sada/padded": {
      "wer": 0.5263843648208469,
      "wer_uncapped": 0.7530944625407167,
      "cer": 0.3476725521669342,
      "av_wer": null,
      "strict_wer": 0.5442957297641811,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.03,
      "insertions": 0.254071661237785
     },
     "noise_only_v2/clean": {
      "wer": null,
      "wer_uncapped": null,
      "cer": null,
      "av_wer": null,
      "strict_wer": null,
      "n": 0,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": null
     }
    },
    "tracks": {
     "clean": {
      "wer": 0.24231199258995192,
      "cer": 0.11952012820730785,
      "wer_arith": 0.30866954016584386,
      "done": 8,
      "total": 8,
      "ci": [
       0.23032,
       0.25349
      ]
     },
     "codeswitch": {
      "wer": 0.33571363264602533,
      "cer": 0.1919216118847972,
      "wer_arith": 0.3685895054448189,
      "done": 2,
      "total": 2,
      "ci": [
       0.28358,
       0.40293
      ]
     },
     "noisy": {
      "wer": 0.26585511833791936,
      "cer": 0.12975738864133424,
      "wer_arith": 0.302627073883529,
      "done": 5,
      "total": 5,
      "ci": [
       0.24795,
       0.28242
      ]
     },
     "telephony": {
      "wer": 0.3260553859381592,
      "cer": 0.16794690744594082,
      "wer_arith": 0.3799310813193636,
      "done": 6,
      "total": 6,
      "ci": [
       0.3088,
       0.34149
      ]
     },
     "callcenter": {
      "wer": 0.46735607098877546,
      "cer": 0.2697063430732547,
      "wer_arith": 0.5073900271019197,
      "done": 6,
      "total": 6,
      "ci": [
       0.44927,
       0.48367
      ]
     }
    },
    "arena": 0.28383992387151535,
    "arena_arith": 0.3437493678243025,
    "arena_cer": 0.1458025901616431,
    "arena_strict": 0.2969835140129847,
    "zero_shot": 0.37943376094547515,
    "arena_real": 0.26004619649131494,
    "exposure": 0,
    "incomplete": [],
    "boh_share": 0.6,
    "rank": 13,
    "arena_ci": [
     0.27116,
     0.29644
    ],
    "rank_set": [
     12,
     13
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
    "fleurs_ar/clean": {
     "wer": 0.058191252779836916,
     "cer": 0.023511712873415,
     "rtfx": 150.91,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.07673956262425448,
     "cer": 0.02192167945094873,
     "rtfx": 186.1,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.057569296375266525,
     "cer": 0.022648214419780276,
     "rtfx": 125.93,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.24210597641956905,
     "cer": 0.10479904101850449,
     "rtfx": 72.2,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.1717942696101456,
     "cer": 0.08084030436220993,
     "rtfx": 119.09,
     "n": 1000
    },
    "masc_noisy/clean": {
     "wer": 0.16147149677057007,
     "cer": 0.06550147889217532,
     "rtfx": 111.79,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.09588798298475718,
     "cer": 0.04229467856044294,
     "rtfx": 145.62,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.24850099933377748,
     "cer": 0.1431688028361058,
     "rtfx": 148.6,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.43334015973786605,
     "cer": 0.26114304757144047,
     "rtfx": 41.91,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.07107408720311946,
     "cer": 0.030083051368809597,
     "rtfx": 136.36,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.10859427048634245,
     "cer": 0.036678483774202346,
     "rtfx": 161.1,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.28855211959860744,
     "cer": 0.1308839456802466,
     "rtfx": 102.19,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.18823112371499467,
     "cer": 0.08671178099046448,
     "rtfx": 96.2,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.3257828114590273,
     "cer": 0.18543768748295608,
     "rtfx": 59.64,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.4673356543108745,
     "cer": 0.2665583604098975,
     "rtfx": 32.54,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.06894718185040766,
     "cer": 0.02885266071977853,
     "rtfx": 119.07,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.09327115256495669,
     "cer": 0.03149713662394328,
     "rtfx": 126.2,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.2770837599836166,
     "cer": 0.1265933516620845,
     "rtfx": 53.07,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.11467564693371145,
     "cer": 0.05204552445401415,
     "rtfx": 112.74,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.22385076615589608,
     "cer": 0.10826288519225524,
     "rtfx": 123.23,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.3725168953512185,
     "cer": 0.2033658252103641,
     "rtfx": 28.38,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.17427969079409697,
     "cer": 0.08375569735642661,
     "rtfx": 118.92,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.2520483348069555,
     "cer": 0.14525519007068516,
     "rtfx": 44.35,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.06529562982005141,
     "cer": 0.023475854681781667,
     "rtfx": 131.96,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.20570264765784113,
     "cer": 0.16075949367088607,
     "rtfx": 156.66,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.07435897435897436,
     "cer": 0.03198854141799952,
     "rtfx": 143.42,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.25748884639898023,
     "cer": 0.1363985655737705,
     "rtfx": 92.25,
     "n": 100
    }
   },
   "tracks": {
    "clean": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 8
    },
    "codeswitch": {
     "wer": null,
     "cer": null,
     "done": 1,
     "total": 2
    },
    "noisy": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 6
    },
    "telephony": {
     "wer": null,
     "cer": null,
     "done": 3,
     "total": 6
    },
    "callcenter": {
     "wer": null,
     "cer": null,
     "done": 3,
     "total": 6
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
    "cv18_ar",
    "masc_clean",
    "masc_noisy",
    "mgb2",
    "sada",
    "mgb3_egy",
    "fleurs_ar"
   ],
   "notes": "Arabic-STT run 3: full fine-tune, weights gated on the Hub; trained on the train splits of CV18 and MASC and on MGB-2/SADA/MGB-3 train rows (rows overlapping their test sets excluded). Its kejue-common-voice stream also holds 20 FLEURS ar_eg *test* sentences (37 of our 428 fleurs_ar rows), which the contamination guard did not cover; labels of that stream come from Soniox stt-async-v5",
   "training_data": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": null,
   "arena_cer": null,
   "arena_ci": null,
   "rank_range": null,
   "rtfx": 88.7,
   "audio_hours": 31.02,
   "v2": {
    "halluc_any": null,
    "halluc_3plus": null,
    "halluc_3plus_ci": null,
    "inserted_wpm": null,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.0492269635126778,
      "wer_uncapped": 0.0492269635126778,
      "cer": 0.02215132882245491,
      "av_wer": null,
      "strict_wer": 0.05638679361938914,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0058132343846629565
     },
     "cv18_ar/clean": {
      "wer": 0.06909597769812824,
      "wer_uncapped": 0.06909597769812824,
      "cer": 0.022813871605652822,
      "av_wer": null,
      "strict_wer": 0.07594433399602386,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.002588610115491836
     },
     "masc_clean/clean": {
      "wer": 0.053207094279237234,
      "wer_uncapped": 0.053207094279237234,
      "cer": 0.02225346214817695,
      "av_wer": null,
      "strict_wer": 0.05743603411513859,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0036004800640085347
     },
     "sada/clean": {
      "wer": 0.21103963477899979,
      "wer_uncapped": 0.21442899633395587,
      "cer": 0.1007232742400442,
      "av_wer": null,
      "strict_wer": 0.2386502236075349,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.001002004008016032,
      "insertions": 0.039358096423877706
     },
     "mixat_cs/clean": {
      "wer": 0.13304382155546782,
      "wer_uncapped": 0.13774180813264902,
      "cer": 0.07290707921276804,
      "av_wer": 0.14087257972801748,
      "strict_wer": 0.1508532022020649,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.003,
      "insertions": 0.02159494670351362
     },
     "masc_noisy/clean": {
      "wer": 0.14309859154929577,
      "wer_uncapped": 0.14366197183098592,
      "cer": 0.06553101049784246,
      "av_wer": null,
      "strict_wer": 0.16034821679303565,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014788732394366197
     },
     "fleurs_ar/noisy": {
      "wer": 0.08861658675190907,
      "wer_uncapped": 0.0887941751021133,
      "cer": 0.04201030927835052,
      "av_wer": null,
      "strict_wer": 0.09446022727272728,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012431184514295862
     },
     "cv18_ar/noisy": {
      "wer": 0.19973279893119572,
      "wer_uncapped": 0.24382097528390115,
      "cer": 0.12142973722866003,
      "av_wer": null,
      "strict_wer": 0.20386409060626248,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.07748830995323981
     },
     "sada/noisy": {
      "wer": 0.32935510887772196,
      "wer_uncapped": 0.4154103852596315,
      "cer": 0.20045115937467212,
      "av_wer": null,
      "strict_wer": 0.348965799713291,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.12458123953098828
     },
     "fleurs_ar/telephony": {
      "wer": 0.06304386432250045,
      "wer_uncapped": 0.06304386432250045,
      "cer": 0.029123711340206186,
      "av_wer": null,
      "strict_wer": 0.06924715909090909,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007636299058781744
     },
     "cv18_ar/telephony": {
      "wer": 0.10287241148964596,
      "wer_uncapped": 0.10287241148964596,
      "cer": 0.039170882976987106,
      "av_wer": null,
      "strict_wer": 0.10792804796802132,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0033400133600534404
     },
     "sada/telephony": {
      "wer": 0.25481574539363483,
      "wer_uncapped": 0.259212730318258,
      "cer": 0.1269016892246354,
      "av_wer": null,
      "strict_wer": 0.28445627687896785,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04648241206030151
     },
     "fleurs_ar/callcenter": {
      "wer": 0.18060735215769846,
      "wer_uncapped": 0.18131770555851537,
      "cer": 0.09112665684830633,
      "av_wer": null,
      "strict_wer": 0.18607954545454544,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.02095542532409874
     },
     "cv18_ar/callcenter": {
      "wer": 0.29124916499666,
      "wer_uncapped": 0.3199732798931196,
      "cer": 0.18491921005385997,
      "av_wer": null,
      "strict_wer": 0.2978014656895403,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05678022712090848
     },
     "sada/callcenter": {
      "wer": 0.43655778894472363,
      "wer_uncapped": 0.4499581239530988,
      "cer": 0.2661840310565523,
      "av_wer": null,
      "strict_wer": 0.45525291828793774,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.05443886097152429
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.06126798082045818,
      "wer_uncapped": 0.06126798082045818,
      "cer": 0.027577319587628865,
      "av_wer": null,
      "strict_wer": 0.06693892045454546,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008524240809802876
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.08617234468937876,
      "wer_uncapped": 0.08617234468937876,
      "cer": 0.032968826505630815,
      "av_wer": null,
      "strict_wer": 0.09193870752831446,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004008016032064128
     },
     "sada/telephony_v2": {
      "wer": 0.24685929648241206,
      "wer_uncapped": 0.25251256281407036,
      "cer": 0.12438359038925612,
      "av_wer": null,
      "strict_wer": 0.2715543723121032,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04396984924623116
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.10832889362457823,
      "wer_uncapped": 0.10832889362457823,
      "cer": 0.05316642120765832,
      "av_wer": null,
      "strict_wer": 0.11274857954545454,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.013496714615521222
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.19505678022712092,
      "wer_uncapped": 0.218436873747495,
      "cer": 0.10200750775257059,
      "av_wer": null,
      "strict_wer": 0.19920053297801465,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03206412825651302
     },
     "sada/callcenter_v2": {
      "wer": 0.3479899497487437,
      "wer_uncapped": 0.3502931323283082,
      "cer": 0.20553981743783442,
      "av_wer": null,
      "strict_wer": 0.37026418185541676,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.03957286432160804
     },
     "fleurs_ar/sweep": {
      "wer": 0.15918893577121426,
      "wer_uncapped": 0.16671354899203,
      "cer": 0.08474765087668314,
      "av_wer": null,
      "strict_wer": 0.16472105016408814,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.019831223628691982
     },
     "masc_clean/sweep": {
      "wer": 0.22403306761145556,
      "wer_uncapped": 0.24865662828461765,
      "cer": 0.1365396128517262,
      "av_wer": null,
      "strict_wer": 0.22735042735042735,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0008888888888888889,
      "insertions": 0.04044877472689696
     },
     "fleurs_ar/padded": {
      "wer": 0.057128152341739576,
      "wer_uncapped": 0.057128152341739576,
      "cer": 0.023397435897435898,
      "av_wer": null,
      "strict_wer": 0.06227483273288729,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0051466803911477095
     },
     "cv18_ar/padded": {
      "wer": 0.08384458077709611,
      "wer_uncapped": 0.19222903885480572,
      "cer": 0.047979797979797977,
      "av_wer": null,
      "strict_wer": 0.09775967413441955,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.130879345603272
     },
     "masc_clean/padded": {
      "wer": 0.06555269922879177,
      "wer_uncapped": 0.06683804627249357,
      "cer": 0.03190883190883191,
      "av_wer": null,
      "strict_wer": 0.07307692307692308,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007712082262210797
     },
     "sada/padded": {
      "wer": 0.2045602605863192,
      "wer_uncapped": 0.2273615635179153,
      "cer": 0.11476725521669343,
      "av_wer": null,
      "strict_wer": 0.2332695984703633,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.07035830618892508
     }
    },
    "tracks": {
     "clean": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 4,
      "total": 8
     },
     "codeswitch": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 1,
      "total": 2
     },
     "noisy": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 4,
      "total": 5
     },
     "telephony": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 3,
      "total": 6
     },
     "callcenter": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 3,
      "total": 6
     }
    },
    "arena": null,
    "arena_arith": null,
    "arena_cer": null,
    "arena_strict": null,
    "zero_shot": null,
    "arena_real": null,
    "exposure": 0.6917,
    "incomplete": []
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run5",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-run5",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.05683222139856684,
     "cer": 0.023275306254029657,
     "rtfx": 148.07,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.07176938369781312,
     "cer": 0.02067016552280985,
     "rtfx": 181.8,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.05503731343283582,
     "cer": 0.02002052103405991,
     "rtfx": 128.4,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.24806884401680446,
     "cer": 0.10743072874326577,
     "rtfx": 72.26,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.17277281979019884,
     "cer": 0.08363659278163744,
     "rtfx": 142.62,
     "n": 1000
    },
    "masc_noisy/clean": {
     "wer": 0.15248525695029486,
     "cer": 0.057703683785963966,
     "rtfx": 118.17,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.0707196029776675,
     "cer": 0.02903721931713319,
     "rtfx": 148.54,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.1145902731512325,
     "cer": 0.04445050449959095,
     "rtfx": 164.96,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.301658816301454,
     "cer": 0.1458385403649088,
     "rtfx": 102.76,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.06788372917405175,
     "cer": 0.02903721931713319,
     "rtfx": 150.07,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.10193204530313124,
     "cer": 0.03258794655031361,
     "rtfx": 166.21,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.28814253532664347,
     "cer": 0.13059235191202198,
     "rtfx": 99.1,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.14657922722438851,
     "cer": 0.06502614580129192,
     "rtfx": 139.59,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.24250499666888742,
     "cer": 0.12257976547586583,
     "rtfx": 155.47,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.43047306983411837,
     "cer": 0.22965092060318254,
     "rtfx": 58.6,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.06380716058135413,
     "cer": 0.0269147954475546,
     "rtfx": 125.34,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.08927381745502998,
     "cer": 0.030951731660758115,
     "rtfx": 173.89,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.28916649600655336,
     "cer": 0.13317503957343998,
     "rtfx": 57.57,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.10723147819922013,
     "cer": 0.048108274377114735,
     "rtfx": 142.89,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.18121252498334445,
     "cer": 0.08440141805290428,
     "rtfx": 165.88,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.367806676223633,
     "cer": 0.185995167874698,
     "rtfx": 31.95,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.12614195361911454,
     "cer": 0.057056619062088525,
     "rtfx": 133.17,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.22192749778956675,
     "cer": 0.12204597317303946,
     "rtfx": 48.6,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.09922879177377893,
     "cer": 0.052753726680353476,
     "rtfx": 153.06,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.17311608961303462,
     "cer": 0.1189873417721519,
     "rtfx": 277.39,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.23846153846153847,
     "cer": 0.17641441871568395,
     "rtfx": 174.59,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.2746972594008923,
     "cer": 0.14997438524590165,
     "rtfx": 51.5,
     "n": 100
    }
   },
   "tracks": {
    "clean": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 8
    },
    "codeswitch": {
     "wer": null,
     "cer": null,
     "done": 1,
     "total": 2
    },
    "noisy": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 6
    },
    "telephony": {
     "wer": null,
     "cer": null,
     "done": 3,
     "total": 6
    },
    "callcenter": {
     "wer": null,
     "cer": null,
     "done": 3,
     "total": 6
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
    "cv18_ar",
    "masc_clean",
    "masc_noisy",
    "mgb2",
    "sada",
    "mgb3_egy",
    "fleurs_ar"
   ],
   "notes": "Arabic-STT run 5: run 3 continued twice (runs 4 and 5) with more call, dialect and code-switching data; same in-domain train rows as run 3, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences; also trained on clips of the lahgtna-v3-small test split",
   "training_data": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": null,
   "arena_cer": null,
   "arena_ci": null,
   "rank_range": null,
   "rtfx": 102.5,
   "audio_hours": 31.02,
   "v2": {
    "halluc_any": null,
    "halluc_3plus": null,
    "halluc_3plus_ci": null,
    "inserted_wpm": null,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.05170068027210884,
      "wer_uncapped": 0.05170068027210884,
      "cer": 0.02307751678715686,
      "av_wer": null,
      "strict_wer": 0.05589217262272783,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0055658627087198514
     },
     "cv18_ar/clean": {
      "wer": 0.06391875746714457,
      "wer_uncapped": 0.0641178813221824,
      "cer": 0.021270438431486037,
      "av_wer": null,
      "strict_wer": 0.07077534791252485,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0033851055356431702
     },
     "masc_clean/clean": {
      "wer": 0.04800640085344712,
      "wer_uncapped": 0.04813975196692893,
      "cer": 0.019471779379654833,
      "av_wer": null,
      "strict_wer": 0.05477078891257996,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004133884517935725
     },
     "sada/clean": {
      "wer": 0.21491319084180674,
      "wer_uncapped": 0.21975513592031543,
      "cer": 0.10162089382196061,
      "av_wer": null,
      "strict_wer": 0.24319013416452093,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.002004008016032064,
      "insertions": 0.041640727675174655
     },
     "mixat_cs/clean": {
      "wer": 0.13576786419265693,
      "wer_uncapped": 0.13588630082905645,
      "cer": 0.08065211005581122,
      "av_wer": 0.13865664726217825,
      "strict_wer": 0.15481064984424897,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.002,
      "insertions": 0.0189498618239242
     },
     "masc_noisy/clean": {
      "wer": 0.13140845070422535,
      "wer_uncapped": 0.1323943661971831,
      "cer": 0.05558060153281381,
      "av_wer": null,
      "strict_wer": 0.15009828699803426,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017605633802816902
     },
     "fleurs_ar/noisy": {
      "wer": 0.06446457112413426,
      "wer_uncapped": 0.06446457112413426,
      "cer": 0.028939617083946982,
      "av_wer": null,
      "strict_wer": 0.06942471590909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.007636299058781744
     },
     "cv18_ar/noisy": {
      "wer": 0.10688042752171009,
      "wer_uncapped": 0.10888443553774214,
      "cer": 0.04700505957238453,
      "av_wer": null,
      "strict_wer": 0.11125916055962691,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008016032064128256
     },
     "sada/noisy": {
      "wer": 0.2719849246231156,
      "wer_uncapped": 0.27659128978224456,
      "cer": 0.14473822264190536,
      "av_wer": null,
      "strict_wer": 0.2971533893098505,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.046063651591289785
     },
     "fleurs_ar/telephony": {
      "wer": 0.06375421772331735,
      "wer_uncapped": 0.06375421772331735,
      "cer": 0.029197349042709868,
      "av_wer": null,
      "strict_wer": 0.06676136363636363,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006925945657964837
     },
     "cv18_ar/telephony": {
      "wer": 0.09619238476953908,
      "wer_uncapped": 0.09619238476953908,
      "cer": 0.03460094662967195,
      "av_wer": null,
      "strict_wer": 0.10126582278481013,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006012024048096192
     },
     "sada/telephony": {
      "wer": 0.2537688442211055,
      "wer_uncapped": 0.2590033500837521,
      "cer": 0.12490819431329346,
      "av_wer": null,
      "strict_wer": 0.283022731927094,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.048785594639865995
     },
     "fleurs_ar/callcenter": {
      "wer": 0.14171550346297282,
      "wer_uncapped": 0.14189309181317705,
      "cer": 0.06910898379970545,
      "av_wer": null,
      "strict_wer": 0.14612926136363635,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.014207068016338129
     },
     "cv18_ar/callcenter": {
      "wer": 0.22244488977955912,
      "wer_uncapped": 0.23780895123580495,
      "cer": 0.1258364615635711,
      "av_wer": null,
      "strict_wer": 0.22651565622918055,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03139612558450234
     },
     "sada/callcenter": {
      "wer": 0.39782244556113905,
      "wer_uncapped": 0.40703517587939697,
      "cer": 0.2354422411079635,
      "av_wer": null,
      "strict_wer": 0.42371492934671307,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.049413735343383586
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.05860415556739478,
      "wer_uncapped": 0.05860415556739478,
      "cer": 0.027577319587628865,
      "av_wer": null,
      "strict_wer": 0.06374289772727272,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006393180607352157
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.08216432865731463,
      "wer_uncapped": 0.08283233132932531,
      "cer": 0.0314999183939938,
      "av_wer": null,
      "strict_wer": 0.08794137241838774,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006012024048096192
     },
     "sada/telephony_v2": {
      "wer": 0.25314070351758794,
      "wer_uncapped": 0.2613065326633166,
      "cer": 0.1249606547056972,
      "av_wer": null,
      "strict_wer": 0.28138439483923816,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.048994974874371856
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.10335641981885989,
      "wer_uncapped": 0.10335641981885989,
      "cer": 0.05066273932253314,
      "av_wer": null,
      "strict_wer": 0.10706676136363637,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.011898419463683182
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.16700066800267202,
      "wer_uncapped": 0.17702070808283232,
      "cer": 0.08421739840052228,
      "av_wer": null,
      "strict_wer": 0.17055296469020653,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.019372077488309953
     },
     "sada/callcenter_v2": {
      "wer": 0.33207705192629816,
      "wer_uncapped": 0.3406616415410385,
      "cer": 0.18612947224845242,
      "av_wer": null,
      "strict_wer": 0.35981978292033584,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.04376046901172529
     },
     "fleurs_ar/sweep": {
      "wer": 0.11994842944210032,
      "wer_uncapped": 0.12083919362400375,
      "cer": 0.060864089896347964,
      "av_wer": null,
      "strict_wer": 0.12423816221284575,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0008888888888888889,
      "insertions": 0.010595405532114393
     },
     "masc_clean/sweep": {
      "wer": 0.20318866253321524,
      "wer_uncapped": 0.21612046058458814,
      "cer": 0.1241003126455132,
      "av_wer": null,
      "strict_wer": 0.20848806366047745,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.003111111111111111,
      "insertions": 0.03052849129022734
     },
     "fleurs_ar/padded": {
      "wer": 0.08594956253216675,
      "wer_uncapped": 0.09264024704065878,
      "cer": 0.0516025641025641,
      "av_wer": null,
      "strict_wer": 0.09109624292331446,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04014410705095214
     },
     "cv18_ar/padded": {
      "wer": 0.10020449897750511,
      "wer_uncapped": 0.1574642126789366,
      "cer": 0.05555555555555555,
      "av_wer": null,
      "strict_wer": 0.1120162932790224,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.09202453987730061
     },
     "masc_clean/padded": {
      "wer": 0.13110539845758354,
      "wer_uncapped": 0.23136246786632392,
      "cer": 0.09829059829059829,
      "av_wer": null,
      "strict_wer": 0.13846153846153847,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.17609254498714652
     },
     "sada/padded": {
      "wer": 0.2273615635179153,
      "wer_uncapped": 0.24234527687296417,
      "cer": 0.1319422150882825,
      "av_wer": null,
      "strict_wer": 0.26003824091778205,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.08338762214983714
     }
    },
    "tracks": {
     "clean": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 4,
      "total": 8
     },
     "codeswitch": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 1,
      "total": 2
     },
     "noisy": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 4,
      "total": 5
     },
     "telephony": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 3,
      "total": 6
     },
     "callcenter": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 3,
      "total": 6
     }
    },
    "arena": null,
    "arena_arith": null,
    "arena_cer": null,
    "arena_strict": null,
    "zero_shot": null,
    "arena_real": null,
    "exposure": 0.6917,
    "incomplete": []
   }
  },
  {
   "model": "arabic-stt-qwen3-asr-1.7b-run5base",
   "hf_id": "Arabic-STT/qwen3-asr-1.7b-ar-run5base",
   "params_b": 2.04,
   "license": "gated weights",
   "kind": "gated",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.058438349394613294,
     "cer": 0.026176660219213412,
     "rtfx": 150.47,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.07872763419483102,
     "cer": 0.022930964876867178,
     "rtfx": 180.75,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.06196695095948827,
     "cer": 0.020821341875422308,
     "rtfx": 129.2,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.2732077517278764,
     "cer": 0.12239414690604461,
     "rtfx": 74.08,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.19637545013308283,
     "cer": 0.10406919041542606,
     "rtfx": 139.7,
     "n": 1000
    },
    "masc_noisy/clean": {
     "wer": 0.15262566694748667,
     "cer": 0.05458456574347943,
     "rtfx": 116.9,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.06876993973768167,
     "cer": 0.029529375576745617,
     "rtfx": 151.25,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.12125249833444371,
     "cer": 0.04499590946277611,
     "rtfx": 166.33,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.33340159737866065,
     "cer": 0.16604182287761393,
     "rtfx": 59.88,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.06930166607585962,
     "cer": 0.031928637342356195,
     "rtfx": 142.23,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.10326449033977349,
     "cer": 0.034769566403054265,
     "rtfx": 169.74,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.30903133319680526,
     "cer": 0.14279763392485212,
     "rtfx": 58.99,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.1533144275079759,
     "cer": 0.06930175330667487,
     "rtfx": 148.9,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.25449700199866754,
     "cer": 0.12367057540223617,
     "rtfx": 157.52,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.4593487610075773,
     "cer": 0.24148129634258103,
     "rtfx": 60.79,
     "n": 300
    },
    "fleurs_ar/telephony_v2": {
     "wer": 0.06540233959588798,
     "cer": 0.02940633651184251,
     "rtfx": 154.03,
     "n": 300
    },
    "cv18_ar/telephony_v2": {
     "wer": 0.10992671552298468,
     "cer": 0.035724025088628306,
     "rtfx": 187.14,
     "n": 300
    },
    "sada/telephony_v2": {
     "wer": 0.3106696702846611,
     "cer": 0.14521369657585603,
     "rtfx": 60.56,
     "n": 300
    },
    "fleurs_ar/callcenter_v2": {
     "wer": 0.10740872031194612,
     "cer": 0.05056905567517687,
     "rtfx": 153.82,
     "n": 300
    },
    "cv18_ar/callcenter_v2": {
     "wer": 0.19920053297801465,
     "cer": 0.09680938096536679,
     "rtfx": 179.85,
     "n": 300
    },
    "sada/callcenter_v2": {
     "wer": 0.3995494573008396,
     "cer": 0.20324085645255352,
     "rtfx": 60.85,
     "n": 300
    },
    "fleurs_ar/sweep": {
     "wer": 0.13038182244085267,
     "cer": 0.062331611465613286,
     "rtfx": 117.04,
     "n": 2250
    },
    "masc_clean/sweep": {
     "wer": 0.23371647509578544,
     "cer": 0.12275839038236767,
     "rtfx": 53.4,
     "n": 2250
    },
    "fleurs_ar/padded": {
     "wer": 0.09974293059125965,
     "cer": 0.05703829331429081,
     "rtfx": 153.36,
     "n": 100
    },
    "cv18_ar/padded": {
     "wer": 0.24439918533604887,
     "cer": 0.189873417721519,
     "rtfx": 256.18,
     "n": 100
    },
    "masc_clean/padded": {
     "wer": 0.32564102564102565,
     "cer": 0.2449271902602053,
     "rtfx": 171.02,
     "n": 100
    },
    "sada/padded": {
     "wer": 0.32887189292543023,
     "cer": 0.18596311475409835,
     "rtfx": 106.06,
     "n": 100
    }
   },
   "tracks": {
    "clean": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 8
    },
    "codeswitch": {
     "wer": null,
     "cer": null,
     "done": 1,
     "total": 2
    },
    "noisy": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 6
    },
    "telephony": {
     "wer": null,
     "cer": null,
     "done": 3,
     "total": 6
    },
    "callcenter": {
     "wer": null,
     "cer": null,
     "done": 3,
     "total": 6
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
    "cv18_ar",
    "masc_clean",
    "masc_noisy",
    "mgb2",
    "sada",
    "mgb3_egy",
    "fleurs_ar"
   ],
   "notes": "Arabic-STT run5base: run 5's data and targets trained from the base model (40,000 steps); same in-domain train rows as run 5, including MGB-3 train and the 20 leaked FLEURS ar_eg test sentences",
   "training_data": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": null,
   "arena_cer": null,
   "arena_ci": null,
   "rank_range": null,
   "rtfx": 104.5,
   "audio_hours": 31.02,
   "v2": {
    "halluc_any": null,
    "halluc_3plus": null,
    "halluc_3plus_ci": null,
    "inserted_wpm": null,
    "sets": {
     "fleurs_ar/clean": {
      "wer": 0.05269016697588126,
      "wer_uncapped": 0.05269016697588126,
      "cer": 0.02608762767243819,
      "av_wer": null,
      "strict_wer": 0.057252380363546435,
      "n": 428,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.006802721088435374
     },
     "cv18_ar/clean": {
      "wer": 0.0706889685384309,
      "wer_uncapped": 0.07088809239346874,
      "cer": 0.02344089133265808,
      "av_wer": null,
      "strict_wer": 0.0779324055666004,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.004380724810832338
     },
     "masc_clean/clean": {
      "wer": 0.05374049873316442,
      "wer_uncapped": 0.054140552073609814,
      "cer": 0.019920437890706785,
      "av_wer": null,
      "strict_wer": 0.06143390191897655,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005734097879717296
     },
     "sada/clean": {
      "wer": 0.23697862627101057,
      "wer_uncapped": 0.24334232551705057,
      "cer": 0.11308280540643179,
      "av_wer": null,
      "strict_wer": 0.26697384469440305,
      "n": 998,
      "failed": 0,
      "loop_rate": 0.003006012024048096,
      "insertions": 0.045790966313896383
     },
     "mixat_cs/clean": {
      "wer": 0.15100671140939598,
      "wer_uncapped": 0.1511251480457955,
      "cer": 0.10372074806619015,
      "av_wer": 0.14877674591534026,
      "strict_wer": 0.17107144956213388,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.001,
      "insertions": 0.021989735491512043
     },
     "masc_noisy/clean": {
      "wer": 0.13126760563380283,
      "wer_uncapped": 0.13183098591549297,
      "cer": 0.052392606427513366,
      "av_wer": null,
      "strict_wer": 0.15094074698118506,
      "n": 1000,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.017746478873239435
     },
     "fleurs_ar/noisy": {
      "wer": 0.062688687622092,
      "wer_uncapped": 0.062688687622092,
      "cer": 0.02971281296023564,
      "av_wer": null,
      "strict_wer": 0.06693892045454546,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005860415556739478
     },
     "cv18_ar/noisy": {
      "wer": 0.11489645958583834,
      "wer_uncapped": 0.11489645958583834,
      "cer": 0.04831075567161743,
      "av_wer": null,
      "strict_wer": 0.12058627581612258,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.005344021376085505
     },
     "sada/noisy": {
      "wer": 0.2931323283082077,
      "wer_uncapped": 0.30527638190954776,
      "cer": 0.15549260308467108,
      "av_wer": null,
      "strict_wer": 0.3215236534917059,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.056323283082077055
     },
     "fleurs_ar/telephony": {
      "wer": 0.06393180607352157,
      "wer_uncapped": 0.06393180607352157,
      "cer": 0.03221649484536082,
      "av_wer": null,
      "strict_wer": 0.06782670454545454,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.008524240809802876
     },
     "cv18_ar/telephony": {
      "wer": 0.09752839011356046,
      "wer_uncapped": 0.09819639278557114,
      "cer": 0.03688591480332953,
      "av_wer": null,
      "strict_wer": 0.10193204530313124,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.0033400133600534404
     },
     "sada/telephony": {
      "wer": 0.2730318257956449,
      "wer_uncapped": 0.27826633165829145,
      "cer": 0.13372154023712096,
      "av_wer": null,
      "strict_wer": 0.3039115297972558,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04459798994974874
     },
     "fleurs_ar/callcenter": {
      "wer": 0.148108684070325,
      "wer_uncapped": 0.14846386077073345,
      "cer": 0.07404270986745214,
      "av_wer": null,
      "strict_wer": 0.15181107954545456,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.012786361214704315
     },
     "cv18_ar/callcenter": {
      "wer": 0.22979291917167669,
      "wer_uncapped": 0.250501002004008,
      "cer": 0.128611065774441,
      "av_wer": null,
      "strict_wer": 0.23317788141239174,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.03072812291249165
     },
     "sada/callcenter": {
      "wer": 0.42734505862646566,
      "wer_uncapped": 0.4394891122278057,
      "cer": 0.24341622075333125,
      "av_wer": null,
      "strict_wer": 0.4484947778005325,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.06051088777219431
     },
     "fleurs_ar/telephony_v2": {
      "wer": 0.059314508968211686,
      "wer_uncapped": 0.059314508968211686,
      "cer": 0.029491899852724594,
      "av_wer": null,
      "strict_wer": 0.06409801136363637,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.00728112235837329
     },
     "cv18_ar/telephony_v2": {
      "wer": 0.10153640614562458,
      "wer_uncapped": 0.10354041416165664,
      "cer": 0.036559490778521296,
      "av_wer": null,
      "strict_wer": 0.1072618254497002,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.01002004008016032
     },
     "sada/telephony_v2": {
      "wer": 0.27659128978224456,
      "wer_uncapped": 0.28224455611390287,
      "cer": 0.13707900535096001,
      "av_wer": null,
      "strict_wer": 0.3057546590210936,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.04773869346733668
     },
     "fleurs_ar/callcenter_v2": {
      "wer": 0.10264606641804298,
      "wer_uncapped": 0.10264606641804298,
      "cer": 0.052982326951399115,
      "av_wer": null,
      "strict_wer": 0.10653409090909091,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.010655301012253596
     },
     "cv18_ar/callcenter_v2": {
      "wer": 0.16967267869071476,
      "wer_uncapped": 0.19505678022712092,
      "cer": 0.08797127468581688,
      "av_wer": null,
      "strict_wer": 0.173217854763491,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.0033333333333333335,
      "insertions": 0.03406813627254509
     },
     "sada/callcenter_v2": {
      "wer": 0.3576214405360134,
      "wer_uncapped": 0.3731155778894472,
      "cer": 0.1953625013115098,
      "av_wer": null,
      "strict_wer": 0.38459963137415526,
      "n": 300,
      "failed": 0,
      "loop_rate": 0.006666666666666667,
      "insertions": 0.05674204355108878
     },
     "fleurs_ar/sweep": {
      "wer": 0.12172995780590717,
      "wer_uncapped": 0.12566807313642755,
      "cer": 0.06312602925506151,
      "av_wer": null,
      "strict_wer": 0.1258556024378809,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0013333333333333333,
      "insertions": 0.014181903422409752
     },
     "masc_clean/sweep": {
      "wer": 0.21240035429583703,
      "wer_uncapped": 0.22692648361381754,
      "cer": 0.12423335328942992,
      "av_wer": null,
      "strict_wer": 0.2180371352785146,
      "n": 2250,
      "failed": 0,
      "loop_rate": 0.0026666666666666666,
      "insertions": 0.033480956598759964
     },
     "fleurs_ar/padded": {
      "wer": 0.08749356664951106,
      "wer_uncapped": 0.09469891919711786,
      "cer": 0.05566239316239316,
      "av_wer": null,
      "strict_wer": 0.09161091096242924,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.04734945959855893
     },
     "cv18_ar/padded": {
      "wer": 0.1390593047034765,
      "wer_uncapped": 0.2331288343558282,
      "cer": 0.09444444444444444,
      "av_wer": null,
      "strict_wer": 0.15071283095723015,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.1574642126789366
     },
     "masc_clean/padded": {
      "wer": 0.18380462724935734,
      "wer_uncapped": 0.31876606683804626,
      "cer": 0.1398860398860399,
      "av_wer": null,
      "strict_wer": 0.191025641025641,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.0,
      "insertions": 0.2480719794344473
     },
     "sada/padded": {
      "wer": 0.25993485342019546,
      "wer_uncapped": 0.29511400651465797,
      "cer": 0.15152487961476727,
      "av_wer": null,
      "strict_wer": 0.295729764181007,
      "n": 100,
      "failed": 0,
      "loop_rate": 0.01,
      "insertions": 0.10618892508143322
     }
    },
    "tracks": {
     "clean": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 4,
      "total": 8
     },
     "codeswitch": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 1,
      "total": 2
     },
     "noisy": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 4,
      "total": 5
     },
     "telephony": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 3,
      "total": 6
     },
     "callcenter": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 3,
      "total": 6
     }
    },
    "arena": null,
    "arena_arith": null,
    "arena_cer": null,
    "arena_strict": null,
    "zero_shot": null,
    "arena_real": null,
    "exposure": 0.6917,
    "incomplete": []
   }
  },
  {
   "model": "soniox-stt-async-v5",
   "hf_id": "https://soniox.com",
   "params_b": null,
   "license": "proprietary API",
   "kind": "api",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.04225352112676056,
     "cer": 0.019127444659359553,
     "rtfx": 9.43,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.09403578528827038,
     "cer": 0.03161081953976585,
     "rtfx": 3.94,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.05463752665245203,
     "cer": 0.019219700192697513,
     "rtfx": 4.03,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.31047567421059763,
     "cer": 0.14492194496879177,
     "rtfx": 5.63,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.16799749491153906,
     "cer": 0.07052948311987019,
     "rtfx": 10.39,
     "n": 1000
    },
    "masc_noisy/clean": {
     "wer": 0.16652625666947488,
     "cer": 0.06523258940575423,
     "rtfx": 2.69,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.06930166607585962,
     "cer": 0.03681944017225469,
     "rtfx": 9.34,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.20119920053297802,
     "cer": 0.1153531497136624,
     "rtfx": 3.96,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.406102805652263,
     "cer": 0.22685995167874698,
     "rtfx": 6.37,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.0597305919886565,
     "cer": 0.028237465395262996,
     "rtfx": 9.3,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.15456362425049966,
     "cer": 0.06585764930460868,
     "rtfx": 3.21,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.3729264796231825,
     "cer": 0.184703824043989,
     "rtfx": 5.42,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.1467564693371145,
     "cer": 0.0766533374346355,
     "rtfx": 9.34,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.4570286475682878,
     "cer": 0.29547313880556314,
     "rtfx": 3.8,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.5220151546180627,
     "cer": 0.30638173789885864,
     "rtfx": 6.48,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 8
    },
    "codeswitch": {
     "wer": null,
     "cer": null,
     "done": 1,
     "total": 2
    },
    "noisy": {
     "wer": null,
     "cer": null,
     "done": 4,
     "total": 6
    },
    "telephony": {
     "wer": null,
     "cer": null,
     "done": 3,
     "total": 6
    },
    "callcenter": {
     "wer": null,
     "cer": null,
     "done": 3,
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
   "finetune_of": null,
   "in_domain": [],
   "notes": "closed commercial API; RTFx is API wall-clock time",
   "training_data": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": null,
   "arena_cer": null,
   "arena_ci": null,
   "rank_range": null,
   "rtfx": 5.9,
   "audio_hours": 15.87,
   "v2": {
    "halluc_any": null,
    "halluc_3plus": null,
    "halluc_3plus_ci": null,
    "inserted_wpm": null,
    "sets": {},
    "tracks": {
     "clean": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 0,
      "total": 8
     },
     "codeswitch": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 0,
      "total": 2
     },
     "noisy": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 0,
      "total": 5
     },
     "telephony": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 0,
      "total": 6
     },
     "callcenter": {
      "wer": null,
      "cer": null,
      "wer_arith": null,
      "done": 0,
      "total": 6
     }
    },
    "arena": null,
    "arena_arith": null,
    "arena_cer": null,
    "arena_strict": null,
    "zero_shot": null,
    "arena_real": null,
    "exposure": 0,
    "incomplete": []
   }
  }
 ],
 "v2": {
  "headline": "L2sp",
  "aggregate": "geometric",
  "weights": {
   "fleurs_ar/clean": 0.0625,
   "cv18_ar/clean": 0.0625,
   "masc_clean/clean": 0.0625,
   "mgb2/clean": 0.0625,
   "sada/clean": 0.0625,
   "casablanca/clean": 0.0625,
   "mgb3_egy/clean": 0.0625,
   "mgb5_mor/clean": 0.0625,
   "mixat_cs/clean": 0.075,
   "algerian_cs/clean": 0.075,
   "masc_noisy/clean": 0.03,
   "fleurs_ar/noisy": 0.03,
   "cv18_ar/noisy": 0.03,
   "mgb2/noisy": 0.03,
   "sada/noisy": 0.03,
   "fleurs_ar/telephony_v2": 0.016666666666666666,
   "cv18_ar/telephony_v2": 0.016666666666666666,
   "mgb2/telephony_v2": 0.016666666666666666,
   "sada/telephony_v2": 0.016666666666666666,
   "casablanca/telephony_v2": 0.016666666666666666,
   "mgb3_egy/telephony_v2": 0.016666666666666666,
   "fleurs_ar/callcenter_v2": 0.016666666666666666,
   "cv18_ar/callcenter_v2": 0.016666666666666666,
   "mgb2/callcenter_v2": 0.016666666666666666,
   "sada/callcenter_v2": 0.016666666666666666,
   "casablanca/callcenter_v2": 0.016666666666666666,
   "mgb3_egy/callcenter_v2": 0.016666666666666666
  },
  "track_weights": {
   "clean": 0.5,
   "codeswitch": 0.15,
   "noisy": 0.15,
   "telephony": 0.1,
   "callcenter": 0.1
  },
  "tracks": {
   "clean": [
    "fleurs_ar/clean",
    "cv18_ar/clean",
    "masc_clean/clean",
    "mgb2/clean",
    "sada/clean",
    "casablanca/clean",
    "mgb3_egy/clean",
    "mgb5_mor/clean"
   ],
   "codeswitch": [
    "mixat_cs/clean",
    "algerian_cs/clean"
   ],
   "noisy": [
    "masc_noisy/clean",
    "fleurs_ar/noisy",
    "cv18_ar/noisy",
    "mgb2/noisy",
    "sada/noisy"
   ],
   "telephony": [
    "fleurs_ar/telephony_v2",
    "cv18_ar/telephony_v2",
    "mgb2/telephony_v2",
    "sada/telephony_v2",
    "casablanca/telephony_v2",
    "mgb3_egy/telephony_v2"
   ],
   "callcenter": [
    "fleurs_ar/callcenter_v2",
    "cv18_ar/callcenter_v2",
    "mgb2/callcenter_v2",
    "sada/callcenter_v2",
    "casablanca/callcenter_v2",
    "mgb3_egy/callcenter_v2"
   ]
  },
  "diagnostic_sets": [
   "nadi_robust/clean"
  ],
  "zero_shot_sets": [
   "algerian_cs/clean",
   "mgb3_egy/callcenter_v2",
   "mgb3_egy/clean",
   "mgb3_egy/telephony_v2",
   "mgb5_mor/clean",
   "mixat_cs/clean"
  ],
  "real_audio_sets": [
   "algerian_cs/clean",
   "casablanca/clean",
   "cv18_ar/clean",
   "fleurs_ar/clean",
   "masc_clean/clean",
   "masc_noisy/clean",
   "mgb2/clean",
   "mgb3_egy/clean",
   "mgb5_mor/clean",
   "mixat_cs/clean",
   "sada/clean"
  ],
  "floors": {
   "mgb3_egy": {
    "v1": 0.1365,
    "L2sp": 0.0348,
    "source": "MGB-3 inter-annotator study (sttarena audit floor), 2026-10-18"
   },
   "mgb5_mor": {
    "v1": 0.4586,
    "L2sp": 0.2286,
    "source": "MGB-5 inter-annotator study, 2026-10-18"
   }
  },
  "bag_of_hallucinations": [
   [
    "ترجمه نانسي قنقر",
    228,
    2
   ],
   [
    "الحين ابغي",
    225,
    2
   ],
   [
    "قبل ما",
    179,
    2
   ],
   [
    "يجي الضيوف",
    163,
    2
   ],
   [
    "الله يحفظك",
    158,
    4
   ],
   [
    "انا احبك",
    111,
    4
   ],
   [
    "التفريغ والتدقيق",
    88,
    2
   ],
   [
    "التفريغ والتدقيق قصي البياتي",
    87,
    2
   ],
   [
    "والتدقيق قصي البياتي عبد الناصر عاشور",
    81,
    2
   ],
   [
    "التفريغ والتدقيق قصي البياتي عبد الناصر",
    81,
    2
   ],
   [
    "البياتي عبد الناصر عاشور جواد الخفاجي",
    81,
    2
   ],
   [
    "قصي البياتي عبد الناصر عاشور جواد",
    81,
    2
   ],
   [
    "تقدر تجيب",
    66,
    2
   ],
   [
    "قهوه وكرك",
    60,
    2
   ],
   [
    "تقدر تجيب لي",
    59,
    2
   ],
   [
    "في القناه",
    56,
    6
   ],
   [
    "لو سمحت",
    54,
    2
   ],
   [
    "اشتركو في القناه",
    53,
    4
   ],
   [
    "يا حبيبي",
    41,
    2
   ],
   [
    "يا جماعه",
    28,
    3
   ],
   [
    "وين اقدر",
    28,
    2
   ],
   [
    "ان اكون",
    26,
    5
   ],
   [
    "انا احب",
    26,
    3
   ],
   [
    "وين اقدر اروح",
    25,
    2
   ],
   [
    "تقريبا خمسين",
    25,
    17
   ],
   [
    "الله يسلمك",
    25,
    5
   ],
   [
    "اكون في",
    25,
    4
   ],
   [
    "ان اكون في",
    24,
    3
   ],
   [
    "نهايه الدرس",
    24,
    3
   ],
   [
    "يمكن ان",
    24,
    15
   ]
  ],
  "num_ranked": 19,
  "effective_weights": {
   "geometric": {
    "clean": 0.5844987878244041,
    "codeswitch": 0.06367013648454779,
    "noisy": 0.1572634186934624,
    "telephony": 0.10954776539544711,
    "callcenter": 0.08501989160213844
   },
   "arithmetic": {
    "clean": 0.5092514675166714,
    "codeswitch": 0.08450310558855516,
    "noisy": 0.15415374385578462,
    "telephony": 0.12253840144072577,
    "callcenter": 0.12955328159826285
   }
  },
  "leave_one_set_out": {
   "mean_moved": 1.44,
   "max_shift": 2,
   "sets": {
    "fleurs_ar/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "cv18_ar/clean": {
     "moved": 4,
     "max_shift": 1
    },
    "masc_clean/clean": {
     "moved": 4,
     "max_shift": 1
    },
    "mgb2/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "sada/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "casablanca/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "mgb3_egy/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "mgb5_mor/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "mixat_cs/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "algerian_cs/clean": {
     "moved": 5,
     "max_shift": 2
    },
    "masc_noisy/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "fleurs_ar/noisy": {
     "moved": 2,
     "max_shift": 1
    },
    "cv18_ar/noisy": {
     "moved": 2,
     "max_shift": 1
    },
    "mgb2/noisy": {
     "moved": 0,
     "max_shift": 0
    },
    "sada/noisy": {
     "moved": 0,
     "max_shift": 0
    },
    "fleurs_ar/telephony_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "cv18_ar/telephony_v2": {
     "moved": 4,
     "max_shift": 1
    },
    "mgb2/telephony_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "sada/telephony_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "casablanca/telephony_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "mgb3_egy/telephony_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "fleurs_ar/callcenter_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "cv18_ar/callcenter_v2": {
     "moved": 2,
     "max_shift": 1
    },
    "mgb2/callcenter_v2": {
     "moved": 2,
     "max_shift": 1
    },
    "sada/callcenter_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "casablanca/callcenter_v2": {
     "moved": 0,
     "max_shift": 0
    },
    "mgb3_egy/callcenter_v2": {
     "moved": 0,
     "max_shift": 0
    }
   }
  },
  "bootstrap": {
   "n_boot": 2000,
   "flags": {
    "mgb2/clean": "few clusters: G=17",
    "mgb2/noisy": "few clusters: G=17",
    "mgb2/telephony_v2": "few clusters: G=17",
    "mgb2/callcenter_v2": "few clusters: G=17",
    "sada/clean": "iid: no cluster key",
    "sada/noisy": "iid: no cluster key",
    "sada/telephony_v2": "iid: no cluster key",
    "sada/callcenter_v2": "iid: no cluster key",
    "casablanca/clean": "iid: no cluster key",
    "casablanca/telephony_v2": "iid: no cluster key",
    "casablanca/callcenter_v2": "iid: no cluster key",
    "mgb5_mor/clean": "few clusters: G=14",
    "mixat_cs/clean": "iid: no cluster key",
    "algerian_cs/clean": "few clusters: G=8"
   }
  }
 }
};
