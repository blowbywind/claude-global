---
date: 2026-07-30
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-30

## 오늘 배운 것
- shadcn/ui `Toast`는 2026년 7월 기준 actions, status types, promises, stacking, swipe dismissal을 지원하므로 API 요청의 대기·성공·실패 피드백 후보로 검토할 수 있다.
- shadcn/ui의 Next.js 폼 문서는 `<Form />`, `<Field />`, `useActionState`, pending 상태, Server Actions, Zod 서버 검증을 한 흐름으로 묶는다.
- 접근성 기본 설계는 대비, 색상 단독 의미 전달 금지, 식별 가능한 인터랙션, 명확한 라벨, 피드백, 뷰포트 대응을 초기 설계 단계부터 포함해야 한다.
- 버튼과 인터랙션 타깃은 마우스 정밀도만 기준으로 잡으면 안 되며, 터치 사용자와 미세 운동 제어가 어려운 사용자를 위해 충분한 크기와 간격을 확보해야 한다.
- WCAG 3.0은 아직 초안이지만, 오버레이가 본문을 가리면 닫기 수단을 제공하고 `Esc` 키와 접근 가능한 닫기 버튼을 예시로 든다.
- 생성형 UI 결과물은 설명과 실제 구현이 어긋날 수 있으므로, 화면 설명 수용보다 렌더링 결과·기능 요구사항·접근성 체크를 별도 검증해야 한다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [shadcn/ui Next.js Forms](https://ui.shadcn.com/docs/forms/next)
- [W3C WAI: Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing/)
- [web.dev: Cursors and pointers](https://web.dev/learn/css/cursors-and-pointers)
- [W3C WCAG 3.0 Draft](https://www.w3.org/TR/wcag-3.0/)
- [NN/g: State of UX in 2026](https://www.nngroup.com/articles/state-of-ux-2026/)
- [arXiv: Design Theater: A Benchmark for Generative UI](https://arxiv.org/abs/2607.22928)
- [arXiv: Designing AI for Real Users](https://arxiv.org/abs/2603.28196)
- [arXiv: Human Oversight-by-Design for Accessible Generative IUIs](https://arxiv.org/abs/2602.13745)

## 위키화 후보
- `Design Theater` — 생성형 UI 설명과 실제 구현 불일치 검증 개념.
- `Overlay content dismissible` — WCAG 3.0 초안의 오버레이 닫기 요구사항을 기존 WCAG 3.0 노트에 보강.

## 프로필 반영 후보 (저위험)
- API 피드백 UI 점검어에 shadcn/ui `Toast`의 `promise/status/action` 패턴 추가.
- 생성형 UI 산출물 검수 시 설명이 아니라 렌더링 결과·기능 요구사항·접근성 상태를 기준으로 확인.

## 승인 필요 (고위험)
- 기존 프로젝트의 폼 구조를 shadcn/ui Next.js Server Actions 패턴으로 전환하는 작업은 별도 승인 필요.
- 고위험 AI 인터페이스에 사람 검토, 임계치, 감사 로그를 기본 게이트로 넣는 정책 변경은 별도 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
- [skill] generated-ui-verifier — 생성형 UI 산출물의 설명·렌더링·상호작용·접근성 일치 여부를 점검.
