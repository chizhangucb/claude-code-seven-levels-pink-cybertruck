# Builder brief — pink cybertruck

> **Generated from:** https://teenage.engineering/
> **Date:** 2026-07-12
>
> This brief carries the design language of the source site, translated for you to apply to **pink cybertruck** — *a store selling beautiful pink cybertrucks*.
>
> The source is the inspiration. The brand below is yours. Nothing about your product or copy is copied from the source — only the typographic system, spacing rhythm, motion curves, and layout patterns.

---

## What makes the source feel the way it does

teenage.engineering feels like a beautifully printed instruction manual that happens to be a website. Three choices do almost all of the work. First, **the entire page is one ratio system**: the root font-size is `1.63265vw` — exactly 16px at their 980px design width — and every dimension on the site (nav height, button height, spacing, type sizes) is a `calc(fraction × 100vw)`. Nothing reflows when you resize; the whole composition *zooms* like a PDF. That is why it feels engineered rather than assembled. Second, **the type is ultra-thin and lowercase**: their custom Univers cuts (`te-20` for text, `te-40` for display) run at weights 100 and 300 only — there is no bold anywhere — and every heading, label, and button is lowercase. Authority comes from restraint, not size. Third, **ink discipline**: the canvas is pure white/#f5f5f5, everything else is a grey ramp from `#e5e5e5` to `#0f0e12`, corners are square (`border-radius: 0`), rules are hairline `.75px`, there are no drop shadows — and a handful of saturated colors (orange `#f05a24` above all) appear only in tiny doses, like a stamp on a document.

Read this section before you touch any of the values below. If you change a token without understanding *why* it's set the way it is, the page will lose its tone of voice.

---

## Tokens — extracted verbatim from the source

All values below were read directly from the source's production CSS. Use them in your `:root` exactly as written. Do not invent new tokens or "round" the numbers. (The px column shows the rendered value at the source's 980px design width, for intuition only.)

### palette

| Token | Value | Role |
|---|---|---|
| `--white` | `#fff` | page canvas |
| `--te-white` | `#f5f5f5` | product/tile surfaces |
| `--te-black` | `#0f0e12` | ink (not pure black) |
| `--te-grey-100` | `#e5e5e5` | hairlines, hover fills |
| `--te-grey-200` | `#ccc` | borders |
| `--te-grey-300` | `#b2b2b2` | disabled, dividers |
| `--te-grey-600` | `#767676` | secondary text |
| `--te-grey-900` | `#4d4d4d` | tertiary ink |
| `--te-grey-1000` | `#272727` | dark band surface |
| `--te-orange` | `#f05a24` | the accent — used like a stamp |
| `--te-blue` / `--te-green` / `--te-red` / `--te-yellow` | `#0071bb` / `#006837` / `#b81d13` / `#fab413` | functional color, tiny doses |

For **pink cybertruck**, swap the orange accent for your pink and keep every other value. One accent per screen.

### type

| Token | Value | @980px |
|---|---|---|
| root `font-size` | `1.63265vw` | 16px |
| `--te-20` | `"te-20", "Unicode", sans-serif` | text/UI face |
| `--te-40` | `"te-40", "Unicode", sans-serif` | display face |
| `--fw-thin` | `100` | display headlines |
| `--fw-light` | `300` | everything else (the default) |
| `--fs-10` | `calc(.00918367 * var(--client-width))` | 9px |
| `--fs-15` | `calc(.0132653 * var(--client-width))` | 13px |
| `--fs-20` | `calc(.0183673 * var(--client-width))` | 18px |
| `--fs-25` | `calc(.0234694 * var(--client-width))` | 23px |
| `--fs-30` | `calc(.027551 * var(--client-width))` | 27px |
| `--fs-40` | `calc(.0367347 * var(--client-width))` | 36px |
| `--lh-10` … `--lh-40` | `calc(.0102041 … .0408163 * var(--client-width))` | 10 → 40px |
| letter-spacing | slightly negative, scale-linked | — |
| word-break | `keep-all` | — |

`te-20`/`te-40` are proprietary Univers cuts (the files also ship as `UniversTE20T`/`UniversTE40L`). Do **not** hotlink their woff2. License Univers Next Thin/Light if you can; otherwise `"Helvetica Neue"` at weights 200/300 is the honest system fallback (already wired in the scaffold).

### spacing

