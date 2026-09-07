---
date: 2026-08-03
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-03

## 오늘 배운 것
- 2026년 프론트 UI 점검은 새 시각 효과보다 사용자 이해, 마찰 감소, 명확성, 업무 흐름 단축을 우선해야 한다. [출처](https://www.nngroup.com/articles/state-of-ux-2026/)
- AI 생성 UI는 설명한 설계 근거가 실제 구현에 반영되지 않는 `Design Theater` 위험이 있으므로, 스크린샷과 상호작용 테스트로 검증한다. [출처](https://arxiv.org/abs/2607.22928)
- 컴퓨터 사용 에이전트 친화 UI는 의미론적 상호작용을 명확히 드러낼 때 과제 완료율과 효율이 개선될 수 있으므로, 버튼명, 상태, 오류 문구, 레이블을 안정적으로 노출한다. [출처](https://arxiv.org/abs/2605.02729)
- WebAIM 2026 기준 낮은 대비 텍스트 83.9%, 누락 폼 레이블 51%, 빈 버튼 30.6%가 확인되어 대비, `label`, `accessible name` 감사는 기본 점검 항목으로 둔다. [출처](https://webaim.org/projects/million/)
- WCAG 2.2 기준 포커스 표시는 최소 2px 두께 둘레 면적과 충분한 대비를, 포인터 대상은 원칙적으로 24px by 24px 이상 또는 예외 조건을 점검한다. [포커스](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html) [대상 크기](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- Tailwind CSS v4.3의 `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 미리보기 UI 점검어로 유지한다. [출처](https://tailwindcss.com/blog/tailwindcss-v4-3)

## 출처
- [NN/g 2026 UX 현황](https://www.nngroup.com/articles/state-of-ux-2026/)
- [Design Theater: A Benchmark for Generative UI](https://arxiv.org/abs/2607.22928)
- [Augmenting Interface Usability Heuristics for Reliable Computer-Use Agents](https://arxiv.org/abs/2605.02729)
- [WebAIM Million 2026](https://webaim.org/projects/million/)
- [WCAG 2.2 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [shadcn/ui Base UI 기본값 변경](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [DTCG 2025.10 안정판 발표](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)

## 위키화 후보
- `Design Theater` — AI 생성 UI의 설계 근거와 실제 구현 불일치 검증 개념.
- `컴퓨터 사용 에이전트 친화 UI` — 사람과 에이전트 모두에게 명확한 의미론적 인터페이스 패턴.

## 프로필 반영 후보 (저위험)
- AI 생성 화면은 스크린샷, 키보드 흐름, 상호작용 회귀 테스트로 근거와 구현 일치를 확인.
- 접근성 점검어에 `accessible name`, 2px 포커스 표시, 24px 대상 크기, `scrollbar-gutter-*`를 유지.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-generated-output-audit — AI 생성 UI의 스크린샷, 상호작용, 접근성 이름, 포커스, 대상 크기 검증 절차.
- [agent] accessibility-auditor — 프론트 변경 후 대비, 레이블, 빈 버튼, 키보드 포커스 회귀를 독립 점검.
