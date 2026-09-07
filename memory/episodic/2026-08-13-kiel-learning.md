---
date: 2026-08-13
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-13

## 오늘 배운 것
- **SDD "3~10배 개선" 주장은 원출처에서 확인 불가**: dev.to 원문을 직접 대조한 결과 "early adopters(GitHub, AWS)는 더 높은 1차성공률을 보고"라는 서술만 있고, 구체적 "3~10배" 수치는 본문에 없습니다. 오히려 원문 자체가 "Vendor-reported numbers should be treated as directional, not proven"이라고 명시 — 신중론 근거가 오히려 강화됨.
- SDD는 Thoughtworks Technology Radar **"Assess"(비채택)** 등급이며, Brandon Kindred "Same Patterns, New Hype"(2026)는 SDD를 워터폴/계약설계 재포장으로 비판 — 원문 확인 완료.
- **MCP 2026-07-28 공식 스펙 블로그 원문 확인**: stateless 코어 전환과 함께 Multi Round-Trip Requests·header 기반 라우팅·캐시가능 list 결과·인가 강화·확장 프레임워크가 동시 발표됨. SDK 누적 다운로드는 TS·Python 각 10억 건 돌파, 월간 약 5억 건 — 공식 출처로 확정.
- OpenAPI 3.2.0에 `additionalOperations`(커스텀 HTTP 메서드)·OAuth 2.0 Device Authorization Flow 포함, **OpenAPI 4.0(Moonwalk)은 여전히 설계단계·미출시** — apiscout.dev 원문 대조 확인.
- AI 에이전트용 API 평가에서 "JSON 스키마 일관성·P95<400ms"가 핵심 기준이라는 서술은 원문(FAQ)에서 확인했으나, **"20% 최고가중치" 구체 수치는 원문에서 직접 확인되지 않음**(추정치로만 취급).
- llms.txt/Markdown 문서화 시 토큰소비 약 90% 절감(HTML 10,000토큰→Markdown 1,000토큰) — fern.com 원문 수치와 정확히 일치, 검증 완료.

## 출처
- [Spec-Driven Development in 2026](https://dev.to/krlz/spec-driven-development-in-2026-what-it-is-the-tooling-and-how-teams-actually-use-it-2fk2)
- [The 2026-07-28 Specification — MCP 공식 블로그](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [OpenAPI 3.2: What's New & Migration Guide 2026](https://apiscout.dev/guides/openapi-4-whats-new-migration-guide-2026)
- [How to Choose an API for AI Agents — 2026 Evaluation Framework](https://blog.apilayer.com/how-to-choose-an-api-for-ai-agents-a-2026-evaluation-framework-with-real-examples/)
- [Prepare APIs & Docs for AI Agent Consumption — Fern](https://buildwithfern.com/post/prepare-apis-documentation-ai-agent-consumption)

## 위키화 후보
- MCP 2026-07-28 스펙 세부 5항목(Multi Round-Trip/header 라우팅/캐시가능 list) + SDK 10억 다운로드 지표 — 기존 스텁 노트 세부 보강.
- "API AI-ready 평가: JSON 스키마 일관성·P95<400ms" 신규 개념 노트.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "llms.txt/Markdown 문서화(토큰 약 90% 절감, 검증완료)" 수치 확정 반영.
- 배경지식에 "MCP SDK 누적 10억·월 5억 다운로드"(공식 출처 확정) 추가.

## 승인 필요 (고위험)
- 대기 중인 "PRD 작성 절차 SDD 4단계 정식 채택" 안건: 이번 검증으로 찬성근거(1차성공률 3~10배)는 원출처에서 확인되지 않았고, 반대근거(Thoughtworks Radar "Assess"·Kindred 비판)만 강화 확인됐습니다. 채택 보류를 유지하며 이 사실을 사용자에게 보고할지 확인 필요.

## 신규 도구 후보 (에이전트/스킬)
(없음)
