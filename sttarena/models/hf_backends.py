"""Backends built on Hugging Face transformers (>= 5.13)."""

from __future__ import annotations

import numpy as np

from .base import LANG_NAMES, SR, ASRModel, ModelSpec, torch_dtype


class WhisperHF(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, WhisperForConditionalGeneration

        # some fine-tunes ship weights only; their tokenizer is the base model's
        self.processor = AutoProcessor.from_pretrained(spec.kwargs.get("processor", spec.hf_id))
        base = spec.kwargs.get("lora_base")  # LoRA fine-tunes: load the base model and merge the adapter
        self.model = WhisperForConditionalGeneration.from_pretrained(
            base or spec.hf_id, dtype=torch_dtype("float16"), attn_implementation="sdpa"
        )
        if base:
            from peft import PeftModel

            self.model = PeftModel.from_pretrained(self.model, spec.hf_id).merge_and_unload()
        self.model = self.model.to(device).eval()

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

        self.processor = AutoProcessor.from_pretrained(spec.kwargs.get("processor", spec.hf_id))
        if spec.kwargs.get("bnb"):  # bitsandbytes int8/int4 checkpoints are placed on load and cannot be moved
            self.model = CohereAsrForConditionalGeneration.from_pretrained(
                spec.hf_id, dtype=torch_dtype(), device_map=device
            ).eval()
        else:
            self.model = CohereAsrForConditionalGeneration.from_pretrained(
                spec.hf_id, dtype=torch_dtype()
            ).to(device).eval()

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
    # Buckwalter transliteration -> Arabic script, for models whose vocabulary is Buckwalter
    BUCKWALTER = str.maketrans({
        "'": "\u0621", ">": "\u0623", "&": "\u0624", "<": "\u0625", "}": "\u0626", "A": "\u0627", "b": "\u0628",
        "p": "\u0629", "t": "\u062A", "v": "\u062B", "j": "\u062C", "H": "\u062D", "x": "\u062E", "d": "\u062F",
        "*": "\u0630", "r": "\u0631", "z": "\u0632", "s": "\u0633", "$": "\u0634", "S": "\u0635", "D": "\u0636",
        "T": "\u0637", "Z": "\u0638", "E": "\u0639", "g": "\u063A", "_": "\u0640", "f": "\u0641", "q": "\u0642",
        "k": "\u0643", "l": "\u0644", "m": "\u0645", "n": "\u0646", "h": "\u0647", "w": "\u0648", "Y": "\u0649",
        "y": "\u064A", "F": "\u064B", "N": "\u064C", "K": "\u064D", "a": "\u064E", "u": "\u064F", "i": "\u0650",
        "~": "\u0651", "o": "\u0652", "`": "\u0670", "{": "\u0671", "P": "\u067E", "J": "\u0686", "V": "\u06A4",
        "G": "\u06AF", "|": "\u0622",
        "/": " ",  # word delimiter of the elgeish checkpoints, which batch_decode leaves in place
    })

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
        texts = self.processor.batch_decode(logits.argmax(-1))
        if self.spec.kwargs.get("buckwalter"):
            texts = [s.translate(self.BUCKWALTER) for s in texts]
        return texts


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


class MoonshineHF(ASRModel):
    """Moonshine and Moonshine-Streaming (encoder-decoder, no language token)."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = AutoModelForSpeechSeq2Seq.from_pretrained(spec.hf_id, dtype=torch_dtype("float32")).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(list(audios), sampling_rate=SR, return_tensors="pt", padding=True).to(self.device)
        # Cap the output length as the model card does (about 6.5 tokens per second of audio): like other
        # seq2seq models, Moonshine can fall into a repetition loop on short or noisy clips.
        max_new = int(max(len(a) for a in audios) / SR * 6.5) + 2
        with torch.inference_mode():
            ids = self.model.generate(**inputs, max_new_tokens=max_new)
        return self.processor.batch_decode(ids, skip_special_tokens=True)


class KyutaiSTT(ASRModel):
    """Kyutai STT (streaming decoder-only, 24 kHz input)."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import KyutaiSpeechToTextForConditionalGeneration, KyutaiSpeechToTextProcessor

        self.processor = KyutaiSpeechToTextProcessor.from_pretrained(spec.hf_id)
        self.model = KyutaiSpeechToTextForConditionalGeneration.from_pretrained(
            spec.hf_id, dtype=torch_dtype()
        ).to(device).eval()

    def transcribe(self, audios, language):
        import soxr
        import torch

        audios = [soxr.resample(a, SR, 24000) for a in audios]
        inputs = self.processor(audio=audios, padding=True, return_tensors="pt").to(self.device)
        with torch.inference_mode():
            ids = self.model.generate(**inputs)
        return self.processor.batch_decode(ids, skip_special_tokens=True)


class VibeVoiceASR(ASRModel):
    """VibeVoice-ASR (diarized JSON output; we keep the text only). 8-bit by default to fit 16 GB."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, BitsAndBytesConfig, VibeVoiceAsrForConditionalGeneration

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        # only the language model is quantized; the audio encoders and projector stay in bf16
        quant = BitsAndBytesConfig(load_in_8bit=True, llm_int8_skip_modules=[
            "model.acoustic_tokenizer_encoder", "model.semantic_tokenizer_encoder", "model.multi_modal_projector",
            "lm_head",
        ]) if spec.kwargs.get("int8") else None
        self.model = VibeVoiceAsrForConditionalGeneration.from_pretrained(
            spec.hf_id, dtype=torch_dtype(), device_map=device, quantization_config=quant
        ).eval()

    def transcribe(self, audios, language):
        import soxr
        import torch

        n = len(audios)
        if n == 1:  # a batch of one decodes garbage (transformers 5.19); run it as a batch of two
            audios = [audios[0], audios[0]]
        sr = self.processor.feature_extractor.sampling_rate  # 24 kHz
        inputs = self.processor.apply_transcription_request(audio=[soxr.resample(a, SR, sr) for a in audios]).to(
            self.device, self.model.dtype
        )
        with torch.inference_mode():
            out = self.model.generate(**inputs, max_new_tokens=600, do_sample=False)
        raw = self.processor.batch_decode(out[:, inputs["input_ids"].shape[1]:], skip_special_tokens=True)
        return [self._content(r) for r in raw][:n]

    @staticmethod
    def _content(raw: str) -> str:
        """Join the "Content" fields of the segment list; tolerant of a truncated last segment, which the
        processor's json.loads-based parser rejects."""
        import re

        parts = re.findall(r'"Content"\s*:\s*"((?:[^"\\]|\\.)*)', raw)
        return " ".join(p.replace('\\"', '"') for p in parts) if parts else raw.strip()


class FunASRNano(ASRModel):
    """Fun-ASR-Nano (transformers port): zh / en / ja only."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = AutoModelForSpeechSeq2Seq.from_pretrained(spec.hf_id, dtype=torch_dtype()).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor.apply_transcription_request(
            audio=[np.asarray(a) for a in audios], language=language,
            processor_kwargs={"return_tensors": "pt", "audio_kwargs": {"sampling_rate": SR}},
        ).to(self.device, self.model.dtype)
        with torch.inference_mode():
            out = self.model.generate(**inputs, max_new_tokens=440, do_sample=False)
        return [t.strip() for t in self.processor.batch_decode(out[:, inputs["input_ids"].shape[1]:],
                                                                 skip_special_tokens=True)]


class Phi4Multimodal(ASRModel):
    """Phi-4-multimodal-instruct (native transformers port) with its speech LoRA."""

    PROMPT = "<|user|><|audio|>Transcribe the audio clip into text.<|end|><|assistant|>"

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForCausalLM, AutoProcessor

        rev = spec.kwargs.get("revision")
        self.processor = AutoProcessor.from_pretrained(spec.hf_id, revision=rev)
        self.processor.tokenizer.padding_side = "left"
        self.model = AutoModelForCausalLM.from_pretrained(spec.hf_id, revision=rev, dtype=torch_dtype()).to(device)
        self.model.load_adapter(spec.hf_id, adapter_name="speech",
                                adapter_kwargs={"subfolder": "speech-lora", "revision": rev})
        self.model.set_adapter("speech")
        self.model.eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(text=[self.PROMPT] * len(audios), audio=[np.asarray(a) for a in audios],
                                sampling_rate=SR, return_tensors="pt", padding=True).to(self.device)
        with torch.inference_mode():
            out = self.model.generate(**inputs, max_new_tokens=440, do_sample=False)
        return [t.strip() for t in self.processor.batch_decode(out[:, inputs["input_ids"].shape[1]:],
                                                                 skip_special_tokens=True)]


class ParakeetTDTHF(ASRModel):
    """Parakeet TDT checkpoints in transformers format (e.g. community re-trainings)."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, GenerationConfig, ParakeetForTDT

        base = spec.kwargs.get("processor", spec.hf_id)  # re-trainings may ship weights + tokenizer only
        self.processor = AutoProcessor.from_pretrained(base)
        self.model = ParakeetForTDT.from_pretrained(spec.hf_id, dtype=torch_dtype()).to(device).eval()
        if base != spec.hf_id:
            self.model.generation_config = GenerationConfig.from_pretrained(base)

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(list(audios), sampling_rate=SR, return_tensors="pt", padding=True).to(
            self.device, dtype=self.model.dtype
        )
        with torch.inference_mode():
            out = self.model.generate(**inputs)
        seqs = out.sequences if hasattr(out, "sequences") else out
        return self.processor.batch_decode(seqs, skip_special_tokens=True)
