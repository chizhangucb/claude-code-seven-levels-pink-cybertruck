# Level 1 — Grab and go

**Technique:** Treat Claude like a chatbot. No references, no skills, no assets — just ask. This is the baseline everyone starts at.

## Pre-prompt setup

- Fresh Claude Code session in the trial dir (`fable-trials/` or `opus-trials/`).
- All run assets should already be sitting in the trial dir (copied at setup, identically for both models) — even though this level doesn't use them. Round 1: Fable spontaneously noticed the reference PNGs in the folder and asked about them; keeping the folder contents identical across models keeps that variable controlled.

## The prompt

```
Claude, I want you to build for me a simple website or just a nice looking website that is cool about Cybertrucks that are pink. Build me one of those website.

name the file as pink-cybertruck-web-level-1.html
```

## Ready follow-ups

None expected. One prompt should do it.

## Expected outcome

A competent-but-generic single-page site. This is the "95% of Claude-built sites" look — the whole talk climbs away from here.

## Watch for (round-1 notes)

- **Fable:** self-verified in a browser, hit a stale-frame screenshot artifact, re-verified with Playwright full-page screenshots. Took ~6.5 min / $5.26.
- **Opus:** one-shot, no verification pass. ~1.5 min / $0.72.
- Both invented their own taglines unprompted.

## Log it

Record session ID + UTC start timestamp in `docs/run-log-template.md` **immediately after sending the prompt**. Verify `pink-cybertruck-web-level-1.html` exists before closing the session.
