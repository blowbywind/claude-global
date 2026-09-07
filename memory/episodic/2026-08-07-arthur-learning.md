---
date: 2026-08-07
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-07

## 오늘 배운 것
- DTCG 2025.10 `format`은 안정 명세로 구현 기준에 둘 수 있지만, `/drafts/format/`은 미리보기 초안이라 구현 기준으로 쓰면 안 됩니다.
- 디자인 토큰 파일은 `application/design-tokens+json`, `.tokens`, `.tokens.json`을 기본 점검어로 삼고, `$type`은 값에서 추측하지 말고 명시 또는 상위 그룹 상속만 인정해야 합니다.
- Tailwind v4.3 점검어는 `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, functional utility의 `--default()`입니다. v4.2 항목인 `mauve`, `olive`, `mist`, `taupe`, logical property 유틸과 구분합니다.
- shadcn/ui는 React Aria를 `--base aria`로 선택할 수 있지만, Base UI가 기본값이며 기존 Base UI와 Radix 프로젝트는 현재 base를 유지합니다.
- CSS Anchor Positioning은 시각적 위치 관계만 만들기 때문에 실제 의미 관계가 있으면 `aria-details` 같은 접근성 연결을 별도로 설계해야 합니다.
- `<meta name="text-scale" content="scale">`는 실험적이고 Baseline이 아니므로, 전역 적용 전 모바일 200퍼센트 이상 텍스트 확대 테스트가 필요합니다.

## 출처
- [DTCG Design Tokens Format Module 2025.10](https://www.designtokens.org/TR/2025.10/format/)
- [DTCG Design Tokens Format Draft](https://www.designtokens.org/TR/drafts/format/)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [CSS Anchor Positioning API](https://developer.chrome.com/blog/anchor-positioning-api)
- [MDN meta text-scale](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
- [WCAG-EM 2.0](https://www.w3.org/TR/WCAG-EM/)
- [ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)

## 위키화 후보
- 없음. 기존 DTCG, Tailwind v4.3, shadcn React Aria, WCAG-EM, ACT Rules, Anchor Positioning 노트 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- DTCG 토큰 검증 시 media type, 확장자, `$type` 명시와 상속 규칙을 점검어로 추가.
- Anchor Positioning UI 리뷰 시 위치 연결과 의미 연결을 분리하고 `aria-details` 필요 여부를 점검어로 추가.

## 승인 필요 (고위험)
- `shadcn init` 자동화 기본 base를 Base UI 또는 React Aria로 바꾸는 행동 규칙은 기존 Radix/Base UI 프로젝트와 충돌 가능성이 있어 승인 필요.
- `<meta name="text-scale" content="scale">` 전역 적용은 실험 기능이고 확대 테스트 부담이 커서 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] dtcg-token-review — 디자인 토큰 JSON의 확장자, media type, `$type` 상속과 invalid 케이스를 검토.
- [agent] accessibility-sampler — WCAG-EM 범위와 샘플링, ACT Rules 형식에 맞춰 접근성 테스트 항목을 정리.
