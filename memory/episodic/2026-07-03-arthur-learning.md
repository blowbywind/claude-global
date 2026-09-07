---
date: 2026-07-03
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-03

## 교차검증 결과

**버린 항목 (출처 불충분·중복):**
- Agentic UI 트렌드 → `uxdesign.cc` 도메인만 명시, 구체 기사 URL 없음
- shadcn/ui Base UI 프리미티브 기본 전환(7월) → `ui.shadcn.com` 도메인만, changelog/릴리즈 노트 URL 없음 → 할루시네이션 의심
- 채팅 컴포넌트(`MessageScroller`, `Bubble` 등) → 구체 문서 URL 없음, 미검증
- Tailwind v4 `@theme` / shadcn `--dry-run` → 이미 2026-06-25, 2026-06-20 기록에 존재

---

## 오늘 배운 것

- **WCAG 2.2 AA Focus Not Obscured (2.4.11)**: sticky 헤더·하단 바 등이 포커스 링을 가리면 위반. `scroll-margin-top` 또는 스크롤 오프셋으로 보정 필수 — 기존 기록(2026-06-18)은 "대비 4.5:1 / `:focus-visible` / ARIA" 수준이었으므로 구체 기준 추가
- **WCAG 2.2 AA Consistent Help (3.2.6)**: 챗봇·연락처·FAQ 등 도움말 메커니즘은 여러 페이지에서 동일 위치에 노출해야 함 — 내비게이션/레이아웃 설계 체크포인트로 추가
- **View Transitions `no-preference` 플립 패턴**: 기본값 모션 OFF, `@media (prefers-reduced-motion: no-preference)` 조건에서만 `startViewTransition` 활성화. 기존 `prefers-reduced-motion: reduce` 체크(기록 2026-06-21)와 방향이 반대 — 점진적 향상 원칙에 더 부합

## 출처

- [WCAG 2.2 — W3C 공식 명세](https://www.w3.org/TR/WCAG22/) (veroxstudio.com 기사가 인용한 원본)
- [View Transitions + prefers-reduced-motion — Medium](https://medium.com) (기사 제목 미확인, 도메인 수준 출처)

## 위키화 후보

- `WCAG-2.2-AA-checklist` — 2.4.11 Focus Not Obscured / 3.2.6 Consistent Help 등 2.2 신규 기준 정리 노트

## 프로필 반영 후보 (저위험)

- WCAG 2.2 AA 구체 기준 보완: "2.4.11 Focus Not Obscured(`scroll-margin-top`), 3.2.6 Consistent Help"를 기존 기록에 추가
- View Transitions `no-preference` 플립 패턴을 기존 2026-06-21 기록에 보완 명시

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음)
