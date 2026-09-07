---
date: 2026-07-07
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-07

교차검증 결과를 종합합니다.

**검증 통과:** RSC Page Shell 블로킹(logrocket + 공식 Next.js 문서 일치), ESLint v9 `eslint-env` 제거(eslint.org 공식 문서), ESLint v9 모노레포 경로 해석(dev.to/eslint = ESLint 공식 계정), Node.js 타입 스트리핑 Enum 미지원(nodejs.org 공식), `erasableSyntaxOnly`(TypeScript 5.8 릴리즈 노트 일치), INP Layout Thrashing(web.dev 공식).

**탈락:** AEO — `wiki-concepts-aeo.md`에 이미 상세 문서화됨. 중복.

**의심 항목:** antigravity가 `vite.md`·`backend-architecture-patterns-2026.md`를 업데이트했다고 주장하나, 이번 리서치 주제(RSC/ESLint/INP)와 직접 연관성 불명확. 해당 업데이트 내용은 별도 검증 필요.

---

## 오늘 배운 것

- **RSC Page Shell 블로킹 핏폴**: Next.js 15+ Page 컴포넌트 최상위에서 느린 `await`는 전체 페이지 Shell 렌더링을 차단. 해법: 데이터 페칭을 리프 컴포넌트로 내리고 `<Suspense>`로 감싸 스트리밍 보장. 기존 `rsc.md`의 "병렬 페칭" 패턴과 보완 관계.
- **ESLint v9 Flat Config — `eslint-env` 주석 폐기**: `/* eslint-env browser */` 등 인라인 환경 선언이 flat config에서 파싱 오류 유발. `eslint.config.js`의 `globals` 키로 마이그레이션 필수.
- **ESLint v9 Flat Config — 모노레포 경로 해석 기준 변경**: CWD가 아닌 설정 파일 위치 기준으로 경로 탐색 → 패키지별 독립 설정 파일 또는 `--flag` CLI 경로 명시 필요.
- **Node.js 네이티브 타입 스트리핑 한계**: `--experimental-strip-types`는 Enum·Namespace·Constructor parameter properties처럼 코드 생성이 필요한 TS 문법 지원 불가. 기존 `node.md` 보완 사항.
- **`erasableSyntaxOnly` tsconfig 옵션 (TS 5.8+)**: Node.js 네이티브 실행 환경 호환성 보장을 위해 런타임 코드 생성 TS 문법을 빌드 타임에 차단. 2026-07-02 드래프트(`type-stripping-limitations`)와 일치하므로 해당 드래프트 승격 시 통합 권장.
- **INP + Layout Thrashing**: 단일 이벤트 핸들러 내 DOM 읽기/쓰기 반복 → 다중 레이아웃 재계산 → INP 악화. `requestAnimationFrame`으로 업데이트 배치 처리. 기존 `inp-interaction-to-next-paint.md` 내용 보강 필요(현재 본문 손상 상태 확인됨).

## 출처

- [Next.js 15 & React 19 Common Pitfalls (LogRocket)](https://blog.logrocket.com/next-js-15-react-19-common-pitfalls/)
- [ESLint v9 Configuration Files (공식)](https://eslint.org/docs/latest/use/configure/configuration-files)
- [Migrating to ESLint v9 Flat Config: Monorepo Best Practices (ESLint 공식 dev.to)](https://dev.to/eslint/migrating-to-eslint-v9-flat-config-monorepo-best-practices)
- [Node.js Docs — TypeScript: Experimental Strip Types](https://nodejs.org/api/typescript.html#experimental-strip-types)
- [INP 최적화 가이드 (web.dev)](https://web.dev/articles/inp)

## 위키화 후보

- `eslint-v9-flat-config.md` — `/* eslint-env */` 폐기·globals 전환·모노레포 경로 이슈 통합 노트 (기존 eslint 노트 없음)
- `inp-interaction-to-next-paint.md` — 기존 노트 본문 손상 상태이므로 Layout Thrashing 내용 포함 재작성 필요

## 프로필 반영 후보 (저위험)

- `erasableSyntaxOnly` — TS 5.8+ 네이티브 Node 실행 환경 호환 옵션. 드래프트 2026-07-02와 병합 시 정식 용어로 등록
- Layout Thrashing — INP 최적화 맥락의 안티패턴 용어. `inp` 노트 재작성 시 glossary 항목 추가

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

_(없음)_
