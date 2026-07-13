# Asset checklist — done by Chi before run day

Everything below lands in `references/` in this repo, then gets copied into **both** trial dirs at setup (identical folder contents for both models — see `docs/runbook.md` §3). Filenames must match exactly: the prompts reference them by `@` mention.

## 1. Level-2 style-reference screenshot → `reference-for-pink-cybertruck-web.png`

- Browse **godly.website**, **land-book.com**, or **awwwards.com** for a landing page you'd love this site to feel like: bold, dark-industrial or brutalist product page that could plausibly host a pink accent.
- Full-page or tall screenshot (round 1's was 1200×3853 — tall enough to show the page's rhythm, not just the hero).
- ⛔ **Not a Tesla screenshot** — Tesla's brand identity is level 6's variable. Don't leak it into level 2.

## 2. Level-3 product photo → `reference-real-cybertruck.png`

- A clean photo of a **pink Cybertruck**. Real ones are vinyl wraps — search "pink Cybertruck wrap" and check licensing before using someone's photo.
- If nothing clean/usable exists, generate one in OpenArt (Nano Banana). Suggested gen prompt:
  > A Tesla Cybertruck with a glossy pastel-pink vinyl wrap, three-quarter front view, light grey seamless studio background, soft even lighting, photorealistic product photography.
- Wide crop works best (round 1's was ~1600×630).

## 3. Level-5 product film → `pink-cybertruck-video-by-openart.mp4`

OpenArt (openart.ai) workflow, same as round 1:

1. **Image:** Nano Banana → generate **2–4 candidates** of the pink Cybertruck (studio or dramatic setting — your call). Pick one.
2. **Video:** Kling or Seedance, image-to-video, using the chosen frame as **both the start AND end frame** so the loop lands where it began. Motion prompt along the lines of: *"slow cinematic orbit around the truck, camera returns to the starting position."* ~5 seconds.
3. **File:** H.264 MP4, no audio needed (it will autoplay muted anyway), target **≤ ~2 MB** (round 1's was 1.64 MB). Re-encode/compress if OpenArt's export is heavy.
4. Sanity-check it autoplays muted in a browser tab before run day.

## 4. Level-4 component source → `dotted-surface-component.tsx.txt`

- ✅ **Already done** — Chi supplied the `DottedSurface` component source (a 21st.dev-style React + three.js animated dot-wave) on 2026-07-12; saved verbatim at `references/dotted-surface-component.tsx.txt`.
- Both models get this **identical paste** at level 4 (round 1 gave Fable screenshots and Opus the source — normalized this round).
- Replaces round 1's balloons-js — disclosed deviation, see runbook §1.

## 5. Level-7 skill zip → `design-language-skill.zip`

Built from this repo (the skill is already copied in at `skill/design-language/`, checksum-verified against round 1):

```sh
cd /Users/chizhang/experimental/design-pink-cybertruck-web/skill
zip -r ../references/design-language-skill.zip design-language/
```

Then confirm: `unzip -l references/design-language-skill.zip` shows 4 files (SKILL.md, README.md, process.md, brief-template.md).

---

**Done when:** `ls references/` shows 2 PNGs + 1 MP4 + 1 tsx.txt + 1 zip (plus `.gitkeep`).
