---
date: 2026-07-12
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-12

## 오늘 배운 것
- WCAG 2.2 기준으로 sticky header/footer가 있는 화면은 포커스 요소가 작성자 콘텐츠에 완전히 가려지지 않는지 탭 이동 테스트에 포함해야 합니다.
- 아이콘 버튼과 링크 타깃은 최소 24×24 CSS 픽셀을 기본값으로 두고, 작게 보이는 경우에도 충분한 간격이나 동등한 대체 컨트롤을 확보해야 합니다.
- 드래그 앤 드롭 정렬, 슬라이더, 컬러 피커처럼 드래그가 필요한 기능은 클릭, 입력 필드, 위아래 버튼 등 단일 포인터 대안을 함께 제공해야 합니다.
- `role="button"`을 붙인 비버튼 요소는 네이티브 버튼처럼 `Space`와 `Enter` 활성화를 직접 구현해야 하며, 가능하면 `<button>`을 우선 사용합니다.
- Tailwind v4의 `@theme`는 디자인 토큰을 CSS 변수로 정의하고 관련 유틸리티와 변형 생성을 연결하므로, 공용 토큰은 별도 CSS 파일로 분리해 모노레포에서 공유하기 좋습니다.
- Tailwind 컨테이너 쿼리는 `@container`, `@sm`, `@md`, `@max-*` 변형으로 컴포넌트가 뷰포트가 아니라 부모 크기에 반응하게 만들어 재사용성을 높입니다.

## 출처
- [W3C WAI: What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [W3C WAI: How to Meet WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [W3C WAI: Understanding Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [WAI-ARIA APG: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Tailwind CSS: Theme Variables](https://tailwindcss.com/docs/theme)
- [Tailwind CSS: Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [shadcn/ui: Introduction](https://ui.shadcn.com/docs)
- [shadcn/ui: Registry](https://ui.shadcn.com/docs/registry)
- [Design Tokens Community Group](https://www.designtokens.org/)

## 위키화 후보
- 없음: 기존 위키에 WCAG 2.2, Tailwind v4, shadcn registry, DTCG 노트가 이미 있어 신규 노트보다 기존 노트 보강이 적합합니다.

## 프로필 반영 후보 (저위험)
- 컴포넌트 리뷰에서 WCAG 2.2 `Focus Not Obscured`, `Target Size`, `Dragging Movements`를 기본 점검어로 사용.
- Tailwind v4 `@theme`와 컨테이너 쿼리를 디자인 시스템 구현 패턴으로 유지.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] wcag-component-review — 포커스 가림, 타깃 크기, 드래그 대안, 커스텀 버튼 키보드 동작을 반복 점검하는 프론트엔드 접근성 리뷰 스킬.
