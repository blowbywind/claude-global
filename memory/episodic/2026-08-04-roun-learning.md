---
date: 2026-08-04
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-04

## 오늘 배운 것
- AWS Durable Execution SDK는 Lambda에서 체크포인트, 대기, 콜백, 병렬 실행을 제공하므로 주문 처리, 승인 워크플로, 데이터 파이프라인, Saga 후보로 검토할 수 있습니다.
- Lambda durable functions는 `execution name`을 멱등성 키처럼 사용하지만, 이벤트 소스 매핑은 중복 실행 방지를 직접 보장하지 않으므로 함수 코드의 멱등 처리나 프록시 디스패처가 필요합니다.
- Temporal Activity는 재시도 때문에 같은 부작용이 여러 번 실행될 수 있으므로 결제, DB 쓰기, 외부 API 호출은 Activity 내부에서 멱등 키와 재시도 허용 설계를 전제로 둬야 합니다.
- `pgroll`은 PostgreSQL 온라인 마이그레이션에서 이전 스키마와 새 스키마를 동시에 노출하고, 앱은 새 버전으로 `search_path`를 전환한 뒤 기존 앱이 사라졌을 때만 `complete`해야 합니다.
- OpenTelemetry Profiles는 현재 Alpha 신호이므로 운영 대시보드의 핵심 계약보다는 성능 병목 분석용 보조 신호로 먼저 검증하는 편이 안전합니다.
- Node.js `node:sqlite`는 release candidate이며, `defensive` 기본 활성화, `limits`, `SQLTagStore` 기반 prepared statement 캐시를 보안 점검어로 추가할 가치가 있습니다.

## 출처
- [AWS Durable Execution SDK Developer Guide](https://docs.aws.amazon.com/durable-execution/)
- [AWS Lambda Durable Functions Idempotency](https://docs.aws.amazon.com/lambda/latest/dg/durable-execution-idempotency.html)
- [Temporal Activity Definition](https://docs.temporal.io/activity-definition)
- [pgroll GitHub](https://github.com/xataio/pgroll)
- [OpenTelemetry Profiles](https://opentelemetry.io/docs/concepts/signals/profiles/)
- [Node.js SQLite](https://nodejs.org/api/sqlite.html)
- [Announcing OpenAPI v3.2](https://www.openapis.org/blog/2025/09/23/announcing-openapi-v3-2)

## 위키화 후보
- AWS Durable Execution SDK와 Lambda durable functions 멱등성 패턴
- pgroll 기반 PostgreSQL expand/contract 온라인 마이그레이션

## 프로필 반영 후보 (저위험)
- 장기 실행 서버리스 워크플로 검토 항목에 `execution name`, 이벤트 소스 매핑 멱등성 한계, 프록시 디스패처 패턴 추가
- PostgreSQL 온라인 마이그레이션 검토 항목에 `pgroll`, `search_path` 버전 전환, `complete` 전 기존 앱 제거 확인 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-migration-review — PostgreSQL 온라인 마이그레이션, expand/contract, 롤백 가능성 점검 자동화
