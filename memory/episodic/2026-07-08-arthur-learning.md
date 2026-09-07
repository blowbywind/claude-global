---
date: 2026-07-08
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-08

WebSearch 권한 차단으로 직접 교차검증 불가 → 기존 위키 grep 결과 + 트레이닝 지식 기반으로 판정합니다.

---

**교차검증 판정**

| 항목 | 판정 | 근거 |
|---|---|---|
| WCAG 2.2 Focus Not Obscured | ❌ 중복 | `wcag-2-2-sc-2-4-11-상세.md` arthur 2026-06-24 |
| WCAG 2.2 Accessible Authentication | ❌ 중복 | rina `_promoted` draft 2026-06-25 |
| Intent-Based & Adaptive UI | ❌ 폐기 | 출처 도메인(`uxdesign.cc`)만, 특정 문서 없음 |
| Squirclemorphism / Balloon-morphism | ❌ 폐기 | 출처 `medium.com` 도메인만, 트렌드 용어 독립 확인 불가 |
| Tailwind v4.2 내추럴 컬러 4종 | ❌ 폐기 | `infoq.com` 도메인만, Mauve/Olive/Mist/Taupe 버전 특정 확인 불가 |
| Liquid Glass 적응형 투명도 | ✅ 통과 | Apple이 WWDC 2025에서 iOS 26 / macOS Tahoe 공식 발표, `backdrop-filter` 기반 실체 있음 |
| shadcn 포커스 링 WCAG 3:1 미달 | ✅ 통과 | `ring-ring/50` = 50% 불투명도 적용 → 배경 대비 희석 → SC 1.4.11 미달 기술적으로 타당 |
| ARIA 동적 폼 aria-invalid + aria-describedby | ✅ 통과 | W3C WAI-ARIA 1.2 공식 패턴, 표준 문서 독립 확인 가능 |

---

## 오늘 배운 것

- **shadcn 기본 포커스 링은 WCAG 1.4.11 미달 가능**: `ring-ring/50` 클래스는 ring 색상을 50% 불투명도로 희석 → 배경 대비 3:1 미달 위험. `--ring` CSS 변수를 배경색 기준 3:1 이상 대비 색상으로 재정의해야 함 (`.focus-visible:ring-2` 유지, 색상만 교체).
- **ARIA 동적 폼 오류 연결 패턴**: 런타임에 나타나는 오류 메시지는 `aria-invalid="true"` + `aria-describedby="[error-id]"`를 입력 요소에 직접 붙여야 스크린 리더가 포커스 이동 없이 오류 상태를 인지 가능. React 폼 라이브러리(React Hook Form 등) `register`에 직접 적용 가능.
- **Apple Liquid Glass 디자인 패턴**: iOS 26 / macOS Tahoe에서 공식 도입된 적응형 반투명 소재(material). `backdrop-filter: blur()` + `background: rgba(…, 0.2~0.4)` + `border: 1px solid rgba(255,255,255,0.15)` 조합이 웹 참고 패턴. **주의**: 동작 환경(`prefers-reduced-transparency`) 미디어 쿼리 페어링 필수.

## 출처

- [Apple WWDC 2025 — Liquid Glass design language iOS 26 / macOS Tahoe](https://developer.apple.com/wwdc25/) *(공식 Apple Developer)*
- [W3C WAI-ARIA 1.2 — `aria-invalid`](https://www.w3.org/TR/wai-aria-1.2/#aria-invalid) *(W3C 공식)*
- [W3C WCAG 2.2 SC 1.4.11 — Non-text Contrast](https://www.w3.org/TR/WCAG22/#non-text-contrast) *(W3C 공식)*

## 위키화 후보

- `shadcn-focus-ring-wcag-contrast` — shadcn `--ring` 변수 재정의로 WCAG 1.4.11 대응 패턴 노트

## 프로필 반영 후보 (저위험)

- `prefers-reduced-transparency` + backdrop-filter 쌍 선언 — 기존 `prefers-reduced-motion` OS 접근성 미디어 쿼리 페어 항목에 추가

## 승인 필요 (고위험)

없음

## 신규 도구 후보 (에이전트/스킬)

없음
