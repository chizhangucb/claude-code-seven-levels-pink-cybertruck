# Curated prompt log — round 2 (pink Cybertruck)

The prompts that produced each level. Unlike round 1 (where prompts had to be mined back out of session transcripts), round 2 fixed every prompt **upfront** in [`docs/prompts/`](../prompts/) — verbatim-adapted from round 1, casual phrasing and typos included — so this log records what was actually sent and what happened, per level, per model. The operational record (session IDs, timestamps, costs, incidents) lives in [`docs/run-log.md`](../run-log.md).

## Setup

1. **Prompts fixed before the run.** Each level's prompt and its scripted "Ready follow-ups" were written in `docs/prompts/level-N.md` before any session started. Only scripted follow-ups were allowed, and only when their trigger condition was observed — extra prompts would contaminate the metrics and the A/B.
2. **Orchestrated headless run** (disclosed deviation from round 1's interactive sessions): one orchestrator session drove all levels via headless `claude -p` — a fresh session per level per model, `--resume` for follow-ups. Fable and Opus pipelines ran in parallel in separate trial dirs (`fable-trials/`, `opus-trials/`); levels within a pipeline ran strictly sequentially.
3. **Both models got identical inputs**: Fable 5 (`claude-fable-5`) and Opus 4.8 (`claude-opus-4-8`) received the same prompt text, the same assets in the trial dir, and the same pasted component source. This normalizes round 1's asymmetries at levels 3 and 4 (disclosed deviation, runbook §1) — internal A/B validity beats cross-experiment fidelity.
4. **Immutability enforced**: every level ≥ 2 prompt names the output file and puts "keep pink-cybertruck-web-level-(N−1).html untouched" up front, and each prior level was checksum-verified untouched after the session closed. Round 1's Opus overwrite at level 2 did **not** recur.

## Note on level order

The source video's ladder is: 1 plain prompt → 2 references → 3 design skills → 4 AI image/video → 5 UI snipping → 6 data → 7 design extraction. As in round 1, **levels 4 and 5 are swapped**: level 4 integrates a 21st.dev-style component (`DottedSurface`, changed from round 1's balloons-js — disclosed deviation) and level 5 slots in the OpenArt video. The docs follow what actually ran.

## Verbatim evidence

The demo HTML files in [`demos/`](../../demos/) are the exact bytes each session produced — copied byte-identical from the trial dirs, SHA-256s in [`demos/CHECKSUMS`](../../demos/CHECKSUMS) matching the hashes logged live in the run log. No rebuilds, no exceptions this round (round 1's Fable level 6 had to be reconstructed after a concurrent-session overwrite; the sequential rule here prevented a repeat). Kit and scrape evidence is preserved under [`process-artifacts/`](../../process-artifacts/).
