---
date: 2026-07-11
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-11

## 오늘 배운 것
- WCAG 2.2에 `Focus Not Obscured`, `Dragging Movements`, `Target Size(최소 24x24px)`, `Accessible Authentication`이 추가되어, 컴포넌트 개발 시 포커스 가림·드래그 대체 입력·터치 타깃 크기·로그인 접근성을 체크리스트에 넣어야 합니다.
- WAI-ARIA APG에 따르면 `role="button"`만 부여해서는 키보드 동작(Enter/Space)이 자동으로 생기지 않으므로, 커스텀 인터랙티브 요소는 반드시 키보드 핸들러를 직접 구현해야 합니다.
- Tailwind v4의 `@theme`는 색상·간격·폰트 토큰을 유틸리티 클래스와 CSS 변수에 동시 연결하는 방식이라, 임의 CSS 오버라이드보다 `@theme` 중심 토큰 관리가 권장됩니다.
- shadcn `registry-item.json`은 컴포넌트뿐 아니라 `registry:hook`, `registry:theme` 등으로 훅·테마 단위 배포를 지원하며, namespace 기능으로 사설/서드파티 registry를 프로젝트 내에서 분리 관리할 수 있습니다(모노레포 UI 공유 시 참고).
- CSS Anchor Positioning은 팝오버/툴팁의 위치·오버플로우 대체 배치를 CSS만으로 처리할 수 있어, 향후 JS 기반 위치 계산 로직(popper류)을 줄일 여지가 있습니다.
- Design Tokens Format Module 2025.10은 W3C 표준이 아닌 초안(draft) 단계이므로, 참고용으로만 쓰고 고정 계약으로 채택하지 않는 것이 맞습니다.

## 출처
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WAI-ARIA APG - Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
- [Tailwind CSS - Theme](https://tailwindcss.com/docs/theme)
- [Design Tokens Format Module (Draft)](https://www.designtokens.org/tr/drafts/format/)
- [shadcn/ui - registry-item.json](https://ui.shadcn.com/docs/registry/registry-item-json)
- [shadcn/ui - Namespace](https://ui.shadcn.com/docs/registry/namespace)
- [MDN - CSS Anchor Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning)

## 위키화 후보
- CSS Anchor Positioning — 팝오버/툴팁 위치 계산을 브라우저 네이티브 CSS로 대체하는 신규 스펙, 개념 노트로 정리 가치 있음.

## 프로필 반영 후보 (저위험)
- 컴포넌트 리뷰 체크리스트에 WCAG 2.2 항목(포커스 가림, 타깃 24x24px, role="button" 키보드 핸들러 필수) 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
