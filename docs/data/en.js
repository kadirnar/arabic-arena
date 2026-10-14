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
   "model": "qwen3-asr-1.7b",
   "hf_id": "Qwen/Qwen3-ASR-1.7B-hf",
   "params_b": 2.04,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01574050792054312,
     "cer": 0.004935834155972359,
     "rtfx": 222.75,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03231577770323158,
     "cer": 0.012533298397309926,
     "rtfx": 212.58,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.04783248126619511,
     "cer": 0.028544637529378813,
     "rtfx": 227.73,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07679162661540105,
     "cer": 0.038489665524806586,
     "rtfx": 285.18,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06019614474129185,
     "cer": 0.03522224346061666,
     "rtfx": 242.48,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.1026128524091477,
     "cer": 0.06981830759527152,
     "rtfx": 214.1,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08406049284782108,
     "cer": 0.04273841101427309,
     "rtfx": 195.23,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03331961097102866,
     "cer": 0.018165116546101735,
     "rtfx": 248.57,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.08853828306264501,
     "cer": 0.05040448039825762,
     "rtfx": 170.56,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.14150167279109307,
     "cer": 0.10471167369901548,
     "rtfx": 206.97,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.10097526806401207,
     "cer": 0.06948547828131549,
     "rtfx": 215.06,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.010044860542227424,
     "cer": 0.005830170081580438,
     "rtfx": 238.16,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.06470248411322935,
     "cer": 0.02651141621785633,
     "rtfx": 250.77,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.019846796657381614,
     "cer": 0.00793071409609769,
     "rtfx": 201.67,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.0904660371611331,
     "cer": 0.05629962943356273,
     "rtfx": 226.6,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08697539797395079,
     "cer": 0.05251990714160905,
     "rtfx": 231.27,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.14949059561128528,
     "cer": 0.10843017893377606,
     "rtfx": 196.72,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.01897632311977716,
     "cer": 0.006702946641890098,
     "rtfx": 201.64,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0558939993908011,
     "cer": 0.03247750132345156,
     "rtfx": 225.28,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.070767004341534,
     "cer": 0.039764359351988215,
     "rtfx": 233.4,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.10325235109717869,
     "cer": 0.07076185205681608,
     "rtfx": 194.82,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1342560553633218,
     "cer": 0.07455188240401911,
     "rtfx": 279.54,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08546270718232044,
     "cer": 0.04437718910463495,
     "rtfx": 195.71,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.08548050139275766,
     "cer": 0.05146668436421556,
     "rtfx": 202.28,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.14803533353639964,
     "cer": 0.09637374272101641,
     "rtfx": 231.27,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.12040520984081042,
     "cer": 0.07213998652055616,
     "rtfx": 232.25,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.19925548589341693,
     "cer": 0.13521490499907765,
     "rtfx": 196.22,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.34498269896193773,
     "cer": 0.23134652359982633,
     "rtfx": 109.99,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15435082872928177,
     "cer": 0.09628659842894549,
     "rtfx": 199.2,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 87.05,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.06015641972636724,
     "cer": 0.03342799940244315,
     "done": 9,
     "total": 9,
     "ci": [
      0.05813,
      0.06218
     ]
    },
    "accented": {
     "wer": 0.14150167279109307,
     "cer": 0.10471167369901548,
     "done": 1,
     "total": 1,
     "ci": [
      0.12677,
      0.15835
     ]
    },
    "noisy": {
     "wer": 0.08955081909355257,
     "cer": 0.05893318157727221,
     "done": 5,
     "total": 5,
     "ci": [
      0.08222,
      0.09744
     ]
    },
    "telephony": {
     "wer": 0.06791947314379874,
     "cer": 0.0376221646477796,
     "done": 8,
     "total": 8,
     "ci": [
      0.06371,
      0.07231
     ]
    },
    "callcenter": {
     "wer": 0.17541834305910067,
     "cer": 0.11380474010560626,
     "done": 6,
     "total": 6,
     "ci": [
      0.16448,
      0.18583
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
   "hallucination_rate": 0.9966666666666667,
   "inserted_wpm": 37.0,
   "arena_wer": 0.09631346205346844,
   "arena_cer": 0.059846414281908525,
   "arena_ci": [
    0.09349,
    0.09934
   ],
   "rank_range": [
    1,
    1
   ],
   "rtfx": 211.4,
   "audio_hours": 38.41
  },
  {
   "model": "cohere-transcribe-arabic-07-2026",
   "hf_id": "CohereLabs/cohere-transcribe-arabic-07-2026",
   "params_b": 2.07,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.013578073925069148,
     "cer": 0.00418596704381502,
     "rtfx": 494.34,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.023537962652353795,
     "cer": 0.00878859338835757,
     "rtfx": 491.08,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06618110511940611,
     "cer": 0.037848435768476685,
     "rtfx": 495.58,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.06995621061625547,
     "cer": 0.03200415688387668,
     "rtfx": 536.87,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.053812986134595876,
     "cer": 0.032149211157018714,
     "rtfx": 510.78,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.10212396110598077,
     "cer": 0.06922826507151722,
     "rtfx": 493.94,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08633793085800558,
     "cer": 0.04383983832259694,
     "rtfx": 491.22,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.032444810374105904,
     "cer": 0.016663221954300148,
     "rtfx": 534.87,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.06765661252900232,
     "cer": 0.03836729931549471,
     "rtfx": 439.43,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1880655953490923,
     "cer": 0.13813877168307548,
     "rtfx": 402.02,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.1015679724123067,
     "cer": 0.06962859976078267,
     "rtfx": 521.04,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.015408621025941096,
     "cer": 0.009688987689532956,
     "rtfx": 505.2,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08376660889659157,
     "cer": 0.03144200864750057,
     "rtfx": 497.8,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.0201949860724234,
     "cer": 0.007864348287762144,
     "rtfx": 433.17,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12656107219007007,
     "cer": 0.0758337744838539,
     "rtfx": 444.44,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.06570188133140377,
     "cer": 0.039290082623998406,
     "rtfx": 477.85,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.15164576802507837,
     "cer": 0.10924183729939126,
     "rtfx": 418.73,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.017757660167130918,
     "cer": 0.006072471462702416,
     "rtfx": 437.87,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07310386841303686,
     "cer": 0.041397564849126524,
     "rtfx": 486.47,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.05832127351664255,
     "cer": 0.03354883802201643,
     "rtfx": 473.27,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.1009012539184953,
     "cer": 0.06913853532558568,
     "rtfx": 419.08,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.11730103806228373,
     "cer": 0.06264342864231222,
     "rtfx": 539.69,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.0856353591160221,
     "cer": 0.045465365389193046,
     "rtfx": 497.29,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07816852367688022,
     "cer": 0.049508893018316964,
     "rtfx": 437.1,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.21565641181845874,
     "cer": 0.14290629962943358,
     "rtfx": 378.79,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.15021707670043416,
     "cer": 0.10127056239235166,
     "rtfx": 382.12,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.21101097178683387,
     "cer": 0.1510791366906475,
     "rtfx": 418.73,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.48304498269896196,
     "cer": 0.3376542827017304,
     "rtfx": 367.96,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.15245165745856354,
     "cer": 0.09691570034345565,
     "rtfx": 417.03,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 271.98,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.05729218370164166,
     "cer": 0.03145277654505041,
     "done": 9,
     "total": 9,
     "ci": [
      0.05516,
      0.05933
     ]
    },
    "accented": {
     "wer": 0.1880655953490923,
     "cer": 0.13813877168307548,
     "done": 1,
     "total": 1,
     "ci": [
      0.14548,
      0.24576
     ]
    },
    "noisy": {
     "wer": 0.09313433600625645,
     "cer": 0.06037172849115767,
     "done": 5,
     "total": 5,
     "ci": [
      0.08126,
      0.1094
     ]
    },
    "telephony": {
     "wer": 0.06902446038951801,
     "cer": 0.03742465000349623,
     "done": 8,
     "total": 8,
     "ci": [
      0.06483,
      0.07336
     ]
    },
    "callcenter": {
     "wer": 0.2150916040233554,
     "cer": 0.14655581246265595,
     "done": 6,
     "total": 6,
     "ci": [
      0.17368,
      0.27529
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
   "hallucination_rate": 0.67,
   "inserted_wpm": 89.98,
   "arena_wer": 0.10735180895686418,
   "arena_cer": 0.06836677370347931,
   "arena_ci": [
    0.09681,
    0.12137
   ],
   "rank_range": [
    2,
    6
   ],
   "rtfx": 469.3,
   "audio_hours": 38.41
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
     "rtfx": 863.95,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03505535055350553,
     "cer": 0.013122843792305341,
     "rtfx": 821.92,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06681140135863856,
     "cer": 0.036776794086486354,
     "rtfx": 1008.23,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.08821958773897255,
     "cer": 0.04278126323082252,
     "rtfx": 981.85,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06006932702062902,
     "cer": 0.035406037258678746,
     "rtfx": 1016.64,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.10831658427942854,
     "cer": 0.07333821644387475,
     "rtfx": 963.59,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08741267688528366,
     "cer": 0.04369837059492232,
     "rtfx": 1084.06,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.042633664385323934,
     "cer": 0.022822367665633253,
     "rtfx": 1100.5,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.09698375870069606,
     "cer": 0.05707451773490977,
     "rtfx": 879.29,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15153841934953108,
     "cer": 0.11114627285513362,
     "rtfx": 945.41,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11751710760278032,
     "cer": 0.08134411515145319,
     "rtfx": 1042.86,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.016286327286912424,
     "cer": 0.00983579053331376,
     "rtfx": 963.72,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09955709609089158,
     "cer": 0.0389137525601153,
     "rtfx": 896.67,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.032729805013927575,
     "cer": 0.01609370852136979,
     "rtfx": 825.26,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12397197685044167,
     "cer": 0.08123345685547909,
     "rtfx": 934.18,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08755426917510854,
     "cer": 0.05246998327550485,
     "rtfx": 914.97,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1510579937304075,
     "cer": 0.11138166389964951,
     "rtfx": 778.27,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.022806406685236768,
     "cer": 0.00793071409609769,
     "rtfx": 830.9,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07584526347852574,
     "cer": 0.039412387506617255,
     "rtfx": 948.88,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07452966714905933,
     "cer": 0.042684905519083396,
     "rtfx": 917.48,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11206896551724138,
     "cer": 0.07614831211953514,
     "rtfx": 793.51,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.14740484429065745,
     "cer": 0.07951373813806363,
     "rtfx": 992.23,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09021063535911603,
     "cer": 0.04543135988030061,
     "rtfx": 1046.32,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.10967966573816156,
     "cer": 0.06736129546057872,
     "rtfx": 815.67,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.2048431312823637,
     "cer": 0.1392535733192165,
     "rtfx": 927.7,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.13863965267727932,
     "cer": 0.08392201892114526,
     "rtfx": 908.38,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.21884796238244514,
     "cer": 0.1494927135214905,
     "rtfx": 778.89,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.40346020761245677,
     "cer": 0.30093655026980093,
     "rtfx": 964.59,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.1596167127071823,
     "cer": 0.09995919338932907,
     "rtfx": 1027.24,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 1009.03,
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
     "wer": 0.07983865073220509,
     "cer": 0.04248387004414085,
     "done": 8,
     "total": 8,
     "ci": [
      0.07532,
      0.08456
     ]
    },
    "callcenter": {
     "wer": 0.2058478887333148,
     "cer": 0.14015422414692683,
     "done": 6,
     "total": 6,
     "ci": [
      0.1945,
      0.21672
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
   "hallucination_rate": 0.23333333333333334,
   "inserted_wpm": 15.5,
   "arena_wer": 0.11072860089282208,
   "arena_cer": 0.06980065469850746,
   "arena_ci": [
    0.10751,
    0.11395
   ],
   "rank_range": [
    2,
    4
   ],
   "rtfx": 959.8,
   "audio_hours": 38.41
  },
  {
   "model": "cohere-transcribe-03-2026",
   "hf_id": "CohereLabs/cohere-transcribe-03-2026",
   "params_b": 2.07,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.01247171234598944,
     "cer": 0.003711367605740755,
     "rtfx": 485.37,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.02309068545230907,
     "cer": 0.008602995764007162,
     "rtfx": 490.35,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.07171370544155753,
     "cer": 0.041026827575288916,
     "rtfx": 498.58,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.07465555911566805,
     "cer": 0.03594934760016935,
     "rtfx": 552.38,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.058209333784240785,
     "cer": 0.03535457499522136,
     "rtfx": 519.91,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.10494866641316747,
     "cer": 0.07140531852123136,
     "rtfx": 495.97,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.08731032012078098,
     "cer": 0.04443097132752305,
     "rtfx": 492.82,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03481191787166161,
     "cer": 0.017981398553220805,
     "rtfx": 544.66,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.06784222737819026,
     "cer": 0.038581207218419414,
     "rtfx": 441.13,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.1977732682498766,
     "cer": 0.15581340834505392,
     "rtfx": 393.55,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.09887386173824021,
     "cer": 0.06580521166644517,
     "rtfx": 526.9,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.015408621025941096,
     "cer": 0.009311494662668037,
     "rtfx": 518.02,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08415174273059889,
     "cer": 0.030228324357126603,
     "rtfx": 504.88,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.018802228412256268,
     "cer": 0.00793071409609769,
     "rtfx": 439.45,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.14529393847091077,
     "cer": 0.09589730015881419,
     "rtfx": 414.42,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.07308248914616498,
     "cer": 0.04285963905044807,
     "rtfx": 490.39,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.18769592476489028,
     "cer": 0.13399741745065485,
     "rtfx": 351.71,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.017409470752089137,
     "cer": 0.006039288558534643,
     "rtfx": 438.81,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07158087115443192,
     "cer": 0.03830068819481207,
     "rtfx": 491.74,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.06222865412445731,
     "cer": 0.03549586880007988,
     "rtfx": 487.01,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.10050940438871474,
     "cer": 0.07094631986718318,
     "rtfx": 425.31,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.12491349480968858,
     "cer": 0.0619611734788811,
     "rtfx": 552.56,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.08900207182320442,
     "cer": 0.04646852790152005,
     "rtfx": 507.92,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.07277158774373259,
     "cer": 0.04429917706397664,
     "rtfx": 439.23,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.23210478221139202,
     "cer": 0.14317098994176813,
     "rtfx": 399.49,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.10636758321273516,
     "cer": 0.06470133047103167,
     "rtfx": 487.98,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.20630877742946707,
     "cer": 0.14517616675890058,
     "rtfx": 425.67,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.5449826989619377,
     "cer": 0.3391428394219438,
     "rtfx": 325.13,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.16842196132596685,
     "cer": 0.10091134763831741,
     "rtfx": 469.37,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 195.38,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.059450458658173916,
     "cer": 0.03300488990675802,
     "done": 9,
     "total": 9,
     "ci": [
      0.05757,
      0.06145
     ]
    },
    "accented": {
     "wer": 0.1977732682498766,
     "cer": 0.15581340834505392,
     "done": 1,
     "total": 1,
     "ci": [
      0.14832,
      0.25813
     ]
    },
    "noisy": {
     "wer": 0.10474968850649251,
     "cer": 0.06929805648449198,
     "done": 5,
     "total": 5,
     "ci": [
      0.08612,
      0.12928
     ]
    },
    "telephony": {
     "wer": 0.07065054135114077,
     "cer": 0.0373439607276007,
     "done": 8,
     "total": 8,
     "ci": [
      0.06681,
      0.07489
     ]
    },
    "callcenter": {
     "wer": 0.22182623181420524,
     "cer": 0.1395669752159897,
     "done": 6,
     "total": 6,
     "ci": [
      0.17579,
      0.28697
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
   "hallucination_rate": 0.6866666666666666,
   "inserted_wpm": 196.62,
   "arena_wer": 0.11221605118103142,
   "arena_cer": 0.06954205094459964,
   "arena_ci": [
    0.1004,
    0.12838
   ],
   "rank_range": [
    2,
    8
   ],
   "rtfx": 467.9,
   "audio_hours": 38.41
  },
  {
   "model": "qwen3-asr-0.6b",
   "hf_id": "Qwen/Qwen3-ASR-0.6B-hf",
   "params_b": 0.94,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.020216243399547397,
     "cer": 0.006539980256663376,
     "rtfx": 263.73,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.043162249804316224,
     "cer": 0.01750076422551203,
     "rtfx": 250.78,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.058197352755795226,
     "cer": 0.03351315805497035,
     "rtfx": 278.29,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09783189148777101,
     "cer": 0.05047919633578384,
     "rtfx": 344.32,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.06924247548190735,
     "cer": 0.04012586199291291,
     "rtfx": 286.24,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11217339344885653,
     "cer": 0.07485401534110561,
     "rtfx": 255.79,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.087540622840912,
     "cer": 0.04405203991410888,
     "rtfx": 228.83,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03488910615962538,
     "cer": 0.018252382592720176,
     "rtfx": 289.61,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.09716937354988399,
     "cer": 0.0550326695706285,
     "rtfx": 199.8,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.15724236274886194,
     "cer": 0.114943741209564,
     "rtfx": 247.13,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.11907969179373888,
     "cer": 0.07869636778131038,
     "rtfx": 251.68,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.013165593914569925,
     "cer": 0.00849359310446071,
     "rtfx": 281.38,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.06162141344117081,
     "cer": 0.027232041265265874,
     "rtfx": 306.16,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.02663649025069638,
     "cer": 0.01081762675869392,
     "rtfx": 238.49,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.11574779165397503,
     "cer": 0.07236633139227104,
     "rtfx": 271.74,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.10289435600578871,
     "cer": 0.06262949002770775,
     "rtfx": 275.75,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1775078369905956,
     "cer": 0.12219147758716103,
     "rtfx": 235.02,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.026288300835654595,
     "cer": 0.009755773825325192,
     "rtfx": 239.75,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.0744745659457813,
     "cer": 0.041768131286394915,
     "rtfx": 268.7,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08118668596237337,
     "cer": 0.045680337485334864,
     "rtfx": 278.28,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11363636363636363,
     "cer": 0.0782881387197934,
     "rtfx": 230.81,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.16366782006920416,
     "cer": 0.09619797804378838,
     "rtfx": 349.34,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09737569060773481,
     "cer": 0.04985207603631788,
     "rtfx": 238.31,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.1209958217270195,
     "cer": 0.07074595168569153,
     "rtfx": 242.23,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1952482485531526,
     "cer": 0.126071995764955,
     "rtfx": 271.08,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1678726483357453,
     "cer": 0.10234392551359177,
     "rtfx": 279.53,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.2554858934169279,
     "cer": 0.17509684560044272,
     "rtfx": 240.19,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.3982698961937716,
     "cer": 0.27023506791540036,
     "rtfx": 117.42,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.17921270718232044,
     "cer": 0.11361240520964397,
     "rtfx": 246.35,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 62.23,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.0689358565476239,
     "cer": 0.03781667425382285,
     "done": 9,
     "total": 9,
     "ci": [
      0.06671,
      0.07123
     ]
    },
    "accented": {
     "wer": 0.15724236274886194,
     "cer": 0.114943741209564,
     "done": 1,
     "total": 1,
     "ci": [
      0.14212,
      0.1747
     ]
    },
    "noisy": {
     "wer": 0.10837323333895892,
     "cer": 0.06934025870942882,
     "done": 5,
     "total": 5,
     "ci": [
      0.10063,
      0.11708
     ]
    },
    "telephony": {
     "wer": 0.07892705430160657,
     "cer": 0.044658508720835155,
     "done": 8,
     "total": 8,
     "ci": [
      0.07429,
      0.08403
     ]
    },
    "callcenter": {
     "wer": 0.21951420256815624,
     "cer": 0.14301769861495423,
     "done": 6,
     "total": 6,
     "ci": [
      0.20717,
      0.23275
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
   "hallucination_rate": 0.9266666666666666,
   "inserted_wpm": 37.99,
   "arena_wer": 0.11539493572565193,
   "arena_cer": 0.07161120850628314,
   "arena_ci": [
    0.11193,
    0.11901
   ],
   "rank_range": [
    3,
    6
   ],
   "rtfx": 243.0,
   "audio_hours": 38.41
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
     "rtfx": 232.35,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03494353125349435,
     "cer": 0.012969998689899122,
     "rtfx": 234.64,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06218922893760067,
     "cer": 0.03469439945443696,
     "rtfx": 236.45,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.09323934636334508,
     "cer": 0.044898194834686884,
     "rtfx": 334.55,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.0616334122421373,
     "cer": 0.03692049815471027,
     "rtfx": 236.16,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11744255527187789,
     "cer": 0.08009318602616533,
     "rtfx": 235.24,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.11077560838301902,
     "cer": 0.06077554629278767,
     "rtfx": 177.52,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.02426285184994597,
     "cer": 0.011179239866804455,
     "rtfx": 216.74,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.13419953596287704,
     "cer": 0.08357965152457997,
     "rtfx": 239.95,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.18954642680853398,
     "cer": 0.1381504922644163,
     "rtfx": 211.85,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.15124737324209278,
     "cer": 0.10684018442224925,
     "rtfx": 261.6,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.021357519016968987,
     "cer": 0.014155988507434516,
     "rtfx": 238.85,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09069901790872328,
     "cer": 0.035651976029735265,
     "rtfx": 330.26,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.028551532033426183,
     "cer": 0.011912662596230422,
     "rtfx": 197.16,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.1253426743831861,
     "cer": 0.07792482795129699,
     "rtfx": 211.58,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.08683068017366136,
     "cer": 0.05254486907466114,
     "rtfx": 215.02,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1765282131661442,
     "cer": 0.12304002951484966,
     "rtfx": 199.59,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.024547353760445683,
     "cer": 0.00876028670029201,
     "rtfx": 199.46,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.06914407554066403,
     "cer": 0.03708311275807306,
     "rtfx": 214.77,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07105643994211289,
     "cer": 0.041187189535957666,
     "rtfx": 216.2,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11735893416927899,
     "cer": 0.08223574986164914,
     "rtfx": 200.12,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.15536332179930795,
     "cer": 0.08069217887489921,
     "rtfx": 317.61,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.10177831491712708,
     "cer": 0.055343965722447035,
     "rtfx": 195.39,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.10741643454038997,
     "cer": 0.06815768516060526,
     "rtfx": 197.66,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.1952482485531526,
     "cer": 0.12890418210693488,
     "rtfx": 213.96,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1422575976845152,
     "cer": 0.0915354085020344,
     "rtfx": 128.0,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.22844827586206898,
     "cer": 0.1635122671093894,
     "rtfx": 201.17,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.4162629757785467,
     "cer": 0.2983935992061031,
     "rtfx": 331.79,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.18232044198895028,
     "cer": 0.11881524807018737,
     "rtfx": 197.37,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 162.13,
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
     "wer": 0.08141312213182861,
     "cer": 0.04438880599881099,
     "done": 8,
     "total": 8,
     "ci": [
      0.07724,
      0.08614
     ]
    },
    "callcenter": {
     "wer": 0.2119923290679373,
     "cer": 0.14488639835920905,
     "done": 6,
     "total": 6,
     "ci": [
      0.19868,
      0.22554
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
   "hallucination_rate": 0.23666666666666666,
   "inserted_wpm": 40.42,
   "arena_wer": 0.11810995884591476,
   "arena_cer": 0.07510506966670888,
   "arena_ci": [
    0.1145,
    0.12187
   ],
   "rank_range": [
    5,
    6
   ],
   "rtfx": 219.0,
   "audio_hours": 38.41
  },
  {
   "model": "whisper-large-v3",
   "hf_id": "openai/whisper-large-v3",
   "params_b": 1.54,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.018204676892129745,
     "cer": 0.0059040170096438605,
     "rtfx": 106.97,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03444034440344403,
     "cer": 0.013657801650727107,
     "rtfx": 97.68,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.057567056516562784,
     "cer": 0.03316000340976899,
     "rtfx": 134.71,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.10370607711203673,
     "cer": 0.05178784496362727,
     "rtfx": 100.93,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.09105512343591478,
     "cer": 0.061732660893090825,
     "rtfx": 130.99,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11277092726383833,
     "cer": 0.07736678264054203,
     "rtfx": 106.69,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09621535863251363,
     "cer": 0.052469369710749024,
     "rtfx": 132.56,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.031235527196006793,
     "cer": 0.017090366287748307,
     "rtfx": 163.66,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.14728538283062645,
     "cer": 0.09748366521468575,
     "rtfx": 61.99,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.19179509680250095,
     "cer": 0.14687060478199718,
     "rtfx": 100.6,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.13890834635486826,
     "cer": 0.09726126826076734,
     "rtfx": 102.56,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01579871269748391,
     "cer": 0.01002453704674622,
     "rtfx": 123.24,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08511457731561718,
     "cer": 0.03367973905787757,
     "rtfx": 60.88,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.032729805013927575,
     "cer": 0.014666843642155562,
     "rtfx": 103.84,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12077368260737131,
     "cer": 0.07946003176283747,
     "rtfx": 132.56,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09580318379160636,
     "cer": 0.058535733007164074,
     "rtfx": 129.77,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.16320532915360503,
     "cer": 0.12152739346983951,
     "rtfx": 99.72,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.0241991643454039,
     "cer": 0.008594372179453146,
     "rtfx": 105.38,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.07051477307340846,
     "cer": 0.03962413975648491,
     "rtfx": 133.96,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.07930535455861071,
     "cer": 0.045904994882803724,
     "rtfx": 130.98,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.12284482758620689,
     "cer": 0.08507655414130234,
     "rtfx": 100.53,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.1806228373702422,
     "cer": 0.1006016250077529,
     "rtfx": 102.5,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.10255524861878453,
     "cer": 0.058132417451627165,
     "rtfx": 136.41,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.1129874651810585,
     "cer": 0.06752720998141758,
     "rtfx": 103.36,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.21855010660980811,
     "cer": 0.14923239809422975,
     "rtfx": 133.3,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.1451519536903039,
     "cer": 0.08916402486208531,
     "rtfx": 129.65,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.2421630094043887,
     "cer": 0.1750599520383693,
     "rtfx": 99.07,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.4491349480968858,
     "cer": 0.3159461638652856,
     "rtfx": 100.92,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.1797306629834254,
     "cer": 0.11641785969327031,
     "rtfx": 133.75,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 132.81,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.07694227492034147,
     "cer": 0.04562805686450924,
     "done": 9,
     "total": 9,
     "ci": [
      0.07425,
      0.07943
     ]
    },
    "accented": {
     "wer": 0.19179509680250095,
     "cer": 0.14687060478199718,
     "done": 1,
     "total": 1,
     "ci": [
      0.17607,
      0.20996
     ]
    },
    "noisy": {
     "wer": 0.1102840693842757,
     "cer": 0.0742902540285528,
     "done": 5,
     "total": 5,
     "ci": [
      0.10267,
      0.11902
     ]
    },
    "telephony": {
     "wer": 0.08511943694571972,
     "cer": 0.047704797440506,
     "done": 8,
     "total": 8,
     "ci": [
      0.07982,
      0.09086
     ]
    },
    "callcenter": {
     "wer": 0.22461969099431175,
     "cer": 0.15222460142244298,
     "done": 6,
     "total": 6,
     "ci": [
      0.21238,
      0.23742
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
   "hallucination_rate": 0.99,
   "inserted_wpm": 33.32,
   "arena_wer": 0.122753465256393,
   "arena_cer": 0.07944100299012453,
   "arena_ci": [
    0.11931,
    0.12641
   ],
   "rank_range": [
    6,
    8
   ],
   "rtfx": 114.2,
   "audio_hours": 38.41
  },
  {
   "model": "distil-large-v3.5",
   "hf_id": "distil-whisper/distil-large-v3.5",
   "params_b": 0.76,
   "license": "MIT",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.022881569021875787,
     "cer": 0.007735970840610525,
     "rtfx": 169.97,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.047355473554735544,
     "cer": 0.01879994759596489,
     "rtfx": 153.15,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06674136844316829,
     "cer": 0.03647235042683001,
     "rtfx": 229.21,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.11961977998504753,
     "cer": 0.05823486393903237,
     "rtfx": 142.34,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.07465336489685492,
     "cer": 0.04303715575421623,
     "rtfx": 217.0,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11114128958661525,
     "cer": 0.07693951046816823,
     "rtfx": 170.92,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09404027738683181,
     "cer": 0.04906403940886699,
     "rtfx": 273.78,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.030618020892296607,
     "cer": 0.01489493627282122,
     "rtfx": 322.56,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.1345707656612529,
     "cer": 0.08494088363410081,
     "rtfx": 91.5,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.17578017879668734,
     "cer": 0.12769573370839193,
     "rtfx": 166.71,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.12872460800689692,
     "cer": 0.08294912031404941,
     "rtfx": 169.66,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.01735907938365516,
     "cer": 0.011282847136295954,
     "rtfx": 203.08,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.09031388407471597,
     "cer": 0.03455207464158386,
     "rtfx": 80.49,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.03325208913649025,
     "cer": 0.012775418104592514,
     "rtfx": 171.83,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12549497410904661,
     "cer": 0.07421916357861302,
     "rtfx": 239.47,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.09652677279305355,
     "cer": 0.054991138513766503,
     "rtfx": 225.55,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.16202978056426331,
     "cer": 0.11396421324478878,
     "rtfx": 164.26,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.03064066852367688,
     "cer": 0.010187151579506238,
     "rtfx": 172.02,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.08071885470606154,
     "cer": 0.042323980942297515,
     "rtfx": 239.46,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.08350217076700434,
     "cer": 0.04707820573625222,
     "rtfx": 226.14,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11794670846394985,
     "cer": 0.08289983397897067,
     "rtfx": 164.24,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.19826989619377164,
     "cer": 0.10934689573900638,
     "rtfx": 148.61,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.09651243093922653,
     "cer": 0.05134831842758527,
     "rtfx": 286.95,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.12012534818941505,
     "cer": 0.06888770905229626,
     "rtfx": 171.82,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.2279926896131587,
     "cer": 0.13771836950767602,
     "rtfx": 239.34,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.14486251808972503,
     "cer": 0.08374728538978059,
     "rtfx": 225.89,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.23667711598746083,
     "cer": 0.1628850765541413,
     "rtfx": 164.12,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.4532871972318339,
     "cer": 0.2980834832227253,
     "rtfx": 148.26,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.18309737569060774,
     "cer": 0.1110449892882647,
     "rtfx": 286.59,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 219.33,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.07795798993651985,
     "cer": 0.04334662870451236,
     "done": 9,
     "total": 9,
     "ci": [
      0.07567,
      0.08034
     ]
    },
    "accented": {
     "wer": 0.17578017879668734,
     "cer": 0.12769573370839193,
     "done": 1,
     "total": 1,
     "ci": [
      0.16043,
      0.1942
     ]
    },
    "noisy": {
     "wer": 0.10920564492195013,
     "cer": 0.06777981075116205,
     "done": 5,
     "total": 5,
     "ci": [
      0.1019,
      0.11727
     ]
    },
    "telephony": {
     "wer": 0.08940796163150774,
     "cer": 0.04862741352268726,
     "done": 8,
     "total": 8,
     "ci": [
      0.08414,
      0.09462
     ]
    },
    "callcenter": {
     "wer": 0.22767370746703353,
     "cer": 0.14372781883581404,
     "done": 6,
     "total": 6,
     "ci": [
      0.21636,
      0.23955
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
   "inserted_wpm": 27.99,
   "arena_wer": 0.12379852770308061,
   "arena_cer": 0.07500300562533602,
   "arena_ci": [
    0.12044,
    0.1273
   ],
   "rank_range": [
    7,
    8
   ],
   "rtfx": 190.6,
   "audio_hours": 38.41
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
     "cer": 0.007574607031665274,
     "rtfx": 165.87,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.03723582690372358,
     "cer": 0.013723306694615486,
     "rtfx": 149.23,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.06127880103648715,
     "cer": 0.034316889316463095,
     "rtfx": 220.23,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.11513403823560825,
     "cer": 0.05623340133174243,
     "rtfx": 139.73,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.11358640514034495,
     "cer": 0.08369969563747041,
     "rtfx": 210.97,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.11668205768917378,
     "cer": 0.08057132393334554,
     "rtfx": 166.72,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.09613859105913662,
     "cer": 0.052681571302260956,
     "rtfx": 258.34,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.031081150620079247,
     "cer": 0.01620392697209783,
     "rtfx": 308.06,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.1499767981438515,
     "cer": 0.09911714374611076,
     "rtfx": 89.54,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.19552459825590962,
     "cer": 0.14825363338021566,
     "rtfx": 160.54,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.14521256533218385,
     "cer": 0.10813850070027295,
     "rtfx": 156.7,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.018236785644626486,
     "cer": 0.011534509154205902,
     "rtfx": 193.59,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.08395917581359523,
     "cer": 0.0322005613289843,
     "rtfx": 79.04,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.029770194986072425,
     "cer": 0.011879479692062649,
     "rtfx": 164.06,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.12168748096253426,
     "cer": 0.07596611964002117,
     "rtfx": 226.61,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.10752532561505065,
     "cer": 0.06762187663812685,
     "rtfx": 213.07,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.1994514106583072,
     "cer": 0.14978786201807784,
     "rtfx": 148.4,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.023502785515320333,
     "cer": 0.007997079904433236,
     "rtfx": 163.59,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.10082241851964667,
     "cer": 0.06723133933298041,
     "rtfx": 199.44,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.09001447178002894,
     "cer": 0.05636404483163176,
     "rtfx": 213.55,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.11853448275862069,
     "cer": 0.08186681424091496,
     "rtfx": 156.03,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3096885813148789,
     "cer": 0.19971469329529243,
     "rtfx": 126.38,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.10747582872928177,
     "cer": 0.0638623457000034,
     "rtfx": 265.41,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.1693941504178273,
     "cer": 0.10558800106185294,
     "rtfx": 144.63,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.301553457203777,
     "cer": 0.19891476971942826,
     "rtfx": 202.28,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.15108538350217077,
     "cer": 0.09113601757320088,
     "rtfx": 213.12,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.2435344827586207,
     "cer": 0.175650249031544,
     "rtfx": 155.82,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.5979238754325259,
     "cer": 0.43025491533833654,
     "rtfx": 125.58,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.2085635359116022,
     "cer": 0.1370251980820893,
     "rtfx": 238.66,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 109.65,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.08230293803063635,
     "cer": 0.04934687399619687,
     "done": 9,
     "total": 9,
     "ci": [
      0.07941,
      0.08532
     ]
    },
    "accented": {
     "wer": 0.19552459825590962,
     "cer": 0.14825363338021566,
     "done": 1,
     "total": 1,
     "ci": [
      0.18028,
      0.21335
     ]
    },
    "noisy": {
     "wer": 0.12072939551082969,
     "cer": 0.0826787677377123,
     "done": 5,
     "total": 5,
     "ci": [
      0.10704,
      0.14063
     ]
    },
    "telephony": {
     "wer": 0.10652931625949988,
     "cer": 0.0650964234735558,
     "done": 8,
     "total": 8,
     "ci": [
      0.08605,
      0.1425
     ]
    },
    "callcenter": {
     "wer": 0.2786758142044206,
     "cer": 0.18976152513440867,
     "done": 6,
     "total": 6,
     "ci": [
      0.22948,
      0.3523
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
   "hallucination_rate": 0.85,
   "inserted_wpm": 136.0,
   "arena_wer": 0.14336282190452476,
   "arena_cer": 0.09442894116512854,
   "arena_ci": [
    0.13022,
    0.16142
   ],
   "rank_range": [
    9,
    9
   ],
   "rtfx": 177.7,
   "audio_hours": 38.41
  },
  {
   "model": "whisper-small",
   "hf_id": "openai/whisper-small",
   "params_b": 0.24,
   "license": "Apache-2.0",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.03188332914256978,
     "cer": 0.010868327131900677,
     "rtfx": 423.8,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.06938387565693839,
     "cer": 0.03067819555439102,
     "rtfx": 395.64,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.0838994327333847,
     "cer": 0.044777573462255076,
     "rtfx": 561.14,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.16020506247997437,
     "cer": 0.08192525306955083,
     "rtfx": 397.63,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08027561717957389,
     "cer": 0.0471467850788843,
     "rtfx": 546.29,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.12890434026834702,
     "cer": 0.08658365378746262,
     "rtfx": 443.49,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.10378975920571151,
     "cer": 0.05757231274472654,
     "rtfx": 593.22,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03738486080378737,
     "cer": 0.01922149500516707,
     "rtfx": 727.15,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.1665893271461717,
     "cer": 0.11018201617921593,
     "rtfx": 251.31,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.26364284539022653,
     "cer": 0.2054735114861697,
     "rtfx": 289.07,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.21622932270057654,
     "cer": 0.1457078890604075,
     "rtfx": 297.09,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.02662375658279696,
     "cer": 0.016253171990017405,
     "rtfx": 514.86,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.10571923743500866,
     "cer": 0.04581658196161723,
     "rtfx": 239.28,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.05344707520891365,
     "cer": 0.023758959384125297,
     "rtfx": 428.86,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.18306427048431312,
     "cer": 0.11590788777130757,
     "rtfx": 571.21,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.1170767004341534,
     "cer": 0.06874516362547116,
     "rtfx": 544.04,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.21982758620689655,
     "cer": 0.15635491606714627,
     "rtfx": 414.95,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.04752785515320334,
     "cer": 0.018051499867268384,
     "rtfx": 428.81,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.11666159000913798,
     "cer": 0.06016410799364743,
     "rtfx": 574.92,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.09522431259044863,
     "cer": 0.05549037717480842,
     "rtfx": 548.52,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.14204545454545456,
     "cer": 0.0977679394945582,
     "rtfx": 417.48,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.2885813148788927,
     "cer": 0.1610122185697451,
     "rtfx": 404.02,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.11092886740331492,
     "cer": 0.06340327132995545,
     "rtfx": 621.84,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.2160515320334262,
     "cer": 0.12984470400849482,
     "rtfx": 431.0,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.4773073408467865,
     "cer": 0.35640550555849654,
     "rtfx": 242.84,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.23039073806078147,
     "cer": 0.1397369012256309,
     "rtfx": 543.84,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.3761755485893417,
     "cer": 0.31573510422431283,
     "rtfx": 241.65,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.6415224913494809,
     "cer": 0.4703219003907461,
     "rtfx": 242.88,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.2909185082872928,
     "cer": 0.20268983575339206,
     "rtfx": 399.27,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 226.03,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.0958128449573843,
     "cer": 0.054328401334839335,
     "done": 9,
     "total": 9,
     "ci": [
      0.09284,
      0.09881
     ]
    },
    "accented": {
     "wer": 0.26364284539022653,
     "cer": 0.2054735114861697,
     "done": 1,
     "total": 1,
     "ci": [
      0.21806,
      0.3261
     ]
    },
    "noisy": {
     "wer": 0.15792899100697064,
     "cer": 0.10209496318169156,
     "done": 5,
     "total": 5,
     "ci": [
      0.14623,
      0.17065
     ]
    },
    "telephony": {
     "wer": 0.11666404857478221,
     "cer": 0.0647448960477022,
     "done": 8,
     "total": 8,
     "ci": [
      0.11017,
      0.12279
     ]
    },
    "callcenter": {
     "wer": 0.3720610265278516,
     "cer": 0.2691223251935122,
     "done": 6,
     "total": 6,
     "ci": [
      0.33546,
      0.42016
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
   "hallucination_rate": 0.9566666666666667,
   "inserted_wpm": 39.5,
   "arena_wer": 0.18036912855373405,
   "arena_cer": 0.11972298529802923,
   "arena_ci": [
    0.17094,
    0.19216
   ],
   "rank_range": [
    10,
    11
   ],
   "rtfx": 421.7,
   "audio_hours": 38.41
  },
  {
   "model": "nemotron-3.5-asr-streaming-0.6b",
   "hf_id": "nvidia/nemotron-3.5-asr-streaming-0.6b",
   "params_b": 0.64,
   "license": "OpenMDW-1.1",
   "kind": "open",
   "sets": {
    "librispeech_clean/clean": {
     "wer": 0.03148101584108624,
     "cer": 0.010469663603918293,
     "rtfx": 671.85,
     "n": 1000
    },
    "librispeech_other/clean": {
     "wer": 0.07262663535726266,
     "cer": 0.029793877461897898,
     "rtfx": 675.0,
     "n": 1000
    },
    "fleurs_en/clean": {
     "wer": 0.09979690454513622,
     "cer": 0.050671602713201896,
     "rtfx": 690.28,
     "n": 647
    },
    "common_voice_en/clean": {
     "wer": 0.1760119619779985,
     "cer": 0.08952696201070012,
     "rtfx": 744.58,
     "n": 1000
    },
    "voxpopuli_en/clean": {
     "wer": 0.08712377409536692,
     "cer": 0.05033009366131949,
     "rtfx": 705.56,
     "n": 1000
    },
    "earnings22/clean": {
     "wer": 0.155032864359824,
     "cer": 0.10317605648131192,
     "rtfx": 678.78,
     "n": 997
    },
    "gigaspeech/clean": {
     "wer": 0.10540187824662862,
     "cer": 0.05380320828596691,
     "rtfx": 695.27,
     "n": 1000
    },
    "spgispeech/clean": {
     "wer": 0.03957186229609427,
     "cer": 0.01778390171087381,
     "rtfx": 735.9,
     "n": 1000
    },
    "ami_sdm/clean": {
     "wer": 0.13670533642691415,
     "cer": 0.08272401991288114,
     "rtfx": 641.2,
     "n": 991
    },
    "edacc/clean": {
     "wer": 0.23819448253167333,
     "cer": 0.17524613220815752,
     "rtfx": 708.67,
     "n": 995
    },
    "urgent2024/clean": {
     "wer": 0.20410582466727734,
     "cer": 0.14405176908371584,
     "rtfx": 735.82,
     "n": 1000
    },
    "minds14_tel/clean": {
     "wer": 0.026038619075482737,
     "cer": 0.016295115659669065,
     "rtfx": 725.58,
     "n": 558
    },
    "vystadial_voip/clean": {
     "wer": 0.11419218178316966,
     "cer": 0.05051960858681635,
     "rtfx": 742.41,
     "n": 1000
    },
    "librispeech_clean/noisy": {
     "wer": 0.06302228412256268,
     "cer": 0.02691133528006371,
     "rtfx": 606.38,
     "n": 300
    },
    "fleurs_en/noisy": {
     "wer": 0.22403289674078586,
     "cer": 0.15719957649550026,
     "rtfx": 682.99,
     "n": 300
    },
    "voxpopuli_en/noisy": {
     "wer": 0.15542691751085383,
     "cer": 0.1055640148773121,
     "rtfx": 672.81,
     "n": 300
    },
    "earnings22/noisy": {
     "wer": 0.24745297805642633,
     "cer": 0.18380372624976943,
     "rtfx": 600.67,
     "n": 298
    },
    "librispeech_clean/telephony": {
     "wer": 0.05605849582172702,
     "cer": 0.021933899654897795,
     "rtfx": 609.83,
     "n": 300
    },
    "fleurs_en/telephony": {
     "wer": 0.13113006396588486,
     "cer": 0.06667548967707781,
     "rtfx": 682.15,
     "n": 300
    },
    "voxpopuli_en/telephony": {
     "wer": 0.11027496382054992,
     "cer": 0.06115673597763411,
     "rtfx": 671.96,
     "n": 300
    },
    "earnings22/telephony": {
     "wer": 0.16849529780564262,
     "cer": 0.1138166389964951,
     "rtfx": 598.11,
     "n": 298
    },
    "common_voice_en/telephony": {
     "wer": 0.3055363321799308,
     "cer": 0.19673757985486573,
     "rtfx": 757.79,
     "n": 300
    },
    "gigaspeech/telephony": {
     "wer": 0.12405041436464088,
     "cer": 0.06518856054680858,
     "rtfx": 691.96,
     "n": 300
    },
    "librispeech_clean/callcenter": {
     "wer": 0.278899721448468,
     "cer": 0.2158879745155296,
     "rtfx": 617.46,
     "n": 300
    },
    "fleurs_en/callcenter": {
     "wer": 0.38014011574779166,
     "cer": 0.28388035997882477,
     "rtfx": 685.84,
     "n": 300
    },
    "voxpopuli_en/callcenter": {
     "wer": 0.31895803183791605,
     "cer": 0.25089238910661243,
     "rtfx": 678.36,
     "n": 300
    },
    "earnings22/callcenter": {
     "wer": 0.42496081504702193,
     "cer": 0.35391994097030066,
     "rtfx": 603.03,
     "n": 298
    },
    "common_voice_en/callcenter": {
     "wer": 0.5605536332179931,
     "cer": 0.45773119146560814,
     "rtfx": 773.09,
     "n": 300
    },
    "gigaspeech/callcenter": {
     "wer": 0.3361533149171271,
     "cer": 0.26702825857788964,
     "rtfx": 703.49,
     "n": 300
    },
    "noise_only/clean": {
     "wer": null,
     "cer": null,
     "rtfx": 977.28,
     "n": 300
    }
   },
   "tracks": {
    "clean": {
     "wer": 0.10041691479403463,
     "cer": 0.0542532650935635,
     "done": 9,
     "total": 9,
     "ci": [
      0.0977,
      0.10309
     ]
    },
    "accented": {
     "wer": 0.23819448253167333,
     "cer": 0.17524613220815752,
     "done": 1,
     "total": 1,
     "ci": [
      0.22179,
      0.25674
     ]
    },
    "noisy": {
     "wer": 0.1788081802195812,
     "cer": 0.12350608439727226,
     "done": 5,
     "total": 5,
     "ci": [
      0.16837,
      0.19082
     ]
    },
    "telephony": {
     "wer": 0.12947204610212856,
     "cer": 0.07404045361928308,
     "done": 8,
     "total": 8,
     "ci": [
      0.12337,
      0.13581
     ]
    },
    "callcenter": {
     "wer": 0.38327760536938627,
     "cer": 0.3048900191024609,
     "done": 6,
     "total": 6,
     "ci": [
      0.3671,
      0.39961
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
   "hallucination_rate": 0.043333333333333335,
   "inserted_wpm": 3.1,
   "arena_wer": 0.1892455429185238,
   "arena_cer": 0.13153621841513835,
   "arena_ci": [
    0.18496,
    0.1937
   ],
   "rank_range": [
    10,
    11
   ],
   "rtfx": 696.0,
   "audio_hours": 38.41
  }
 ]
};
