---
date: 2026-06-20
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-06-20

리서치 완료 (웹검색 4/5회 사용). 결과를 정리합니다.

---

## 오늘 배운 것
- **shadcn CLI v4 (2026-03)**: `--dry-run`(시뮬레이션)·`--diff`(레지스트리 변경 비교)·`--view`(페이로드 검사) 검수 플래그 추가 → 컴포넌트 추가 전 변경 사항 사전 확인 가능. **Presets**로 색상·테마·아이콘·폰트·radius 전체 설정을 단일 문자열로 패키징.
- **Base UI가 Radix 대안으로 shadcn 통합 (2025-12~)**: `components.json` 한 줄로 Radix ↔ Base UI 전환. Base UI(MUI 팀, Radix·Floating UI 창립자 참여)는 번들이 더 작고 Combobox·Autocomplete·중첩 Dialog 등 복합 컴포넌트 보유, 현재 더 활발히 유지보수됨. 블록도 양쪽 변형 자동 제공.
- **상태관리 2026 = "상태 종류별 도구 선택"**: TanStack Query가 과거 'state'의 약 80%(서버 데이터)를 흡수 → Zustand는 공유 클라이언트 UI 상태(카트·알림·드래프트)와 낙관적 업데이트 전용으로 축소. RSC에선 Zustand store가 컴포넌트 트리 밖에서 동작해 적합, `persist` 미들웨어는 사용자 설정/임시저장에만.
- **2026 레이아웃 트렌드**: Bento Grid + CSS `subgrid`로 레이아웃 핵 없이 반응형 구현, 큰 카드=시각적 우선순위. AI-native UX는 **투명성·오버라이드 가능성**이 핵심(사용자가 AI 판단을 수정·통제 가능해야 신뢰). Glassmorphism은 노이즈 없는 미묘한 반투명 깊이로 진화.

