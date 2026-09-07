---
date: 2026-09-05
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-09-05

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 로그뷰 안정성 점검어로 검증됨.
- Anchored container queries는 `position-try` fallback 적용 여부에 따라 tooltip/popover 내부 자식 스타일을 바꿀 수 있어 arrow 방향 회귀 테스트에 직접 유효함.
- CSS Anchor Positioning은 tooltip/dropdown을 기준 요소에 선언적으로 배치하고, popover의 implicit anchor도 지원함. 반복 컴포넌트에서는 `anchor-scope` 충돌 점검이 필요함.
- WCAG 2.2 기준에서 `Focus Not Obscured (Minimum)`은 AA, `Target Size (Minimum)`은 AA이며 최소 24 x 24 CSS px와 간격 예외를 확인해야 함. `Focus Appearance`는 AAA로 구분 유지.
- WCAG-EM 2.0은 2026-07-23 W3C Group Note로 확인됨. 평가 범위, 대상 탐색, 대표 샘플, 샘플 평가, 결과 보고의 5단계 보고 구조로 쓰기 적합함.
- Figma Code Connect in MCP의 토큰 29.5퍼센트 감소와 작업 시간 19.6퍼센트 감소 수치는 Figma 자체 평가 결과로만 취급하고, 도입 효과는 프로젝트별 검증이 필요함.

## 출처
- [Tailwind CSS v4.3: Scrollbars, new colors, and more](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [MDN: Using anchored container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Anchored_container_queries)
- [web.dev: Anchor positioning](https://web.dev/learn/css/anchor-positioning)
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C: WCAG Evaluation Methodology 2.0](https://www.w3.org/TR/WCAG-EM/)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui: August 2026 Questionnaire](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- [Figma: The Benefits of Code Connect in MCP](https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/)

## 위키화 후보
- 없음. 기존 Tailwind v4.3, shadcn/ui, WCAG 2.2, Anchor Positioning, Figma Code Connect 노트 보강 범위.

## 프로필 반영 후보 (저위험)
- `anchor-scope`를 반복 tooltip/dropdown 컴포넌트의 anchor 이름 충돌 점검어로 유지.
- `shadcn cn` import 전환을 신규 컴포넌트 추가 시 import drift 점검어로 유지.

## 승인 필요 (고위험)
- 기존 프로젝트에 `pnpm dlx shadcn@latest migrate cn` 일괄 적용.
- Private GitHub Registry, Figma Code Connect MCP를 디자인 시스템 source of truth나 CI 토큰 흐름에 편입.

## 신규 도구 후보 (에이전트/스킬)
- [agent] accessibility-regression-checker — WCAG 2.2의 focus, target size, sticky/popover 겹침 회귀를 검수.
- [skill] shadcn-migration-auditor — shadcn 변경 기록을 기준으로 import, registry, 컴포넌트 마이그레이션 영향만 점검.
