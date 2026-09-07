---
date: 2026-08-13
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-08-13

## 검증 결과 요약

wget 폴백으로 원문 4건 직접 대조 완료(React Aria v1.20.0/v1.17.0, shadcn 2026-05/2026-03 changelog, Tailwind CHANGELOG.md). 오류 2건 발견해 수정·표시. 기존 위키에 WCAG 3.0 로드맵·shadcn registry CLI 개념 이미 존재해 해당 항목은 신규 위키화에서 제외.

## 오늘 배운 것
- React Aria v1.20.0(2026-07-31, 원문 대조 확인): `PreviewTrigger`(hover/focus/long-press 상호작용 popover), `TokenField`(alpha, AI 프롬프트·태그 인라인 토큰 입력) 신규 — Zustand 상태 연동 폼/채팅 UI에 활용 가능
- React Aria v1.17.0(2026-04-14, 원문 대조 확인): `Table` expandable rows, `Virtualizer` window scroll, `GridList`/`ListBox` 수평 가상화 — 대량 리스트 렌더링 성능 개선에 참고
- shadcn/ui "Registry Include and Validate"(2026-05, 원문 대조 확인): 대형 registry를 여러 `registry.json`으로 분할 → `shadcn build`로 합성, `shadcn registry validate`로 게시 전 검증. 기존 위키의 `registry build` 개념(2026-07-10 노트)에 대한 확장 기능
- shadcn/cli v4(2026-03, 원문 대조 확인): `registry:base`로 전체 디자인 시스템을 단일 payload 배포
- Tailwind CSS는 v4.3.x가 최신 계열 — **원문 대조 결과 리서치 날짜 오류 정정**: v4.3.0은 4/27이 아닌 **2026-05-08**, v4.3.2는 2026-06-26(일치). 리서치가 놓친 **v4.3.3(2026-07-16)**도 이미 출시됨, v4.4는 아직 없음
- Zustand 관련 리서치 주장 **정정**: 원문(dev.to) 대조 결과 실제 조합은 "TanStack Query(서버상태) + Zustand(클라이언트상태) + **Jotai**(폼상태)"였음. 리서치가 인용한 "React Hook Form" 조합은 원문과 불일치해 폐기

## 출처
- [React Aria v1.20.0](https://react-aria.adobe.com/releases/v1-20-0)
- [React Aria v1.17.0](https://react-aria.adobe.com/releases/v1-17-0)
- [shadcn/ui Registry Include and Validate](https://ui.shadcn.com/docs/changelog/2026-05-registry-include)
- [shadcn/ui CLI v4](https://ui.shadcn.com/docs/changelog/2026-03-cli-v4)
- [Tailwind CSS CHANGELOG.md](https://raw.githubusercontent.com/tailwindlabs/tailwindcss/main/CHANGELOG.md)
- [State Management in 2026 (Zustand/Jotai/RTK)](https://dev.to/jsgurujobs/state-management-in-2026-zustand-vs-jotai-vs-redux-toolkit-vs-signals-2gge)

## 위키화 후보
- React Aria v1.20.0 `PreviewTrigger`/`TokenField` — 신규 상호작용 컴포넌트 패턴, arthur 담당 UI 통합 작업에 직결

## 프로필 반영 후보 (저위험)
- Zustand 상태관리 조합 점검어에 "서버상태(TanStack Query)/클라이언트상태(Zustand)/폼상태(별도 라이브러리)" 3분리 원칙 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기-wget-폴백-내장" 후보로 이미 등록됨, 이번 검증도 wget 폴백으로 4건 원문 확보·2건 오류 적발해 유효성 재확인됨)