## 출처
- [shadcn/ui March 2026 Update: CLI v4](https://medium.com/@nakranirakesh/shadcn-ui-march-2026-update-cli-v4-ai-agent-skills-and-design-system-presets-d30cf200b0e9)
- [March 2026 — shadcn/cli v4 (공식 changelog)](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [shadcn vs Radix vs Base UI — 2026](https://dev.to/edriso/shadcn-vs-radix-vs-base-ui-which-one-should-a-junior-pick-in-2026-1jml)
- [State Management in React (2026): Best Practices](https://www.c-sharpcorner.com/article/state-management-in-react-2026-best-practices-tools-real-world-patterns/)
- [21 Web Design Trends 2026](https://uiuxshowcase.com/blog/21-web-design-trends-2026-design-for-humans-ai-first-web/)

## 위키화 후보
- **Base UI vs Radix (shadcn 프리미티브 선택)** — components.json 전환 방식·번들/컴포넌트 차이·전환 기준 정리 (기존 shadcn-토큰-계층 노트와 연결)
- **shadcn CLI v4 워크플로** — `--dry-run/--diff/--view` 검수 플래그 + Presets 엔진 활용 패턴

## 프로필 반영 후보 (저위험)
- shadcn 컴포넌트 추가 시 `--dry-run`/`--diff`로 변경 사전 검수 후 적용 (무분별한 덮어쓰기 방지)
- 상태 분류 원칙: 서버 데이터=TanStack Query, 공유 클라이언트 UI 상태=Zustand, 폼/로컬=컴포넌트 state로 계층 분리

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 frontend-agent로 충분)


## 추가 학습 (19:32 UTC)
---

## 오늘 배운 것

- **shadcn/ui Base UI 지원 (2026-01)**: Radix 외에 Base UI를 primitive layer로 선택 가능. 마이그레이션 시 `asChild` 키워드를 전체 제거해야 하며, 점진적 컴포넌트별 교체 전략 권장.
- **shadcn/ui Luma 테마 (2026-03)**: 기본 테마 대비 softer surfaces, 더 넓은 spacing, calmer rhythm. `npx shadcn@latest add` 워크플로는 동일하여 팀 내 테마 선택지로 활용 가능.
- **shadcn/ui Component Composition (2026-04)**: 각 컴포넌트 문서에 "Composition Tree" 섹션 추가 — 올바른 컴포넌트 중첩 계층을 명시해 에이전트 기반 UI 생성 오류 감소.
- **CSS @layer 디자인 시스템 패턴**: 표준 레이어 순서 `reset → defaults → tokens → layouts → components → utilities → overrides`. 셀렉터 specificity와 무관하게 예측 가능한 스타일 우선순위 보장. Tailwind v4와 함께 사용 시 충돌 방지 핵심.
- **Variable Fonts = Design Tokens**: 2026 기준 `font-weight`, `font-width`, `optical-size` 축을 CSS 변수(토큰)로 관리하는 패턴이 표준화. 브랜드 일관성 + 파일 하나로 성능 최적화 동시 달성.
- **ARIA Live Region 실무 규칙**: `aria-live="polite"` 우선 사용, 메시지 짧고 명확하게, 페이지당 live region 수 최소화. 자동화 테스트로는 검증 불가 — NVDA/JAWS/VoiceOver 실 테스트 필수.

## 출처

- [January 2026 - Base UI Documentation - shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-01-base-ui)
- [March 2026 - Introducing Luma - shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-03-luma)
- [April 2026 - Component Composition - shadcn/ui](https://ui.shadcn.com/docs/changelog/2026-04-component-composition)
- [Mastering CSS Cascade Layers for Scalable Design Systems](https://www.designsystemscollective.com/mastering-css-cascade-layers-for-scalable-design-systems-981fdab2a961)
- [2026 Typography Trend: Variable Fonts as Brand Systems](https://fontalternatives.com/blog/variable-fonts-brand-systems-2026/)
- [ARIA Live Regions for Dynamic Content - UXPin](https://www.uxpin.com/studio/blog/aria-live-regions-for-dynamic-content/)

## 위키화 후보

- **shadcn-ui-2026-update** — Base UI migration(`asChild` 제거), Luma 테마, Component Composition Tree 세 가지 주요 2026 업데이트 정리
- **css-cascade-layers-design-system** — @layer 표준 레이어 순서 및 디자인 시스템 적용 패턴

## 프로필 반영 후보 (저위험)

- CSS @layer 표준 스택 `reset → tokens → components → utilities → overrides` — shadcn/ui 프로젝트에서 스타일 충돌 방지 기준으로 사용
- shadcn/ui Base UI 전환 시 `asChild` 전면 제거 + 점진적 컴포넌트별 교체 원칙

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

_(없음)_


## 추가 학습 (19:32 UTC)
## 오늘 배운 것

- **shadcn/ui CLI v4 + Design System Presets** (2026.03): 프리셋 코드 한 줄로 colors·theme·icon·fonts·radius 전체 설정 가능. `shadcn/skills`로 AI 에이전트가 컴포넌트 레지스트리 컨텍스트를 자동 파악함.
- **"Blocks" 패러다임 전환**: 2026년엔 버튼 단위보다 블록(페이지 섹션) 단위 재사용이 표준. `cva(class-variance-authority)`로 variant 관리를 병행.
- **2026 UI 트렌드 핵심**: 장식 제거(Calm Interface), 기능적 모션(무슨 일이 일어났는지 안내), AI 투명성·Override 가능성 요구. 화려한 depth 효과 → 인지 명확성 우선.
- **Zustand v5**: `useSyncExternalStore` 채택으로 React 18 렌더링 일관성 향상. `useShallow` + slice 패턴 조합이 성능·확장성 표준. Next.js 하이드레이션 전략 내장.
- **WCAG 3.0 현황**: 최종 Recommendation은 2028~2030년 예상. APCA는 2023년 draft에서 제외("미정" 상태). **2026년 법적 기준은 여전히 WCAG 2.2 AA**.
- **CSS `contrast-color()`**: Chrome 147 / Firefox 146 / Safari 26 (2026.04 Baseline Newly Available). 동적 테마에서 텍스트 색상 자동 계산. 단, 중간 톤 배경에서 흰/검 모두 부족할 수 있어 `@supports` 폴백 필수.

---

## 출처
- [shadcn/ui March 2026 Update: CLI v4, AI Agent Skills and Design System Presets](https://medium.com/@nakranirakesh/shadcn-ui-march-2026-update-cli-v4-ai-agent-skills-and-design-system-presets-d30cf200b0e9)
- [9 UI Trends That Will Shape Frontend Development in 2026](https://medium.com/design-bootcamp/9-ui-trends-that-will-shape-frontend-development-in-2026-7c0e563ffdf7)
- [Mastering State Management: Zustand v5 and Modern React Patterns](https://react-news.com/mastering-state-management-a-deep-dive-into-zustand-v5-and-modern-react-patterns)
- [WCAG3 Contrast as of April 2026 — Adrian Roselli](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html)
- [Algorithmic Theming Engines: Building Self-Correcting Color Systems With contrast-color() — Smashing Magazine](https://www.smashingmagazine.com/2026/05/building-self-correcting-color-systems-contrast-color/)

---

## 위키화 후보
- **CSS `contrast-color()` 함수** — 접근성 자동화 + 동적 테마링 신규 CSS 기능, 브라우저 지원 및 폴백 전략 포함
- **Zustand v5 슬라이스 패턴** — `useShallow`·slice 구성·Next.js 하이드레이션 전략 실무 레퍼런스

---

## 프로필 반영 후보 (저위험)
- Zustand 상태 설계 시 `useShallow` + slice 패턴을 기본 조합으로 적용 (v5 표준)
- WCAG 3.0 준비: 2026 현재 WCAG 2.2 AA 유지 + APCA 병행 테스트로 미래 전환 대비

---

## 승인 필요 (고위험)
_(없음)_
