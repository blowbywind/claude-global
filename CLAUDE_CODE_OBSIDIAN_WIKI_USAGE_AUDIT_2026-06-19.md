# Claude Code Obsidian Wiki Usage Audit

Date: 2026-06-19
Scope: Claude Code, Obsidian wiki as "second brain", local Claude configuration, MCP, hooks, subagents, and memory workflow.

## Executive Summary

Conclusion: I cannot certify that Claude Code is "perfectly" using the Obsidian wiki yet. The current design intent is strong, but the verified operating state is not sufficient.

The strongest positive signal is that the operating guide explicitly treats Obsidian as the long-term knowledge ledger and defines expected paths for decisions, project notes, and work-in-progress state. The strongest negative signal is that the live verification paths failed: local shell execution failed before any command ran, and the Obsidian MCP server timed out on vault listing, search, and direct note reads.

Current confidence: medium-low for live-state conclusions, high for architectural recommendations.

Provisional maturity score: 42 / 100

- Intent and workflow design: 75 / 100
- Claude Code native memory alignment: 45 / 100
- Obsidian MCP operational evidence: 10 / 100
- Auditability and enforcement: 25 / 100
- Security posture for second-brain access: 45 / 100

## Verification Attempted

### Local command verification

Attempted checks:

- Search Codex memory registry for Obsidian and Claude Code prior context.
- Run a minimal `pwd` command in `/home/bbw/ai-ops`.
- Retry `pwd` with escalated execution approval.

Observed result:

```text
bwrap: execvp /home/bbw/.vscode-server/extensions/openai.chatgpt-26.616.30709-linux-x64/bin/linux-x86_64/codex: No such file or directory
```

Impact:

Local shell verification was blocked by the current Codex execution wrapper before any project-level command could run. This prevented direct inspection of `~/.claude/CLAUDE.md`, `~/.claude/settings.json`, `~/.claude.json`, `~/.claude/agents/`, `~/.claude/projects/*/memory/`, and project-level `.mcp.json` or `.claude/` directories.

### Obsidian MCP verification

Attempted checks:

- `list_available_vaults`
- Search `bbw-wiki` for `Claude Code`
- Search `bbw-wiki` for `work-in-progress`
- Search filenames for `decisions`
- Read `claude/work-in-progress.md`
- Read `wiki/entities/kimyoil.md`
- Read `wiki/sources/2026-06-10-loop-design-kimyoil.md`

Observed result:

All Obsidian MCP calls timed out after approximately 60 seconds.

Impact:

The most important integration path for "second brain" usage was not healthy in this session. A second-brain workflow cannot be considered reliable if the agent cannot consistently search, read, and write the vault through its configured tools.

### Official documentation baseline

Checked official Claude Code documentation for:

- Persistent instructions and memory: https://code.claude.com/docs/en/memory
- Settings and permissions: https://code.claude.com/docs/en/settings
- MCP configuration and scopes: https://code.claude.com/docs/en/mcp
- Custom subagents: https://code.claude.com/docs/en/sub-agents
- Hooks: https://code.claude.com/docs/en/hooks

## Baseline: What "Perfect Usage" Would Mean

Claude Code would be using Obsidian as a second brain well if all of the following are true.

1. Claude can reliably discover and load operating instructions.
2. Claude can reliably search the Obsidian vault before work when prior decisions may matter.
3. Claude can write durable work records, ADRs, and project status updates back into the vault.
4. Claude's native auto memory and Obsidian are not competing ledgers.
5. Hooks enforce important safety and recordkeeping behavior where instructions are not enough.
6. Subagents have scoped access and do not casually inherit broad write permissions to the wiki.
7. Sensitive files and credential-like paths are denied at the Claude Code settings layer.
8. There is an observable audit trail proving what instructions, vault notes, and MCP servers were loaded.

## Key Findings

### Finding 1: Obsidian is defined as the long-term ledger, but live access was not verified

Severity: high

The operating guide says important decisions, work records, and failure causes should be left in `~/obsidian-vault/bbw-wiki/`. It also defines target folders:

- `claude/decisions/`
- `claude/projects/`
- `claude/work-in-progress.md`

This is a good information architecture. However, the Obsidian MCP server timed out for listing, search, and read operations. Until this is fixed, Claude Code cannot be assumed to be using the wiki reliably.

Required follow-up:

