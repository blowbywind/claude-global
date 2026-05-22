---
description: Create a detailed plan before starting work
---

task: $ARGUMENTS
rules: [no-code-before-approval]
output:
  goal: what-to-achieve
  scope: {files: list, modules: affected}
  steps: [checklist]
  risks: {expected: list, rollback: method}
  verify: how-to-confirm-success
