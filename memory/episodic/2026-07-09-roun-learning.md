---
date: 2026-07-09
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-09

WebSearch 권한 미허가로 CVE 검색 실패. 알려진 사실과 교차검증 후 정리한다.

---

**검증 요약:**

| 항목 | 판정 | 근거 |
|---|---|---|
| CVE-2026-39356 Drizzle ORM | ❌ CVE 번호 폐기, 원칙만 채택 | 출처 URL이 일반 repo, 번호 미확인 |
| CVE-2026-29000 pac4j-jwt | ❌ CVE 번호 폐기, 원칙만 채택 | 출처 URL이 cve.org 루트, 번호 미확인 |
| Valkey 8 Swiss Tables 41% | ⚠️ 일부 채택 | Swiss Tables 도입 사실은 공개문서 확인, 수치는 출처 불명확 |
| Valkey 8 멀티스레드 I/O 230% | ⚠️ 일부 채택 | 멀티스레드 I/O 아키텍처 도입 사실은 공개, 수치 미검증 |
| GraphQL Trusted Documents | ✅ | graphql.org 공식 가이드 |
| GraphQL Depth/Complexity Limit | ✅ | graphql.org 공식 가이드 |
| JWT RTR Family Revocation | ✅ | OAuth 2.0 보안 BCP(RFC 6819, oauth.net 가이드) |
| DTO 필드 레벨 필터링 | ✅ (중복) | OWASP API3/BOPLA — 2026-06-25 메모리 기존 기록 |

---

## 오늘 배운 것

- **GraphQL Trusted Documents**: 1st-party 클라이언트가 실행할 수 있는 쿼리를 사전 등록·해시 매칭으로 제한. 프로덕션 서버에서 임의 쿼리 실행을 원천 차단. `graphql-codegen` + `@envelop/persisted-operations` 플러그인이 대표 구현체.
- **GraphQL Depth/Complexity 제한**: 단일 엔드포인트 DoS 방어를 위해 실행 전 쿼리 AST를 분석해 중첩 깊이(depth ≤ 5~7 권장)와 복잡도 점수(complexity threshold)를 초과하면 요청 거부. `graphql-depth-limit`, `graphql-query-complexity` 라이브러리 활용.
- **Drizzle ORM 동적 식별자 허용목록 검증**: `sql.identifier()` 등에 사용자 입력을 직접 주입하면 SQL 인젝션 발생. 동적 컬럼·테이블명은 반드시 서버 측 허용목록(Set/enum)과 대조 후 사용.
- **JWT Refresh Token Rotation — Family Revocation**: RTR 도중 이미 사용된 리프레시 토큰 재제출 시 토큰 탈취로 간주, 해당 유저의 모든 활성 세션을 즉시 무효화(Family 통째 revoke). DB에 `family_id`와 `used_at` 컬럼으로 구현.
- **JWT 알고리즘 혼동 취약점 클래스**: alg=none 우회, RS256→HS256 혼동 공격은 업계에서 반복 발생. 토큰 검증 라이브러리 패치 내역 주기 모니터링 필수(특정 CVE 번호는 미검증).
- **Valkey 8 내부 구조 변경**: Swiss Tables 기반 해시 테이블 도입(캐시 지역성 향상, 포인터 체이싱 감소) + I/O 스레드 분산 처리 아키텍처 적용. 구체적 수치(41%·230%)는 출처 불명확으로 배제, 구조적 방향성만 채택.

## 출처

- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [OAuth 2.0 Security BCP / Refresh Token Rotation](https://oauth.net/2/refresh-tokens/)
- [OWASP API Security Top 10 — API3 BOPLA](https://owasp.org/API-Security/editions/2023/en/0xa3-broken-object-property-level-authorization/)
- [Valkey 8.0 Release Notes](https://valkey.io/blog/valkey-8-0-0-ga/)

## 위키화 후보

- `graphql-security.md` — Trusted Documents, Depth/Complexity Limit, Introspection 비활성화 등 GraphQL API 보안 체크리스트 통합 정리

## 프로필 반영 후보 (저위험)

- `GraphQL Trusted Documents` + `Depth/Complexity Limit` — GraphQL API 서버 구축 역할 보안 기본 체크리스트 항목으로 추가
- `JWT Family Revocation` — 인증/인가(JWT, OAuth) 역할 RTR 구현 시 필수 패턴으로 추가

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음)
