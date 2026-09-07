---
date: 2026-08-06
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-06

## 오늘 배운 것
- shadcn/ui `Questionnaire`는 다단계 질문 흐름 컴포넌트로, agent 확인 프롬프트·온보딩·설정 폼 후보입니다. Base UI, React Aria, Radix 모두 지원이 확인됩니다.
- shadcn/ui Base UI용 `Toast`는 `actions`, `status types`, `promises`, `stacking`, `swipe dismissal`를 지원하므로 API 요청 성공·실패·진행 상태 피드백 패턴으로 유지할 가치가 있습니다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널·코드뷰·미리보기 UI 점검어로 검증됩니다.
- Chrome Web UI 업데이트 기준으로 `scrollIntoView({ container: "nearest" })`, Promise 기반 programmatic scroll, `scroll-state()` 쿼리, anchored container queries가 확인됩니다. 중첩 스크롤·popover에는 유용하지만 적용 전 브라우저 호환성 확인이 필요합니다.
- WCAG-EM 2.0은 제품 단위 접근성 평가의 범위 정의·표본 선택·평가·보고 절차 기준으로, ACT Rules Format 1.1은 자동·수동 접근성 테스트 규칙 문서화 기준으로 쓸 수 있습니다.
- Figma Code Connect in MCP 수치는 Figma 내부 평가 출처로 확인됩니다. 27개 테스트에서 토큰 사용량 29.5퍼센트 감소, 작업 시간 19.6퍼센트 감소, 코드 품질 1점 향상을 보고했으나 일반화 전 프로젝트별 검증이 필요합니다.

## 출처
- [shadcn/ui August 2026 - Questionnaire](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3: Scrollbars, new colors, and more](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [Chrome for Developers: What's new in web UI](https://developer.chrome.com/blog/new-in-web-ui-io26)
- [W3C WCAG Evaluation Methodology 2.0](https://www.w3.org/TR/wcag-em-2/)
- [W3C ACT Rules Format 1.1](https://www.w3.org/TR/act-rules-format/)
- [Figma: Better code, fewer tokens: The benefits of Code Connect in MCP](https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/)

## 위키화 후보
- `shadcn/ui Questionnaire` — agent 확인 프롬프트·온보딩·설정 폼용 다단계 질문 컴포넌트.
- `Figma Code Connect in MCP` — 디자인 시스템 컴포넌트와 실제 코드 매핑을 agent 컨텍스트로 제공하는 패턴.

## 프로필 반영 후보 (저위험)
- `Questionnaire`를 agent 확인 프롬프트·온보딩 폼 구현 후보로 추가.
- design-to-code 검토어에 `Code Connect coverage`와 실제 컴포넌트 import 매핑 확인을 추가.

## 승인 필요 (고위험)
- shadcn/ui `Questionnaire`를 agent 확인 프롬프트 기본 컴포넌트로 고정.
- Figma MCP와 Code Connect를 design-to-code 기본 워크플로우로 채택.

## 신규 도구 후보 (에이전트/스킬)
- [skill] design-to-code-context-check — Figma MCP/Code Connect 응답이 실제 디자인 시스템 컴포넌트와 매핑되는지 검증.
- [skill] accessibility-eval-planner — WCAG-EM 2.0 범위·샘플링과 ACT Rules Format 1.1 테스트 규칙 초안을 생성.
