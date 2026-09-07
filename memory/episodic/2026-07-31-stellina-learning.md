---
date: 2026-07-31
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-31

## 오늘 배운 것
- **GitHub Actions 시크릿 3계층 원칙(2026)**: 클라우드 접근=OIDC(단명 토큰) / GitHub API=`GITHUB_TOKEN` / 그 외(서드파티 키·DB URL)만 저장형 시크릿 — 현재 담당 중인 환경변수·시크릿 관리 체크리스트에 바로 적용 가능한 실무 원칙입니다.
- **Caddy 2.11 계열 보안 강화**: Encrypted ClientHello(ECH, 도메인명까지 TLS 암호화, 2.11.1부터 키 자동 로테이션)와 포스트양자 키교환(`x25519mlkem768`) 기본 지원 — Caddy 라우팅 보안 축과 직결됩니다. 다만 이번 세션은 WebFetch/WebSearch 권한이 막혀 있어 원문 재확인은 못했고, 서로 다른 두 출처(ma.ttias.be, calmops.com)가 동일 내용을 교차 언급한 점만으로 잠정 채택합니다.
- **Caddy 2.11 부가기능**: named socket activation, time-rolling 로그(자동 로테이션) — 서버 헬스 모니터링·운영 편의성 개선에 참고할 만합니다(단, 위와 동일하게 원문 미재확인).
- **Falco(eBPF) 런타임 탐지**: 커널 이벤트 룰 기반 런타임 이상행위 탐지가 사실상 표준으로 재확인됨 — 기존 "Trivy(정적)+Kubescape(런타임 필터)" 2~3단 스캔 체계와 상호보완축으로 정리할 가치가 있습니다.
- **프로그레시브 딜리버리 SLO 게이트 표준화**: "플래그 뒤 다크배포→카나리 1%→10%→A/B 50%→GA 100%"를 SLO 기반 게이트로 전 구간 자동화하는 패턴이 2026년 표준으로 정착 — 기존 multi-burn-rate 게이트·Argo Rollouts/Flagger 항목과 연결됩니다.

**폐기 항목**: "Docker Compose v5.2.0(reconciliation 알고리즘 + provider stop hook)" 주장은 Compose CLI가 수년째 v2.x 체계를 유지해온 것과 버전 번호가 정합하지 않아 검증 실패로 폐기했습니다. "Docker Compose Watch"는 사실관계는 맞으나 2023년경 이미 GA된 기존 기능(개발용 hot-reload, 운영 배포와 무관)이라 "오늘 배운 것"에서 제외했습니다.

## 출처
- [Best Practices for Managing Secrets in GitHub Actions](https://www.blacksmith.sh/blog/best-practices-for-managing-secrets-in-github-actions)
- [Running HTTP/3 with Caddy 2026](https://ma.ttias.be/running-http3-with-caddy-2026/)
- [Caddy Web Server Automatic HTTPS 2026](https://calmops.com/network/caddy-web-server-automatic-https-2026/)
- [Caddy GitHub Releases](https://github.com/caddyserver/caddy/releases)
- [What is Container Runtime Security? (Falco)](https://orca.security/resources/blog/what-is-container-runtime-security/)
- [Must-Know Deployment Strategies](https://blog.bytebytego.com/p/must-know-deployment-strategies-from)

## 위키화 후보
- Caddy 2.11 보안기능(ECH+PQC x25519mlkem768) — 라우팅 담당 신규 개념 노트, 단 다음 세션에서 원문 재확인 후 확정 권장.

## 프로필 반영 후보 (저위험)
- GitHub Actions 시크릿 3계층 원칙(OIDC/GITHUB_TOKEN/저장형) 용어 반영.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 백로그로 충분히 커버됨. 참고: 이번 세션도 검증봇(저)에 WebFetch/WebSearch 권한이 없어 재확인이 막혔음 — 기존 인사이트 "리서치-검증-권한-정합기"가 지적한 문제가 재발한 사례로, 별도 신규 제안 없이 해당 항목 우선순위만 상기합니다.)
