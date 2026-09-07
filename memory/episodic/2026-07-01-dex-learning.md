---
date: 2026-07-01
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-01

교차검증 완료. 아래 항목들을 기존 위키와 대조했다:

- **Prisma v7 WASM**: `2026-06-21-roun-prisma-v7-typescript-엔진` 노트로 이미 위키화 → **중복, 제거**
- **React Compiler**: `2026-06-26-dex-react.md`에 silent-failures 포함 이미 위키화 → **중복, 제거**
- **TypeScript 타입 스트리핑**: `wiki/concepts/node.md`에 Node.js 22 `--experimental-strip-types` 이미 문서화 → **중복, 제거**
- **Vite 6.0 Environment API**: 위키에 없음, vite.dev 공식 기능으로 훈련 데이터로 교차확인 가능 → **유지**
- **Vitest 3.0 인라인 워크스페이스**: 위키에 없음, vitest.dev 공식으로 확인 가능 → **유지**
- **Vibe Coding 보안 리스크**: `2026-06-21-kiel-vibe.md`는 PM 워크플로 관점. 보안 취약점 각도는 신규이나 IBM URL이 도메인 수준(특정 페이지 없음) → **원칙 수준만 수용**
- **Valkey 9.0 40% / Valkey Admin 1.0**: `2026-06-30-roun-valkey.md` 이미 있음, 40% 수치·Admin 1.0 도구는 특정 URL 없어 검증 불가 → **수치·도구명 제거, 일반 추세만 유지**
- **대형 PR 병목**: IBM 도메인만, 내용이 일반적 관찰 수준 → **제거**

---

## 오늘 배운 것

- **Vite 6.0 Environment API**: 단일 dev 서버 내에서 `client` / `ssr` / `edge` 런타임을 독립 모듈 환경으로 정의. 프로덕션 환경과 개발 서버 간 동작 차이를 구조적으로 줄여 SSR 디버깅 함정 감소. — [vite.dev 공식](https://vite.dev)
- **Vitest 3.0 인라인 워크스페이스**: 별도 `vitest.workspace.ts` 없이 `vite.config.ts`의 `workspace` 필드로 멀티 프로젝트 테스트 구성 가능. 리포터 전면 재작성으로 터미널 깜빡임 제거. — [vitest.dev 공식](https://vitest.dev)
- **Vibe Coding 보안 함정 (기존 vibe-pm 노트와 구별)**: AI 생성 코드에서 OWASP Top 10 취약점 주입·하드코딩 크리덴셜이 자주 발생. vibe-pm 워크플로(PM 프로토타입→엔지니어 인계)와 별개로, **생성 코드 보안 리뷰를 반드시 분리**해야 한다는 운영 원칙이 부각 중. — [IBM Developer 일반 가이드](https://www.ibm.com) *(특정 페이지 URL 미제공, 원칙 수준 적용)*
- **Valkey 지속 성능 개선 추세**: Redis 대안으로 Valkey가 파이프라인 워크로드 처리량을 꾸준히 향상 중 (구체 수치는 특정 출처 URL 미검증으로 수치 채택 보류). BullMQ 연동·마이그레이션 정보는 기존 `valkey-vs-redis` 노트 참조. — [valkey.io](https://valkey.io)

## 출처

- [Vite 공식 문서](https://vite.dev)
- [Vitest 공식 문서](https://vitest.dev)
- [IBM Developer (도메인)](https://www.ibm.com)

## 위키화 후보

- `vite-environment-api` — Vite 6.0 Environment API 개념, SSR/edge 모듈 환경 분리 패턴 정리 노트
- `vitest-3-workspace` — Vitest 3.0 인라인 워크스페이스·리포터 개편 요약 (멀티 프로젝트 테스트 구성 패턴)

## 프로필 반영 후보 (저위험)

- `Vite Environment API` — SSR 디버깅 시 환경 분리 도구로 참조 용어 등록
- `Vibe Coding 보안 분리 원칙` — vibe-pm 노트에 "보안 리뷰 별도 필수" 항목 추가

## 승인 필요 (고위험)

*(없음)*

## 신규 도구 후보 (에이전트/스킬)

*(없음 — Vite/Vitest는 기존 개발 워크플로 내 도구이며 별도 에이전트화 불필요)*

---

> **버린 항목 요약**: Prisma v7·React Compiler·TypeScript stripping = 위키 중복. Valkey 40%·Admin 1.0 = 특정 URL 없어 수치 미채택. 대형 PR 병목 = 출처 불충분.
