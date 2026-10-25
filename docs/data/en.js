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
    1,
    2
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
    "boh_share": 0.41,
    "rank": 4,
    "arena_ci": [
     0.0649,
     0.07323
    ],
    "rank_set": [
     1,
     5
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
    1,
    2
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
    "boh_share": 0.38333333333333336,
    "rank": 5,
    "arena_ci": [
     0.06526,
     0.07328
    ],
    "rank_set": [
     1,
     5
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
    3,
    3
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
    "boh_share": 0.44333333333333336,
    "rank": 3,
    "arena_ci": [
     0.06436,
     0.07183
    ],
    "rank_set": [
     1,
     5
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
    4,
    8
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
    "boh_share": 0.4266666666666667,
    "rank": 1,
    "arena_ci": [
     0.06313,
     0.0707
    ],
    "rank_set": [
     1,
     5
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
    4,
    9
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
    "boh_share": 0.62,
    "rank": 2,
    "arena_ci": [
     0.06371,
     0.07147
    ],
    "rank_set": [
     1,
     5
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
    4,
    6
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
    "boh_share": 0.15666666666666668,
    "rank": 6,
    "arena_ci": [
     0.07606,
     0.08468
    ],
    "rank_set": [
     6,
     8
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
    6,
    8
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
    "boh_share": 0.27666666666666667,
    "rank": 8,
    "arena_ci": [
     0.07894,
     0.08719
    ],
    "rank_set": [
     6,
     8
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
    7,
    8
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
    "boh_share": 0.23666666666666666,
    "rank": 7,
    "arena_ci": [
     0.07846,
     0.0869
    ],
    "rank_set": [
     6,
     8
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
    8,
    9
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
    "boh_share": 0.82,
    "rank": 9,
    "arena_ci": [
     0.08154,
     0.09082
    ],
    "rank_set": [
     9,
     9
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
    10,
    10
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
    "boh_share": 0.72,
    "rank": 10,
    "arena_ci": [
     0.08577,
     0.09545
    ],
    "rank_set": [
     10,
     10
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
    11,
    11
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
    "boh_share": 0.08333333333333333,
    "rank": 11,
    "arena_ci": [
     0.11215,
     0.12386
    ],
    "rank_set": [
     11,
     11
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
    "thank you",
    342,
    10
   ],
   [
    "of the",
    207,
    11
   ],
   [
    "i am",
    179,
    11
   ],
   [
    "and the",
    131,
    11
   ],
   [
    "going to",
    98,
    10
   ],
   [
    "the other",
    82,
    5
   ],
   [
    "it is",
    73,
    10
   ],
   [
    "in the",
    71,
    11
   ],
   [
    "i am not",
    70,
    10
   ],
   [
    "and the other",
    70,
    2
   ],
   [
    "to the",
    68,
    11
   ],
   [
    "the other side",
    62,
    2
   ],
   [
    "is a",
    62,
    10
   ],
   [
    "not sure",
    62,
    9
   ],
   [
    "the other side of the",
    61,
    2
   ],
   [
    "i am not sure",
    60,
    9
   ],
   [
    "and the other side of the",
    59,
    2
   ],
   [
    "i think",
    57,
    11
   ],
   [
    "that is",
    57,
    10
   ],
   [
    "we are",
    54,
    11
   ],
   [
    "and then",
    50,
    8
   ],
   [
    "i am going",
    49,
    9
   ],
   [
    "i am going to",
    48,
    9
   ],
   [
    "to go",
    44,
    8
   ],
   [
    "to be",
    43,
    11
   ],
   [
    "on the",
    43,
    11
   ],
   [
    "do not",
    40,
    10
   ],
   [
    "is not",
    36,
    9
   ],
   [
    "have done",
    34,
    11
   ],
   [
    "is the",
    34,
    11
   ]
  ],
  "num_ranked": 11,
  "effective_weights": {
   "geometric": {
    "clean": 0.25746366019843564,
    "accented": 0.04455090448776078,
    "noisy": 0.18531371844818045,
    "telephony": 0.1779127147231939,
    "callcenter": 0.3347590021424303
   },
   "arithmetic": {
    "clean": 0.1443390696102063,
    "accented": 0.05338101749524494,
    "noisy": 0.1611448545084039,
    "telephony": 0.11019753960053862,
    "callcenter": 0.5309375187856062
   }
  },
  "leave_one_set_out": {
   "mean_moved": 0.86,
   "max_shift": 2,
   "sets": {
    "librispeech_clean/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "librispeech_other/clean": {
     "moved": 5,
     "max_shift": 2
    },
    "fleurs_en/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "common_voice_en/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "voxpopuli_en/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "earnings22/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "gigaspeech/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "spgispeech/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "ami_sdm/clean": {
     "moved": 2,
     "max_shift": 1
    },
    "edacc/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "urgent2024/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "librispeech_clean/noisy": {
     "moved": 0,
     "max_shift": 0
    },
    "fleurs_en/noisy": {
     "moved": 0,
     "max_shift": 0
    },
    "voxpopuli_en/noisy": {
     "moved": 2,
     "max_shift": 1
    },
    "earnings22/noisy": {
     "moved": 0,
     "max_shift": 0
    },
    "minds14_tel/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "vystadial_voip/clean": {
     "moved": 0,
     "max_shift": 0
    },
    "librispeech_clean/telephony": {
     "moved": 2,
     "max_shift": 1
    },
    "fleurs_en/telephony": {
     "moved": 0,
     "max_shift": 0
    },
    "voxpopuli_en/telephony": {
     "moved": 4,
     "max_shift": 1
    },
    "earnings22/telephony": {
     "moved": 0,
     "max_shift": 0
    },
    "common_voice_en/telephony": {
     "moved": 2,
     "max_shift": 1
    },
    "gigaspeech/telephony": {
     "moved": 0,
     "max_shift": 0
    },
    "librispeech_clean/callcenter": {
     "moved": 0,
     "max_shift": 0
    },
    "fleurs_en/callcenter": {
     "moved": 0,
     "max_shift": 0
    },
    "voxpopuli_en/callcenter": {
     "moved": 2,
     "max_shift": 1
    },
    "earnings22/callcenter": {
     "moved": 0,
     "max_shift": 0
    },
    "common_voice_en/callcenter": {
     "moved": 0,
     "max_shift": 0
    },
    "gigaspeech/callcenter": {
     "moved": 0,
     "max_shift": 0
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
