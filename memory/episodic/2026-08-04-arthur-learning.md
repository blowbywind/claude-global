---
date: 2026-08-04
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-04

## 오늘 배운 것
- `UX`는 사라진 용어가 아니라 아직 기본 우산 용어이며, `product`, `experience design`, `human-centered design`은 대체어라기보다 병존하는 분절된 표현으로 봐야 합니다. ([NN/g](https://www.nngroup.com/articles/no-new-name-ux/))
- AI 프로토타이핑은 초기 시안과 테스트용 프로토타입에는 유용하지만, 실제 품질은 요구사항, 상호작용 상태, 디자인 언어, 사람의 평가가 얼마나 구체적으로 들어가느냐에 좌우됩니다. ([NN/g](https://www.nngroup.com/articles/ai-prototyping/))
- React Aria는 AI 코딩 도구가 공식 원문을 읽도록 MCP Server, Agent Skills, Markdown 문서, `llms.txt`를 제공합니다. 접근성 컴포넌트 구현 전 공식 문서 경로를 우선 참조할 가치가 있습니다. ([React Aria](https://react-aria.adobe.com/ai))
- React Aria `Button`은 mouse, touch, keyboard 입력을 `onPress`로 정규화하며, 버튼처럼 보이는 링크는 `Button`이 아니라 `Link`를 써야 합니다. ([React Aria Button](https://react-aria.adobe.com/Button))
- shadcn/ui는 2026년 7월 기준 React Aria를 `--base aria`로 선택 가능한 1급 base로 추가했고, Base UI는 기본값, Radix는 계속 지원됩니다. ([shadcn/ui changelog](https://ui.shadcn.com/docs/changelog))
- Tailwind v4.3의 `scrollbar-gutter-*`, `@container-size`, `zoom-*`, `tab-*`, stacked/compound `@variant`는 스크롤 패널, 코드뷰, 미리보기 UI 점검어로 유지할 만합니다. ([Tailwind CSS](https://tailwindcss.com/blog/tailwindcss-v4-3))

## 출처
- [No New Name Has Replaced "UX"](https://www.nngroup.com/articles/no-new-name-ux/)
- [Good from Afar, But Far from Good: AI Prototyping in Real Design Contexts](https://www.nngroup.com/articles/ai-prototyping/)
- [Working with AI | React Aria](https://react-aria.adobe.com/ai)
- [Button | React Aria](https://react-aria.adobe.com/Button)
- [Changelog - shadcn/ui](https://ui.shadcn.com/docs/changelog)
- [Tailwind CSS v4.3: Scrollbars, new colors, and more](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [Design Tokens Format Module 2025.10](https://www.designtokens.org/tr/2025.10/format/)

## 위키화 후보
- AI 프로토타이핑 품질 검증 체크리스트 — 요구사항, 상태, 디자인 언어, 사람 평가 기준 정리
- React Aria AI 문서 경로 — MCP Server, Agent Skills, Markdown, `llms.txt` 활용법

## 프로필 반영 후보 (저위험)
- React Aria 사용 시 `Button`은 `onPress`, 링크형 버튼은 `Link`로 점검
- AI 생성 UI 검토 시 상호작용 상태와 디자인 언어 명시 여부를 기본 확인

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] react-aria-a11y-check — React Aria 공식 Markdown과 `llms.txt` 기준으로 컴포넌트 API와 접근성 사용법 점검
