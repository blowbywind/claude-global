---
date: 2026-08-29
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-29

## 오늘 배운 것
- WCAG 3.0은 2026-08 현재도 W3C Working Draft(2026-03 개정판)이며, Candidate Recommendation은 2027년 4분기 목표, 최종 Recommendation은 2029년 이후 예상. ADA·Section 508 등 법적 준거는 여전히 WCAG 2.x — 현행 준수 기준은 WCAG 2.2 유지(원문 wget 대조로 확인).
- `contrast-color()`: Newly Available 도달일 2026-04-10(기존 메모와 일치), **Widely Available 목표일 2028-10-10**을 원문(web-features-explorer)에서 정확히 재확인. 가이드라인 메모에 목표일 갱신 가치 있음.
- Interop 2026 수치 정정: 원문 대조 결과 실제는 **19개 focus area + 3개 cleanup area + 4개 investigation area**(리서치가 보고한 "20개+33개 제안"은 부정확, 폐기). focus area 목록에 `contrast-color()`, container style queries, anchor positioning, `shape()`, `attr()` 확장 포함은 원문에서 확인됨(`accent-color`는 원문 미확인, 채택 보류).
- DTCG Resolver Module은 여전히 draft(2025.10판) — 기존 "Resolver=draft·구현 금지" 판단 변경 없음, 추가 조치 불요.
- View Transitions API cross-document 크로스브라우저 미완성 및 `prefers-reduced-motion` 수동 래핑 필요 주장은 저신뢰 블로그(dev.to) 출처라 확정 표현 보류, "참고" 수준으로만 반영.
- WCAG 3.0 outcome 수치는 2차 출처(webability.io)가 "약 174개"로 보고하나 근거 불명확 — 기존 위키의 1차 소스 기준 220 수치를 유지하고 174는 채택 보류(리서치 원안 판단 유지).

## 출처
- [web-features-explorer: contrast-color()](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/) — wget 원문 대조 완료
- [WCAG 3.0 Explained](https://www.webability.io/blog/wcag-3-0-explained) — wget 원문 대조 완료
- [Interop 2026 Focus Areas Announced](https://www.igalia.com/news/interop-2026.html) — wget 원문 대조 완료(수치 정정 근거)
- [MDN: View Transition API](https://developer.mozilla.org/docs/Web/API/ViewTransition) — 참고(세부 브라우저 지원표 미확인)

## 위키화 후보
- `contrast-color()` Widely Available 목표일(2028-10-10) — 기존 가이드라인 메모 수치 갱신용, 신규 노트 불요(기존 노트 보강)

## 프로필 반영 후보 (저위험)
- Interop 2026 정확 수치(19 focus + 3 cleanup + 4 investigation area) 반영/기존 오기 정정
- WCAG 3.0 타임라인(CR 2027Q4, REC 2029+, 2.2 병존) 참고 메모 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — "출처-대조-검증기" 계열 제안은 기존에 다수 등록되어 있고, 이번 세션 wget 대조로도 재차 유효성 실증됨. 중복 제안 대신 기존 후보 채택 검토를 사용자에게 권장)
