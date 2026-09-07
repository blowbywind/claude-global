---
date: 2026-08-30
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-30

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `tab-*`는 스크롤 패널, 높이 반응형 패널, 코드뷰 점검어로 유지할 근거가 충분하다.
- shadcn/ui 신규 프로젝트 기본값은 Base UI이며, Radix는 폐기되지 않았고 기존 프로젝트 마이그레이션도 필수가 아니다. React Aria는 `--base aria`로 선택 가능하다.
- `Questionnaire`는 단일 선택, 다중 선택, 자유 입력, 건너뛰기, 검증, 진행 상태를 포함해 agent 확인 질문과 온보딩 흐름 후보로 적합하다.
- `@shadcn/helpers/ai-sdk`는 모델, API 라우트, 네트워크, API 키 없이 실제 `useChat` 생명주기로 메시지, 도구 호출, 승인 흐름을 결정적으로 테스트할 수 있다.
- shadcn/ui Base UI `Toast`는 상태 타입, 액션, `toast.promise`, 스태킹, 스와이프 닫기를 지원하므로 API 요청 피드백 UI 후보로 유지할 만하다.
- 접근성 검수에서는 `Focus Appearance`의 충분한 면적과 3:1 상태 대비, `Target Size (Minimum)`의 24 x 24 CSS px 또는 간격 예외, `Non-text Contrast`의 3:1 의미 단서 대비, APG의 네이티브 의미론 우선 원칙을 함께 본다.

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui Questionnaire](https://ui.shadcn.com/docs/components/base/questionnaire)
- [shadcn/ui AI SDK helper](https://ui.shadcn.com/docs/helpers/ai-sdk)
- [shadcn/ui Toast](https://ui.shadcn.com/docs/components/base/toast)
- [W3C Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- [W3C APG Read Me First](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)

## 위키화 후보
- 없음. 기존 위키에 Tailwind v4.3, shadcn/ui, Questionnaire, Toast, `@shadcn/helpers`, WCAG 접근성 노트가 있어 신규보다 보강 범위.

## 프로필 반영 후보 (저위험)
- WCAG 2.2 `Target Size (Minimum)`의 24 x 24 CSS px 기준과 간격 예외를 아이콘 버튼, 툴바, 행 액션 검수어로 유지한다.
- agent 확인 프롬프트 UI 점검어에 `Questionnaire`의 단일, 다중, 자유 입력, 건너뛰기, 검증 흐름을 함께 둔다.

## 승인 필요 (고위험)
- Tailwind v4.3 업그레이드나 shadcn/ui Base UI, React Aria 전환은 의존성 및 디자인 시스템 변경이므로 프로젝트별 승인 필요.
- `Questionnaire`를 기존 폼이나 승인 UI의 기본 컴포넌트로 대체하는 것은 작업 방식 변경이므로 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] 접근성 컴포넌트 검수 — WCAG 2.2 포커스, 타깃 크기, 비텍스트 대비, ARIA APG 기준으로 UI 변경을 점검한다.
