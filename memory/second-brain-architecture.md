---
name: second-brain-architecture
description: Claude Code ↔ Obsidian 세컨드 브레인 4계층 구조 + 메모리 승격 정책. 감사(2026-06-19) 교정 결과.
metadata:
  type: project
---

Claude Code ↔ Obsidian 세컨드 브레인은 4계층으로 분리돼 있다 (2026-06-19 검증).

**계층:**
- 인간 볼트 (`~/obsidian-vault/bbw-wiki/`: `raw/`·`wiki/`·번호폴더) — vault `CLAUDE.md`가 거버넌스
- Claude 원장 (`claude/`: projects·decisions·session-log·WIP·INDEX) — `~/.claude/CLAUDE.md`+hooks가 주입
- 자율봇 로그 (`90-agent-logs/`·`episodic/`) — MCP `obsidian-gateway`(append-only, autobots 전용)가 기록
- 로컬 작업메모리 (`~/.claude/memory/`) — active-rules·lessons, session-start가 주입

**핵심 사실:**
- MCP `obsidian-gateway`는 봇 전용 게이트웨이. 인간 세션은 파일시스템 직결 — MCP 무관.
- `claude mcp list`가 비어 보여도 정상 (게이트웨이는 봇 스케줄러용).

**메모리 승격 정책:**
- 로컬 유지: 반복 명령·빌드/디버깅 팁·재발 방지 규칙
- `claude/decisions/` 승격: 되돌리기 어려운 기술 결정
- `claude/projects/` 승격: 프로젝트 상태 변경
- 작업 전: 과거 결정·선호가 영향 줄 수 있으면 `grep -ri <키워드> ~/obsidian-vault/bbw-wiki/` 먼저 검색

**미해결(사용자 판단):** root 소유권 churn. (SessionEnd 훅은 2026-09-07 확인 결과 settings.json + hooks/session-stop/save-session.sh로 이미 등록·해결됨. taxonomy 중복 명명도 2026-09-07 hnedu-erp.md/hnedu_erp.md 병합으로 해당 사례 해소 — 다른 프로젝트에 유사 사례 재발 가능성은 남아있음)
상세: ADR `claude/decisions/2026-06-19-second-brain-evolution.md`. 관련 [[agent-architecture]].
