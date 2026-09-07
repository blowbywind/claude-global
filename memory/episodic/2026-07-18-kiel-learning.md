---
date: 2026-07-18
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-18

# 자가학습 검증·종합 결과 (2026-07-18)

**검증 관련 고지**: 이번 세션에서 WebSearch/WebFetch 도구 접근이 거부되어 키엘이 제시한 출처 URL을 직접 재조회하지 못했습니다. 아래는 기존 위키 상태·내적 정합성·MCP 알려진 관행(버전 태그가 YYYY-MM-DD 형식인 점 등)에 근거한 정성적 교차검증 결과이며, 정량 수치·미공개 URL 내용은 "미확정"으로 별도 표시했습니다.

## 오늘 배운 것
- MCP "2026-07-28 RC"는 스펙 버전을 날짜로 명명하는 기존 관행(2025-03-26, 2025-06-18, 2025-11-25)과 부합해 개연성은 있으나, 원문 대조 불가로 **미확정** — Tasks "실험적→core 승격" 주장은 07-15 인사이트 변경 근거로 아직 채택하지 않고 보류.
- OpenAPI→MCP 변환 시 "페이지네이션/웹훅/스트리밍 미대응, 툴 스키마 self-contained 필수" 제약은 MCP 툴 스키마가 JSON Schema 기반 요청-응답 구조라는 기존 이해와 정합적 — 07-15 "OpenAPI→MCP 변환 대비 원칙"에 참고 문구로만 잠정 추가.
- MCP 인증 실태 정량 수치(무인증 25%, 정적키 53%, OAuth 구현률 8.5%, 레지스트리 1,200→9,400개)는 출처 원문 대조 불가 → 채택 보류. 기존 07-17 "미인증 MCP 서버 리스크" 인사이트는 정성적 서술 그대로 유지.
- SDD 도구 생태계(Spec Kit·Kiro·BMAD 등) 확산 자체는 일반적 업계 동향으로 리스크 낮음. 단 "40시간→8시간", "초안 70% 단축" 등 구체 수치는 미확인이라 그대로 인용하지 않음.

## 출처
- 키엘 원 리서치 인용 URL(이번 세션 미검증):
  - [MCP blog RC 공지](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
  - [Aembit MCP 인증/OAuth 통계](https://aembit.io/blog/mcp-oauth-2-1-pkce-and-the-future-of-ai-authorization/)
  - [Speakeasy OpenAPI→MCP 변환 가이드](https://www.speakeasy.com/mcp/tool-design/generate-mcp-tools-from-openapi/)

## 위키화 후보
- (신규 승격 없음) — 기존 `_promoted/2026-07-17-kiel-wiki-mcp-2026.md` draft는 동일 사유(원문 미대조)로 인간 검토 시 재검증 병행 권고

## 프로필 반영 후보 (저위험)
- API 명세서 "AI-ready" 체크리스트에 "OpenAPI→MCP 변환 시 페이지네이션/웹훅/스트리밍 미대응 + 스키마 self-contained" 항목을 참고용으로 세분화(잠정, 검증 후 확정 필요)

## 승인 필요 (고위험)
- (없음) — 기존 07-13 "PRD에 SDD 4단계 정식 채택" 검토 건은 이번 자료로 결론짓지 않고 계속 대기

## 신규 도구 후보 (에이전트/스킬)
- (없음)
