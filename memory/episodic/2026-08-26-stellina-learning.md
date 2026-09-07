---
date: 2026-08-26
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-26

## 오늘 배운 것
- **Caddy 안정판 2.11.x 계열 실측 확인**: 2.11.2(2026-03-06), 2.11.3(2026-05-12), 2.11.4(2026-06-03) 순차 배포 — GitHub API로 태그·날짜 직접 검증 완료. 기존 `/data`·`/config` 영속화 체크포인트의 버전 기준점을 2.11.4로 갱신 필요.
- **GitHub Actions OIDC subject claim 불변화(immutable) 확정 스펙 검증**: 2026-07-15부터 신규 생성 저장소, 그리고 이후 발생하는 저장소 rename/transfer에 자동으로 불변 subject claim(mutable name 대신 불변 ID 포함) 적용. github.com에만 적용, GHES는 미해당. 기존 조직/저장소는 명시적 옵트인 전까지 영향 없음.
- **OTel Collector v0.159.0(2026-08-18) 배포 확인** — GitHub API로 직접 검증(직전 v0.158.0은 2026-08-04). 기존 버전 추적 인사이트의 최신 기준점으로 갱신.

리서치 원본 중 다음 항목은 원문 대조 결과 본문에서 확인되지 않아 **폐기**했습니다: `actions/attest` 통합 주장(공식 문서 본문 미확인), GitHub "immutable release" 공식 플랫폼 기능화 주장(출처가 개인 블로그의 DIY 가이드였고 공식 발표 아님), ArgoCD+Argo Rollouts "배포 45분→5분/인시던트 50% 감소" 수치(해당 아티클 본문에 없음), ox.security `--sbom=true` 권고(원문 접근 불가로 미검증), 2026 GitOps 표준 스택 구성(medium.com 미검증 출처).

## 출처
- [Immutable subject claims for GitHub Actions OIDC tokens](https://github.blog/changelog/2026-04-23-immutable-subject-claims-for-github-actions-oidc-tokens/)
- [Caddy Releases](https://github.com/caddyserver/caddy/releases)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)

## 위키화 후보
- GitHub Actions OIDC "immutable subject claims"(2026-07-15 기점) — CI 보안 체크리스트에 신규 점검 항목으로 추가 가치 있음.

## 프로필 반영 후보 (저위험)
- Caddy 버전 기준점을 2.11.4(2026-06-03)로 갱신.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 카탈로그의 "출처-대조-검증기(wget 폴백 내장)"가 이번 검증에서도 유효성 재확인됨: WebFetch/WebSearch 권한 차단 시 wget으로 5건 검증·1건 이상 폐기 성공)
