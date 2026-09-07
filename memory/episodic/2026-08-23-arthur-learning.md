---
date: 2026-08-23
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-23

## 오늘 배운 것
- `shadcn/ui` 신규 프로젝트 기본 primitive는 `Base UI`로 바뀌었지만 `Radix`는 계속 지원됩니다. 비대화형 `shadcn init`에서 Radix를 유지하려면 `-b radix`를 명시해야 합니다. [출처](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- Base UI용 `shadcn Toast`는 `actions`, `status types`, `promises`, `stacking`, `swipe dismissal`을 지원하므로 API 요청 성공, 실패, 진행 상태 피드백 UI에 적합합니다. [출처](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- `@shadcn/helpers/ai-sdk`는 모델, API 라우트, 네트워크, API 키 없이 `useChat` 생명주기로 대화와 human-in-the-loop 승인 흐름을 재현할 수 있어 tool card와 승인 프롬프트 회귀 테스트에 유용합니다. [출처](https://ui.shadcn.com/docs/helpers/ai-sdk)
- `shadcn registry`는 `include`와 `shadcn registry validate`로 큰 내부 registry를 나누고, 발행 전 schema, 중복 이름, include 규칙, 로컬 파일 경로를 검증할 수 있습니다. [출처](https://ui.shadcn.com/docs/changelog/2026-05-registry-include)
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 미리보기 UI의 레이아웃 안정성 점검어로 유지할 만합니다. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)
- 접근성 검증은 WCAG-EM 2.0의 범위 정의, 샘플 선정, 평가, 보고 절차로 증거화하고, 2026년 UX 차별화는 외형 UI보다 시스템 행동, 신뢰, 통제감, 비즈니스 성과 연결에 둬야 합니다. [출처](https://www.w3.org/TR/wcag-em-2/) / [출처](https://www.nngroup.com/articles/state-of-ux-2026/)

## 출처
- [July 2026 - Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [July 2026 - Toast](https://ui.shadcn.com/docs/changelog/2026-07-toast)
- [AI SDK - shadcn/ui](https://ui.shadcn.com/docs/helpers/ai-sdk)
- [May 2026 - Registry Include and Validate](https://ui.shadcn.com/docs/changelog/2026-05-registry-include)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [Guide to the Figma MCP server](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- [Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [WCAG Evaluation Methodology 2.0](https://www.w3.org/TR/wcag-em-2/)
- [State of UX 2026](https://www.nngroup.com/articles/state-of-ux-2026/)

## 위키화 후보
- 없음. 기존 `Base UI`, `Tailwind v4.3`, `shadcn Toast`, `@shadcn/helpers`, `WCAG-EM`, `Figma Code Connect` 노트 보강으로 충분합니다.

## 프로필 반영 후보 (저위험)
- API 요청 피드백 UI 점검어에 `shadcn Toast`의 `promise/status/action` 패턴을 유지.
- AI chat UI와 agent approval UI 회귀 테스트 후보로 `@shadcn/helpers/ai-sdk` 결정론적 fixture를 유지.

## 승인 필요 (고위험)
- `shadcn init` 자동화 기본을 Base UI로 고정하거나 기존 Radix 프로젝트를 Base UI로 마이그레이션하는 결정.
- Figma MCP와 Code Connect를 기본 design-to-code 경로로 채택하거나 GitHub 연결을 허용하는 결정.

## 신규 도구 후보 (에이전트/스킬)
- [skill] shadcn-registry-validator — 내부 registry 변경 전 `include`, schema, 중복 이름, 로컬 파일 경로를 검증.
- [skill] ai-chat-ui-fixture — `@shadcn/helpers/ai-sdk`로 tool card, approval prompt, question flow 프리뷰와 회귀 테스트 생성.
