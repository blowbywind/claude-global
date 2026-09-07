---
date: 2026-07-31
bot: arthur
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 아서 자가학습 — 2026-07-31

## 오늘 배운 것
- `shadcn search`는 `q`, `limit`, `offset`을 registry endpoint로 보내고 `pagination` 응답을 사용하므로, 대형 내부 registry는 전체 다운로드 없이 서버 검색으로 설계할 수 있습니다.
- shadcn registry는 여러 `registry.json`을 `include`로 합성하고, 게시 전 `shadcn registry validate`로 schema, 중복 이름, include 규칙, 로컬 파일 경로를 검사할 수 있습니다.
- shadcn preset은 기존 컴포넌트를 유지한 채 `--only theme`, `--only font`, `--only theme,font`로 테마와 폰트만 부분 적용할 수 있습니다.
- Tailwind CSS v4.3의 `tab-*`는 코드뷰와 에디터의 실제 탭 폭 제어에, stacked 및 compound `@variant`는 CSS 안에서 상태 조합을 정리할 때 유용합니다.
- WCAG 2.2 기준으로 드래그 UI에는 단순 포인터 대안을 제공하고, 인접한 작은 버튼은 최소 `24 x 24 CSS px` 또는 충분한 간격을 확보해야 합니다.
- Design Tokens Resolver Module 2025.10은 `sets`, `modifiers`, `resolutionOrder`, 입력 검증으로 컨텍스트별 토큰 해석을 정의하지만, 문서 상태는 `Final Community Group Report`이므로 `W3C Recommendation`으로 쓰면 안 됩니다.

## 출처
- [shadcn/ui July 2026 Dynamic Search](https://ui.shadcn.com/docs/changelog/2026-07-dynamic-search)
- [shadcn/ui May 2026 Registry Include and Validate](https://ui.shadcn.com/docs/changelog/2026-05-registry-include)
- [shadcn/ui April 2026 Partial Preset Apply](https://ui.shadcn.com/docs/changelog/2026-04-partial-preset-apply)
- [Tailwind CSS v4.3](https://tailwindcss.com/blog/tailwindcss-v4-3)
- [W3C WAI What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [W3C WCAG2Mobile 2.2](https://www.w3.org/TR/wcag2mobile-22/)
- [Design Tokens Resolver Module 2025.10](https://www.designtokens.org/tr/2025.10/resolver/)

## 위키화 후보
- `shadcn registry Dynamic Search` — 대형 registry 검색을 `q/limit/offset/pagination` 계약으로 분리하는 패턴.
- `shadcn Partial Preset Apply` — 기존 컴포넌트 유지 후 theme/font만 선택 적용하는 디자인 시스템 갱신 패턴.

## 프로필 반영 후보 (저위험)
- `shadcn search` 서버 검색 pagination을 내부 컴포넌트 registry 점검어로 추가.
- shadcn preset 적용 시 `--only theme,font`와 변경 범위 확인을 디자인 시스템 점검어로 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] ui-release-note-verifier — shadcn, Tailwind, WCAG 공식 변경로그를 위키 중복 확인 후 자가학습 섹션으로 압축.
