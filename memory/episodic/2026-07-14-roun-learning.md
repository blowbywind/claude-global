---
date: 2026-07-14
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-14

## 오늘 배운 것
- 2026-07-14 기준 `Node.js v20`은 `EOL`이고, `v24`와 `v22`가 `LTS`, `v26`은 `Current`입니다. 프로덕션 기준은 `Active LTS` 또는 `Maintenance LTS`만 사용하는 쪽으로 잡아야 합니다.
- `RateLimit-Policy`와 `RateLimit` 헤더는 quota policy와 현재 한도를 표현하려는 표준화 흐름이지만, 현재 문서는 2026-05-23 발행된 Internet-Draft라서 RFC처럼 고정하면 안 됩니다.
- API 자원 고갈 방어는 요청 횟수 제한만으로 부족합니다. 실행 시간, 메모리, 파일 디스크립터, 프로세스 수, 업로드 크기, 단일 요청 작업 수, 페이지 크기, 외부 서비스 비용 한도를 함께 제한해야 합니다.
- GraphQL 업로드와 배치 요청은 단일 엔드포인트 rate limit를 우회해 메모리 고갈을 만들 수 있으므로, resolver 실행 전 operation count와 payload 크기 제한이 필요합니다.
- 이벤트 기반 API 계약은 `AsyncAPI 3.0.0`로 프로토콜 독립적으로 문서화할 수 있고, sender 문서를 receiver 문서로 자동 변환하는 방식은 권장되지 않습니다.
- 이벤트 envelope는 `CloudEvents`로 표준화할 가치가 있습니다. 공통 이벤트 데이터 형식, 다국어 SDK, CloudEvents SQL v1의 query/filter 표준화 근거가 확인됩니다.

## 출처
- [Node.js Releases](https://nodejs.org/en/about/previous-releases)
- [RateLimit header fields for HTTP](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-ratelimit-headers)
- [OWASP API4:2023 Unrestricted Resource Consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/)
- [AsyncAPI Specification 3.0.0](https://www.asyncapi.com/docs/reference/specification/v3.0.0)
- [CloudEvents](https://cloudevents.io/)

## 위키화 후보
- `api-resource-budgeting` — rate limit를 넘어 실행 시간·메모리·작업 수·비용 한도까지 포함하는 API 자원 예산 설계
- `event-contract-asyncapi-cloudevents` — AsyncAPI 계약과 CloudEvents envelope를 분리해 쓰는 이벤트 기반 API 설계

## 프로필 반영 후보 (저위험)
- API rate limiting 설계 용어에 `RateLimit-Policy`, `RateLimit`를 추가하되, 현재는 Internet-Draft 추적 대상으로 명시
- API 자원 고갈 방어 용어에 operation count, payload size, page size, provider spending limit 포함

## 승인 필요 (고위험)
- 백엔드 기본 Node.js 기준을 `Node 20 고정`에서 `현재 Active LTS 또는 Maintenance LTS`로 변경
- GraphQL 업로드·배치 API 구현 시 resolver 전 operation count와 payload 크기 제한을 필수 보안 규칙으로 추가

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-resource-budget-review — OpenAPI·GraphQL API에서 rate limit 외 자원 한도 누락을 점검
- [skill] event-contract-review — AsyncAPI·CloudEvents 계약의 sender/receiver 방향성과 envelope 일관성 검토
