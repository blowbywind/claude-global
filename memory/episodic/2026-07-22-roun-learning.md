---
date: 2026-07-22
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-22

## 오늘 배운 것
- PostgreSQL 18의 AIO, `pg_upgrade` 통계 유지, B-tree `skip scan`, `uuidv7()`는 공식 릴리스 노트로 확인됨. 마이그레이션 점검 시 성능 회귀와 UUID 기본키 전략을 함께 봐야 함. 출처: https://www.postgresql.org/docs/current/release-18.html
- TypeSpec은 API 정의에서 OpenAPI, JSON Schema 2020-12, Protobuf, 클라이언트·서버 코드와 문서를 생성할 수 있어 계약 우선 API 설계 후보로 검증됨. 출처: https://typespec.io/
- OpenFGA는 사용자·관계·객체 단위 권한 확인을 지원하고, Conditions로 시간·IP·사용량·자원 속성 기반 인가를 모델링할 수 있음. 출처: https://openfga.dev/docs/getting-started/perform-check, https://openfga.dev/docs/modeling/conditions
- OpenTelemetry Node.js zero-code instrumentation은 코드 변경 없이 여러 Node.js 라이브러리·프레임워크의 텔레메트리를 수집할 수 있음. 단, Node.js 로깅 라이브러리는 아직 개발 중으로 명시되어 있어 traces·metrics 중심 적용이 안전함. 출처: https://opentelemetry.io/docs/zero-code/js/, https://opentelemetry.io/docs/languages/js/getting-started/nodejs/
- DPoP는 OAuth 토큰을 proof-of-possession 방식으로 sender-constraining해 replay 공격 탐지를 돕고, RFC 9470은 `insufficient_user_authentication`, `acr_values`, `max_age` 기반 step-up authentication 흐름을 정의함. 출처: https://www.rfc-editor.org/info/rfc9449/, https://www.rfc-editor.org/info/rfc9470/

## 출처
- [PostgreSQL 18 Release Notes](https://www.postgresql.org/docs/current/release-18.html)
- [TypeSpec](https://typespec.io/)
- [OpenFGA Perform a Check](https://openfga.dev/docs/getting-started/perform-check)
- [OpenFGA Conditions](https://openfga.dev/docs/modeling/conditions)
- [OpenTelemetry JavaScript zero-code instrumentation](https://opentelemetry.io/docs/zero-code/js/)
- [OpenTelemetry Node.js getting started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)
- [RFC 9449 DPoP](https://www.rfc-editor.org/info/rfc9449/)
- [RFC 9470 Step Up Authentication Challenge Protocol](https://www.rfc-editor.org/info/rfc9470/)

## 위키화 후보
- TypeSpec — OpenAPI·JSON Schema 2020-12·Protobuf·코드·문서 생성을 묶는 계약 우선 API 정의 도구
- OpenFGA Conditions — ReBAC에 시간·IP·사용량·자원 속성 조건을 결합하는 인가 모델링 패턴

## 프로필 반영 후보 (저위험)
- API 계약 우선 설계 용어에 TypeSpec 기반 다중 산출물 생성 검토 추가
- API 인가 설계 용어에 OpenFGA Conditions 기반 ReBAC+ABAC 모델링 추가

## 승인 필요 (고위험)
- OpenFGA 같은 외부 정책 엔진을 기본 인가 아키텍처 후보로 승격하는 변경
- DPoP 또는 RFC 9470 step-up authentication을 기본 인증 요구사항으로 적용하는 변경

## 신규 도구 후보 (에이전트/스킬)
- [skill] typespec-contract-review — TypeSpec, OpenAPI, JSON Schema 산출물 정합성 검증
- [agent] authorization-architect — BOLA, ReBAC, DPoP, step-up authentication 설계 검토
