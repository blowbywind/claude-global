---
date: 2026-08-06
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-06

## 종합·검증 결과

리서치 원문 9개 핵심 주장 중 실제 출처 페이지를 직접 fetch해 대조한 결과, **5개는 확인 실패**로 폐기했습니다(추측·오기재 가능성). 검증 통과 항목만 아래에 반영합니다.

## 오늘 배운 것
- OTel Collector 최신 버전 **v0.158.0**(2026-08-04 릴리스) — GitHub Releases API로 직접 확인, 기존 기록 v0.143.0에서 갱신.
- GitHub Actions 2026 로드맵 원문 재확인: lock file 마일스톤은 퍼블릭 프리뷰 3~6개월 → **GA 6개월**(리서치 결과의 "6~9개월"은 원문에 없는 오기재, 정정). Scoped secrets·재사용 워크플로 상속(프리뷰 3~6개월/GA 6개월), Secrets permission(GA 3~6개월) 마일스톤 추가 확인.
- CI/CD 공급망 공격 표적 확장: GitHub 공식 로드맵 원문에 tj-actions/changed-files·Nx·**trivy-action** 3개가 공통 공격 패턴 사례로 명시 — 기존 tj-actions 단독 기록에 trivy-action 병기 가능.
- "신뢰 레지스트리(Trusted Registry)" 원칙 확인(testtriangle.com): 컨테이너 이미지·빌드 아티팩트를 검증된 내부 레지스트리로만 제한해 공개 저장소 오염 차단.

## 검증 실패로 폐기한 항목
- Nx s1ngularity 공격(시크릿 2,349건)·Shai-Hulud npm 웜(796개 패키지) — 인용된 github.blog 공급망 보안 글 원문에 해당 내용 없음.
- EU CRA로 attestation 법적 의무화 — 인용된 testtriangle.com 원문에 "Cyber Resilience"/"attestation" 언급 자체가 없음.
- 컨테이너 침해 원인 31%/생성형AI 가속 15% 통계 — 인용된 cloud4c.com 원문에서 확인 불가.
- Argo Rollouts `failureLimit`/`abortScaleDownDelaySeconds`/"5% 카나리 시작" — 인용된 octopus.com 원문에서 확인 불가.

## 출처
- [OTel Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)
- [GitHub Actions 2026 Security Roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [CI/CD Pipeline Security Best Practices — 2026 Checklist](https://www.testtriangle.com/ci-cd-pipeline-security-best-practices-the-2026-strategic-enterprise-checklist/)

## 위키화 후보
- 기존 `otel-collector-버전-기준점을-v1-49-0-v0-143-0-2026.md` 노트가 "Not logged in · Please run /login" 오류 텍스트로 깨져 있음 — v0.158.0 기준으로 재작성 필요(별도 큐레이션 버그, 이번 학습 범위 아님).

## 프로필 반영 후보 (저위험)
- CI/CD 공급망 공격 표적에 trivy-action 인지 추가(기존 tj-actions SHA 고정 근거 병기).

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
