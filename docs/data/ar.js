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
     "wer": 0.0462070669631826,
     "cer": 0.021212121212121213,
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
     "wer": 0.04331023454157783,
     "cer": 0.029980730248504717,
     "rtfx": 316.83,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.12239302035729123,
     "cer": 0.06615505945158942,
     "rtfx": 394.13,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.35899173329719475,
     "cer": 0.2509610482659796,
     "rtfx": 208.19,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.4217649748513946,
     "cer": 0.17821437088400932,
     "rtfx": 243.45,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.24372644049542272,
     "cer": 0.14069220179080266,
     "rtfx": 322.79,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.46641577354168373,
     "cer": 0.20241849025666897,
     "rtfx": 305.53,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.17731329262564585,
     "cer": 0.08180915922302566,
     "rtfx": 434.6,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.46087704213241615,
     "cer": 0.2784392250243533,
     "rtfx": 247.39,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.15332771693344566,
     "cer": 0.06386125302500673,
     "rtfx": 370.96,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.5546819156540386,
     "cer": 0.2988774135608442,
     "rtfx": 286.71,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.06611130804679191,
     "cer": 0.02959089510919717,
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
     "wer": 0.15924092409240925,
     "cer": 0.08627977522502363,
     "rtfx": 408.99,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.48146631169363097,
     "cer": 0.328459551778722,
     "rtfx": 245.69,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.057249202410492736,
     "cer": 0.02617656105813596,
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
     "wer": 0.12953795379537955,
     "cer": 0.06837734347804465,
     "rtfx": 427.88,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.4020069629326234,
     "cer": 0.24198117137382322,
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
     "wer": 0.278980190755686,
     "cer": 0.15079336262299844,
     "rtfx": 401.48,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.15685926976249556,
     "cer": 0.07410027683789604,
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
     "wer": 0.26127612761276126,
     "cer": 0.16142025958526032,
     "rtfx": 429.0,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.6240016383370879,
     "cer": 0.4708822794301425,
     "rtfx": 225.45,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.6538461538461539,
     "cer": 0.3844285269386484,
     "rtfx": 279.53,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.4886280264123258,
     "cer": 0.3445045568425257,
     "rtfx": 320.55,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 330.43,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.21874081753380142,
     "cer": 0.11295031655054841,
     "done": 8,
     "total": 8,
     "ci": [
      0.21248,
      0.22587
     ]
    },
    "codeswitch": {
     "wer": 0.319095167379031,
     "cer": 0.1801241921236895,
     "done": 2,
     "total": 2,
     "ci": [
      0.29183,
      0.34567
     ]
    },
    "noisy": {
     "wer": 0.25801211334742336,
     "cer": 0.1458286344358911,
     "done": 6,
     "total": 6,
     "ci": [
      0.24339,
      0.27384
     ]
    },
    "telephony": {
     "wer": 0.23579537023949035,
     "cer": 0.1224573026747401,
     "done": 6,
     "total": 6,
     "ci": [
      0.22492,
      0.24809
     ]
    },
    "callcenter": {
     "wer": 0.4128471502522993,
     "cer": 0.266788325786729,
     "done": 6,
     "total": 6,
     "ci": [
      0.39439,
      0.43128
     ]
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
   "inserted_wpm": 43.26,
   "arena_wer": 0.276899123975205,
   "arena_cer": 0.15726845086273838,
   "arena_ci": [
    0.27102,
    0.28267
   ],
   "rank_range": [
    1,
    1
   ],
   "rtfx": 330.4,
   "audio_hours": 28.46
  },
  {
   "model": "audar-asr-v1-turbo",
   "hf_id": "audarai/Audar-ASR-V1-Turbo",
   "params_b": 2.35,
   "license": "AudarAI Community License",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.05893254262416605,
     "cer": 0.024973135611433484,
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
     "wer": 0.05690298507462686,
     "cer": 0.023474060912435247,
     "rtfx": 122.15,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.10494391358537598,
     "cer": 0.04674229555933026,
     "rtfx": 142.7,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.27686678411708904,
     "cer": 0.1258249858770685,
     "rtfx": 69.51,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.45605852766346594,
     "cer": 0.17735219122044282,
     "rtfx": 78.77,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.2506192784060312,
     "cer": 0.10801378854014365,
     "rtfx": 107.03,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.5960075267937495,
     "cer": 0.27744844548149084,
     "rtfx": 48.1,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.15331924221074056,
     "cer": 0.05354695401484002,
     "rtfx": 164.92,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5207795930065922,
     "cer": 0.2914817620954649,
     "rtfx": 110.77,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.18000561639988769,
     "cer": 0.07367571927937618,
     "rtfx": 110.0,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.5887240886347391,
     "cer": 0.28555006735518634,
     "rtfx": 70.23,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.08613966678482808,
     "cer": 0.03552752999077207,
     "rtfx": 168.96,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.17788141239173885,
     "cer": 0.07990182710662667,
     "rtfx": 164.44,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.1553905390539054,
     "cer": 0.07603560594758565,
     "rtfx": 145.02,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.4603727216874872,
     "cer": 0.29771723735732736,
     "rtfx": 55.36,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.08489897199574618,
     "cer": 0.03691171947093202,
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
     "wer": 0.13091309130913092,
     "cer": 0.058381819085981404,
     "rtfx": 143.56,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.37968462011058773,
     "cer": 0.19586769974173124,
     "rtfx": 76.35,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.5705657978385251,
     "cer": 0.2761133603238866,
     "rtfx": 26.58,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.3578503301540719,
     "cer": 0.18303620057369013,
     "rtfx": 127.23,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.28199220134704006,
     "cer": 0.16065825899723163,
     "rtfx": 78.18,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.3924050632911392,
     "cer": 0.21652577038451049,
     "rtfx": 66.88,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.2995049504950495,
     "cer": 0.16728827888010345,
     "rtfx": 55.22,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.6549252508703666,
     "cer": 0.4707156544197284,
     "rtfx": 30.89,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8130959949141767,
     "cer": 0.5135471815633759,
     "rtfx": 34.96,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.5994130594277329,
     "cer": 0.3938491703278748,
     "rtfx": 37.86,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 26.1,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.23460903921646267,
     "cer": 0.10076424067582802,
     "done": 8,
     "total": 8,
     "ci": [
      0.23019,
      0.23899
     ]
    },
    "codeswitch": {
     "wer": 0.33704941760866636,
     "cer": 0.17251435805515244,
     "done": 2,
     "total": 2,
     "ci": [
      0.31513,
      0.35807
     ]
    },
    "noisy": {
     "wer": 0.27475234082543104,
     "cer": 0.14140133117281237,
     "done": 6,
     "total": 6,
     "ci": [
      0.26045,
      0.29149
     ]
    },
    "telephony": {
     "wer": 0.2768591083637021,
     "cer": 0.1330737978662187,
     "done": 6,
     "total": 6,
     "ci": [
      0.26626,
      0.28835
     ]
    },
    "callcenter": {
     "wer": 0.5068894200575842,
     "cer": 0.3204307190954708,
     "done": 6,
     "total": 6,
     "ci": [
      0.47459,
      0.54583
     ]
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
   "hallucination_rate": 0.8766666666666667,
   "inserted_wpm": 59.49,
   "arena_wer": 0.3137806622947005,
   "arena_cer": 0.1644300231103148,
   "arena_ci": [
    0.3059,
    0.32281
   ],
   "rank_range": [
    2,
    2
   ],
   "rtfx": 82.5,
   "audio_hours": 28.46
  },
  {
   "model": "voxtral-mini-4b-realtime-arabic",
   "hf_id": "mistralai/Voxtral-Mini-4B-Realtime-Arabic",
   "params_b": 4.43,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.07301704966641957,
     "cer": 0.03028153879217709,
     "rtfx": 29.48,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.11709741550695825,
     "cer": 0.03758578926120307,
     "rtfx": 28.38,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.07862473347547974,
     "cer": 0.027328011211491778,
     "rtfx": 26.73,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.1243041130037391,
     "cer": 0.050806842999272024,
     "rtfx": 30.22,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.3482856755657948,
     "cer": 0.18504484891907905,
     "rtfx": 28.23,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.49263831732967533,
     "cer": 0.20906939629079302,
     "rtfx": 26.94,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.29079159935379645,
     "cer": 0.13210104481275547,
     "rtfx": 30.69,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.5439744743516322,
     "cer": 0.27732231821908304,
     "rtfx": 28.99,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.17609989040237983,
     "cer": 0.06848149723521905,
     "rtfx": 30.2,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.3918028088277443,
     "cer": 0.17658837536529928,
     "rtfx": 26.25,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.20864925582701488,
     "cer": 0.08448507663350363,
     "rtfx": 26.41,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6485882773409578,
     "cer": 0.3829546475078581,
     "rtfx": 27.01,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.11166253101736973,
     "cer": 0.05238388188249769,
     "rtfx": 29.2,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.22451698867421718,
     "cer": 0.10485410417234797,
     "rtfx": 27.42,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.18674367436743675,
     "cer": 0.09498234621313839,
     "rtfx": 29.54,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5465902109359001,
     "cer": 0.3968174623010914,
     "rtfx": 26.86,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.10244594115561857,
     "cer": 0.04091048908028299,
     "rtfx": 29.21,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.21319120586275817,
     "cer": 0.0919007362967003,
     "rtfx": 27.42,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.15566556655665567,
     "cer": 0.06539360485354816,
     "rtfx": 29.53,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5017407331558468,
     "cer": 0.32970923935682744,
     "rtfx": 26.86,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6478067387158296,
     "cer": 0.3904079725942074,
     "rtfx": 23.38,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.37289068231841527,
     "cer": 0.19864928651828184,
     "rtfx": 30.16,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.36033321517192485,
     "cer": 0.251245770532144,
     "rtfx": 29.21,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5116588940706196,
     "cer": 0.3800109080992637,
     "rtfx": 27.39,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.39081408140814083,
     "cer": 0.2637624944054901,
     "rtfx": 29.5,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7538398525496621,
     "cer": 0.6319253519953345,
     "rtfx": 26.83,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8204068658614113,
     "cer": 0.6642790407972594,
     "rtfx": 23.38,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6298606016140865,
     "cer": 0.47953959551214553,
     "rtfx": 30.16,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 29.63,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.25859167228168695,
     "cer": 0.11869247381323182,
     "done": 8,
     "total": 8,
     "ci": [
      0.25361,
      0.26332
     ]
    },
    "codeswitch": {
     "wer": 0.2839513496150621,
     "cer": 0.12253493630025916,
     "done": 2,
     "total": 2,
     "ci": [
      0.2651,
      0.30233
     ]
    },
    "noisy": {
     "wer": 0.3211251563604827,
     "cer": 0.18607958645173953,
     "done": 6,
     "total": 6,
     "ci": [
      0.30891,
      0.3324
     ]
    },
    "telephony": {
     "wer": 0.33229014462752066,
     "cer": 0.18616188811664136,
     "done": 6,
     "total": 6,
     "ci": [
      0.32013,
      0.34535
     ]
    },
    "callcenter": {
     "wer": 0.5778189184459742,
     "cer": 0.4451271935569396,
     "done": 6,
     "total": 6,
     "ci": [
      0.56173,
      0.59487
     ]
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
   "hallucination_rate": 0.07,
   "inserted_wpm": 5.19,
   "arena_wer": 0.349092806328868,
   "arena_cer": 0.20796561376713418,
   "arena_ci": [
    0.34388,
    0.35403
   ],
   "rank_range": [
    3,
    4
   ],
   "rtfx": 28.6,
   "audio_hours": 28.46
  },
  {
   "model": "lemura-arabic-asr-qwen3",
   "hf_id": "lemuralabs/lemura-arabic-asr-qwen3",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.1134173461823573,
     "cer": 0.05991833225875779,
     "rtfx": 90.64,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.10616302186878727,
     "cer": 0.03354864755752927,
     "rtfx": 79.03,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.10034648187633262,
     "cer": 0.034310167922120174,
     "rtfx": 93.43,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.13975903614457832,
     "cer": 0.059891409851977676,
     "rtfx": 115.68,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.32551836292180514,
     "cer": 0.16096008377309615,
     "rtfx": 37.01,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.4160036579789666,
     "cer": 0.16808834589914332,
     "rtfx": 55.66,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.360527732902531,
     "cer": 0.16464071888240253,
     "rtfx": 82.1,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.6106520494150373,
     "cer": 0.2977391688213407,
     "rtfx": 26.74,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.23399091905432912,
     "cer": 0.11337177245301448,
     "rtfx": 128.51,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.4651762682717111,
     "cer": 0.2385539560558502,
     "rtfx": 111.15,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.22999157540016849,
     "cer": 0.0906964237698306,
     "rtfx": 52.16,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.48579342387419583,
     "cer": 0.2314863044454423,
     "rtfx": 44.69,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.12406947890818859,
     "cer": 0.05275299907720701,
     "rtfx": 101.57,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.23584277148567623,
     "cer": 0.11180801745295882,
     "rtfx": 39.58,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.2629262926292629,
     "cer": 0.14819235168332587,
     "rtfx": 77.09,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.4775752611099734,
     "cer": 0.2896775806048488,
     "rtfx": 36.22,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.1228287841191067,
     "cer": 0.053921870193786525,
     "rtfx": 159.82,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.1932045303131246,
     "cer": 0.0748568311971639,
     "rtfx": 58.37,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.17959295929592958,
     "cer": 0.07474265254363718,
     "rtfx": 143.21,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.4269916035224247,
     "cer": 0.22461051403815713,
     "rtfx": 43.75,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.5454545454545454,
     "cer": 0.2559950171286204,
     "rtfx": 34.37,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.42956713132795304,
     "cer": 0.21030463672343053,
     "rtfx": 56.09,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.33569656150301314,
     "cer": 0.17609966164257151,
     "rtfx": 120.63,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.5089940039973351,
     "cer": 0.2960185437687483,
     "rtfx": 29.87,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.4095159515951595,
     "cer": 0.22114476105226516,
     "rtfx": 41.19,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7397091951669056,
     "cer": 0.531825376989086,
     "rtfx": 28.93,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.7488874761602035,
     "cer": 0.4410464029897228,
     "rtfx": 26.89,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6592076302274394,
     "cer": 0.4349878363167641,
     "rtfx": 24.6,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 21.46,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.27154846116129944,
     "cer": 0.12238710937079596,
     "done": 8,
     "total": 8,
     "ci": [
      0.26479,
      0.28002
     ]
    },
    "codeswitch": {
     "wer": 0.3495835936630201,
     "cer": 0.17596286425443233,
     "done": 2,
     "total": 2,
     "ci": [
      0.32796,
      0.36968
     ]
    },
    "noisy": {
     "wer": 0.3026998005679109,
     "cer": 0.15410227950560224,
     "done": 6,
     "total": 6,
     "ci": [
      0.28262,
      0.32742
     ]
    },
    "telephony": {
     "wer": 0.316273259005514,
     "cer": 0.1490719203041326,
     "done": 6,
     "total": 6,
     "ci": [
      0.30505,
      0.32839
     ]
    },
    "callcenter": {
     "wer": 0.5670018031083427,
     "cer": 0.35018709712652635,
     "done": 6,
     "total": 6,
     "ci": [
      0.54334,
      0.5975
     ]
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "4.57.6"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [],
   "notes": "multi-dialect; training data not disclosed",
   "hallucination_rate": 1.0,
   "inserted_wpm": 64.77,
   "arena_wer": 0.3520603032807148,
   "arena_cer": 0.18339892011719394,
   "arena_ci": [
    0.34452,
    0.3605
   ],
   "rank_range": [
    3,
    5
   ],
   "rtfx": 55.8,
   "audio_hours": 28.46
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
     "wer": 0.04904051172707889,
     "cer": 0.020671187967666857,
     "rtfx": 1935.14,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.14241794765267968,
     "cer": 0.05975491385586023,
     "rtfx": 2874.33,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4300040655915436,
     "cer": 0.2083717982280888,
     "rtfx": 2396.22,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5668952903520805,
     "cer": 0.2693669399959643,
     "rtfx": 2356.82,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3061389337641357,
     "cer": 0.14391521968815701,
     "rtfx": 2853.92,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7579972183588317,
     "cer": 0.42000378381787223,
     "rtfx": 2534.9,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2785345232503523,
     "cer": 0.13543488192573688,
     "rtfx": 2736.98,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5729435368300373,
     "cer": 0.34321896309124367,
     "rtfx": 2124.02,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.19025554619488907,
     "cer": 0.07916106480236623,
     "rtfx": 2366.91,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6920121515368121,
     "cer": 0.3876605298607993,
     "rtfx": 2375.02,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.08419000354484225,
     "cer": 0.034943094432482315,
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
     "wer": 0.2048954895489549,
     "cer": 0.10109901039335621,
     "rtfx": 2734.35,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5443374974400983,
     "cer": 0.3256685828542864,
     "rtfx": 2079.08,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.08064516129032258,
     "cer": 0.0332513072900646,
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
     "wer": 0.16914191419141913,
     "cer": 0.0731015963001641,
     "rtfx": 2754.77,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5152570141306574,
     "cer": 0.2757643922352745,
     "rtfx": 2157.59,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.635092180546726,
     "cer": 0.3516661476175646,
     "rtfx": 1805.23,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.38701393983859134,
     "cer": 0.2054754729312661,
     "rtfx": 2735.8,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.23520028358738035,
     "cer": 0.11639495539833897,
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
     "wer": 0.35918591859185917,
     "cer": 0.1955840668357452,
     "rtfx": 2713.65,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7010034814663116,
     "cer": 0.4639256852453553,
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
     "wer": 0.5977622890682318,
     "cer": 0.3876039359500381,
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
     "wer": 0.29676167558440164,
     "cer": 0.14587056192366393,
     "done": 8,
     "total": 8,
     "ci": [
      0.2922,
      0.30154
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
     "wer": 0.3171788213642652,
     "cer": 0.16397429535245353,
     "done": 6,
     "total": 6,
     "ci": [
      0.30727,
      0.32858
     ]
    },
    "callcenter": {
     "wer": 0.5042114685195566,
     "cer": 0.3153276724794912,
     "done": 6,
     "total": 6,
     "ci": [
      0.49032,
      0.51789
     ]
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
   "arena_wer": 0.3572583829297724,
   "arena_cer": 0.1959870508253502,
   "arena_ci": [
    0.35303,
    0.36204
   ],
   "rank_range": [
    4,
    5
   ],
   "rtfx": 2404.9,
   "audio_hours": 28.46
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
     "rtfx": 3152.66,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.08648111332007952,
     "cer": 0.027573677836092048,
     "rtfx": 3567.53,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.07156183368869937,
     "cer": 0.0333842188242949,
     "rtfx": 2631.02,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.14840049854590776,
     "cer": 0.06938546469303566,
     "rtfx": 3998.83,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.3694945114514162,
     "cer": 0.15814927594141395,
     "rtfx": 3275.96,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5506172839506173,
     "cer": 0.23350393484123053,
     "rtfx": 3107.94,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.37619816908993,
     "cer": 0.17964589492107874,
     "rtfx": 4138.46,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.6841201014480897,
     "cer": 0.3454625717348805,
     "rtfx": 3657.86,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.437646782527008,
     "cer": 0.25766025489547395,
     "rtfx": 3771.89,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5574663227285755,
     "cer": 0.31843273081502327,
     "rtfx": 2934.94,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2354675652906487,
     "cer": 0.10037644528098952,
     "rtfx": 3038.92,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.6531451036454611,
     "cer": 0.3168926807364167,
     "rtfx": 3141.13,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.13665366891173342,
     "cer": 0.06524146416487235,
     "rtfx": 3581.07,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.22251832111925382,
     "cer": 0.11644395964003272,
     "rtfx": 3336.85,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.22854785478547854,
     "cer": 0.11895171316326023,
     "rtfx": 3732.49,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.5037886545156666,
     "cer": 0.28617845538615344,
     "rtfx": 2882.81,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.11981566820276497,
     "cer": 0.060412180867425405,
     "rtfx": 3590.48,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.1518987341772152,
     "cer": 0.05535860376329425,
     "rtfx": 3358.88,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.1771177117711771,
     "cer": 0.08080958774678004,
     "rtfx": 3775.69,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.4587343845996314,
     "cer": 0.21615429475964343,
     "rtfx": 2887.15,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6261919898283534,
     "cer": 0.3099345998131423,
     "rtfx": 2325.59,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4189288334556126,
     "cer": 0.20830761410261064,
     "rtfx": 3927.08,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.32896136121942576,
     "cer": 0.1721624115656721,
     "rtfx": 3595.6,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.4363757495003331,
     "cer": 0.2639760021816199,
     "rtfx": 3374.63,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.3787128712871287,
     "cer": 0.20418717986971008,
     "rtfx": 3788.07,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.6573827565021503,
     "cer": 0.420769807548113,
     "rtfx": 2894.9,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.7616020343293071,
     "cer": 0.47879165369043913,
     "rtfx": 2337.35,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6170212765957447,
     "cer": 0.3897825060818416,
     "rtfx": 3964.03,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 3813.79,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.2973800686007911,
     "cer": 0.1368573969884832,
     "done": 8,
     "total": 8,
     "ci": [
      0.29278,
      0.30225
     ]
    },
    "codeswitch": {
     "wer": 0.49755655262779175,
     "cer": 0.28804649285524864,
     "done": 2,
     "total": 2,
     "ci": [
      0.47575,
      0.51721
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
     "wer": 0.32544788700579247,
     "cer": 0.15516281350881603,
     "done": 6,
     "total": 6,
     "ci": [
      0.31568,
      0.3362
     ]
    },
    "callcenter": {
     "wer": 0.5300093415723482,
     "cer": 0.321611593489566,
     "done": 6,
     "total": 6,
     "ci": [
      0.51639,
      0.54408
     ]
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": "NVIDIA FastConformer",
   "in_domain": [],
   "notes": "multi-dialect, ~2,900 h",
   "hallucination_rate": 0.6666666666666666,
   "inserted_wpm": 9.08,
   "arena_wer": 0.37443315419539025,
   "arena_cer": 0.19716173759046351,
   "arena_ci": [
    0.36993,
    0.37913
   ],
   "rank_range": [
    6,
    6
   ],
   "rtfx": 3412.7,
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
     "wer": 0.07116382505559674,
     "cer": 0.02834730281538792,
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
     "wer": 0.0570362473347548,
     "cer": 0.028554268124827947,
     "rtfx": 391.15,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.13012048192771083,
     "cer": 0.06330380975491386,
     "rtfx": 431.77,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.5012874373221303,
     "cer": 0.35458891935461645,
     "rtfx": 217.75,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5464106081390032,
     "cer": 0.2716783152642489,
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
     "wer": 0.7885952712100139,
     "cer": 0.5086870151983351,
     "rtfx": 189.59,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.4945201189917019,
     "cer": 0.3303007388502922,
     "rtfx": 454.83,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6053310404127257,
     "cer": 0.39181729624418227,
     "rtfx": 220.34,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.17635495647290086,
     "cer": 0.07569239042753428,
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
     "wer": 0.08631690889755406,
     "cer": 0.034758535835127655,
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
     "wer": 0.1696919691969197,
     "cer": 0.08021284002188075,
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
     "wer": 0.08596242467210209,
     "cer": 0.034266379575515225,
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
     "wer": 0.1707920792079208,
     "cer": 0.0840917002337262,
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
     "wer": 0.21375398794753633,
     "cer": 0.09812365426022762,
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
     "wer": 0.327007700770077,
     "cer": 0.17579193395991843,
     "rtfx": 434.51,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8140487405283637,
     "cer": 0.5819378488711155,
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
     "wer": 0.3117106693560717,
     "cer": 0.1821830095252439,
     "done": 8,
     "total": 8,
     "ci": [
      0.30071,
      0.32492
     ]
    },
    "codeswitch": {
     "wer": 0.5499255797022138,
     "cer": 0.36105901754723724,
     "done": 2,
     "total": 2,
     "ci": [
      0.50616,
      0.60439
     ]
    },
    "noisy": {
     "wer": 0.33298912220981697,
     "cer": 0.1896156941411348,
     "done": 6,
     "total": 6,
     "ci": [
      0.30571,
      0.36907
     ]
    },
    "telephony": {
     "wer": 0.3439091251367164,
     "cer": 0.20380343914427226,
     "done": 6,
     "total": 6,
     "ci": [
      0.3235,
      0.36963
     ]
    },
    "callcenter": {
     "wer": 0.5238516071816802,
     "cer": 0.3408447832757768,
     "done": 6,
     "total": 6,
     "ci": [
      0.49588,
      0.55632
     ]
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
   "arena_wer": 0.38759180703999835,
   "arena_cer": 0.23724195369373913,
   "arena_ci": [
    0.37703,
    0.39902
   ],
   "rank_range": [
    7,
    7
   ],
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
     "wer": 0.08932542624166048,
     "cer": 0.035203094777562866,
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
     "wer": 0.11420575692963753,
     "cer": 0.03370955229109838,
     "rtfx": 147.9,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.1597008724553386,
     "cer": 0.05920892987139044,
     "rtfx": 181.35,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4169941726521209,
     "cer": 0.187180511732367,
     "rtfx": 90.89,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.590032007315958,
     "cer": 0.24313466512574983,
     "rtfx": 95.72,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3629509962304793,
     "cer": 0.1507668007812083,
     "rtfx": 147.81,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7554610161171562,
     "cer": 0.3585798070252885,
     "rtfx": 78.79,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2099577266322217,
     "cer": 0.08430612662854262,
     "rtfx": 170.89,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5505875609057036,
     "cer": 0.28309340837753005,
     "rtfx": 53.44,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2464195450716091,
     "cer": 0.0887066415703146,
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
     "wer": 0.12211981566820276,
     "cer": 0.0489387880652107,
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
     "wer": 0.22304730473047304,
     "cer": 0.09533044905266298,
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
     "wer": 0.13027295285359802,
     "cer": 0.0538295908951092,
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
     "wer": 0.20737073707370737,
     "cer": 0.08215227012780348,
     "rtfx": 158.85,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5218103624820807,
     "cer": 0.25735232858452056,
     "rtfx": 81.38,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6923076923076923,
     "cer": 0.33453752725007785,
     "rtfx": 36.84,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4416727806309611,
     "cer": 0.20594749645982355,
     "rtfx": 144.9,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.35802906770648707,
     "cer": 0.19067979083358966,
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
     "wer": 0.4238173817381738,
     "cer": 0.2158237605052464,
     "rtfx": 60.01,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7296743805037886,
     "cer": 0.4562192785137049,
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
     "wer": 0.632428466617755,
     "cer": 0.3691587088341019,
     "rtfx": 67.23,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 32.5,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3300698644917998,
     "cer": 0.13920061499267036,
     "done": 8,
     "total": 8,
     "ci": [
      0.3256,
      0.33499
     ]
    },
    "codeswitch": {
     "wer": 0.38027264376896264,
     "cer": 0.18369976750303635,
     "done": 2,
     "total": 2,
     "ci": [
      0.35587,
      0.40464
     ]
    },
    "noisy": {
     "wer": 0.35627276130925484,
     "cer": 0.16673204865190658,
     "done": 6,
     "total": 6,
     "ci": [
      0.3421,
      0.37204
     ]
    },
    "telephony": {
     "wer": 0.37043584527508405,
     "cer": 0.17036246955888856,
     "done": 6,
     "total": 6,
     "ci": [
      0.35989,
      0.38191
     ]
    },
    "callcenter": {
     "wer": 0.5917427018345373,
     "cer": 0.34210034773587084,
     "done": 6,
     "total": 6,
     "ci": [
      0.56401,
      0.62812
     ]
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
   "inserted_wpm": 39.91,
   "arena_wer": 0.39942834056733867,
   "arena_cer": 0.19459256275447612,
   "arena_ci": [
    0.39216,
    0.40765
   ],
   "rank_range": [
    8,
    8
   ],
   "rtfx": 105.6,
   "audio_hours": 28.46
  },
  {
   "model": "audar-asr-v1-flash",
   "hf_id": "audarai/Audar-ASR-V1-Flash",
   "params_b": 0.78,
   "license": "AudarAI Open License",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.11193476649369903,
     "cer": 0.04049000644745326,
     "rtfx": 159.17,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.15228628230616303,
     "cer": 0.04759790068631409,
     "rtfx": 113.41,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.12046908315565032,
     "cer": 0.04266873545384019,
     "rtfx": 134.71,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.16111341919401745,
     "cer": 0.06568490657607377,
     "rtfx": 153.79,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.44233635994037135,
     "cer": 0.23453711230830704,
     "rtfx": 37.63,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5572930955647005,
     "cer": 0.2323849357034102,
     "rtfx": 42.33,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.35826602046311257,
     "cer": 0.1641391233818209,
     "rtfx": 48.58,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7899860917941586,
     "cer": 0.4026928170524059,
     "rtfx": 32.24,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.21978237043995616,
     "cer": 0.08786647132032074,
     "rtfx": 101.72,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6242476354256233,
     "cer": 0.3661110509795432,
     "rtfx": 31.47,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2530188149396237,
     "cer": 0.09965044366765259,
     "rtfx": 112.54,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7115796997855611,
     "cer": 0.37302200269420743,
     "rtfx": 26.84,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.15154200638071605,
     "cer": 0.05881267302368502,
     "rtfx": 181.48,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.25916055962691537,
     "cer": 0.11098991000818108,
     "rtfx": 107.35,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.22414741474147415,
     "cer": 0.10557461833010096,
     "rtfx": 152.95,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.7010034814663116,
     "cer": 0.5154128134633008,
     "rtfx": 25.4,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.1501240694789082,
     "cer": 0.05828975699784682,
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
     "wer": 0.2147964796479648,
     "cer": 0.09652394450246159,
     "rtfx": 150.1,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5500716772475936,
     "cer": 0.312630175789386,
     "rtfx": 32.9,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.684043229497775,
     "cer": 0.35278729367798195,
     "rtfx": 54.21,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4442406456346295,
     "cer": 0.229512363385498,
     "rtfx": 39.88,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.38869195320808225,
     "cer": 0.2,
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
     "wer": 0.4306930693069307,
     "cer": 0.23934556666169376,
     "rtfx": 26.25,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8355519148064714,
     "cer": 0.6423394151462134,
     "rtfx": 28.87,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8111888111888111,
     "cer": 0.52108377452507,
     "rtfx": 23.68,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6867204695524578,
     "cer": 0.4569187756435859,
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
     "wer": 0.3367106398639841,
     "cer": 0.15377444220120318,
     "done": 8,
     "total": 8,
     "ci": [
      0.32957,
      0.34526
     ]
    },
    "codeswitch": {
     "wer": 0.42201500293278976,
     "cer": 0.226988761149932,
     "done": 2,
     "total": 2,
     "ci": [
      0.37838,
      0.47337
     ]
    },
    "noisy": {
     "wer": 0.38340866282343367,
     "cer": 0.21057707686452132,
     "done": 6,
     "total": 6,
     "ci": [
      0.3618,
      0.40974
     ]
    },
    "telephony": {
     "wer": 0.3841835918678452,
     "cer": 0.19197843561826608,
     "done": 6,
     "total": 6,
     "ci": [
      0.37276,
      0.39588
     ]
    },
    "callcenter": {
     "wer": 0.6088632215536524,
     "cer": 0.39048150985174335,
     "done": 6,
     "total": 6,
     "ci": [
      0.5845,
      0.63683
     ]
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
   "arena_wer": 0.416170886353488,
   "arena_cer": 0.2245984815090944,
   "arena_ci": [
    0.40775,
    0.42466
   ],
   "rank_range": [
    9,
    9
   ],
   "rtfx": 52.3,
   "audio_hours": 28.46
  },
  {
   "model": "voxtral-mini-4b-realtime-2602",
   "hf_id": "mistralai/Voxtral-Mini-4B-Realtime-2602",
   "params_b": 4.43,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.10575735112428959,
     "cer": 0.046163765312701485,
     "rtfx": 29.14,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.15387673956262427,
     "cer": 0.06863140896245458,
     "rtfx": 27.71,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.10394456289978678,
     "cer": 0.03951550339097575,
     "rtfx": 26.27,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.1587037806398006,
     "cer": 0.07096275175928173,
     "rtfx": 29.66,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4932917739531102,
     "cer": 0.3145486862229081,
     "rtfx": 27.84,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.639140374942844,
     "cer": 0.37270008988681597,
     "rtfx": 26.5,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.34431879375336566,
     "cer": 0.17079860407039413,
     "rtfx": 30.26,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7920314161826065,
     "cer": 0.48243677870971813,
     "rtfx": 28.54,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.23966651009863785,
     "cer": 0.11801912503741513,
     "rtfx": 29.85,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.4961306964746346,
     "cer": 0.2636107803874878,
     "rtfx": 25.85,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2481044650379107,
     "cer": 0.11368647485883301,
     "rtfx": 26.01,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7962830593280915,
     "cer": 0.5751055231252806,
     "rtfx": 26.61,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1586316908897554,
     "cer": 0.0788988003691172,
     "rtfx": 28.74,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.3117921385742838,
     "cer": 0.1870739023725116,
     "rtfx": 26.81,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.26512651265126513,
     "cer": 0.1589835397085882,
     "rtfx": 28.87,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6739709195166905,
     "cer": 0.5419061901191369,
     "rtfx": 26.54,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.16040411201701524,
     "cer": 0.0808674254075669,
     "rtfx": 28.8,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.31978680879413723,
     "cer": 0.19511862557949278,
     "rtfx": 26.88,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.2323982398239824,
     "cer": 0.12894723755532347,
     "rtfx": 28.93,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6541060823264386,
     "cer": 0.5031658751978672,
     "rtfx": 26.46,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.8010171646535282,
     "cer": 0.6307692307692307,
     "rtfx": 22.99,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4574468085106383,
     "cer": 0.2711956719073382,
     "rtfx": 29.33,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.5147110953562567,
     "cer": 0.4016302676099662,
     "rtfx": 28.79,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.6095936042638241,
     "cer": 0.4979547313880556,
     "rtfx": 26.88,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5415291529152916,
     "cer": 0.438311203938535,
     "rtfx": 29.01,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8666803194757321,
     "cer": 0.7930933933183371,
     "rtfx": 26.51,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9164017800381437,
     "cer": 0.838305823730925,
     "rtfx": 22.88,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7136830520909758,
     "cer": 0.5821865582222868,
     "rtfx": 29.51,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 29.19,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3488830991323035,
     "cer": 0.19571969853940624,
     "done": 8,
     "total": 8,
     "ci": [
      0.34349,
      0.35533
     ]
    },
    "codeswitch": {
     "wer": 0.3678986032866362,
     "cer": 0.19081495271245147,
     "done": 2,
     "total": 2,
     "ci": [
      0.34661,
      0.38977
     ]
    },
    "noisy": {
     "wer": 0.40898479766633283,
     "cer": 0.2759424050922446,
     "done": 6,
     "total": 6,
     "ci": [
      0.39548,
      0.42244
     ]
    },
    "telephony": {
     "wer": 0.43752653602095665,
     "cer": 0.3016773444028032,
     "done": 6,
     "total": 6,
     "ci": [
      0.42254,
      0.45296
     ]
    },
    "callcenter": {
     "wer": 0.6937665006900374,
     "cer": 0.5919136630346843,
     "done": 6,
     "total": 6,
     "ci": [
      0.67639,
      0.71071
     ]
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
   "hallucination_rate": 0.08666666666666667,
   "inserted_wpm": 6.3,
   "arena_wer": 0.4465052720171186,
   "arena_cer": 0.30769295201137153,
   "arena_ci": [
    0.44029,
    0.45256
   ],
   "rank_range": [
    10,
    10
   ],
   "rtfx": 28.1,
   "audio_hours": 28.46
  },
  {
   "model": "qwen3-asr-arabic-ksa",
   "hf_id": "vadimbelsky/qwen3-asr-arabic-ksa",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.12490733876945886,
     "cer": 0.044702342574683,
     "rtfx": 167.34,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.20497017892644134,
     "cer": 0.07254743641501817,
     "rtfx": 140.41,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.14818763326226012,
     "cer": 0.048699917415350735,
     "rtfx": 113.73,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.19102617366015787,
     "cer": 0.07199405484105799,
     "rtfx": 115.29,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.46862718525545466,
     "cer": 0.22563622084131335,
     "rtfx": 85.88,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.630909922267947,
     "cer": 0.27771357290921433,
     "rtfx": 98.16,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.41400107700592353,
     "cer": 0.17645489375780407,
     "rtfx": 94.33,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8657449071422728,
     "cer": 0.46260326669609636,
     "rtfx": 43.65,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2301158603413183,
     "cer": 0.09436488806969454,
     "rtfx": 162.15,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6185153339065634,
     "cer": 0.3388894902045676,
     "rtfx": 45.39,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.30511092389778155,
     "cer": 0.1292551761226136,
     "rtfx": 72.61,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7497319513938527,
     "cer": 0.3914324202963628,
     "rtfx": 57.11,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1643034384969869,
     "cer": 0.06259612426945556,
     "rtfx": 156.07,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.4057295136575616,
     "cer": 0.22034360512680665,
     "rtfx": 118.79,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.25192519251925194,
     "cer": 0.1088567308170471,
     "rtfx": 142.31,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6106901494982593,
     "cer": 0.35345330334083147,
     "rtfx": 43.22,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.16643034384969868,
     "cer": 0.06256536450322978,
     "rtfx": 155.49,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.2858094603597602,
     "cer": 0.11903463321516226,
     "rtfx": 137.87,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.24697469746974698,
     "cer": 0.09955741210403302,
     "rtfx": 79.52,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5912348965799713,
     "cer": 0.31692076980754813,
     "rtfx": 111.57,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7472981563890655,
     "cer": 0.37365306758019307,
     "rtfx": 49.72,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4924798239178283,
     "cer": 0.2283504593152028,
     "rtfx": 80.53,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.38426090038993266,
     "cer": 0.1905259920024608,
     "rtfx": 161.81,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.7355096602265156,
     "cer": 0.464412326152168,
     "rtfx": 118.31,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.48404840484048406,
     "cer": 0.25381669899050174,
     "rtfx": 42.56,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7821011673151751,
     "cer": 0.4922935932683496,
     "rtfx": 118.6,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.94723458359822,
     "cer": 0.6024914356898162,
     "rtfx": 47.63,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6850696991929567,
     "cer": 0.400021785701318,
     "rtfx": 59.14,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 44.18,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.38104680203623953,
     "cer": 0.17254396318131726,
     "done": 8,
     "total": 8,
     "ci": [
      0.37544,
      0.38677
     ]
    },
    "codeswitch": {
     "wer": 0.42431559712394085,
     "cer": 0.21662718913713108,
     "done": 2,
     "total": 2,
     "ci": [
      0.40016,
      0.4469
     ]
    },
    "noisy": {
     "wer": 0.41458186157728233,
     "cer": 0.21098955999551952,
     "done": 6,
     "total": 6,
     "ci": [
      0.40032,
      0.42971
     ]
    },
    "telephony": {
     "wer": 0.4217045630943452,
     "cer": 0.20001361775422818,
     "done": 6,
     "total": 6,
     "ci": [
      0.40925,
      0.43466
     ]
    },
    "callcenter": {
     "wer": 0.6697040692605474,
     "cer": 0.4005936386341024,
     "done": 6,
     "total": 6,
     "ci": [
      0.65041,
      0.68801
     ]
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "4.57.6"
   },
   "finetune_of": "vadimbelsky/qwen3-asr-arabic-uae",
   "in_domain": [],
   "notes": "Saudi",
   "hallucination_rate": 1.0,
   "inserted_wpm": 94.03,
   "arena_wer": 0.4562669461326488,
   "arena_cer": 0.2338229913041682,
   "arena_ci": [
    0.4502,
    0.46236
   ],
   "rank_range": [
    11,
    13
   ],
   "rtfx": 87.8,
   "audio_hours": 28.46
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
     "rtfx": 768.36,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.25725646123260437,
     "cer": 0.08155026241421073,
     "rtfx": 720.64,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1896321961620469,
     "cer": 0.061513050877149075,
     "rtfx": 752.94,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.2077274615704196,
     "cer": 0.07957716573647174,
     "rtfx": 852.26,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.47404797398021414,
     "cer": 0.2166251016162145,
     "rtfx": 749.35,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.627251943301326,
     "cer": 0.2667804010052648,
     "rtfx": 752.38,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.3513193322563274,
     "cer": 0.1502011718124673,
     "rtfx": 836.38,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.7245357113638223,
     "cer": 0.3417891152172542,
     "rtfx": 801.57,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2787302332863629,
     "cer": 0.12224112670731131,
     "rtfx": 810.05,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5620521639438234,
     "cer": 0.2925100119060504,
     "rtfx": 659.03,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.3076383038472339,
     "cer": 0.1132831406292014,
     "rtfx": 778.12,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7372230164403145,
     "cer": 0.37815895823978446,
     "rtfx": 750.45,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.21020914569301666,
     "cer": 0.08015995078437405,
     "rtfx": 825.18,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.4457028647568288,
     "cer": 0.20016362148895556,
     "rtfx": 792.44,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.3083058305830583,
     "cer": 0.13919140683276146,
     "rtfx": 811.6,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.593897194347737,
     "cer": 0.342914271432142,
     "rtfx": 641.31,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.22899680964197094,
     "cer": 0.08228237465395263,
     "rtfx": 829.0,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.3864090606262492,
     "cer": 0.15366784837742023,
     "rtfx": 812.35,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.27722772277227725,
     "cer": 0.10617136605500024,
     "rtfx": 823.03,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5832480032766741,
     "cer": 0.31487961342997584,
     "rtfx": 661.19,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7231404958677686,
     "cer": 0.367362192463407,
     "rtfx": 577.97,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.44992663242846664,
     "cer": 0.21328201590356197,
     "rtfx": 748.85,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.49822757887274016,
     "cer": 0.2586588741925561,
     "rtfx": 797.48,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.6562291805463024,
     "cer": 0.4357785655849468,
     "rtfx": 799.62,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.5346534653465347,
     "cer": 0.31458550897608034,
     "rtfx": 800.22,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7679705099324186,
     "cer": 0.5571523785720237,
     "rtfx": 659.07,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.857914812460267,
     "cer": 0.6103394581127375,
     "rtfx": 593.43,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6669112252384446,
     "cer": 0.4395628335935514,
     "rtfx": 801.82,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 893.72,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3723028650920676,
     "cer": 0.15615631738027985,
     "done": 8,
     "total": 8,
     "ci": [
      0.36754,
      0.3775
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
     "cer": 0.20897855823453648,
     "done": 6,
     "total": 6,
     "ci": [
      0.42221,
      0.44635
     ]
    },
    "telephony": {
     "wer": 0.4414914541022345,
     "cer": 0.20627423514721965,
     "done": 6,
     "total": 6,
     "ci": [
      0.43027,
      0.45266
     ]
    },
    "callcenter": {
     "wer": 0.6636511287327845,
     "cer": 0.436012936505316,
     "done": 6,
     "total": 6,
     "ci": [
      0.65087,
      0.67637
     ]
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "5.19.0"
   },
   "finetune_of": "nvidia/nemotron-3.5-asr-streaming-0.6b",
   "in_domain": [],
   "notes": "lahgtna-v3 (13 dialects)",
   "hallucination_rate": 0.21,
   "inserted_wpm": 12.52,
   "arena_wer": 0.4584480481024415,
   "arena_cer": 0.23519648607945365,
   "arena_ci": [
    0.45366,
    0.46309
   ],
   "rank_range": [
    11,
    13
   ],
   "rtfx": 773.4,
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
     "wer": 0.12960217445021002,
     "cer": 0.075177304964539,
     "rtfx": 48.47,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.24970178926441353,
     "cer": 0.10496568429551877,
     "rtfx": 54.65,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1665778251599147,
     "cer": 0.08208413623964564,
     "rtfx": 40.92,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.19833818030743663,
     "cer": 0.09230162581897598,
     "rtfx": 43.27,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4428106789537878,
     "cer": 0.22431348774405113,
     "rtfx": 38.93,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.5754915409236397,
     "cer": 0.26362519032157467,
     "rtfx": 30.31,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.2967689822294023,
     "cer": 0.15022251630185376,
     "rtfx": 35.74,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.6515585371839974,
     "cer": 0.30641041811187486,
     "rtfx": 35.55,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2764599968686394,
     "cer": 0.13719142366526457,
     "rtfx": 48.27,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.5199197477787332,
     "cer": 0.2685896742071653,
     "rtfx": 37.33,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.27857343442853133,
     "cer": 0.12212960473245496,
     "rtfx": 35.9,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7390993566833453,
     "cer": 0.4138841490794791,
     "rtfx": 34.17,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1728110599078341,
     "cer": 0.08775761304214089,
     "rtfx": 48.05,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.5449700199866756,
     "cer": 0.3408781019907281,
     "rtfx": 47.62,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.3184818481848185,
     "cer": 0.16514993286588095,
     "rtfx": 43.38,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6422281384394839,
     "cer": 0.35557777222361076,
     "rtfx": 33.75,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.16696207018787665,
     "cer": 0.0775761304214088,
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
     "wer": 0.27832783278327833,
     "cer": 0.13536227559799094,
     "rtfx": 43.15,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.5418799918083146,
     "cer": 0.2798467049904191,
     "rtfx": 42.06,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.6652892561983471,
     "cer": 0.34163811896605417,
     "rtfx": 32.57,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.40223771093176813,
     "cer": 0.21949094077920192,
     "rtfx": 38.5,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.4817440623892237,
     "cer": 0.2730852045524454,
     "rtfx": 47.66,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 1.0313124583610926,
     "cer": 0.6803926915734934,
     "rtfx": 29.87,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.581958195819582,
     "cer": 0.34183698841314836,
     "rtfx": 43.0,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.9285275445422896,
     "cer": 0.5973506623344164,
     "rtfx": 24.18,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.8277177368086459,
     "cer": 0.5054500155714731,
     "rtfx": 24.16,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6643433602347762,
     "cer": 0.4205729639446643,
     "rtfx": 31.32,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 27.05,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.3388562135591003,
     "cer": 0.16238754547475423,
     "done": 8,
     "total": 8,
     "ci": [
      0.3305,
      0.3482
     ]
    },
    "codeswitch": {
     "wer": 0.3981898723236863,
     "cer": 0.20289054893621494,
     "done": 2,
     "total": 2,
     "ci": [
      0.37616,
      0.42019
     ]
    },
    "noisy": {
     "wer": 0.4493606429384481,
     "cer": 0.24756286232238245,
     "done": 6,
     "total": 6,
     "ci": [
      0.42431,
      0.48267
     ]
    },
    "telephony": {
     "wer": 0.4155118798274802,
     "cer": 0.21262627325510677,
     "done": 6,
     "total": 6,
     "ci": [
      0.40187,
      0.4286
     ]
    },
    "callcenter": {
     "wer": 0.7526005596926016,
     "cer": 0.4697814210649402,
     "done": 6,
     "total": 6,
     "ci": [
      0.70577,
      0.81748
     ]
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
   "inserted_wpm": 77.03,
   "arena_wer": 0.4594452463228373,
   "arena_cer": 0.2507406640221522,
   "arena_ci": [
    0.44809,
    0.47351
   ],
   "rank_range": [
    11,
    14
   ],
   "rtfx": 39.1,
   "audio_hours": 28.46
  },
  {
   "model": "qwen3-asr-arabic-uae",
   "hf_id": "vadimbelsky/qwen3-asr-arabic-uae",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.12737830491722263,
     "cer": 0.044938749194068345,
     "rtfx": 157.87,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.24910536779324055,
     "cer": 0.10379491320145337,
     "rtfx": 135.65,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1627132196162047,
     "cer": 0.05755899797292224,
     "rtfx": 110.48,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.19385126713751558,
     "cer": 0.0718272264013589,
     "rtfx": 140.63,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.4804174007318065,
     "cer": 0.2326356834809926,
     "rtfx": 75.43,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6439871970736168,
     "cer": 0.2857300093555666,
     "rtfx": 78.06,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.41809369951534736,
     "cer": 0.17900556023948516,
     "rtfx": 125.81,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8567454798331016,
     "cer": 0.4470580816043388,
     "rtfx": 77.25,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.23935337404102083,
     "cer": 0.10174551412322573,
     "rtfx": 141.86,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.644310690742333,
     "cer": 0.3538261716636,
     "rtfx": 105.07,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.33445661331086773,
     "cer": 0.15219144931433182,
     "rtfx": 96.55,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7585775553967119,
     "cer": 0.39443197126178714,
     "rtfx": 98.86,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.17121588089330025,
     "cer": 0.06441095047677638,
     "rtfx": 156.78,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.4083944037308461,
     "cer": 0.21884374147804744,
     "rtfx": 125.97,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.2621012101210121,
     "cer": 0.11184046944154359,
     "rtfx": 139.87,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6180626663936105,
     "cer": 0.3513704907106557,
     "rtfx": 72.82,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.17227933356965616,
     "cer": 0.06394955398338972,
     "rtfx": 156.76,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.3457694870086609,
     "cer": 0.16539405508590127,
     "rtfx": 137.65,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.2585258525852585,
     "cer": 0.10462976776567706,
     "rtfx": 138.31,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6045463854187999,
     "cer": 0.3198367074897942,
     "rtfx": 54.71,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7596948506039415,
     "cer": 0.38897539707256307,
     "rtfx": 34.31,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.4924798239178283,
     "cer": 0.23321593260956391,
     "rtfx": 124.34,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.39719957461892946,
     "cer": 0.19547831436481083,
     "rtfx": 152.87,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.765489673550966,
     "cer": 0.4828197436596673,
     "rtfx": 118.03,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.48872387238723874,
     "cer": 0.25515938137152516,
     "rtfx": 137.16,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.7823059594511571,
     "cer": 0.4992501874531367,
     "rtfx": 119.3,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9144945963127782,
     "cer": 0.5672376206789163,
     "rtfx": 83.68,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6925898752751284,
     "cer": 0.40913547075269596,
     "rtfx": 129.84,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 140.38,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.39153649207725694,
     "cer": 0.17781865268127325,
     "done": 8,
     "total": 8,
     "ci": [
      0.38574,
      0.39751
     ]
    },
    "codeswitch": {
     "wer": 0.44183203239167695,
     "cer": 0.22778584289341286,
     "done": 2,
     "total": 2,
     "ci": [
      0.41692,
      0.46421
     ]
    },
    "noisy": {
     "wer": 0.42546805497439144,
     "cer": 0.21551484544719035,
     "done": 6,
     "total": 6,
     "ci": [
      0.41225,
      0.43973
     ]
    },
    "telephony": {
     "wer": 0.43888262218402424,
     "cer": 0.21266690233448152,
     "done": 6,
     "total": 6,
     "ci": [
      0.42605,
      0.45234
     ]
    },
    "callcenter": {
     "wer": 0.6734672585993663,
     "cer": 0.40151345304679203,
     "done": 6,
     "total": 6,
     "ci": [
      0.65519,
      0.69128
     ]
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "4.57.6"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [],
   "notes": "Emirati",
   "hallucination_rate": 1.0,
   "inserted_wpm": 74.54,
   "arena_wer": 0.46751115986904446,
   "arena_cer": 0.2401784106211202,
   "arena_ci": [
    0.46153,
    0.47312
   ],
   "rank_range": [
    13,
    14
   ],
   "rtfx": 108.7,
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
     "wer": 0.09216703731158883,
     "cer": 0.03159252095422308,
     "rtfx": 108.72,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.14970178926441352,
     "cer": 0.04953572870407751,
     "rtfx": 68.87,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.09554904051172708,
     "cer": 0.04084186290948222,
     "rtfx": 52.82,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.15238886580805983,
     "cer": 0.06648871633098763,
     "rtfx": 78.73,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.6860685729773682,
     "cer": 0.4500323794039434,
     "rtfx": 34.08,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6254229538180155,
     "cer": 0.3503384513785702,
     "rtfx": 33.29,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.36968228325255786,
     "cer": 0.1845657997246561,
     "rtfx": 65.34,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 1.0332160680683957,
     "cer": 0.653701835151668,
     "rtfx": 22.92,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2825661499921716,
     "cer": 0.15556815854561495,
     "rtfx": 84.75,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6967612496417311,
     "cer": 0.4486416278818054,
     "rtfx": 32.25,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2271833754563325,
     "cer": 0.10570045711212692,
     "rtfx": 43.45,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.968638313080772,
     "cer": 0.632025145936237,
     "rtfx": 20.09,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.12867777383906417,
     "cer": 0.04527837588434328,
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
     "wer": 0.21204620462046206,
     "cer": 0.09945795414988313,
     "rtfx": 79.83,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.981159123489658,
     "cer": 0.7138215446138465,
     "rtfx": 27.86,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.12974122651542006,
     "cer": 0.04494001845585974,
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
     "wer": 0.17766776677667767,
     "cer": 0.07802476503058332,
     "rtfx": 79.56,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.8064714314970305,
     "cer": 0.5366991585436974,
     "rtfx": 29.96,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7266369993642721,
     "cer": 0.42099034568670196,
     "rtfx": 27.88,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.5451210564930301,
     "cer": 0.34751824552485383,
     "rtfx": 29.41,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.34083658277206663,
     "cer": 0.16342663795755152,
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
     "wer": 0.5085258525852585,
     "cer": 0.30359540504251825,
     "rtfx": 43.78,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.8795822240425968,
     "cer": 0.6588352911772057,
     "rtfx": 40.75,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.4342021614748888,
     "cer": 1.0135160386172533,
     "rtfx": 12.31,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7039618488628027,
     "cer": 0.47111579100250534,
     "rtfx": 33.65,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 61.89,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.40052457637651584,
     "cer": 0.22838716181970103,
     "done": 8,
     "total": 8,
     "ci": [
      0.37628,
      0.42693
     ]
    },
    "codeswitch": {
     "wer": 0.48966369981695135,
     "cer": 0.30210489321371015,
     "done": 2,
     "total": 2,
     "ci": [
      0.41762,
      0.57508
     ]
    },
    "noisy": {
     "wer": 0.4664751155363001,
     "cer": 0.28765891794895165,
     "done": 6,
     "total": 6,
     "ci": [
      0.42216,
      0.5205
     ]
    },
    "telephony": {
     "wer": 0.44157709965026565,
     "cer": 0.2565270738749796,
     "done": 6,
     "total": 6,
     "ci": [
      0.40191,
      0.49088
     ]
    },
    "callcenter": {
     "wer": 0.7687686112898243,
     "cer": 0.5204828544515828,
     "done": 6,
     "total": 6,
     "ci": [
      0.69397,
      0.85313
     ]
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
   "inserted_wpm": 29.77,
   "arena_wer": 0.5011903812319387,
   "arena_cer": 0.30869681931592163,
   "arena_ci": [
    0.47888,
    0.52796
   ],
   "rank_range": [
    15,
    17
   ],
   "rtfx": 45.4,
   "audio_hours": 28.46
  },
  {
   "model": "qwencleo-asr",
   "hf_id": "mohammedaly22/QwenCleo-ASR",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.11329379787496911,
     "cer": 0.044143563292499466,
     "rtfx": 167.76,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.25467196819085486,
     "cer": 0.08591037545417844,
     "rtfx": 114.08,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.1900319829424307,
     "cer": 0.06454115468355064,
     "rtfx": 124.23,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.2294142085583714,
     "cer": 0.09375758311089541,
     "rtfx": 114.23,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.5489903781000135,
     "cer": 0.26844592639541454,
     "rtfx": 48.01,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6480109739368999,
     "cer": 0.29354465907214794,
     "rtfx": 40.58,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.26903607969843835,
     "cer": 0.11870737772275643,
     "rtfx": 105.22,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.9608115847173362,
     "cer": 0.5418742511193795,
     "rtfx": 19.47,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2877720369500548,
     "cer": 0.10564456417285001,
     "rtfx": 143.6,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.7374605904270565,
     "cer": 0.402478623227622,
     "rtfx": 35.86,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.31367593372648134,
     "cer": 0.12339338531863404,
     "rtfx": 108.51,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7503573981415297,
     "cer": 0.3981679389312977,
     "rtfx": 29.2,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1643034384969869,
     "cer": 0.06902491541064287,
     "rtfx": 167.26,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.4763491005996003,
     "cer": 0.21802563403326972,
     "rtfx": 62.12,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.33608360836083606,
     "cer": 0.15366253916156944,
     "rtfx": 137.14,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.8130247798484538,
     "cer": 0.5212030325751895,
     "rtfx": 30.75,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.1598723856788373,
     "cer": 0.06450322977545371,
     "rtfx": 166.54,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.4003997335109927,
     "cer": 0.161985274065994,
     "rtfx": 160.77,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.3030803080308031,
     "cer": 0.13392013526281765,
     "rtfx": 55.03,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6823673970919517,
     "cer": 0.3661584603849038,
     "rtfx": 30.73,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.680864589955499,
     "cer": 0.3428838368109623,
     "rtfx": 18.66,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.35051357300073366,
     "cer": 0.16992847028067246,
     "rtfx": 122.91,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.5134704005671747,
     "cer": 0.28951091971701015,
     "rtfx": 30.22,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 0.8840772818121253,
     "cer": 0.5171802563403327,
     "rtfx": 17.09,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.6471397139713971,
     "cer": 0.355711373017057,
     "rtfx": 24.8,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 0.9205406512389924,
     "cer": 0.6123469132716821,
     "rtfx": 21.18,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 0.9033693579148124,
     "cer": 0.5569604484584242,
     "rtfx": 11.43,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.6986426999266324,
     "cer": 0.46966341091463637,
     "rtfx": 22.08,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 21.51,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.40178262175241425,
     "cer": 0.1888656113563528,
     "done": 8,
     "total": 8,
     "ci": [
      0.38856,
      0.41875
     ]
    },
    "codeswitch": {
     "wer": 0.5126163136885556,
     "cer": 0.254061593700236,
     "done": 2,
     "total": 2,
     "ci": [
      0.44961,
      0.59342
     ]
    },
    "noisy": {
     "wer": 0.4756323765289813,
     "cer": 0.24724624090510053,
     "done": 6,
     "total": 6,
     "ci": [
      0.44869,
      0.50615
     ]
    },
    "telephony": {
     "wer": 0.4295163312114696,
     "cer": 0.206563234430134,
     "done": 6,
     "total": 6,
     "ci": [
      0.41471,
      0.44861
     ]
    },
    "callcenter": {
     "wer": 0.7612066842385223,
     "cer": 0.46689555361985713,
     "done": 6,
     "total": 6,
     "ci": [
      0.7012,
      0.82349
     ]
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "4.57.6"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [],
   "notes": "Egyptian + code-switching",
   "hallucination_rate": 1.0,
   "inserted_wpm": 161.36,
   "arena_wer": 0.5013750085515462,
   "arena_cer": 0.26328781709051036,
   "arena_ci": [
    0.48528,
    0.51848
   ],
   "rank_range": [
    15,
    17
   ],
   "rtfx": 48.2,
   "audio_hours": 28.46
  },
  {
   "model": "qwen3-asr-0.6b",
   "hf_id": "Qwen/Qwen3-ASR-0.6B-hf",
   "params_b": 0.94,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.1770447244872745,
     "cer": 0.06395873629916184,
     "rtfx": 237.07,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.27335984095427435,
     "cer": 0.09091643116673395,
     "rtfx": 220.33,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.20055970149253732,
     "cer": 0.059135614004354464,
     "rtfx": 188.72,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.24761113419194017,
     "cer": 0.09054234409123998,
     "rtfx": 214.56,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.5210055563084429,
     "cer": 0.23732036320046296,
     "rtfx": 115.2,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.6776406035665294,
     "cer": 0.2981857538568782,
     "rtfx": 92.74,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.47845988152934843,
     "cer": 0.20692415235696524,
     "rtfx": 186.2,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.8138754806512313,
     "cer": 0.39991801727943493,
     "rtfx": 45.39,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2847189603882887,
     "cer": 0.11402555256234542,
     "rtfx": 197.88,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.6231011751218114,
     "cer": 0.32297867734603314,
     "rtfx": 137.38,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.3404942431901151,
     "cer": 0.12643183651519227,
     "rtfx": 175.84,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.7843102215868477,
     "cer": 0.4057476425684778,
     "rtfx": 79.24,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.21924849344204184,
     "cer": 0.0839126422639188,
     "rtfx": 236.31,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.39573617588274485,
     "cer": 0.176029451868012,
     "rtfx": 222.18,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.3479097909790979,
     "cer": 0.15167338007857178,
     "rtfx": 182.42,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.6463239811591235,
     "cer": 0.3661584603849038,
     "rtfx": 45.4,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.2506203473945409,
     "cer": 0.09704706244232544,
     "rtfx": 204.36,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.39640239840106595,
     "cer": 0.16853013362421598,
     "rtfx": 204.56,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.32453245324532454,
     "cer": 0.12805211596797453,
     "rtfx": 215.99,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.6399754249436822,
     "cer": 0.3252520203282513,
     "rtfx": 72.07,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.7889383343928799,
     "cer": 0.4028651510432887,
     "rtfx": 62.46,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.5704328686720469,
     "cer": 0.2720307904578628,
     "rtfx": 101.49,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.5060262318326835,
     "cer": 0.2643801907105506,
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
     "wer": 0.577007700770077,
     "cer": 0.306380227758715,
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
     "cer": 0.5611336032388664,
     "rtfx": 27.84,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 0.7373440939104916,
     "cer": 0.4390181910606006,
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
     "wer": 0.4236946153976973,
     "cer": 0.18086267653190394,
     "done": 8,
     "total": 8,
     "ci": [
      0.41856,
      0.42889
     ]
    },
    "codeswitch": {
     "wer": 0.45391006775505005,
     "cer": 0.21850211495418928,
     "done": 2,
     "total": 2,
     "ci": [
      0.43139,
      0.47489
     ]
    },
    "noisy": {
     "wer": 0.4556704843733285,
     "cer": 0.21832556894651275,
     "done": 6,
     "total": 6,
     "ci": [
      0.44341,
      0.46681
     ]
    },
    "telephony": {
     "wer": 0.49515030450825676,
     "cer": 0.23229621231065312,
     "done": 6,
     "total": 6,
     "ci": [
      0.48361,
      0.50689
     ]
    },
    "callcenter": {
     "wer": 0.7021821549403197,
     "cer": 0.4127051559684087,
     "done": 6,
     "total": 6,
     "ci": [
      0.68889,
      0.71493
     ]
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
   "arena_wer": 0.5015011867104137,
   "arena_cer": 0.24690125727937456,
   "arena_ci": [
    0.49692,
    0.50603
   ],
   "rank_range": [
    15,
    17
   ],
   "rtfx": 100.5,
   "audio_hours": 28.46
  },
  {
   "model": "moulsot-v0.3",
   "hf_id": "atlasia/moulsot.v0.3",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.22189276006918704,
     "cer": 0.08549323017408124,
     "rtfx": 166.71,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.3314115308151093,
     "cer": 0.12700847799757772,
     "rtfx": 113.39,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.2038912579957356,
     "cer": 0.06994669536274682,
     "rtfx": 126.09,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.27478188616535104,
     "cer": 0.11298835234166464,
     "rtfx": 113.71,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.7301802412250983,
     "cer": 0.4052110172644226,
     "rtfx": 30.58,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.7278463648834019,
     "cer": 0.3319024819767762,
     "rtfx": 55.41,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.6559504577275175,
     "cer": 0.3093883736566312,
     "rtfx": 59.71,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 0.6132700646322506,
     "cer": 0.318392508040613,
     "rtfx": 27.97,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.41717551276029435,
     "cer": 0.1569151031082124,
     "rtfx": 142.04,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.44998566924620237,
     "cer": 0.19390626691200347,
     "rtfx": 108.05,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.40494243190115137,
     "cer": 0.16880881957515462,
     "rtfx": 103.57,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 0.9135096497498213,
     "cer": 0.5448765154916929,
     "rtfx": 15.96,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.2926267281105991,
     "cer": 0.12414641648723469,
     "rtfx": 100.33,
     "n": 300
    },
    "cv18_ar/noisy": {
     "wer": 0.4983344437041972,
     "cer": 0.26520316334878646,
     "rtfx": 30.19,
     "n": 300
    },
    "mgb2/noisy": {
     "wer": 0.4931243124312431,
     "cer": 0.2905664130488836,
     "rtfx": 28.22,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.9571984435797666,
     "cer": 0.6405898525368657,
     "rtfx": 25.88,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.30538816022686993,
     "cer": 0.12885266071977852,
     "rtfx": 161.22,
     "n": 300
    },
    "cv18_ar/telephony": {
     "wer": 0.4643570952698201,
     "cer": 0.2071175347695664,
     "rtfx": 60.97,
     "n": 300
    },
    "mgb2/telephony": {
     "wer": 0.38393839383938394,
     "cer": 0.17176388681684818,
     "rtfx": 53.97,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.8906409993856236,
     "cer": 0.5815212863450804,
     "rtfx": 22.79,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 0.8156389065479974,
     "cer": 0.4459669884771099,
     "rtfx": 21.36,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.7162509170946442,
     "cer": 0.3760575142514796,
     "rtfx": 37.13,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.8461538461538461,
     "cer": 0.6024300215318363,
     "rtfx": 26.41,
     "n": 300
    },
    "cv18_ar/callcenter": {
     "wer": 1.1312458361092605,
     "cer": 0.804745023179711,
     "rtfx": 14.66,
     "n": 300
    },
    "mgb2/callcenter": {
     "wer": 0.8591859185918592,
     "cer": 0.5755631806653737,
     "rtfx": 15.78,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.0692197419619087,
     "cer": 0.829917520619845,
     "rtfx": 22.95,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.0257469802924348,
     "cer": 0.7240734973528495,
     "rtfx": 12.43,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 1.1975421863536317,
     "cer": 0.8924875639954977,
     "rtfx": 19.52,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 20.99,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.4699030704392064,
     "cer": 0.22004139210181417,
     "done": 8,
     "total": 8,
     "ci": [
      0.45925,
      0.4825
     ]
    },
    "codeswitch": {
     "wer": 0.43358059100324836,
     "cer": 0.17541068501010793,
     "done": 2,
     "total": 2,
     "ci": [
      0.41507,
      0.45267
     ]
    },
    "noisy": {
     "wer": 0.5932893349127965,
     "cer": 0.3390318634147697,
     "done": 6,
     "total": 6,
     "ci": [
      0.5547,
      0.63853
     ]
    },
    "telephony": {
     "wer": 0.5960357453940565,
     "cer": 0.31854664522997717,
     "done": 6,
     "total": 6,
     "ci": [
      0.57548,
      0.61978
     ]
    },
    "callcenter": {
     "wer": 1.021515751577157,
     "cer": 0.7382028012241856,
     "done": 6,
     "total": 6,
     "ci": [
      0.92412,
      1.14359
     ]
    }
   },
   "env": {
    "python": "3.12.13",
    "host": "kadir",
    "torch": "2.11.0+cu128",
    "gpu": "NVIDIA GeForce RTX 5070 Ti",
    "transformers": "4.57.6"
   },
   "finetune_of": "Qwen/Qwen3-ASR-1.7B",
   "in_domain": [],
   "notes": "Moroccan Darija",
   "hallucination_rate": 0.9866666666666667,
   "inserted_wpm": 60.07,
   "arena_wer": 0.6203278333852092,
   "arena_cer": 0.35676022453969375,
   "arena_ci": [
    0.59755,
    0.64702
   ],
   "rank_range": [
    18,
    19
   ],
   "rtfx": 41.1,
   "audio_hours": 28.46
  },
  {
   "model": "whisper-large-v3-turbo",
   "hf_id": "openai/whisper-large-v3-turbo",
   "params_b": 0.81,
   "license": "MIT",
   "kind": "open",
   "sets": {
    "fleurs_ar/clean": {
     "wer": 0.09822090437361009,
     "cer": 0.03303245218138835,
     "rtfx": 212.63,
     "n": 428
    },
    "cv18_ar/clean": {
     "wer": 0.22982107355864811,
     "cer": 0.1010496568429552,
     "rtfx": 100.26,
     "n": 1000
    },
    "masc_clean/clean": {
     "wer": 0.0939498933901919,
     "cer": 0.03315898796266173,
     "rtfx": 94.7,
     "n": 1000
    },
    "mgb2/clean": {
     "wer": 0.1620274200249273,
     "cer": 0.06814183450618781,
     "rtfx": 138.37,
     "n": 1000
    },
    "sada/clean": {
     "wer": 0.8509960699281746,
     "cer": 0.5668875814652025,
     "rtfx": 89.1,
     "n": 1000
    },
    "casablanca/clean": {
     "wer": 0.8545038866026521,
     "cer": 0.4753911910920331,
     "rtfx": 64.03,
     "n": 994
    },
    "mgb3_egy/clean": {
     "wer": 0.42638664512654817,
     "cer": 0.2208514316816256,
     "rtfx": 130.14,
     "n": 1000
    },
    "mgb5_mor/clean": {
     "wer": 1.0692955902806185,
     "cer": 0.6580216938891341,
     "rtfx": 70.28,
     "n": 1000
    },
    "mixat_cs/clean": {
     "wer": 0.2444026929700955,
     "cer": 0.11902736424216645,
     "rtfx": 251.29,
     "n": 1000
    },
    "algerian_cs/clean": {
     "wer": 0.885353969618802,
     "cer": 0.6682000216473645,
     "rtfx": 72.2,
     "n": 316
    },
    "masc_noisy/clean": {
     "wer": 0.2516147149677057,
     "cer": 0.10056466792148427,
     "rtfx": 78.49,
     "n": 1000
    },
    "nadi_robust/clean": {
     "wer": 1.1532344531808434,
     "cer": 0.8031612034126627,
     "rtfx": 49.92,
     "n": 1000
    },
    "fleurs_ar/noisy": {
     "wer": 0.1391350584898972,
     "cer": 0.0478929560135343,
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
     "wer": 0.28492849284928495,
     "cer": 0.14058381819085983,
     "rtfx": 125.92,
     "n": 300
    },
    "sada/noisy": {
     "wer": 0.8943272578332992,
     "cer": 0.6991585436974089,
     "rtfx": 90.22,
     "n": 300
    },
    "fleurs_ar/telephony": {
     "wer": 0.1425026586316909,
     "cer": 0.0480159950784374,
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
     "wer": 0.20737073707370737,
     "cer": 0.08473817693570043,
     "rtfx": 141.02,
     "n": 300
    },
    "sada/telephony": {
     "wer": 0.9514642637722711,
     "cer": 0.6579188536199283,
     "rtfx": 104.69,
     "n": 300
    },
    "casablanca/telephony": {
     "wer": 1.102352193261284,
     "cer": 0.652257863593896,
     "rtfx": 64.43,
     "n": 296
    },
    "mgb3_egy/telephony": {
     "wer": 0.7982391782831988,
     "cer": 0.5278675429359864,
     "rtfx": 102.03,
     "n": 300
    },
    "fleurs_ar/callcenter": {
     "wer": 0.4533853243530663,
     "cer": 0.2304829283297447,
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
     "wer": 0.6413641364136413,
     "cer": 0.4330896613456661,
     "rtfx": 96.48,
     "n": 300
    },
    "sada/callcenter": {
     "wer": 1.2408355519148064,
     "cer": 0.9131883695742731,
     "rtfx": 104.55,
     "n": 300
    },
    "casablanca/callcenter": {
     "wer": 1.566751430387794,
     "cer": 1.1397072563064465,
     "rtfx": 56.69,
     "n": 296
    },
    "mgb3_egy/callcenter": {
     "wer": 1.2439471753484959,
     "cer": 0.9281071856504848,
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
     "wer": 0.47315018541067133,
     "cer": 0.26956685370264855,
     "done": 8,
     "total": 8,
     "ci": [
      0.44273,
      0.50691
     ]
    },
    "codeswitch": {
     "wer": 0.5648783312944488,
     "cer": 0.39361369294476545,
     "done": 2,
     "total": 2,
     "ci": [
      0.464,
      0.68687
     ]
    },
    "noisy": {
     "wer": 0.5168313575348509,
     "cer": 0.3368521716629502,
     "done": 6,
     "total": 6,
     "ci": [
      0.47153,
      0.56868
     ]
    },
    "telephony": {
     "wer": 0.5852870836735787,
     "cer": 0.35123706257363874,
     "done": 6,
     "total": 6,
     "ci": [
      0.5043,
      0.68343
     ]
    },
    "callcenter": {
     "wer": 1.0293772719570424,
     "cer": 0.7281000816391536,
     "done": 6,
     "total": 6,
     "ci": [
      0.92107,
      1.15348
     ]
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
   "arena_wer": 0.6225479727795318,
   "arena_cer": 0.40010502268240455,
   "arena_ci": [
    0.58825,
    0.66059
   ],
   "rank_range": [
    18,
    19
   ],
   "rtfx": 105.1,
   "audio_hours": 28.46
  }
 ]
};
