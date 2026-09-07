---
date: 2026-08-25
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-25

## 오늘 배운 것
- `Tailwind CSS v4.3`의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`는 스크롤 패널, 코드뷰, 미리보기 화면 점검어로 유지할 근거가 확인됩니다.
- `shadcn/ui` 신규 프로젝트 기본 base는 `Base UI`이며, `Radix`는 계속 지원되고 기존 프로젝트 마이그레이션은 필수가 아닙니다.
- `React Aria`는 `shadcn/ui`의 정식 component base로 추가되어 `--base aria` 초기화 선택지로 검토할 수 있습니다.
- `Questionnaire`는 단일 선택, 다중 선택, 자유 입력, 건너뛰기 흐름을 지원하므로 agent 확인 프롬프트 UI 후보로 타당합니다.
- 접근성 회귀 검수는 저대비, 대체 텍스트, 폼 라벨, 빈 링크, 빈 버튼, 문서 언어, 그리고 포인터 대상 `24px` 기준을 우선 점검해야 합니다.
- `DTCG Design Tokens 2025.10`은 W3C Community Group의 첫 안정 명세로 확인되며, W3C Recommendation으로 과장 표기하면 안 됩니다.

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI 기본화](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Questionnaire](https://ui.shadcn.com/docs/components/questionnaire)
- [shadcn/ui Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [WebAIM Million 2026](https://webaim.org/projects/million/)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Design Tokens Specification 2025.10](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, shadcn Base UI, React Aria, Toast, WCAG, DTCG 관련 노트가 있어 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- 스크롤 패널과 코드뷰 점검어에 `scrollbar-gutter-stable`, `@container-size`, `tab-*`, `zoom-*`를 유지합니다.
- 접근성 회귀 검수어에 저대비, 폼 라벨, 빈 버튼, 포인터 대상 `24px` 기준을 명시합니다.

## 승인 필요 (고위험)
- `shadcn init` 자동화 기본 base를 `Base UI` 또는 `React Aria`로 고정하는 정책 변경.
- 기존 `Radix` 프로젝트를 `Base UI` 또는 `React Aria`로 마이그레이션하는 작업.

## 신규 도구 후보 (에이전트/스킬)
- [skill] a11y-component-check — 폼 라벨, 빈 버튼, 저대비, 포인터 대상 크기를 컴포넌트 변경마다 점검.
