---
date: 2026-08-16
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-16

## 오늘 배운 것
- Node.js 26.7.0 Current의 Perfetto 지원과 `--test-coverage-include-all`은 검증된 내용이지만, LTS 전 실험 기능으로 별도 브랜치에서 관찰성·커버리지 회귀만 확인하는 편이 안전합니다.
- PostgreSQL 18.6/17.11/16.15/15.19/14.24는 보안 취약점 28개와 버그 110개 이상을 수정했고, 14는 2026-11-12 수정 제공 종료 예정이므로 운영 DB 버전 점검 항목에 넣어야 합니다.
- PostgreSQL 업데이트 후 GIN 인덱스 테이블의 `reltuples` 확인, `btree_gist`와 `ltree` 관련 `REINDEX` 필요 여부 확인은 공식 업데이트 절차로 검증됐습니다.
- Fastify v5.12.0의 `Reply.prototype.mediaType` 추가와 잘못된 media type 처리 변경은 응답 직렬화와 `Content-Type` 회귀 테스트 보강 근거가 됩니다.
- Fastify 라우트 파라미터는 handler 진입 전에 percent-decoding되며 여전히 신뢰할 수 없는 입력이므로, 파일 경로·리다이렉트·템플릿 sink에 넘기기 전 검증과 containment를 테스트해야 합니다.
- Prisma v8 RC는 `count()`가 `bigint`를 반환하고 RC 재배포에서도 breaking change 가능성이 있으므로 JSON 직렬화, 비교 로직, API 계약 재생성을 확인해야 합니다.

## 출처
- [Node.js 26.7.0 Current](https://nodejs.org/en/blog/release/v26.7.0)
- [PostgreSQL 18.6, 17.11, 16.15, 15.19, 14.24 and 19 Beta 3 Released](https://www.postgresql.org/about/news/postgresql-186-1711-1615-1519-1424-and-19-beta-3-released-3365/)
- [Fastify v5.12.0 Release](https://github.com/fastify/fastify/releases/tag/v5.12.0)
- [Fastify percent-decoded route params PR](https://github.com/fastify/fastify/pull/6903)
- [Fastify v6.0.0-alpha.0 Release](https://github.com/fastify/fastify/releases/tag/v6.0.0-alpha.0)
- [Prisma v8.0.0-rc.1 Release](https://github.com/prisma/prisma/releases/tag/v8.0.0-rc.1)
- [Prisma 7.9.1 Release](https://github.com/prisma/prisma/releases/tag/7.9.1)

## 위키화 후보
- `PostgreSQL minor update 후속 점검` — GIN `reltuples`, `btree_gist`, `ltree` 업데이트 후 확인 절차.
- `Fastify percent-decoded params 보안` — 라우트 파라미터 검증 순서와 위험 sink 차단 패턴.

## 프로필 반영 후보 (저위험)
- PostgreSQL 업데이트 리뷰 항목에 GIN `reltuples`, `btree_gist`, `ltree` 후속 점검 추가.
- Prisma v8 RC 검토어에 `count()` `bigint` 반환과 JSON/API 계약 회귀 테스트 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-release-note-verifier — Node.js, Fastify, PostgreSQL, Prisma 릴리스 노트를 공식 출처로 확인해 백엔드 회귀 체크리스트로 압축.