```bash
claude mcp list
```

Inside Claude Code:

```text
/mcp
```

Then run a practical test:

```text
Search the Obsidian wiki for the current project note, summarize the latest status, then append a short WIP entry.
```

Acceptance criteria:

- Claude can list the Obsidian MCP server as connected.
- Claude can search the vault.
- Claude can read a known note.
- Claude can write a small timestamped WIP entry.
- The written entry is visible in Obsidian.

### Finding 2: `AGENTS.md` is not enough for Claude Code unless bridged through `CLAUDE.md`

Severity: high

Official Claude Code documentation says Claude Code reads `CLAUDE.md`, not `AGENTS.md`. If this global guide exists only as `AGENTS.md`, Claude Code may not load it. The correct pattern is to create a `CLAUDE.md` that imports `AGENTS.md`:

```markdown
@AGENTS.md

## Claude Code

Use Obsidian as the long-term knowledge ledger. Search relevant notes before work, and update WIP, project notes, or ADRs when the task creates durable knowledge.
```

Required follow-up:

- Verify `~/.claude/CLAUDE.md` exists.
- Verify project roots under `/home/bbw/projects` have `CLAUDE.md` or `.claude/CLAUDE.md`.
- Verify any `AGENTS.md`-only project has a `CLAUDE.md` import bridge.

Acceptance criteria:

- `/memory` shows the expected `CLAUDE.md` files loaded.
- The Obsidian workflow appears in a loaded `CLAUDE.md`, not only in an external agent guide.

### Finding 3: Claude Code auto memory and Obsidian are currently separate ledgers

Severity: medium-high

Claude Code auto memory stores per-project memory under `~/.claude/projects/<project>/memory/`. It loads only the first 200 lines or 25 KB of `MEMORY.md` at session start, and topic files are read on demand.

That is useful working memory, but it is not the same as the Obsidian wiki. A strong second-brain setup needs explicit division of responsibility:

- Claude auto memory: compact operational learnings, build commands, recurring debugging insights.
- Obsidian wiki: durable decisions, project state, source notes, entity notes, failure postmortems, handoff state.

Risk:

Claude may remember a useful project fact locally but never promote it into Obsidian. Conversely, Obsidian may contain a decision that Claude does not search before acting.

Recommended policy:

```markdown
## Memory Promotion Policy

- Keep short recurring execution facts in Claude auto memory.
- Promote durable decisions to `claude/decisions/`.
- Promote project status changes to `claude/projects/`.
- Update `claude/work-in-progress.md` before long pauses, machine switches, or session end.
- Search Obsidian before planning if prior decisions, user preferences, or project history may affect the task.
```

### Finding 4: Instructions alone cannot enforce wiki usage

Severity: medium-high

Claude Code documentation is clear that `CLAUDE.md` instructions are context, not hard enforcement. For mandatory behaviors, use hooks.

The current guide asks Claude to update Obsidian in important situations. That is a good rule, but it is not enforceable unless supported by hooks or a review checklist.

Recommended hooks:

- `InstructionsLoaded`: log exactly which `CLAUDE.md` and rules files loaded.
- `SessionStart`: inject current project status from Obsidian or remind Claude to check it.
- `Stop` or `SessionEnd`: warn if a long-running task ended without WIP/project-note update.
- `PreToolUse`: block or ask before destructive commands.
- `PostToolUse`: log important writes, test failures, or command failures into a session audit stream.

Do not over-automate writes into Obsidian at first. Start with observability and prompts, then enforce only the high-value cases.

### Finding 5: Obsidian MCP access needs a security boundary

Severity: medium

MCP is powerful because it lets Claude interact directly with external tools and data. That also expands the prompt-injection and data-exposure surface. Official docs recommend trusting MCP servers before connecting them, and Claude Code settings support `permissions.deny` for sensitive files.

Recommended controls:

```json
{
  "permissions": {
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)",
      "Read(~/.ssh/**)",
      "Read(~/.aws/**)",
      "Read(~/.config/gcloud/**)"
    ]
  }
}
```

For Obsidian specifically:

- Prefer a narrow vault MCP server over broad filesystem access.
- Keep credential notes out of the vault or under a path denied to agents.
- Treat pasted web/source notes as untrusted content.
- Keep write operations explicit for ADR/project/WIP folders.

