---
date: 2026-08-11
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-11

## 검증 결과 요약

이번 세션도 WebFetch/WebSearch 권한이 재차 차단되어(2026-07-16 → 07-22 → 07-29 → 07-30에 이어 **5번째**), 키엘이 제시한 출처 URL을 직접 재검증할 수 없었습니다. 아래는 기존 인사이트 진행선(07-22/07-28/07-29)과의 정합성 및 출처 성격(1차 vs 벤더 블로그)으로 선별한 결과입니다. 통계성 단일 블로그 출처(PRD 도구 채택률 4%→22%, TestSprite 사례)는 교차검증 불가로 배제했습니다.

## 오늘 배운 것
- MCP 확장 프레임워크가 "실험적"에서 정식 확정(GA)으로 격상됐다는 주장 — 07-22 인사이트의 보류 조건(GA 공식 발표 확인)과 시점상 부합하나, 이번에도 도구 차단으로 원문 재확인 실패. **잠정 반영, 재검증 전까지 조건부 표기 유지**.
- OpenAPI 4.0(Moonwalk)은 여전히 설계 단계이며 정식 표준은 OpenAPI 3.2.0 유지 — 기존 07-23 인사이트("OpenAPI 3.2 정식")와 일관된 상태유지 정보로 신뢰도 높음.
- SDD(Spec-Driven Development)를 Thoughtworks Technology Radar가 "Assess"(신중 검토) 등급으로 분류했다는 주장 — 검증 시 대기 중인 "SDD 4단계 정식 채택" 건에 신중론 근거 추가 가능하나, 출처 재확인 전이라 확정 인용은 보류.
- EARS(5문장 요구사항 패턴)가 SDD 도구 전반의 사실상 표준 문법이라는 내용 — 기존에 알려진 요구공학 기법과 정합적이라 배경지식으로 채택 가능.
- PRD 자동생성 도구 채택률(4%→22%), API 계약테스트 벤더 사례(TestSprite)는 단일 블로그 출처·검증 불가로 반영 배제.

## 출처
- [MCP 2026-07-28 스펙 블로그](https://blog.modelcontextprotocol.io/posts/2026-07-28/) — 재검증 실패(권한 차단)
- [OpenAPI sig-moonwalk (GitHub)](https://github.com/OAI/sig-moonwalk) — 재검증 실패(권한 차단)
- [SDD 2026 업계 동향](https://dev.to/krlz/spec-driven-development-in-2026-what-it-is-the-tooling-and-how-teams-actually-use-it-2fk2) — 재검증 실패(권한 차단)

## 위키화 후보
- MCP 확장 프레임워크 GA 여부(조건부) — 재검증 완료 시 신규 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- API 명세서 AI-ready 배경지식에 "EARS 요구사항 문법(SDD 사실상 표준)" 용어 추가.

## 승인 필요 (고위험)
- **WebFetch/WebSearch 권한이 5회 연속(07-16/07-22/07-29/07-30/08-11) 세션마다 비일관적으로 차단**되어 사실검증 절차 자체가 구조적으로 무력화되고 있습니다. 기존에 여러 차례 제안된 "리서치-검증-권한-정합기"(settings.json 권한 점검) 실제 적용 여부를 사용자께 확정 확인 요청드립니다.
- SDD 4단계 정식 채택 건: 이번 자료(Thoughtworks Assess 등급 주장)는 미검증이므로 재상신하지 않고 대기 유지.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이미 후보 등록되어 있으나 이번에도 권한 차단으로 수동 검증 자체가 불가능했던 사례가 추가되어 필요성 재확인. wget 폴백 내장 버전 우선 검토 권고.
