"""Backends that need their own virtualenv (see scripts/setup_envs.sh)."""

from __future__ import annotations

from .base import LANG_NAMES, SR, ASRModel, ModelSpec


def _unzipped(spec: ModelSpec) -> str:
    """Repos that ship the checkpoint as a zip: extract once next to the HF cache, return the model dir."""
    import zipfile
    from pathlib import Path

    from huggingface_hub import hf_hub_download

    out = Path.home() / ".cache" / "sttarena" / spec.hf_id.replace("/", "--")
    if not out.exists():
        with zipfile.ZipFile(hf_hub_download(spec.hf_id, spec.kwargs["zip"])) as z:
            z.extractall(out)
    return str(next(out.rglob("config.json")).parent)


class QwenASRPackage(ASRModel):
    """`qwen-asr` package: Qwen3-ASR checkpoints and fine-tunes such as Audar-ASR."""

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from qwen_asr import Qwen3ASRModel

        self.model = Qwen3ASRModel.from_pretrained(
            _unzipped(spec) if spec.kwargs.get("zip") else spec.hf_id, dtype="auto", device_map=device,
            max_inference_batch_size=spec.batch_size, max_new_tokens=440,
        )

    def transcribe(self, audios, language):
        res = self.model.transcribe(audio=[(a, SR) for a in audios], language=[LANG_NAMES[language]] * len(audios))
        return [r.text for r in res]


class FasterWhisper(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from faster_whisper import WhisperModel

        # INT8 kernels are disabled on Blackwell (sm_120) in CTranslate2; use fp16.
        self.model = WhisperModel(spec.hf_id, device=device, compute_type="float16")

    def transcribe(self, audios, language):
        out = []
        for a in audios:
            segs, _ = self.model.transcribe(a, language=language, beam_size=1, vad_filter=False,
                                            condition_on_previous_text=False)
            out.append(" ".join(s.text.strip() for s in segs))
        return out


class NeMoASR(ASRModel):
    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        import nemo.collections.asr as nemo_asr

        if spec.kwargs.get("nemo_file"):  # HF repos whose .nemo is not named after the repo
            from huggingface_hub import hf_hub_download

            path = hf_hub_download(spec.hf_id, spec.kwargs["nemo_file"])
            self.model = nemo_asr.models.ASRModel.restore_from(path, map_location=device).eval()
        else:
            self.model = nemo_asr.models.ASRModel.from_pretrained(spec.hf_id).to(device).eval()
        if spec.kwargs.get("decoder") and hasattr(self.model, "change_decoding_strategy"):
            self.model.change_decoding_strategy(decoder_type=spec.kwargs["decoder"])

    def transcribe(self, audios, language):
        kw = {"source_lang": language, "target_lang": language} if self.spec.kwargs.get("lang_kwargs") else {}
        out = self.model.transcribe(list(audios), batch_size=len(audios), verbose=False, **kw)
        if isinstance(out, tuple):
            out = out[0]
        return [o.text if hasattr(o, "text") else str(o) for o in out]


class OmniASR(ASRModel):
    LANG = {"ar": "arb_Arab", "en": "eng_Latn"}

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        from omnilingual_asr.models.inference.pipeline import ASRInferencePipeline

        import torch

        # the released checkpoints are fp32; the pipeline would default to bf16
        self.pipe = ASRInferencePipeline(model_card=spec.hf_id, dtype=torch.float32)

    def transcribe(self, audios, language):
        inp = [{"waveform": a, "sample_rate": SR} for a in audios]
        return self.pipe.transcribe(inp, lang=[self.LANG[language]] * len(audios), batch_size=len(audios))


class FunASRMLT(ASRModel):
    """Fun-ASR-MLT-Nano via the funasr package and the model code of github.com/FunAudioLLM/Fun-ASR,
    cloned into .venvs/funasr/src/Fun-ASR by scripts/setup_envs.sh."""

    LANG = {"ar": "阿拉伯语", "en": "英文"}  # the prompt names languages in Chinese

    def __init__(self, spec: ModelSpec, device: str = "cuda"):
        super().__init__(spec, device)
        import sys
        from pathlib import Path

        src = Path(sys.prefix) / "src" / "Fun-ASR"
        sys.path.insert(0, str(src))
        from model import FunASRNano

        self.model, self.kwargs = FunASRNano.from_pretrained(model=spec.hf_id, hub="hf", device=f"{device}:0")
        self.model.eval()
        self.kwargs["llm_kwargs"] = {"do_sample": False}

    def transcribe(self, audios, language):
        import torch

        out = []
        for a in audios:  # the reference inference code decodes one utterance at a time
            res = self.model.inference(data_in=[torch.from_numpy(a)], language=self.LANG[language], itn=False,
                                       **self.kwargs)
            out.append(res[0][0]["text"])
        return out
