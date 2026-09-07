---
date: 2026-07-04
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-04

교차검증 완료. 결과 정리:

**폐기 항목:**
- React Compiler(useMemo/useCallback) — `react.md`에 이미 동일 내용 등재, 출처 URL이 medium.com 도메인만으로 불특정
- Next.js Server Actions 보안 — `server.md`에 Zod 검증·개별 인가 패턴 완전 등재, 완전 중복

**출처 경고:** AWS/GCP/Akamai 전환 클레임의 출처 URL이 `amazon.com`(쇼핑몰 도메인)으로 기재 — `aws.amazon.com` 또는 공식 AWS 블로그여야 적합. AWS MemoryDB 전환은 기존 `valkey.md`에 이미 등재. GCP/Akamai 부분만 미검증 신규.

---

## 오늘 배운 것

- **Valkey 9.0 Atomic Slot Migration**: 클러스터 리샤딩 시 슬롯 단위 원자적 이동으로 서비스 무중단 재분배 가능. 기존 Redis는 리샤딩 중 해당 슬롯 요청 오류 발생. 출처: valkey.io (공식)
- **ES2025 Iterator Helpers**: `map()·filter()·take()·drop()·flatMap()` 등을 이터레이터에 직접 적용 — 중간 배열 생성 없는 지연(lazy) 파이프라인. 대용량 스트림 처리 메모리 절감 직결.
- **ES2025 Set 신규 메서드**: `union()·intersection()·difference()·symmetricDifference()·isSubsetOf()·isSupersetOf()` 표준 편입. 기존 전개연산자·filter 조합 대체.
- **ES2025 `Promise.try(fn)`**: 동기 함수도 비동기 함수도 동일하게 `.then()/.catch()` 체인으로 처리. `try { fn() } catch` 없이 에러 핸들링 통일 가능.
- **GCP Memorystore Valkey 전환**: GCP가 Memorystore for Redis를 Valkey 기반으로 전환 (AWS MemoryDB는 기존 위키 등재). 단, 리서치 출처 URL 오기재(amazon.com)로 GCP·Akamai 항목은 미검증 처리.

## 출처

- [Valkey 9.0 Release Notes](https://valkey.io/blog/) — Atomic Slot Migration
- [ECMAScript 2025 New Features (dev.to)](https://dev.to) — Iterator Helpers, Set 메서드
- [Promise.try() in ES2025 (saeloun.com)](https://saeloun.com) — Promise.try

## 위키화 후보

- `es2025.md` — Iterator Helpers + Set 메서드 + Promise.try() 3종 신규 표준을 한 노트로 정리 (기존 위키에 ES2025 전용 노트 없음)

## 프로필 반영 후보 (저위험)

- `valkey.md`에 **Atomic Slot Migration** 항목 추가 — 운영 중 무중단 리샤딩 패턴으로 기존 Hash 필드 TTL 섹션과 병기
- 위키 코드 예제에 **Iterator Helpers 지연 파이프라인** 패턴 추가 — 배열 변환 대신 `iterator.filter().map().take()` 관용구

## 승인 필요

_(없음)_

## 신규 도구 후보

_(없음)_
