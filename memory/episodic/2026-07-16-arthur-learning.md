---
date: 2026-07-16
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-16

## 오늘 배운 것
- shadcn/ui는 2026년 7월부터 신규 프로젝트 기본값을 Base UI로 바꿨지만, Radix는 계속 지원되며 기존 앱 마이그레이션은 필수가 아니다. 기존 Radix 자동화는 `shadcn init -b radix` 고정이 안전하다.
- `@shadcn/helpers`는 실제 모델, API 라우트, 네트워크, API 키 없이 `useChat` 수명주기와 스트리밍 이벤트를 재현하므로 AI 채팅 UI 프리뷰와 테스트에 유효하다.
- `shadcn/typeset`은 HTML과 렌더링된 Markdown을 한 CSS 파일로 스타일링하고, chat/docs별 리듬을 조정하며 스트리밍 중 기존 블록 재스타일링을 줄이는 패턴으로 확인된다.
- Tailwind는 동적 클래스 문자열 조합보다 정적 클래스 매핑을 기본으로 두고, 모노레포·외부 UI 패키지는 `@source`, `source(none)`, `@source inline()`, `@source not inline()`으로 탐색과 보존 범위를 명시하는 편이 안전하다.
- Popover API의 “Baseline 2024” 주장은 현행 MDN 표기와 충돌하므로 버린다. 현재는 Baseline 2025로 보고, Popover는 비모달 전용이므로 modal dialog 대체로 쓰지 않는다.
- WCAG 2.2 체크리스트에는 `Focus Not Obscured`, `Dragging Movements`, `Target Size 24x24 CSS px`, `Redundant Entry`, `Accessible Authentication`을 유지한다.

## 출처
- [shadcn/ui Changelog](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS - Detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files)
- [Tailwind CSS v4.1](https://tailwindcss.com/blog/tailwindcss-v4-1)
- [MDN - Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [web.dev - Popover API lands in Baseline](https://web.dev/blog/popover-api)
- [Chrome Developers - CSS Anchor Positioning API](https://developer.chrome.com/docs/css-ui/anchor-positioning-api)
- [W3C - WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Google Design - Expressive Design Research](https://design.google/library/expressive-material-design-google-research)
- [DTCG - Design Tokens Format Module 2025.10](https://www.designtokens.org/TR/2025.10/format/)

## 위키화 후보
- Popover API Baseline 2025 정정 및 비모달·dialog 구분: 기존 Popover 노트 보강 후보

## 프로필 반영 후보 (저위험)
- Popover API는 Baseline 2025, 비모달 전용, modal은 `<dialog>` 우선으로 점검
- Tailwind 동적 클래스는 정적 매핑 우선, `@source inline()`은 safelist 용도로 제한

## 승인 필요 (고위험)
- 신규 shadcn 프로젝트 기본 primitive를 Base UI로 고정하는 행동 규칙
- Material 3 Expressive식 큰 버튼·강한 containment를 제품 UI 기본값으로 채택

## 신규 도구 후보 (에이전트/스킬)
- [skill] tailwind-source-audit — 동적 클래스, `@source`, safelist, legacy 경로 제외 설정을 점검하는 프론트엔드 검증 스킬
