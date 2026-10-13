"""Backends built on Hugging Face transformers (>= 5.13)."""

from __future__ import annotations

import numpy as np

from .base import LANG_NAMES, SR, ASRModel, ModelSpec, torch_dtype


class WhisperHF(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, WhisperForConditionalGeneration

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = WhisperForConditionalGeneration.from_pretrained(
            spec.hf_id, dtype=torch_dtype("float16"), attn_implementation="sdpa"
        ).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        feats = self.processor(audios, sampling_rate=SR, return_tensors="pt").input_features
        with torch.inference_mode():
            ids = self.model.generate(
                feats.to(self.device, torch.float16), language=language, task="transcribe",
                num_beams=self.spec.kwargs.get("num_beams", 1),
            )
        return self.processor.batch_decode(ids, skip_special_tokens=True)


class Qwen3ASRHF(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForMultimodalLM, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = AutoModelForMultimodalLM.from_pretrained(spec.hf_id, dtype=torch_dtype()).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor.apply_transcription_request(
            list(audios), language=[LANG_NAMES[language]] * len(audios)
        ).to(self.device, self.model.dtype)
        with torch.inference_mode():
            out = self.model.generate(**inputs, max_new_tokens=440, do_sample=False)
        gen = out[:, inputs["input_ids"].shape[1]:]
        return self.processor.decode(gen, return_format="transcription_only")


class CohereASR(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, CohereAsrForConditionalGeneration

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = CohereAsrForConditionalGeneration.from_pretrained(spec.hf_id, dtype=torch_dtype()).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(list(audios), sampling_rate=SR, return_tensors="pt", language=language,
                                punctuation=False)
        chunk_index = inputs.pop("audio_chunk_index", None)
        inputs = inputs.to(self.device, dtype=self.model.dtype)
        with torch.inference_mode():
            out = self.model.generate(**inputs, max_new_tokens=440, do_sample=False)
        kw = {"audio_chunk_index": chunk_index, "language": language} if chunk_index is not None else {}
        texts = self.processor.decode(out, skip_special_tokens=True, **kw)
        return [texts] if isinstance(texts, str) else list(texts)


class VoxtralRealtime(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, VoxtralRealtimeForConditionalGeneration

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = VoxtralRealtimeForConditionalGeneration.from_pretrained(
            spec.hf_id, dtype=torch_dtype()
        ).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        # Batches are length-sorted by the runner, so right-padding with silence is short.
        inputs = self.processor(list(audios), return_tensors="pt", padding=True).to(self.device, dtype=self.model.dtype)
        with torch.inference_mode():
            ids = self.model.generate(**inputs, do_sample=False)
        return self.processor.batch_decode(ids, skip_special_tokens=True)


class SeamlessM4T(ASRModel):
    LANG = {"ar": "arb", "en": "eng"}

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, SeamlessM4Tv2ForSpeechToText

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = SeamlessM4Tv2ForSpeechToText.from_pretrained(spec.hf_id, dtype=torch_dtype("float16")).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(audio=list(audios), sampling_rate=SR, return_tensors="pt").to(self.device)
        inputs["input_features"] = inputs["input_features"].half()
        with torch.inference_mode():
            ids = self.model.generate(**inputs, tgt_lang=self.LANG[language], max_new_tokens=440)
        return self.processor.batch_decode(ids, skip_special_tokens=True)


class CTCHF(ASRModel):
    """wav2vec2 / w2v-bert / MMS CTC models (greedy decoding)."""

    MMS_LANG = {"ar": "ara", "en": "eng"}

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForCTC, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = AutoModelForCTC.from_pretrained(spec.hf_id).to(device).eval()
        self._lang = None

    def transcribe(self, audios, language):
        import torch

        if self.spec.kwargs.get("mms") and self._lang != language:
            self.processor.tokenizer.set_target_lang(self.MMS_LANG[language])
            self.model.load_adapter(self.MMS_LANG[language])
            self._lang = language
        inputs = self.processor(list(audios), sampling_rate=SR, return_tensors="pt", padding=True)
        with torch.inference_mode(), torch.autocast("cuda", dtype=torch.float16):
            logits = self.model(**{k: v.to(self.device) for k, v in inputs.items()}).logits
        return self.processor.batch_decode(logits.argmax(-1))


class GemmaAudio(ASRModel):
    PROMPT = {
        "ar": "Transcribe this audio verbatim in Arabic script. Output only the spoken words, without translation.",
        "en": "Transcribe the audio verbatim, outputting only spoken words in sequence.",
    }

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForMultimodalLM, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id, padding_side="left")
        self.model = AutoModelForMultimodalLM.from_pretrained(spec.hf_id, dtype=torch_dtype()).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        msgs = [[{"role": "user", "content": [{"type": "audio", "audio": np.asarray(a)},
                                              {"type": "text", "text": self.PROMPT[language]}]}] for a in audios]
        inputs = self.processor.apply_chat_template(
            msgs, add_generation_prompt=True, tokenize=True, return_dict=True, return_tensors="pt", padding=True,
        ).to(self.device, dtype=self.model.dtype)
        with torch.inference_mode():
            out = self.model.generate(**inputs, max_new_tokens=440, do_sample=False)
        return [t.strip() for t in self.processor.batch_decode(out[:, inputs["input_ids"].shape[1]:],
                                                                 skip_special_tokens=True)]


class NemotronRNNT(ASRModel):
    """NVIDIA Nemotron-3.5 ASR (cache-aware FastConformer-RNNT) via transformers, language-conditioned."""

    LOCALE = {"ar": "ar-AR", "en": "en-US"}

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForRNNT, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = AutoModelForRNNT.from_pretrained(spec.hf_id, dtype=torch_dtype()).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(list(audios), sampling_rate=SR, language=self.LOCALE[language], return_tensors="pt",
                                padding=True).to(self.device, dtype=self.model.dtype)
        with torch.inference_mode():
            out = self.model.generate(**inputs, return_dict_in_generate=True)
        texts = self.processor.batch_decode(out.sequences, skip_special_tokens=True)
        return [texts] if isinstance(texts, str) else list(texts)
