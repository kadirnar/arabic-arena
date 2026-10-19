"""Data audits: the human disagreement floor, variant-table collisions, reference errors and test/train
contamination. Arabic STT benchmarks go wrong mostly in the data (spelling noise between transcribers,
markup and wrong references, duplicated audio, test sets in training data); these measure and flag it.
`sttarena audit floor | variants | refs | contamination` runs them from the command line."""

from .contamination import MinHasher, exposure, id_overlap, overlap_summary, residual_screen, text_overlap
from .floor import FLOOR_PROFILES, floor_table, human_floor
from .references import (QURAN_OPENINGS, REASONS, Flag, ReferenceAudit, Thresholds, audit_references,
                         audit_sample, build_errata, id_segment, meta_segment, reference_error_rate,
                         write_errata)
from .variants import audit_variants, build_vocab, fold_stats, idempotence_failures, unintended_merges

__all__ = [
    "FLOOR_PROFILES", "human_floor", "floor_table",
    "build_vocab", "fold_stats", "unintended_merges", "idempotence_failures", "audit_variants",
    "REASONS", "QURAN_OPENINGS", "Thresholds", "Flag", "ReferenceAudit", "audit_references", "meta_segment",
    "id_segment", "audit_sample", "reference_error_rate", "build_errata", "write_errata",
    "MinHasher", "text_overlap", "overlap_summary", "id_overlap", "residual_screen", "exposure",
]
