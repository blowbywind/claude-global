---
date: 2026-08-11
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-11

## 오늘 배운 것
- Node.js Permission Model은 v22.13.0/v23.5.0부터 stable이지만 악성 코드 샌드박스가 아니므로, 백엔드 하드닝에서는 OS 격리, 컨테이너, seccomp/AppArmor와 함께 봐야 합니다. 출처: [Node.js 권한 문서](https://nodejs.org/api/permissions.html)
- `--permission-audit`은 접근을 차단하지 않고 위반을 diagnostics channel로 기록하므로, `--permission` 강제 적용 전 권한 목록을 수집하는 전환 단계에 적합합니다. 출처: [Node.js 권한 문서](https://nodejs.org/api/permissions.html)
- Node.js v26.1.0의 `--test-randomize`, `--test-random-seed`는 테스트 파일과 큐에 쌓인 테스트 순서를 섞어 공유 상태나 실행 순서 의존 버그를 찾는 데 쓸 수 있습니다. 출처: [Node.js CLI 문서](https://nodejs.org/api/cli.html)
- PostgreSQL 18은 `uuidv7()`, virtual generated column 기본값, B-tree skip scan, `pg_upgrade` optimizer statistics 보존을 제공하지만 extended statistics는 보존하지 않으므로 업그레이드 후 계산 컬럼 선언과 통계 재생성, 쿼리 플랜 재측정이 필요합니다. 출처: [PostgreSQL 18 릴리스 노트](https://www.postgresql.org/docs/current/release-18.html)
- GraphQL 2025년 9월 사양은 OneOf input object, Schema Coordinates, document 설명, 확장된 deprecation 지원을 포함하므로 GraphQL 계약 검증기와 스키마 변경 리뷰 항목에 반영할 가치가 있습니다. 출처: [GraphQL 2025년 9월 사양 발표](https://graphql.org/blog/2025-09-08-september-edition/)
- npm classic token은 2025년 12월 9일 폐기되었고, `npm login`은 2시간 세션 토큰을 발급합니다. npm CLI 11.15.0부터 staged publishing과 install source allowlist가 제공되므로 CI 배포는 OIDC trusted publishing과 staged approval 중심으로 재설계해야 합니다. 출처: [npm classic token 폐기](https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/), [npm staged publishing](https://github.blog/changelog/2026-05-22-staged-publishing-and-new-install-time-controls-for-npm/)

## 출처
- [Node.js 권한 문서](https://nodejs.org/api/permissions.html)
- [Node.js CLI 문서](https://nodejs.org/api/cli.html)
- [PostgreSQL 18 릴리스 노트](https://www.postgresql.org/docs/current/release-18.html)
- [GraphQL 2025년 9월 사양 발표](https://graphql.org/blog/2025-09-08-september-edition/)
- [npm classic token 폐기](https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/)
- [npm staged publishing](https://github.blog/changelog/2026-05-22-staged-publishing-and-new-install-time-controls-for-npm/)

## 위키화 후보
- GraphQL 2025년 9월 사양 변경점 — OneOf, Schema Coordinates, document 설명, deprecation 확장 정리
- Node.js test runner 순서 무작위화 — `--test-randomize`, `--test-random-seed` 기반 순서 의존 테스트 탐지

## 프로필 반영 후보 (저위험)
- Node.js 백엔드 하드닝 점검어에 `--permission-audit` 기반 권한 감사 전환 절차 추가
- PostgreSQL 18 업그레이드 런북에 extended statistics 재생성과 skip scan 쿼리 플랜 재측정 추가

## 승인 필요 (고위험)
- 운영 Node.js 서버에 `--permission` enforce mode를 기본 적용할지 결정
- npm 패키지 배포 정책을 OIDC trusted publishing + staged publishing 중심으로 강제할지 결정

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-upgrade-audit — Node.js와 PostgreSQL 업그레이드 시 권한, 테스트 순서, 통계, 쿼리 플랜 체크리스트 자동화
- [agent] npm-release-security-reviewer — npm 배포 파이프라인의 OIDC, staged publishing, install source allowlist 정책 검토
