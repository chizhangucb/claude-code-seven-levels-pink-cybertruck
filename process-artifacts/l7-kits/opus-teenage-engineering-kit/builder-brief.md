# Builder brief — {{BRAND}}

> **Generated from:** https://teenage.engineering/
> **Date:** 2026-07-12
>
> This brief carries the design language of the source site, translated for you to apply to **{{BRAND}}** — *a store that sells beautiful trucks*.
>
> The source is the inspiration. The brand below is yours. Nothing about your product or copy is copied from the source — only the typographic system, spacing rhythm, grid, and layout logic.

---

## What makes the source feel the way it does

**teenage.engineering is not a responsive website. It's a printed poster that zooms.** Every single dimension on the page — type size, padding, header height, button height — is written as a fraction of the viewport width, and every one of those fractions is *(some pixel value) ÷ 980*. There is a real 980-pixel Swiss print layout underneath (12 columns of 65px, 10px gutters, 45px margins — it adds up to exactly 980), and the browser just scales it like a vector. Nothing reflows on desktop. The whole page grows and shrinks as one object. That is why it feels *drawn* rather than *assembled*: because it was drawn, once, at one size.

**The type is measured in baselines, not in points.** The core text rule literally computes its own font-size from the grid: `font-size: (2 baselines − 2px)` and `line-height: exactly 2 baselines`. The 10px baseline is the atom; type is snapped onto it rather than the layout being nudged to accommodate the type. Every line-height in the system (10, 15, 20, 30, 40) is a multiple of it. This is the opposite of how most sites work, and it's why the vertical rhythm is so quiet.

**Nothing is heavy, nothing is round, and nothing moves.** The interface typeface ships in exactly two weights — Thin 100 and Light 300 — and *nothing on the site is bolder than Light*. Body copy sits at 100. Where a normal design system would reach for a variable font's `opsz` axis, teenage.engineering ships two separately drawn cuts of the face (`te-20` for small text, `te-40` for large) and switches files by size — hand-cut optical sizing. Corners are a hard `0` (the only radius in the system is `9999px`, for pills). Borders are 0.75px hairlines and there are no drop shadows anywhere — surfaces are separated by *rules*, like a technical drawing. And the entire production CSS contains exactly **one** cubic-bezier: there is no easing system because there is essentially no motion. The stillness is the design. Restraint is doing all the work, which is what lets the one orange accent and the giant black display headline hit as hard as they do.

Read this before you touch any value below. If you "improve" a token without understanding why it's set that way, the page loses its voice.

> **Note on the skill's default three decisions:** this source uses **no variable font**, so the standard `opsz`-axis / weight-450 / pixel-line-height trio does not apply and has been dropped for this run, exactly as `process.md` step 5 instructs. The three decisions above are the real ones, read out of the production CSS.

---

## Tokens — extracted verbatim from the source

Use them exactly as written. `--px` is the generator: `1px at the 980 design width`. Do not round.

