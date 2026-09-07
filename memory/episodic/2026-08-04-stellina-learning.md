---
date: 2026-08-04
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-04

## 오늘 배운 것
- **2026년 컨테이너 보안 5대 위협 지형**: 구버전 미패치 베이스 이미지, AI 자율 공격(수천 클러스터 대상 자동 취약점 탐색), 잠복 페이로드 삽입 이미지, Kubernetes API 노출로 인한 클러스터 전체 침해, 다수의 소규모 취약점 연쇄결합 공격 — 기존 하드닝 항목(distroless/Cosign, seccomp, VEX)에 대응할 위협 분류로 보강.
- **점진적 배포 게이트 패턴**: 기능 플래그(feature flag)로 "배포"와 "릴리스"를 분리한 뒤, 트래픽 비율을 단계적으로 확대(예: 10%→25%→50%→100%)하며 각 단계에서 에러율·지연시간 등 자동 체크로 진행 여부를 판단하는 방식 — 기존 Multi-burn-rate 게이트·Argo Rollouts/Flagger 지식에 "기능 플래그" 레이어 추가.

## 검증 결과 (기각 항목)
아래 항목은 원문 대조 결과 인용 근거가 확인되지 않아 폐기함:
- CI/CD 침해 평균 피해액 $5.1M·공급망 공격 45% 증가, EU CRA SaaS 어테스테이션 의무화 — 출처(dev.to)가 1차 근거 없는 저신뢰 블로그로 판단, 채택 보류.
- OTel 연속 프로파일링 Q1 2026 RC 진입 — 인용된 thenewstack.io 원문에 해당 내용 없음(허위 인용).
- OTel 채택률 48.5%/25% — 인용된 apmdigest.com 원문에 없음(원문은 "~95% 채택" 언급으로 수치 불일치).
- K8s 팀 71% 프로그레시브 딜리버리 사용 — 인용된 wasilzafar.com 원문에 없음(해당 수치는 다른 출처의 Datadog 2024 보고서 인용으로, 원 리서치의 출처 매칭 오류).

## 출처
- [Container Security in 2026: Risks and Strategies](https://www.cloud4c.com/blogs/container-security-in-2026-risks-and-strategies)
- [Ship Faster, Break Less: A Developer's Guide to Safe Deployment](https://www.ai-infra-link.com/ship-faster-break-less-a-developers-guide-to-safe-deployment/)

## 위키화 후보
- 없음 (기존 컨테이너 보안·카나리 배포 노트에 보강 편입이 적절, 신규 노트 불필요)

## 프로필 반영 후보 (저위험)
- 기능 플래그(feature flag) 배포-릴리스 분리 원칙 — 카나리/SLO 게이트 권고 패턴에 보강 용어로 반영
- 2026 컨테이너 보안 5대 위협 분류(AI 자율공격·잠복 페이로드·K8s API 노출 등) — 컨테이너 하드닝 전문성 항목에 보강

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
