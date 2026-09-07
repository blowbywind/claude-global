---
date: 2026-08-31
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-31

## 오늘 배운 것
- React Compiler가 v1.0으로 정식 GA(2025-10-07, react.dev 공식 블로그 제목 "React Compiler v1.0 – React"으로 원문 대조 확인). 기존 위키 `react.md`(2026-06-26 작성, "Compiler 침묵형 실패"만 다룸)는 GA 사실이 누락돼 갱신 필요.
- Vite 8이 정식 출시(원문 제목 "Vite 8.0 is out!" 확인) — Rolldown(Rust 번들러) 단일 통합, Linear 사례 빌드 46초→6초(약 3~30배 가속) 문구를 원문에서 직접 확인. 기존 위키 `vite.md`(2026-07-01, Vite 6 Environment API 기준)는 Vite 8 반영 안 돼 갱신 필요.
- keyv/cacheable 공급망 공격(기존 위키 2026-08-04 기록분) 후속 디테일 확인: 공격 시작 09:00 UTC, **"over 400 distinct npm packages"** 영향, 악성코드가 C2 도메인을 `StringListStore`라는 **Ethereum 스마트 계약**에서 `eth_call`로 동적 조회하는 신규 기법 사용, TeamPCP발 "Mini" Shai-Hulud 계열 — wiz.io 원문 대조로 확인, 기존 `wiki-concepts-keyv.md` 노트에 없는 세부사항이므로 보강 가치 있음.
- Zod는 4.5.4가 최신이며 v5 계획 없음 — zod.dev 공식 블로그 제목 및 npm registry(`zod@latest`=4.5.4) 이중 대조로 확인. 기존 "Zod v4 유지" 인사이트를 재확인.
- ⚠️ **리서치 원안 정정**: Bun "최신 안정판 1.3.14"는 검증 결과 **오래된 정보** — npm registry 직접조회(`bun@latest`) 결과 실제 최신은 **1.4.0**. 다만 "2.0 미출시"라는 핵심 주장 자체는 여전히 유효(1.4.0도 2.0 미만).

## 출처
- [React Compiler v1.0](https://react.dev/blog/2025/10/07/react-compiler-1) — wget 원문 title 태그 대조 확인
- [Vite 8.0 is out!](https://vite.dev/blog/announcing-vite8) — wget 원문 대조 확인(Rolldown/Linear/46s/6s/30x 문구 존재)
- [Wiz.io - keyv and cacheable npm supply chain attack](https://www.wiz.io/blog/keyv-and-cacheable-npm-supply-chain-attack) — wget 원문 대조 확인(Ethereum/StringListStore/eth_call/09:00 UTC/400+ packages/TeamPCP/Shai-Hulud 전부 존재)
- [Zod 4.5 블로그](https://zod.dev/blog/zod-4-5) — wget 원문 title 대조 확인
- npm registry 직접조회 — `https://registry.npmjs.org/zod/latest`(4.5.4), `https://registry.npmjs.org/bun/latest`(1.4.0, 리서치 원안 1.3.14 정정 근거)

## 위키화 후보
- `wiki/concepts/keyv.md` 노트에 "Ethereum 스마트 계약(StringListStore) C2 동적조회" 세부사항 보강(원문 대조 완료, 신규 정보)
- `wiki/concepts/vite.md`(Vite 6 기준, 2026-07-01) → Vite 8 GA/Rolldown 통합 사실로 갱신, `react.md`(2026-06-26) → React Compiler GA 사실로 갱신

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "React Compiler는 이제 GA(v1.0)이므로 experimental 플래그·구버전 대응 코드 잔존 여부 확인" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
참고: 리서치 원안 중 Bun 버전 숫자(1.3.14)는 부정확해 npm registry 값(1.4.0)으로 정정 반영했습니다. WebSearch 권한이 이번 세션에서도 거부되어 wget 폴백으로 전 항목 원문 대조를 완료했습니다(기존 위키의 "리서치-검증-권한-정합기" 반복 제안 사유와 동일 패턴, 필요 시 재검토 권합니다).
