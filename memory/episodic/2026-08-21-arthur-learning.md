---
date: 2026-08-21
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-21

## 오늘 배운 것
- `shadcn/typeset`은 Markdown/HTML 렌더링을 `typeset` 컨테이너와 프로젝트 소유 CSS 한 파일로 통제하며, chat/docs별 preset, theme token, streaming 안정성 점검에 적합합니다.
- `@shadcn/helpers/ai-sdk`는 모델, API route, 네트워크, API key 없이 실제 `useChat` 생명주기로 predefined stream을 재현하므로 AI chat UI preview, screenshot, CI 테스트에 유용합니다.
- DTCG `drafts/format`은 2026-07-30 preview draft이고 “구현하지 말라”가 명시되어 있어, 내부 token 정본으로 고정하지 말고 stable URL과 adapter 관찰 대상으로 분리해야 합니다.
- Figma Code Connect in MCP는 Figma 측 평가에서 median task duration 19.6% 감소, token 29.5% 감소, code quality 1점 상승을 보였으나 효과는 Code Connect coverage에 크게 좌우됩니다.
- Chrome Modern Web Guidance는 accessible error announcement, interest-triggered tooltip, persistent toast, position-aware tooltip, scrollability affordance 같은 UI 패턴을 실제 웹 기능과 매핑해 회귀 점검어로 쓰기 좋습니다.
- WCAG 2.2 기준상 icon button, row action은 시각 아이콘 크기와 별개로 24x24 CSS px target 또는 spacing 예외를 확인하고, focus indicator는 2px perimeter 면적과 3:1 상태 대비를 함께 검수해야 합니다.

## 출처
- [shadcn/typeset](https://ui.shadcn.com/docs/typeset)
- [shadcn AI SDK helper](https://ui.shadcn.com/docs/helpers/ai-sdk)
- [Design Tokens Format Module draft](https://www.designtokens.org/tr/drafts/format/)
- [Figma Code Connect in MCP](https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/)
- [Codex and Figma MCP](https://www.figma.com/blog/introducing-codex-to-figma/)
- [Chrome Modern Web Guidance use cases](https://developer.chrome.com/docs/modern-web-guidance/use-cases)
- [Chrome 142 Interest Invokers](https://developer.chrome.com/blog/new-in-chrome-142)
- [WCAG 2.2 Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.2 Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)

## 위키화 후보
- `Chrome Modern Web Guidance use cases` - UI 패턴과 웹 기능 지원 상태를 연결하는 프론트엔드 회귀 점검 노트.

## 프로필 반영 후보 (저위험)
- `@shadcn/helpers/ai-sdk`를 AI chat UI deterministic preview/test 점검어로 추가.
- `Modern Web Guidance use cases`를 overlay, toast, scroll affordance 구현 검토어로 추가.

## 승인 필요 (고위험)
- DTCG preview draft를 내부 design token 정본이나 구현 기준으로 고정하는 결정.
- `Interest Invoker`를 production 기본 구현으로 채택하는 결정. Chrome 142에는 추가됐지만 Firefox/Safari 폴백 검증이 필요합니다.

## 신규 도구 후보 (에이전트/스킬)
- [skill] chat-ui-deterministic-preview - `@shadcn/helpers/ai-sdk`로 streaming chat 상태별 preview와 CI 테스트 케이스를 생성.
- [skill] figma-code-connect-review - Figma MCP 응답에서 Code Connect coverage, import, props 매핑 품질을 점검.
