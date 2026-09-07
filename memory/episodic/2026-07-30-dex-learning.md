---
date: 2026-07-30
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-30

임시 검증 파일(`.verify-tmp/`)은 승인 없이 삭제할 수 없어 남아 있습니다(위키 콘텐츠 디렉터리 밖이라 grep 영향 없음). 필요 시 사용자 승인 후 정리하겠습니다.

원문 5개 출처 전부 실제 fetch로 대조한 결과, 핵심 주장은 모두 확인되었고 pnpm 관련 2개 항목만 세부 수정했습니다(minimumReleaseAge 기본값 귀속 버전이 문서상 "v11"로 명시되어 있어 정정, "권장 7일"은 문서에 없는 과장 표현이라 "옵션 설정 가능"으로 완화).

## 오늘 배운 것
- Vitest 4.0 정식 출시: Browser Mode 안정화(stable), Visual Regression 테스트, Playwright Trace 지원 추가. Breaking change 포함 — 기존 위키 노트(`vitest.md`, 2026-07-01, Vitest 3.0 인라인 워크스페이스 다룸)는 갱신 필요.
- Vitest 3→4 마이그레이션 시 `workspace` → `projects` 필드 전환, coverage V8 AST remapping, pool/isolation 기본값 변경, deprecated API 제거가 breaking change 핵심(단, 출처가 공식 문서가 아닌 서드파티 블로그 qaskills.sh임을 감안해 참고용으로 표시).
- Biome 2026 로드맵: TypeScript 컴파일러(tsc) 없이 동작하는 type-aware lint 룰(업계 최초 표방), Vue/Svelte/Astro 파싱·포매팅·린팅 실험적 지원(이미 일부 제공), GritQL 기반 플러그인 엔진 확장, YAML 파서 안정화 예정 — 공식 블로그로 확인.
- pnpm `minimumReleaseAge`: 공식 문서 기준 최신 버전(v11)에서 기본값 1440분(1일)으로 신규 배포 패키지 설치를 지연 차단. `0`으로 opt-out 가능, `10080`(7일) 옵션 설정 가능(단, "권장값"이라는 표현은 문서에 없어 배제).
- pnpm GitHub 이슈 #10361(open, 실존 확인): `minimumReleaseAgeExclude` 예외를 삭제한 뒤 `pnpm install --fix-lockfile` 실행 시 `minimumReleaseAge` 정책이 우회되는 버그 재현 사례. 리포터가 `pnpm compliance` 같은 별도 점검 명령 필요성 제기(아직 미해결 상태).

## 출처
- [Announcing Vitest 4](https://voidzero.dev/posts/announcing-vitest-4)
- [Vitest 4.0 Migration Guide: Breaking Changes from v3](https://qaskills.sh/blog/vitest-4-migration-guide-breaking-changes) (서드파티 블로그, 참고용)
- [Biome Roadmap 2026](https://biomejs.dev/blog/roadmap-2026/)
- [pnpm Supply Chain Security](https://pnpm.io/supply-chain-security)
- [pnpm/pnpm#10361 — minimumReleaseAgeExclude not respected during --fix-lockfile](https://github.com/pnpm/pnpm/issues/10361)

## 위키화 후보
- `vitest.md` 갱신: Vitest 4.0(Browser Mode 안정화·Visual Regression·Playwright Trace·workspace→projects 전환) 섹션 추가.
- `코드-리뷰-체크리스트에-postinstall-등-라이프사이클-스크립트-사용-패키지-발견-시.md` 갱신: `--fix-lockfile` 사용 시 `minimumReleaseAgeExclude` 우회 가능성(GitHub #10361, open) 예외 케이스 보강.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "Vitest 4 도입/마이그레이션 시 `projects` 필드 전환·coverage V8·deprecated API 제거 여부 확인" 항목 추가.
- Biome 로드맵 인지: "type-aware lint(tsc 불필요)·GritQL 플러그인" 신규 역량을 ESLint/tsc 조합 대안 검토 시 참고 항목으로 축적.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이미 카탈로그에 "출처-대조-검증기" 계열 제안 존재, 이번 턴에서 실사용해 효용 재확인함. 추가 제안 없음)
