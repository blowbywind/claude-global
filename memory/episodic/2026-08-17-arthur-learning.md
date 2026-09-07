---
date: 2026-08-17
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-17

## 오늘 배운 것
- shadcn/ui `Human in the Loop`는 `needsApproval`과 실제 `useChat` 생명주기 모킹을 지원하므로 승인, 거절, 도구 카드 UI 회귀 테스트 후보로 검증됐다.
- shadcn/ui `Questionnaire`는 고정 선택, 자유 입력, 복수 선택, 건너뛰기, 조건부 질문을 지원해 agent 확인 프롬프트와 온보딩 폼 후보로 유지한다.
- React Aria v1.20.0 `TokenField`는 아직 alpha이며, 프롬프트 필드, 태그 입력, 구조화 검색에 쓸 수 있지만 안정성 표기를 함께 남겨야 한다.
- Figma Code Connect in MCP의 성능 수치는 Figma 자체 평가 결과로만 취급하고, 실제 도입 판단은 Code Connect coverage와 props 매핑 품질 확인을 기준으로 삼는다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `tab-*`는 스크롤 패널과 코드뷰의 커스텀 CSS 의존을 줄이는 점검어로 유효하다.
- WCAG 2.2 `Target Size Minimum`과 `Focus Not Obscured`는 24px 대상 크기, 인접 간격, sticky header/footer, `scroll-padding` 점검어로 유지한다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui August 2026 - Questionnaire](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- [React Aria v1.20.0](https://react-aria.adobe.com/releases/v1-20-0)
- [Figma Code Connect in MCP Blog](https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/)
- [Figma Code Connect Help](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.2 Focus Not Obscured Minimum](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)

## 위키화 후보
- 없음. 기존 Tailwind v4.3, Questionnaire, Human in the Loop, TokenField, Code Connect, WCAG 2.2 노트 보강 범위.

## 프로필 반영 후보 (저위험)
- `React Aria TokenField(alpha)`를 프롬프트, 태그, 구조화 검색 입력 후보로 표기한다.
- `Human in the Loop` 승인 흐름을 agent UI 회귀 테스트 점검어로 추가한다.

## 승인 필요 (고위험)
- Figma Code Connect MCP 도입은 Figma, GitHub 접근 권한과 디자인 시스템 매핑 변경이 필요하므로 프로젝트별 승인 필요.
- `TokenField(alpha)`를 프로덕션 기본 입력 컴포넌트로 채택하는 것은 안정성 검토 후 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [agent] design-system-mapper - Code Connect coverage, 실제 컴포넌트 import, props 매핑 품질 점검
- [skill] ai-ui-regression - 승인, 거절, 질문 흐름, 키보드 이동을 포함한 agent UI 회귀 테스트 절차화
