---
name: commands-vs-skills
description: 커맨드(/plan 등)와 스킬(SKILL.md) 정의 구분 및 동명 충돌 처리 규칙
metadata:
  type: reference
---

커맨드(`~/.claude/commands/*.md`, 사용자가 `/plan`·`/commit` 등 직접 입력) / 스킬(`~/.claude/skills/*/SKILL.md`, 에이전트가 Skill 툴로 호출). 동명이면 커맨드 우선, 커맨드 변경 시 동명 스킬 일치 확인.
