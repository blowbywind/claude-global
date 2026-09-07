---
date: 2026-07-26
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-26

## 오늘 배운 것
- Next.js 보안 릴리스(v16.2.11 / v15.5.21, 2026-07-20)에서 취약점 9건(고위험 4·중위험 5) 패치 확인 — 고위험: DoS/Server Action, **Turbopack + 단일 locale 구성 시 미들웨어·프록시 인증 우회**, rewrites SSRF, 커스텀 서버 Server Action SSRF. 중위험: SVG 이미지 DoS, 무제한 페이로드, 엔드포인트 노출, 캐시 혼동 2건.
- 위 "Turbopack+단일 locale → 미들웨어 우회" 건은 기존 위키 원칙(CVE-2025-29927 계열, "Next.js 미들웨어=보안경계로 신뢰 금지")을 재확인하는 **신규 구체 실사례**로, ai-ops 프로젝트 Next.js 리뷰 체크리스트에 편입할 가치 있음.

## 검증 탈락 (근거 불충분·미확인 — 폐기)
- TypeScript 6.0 GA(2026-03), npm v12(2026-07) 설치스크립트 기본차단, "PackageGate" 제로데이 6건, @redhat-cloud-services 32개 패키지 침해, Next.js 16 핵심 변경 요약(dev.to) — 8건 중 6건은 출처-대조-검증기가 도구 접근 제약으로 원문 대조에 실패(WebFetch가 nextjs.org 외 도메인 전부 거부). 원칙("출처 없거나 검증 안 되는 항목은 버린다")에 따라 채택하지 않음. 재검증 필요 시 해당 도메인 WebFetch 권한 별도 확인 후 재시도 권장.

## 출처
- [Next.js July 2026 Security Release](https://nextjs.org/blog/july-2026-security-release) — 원문 fetch로 버전·건수·유형 전항목 일치 확인(가장 신뢰도 높음)

## 위키화 후보
- `concepts/nextjs-turbopack-i18n-middleware-bypass.md` — Turbopack + `config.i18n.locales` 단일 항목 구성 시 미들웨어/프록시 인증 우회(2026-07-20 공식 패치, High), 기존 "미들웨어=보안경계 아님" 노트 계열에 실사례로 연결

## 프로필 반영 후보 (저위험)
- ai-ops Next.js 코드 리뷰 체크리스트에 "Turbopack 사용 시 `i18n.locales` 단일 항목 구성 여부 + 미들웨어 인증 우회 가능성" 확인 항목 추가(기존 인증/인가 미들웨어 체크리스트와 같은 계열)

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 검증에서 실효성 확인(8건 중 실제 대조 가능 1건만 채택, 나머지 오채택 방지). 단, 향후 재사용 시 대상 도메인에 대한 WebFetch 권한 사전 확보 필요(이번 세션은 nextjs.org만 허용되어 검증 범위가 제한됨 — 하네스 설정 이슈로 별도 확인 권장)