| Token | Value | Resolves to (at 980) |
|---|---|---|
| `--client-width` | `100vw` | — |
| `--base-design-width` | `980` | — |
| `--txt-px-unit` (`--px`) | `calc(0.0010204081632653062 * var(--client-width))` | 1px |
| `--txt-bh-unit` (`--bh`) | `calc(0.010204081632653062 * var(--client-width))` | 10px baseline |
| **Grid** | | |
| `--layout-pw` / `--layout-cn` | `980px` / `12` | page / columns |
| `--layout-cw` / `--layout-gw` / `--layout-mw` | `65px` / `10px` / `45px` | col / gutter / margin |
| `--layout-bh` | `10px` | baseline |
| **Type — family & weight** | | |
| `--te-20` | `"te-20", "Unicode", sans-serif` | small-text cut |
| `--te-40` | `"te-40", "Unicode", sans-serif` | large-text cut |
| `--fw-thin` / `--fw-light` | `100` / `300` | the only two weights |
| `--txt-letter-spacing` | `calc(var(--txt-px-unit) * -.5 * var(--txt-scale))` | −0.5px |
| **Type — scale (desktop)** | | |
| `--fs-10` … `--fs-40` | `.00918367` / `.0132653` / `.0183673` / `.0234694` / `.027551` / `.0367347` × cw | 9 / 13 / 18 / 23 / 27 / 36 px |
| `--lh-10` … `--lh-40` | `.0102041` / `.0153061` / `.0204082` / `.0306122` / `.0306122` / `.0408163` × cw | 10 / 15 / 20 / 30 / 30 / 40 px |
| **Space** | | |
| `--space-xs` … `--space-xl` | `.00510204` / `.0102041` / `.0153061` / `.0229592` / `.0459184` × cw | 5 / 10 / 15 / 22.5 / 45 px |
| **Chrome** | | |
| `--header-height` | `calc(.0816327 * var(--client-width))` | 80px |
| `--footer-height` | `calc(.0663265 * var(--client-width))` | 65px |
| `--btn-min-click-area` | `48px` | — |
| `--button-height-sm/md/lg` | `.0357143` / `.0510204` / `.0663265` × cw | 35 / 50 / 65 px |
| `--border-width` | `0.75px` | hairline |
| `--grid-divider-color` | `var(--te-grey-300)` | `#b2b2b2` |
| `--tile-border-radius` / `--field-border-radius` | `0` / `0` | hard corners |
| `--round` | `9999px` | pills only |
| **Ink** | | |
| `--white` / `--te-white` / `--te-black` | `#fff` / `#f5f5f5` / `#0f0e12` | |
| `--te-grey-100/300/700/900` | `#e5e5e5` / `#b2b2b2` / `#7f7f7f` / `#4d4d4d` | |
| `--te-orange` (the accent) | `#f05a24` | **swap for your pink** |
| `--te-blue` / `--te-green` / `--te-red` / `--te-yellow` | `#0071bb` / `#006837` / `#b81d13` / `#fab413` | signal colours only |
| **Motion** | | |
| `--mrq-duration` / `--mrq-gap` | `12s` / `40px` | the only animation |
| `--theme-dt` | `0s` | transitions off |

**Mobile does not reflow — it re-scales.** The same tokens are redefined with roughly 2× fractions (`--fs-20: calc(.0367347 * var(--client-width))`) so the 980 poster stays legible at phone width. Keep this behaviour; don't swap it for breakpoint layouts.

---

## The three artistic decisions to preserve

1. **The vector page.** Never write a raw `px` in a layout rule. Write `calc(N * var(--px))`, where `N` is the value you'd have used on a 980px canvas. This single habit reproduces 80% of the feel.

2. **Type on the baseline.** Font-size and line-height are both derived from the 10px baseline (`--bh`). Line-heights are baseline multiples — 10/15/20/30/40 — never ratios like 1.45. Set tracking to a constant −0.5px that scales with the page.

3. **Thin, square, still.** Max weight 300 for anything that isn't the poster headline. Radius 0 everywhere except pills. 0.75px hairline rules instead of shadows. No transitions, no scroll animation, no parallax. One accent colour, used like ink.

---

## The page — 7 sections, in this order

The source's structure is the spine. Don't add sections, don't reorder.

### 01 · Nav (sticky, 80px, flat white, hairline bottom rule)
Wordmark left, set in the small cut at ~23px, weight 100. Then **icon-led link groups**: a black geometric glyph followed by a stacked list of 2–3 plain-text links at 13px. No pills, no blur, no shadow. Cart/CTA sits right in a hairline-bordered rectangle. Hover = accent colour, nothing else.

### 02 · Hero (fills the viewport below the nav)
**The type IS the image.** One enormous uppercase display headline (~120px at 980, line-height 110px, negative tracking), left-aligned, black on white — it should feel like a printed poster, not a hero banner. Lede paragraph beneath at 18px, max 38ch. A row of 3 technical spec pairs (label in grey, value in the accent). Two rectangular CTAs: solid black primary, hairline ghost secondary.

### 03 · Model grid (hairline-divided tiles)
Eyebrow (9px, uppercase, grey) + h2. Then a 3-up grid of tiles separated by **0.75px rules, not gaps** — the tiles touch. Each: product shot on `#f5f5f5`, a pill badge in the accent, a title in the large cut at Light 300, and 2 lines of body. No cards, no shadows, no lift on hover.

### 04 · Spec table (the product is data)
A plain two-column table, 13px, each row closed with a hairline. Label left in grey, value right in the large cut. This section is the site's honesty — teenage.engineering treats the specification sheet as a design element, and so should a truck site.

