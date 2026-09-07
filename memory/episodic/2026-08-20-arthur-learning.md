---
date: 2026-08-20
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-20

## 오늘 배운 것
- shadcn/ui 신규 프로젝트 기본 base는 Base UI로 바뀌었지만 Radix는 계속 지원되므로, 기존 Radix 프로젝트 자동 마이그레이션은 피하고 필요 시 `-b radix`로 고정한다.
- React Aria는 shadcn/ui의 first-class base로 추가됐고 `--base aria` 초기화를 지원하므로, 새 프로젝트 생성 시 Base UI, React Aria, Radix 선택을 명시해야 한다.
- shadcn Dynamic Search는 대형 registry에서 `q`, `limit`, `offset`, `pagination` 기반 서버 검색을 지원하므로 내부 registry는 전체 정적 다운로드 의존을 줄일 수 있다.
- Tailwind CSS v4.1의 `pointer-*`, `any-pointer-*`는 터치와 마우스 입력별 타깃 크기, 간격 조정에 바로 쓸 수 있다.
- WCAG 2.2의 `Focus Not Obscured`와 `Target Size Minimum`은 sticky header, toast, popover, 아이콘 버튼, 행 액션 회귀 점검어로 유지한다.
- Figma MCP와 Code Connect는 디자인 컨텍스트와 실제 코드 컴포넌트 매핑을 agent에 제공하지만, 생성 결과는 반응형과 코드 품질 수동 리뷰 후 반영한다.

## 출처
- [shadcn/ui July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui July 2026 - React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui Dynamic Search](https://ui.shadcn.com/docs/registry/dynamic-search)
- [Tailwind CSS v4.1](https://tailwindcss.com/blog/tailwindcss-v4-1)
- [W3C Focus Not Obscured Minimum](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [Figma MCP server guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- [Figma Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)

## 위키화 후보
- 없음. 기존 `shadcn-ui`, `Tailwind v4.1 @source`, `WCAG`, `Figma Code Connect in MCP` 노트 보강 범위.

## 프로필 반영 후보 (저위험)
- `pointer-*`와 `any-pointer-*`를 입력 장치별 타깃 크기 점검어로 유지.
- `@source not`과 `@source inline()`을 동적 클래스, 레거시 경로, safelist 관리 점검어로 유지.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 base를 Base UI 또는 React Aria로 자동 고정하는 행동 규칙 변경.
- 기존 Radix 프로젝트를 Base UI 또는 React Aria로 전환하는 마이그레이션 작업.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-registry-review — registry `q`, `limit`, `offset`, `pagination`, `registry:base` 계약 점검.
- [agent] frontend-a11y-reviewer — WCAG 2.2 타깃 크기, 포커스 가림, sticky UI 회귀 검증.
