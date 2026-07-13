# Level 3 — Design skills

**Technique:** Install packaged design expertise (Claude skills) so the model knows what good looks like, then invoke it with a real product photo. Skills beat instructions.

## Pre-prompt setup

- `reference-real-cybertruck.png` present at trial-dir root (see `docs/asset-checklist.md` #2).
- Both skill repos are passed as URLs in the prompt; no pre-install needed.
- **Normalization note (deviation from round 1, disclosed):** in round 1 the two models got asymmetric inputs (only Opus received ui-ux-pro-max and the superpowers exclusion). This round both models get the identical prompt below — internal A/B validity beats cross-experiment fidelity.

## The prompt

```
Hey there. I'd like to use all the best skills and the design principles to build me a beautiful website selling pink Cybertrucks. Make sure that's using all relevant skills that I have given you for building beautiful design @reference-real-cybertruck.png

https://github.com/ItsssssJack/power-design.git
https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git

Btw, do NOT use superpowers plugin in this session.

keep pink-cybertruck-web-level-2.html untouched. name the file as pink-cybertruck-web-level-3.html
```

## Ready follow-ups

None expected. Let the skills drive.

## Expected outcome

The biggest single-level jump. File size roughly **doubles** vs level 2 in both round-1 runs — that's the design system arriving (type scale, spacing system, component states, responsive rules).

## Watch for (round-1 notes)

- **Fable** ran a self-QA pass (dark mode, 320px reflow, hamburger nav, WCAG contrast) that surfaced and fixed a real CSS specificity bug. Longest level so far (~17 min / $22).
- **Opus** was faster/cheaper and shipped a named concept page.
- The superpowers exclusion line controls the skill variable — record which skills/plugins are globally installed at preflight (run-log has a field for it).

## Log it

Session ID + UTC start timestamp in `docs/run-log-template.md`. Verify `level-3` exists and `level-2` untouched (checksums differ from round 1 practice: just compare mtimes or re-open) before closing.