| Token | Value | @980px |
|---|---|---|
| `--space-xs` | `calc(.00510204 * var(--client-width))` | 5px |
| `--space-sm` | `calc(.0102041 * var(--client-width))` | 10px |
| `--space-md` | `calc(.0153061 * var(--client-width))` | 15px |
| `--space-lg` | `calc(.0229592 * var(--client-width))` | 22.5px |
| `--space-xl` | `calc(.0459184 * var(--client-width))` | 45px |
| `--block-margin` | `var(--space-xl)` | section rhythm |
| `--tile-padding` | `1vw` | card inset |

### shape, line, layout

| Token | Value | @980px |
|---|---|---|
| `--tile-border-radius` / `--field-border-radius` | `0` | **square corners everywhere** |
| `--round` | `9999px` | pills only (nav hovers, circular buttons) |
| `--border-width` | `.75px` | hairlines |
| `--header-height` | `calc(.0816327 * var(--client-width))` | 80px |
| `--footer-height` | `calc(.0663265 * var(--client-width))` | 65px |
| `--button-height-md` | `calc(.0510204 * var(--client-width))` | 50px |
| `--btn-min-click-area` | `48px` | accessibility floor |
| grid | `repeat(12, minmax(0,1fr))` | 12-column |
| `--z-navigation` | `1000` | sticky nav layer |

### motion

| Where | Value |
|---|---|
| default | `transition: all .4s` |
| hovers | `background-color .2s ease-in` |
| presses | `transform .2s ease-in` |
| reveals | `visibility .1s, opacity .1s` |
| marquees | `12s` linear loop |

No springs, no bounces, no parallax. Motion is quick, flat, and functional — like a switch, not an animation.

---

## The three artistic decisions to preserve

These are the choices that decide whether the rebuild feels right. They are invisible from a screenshot — only the source CSS reveals them.

*(Note: the source does not use a variable font, so the usual `opsz`/450-weight guidance is dropped for this run — these are the three decisions that do the equivalent work here.)*

1. **One ratio system, zoom not reflow.** `html { font-size: 1.63265vw }` and every token is a `calc(fraction × 100vw)` against a 980px base. Set it once, size *everything* in these tokens, and the composition stays pixel-faithful at every viewport width. If you size even one element in fixed px (except hairlines and the 48px click floor), it will drift out of key as the window resizes.

2. **Thin, lowercase, never bold.** Weight 100 for display, 300 for everything else — and `text-transform: lowercase` across headings, nav, buttons, labels. Hierarchy comes from size and placement, never from weight. The moment you reach for `font-weight: 600`, the manual becomes a brochure.

3. **Ink discipline: hairlines, square corners, stamped accents.** `.75px` rules, `border-radius: 0`, no shadows, a grey ramp for structure — and the accent color appears at perhaps 2% of the pixels on screen, always at full saturation, always meaning something (a price, a state, a "busy" sign). Your pink should behave the same way: a stamp, not a wash.

If your stack can't do fractional root font-sizes, the next-best move is `clamp()`-based sizes derived from the same 980px ratios and accept a small loss in fidelity.

---

## The page — 7 sections, in this order

The source's structure is the spine. Don't add new sections. Don't reorder. If something doesn't fit one of the seven, your copy probably needs editing, not the structure.

### 01 · Nav (sticky, `--header-height`)
- Blurred backdrop, hairline bottom border (`--te-grey-100`)
- **Left:** small accent-color mark + lowercase brand wordmark
- **Center:** 4–5 lowercase nav links with subtle pill hover (`--te-grey-100` fill)
- **Right:** one square-cornered dark button

### 02 · Hero (full viewport, left-aligned)
- Massive thin lowercase headline (~9vw, weight 100), typed-letter animation + blinking accent-color cursor
- Lede paragraph max 38ch at `--fs-20`
- Two square CTAs: dark primary + hairline ghost secondary
- Small "play intro" with circular ▶ glyph (pills are allowed on circles)

### 03 · Use-cases (horizontal scroll-snap carousel)
- Eyebrow + `--fs-30` headline left, two 48px circular hairline nav buttons right
- 5 cards minimum, 380px wide, `scroll-snap-align: start`
- Per card: flat `--te-grey-100` media block (16:10), accent badge, thin headline, body, "view case" underlined arrow link

### 04 · Two-column showpiece
- Two equal cards, gap 16px, `--te-white` surfaces with hairline borders
- One soft accent radial per card at low opacity, slowly drifting (the only "atmosphere" allowed)
- Per card: badge, 56px thin headline (max 26ch lede), two CTAs

