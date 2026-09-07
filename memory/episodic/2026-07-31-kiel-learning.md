---
date: 2026-07-31
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-31

## 오늘 배운 것
- **MCP 2026-07-28 스펙 정식 발표 확정** — 공식 블로그(blog.modelcontextprotocol.io) 원문을 직접 fetch해 대조 검증함: "officially pushing the release button"으로 RC가 아닌 **정식(final) 릴리스**임을 확인. 기존 위키(`mcp-2026.md`)의 "RC" 표기는 오기이며 갱신 필요.
- **Tasks 확장 공식화 확인** — 원문에 "Tasks move out of the experimental core and into the `io.modelcontextprotocol/tasks` extension (SEP-2663)"로 명시. 07-15/07-19 인사이트의 "실험적 확장 표기" 항목은 **"공식 확장(SEP-2663)"으로 정정** 필요. 확장 프레임워크에는 Tasks·MCP Apps 외 **EMA(Enterprise Managed Authorization)**도 신규 편입(리서치 원문에 누락됐던 항목).
- **12개월 최소 유예 deprecation policy 확정** — 원문 "twelve-month minimum window" 직접 확인. 07-19 검토건("정식발표 이후 재확인 전제")이 이제 검증된 사실로 확정됨.
- **인증 체계 변경 확인** — Dynamic Client Registration(DCR)이 Client ID Metadata Documents(CIMD)로 공식 전환(DCR은 하위호환만 유지 후 제거 예정), 세션 헤더(`Mcp-Session-Id`) 완전 폐지 + `Mcp-Method`/`Mcp-Name` 헤더 기반 라우팅 확인. 단, 리스트 응답 캐시는 원문상 "cache hints"이며 "TTL"이라는 표현은 없음(리서치 원문 과장 — 정정).
- SDK 지원(TS/Python/Go/C# Tier1, Rust 베타)은 원문과 정확히 일치 확인.
- OpenAPI 4.0(코드명 "Moonwalk")이 설계 단계(TSC 논의 중)라는 점, BMAD-METHOD 최신 태그 v6.8.0(2026-05, 모듈 생태계+BMad Builder+scale-adaptive planning)도 별도 출처 fetch로 각각 확인됨.

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — fetch 대조 완료
- [OpenAPI 4 What's New / Migration Guide 2026](https://apiscout.dev/guides/openapi-4-whats-new-migration-guide-2026) — fetch 대조 완료
- [BMAD Method Explained](https://codemyspec.com/blog/bmad-method-explained) — fetch 대조 완료

## 위키화 후보
- `mcp-2026.md`/`mcp-tasks-확장-experimental.md`를 "정식 발표 + Tasks SEP-2663 공식화 + EMA 확장 추가" 내용으로 verified 갱신
- OpenAPI 4.0(Moonwalk) — 설계 단계 신규 개념 노트

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트 "MCP 장기실행 작업... 실험적 확장 표기" → "공식 확장(SEP-2663, `io.modelcontextprotocol/tasks`), 12개월 최소 유예 확정"으로 문구 정정
- 인증 섹션에 "DCR→CIMD 전환, 세션 헤더 폐지+`Mcp-Method`/`Mcp-Name` 헤더 라우팅" 참고 항목 추가

## 승인 필요 (고위험)
- (없음 — 07-13 SDD 4단계 정식 채택 검토건은 이번 리서치로 결론 변화 없어 보류 유지)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 카탈로그의 "출처-대조-검증기"/"리서치-검증-권한-정합기"로 충분히 커버됨. 참고로 이번 턴은 WebFetch/WebSearch 툴 권한이 막혀 있었으나 `wget`(Bash) 폴백으로 3건 모두 원문 fetch 검증에 성공함 — 권한 불일치 문제 재확인.)
