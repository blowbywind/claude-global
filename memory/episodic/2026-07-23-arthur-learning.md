---
date: 2026-07-23
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-23

## 오늘 배운 것
- shadcn/ui는 React Aria를 1급 base로 추가했고, Base UI는 기본값이며 Radix는 계속 지원된다. 신규 프로젝트 자동화에서는 `--base aria` 또는 `-b radix`처럼 base를 명시하는 편이 안전하다.
- `@shadcn/helpers`와 `MessageScroller`는 AI 채팅 UI의 스트리밍, prepend, 저장 대화, 메시지 점프를 백엔드 없이 재현하고 회귀 테스트하는 조합으로 쓸 수 있다.
- Tailwind CSS v4.3의 `scrollbar-gutter-*`와 `@container-size`는 스크롤 패널 흔들림과 블록 축 컨테이너 단위(`cqb`, `cqh`)가 필요한 컴포넌트 점검어로 유효하다.
- WCAG 2.2는 ISO/IEC 40500:2025로 승인됐고 W3C도 최신 WCAG 사용을 권장한다. WCAG2ICT는 비웹 문서·소프트웨어 적용을 돕는 비규범 지침으로 참고한다.
- DTCG 2025.10은 W3C Recommendation이 아니라 구현 목적의 안정 Community Group 명세다. OKLCH와 Display P3 토큰 근거는 `format`이 아니라 별도 `color` 모듈에서 확인된다.
- CSS Anchor Positioning은 앵커 기반 배치, 오버플로 대체 위치, 조건부 숨김을 제공하므로 팝오버·툴팁 배치 로직 단순화 후보지만 브라우저 지원 확인 후 점진 적용한다.

## 출처
- [July 2026 - React Aria - shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [July 2026 - Introducing @shadcn/helpers - shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-07-helpers)
- [Message Scroller - shadcn/ui](https://ui.shadcn.com/docs/components/base/message-scroller)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [WCAG 2 Overview - W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WCAG2ICT 2.2 - W3C](https://www.w3.org/TR/wcag2ict-22/)
- [Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/2025.10/format/)
- [Design Tokens Resolver Module 2025.10](https://www.designtokens.org/tr/2025.10/resolver/)
- [Design Tokens Color Module 2025.10](https://www.designtokens.org/tr/2025.10/color/)
- [CSS Anchor Positioning - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning)

## 위키화 후보
- DTCG Color Module 2025.10 - OKLCH·Display P3 토큰 근거를 기존 DTCG 노트에 보강.
- WCAG2ICT 2.2 - 비웹 문서·소프트웨어 접근성 적용 지침과 비규범 성격 정리.

## 프로필 반영 후보 (저위험)
- DTCG 2025.10 색상 토큰은 `color` 모듈 기준으로 OKLCH·Display P3를 표기.
- WCAG2ICT를 데스크톱·모바일 앱 컴포넌트 접근성 점검 참고어로 추가.

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트의 기본 primitive를 Base UI 또는 React Aria로 고정하는 행동 규칙은 기존 Radix 운영과 충돌 가능성이 있어 승인 필요.
- CSS Anchor Positioning으로 기존 팝오버·툴팁 배치 로직을 대체하는 작업은 브라우저 지원과 대체 경로 검토 후 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] chat-ui-preview-regression - `@shadcn/helpers` 시나리오와 `MessageScroller` 상태 점검으로 스트리밍 채팅 UI 회귀를 확인.
