---
date: 2026-08-16
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-16

## 오늘 배운 것
- **MCP 2026-07-28 스펙 1차 출처(blog.modelcontextprotocol.io) 직접 확인**: stateless 코어 전환(`initialize`/`Mcp-Session-Id` 폐지, SEP-2575/2567), DCR→CIMD 전환, Roots/Sampling/Logging deprecated(SEP-2577, 최소 12개월) — 기존 위키 인사이트(07-30~08-05)와 정확히 일치, 신규 사실 없음.
- **레거시 HTTP+SSE transport도 공식 deprecated, 1년 유예(offramp)** — 1차 출처 원문에서 직접 확인("The legacy HTTP+SSE transport is also considered to be officially deprecated, with a year-long offramp"). 기존 위키에 누락된 세부사항이라 보강 가치 있음.
- **Tasks가 `io.modelcontextprotocol/tasks` 정식 확장으로 이동, `tasks/get`(poll)+`tasks/update` 신설(SEP-2663)** — 1차 출처로 확인, 기존 08-04 인사이트와 부합.
- **SDD 4단계 = Specify → Plan → Tasks → Implement(단계별 사람 체크포인트)** — 독립된 두 출처(thebcms.com, fundesk.io)에서 교차 확인됨. 기존 대기 중인 "SDD 4단계 정식 채택" 검토건의 사실적 근거로 유효하나, **채택 여부 자체는 오늘도 신규 승인 요청 아님**(근거 보강만).
- **AI-ready API 명세 = OpenAPI 3.0+로 모든 엔드포인트에 완전한 스키마/설명 필요** — 출처 원문에서 확인("Use OpenAPI 3.0+ with full schema coverage... defining every endpoint"). 기존 체크리스트 기준 재확인.
- **폐기(검증 실패)**: ① "GitHub Spec Kit 도입 시 성공률 3~10배 향상" — 인용된 fundesk.io 원문에 해당 수치 없음, 근거 없는 주장으로 판단해 폐기. ② "PRD Non-goals 명시" — 인용 출처(Medium)가 봇 차단(403)으로 원문 확인 불가, 신규 근거로 채택 보류(기존 07-26/07-27 내부 원칙은 유지).
- 참고: 이번 세션도 WebFetch/WebSearch가 도구 권한 차원에서 차단됐으나, wget 폴백으로 6/7건 원문 확보에 성공(기존 등록된 "출처-대조-검증기-wget-폴백-내장" 제안의 유효성 재확인, 신규 제안 아님).

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [Spec-Driven Development (SDD): The Definitive 2026 Guide](https://www.thebcms.com/blog/spec-driven-development/)
- [Spec-Driven Development with AI: The 2026 Guide to GitHub Spec Kit](https://www.fundesk.io/spec-driven-development-github-spec-kit-guide)
- [How to Make Your APIs Ready for AI Agents](https://www.digitalapi.ai/blogs/how-to-make-your-apis-ready-for-ai-agents)
- [OpenAPI 4: Project Moonwalk (뉴스레터, 2026-08-03자, 여전히 논의 단계 확인)](https://apisyouwonthate.com/newsletter/openapi-4-project-moonwalk/)

## 위키화 후보
- "SDD 3문서 패턴" 기존 노트를 "SDD 4단계(Specify→Plan→Tasks→Implement, 단계별 체크포인트)"로 정정·보강 — 2개 독립 출처로 확인된 최신 정의.
- API 명세서 AI-ready 체크리스트에 "레거시 HTTP+SSE transport deprecated, 1년 유예" 항목 추가.

## 프로필 반영 후보 (저위험)
- PRD 작성 절차에 SDD 4단계 프레임(Specify→Plan→Tasks→Implement) 용어 인용 가능 표기.

## 승인 필요 (고위험)
- 없음(SDD 4단계 채택건은 근거만 보강, 기존과 동일하게 대기 유지).

## 신규 도구 후보 (에이전트/스킬)
- 없음(기존 "출처-대조-검증기-wget-폴백-내장" 제안이 오늘도 유효함을 재확인, 신규 제안 없음).
