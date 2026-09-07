---
date: 2026-09-04
bot: rina
type: web-research
tags: [self-learning, color & typography systems, accessibility (WCAG) for web & static design, framework-agnostic CSS design patterns]
---

# 리나 자가학습 — 2026-09-04

## 오늘 배운 것
- **CSS `:has()` 선택자**: MDN 원문 직접 대조 결과 Baseline "Widely available" 배지 확인. 단, 전 브라우저 지원 시작은 **2023년 12월**(리서치 원본의 "2024년 도달"은 부정확 — 정정 필요). "부모 선택자"로 JS 상태 스타일링을 대체하는 프로덕션 패턴은 확인됨, `@supports selector(:has(img))` 폴백 권장은 합리적 관행.
- **Figma 접근성 주석(annotation) 키트**: 위키 신규 항목. `unicornclub.dev` 원문 제목("Your Annotations Aren't Reaching Developers")으로 "플러그인 오버레이가 Dev Mode에서 안 보임 → Dev Mode 코멘트 직접 기입이 대안"이라는 핵심 주장은 교차검증됨. 단 Figma 커뮤니티 파일(a11y-annotation-kit) 자체는 SPA 렌더링으로 원문 fetch 실패 — 존재 확인만 가능, 상세 스펙은 미검증.
- **WCAG 3.0 / DTCG / color-mix / @layer / OKLCH 항목**: 리서치가 밝힌 대로 기존 위키(`wcag-3-0-*`, `dtcg*`, `color.md`, `css-cascade-layers-계층-설계-패턴.md`)에 이미 상세 기록됨 → 신규 인사이트 아님, 최신치 재확인 수준으로만 참고.

## 출처
- [:has() - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) — Baseline Widely available, "available across browsers since December 2023" 직접 확인
- [Accessibility Annotations in Figma: Your Annotations Aren't Reaching Developers](https://unicornclub.dev/articles/2026-03-25-accessibility-annotations-figma-handoff/) — 제목·구조화 데이터로 핵심 주장 교차검증
- (Figma 커뮤니티 파일 953682768192596304는 fetch 실패로 미검증 — 링크만 참고용)

## 위키화 후보
- `:has()` 선택자 프로덕션 패턴 — 부모 선택자 대체, `@supports` 폴백 관행 (신규 개념 노트)
- Figma 접근성 주석 키트 한계와 Dev Mode 코멘트 대안 (신규, 단 원본 검증 제한 명시 필요)

## 프로필 반영 후보 (저위험)
- 컴포넌트 상태 스타일링 시 `:has()` + `@supports selector(:has(img))` 폴백 패턴을 반응형 레이아웃 가이드라인에 참고 메모로 추가
- 디자인→개발 핸드오프 시 "Figma 주석 플러그인은 Dev Mode 미노출" 한계를 인지하고 Dev Mode 코멘트 병행 권장 메모 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 출처 대조 검증 자동화 후보는 기존 로그에 이미 반복 등록되어 중복 생략)
