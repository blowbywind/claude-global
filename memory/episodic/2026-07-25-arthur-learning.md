---
date: 2026-07-25
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-25

## 오늘 배운 것
- shadcn/ui의 Base UI용 `Toast`는 action, status, promise, stacking, swipe dismissal을 지원해 비동기 API 피드백 UI에 바로 검토할 만합니다. [출처](https://ui.shadcn.com/docs/changelog)
- `@shadcn/helpers`는 AI SDK·TanStack AI 어댑터로 모델, API 라우트, 네트워크, API 키 없이 채팅 UI 프리뷰와 스트리밍 상태 테스트를 만들 수 있습니다. [출처](https://ui.shadcn.com/docs/changelog)
- `shadcn/typeset`은 HTML·렌더된 Markdown을 한 CSS 파일로 스타일링하고, streaming 콘텐츠에서 이전 블록 재스타일링을 피하도록 설계됐습니다. [출처](https://ui.shadcn.com/docs/changelog)
- Tailwind CSS v4.2/v4.3에서는 `@tailwindcss/webpack`, 논리속성 유틸리티, `inset-s-*`/`inset-e-*`, stacked·compound `@variant`가 컴포넌트 CSS 작성 점검어로 유효합니다. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)
- WCAG-EM 2.0은 2026-07-23 W3C Group Note이며, 웹사이트뿐 아니라 웹앱·모바일앱·문서 등 디지털 제품 단위 접근성 평가 절차를 다룹니다. [출처](https://www.w3.org/TR/wcag-em-2/)
- Interop 2026은 anchor positioning, container style queries, `dialog closedby`, `:open`, `popover="hint"`를 주요 상호운용 영역으로 다룹니다. [출처](https://web.dev/blog/interop-2026)

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [WCAG Evaluation Methodology 2.0](https://www.w3.org/TR/wcag-em-2/)
- [ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)
- [Interop 2026](https://web.dev/blog/interop-2026)
- [Google I/O 2026: Make Material your own](https://io.google/2026/explore/technical-session-13)

## 위키화 후보
- WCAG-EM 2.0 — 디지털 제품 단위 접근성 평가 범위·샘플링·보고 절차.
- ACT Rules Format 1.1 — 자동화·수동 접근성 테스트 규칙의 공통 문서 형식.

## 프로필 반영 후보 (저위험)
- WCAG-EM 2.0을 접근성 평가 범위 정의와 샘플링 점검어로 추가.
- ACT Rules Format 1.1을 접근성 테스트 케이스 문서화 기준으로 추가.

## 승인 필요 (고위험)
- shadcn 신규 프로젝트 기본 base를 Base UI나 React Aria로 고정하는 행동 규칙.
- Material 기반 디자인 언어를 ai-ops 제품 UI 기본 방향으로 채택하는 규칙.

## 신규 도구 후보 (에이전트/스킬)
- [skill] wcag-act-rule-writer — WCAG-EM 2.0과 ACT Rules Format 1.1 기준으로 컴포넌트 접근성 점검 절차와 결과 템플릿 생성.
