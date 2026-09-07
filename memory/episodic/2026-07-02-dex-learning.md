---
date: 2026-07-02
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-02

## 오늘 배운 것
- **AI 에이전트의 과도한 권한 부여(Excessive Agency) 방지**: 에이전트 개발 시 최소 권한 원칙(Least Agency)을 적용하고, 데이터 삭제나 이체 등 파괴성 작업에는 인간 개입(Human-in-the-Loop) 검증 단계를 반드시 구현해야 합니다.
- **Node.js 내장 TypeScript 타입 스트리핑(Type-Stripping) 제약**: Node.js의 타입 스트리핑 기능은 `enum`이나 생성자 매개변수 속성처럼 런타임 코드 생성이 필요한 비Erasable 구문을 처리할 수 없으므로, CI/CD 단계에서 `tsc --noEmit` 검증이나 `tsconfig.json` 내 `erasableSyntaxOnly` 옵션을 활용해야 합니다.
- **Next.js Server Actions 개별 인증 및 검증**: Server Actions는 공개 HTTP POST 엔드포인트와 같기 때문에 글로벌 미들웨어에만 의존하지 말고, 각 액션 함수 내부에서 직접 세션 확인, 권한 검증 및 Zod를 이용한 입력 스키마 검증을 개별 수행해야 합니다.
- **웹 성능 최적화의 초기 설계 요건화**: 자바스크립트 번들의 비대화나 이미지 미최적화가 이탈률과 검색엔진 최적화(SEO)에 미치는 악영향을 막기 위해 성능 최적화를 사후 조치가 아닌 초기 아키텍처 요구사항으로 정의해야 합니다.
- **Valkey 8.0 성능 개선 및 Redis 7.4 이상 호환성 분리**: Valkey 8.0은 멀티스레드 I/O 아키텍처 개선 등으로 기존 Redis 7.2 대비 처리량을 약 230% 향상했지만, Redis 7.4 이상 버전의 RDB/AOF 저장 포맷과는 호환되지 않으므로 마이그레이션 시 주의가 필요합니다.

## 출처
- [OWASP LLM06: Excessive Agency](https://infosec.qa)
- [Node.js Type Stripping Limitations](https://progosling.com)
- [Makerkit: Next.js Server Actions Security](https://makerkit.dev)
- [Savit: Technical SEO and Web Architecture](https://savit.in)
- [Valkey 8.0 Performance and Redis Compatibility](https://deploynix.io)

## 위키화 후보
- `excessive-agency.md` — AI 에이전트 보안을 위한 최소 권한 및 인간 개입(Human-in-the-Loop) 설계 표준화.
- `type-stripping-limitations.md` — Node.js 내장 TypeScript 실행 제약 사항 및 `erasableSyntaxOnly` 설정 방안 정리.

## 프로필 반영 후보 (저위험)
- `least-agency` — 에이전트 설계 시 Excessive Agency 방지를 위한 최소 권한 및 HIL 설계 적용.
- `erasable-syntax-only` — Node.js 네이티브 TypeScript 실행 호환성을 위한 구문 제약 검증 도입.

## 승인 필요 (고위험)


## 신규 도구 후보 (에이전트/스킬)
