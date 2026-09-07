---
date: 2026-09-03
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-09-03

## 오늘 배운 것
- GitHub Actions 2026 보안 로드맵: 정책기반·인프라인지형 전환, 호스티드 러너용 **아웃바운드 네트워크 제어**가 신규 예고 항목으로 확인됨(github.blog 공식 출처).
- Trivy 공급망 침해에 정식 CVE 번호 **CVE-2026-33634**(CVSS 9.4) 부여 확인 — GitHub Advisory 원문(`GHSA-69fq-xp46-6x23`, 제목 "Trivy ecosystem supply chain was briefly compromised") 직접 fetch로 대조 완료. `trivy-action` 77개 태그 중 76개, `setup-trivy` 7개 태그 전부 악성 커밋 교체.
- 동일 침해가 Docker/K8s 환경에 인포스틸러 웜·wiper 형태로 확산됐다는 분석(thehackernews) — 기존 "Trivy 자체 이미지 pin" 각주에 위협 범위 보강 근거로 사용 가능.
- Argo Rollouts **v1.10.0-rc1**이 2026-07-03에 컷됐고, ArgoCon에서 `RolloutPlugin` CRD(Deployment 외 StatefulSet/DaemonSet 확장)가 논의됨 — bex.co 블로그 원문 fetch로 직접 대조 확인(신뢰도 확보).
- Caddy `caddy:2.11.2-alpine` 태그가 2026년 프로덕션 실사용 표준임을 재확인(nerdleveltech.com 원문 대조) — 단 해당 페이지의 zstd 로그로테이션 내용은 기존 위키 노트(`caddy-2-11-신기능...zstd`)에 이미 반영되어 있어 중복.
- OTel Collector v0.160.0(2026-09-14 예정)·v0.161.0(2026-09-28 예정)은 **미출시 예정 버전**이므로 기준점은 v0.159.0 유지, 스케줄 정보로만 인지.

## 출처
- [GitHub Actions 2026 보안 로드맵](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [CVE-2026-33634 GitHub Advisory](https://github.com/advisories/GHSA-69fq-xp46-6x23) (직접 fetch 대조 완료)
- [Trivy 침해 확산 분석 — TheHackerNews](https://thehackernews.com/2026/03/trivy-hack-spreads-infostealer-via.html)
- [Flagger vs Argo Rollouts — bex.co](https://bex.co/blog/2026/08/02/flagger-vs-argo-rollouts-progressive-delivery-git-push-paas) (직접 fetch 대조 완료)
- [Caddy Docker Compose 프로덕션 튜토리얼](https://nerdleveltech.com/caddy-reverse-proxy-docker-compose-production-https-tutorial) (직접 fetch 대조 완료)
- [OTel Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)

## 위키화 후보
- GitHub Actions 호스티드 러너 아웃바운드 네트워크 제어(2026 로드맵 신규 항목) — 별도 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 기존 "Trivy 공급망 침해" 인사이트에 CVE-2026-33634 번호 각주 보강.
- 카나리 배포 도구선정 가이드에 Argo Rollouts v1.10.0-rc1(2026-07-03 컷)/RolloutPlugin CRD 로드맵 각주 갱신.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — WebFetch 권한 거부가 이번에도 재발했으나 기존 등록된 "출처-대조-검증기-wget-폴백" 후보로 이미 커버되며 wget 폴백으로 정상 검증 완료됨)
