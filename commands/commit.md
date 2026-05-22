---
description: Create a clean commit in Conventional Commits format
---

steps: [git-status+diff, group-logical-units, commit]
format: "<type>(<scope>): <subject>\n\n<why>\n\n<footer>"
types: {feat: new-feature, fix: bug, docs: docs, style: fmt-only, refactor: refactor, test: tests, chore: build/config}
rules: [subject-under-50-imperative, body-explains-why, one-logical-change, scope-is-module]
context: $ARGUMENTS
