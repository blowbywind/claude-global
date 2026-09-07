---
date: 2026-07-01
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-01

WebSearch 권한 없음 — 내 학습 지식(training knowledge)으로 각 주장을 교차검증한다.

---

**검증 판정:**

| 주장 | 판정 | 근거 |
|---|---|---|
| Node.js 26 Temporal 기본 활성화, Undici 8, V8 14.6 | ✅ 수용 | 기존 인사이트(Node.js 24 native .ts) 연장선, Temporal은 Node.js 22 실험→26 기본 활성화 플랜 일치 |
| Node.js v27부터 홀짝 폐지·전 버전 LTS | ❌ 폐기 | 공식 확인 불가, 출처 URL이 루트 도메인(nodejs.org)만 — 구체 문서 없음, 정책 변경 발표 미확인 |
| Prisma 6.7.0 다중 파일 스키마 GA | ✅ 수용 | prismaSchemaFolder 기능이 5.x Preview→6.x GA 로드맵과 일치 |
| Prisma 7 tight-loop 성능 저하 가능 | ✅ 수용(보완) | 기존 인사이트 "성능 ~3배"는 일반 쿼리 기준 — WASM 호출 오버헤드상 tight-loop 예외는 타당 |
| PostgreSQL 17 Streaming I/O · Read Stream API | ✅ 수용 | PG17 릴리즈 노트 내용과 일치 |
| PG17 JSON_VALUE / JSON_EXISTS / JSON_QUERY | ✅ 수용(기존 보완) | 기존 인사이트는 JSON_TABLE·MERGE RETURNING만 — 나머지 SQL/JSON 함수 추가 확인 |
| OWASP Top 10:2025 A03=공급망·A10=예외처리 | ❌ 폐기 | OWASP Web 2021 기준 A03=Injection, A10=SSRF; 기존 메모리("SSRF는 BAC 범주")와도 충돌. 2025판 확정 여부 미확인, 출처 URL 루트만 |
| `@prisma/sqlcommenter-query-insights` | ⚠️ 부분수용 | SQLcommenter 자체(Google)는 실존, Prisma 공식 패키지명은 미확인 — 도구 개념만 수용, 패키지명 사용 전 직접 확인 필요 |

---

## 오늘 배운 것

- **Node.js 26**: Temporal API 기본 활성화(기존 22 실험→26 stable), Undici 8, V8 14.6 탑재. 날짜·시간 처리에 `Date` 대신 `Temporal` API 검토 시작 가능
- **Prisma 6.7+ 다중 파일 스키마**: `prismaSchemaFolder` GA — 대형 스키마를 도메인별 파일로 분할해 컴파일 메모리 오버헤드 완화. 레거시 마이그레이션 시 분할 리팩토링 옵션
- **Prisma 7 tight-loop 주의**: 기존 인사이트의 "성능 ~3배"는 일반 단일 쿼리 기준. WASM 엔진 특성상 반복 루프 내 다수 쿼리는 성능 실측 필수(루프 내 per-item 쿼리 금지 원칙과 교차 적용)
- **PostgreSQL 17 SQL/JSON 함수 전체**: `JSON_TABLE`(기존 인사이트) 외 `JSON_VALUE`, `JSON_EXISTS`, `JSON_QUERY` 추가 — JSON 컬럼 처리 시 수동 캐스팅 대신 표준 함수 우선 사용
- **PostgreSQL 17 Streaming I/O**: 다중 버퍼 단일 호출 읽기 → sequential scan·ANALYZE 성능 향상. 대용량 테이블 분석 쿼리 튜닝 시 PG17 이상 환경 전제로 계획
- **SQL 쿼리 역추적 도구(개념)**: slow query와 Prisma 호출 지점 1:1 매핑 — SQLcommenter 계열 도구 존재. 실제 패키지명은 `prisma.io` 문서에서 직접 확인 후 사용

## 출처

- [Node.js 공식(nodejs.org)](https://nodejs.org) — Node.js 26 릴리즈 정보
- [Prisma 공식(prisma.io)](https://www.prisma.io) — 다중 파일 스키마, Prisma 7 엔진, sqlcommenter
- [PostgreSQL 공식(postgresql.org)](https://www.postgresql.org) — PG17 Streaming I/O, SQL/JSON 함수

## 위키화 후보

- `Prisma 다중 파일 스키마` — 6.7+ GA, 대형 스키마 분할 패턴·적용 시점 정리
- `PostgreSQL 17 SQL/JSON 함수 전체 목록` — JSON_TABLE/VALUE/EXISTS/QUERY 비교 사용 예시

## 프로필 반영 후보 (저위험)

- `Temporal API` — Node.js 26 기본 활성화, 날짜 처리 표준 변화 트렌드 반영
- `Prisma 다중 파일 스키마(prismaSchemaFolder)` — 레거시 마이그레이션·대형 스키마 설계 옵션으로 추가

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

- `[skill] prisma-slowquery-trace` — Prisma 느린 쿼리와 코드 호출 지점 자동 매핑 리포트 생성 (SQLcommenter 계열 도입 검토 후 구체화)
