---
date: 2026-08-08
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-08

웹리서치 결과를 교차검증한 결과는 다음과 같습니다. (WebFetch 재검증 도구가 이번 턴에는 권한 미승인 상태라 직접 재조회는 못 했으나, 출처 도메인의 공신력(공식 블로그·GitHub 공식 저장소)과 기존 위키 기록과의 정합성으로 판단했습니다.)

## 오늘 배운 것
- MCP 2026-07-28 스펙이 정식(GA) 발표로 확인됨 — 07-22에 "RC라 완전 확정 보류"로 기록해둔 판단을 철회. API 명세서 AI-ready 체크리스트의 "MCP 장기실행 작업 상태값/12개월 유예" 항목을 실험적 표기에서 확정 스펙 표기로 전환 가능.
- 이번 스펙의 핵심 변경 4가지 확인: ①프로토콜 코어 stateless 전환(로드밸런서 뒤 임의 인스턴스 라우팅 가능) ②Extensions 프레임워크 공식화(Tasks·MCP Apps·EMA 포함) ③Tasks가 실험 코어에서 `io.modelcontextprotocol/tasks` 확장 네임스페이스로 이동 ④12개월 최소 지원중단 유예 정책 공식화.
- MCP Apps(`ui://` 리소스, iframe 렌더링 UI 확장)가 Extensions 프레임워크에 정식 편입됨 — API 명세서 AI-ready 체크리스트에 항목 추가를 검토할 가치는 있으나, 이번 세션은 근거 축적만 하고 신규 항목 승인 요청은 다음으로 보류.
- OpenAPI 4.0(Moonwalk)은 여전히 설계/초안 단계, 현행 안정판은 3.2.0 — 기존 위키 기록과 일치, 신규 사실 없음(변경 불필요).
- SDD(Spec-Driven Development)가 업계 채택 확대 중(GitHub Spec Kit 등 주요 AI 코딩 툴 다수 채택) — "PRD 작성 절차에 SDD 4단계 정식 채택" 검토 건에 정량적 근거 보강. 단, 작업방식 변경 사안이므로 채택 여부는 여전히 사용자 확인 필요(임의 확정 금지).

## 출처
- [MCP 2026-07-28 스펙 발표](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [MCP Apps 확장 개요](https://modelcontextprotocol.io/extensions/apps/overview)
- [MCP Apps 최초 공식화](https://blog.modelcontextprotocol.io/posts/2026-01-26-mcp-apps/)
- [OpenAPI Moonwalk(4.0) 저장소](https://github.com/OAI/sig-moonwalk)
- [GitHub Spec Kit 소개](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)

## 위키화 후보
- MCP Apps(`ui://` 리소스 스킴, iframe 기반 UI 확장) — 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트 항목 격상: "MCP 장기실행 작업 상태값/12개월 유예 = 확정 스펙(GA)" 표기로 전환.

## 승인 필요 (고위험)
- PRD 작성 절차에 SDD 4단계(Specify→Plan→Tasks→Implement)를 정식 표준 프로세스로 채택할지 여부 — 업계 채택 근거 보강됐으나 작업방식 변경이라 여전히 사용자 확인 필요.

## 신규 도구 후보 (에이전트/스킬)
(없음)
