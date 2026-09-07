---
date: 2026-08-11
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-11

## 오늘 배운 것
- M3 Expressive는 `color`, `shape`, `size`, `motion`, `containment`로 핵심 행동을 더 잘 보이게 하지만, 익숙한 패턴과 텍스트 라벨을 깨면 사용성이 떨어질 수 있다.
- Tailwind CSS v4.3의 `scrollbar-gutter-stable`, `@container-size`, `tab-*`는 스크롤 패널, 높이 반응형 패널, 코드뷰와 로그 뷰어 구현 점검어로 유지할 가치가 있다.
- shadcn/ui는 2026년 7월 기준 신규 프로젝트 기본값을 Base UI로 두지만, Radix는 계속 지원되고 기존 프로젝트는 현 base를 유지하는 것이 공식 권고에 가깝다.
- shadcn/ui React Aria는 `--base aria`로 선택 가능한 1급 base이며, 자동 전환 대상이 아니라 프로젝트별 선택지로 봐야 한다.
- Base UI용 shadcn Toast는 `action`, `status`, `promise`, stacking, swipe dismissal을 지원하므로 API 요청 피드백 UI 후보로 검토 가능하다.
- WCAG 2.2에서는 포커스 표시 면적과 대비, 24 CSS px 대상 크기 또는 충분한 간격 예외를 아이콘 버튼과 조밀한 툴바 점검 기준으로 삼는다.

## 출처
- [Expressive Design: Google's UX Research](https://design.google/library/expressive-material-design-google-research)
- [Tailwind CSS v4.3: Scrollbars, new colors, and more](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui: July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui: July 2026 - React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui: July 2026 - Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [shadcn/ui: July 2026 - Dynamic Search](https://ui.shadcn.com/docs/changelog/2026-07-dynamic-search)
- [shadcn/ui MCP Server](https://ui.shadcn.com/docs/mcp)
- [WCAG 2.2 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)

## 위키화 후보
- 없음: 주요 항목은 기존 위키에 이미 있음.

## 프로필 반영 후보 (저위험)
- `scrollbar-gutter-stable`, `@container-size`, `tab-*`를 스크롤 패널과 코드뷰 레이아웃 점검어로 유지.
- API 요청 피드백 UI에서 Base UI 프로젝트 한정으로 shadcn Toast의 `promise/status/action` 패턴 검토.

## 승인 필요 (고위험)
- shadcn 신규 프로젝트 자동화의 기본 base 변경 또는 기존 Radix 프로젝트의 Base UI/React Aria 전환.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-registry-검증 — MCP와 Dynamic Search 결과를 바탕으로 컴포넌트 출처, base, 접근성 조건을 추가 전 점검.