### 05 · Marquee (the only motion on the page)
A single-line uppercase marquee at 23px, 12s linear, boxed top and bottom in a black hairline. It is the one moving thing — that's why it works. Respect `prefers-reduced-motion`.

### 06 · Inverse band
Full-width `#0f0e12`, `#f5f5f5` text, centred. One h2 and one light CTA. No gradient, no orb, no glow — the colour inversion is the whole effect.

### 07 · Footer
4-column link grid at 13px, then a **giant uppercase wordmark** (~140px, line-height 0.85) running the width of the page, then a 9px legal line in grey.

---

## House rules

- No drop shadows, ever. Surfaces separate via 0.75px hairline rules.
- No gradients, no glows, no glassmorphism, no orbs.
- Radius is `0`. The only exception is `9999px` for pill badges and circular icon buttons.
- Nothing heavier than weight 300 except the poster display headline.
- One accent colour per screen, used like ink — on ~3 elements, no more.
- No stock photography and no people. Product shots on flat grey, technical glyphs, and type.
- Never write a raw `px` in a layout rule — always `calc(N * var(--px))`.
- No scroll-jacking, no reveal-on-scroll, no parallax. Native scroll only.
- CTAs ≤ 4 words. Banned words: revolutionary, seamless, unleash, empower, transform, game-changing, supercharge, world-class.
- **The brief is the spec, not the product.** Do NOT render a theme picker, typography sliders, token readouts ("BASELINE: 10px"), or a grid overlay toggle. The site is the finished application of the system — silent, not self-referential.
- Do not reproduce the source's copy, illustrations, glyphs, or wordmark. The system is the takeaway; the content is yours.

---

## Copy to write for {{BRAND}}

```
ACCENT           {{ACCENT}}   ← your pink, replacing the source's #f05a24

NAV
  Wordmark:      {{BRAND}}
  Links:         {{NAV_1}} … {{NAV_5}}   (grouped 3 + 2, behind glyphs)
  CTA:           {{NAV_CTA}}             (≤2 words)

HERO
  Headline:      {{HERO_HEADLINE}}       (≤5 words, uppercase, declarative)
  Lede:          {{HERO_LEDE}}           (1 sentence, ≤60ch)
  Specs:         3 × {{SPEC_LABEL}} / {{SPEC_VALUE}}
  CTAs:          {{HERO_CTA_PRIMARY}} / {{HERO_CTA_SECONDARY}}

MODEL GRID (3 tiles)
  Eyebrow / headline, then per tile: {{TILE_BADGE}} (1 word, uppercase),
  {{TILE_TITLE}}, {{TILE_BODY}} (≤2 sentences)

SPEC TABLE
  Eyebrow / headline, then 4–8 rows of {{SPEC_ROW_LABEL}} / {{SPEC_ROW_VALUE}}

MARQUEE
  {{MARQUEE_TEXT}}   (a short uppercase phrase, repeats)

INVERSE BAND
  {{BAND_HEADLINE}} (5–7 words) / {{BAND_CTA}} (≤4 words)

FOOTER
  {{FOOTER_TAGLINE}}, 3 × 3 links, {{BRAND_UPPERCASE}}, {{LEGAL}}
```

---

## Acceptance criteria

A. Every layout dimension is `calc(N * var(--px))` — grep the output for raw `px` in layout rules; only `--border-width: 0.75px` and `--btn-min-click-area: 48px` are allowed.
B. Every `line-height` is a multiple of `--bh` (10px baseline).
C. No `font-weight` above `300` outside the poster headline.
D. No `box-shadow` and no `border-radius` other than `0` / `9999px`.
E. The 7 sections appear in order. No extras.
F. Exactly one accent colour, on ≤3 elements per screen.
G. Exactly one animation on the page (the marquee), gated by `prefers-reduced-motion`.
H. Resizing the browser scales the page as one object — nothing reflows on desktop.

Return one self-contained HTML file, ready to deploy.

---

## Appendix A — HTML scaffold

See `scaffold.html` in this kit. It implements every rule above with `{{slots}}` left empty for your copy. Open it in a browser and resize the window — you'll see the poster scale.

---

*Brief generated by the `design-language` skill. The source provided the design language; the brand, the copy, and the imagery are yours.*
