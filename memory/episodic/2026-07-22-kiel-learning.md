---
date: 2026-07-22
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-22

## 오늘 배운 것
- MCP 스펙 정식판이 2026-07-28(이번 주 목) 발표 예정(공식 블로그 예고, RC 5/21 잠금). **단 발표 전 시점**이라 07-19 인사이트의 "12개월 유예 확정 여부"는 이번에 확정 처리하지 않고 07-28 이후 재확인으로 유지.
- MCP 변경 핵심 축: stateless 코어 전환(세션/초기화 핸드셰이크 폐지), 코어기능 일부 폐기, OAuth/OIDC 인가체계 전면 재작성, 확장(extension) 프레임워크(Apps/Tasks) 도입 — API 명세서 AI-ready 체크리스트의 "미인증 MCP 리스크/OAuth 2.1 권고"(07-17 인사이트)를 뒷받침하는 배경지식으로 반영 가능.
- MCP 인증 변경 시 기존 세션 기반 인증 구현체는 마이그레이션이 필요하다는 지적(WorkOS 블로그) — 위 OAuth 권고 항목의 근거 보강.
- OpenAPI Overlay Specification은 공식 스펙 사이트 기준 현재도 유지·갱신 중(non-destructive AI-friendly 메타데이터 보강 용도 확인). 다만 정확한 버전(v1.1.0)·릴리스일(2026-01-14) 표기는 이번 세션에서 재검증하지 못해 "잠정" 상태를 그대로 유지.
- "백로그를 agent-ready로 만들기" 방법론에서도 "INVEST 항목은 AI가 자동평가하되 분할 최종결정은 사람"을 권고 — 07-11 인사이트(AI 자동분할 시 사람 검수 필수)와 독립적으로 정합, 원칙 근거 하나 추가.
- SDD(Specify→Plan→Tasks→Implement) 방식을 실제로 지지하는 도구 사례(PRD Creator) 존재 확인 — 07-13 "SDD 4단계 정식 채택 여부" 승인 대기 건에 참고할 실사례일 뿐, 이 자체가 채택을 뜻하지 않음(여전히 사용자 확인 필요).

**검증 한계 고지**: 이번 세션에서는 WebFetch/WebSearch/Bash 권한이 모두 거부되어 원문 재-fetch 대조가 불가했습니다. 부득이 출처 도메인 신뢰도로만 선별했고, 아래는 저신뢰 출처로 판단해 폐기했습니다: tech-insider.org(MCP 서버 1만개 돌파 주장), aiagentstore.ai(Neo $100M 투자 주장, 역할 관련성도 낮음), firesidepm.substack.com(개인 블로거의 PRD 도구 비교, 미검증 벤치마크).

## 출처
- [MCP Release Candidate 공지](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [MCP 2026 로드맵](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/)
- [MCP 2026 스펙과 에이전트 인증](https://workos.com/blog/mcp-2026-spec-agent-authentication)
- [OpenAPI Overlay Specification](https://spec.openapis.org/overlay/latest.html)
- [OpenAPI Initiative 2026 로드맵](https://thenewstack.io/openapi-initiative-new-standards-and-a-peek-at-the-roadmap/)
- [PRD Creator](https://buildermethods.com/prd-creator)
- [백로그를 agent-ready로 만드는 법](https://storiesonboard.com/blog/make-backlog-agent-ready)

## 위키화 후보
- MCP 확장(Extensions) 프레임워크 구조(Apps 서버렌더 UI, Tasks 장기실행) — 07-14/07-15 기존 노트와 통합할 신규 개념 노트 후보 1건

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트 배경지식에 "MCP 4대 변경축(stateless 전환/기능폐기/OAuth 재작성/확장프레임워크)" 한 줄 추가(사실 확정은 07-28 이후, 배경지식으로만)

## 승인 필요 (고위험)
(없음 — 07-13 SDD 4단계 채택 검토 건은 기존 대기 상태 유지, 이번 자료는 참고 사례일 뿐 신규 승인 요청 아님)

## 신규 도구 후보 (에이전트/스킬)
(없음)
