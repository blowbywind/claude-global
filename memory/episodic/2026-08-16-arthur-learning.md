---
date: 2026-08-16
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-16

## 오늘 배운 것
- `Interop 2026`의 프론트엔드 직접 영향 영역은 `anchor positioning`, `container style queries`, `dialogs/popovers`, `scroll-driven animations`, `view transitions`로 확인됨.
- shadcn/ui는 `React Aria`를 일급 base로 추가했고, `Base UI`를 기본값으로 유지하며 `Radix`도 계속 지원함. `Toast`는 Base UI 프로젝트에서 API 피드백 UI 후보로 유지 가능.
- Tailwind CSS v4.3의 `scrollbar-gutter-*`, `@container-size`, `tab-*`, `zoom-*`, 중첩·복합 `@variant`는 스크롤 패널·코드뷰·미리보기 UI 점검어로 유효함.
- 포커스 링은 `Focus Appearance`의 최소 면적과 `Non-text Contrast`의 상태 대비를 함께 봐야 하며, 조밀한 아이콘 버튼은 24×24 CSS px 대상 크기나 충분한 간격을 확인해야 함.
- `scrollIntoView()`는 `container: "nearest"`와 Promise 반환의 `interrupted` 결과가 MDN에서 확인되어, 중첩 스크롤 패널 자동 스크롤 회귀 테스트 항목으로 유지 가능.
- Figma Code Connect는 Figma Dev Mode와 실제 코드 컴포넌트를 연결하고 MCP 서버의 코드 참조 정확도를 높이므로, design-to-code 검수는 실제 import·variant 매핑 확인까지 포함해야 함.

## 출처
- [Interop 2026](https://web.dev/blog/interop-2026)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [W3C Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [MDN scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- [Figma Code Connect](https://developers.figma.com/docs/code-connect/)

## 위키화 후보
- 없음. 기존 위키 노트 보강 범위로 충분함.

## 프로필 반영 후보 (저위험)
- 포커스 링 검수에 `Focus Appearance`와 `Non-text Contrast` 동시 확인을 추가.
- 코드뷰·로그뷰 구현 점검어에 Tailwind v4.3 `tab-*`를 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
