---
date: 2026-07-30
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-30

## 오늘 배운 것
- **MCP 2026-07-28 정식 스펙 확정** — 원문(blog.modelcontextprotocol.io) 직접 대조 완료: Tasks가 실험적 core에서 빠져 `io.modelcontextprotocol/tasks` 확장(SEP-2663)으로 정식 이관됨. 2026-07-15 자가학습 항목("실험적 확장임을 표기")이 그대로 유효하되, 이제 "확장 이관"까지 정식 확정된 사실로 격상.
- **기능수명주기 "최소 12개월 유예" 확정** — 원문 "a formal deprecation policy with a twelve-month minimum window" 직접 확인. 2026-07-19 검토 대기 항목이 검증 완료됨.
- **Roots/Sampling/Logging 3개 기능 deprecated 확정(SEP-2577)** — "still work... at least twelve months"로 12개월 유예정책과 동일 적용. 기존 AI-ready 체크리스트에 미반영된 신규 사실.
- **MCP 완전 stateless 전환 확정** — `initialize`/`initialized` 핸드셰이크와 `Mcp-Session-Id` 헤더가 공식 폐지(SEP-2575, SEP-2567), 요청마다 프로토콜버전·클라이언트정보를 자체 포함하는 방식으로 전환. 원문 직접 확인.
- **BMAD-METHOD v6.0.0-alpha.23 릴리스 사실만 확인** — GitHub 페이지 메타데이터에서 릴리스명·"PRD 워크플로 대규모 개편" 제목은 확인했으나, 세부 메커니즘(품질 루브릭 HTML+MD 파이프라인, Create/Update/Validate 3대 인텐트)은 본문이 정적 fetch로 노출되지 않아 이번엔 재검증 불가 — **참고용으로만 취급, 확정 사실로 반영 금지**.
- **MCP Apps "2026-01-26 Final" 날짜 및 SDD 마이터화 서술은 미재검증** — 1차 자료에서 MCP Apps가 기존 확장으로 Tasks와 나란히 언급되는 것은 확인했으나 정확한 발효일자는 원문 확인 못함 → 폐기.

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 1차 소스 직접 fetch·grep 대조 완료(Tasks 확장이관/12개월 유예/Roots·Sampling·Logging deprecated/stateless 전환 4건 전부 원문 확인)
- [BMAD-METHOD Discussion #1306](https://github.com/bmad-code-org/BMAD-METHOD/discussions/1306) — 릴리스 존재·제목만 확인, 본문 세부 미검증

## 위키화 후보
- `mcp-tasks-확장-experimental.md`(07-16 작성) 상태 갱신 필요 — "experimental" 딱지를 "정식 확장 이관(SEP-2663)"으로 승격
- `mcp-기능수명주기-정책-12개월-유예.md`(07-20, ai-curated 대기) → 오늘 원문 재확인 완료로 `status: verified` 승격 가능

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "Roots/Sampling/Logging deprecated(SEP-2577, 최소 12개월 유지)" 항목 추가
- "MCP 완전 stateless 전환(세션 헤더 폐지, 요청별 self-contained)" 확정 사실을 배경지식에 반영

## 승인 필요 (고위험)
- 2026-07-13 대기 항목("SDD 4단계 정식 채택 여부")은 그대로 유지 — 이번 자료도 근거 보강일 뿐, 작업방식 변경 승인 요청 아님

## 신규 도구 후보 (에이전트/스킬)
(없음)
