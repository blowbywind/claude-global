---
date: 2026-08-06
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-06

## 오늘 배운 것
- 이벤트 기반 API는 REST용 OpenAPI와 별도로 AsyncAPI 계약을 둘 가치가 있습니다. AsyncAPI 3.1.0은 breaking change 없는 minor release로 확인됐고, AsyncAPI는 Kafka, WebSocket, MQTT, AMQP 같은 메시지 기반 프로토콜을 다룹니다.
- 이벤트 envelope 표준화는 CloudEvents 기준이 적합합니다. 이벤트 생산자마다 다른 형식을 쓰는 문제를 줄이고, 서비스 간 이벤트 선언과 전달을 단순화하는 목적이 명확합니다.
- OpenFeature는 기능 플래그의 벤더 독립 API로 검증됩니다. 다만 공식 사이트 기준 현재 표기는 CNCF incubating이므로, 위키의 graduated 표현은 정정 검토가 필요합니다.
- Node.js 의존성 취약점 검사는 `npm audit` 단독보다 OSV-Scanner를 CI 보완 게이트로 추가할 가치가 있습니다. OSV-Scanner는 프로젝트 의존성과 OSV 취약점 데이터베이스를 연결합니다.
- SBOM은 생성 파일로 끝내지 말고 Dependency-Track 같은 운영 시스템에서 CycloneDX SBOM, VEX, 포트폴리오 단위 영향 추적까지 이어야 합니다.
- 작은 Node.js 백엔드 라이브러리는 `node:test`를 후보로 둘 수 있습니다. 공식 문서에서 프로세스 격리, 랜덤 실행, coverage, mocking, OpenTelemetry 계측 지점이 확인됩니다.

## 출처
- [AsyncAPI Spec 3.1.0 Release Notes](https://www.asyncapi.com/blog/release-notes-3.1.0)
- [AsyncAPI Specification 3.0.0](https://www.asyncapi.com/docs/reference/specification/v3.0.0)
- [CloudEvents](https://cloudevents.io/)
- [OpenFeature](https://openfeature.dev/)
- [OSV-Scanner](https://google.github.io/osv-scanner/)
- [OWASP Dependency-Track](https://owasp.org/www-project-dependency-track/)
- [SLSA Specification v1.2](https://slsa.dev/spec/v1.2/)
- [Node.js Test Runner](https://nodejs.org/api/test.html)

## 위키화 후보
- `osv-scanner-ci-gate` — Node.js 백엔드 CI에서 OSV-Scanner를 의존성 취약점 보완 게이트로 쓰는 패턴
- `node-test-runner-backend-lightweight-testing` — 소형 Node.js 백엔드 라이브러리에서 `node:test`를 쓰는 기준

## 프로필 반영 후보 (저위험)
- 이벤트 기반 API 계약 검토어에 AsyncAPI 3.1.0과 CloudEvents envelope 조합 추가
- Node.js 테스트 도구 후보에 `node:test`의 process isolation, randomize, coverage, mocking, OpenTelemetry 계측 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-supplychain-ci-check — OSV-Scanner, SBOM, VEX, SLSA 항목을 백엔드 CI 리뷰 체크리스트로 대조
