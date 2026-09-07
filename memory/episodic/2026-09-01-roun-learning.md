---
date: 2026-09-01
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-09-01

## 오늘 배운 것
- Node.js 24.7+의 `crypto.argon2()`는 `argon2id`와 `nonce`를 지원한다. Node 요구 최소는 8바이트지만, 예제와 실무 기준은 `randomBytes(16)` 이상을 기본 점검어로 두는 편이 안전하다.
- HTTP/1.1 keep-alive 재사용 연결은 응답 매핑이 요청 순서에 의존한다. 요청별 연결 격리가 필요한 백엔드 호출은 별도 `Agent`, keep-alive 비활성화, `agent: false`를 검토한다.
- `node:sqlite`는 prepared statement와 `SQLTagStore`의 파라미터 바인딩을 지원한다. 임베디드 저장소 코드에서도 문자열 조립 SQL은 리뷰 차단 대상으로 본다.
- Express 5 마이그레이션은 공식 codemod만으로 끝내지 말고, 제거 메서드와 `path-to-regexp` v8 라우팅 예약 문자 회귀 테스트를 함께 둔다.
- OpenTelemetry JS 2.x는 Node.js `^18.19.0 || >=20.6.0`, TypeScript 5.0.4 이상을 요구한다. Jaeger client 계측은 신규 설계에서 OpenTelemetry API, SDK, instrumentation, OTLP exporter 기준으로 대체한다.
- Drizzle v1 전환은 `journal.json` 제거와 SQL, snapshot 분리, migration commutativity 검증이 핵심이다. 팀 작업 저장소는 `drizzle-kit check`를 CI 점검어로 둔다.

## 출처
- [Node.js Crypto](https://nodejs.org/api/crypto.html)
- [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
- [Node.js HTTP](https://nodejs.org/api/http.html)
- [Node.js SQLite](https://nodejs.org/api/sqlite.html)
- [Express 5 Migration Guide](https://expressjs.com/en/guide/migrating-5/)
- [Express 5 Routing Guide](https://expressjs.com/en/5x/guide/routing/)
- [OpenTelemetry JS Upgrade to 2.x](https://github.com/open-telemetry/opentelemetry-js/blob/main/doc/upgrade-to-2.x.md)
- [OpenTelemetry Migration](https://opentelemetry.io/docs/compatibility/migration/)
- [Drizzle Upgrade to v1](https://orm.drizzle.team/docs/upgrade-v1)
- [Drizzle Kit Check](https://orm.drizzle.team/docs/drizzle-kit-check)
- [Better Auth 1.7](https://better-auth.com/blog/1-7)
- [Better Auth JWT Plugin](https://better-auth.com/docs/plugins/jwt)

## 위키화 후보
- Node HTTP keep-alive response ordering — 요청별 연결 격리와 `agent: false` 사용 기준
- Better Auth JWT plugin boundary — 세션 쿠키와 외부 서비스용 JWKS 검증 JWT 경계

## 프로필 반영 후보 (저위험)
- Node.js 비밀번호 해시 리뷰 점검어에 `crypto.argon2('argon2id')`, 고유 무작위 `nonce`, 워크팩터 기록을 추가
- 관찰성 마이그레이션 점검어에 OpenTelemetry JS 2.x 런타임 기준선과 Jaeger client 제거 확인을 추가

## 승인 필요 (고위험)
- Better Auth 1.7을 자체 인증 서버 후보로 채택하는 결정은 인증, 인가, 세션 정책 변경이므로 별도 승인과 위협 모델 검토 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-upgrade-fact-check — Node, Express, OpenTelemetry, ORM 릴리스 노트의 최소 런타임, breaking change, 보안 점검어를 원출처 기준으로 검증
