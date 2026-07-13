# Level 5 — AI-generated video (OpenArt)

**Technique:** Generate media you don't have. Image model → product shot; video model → a product film from a start/end frame (same frame as both, for a seamless loop). Then just hand Claude the file — "be relevant" is the only art direction.
**Artifacts:** [Fable demo](../../demos/fable/level-5.html) · [Opus demo](../../demos/opus/level-5.html)

*(Note: levels 4 and 5 are intentionally swapped vs the source video, carried over from round 1.)*

## The prompt (identical for both models, fixed upfront)

> On the pink-cybertruck-web-level-4 file, please help Slot in the attached Pink Cybertruck video and be relevant. @pink-cybertruck-video-by-openart.mp4
> keep pink-cybertruck-web-level-4.html untouched. Name it as pink-cybertruck-web-level-5

## Pre-prompt setup

`pink-cybertruck-video-by-openart.mp4` (2.55 MB, ~5 s loop; Nano Banana image → Kling/Seedance video per the asset checklist) at the trial-dir root, attached via `@` mention. Autoplay-muted behavior pre-verified in a browser at preflight.

**Outcome (Fable):** A product-film section with muted + loop + `playsinline` autoplay gated by an IntersectionObserver; verified playing in a real browser. 1 prompt, 27 turns, ~207 s, $3.43.

**Outcome (Opus):** Same core pattern plus a play/pause toggle — and it **generated a poster frame again** (base64 inline, plus `film.png` on disk), unprompted, exactly as it did in round 1. 1 prompt, 32 turns, ~192 s, $2.23.

## Follow-ups

None scripted, none needed — one prompt did it for both models, same as round 1.

## Notable

- Both models knew browser autoplay policy cold (unmuted autoplay is blocked; muted + `playsinline` + IntersectionObserver is the pattern) — round 1's finding, reproduced.
- Opus's unprompted poster frame is now a 2-for-2 behavioral signature across rounds.
- Cheapest, fastest level in both runs again: the leverage is in the asset, not the integration. The `.mp4` ships alongside the HTML in `demos/` (it's in `demos/CHECKSUMS`) so the film doesn't 404.

## What this level taught

- AI-generated media is a drop-in asset class: five seconds of looping product film transforms a page for one cheap prompt.
- The models handle the boring-but-critical platform details (autoplay policy) without being told.
