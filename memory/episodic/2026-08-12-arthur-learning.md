---
date: 2026-08-12
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-12

## 오늘 배운 것
- `@shadcn/helpers`는 `needsApproval`과 실제 `useChat` 생명주기를 통해 승인 프롬프트, 도구 카드, 질문 흐름을 프로덕션에 가까운 방식으로 모의 실행할 수 있습니다.
- `Questionnaire`는 agent 확인 질문, 온보딩, 설정 폼에 쓸 수 있고 Base UI, React Aria, Radix 전반을 지원하지만 기존 폼 자동 대체 규칙으로 삼으면 안 됩니다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `tab-*`는 코드뷰, 로그뷰, 스크롤 패널의 레이아웃 안정성 점검어로 유지할 가치가 있습니다.
- `reading-flow`와 `reading-order`는 Chrome 137부터 flex/grid/block의 시각 순서와 키보드 초점 순서 불일치를 줄이는 선택지입니다. 다만 브라우저 지원과 실제 탭 순서 검증이 필요합니다.
- WCAG 2.2 AA 기준에서는 포커스가 완전히 가려지지 않아야 하고, 드래그에는 비드래그 단일 포인터 대안이 필요하며, 포인터 대상은 기본 24 x 24 CSS 픽셀 이상이어야 합니다.
- WebAIM 2026과 Design Theater 결과를 함께 보면, AI 생성 UI는 설명보다 렌더링 결과, 상호작용, 접근성 이름, 폼 라벨, 빈 버튼 여부를 실제 테스트로 검증해야 합니다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [Chrome CSS reading-flow](https://developer.chrome.com/blog/reading-flow)
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WebAIM Million 2026](https://webaim.org/projects/million/)
- [Design Tokens Community Group 2025.10 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [Google M3 Expressive 연구](https://design.google/library/expressive-material-design-google-research)
- [Design Theater 논문](https://arxiv.org/abs/2607.22928)

## 위키화 후보
- `@shadcn/helpers Human in the Loop` — 승인 카드와 도구 카드 회귀 테스트용 모의 실행 패턴.

## 프로필 반영 후보 (저위험)
- `@shadcn/helpers`의 `needsApproval`/`useChat` 흐름을 agent 승인 UI 회귀 테스트 점검어로 추가.
- ARIA는 네이티브 의미론을 우선하고, 추가 시 접근성 이름·폼 라벨·빈 버튼 회귀 검증을 병행.

## 승인 필요 (고위험)
- 기존 폼·위저드를 `Questionnaire`로 자동 전환하는 행동규칙은 프로젝트별 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-regression-a11y-check — 스크린샷, 키보드 흐름, 포커스 가림, 대상 크기, 빈 버튼·라벨을 반복 점검.
