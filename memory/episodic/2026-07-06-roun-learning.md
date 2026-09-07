---
date: 2026-07-06
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-06

위키 grep 완료. `.obsidian/plugins` 바이너리 외 관련 노트 없음 — 아래 항목 모두 신규.

교차검증 결과:
- **이미 프로필에 있는 항목 제거**: Node.js 24 TS 스트리핑+enum 제약([2026-06-21·24]), Prisma PgBouncer+directUrl([2026-06-19]), BullMQ FlowProducer 패턴([2026-06-21]), BOLA/IDOR([2026-06-20])
- **공식 문서 출처(prisma.io, drizzle.team, docs.bullmq.io, owasp.org) 항목 유지**
- **dev.to 단일 출처(es-toolkit)**: 라이브러리 실존은 확인(GitHub: toss/es-toolkit), 단 blog post 출처라 낮은 신뢰도로 표기

---

## 오늘 배운 것

- **Prisma + Next.js HMR 커넥션 풀 중복 방지**: 로컬 개발 시 HMR이 파일 변경마다 모듈을 재실행해 `PrismaClient` 인스턴스가 누적 생성됨. `globalThis`에 클라이언트를 캐싱하는 싱글톤 패턴으로 차단 (`if (!global.prisma) global.prisma = new PrismaClient()`). — [Prisma 공식 문서](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)

- **Drizzle ORM + PgBouncer 트랜잭션 모드**: Drizzle은 `{ prepare: false }` 옵션을 드라이버 설정에 추가해야 prepared statement 오류를 방지. Prisma의 `directUrl` 방식과 별개의 Drizzle 전용 설정임. — [Drizzle 공식 문서](https://orm.drizzle.team/docs/get-started-postgresql)

- **BullMQ 스탈 잡(stalled job) 원인**: CPU 집약적 작업이 이벤트 루프를 블로킹하면 lock 갱신 타이밍을 놓쳐 `lock loss` 발생 → 작업 자동 재시도(stalled). 대책: ① 작업을 잘게 분할, ② FlowProducer로 DAG 분산처리, ③ `lockDuration` 값을 실제 처리 시간보다 넉넉하게 설정. — [BullMQ Going to Production](https://docs.bullmq.io/guide/going-to-production)

- **BullMQ Redis 필수 설정**: `maxmemory-policy: noeviction` (캐시 축출로 인한 작업 유실 방지) + AOF 지속성 활성화 필수. 기본값(`allkeys-lru`)으로 두면 메모리 부족 시 큐 데이터가 축출됨. — [BullMQ Connections](https://docs.bullmq.io/guide/connections)

- **es-toolkit (Lodash 대안)**: 트리 쉐이킹 지원·네이티브 TS 타입 내장·번들 크기 최소화를 내세운 경량 유틸 라이브러리. Toss 오픈소스(`toss/es-toolkit`). 단, 아래 출처는 dev.to 블로그 포스트라 도입 전 프로젝트 적합성 직접 확인 필요. — [dev.to 소개 글](https://dev.to/voluntadpear/es-toolkit-a-modern-lodash-alternative-5e6e)

---

## 출처

- [Prisma — Next.js PrismaClient 관행](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices)
- [Drizzle ORM — PostgreSQL 시작하기](https://orm.drizzle.team/docs/get-started-postgresql)
- [BullMQ — Going to Production](https://docs.bullmq.io/guide/going-to-production)
- [BullMQ — Connections](https://docs.bullmq.io/guide/connections)
- [dev.to — es-toolkit 소개](https://dev.to/voluntadpear/es-toolkit-a-modern-lodash-alternative-5e6e)

---

## 위키화 후보

- `BullMQ 프로덕션 설정` — 스탈 잡 원인·lock duration·Redis noeviction+AOF 구성을 한 노트로 정리 (기존 BullMQ FlowProducer 노트와 병합 또는 분리)

---

## 프로필 반영 후보 (저위험)

- `Drizzle ORM + PgBouncer: { prepare: false }` — 기존 [2026-06-19] Prisma 항목에 Drizzle 전용 설정 병기
- `BullMQ Redis maxmemory-policy: noeviction + AOF 필수` — BullMQ 큐 운용 체크리스트 항목으로 추가

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

_(없음 — 현재 스택에 즉시 필요한 자동화 대상 없음)_
