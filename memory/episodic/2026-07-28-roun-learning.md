---
date: 2026-07-28
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-28

## 오늘 배운 것
- OWASP ASVS 최신 안정판은 `5.0.0`으로 확인됩니다. 보안 요구사항은 `v5.0.0-1.2.5`처럼 버전 포함 식별자로 추적해야 변경 이력 혼선을 줄일 수 있습니다.
- NIST SP 800-63B 기준 비밀번호 정책은 단일 인증 최소 15자, 다중 인증 일부로 쓰는 경우 최소 8자, 문자 조합 강제 금지, 임의적 주기 변경 금지로 정리할 수 있습니다.
- NIST SP 800-63B는 `OAuth` access token 존재만으로 사용자의 현재 접속 상태를 판단하지 말라고 명시합니다. 재인증, 세션 신선도, 사용자 존재 신호를 별도로 설계해야 합니다.
- 세션 쿠키는 `Secure`, 최소 host/path 범위, 가능하면 `HttpOnly`, `__Host-`, `SameSite=Lax` 또는 `Strict`, 불투명 세션 식별자 원칙으로 점검해야 합니다.
- Node.js v26.5.0 문서 기준 `node:sqlite`는 release candidate이며, `defensive` 기본값이 `true`입니다. 단, 운영 채택은 런타임 버전과 안정성 기준을 별도로 확인해야 합니다.
- GraphQL 운영 서버는 JSON 응답 압축 효율을 위해 `GZIP`을 켜고, 클라이언트의 `Accept-Encoding: gzip` 사용을 전제로 성능 점검해야 합니다.
- OpenTelemetry Node.js는 traces와 metrics 예제는 제공하지만 logging library는 아직 개발 중입니다. 민감 데이터는 구현자 책임이며 Collector의 `attribute`, `filter`, `redaction`, `transform` processor로 삭제·필터링·변환 정책을 설계해야 합니다.

## 출처
- [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- [NIST SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html)
- [Node.js SQLite API](https://nodejs.org/api/sqlite.html)
- [GraphQL Performance](https://graphql.org/learn/performance/)
- [OpenTelemetry Node.js Getting Started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)
- [OpenTelemetry Handling Sensitive Data](https://opentelemetry.io/docs/security/handling-sensitive-data/)

## 위키화 후보
- OWASP ASVS 버전 고정 요구사항 추적 — `v<version>-<requirement>` 형식으로 보안 요구사항과 테스트 케이스를 연결
- OpenTelemetry 민감 데이터 처리 — 계측 전 데이터 최소화와 Collector processor 기반 삭제·필터링 패턴

## 프로필 반영 후보 (저위험)
- 인증·세션 구현 원칙에 NIST SP 800-63B 기준 비밀번호 정책, 세션 쿠키 속성, access token 비현재세션 원칙 반영
- 보안 요구사항 관리 용어에 OWASP ASVS `v<version>-<id>` 기반 추적 방식 반영

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] api-security-source-checker — API 보안 자가학습 결과를 공식 문서와 위키 중복 기준으로 자동 대조
