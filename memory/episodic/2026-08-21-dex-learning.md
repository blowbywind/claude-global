---
date: 2026-08-21
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-21

## 오늘 배운 것
- TypeScript 7.0 GA(2026-07-08)는 이미 위키(`typescript-7-0-ga-세부...md`, 2026-07-24 큐레이션)에 정확히 기록되어 있음 — 신규 사실 아님. 단, `typescript-7-tsgo-rc-출시-사실.md`(2026-08-08)가 여전히 "RC 출시"로 남아있어 **위키 내부 불일치**(최신 GA 노트와 충돌) 발견 — 정정 대상.
- Vitest 4.0 "Browser Mode stable 승격 + provider별 패키지 분리(`@vitest/browser-playwright` 등, breaking)"는 기존 노트(2026-07-30, `workspace→projects`/coverage/pool/deprecated API 중심)에 없는 보충 정보로 보이나, 원문(vitest.dev/blog/vitest-4) 직접 대조는 이번 검증에서 미수행 — 잠정 채택(2차 검증 권장).
- **pnpm 11.0(2026-04-28 출시) 클레임은 폐기함**: 위키에 pnpm 10.26이 2026-08-17 기준 최신으로 이미 기록되어 있어 시간 순서상 모순(11.0 출시 4개월 뒤 10.26이 "최신"일 수 없음). 더구나 2026-07-31 노트에 동일한 "v11 전환" 주장이 이미 "오표현"으로 판정·정정된 이력 확인 — **동일 환각이 반복 재발**.
- Shai-Hulud/keyv 공급망 공격 건은 **중복 정보**: 동일 사건(keyv/cacheable, 동일 wiz.io 출처)이 이미 2026-08-04/08-06에 "ChainDrop"이라는 이름으로 상세 문서화됨. 리서치가 이를 "Shai-Hulud"로 명명한 것은 위키가 이미 "이름 유사성으로 혼동 주의" 경고한 2026년 봄 별개 사건(Shai-Hulud, 796개 패키지·1.32억 다운로드)과의 **오귀속 위험** 있음.
- Node.js 22.23.2(2026-07-29 릴리스) 언급도 07-29 노트와 동일 출처 재확인일 뿐 신규 아님 — "8월 기준 신규 22.x 패치 없음"만 유효한 확인 사항.

## 출처
- (교차검증 근거: 기존 위키 노트 — TS7 GA, pnpm quarantine v11 오표현 정정, ChainDrop/keyv 08-04·08-06 노트, Node.js 22 07-29 노트. 리서치 원 출처 중 vitest.dev/blog/vitest-4는 미대조로 잠정 채택)

## 위키화 후보
- `typescript-7-tsgo-rc-출시-사실.md`(08-08, "RC")를 `typescript-7-0-ga-세부...md`(07-24, GA)로 정정/병합 필요 — 신규 노트 아닌 기존 오류 수정 건.

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "라이브러리 메이저버전 주장(특히 pnpm) 인용 시, 위키 기존 최신버전 기록과 시간순 모순 여부 우선 대조" 항목 추가(pnpm v11 환각 2회 반복 재발 방지).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 제안된 "출처-대조-검증기" 계열로 충분히 커버됨, 중복 제안 안 함)
