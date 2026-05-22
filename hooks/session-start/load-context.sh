#!/bin/bash
# Session start: reference lessons + clean up old backups

# Keep only the 3 most recent backups per pattern
for pattern in ".claude.json.backup" "settings.json.backup" "CLAUDE.md.backup"; do
  ls -t ~/.claude/backups/${pattern}.* 2>/dev/null | tail -n +4 | xargs rm -f 2>/dev/null
done

cat <<'EOF'
{
  "additionalContext": "Before starting work, check ~/.claude/memory/lessons.md to avoid repeating past mistakes."
}
EOF
