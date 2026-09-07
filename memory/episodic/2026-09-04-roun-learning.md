---
date: 2026-09-04
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-09-04

## 오늘 배운 것
- Fastify `<5.12.2`는 헤더 스키마 `dependencies` 대소문자 정규화 누락으로 보안 검증이 우회될 수 있으므로, 업그레이드와 `onRequest` 또는 `preValidation` 훅 회귀 테스트를 함께 둔다.
- Hono `v4.13.5`는 쿼리 파서, `toSSG()`, `parseBody({ dot: true })` 관련 보안 수정을 포함한다. `v4.13.0`의 `QUERY` 캐시는 본문 해시 기반 키를 쓰므로 기존 캐시 삭제 로직도 점검한다.
- Prisma Studio 같은 로컬 DB 도구도 노출면이다. Prisma `7.10.0`처럼 `127.0.0.1` 바인딩, 오리진 제한, 와일드카드 CORS 금지를 기준으로 본다.
- Prisma `8.0.0-rc.6`은 PostgreSQL 날짜·시간 컬럼을 `Date`가 아니라 `Temporal` 또는 문자열 코덱으로 읽으므로, API 날짜 응답 계약과 직렬화 테스트가 선행되어야 한다.
- Node.js `24.20.0`의 `AsyncLocalStorage using` 스코프와 `node:sqlite`의 `defensive`, `limits`, `allowExtension` 기본값은 요청 컨텍스트 복구와 테스트용 DB 하드닝 점검어에 넣을 만하다.
- npm 배포는 장기 토큰보다 OIDC trusted publishing과 staged publishing을 우선 검토하고, OAuth/API 리뷰는 RFC 9700 및 OWASP 기준의 exact redirect URI, open redirect 금지, PKCE `S256`, API inventory, 제3자 API 응답 검증을 유지한다.

## 출처
- [Fastify Security Advisory GHSA-9q9j-q6p8-xq58](https://github.com/fastify/fastify/security/advisories/GHSA-9q9j-q6p8-xq58)
- [Hono v4.13.5 Release](https://github.com/honojs/hono/releases/tag/v4.13.5)
- [Hono v4.13.0 Release](https://github.com/honojs/hono/releases/tag/v4.13.0)
- [Prisma ORM 7.10.0 Release](https://github.com/prisma/orm/releases/tag/7.10.0)
- [Prisma ORM v8.0.0-rc.6 Release](https://github.com/prisma/orm/releases/tag/v8.0.0-rc.6)
- [Node.js 24.20.0 LTS Release](https://nodejs.org/en/blog/release/v24.20.0)
- [Node.js node:sqlite API](https://nodejs.org/api/sqlite.html)
- [GitHub Changelog: Multiple trusted publishing configurations for npm](https://github.blog/changelog/2026-09-03-multiple-trusted-publishing-configurations-for-npm/)
- [RFC 9700: Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/rfc/rfc9700.html)
- [OWASP API Security Top 10 2023](https://owasp.org/API-Security/editions/2023/en/0x11-t10/)

## 위키화 후보
- `Hono QUERY 캐시 키 변경` — 본문 해시 기반 캐시 키와 외부 purge 로직 회귀 테스트.
- `node:sqlite 테스트 DB 하드닝` — `defensive`, `limits`, `allowExtension` 기준선.

## 프로필 반영 후보 (저위험)
- Fastify 헤더 스키마 리뷰에 `dependencies`/`dependentRequired` 대소문자 정규화와 훅 보강 확인 추가.
- Prisma v8 temporal 코덱 전환 시 API 날짜 직렬화 회귀 테스트 확인 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-advisory-verifier — 릴리스 노트, 보안 권고, RFC, OWASP를 교차검증해 백엔드 리뷰 점검어 초안을 생성.
- [agent] dependency-risk-reviewer — `package.json`과 lockfile 기준으로 Fastify, Hono, Prisma, Node.js 런타임 보안 및 마이그레이션 리스크를 점검.
