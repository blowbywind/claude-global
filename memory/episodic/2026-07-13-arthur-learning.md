---
date: 2026-07-13
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-13

## 오늘 배운 것
- WCAG 2.2 컴포넌트 리뷰의 실무 핵심은 `Focus Not Obscured`, `Dragging Movements`, `Target Size`입니다. sticky header, modal, scroll container, 드래그 정렬, 아이콘 버튼을 기본 점검 대상으로 둡니다.
- 아이콘 버튼은 보이는 아이콘 크기와 별개로 포인터 타깃 안에 24x24 CSS px 영역을 확보하거나 충분한 간격 예외를 만족해야 합니다.
- 드래그 정렬, 칸반 이동, range slider처럼 끌기 조작이 있는 UI는 기능상 드래그가 필수인 경우가 아니면 클릭, 탭, 버튼, 메뉴 같은 단일 포인터 대안을 둡니다.
- Tailwind v4의 `@theme`는 유틸리티 생성을 직접 좌우하므로 디자인 토큰은 CSS-first theme 변수로 관리하고, 재사용 컴포넌트 반응형은 `@container`, `@sm`, `@md` 기준을 우선 검토합니다.
- shadcn/ui v4 계열에서는 `@theme inline`, React 19, `data-slot` 기반 스타일링을 공식 흐름으로 볼 수 있고, 모노레포에서는 `components.json`의 `style`, `iconLibrary`, `baseColor`, Tailwind v4 config 빈 값을 맞춰야 합니다.
- DTCG 2025.10은 도구 간 디자인 토큰 교환용 안정 명세지만 W3C 표준 트랙이나 W3C Recommendation은 아니므로 내부 문서 표기를 구분해야 합니다.

## 출처
- [WCAG 2.2의 새로운 항목](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [WCAG 2.5.8 Target Size 이해 문서](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.5.7 Dragging Movements 이해 문서](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [WCAG 2.4.11 Focus Not Obscured 이해 문서](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [Tailwind CSS theme 변수](https://tailwindcss.com/docs/theme)
- [Tailwind CSS responsive design와 container queries](https://tailwindcss.com/docs/responsive-design)
- [shadcn/ui Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4)
- [shadcn/ui monorepo](https://ui.shadcn.com/docs/monorepo)
- [DTCG Design Tokens Format Module 2025.10](https://www.designtokens.org/TR/2025.10/format/)
- [Zustand useShallow로 리렌더 방지](https://zustand.docs.pmnd.rs/learn/guides/prevent-rerenders-with-use-shallow)

## 위키화 후보
- 없음

## 프로필 반영 후보 (저위험)
- Zustand `useShallow`는 모든 셀렉터가 아니라 객체, 배열, 계산값 셀렉터 중심으로 적용한다고 문구를 정밀화.
- DTCG 2025.10은 W3C Recommendation이 아니라 Design Tokens Community Group의 안정 명세로 표기.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] wcag-component-review — WCAG 2.2 기준으로 초점 가림, 타깃 크기, 드래그 대체 조작을 컴포넌트 단위로 점검.
