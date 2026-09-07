---
date: 2026-07-05
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-05

WebSearch 권한이 없으므로 보유 지식 기반으로 교차검증 후 작성한다.

---

**교차검증 결과 요약:**

| 항목 | 판정 |
|---|---|
| EAA 2025-06-28 시행 / EN 301 549 | ✅ EAA Directive 2019/882 원문 기준 정확. levelaccess.com 신뢰도 높음 |
| Accessibility Statement 법적 필수화 | ✅ EAA + Web Accessibility Directive 일치. 기존 지식 보강 |
| AI Intent-Aware UI (tblocks.com) | ❌ 소규모 블로그, 구체적 근거 없음 → 제외 |
| Liquid Glass (Apple iOS 26 / macOS Tahoe) | ✅ WWDC 2025에서 Apple이 공식 발표한 디자인 언어 |
| Tailwind v4 Oxide 엔진 / `@theme` | ⚠️ 사실이나 [2026-06-25] 기존 인사이트와 중복 → 제외 |
| shadcn/ui `data-slot` 패턴 | ✅ shadcn.com 공식 changelog 확인 가능, 새 항목 |
| `npx @tailwindcss/upgrade` | ✅ tailwindcss.com 공식 도구, 새 항목 |

---

## 오늘 배운 것

- **EAA(유럽 접근성법) 2025-06-28 전면 시행**: WCAG 범위를 넘어 하드웨어·비웹 소프트웨어까지 포함하는 EN 301 549 준수가 유럽 운영 서비스의 법적 의무. 단순 overlay 위젯은 준수 근거 불인정.
- **접근성 선언서(Accessibility Statement) + 피드백 창구 공식 개설이 EAA 법적 필수 조건**: 기술 구현만으론 부족하고 공개 선언서와 사용자 연락 채널이 함께 요구됨.
- **shadcn/ui `data-slot` 속성 기반 스타일링**: 컴포넌트 내부 프리미티브 요소에 `data-slot="icon"` 등 속성을 부여해 외부에서 CSS 선택자로 정밀 조작. 커스터마이징 시 클래스 충돌 없이 구조적 접근 가능.
- **Liquid Glass (Apple iOS 26 / macOS Tahoe)**: WWDC 2025에서 공식화된 깊이·모션·투명도 기반 디자인 언어. Spatial UX(시선·음성 입력) 트렌드와 함께 참고 필요.
- **`npx @tailwindcss/upgrade`**: Tailwind v3 JS 설정을 v4 CSS-First(`@theme`)로 자동 변환하는 공식 마이그레이션 CLI. v4 전환 시 우선 실행 권장.

## 출처

- [Level Access — EAA Compliance Guide](https://www.levelaccess.com/)
- [Web Accessibility Checker — EAA Accessibility Statement](https://www.web-accessibility-checker.com/)
- [shadcn/ui Official Docs](https://shadcn.com/)
- [orizon.co — 2026 UI/UX Design Trends](https://www.orizon.co/)
- [Tailwind CSS — Upgrade Guide](https://tailwindcss.com/)

## 위키화 후보

- `EAA / EN 301 549 접근성 법제화` — WCAG와의 차이·범위·접근성 선언서 요건 정리 노트

## 프로필 반영 후보 (저위험)

- `shadcn/ui data-slot 속성으로 내부 요소 선택자 스타일링` — 컴포넌트 커스터마이징 표준 패턴으로 추가
- `npx @tailwindcss/upgrade` — v3→v4 마이그레이션 공식 도구로 Tailwind 역량 항목에 추가

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음)
