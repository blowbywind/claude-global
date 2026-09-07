---
date: 2026-09-06
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-09-06

## 오늘 배운 것
- shadcn/ui는 2026년 9월 변경으로 레지스트리 컴포넌트의 `cn` import를 `cn` 패키지로 옮겼다. 기존 `@/lib/utils`는 계속 동작하지만, 신규 컴포넌트 추가 시 import drift를 점검해야 한다.
- `Questionnaire`는 agent 확인 프롬프트, 온보딩, 설정 폼에 쓸 수 있는 다단계 질문 컴포넌트이며 단일 선택, 다중 선택, 자유 입력, 건너뛰기, 검증 흐름을 공식 지원한다.
- shadcn/ui는 React Aria를 `--base aria`로 선택 가능한 정식 component base로 추가했지만, Base UI 기본값과 Radix 지원은 유지한다.
- Base UI 기반 shadcn `Button`을 링크처럼 쓸 때는 `<Button render={<a />} nativeButton={false} />`를 피하고, `buttonVariants`와 일반 `<a>`를 써야 링크 의미가 깨지지 않는다.
- Tailwind의 `scrollbar-gutter-stable`, `scrollbar-gutter-both`, `@container`, `@container-size`는 스크롤 패널 흔들림과 재사용 패널 반응형 기준 점검어로 유지할 가치가 있다.
- WCAG 2.2 검수에서는 `Target Size (Minimum)`의 24 x 24 CSS px 및 간격 예외, `Content on Hover or Focus`의 dismissible, hoverable, persistent 조건, WCAG-EM 2.0의 범위, 샘플, 평가, 보고 절차를 함께 봐야 한다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Button](https://ui.shadcn.com/docs/components/button)
- [Tailwind CSS scrollbar-gutter](https://tailwindcss.com/docs/scrollbar-gutter)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.2 Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html)
- [WCAG-EM 2.0](https://www.w3.org/TR/WCAG-EM/)
- [Figma Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [Figma Code Connect UI Setup](https://developers.figma.com/docs/code-connect/code-connect-ui-setup/)

## 위키화 후보
- 없음. 기존 위키에 shadcn, Tailwind, WCAG-EM, Figma Code Connect 관련 노트가 있어 신규 노트보다 보강 범위.

## 프로필 반영 후보 (저위험)
- `shadcn cn` import 전환을 신규 컴포넌트 추가 시 import drift 점검어로 유지.
- Base UI 링크형 버튼은 `buttonVariants`와 일반 `<a>`로 구현하는 접근성 점검어를 유지.

## 승인 필요 (고위험)
- 기존 프로젝트에서 `shadcn migrate cn` 실행 또는 `clsx`와 `tailwind-merge` 제거.
- 프로젝트 기본 component base를 React Aria 또는 Base UI로 전환하거나 Figma Code Connect MCP를 source of truth로 연결.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-source-auditor — shadcn, Tailwind, WCAG 공식 문서와 프로젝트 컴포넌트 import, 포커스, 타깃 크기 패턴을 대조하는 검수 스킬.
