---
date: 2026-08-09
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-09

## 오늘 배운 것
- `Tailwind CSS v4.3`의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 공식 확인됨. `scrollbar-gutter-stable`은 스크롤 패널 흔들림 방지 점검어로 유지.
- Tailwind 컨테이너 쿼리는 `@container`가 기본이고, 높이 기반 단위인 `cqb`, `cqh`가 필요할 때 `@container-size`를 써야 함.
- `shadcn/ui`는 2026년 7월 신규 프로젝트 기본을 `Base UI`로 바꿨고 `Radix`는 계속 지원함. `React Aria`도 `--base aria`로 공식 지원됨.
- `shadcn/cli v4`의 `registry:base`는 컴포넌트, 의존성, CSS 변수, 폰트, 설정을 한 번에 배포할 수 있어 내부 디자인 시스템 배포 단위로 검토 가능.
- WCAG 2.2의 `Target Size Minimum`은 24 x 24 CSS px, `Focus Not Obscured Minimum`은 키보드 포커스가 작성자 콘텐츠에 완전히 가려지지 않아야 한다는 기준으로 확인됨.
- Chrome Modern Web Guidance의 `position-aware-tooltips`, `scrollability-affordance-hints`는 popover 위치 전환과 `scroll-state()` 기반 스크롤 힌트 점검어로 유지 가능.

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [Tailwind scrollbar-gutter](https://tailwindcss.com/docs/scrollbar-gutter)
- [Tailwind responsive design](https://tailwindcss.com/docs/responsive-design)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/cli v4](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [DTCG Format Module 2025.10](https://www.designtokens.org/TR/2025.10/format/)
- [DTCG Color Module 2025.10](https://www.designtokens.org/TR/2025.10/color/)
- [Chrome Modern Web Guidance use cases](https://developer.chrome.com/docs/modern-web-guidance/use-cases)

## 위키화 후보
- 없음. 기존 Tailwind v4.3, shadcn Base UI, React Aria, DTCG, WCAG, scroll-state 노트 보강 범위.

## 프로필 반영 후보 (저위험)
- `registry:base`를 내부 디자인 시스템 배포 단위 점검어로 추가.
- WCAG 2.2 `Target Size Minimum`, `Focus Not Obscured Minimum`을 아이콘 버튼, 행 액션, sticky header, popover, toast 회귀 점검어로 추가.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 primitive를 `Base UI`로 고정하는 행동규칙 변경은 기존 `Radix` 운영과 충돌 가능성이 있어 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-registry-auditor — shadcn registry 항목의 `registry:base`, 의존성, CSS 변수, 폰트, 설정 누락을 점검.
