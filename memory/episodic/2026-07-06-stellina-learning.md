---
date: 2026-07-06
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-06

위키 grep 완료 — `vex-openvex.md`, `concepts-progressive.md`, `concepts-otel.md` 기존 노트 확인. WebSearch 권한 없음 → 리서치 원문·출처 URL·기존 지식으로만 교차검증.

**검증 결과 폐기 항목:**
- *"OBI가 Grafana Beyla를 계승"* — Beyla는 현재도 활성 Grafana 독립 프로젝트, OBI는 OTel 자체 구현체로 별도 공존. "계승"은 사실 오류.
- *IDP/Backstage (plainenglish.io)* — 블로그 수준 출처, 검증 불충분.
- *Kubernetes Semantic Conventions RC* — 이미 프로필 2026-06-27 항목과 중복.

---

## 오늘 배운 것

- **OpenVEX — CVE 거짓 양성 억제 명세**: 컨테이너 이미지 스캔(Trivy 등)에서 발견된 CVE 중 실행 환경에서 실제 영향 없는 항목을 VEX 문서로 명시적 예외처리 → 파이프라인 불필요한 차단 감소. 기존 Trivy(정적) + Kubescape(런타임 필터) 2단 스캔에 보완적 3번째 레이어.
- **OTel eBPF Instrumentation (OBI) — 무코드 자동 계측**: 코드 변경 없이 커널 시스템콜 레벨에서 Go·Rust·C++ 및 DB·AI 도구를 자동 계측. OTel 프로젝트 공식 eBPF 구현체(Beyla와 별개로 공존).
- **OTel Profiles 신호 표준화 진행 중**: eBPF 기반 연속 프로파일링(기존 권고: Parca/Pyroscope)이 OTel 4번째 공식 신호로 퍼블릭 알파 진입. OTel Collector 단일 파이프라인에서 Traces/Metrics/Logs/Profiles 통합 가능성 열림.
- **OTel CNCF Graduated 프로젝트 확정**: 벤더 중립 표준 지위 공식화 → 도구 간 호환성·락인 방지 근거 강화.
- **Ephemeral Preview Environments (PR별 임시 환경)**: PR마다 격리 환경 자동 생성 → 병합 전 프로덕션 수준 검증. GitHub Actions + Docker Compose 조합으로 구현. 현재 autobots CI에 없는 패턴.
- **Progressive Delivery + Continuous Verification**: 배포 속도보다 안정성 우선 — Policy-as-Code + 연속 검증(Argo Rollouts·Flagger)으로 장애를 사전 통제. 에러 버짓 게이트(기존 권고)와 연계됨.

## 출처

- [OpenVEX Specification](https://github.com/openvex/spec)
- [OpenTelemetry eBPF Instrumentation](https://opentelemetry.io/docs/zero-code/go/)
- [OTel Profiling Signal](https://opentelemetry.io/blog/2024/profiling/)
- [OTel CNCF Graduation (InfoQ)](https://www.infoq.com/news/2024/01/opentelemetry-graduation/)
- [Progressive Delivery & Continuous Verification (Harness)](https://harness.io/blog/continuous-verification)
- [Ephemeral Preview Environments (Octopus)](https://octopus.com/blog/feature-branch-web-apps)

## 위키화 후보

- `concepts/ephemeral-preview-environments` — PR별 임시 격리 환경 자동 구성 패턴 (기존 노트 없음, CI/CD 검증 강화에 직결)
- `vex-openvex.md` **재작성** — 기존 노트가 세션 한도 오류로 본문이 빈 상태, 유효 내용으로 교체 필요

## 프로필 반영 후보 (저위험)

- **OpenVEX CVE 예외처리** — "Trivy HIGH/CRITICAL CVE 차단" 권고에 *"무해 항목은 VEX 명세로 예외처리하여 불필요한 차단 완화"* 보완 문구 추가
- **Ephemeral Preview Environments** — CI/CD 파이프라인 권고 체크리스트에 "PR별 임시 환경으로 병합 전 프로덕션 수준 검증" 항목 추가

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음)
