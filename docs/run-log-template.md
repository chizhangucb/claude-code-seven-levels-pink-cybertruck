# Run log — pink Cybertruck, round 2

Fill this in **as you go** on run day (round 1 had to reverse-engineer session→level mapping from transcript timestamps — don't repeat that). Session ID is visible in Claude Code (`/status`) or as the transcript filename under `~/.claude/projects/`.

## Preflight (run morning)

- [ ] All 7 prompt files dry-read; filenames say `pink-cybertruck-web-level-N`
- [ ] Skill files re-checksummed against runbook §2 hashes
- [ ] `design-language-skill.zip` built; `unzip -l` shows 4 files
- [ ] `references/` complete: 2 PNGs + 1 MP4 + 1 tsx.txt + 1 zip
- [ ] Firecrawl MCP connected in a test session
- [ ] L7 target re-probed: teenage.engineering root stylesheet still public (else switch to linear.app fallback)
- [ ] MP4 autoplays muted in a browser
- [ ] `fable-trials/` and `opus-trials/` created, assets copied into both, `git check-ignore` confirms both ignored

**Globally installed skills/plugins at run time** (record before the first session — this is the environment half of the experiment):

```
(paste /plugin + skills list here)
```

## Fable 5 run

| Level | Session ID | Start (UTC) | End (UTC) | Prompts sent | Follow-ups used | Output file | SHA-256 | Notes / deviations |
|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  | pink-cybertruck-web-level-1.html |  |  |
| 2 |  |  |  |  |  | pink-cybertruck-web-level-2.html |  |  |
| 3 |  |  |  |  |  | pink-cybertruck-web-level-3.html |  |  |
| 4 |  |  |  |  |  | pink-cybertruck-web-level-4.html |  |  |
| 5 |  |  |  |  |  | pink-cybertruck-web-level-5.html |  |  |
| 6 |  |  |  |  |  | pink-cybertruck-web-level-6.html |  |  |
| 7 |  |  |  |  |  | pink-cybertruck-web-level-7.html |  |  |

## Opus 4.8 run

| Level | Session ID | Start (UTC) | End (UTC) | Prompts sent | Follow-ups used | Output file | SHA-256 | Notes / deviations |
|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  | pink-cybertruck-web-level-1.html |  |  |
| 2 |  |  |  |  |  | pink-cybertruck-web-level-2.html |  |  |
| 3 |  |  |  |  |  | pink-cybertruck-web-level-3.html |  |  |
| 4 |  |  |  |  |  | pink-cybertruck-web-level-4.html |  |  |
| 5 |  |  |  |  |  | pink-cybertruck-web-level-5.html |  |  |
| 6 |  |  |  |  |  | pink-cybertruck-web-level-6.html |  |  |
| 7 |  |  |  |  |  | pink-cybertruck-web-level-7.html |  |  |

(No total rows — per-level numbers only. SHA-256 via `shasum -a 256 <file>` right after the session closes.)

## Incidents / recoveries

Free-form. Anything that deviated from the runbook, and how it was recovered. (Round 1's equivalent: the level-6 overwrite incident — which became one of the best slides. Document failures, don't hide them.)
