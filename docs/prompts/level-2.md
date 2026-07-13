# Level 2 — Screenshots & references

**Technique:** Show, don't tell. Attach a screenshot of a design you love (godly.website, Land-book, Awwwards, Dribbble) and ask Claude to restyle toward it. References beat adjectives.

## Pre-prompt setup

- `reference-for-pink-cybertruck-web.png` present at trial-dir root (see `docs/asset-checklist.md` #1).
- Attach it via `@` mention — the `@filename` in the prompt below must resolve.

## The prompt

```
hey there, I would like you to update the website using this image as a reference style (only this one) for how i would likeThe website you look @reference-for-pink-cybertruck-web.png

keep pink-cybertruck-web-level-1.html untouched. name the file as pink-cybertruck-web-level-2.html
```

(The `likeThe` typo is intentional — kept verbatim from round 1; the casual phrasing is part of the experiment. Only the product nouns, filenames, and the up-front keep-untouched rule changed.)

## Ready follow-ups

If nav anchors / buttons are decorative rather than functional:

```
Buttons like the nav sections are not clickable, could you make them work?
```

## Expected outcome

Level 1 restyled toward the reference — layout rhythm, palette, and typography pulled from the screenshot rather than invented.

## Watch for (round-1 notes)

- **The keep-untouched line is now up front for a reason:** in round 1, Opus's first attempt overwrote level 1 and needed a follow-up to fork it back out.
- **Fable** built real sections behind the nav and verified by clicking the links; **Opus** stayed closer to a single scroll page.

## Log it

Session ID + UTC start timestamp in `docs/run-log-template.md`. Verify both `level-1` and `level-2` files exist and differ before closing.
