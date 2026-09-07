---
date: 2026-07-25
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-25

## 오늘 배운 것
- SEP-2322(Multi Round-Trip Requests)를 공식 MCP 사이트에서 직접 fetch로 대조한 결과 **Status: Final(Standards Track)**로 확인됨 — roots/list·sampling/createMessage·elicitation/create 등 서버주도 요청을 InputRequiredResult+requestState 기반 상태비저장 구조로 대체하는, 이미 정식 채택된 SEP. 07-14/07-15 인사이트("MCP 장기실행 작업 상태값 명시")의 근거를 검증된 사실로 강화 가능.
- 공식 버전 페이지(modelcontextprotocol.io/specification/versioning) 직접 대조 결과, 오늘(2026-07-25) 기준 **Current 스펙은 여전히 2025-11-25**. "2026-07-28 릴리스 후보" 블로그 원문은 이번 세션 도구 권한 문제로 fetch 실패해 대조 불가 — 07-19 인사이트의 "정식발표 07-28 이후 재확인" 전제는 아직 충족되지 않았으므로 계속 대기 상태 유지.
- 그 외 리서치 항목(Gartner $582M 시장규모·MCP 문의 300%↑, OpenAPI→MCP 제외 관례, 하이브리드 게이트웨이 구조, Spec Kit/OpenSpec 스타 수, Linear 70% 절감)은 원문 출처 대조(WebFetch/WebSearch)가 도구 권한 오류로 전부 실패 — 교차검증 미완료로 이번 라운드에서는 채택하지 않고 폐기.

## 출처
- [SEP-2322: Multi Round-Trip Requests](https://modelcontextprotocol.io/seps/2322-MRTR)
- [MCP Versioning](https://modelcontextprotocol.io/specification/versioning)

## 위키화 후보
- SEP-2322(MRTR) — 서버주도 요청(elicitation/sampling/roots)을 대체하는 상태비저장 메커니즘, 신규 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- 없음(이번 검증 통과 항목은 기존 07-15 인사이트 근거 보강 수준)

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음
