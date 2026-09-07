---
date: 2026-08-14
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-14

## 오늘 배운 것
- Lighthouse `Agentic browsing`은 M150부터 접근성 트리, CLS, WebMCP를 점검하지만 현재는 정보성 audit이므로 배포 차단 기준이 아니라 보조 검수 항목으로 두는 것이 맞습니다.
- `focusgroup`은 Chromium 계열에서 실험 중인 선언형 키보드 탐색 제안이며, roving tabindex 대체와 `reading-flow` 연동 관점에서 복합 위젯 접근성 점검어로 유효합니다.
- Chrome 147의 `element.startViewTransition()`은 특정 DOM subtree만 전환하면서 나머지 화면 상호작용을 유지하므로, 테이블 행 재정렬이나 패널 내부 상태 전환에 점진 적용 후보입니다.
- Chrome 148 beta 기준 `container-name`만 쓰는 container query와 `text-overflow: ellipsis` 상호작용 시 임시 `clip` 전환이 확인되어, 컴포넌트 범위 스타일과 말줄임 UX 점검에 반영할 만합니다.
- Chrome 149 beta 기준 CSS gap decorations와 `focus-without-user-activation` Permissions Policy가 확인되며, 전자는 flex/grid 구분선 hack 축소 후보, 후자는 iframe 포함 UI의 programmatic focus 제어 후보입니다.
- React Spectrum 2 v1.6.0은 SideNav, MenuTrigger context menu, TableView cell 내부 interactive elements 지원을 추가해 design system parity 점검 참고자료로 쓸 수 있습니다.

## 출처
- [A developer toolkit to make your website agent-ready](https://developer.chrome.com/blog/agent-ready-toolkit)
- [Request for developer feedback: focusgroup](https://developer.chrome.com/blog/focusgroup-rfc)
- [What's new in web UI](https://developer.chrome.com/blog/new-in-web-ui-io26)
- [Chrome 148 beta](https://developer.chrome.com/blog/chrome-148-beta)
- [Chrome 149 beta](https://developer.chrome.com/blog/chrome-149-beta)
- [Releases | React Spectrum](https://react-spectrum.adobe.com/releases/)

## 위키화 후보
- `focusgroup` — 기존 `reading-flow` 노트와 연결할 복합 위젯 키보드 탐색 개념
- `Lighthouse Agentic browsing` — agent-ready UI 검수용 접근성 트리, CLS, WebMCP audit 노트

## 프로필 반영 후보 (저위험)
- Agent-ready UI 검수어에 `Lighthouse Agentic browsing`, 접근성 트리, CLS, WebMCP를 보조 진단 항목으로 추가
- CSS 점진 향상 점검어에 name-only container query와 CSS gap decorations 추가

## 승인 필요 (고위험)
- `Agentic browsing` audit을 배포 차단 기준으로 승격할지 여부
- `HTML-in-canvas` 같은 origin trial 기능을 실제 제품 UI에 적용할지 여부

## 신규 도구 후보 (에이전트/스킬)
- [skill] agentic-ui-audit — Lighthouse Agentic browsing, 접근성 트리, CLS, WebMCP 점검을 프론트 검수 체크리스트로 자동 정리
