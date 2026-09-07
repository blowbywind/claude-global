---
date: 2026-07-23
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-23

## 오늘 배운 것
- MCP 정식 스펙은 아직 RC 단계(2026-05-21 고정)이며, 정식 발표는 2026-07-28 예정(오늘 07-23 기준 5일 후, 미발표) — 공식 출처(blog.modelcontextprotocol.io)라 신뢰도 높음.
- MCP 기능수명주기(SEP-2596: Active→Deprecated→Removed, Deprecated 최소 12개월 유지)가 RC에 반영된 것으로 확인되나, 인용 출처가 3rd-party 블로그(stacktr.ee) 단일건 — **2026-07-19 인사이트의 "정식발표(07-28) 이후 재확인" 전제는 아직 충족되지 않음**. "검증된 사실로 확정" 처리는 시기상조로 보류, 잠정 유지가 타당함.
- elicitation/sampling이 Multi Round-Trip Requests(SEP-2322, InputRequiredResult/inputRequests/inputResponses)로 대체 예정 — 동일 사유로 잠정(정식발표 후 재확인 필요), AI-ready 체크리스트 반영은 보류.
- MCP stateless 전환(initialize 핸드셰이크·Mcp-Session-Id 제거) 및 OAuth 2.1 리소스서버 공식화+iss 파라미터 검증(RFC 9207)은 구조적으로 큰 변화이나 3rd-party 출처(4sysops, workos) 단일건이라 확정 보류.
- OpenAPI 3.2(태그 메타데이터 summary/parent/kind, 스트리밍 페이로드 itemSchema)는 2025-09-19 이미 정식 릴리스됨 — 공식 출처(openapis.org)로 신뢰도 높고 즉시 활용 가능.
- GitHub Spec Kit v0.11.0/30+ 에이전트 지원/90k+ 스타는 기존 "SDD 4단계 채택 검토(07-13 대기)"에 대한 근거 보강일 뿐, 신규 승인 요청 사안 아님(07-16 패턴과 동일).

## 출처
- [MCP Release Candidate 공지](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [MCP 2026 스펙 변경사항](https://stacktr.ee/blog/mcp-2026-spec-changes)
- [MCP stateless·인가 강화](https://4sysops.com/archives/2026-07-28-model-context-protocol-mcp-stateless-multi-round-trip-routable-headers-authorization-hardening/)
- [MCP 2026 인가 SEP](https://workos.com/blog/mcp-2026-spec-agent-authentication)
- [OpenAPI v3.2 발표](https://www.openapis.org/blog/2025/09/23/announcing-openapi-v3-2)
- [GitHub Spec Kit](https://github.com/github/spec-kit)

※ 이번 세션은 WebFetch/WebSearch 권한 미승인으로 직접 재검증(fetch) 불가 — 위 판단은 출처의 공식성(1차 vs 3rd-party)과 날짜 정합성(오늘 07-23 vs 정식발표 07-28) 대조로 수행함. getperspective.ai PM 도구 트렌드 항목은 마케팅성 리스티클로 기획 업무 직결성 낮아 제외.

## 위키화 후보
- "MCP Multi Round-Trip Requests(SEP-2322)" — elicitation/sampling 대체 예정 개념, AI-ready 체크리스트 확정 시 근거 노트 필요

## 프로필 반영 후보 (저위험)
- API 명세서 "AI-ready" 배경지식에 "OpenAPI 3.2(태그 표준화·스트리밍 1급지원, 2025-09-19 정식)" 버전 용어 갱신

## 승인 필요 (고위험)
- 없음(신규 승인 요청 아님 — 기존 07-19 대기 항목은 이번 자료로도 확정 조건 미충족이라 대기 유지 판단만 추가)

## 신규 도구 후보 (에이전트/스킬)
- 없음(카탈로그에 이미 "출처-대조-검증기" 에이전트 존재 — 다음 웹리서치 검증 단계부터는 이 세션의 WebFetch 권한 문제 회피를 위해 해당 에이전트 위임 검토 권장)
