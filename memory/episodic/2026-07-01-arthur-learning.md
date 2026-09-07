---
date: 2026-07-01
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-01

WebSearch 권한 없음. 기존 지식 기반 교차검증으로 진행.

**검증 판정 요약:**

| # | 항목 | 판정 | 사유 |
|---|---|---|---|
| 1 | Intent-Aware Adaptive UI | ❌ 폐기 | 구체적 URL 없음 |
| 2 | Calm Design | ❌ 폐기 | 구체적 URL 없음, 신규 정보 아님 |
| 3 | Tailwind v4.3 논리 속성 | ⚠️ 부분 채택 | 논리 속성 확장은 타당, **색상명(mauve·olive·mist·taupe) 불채택** — Tailwind 기본 팔레트 명명 규칙 불일치(Radix UI 팔레트명 혼동 의심) |
| 4 | `@container-size` block-size | ❌ 폐기 | 프로필 [2026-06-26] 기등재 |
| 5 | shadcn Chat 컴포넌트 | ✅ 채택 | ui.shadcn.com 출처·컴포넌트명 일관성 타당 |
| 6 | CLI RTL 자동 변환 | ❌ 폐기 | 기존 위키 명시 제외 대상 |
| 7 | AI 에이전트 단일문자열 프리셋 | ❌ 폐기 | 프로필 [2026-06-24] 기등재 내용과 중복, velog.io 출처 미검증 |
| 8 | WCAG 2.2 포커스 표시 | ❌ 폐기 | 프로필 [2026-06-18] 기등재 + 위키 노트 존재 |
| 9 | WCAG 3.0 로드맵 | ❌ 폐기 | 위키 `wcag-3-0-로드맵.md` 기존재 |

---

## 오늘 배운 것

- **Tailwind v4.3 논리 속성 유틸리티 확장**: `pbs-*`(padding-block-start), `mbs-*`(margin-block-start) 등 블록/인라인 방향 축약 유틸리티 추가. RTL·수직 레이아웃 대응 시 `ml-*`/`pt-*` 대신 논리 속성 유틸리티로 작성하면 `dir="rtl"` 전환 시 별도 오버라이드 불필요
- **shadcn/ui AI 채팅 전용 컴포넌트 군 출시**: `MessageScroller`, `Message`, `Bubble`, `Attachment`, `Marker` 등 스트리밍 채팅 특화 컴포넌트와 `@shadcn/react` 헤드리스 로직 패키지 신규 제공. 직접 구현했던 메시지 렌더링·자동 스크롤 로직을 컴포넌트로 대체 가능

## 출처

- [Tailwind CSS v4.3.0 Release](https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.0)
- [shadcn/ui 공식 문서](https://ui.shadcn.com)

## 위키화 후보

- `shadcn-ui-chat-컴포넌트` — MessageScroller·Bubble·@shadcn/react 헤드리스 패키지 사용 패턴 정리

## 프로필 반영 후보 (저위험)

- `Tailwind v4.3 논리 속성 유틸리티(pbs-*/mbs-*) RTL 레이아웃 적용 역량`
- `shadcn/ui @shadcn/react 헤드리스 Chat 컴포넌트 군 활용 역량`

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음)
