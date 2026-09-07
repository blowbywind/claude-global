---
date: 2026-07-27
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-27

## 오늘 배운 것
- 최소화 베이스 이미지(Chainguard/distroless류) 도입 시 CVE가 표준 이미지 50~60건 → 한 자릿수로 감소(원문 대조 확인) — 컨테이너 보안 체크리스트에 "베이스 이미지 최소화" 완화책 근거로 반영 가치
- OpenTelemetry Collector v1.49.0/v0.143.0(2026-01) 릴리스: semantic conventions 1.38.0 반영, tail sampling에 policy 캐싱 지원, nop exporter에 profiles 신호 추가(원문 대조 확인) — 기존 OTel Collector 권고 패턴의 세부 갱신
- CI/CD 배포 자격증명은 "단기수명 토큰 + 정기 로테이션" 원칙만 원문에서 확인됨(장기수명 키 노출 위험 완화) — 시크릿 관리 체크리스트 반영 근거로 사용 가능
- 프로그레시브 딜리버리 정의(카나리+피처플래그+A/B+블루그린 통합 방법론) 재확인(원문 일치) — 기존 "Argo Rollouts vs Flagger" 노트의 상위 개념 보완용

**폐기(출처 대조 결과 불일치/미확인/없음)**: EU CRA 2026-09-11 발효 조항(원문 403으로 fetch 불가, 검증 불가 → 폐기), CI/CD 침해 평균손실 $5.1M·공급망공격 45%↑(원문에 해당 수치 전무), Federated Identity 기반 자격증명·job단위 시크릿 스코핑(원문은 "정기 로테이션 토큰"만 언급, federated identity 문구 없음), Trivy DB 6시간 주기 갱신(원문에 해당 서술 없음), Continuous Profiling 4번째 신호·2026 Q1 RC(원문에 해당 서술 없음), OTel 채택률 48.5%+25%(원문에 해당 수치 없음, CSS 코드 오검출)

## 출처
- [Software Supply Chain Security Tools](https://www.minimus.io/post/software-supply-chain-security-tools)
- [OpenTelemetry Collector v1.49.0/v0.143.0 — What's New](https://fusion-reactor.com/blog/opentelemetry-collector-v1-49-0-v0-143-0-whats-new-in-january-2026/)
- [CI/CD Security Best Practices](https://www.wiz.io/academy/application-security/ci-cd-security-best-practices)
- [Canary Release vs Progressive Delivery](https://www.getunleash.io/blog/canary-release-vs-progressive-delivery)

## 위키화 후보
(없음 — 검증된 항목 전부 기존 노트(OTel Collector 설정 패턴, Argo Rollouts vs Flagger, 컨테이너 보안 체크리스트)의 보강 성격이라 신규 노트 불필요)

## 프로필 반영 후보 (저위험)
- OTel Collector v1.49.0 세부기능(semantic conventions 1.38.0, tail sampling policy 캐싱)을 기존 "OTel Collector 설정 권고 패턴" 인사이트에 추가
- "최소화 베이스 이미지 CVE 저감(50~60건→한 자릿수)" 수치를 컨테이너 보안 체크리스트 근거로 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재하며, 이번 검증에서 그 필요성이 재확인됨: 리서치 원안 9건 중 6건이 폐기 사유였음)
