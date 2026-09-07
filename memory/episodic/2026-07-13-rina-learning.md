---
date: 2026-07-13
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-07-13

## 검증 메모
- WCAG3 로드맵: `wcag-3-0-로드맵-메모를-apca-2023년-제외-...md`(2026-07-13, 기승인)는 "CR 2027년 4분기·REC 2028년 이후"로 기록되어 있으나, 금일 리서치는 "REC 2029년 말 이후·대비 알고리즘 2030년까지 미확정"으로 더 늦은 시점을 제시합니다. WebFetch/WebSearch 권한 미승인으로 원문 재확인이 불가해 이 구체 연도 차이는 **미확정으로 보류**하고, "APCA 2023년 제외·WCAG 2.2 AA 병행"이라는 기존에 이미 다중 노트로 교차확인된 부분만 확정 사실로 채택했습니다.
- `dtcg.md`는 과거 세션 파싱 오류로 본문이 권한 요청 메시지 그대로 저장되어 사실상 빈 노트입니다. DTCG 첫 안정판(v2025.10, 2025-10-28) 소식은 W3C 커뮤니티그룹 공식 발표 기반으로 신뢰도 높음 — 재작성 대상으로 채택.
- 유동 타이포그래피(clamp/rem), 컨테이너 쿼리 단위(cqi 등, MDN 출처)는 표준 문서 기반으로 채택. 가변 폰트 브랜드 시스템 트렌드는 단일 저신뢰 블로그(fontalternatives.com) 출처뿐이라 **제외**했습니다.

## 오늘 배운 것
- DTCG(Design Tokens Community Group) 포맷 스펙이 2025-10-28 첫 안정판(v2025.10)으로 확정, Adobe·Google·Meta·Figma 등 24개+ 조직 지원, Style Dictionary·Tokens Studio 채택 — 기존 `dtcg.md` 노트가 빈 상태였으므로 갱신 대상입니다.
- 유동 타이포그래피는 `font-size: clamp(min, vw+rem, max)`가 표준 패턴이며, 사용자 브라우저 폰트 설정 존중을 위해 반드시 `rem` 기반 값을 사용해야 접근성이 보장됩니다.
- 컨테이너 쿼리 단위(`cqw`/`cqh`/`cqi`)로 뷰포트가 아닌 부모 컨테이너 크기에 비례하는 유동 타이포그래피 구현 가능(`clamp(1rem, 4cqi, 2rem)`), 컨테이너 스타일 쿼리도 2026년 Interop으로 Firefox까지 크로스브라우저 지원 완성.
- 프레임워크 무관 공용 컴포넌트 구축에는 Web Components(Lit/Stencil)가 성숙 단계로, Material Design·Carbon Design System 등이 채택해 React/정적 사이트에 동일 컴포넌트 재사용 — Tailwind 공용 컴포넌트 가이드라인 확장 시 참고 가능.
- WCAG 3.0은 APCA를 2023년 초안 단계에서 제외한 이후 2026년 현재까지도 정규 표준 미포함 상태이며, WCAG 2.2 AA 병행 유지가 현실적 기준입니다(단, 정식 권고안 도달 시점은 기존 노트 2028년 이후 vs 금일 리서치 2029년 말 이후로 출처 간 불일치 — 미확정 보류).

## 출처
- [W3C WAI WCAG3 2026-03 업데이트](https://www.w3.org/WAI/news/2026-03-03/wcag3/)
- [WCAG3 Contrast as of April 2026 — Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/drafts/format/)
- [DTCG 첫 안정판 발표 — W3C](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [MDN Container size and style queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Framework-agnostic design systems — Piccalilli](https://piccalil.li/blog/framework-agnostic-design-systems-part-1/)

## 위키화 후보
- `dtcg.md` 재작성 — 파싱 오류로 빈 노트 상태, v2025.10 안정판 정보로 신규 작성 필요
- "clamp()+컨테이너쿼리 단위 기반 유동 타이포그래피" 개념 노트 신규(기존 `responsive-design-guide.md`에 없는 공백 영역)

## 프로필 반영 후보 (저위험)
- DTCG v2025.10 안정판 용어를 토큰 가이드라인 설명에 반영
- `clamp()`+`cqi` 기반 유동 타이포그래피 패턴을 반응형 레이아웃 구현 원칙에 반영

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
