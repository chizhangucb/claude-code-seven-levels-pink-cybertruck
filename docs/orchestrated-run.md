# Orchestrated run — let one session drive the whole experiment

Instead of manually opening 14 sessions, open **one fresh Claude Code session** in this repo and let it drive every level via headless `claude -p` invocations. Each level still gets its own *real* Claude Code session (own session ID, own transcript, right model), so the experiment contract and metrics methodology survive intact.

**Feasibility verified 2026-07-12** in this environment:

- `claude -p "<prompt>" --model <id> --output-format json` returns `session_id`, `total_cost_usd`, `duration_ms`, full usage incl. 1-hour cache buckets — the run log fills itself.
- `@filename` mentions resolve in print mode (tested: file content was read).
- `claude -p --resume <session_id>` continues the same session — scripted follow-ups stay inside the level's session.
- Headless sessions write normal JSONL transcripts under `~/.claude/projects/<cwd-slug>/`, keyed by trial-dir cwd — metrics mining works unchanged.

**Disclosed deviation (f):** levels are driven headlessly by an orchestrator rather than typed interactively (round 1 was interactive). Prompt text, assets, models, and session boundaries are identical; only the delivery mechanism differs.

## The kickoff prompt

On run day, open a fresh session at the repo root and paste:

```
Run the full pink Cybertruck seven-levels project end to end — experiment, then tutorial materials, then deployment — following docs/runbook.md, docs/orchestrated-run.md, and docs/publish-plan.md exactly.

PHASE 1 — Experiment
1. Run the full preflight (runbook §2 + run-log checklist). Stop and report if anything fails.
2. Copy docs/run-log-template.md to docs/run-log.md and fill it as you go.
3. Execute both pipelines — Fable 5 (claude-fable-5) in fable-trials/, Opus 4.8 (claude-opus-4-8) in opus-trials/ — strictly sequential within each pipeline, one headless session per level, per the orchestrator loop in docs/orchestrated-run.md.
4. Send only the scripted follow-ups from each docs/prompts/level-N.md, and only when its stated condition is met. Log every follow-up used.
5. After each level: verify the output file exists, level N-1 is untouched, checksum it, log everything.
6. If a level fails verification or errors, stop that pipeline and report — do not improvise recovery prompts.
7. When both pipelines finish, run the post-run steps (runbook §6) through CHECKSUMS generation and verification. Give me an interim summary table before continuing.

PHASE 2 — Tutorial materials (docs/publish-plan.md)
8. Compute per-level metrics into assets/metrics.js (run-log JSON results + transcript mining per CLAUDE.md methodology).
9. Build the tutorial site by adapting round 1's proven code at ~/experimental/design-yellow-iphone-web (index, levels/, compare/, assets/, thumbs) and write docs/prompt-log/.
10. Fill every ⟨TBD⟩ slot in docs/talk-skeleton.md from actual results, then build slides/index.html from the filled skeleton.

PHASE 3 — Verify & deploy
11. Run the full local verification pass (publish-plan §3) with a local server and browser checks.
12. Deploy a Vercel PREVIEW, give me the URL, then STOP — do not deploy to production or create/push any GitHub repo without my explicit go-ahead in that session.
```

## The orchestrator loop (what the session does per level)

For model ∈ {fable, opus}, level ∈ 1..7, from inside the trial dir:

```sh
cd <trial-dir>
claude -p "<prompt text from docs/prompts/level-N.md>" \
  --model <claude-fable-5 | claude-opus-4-8> \
  --output-format json \
  --dangerously-skip-permissions
```

1. **Compose the message.** Levels 1–3, 5–7: the prompt block verbatim (`@` mentions resolve against the trial-dir cwd). Level 4: the full contents of `references/dotted-surface-component.tsx.txt` first, then the prompt block.
2. **Parse the JSON result** → log `session_id`, start/end (wall clock), `total_cost_usd`, `duration_ms`.
3. **Verify** per the level file: output exists with the exact name, level N-1 untouched (`shasum` before/after), level-specific checks (L4: dotted surface present at page bottom; L5: video slotted; L7: kit promoted to a page).
4. **Follow-ups** only from the level file's "Ready follow-ups", only if its condition is observed, via `claude -p --resume <session_id> "<follow-up>" ...` — same flags. Log it.
5. **Checksum + log**, close the loop, next level.

The two pipelines may run in parallel (separate trial dirs → separate transcripts, zero shared files) — e.g. as two background loops — but **never two live sessions in the same trial dir** (hard rule 3).

## Permissions

Recommended: `--dangerously-skip-permissions` on the level invocations. The trial dirs are isolated and disposable, the prompts are fixed, and the levels legitimately need file writes, GitHub fetches (L3 skills), Firecrawl MCP (L6–7), and shell (L7 unzip); prompting would stall a headless run. If that flag feels too broad, the alternative is `--permission-mode acceptEdits` plus an `--allowedTools` list covering WebFetch, Firecrawl MCP tools, and Bash — but expect to iterate on the list.

## Extra preflight for orchestrated mode (on top of runbook §2)

- [ ] `claude -p 'say ok' --model claude-fable-5 --output-format json` and same with `claude-opus-4-8` — both model flags resolve and answer.
- [ ] `claude mcp list` (or a tiny headless probe) confirms **Firecrawl** is available to headless sessions — it's needed at L6/L7.
- [ ] The orchestrator session itself runs from the **repo root**, not a trial dir — its own transcript must not pollute the trial-dir project dirs (round 1's metrics had to exclude the tutorial-building session; same principle).

## What the orchestrator must NOT do

- Rewrite, "fix", or paraphrase the prompts (typos are intentional).
- Send unscripted follow-ups or polish outputs — extra prompts contaminate metrics and the A/B.
- Run levels out of order, skip verification, or touch files inside a level's session scope itself — the model under test does the building; the orchestrator only launches, observes, verifies, and logs.
