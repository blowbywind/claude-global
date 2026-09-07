---
date: 2026-07-08
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-07-08

검증 완료. 결과 정리합니다.

---

**폐기 항목 (출처 확인 불가·과장)**

- `shadcn/ui가 2026년 7월부터 Base UI를 "기본" 채택` — 위키에는 "Base UI 엔진 선택 가능(2026-03)"으로 기록돼 있어 '옵션' 수준이지 '기본값 전환' 근거 없음. WebFetch 접근 불가로 재확인도 불가. **폐기**.
- `MessageScroller / Bubble / Marker 채팅 프리미티브` — shadcn/ui 문서에서 해당 컴포넌트 이름 확인 불가. 구체적 명칭 검증 실패. **폐기**.

---

## 오늘 배운 것

- **Tailwind CSS v4 `@theme` 지시어**: `tailwind.config.js` 대신 CSS 파일 내 `@theme { --color-mint-500: oklch(...); }` 형식으로 디자인 토큰을 정의하면 유틸리티 클래스(`bg-mint-500`)와 CSS 변수가 자동 생성된다. 기존 v3의 JS 설정 파일이 완전히 대체된다.
- **shadcn 커스텀 레지스트리 확인**: `registry.json`을 포함한 공개 GitHub 저장소는 `npx shadcn add <github-url>` 로 팀 공유 가능. 기존 메모리([2026-06-26])와 일치 — **중복 학습, 신규성 없음**.
- **Shift-Left 접근성**: 접근성 검증을 배포 후 감사에서 **개발 초기(설계·구현 단계)로 당겨** CI/CD 파이프라인에 자동화 도구를 통합하는 패턴. axe-core, Lighthouse CI 등을 빌드 게이트로 사용.
- **AI 접근성 도구 + Human-in-the-Loop**: AI 스캐너로 코드 레벨 오류(색상 대비, aria 누락 등)를 빠르게 탐지하되, 스크린 리더 실사용 경험·컨텍스트 판단은 반드시 사람이 교차 검증해야 함(W3C WAI 권고).
- **의도 기반 UI / 생성형 UI 트렌드**: 고정 레이아웃 대신 사용자의 실시간 맥락·의도를 추론해 UI를 즉석 생성하는 방향. 아직 구현 수단보다 **UX 방향성 트렌드** 수준 — 프로토타이핑 시 인터랙션 의도를 명시적으로 설계하는 원칙으로 참고.

## 출처

- [Tailwind CSS — Theme Variables (@theme directive)](https://tailwindcss.com/docs/theme)
- [W3C WAI — Accessibility Fundamentals](https://www.w3.org/WAI/)

## 위키화 후보

- `shift-left-accessibility-ci` — Shift-Left 접근성 + CI/CD 자동화 패턴: axe-core/Lighthouse CI 게이트 + Human-in-the-Loop 원칙

## 프로필 반영 후보 (저위험)

- `Tailwind v4 @theme CSS-first 디자인 토큰 정의`: `tailwind.config.js` 없이 CSS `@theme` 블록 단독으로 토큰·유틸리티 동시 생성 — 기존 "CSS-first 테마" 인사이트([2026-06-24])에 `@theme` 지시어 구문을 구체화해 보완.
- `Shift-Left 접근성 + Human-in-the-Loop`: CI 자동화(AI 스캔) + 사람 교차 검증의 2단 원칙 — 향후 접근성 검토 워크플로 기준으로 활용.

## 승인 필요

## 신규 도구 후보 (에이전트/스킬)
