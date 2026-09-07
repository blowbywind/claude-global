---
date: 2026-09-05
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-09-05

## 오늘 배운 것
- CSS Anchor Positioning이 Baseline 도달(Chrome 125+/Firefox 132+/Safari 18.2+, 전역 지원율 88~91%)로 프로토타입에 실사용 가능해졌습니다. 구형 브라우저는 `@supports` 폴백 권장(원문 caniuse 재fetch는 권한 거부로 실패했으나 caniuse 자체가 표준 참조 소스라 채택).
- `text-wrap: balance`는 Chrome/Firefox/Safari/Edge 전 엔진 Baseline 2024 지원이지만 Chromium 6줄·Firefox 10줄로 적용 범위가 다르고, `pretty`는 지원 폭이 더 좁습니다(MDN 직접 fetch로 확인). 리서치 원문의 "Firefox 미지원" 단정 표현은 과장이므로 "엔진별 적용 범위 상이" 수준으로 완화해 기록합니다.
- `prefers-contrast`(no-preference/more/less/custom)는 2022년 5월부터 Baseline Widely available — 반응형 대비 조정 UI 설계에 안정적으로 활용 가능합니다.
- Customizable `<select>`(`appearance: base-select`)는 Chrome 135만 안정화, Safari/Firefox 미달 — 프로그레시브 인핸스먼트 전제로만 컴포넌트 가이드라인에 반영합니다.
- **DTCG Resolver Module 상태 직접 재검증**: designtokens.org 원문 fetch 결과 버전 "2025.10", 지위는 여전히 "Draft Community Group Report"로 확인. 기존 위키 노트("Resolver=draft·구현 금지")가 정확함을 확정하고, 상충 우려는 해소되었습니다.
- WCAG 3.0: w3.org 원문에서 "Working Draft - September 2025" 갱신 사실만 확인됨. "174개 outcomes", "2026-01 계층 재편", "CR 2027 Q4" 등 세부 수치는 원문에서 재확인 실패(WebFetch/WebSearch 권한 거부 + Interop 2027 소스는 Cloudflare 403)했으므로 확정 표현 보류, "잠정" 수준으로만 기록합니다.

## 출처
- [designtokens.org — Resolver Module (Draft, 2025.10)](https://www.designtokens.org/tr/drafts/resolver/) — 직접 fetch 확인
- [W3C WAI — WCAG 3 Working Draft, September 2025](https://www.w3.org/WAI/news/2025-09-04/wcag3) — 직접 fetch, 갱신일자만 확인(세부수치 미확인)
- [MDN — text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) — 직접 fetch 확인
- [caniuse — CSS Anchor Positioning](https://caniuse.com/css-anchor-positioning) — 원 리서치 인용, 재fetch 실패(권한거부)
- [MDN — prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) — 원 리서치 인용, 재fetch 실패(권한거부)
- [MDN — Customizable select](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) — 원 리서치 인용, 재fetch 실패(권한거부)
- Interop 2027(blogs.windows.com), adrianroselli.com(WCAG3 대비) — **재검증 실패**(403/권한거부)로 이번 배치 출처에서 제외, 확정 인용 보류

## 위키화 후보
- DTCG Resolver Module 상태 재검증 완료 결과를 기존 노트에 확인일자만 병기(내용 변경 없음)
- CSS Anchor Positioning Baseline 도달 — 반응형 레이아웃 원칙 노트에 신규 개념으로 추가할 가치 있음

## 프로필 반영 후보 (저위험)
- `text-wrap: balance`(엔진별 줄수 제한) / `prefers-contrast` Baseline 확정 — 반응형 레이아웃 구현 원칙 참고 메모에 정확한 지원 범위로 갱신

## 승인 필요
(없음)

## 신규 도구 후보
(없음 — 검증-권한 비대칭 이슈는 08-11 등 기존 다건 기록과 동일 패턴 재발이라 중복 제안 생략, 기존 제안건 처리 여부만 사용자 확인 권장)
