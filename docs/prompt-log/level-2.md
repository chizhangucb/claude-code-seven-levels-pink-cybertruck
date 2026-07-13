# Level 2 — Screenshots & references

**Technique:** Show, don't tell. Attach a screenshot of a design you love (godly.website, Land-book, Awwwards, Dribbble…) and ask Claude to restyle toward it. References beat adjectives.
**Artifacts:** [Fable demo](../../demos/fable/level-2.html) · [Opus demo](../../demos/opus/level-2.html)

## The prompt (identical for both models, fixed upfront)

> hey there, I would like you to update the website using this image as a reference style (only this one) for how i would likeThe website you look @reference-for-pink-cybertruck-web.png
>
> keep pink-cybertruck-web-level-1.html untouched. name the file as pink-cybertruck-web-level-2.html

(The `likeThe` typo is intentional — verbatim from round 1; the casual phrasing is part of the experiment. The keep-untouched rule moved **up front** this round, because round 1's Opus overwrote level 1 here.)

## Pre-prompt setup

`reference-for-pink-cybertruck-web.png` at the trial-dir root, attached via `@` mention.

**Outcome (Fable):** Level 1 restyled toward the reference; nav anchors came back functional. 1 prompt, 4 turns, ~133 s, $1.67.

**Outcome (Opus):** Same restyle, with a self-check pass in the browser. 1 prompt, 45 turns, ~530 s, $2.68 — Opus spent far longer verifying than Fable did building.

## Follow-ups

One was scripted ("Buttons like the nav sections are not clickable, could you make them work?") for the case where nav anchors are decorative. **Not sent to either model** — both shipped functional anchors, so the trigger condition was never met.

## Notable

- **Round 1's overwrite did not recur.** With the keep-untouched line up front, both models forked cleanly; level 1 was checksum-verified untouched in both trial dirs.
- Round 1 needed the clickability follow-up (Fable run); this round neither model did — the fix was free.

## What this level taught

- One reference image beats paragraphs of adjectives — visual intent transfers almost losslessly.
- Stating the save-as / keep-untouched rule *before* the ask, not after, is what makes levels immutable in practice.
