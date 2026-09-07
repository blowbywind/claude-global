---
date: 2026-07-16
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-16

## 오늘 배운 것

- **actions/checkout v7 GA — pwn request 공격 패턴 기본 차단**: `pull_request_target`/`workflow_run`으로 신뢰 안 된 포크 코드를 특권 컨텍스트에서 실행하는 공격을 차단. 플로팅 태그(`@v4` 등)는 자동 적용되지만 **SHA 고정 사용 시 수동 업그레이드 필요** — 기존 SHA 고정 메모에 "체크아웃 버전 추적" 관리 포인트로 추가할 가치 있음. (기사 실재 확인)
- **⚠️ Trivy 자체가 공급망 공격 진원지였던 실제 사건 확인**: 탈취된 크리덴셜로 `trivy`/`trivy-action`/`setup-trivy` npm 패키지에 악성 릴리스가 배포되고, 트로이목마화된 Trivy 바이너리(v0.69.4)가 자가전파 웜(CanisterWorm, 47개 npm 패키지 확산)의 매개체가 됨. **단, 스텔리나 보고서의 "76/77 태그 force-push", "141개 패키지" 등 세부 수치는 원문에서 확인 불가 → 폐기, "47개 npm 패키지·trivy 3종 패키지 오염" 사실만 채택**. 결론(trivy-action을 SHA 고정으로 관리)은 유효함.
- **GitHub Actions 2026 보안 로드맵 공식 발표 확인**: GitHub이 호스팅 러너 대상 네트워크 egress 통제·CI/CD 관측성을 로드맵화(github.blog 원문 확인).
- **Cordyceps 취약점(GitHub Actions) 기사 실재 확인**: `pull_request_target` 체인으로 PR이 시크릿·CI/CD 토큰에 접근 가능한 결함 보도(winbuzzer.com 확인). 다만 "3만 개 검토·654개 저장소·300개+ 체인" 등 구체 수치는 이번 검증 범위에서 원문 재확인 못함 — 경향 사실만 채택, 수치는 저확신 표기.
- **OTel Profiling·npm 12 install-script 비활성화 항목은 폐기**: 전자는 인용 URL이 특정 게시물이 아닌 블로그 연간 인덱스 페이지("2026 | OpenTelemetry")였고, 후자는 소스(ox.security)가 403으로 내용 확인 불가 — 두 항목 모두 출처 검증 실패로 이번 학습에서 제외(기존 "OTel Profiles 공개 알파" 메모는 유지, 업데이트 보류).

## 출처
- [GitHub Actions Enhances CI/CD Security: actions/checkout v7](https://www.rescana.com/post/github-actions-enhances-ci-cd-security-actions-checkout-v7-blocks-common-pwn-request-attack-patterns)
- [Trivy Supply Chain Attack Triggers Self-Spreading CanisterWorm Across 47 npm Packages](https://thehackernews.com/2026/03/trivy-supply-chain-attack-triggers-self.html)
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [GitHub Actions Flaw Lets Pull Requests Reach Secrets and CI/CD Tokens (Cordyceps)](https://winbuzzer.com/2026/07/08/novee-says-cordyceps-can-expose-github-actions-secrets-xcxwbn/)

## 위키화 후보
- Trivy 공급망 오염 사건(trivy/trivy-action/setup-trivy 크리덴셜 탈취→CanisterWorm) — 기존 `concepts/actions-sha-고정-renovate.md`에 실사고 근거로 보강할 가치 있음.

## 프로필 반영 후보 (저위험)
- `actions/checkout` 버전 추적을 SHA 고정 관리 체크리스트에 명시적으로 편입(GA v7 보안패치 백포트 확인 절차 추가).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
