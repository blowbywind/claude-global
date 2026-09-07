---
date: 2026-07-12
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-12

## 오늘 배운 것
- **GitHub Actions 2026 보안 로드맵**: 워크플로에 `dependencies:` 섹션(전이 의존까지 SHA 락파일화) + 러너 외부 네이티브 L7 egress 방화벽 + 룰셋 기반 중앙 정책 도입 예정 → 기존 "Actions SHA 전체 고정 + Renovate" 체크리스트를 구체화하는 근거로 반영 가능 (공식 GitHub Blog 출처, 신뢰도 높음).
- **tj-actions/changed-files 공급망 사고(CVE-2025-30066, 2025-03)**: 태그 재지정 공격으로 2만3천+ 레포 시크릿 24시간 내 유출 — "SHA 고정 미준수"가 왜 실제 리스크인지 보여주는 구체 사례. 기존 체크리스트에 근거로 추가 권장.
- **Google Gemini CLI CVSS 10.0 RCE**: 헤드리스 CI/CD 실행 시 공격자 제어 워크스페이스 파일을 자동 신뢰해 빌드 러너에서 임의 명령 실행 — "Hadolint+Trivy AI 생성 인프라 코드 검증" 항목에 붙일 구체 CVE 근거로 적합(CSA 리서치 노트, 신뢰도 있음).
- **OTel Profiling**: Q3 2026 GA 목표로 logs/metrics/traces/profiles 4축 통합, Semantic Conventions v1.38.0 갱신 — 기존 "OTel eBPF Profiler" 인사이트 최신화(공식 OTel 블로그 출처).
- **프로그레시브 딜리버리 툴 매핑**: Argo Rollouts(ArgoCD 생태계, canary/blue-green CRD) vs Flagger(Flux 생태계, Istio/Linkerd/NGINX 연동) — 개념 수준이던 canary 권고에 구체 툴 선택지 추가.
- (제외) "CADR로 CVE 노이즈 90% 감소"와 "AI 생성 코드 30~50% 취약점" 수치는 각각 벤더 마케팅 블로그·출처 신뢰도 미확인 사이트(sherlockforensics.com) 기반이라 정량 수치는 채택하지 않고 폐기함.

## 출처
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [GitHub Actions Security Checklist (tj-actions 사례 포함)](https://corgea.com/learn/github-actions-security-checklist)
- [CSA Research Note: AI Coding Tool RCE — CI/CD Attack Surface](https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-coding-tool-rce-cicd-attack-surface-202/)
- [OpenTelemetry Blog: Profiles Alpha/GA 로드맵](https://opentelemetry.io/blog/2026/profiles-alpha/)
- [Argo Rollouts (공식 저장소)](https://github.com/argoproj/argo-rollouts)

## 위키화 후보
- GitHub Actions `dependencies:` 락파일화 + egress 방화벽 로드맵 — 신규 개념 노트(기존 SHA 고정 노트와 연결)
- Argo Rollouts vs Flagger 프로그레시브 딜리버리 툴 비교 — canary/블루그린 실무 매핑 신규 노트

## 프로필 반영 후보 (저위험)
- tj-actions CVE-2025-30066 사고 사례를 기존 "Actions SHA 전체 고정" 체크리스트 항목의 근거 사례로 추가
- Gemini CLI CVSS 10.0 RCE를 "Hadolint+Trivy AI 생성 인프라 코드 검증" 항목의 구체 근거로 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
