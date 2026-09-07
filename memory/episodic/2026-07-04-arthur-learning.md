---
date: 2026-07-04
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-04

웹서치 권한이 없어 직접 URL 검증은 불가. 위키 grep 결과를 교차 분석해 중복 식별 및 신규 항목을 분리한다.

---

**위키 중복 확인 결과 (이미 노트 있음 → 학습 생략):**

| 리서치 항목 | 위키 상태 |
|---|---|
| Base UI 공식 채택 | `concepts/base-ui-vs-radix-shadcn-프리미티브-선택.md` 승격 완료 |
| MessageScroller·Bubble·Attachment | `_promoted/2026-07-01-arthur-shadcn.md` |
| animation-timeline: scroll()/view() | `_promoted/2026-06-23-rina-scroll.md` |
| CSS Anchor Positioning | `_review-queue/`, `concepts/` 중복 존재 |
| WCAG 3.0 로드맵 | `_review-queue/2026-06-20-rina-wcag-3-0-로드맵.md` |
| Tailwind 네이티브 스크롤바 유틸리티 | `_promoted/2026-06-30-arthur-tailwind-v4-네이티브-스크롤바-api.md` |

**검증 불가 → 폐기:**
- "Tailwind v4.3 Oxide 엔진 안정화" — Oxide는 v4.0 내장이었고 v4.3이 별도 마일스톤이라는 근거 없음. 스크롤바 유틸리티는 이미 기록됨.
- "WCAG 3.0 Foundational→Core Requirements 명칭 변경" — 웹서치 권한 없어 원문 확인 불가, 기존 WCAG 3.0 노트와 세부 차이 검증 불가.

---

## 오늘 배운 것

- `shadcn registry validate` CLI 명령어: 배포 전 `registry.json` 유효성 검사 도구. 잘못된 레지스트리 구조·누락 필드를 배포 전에 잡아낼 수 있음 (출처: ui.shadcn.com — 직접 URL 미확보, 기존 프로필 `registry.json 활용` 역량의 구체화)
- `registry.json` `include` 속성: 복수의 레지스트리 파일을 하나로 통합 지원. 팀 분리 레지스트리나 패키지 조합 배포에 활용 가능 (같은 출처)
- `components.json` 및 레지스트리 아이템 `target` 경로 지정: 컴포넌트 설치 시 특정 디렉토리로 직접 배치 제어. 모노레포·멀티앱 구조에서 경로 충돌 방지에 유용 (같은 출처)

> 위 3개는 기존 프로필 "[2026-06-25] shadcn/ui CLI v4 `registry.json` 활용" 항목의 실무 세부 확장이며, 나머지 항목은 모두 기존 위키 노트와 중복.

## 출처

- [shadcn/ui 공식 문서](https://ui.shadcn.com) — registry validate·include·target (구체적 하위 URL 미확보)

## 위키화 후보

- `shadcn-registry-advanced-patterns` — `include`·`target`·`registry validate` 3종 고급 레지스트리 워크플로 정리 노트 (기존 registry.json 노트 확장)

## 프로필 반영 후보 (저위험)

- `shadcn registry validate` + `include`·`target` 속성 — 기존 "[2026-06-25] shadcn/ui CLI v4 `registry.json` 활용" 항목에 세부 기능 보강

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

_(없음 — 이번 학습은 기존 도구의 세부기능 파악이며 별도 자동화 필요 없음)_
