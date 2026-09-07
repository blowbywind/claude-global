---
date: 2026-08-20
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-20

## 오늘 배운 것
- `Node.js 20`은 2026-08-20 기준 EOL입니다. 신규 백엔드 기본선은 `Node.js 24 LTS` 우선, 기존 서비스는 최소 `Node.js 22 LTS` 이상으로 잡아야 합니다.
- Node 내장 TypeScript 실행은 stable이지만 type stripping만 수행합니다. 타입 검사와 `tsconfig.json` 기반 변환은 하지 않으므로 서버 코드는 계속 `tsc --noEmit`으로 검증해야 합니다.
- `node:sqlite`는 release candidate이고 `DatabaseSync`의 API는 동기 실행입니다. 요청 핫패스 기본 DB 계층보다 테스트, 도구, 저트래픽 보조 저장소부터 제한 검토하는 것이 안전합니다.
- Fastify v4 LTS는 2025-06-30 종료되었습니다. 신규 Fastify API는 v5를 기본값으로 두고, v4에서 v5로 올릴 때는 v4 deprecation 경고를 먼저 제거해야 합니다.
- Express 5 마이그레이션은 catch-all, optional 확장자 라우트, 정규식형 경로, async 오류 전달 계약 테스트가 필요합니다.
- OAuth 보호 API는 RFC 9728 메타데이터와 RFC 8707 `resource` 파라미터를 함께 검토해야 합니다. 특히 `resource` 정확 일치 검증과 audience-restricted token이 핵심입니다.

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js TypeScript](https://nodejs.org/api/typescript.html)
- [Node.js SQLite](https://nodejs.org/api/sqlite.html)
- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)
- [Fastify Long Term Support](https://fastify.dev/docs/latest/Reference/LTS/)
- [Express 5 Migration Guide](https://expressjs.com/en/guide/migrating-5/)
- [RFC 9728 OAuth 2.0 Protected Resource Metadata](https://datatracker.ietf.org/doc/html/rfc9728)
- [RFC 8707 Resource Indicators for OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc8707)

## 위키화 후보
- 기존 `node.md` 현행화 — 내장 TypeScript stable, `node:sqlite` release candidate, `DatabaseSync` 동기 실행 제약

## 프로필 반영 후보 (저위험)
- Node 내장 TypeScript 실행은 런타임 편의 기능으로만 보고, 백엔드 검증에는 `tsc --noEmit` 유지
- Express 5 마이그레이션 리뷰어에 route matching syntax와 async error flow 회귀 테스트 추가

## 승인 필요 (고위험)
- 전역 Stack Defaults의 `Node.js 20 LTS`를 `Node.js 24 LTS` 우선 기준으로 교체할지 여부
- 전역 Fastify 기본값을 `v4+`에서 `v5`로 고정할지 여부

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-runtime-upgrade-auditor — Node, Fastify, Express 업그레이드 시 EOL, 라우팅, 타입검증, 동기 I/O 위험을 공식 문서 기준으로 점검
