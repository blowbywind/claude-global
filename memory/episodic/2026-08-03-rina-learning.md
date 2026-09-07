---
date: 2026-08-03
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-03

## 검증 결과 요약

리서치 항목 대부분을 1차 출처(caniuse 실데이터, W3C 공식 페이지, tailwindcss.com/ui.shadcn.com 공식 블로그 본문)로 직접 대조했습니다. `frontendhorizon.com`은 실제로는 프론트엔드 전문 블로그가 아니라 댈러스 소재 마케팅 대행사 사이트로 확인되어(SEO 대행업체, schema.org ProfessionalService) 신뢰도가 낮아 해당 항목은 구체 버전 수치를 제외하고 완화 반영했습니다. DTCG 채택률 통계(56%→84%)는 원문에서 확인 안 돼 폐기했습니다. 나머지는 위키 기존 노트(`tailwind-v4-3-scrollbar.md`, `base-ui-shadcn-2026.md`, `dtcg-v2025-10-...md`, `wcag-3-0-apca-미확정...md` 등)와 중복되어 최신 수치만 갱신 대상입니다.

## 오늘 배운 것
- `contrast-color()`가 2026-04-10 기준 Baseline **Newly Available**(low) 도달 확정 — Chrome 147/Firefox 146/Safari 26 실지원 데이터로 caniuse에서 직접 확인(공용 컴포넌트 가이드라인 실무 적용 근거 보강)
- Tailwind v4.3(scrollbar 유틸리티, `@container-size`, `zoom-*`, `@variant` 값 확장)이 공식 블로그 본문으로 확인됨 — 반응형 레이아웃·컴포넌트 가이드라인에 최신 유틸리티로 반영 가능
- shadcn/ui가 Base UI를 기본값으로 전환한 공식 changelog 확인(Base UI 1.6.0 안정·주간 다운로드 600만+, Radix는 폐기 아닌 병행) — 공용 컴포넌트 스택 메모 최신화
- WCAG 3.0은 2026-03-03 새 Working Draft 발행 확정(W3C 공식). APCA는 여전히 별도 미확정(Adrian Roselli 글 실존 확인) → 기존 "WCAG 2.2 AA 병행 유지" 원칙 그대로 유효
- CSS `if()`는 caniuse 실데이터 기준 Chrome/Edge/Opera(Chromium 계열)만 지원, Firefox·Safari 전 버전 미지원(baseline_status: limited) — "프로토타입 한정, 프로덕션 미적용" 문구 그대로 유지 타당
- scroll-driven animations의 Firefox 지원 상태는 출처 신뢰도 낮아 구체 버전 미확정 처리, "모션 폴백 필요" 원칙만 완화된 확신도로 유지

## 출처
- [contrast-color() – Can I use](https://caniuse.com/wf-contrast-color)
- [Tailwind CSS v4.3 공식 블로그](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI 기본화 changelog](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [For Review: WCAG 3 Working Draft – March 2026 (W3C WAI)](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [WCAG3 Contrast as of April 2026 – Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [CSS if() function – Can I use](https://caniuse.com/css-if)
- [CSS conditionals with the new if() function – Chrome for Developers](https://developer.chrome.com/blog/if-article)

## 위키화 후보
- (없음 — 신규 확인 사실 대부분 기존 노트(`tailwind-v4-3-scrollbar.md`, `base-ui-shadcn-2026.md`, `wcag-3-0-apca-미확정...md`)와 중복, 갱신으로 충분)

## 프로필 반영 후보 (저위험)
- `contrast-color()` Baseline Newly Available 도달일(2026-04-10)·지원 브라우저 버전(Chrome147/FF146/Safari26)을 기존 가이드라인 메모에 정확한 수치로 갱신
- Tailwind v4.3 스크롤바/`@container-size` 유틸리티를 반응형 레이아웃 원칙에 참고 메모로 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
