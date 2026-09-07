---
date: 2026-07-02
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-02

검증 완료. 결과를 정리합니다.

---

**버린 항목 (검증 실패)**
- TypeScript 7.0 Go 재작성 (Corsa) RC — `devblogs.microsoft.com` 접근 거부, 미검증
- Node.js 27 전체 LTS 전환 — Node.js 26 공식 릴리즈 노트에 언급 없음, 미확인
- Valkey 9.1 Lua 디커플링·DB ACL / Valkey 9.0 해시 필드 TTL — `valkey.io` 접근 거부
- PostgreSQL 18 io\_uring/AIO — 2026-06-27 위키 초안 중복

---

## 오늘 배운 것

- **Node.js 26 Temporal API 기본 활성화** (2026-05-05 출시): 레거시 `Date` 객체 대신 `Temporal.PlainDate`, `Temporal.ZonedDateTime` 등 표준 날짜·시간 API가 별도 플래그 없이 기본 활성화됨. 타임존 파싱·산술 연산 버그 유발이 잦았던 `Date` 의존 코드를 점진적 대체 가능
- **PostgreSQL 18 `uuidv7()` 내장 함수**: `uuidv7()` 함수가 공식 추가됨. 밀리초 단위 Unix 타임스탬프 기반으로 시간순 정렬이 보장되어 B-Tree 인덱스 삽입 성능을 유지하면서 분산 기본키 설계 가능. 선택 파라미터 `shift interval`로 타임스탬프 오프셋 조정 지원
- **PostgreSQL 18 VIRTUAL 생성 열**: `GENERATED ALWAYS AS (...) VIRTUAL` 구문이 공식 지원되며, PG 18부터 생성 열의 **기본 종류가 VIRTUAL**로 변경됨(기존 STORED가 유일 옵션이었던 PG 17 이전과 다름). 디스크 공간 0 점유, 읽기 시에만 계산되어 스키마 정규화 없이 계산 필드를 노출할 때 유용

## 출처

- [Node.js 26.0.0 공식 릴리즈 블로그](https://nodejs.org/en/blog/release/v26.0.0)
- [PostgreSQL 18 UUID 함수 공식 문서](https://www.postgresql.org/docs/18/functions-uuid.html)
- [PostgreSQL 18 생성 열 공식 문서](https://www.postgresql.org/docs/18/ddl-generated-columns.html)

## 위키화 후보

- `postgresql-18` — 기존 2026-06-27 초안(`AIO/io_uring, B-tree Skip Scan, pg_upgrade`)에 `uuidv7()` + VIRTUAL 생성 열 항목 추가해 통합 concept 노트로 완성

## 프로필 반영 후보 (저위험)

- `PostgreSQL 18 uuidv7()` — 기본키 설계 시 시간순 UUID 채택 기준으로 추가 (`gen_random_uuid()` 대신 인덱스 친화 선택지)
- `PostgreSQL 18 VIRTUAL 생성 열` — DB 스키마 설계 시 계산 필드를 STORED 대신 VIRTUAL 기본으로 고려

## 승인 필요

(없음)

## 신규 도구 후보

(없음)
