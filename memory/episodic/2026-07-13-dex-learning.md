---
date: 2026-07-13
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-13

## 오늘 배운 것
- Fastify async 핸들러에서 `undefined` 반환 시 응답이 멈추므로 `reply.send()` 명시 필수, 화살표 함수는 `this`가 인스턴스에 바인딩되지 않아 `function` 선언 필요, decorator는 참조타입 공유 위험이 있어 `onRequest`에서 요청별 할당 필요, `onError`는 읽기전용이라 응답 변경엔 `setErrorHandler()` 사용
- Docker Compose 보안사고 원인은 취약 베이스이미지·root 실행·소켓노출·하드코딩 시크릿·과도권한 순으로 비중이 크며, 시크릿은 환경변수 대신 네이티브 secrets(런타임 마운트) 권장(환경변수는 `docker inspect`·프로세스목록에 노출됨)
- Node.js 24부터 플래그 없이 `.ts` 파일 직접 실행 가능(타입 스트리핑 기본화), 테스트 러너가 서브테스트 완료를 자동 대기하며, OpenSSL 3.5 엄격화가 주요 함정
- Prisma는 쿼리별 JOIN 전략 선택 가능, 대량 데이터는 커서 기반 페이지네이션 권장, `PrismaClient`는 프로세스당 1개만 생성해 재사용해야 커넥션 풀 고갈 방지

※ "Claude Agent SDK 0.2.116 헤더 교체·Opus 4.1 폐지" 항목은 검증에서 제외했습니다. 근거: ① 출처(releasebot.io)가 비공식 3rd-party 정리 사이트로 원문 재확인이 필요했으나 이번 세션에서 WebFetch/WebSearch 권한이 없어 재검증 불가 ② 기존 위키 `ai-리서치-결과-검증-프로토콜`에 따르면 이 환경에서 Anthropic 모델은 버전숫자 없이 코드네임(Opus/Sonnet/Haiku/Fable)만 사용하도록 확립되어 있는데, "claude-opus-4-1-20250805"/"Opus 4.8" 표기는 `리서치-환각-패턴-목록`의 "명명 규칙 불일치" 패턴과 정확히 일치 → 신뢰도 0으로 판정, 폐기.

## 출처
- [Fastify Dos and Don'ts](https://dev.to/aurangzaibramzan/the-essential-dos-and-donts-of-fastify-unlocking-your-apis-potential-1o3f)
- [Common Docker Security Mistakes](https://cloudzy.com/blog/common-docker-security-mistakes/)
- [Node.js 24 새 기능](https://blog.logrocket.com/node-js-24-new/)
- [Prisma 6 성능·유연성](https://www.prisma.io/blog/prisma-6-better-performance-more-flexibility-and-type-safe-sql)

## 위키화 후보
- Docker Compose 시크릿 노출벡터(env var vs 네이티브 secrets) — 기존 `docker-bind-mount-inode.md`와 별개 주제라 신규 노트 가치 있음

## 프로필 반영 후보 (저위험)
- Fastify `setErrorHandler()` vs `onError`(읽기전용) 구분 원칙
- Prisma 커서 기반 페이지네이션 + `PrismaClient` 프로세스당 1개 재사용 원칙

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
