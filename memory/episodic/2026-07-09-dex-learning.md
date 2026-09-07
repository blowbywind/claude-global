---
date: 2026-07-09
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-09

교차검증 완료. 주요 결과:

- `react.dev/blog/2025/02/14/react-19-security-update` → **404** (실제 보안 공시는 2025년 12월)
- CVE-2025-55182 CVE 번호 검증 불가 (소스 URL 오류)
- `nextjs.org/blog/next-16-beta` → **직접 확인** ✅
- `modelcontextprotocol.io/docs/concepts/security` → **404** + Confused Deputy는 위키에 이미 존재 (중복)
- TanStack Start / React Router v7 소스 URL: WebSearch 권한 미허용으로 미검증 → 버림

---

## 오늘 배운 것

- **Next.js 16 beta: `experimental.dynamicIO` → `experimental.cacheComponents` 이름 변경** — `dynamicIO`는 `cacheComponents`로 대체되고 PPR도 같은 프로그래밍 모델로 흡수됨. `experimental.ppr` 플래그 제거됨. (출처 직접 확인)
- **Next.js 16 신규 캐싱 API** — `revalidateTag(tag, cacheLifeProfile)` 두 번째 인수 필수화(SWR용), `updateTag()` Server Actions 전용 즉시반영 API, `refresh()` 비캐시 데이터 갱신 API 추가.
- **React 19 RSC RCE (2025년 12월)** — Server Components 전송 프로토콜에서 인증 없는 원격 코드 실행 취약점 실제 공시됨. 패치 버전: `19.0.1 / 19.1.2 / 19.2.1`. (**CVE-2025-55182 번호·소스 URL은 연구에서 오류 — 날짜 2월 표기, 실제는 12월 공시**이므로 폐기)
- **React Server Actions = 공개 HTTP POST 엔드포인트** — IDOR 방지·Zod 입력 검증 필수. 컴파일 추상화가 있어도 노출된 API임을 의식해야 함.
- **Next.js 16 Turbopack 기본 번들러 승격** — `next dev/build` 기본값 변경, webpack 유지 시 `--webpack` 명시 필요.

## 출처

- [Next.js 16 (beta)](https://nextjs.org/blog/next-16-beta)
- [React Blog — 2025년 12월 보안 공시 목록](https://react.dev/blog) (December 2025 보안 섹션)

## 위키화 후보

- `nextjs-16-caching-api.md` — `updateTag`·`refresh`·`revalidateTag` 프로파일 패턴 정리 노트 (기존 nextjs.md에서 분리할 만큼 분량 있음)

## 프로필 반영 후보 (저위험)

- Next.js 16 캐싱 API 패턴: Server Actions 내 `updateTag(tag)` = 읽기-후-쓰기 일관성, `revalidateTag(tag, 'max')` = SWR 용도 구분 기준으로 노트 태깅 시 활용

## 승인 필요 (고위험)

없음

## 신규 도구 후보 (에이전트/스킬)

없음

---

**폐기 목록 (검증 실패):**
- CVE-2025-55182 / react.dev 2025-02-14 URL — 404, 날짜 오류
- MCP Confused Deputy (modelcontextprotocol.io 출처) — URL 404 + 위키 중복
- TanStack Start / React Router v7 항목 — WebSearch 미허용으로 소스 미검증
