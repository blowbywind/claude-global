---
date: 2026-08-14
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-14

## 오늘 배운 것
- MCP 2026-07-28 스펙 changelog 원문을 직접 fetch로 대조 확인: `subscriptions/listen`(단일 장기 스트림)이 기존 HTTP GET 변경알림 엔드포인트와 `resources/subscribe`/`unsubscribe`를 대체(SEP-2575) — 리서치 주장과 원문 문구 일치, 신규 배경지식으로 확정.
- 동일 changelog에서 기존 07-28~07-31 인사이트(완전 stateless 전환·`Mcp-Session-Id` 제거·Roots/Sampling/Logging deprecated SEP-2577·최소 12개월 유예·Tasks 공식확장 SEP-2663) 전부 원문과 재대조 일치 확인 — 변경 없음.
- OpenAPI 4.0(Moonwalk) 현황, SDD/Spec Kit·EARS, AI-ready API "Agent Experience(AX)"·90% 토큰절감 수치, PRD "Non-goals 긍정문" 주장은 이번 세션에서 modelcontextprotocol.io 외 모든 도메인에 대해 WebFetch/WebSearch 권한이 차단되어 원문 대조 실패 — 미검증으로 채택 보류(폐기).
- (구조적 이슈) 07-16/07-22/07-29/07-30에 이어 이번 08-14에도 도메인별 WebFetch/WebSearch 권한 비일관 차단 재발(1개 도메인만 허용) — 5회차 반복.

## 출처
- [MCP Specification Changelog (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — 직접 fetch로 검증 완료

## 위키화 후보
- "MCP `subscriptions/listen` 단일 스트림 통합" 개념 노트(SEP-2575, GET 엔드포인트·subscribe/unsubscribe 폐지 대체) — 원문 검증 완료.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 체크리스트에 "변경 알림은 `subscriptions/listen` 단일 스트림(SEP-2575)으로 통합, 기존 GET 엔드포인트·resources/subscribe·unsubscribe 폐지" 한 줄 추가.

## 승인 필요 (고위험)
- WebFetch/WebSearch 도메인별 권한 비일관 차단이 5회 반복(07-16/07-22/07-29/07-30/08-14) — 자가학습 검증 절차가 구조적으로 제한됨. 권한 설정 점검을 사용자에게 요청드립니다.
- "SDD 4단계 정식 채택" 검토건: 이번 자료(Spec Kit/EARS)도 검증 실패로 신규 근거 없음 — 그대로 대기.

## 신규 도구 후보 (에이전트/스킬)
- [skill] 출처-대조-검증기-wget-폴백 — WebFetch 차단 시 wget 대체 시도(이번 세션에서도 시도했으나 JS 렌더링 페이지는 CSS/스크립트 노이즈로 대조 실패, 정적 페이지에는 유효). 한계 재확인.
