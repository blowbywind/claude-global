---
date: 2026-08-29
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-29

## 오늘 배운 것

교차검증 결과, 대부분의 리서치 항목이 기존 위키에 이미 상세 기록되어 있거나(중복) 출처 원문에서 확인되지 않아(미검증) 폐기했습니다. 검증되고 신규인 항목만 아래에 남깁니다.

- Vitest 4 공식 블로그(vitest.dev/blog/vitest-4) 원문 대조 확인: 브라우저 프로바이더가 `@vitest/browser-playwright`·`@vitest/browser-webdriverio`·`@vitest/browser-preview` 별도 패키지로 분리됨 — 원문 문구("you now need to install a separate package")로 직접 확인. 기존 위키 Vitest 4 체크리스트 노트(projects 필드·coverage V8·deprecated API)에 없는 신규 세부사항.
- `maxThreads/maxForks`→`maxWorkers` 통합, `singleThread/singleFork` 폐지 주장은 공식 블로그 원문에서 해당 문구를 찾지 못해 **미검증 처리(폐기)**. (config 목록에 `maxWorkers` 존재는 확인했으나 통합·폐지 서술은 원문에 없음)
- ChainDrop 확산 규모(버전 1,300+·패키지 400+·다운로드 20억)는 원문(The Register) 접근 실패(HTTP 오류)로 미검증. 오히려 기존 위키 확정 수치(2026-08-06, 패키지 440+·버전 2,200+)와 방향이 안 맞아(버전·패키지 수가 후속 보도에서 더 작게 보고됨) 신뢰도 낮음 — **폐기**.
- GitHub Actions 통계("2,186개 조직·시크릿 78,330건 유출, tj-actions 23,000+ 저장소")는 인용된 StepSecurity 원문을 직접 대조했으나 해당 수치·사례가 본문에 전혀 없음 — **출처 오귀속으로 폐기**.
- Next.js 16.3 수치(메모리 90%↓, 처리량 22%↑)는 기존 위키 노트(`next-js-16-3-릴리스-노트`, 2026-08-09 curated)에 이미 동일 수치로 기록됨 — **완전 중복, 신규 아님**.
- Node.js 8월 신규 보안 릴리스 없음 확인은 기존 확정 사실 재확인일 뿐 신규 정보 아님.

## 출처
- [Vitest 4.0 blog](https://vitest.dev/blog/vitest-4) — 브라우저 프로바이더 분리 부분만 원문 대조 확인됨

## 위키화 후보
- Vitest 4 체크리스트 노트에 "브라우저 프로바이더는 `@vitest/browser-playwright` 등 별도 패키지 설치 필요(v4부터)" 1줄 보강 — 공식 출처로 검증됨, 기존 노트에 없는 세부

## 프로필 반영 후보 (저위험)
- 없음(이번 회차는 검증 통과 항목이 적어 프로필 반영 보류)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 검증에서도 리서치 산출물 6건 중 3건(ChainDrop 규모·GitHub Actions 통계·Vitest 세부 일부)이 원문 미확인/오귀속으로 폐기됨. 기존에 반복 제안된 후보(2026-07-30~08-22)와 동일 맥락으로, WebFetch 권한 거부 시 wget 폴백 필요성도 재확인(이번 세션도 WebFetch 거부 재발 — 4번째 이상 반복, 리나-검증-권한-정합기 인프라 점검 필요성 재확인).
