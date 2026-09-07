---
date: 2026-07-26
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-26

## 오늘 배운 것
- `draft-ietf-oauth-rfc8725bis-07`은 RFC 8725를 대체하려는 활성 초안이지만 아직 확정 RFC가 아니므로 JWT 체크리스트에는 “추적 대상”으로만 반영한다. 출처: [IETF Datatracker](https://datatracker.ietf.org/doc/draft-ietf-oauth-rfc8725bis/)
- DPoP는 공개 클라이언트의 access token을 키에 묶고, refresh token도 공개 클라이언트에 발급될 때 같은 키 바인딩 검증을 요구한다. 출처: [RFC 9449](https://datatracker.ietf.org/doc/html/rfc9449)
- Node.js Permission Model은 `--permission` 기준으로 파일, 네트워크, 자식 프로세스, 워커 접근을 제한하지만, 악성 코드 샌드박스가 아니라 신뢰 코드의 경계 테스트용 안전장치로 봐야 한다. 출처: [Node.js Permissions](https://nodejs.org/api/permissions.html)
- Prisma ORM 7 계열은 `prisma bootstrap`, savepoint 기반 nested transaction rollback, Rust-free Client 기본값 전환이 확인되므로 신규 프로젝트 초기화와 트랜잭션 테스트 기준을 재검토할 가치가 있다. 출처: [Prisma Changelog](https://www.prisma.io/changelog)
- Docker 운영 체크리스트에는 비루트 사용자, user namespace, rootless mode, Docker Secrets를 기본 보안 점검 항목으로 넣을 수 있다. 출처: [OWASP Docker Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)
- 시크릿 관리는 중앙화, 표준화, 세밀한 접근제어, 자동화된 회전을 기본 원칙으로 두고 엔지니어 전원 접근을 금지해야 한다. 출처: [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

## 출처
- [JSON Web Token Best Current Practices](https://datatracker.ietf.org/doc/draft-ietf-oauth-rfc8725bis/)
- [RFC 9449 - OAuth 2.0 Demonstrating Proof of Possession](https://datatracker.ietf.org/doc/html/rfc9449)
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Prisma ORM v7.7.0: the new prisma bootstrap command](https://www.prisma.io/changelog/2026-04-07)
- [Prisma ORM v7.5.0: nested transaction savepoints and Studio updates](https://www.prisma.io/changelog/2026-03-11)
- [Prisma ORM v7.0.0: Rust-free Prisma Client becomes the default](https://www.prisma.io/changelog/2025-11-19)
- [OWASP Docker Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)
- [OWASP Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)

## 위키화 후보
- `JWT BCP 8725bis 추적` — 확정 전까지 RFC 8725 대체 후보와 신규 위협 항목만 별도 추적
- `Secrets Management 운영 체크리스트` — 중앙화, 최소권한, 자동 회전, 감사 기준 정리

## 프로필 반영 후보 (저위험)
- DPoP 구현 검토 용어에 `sender-constrained token`, `jkt`, `ath`, `jti`, `nonce` 검증 추가
- Prisma 7 트랜잭션 테스트 용어에 savepoint 기반 nested transaction rollback 추가

## 승인 필요 (고위험)
- Docker 배포 기본 점검 규칙에 rootless mode, user namespace, 비루트 사용자 실행, Docker Secrets 사용을 필수 항목으로 승격
- 신규 Prisma Postgres 프로젝트 초기화 루틴에 `prisma bootstrap` 채택 여부 검토

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-security-source-check — OAuth, JWT, Node, Docker 보안 주장 출처 검증과 체크리스트 중복 점검 자동화
