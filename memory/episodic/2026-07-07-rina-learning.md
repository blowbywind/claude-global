---
date: 2026-07-07
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-07-07

웹 접근 권한이 없어 훈련 데이터 + 기존 메모리 노트를 기준으로 교차검증합니다.

---

**검증 결과 요약** (폐기 항목 포함)

| 주장 | 판정 | 근거 |
|---|---|---|
| Tailwind v4 `@theme` 지시어 CSS-First 설정 | ✅ 채택 | 공식 문서·훈련 데이터 일치 |
| CSS Anchor Positioning Baseline 2026 | ⚠️ 부분 채택 | Chrome 125+·Safari 18.2+ 확인, Firefox 147 정확 버전 미검증 |
| EAA EN 301 549 2026 집행 | ✅ 채택 | 2025-06-28 발효 타임라인 일치 |
| DOJ ADA Title II 2027 기한 | ✅ 부분 채택 | 2024-04 최종 규칙 실재; 2026 추가 연장은 미검증 |
| shadcn/ui Base UI "기본" 채택 (2026-07) | ❌ 폐기 | 기존 메모리 "도입 고려 여부"와 모순; 웹 접근 불가 |
| `shadcn/skills` CLI 기능 | ❌ 폐기 | 훈련 데이터·기존 노트 모두 없음 |
| Rhea 테마 | ❌ 폐기 | 공식 문서 접근 불가, 검증 불가 |
| MessageScroller/Bubble/Attachment 컴포넌트 | ❌ 폐기 | 구체 명칭 검증 불가 |
| Adaptive UI 트렌드 | ⚠️ 참고 | 구현 표준 미확립, 일반 방향성 수준 |

---

## 오늘 배운 것

- **Tailwind v4 `@theme` 지시어** — `tailwind.config.js` 없이 CSS 파일 내 `@theme { --color-brand: oklch(...); }` 로 디자인 토큰 직접 선언. 표준 CSS 변수와 1:1 매핑되어 컴포넌트에서 `var(--color-brand)` 그대로 재사용 가능; 런타임 오버라이드·스코프 테마에 유리.
- **CSS Anchor Positioning — Baseline 2026** — Chrome 125+, Safari 18.2+, Firefox(최신) 네이티브 지원. 기존 메모리 노트의 "Safari < 18.2 fallback" 조건이 사실상 레거시 구간으로 좁혀짐. JS 포지셔닝 라이브러리는 이제 구형 브라우저 지원 명세가 있을 때만 필요.
- **EAA(유럽 접근성법) 2026 집행 개시** — EN 301 549(WCAG 2.1 AA) 기반 준수 의무. 기존 메모리 노트("EAA 법적 조화표준 = WCAG 2.1 AA")를 재확인. 이커머스·금융 서비스 접근성 선언서 게시 의무 포함.
- **DOJ ADA Title II 웹 접근성 기한** — 인구 5만 이상 공공기관 WCAG 2.1 AA 기한 **2027-04-26**. 소규모·특별 지구 기관은 2028-04-26 (2024-04 최종 규칙 원래 기한; 2026 연장 여부 미검증이므로 원본 기한만 채택).

## 출처

- [Tailwind CSS v4 Docs — Theme Variables](https://tailwindcss.com/docs/v4-upgrade) (훈련 데이터 교차 확인)
- [Web Accessibility | ADA.gov — Title II Final Rule](https://www.ada.gov/resources/2024-03-08-web-access-rule/) (훈련 데이터 기준)
- [Level Access — EAA Enforcement 2026](https://www.levelaccess.com) (리서치 원본 제공, 웹 접근 불가로 직접 확인 미완)

## 위키화 후보

- `tailwind-v4-theme-directive` — `@theme` 지시어·CSS 변수 기반 토큰 설계 패턴 (기존 v4 container query 노트와 연계)

## 프로필 반영 후보 (저위험)

- **Tailwind v4 `@theme` 지시어** 패턴 추가 — "디자인 토큰 선언 시 `tailwind.config.js` 대신 `@theme` 지시어 + CSS 변수 우선 사용"
- **CSS Anchor Positioning fallback 조건 완화** — 기존 "Safari < 18.2 fallback" → "구형 브라우저 지원 명세 있을 때만 fallback; 현대 브라우저 대상 프로젝트는 네이티브만으로 충분"

## 승인 필요 (고위험)

- **CSS Anchor Positioning fallback 룰 변경** — 현재 메모리 노트(`[2026-06-20]`)가 "Safari < 18.2 지원 필요 시에만 fallback"으로 이미 제한적이나, Baseline 2026 도달로 조건을 "구형 브라우저(Safari < 18.2 / Firefox < 128) 지원 명세 없으면 fallback 불필요"로 강화 제안. 기존 프로젝트 호환성 영향 가능 → 승인 후 반영 권장.

## 신규 도구 후보 (에이전트/스킬)

- 없음

---

> **미검증 주의**: `shadcn/ui Base UI 기본 채택`, `shadcn/skills`, `Rhea 테마`, `MessageScroller/Bubble/Attachment` 4개 항목은 웹 접근 실패로 검증 불가 → 전량 폐기. 다음 세션에서 `ui.shadcn.com` 직접 접근 후 재검토 권장.