### Finding 6: Subagent routing is conceptually strong but needs tool scoping

Severity: medium

The guide defines roles like `research-agent`, `code-reviewer`, and `evaluator-strict`. That matches Claude Code's subagent model well.

However, subagents inherit tools by default unless restricted. For a second-brain workflow, research and evaluation agents should usually be read-only, while only a small number of agents should write to Obsidian.

Recommended subagent permissions:

- `research-agent`: read-only code/search/wiki access, no file writes.
- `code-reviewer`: read-only repo access, optional test-output access, no Obsidian writes.
- `evaluator-strict`: read-only access, no writes.
- Main agent or dedicated `knowledge-ledger-agent`: allowed to write ADR/WIP/project notes.

### Finding 7: The current verification surface lacks an audit trail

Severity: medium

There should be a lightweight way to answer:

- Which instruction files loaded?
- Which Obsidian notes were read?
- Which notes were written?
- Which MCP servers were connected?
- Which hooks blocked or warned?

Recommended audit file:

```text
~/obsidian-vault/bbw-wiki/claude/audit/YYYY-MM.md
```

Suggested entry format:

```markdown
## 2026-06-19 HH:mm KST

- Project:
- Session:
- Loaded instructions:
- Obsidian notes read:
- Obsidian notes written:
- MCP servers:
- Tests/verification:
- Open risks:
```

## Recommended Implementation Plan

### Phase 1: Restore live verification

Priority: immediate

1. Fix the current local command execution wrapper issue.
2. Verify Claude Code itself:

```bash
claude --version
claude mcp list
```

3. Verify Obsidian MCP from inside Claude Code:

```text
/mcp
```

4. Run a read/write smoke test against `bbw-wiki`.

Success criteria:

- Shell commands work.
- Claude Code version is known.
- Obsidian MCP is connected.
- Claude can read and write a test note.

### Phase 2: Verify instruction loading

Priority: immediate

1. Open `/memory` in Claude Code.
2. Confirm these are loaded where expected:

- `~/.claude/CLAUDE.md`
- `/home/bbw/projects/CLAUDE.md`
- Project-level `CLAUDE.md` or `.claude/CLAUDE.md`
- Any `.claude/rules/*.md`

3. Add `CLAUDE.md` import bridges for any `AGENTS.md`-only projects.
4. Keep each always-loaded `CLAUDE.md` under roughly 200 lines where possible.

### Phase 3: Define Obsidian knowledge contracts

Priority: high

Create or update:

- `claude/work-in-progress.md`
- `claude/projects/<project>.md`
- `claude/decisions/YYYY-MM-DD-<slug>.md`
- `claude/audit/YYYY-MM.md`

Add a short policy:

```markdown
Before starting non-trivial work, search Obsidian for related project notes, decisions, and WIP. After durable changes, update the relevant WIP, project, or ADR note.
```

### Phase 4: Add observability hooks

Priority: high

Start with non-blocking hooks:

- `InstructionsLoaded` hook to log loaded instruction files.
- `SessionStart` hook to surface project WIP context.
- `Stop` hook to remind about WIP updates after substantial tasks.

Only after the logs are stable, add blocking hooks for destructive commands and sensitive-file access.

### Phase 5: Scope subagents

Priority: medium

Audit `~/.claude/agents/` and project `.claude/agents/`.

For each subagent, verify:

- `name`
- `description`
- `tools` or `disallowedTools`
- `mcpServers`
- whether it can write to Obsidian
- whether it should have memory enabled

Default stance:

- Research and review agents: read-only.
- Ledger-writing: main agent or one explicit knowledge agent.

## Final Judgment

Claude Code appears designed to use Obsidian as a serious long-term knowledge ledger, but the current state cannot be called complete or perfect.

The biggest blockers are operational, not conceptual:

1. Obsidian MCP timed out repeatedly.
2. Local shell verification failed due to a broken command wrapper.
3. There is no verified proof that Claude Code is loading the Obsidian workflow through `CLAUDE.md`.
4. There is no verified audit trail showing read/write behavior against the wiki.
5. Instructions are not yet backed by hooks or explicit acceptance checks.

Once MCP health, instruction loading, and audit hooks are verified, this setup can become strong. The target is not "Claude remembers everything"; the target is "Claude knows when to consult the wiki, when to promote memory into the wiki, and how to prove that it did so."

