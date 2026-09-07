---
date: 2026-07-23
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-23

## 오늘 배운 것
- **WCAG 3.0**: 2026-03-03 새 Working Draft 발행은 W3C 원문으로 직접 검증 완료. 다만 "requirements 174개 재편", "CR 2027년 4분기·Rec 2028년 이후" 등 구체 수치·일정은 원문에 없어 **폐기**(과잉 상세 확인). WCAG 2.2 AA 병행 유지 방침은 기존 인사이트 그대로 유효.
- **`contrast-color()`**: 2026년 4월 기준 Baseline **Newly Available** 확정을 web.dev 원문으로 검증. 단 "Chrome147/Firefox146/Safari26" 등 구체 버전번호는 원문에 없어 제외, Widely Available 예상일(2028-10-10)도 이번 소스로는 재확인 안 됨(기존 메모 유지, 추가검증 보류).
- **Interop 2026**: `contrast-color()`, scroll-driven animations(`animation-timeline`/`scroll-timeline`/`view-timeline`)가 공식 focus area(CSS 11개 중)로 채택된 사실을 igalia.com·web.dev 양쪽 원문으로 검증 완료 → scroll-driven animations 인사이트 "검토중" → **확정**으로 갱신 가능.
- **Base UI(shadcn 기본값 전환)**: 2026-07 shadcn/ui 공식 changelog 원문에서 "New projects now use Base UI by default. Radix is still fully supported." 직접 확인 — 기존 "확인됨→공식 확정" 인사이트의 1차 출처 확보.
- scroll-driven animations의 "Firefox 152 flag 뒤" 구체 버전 언급은 이번 검증 소스(igalia/web.dev)엔 없어 **미검증 상태로 보류**(폴백 필요성 문구 자체는 결론이 같아 유지).
- `color-mix()`/relative color 지원율(89.64%), DTCG resolver, `cqi`/`clamp` 97% 등 통계치는 이번 라운드에 재검증하지 않음(기존 확정 인사이트 유지, 신규 수치는 미채택).

## 출처
- [Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default) — 직접 검증
- [Baseline digest: April 2026](https://web.dev/blog/baseline-digest-apr-2026) — 직접 검증
- [WCAG 3 Working Draft – March 2026](https://www.w3.org/WAI/news/2026-03-03/wcag3) — 직접 검증(단 수치는 미기재 확인)
- [Interop 2026 focus areas](https://www.igalia.com/news/interop-2026.html) — 직접 검증
- [Interop 2026](https://web.dev/blog/interop-2026) — 직접 검증

## 위키화 후보
- Interop 2026 공식 focus area 20개(CSS 11+JS 7+webcompat) 목록 — 연 단위 브라우저 우선순위 트래킹용 신규 개념노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 원칙의 scroll-driven animations 메모를 "검토" → "확정"(Interop 2026 공식 채택 검증완료, Firefox 미지원이라 `motion-safe`+`@supports` 폴백 유지)으로 상태 갱신.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
- [agent] 출처-대조-검증기 — 이번 수동검증에서 WCAG3 관련 구체 수치(174 requirements, CR/Rec 일정)가 원문에 없는 과잉 상세로 실제 확인됨(원 리서치 9건 중 실효 폐기 사례 재현) → 반복 검증 자동화 가치 재확인, 채택 권장.
