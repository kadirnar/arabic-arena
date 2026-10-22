"""Backends built on Hugging Face transformers (>= 5.13)."""

from __future__ import annotations

import numpy as np

from .base import LANG_NAMES, NATIVE, SR, ASRModel, ModelSpec


class WhisperHF(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoProcessor, WhisperForConditionalGeneration

        # some fine-tunes ship weights only; their tokenizer is the base model's
        self.processor = AutoProcessor.from_pretrained(spec.kwargs.get("processor", spec.hf_id))
        base = spec.kwargs.get("lora_base")  # LoRA fine-tunes: load the base model and merge the adapter
        self.model = WhisperForConditionalGeneration.from_pretrained(
            base or spec.hf_id, dtype=NATIVE, attn_implementation="sdpa"
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
                feats.to(self.device, self.model.dtype), language=language, task="transcribe",
                num_beams=self.spec.kwargs.get("num_beams", 1),
            )
        return self.processor.batch_decode(ids, skip_special_tokens=True)


class Qwen3ASRHF(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForMultimodalLM, AutoProcessor

        # kwargs.processor: take the processor (chat template) from another repo, e.g. the base model when a
        # fine-tune saved a template that drops the final message
        self.processor = AutoProcessor.from_pretrained(spec.kwargs.get("processor", spec.hf_id))
        self.model = AutoModelForMultimodalLM.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()

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
        self.model = CohereAsrForConditionalGeneration.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()

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
            spec.hf_id, dtype=NATIVE
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
        self.model = SeamlessM4Tv2ForSpeechToText.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(audio=list(audios), sampling_rate=SR, return_tensors="pt").to(self.device)
        inputs["input_features"] = inputs["input_features"].to(self.model.dtype)
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
        with torch.inference_mode():
            logits = self.model(**{k: v.to(self.device) for k, v in inputs.items()}).logits
        texts = self.processor.batch_decode(logits.argmax(-1))
        if self.spec.kwargs.get("buckwalter"):
            texts = [s.translate(self.BUCKWALTER) for s in texts]
        return texts


class GemmaAudio(ASRModel):
    # The ASR prompt of the Gemma 4 model card, with the text before the audio as the card shows it.
    PROMPT = ("Transcribe the following speech segment in {lang} into {lang} text.\n\n"
              "Follow these specific instructions for formatting the answer:\n"
              "* Only output the transcription, with no newlines.\n"
              "* When transcribing numbers, write the digits, i.e. write 1.7 and not one point seven, "
              "and write 3 instead of three.")

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForMultimodalLM, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id, padding_side="left")
        self.model = AutoModelForMultimodalLM.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()

    def transcribe(self, audios, language):
        import torch

        prompt = self.PROMPT.format(lang=LANG_NAMES[language])
        msgs = [[{"role": "user", "content": [{"type": "text", "text": prompt},
                                              {"type": "audio", "audio": np.asarray(a)}]}] for a in audios]
        inputs = self.processor.apply_chat_template(
            msgs, add_generation_prompt=True, tokenize=True, return_dict=True, return_tensors="pt", padding=True,
            enable_thinking=False,
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
        self.model = AutoModelForRNNT.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()

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
        self.model = AutoModelForSpeechSeq2Seq.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()

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
            spec.hf_id, dtype=NATIVE
        ).to(device).eval()

    def transcribe(self, audios, language):
        import soxr
        import torch

        audios = [soxr.resample(a, SR, 24000) for a in audios]
        inputs = self.processor(audio=audios, padding=True, return_tensors="pt").to(self.device)
        with torch.inference_mode():
            ids = self.model.generate(**inputs)
        return self.processor.batch_decode(ids, skip_special_tokens=True)


class FunASRNano(ASRModel):
    """Fun-ASR-Nano (transformers port): zh / en / ja only."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor

        self.processor = AutoProcessor.from_pretrained(spec.hf_id)
        self.model = AutoModelForSpeechSeq2Seq.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()

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
        self.model = AutoModelForCausalLM.from_pretrained(spec.hf_id, revision=rev, dtype=NATIVE).to(device)
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
        self.model = ParakeetForTDT.from_pretrained(spec.hf_id, dtype=NATIVE).to(device).eval()
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


class JaisASR(ASRModel):
    """IFM Jais-ASR (custom code, `trust_remote_code`; its own env with transformers==5.16.1).

    The language is "ar" (MSA and all 19 dialects); the model's non-speech answer
    ([IFM-NoTranscript], `refused=True`) becomes an empty transcript.
    """

    LANG = {"ar": "ar", "en": "en"}

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from transformers import AutoModelForCausalLM, AutoProcessor

        rev = spec.kwargs.get("revision")
        self.processor = AutoProcessor.from_pretrained(spec.hf_id, trust_remote_code=True, revision=rev)
        self.processor.tokenizer.padding_side = "left"
        self.model = AutoModelForCausalLM.from_pretrained(
            spec.hf_id, trust_remote_code=True, revision=rev, dtype=NATIVE
        ).to(device).eval()
        self.prompt = self.processor.tokenizer.apply_chat_template(
            [{"role": "user", "content": [{"type": "audio"}]}], tokenize=False, add_generation_prompt=True,
            code_switch=spec.kwargs.get("code_switch", False),
        )

    def transcribe(self, audios, language):
        import torch

        inputs = self.processor(text=[self.prompt] * len(audios), audio=list(audios), sampling_rate=[SR] * len(audios),
                                padding=True, return_tensors="pt").to(self.device)
        with torch.inference_mode():
            out = self.model.generate(**inputs, do_sample=False, max_new_tokens=440, language=self.LANG[language])
        res = self.processor.post_process_transcription(out, input_lengths=inputs["input_ids"].shape[1])
        return ["" if r.refused else r.text for r in res]
