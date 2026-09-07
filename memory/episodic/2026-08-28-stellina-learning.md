---
date: 2026-08-28
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-28

## 오늘 배운 것
- GitHub Actions 2026 로드맵(결정론적 워크플로·중앙집중 실행정책·시크릿 스코프 축소·egress firewall)과 SHA 고정·OIDC·`pull_request_target` 위험 등 체크리스트 항목은 기존 위키 인사이트와 일치 확인(재확인, 신규 아님).
- 컨테이너 이미지 3대 통제(레지스트리 진입 전 스캔·최소 베이스 이미지·Cosign 서명검증)도 기존 "최소화 베이스 이미지 CVE 저감" 인사이트와 정합 확인(재확인).
- OTel Collector v0.158.0(08-04)/v0.159.0(08-18)은 기존 위키의 v0.159.0(08-17) 추적 노트와 근소한 날짜 차이만 있어 실질 중복.
- **Caddy CVE-2026-27585~27590(Wikipedia 인용) 주장은 폐기**: 기존 위키에 동일 계열 주장이 이미 두 차례(2026-08-08, 2026-08-11) "CVE 번호 원문 인용 오류" / "CVE 번호 없이 커밋 로그 기반 확정 필요"로 정정된 이력이 있음. 오늘 리서치도 같은 2차 출처(Wikipedia)를 근거로 동일 오류를 반복하고 있어 채택 불가.
- 카나리+feature flag+progressive delivery(Argo Rollouts 단계적 트래픽) 조합도 기존 위키에 2026-08-19자 승격 노트로 이미 존재(재확인, 자동 롤백 임계값 세부는 일반론 수준이라 추가 가치 낮음).

## 출처
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [Container Security Best Practices (ox.security)](https://www.ox.security/blog/container-security-best-practices/)

## 위키화 후보
- 공급망 "End-to-End Traceability" 원칙 + PBOM(Provenance/계보 기록) 생성 — 기존 SLSA provenance·VEX·npm provenance 노트와 인접하지만 PBOM 용어 자체는 위키에 없음, 신규 개념 노트 검토 가치 있음 (출처: ox.security).

## 프로필 반영 후보 (저위험)
- (없음 — 이번 리서치 항목 대부분 기존 지식 재확인이며 신규 확정 용어는 위키화 후보로만 처리)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
