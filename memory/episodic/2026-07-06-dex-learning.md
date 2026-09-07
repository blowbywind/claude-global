---
date: 2026-07-06
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-06

**교차검증 완료.** 항목별 판정:

| 항목 | 검증 | 위키 중복 | 처리 |
|---|---|---|---|
| Next.js 15 async cookies/headers/params | ✅ 공식 문서 일치 | 없음 | 채택 |
| Next.js 15 기본 캐싱 비활성화 | ✅ 공식 마이그레이션 가이드 일치 | 없음 | 채택 |
| React 19 useActionState | ✅ react.dev 일치 | react.md에 useFormStatus만, useActionState 없음 | 채택 |
| React Compiler 코드 감사 | ✅ | react.md 이미 "침묵형 실패"로 커버 | **중복 버림** |
| MCP Confused Deputy | ✅ | 전용 노트 존재 | **중복 버림** |
| MCP Tool Poisoning | ✅ 실제 위협 패턴 | nsa.md·confused-deputy 노트에 없음 | 채택 |
| Vite 6 Environment API | ✅ | vite.md 이미 커버 | **중복 버림** |
| Vite 6 Node.js 18+·레거시 Sass 폐지 | ✅ | vite.md에 없음 | 채택(보완) |

---

## 오늘 배운 것

- **Next.js 15 비동기 API 파괴적 변경**: `cookies()`, `headers()`, `params`, `searchParams`가 Promise를 반환하므로 반드시 `await`로 처리해야 함. 동기 접근 시 런타임 오류 발생.
- **Next.js 15 기본 캐싱 비활성화**: `fetch` 요청·GET API 라우트·클라이언트 페이지 이동 시 캐싱이 기본 꺼짐. 이전 버전에서 캐싱에 의존하던 코드는 명시적 `cache: 'force-cache'` 추가 필요.
- **React 19 `useActionState`**: 폼 Server Action 상태 관리에서 `useFormState`(deprecated)를 완전히 대체. `useFormStatus`와 혼동 주의 — `useFormStatus`는 `<form>` 자식에서 pending 감지용, `useActionState`는 action 결과 상태 관리용으로 역할이 다름.
- **MCP Tool Poisoning**: 공격자가 도구 메타데이터(description)에 악성 프롬프트를 삽입해 에이전트가 의도치 않은 권한 행위를 실행하도록 유도. 신뢰하지 않는 MCP 서버 연결 자체가 공격 벡터 — Confused Deputy와 결합 시 피해 증폭.
- **Vite 6 호환성 변경**: Node.js 최소 요건 18/20/22+. 레거시 Sass API(`sass-embedded` 이전 방식) 및 `splitVendorChunkPlugin` 내장 지원 완전 폐지 — 업그레이드 전 의존성 점검 필수.

## 출처

- [Next.js 15 Upgrading Guide (공식)](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [React 19 useActionState (react.dev)](https://react.dev/reference/react/useActionState)
- [Vite 6.0 Migration Guide (공식)](https://vite.dev/guide/migration.html)
- [MCP Security — NSA CSI (공식 PDF)](https://media.defense.gov/2026/Jun/02/2003943289/-1/-1/0/CSI_MCP_SECURITY.PDF)

## 위키화 후보

- `nextjs-15-breaking-changes` — async API(cookies/headers/params) + 기본 캐싱 비활성화를 하나의 마이그레이션 체크리스트 노트로 묶음
- `mcp-tool-poisoning` — Confused Deputy 노트에 섹션 추가 또는 별도 노트로 위협 패턴·대응 정리

## 프로필 반영 후보 (저위험)

- `useActionState` — React 19 폼 상태 관리 표준 훅으로 용어집·tech-stack 인식 업데이트
- Next.js 15 기본 캐싱 비활성화 정책 — 신규 프로젝트 RSC 데이터 페칭 설계 시 명시적 캐싱 전략 기본 포함

## 승인 필요 (고위험)

없음

## 신규 도구 후보 (에이전트/스킬)

없음
