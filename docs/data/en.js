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
    1,
    1
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
      "total": 9
     },
     "accented": {
      "wer": 0.12449953381231832,
      "cer": 0.09566405217238036,
      "wer_arith": 0.12449953381231832,
      "done": 1,
      "total": 1
     },
     "noisy": {
      "wer": 0.07036812009415071,
      "cer": 0.04594457561732658,
      "wer_arith": 0.08475812065053075,
      "done": 5,
      "total": 5
     },
     "telephony": {
      "wer": 0.04714847284183929,
      "cer": 0.027725144949400413,
      "wer_arith": 0.06164571817818608,
      "done": 8,
      "total": 8
     },
     "callcenter": {
      "wer": 0.1532973288163293,
      "cer": 0.10566692736848839,
      "wer_arith": 0.16894402859193403,
      "done": 6,
      "total": 6
     }
    },
    "arena": 0.0681827212698253,
    "arena_arith": 0.08990460056329558,
    "arena_cer": 0.042464471978716,
    "arena_strict": 0.07369399731585759,
    "zero_shot": 0.0681827212698253,
    "arena_real": 0.049213326370366794,
    "exposure": 0,
    "incomplete": [],
    "term_recall": null,
    "term_n": 0,
    "boh_share": 0.0,
    "rank": 1
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
   "ami_sdm/clean",
   "common_voice_en/callcenter",
   "common_voice_en/clean",
   "common_voice_en/telephony",
   "earnings22/callcenter",
   "earnings22/clean",
   "earnings22/noisy",
   "earnings22/telephony",
   "edacc/clean",
   "fleurs_en/callcenter",
   "fleurs_en/clean",
   "fleurs_en/noisy",
   "fleurs_en/telephony",
   "gigaspeech/callcenter",
   "gigaspeech/clean",
   "gigaspeech/telephony",
   "librispeech_clean/callcenter",
   "librispeech_clean/clean",
   "librispeech_clean/noisy",
   "librispeech_clean/telephony",
   "librispeech_other/clean",
   "minds14_tel/clean",
   "spgispeech/clean",
   "urgent2024/clean",
   "voxpopuli_en/callcenter",
   "voxpopuli_en/clean",
   "voxpopuli_en/noisy",
   "voxpopuli_en/telephony",
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
  "bag_of_hallucinations": [],
  "num_ranked": 1
 }
};
