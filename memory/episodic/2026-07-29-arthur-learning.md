---
date: 2026-07-29
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-29

## 오늘 배운 것
- Tailwind CSS v4.3의 `scrollbar-gutter-stable`, `@container-size`, `tab-*`는 스크롤 패널, 코드뷰, 로그 뷰어 점검어로 검증됨.
- shadcn/ui는 React Aria를 `--base aria`로 선택 가능한 일급 base로 추가했고, Base UI 기본값과 Radix 지원은 유지됨.
- `@shadcn/helpers`는 모델, API route, 네트워크, API key 없이 AI 채팅 `useChat` 흐름을 재현하는 프리뷰·테스트 후보로 검증됨.
- CSS `reading-flow`와 `reading-order`는 flex/grid/block의 시각 순서와 초점·읽기 순서 불일치를 줄이는 접근성 점검어다. 단, 브라우저 지원은 확인 후 점진 적용이 필요함.
- WCAG2Mobile은 W3C Group Draft Note이며 비규범 문서다. 모바일 앱 점검에는 `Focus Not Obscured`, `Dragging Movements`, `Target Size`를 참고할 수 있음.
- M3 Expressive의 사용성 연구는 검증됐지만, Google도 모든 도메인에 일괄 적용하지 말고 핵심 여정과 익숙한 패턴을 우선하라고 제한함.

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/helpers](https://ui.shadcn.com/docs/changelog/2026-07-helpers)
- [Chrome CSS reading-flow](https://developer.chrome.com/blog/reading-flow)
- [MDN reading-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/reading-flow)
- [W3C WCAG2Mobile 2.2](https://www.w3.org/TR/wcag2mobile-22/)
- [Google Design M3 Expressive research](https://design.google/library/expressive-material-design-google-research)

## 위키화 후보
- CSS `reading-flow`/`reading-order` - 시각 순서와 키보드 초점 순서 정합성 점검 노트
- M3 Expressive 사용성 연구 - 제품 도메인별 적용 한계와 검증 기준

## 프로필 반영 후보 (저위험)
- 코드뷰·로그 뷰어 구현 시 `tab-*`와 `scrollbar-gutter-stable`을 레이아웃 점검어로 유지
- 복잡한 flex/grid 재배치 UI에서 `reading-flow` 지원 여부와 초점 순서 검증을 접근성 점검어로 추가

## 승인 필요 (고위험)
- M3 Expressive식 큰 버튼·강한 containment를 제품 UI 기본값으로 채택
- 기존 Radix 프로젝트를 Base UI 또는 React Aria로 전환하는 작업 규칙

## 신규 도구 후보 (에이전트/스킬)
- [skill] frontend-research-verifier - Tailwind, shadcn, WCAG, CSS 신규 기능 출처 검증과 위키 중복 점검 자동화
