---
date: 2026-08-22
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-22

## 오늘 배운 것
- shadcn/ui 신규 프로젝트는 Base UI가 기본값이며, Radix 유지 자동화는 `-b radix`를 명시해야 합니다.
- React Aria는 shadcn/ui의 1급 component base로 확인되지만, 기존 프로젝트의 base 전환은 별도 승인 대상입니다.
- `Questionnaire`는 agent 확인 프롬프트 UI에 적합한 후보입니다. fixed, freeform, multiple, skippable 답변, 조건부 질문, 검증, 키보드 내비게이션이 공식 확인됩니다.
- shadcn registry Dynamic Search는 `q/type/limit/offset` 요청과 `pagination` 응답으로 서버 검색 활성 여부를 판별하므로 내부 registry 품질 점검어로 유지합니다.
- Tailwind CSS v4.3의 `scrollbar-*`, `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 반응형 컨테이너 점검에 직접 유용합니다.
- WCAG 2.2 기준으로 아이콘 버튼과 행 액션은 24×24 CSS px 타깃 크기와 포커스 가림 여부를 함께 검수해야 합니다.

## 출처
- [shadcn/ui: Base UI as the Default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default)
- [shadcn/ui: React Aria](https://ui.shadcn.com/docs/changelog/2026-07-react-aria)
- [shadcn/ui: Questionnaire](https://ui.shadcn.com/docs/changelog/2026-08-questionnaire)
- [shadcn/ui: Dynamic Search](https://ui.shadcn.com/docs/registry/dynamic-search)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [W3C WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [W3C WCAG 2.2 Focus Not Obscured Minimum](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html)
- [W3C WCAG2ICT 2.2](https://www.w3.org/TR/wcag2ict-22/)
- [Figma MCP Code Connect integration](https://developers.figma.com/docs/figma-mcp-server/code-connect-integration/)
- [Design Tokens Community Group 2025.10 announcement](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/)
- [Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/2025.10/format/)
- [Design Tokens Color Module 2025.10](https://www.designtokens.org/tr/2025.10/color/)

## 위키화 후보
- 없음. 기존 위키에 shadcn, Tailwind v4.3, WCAG2ICT, DTCG, Figma Code Connect 관련 노트가 있어 신규 노트보다 보강 범위입니다.

## 프로필 반영 후보 (저위험)
- registry 검색 UI 점검어에 `pagination` 존재 여부, `hasMore`, 서버 정렬 보존 확인을 추가합니다.
- 접근성 회귀 체크에 24×24 CSS px 타깃 크기와 sticky header, toast, non-modal dialog의 포커스 가림 검사를 유지합니다.

## 승인 필요 (고위험)
- 기존 Radix 프로젝트를 Base UI 또는 React Aria로 전환하거나 자동 마이그레이션하는 행동규칙 변경.
- 신규 shadcn 프로젝트 기본 primitive를 조직 차원에서 Base UI 또는 React Aria로 고정하는 결정.

## 신규 도구 후보 (에이전트/스킬)
- [skill] registry-ui-audit — shadcn registry Dynamic Search 응답, pagination, 접근성 메타데이터를 자동 점검.
- [agent] design-connect-reviewer — Figma Code Connect 매핑, props, import, custom instructions 최신성 검토.
