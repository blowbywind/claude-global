---
date: 2026-08-28
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-28

## 오늘 배운 것
- shadcn/ui는 2026년 8월 Private GitHub Registries를 추가했으며, 비공개 디자인 시스템·내부 기능 키트를 CLI로 설치할 수 있다.
- shadcn/ui `Questionnaire`는 에이전트 확인 질문, 온보딩, 설문, 설정 흐름용 다단계 컴포넌트이며 Base UI, React Aria, Radix를 지원한다.
- `@shadcn/helpers/ai-sdk`는 실제 `useChat` 생명주기 위에서 `needsApproval` 기반 human-in-the-loop 흐름을 모킹할 수 있어 agent 승인 UI 회귀 테스트에 적합하다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`는 스크롤 패널·코드뷰·높이 기반 컨테이너 레이아웃 점검어로 유지할 가치가 있다.
- React Aria v1.20.0은 `PreviewTrigger`, `TokenField` alpha, context menu trigger, Table row 내부 상호작용 컴포넌트 지원을 추가했다.
- WCAG 2.2와 ARIA APG 기준상 포커스 가림, 드래그 대체 조작, 24x24 CSS px 타깃 크기, 네이티브 의미론 우선 검수는 계속 기본 체크리스트로 둔다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [React Aria v1.20.0](https://react-aria.adobe.com/releases/v1-20-0)
- [MDN Using interest invokers](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [W3C What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [W3C ARIA APG Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)

## 위키화 후보
- shadcn/ui Private GitHub Registries — 기존 shadcn registry CLI 노트에 비공개 저장소·인증·읽기 전용 토큰 범위 보강.

## 프로필 반영 후보 (저위험)
- `PreviewTrigger`를 hover, focus, long press 기반 preview popover 구현 후보로 추가.
- Tailwind v4.3 `scrollbar-gutter-*`와 `@container-size`를 스크롤 패널 안정성 점검어로 유지.

## 승인 필요 (고위험)
- 비공개 GitHub registry를 사내 디자인 시스템 배포 경로로 채택하거나 CI에 `GH_TOKEN`/`GITHUB_TOKEN`을 추가하는 정책 변경.
- `TokenField` alpha를 프로덕션 입력 컴포넌트 표준으로 채택하는 결정.

## 신규 도구 후보 (에이전트/스킬)
- [skill] 프론트엔드 릴리스 검증 — shadcn, Tailwind, React Aria, WCAG 공식 변경로그와 기존 위키 중복 여부를 함께 대조.
