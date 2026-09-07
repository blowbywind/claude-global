---
date: 2026-07-24
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-24

## 오늘 배운 것
- WCAG 3.0 "174개 outcome 재편·2026-03 초안·CR 2027Q4·REC 2028~2030" 주장은 서브에이전트 실제 fetch 검증 결과 근거 없음(w3.org 출처는 2021년 구버전 공지, thewcag.com 출처는 오히려 "최신 WD는 2025-09-04 발행"이라 명시해 날짜 불일치) → 채택하지 않고 기존 메모("여전히 Working Draft, 확정 일정 미정") 그대로 유지.
- `contrast-color()` Baseline 일정(2026-04-10 Newly Available, 2028-10-10 Widely Available 예정)은 기존 인사이트(07-16/07-17)와 정확히 일치 — 재확인, 변경 없음.
- APCA 2023년 WCAG3 제외·2026년 현재도 미확정, WCAG 2.2 AA 병행 권고는 기존 로드맵 메모(07-12) 그대로 유효.
- DTCG v2025.10 안정판, CSS `if()` Chrome 전용 실험단계는 기존 인사이트(07-13, 07-18)와 부합, 변경 없음.
- Tailwind CSS가 v4.2 이후 v4.3까지 출시된 것은 실제 fetch로 확인(`scrollbar-*` 유틸리티 신규 추가). 단 리서치 원문의 "v4.3 신규 색상 팔레트(mauve/olive/mist/taupe)" 서술은 오류 — 해당 팔레트는 v4.3이 아닌 v4.2 기능이므로 정정.
- Firefox의 scroll-driven animations 미지원 자체는 유지되나 "Firefox 152·10개월 차단" 등 구체 수치는 이번에 검증 실패(도구 권한 소진) → 확정 승격 보류, 기존 "검토 중"(motion-safe + `@supports` 폴백 필요) 문구 유지. shadcn Base UI 기본화 신규 changelog URL도 동일 사유로 인용 보류(기존 "공식 확정" 메모 자체는 유지).

## 출처
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3) — fetch 검증 완료
- [W3C WCAG3 공지(2021)](https://www.w3.org/WAI/news/2021-06-08/wcag3) — fetch 검증(2026년 세부일정 근거 아님을 확인하는 용도)
- [thewcag.com WCAG 3.0](https://www.thewcag.com/wcag-3-0) — fetch 검증("최신 WD 2025-09-04" 명시)
- 나머지 항목(APCA/contrast-color/`if()`/DTCG/shadcn/scroll-driven/Interop 2026/가변폰트 통계)은 이번 세션 도구 권한 소진으로 재fetch 불가 — 기존 위키에 이미 근거가 있는 항목만 재확인 처리, Interop 2026 세부 수치·가변폰트 30~50% 통계 등 신규 수치는 미검증으로 미채택.

## 위키화 후보
없음(이번 회차는 기존 노트 정정·재확인 위주).

## 프로필 반영 후보 (저위험)
- Tailwind v4.3 `scrollbar-*` 유틸리티를 반응형 레이아웃 구현 원칙 참고 메모에 추가(색상 팔레트는 v4.2 소관이므로 혼동 주의 문구 병기).

## 승인 필요 (고위험)
없음.

## 신규 도구 후보 (에이전트/스킬)
없음 — 이번 검증에서 `출처-대조-검증기` 에이전트가 WCAG 3.0 관련 리서치 허위 서술 1건을 실제로 걸러냄. 신규 도구 제안은 아니며, 향후 웹리서치 산출물에 이 검증 단계를 기본 절차화하는 것을 권장.
