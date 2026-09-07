---
date: 2026-07-15
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-15

이전 검증 요청(Base UI/shadcn, Anchor Positioning)의 실제 결과가 도착했습니다. 원 리서치 내용 일부가 부정확했던 것으로 확인되어 최종 노트를 수정합니다.

**검증 결과 반영**
- Base UI/shadcn 건: **확인됨** — Base UI v1.0.0(2025-12-11 릴리스), shadcn/ui 공식 changelog "2026년 7월 — Base UI as the Default" 명시. 단일출처 우려 해소.
- Anchor Positioning 건: **부분 오류 발견** — Safari 지원 시점이 원 리서치의 "18.2+"가 아니라 실제로는 **Safari 26**(핵심 기능·`@position-try` 동시 지원, 단계적 격차 없음)으로 정정 필요.

---

## 오늘 배운 것
- `text-wrap: balance`(헤딩)/`text-wrap: pretty`(본문)는 Chrome/Firefox/Safari 모두 안전한 progressive enhancement(단, `pretty`는 Firefox 미지원 전제 폴백 필요) — 유동 타이포그래피 코드에 바로 적용.
- `light-dark()` + `color-scheme: light dark` 조합으로 색상 토큰을 라이트/다크 한 번에 정의(색상 값 전용) — DTCG v2025.10 토큰 구조와 결합해 다크모드 전략에 반영.
- CSS Anchor Positioning: Chrome 125+/Firefox 147+ 지원 확인, **Safari는 26+에서 핵심 기능과 `@position-try`가 동시 지원**(원 리서치의 "18.2+ 부분지원" 주장은 오류로 정정) — 팝오버/툴팁 CSS 네이티브 구현 시 Safari 26 미만 폴백 필수로 판단.
- Base UI(MUI 주도 headless UI)가 2025-12-11 v1.0 정식 출시, **shadcn/ui가 2026년 7월부터 신규 프로젝트 기본 프리미티브로 채택**(공식 changelog로 확인) — 공용 컴포넌트 스택 논의 시 Radix 대안으로 참고할 근거 확보.
- WCAG 3.0/APCA 로드맵은 기존 위키 메모와 동일 상태로 재확인 — 갱신 불필요.

## 출처
- [text-wrap: balance vs pretty](https://blog.logrocket.com/css-text-wrap-balance-vs-text-wrap-pretty/)
- [light-dark() - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)
- [caniuse css-anchor-positioning (raw data)](https://raw.githubusercontent.com/Fyrd/caniuse/main/features-json/css-anchor-positioning.json)
- [MDN BCD: anchor-name](https://raw.githubusercontent.com/mdn/browser-compat-data/main/css/properties/anchor-name.json)
- [MDN BCD: @position-try](https://raw.githubusercontent.com/mdn/browser-compat-data/main/css/at-rules/position-try.json)
- [Base UI CHANGELOG (v1.0.0)](https://raw.githubusercontent.com/mui/base-ui/master/CHANGELOG.md)
- [shadcn/ui 공식 changelog](https://ui.shadcn.com/docs/changelog)
- [WCAG 3.0 Working Draft news](https://www.w3.org/WAI/news/2026-03-03/wcag3/)

## 위키화 후보
- `text-wrap: balance/pretty` 프로그레시브 인핸스먼트 패턴 — 신규 개념 노트
- CSS Anchor Positioning(브라우저별 지원 현황 포함, Safari 26+ 정정본) — 신규 개념 노트

## 프로필 반영 후보 (저위험)
- `light-dark()` 다크모드 토큰 전략을 공용 컴포넌트 가이드라인에 반영
- Base UI(shadcn 2026-07 기본값 전환) 동향을 공용 컴포넌트 스택 참고 메모에 반영(확인됨, 즉시 도입 결정 아님)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
