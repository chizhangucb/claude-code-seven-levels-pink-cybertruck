# Level 6 — Data & brand research (Firecrawl)

**Technique:** Pull real data instead of inventing it. Firecrawl scrapes a live site (here **tesla.com**, the natural Cybertruck analog to round 1's apple.com) for brand identity — type scale, palette, spacing, tone — and Claude upgrades the site in accordance.
**Artifacts:** [Fable demo](../../demos/fable/level-6.html) · [Opus demo](../../demos/opus/level-6.html)
**Process evidence:** [`process-artifacts/firecrawl/`](../../process-artifacts/firecrawl/) — the actual tesla.com scrapes, per model.

## The prompt (identical for both models, fixed upfront)

> Hey there. I'd like to go ahead and to tesla.com and use my FireCrawl integration. Let's go ahead and grab me the brand identity and then just upgrade this website in accordance with that.
> keep pink-cybertruck-web-level-5.html untouched. Name it as pink-cybertruck-web-level-6

## Pre-prompt setup

- Firecrawl available to the headless sessions — as the official plugin wrapping the `firecrawl` CLI, not an MCP server (run-log incident #1: the CLI was unauthenticated at preflight and was authed with Chi's existing API key, identically for both models).
- Level 7 waits until this session is closed and `level-6.html` is checksummed — the exact concurrency that clobbered round 1's Fable level 6.

**Outcome (Fable):** Scraped tesla.com live (fallback not needed) and rebuilt the page so it "reads like a tesla.com product page." A Playwright live-verify pass caught a **real hero-CTA flex bug** before shipping. 1 prompt, 36 turns, ~565 s, $7.20 — the most expensive Fable level.

**Outcome (Opus):** Same successful scrape; browser-verified the result to 0 console errors and matched Tesla's exact dark background `rgb(23,26,32)`. When its screenshot showed blank sections, it correctly diagnosed an untriggered reveal-observer rather than a broken page. 1 prompt, 59 turns, ~479 s, $4.09.

## Follow-ups

One was scripted (fall back to `tesla.com/cybertruck` if the homepage scrape came back thin or blocked). **Not sent to either model** — the tesla.com scrape succeeded in both runs; the anti-bot failure mode never materialized.

## Notable

- **No overwrite incident this round.** The sequential one-live-session-per-trial-dir rule (born from round 1's clobbered level 6) held; level 5 was checksum-verified untouched in both runs.
- Both models kept the pink: the brand research informed structure, typography, and tone without deleting the product's color — the prompt never had to say so.
- Both models' late-stage verification caught real issues (Fable's flex bug, Opus's reveal-observer diagnosis) — grounding in a real site seems to raise the self-QA bar too.

## What this level taught

- Real data beats lorem ipsum: copy, specs, and brand feel all sharpen once grounded in a live source.
- "FireCrawl integration" in the prompt is robust to *how* Firecrawl is wired (plugin CLI vs MCP) — the models found the tool either way.
