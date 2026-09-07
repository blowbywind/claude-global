---
date: 2026-08-14
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-14

## 오늘 배운 것
- OAuth RAR의 `authorization_details`는 `scope`만으로 표현하기 어려운 결제 금액, 파일 경로, 리소스 위치, 동작 같은 세밀한 권한 요구를 JSON 객체 배열로 표현한다. 출처: [RFC 9396](https://www.rfc-editor.org/rfc/rfc9396.html)
- OAuth Step-Up은 리소스 서버가 `WWW-Authenticate`에서 `insufficient_user_authentication`과 `acr_values` 또는 `max_age`를 보내 더 강하거나 최근 인증을 요구하는 표준 흐름이다. 출처: [RFC 9470](https://www.rfc-editor.org/rfc/rfc9470.html)
- JWT access token을 직접 검증하는 리소스 서버는 RFC 9068 기준으로 `typ`, `iss`, `aud`, 서명, `exp`를 검증하고, `aud`가 자신을 가리키지 않으면 거부해야 한다. 출처: [RFC 9068](https://www.rfc-editor.org/rfc/rfc9068.html)
- JAR은 authorization request를 JWT로 보호해 무결성, 출처 인증, 기밀성을 보강하고, PAR은 요청 본문을 authorization server에 먼저 POST한 뒤 받은 `request_uri`만 브라우저 경유 요청에 사용한다. 출처: [RFC 9101](https://www.rfc-editor.org/rfc/rfc9101.html), [RFC 9126](https://www.rfc-editor.org/rfc/rfc9126.html)
- Cedar는 `principal`, `action`, `resource`, `context` 중심의 정책 언어로, 인가 로직을 비즈니스 코드 밖으로 분리하고 schema로 정책을 검증하는 후보이다. 출처: [Cedar Policy Language Reference Guide](https://docs.cedarpolicy.com/)

## 출처
- [RFC 9396: OAuth 2.0 Rich Authorization Requests](https://www.rfc-editor.org/rfc/rfc9396.html)
- [RFC 9470: OAuth 2.0 Step Up Authentication Challenge Protocol](https://www.rfc-editor.org/rfc/rfc9470.html)
- [RFC 9068: JSON Web Token Profile for OAuth 2.0 Access Tokens](https://www.rfc-editor.org/rfc/rfc9068.html)
- [RFC 9101: JWT-Secured Authorization Request](https://www.rfc-editor.org/rfc/rfc9101.html)
- [RFC 9126: OAuth 2.0 Pushed Authorization Requests](https://www.rfc-editor.org/rfc/rfc9126.html)
- [Cedar Policy Language Reference Guide](https://docs.cedarpolicy.com/)

## 위키화 후보
- `OAuth Rich Authorization Requests` — `authorization_details` 기반 세밀 권한 요청 설계 노트.
- `Cedar policy language` — 정책 기반 인가와 코드 분리 설계 노트.

## 프로필 반영 후보 (저위험)
- OAuth 리소스 서버 점검어에 `RFC 9068 typ/aud 검증`과 `RFC 9470 Step-Up challenge` 추가.
- 고가치 API 인가 설계 용어에 `RAR + PAR/JAR` 조합 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] oauth-api-security-review — JWT access token, Step-Up, RAR, JAR, PAR 적용 여부를 반복 점검하는 리뷰 체크리스트.
