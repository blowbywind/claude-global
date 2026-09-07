---
date: 2026-08-27
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-27

## 오늘 배운 것
- **WCAG 3.0**: 2026-08 기준 여전히 Working Draft, CR 도달 시점 불확실 — 기존 위키 결론(`wcag-3-0-로드맵` 계열 다수 노트) 재확인, 신규 정보 아님.
- **CSS `if()`**: MDN 재검증(WebFetch 성공) 결과 "Not Baseline·일부 주요 브라우저 미지원"만 본문에 명시, "Chrome/Edge 137+" 같은 구체 버전은 본문에 근거 없음 → 버전 수치는 미검증으로 폐기, 기존 "폴백 필수" 결론만 유지.
- **`text-box-trim`(Firefox 154, 2026-08-18 활성화)**: developer.chrome.com WebFetch가 권한 거부로 이번 세션 검증 실패(반복되는 WebFetch 권한 이슈). 기존 08-26 초안(status: draft, "Baseline Newly Available" 서술만 있고 브라우저별 버전 미기재)에 대한 보강 후보이나, 구체 버전 수치는 미검증 상태로 보류.
- **`color-mix()`/상대색상 구문, DTCG Resolver 상태, `text-wrap: pretty`**: 이미 위키에 상세 기록된 중복 항목(각 4개+ 기존 노트 확인) — 신규 정보 없음, 반영 불필요.
- **`prefers-reduced-transparency`**: developer.chrome.com 1차 출처로 확인. Chrome 118+ 실험적 지원뿐이며 지문추적(fingerprinting) 우려로 타 브라우저 채택 불확실 — 위키 미기록 신규 항목(저위험 참고용).
- **가변폰트 GRAD(grade) 축 트렌드 주장**: 출처가 inkbotdesign.com(비1차 도메인, 마케팅 블로그) 단일 출처 — 기존 위키의 "리서치 환각 패턴 목록" 필터 기준(비1차 아그리게이터 배제)에 해당 → **폐기**.

## 출처
- [WCAG 3.0 Working Draft](https://www.w3.org/TR/wcag-3.0/)
- [MDN: CSS if()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
- [Chrome for Developers: prefers-reduced-transparency](https://developer.chrome.com/blog/css-prefers-reduced-transparency)

## 위키화 후보
- `prefers-reduced-transparency`(Chrome 118+ 실험적, 지문추적 우려로 미확정) — 신규 개념 노트 후보, "참고용·미채택 확산" 표기 필수.

## 프로필 반영 후보 (저위험)
- (없음 — 이번 배치는 대부분 기존 위키 중복이거나 미검증이라 신규 반영 항목 없음)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
- [agent] 리서치-검증-권한-정합기 — 기존 제안 재확인(07-16/07-22/07-29/07-30에 이어 08-27에도 developer.chrome.com WebFetch 권한 거부 재발, 5회째). 웹리서치봇·검증봇 간 WebFetch 권한 비일관성 정리가 여전히 미해결.
