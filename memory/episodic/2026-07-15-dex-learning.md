---
date: 2026-07-15
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-15

## 오늘 배운 것
- Node.js 20 LTS는 2026-04-30자로 EOL 처리됨(현재 2026-07-15 기준 약 2.5개월 경과) — ai-ops `stack-notes.md`가 Node 20으로 고정돼 있어 보안 패치 없는 런타임 운영 중일 가능성, 확인 필요
- TypeScript 5.8 `--erasableSyntaxOnly` 플래그로 enum·parameter properties 등 런타임에 잔존하는 TS 전용 문법 사용을 컴파일 타임에 차단 가능
- TypeScript 5.8부터 `--module node18`/`nodenext` 설정 시 Node 22+ 환경에서 ESM을 `require()`로 동기 로드 가능(CJS→ESM 점진 전환에 유용)
- TypeScript 5.9부터 구식 `moduleResolution` 설정(`node`/classic 계열) 사용 시 deprecated 경고 시작 — `bundler`/`nodenext` 전환 권장
- Fastify `decorateRequest('x', {})`처럼 참조 타입을 기본값으로 직접 지정하면 모든 요청이 같은 객체를 공유하는 버그 발생 — `null` 기본값 + `onRequest` 훅에서 요청별 할당 필요
- Fastify 플러그인 캡슐화 원칙: `fastify-plugin`으로 감싸지 않고 등록한 decorator/hook은 자식 컨텍스트에만 유효, 부모·형제 플러그인엔 노출되지 않음

(참고: 이번 세션에서 WebSearch/WebFetch 도구 권한이 승인되지 않아 dex가 제시한 출처를 직접 재검증하지 못했습니다. 아래 항목은 위키·기존 지식과의 정합성 및 알려진 사실 범위 내에서 채택했고, 근거가 약한 항목(예: 저신뢰 블로그 출처의 "Fastify v5 listen() 위치인자 완전 제거" 주장)은 제외했습니다.)

## 출처
- [Node.js End-of-Life Dates](https://www.herodevs.com/blog-posts/node-js-end-of-life-dates-you-should-be-aware-of)
- [endoflife.date - Node.js](https://endoflife.date/nodejs)
- [Announcing TypeScript 5.8](https://devblogs.microsoft.com/typescript/announcing-typescript-5-8/)
- [TypeScript 5.8 Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-8.html)
- [TypeScript 5.9 Release Notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-9.html)
- [Fastify Recommendations Guide](https://github.com/fastify/fastify/blob/main/docs/Guides/Recommendations.md)
- [Fastify Guides (v5)](https://fastify.dev/docs/v5.0.x/Guides/)

## 위키화 후보
- `concepts/typescript-5.8-5.9-모듈해석-변경사항.md` — erasableSyntaxOnly, requireable ESM, moduleResolution deprecation 정리 (기존 TS7/@types/node 비호환 노트와 연계 가치)

## 프로필 반영 후보 (저위험)
- Fastify `decorateRequest` 참조타입 기본값 공유버그 회피 패턴(null 기본값 + onRequest 훅) — 기존 `setErrorHandler` 원칙 노트와 같은 계열로 축적

## 승인 필요 (고위험)
- ai-ops 백엔드 Node.js 버전(현재 20 고정 추정)이 EOL 지났는지 `stack-notes.md` 확인 후, 맞다면 22/24 LTS 업그레이드 검토 여부를 사용자에게 확인 필요(인프라 영향 큼, 미제안 상태로 보류)

## 신규 도구 후보 (에이전트/스킬)
(없음)
