# Level 5 — AI-generated video (OpenArt)

**Technique:** Generate media you don't have. Image model → product shots; video model → a product film from a start/end frame. Then just hand Claude the file. "Be relevant" is the only art direction.

> Note: levels 4 and 5 are intentionally swapped vs Jack Roberts' source video (carried over from round 1). This is the video's level-4 technique.

## Pre-prompt setup

- `pink-cybertruck-video-by-openart.mp4` present at trial-dir root (see `docs/asset-checklist.md` #3 for the OpenArt workflow: Nano Banana image → Kling/Seedance video, same frame as start AND end for a seamless loop, ~5 s, ≤ ~2 MB).
- Attach via `@` mention.

## The prompt

```
On the pink-cybertruck-web-level-4 file, please help Slot in the attached Pink Cybertruck video and be relevant. @pink-cybertruck-video-by-openart.mp4
keep pink-cybertruck-web-level-4.html untouched. Name it as pink-cybertruck-web-level-5
```

## Ready follow-ups

None expected — one prompt did it for both models in round 1.

## Expected outcome

A dedicated product-film section with **muted autoplay triggered on scroll-into-view**. Both models knew browser autoplay policy unprompted in round 1 (unmuted autoplay is blocked; muted + `playsinline` + IntersectionObserver is the pattern) — expect the same.

## Watch for (round-1 notes)

- Cheapest, fastest level in both runs (~$3.50–$5, ~4–5 min). The leverage is in the asset, not the integration.
- Opus also generated a poster frame (`yellow-iphone-poster.jpg` in round 1) — nice touch, don't prompt for it, just note if it happens.
- The video file ships alongside the HTML — remember to copy the `.mp4` into `demos/` with the HTML post-run, or the level-5+ demos 404 the film.

## Log it

Session ID + UTC start timestamp in `docs/run-log-template.md`. Verify `level-5` exists, `level-4` untouched, and the video actually plays in a browser before closing.
