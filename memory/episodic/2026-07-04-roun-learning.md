---
date: 2026-07-04
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-04

**교차검증 결과 요약:**
- 모듈러 모놀리스 → 위키 `backend-architecture-patterns-2026.md` 이미 존재 (dex, 2026-06-18) **제외**
- Prisma 7 Rust 엔진 제거 → 프로필 2026-06-20 이미 존재 **제외**
- Node.js 24 enum/namespace → 프로필 2026-06-24 이미 존재 **제외**
- WebSearch 권한 부재 → 실시간 URL 검증 불가, 출처 신뢰도 + 훈련 지식으로 대체 검증

---

## 오늘 배운 것

- **PostgreSQL 17 JSON_TABLE + TOAST 2KB 임계값**: JSON 컬럼 값이 ~2KB 초과 시 PostgreSQL이 TOAST 외부 저장소로 분리. JSON_TABLE로 해당 행을 조회할 때마다 TOAST 역직렬화가 발생해 대량 스캔 시 성능 저하. 설계 단계에서 2KB 이하로 JSON 컬럼을 분할하거나, 자주 조회하는 필드는 별도 컬럼으로 정규화 권장.
- **Drizzle ORM + Zod 조합 (서버리스·엣지)**: 번들 크기·콜드스타트가 제약인 신규 서버리스 프로젝트에서 Drizzle(SQL-first ORM) + Zod(스키마 검증)를 조합해 타입 안전성 확보. 기존 위키의 Drizzle 노트(`concepts/drizzle.md`)에서 Zod 연동 패턴은 미기재.
- **SSRF 방어 구현 상세화** (기존 2026-06-20 인사이트 보완): 외부 요청 API에 URL allow-list 적용 + `169.254.169.254`(AWS IMDSv1), `10.x`, `172.16.x`, `192.168.x` 등 내부·메타데이터 IP 대역 원천 차단. allow-list 없이 차단 목록만으로는 우회 가능.
- **BOLA 인가 검증 레이어 확장** (기존 2026-06-20 인사이트 보완): 비즈니스 로직 레이어 단독 검증은 로직 우회 시 취약. 데이터 접근 레이어(Repository/Query 레벨)에서도 소유권 조건을 쿼리에 직접 포함(`WHERE owner_id = :userId`)해 이중 방어선 구성.

## 출처

- [Evan Jones — PostgreSQL TOAST & JSON performance](https://evanjones.ca) *(Evan Jones: PG 기여자·DB 연구자, 훈련 지식으로 TOAST 2KB 임계값 기술 사실 확인)*
- [Drizzle ORM + Zod on Encore](https://encore.dev)
- [SSRF Prevention — Invicti](https://invicti.com) *(Invicti = 구 Netsparker, 웹 앱 보안 스캐너 회사)*
- [BOLA/OWASP API Security — Pentiq](https://pentiq.com) *(덜 권위적, 기술 내용은 OWASP API Security Top 10과 일치)*

## 위키화 후보

- `postgresql-toast-json-performance.md` — JSON 컬럼 TOAST 임계값·조회 비용·정규화 권고를 정리한 DB 설계 참조 노트

## 프로필 반영 후보 (저위험)

- `PostgreSQL JSON_TABLE 조회 시 2KB 초과 컬럼은 TOAST 역직렬화 비용 발생 — 핵심 필드 별도 컬럼 정규화 고려` (기존 2026-06-24 인사이트 보완)
- `Drizzle ORM + Zod 조합 — 서버리스·엣지 신규 프로젝트 ORM 선택지로 추가`

## 승인 필요 (고위험)

*(없음)*

## 신규 도구 후보 (에이전트/스킬)

*(없음)*
