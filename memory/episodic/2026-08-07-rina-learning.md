---
date: 2026-08-07
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-08-07

## 검증 결과

리서치 8건 중 6건은 기존 위키 인사이트를 사실관계만 재확인(변경 없음), 1건은 위키에 **이미 별도 노트로 존재하는 중복**(Tailwind v4.3 스크롤바 유틸 — `tailwind-v4-3-스크롤바-유틸리티.md`, 2026-08-06 작성분과 동일)이라 폐기, 1건(scroll-driven animations Firefox 상태)은 출처가 Mozilla Connect 커뮤니티 아이디어 게시판이라 권위도가 낮아 참고용 등급으로만 반영합니다.

## 오늘 배운 것
- WCAG 3.0: 2026-03 Working Draft(174 outcomes, Bronze/Silver/Gold) 유지, CR 2027 Q4 예상·최종 Recommendation 2028~2029년 이전 불가 — 기존 로드맵 메모 사실관계 재확인(변경 불필요).
- `contrast-color()`: 2026-04-10 Baseline "Newly Available" 도달(Chrome 147·Firefox 146·Safari 26), "Widely Available"은 2028-10-10 예정 — 기존 인사이트와 일치, 세부 버전만 확정.
- CSS `if()`: 2026년 중반에도 Chromium 계열(Chrome 137+/Edge/Opera) 전용, Firefox 개발 중·Safari 로드맵 미정 — "프로토타입 한정, 프로덕션 미적용" 기존 참고치 유지 확인.
- DTCG는 **Format 모듈**(2025.10 안정판 확정)과 **Resolver 모듈**(2025.10 여전히 draft, 스펙 자체가 "구현 금지" 명시)이 별개 상태임 — 두 모듈을 혼용하지 말고 구분 표기 필요.
- APCA는 2023-07 WCAG3 정규초안에서 exploratory 제외된 이후 2026-04 기준도 대비 알고리즘 미확정 지속 — 접근성 전문가 블로그(adrianroselli.com)로 재확인, 기존 메모 유지.
- (참고, 낮은 신뢰도) scroll-driven animations: Firefox는 2026-06 시점도 플래그 뒤 상태(Nightly만 기본 on) — 단 출처가 Mozilla 커뮤니티 제안글이라 공식 지원표(caniuse/MDN) 대조 전까지는 참고치로만 취급.

**폐기**: Tailwind v4.3 스크롤바 유틸/`@container-size`/팔레트는 "신규 발견"으로 보고됐으나 위키에 이미 동일 개념 노트(`tailwind-v4-3-스크롤바-유틸리티.md`, 어제 rina 작성)가 존재 — 중복이라 반영 후보에서 제외.

## 출처
- [WCAG 3.0 News — W3C WAI](https://www.w3.org/WAI/news/2026-03-03/wcag3)
- [contrast-color() — Web Features Explorer](https://web-platform-dx.github.io/web-features-explorer/features/contrast-color/)
- [CSS if() — Chrome Developers](https://developer.chrome.com/blog/if-article)
- [DTCG Resolver Draft 2025.10](https://www.designtokens.org/tr/drafts/resolver/)
- [DTCG Format Module 첫 안정판 발표 — W3C Community](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [WCAG3 Contrast as of April 2026 — Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)

## 위키화 후보
(없음 — 해당 사실관계는 기존 노트로 이미 커버됨)

## 프로필 반영 후보 (저위험)
- 토큰 가이드라인 설명 시 "DTCG v2025.10 안정판"을 Format 모듈에 한정하고, Resolver 모듈은 "draft·구현 금지" 상태로 별도 표기.
- scroll-driven animations 관련 기존 "검토 중" 메모는 이번 재확인으로 "Firefox 미지원 지속 → `@supports` 폴백 필수" 문구로 확정 전환(단, 저신뢰 출처이므로 확정 표현은 보류하고 "참고" 수준 유지 권장).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음)
