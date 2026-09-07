---
date: 2026-08-01
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-01

## 오늘 배운 것
- MCP 2026-07-28 정식 스펙 원문 직접 대조 확인: `Mcp-Session-Id` 헤더·`initialize` 핸드셰이크 완전 폐지, stateless 전환 확정 → API 명세서 AI-ready "MCP stateless 설계" 체크 항목의 근거 확정.
- 기능수명주기 정책(Active→Deprecated→Removed, 최소 12개월 유예) 원문 확인 — 2026-07-19 대기 검토 항목을 확정 사실로 전환 가능.
- `tools/list`·`resources/list` 등에 `ttlMs`/`cacheScope`(CacheableResult, SEP-2549) 필드 신설 원문 확인 → AI-ready 체크리스트에 "캐싱 힌트 명시" 항목 추가 근거 확보.
- Tasks가 실험적 core 기능에서 공식 확장(`io.modelcontextprotocol/tasks`)으로 이동, `tasks/result` 폐지→`tasks/get`/`tasks/update` 폴링 재설계 원문 확인. 단, 기존에 추적하던 "working/input_required/completed/failed/cancelled" 상태값 서술은 이번 개정의 `resultType`("complete"/"input_required")·MRTR 패턴과 표현 방식이 달라 재검증 필요(확장 세부 문서 별도 확인 전까지 보류).
- DCR(RFC7591) deprecated→CIMD 권고, OAuth 인가응답 `iss`(RFC 9207) 검증 의무화 원문 확인 — API 명세서 인증/보안 섹션 갱신 대상.
- BMAD-METHOD PRD 샤딩 관련 업데이트, OpenAPI 4.0(Moonwalk) 설계 단계 지속, SDD 4단계 확산 추세는 출처는 있으나 이번 턴 도구 접근 제한으로 재검증 못함(신뢰도 낮지 않은 출처지만 미확인 상태로 보류) — 특히 "AI 에이전트 성공률 3~10배 향상" 수치는 단일 블로그 미검증 주장으로 채택 보류.

## 출처
- [MCP Specification Changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — 직접 fetch 대조 완료

## 위키화 후보
- MCP 2026-07-28 스펙 개정 요약(세션폐지/lifecycle정책/Tasks확장화/캐싱필드) 신규 개념 노트
- 기존 위키 노트 `mcp-stateless-core-전환...` 계열의 "MCP 2.0" 오기재 정정(공식 changelog는 버전명 없이 날짜 리비전만 사용) — 정리 필요, 메모리 정리성 작업이므로 memory-agent에 위임 검토

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "목록 응답 ttlMs/cacheScope 캐싱 힌트 명시" 항목 추가
- API 명세서 인증 섹션에 "DCR deprecated→CIMD 권고 + iss(RFC9207) 검증" 반영

## 승인 필요 (고위험)
- (없음 — 2026-07-13 "SDD 4단계 정식 채택" 검토 건은 이번 자료로도 결론 나지 않아 계속 대기)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
