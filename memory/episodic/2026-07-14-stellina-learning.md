---
date: 2026-07-14
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-14

## 오늘 배운 것
- **GitHub Actions 2026 보안 로드맵**: `dependencies:` 섹션으로 직접·전이 종속성 전체를 커밋 SHA로 자동 잠그는 기능, 조직 단위 egress firewall, 워크플로 실행 권한 중앙통제 execution policy ruleset 예정 — 기존 메모리의 "Actions SHA 전체 고정 + Renovate"(2026-06-29) 인사이트를 확장하는 공식 로드맵 확인.
- **Artifact Attestations 기본 활성화 전환**: Sigstore 기반 provenance/SBOM 증명이 공개 저장소에서 옵트인→기본 활성화로 전환 중, 서명은 10분 단기 인증서+불변 transparency log 사용 — 기존 `actions/attest-build-provenance`(2026-07-02) 체크리스트 항목의 배경 사실을 보강.
- **진행형 배포 결합 패턴**: 인프라 변경=카나리, 기능 단위=피처 플래그로 역할을 분리하고, 플래그는 온오프뿐 아니라 조합 상태별 사용자 여정까지 테스트, 릴리스 토글은 재고처럼 주기적 archive 관리 + 민감 로직은 서버사이드 평가·RBAC·감사로그 필수.
- **리스크 기반 배포 차등화**: 저위험 변경은 블루-그린 생략, 중위험은 표준 블루-그린+자동 헬스체크, 고위험은 확장 soak 기간+강화 모니터링으로 차등 — 기존 "카나리 + 에러버짓 게이트"(2026-06-30) 인사이트에 위험도별 세분화 기준 추가.
- **OpenTelemetry Weaver**: 시맨틱 컨벤션을 YAML 스키마로 정의·검증하고 타입세이프 SDK를 생성하는 툴체인, 2026년 federated semantic conventions·contrib 레포 자동테스트 온보딩이 로드맵 — 기존 OTel Collector/eBPF 프로파일러 메모와 별개의 신규 축.
- (참고, 직접 적용성 낮음) 컨테이너 런타임 격리(gVisor/Kata/LiteBox, RuntimeClass 혼용)는 K8s 멀티테넌트 전제 — ai-ops는 Docker Compose 기반이라 현 시점 실무 적용 대상 아님.

## 출처
- [What's coming to our GitHub Actions 2026 security roadmap](https://github.blog/news-insights/product-news/whats-coming-to-our-github-actions-2026-security-roadmap/)
- [Artifact attestations](https://docs.github.com/en/actions/concepts/security/artifact-attestations)
- [Progressive Delivery with Feature Flags](https://www.getunleash.io/blog/progressive-delivery-with-feature-flags)
- [AI-Powered Progressive Delivery & Feature Flags 2026](https://azati.ai/blog/ai-powered-progressive-delivery-feature-flags-2026/)
- [OpenTelemetry Weaver](https://opentelemetry.io/blog/2025/otel-weaver/)
- [Kata vs Firecracker vs gVisor](https://edera.dev/stories/kata-vs-firecracker-vs-gvisor-isolation-compared)

## 위키화 후보
- OpenTelemetry Weaver — 시맨틱 컨벤션 스키마 검증+SDK 자동생성 툴체인, 신규 개념 노트 가치 있음(기존 observability 노트와 별개 축).

## 프로필 반영 후보 (저위험)
- Actions `dependencies:` SHA 전체 고정 로드맵 인지 — 기존 SHA 고정 체크리스트에 "예정 기능" 각주 추가.
- Artifact Attestations 기본 활성화 전환 인지 — 기존 provenance 체크리스트에 "opt-in→default 전환 중" 각주 추가.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보
- (없음)
