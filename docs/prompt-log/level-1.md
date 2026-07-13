# Level 1 — Grab and go

**Technique:** Treat Claude like a chatbot. No references, no skills, no assets — just ask.
**Artifacts:** [Fable demo](../../demos/fable/level-1.html) · [Opus demo](../../demos/opus/level-1.html)

## The prompt (identical for both models, fixed upfront)

> Claude, I want you to build for me a simple website or just a nice looking website that is cool about Cybertrucks that are pink. Build me one of those website.
>
> name the file as pink-cybertruck-web-level-1.html

## Pre-prompt setup

All run assets (reference PNGs, MP4, component source, skill zip) already sat in the trial dir even though this level uses none of them — round 1's Fable spontaneously noticed the reference PNGs in the folder, so folder contents were kept identical across models to control that variable.

**Outcome (Fable):** A light rose-palette one-pager with a frosted-glass nav — and an unprompted fan-concept disclaimer ("this is not a Tesla product"). One prompt, 2 turns, ~100 s, $1.12.

**Outcome (Opus):** A dark neon magenta/steel page with a color-picker repaint gimmick. Same zero-context prompt, 2 turns, ~102 s, $0.57.

## Follow-ups

None scripted, none needed.

## Notable

- The two models diverged instantly on mood from the same bare prompt: Fable went light and reassuring, Opus went dark and gimmicky.
- Both were dramatically faster and cheaper than round 1's level 1 (Fable took ~6.5 min / $5.26 there) — headless one-shot sessions don't linger.

## What this level taught

- A bare prompt still gets you a competent but generic "AI website" — the baseline the whole ladder climbs away from.
- Naming the output file in the prompt is the cheapest way to keep levels immutable.
