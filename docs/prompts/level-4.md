# Level 4 — UI snipping (21st.dev-style component)

**Technique:** Copy a production-grade component from a component library and hand it to Claude to integrate. You're not asking it to invent delight — you're snipping delight that already exists.

> Note: levels 4 and 5 are intentionally swapped vs Jack Roberts' source video (carried over from round 1). This is the video's level-5 technique.

**Component: `DottedSurface`** — a 21st.dev-style React + three.js animated dot-wave surface. **Changed from round 1** (balloons-js) — disclosed deviation, see runbook §1: thematic fit wins this time (an ambient industrial particle field suits a Cybertruck better than balloons), and the component is **always on** — no scroll or click trigger — which retires round 1's auto-trigger follow-up entirely.

## Pre-prompt setup

- Paste the component source from `references/dotted-surface-component.tsx.txt` into the message **before** the prompt text below.
- **Same paste for both models.** (Round 1 was asymmetric: Fable got screenshots, Opus got source. Normalized this round — disclosed deviation.)
- The source is React + `next-themes` + Tailwind (`cn`, `-z-1`) + `three` imports. Adapting that into a static vanilla-HTML page is the level's actual work — don't pre-digest it for the model.

## The prompt

(after the pasted component source:)

```
Hey there. I'd like you to integrate this dotted surface component at the bottom of the page. It should always be there, no trigger needed. Make sure you keep the current index HTML file. keep pink-cybertruck-web-level-3.html untouched. Name it as pink-cybertruck-web-level-4.html
```

## Ready follow-ups

Contingencies only — use if needed, and log which ones you send.

If the surface comes back as a full-viewport fixed background (that's literally what the source's `fixed inset-0` wrapper does) instead of sitting at the bottom:

```
The dotted surface should show at the bottom part of the page, not cover the whole page.
```

If the dots are invisible against the page background (the source draws black dots in light theme, grey in dark):

```
I can't really see the dots, could you make them stand out against the background?
```

## Expected outcome

An animated three.js dot-wave running at/behind the page's final section, always animating, colors adapted to the page's palette. Expect three.js to arrive via CDN import (esm.sh/unpkg) — it's far too large to sensibly inline, so round 1's "inline vs CDN" divergence axis may collapse here; watch what each model differentiates on instead (containing the canvas, trimming the render loop, theme handling).

## Watch for (round-1 notes, adapted)

- **Adaptation choices:** stripping React/`next-themes`/`cn`; theme handling → `prefers-color-scheme`, or sensibly hardcoded to the page's palette; rescoping the fixed full-viewport wrapper into a bottom-of-page section.
- **Source quirks a sharp model may flag** (round 1's Fable found a real upstream memory leak in balloons-js — this is the same talk beat): vertex colors are pushed as 0–255 into an attribute three.js reads as 0–1, so they clamp and the dots render pure white/black regardless of the intended grey; a dead `uniforms` block in the animate loop; `-z-1` isn't a standard Tailwind class. Note if either model catches any of these.
- **Performance:** an always-running rAF + WebGL layer on a long page. See whether either model pauses rendering when the section is off-screen (IntersectionObserver) even though no trigger was requested — that's an engineering-instinct divergence worth a slide.

## Log it

Session ID + UTC start timestamp in `docs/run-log-template.md`, plus which follow-ups were used. Verify `level-4` exists and `level-3` untouched before closing.
