# mistake-log: [date] situation / mistake / lesson
mistakes:
  - date: 2026-05-23
    situation: global Claude config optimization
    mistake: storing .credentials.json in git from the start
    lesson: sensitive files (.credentials, auth-cache, *.key) must be in .gitignore before first commit

  - date: 2026-05-23
    situation: hook design
    mistake: duplicating deny rules in both permissions.deny and pre-tool-use hooks
    lesson: permissions.deny handles blocking without shell fork overhead; hooks only needed for logic beyond simple matching

  - date: 2026-05-23
    situation: context token optimization
    mistake: writing config/memory files in Korean markdown
    lesson: english yaml is ~70% more token-efficient than korean markdown; use kr command for human reading

  - date: 2026-05-23
    situation: session cleanup
    mistake: deleting file-history/ and session-env/ during active session
    lesson: claude code runtime folders (file-history, session-env, sessions) must not be touched while session is active
