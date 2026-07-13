# Level 4 — UI snipping (21st.dev-style component)

**Technique:** Copy a production-grade component from a component library and hand it to Claude to integrate. You're not asking it to invent delight — you're snipping delight that already exists.
**Artifacts:** [Fable demo](../../demos/fable/level-4.html) · [Opus demo](../../demos/opus/level-4.html)

*(Note: levels 4 and 5 are intentionally swapped vs the source video, carried over from round 1. The component changed from round 1's balloons-js to `DottedSurface` — a React + three.js animated dot-wave surface, always on, no trigger — a disclosed deviation that retires round 1's auto-trigger follow-up.)*

## The prompt (identical for both models, fixed upfront)

Preceded in the same message by the pasted component source from [`references/dotted-surface-component.tsx.txt`](../../references/dotted-surface-component.tsx.txt) — the **same paste for both models** (round 1 was asymmetric: Fable got screenshots, Opus got source; normalized this round, disclosed deviation). The source is React + `next-themes` + Tailwind + `three`; adapting that into a static vanilla-HTML page is the level's actual work.

> Hey there. I'd like you to integrate this dotted surface component at the bottom of the page. It should always be there, no trigger needed. Make sure you keep the current index HTML file. keep pink-cybertruck-web-level-3.html untouched. Name it as pink-cybertruck-web-level-4.html

## Follow-ups

Scripted follow-up #1 — **sent to both models**, because both reproduced the source's `fixed inset-0` full-viewport wrapper instead of scoping the surface to the bottom (the exact condition the prompt doc predicted; Opus's version "reads as a floor"):

> The dotted surface should show at the bottom part of the page, not cover the whole page.

Scripted follow-up #2 (invisible dots against the background) was **not needed** by either model.

**Outcome (Fable):** three.js via CDN; after the follow-up, the surface sits at the bottom of the page with a bonus `prefers-reduced-motion` static frame. Dots verified visible via Playwright — the orchestrator hit round 1's stale-frame Browser-pane screenshot artifact during verification, and Playwright confirmed the page was fine. Initial: $4.26 / ~236 s / 25 turns; follow-up: $3.56 / ~124 s / 17 turns.

**Outcome (Opus):** **Caught the 0–255 vertex-color clamp bug in the source** (the docs' watch-for quirk: colors pushed as 0–255 into an attribute three.js reads as 0–1) — this round's equivalent of round 1's Fable finding the balloons-js memory leak. Chose the classic three.js build over ESM for `file://` compatibility, masked the surface's top edge to avoid a seam, and pauses the render loop on a hidden tab. Initial: $2.32 / ~330 s / 32 turns; follow-up: $2.10 / ~113 s / 22 turns.

## Notable

- Both models made the same first mistake (full-viewport fixed wrapper) because both faithfully preserved the source's layout — the scripted follow-up existed precisely for this, and both recovered in one prompt.
- Round 1's "inline vs CDN" divergence axis collapsed as predicted (three.js is too big to inline); the divergence moved to engineering instincts instead — Opus's bug catch, edge masking, and hidden-tab pause vs Fable's reduced-motion fallback.

## What this level taught

- You can paste a React component into a no-build HTML page and the model will adapt the paradigm — but it will also faithfully reproduce the source's layout assumptions, so say where the thing goes.
- A sharp model reviews the snippet it's given: Opus found a real upstream rendering bug unprompted, the round-2 twin of round 1's memory-leak find.
