---
date: 2026-08-26
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-26

## 오늘 배운 것
- **Fastify v6.0.0-alpha.2 출시 확인(2026-08-19)** — GitHub API 직접 조회로 재검증 완료: alpha.2(08-19), 안정판 최신은 v5.12.1(08-18). 기존 위키 노트("Fastify v6는 아직 GA 아님")는 GA 미도달 결론 자체는 유효하나 alpha 진행 정보 갱신 필요.
- **TypeScript 7.0 GA(2026-07-08)**: 빌드 8~12배 가속, 공식 컴파일러 API는 7.1로 연기 — 기존 위키 노트(`typescript-7-0-ga-세부-성능수치-컴파일러-api-부재`)와 일치, 신규 아님.
- **npm ChainDrop 공급망 공격**: keyv/cacheable 메인테이너 계정 탈취발 자기증식형 공격 — 기존 위키 노트(`npm-chaindrop-공급망-공격...`)와 사실관계 일치. 단 이번 리서치의 "1,300+ 패키지 버전·월 20억 다운로드" 수치는 기존 검증 노트의 "440개+ 패키지·2,200+ 악성 버전"과 불일치 → 재검증 전까지 신규 수치는 채택 보류.
- **Node.js 22/24/26 2026-07-29 보안 릴리스**: HTTP/2·Permission Model HIGH 등급 취약점 — 기존 위키 노트(`node-js-22-24-26-2026`)와 일치, 신규 아님.
- **Next.js 16.3**: dev 세션 RAM 최대 90%↓, SSR 처리량 최대 22%↑ — 기존 위키 노트(`next-js-16-3-릴리스-노트...`)와 수치 일치. "AI 에이전트용 버전 매칭 문서 제공"은 교차검증 안 됨 → 폐기.

## 출처
- [Fastify Releases (GitHub API 직접 조회, 2026-08-19 alpha.2 / 2026-08-18 v5.12.1 확인)](https://github.com/fastify/fastify/releases)
- [TypeScript 7.0 GA](https://typescriptpro.com/blog/typescript-version-7-2026-07-08) (기존 위키 노트 출처)
- [ChainDrop 공급망 공격 — Microsoft](https://www.microsoft.com/en-us/security/blog/2026/08/04/chaindrop-supply-chain-compromise-anatomy-self-propagating-worm/) (기존 위키 노트 출처)
- [Node.js July 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases) (기존 위키 노트 출처)
- [Next.js 16.3 Release Notes](https://nextjs.org/blog/next-16-3) (기존 위키 노트 출처)

## 위키화 후보
- 기존 노트 `fastify-v6는-아직-ga-아님-마일스톤-진행-중.md` 갱신: "alpha.2(2026-08-19) 진행 중, GA 여전히 미정, 안정판은 v5.12.1" 반영(신규 노트 아닌 갱신).

## 프로필 반영 후보 (저위험)
- 기존 postinstall/preinstall 훅 체크리스트 인사이트(2026-08-04)에 "ChainDrop(2026-08) 실사례"를 참고 링크로만 경량 첨부.

## 승인 필요 (고위험)
- (없음 — TS7 strict 기본값 체크리스트 제안은 2026-07-27 기존 인사이트와 중복, ChainDrop 신규 수치는 미검증으로 폐기, Fastify v6 노트 갱신은 사실 정정으로 위 위키화 후보에서 저위험 처리)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
