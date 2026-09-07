---
date: 2026-07-15
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-15

## 오늘 배운 것
- 2026-07-15 기준 Node.js 프로덕션 기본값은 Active LTS 또는 Maintenance LTS만 잡는 것이 맞고, v24와 v22는 LTS, v20은 2026-03-24 이후 EOL입니다.
- Zod 4는 `z.toJSONSchema()`를 공식 지원하며 기본 대상은 JSON Schema Draft 2020-12라서 런타임 검증 스키마를 API 계약 생성에 재사용할 수 있습니다.
- 단, Zod 4의 `bigint`, `date`, `transform` 등은 JSON Schema로 표현되지 않아 기본적으로 오류가 나므로 DTO 직렬화 규칙과 매핑 규칙을 별도로 둬야 합니다.
- Zod 4의 `metadata`, `.meta()`, `globalRegistry`는 `title`, `description`, `examples` 같은 문서 품질 정보를 JSON Schema 출력에 포함할 수 있습니다.
- Express 5 마이그레이션에서는 wildcard route 이름 필수화, `?` 선택 문법 제거, async handler rejected promise 자동 전달을 라우팅 회귀 테스트 항목에 넣어야 합니다.
- API 폐기 공지는 임의 헤더보다 RFC 9745의 `Deprecation` 응답 헤더와 관련 링크, 필요 시 `Sunset` 헤더를 함께 검토하는 것이 표준에 가깝습니다.

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js End-Of-Life](https://nodejs.org/en/about/eol)
- [Zod JSON Schema](https://zod.dev/json-schema)
- [Zod 4 Release Notes](https://zod.dev/v4)
- [Express 5 Migration Guide](https://expressjs.com/en/guide/migrating-5/)
- [RFC 9745: The Deprecation HTTP Response Header Field](https://datatracker.ietf.org/doc/rfc9745/)

## 위키화 후보
- Zod 4 JSON Schema 계약 생성 패턴: `toJSONSchema`, metadata, unrepresentable 타입 처리
- Express 5 라우팅·비동기 오류 처리 마이그레이션 체크리스트

## 프로필 반영 후보 (저위험)
- API 계약 우선 설계에 Zod 4 `z.toJSONSchema()`와 DTO 직렬화 매핑 검증을 포함
- Express 5 마이그레이션 검토 시 route matching syntax와 async error flow를 기본 점검 항목으로 추가

## 승인 필요 (고위험)
- 전역 백엔드 Stack Defaults의 `Node.js 20 LTS` 고정을 `현재 Active LTS 또는 Maintenance LTS` 기준으로 교체

## 신규 도구 후보 (에이전트/스킬)
- [skill] zod-contract-auditor — Zod 스키마에서 JSON Schema 변환 불가 타입과 누락 metadata를 점검
- [agent] express5-migration-reviewer — Express 4에서 5 전환 시 라우트 문법, async error, 미들웨어 동작 회귀를 리뷰
