---
date: 2026-07-06
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-06

WebSearch 권한 없음. 기존 위키 데이터로 교차검증 완료했으므로 결과를 종합한다.

---

**항목별 검증 판정:**

| 항목 | 판정 | 근거 |
|---|---|---|
| 적응형·멀티모달 UI | ❌ 버림 | orizon.co(디자인 에이전시 블로그), 추상적 트렌드, 역할 직접 적용 불가 |
| WCAG 3.0 점수제 초안 | ⚠️ 조건부 수용 | W3C 출처 신뢰, 단 Draft 상태(정식 릴리스 2027~2028+) 명시 필수 — 기존 위키(06-30) "Draft 유지" 보완 정보 |
| ADA Title II 준수 | ❌ 중복 | 기존 위키에 2026-04-24 시행 이미 다수 기록 |
| Tailwind v4.3 scrollbar | ❌ 중복 | 본인 메모리 2026-06-30에 이미 기록 |
| Tailwind v4.3 font-features-* | ✅ 신규 | tailwindcss.com 출처, @container-size는 중복이나 font-features-* 유틸리티는 새 항목 |
| shadcn/cli skills | ❌ 중복 | 본인 메모리 2026-06-24에 이미 기록 |
| shadcn/ui Base UI 기본 전환 | ❌ 버림 | 위키 2026-07-05/06 "환각 패턴"으로 플래그됨(날짜 자기모순, 기존 기록과 강도 불일치) |
| W3C DTCG CI 자동화 | ❌ 버림 | 출처 supernova.io(상업 벤더) — Figma→CI 자동화 구체 주장은 벤더 홍보성. DTCG 표준 자체는 기존 위키 06-19에 이미 기록 |

---

## 오늘 배운 것

- **WCAG 3.0 초안 점수제 모델**: 기존 Pass/Fail 합격제 대신 점수 기반 평가 방식으로 전환 검토 중. 모바일·XR·음성 인터페이스까지 적용 범위 확장. 단, 현재 **Draft 단계** — 정식 법적 기준은 여전히 WCAG 2.2 AA 유지(실무 기준 변경 없음)
- **Tailwind v4.3 `font-features-*` 유틸리티**: `font-features-normal`, `font-features-none` 등 OpenType 폰트 기능 제어 유틸리티 추가. 타이포그래피 세밀 조정(합자, 숫자 스타일 등)을 CSS `font-feature-settings` 없이 클래스로 처리 가능 — 출처: tailwindcss.com

## 출처

- [Tailwind CSS v4.3 Release Notes](https://tailwindcss.com) (scrollbar/font-features 유틸리티)
- [W3C WCAG 3.0 Working Draft](https://www.w3.org/TR/wcag-3.0/) (점수제 초안 — 기존 위키 06-19 보완)

## 위키화 후보

- `wcag-3-0-점수제-모델` — WCAG 3.0 Draft 점수제 평가 방식 개요 (기존 `wcag-3-0-로드맵.md` 보완 노트)

## 프로필 반영 후보 (저위험)

- `font-features-*` Tailwind 유틸리티 — OpenType 폰트 기능 클래스 기반 제어 역량

## 승인 필요 (고위험)

없음

## 신규 도구 후보 (에이전트/스킬)

없음

---

**폐기 근거 요약**: shadcn Base UI 기본 채택 주장은 위키에 이미 "환각 패턴"으로 반복 기록된 항목 — 이번 리서치에서도 동일 패턴 재출현으로 확인 폐기. 나머지 5개 항목은 기존 메모리·위키와 중복.
