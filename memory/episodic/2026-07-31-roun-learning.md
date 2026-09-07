---
date: 2026-07-31
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-31

## 오늘 배운 것
- 웹훅 서명에서 HTTP Message Signatures는 본문을 직접 덮지 않으므로, 본문 무결성이 필요하면 `Content-Digest` 또는 `Repr-Digest`를 서명 대상에 포함해야 합니다.
- REST 오류 응답은 RFC 9457의 `application/problem+json`을 우선 검토하고, 검증 오류는 확장 필드와 JSON Pointer로 위치를 표현할 수 있습니다.
- Valibot은 TypeScript 타입 추론과 런타임 검증, 모듈형 작은 번들 크기를 내세우므로 가벼운 DTO 경계 검증 후보입니다.
- npm 패키지 배포는 장기 토큰보다 OIDC 기반 Trusted Publishing을 우선 검토할 만하며, 현재 문서 기준 `npm` 11.5.1 이상과 Node.js 22.14.0 이상이 필요합니다.
- OpenTelemetry DB semantic convention 전환은 `OTEL_SEMCONV_STABILITY_OPT_IN=database/dup`로 구버전과 안정 버전을 병행 방출한 뒤 대시보드 회귀를 확인하는 방식이 안전합니다.
- CloudEvents와 OpenFeature는 각각 이벤트 형식과 피처 플래그 API의 벤더 중립 표준으로, 서비스 간 결합도를 낮추는 설계 후보입니다.

## 출처
- [RFC 9421: HTTP Message Signatures](https://www.rfc-editor.org/rfc/rfc9421.html)
- [RFC 9530: Digest Fields](https://datatracker.ietf.org/doc/rfc9530/)
- [RFC 9457: Problem Details for HTTP APIs](https://www.rfc-editor.org/rfc/rfc9457.html)
- [Valibot](https://valibot.dev/)
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- [CloudEvents](https://cloudevents.io/)
- [OpenTelemetry Database Migration](https://opentelemetry.io/docs/specs/semconv/non-normative/db-migration/)
- [OpenTelemetry DB Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/db/)
- [OpenFeature](https://openfeature.dev/)

## 위키화 후보
- `Digest Fields` — HTTP 본문과 표현 무결성을 `Content-Digest`, `Repr-Digest`로 분리해 서명과 결합하는 패턴
- `npm Trusted Publishing` — CI OIDC 기반 npm 배포와 장기 토큰 제거 기준

## 프로필 반영 후보 (저위험)
- TypeScript API 경계 검증 후보에 Valibot을 추가
- REST 검증 오류 응답 설계에 Problem Details 확장 필드와 JSON Pointer 표현을 추가

## 승인 필요 (고위험)
- 웹훅과 서버 간 API 서명 정책에 `Content-Digest` 또는 `Repr-Digest` 서명 포함을 필수 검토 항목으로 격상
- npm 배포에서 장기 토큰 기본 사용을 중단하고 CI OIDC Trusted Publishing 우선 정책으로 전환

## 신규 도구 후보 (에이전트/스킬)
- [skill] webhook-signature-review — HTTP Message Signatures와 digest 헤더의 서명 대상 포함 여부를 점검
- [skill] api-boundary-validation-review — Zod, Valibot 등 DTO 런타임 검증 라이브러리 선택 기준을 검토
