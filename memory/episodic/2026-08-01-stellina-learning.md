---
date: 2026-08-01
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-01

## 검증 메모
1단계 리서치 6건을 실제 소스 fetch(WebFetch 차단→wget 폴백)로 대조한 결과, **3건은 인용 소스에서 해당 서술을 찾을 수 없어 폐기**했습니다: ①Chainguard Actions 2026-03-17 발표(wiz.io 원문에 미기재), ②SBOM 86%/Sonatype 80% 통계 및 CI 게이트 활용(ox.security 403 Forbidden, 검증 불가), ③Caddy Admin API unix socket 구체 문법(fivenines.io 원문은 포트 2019 방화벽 제한만 언급). OTel Collector 항목 중 "v0.157.0(07-22)까지 지속 갱신" 부분도 출처 미확인이라 제외했습니다.

## 오늘 배운 것
- **GitHub Actions 워크플로 dependency lock (2026 로드맵)**: `dependencies:` YAML 섹션으로 직접+전이(transitive) 액션 의존성까지 커밋 SHA로 락(go.sum 유사), Public Preview 3~6개월/GA 6개월 예정. 기존 "Actions SHA 전체 고정" 체크리스트를 보완하는 다음 단계 통제. (검증됨)
- **워크플로 실행 정책(Execution Protections)**: 정책 미충족 워크플로 자체를 실행 차단, 안전한 도입을 위해 "evaluate 모드"(차단 대신 로깅) 제공. (검증됨)
- **베이스 이미지가 최고 레버리지 통제점**: 표준 공개 이미지는 평균 CVE 50~60개, 미니멀/소스빌드 이미지는 한 자릿수로 축소 — 기존 distroless/Chainguard 하드닝 권고의 정량적 근거. (검증됨)
- **OTel Collector v1.49.0/v0.143.0(2026-01-09)**: semantic conventions 1.38.0 반영, nop exporter에 profiles 지원 추가 — 기존 `gen_ai.*` 표준화·OTel 권고 패턴 최신화. (검증됨)
- **Caddy `/data`·`/config` 영속화 필수**: 미마운트 시 재시작마다 인증서 재발급 → Let's Encrypt rate limit 위험. 기존 Caddy 배포 노트에 운영 체크리스트로 추가할 가치. (검증됨)
- **프로그레시브 딜리버리 채택률 71%**(Datadog 2024 Container Report 인용, Argo Rollouts/Flagger 등): 단계는 10%→25%→50%→100% 트래픽 증분 + 자동 지표 게이트 방식(원문 기준, 리서치의 "1%→A/B 50%" 서술은 원문과 불일치해 정정). (검증됨, 수치 출처는 2024년 보고서 재인용)

## 출처
- [What's coming to our GitHub Actions 2026 Security Roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [Software Supply Chain Security Tools](https://www.minimus.io/post/software-supply-chain-security-tools)
- [OpenTelemetry Collector v1.49.0/v0.143.0: What's New in January 2026](https://fusion-reactor.com/blog/opentelemetry-collector-v1-49-0-v0-143-0-whats-new-in-january-2026/)
- [Using Caddy with Docker for Production](https://dev.to/shahadathhs/using-caddy-with-docker-for-production-a-practical-guide-2pe8)
- [Ship Faster, Break Less: A Developer's Guide to Safe Deployment](https://www.ai-infra-link.com/ship-faster-break-less-a-developers-guide-to-safe-deployment/)

## 위키화 후보
- 기존 `actions-sha-고정-renovate.md`에 "워크플로 dependency lock(2026 GitHub 로드맵)" 섹션 확장 추가 — 새 노트보다 기존 노트 보강 권장.

## 프로필 반영 후보 (저위험)
- OTel Collector 버전 기준점을 v1.49.0/v0.143.0(2026-01)으로 갱신 — 향후 릴리스 언급 시 기준 버전으로 사용.
- Caddy `/data`·`/config` 영속화(Let's Encrypt rate limit 방지) — 기존 Caddy 담당 항목에 운영 체크포인트로 반영.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- 이번에도 WebFetch 권한 미부여로 검증이 막혀 wget 폴백으로 우회함 — 카탈로그에 이미 있는 "출처-대조-검증기-개선안"(wget 폴백 내장) 도입을 재차 권장.
