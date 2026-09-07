---
date: 2026-06-18
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-06-18

## 오늘 배운 것

- **OAuth 2.1 + RFC 9700 (2025.01)**: PKCE가 모든 클라이언트에서 필수. Implicit Grant 폐기. 리프레시 토큰은 비밀번호 리셋·MFA 변경 시 자동 무효화되지 않아 탈취 후 장기 악용 가능 (Salesloft 사고: 2025년 초 700개 조직 피해). 권장 만료: access token 5~15분, refresh token 7~30일.
  > 출처: [OAuth Security Best Practices 2025](https://inboxagents.ai/blog/oauth-security-best-practices), [RFC 9700 해설](https://www.obsidiansecurity.com/blog/refresh-token-security-best-practices)

- **Refresh Token Rotation 핵심 함정**: 토큰 탈취 시 서비스가 정상 작동처럼 보여 감지가 어려움. 비밀번호 리셋/MFA 변경 이벤트에 해당 사용자 refresh_tokens 전체 revoke 로직이 없으면 구멍 발생. (hnedu-auth에 이미 revoke 구현 있음 — 유지 확인 필요)
  > 출처: [LoginRadius Token Rotation 가이드](https://www.loginradius.com/blog/identity/secure-refresh-token-rotation)

- **Prisma N+1 주요 패턴**: 루프 안에서 per-item 쿼리를 날리면 N+1 발생. 100건 기준 개별 쿼리 ~2s vs JOIN ~50ms. 해결: `include`로 한 번에 패치, 그보다 `select`(필드 지정)가 메모리 절약에 더 유리. `findUnique()`는 같은 tick 내 자동 배칭(dataloader).
  > 출처: [Prisma 공식 쿼리 최적화](https://www.prisma.io/docs/orm/prisma-client/queries/query-optimization-performance), [N+1 해설](https://furkanbaytekin.dev/blogs/n1-query-problem-fixing-it-with-sql-and-prisma-orm)

- **Prisma 대규모 함정**: 중첩 관계(30k~40k 건 + relations) 조회 시 메모리 4.2 GB 스파이크 사례 있음. GraphQL resolver 환경에서 더 심각. 깊은 relation은 raw query 또는 페이지네이션 병행 필수.
  > 출처: [Prisma at Large Scale (Medium)](https://medium.com/@dotsinspace/challenges-with-prisma-io-orm-82bfc54043d1)

- **Fastify v5 플러그인 스코프**: `register()`는 기본적으로 새 스코프 생성 → 데코레이터가 부모로 올라가지 않음. 공유 데코레이터(DB 커넥션, 인증 훅)는 반드시 `fastify-plugin`으로 래핑해야 글로벌 적용. v5.8.0부터 handler-level timeout 지원.
  > 출처: [Fastify 공식 플러그인 가이드](https://fastify.dev/docs/latest/Guides/Plugins-Guide/)

---

## 출처

- [OAuth Security Best Practices 2025 | InboxAgents](https://inboxagents.ai/blog/oauth-security-best-practices)
- [Refresh Token Security Best Practices | Obsidian Security](https://www.obsidiansecurity.com/blog/refresh-token-security-best-practices)
- [Refresh Token Rotation Explained | LoginRadius](https://www.loginradius.com/blog/identity/secure-refresh-token-rotation)
- [Prisma Query Optimization | 공식 문서](https://www.prisma.io/docs/orm/prisma-client/queries/query-optimization-performance)
- [N+1 Query Problem with Prisma | Furkan Baytekin](https://furkanbaytekin.dev/blogs/n1-query-problem-fixing-it-with-sql-and-prisma-orm)
- [Fastify Plugins Guide | 공식 문서](https://fastify.dev/docs/latest/Guides/Plugins-Guide/)

---

## 위키화 후보

- **Prisma N+1 해결 패턴** — `include` vs `select` 비교, auto-batching, 대규모 relation 메모리 함정 정리
- **OAuth 2.1 리프레시 토큰 보안 (RFC 9700)** — PKCE 필수화, 만료 권장값, revoke 트리거 체크리스트

---

## 프로필 반영 후보 (저위험)

- Prisma 관계 조회는 `select`(필드 지정) > `include`(전체) 우선, 루프 내 per-item 쿼리 금지
- Refresh token은 비밀번호 리셋·MFA 변경 이벤트 발생 시 해당 사용자 전체 revoke 필수 (RFC 9700)

---

## 승인 필요 (고위험)

_(없음)_
