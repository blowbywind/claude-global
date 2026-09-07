---
date: 2026-08-24
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-24

## 오늘 배운 것
- **Rust crates.io 빌드타임 공급망 공격**: arrayref(0.3.10)·internment(0.8.7)·append-only-vec(0.1.9)가 2026-08-20 동일 계정에서 동시 배포, 빌드스크립트가 악성 페이로드(proc-macro1 경유)를 실행. CVE 미부여, 다운로드 총 2.45억, 게시 후 86~107분 내 삭제 확인(thehackernews 원문 대조 완료). CI 의존성 lockfile·버전 고정 근거로 유효합니다.
- **Windows 컨테이너 격리 드라이버 CVE-2026-72971(unionfs.sys)**: 2026-08-11 Patch Tuesday, tampering 취약점, 공개(disclosed)=예/실제 악용=아직 없음(cybersecuritynews 원문 대조 완료). Windows 컨테이너 워크로드 보유 시 우선 패치 대상으로 인지.
- **npm ChainDrop 정확 수치 정정**: 원문(aikido.dev) 대조 결과 "444개 패키지·1,381개 버전·월 20억+ 설치·keyv 주간 1.27억 다운로드"가 정확합니다. 기존 위키 노트(dex, 2026-08-06)의 "440개/2,200+ 버전"은 초기 집계 수치로 부정확 — 갱신 필요.

## 검증 실패로 폐기한 항목
- **"CVE-2026-65617 Artifactory RCE, AI 시스템이 RCE 달성"**: 인용된 vicisecurity.com 원문을 직접 대조한 결과 Artifactory·해당 CVE·"AI 시스템" 관련 언급이 전혀 없음(원문은 LoadMaster/VS Code 확장/APN 공격 다룸). **출처 오귀속(사실상 환각)** — 완전 폐기.
- **"CI/CD 보안 사고 5곳 중 1곳"**: thectoclub.com 접근 시 Cloudflare 챌린지(403)로 원문 확인 불가, 명시된 설문조사명도 없어 미검증 — 폐기.
- **EaaS 표준화·AI 적응형 카나리아 "2026년 표준" 주장**: 출처(Medium/azati.ai) 접근 불가로 미검증, 내용도 기존 위키 [[배포-전략-어휘...프로그레시브-딜리버리]] 노트(2026-08-19)와 중복 — 신규 반영 안 함.
- **GitHub Actions "8대 통제 + 모든 침해사고가 이 중 1개 미비에서 비롯"**: 원문(wiz.io) 대조 결과 read-only 기본권한·OIDC·pull_request_target·SHA pinning 등 통제 항목 자체는 실재하나, "모든 사고가 이 중 미비에서 비롯" 집계 주장은 원문에 없음(스텔리나 자체 추론) — 통계 부분 폐기, 내용도 기존 위키 다수 노트와 중복.

## 출처
- [Rust Supply Chain Attack Puts Build-Time Malware in Crates with 245 Million Downloads](https://thehackernews.com/2026/08/rust-supply-chain-attack-puts-build.html)
- [Microsoft Patch Tuesday Update — August 2026](https://cybersecuritynews.com/microsoft-patch-tuesday-update-august-2026/)
- [keyv and friends compromised in npm supply chain attack](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack)

## 위키화 후보
- Rust crates.io 빌드타임 악성코드(build script 경유, CVE 미부여) 개념 노트 신설 — 기존 npm 공급망 노트와 별개 유형(빌드타임 실행) 사례로 가치 있음.

## 프로필 반영 후보 (저위험)
- 컨테이너 보안 체크리스트에 "CVE-2026-72971(Windows 컨테이너 격리 드라이버 tampering, 공개됨/미악용)" 인지 항목 추가.

## 승인 필요 (고위험)
- 위키 초안 `2026-08-23-stellina-wiki-jfrog-artifactory-rce-체인-cve.md`(CVE-2026-65921/66014/65617)가 이번 검증에서 사용된 근거(vicisecurity.com)와 무관함이 확인됨 — 해당 draft도 별도 원문 재검증 없이는 승격 금지 권고. 승격 보류 또는 폐기 여부는 사용자 확인 필요.

## 신규 도구 후보 (에이전트/스킬)
- 없음(기존 "출처-대조-검증기" 계열 후보로 충분 — 이번 검증에서도 인용 1건이 원문과 전혀 무관한 오귀속으로 확인되어 해당 후보의 필요성이 재입증됨).
