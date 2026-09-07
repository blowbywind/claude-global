---
date: 2026-07-16
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-16

## 오늘 배운 것
- OpenAPI 원본을 여러 벌 복사하기보다 OpenAPI Overlay 1.1.0의 순차 `update`, `remove`, `copy` 액션으로 설명 보강, 메타데이터 추가, 파트너 공유 전 요소 제거를 반복 가능하게 관리할 수 있습니다.
- 이벤트 기반 API는 AsyncAPI 3.1.0으로 REST와 별도 계약화할 수 있습니다. 3.1.0은 공식 릴리스 노트상 non-breaking minor release라 3.0.0 문서는 `asyncapi` 값 변경부터 검토 가능합니다.
- DPoP는 OAuth access token과 public client refresh token을 애플리케이션 계층 proof-of-possession 방식으로 sender-constrain해 탈취 토큰 replay 위험을 줄입니다. 단, HTTPS와 XSS 방어를 대체하지 않습니다.
- Node.js API 관측성은 OpenTelemetry traces, metrics부터 붙이고 logs는 성숙도를 확인해야 합니다. Kubernetes 환경은 OpenTelemetry Operator 자동 계측과 Collector 경유 구성이 비밀 관리와 export retry 분리에 유리합니다.
- PostgreSQL 18은 `uuidv7()`, `WITHOUT OVERLAPS`, `PERIOD`, `EXPLAIN ANALYZE` 확장을 제공합니다. 신규 스키마와 성능 리뷰에서는 시간 정렬 UUID, 기간 중복 제약, buffer/index lookup/WAL/CPU 지표를 검토할 수 있습니다.
- PostgreSQL 18은 `md5` password authentication을 deprecated로 표시했습니다. password 기반 인증이 필요하면 SCRAM 기준으로 점검해야 합니다.

## 출처
- [OpenAPI Overlay Specification v1.1.0](https://spec.openapis.org/overlay/v1.1.0.html)
- [AsyncAPI Specification 3.1.0](https://www.asyncapi.com/docs/reference/specification/v3.1.0)
- [AsyncAPI Spec 3.1.0 Release Notes](https://www.asyncapi.com/blog/release-notes-3.1.0)
- [RFC 9449: OAuth 2.0 Demonstrating Proof of Possession](https://www.rfc-editor.org/info/rfc9449/)
- [OpenTelemetry Node.js Getting Started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)
- [OpenTelemetry Kubernetes Operator Auto-instrumentation](https://opentelemetry.io/docs/platforms/kubernetes/operator/automatic/)
- [PostgreSQL 18 Release Notes](https://www.postgresql.org/docs/current/release-18.html)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)

## 위키화 후보
- OpenAPI Overlay 1.1.0 - 내부, 외부 API 계약 변형을 원본 복사 없이 관리하는 표준 변환 계층
- PostgreSQL 18 temporal constraints - `WITHOUT OVERLAPS`, `PERIOD` 기반 기간 중복 방지 제약

## 프로필 반영 후보 (저위험)
- API 계약 관리 용어에 OpenAPI Overlay 1.1.0 기반 내부/외부 문서 변형 관리를 추가
- DB 스키마 설계 용어에 PostgreSQL temporal constraints와 `uuidv7()` 검토를 추가

## 승인 필요 (고위험)
- 신규 PostgreSQL 기본키 전략을 `uuidv7()` 우선 검토로 바꾸는 규칙 변경
- OAuth 보호 리소스에서 DPoP를 기본 토큰 보호 요구사항으로 격상하는 보안 정책 변경

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-contract-overlay - OpenAPI 원본과 Overlay를 검증해 내부/외부 계약 산출물 차이를 점검
- [agent] db-migration-reviewer - PostgreSQL 18 도입 시 `md5` 폐기, SCRAM, temporal constraints, EXPLAIN 항목을 검토
