---
date: 2026-08-07
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-07

## 오늘 배운 것
- `node:sqlite`는 현재 release candidate이며, `defensive` 기본값이 `true`로 바뀌어 일반 SQL로 DB 파일을 손상시키는 기능을 막는 하드닝 기준으로 볼 수 있습니다. [출처](https://nodejs.org/api/sqlite.html)
- `node:sqlite`의 `setAuthorizer()`는 스키마 변경·데이터 접근을 콜백으로 허용·거부할 수 있고, `SQLTagStore`는 준비된 문장을 LRU로 재사용하므로 로컬 저장소·테스트 DB의 정책 제어와 반복 쿼리 최적화에 유용합니다. [출처](https://nodejs.org/api/sqlite.html)
- RFC 9701은 OAuth 토큰 인트로스펙션 응답을 `application/token-introspection+jwt` JWT로 받을 수 있게 하며, 권한 서버가 리소스 서버를 식별·인증·인가하고 `aud`와 제공 데이터 범위를 판단해야 한다고 명시합니다. [출처](https://datatracker.ietf.org/doc/rfc9701/)
- FAPI 2.0 Security Profile은 고가치·민감 데이터 API에 맞춘 최종 보안 프로파일이며, PAR, PKCE `S256`, issuer 검증, MTLS 또는 DPoP 기반 sender-constrained access token을 핵심 요구사항으로 둡니다. [출처](https://openid.net/specs/fapi-security-profile-2_0-final.html)

## 출처
- [Node.js SQLite](https://nodejs.org/api/sqlite.html)
- [RFC 9701: JSON Web Token Response for OAuth Token Introspection](https://datatracker.ietf.org/doc/rfc9701/)
- [FAPI 2.0 Security Profile](https://openid.net/specs/fapi-security-profile-2_0-final.html)
- [OAuth 2.1 Authorization Framework Draft](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/)

## 위키화 후보
- RFC 9701 JWT Introspection Response: opaque token 리소스 서버의 JWT 인트로스펙션 응답 검증 모델
- FAPI 2.0 Security Profile: 고가치 API용 OAuth 보안 기준선

## 프로필 반영 후보 (저위험)
- `node:sqlite` 하드닝 점검어에 `defensive`, `setAuthorizer`, `SQLTagStore`, `limits` 추가
- OAuth 리소스 서버 점검어에 RFC 9701 `application/token-introspection+jwt`, `aud`, 리소스 서버 인증·인가·데이터 최소화 추가

## 승인 필요 (고위험)
- FAPI 2.0 Security Profile을 금융·개인정보 API의 기본 인증·인가 기준선으로 채택할지 승인 필요
- OAuth 2.1은 아직 초안이므로 draft 조항을 강제 행동규칙으로 고정할지 승인 필요

## 신규 도구 후보 (에이전트/스킬)
- [skill] oauth-security-review — OAuth 2.1, RFC 9700, RFC 9701, DPoP, FAPI 2.0 기준으로 API 인증·인가 설계를 점검하는 체크리스트
