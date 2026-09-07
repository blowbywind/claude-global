---
date: 2026-09-03
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-09-03

## 오늘 배운 것

- **`contrast-color()` Baseline 2026 "Newly Available" 진입 확인**(2026-04, MDN 원문 직접 대조): 다만 MDN이 명시 경고 — "WCAG AA(4.5:1)로도 항상 읽기 쉬운 텍스트가 보장되지 않으며, 중간톤 배경(예 `#2277d3`)에서 검정 텍스트가 나와 가독성이 떨어질 수 있다." 공용 컴포넌트 가이드라인에 "밝은/어두운 배경에만 사용, 중간톤은 수동 검수" 원칙으로 반영 가능.
- **DTCG Design Tokens Format v2025.10 발행일·후원 재검증**(w3.org 원문 직접 대조, 2025-10-28 게시): 발행일은 기존 메모와 일치. 단 리서치 결과의 "40개+ 조직"은 근거가 약함 — 원문은 Adobe/Amazon/Google/Microsoft/Meta/Shopify/Figma/Salesforce 등 **25개 조직을 명시 + "and many others"**로 정확한 총수는 밝히지 않음. 수치는 "25개+ 명시, 정확 총수 미공개"로 정정해 기록할 것.
- **WCAG 3.0 "CR 목표 2027Q4·REC 2028년 이후" 주장은 폐기**: w3.org 2026-03-03 원문을 직접 대조한 결과 "March 2026 Working Draft 갱신" 사실만 확인되고, CR/REC 구체 분기·연도는 해당 페이지에 없음(리서치 산출물의 환각 가능성). 기존 위키 노트(2026-07-27, "2030년경은 Roselli 개인 블로그 단일 출처 추정치, 공식 일정 미확정")가 여전히 정확한 상태 — 갱신 불필요.
- **WCAG 2.2 비텍스트 대비(1.4.11)**: 버튼/인풋 테두리·포커스 링·아이콘 스트로크 등 UI 컴포넌트 대비 3:1 기준이 실무 체크리스트에서 누락되기 쉽다는 지적. 반응형 디자인 가이드 a11y 체크리스트에 "비활성/포커스 상태 테두리 대비"를 항목으로 명시할 가치 있음(단, 출처가 블로그 수준이라 WCAG 스펙 자체를 근거로 채택).
- **가변 폰트 GRAD 축 + 컨테이너 쿼리 유동 타이포**: hover 시 레이아웃 폭 변화 없이 굵기만 조정(GRAD), `clamp()` 타이포를 뷰포트 대신 컨테이너 기준으로 구현하는 패턴. 출처 신뢰도가 낮아(개인 블로그) "검토 참고" 수준으로만 반영.

## 출처
- [contrast-color() — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/contrast-color) — 직접 fetch 대조 완료
- [Design Tokens specification reaches first stable version — W3C Design Tokens CG](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) — 직접 fetch 대조 완료
- [For Review: WCAG 3 Working Draft – March 2026 — W3C WAI](https://www.w3.org/WAI/news/2026-03-03/wcag3) — 직접 fetch 대조(발행일만 확인, CR/REC 일정은 미기재)

## 위키화 후보
- `contrast.md` 보강: Baseline 진입월(2026-04) + MDN 중간톤 배경 경고 문구 추가(사람 검증 후 verified 전환 권장)

## 프로필 반영 후보 (저위험)
- 컴포넌트 대비 체크리스트에 "비활성/포커스 테두리 3:1(WCAG 2.2 1.4.11)" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 제안된 리서치·검증 권한 정합 이슈는 이미 다건 기록되어 중복 생략)
