---
date: 2026-08-14
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-14

## 오늘 배운 것
- CSS `if()`는 MDN 기준 여전히 "Limited availability(실험적 기술)"로, 리서치의 "Chrome 137 정식 출시" 서술은 원문에서 확인 안 됨 → 공용 컴포넌트 가이드라인 기존 "프로토타입 한정, 프로덕션 미적용" 문구 유지(변경 없음).
- `prefers-contrast`는 2022-05부터 이미 Baseline Widely available(값: no-preference/more/less/custom) 확인 → 접근성 대비 관련 신규 활용 가능 기능으로 참고 가치 있음(리서치의 "2026년 승격" 프레이밍은 오류, 실제는 4년 전부터 안정).
- `light-dark()`는 MDN 기준 Baseline 2024(2024-05 Newly available) 확인. Baseline은 통상 Newly→Widely 30개월 소요라 "2026년 하반기 Widely available 예상"은 궤적상 합리적 — 다만 아직 확정 아니므로 프로토타입 시범 도입 시 `prefers-color-scheme` 폴백 병행 권고.
- WCAG 3.0 2026-03-03 Working Draft 세부(Bronze/Silver/Gold 등급, CR 2027 Q4 등)는 이번 세션 WebFetch 권한 거부로 원문 대조 실패 → 기존 위키의 "완성시점 미확정" 보수적 서술 유지, 신규 수치 미반영.
- Cross-document View Transitions Firefox 미지원설, `text-wrap: pretty` Safari 26+설은 각각 저신뢰 마케팅 블로그 출처이거나 MDN 재확인에서 특정 버전 정보가 확인되지 않아 채택 보류.
- Tailwind v4.3(scrollbar-*, mauve/olive/mist/taupe, 로지컬 프로퍼티) 내용은 이미 위키에 기록된 것과 일치 확인(릴리스일 소스 간 소폭 차이 있으나 핵심 내용 동일) → 신규 반영 불필요.

## 출처
- [MDN: CSS if()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
- [MDN: prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)
- [MDN: light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)
- [Tailwind CSS v4.3 블로그](https://tailwindcss.com/blog/tailwindcss-v4-3)

## 위키화 후보
- `light-dark()` 개념 노트 신규 작성(Baseline 2024, Newly→Widely 30개월 규칙, `color-scheme` 필수조건) — 다크모드 축약 표기법으로 실무 도입 검토 시 근거자료 가치.

## 프로필 반영 후보 (저위험)
- 공용 컴포넌트 가이드라인에 `prefers-contrast`(4값: no-preference/more/less/custom, Baseline 2022) 참고 메모 1줄 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음 — 리서치 산출물에 있던 "검증 에이전트" 제안들은 이미 등록된 후보의 반복 재확인이며, 이번 검증 세션에서도 WebFetch 일부 거부가 재발함을 확인했으나 신규 제안 사항은 아님)
