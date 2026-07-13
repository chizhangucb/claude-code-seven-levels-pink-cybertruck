# Level 6 — Data & brand research (Firecrawl)

**Technique:** Pull real data instead of inventing it. Firecrawl scrapes a live site for brand identity — type scale, palette, spacing, tone — and Claude upgrades the site accordingly. Research beats invention.

**Scrape target: tesla.com** (the natural Cybertruck analog to round 1's apple.com).

## Pre-prompt setup

- Firecrawl MCP connected in the session (`/mcp` to confirm — it's on the preflight checklist too).
- ⚠️ **Do not start level 7 anywhere until this session is closed.** Round 1's "overwrite incident": a concurrently running L7 session silently clobbered `level-6.html`. One live session per trial dir, always.

## The prompt

```
Hey there. I'd like to go ahead and to tesla.com and use my FireCrawl integration. Let's go ahead and grab me the brand identity and then just upgrade this website in accordance with that.
keep pink-cybertruck-web-level-5.html untouched. Name it as pink-cybertruck-web-level-6
```

## Ready follow-ups

If the tesla.com homepage scrape comes back thin or blocked:

```
If tesla.com is hard to scrape, use https://www.tesla.com/cybertruck instead.
```

(Or retry the scrape with a longer `waitFor` — tesla.com is JS-heavy.)

## Expected outcome

The site re-tuned to Tesla's actual brand system — its type scale, spacing, restraint, and tone of voice — rather than "what Claude thinks a car site looks like." Keep the pink: the brand research should inform structure and typography, not delete the product's color.

## Watch for (round-1 notes)

- **Opus** made 39 Firecrawl calls and cached them under `.firecrawl/` (gitignored here). **Fable** combined the scrape with power-design's brand-extraction recipe and built level 6 as level 5 + a Python patch script with asserts.
- Save any scrape artifacts you want as talk evidence into `process-artifacts/firecrawl/` post-run (round-1 convention).
- Anti-bot risk is the main failure mode — the fallback URL above is the recovery.

## Log it

Session ID + UTC start timestamp in `docs/run-log-template.md`. Verify `level-6` exists and `level-5` untouched, **then close the session before touching level 7**.
