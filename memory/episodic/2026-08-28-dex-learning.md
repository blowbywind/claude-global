---
date: 2026-08-28
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-28

## 오늘 배운 것
- ESLint v9는 2026-08-06 EOL, v10.0.0(2026-02 정식 릴리스)부터 eslintrc 설정 체계 완전 제거·flat config(`eslint.config.mjs`)만 지원. Node.js 20.19.0 미만 지원 중단, eslintrc 전용 CLI 옵션도 삭제됨 — 기존 위키 `eslint.md`(2026-07-07, v9 Flat Config 기준)를 v10으로 갱신 필요.
- **중복 발견 정정**: 리서치가 "신규"로 보고한 "Mini Shai-Hulud(keyv/cacheable, 2026-08-04, preinstall 훅)" 공급망 공격은 위키에 이미 **"ChainDrop"**이라는 이름으로 2026-08-04·08-06에 상세 문서화된 동일 사건입니다. 위키 노트(`2026-상반기-npm-공급망-사고-타임라인`)는 "Mini Shai-Hulud"를 5월 12일 TanStack 대상 별개 사건으로 명시하고 있어, 이번 리서치는 다른 이름의 사건을 혼동한 재명명 오귀속입니다(2026-08-21 위키 노트에 이미 경고된 재발 패턴과 동일 유형). 신규 정보 아님 — 폐기.
- **직접 재확인(Bash grep, 이번 세션 실측)**: `autobots/frontend/pnpm-lock.yaml`은 keyv@4.5.4·flat-cache@4.0.1·file-entry-cache@8.0.0(오염 버전 6.x/11.x 미만, 안전), `autobots/backend`·`live-console` 락파일에는 해당 패키지 자체 없음. 2026-08-04 기록된 안전 확인이 오늘도 유지됩니다.
- 후속 조치 필요: ESLint 9→10 전환 시 `flat-cache`/`file-entry-cache`가 오염 버전대로 자동 상향되지 않도록, 실제 업그레이드 시점에 pnpm `minimumReleaseAge`(1440분) quarantine이 계속 유효한지 재확인.
- 검증 한계: 이번에도 WebFetch/WebSearch 권한이 차단되어 원문 직접 대조 불가(2026-07-16/22/29/30에 이어 반복) → 위키 교차검증만으로 진행, 위 중복·오귀속은 그 과정에서 적발됨.

## 출처
- [ESLint v10.0.0 released](https://eslint.org/blog/2026/02/eslint-v10.0.0-released/)
- [What's coming in ESLint v10.0.0](https://eslint.org/blog/2025/10/whats-coming-in-eslint-10.0.0/)
- (대조 참조, 기존 위키) [[npm-chaindrop-공급망-공격-provenance-서명-신뢰-보장-아님-논점]], [[2026-상반기-npm-공급망-사고-타임라인-axios-shai]]

## 위키화 후보
- (신규 노트 없음) ESLint v10 정보는 신규 개념 노트가 아니라 기존 `eslint.md` 노트 갱신으로 반영 권장.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "ESLint 10 전환 시 eslintrc 완전 폐지·Node 20.19.0+ 요구·`flat-cache`/`file-entry-cache` 버전 확인" 1줄 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 후보 "출처-대조-검증기"의 필요성이 이번에도 재확인됨, 신규 제안 아님)
