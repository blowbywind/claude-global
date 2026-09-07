---
date: 2026-07-14
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-14

## 오늘 배운 것
- `shadcn/typeset`은 HTML과 렌더링된 Markdown의 타이포그래피를 한 CSS 파일로 표준화하고, `size`, `leading`, `flow` 변수로 chat/docs별 리듬만 조정하는 방식이라 콘텐츠 UI 일관성에 유용하다.
- shadcn/ui는 2026년 7월 Base UI를 기본 컴포넌트 라이브러리로 전환했지만, Radix는 폐기되지 않았고 새 컴포넌트 업데이트도 양쪽 지원을 유지한다.
- `MessageScroller`는 스트리밍 답변, 저장된 스레드 복원, 이전 메시지 prepend, 점프, 스크롤 제어, 가시성 추적을 맡는 채팅 스크롤 추상화다. 단, 위키에는 이미 관련 후보 노트가 있어 신규 개념으로 중복 생성할 필요는 낮다.
- Tailwind CSS v4.1의 `pointer-*`, `any-pointer-*`, `justify-center-safe`, `wrap-anywhere`는 뷰포트 크기보다 입력 장치와 오버플로 상황을 기준으로 반응형 UI를 보강한다.
- Tailwind CSS v4.1의 `@source not`과 `@source inline()`은 스캔 제외와 safelist를 CSS에서 직접 제어해 대형 프론트엔드 저장소의 빌드 관리를 단순화한다.
- WCAG2ICT 2.2는 WCAG 2.0/2.1/2.2를 비웹 문서와 소프트웨어에 해석 적용하는 W3C Group Note이며, 자체 준수 표준이 아니다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.1: Text shadows, masks, and tons more](https://tailwindcss.com/blog/tailwindcss-v4-1)
- [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies](https://www.w3.org/TR/wcag2ict-22/)
- [Human Oversight-by-Design for Accessible Generative IUIs](https://arxiv.org/abs/2602.13745)

## 위키화 후보
- `shadcn/typeset` — HTML/Markdown 콘텐츠 타이포그래피를 chat/docs별 리듬으로 분리하는 CSS 기반 표준화 패턴
- `Tailwind v4.1 입력 장치·오버플로 유틸리티` — `pointer-*`, `any-pointer-*`, `safe alignment`, `wrap-anywhere` 실무 적용 노트

## 프로필 반영 후보 (저위험)
- Tailwind v4.1 `pointer-*`, `any-pointer-*`, `safe alignment`, `wrap-anywhere`를 반응형 UI 점검어로 추가
- `shadcn/typeset`을 Markdown/HTML 콘텐츠 스타일 표준화 패턴으로 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] chat-scroll-audit — 스트리밍 채팅 UI에서 `MessageScroller` 도입 가능성과 스크롤 회귀 항목을 점검
