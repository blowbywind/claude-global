---
date: 2026-08-16
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-16

## 오늘 배운 것
- **Trivy 공급망 침해(CVE-2026-33634)** 경위 구체화: 자격증명 탈취로 `trivy-action`/`setup-trivy` 태그 대량 force-push, 원인은 직전 시크릿 로테이션이 비원자적이었던 점. 단, 출처가 2차 리포트 사이트(cvereports.com, penligent.ai)뿐이라 원문(GitHub 공식 어드바이저리·NVD) 미확인 상태 — 참고용으로만 채택.
- **runC 이스케이프 3종** CVE 번호·패치버전 구체화: CVE-2025-31133(maskedPaths 심볼릭링크 우회)/52565/52881, 패치는 runc 1.2.8/1.3.3/1.4.0-rc.3. 출처는 CNCF 공식 블로그로 신뢰도 높음(기존 컨테이너 보안 체크리스트 보강 가능).
- **OTel Collector v0.158.0**: `drain` 프로세서에 `masking_rules`(정규식 치환 순서 리스트) 추가, 기존 `extract_parameters`/`params_attribute` 대체. 출처는 GitHub 공식 릴리스 노트로 신뢰도 높음.
- **GitHub Actions 2026 로드맵**: "시크릿을 job이 아닌 step 단위로 스코핑" 원칙이 공식 블로그(github.blog)에 명시 확인 — 기존 CI 로드맵 인지사항에 구체 항목으로 편입 가능.
- 프로그레시브 딜리버리(카나리+피처플래그+자동 메트릭 게이트) 표준화 언급은 벤더 블로그(getunleash.io) 출처라 일반 트렌드 참고 수준으로만 채택.

**폐기한 항목**: CVE-2026-31431("Copy-Fail")은 단일 저신뢰 블로그(redfoxsec.com)만 출처이고 CVE 데이터베이스·벤더 공식 발표로 교차확인 불가해 폐기. "AI 기반 프로그레시브 딜리버리" 트렌드도 마케팅성 에이전시 블로그(azati.ai) 단독 출처라 폐기.

## 출처
- [runC Container Breakout Vulnerabilities: A Technical Overview](https://www.cncf.io/blog/2025/11/28/runc-container-breakout-vulnerabilities-a-technical-overview/)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [CVE-2026-33634 report (미검증, 참고용)](https://cvereports.com/reports/CVE-2026-33634)

## 위키화 후보
- runC 이스케이프 3종 CVE 상세(번호·기법·패치버전) — 기존 runC 초안 노트에 보강
- OTel Collector `drain` 프로세서 `masking_rules` 개념 노트 신규 작성

## 프로필 반영 후보 (저위험)
- CI 보안 체크리스트 용어에 "시크릿 step 단위 스코핑(job 단위보다 세분화)" 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 세션도 WebFetch 권한 거부로 원문 직접 검증 불가, 기존 등록된 검증기 후보들과 동일 이슈 재확인. 신규 제안 대신 기존 후보 처리 여부만 별도 확인 권장)
