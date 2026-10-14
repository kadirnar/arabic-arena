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
   "domain": "noisy dialectal",
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
     "wer": 0.04810695989004123,
     "cer": 0.02259591266985103,
     "rtfx": 405.08,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.047117296222664015,
     "cer": 0.013968510294711344,
     "rtfx": 370.85,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.051510714761080795,
     "cer": 0.03798038430744596,
     "rtfx": 316.83,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.12862484420440382,
     "cer": 0.07330978120782981,
     "rtfx": 394.13,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.3611355782912121,
     "cer": 0.2544986083937281,
     "rtfx": 208.19,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.4226936088506903,
     "cer": 0.17906669601584857,
     "rtfx": 243.45,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.24658050619278407,
     "cer": 0.14530261149827645,
     "rtfx": 322.79,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.46625214759060785,
     "cer": 0.2021977675474554,
     "rtfx": 305.53,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.1779004227336778,
     "cer": 0.08247081620114372,
     "rtfx": 434.6,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.4668205424120023,
     "cer": 0.28398841086754495,
     "rtfx": 247.39,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.1638608305274972,
     "cer": 0.07484474554399548,
     "rtfx": 370.96,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.5548606147248034,
     "cer": 0.299272563987427,
     "rtfx": 286.71,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.0678391959798995,
     "cer": 0.030738922417836705,
     "rtfx": 401.85,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.13324450366422386,
     "cer": 0.06790291791655303,
     "rtfx": 374.13,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.16529152915291528,
     "cer": 0.09245911418203509,
     "rtfx": 408.99,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.48392381732541473,
     "cer": 0.33212530200783136,
     "rtfx": 245.69,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.059224694903086864,
     "cer": 0.02670502517276963,
     "rtfx": 414.77,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.08927381745502998,
     "cer": 0.03190619034633215,
     "rtfx": 376.39,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.13476347634763478,
     "cer": 0.07451409255853259,
     "rtfx": 427.88,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.40323571574851524,
     "cer": 0.24377239023577438,
     "rtfx": 349.75,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.45772409408773046,
     "cer": 0.2155091871691062,
     "rtfx": 257.3,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.28191489361702127,
     "cer": 0.15500526487781852,
     "rtfx": 401.48,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.1615218951902369,
     "cer": 0.07714437599674787,
     "rtfx": 397.08,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.29247168554297137,
     "cer": 0.16539405508590127,
     "rtfx": 385.44,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.2670517051705171,
     "cer": 0.1684644827757618,
     "rtfx": 429.0,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.6252303911529797,
     "cer": 0.47250687328167956,
     "rtfx": 225.45,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.654481881754609,
     "cer": 0.38505138586110244,
     "rtfx": 279.53,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.4917461482024945,
     "cer": 0.34864384009295235,
     "rtfx": 320.55,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.22150270700043553,
     "cer": 0.11611503399189334,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.32236048257284006,
     "cer": 0.18322961353434433,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.2615034152291257,
     "cer": 0.14955726100927977,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.23768944869316977,
     "cer": 0.12456869172672225,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.4154172845023014,
     "cer": 0.2695341688490242,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": 0.2796088546308995,
   "arena_cer": 0.16021738451713835,
   "rtfx": 330.4,
   "audio_hours": 27.71
  },
  {
   "model": "audar-asr-v1-turbo",
   "hf_id": "audarai/Audar-ASR-V1-Turbo",
   "params_b": 2.35,
   "license": "AudarAI Community License",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.062476571285767835,
     "cer": 0.027394272503217083,
     "rtfx": 168.03,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.07654075546719682,
     "cer": 0.02228502220427937,
     "rtfx": 161.89,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.065353387461733,
     "cer": 0.031950560448358686,
     "rtfx": 122.15,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.11408392189447444,
     "cer": 0.059057207405273454,
     "rtfx": 142.7,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.2769835354698828,
     "cer": 0.12580947394527267,
     "rtfx": 69.51,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.45670659230136235,
     "cer": 0.1777643260694108,
     "rtfx": 78.77,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.2506192784060312,
     "cer": 0.10884622362621531,
     "rtfx": 107.03,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.5965802176225149,
     "cer": 0.27856782493535975,
     "rtfx": 48.1,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.1533583842179427,
     "cer": 0.05355483088362714,
     "rtfx": 164.92,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5256780150028851,
     "cer": 0.29628819767124037,
     "rtfx": 110.77,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.1914983164983165,
     "cer": 0.08594779148856091,
     "rtfx": 110.0,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.5889921372408864,
     "cer": 0.28571171980242477,
     "rtfx": 70.23,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.09063173007896626,
     "cer": 0.03849401169517496,
     "rtfx": 168.96,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.17854763491005995,
     "cer": 0.08058358331060812,
     "rtfx": 164.44,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.1630913091309131,
     "cer": 0.08679226524829746,
     "rtfx": 145.02,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.4616014745033791,
     "cer": 0.2997167374822961,
     "rtfx": 55.36,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.08596554199569274,
     "cer": 0.03711810875887301,
     "rtfx": 167.14,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.13724183877415055,
     "cer": 0.04813198800109081,
     "rtfx": 161.06,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.13916391639163916,
     "cer": 0.06964259084356514,
     "rtfx": 143.56,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.38029899651853366,
     "cer": 0.19695076230942266,
     "rtfx": 76.35,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.5712015257469802,
     "cer": 0.2773590781687948,
     "rtfx": 26.58,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.359501100513573,
     "cer": 0.18870048291637923,
     "rtfx": 127.23,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.28338119167264897,
     "cer": 0.16113699615372587,
     "rtfx": 78.18,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.3924050632911392,
     "cer": 0.2163894191437142,
     "rtfx": 66.88,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.30583058305830585,
     "cer": 0.1770144653775414,
     "rtfx": 55.22,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.6571779643661684,
     "cer": 0.47383987336499206,
     "rtfx": 30.89,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8118245390972664,
     "cer": 0.5131734662099035,
     "rtfx": 34.96,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6014306676449009,
     "cer": 0.39856940561344906,
     "rtfx": 37.86,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.23741803248862042,
     "cer": 0.10395936389217339,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.3395181996104139,
     "cer": 0.17492151427743374,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.2790604337270869,
     "cer": 0.14620768483789373,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.27889548665676156,
     "cer": 0.1363171684996876,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.5086750015217383,
     "cer": 0.3233539376438877,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "4.57.6"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": 0.31642129402682156,
   "arena_cer": 0.1677433027444032,
   "rtfx": 87.6,
   "audio_hours": 27.71
  },
  {
   "model": "nvidia-fastconformer-ar-pc",
   "hf_id": "nvidia/stt_ar_fastconformer_hybrid_large_pc_v1.0",
   "params_b": 0.115,
   "license": "CC-BY-4.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.08109458952892665,
     "cer": 0.04261815961089664,
     "rtfx": 1567.85,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.06143141153081511,
     "cer": 0.020831651190956802,
     "rtfx": 1916.88,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.050578996406229204,
     "cer": 0.02096677341873499,
     "rtfx": 1935.14,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.14898213543830494,
     "cer": 0.06105863266265371,
     "rtfx": 2874.33,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.43248187546581746,
     "cer": 0.20890628013998733,
     "rtfx": 2396.22,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5676145195208924,
     "cer": 0.26953554919656614,
     "rtfx": 2356.82,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.30786214324178784,
     "cer": 0.14437412620996573,
     "rtfx": 2853.92,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7584880962120593,
     "cer": 0.4202875701582897,
     "rtfx": 2534.9,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.28010020353843745,
     "cer": 0.13574995667722167,
     "rtfx": 2736.98,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.586266589728794,
     "cer": 0.35450718854206525,
     "rtfx": 2124.02,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.19332210998877666,
     "cer": 0.07971072935989462,
     "rtfx": 2366.91,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6923695496783416,
     "cer": 0.38776829815895825,
     "rtfx": 2375.02,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.10534816941852118,
     "cer": 0.05459833015416367,
     "rtfx": 2773.8,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.1459027315123251,
     "cer": 0.07703845104990456,
     "rtfx": 2514.08,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.21177117711771176,
     "cer": 0.10235124521548938,
     "rtfx": 2734.35,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.546999795207864,
     "cer": 0.3261684578855286,
     "rtfx": 2079.08,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.10211773151471644,
     "cer": 0.052847180962506644,
     "rtfx": 2777.27,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.11592271818787475,
     "cer": 0.04458685574038724,
     "rtfx": 2561.23,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.17656765676567657,
     "cer": 0.07441467415618631,
     "rtfx": 2754.77,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5168953512185132,
     "cer": 0.2760559860034991,
     "rtfx": 2157.59,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6357279084551812,
     "cer": 0.35185300529430086,
     "rtfx": 1805.23,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.3892149669845928,
     "cer": 0.20616535347300388,
     "rtfx": 2735.8,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.2552045944005743,
     "cer": 0.1342443478532787,
     "rtfx": 2723.2,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.33777481678880744,
     "cer": 0.20070902645214073,
     "rtfx": 2496.2,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3655115511551155,
     "cer": 0.19674901824327684,
     "rtfx": 2713.65,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7022322342822036,
     "cer": 0.46421727901357995,
     "rtfx": 2054.0,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.7943420216147489,
     "cer": 0.5277483649953285,
     "rtfx": 1778.3,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.599046221570066,
     "cer": 0.388148578482989,
     "rtfx": 2649.5,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 2602.63,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3010667209181041,
     "cer": 0.14857234282350637,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.4331833966336157,
     "cer": 0.24512857260964346,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.31595225548725675,
     "cer": 0.17127258530398984,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.3227410555210925,
     "cer": 0.1676538426049807,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.5090185733019194,
     "cer": 0.3186361025067656,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 0.66,
   "inserted_wpm": 17.96,
   "arena_wer": 0.3624364560723889,
   "arena_cer": 0.19946205406713932,
   "rtfx": 2404.9,
   "audio_hours": 28.46
  },
  {
   "model": "cohere-transcribe-03-2026",
   "hf_id": "CohereLabs/cohere-transcribe-03-2026",
   "params_b": 2.07,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.07097338498063226,
     "cer": 0.027677811947915985,
     "rtfx": 410.03,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.07176938369781312,
     "cer": 0.02228502220427937,
     "rtfx": 373.74,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.059097564222015175,
     "cer": 0.028948158526821456,
     "rtfx": 391.15,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.13053593685085169,
     "cer": 0.0633784664837081,
     "rtfx": 431.77,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.5013212277254556,
     "cer": 0.3546115902890683,
     "rtfx": 217.75,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5466764194934626,
     "cer": 0.2717367378384328,
     "rtfx": 284.62,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.32730210016155087,
     "cer": 0.18001942348534167,
     "rtfx": 335.73,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7886770841855518,
     "cer": 0.5087027811061361,
     "rtfx": 189.59,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.494559260998904,
     "cer": 0.3303086157190794,
     "rtfx": 454.83,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6122331217541835,
     "cer": 0.3981304324058383,
     "rtfx": 220.34,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.1777497194163861,
     "cer": 0.0759201010834207,
     "rtfx": 381.6,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6922802001429592,
     "cer": 0.3925999101930849,
     "rtfx": 252.13,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.08740129217516152,
     "cer": 0.03464773757778542,
     "rtfx": 410.41,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.16389073950699534,
     "cer": 0.07717480229070084,
     "rtfx": 392.63,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.17024202420242024,
     "cer": 0.08028035989461649,
     "rtfx": 423.0,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.7093999590415728,
     "cer": 0.4772556860784804,
     "rtfx": 217.07,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.08524766690595836,
     "cer": 0.03283404734356922,
     "rtfx": 410.32,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.12325116588940706,
     "cer": 0.04417780201799836,
     "rtfx": 363.27,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.1716171617161716,
     "cer": 0.08420738678729432,
     "rtfx": 428.22,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6813434364120418,
     "cer": 0.45596934099808384,
     "rtfx": 293.94,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6125238397965671,
     "cer": 0.34767985051385863,
     "rtfx": 175.26,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.38958180484225974,
     "cer": 0.25663556152645145,
     "rtfx": 229.23,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.21464465183058148,
     "cer": 0.0983457894243097,
     "rtfx": 409.41,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.39706862091938705,
     "cer": 0.23247886555767658,
     "rtfx": 325.33,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3278327832783278,
     "cer": 0.1759705721529055,
     "rtfx": 434.51,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8140487405283637,
     "cer": 0.581896192618512,
     "rtfx": 234.51,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8226319135410044,
     "cer": 0.5696044845842416,
     "rtfx": 112.78,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.5685986793837124,
     "cer": 0.3871319124214807,
     "rtfx": 261.82,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 209.62,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.31204413766466665,
     "cer": 0.18216999898521297,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.5533961913765437,
     "cer": 0.36421952406245883,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.3334939890809159,
     "cer": 0.18964643285301477,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.3439275125937343,
     "cer": 0.20358399819787598,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.5241375649135628,
     "cer": 0.34090463612652105,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 52.01,
   "arena_wer": 0.3881921811838845,
   "arena_cer": 0.23752614384390203,
   "rtfx": 306.3,
   "audio_hours": 28.46
  },
  {
   "model": "qwen3-asr-1.7b",
   "hf_id": "Qwen/Qwen3-ASR-1.7B-hf",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.09234037236036487,
     "cer": 0.036642020545704375,
     "rtfx": 205.8,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.15188866799204773,
     "cer": 0.04582155833669762,
     "rtfx": 160.39,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.11779582057766538,
     "cer": 0.03620396317053643,
     "rtfx": 147.9,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.16136269214790194,
     "cer": 0.06013373159674314,
     "rtfx": 181.35,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4176434717799309,
     "cer": 0.18808729918157016,
     "rtfx": 90.89,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5906555728261863,
     "cer": 0.24345146379044685,
     "rtfx": 95.72,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.36311254711900914,
     "cer": 0.15094822894099316,
     "rtfx": 147.81,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.755624642068232,
     "cer": 0.35872170019549726,
     "rtfx": 78.79,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2101142946610302,
     "cer": 0.08447941774185926,
     "rtfx": 170.89,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5588574725908828,
     "cer": 0.2912042857923796,
     "rtfx": 53.44,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.24887766554433222,
     "cer": 0.09030298142323305,
     "rtfx": 126.55,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6987133666904932,
     "cer": 0.34002694207453976,
     "rtfx": 121.8,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.12867910983488873,
     "cer": 0.054660871196722846,
     "rtfx": 200.41,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.2724850099933378,
     "cer": 0.11971638941914371,
     "rtfx": 170.14,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.2246974697469747,
     "cer": 0.09678381468409802,
     "rtfx": 177.74,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5748515257014131,
     "cer": 0.3076730817295676,
     "rtfx": 78.77,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.13334529791816224,
     "cer": 0.05569279839894931,
     "rtfx": 174.7,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.229180546302465,
     "cer": 0.08835560403599672,
     "rtfx": 130.22,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.21012101210121012,
     "cer": 0.08371029477556295,
     "rtfx": 158.85,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5220151546180627,
     "cer": 0.25739398483712406,
     "rtfx": 81.38,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6929434202161475,
     "cer": 0.33540952974151356,
     "rtfx": 36.84,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.44203961848862805,
     "cer": 0.20700047202352856,
     "rtfx": 144.9,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.36252692031586503,
     "cer": 0.1939397729760155,
     "rtfx": 124.66,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5129913391072618,
     "cer": 0.2773384237796564,
     "rtfx": 143.68,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.4240924092409241,
     "cer": 0.21603618829845406,
     "rtfx": 60.01,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7296743805037886,
     "cer": 0.4562609347663084,
     "rtfx": 40.16,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8935155753337571,
     "cer": 0.5433821239489256,
     "rtfx": 54.28,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6327953044754219,
     "cer": 0.3706473984241676,
     "rtfx": 67.23,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3313029733589173,
     "cer": 0.14000124571977363,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.3844858836259565,
     "cer": 0.18784185176711943,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.35805069125190664,
     "cer": 0.1681940134212175,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.3716075082741126,
     "cer": 0.17126044730211254,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.5925993214961698,
     "cer": 0.34293414036558795,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": 0.4009535986800592,
   "arena_cer": 0.19585264072535544,
   "rtfx": 112.4,
   "audio_hours": 27.71
  },
  {
   "model": "audar-asr-v1-flash",
   "hf_id": "audarai/Audar-ASR-V1-Flash",
   "params_b": 0.78,
   "license": "AudarAI Open License",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.11320754716981132,
     "cer": 0.040328033326790115,
     "rtfx": 159.17,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.15268389662027834,
     "cer": 0.048486071861122325,
     "rtfx": 113.41,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.13030746705710103,
     "cer": 0.05356785428342674,
     "rtfx": 134.71,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.17116742833402576,
     "cer": 0.07835883128894819,
     "rtfx": 153.79,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.44454231316484855,
     "cer": 0.23804734216980353,
     "rtfx": 37.63,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5585626771509554,
     "cer": 0.23369286081150487,
     "rtfx": 42.33,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3604738826063543,
     "cer": 0.16862146615297596,
     "rtfx": 48.58,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7911314734516894,
     "cer": 0.4055149145487797,
     "rtfx": 32.24,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.22134805072804134,
     "cer": 0.09041857680734754,
     "rtfx": 101.72,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6295441431044432,
     "cer": 0.37063357568468813,
     "rtfx": 31.47,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.26374859708193044,
     "cer": 0.11068096889534103,
     "rtfx": 112.54,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7119370979270908,
     "cer": 0.3734530758868433,
     "rtfx": 26.84,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1518305814788227,
     "cer": 0.057881734888520595,
     "rtfx": 181.48,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.25916055962691537,
     "cer": 0.11112626124897737,
     "rtfx": 107.35,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.23404840484048406,
     "cer": 0.11850673559675896,
     "rtfx": 152.95,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.7028466106901495,
     "cer": 0.5179955011247188,
     "rtfx": 25.4,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.1516511127063891,
     "cer": 0.058538415835391974,
     "rtfx": 163.44,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.2618254497001999,
     "cer": 0.10212707935642214,
     "rtfx": 110.4,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.2246974697469747,
     "cer": 0.10950937018442114,
     "rtfx": 150.1,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5515052221994675,
     "cer": 0.3145880196617512,
     "rtfx": 32.9,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6846789574062301,
     "cer": 0.353410152600436,
     "rtfx": 54.21,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.44644167278063096,
     "cer": 0.23481355070621981,
     "rtfx": 39.88,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.3910624551328069,
     "cer": 0.20169486225335376,
     "rtfx": 52.27,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5003331112591606,
     "cer": 0.2832015271338969,
     "rtfx": 30.55,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.4372937293729373,
     "cer": 0.24894367947507084,
     "rtfx": 26.25,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8359614990784354,
     "cer": 0.6434224777139048,
     "rtfx": 28.87,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8111888111888111,
     "cer": 0.5212706322018062,
     "rtfx": 23.68,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6885546588407924,
     "cer": 0.46062234486765186,
     "rtfx": 21.23,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 27.72,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.340259585694383,
     "cer": 0.15832717180541891,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.42544609691624224,
     "cer": 0.23052607624601784,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.3872619752742321,
     "cer": 0.21494071294019335,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.3867999807566487,
     "cer": 0.19549776472410704,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.6107323774788239,
     "cer": 0.39319258727428075,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "4.57.6"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 0.27666666666666667,
   "inserted_wpm": 35.92,
   "arena_wer": 0.41923123262288764,
   "arena_cer": 0.228446295097205,
   "rtfx": 52.3,
   "audio_hours": 28.46
  },
  {
   "model": "gemma-4-e2b-it",
   "hf_id": "google/gemma-4-E2B-it",
   "params_b": 5.1,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.13469948769211545,
     "cer": 0.08004536631115182,
     "rtfx": 48.47,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.24990059642147117,
     "cer": 0.10500605571255552,
     "rtfx": 54.65,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.17116997204844936,
     "cer": 0.08659427542033626,
     "rtfx": 40.92,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.20631491483174075,
     "cer": 0.10124527901227078,
     "rtfx": 43.27,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4457619079883461,
     "cer": 0.22845765934580728,
     "rtfx": 38.93,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5761177653835604,
     "cer": 0.26489470980996405,
     "rtfx": 30.31,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.2994614970382337,
     "cer": 0.1547368758070885,
     "rtfx": 35.74,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.6518039761106111,
     "cer": 0.3085703474806079,
     "rtfx": 35.55,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.27779082511351183,
     "cer": 0.13928667076263843,
     "rtfx": 48.27,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5242354298903635,
     "cer": 0.27185262122123216,
     "rtfx": 37.33,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.287317620650954,
     "cer": 0.13111272414442024,
     "rtfx": 35.9,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7397248034310222,
     "cer": 0.4148361023798833,
     "rtfx": 34.17,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.17785355348169418,
     "cer": 0.09171643891303669,
     "rtfx": 48.05,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.5416389073950699,
     "cer": 0.3366512135260431,
     "rtfx": 47.62,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.32453245324532454,
     "cer": 0.1715464532484963,
     "rtfx": 43.38,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6463239811591235,
     "cer": 0.36078480379905026,
     "rtfx": 33.75,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.17121320890165112,
     "cer": 0.08189749523124551,
     "rtfx": 48.62,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.43837441705529645,
     "cer": 0.22184346877556585,
     "rtfx": 54.84,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.28465346534653463,
     "cer": 0.14172093254461401,
     "rtfx": 43.15,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5457710423919722,
     "cer": 0.28459551778721986,
     "rtfx": 42.06,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6659249841068023,
     "cer": 0.342074120211772,
     "rtfx": 32.57,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4053558327219369,
     "cer": 0.22511891361969427,
     "rtfx": 38.5,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.4886934673366834,
     "cer": 0.2774320647925201,
     "rtfx": 47.66,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 1.0299800133244503,
     "cer": 0.6797109353695119,
     "rtfx": 29.87,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5869086908690869,
     "cer": 0.34811353581547944,
     "rtfx": 43.0,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.9297562973581814,
     "cer": 0.5993918187119887,
     "rtfx": 24.18,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8277177368086459,
     "cer": 0.5053254437869823,
     "rtfx": 24.16,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.667094644167278,
     "cer": 0.4252205802258451,
     "rtfx": 31.32,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.341903764689316,
     "cer": 0.16619382111247277,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.4010131275019377,
     "cer": 0.20556964599193528,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.4528985532271981,
     "cer": 0.2511079560018216,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.41854882508736563,
     "cer": 0.21620840802835192,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.7550251416440544,
     "cer": 0.47253239645038786,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": 0.4624172067218181,
   "arena_cer": 0.25413915628458017,
   "rtfx": 39.6,
   "audio_hours": 27.71
  },
  {
   "model": "qwen3-asr-0.6b",
   "hf_id": "Qwen/Qwen3-ASR-0.6B-hf",
   "params_b": 0.94,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.18068224415844059,
     "cer": 0.06523588300726298,
     "rtfx": 237.07,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.273558648111332,
     "cer": 0.09144125958821155,
     "rtfx": 220.33,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.20244908824703847,
     "cer": 0.05954763811048839,
     "rtfx": 188.72,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.2504362276692979,
     "cer": 0.0925204312161691,
     "rtfx": 214.56,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.5217833186530253,
     "cer": 0.23836424260795283,
     "rtfx": 115.2,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.677882417481942,
     "cer": 0.2984261501210654,
     "rtfx": 92.74,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.47872913301023157,
     "cer": 0.20748978132570622,
     "rtfx": 186.2,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8138754806512313,
     "cer": 0.4000914422652456,
     "rtfx": 45.39,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.28491467042429935,
     "cer": 0.11420672054444916,
     "rtfx": 197.88,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6327178303519908,
     "cer": 0.33335155523970916,
     "rtfx": 137.38,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.3418911335578002,
     "cer": 0.12697260531763313,
     "rtfx": 175.84,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7842208720514653,
     "cer": 0.4058374494836102,
     "rtfx": 79.24,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.2245154343144293,
     "cer": 0.0889333625191532,
     "rtfx": 236.31,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.39506995336442374,
     "cer": 0.17521134442323424,
     "rtfx": 222.18,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.3492849284928493,
     "cer": 0.15245811999801162,
     "rtfx": 182.42,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6463239811591235,
     "cer": 0.3664917104057319,
     "rtfx": 45.4,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.2586145010768126,
     "cer": 0.10459989368022765,
     "rtfx": 204.36,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.39640239840106595,
     "cer": 0.16866648486501226,
     "rtfx": 204.56,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.3272827282728273,
     "cer": 0.12904508624546404,
     "rtfx": 215.99,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6403850092156461,
     "cer": 0.32521036407564774,
     "rtfx": 72.07,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7889383343928799,
     "cer": 0.4031765805045157,
     "rtfx": 62.46,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.5704328686720469,
     "cer": 0.2723575759776333,
     "rtfx": 101.49,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.5141780330222542,
     "cer": 0.27358579067513056,
     "rtfx": 131.26,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.7121918720852765,
     "cer": 0.4022361603490592,
     "rtfx": 53.92,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.578932893289329,
     "cer": 0.30769995526171895,
     "rtfx": 63.51,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7933647347941839,
     "cer": 0.5030825626926602,
     "rtfx": 38.31,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8871582962492054,
     "cer": 0.5613204609156026,
     "rtfx": 27.84,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7371606749816582,
     "cer": 0.43916342906938743,
     "rtfx": 34.45,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 35.03,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.4249245697478174,
     "cer": 0.18163960353026276,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.4588162503881451,
     "cer": 0.22377913789207915,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.45688438382334856,
     "cer": 0.21931743202456241,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.49700930667187976,
     "cer": 0.2338426642247501,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.7038310840703179,
     "cer": 0.41451472649392646,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 0.48333333333333334,
   "inserted_wpm": 25.77,
   "arena_wer": 0.5033059601724924,
   "arena_cer": 0.24852086797221956,
   "rtfx": 100.5,
   "audio_hours": 28.46
  },
  {
   "model": "whisper-large-v3",
   "hf_id": "openai/whisper-large-v3",
   "params_b": 1.54,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.09483943521179558,
     "cer": 0.032825143405526835,
     "rtfx": 108.72,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.15009940357852883,
     "cer": 0.050706499798142915,
     "rtfx": 68.87,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1054172767203514,
     "cer": 0.05184147317854283,
     "rtfx": 52.82,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.16136269214790194,
     "cer": 0.07785847497460313,
     "rtfx": 78.73,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.6902229148316281,
     "cer": 0.45585439113781034,
     "rtfx": 34.08,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.626680076803511,
     "cer": 0.35206178002788174,
     "rtfx": 33.29,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3722132471728595,
     "cer": 0.18932562085783503,
     "rtfx": 65.34,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 1.0340341978237748,
     "cer": 0.6571545689600807,
     "rtfx": 22.92,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2840535462658525,
     "cer": 0.15782881988751832,
     "rtfx": 84.75,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.7010963646855164,
     "cer": 0.4549281145793473,
     "rtfx": 32.25,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.23793490460157127,
     "cer": 0.11686426324703605,
     "rtfx": 43.45,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.9689063616869192,
     "cer": 0.6328334081724293,
     "rtfx": 20.09,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1311916726489591,
     "cer": 0.04631164201507239,
     "rtfx": 108.58,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.2811459027315123,
     "cer": 0.12967002999727298,
     "rtfx": 70.47,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.22112211221122113,
     "cer": 0.1111994830243078,
     "rtfx": 79.83,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.9832070448494777,
     "cer": 0.7164042322752645,
     "rtfx": 27.86,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.13173007896625988,
     "cer": 0.0456862315894806,
     "rtfx": 108.16,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.26382411725516325,
     "cer": 0.11098991000818108,
     "rtfx": 70.22,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.18894389438943895,
     "cer": 0.09206144057264999,
     "rtfx": 79.56,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.8099528978087241,
     "cer": 0.5411147213196701,
     "rtfx": 29.96,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7275905912269549,
     "cer": 0.4221737776393647,
     "rtfx": 27.88,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.5469552457813647,
     "cer": 0.35216586180603465,
     "rtfx": 29.41,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.3449389806173726,
     "cer": 0.1656712217392664,
     "rtfx": 106.6,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.7455029980013325,
     "cer": 0.5124079629124625,
     "rtfx": 32.16,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5123762376237624,
     "cer": 0.30919123129691306,
     "rtfx": 43.78,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8822445218103625,
     "cer": 0.6621261351328834,
     "rtfx": 40.75,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.4342021614748888,
     "cer": 1.0138897539707257,
     "rtfx": 12.31,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7061628760088041,
     "cer": 0.4751824552485385,
     "rtfx": 33.65,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.4043586555362939,
     "cer": 0.23345349404255294,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.4925749554756844,
     "cer": 0.3063784672334328,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.4705846664549435,
     "cer": 0.2922138431218972,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.4448328042379843,
     "cer": 0.26069865715589685,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.7709046292560872,
     "cer": 0.5230781267167982,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": null,
   "inserted_wpm": null,
   "arena_wer": 0.5045182116523271,
   "arena_cer": 0.3129340028810604,
   "rtfx": 45.1,
   "audio_hours": 27.71
  },
  {
   "model": "whisper-large-v3-turbo",
   "hf_id": "openai/whisper-large-v3-turbo",
   "params_b": 0.81,
   "license": "MIT",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.10133699862551543,
     "cer": 0.034308272808567256,
     "rtfx": 212.63,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.23021868787276342,
     "cer": 0.10209931368591038,
     "rtfx": 100.26,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.10342073738852656,
     "cer": 0.04391012810248199,
     "rtfx": 94.7,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.17149979227253842,
     "cer": 0.08019347110821343,
     "rtfx": 138.37,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.8546649501998781,
     "cer": 0.5719639560197305,
     "rtfx": 89.1,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.8555362530858553,
     "cer": 0.4766857436348962,
     "rtfx": 64.03,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.42875605815831985,
     "cer": 0.22514167404830257,
     "rtfx": 130.14,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 1.069786468133846,
     "cer": 0.6608122595699061,
     "rtfx": 70.28,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.24581180522937215,
     "cer": 0.12107535012681758,
     "rtfx": 251.29,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.891806116560877,
     "cer": 0.6768709342371398,
     "rtfx": 72.2,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2620650953984287,
     "cer": 0.11127241444202489,
     "rtfx": 78.49,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 1.1533238027162258,
     "cer": 0.8033767400089807,
     "rtfx": 49.92,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.14231873653984206,
     "cer": 0.048375496419525314,
     "rtfx": 221.79,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.37774816788807464,
     "cer": 0.22975184074175076,
     "rtfx": 89.14,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.29262926292629265,
     "cer": 0.15091713476164437,
     "rtfx": 125.92,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.8971943477370469,
     "cer": 0.7023660751478797,
     "rtfx": 90.22,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.14501076812634603,
     "cer": 0.04875074267488039,
     "rtfx": 219.98,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.3097934710193205,
     "cer": 0.13662394327788382,
     "rtfx": 100.43,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.2147964796479648,
     "cer": 0.0938012626137098,
     "rtfx": 141.02,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.953102600860127,
     "cer": 0.6600433225027077,
     "rtfx": 104.69,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 1.103305785123967,
     "cer": 0.6534412955465587,
     "rtfx": 64.43,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.8006236243580338,
     "cer": 0.5333502777676918,
     "rtfx": 102.03,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.4585427135678392,
     "cer": 0.23402858125644954,
     "rtfx": 157.48,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 1.0299800133244503,
     "cer": 0.7240250886283065,
     "rtfx": 65.48,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.6463146314631463,
     "cer": 0.43952875677287867,
     "rtfx": 96.48,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.2414499283227525,
     "cer": 0.914313088394568,
     "rtfx": 104.55,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.566751430387794,
     "cer": 1.1395203986297104,
     "rtfx": 56.69,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 1.2463316214233309,
     "cer": 0.9325732544206818,
     "rtfx": 79.9,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 102.34,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.4769024932171554,
     "cer": 0.27438935237225104,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.5688089608951246,
     "cer": 0.3989731421819787,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.5208799022009851,
     "cer": 0.3410099502536343,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.5877721215226265,
     "cer": 0.3543351407305721,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 1.0315617230815521,
     "cer": 0.7306648613504324,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 63.73,
   "arena_wer": 0.6257955229665003,
   "arena_cer": 0.4040850805027318,
   "rtfx": 105.1,
   "audio_hours": 28.46
  },
  {
   "model": "mms-1b-all",
   "hf_id": "facebook/mms-1b-all",
   "params_b": 0.96,
   "license": "CC-BY-NC-4.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.23616143946020243,
     "cer": 0.06423258958755916,
     "rtfx": 355.56,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.262624254473161,
     "cer": 0.07145740815502624,
     "rtfx": 469.99,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.3461999201384267,
     "cer": 0.13846076861489193,
     "rtfx": 474.48,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.39335272122974657,
     "cer": 0.13385289524358254,
     "rtfx": 463.95,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.8087268785148045,
     "cer": 0.4508115406872606,
     "rtfx": 472.94,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.8519703757886075,
     "cer": 0.40997138454765575,
     "rtfx": 483.56,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.7361873990306946,
     "cer": 0.31880129347605685,
     "rtfx": 460.36,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8915978074122556,
     "cer": 0.4480986315192029,
     "rtfx": 458.22,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.6133943948645687,
     "cer": 0.25365880555161713,
     "rtfx": 421.72,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.7492787074437391,
     "cer": 0.37221888153938665,
     "rtfx": 391.71,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.5207631874298541,
     "cer": 0.18423528779202625,
     "rtfx": 448.74,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.9213724088634739,
     "cer": 0.5228558599012124,
     "rtfx": 482.63,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.2961234745154343,
     "cer": 0.08539979361455956,
     "rtfx": 404.13,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.40706195869420386,
     "cer": 0.15503136078538315,
     "rtfx": 456.88,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.47854785478547857,
     "cer": 0.17825719540686982,
     "rtfx": 453.56,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.8689330329715339,
     "cer": 0.5611513788219612,
     "rtfx": 470.78,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.31048097631012206,
     "cer": 0.08777635323180838,
     "rtfx": 405.39,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.3870752831445703,
     "cer": 0.12571584401418054,
     "rtfx": 457.93,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.46424642464246424,
     "cer": 0.16582989511358553,
     "rtfx": 454.7,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.8769199262748311,
     "cer": 0.5543614096475881,
     "rtfx": 471.84,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.9179910998092816,
     "cer": 0.5498598567424479,
     "rtfx": 520.93,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.797505502567865,
     "cer": 0.3805962020260702,
     "rtfx": 452.51,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.5857860732232592,
     "cer": 0.24978892398136276,
     "rtfx": 405.47,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.6675549633577615,
     "cer": 0.3521952549768203,
     "rtfx": 458.2,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.7026952695269527,
     "cer": 0.34667196898145847,
     "rtfx": 454.93,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.9477780053245956,
     "cer": 0.7105723569107723,
     "rtfx": 472.97,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9602670057215512,
     "cer": 0.6940516972905637,
     "rtfx": 524.32,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.894534115920763,
     "cer": 0.5438437239025453,
     "rtfx": 455.08,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 425.96,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.5658525995059873,
     "cer": 0.25446081397890447,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.6813365511541539,
     "cer": 0.3129388435455019,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.5821336528766631,
     "cer": 0.2811551460536687,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.6257032021248558,
     "cer": 0.31068992679594676,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.7931025721791473,
     "cer": 0.48285398767392046,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 0.49666666666666665,
   "inserted_wpm": 19.05,
   "arena_wer": 0.637263267734811,
   "arena_cer": 0.3212372240491905,
   "rtfx": 445.5,
   "audio_hours": 28.46
  },
  {
   "model": "whisper-medium",
   "hf_id": "openai/whisper-medium",
   "params_b": 0.76,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.1621891790578533,
     "cer": 0.051974961285960436,
     "rtfx": 196.71,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.27773359840954276,
     "cer": 0.12075090835688333,
     "rtfx": 106.37,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.16038865965659524,
     "cer": 0.060273218574859885,
     "rtfx": 108.78,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.33444121312837555,
     "cer": 0.1944263339044471,
     "rtfx": 85.82,
     "n": 1000
    },
    "sada/clean": {
     "wer": 1.0323870180906565,
     "cer": 0.7889029733528067,
     "rtfx": 37.57,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.8826917801956661,
     "cer": 0.5691356665932937,
     "rtfx": 36.67,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.5901992460958535,
     "cer": 0.37034823534433997,
     "rtfx": 60.95,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 1.2226949194142192,
     "cer": 0.8573343003090118,
     "rtfx": 35.18,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.703107875371849,
     "cer": 0.5002835672763363,
     "rtfx": 74.83,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.8159261396422389,
     "cer": 0.5737713879626086,
     "rtfx": 38.45,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.3282828282828283,
     "cer": 0.1677285802618491,
     "rtfx": 71.84,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 1.2335596854896353,
     "cer": 0.9469779973057926,
     "rtfx": 29.97,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.20782483847810482,
     "cer": 0.07010850870884018,
     "rtfx": 200.79,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.569620253164557,
     "cer": 0.35478592855194985,
     "rtfx": 61.72,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.44801980198019803,
     "cer": 0.25764278968036985,
     "rtfx": 68.5,
     "n": 300
    },
    "sada/noisy": {
     "wer": 1.0739299610894941,
     "cer": 0.8185037074064817,
     "rtfx": 41.94,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.25699928212491024,
     "cer": 0.09465586791331812,
     "rtfx": 154.43,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.40239840106595604,
     "cer": 0.18066539405508591,
     "rtfx": 122.72,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.34735973597359737,
     "cer": 0.19207635333300194,
     "rtfx": 105.67,
     "n": 300
    },
    "sada/telephony": {
     "wer": 1.2992013106696703,
     "cer": 1.0084562192785138,
     "rtfx": 41.77,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 1.0441830896376352,
     "cer": 0.7524135783245095,
     "rtfx": 26.71,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.822083639031548,
     "cer": 0.5499074107693983,
     "rtfx": 46.02,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.5410983488872936,
     "cer": 0.274617717877357,
     "rtfx": 125.87,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 1.0792804796802131,
     "cer": 0.7860649031906191,
     "rtfx": 40.45,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.7277227722772277,
     "cer": 0.5075309439777302,
     "rtfx": 58.37,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.5277493344255582,
     "cer": 1.3117137382321087,
     "rtfx": 35.33,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.6602034329307056,
     "cer": 1.3844908128308937,
     "rtfx": 24.24,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 1.14490095377843,
     "cer": 0.8577393703932319,
     "rtfx": 41.76,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 46.52,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.5828407017560953,
     "cer": 0.37664332471520034,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.759517007507044,
     "cer": 0.5370274776194724,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.6435395614141363,
     "cer": 0.43595791865254724,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.6953709097505528,
     "cer": 0.46302913727897127,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 1.113492553663238,
     "cer": 0.8536929144169901,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 136.65,
   "arena_wer": 0.7382495732602163,
   "arena_cer": 0.5142660095493418,
   "rtfx": 56.8,
   "audio_hours": 28.46
  },
  {
   "model": "wav2vec2-large-xlsr-53-arabic",
   "hf_id": "jonatasgrosman/wav2vec2-large-xlsr-53-arabic",
   "params_b": 0.32,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.691865550418593,
     "cer": 0.5104146219110559,
     "rtfx": 1311.33,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.22962226640159045,
     "cer": 0.06677432377876463,
     "rtfx": 1020.91,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.41780913083987753,
     "cer": 0.18880104083266613,
     "rtfx": 1085.93,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.558869962609057,
     "cer": 0.20256849574697133,
     "rtfx": 997.59,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.9384104614133749,
     "cer": 0.7003361900300367,
     "rtfx": 1577.73,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.9150589741245314,
     "cer": 0.4900396213955536,
     "rtfx": 1072.18,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.8593430263866452,
     "cer": 0.39581221118237797,
     "rtfx": 988.91,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.9509940276527857,
     "cer": 0.5335813836160687,
     "rtfx": 1054.44,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.8693831219664945,
     "cer": 0.6630984451061014,
     "rtfx": 1681.07,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.8739180611656088,
     "cer": 0.583009894495162,
     "rtfx": 1159.32,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.6394500561167228,
     "cer": 0.3016641126972605,
     "rtfx": 1085.1,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.9647069335239457,
     "cer": 0.6148181409968567,
     "rtfx": 1075.8,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.7614860014357502,
     "cer": 0.5584289690109134,
     "rtfx": 1508.92,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.480346435709527,
     "cer": 0.22197982001636216,
     "rtfx": 947.79,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.7037953795379538,
     "cer": 0.301188049908038,
     "rtfx": 956.0,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.9653901290190456,
     "cer": 0.7779305173706573,
     "rtfx": 1586.85,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.7550251256281407,
     "cer": 0.5475780981268957,
     "rtfx": 1522.78,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.38907395069953365,
     "cer": 0.13744205072266158,
     "rtfx": 949.11,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.6812431243124313,
     "cer": 0.27305264204404234,
     "rtfx": 960.92,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.9696907638746672,
     "cer": 0.7838873614929601,
     "rtfx": 1581.03,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.9656706929434202,
     "cer": 0.6612893179694799,
     "rtfx": 1151.81,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.9024211298606016,
     "cer": 0.46468900911368505,
     "rtfx": 967.37,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.8564249820531228,
     "cer": 0.5769723881297101,
     "rtfx": 1292.21,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.7101932045303131,
     "cer": 0.38355604035996727,
     "rtfx": 949.7,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.8575357535753575,
     "cer": 0.46363771934185016,
     "rtfx": 961.59,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.989760393200901,
     "cer": 0.8325418645338666,
     "rtfx": 1600.35,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9895104895104895,
     "cer": 0.7350981002802865,
     "rtfx": 1162.62,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.9556126192223038,
     "cer": 0.5931520278856977,
     "rtfx": 970.17,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 1090.86,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.695246674980807,
     "cer": 0.38604098606168685,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.8716505915660516,
     "cer": 0.6230541698006318,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.7525291558904909,
     "cer": 0.462668268333348,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.7771874645531325,
     "cer": 0.47798974657828747,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 0.8931729070154146,
     "cer": 0.5974930234218964,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 0.77,
   "inserted_wpm": 39.56,
   "arena_wer": 0.7774528430971707,
   "arena_cer": 0.48191655635169256,
   "rtfx": 1186.0,
   "audio_hours": 28.46
  },
  {
   "model": "whisper-small",
   "hf_id": "openai/whisper-small",
   "params_b": 0.24,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.2773959765088092,
     "cer": 0.0871992846081703,
     "rtfx": 471.92,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.41371769383697815,
     "cer": 0.1699232943076302,
     "rtfx": 226.21,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.26181285771329693,
     "cer": 0.08874599679743796,
     "rtfx": 249.2,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.4695471541337765,
     "cer": 0.24179339832911315,
     "rtfx": 197.79,
     "n": 1000
    },
    "sada/clean": {
     "wer": 1.2243376922555729,
     "cer": 0.8862327427044008,
     "rtfx": 90.41,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 1.0475450306299716,
     "cer": 0.6338322694254898,
     "rtfx": 64.37,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.6934841141626279,
     "cer": 0.4146700675553089,
     "rtfx": 123.58,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 1.8067577517794322,
     "cer": 1.3061108658636564,
     "rtfx": 70.53,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.6443948645686551,
     "cer": 0.43507884745655906,
     "rtfx": 183.9,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 1.1246393537218695,
     "cer": 0.8109659432569836,
     "rtfx": 73.32,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.4695566778900112,
     "cer": 0.21136113127402748,
     "rtfx": 144.29,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 1.6800393137955683,
     "cer": 1.252896273013022,
     "rtfx": 58.77,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.36055276381909546,
     "cer": 0.13537008661934394,
     "rtfx": 252.97,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.9020652898067955,
     "cer": 0.5404963185164985,
     "rtfx": 81.53,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.6281628162816282,
     "cer": 0.3424466868817418,
     "rtfx": 124.85,
     "n": 300
    },
    "sada/noisy": {
     "wer": 1.3893098505017407,
     "cer": 1.0082895942680996,
     "rtfx": 99.56,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.39429289303661164,
     "cer": 0.14084242784327214,
     "rtfx": 319.13,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.7648234510326449,
     "cer": 0.4097354785928552,
     "rtfx": 113.87,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.4760726072607261,
     "cer": 0.23775910921111498,
     "rtfx": 212.05,
     "n": 300
    },
    "sada/telephony": {
     "wer": 1.5146426377227113,
     "cer": 1.1392151962009498,
     "rtfx": 99.5,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 1.291799109980928,
     "cer": 0.9232014948614139,
     "rtfx": 57.11,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.8910491562729274,
     "cer": 0.6188228459387822,
     "rtfx": 100.24,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.9048815506101938,
     "cer": 0.5524250289252322,
     "rtfx": 145.37,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 3.2165223184543636,
     "cer": 2.5578129260976277,
     "rtfx": 57.57,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 1.4216171617161717,
     "cer": 0.9673410548292489,
     "rtfx": 87.15,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 2.3886954740937947,
     "cer": 1.9277264017329,
     "rtfx": 99.63,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 2.300699300699301,
     "cer": 1.8804110868888197,
     "rtfx": 57.15,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 1.7998899486427,
     "cer": 1.4410515231836172,
     "rtfx": 100.23,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 120.21,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.7743247838775582,
     "cer": 0.4785634899489009,
     "done": 8,
     "total": 8
    },
    "codeswitch": {
     "wer": 0.8845171091452624,
     "cer": 0.6230223953567713,
     "done": 2,
     "total": 2
    },
    "noisy": {
     "wer": 0.9049477853491399,
     "cer": 0.5818100150954556,
     "done": 6,
     "total": 6
    },
    "telephony": {
     "wer": 0.8887799758844249,
     "cer": 0.5782627587747314,
     "done": 6,
     "total": 6
    },
    "callcenter": {
     "wer": 2.005384292369421,
     "cer": 1.5544613369429074,
     "done": 6,
     "total": 6
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": null,
   "in_domain": [],
   "notes": "",
   "hallucination_rate": 1.0,
   "inserted_wpm": 650.66,
   "arena_wer": 1.0740404067248117,
   "arena_cer": 0.7436157824256385,
   "rtfx": 117.4,
   "audio_hours": 28.46
  }
 ]
};
