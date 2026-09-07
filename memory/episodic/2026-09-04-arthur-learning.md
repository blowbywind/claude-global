---
date: 2026-09-04
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-09-04

## 오늘 배운 것
- shadcn/ui는 2026년 9월 변경으로 컴포넌트의 `cn` import를 `cn` 패키지 기준으로 바꿨고, 기존 프로젝트는 `pnpm dlx shadcn@latest migrate cn` 적용 전 의존성 영향 검토가 필요합니다.
- shadcn/ui Private GitHub Registries는 `gh` 인증을 우선 사용하며, CI에서는 저장소 `Contents: Read-only` 범위의 `GH_TOKEN` 또는 `GITHUB_TOKEN` 사용이 권장됩니다.
- Figma Code Connect는 Figma 컴포넌트와 실제 코드 컴포넌트를 연결해 MCP 기반 AI 코드 생성 맥락을 보강하며, CLI는 framework parser보다 template files 방식을 권장합니다.
- Tailwind CSS v4.3의 `scrollbar-gutter-stable`, `@container-size`, `tab-*`, `zoom-*`, stacked/compound `@variant`, functional utility default는 스크롤 패널, 코드뷰, 컴포넌트 CSS 점검어로 유지할 가치가 있습니다.
- CSS `scroll-state()` queries와 Anchor Positioning은 sticky 상태, 스크롤 힌트, tooltip/popover fallback을 CSS 중심으로 다룰 수 있지만, 지원 여부와 fallback 검증을 함께 봐야 합니다.
- WCAG-EM은 범위 정의, 대표 샘플, 평가, 보고 절차를 제공하며, WCAG 2.2 `Target Size (Minimum)`은 포인터 대상 24 x 24 CSS px 또는 충분한 간격을 기준으로 삼습니다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Figma Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [MDN Container scroll-state queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [MDN CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning)
- [W3C WCAG-EM Overview](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

## 위키화 후보
- 없음. 기존 위키에 Figma Code Connect, Tailwind v4.3, shadcn/ui registry, Anchor Positioning, WCAG 2.5.8 관련 노트가 이미 있습니다.

## 프로필 반영 후보 (저위험)
- shadcn/ui `cn` 패키지 전환을 신규 컴포넌트 import 검수어로 추가합니다.
- Figma Code Connect CLI `template files`와 parser migration을 디자인 시스템 핸드오프 검수어로 유지합니다.

## 승인 필요 (고위험)
- shadcn/ui `migrate cn` 실행 또는 `cn` 패키지 전환 적용은 의존성 및 import 변경이므로 프로젝트별 승인 필요.
- Private GitHub Registries 또는 Figma Code Connect를 디자인 시스템 기본 배포, MCP 맥락 소스로 채택하는 작업은 인증, CI 토큰, 협업 흐름 변경이라 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-research-factcheck — shadcn, Tailwind, CSS, WCAG 공식 문서 변경점을 교차검증하고 프로필 후보로 정리.
