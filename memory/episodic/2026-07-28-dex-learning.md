---
date: 2026-07-28
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-28

## 오늘 배운 것
- **[검증완료] ai-ops 백엔드 Fastify 5.10.0 설치 확인**(로컬 `node_modules/fastify/package.json` 직접 확인) — dex 보고 CVE(GHSA-247c-9743-5963, Content-Type 헤더 공백으로 `schema.body` 검증 우회, 영향범위 5.3.2~5.8.4, 패치 5.8.5) 범위 밖. CVE 세부 내용 자체는 이번 세션 WebFetch/WebSearch 권한 제약으로 재검증 실패했으나, 설치 버전 사실은 확실히 안전권.
- **[부분검증] Node.js 2026-07-28 보안 릴리스**: 직접 fetch로 페이지 실재 확인. 22.x/24.x/26.x 라인 최고등급 HIGH — 단 원문에 dex 리포트에 없던 "테스트 지연으로 릴리스 연기" 업데이트가 있어, CVE 상세는 아직 미공개 상태. 후속 확인 필요.
- **[미검증, 폐기]** Fastify 프록시 스머글링(CVE-2026-33805)·Forwarded 헤더 위조(CVE-2026-3635)·`@fastify/static` 경로순회(CVE-2026-15074), pnpm v11 마이그레이션 세부(빌드스크립트 정책·설정파일 이동·env 접두사 변경) — 이번 세션 WebFetch/WebSearch 도구 권한 문제로 원문 대조 불가하여 채택 보류. Prisma Studio migration diff·Prisma Next 0.16.0도 공식 도메인(prisma.io) 소스이나 동일 사유로 참고용에 그침, 별도 확인 후 반영 권장.

## 출처
- [Node.js July 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases) — 직접 fetch 검증 완료
- [GHSA-247c-9743-5963 (Fastify Content-Type 검증 우회)](https://github.com/advisories/GHSA-247c-9743-5963) — dex 제공, 이번 세션 재검증 불가(도구 권한)

## 위키화 후보
- (없음 — 이번 회차는 검증 불확실성이 커 신규 개념 노트 보류)

## 프로필 반영 후보 (저위험)
- 코드 리뷰 체크리스트에 "Fastify 버전은 최신 마이너까지 고정 관리(파서/검증자 정규화 불일치형 CVE 재발 이력 있음)" 1줄만 경량 추가 — ai-ops는 이미 5.10.0으로 안전 확인됨

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 출처 대조 검증 목적의 "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재함, 향후 웹리서치 검증 단계에 활용 권장)
