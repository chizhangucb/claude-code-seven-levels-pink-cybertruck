# Level 7 — Design extraction blueprint

**Technique:** The strongest lever. Point a purpose-built skill ([`skill/design-language/`](../../skill/design-language/), byte-identical to round 1's) at a website whose design you love; it extracts the design *language* — tokens, typography, easing, load-bearing rules — into a builder brief, and Claude rebuilds YOUR product in that language. Translation, not cloning.
**Artifacts:** [Fable demo](../../demos/fable/level-7.html) · [Opus demo](../../demos/opus/level-7.html)
**Process evidence:** [`process-artifacts/l7-kits/`](../../process-artifacts/l7-kits/) — both models' extraction kits (builder brief, tokens, structure.css, scaffold, preview).

## The prompt (identical for both models, fixed upfront; target: teenage.engineering — new this round, round 1 used antigravity.google)

> Hi there. I'm going to give you a website. I would like to basically understand the design, and I'd like you to follow all the instructions in this file, Namely go to this website, understand the typography, the design, and get it an extraction blueprint so that I can build a website that levels this up. And our website is going to be on selling beautiful trucks. @design-language-skill.zip
>
> https://teenage.engineering/

## Pre-prompt setup

- `design-language-skill.zip` at the trial-dir root, verified byte-identical to `skill/design-language/` at preflight.
- Target pre-probed: teenage.engineering serves a single public `root.*.css` with 98 `:root` custom properties — exactly what the skill's CSS sweep assumes. The linear.app fallback was never needed.
- Level 6's session closed and checksummed first (the round-1 overwrite guard).

## Follow-ups

Scripted follow-up #1 — **sent to both models**, as budgeted: the skill's natural output is a *kit* (brief + tokens + scaffold), not a finished page, and both delivered exactly that:

> I didn't find the website file, where is it? The scaffold only has the framework, not the real website.

(Fable had additionally written its kit to `~/Desktop/teenage-engineering-kit` and the session scratchpad rather than the trial dir; Opus kept its kit in the trial dir and had asked whether to fill the scaffold's `{{BRAND}}`/`{{ACCENT}}` placeholders.)

Scripted follow-up #2 (the rename) was **skipped in both runs** — both models already named the file `pink-cybertruck-web-level-7.html`, so the condition was never met. Round 1 needed it; naming the file in expectations paid off.

**Outcome (Fable):** Extracted teenage.engineering's language and shipped a 22.5 KB page in lowercase t.e. voice — *"the beautiful truck."* — staying unbranded-lowercase throughout. Fixed an SVG `<use>` styling bug found during its own verify pass. Initial: $5.15 / ~474 s / 28 turns; follow-up: $4.26 / ~329 s / 25 turns.

**Outcome (Opus):** Full kit in the trial dir, then a 22.2 KB page: **"CYBR — Built for Mars. Painted for Miami."** — reusing the CYBR brand it invented back at level 3. Initial: $2.32 / ~362 s / 24 turns; follow-up: $2.62 / ~256 s / 30 turns.

## Notable

- **Extraction converges, again.** Round 1's beat was near-identical brand names (Lume/LUMA); this round both models independently landed on ~22 KB lowercase-minimal pages in teenage.engineering's voice — same design language in, same register out. The divergence was branding strategy: Fable stayed unbranded, Opus reached back to its own level-3 brand.
- With the sequential rule, L7 metrics are clean this round (round 1's Fable L7 was inflated by the overwrite investigation).

## What this level taught

- Design extraction gives Claude what most humans can't articulate: the vocabulary of a specific great design — and it transfers so strongly that two different models write in the same voice.
- A blueprint is an intermediate artifact — budget one more prompt to turn the kit into the deliverable (both rounds, both models).
- Name the output file in the prompt chain and the rename follow-up becomes unnecessary — a prompt-engineering fix verified across rounds.
