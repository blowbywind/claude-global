---
date: 2026-08-05
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-05

## 오늘 배운 것
- Node.js TypeScript type stripping은 안정 기능이지만 타입 검사를 하지 않고 `tsconfig.json`도 읽지 않으므로, 실행과 `tsc --noEmit` 검증을 분리해야 합니다. [출처](https://nodejs.org/api/typescript.html)
- Node.js Permission Model은 안정 기능이지만 악성 코드 샌드박스가 아니라 권한 축소 보조 장치입니다. `--env-file`, `--openssl-config`, 기존 파일 디스크립터, 일부 모듈 경계도 점검해야 합니다. [출처](https://nodejs.org/api/permissions.html)
- 2026-07-29 Node.js 26.5.1 보안 릴리스에서 HTTP/2와 Permission Model 관련 high 등급 취약점이 확인되어, 런타임 보안 패치 추적을 백엔드 점검 항목에 넣어야 합니다. [출처](https://nodejs.org/en/blog/release/v26.5.1)
- `node:ffi`는 실험 기능이고 포인터, 시그니처, 해제된 메모리 접근 오류로 프로세스 크래시나 메모리 손상이 가능하므로 기본 비활성이 맞습니다. `node:sqlite`는 release candidate라 핵심 저장소 채택 전 안정성 확인이 필요합니다. [출처](https://nodejs.org/en/blog/release/v26.1.0), [출처](https://nodejs.org/api/sqlite.html)
- Fastify 요청 지연 예제는 프로세스 로컬 상태를 쓰므로, 수평 확장 환경의 부트 게이트는 캐시나 DB 같은 공유 상태로 설계해야 합니다. [출처](https://fastify.dev/docs/latest/Guides/Delay-Accepting-Requests/)
- API 자원 고갈 방어는 rate limit만으로 부족합니다. 실행 시간, 메모리, 업로드 크기, 단일 요청 작업 수, 페이지 크기, 외부 서비스 지출 한도와 OpenAPI `format` 별도 검증을 함께 봐야 합니다. [출처](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/), [출처](https://spec.openapis.org/oas/v3.2.0.html)

## 출처
- [Node.js TypeScript 문서](https://nodejs.org/api/typescript.html)
- [Node.js Permission Model 문서](https://nodejs.org/api/permissions.html)
- [Node.js 26.5.1 보안 릴리스](https://nodejs.org/en/blog/release/v26.5.1)
- [Node.js 26.1.0 릴리스](https://nodejs.org/en/blog/release/v26.1.0)
- [Node.js SQLite 문서](https://nodejs.org/api/sqlite.html)
- [Fastify Delay Accepting Requests](https://fastify.dev/docs/latest/Guides/Delay-Accepting-Requests/)
- [OWASP API4:2023 Unrestricted Resource Consumption](https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/)
- [OpenAPI 3.2.0 Specification](https://spec.openapis.org/oas/v3.2.0.html)

## 위키화 후보
- Node.js TypeScript type stripping 운영 체크리스트 — 기존 `node.md` 보강 가치 있음.
- Fastify readiness gate 공유 상태 패턴 — 수평 확장 환경의 부트 게이트 설계 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- Node.js type stripping 사용 시 `tsc --noEmit` 분리 검증을 백엔드 리뷰 점검어에 추가.
- `node:ffi` 기본 비활성, `node:sqlite` release candidate 안정성 확인을 런타임 도입 검토어에 추가.

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] node-runtime-security-review — Node.js 릴리스, Permission Model, FFI, SQLite 안정성 변경을 백엔드 보안 체크리스트로 요약.
