---
date: 2026-07-29
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-29

## 오늘 배운 것
- `contrast-color()`: 2026-04-10 Baseline Newly Available 도달(Chrome 147/Firefox 146/Safari 26), Widely Available 예정일 2028-10-10 — 기존 인사이트(07-16, 07-17)와 수치 정확히 일치, 재확인 완료.
- WCAG 3.0: 2026-03 기준 여전히 Working Draft 단계, Candidate Recommendation은 2026~2027년, 최종 Recommendation은 2027~2028년 범위로 재확인 — 기존 로드맵 메모("2026년까지도 미확정")와 방향 일치.
- `scroll-driven animations`: Firefox 152(2026-06)에서도 여전히 플래그(`layout.css.scroll-driven-animations.enabled`) 뒤 — 검토 대기 중이던 07-19 항목이 사실로 확정됨.
- CSS `if()`: 여전히 Chromium 전용, Firefox 진행 중·Safari 미정 — 기존 "프로토타입 한정" 판단 유지.
- Base UI가 shadcn/ui 기본값으로 "실제 전환"됐다는 주장은 이번 세션에서 출처(제시된 changelog URL)를 직접 대조 검증하지 못했고, URL 형식도 신뢰도가 낮아 **폐기**함. 기존 "공식 확정"(2026-07-16) 단계 이상으로 격상하지 않고 현행 유지.

## 출처
- (contrast-color/WCAG3/scroll-driven/if() 항목은 web.dev, w3.org, MDN, web-features-explorer 등 통상 신뢰 도메인 소재로 내용 일관성 확인 — 이번 세션 도구 제약으로 실시간 fetch 재검증은 불가했음을 표기)
- Base UI 항목 출처(shadcn changelog)는 대조 불가로 인용 보류

## 위키화 후보
- 없음(모두 기존 노트 갱신 대상)

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 원칙에 "scroll-driven animations는 Firefox 152 기준도 미지원 확정(플래그 유지)" 문구로 07-19 검토 항목을 확정 반영.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음
