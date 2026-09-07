---
date: 2026-07-11
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-11

## 오늘 배운 것
- Node.js는 v24가 LTS(운영 권장), v26은 Current이므로 백엔드 런타임은 v24 LTS 유지가 원칙이며, 22/24/26 전 라인에 HIGH 등급 보안 패치가 공지돼 정기 패치 점검이 필요합니다.
- OAuth 2.1은 PKCE 전 클라이언트 필수, redirect URI 정확(exact) 매칭, implicit grant·password grant 폐지, bearer token을 URL query에 넣는 방식 금지를 명시합니다. RFC 9700(OAuth 2.0 보안 모범수칙)도 동일 기조로 기존 RFC의 취약한 운용방식을 폐기 대상으로 규정합니다. → JWT/OAuth 인증·인가 구현 시 반영 대상.
- OWASP API1(BOLA)·API3(BOPLA)는 각각 object ID 조작(path/query/header/payload)과 REST 과다 속성 노출·GraphQL crafted request를 지적합니다. 인가 로직에 object 단위 권한검사 + 입출력 필드 화이트리스트를 명시적으로 두는 설계가 필요합니다.
- PostgreSQL 18: virtual generated columns가 기본값(쿼리 시점 계산), INSERT/UPDATE/DELETE/MERGE의 RETURNING에서 OLD/NEW 값 동시 조회 가능, uuidv7()로 타임스탬프 정렬형 UUID 생성(인덱싱·캐싱 유리), OAuth 2.0 인증(SSO 연동) 지원, md5 password 인증은 deprecated. → 신규 스키마 설계·마이그레이션·PK 전략에 반영 가치 있음.
- OpenAPI 3.2.0은 HTTP API를 표준 인터페이스로 기술해 소스코드/네트워크 검사 없이 서비스 기능 파악을 가능케 함 — API 명세 문서화 표준으로 재확인.

## 출처
- [Node.js Previous Releases](https://nodejs.org/en/about/previous-releases)
- [Node.js June 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/june-2026-security-releases)
- [OAuth 2.1](https://oauth.net/2.1/)
- [RFC 9700](https://datatracker.ietf.org/doc/rfc9700/)
- [OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)
- [OWASP API3:2023 BOPLA](https://owasp.org/API-Security/editions/2023/en/0xa3-broken-object-property-level-authorization/)
- [OpenAPI Specification 3.2.0](https://spec.openapis.org/oas/v3.2.0.html)
- [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/) (WebFetch로 uuidv7·OAuth 2.0·virtual generated columns 원문 직접 대조 완료)

## 위키화 후보
- PostgreSQL 18 신규 기능 노트(uuidv7·OLD/NEW RETURNING·virtual generated columns·OAuth 인증) — DB 스키마 설계 참조용
- OWASP API Top 10 인가 취약점 노트(BOLA/BOPLA) — 인증/인가 코딩 시 체크리스트용

## 프로필 반영 후보 (저위험)
- OAuth 2.1 / RFC 9700 기준(PKCE 필수, redirect URI exact match, implicit/password grant 제거)을 인증/인가 구현 원칙 용어로 반영

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
