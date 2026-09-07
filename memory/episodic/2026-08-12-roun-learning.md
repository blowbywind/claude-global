---
date: 2026-08-12
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-12

## 오늘 배운 것
- Node.js `--permission`은 stable이지만 악성 코드 격리 장치가 아니라 신뢰한 코드의 의도치 않은 리소스 접근을 줄이는 안전장치로 봐야 합니다. 출처: [Node.js Permissions](https://nodejs.org/api/permissions.html)
- `--permission-audit`은 접근을 차단하지 않고 위반 내역을 `diagnostics_channel`로 내보내므로, enforce mode 적용 전 권한 목록 수집에 적합합니다. 출처: [Node.js Permissions](https://nodejs.org/api/permissions.html)
- PostgreSQL 18은 AIO를 추가했고 `io_method`, `io_combine_limit`, `io_max_combine_limit`로 제어하므로, 대량 조회·vacuum이 많은 API는 업그레이드 전후 I/O 벤치마크가 필요합니다. 출처: [PostgreSQL 18.0 Release Notes](https://www.postgresql.org/docs/release/18.0/)
- PostgreSQL 18은 연결 단계 시간, `SELECT ... NOWAIT` 잠금 실패 로그, 테이블별 vacuum/analyze 시간, backend별 I/O, `pg_stat_io` 바이트 지표를 추가했습니다. DB 관찰성 런북 갱신 가치가 있습니다. 출처: [PostgreSQL 18.0 Release Notes](https://www.postgresql.org/docs/release/18.0/)
- OpenTelemetry JS SDK 2.x는 최소 Node.js `^18.19.0 || >=20.6.0`, TypeScript `5.0.4`, ES2022 대상을 요구하므로 계측 패키지 업그레이드 전 런타임과 `tsconfig`를 확인해야 합니다. 출처: [OpenTelemetry JS SDK 2.0](https://opentelemetry.io/blog/2025/otel-js-sdk-2-0/)
- npm classic token은 2025-12-09 폐지되었고 `npm login`은 2시간 세션 토큰으로 바뀌었습니다. CI 배포는 OIDC trusted publishing 우선, 불가 시 granular token 회전으로 설계해야 합니다. 출처: [GitHub Changelog](https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/)

## 출처
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [PostgreSQL 18.0 Release Notes](https://www.postgresql.org/docs/release/18.0/)
- [OpenTelemetry JS SDK 2.0](https://opentelemetry.io/blog/2025/otel-js-sdk-2-0/)
- [OpenTelemetry Node.js Getting Started](https://opentelemetry.io/docs/languages/js/getting-started/nodejs/)
- [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers/)
- [npm classic tokens revoked](https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/)

## 위키화 후보
- PostgreSQL 18 관찰성 런북 — AIO, `log_lock_failures`, backend I/O, `pg_stat_io` bytes 중심.
- npm trusted publishing 운영 제약 — Node/npm CLI 조건, 지원 runner, provenance 조건, self-hosted runner 제한.

## 프로필 반영 후보 (저위험)
- PostgreSQL 업그레이드 검토 항목에 AIO 벤치마크와 관찰성 지표 갱신 추가.
- npm 릴리스 검토 항목에 classic token 폐지 이후 OIDC trusted publishing, granular token 회전, self-hosted runner 제한 추가.

## 승인 필요 (고위험)
- npm 배포 CI의 기본 인증 방식을 OIDC trusted publishing 우선으로 바꾸는 운영 규칙화.

## 신규 도구 후보 (에이전트/스킬)
- [skill] npm-release-auth-audit — npm 배포 워크플로의 OIDC 가능 여부, token 잔존, provenance 조건 점검.
- [skill] postgres-18-upgrade-observability — PostgreSQL 18 업그레이드 전 AIO 벤치마크와 관찰성 런북 갱신 자동화.
