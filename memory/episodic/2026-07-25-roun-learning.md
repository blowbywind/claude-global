---
date: 2026-07-25
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-25

## 오늘 배운 것
- GraphQL 파일 업로드는 `signed upload URL`로 스토리지 직접 업로드를 분리하는 방식을 기본값으로 둡니다. 직접 업로드를 유지할 때만 upload 변수 단일 참조, 스트리밍, 스트림 종료, 크기·파일명·MIME·내용 검증을 필수 체크합니다. 출처: [GraphQL File Uploads](https://graphql.org/learn/file-uploads/)
- GraphQL 방어는 `depth limit`만으로 부족하며 `list depth`, `breadth`, `alias`, `batch`, `query complexity` 비용 예산을 함께 둬야 합니다. `rate limiting`도 단순 요청 수보다 필드 비용을 비즈니스 로직에서 반영하는 편이 적합합니다. 출처: [GraphQL Security](https://graphql.org/learn/security/)
- 자사 앱 전용 GraphQL은 production introspection 비활성화가 일반적이지만, 단독 보안책이 아니라 `trusted documents`, 인증·인가, 제한값, timeout과 함께 써야 합니다. 출처: [GraphQL Introspection](https://graphql.org/learn/introspection/)
- 큰 목록 필드는 connection 기반 cursor pagination을 기본으로 설계합니다. offset 방식은 대용량에서 성능·보안 단점과 새 레코드 삽입 시 페이지 모호성이 있습니다. 출처: [GraphQL Pagination](https://graphql.org/learn/pagination/)
- GraphQL schema의 nullable 기본값은 장애·필드별 권한 차이를 부분 응답으로 흡수하기 위한 설계입니다. `non-null`은 실패 시 부모 필드 null 전파를 감수할 때만 씁니다. 출처: [GraphQL Schema Design](https://graphql.org/learn/schema-design/)
- Fastify는 예측 가능한 scope 접근을 위해 생태계 plugin, custom plugin, decorator, hook, service 순서로 로딩하는 구조를 권장합니다. 출처: [Fastify Getting Started](https://fastify.dev/docs/latest/Guides/Getting-Started/)

## 출처
- [Handling File Uploads in GraphQL](https://graphql.org/learn/file-uploads/)
- [GraphQL Security](https://graphql.org/learn/security/)
- [GraphQL Introspection](https://graphql.org/learn/introspection/)
- [GraphQL Pagination](https://graphql.org/learn/pagination/)
- [GraphQL Schema Design](https://graphql.org/learn/schema-design/)
- [Fastify Getting Started](https://fastify.dev/docs/latest/Guides/Getting-Started/)

## 위키화 후보
- GraphQL 파일 업로드 보안 패턴 — `signed upload URL` 우선, multipart upload 예외 조건 정리
- GraphQL connection pagination — opaque cursor, edge/node 구조, offset 회피 기준

## 프로필 반영 후보 (저위험)
- GraphQL 업로드 구현 원칙에 `signed upload URL 우선, 직접 multipart upload는 예외 허용` 추가
- GraphQL API 리뷰 점검어에 `breadth limit`, `alias limit`, `list depth limit`, `query cost budget` 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] graphql-api-hardening-review — 업로드, demand control, introspection, pagination, nullability 체크리스트 기반 GraphQL API 리뷰 자동화
