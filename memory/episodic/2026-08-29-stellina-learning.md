---
date: 2026-08-29
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-29

원문 대조 검증 완료(6건 fetch 확인, 1건은 위키 기존 기록과 중복 확인). 결과를 종합합니다.

## 오늘 배운 것
- **Docker Engine CVE-2026-34040**(신규, 원문 확인): AuthZ 플러그인 앞단 미들웨어가 요청 본문 1MB 초과 시 절단하지만 데몬은 원본 전체를 처리하는 불일치로 정책 우회 가능. Docker Engine 1.10 이후(약 10년) 전 버전 영향, 권한 상승·호스트 마운트 위험 — 컨테이너 보안 체크리스트에 즉시 반영 필요
- **GitHub Actions checkout v7**: `pull_request_target`/`workflow_run` 워크플로에서 포크 PR 코드 fetch를 기본 거부하도록 변경(pwn request 공격 차단). 기존 위키의 "checkout GA v7 백포트" 기록과 같은 계열이나, 이번엔 구체적 차단 메커니즘까지 확인됨
- **ChainDrop worm**(npm, 2026-08-04, keyv/cacheable 계정 탈취, 444개+ 패키지/1,381개 버전): GitHub Actions 러너 VM 내에서 실행되는 `npm install` 등이 확산 경로가 될 수 있어, CI 워크플로 보안 체크리스트에도 참고 CVE로 반영됨(기존 위키는 npm 공급망 관점만 보유, 인프라 관점은 신규)
- **OTel Collector 최신 안정판 v0.159.0**(2026-08-17/18): 위키에 이미 2026-08-22 자로 동일 정보가 반영되어 있어 중복 확인만 진행, 재등록 불필요
- 카나리(5% 시작, Argo Rollouts/Flagger)+기능 플래그+자동 메트릭 게이트 조합이 2026년 배포 표준으로 자리잡는 추세(dev.to 원문 확인, 개인 블로그 출처라 신뢰도는 중간)
- runc 컨테이너 브레이크아웃 취약점군 개괄(CNCF 블로그, 원문 확인) — 기존 위키 "runc CVE 3건" 노트와 연계 가능한 배경자료

## 출처
- [Docker Flaw CVE-2026-34040 Lets Attackers Bypass Security Controls](https://www.esecurityplanet.com/threats/docker-flaw-cve-2026-34040-lets-attackers-bypass-security-controls-and-take-over-hosts/)
- [GitHub Actions hardens checkout security to block 'pwn request' attacks](https://www.infoworld.com/article/4188038/github-actions-hardens-checkout-security-to-block-pwn-request-attacks.html)
- [GitHub Actions Security Checklist (ChainDrop 언급)](https://www.stingrai.io/blog/github-actions-security-checklist)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)
- [runc Container Breakout Vulnerabilities (CNCF)](https://www.cncf.io/blog/2025/11/28/runc-container-breakout-vulnerabilities-a-technical-overview/)
- [Progressive Delivery for CI/CD Pipelines](https://dev.to/safdarwahid/progressive-delivery-for-cicd-pipelines-3mlm)

## 위키화 후보
- CVE-2026-34040(Docker AuthZ 우회) — 컨테이너 보안 체크리스트 신규 개념 노트로 가치 있음

## 프로필 반영 후보 (저위험)
- 컨테이너 보안 체크리스트에 "AuthZ 플러그인 요청 크기 불일치(미들웨어 vs 데몬) 점검" 항목 추가
- CI/CD 보안 점검 항목에 "러너 VM 내 npm install 등 의존성 설치 단계도 공급망 웜(ChainDrop류) 확산 경로로 간주" 관점 보강

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기(wget 폴백)" 후보로 충분히 커버됨, 이번 검증도 WebFetch 권한 거부→wget 폴백으로 6건 중 6건 성공)
