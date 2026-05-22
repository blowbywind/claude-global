---
description: Create a clean commit in Conventional Commits format
---

Analyze current changes and commit using Conventional Commits format.

## Steps
1. Run `git status` and `git diff`
2. Group changes into logical units
3. Write commit message in this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types
- **feat**: new feature
- **fix**: bug fix
- **docs**: documentation
- **style**: formatting (no logic change)
- **refactor**: refactoring
- **test**: tests
- **chore**: build/config

## Rules
- Subject under 50 chars, imperative mood (e.g. "add login API", "fix typo")
- Body explains the *why*, not the *what*
- One commit = one logical change
- Scope is module or domain name (e.g. auth, members, db)

## Example
```
feat(auth): add JWT refresh token endpoint

Access token alone couldn't maintain sessions beyond 7 days,
so refresh token issuance and renewal logic was added.

Closes #42
```

Additional context: $ARGUMENTS
