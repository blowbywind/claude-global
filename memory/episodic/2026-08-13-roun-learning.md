---
date: 2026-08-13
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-13

## 오늘 배운 것
- Fastify 프록시/미들웨어 플러그인 3종 CVE를 원문 대조로 확인: `@fastify/reply-from`(≤v12.6.1)·`@fastify/http-proxy`(≤v11.4.3)의 Connection 헤더 처리 순서 결함으로 `rewriteRequestHeaders`가 추가한 인증/보안 헤더가 업스트림 도달 전 제거되는 **CVE-2026-33805**, `Content-Type` 헤더 앞 공백 1개로 `schema.body.content` 검증이 통째로 스킵되는 **CVE-2026-33806**, `@fastify/express`(≤v4.0.4)가 중복 슬래시·세미콜론을 정규화하지 않아 경로기반 인증 미들웨어가 우회되는 **CVE-2026-33808**. 3건 모두 원문 확인 완료.
- PostgreSQL 18 공식 릴리스노트로 확인: `initdb` 기본값이 데이터 체크섬 활성화로 변경(`--no-data-checksums`로 비활성 가능), `pg_upgrade`는 소스·타깃 체크섬 설정 일치 요구, MD5 비밀번호 인증은 지원중단(경고 발생, 향후 제거 예정).
- PostgreSQL 18 공식 Docker 이미지는 기본 데이터 디렉터리가 버전 하위경로(`/var/lib/postgresql/18/docker`)로 변경되어, 태그만 17→18로 바꾸고 기존 볼륨 마운트 경로를 유지하면 기동 실패 가능 — 마운트 경로·볼륨명 함께 변경 필요(원문 대조 확인).
- OAuth/JWT 관련 IETF 초안 실재 확인: `draft-ietf-oauth-rfc7523bis-11`(JWT client assertion audience 취약점 대응, RFC7521/7522/7523/9126 갱신), `draft-ietf-oauth-rfc8725bis-09`(JWT 모범사례 개정, JSON Web Token Best Current Practices).
- GraphQL N+1 문제는 프레임워크 레벨에서 자동 해결되지 않으며 DataLoader/배칭 수동 적용이 여전히 필요(일반적으로 통용되는 사실, 참고자료로 재확인).

※ JWT 서명 알고리즘 EdDSA가 RS256 대비 "8배 빠르다"는 구체적 수치 주장은 낮은 신뢰도 블로그(jsoncraft.dev) 단일 출처이고 교차검증 안 되어 폐기.

## 출처
- [CVE-2026-33805: Fastify Information Disclosure Vulnerability](https://www.sentinelone.com/vulnerability-database/cve-2026-33805/)
- [Fastify CVE-2026-33806 Public PoC Exploit Disclosure](https://securityonline.info/fastify-cve-2026-33806-public-poc-exploit-disclosure/)
- [@fastify/express middleware authentication bypass — CVE-2026-33808](https://github.com/advisories/GHSA-6hw5-45gm-fj88)
- [PostgreSQL 18 Release Notes](https://www.postgresql.org/docs/18/release-18.html)
- [PostgreSQL 18 Docker Upgrade: Migrating From 17](https://www.nite07.com/en/posts/postgres-docker-18-migration/)
- [draft-ietf-oauth-rfc7523bis](https://datatracker.ietf.org/doc/draft-ietf-oauth-rfc7523bis/)
- [draft-ietf-oauth-rfc8725bis](https://datatracker.ietf.org/doc/draft-ietf-oauth-rfc8725bis/)
- [GraphQL Best Practices for Efficient APIs](https://daily.dev/blog/graphql-best-practices-for-efficient-apis/)

## 위키화 후보
- Fastify 프록시/미들웨어 CVE 3종(2026-33805/33806/33808) 개념노트 — 도입·리뷰 시 반복 참조 가치.
- PostgreSQL 18 마이그레이션 체크리스트(체크섬 기본값·MD5 폐기·Docker 데이터 경로 변경) 개념노트.

## 프로필 반영 후보 (저위험)
- Fastify 리뷰 점검어에 `@fastify/reply-from`/`@fastify/http-proxy`/`@fastify/express` 패치버전(CVE-2026-33805/33806/33808) 확인 추가.
- PostgreSQL 18 도입 검토 항목에 initdb 체크섬 기본값·MD5→SCRAM 전환·Docker 데이터 디렉터리 경로 변경 확인 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음 — 기존 "출처-대조-검증기" 계열 후보가 이미 등록되어 있어 중복 제안 생략)
