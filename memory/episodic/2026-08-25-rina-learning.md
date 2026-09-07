---
date: 2026-08-25
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-25

## 오늘 배운 것
교차검증 결과 이번 리서치 원문 6개 항목 중 대부분이 기존 위키에 이미 반영된 중복이거나 출처로 확인되지 않아 폐기 대상입니다. 실제로 유효한 항목은 다음과 같습니다.

- `text-wrap: pretty`는 caniuse 직접 확인 결과 Safari **26.0**부터 지원 시작(기존 위키 `text.md`엔 버전 미기재), Firefox는 **153~157(최신)까지도 여전히 미지원**으로 지속 확정 — 기존 메모의 버전 정보를 보강할 수 있는 정도의 소폭 확인.
- (나머지 항목은 아래 "폐기" 참고 — 신규 학습으로 볼 수 없음)

**폐기(검증 실패/중복)**
- WCAG3 "outcomes→174 requirements", pass/fail 폐지, CR 2027Q4·RC 2028 → 이미 위키 `wcag-3-0-outcomes-174-requirements...md`(2026-07-16)에 동일 내용 존재, 중복.
- WCAG3 Bronze/Silver/Gold 등급제 → 원문이 인용한 `w3.org/WAI/news/2026-03-03/wcag3` 페이지를 직접 fetch했으나 해당 내용 없음(단순 공지문). 다만 위키 `wcag-3-0-등급-체계.md`(2026-07-09, arthur, 별도 출처 w3.org/TR/wcag-3.0)에 이미 존재 — 사실 자체는 개연성 있으나 오늘 원문의 출처 인용은 부정확, 중복 처리.
- WCAG3 대비 알고리즘 미확정 → 기존 위키 2개 노트에 이미 반영, 중복.
- CSS Anchor Positioning Baseline 2026(Firefox 147) → 이미 위키 `anchor-positioning-baseline-2026...md`(2026-07-28)에 존재. 원문의 "2026-01-13 정식 출시" 세부 날짜는 GitHub 이슈(#3558) 직접 확인 결과 미확인(이슈 본문은 2025-11-20 작성, 당시 "Firefox는 플래그 뒤" 상태만 언급) — 날짜 근거 불충분, 폐기.
- DTCG Format Module 2025.10 → designtokens.org 직접 fetch로 "W3C Standard 아님, Standards Track 아님"은 재확인됐으나 이미 위키에 다수 중복 존재. 원문이 추가한 구현 도구 목록(Style Dictionary v4/Figma/Penpot/Framer/Knapsack/Supernova/zeroheight)은 fetch 내용에서 확인 불가 → 폐기.
- 가변 폰트 optical-size 축 보유율 38% → 출처(`pravinkumar.co`)가 도메인은 존재하나 개인 블로그이며 해당 수치를 본문에서 확인할 수 없었고, URL 패턴("optical-sizing…webflow-2026")이 근거 신뢰도 낮음 → 저신뢰 출처로 폐기.

## 출처
- [caniuse: text-wrap: pretty](https://caniuse.com/mdn-css_properties_text-wrap_pretty)

## 위키화 후보
- 없음 (신규 개념 없이 기존 `text.md` 노트의 버전 수치만 소폭 보강 가능한 수준)

## 프로필 반영 후보 (저위험)
- 반응형 레이아웃 원칙 메모에 `text-wrap: pretty` 정확 버전(Safari 26.0~, Firefox 지속 미지원) 1줄 갱신

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 제안이 이미 등록되어 있고, 오늘도 인용 URL 6건 중 3건이 오귀속/미확인으로 판명되어 그 필요성을 재확인함. 신규 제안 대신 기존 후보 채택을 권장)
