---
date: 2026-07-26
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-26

## 오늘 배운 것

교차검증 결과, 리서치 원문 6개 항목 중 **4개는 위키에 이미 등재된 중복 지식**이었고, **1개는 버전 정보가 위키 기존 검증값과 충돌**, **2개는 출처 신뢰도 부족으로 폐기**했습니다. 실제로 신규 반영 가치가 있는 항목은 아래 2건입니다.

- OTel Collector **Declarative Configuration**이 2026-02 기준 experimental → stable(production-ready) 승격 확인. 기존 위키 OTel 노트(2026-06-27, 2026-07-03 등)에는 이 항목이 없어 신규 보강 대상.
- Caddy 배포 전 `caddy validate`로 Caddyfile 문법 사전검증하는 관행은 채택 검토 가치 있음. 단, 리서치 원문의 버전 표기("caddy:2.11.2-alpine")는 위키에 이미 확정된 최신 안정판(v2.11.4, 2026-06-03, 2026-07-25 정정 완료)보다 낮아 **신뢰 불가** — 버전 언급은 배제하고 검증 관행만 채택.

**중복으로 폐기(신규 학습 아님)**: GitHub Actions SHA고정/OIDC/least-privilege/Cosign 체크리스트(기존 actions-sha-고정-renovate, slsa-provenance, openssf-scorecard, kyverno-sigstore 등에 이미 등재) / Tetragon eBPF 런타임 보안(2026-06-28, 2026-07-24 이미 두 차례 promoted) / 프로그레시브 딜리버리 단계적 카나리 패턴(2026-07-01 canary-metric-gate, 2026-07-07 Argo Rollouts SLO 자동 롤백 패턴과 동일 내용).

**출처 신뢰도 부족으로 폐기**: "자동 롤백 도입 시 인시던트 해결 70% 단축" 통계(dev.to 2차 인용, 원출처 Harness 리포트 미확인) / OTel profiles→nop exporter 확장 주장(fusion-reactor.com, 비공식 블로그로 내용 대조 불가).

## 출처
- [OpenTelemetry Collector News, 2026-02](https://opensource.datadoghq.com/otel-news/2026/02/)
- [Caddy 배포 가이드 — 버전정보 불일치로 검증 관행만 부분 채택](https://fivenines.io/blog/how-to-deploy-and-configure-caddy-web-server/)

## 위키화 후보
- OTel Collector Declarative Configuration stable 전환(2026-02) — 신규 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- OTel Collector 설정 권고 패턴에 "Declarative Configuration(stable)" 항목 추가
- 배포 워크플로 체크리스트에 `caddy validate` 사전검증 단계 명시(버전 표기 없이)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 카탈로그에 이미 등재된 "출처-대조-검증기" 에이전트가 이번 검증 절차와 동일 목적)