### 05 · Journal slider
- Same carousel pattern; 320px cards: flat cover, small grey meta line, thin title, "read" arrow link

### 06 · Dark CTA band (full-width inverse)
- `--te-grey-1000` background, `--te-white` text
- Typed `--fs-40` headline with blinking accent cursor
- One light square CTA

### 07 · Footer
- Top: 4-column grid — tagline + 3 link columns, each link on its own hairline
- Middle: giant thin lowercase wordmark, line-height 0.85
- Bottom: small mark + legal links in `--fs-10` grey

---

## House rules

- No drop shadows. Structure comes from `.75px` hairlines.
- Corners are square. `--round` is for circles and pill hovers only.
- Everything lowercase — headings, nav, buttons, labels.
- One accent color per screen — used like ink; keep it under ~2% of pixels.
- Weights 100/300 only. Bold is banned.
- Body line length caps at 60ch — never run full container.
- Size everything in the vw tokens; fixed px only for hairlines and the 48px click floor.
- No scroll-jacking. Native scroll only.
- CTAs ≤4 words, lowercase.
- Banned words: revolutionary, seamless, unleash, empower, transform, game-changing, supercharge, world-class.
- Don't invent sections — exactly the 7 above.
- **The brief is the spec, not the product.** The tokens, type scale, spacing, and component recipes describe HOW to build the page. They are NOT content to display ON the page. Do NOT render token readouts, theme pickers, grid overlays, or any runtime design controls. The site is the FINISHED application of the system — silent, not self-referential.
- **Every section is one viewport tall.** Each top-level `<section>`, the hero, and the dark CTA band get `min-height: 100vh` with content vertically centered. The page reads as a sequence of discrete screens — one section, one scroll, one point. Mobile drops to `min-height: auto`. Footer sizes to its content.

---

## Copy to write for pink cybertruck

Fill these slots before pasting the scaffold to your builder. Keep it lowercase.

```
NAV
  Brand wordmark:       pink cybertruck
  Links:                {{NAV_1}}, {{NAV_2}}, {{NAV_3}}, {{NAV_4}}, {{NAV_5}}
  CTA:                  {{NAV_CTA}}  (≤2 words)

HERO
  Headline:             {{HERO_HEADLINE}}  (≤6 words, declarative, lowercase)
  Lede:                 {{HERO_LEDE}}  (1 sentence, ≤60ch)
  Primary CTA:          {{HERO_CTA_PRIMARY}}  (≤4 words)
  Secondary CTA:        {{HERO_CTA_SECONDARY}}  (≤4 words)

USE CASES (5 cards)
  Section eyebrow:      {{USE_EYEBROW}}
  Section headline:     {{USE_HEADLINE}}  (≤8 words)
  Each card:            badge (1 word) / role headline (≤8 words) / body (≤2 sentences)

TWO-COLUMN
  Card 1 badge / headline / lede / CTAs
  Card 2 badge / headline / lede / CTAs

JOURNAL (6 cards)
  Section headline:     {{BLOG_HEADLINE}}
  Each card: date, category, title (≤8 words)

DARK CTA
  Headline:             {{DL_HEADLINE}}  (5–7 words)
  CTA:                  {{DL_CTA}}  (≤4 words)

FOOTER
  Tagline:              {{FOOTER_TAGLINE}}  (3–4 words)
  Wordmark:             pink cybertruck
```

---

## Acceptance criteria — how to know it landed

A. Every value from the token table appears verbatim in `:root` (no rounding).
B. Root font-size is `1.63265vw`; resizing the window zooms the composition without reflow.
C. Words never break mid-character (test at 1024 + 1440 + 1920 widths).
D. The 7 sections appear in the prescribed order. No extras.
E. No bold anywhere; headings are weight 100, lowercase.
F. Typed-letter animation works in hero + dark CTA; cursor blinks in the accent pink.
G. Mobile: hero headline scales to ~56px, columns stack, carousels remain swipeable.

Return one self-contained HTML file (or a Next.js page + global CSS) ready to deploy.

---

## Appendix A — HTML scaffold (paste-and-fill)

See `scaffold.html` in this kit — a working, self-contained page with every token above wired into `:root`, all seven sections in order, the typed-headline script (word-safe), and `{{SLOTS}}` where your copy goes. Save it as `index.html`, replace the slots, done. No build step needed.

---

*Brief generated by the `design-language` skill. The source provided the design language; the brand, the copy, and the imagery are yours.*
