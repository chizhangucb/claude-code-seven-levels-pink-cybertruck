# Level 7 — Design extraction blueprint

**Technique:** Point a purpose-built skill (`skill/design-language/`) at a site whose design you love. It extracts the design *language* — tokens, typography, easing, the load-bearing rules — into a builder brief, and Claude rebuilds YOUR product in that language. Translation, not cloning.

**Extraction target: https://teenage.engineering/** (new this round; round 1 used antigravity.google).
Why: verified 2026-07-12 — it serves a single public `root.*.css` with **98 `:root` custom properties** (full type-scale, line-height, and weight ladders), which is exactly what the skill's CSS-sweep steps assume; and its industrial-hardware minimalism rhymes with Cybertruck while contrasting cleanly with level 6's Tesla scrape.
**Fallback: https://linear.app/** — famous design, but its tokens are scattered across dozens of per-component chunk files with no single `:root` bundle (verified same day), so extraction is flakier. Use only if the primary target's root stylesheet disappears (preflight re-probes it; the hash in the filename rotates).

## Pre-prompt setup

- `design-language-skill.zip` present at trial-dir root (built at setup from this repo's `skill/design-language/` — see `docs/asset-checklist.md` #5).
- **Level 6's session is closed and `level-6.html` is verified/checksummed first.** This is the exact concurrency that caused round 1's overwrite incident.
- Firecrawl MCP connected (it's the skill's preferred scraper; Playwright is used for verification).

## The prompt

```
Hi there. I'm going to give you a website. I would like to basically understand the design, and I'd like you to follow all the instructions in this file, Namely go to this website, understand the typography, the design, and get it an extraction blueprint so that I can build a website that levels this up. And our website is going to be on selling beautiful trucks. @design-language-skill.zip

https://teenage.engineering/
```

## Ready follow-ups

Both are expected — the skill outputs a *kit* (brief + tokens + scaffold), not a finished page. Budget the extra prompts:

```
I didn't find the website file, where is it? The scaffold only has the framework, not the real website.
```

```
rename the file to pink-cybertruck-web-level-7 and keep the old pink-cybertruck-web-level-6 untouched.
```

## Expected outcome

An extraction kit (builder-brief.md, tokens.json, structure.css, scaffold.html, preview.png) promoted into a finished level-7 page: the pink Cybertruck sold in teenage.engineering's design language — its type ladder, weights, spacing discipline — with the accent color swapped to the product's pink and any proprietary font substituted with a public variable-font equivalent.

## Watch for (round-1 notes)

- **Extraction converges:** Fable and Opus independently invented near-identical brand names (Lume/LUMA) from the same design language. Watch for the same convergence — it's the closing beat of the talk.
- **Opus** produced the full kit directory and saved the direction to memory; **Fable** went straighter to the page. Preserve any kit output in `process-artifacts/` post-run (round-1 convention).
- Round 1's Fable L7 metrics were inflated by the overwrite investigation — with the sequential rule this round, L7 numbers should be clean.

## Log it

Session ID + UTC start timestamp in `docs/run-log-template.md`. Verify `level-7` exists and `level-6` untouched before closing. This completes the ladder for that model.
