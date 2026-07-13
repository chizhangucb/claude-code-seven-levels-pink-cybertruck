# Level 3 — Design skills

**Technique:** Install packaged design expertise (Claude skills) so the model knows what good looks like, then invoke it with a real product photo. Skills beat instructions.
**Artifacts:** [Fable demo](../../demos/fable/level-3.html) · [Opus demo](../../demos/opus/level-3.html)

## The prompt (identical for both models, fixed upfront)

> Hey there. I'd like to use all the best skills and the design principles to build me a beautiful website selling pink Cybertrucks. Make sure that's using all relevant skills that I have given you for building beautiful design @reference-real-cybertruck.png
>
> https://github.com/ItsssssJack/power-design.git
> https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git
>
> Btw, do NOT use superpowers plugin in this session.
>
> keep pink-cybertruck-web-level-2.html untouched. name the file as pink-cybertruck-web-level-3.html

## Pre-prompt setup

- `reference-real-cybertruck.png` at the trial-dir root; both skill repos passed as URLs, no pre-install.
- **Normalization (disclosed deviation from round 1):** round 1 gave the two models asymmetric inputs here (only Opus got ui-ux-pro-max and the superpowers exclusion). This round both models got the identical prompt above.
- The superpowers exclusion controls the skill variable; the globally installed skills/plugins at run time are recorded in the run log's preflight section.

**Outcome (Fable):** The design system arrived: 46.8 KB, 2.4× the level-2 file. A self-QA pass caught and fixed a JS-gating issue before declaring done; the superpowers exclusion was respected. 1 prompt, 38 turns, ~454 s, $6.77.

**Outcome (Opus):** 50.7 KB (2.9× level 2). Invented a fictional **"CYBR"** brand with its own disclaimer — a brand it would go on to reuse at level 7 — and produced an extra `hero.png` asset alongside the page. 1 prompt, 57 turns, ~618 s, $5.69.

## Follow-ups

None scripted, none needed. The skills drove.

## Notable

- The predicted "biggest single-level jump" held in both runs: file size roughly doubled-plus vs level 2, exactly the round-1 signature of a type scale, spacing system, and component states arriving.
- Opus's CYBR brand invention at this level pays off four levels later — see [level-7.md](level-7.md).

## What this level taught

- Packaged skills are where "nice page" becomes "design system" — the jump is visible in raw bytes, not just taste.
- Excluding a plugin by name in the prompt works as an experimental control.
