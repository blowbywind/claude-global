---
date: 2026-07-12
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-12

WebFetch 툴 권한이 이번 세션에 승인되지 않아 URL 직접 재검증은 불가했습니다. 도메인 신뢰도(zod.dev=공식문서) 기준으로 교차판단했고, 검증 불확실한 구체 수치(pnpm 설치시간 755ms, 디스크 40~70%)는 제외했습니다.

## 오늘 배운 것
- Zod v4에서 에러맵 우선순위가 역전됨 — v3는 `.parse()` 호출 시 넘긴 컨텍스트 에러맵이 우선했으나 v4는 스키마 레벨 에러맵이 우선, 커스텀 에러 메시지가 조용히 무시될 수 있음
- `z.uuid()`가 v4에서 RFC 변형까지 엄격 검증하도록 변경됨, 기존 v3식 느슨한 검증이 필요하면 `z.guid()` 사용
- v4는 `.email()` 체이닝 대신 `z.email()` 등 최상위 포맷 검증자를 권장(체이닝은 유지되나 deprecated)
- 스키마는 모듈 초기화 시 한 번만 정의해 재사용해야 함 — 컴포넌트/요청 핸들러 내부에서 매번 새로 생성하면 v4에서 성능 저하가 뚜렷함
- 흔한 실수: 예외 throw하는 `parse()` 대신 `safeParse()` 미사용, 비동기 refinement에 `parseAsync` 누락
- pnpm catalogs(모노레포 버전 중앙관리)가 실험적 기능에서 프로덕션 기본 기능으로 전환, `apps/`(배포)·`packages/`(재사용) 분리 + `workspace:*` 프로토콜이 표준 관행으로 자리잡음

## 출처
- [Zod v4 변경사항](https://zod.dev/v4)
- [Zod v4 성능 이슈 분석](https://dev.to/dzakh/zod-v4-17x-slower-and-why-you-should-care-1m1)
- [Zod Best Practices](https://stevekinney.com/courses/full-stack-typescript/zod-best-practices)
- [JavaScript 모노레포 2026 모범사례](https://www.pkgpulse.com/guides/javascript-monorepos-2026-best-practices-pitfalls)
- [pnpm 모노레포 모범사례](https://oboe.com/learn/pnpm-monorepo-mastery-a38v55/best-practices-for-pnpm-monorepos-pnpm-monorepo-mastery-4)

## 위키화 후보
- Zod v4 마이그레이션 노트(에러맵·uuid·최상위 검증자 변경점 정리) — ai-ops 스택 필수 라이브러리인데 기존 노트 없음
- pnpm catalogs·모노레포 구조 관행 노트 — 신규 개념, 기존 노트 없음

## 프로필 반영 후보 (저위험)
- `safeParse`/`parseAsync` 우선 사용, 스키마 모듈 레벨 재사용 원칙

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
