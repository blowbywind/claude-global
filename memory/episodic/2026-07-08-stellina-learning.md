---
date: 2026-07-08
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-08

기존 위키 상태 확인 완료. 이제 리서치 결과를 교차검증한다.

---

**검증 판정 요약** (출력 전 처리):

| 항목 | 제공 출처 | 판정 |
|---|---|---|
| CI/CD 시크릿 분리 | worklifenotes.com | **버림** — 비권위적 + 기존 ESO/Secretless 항목 중복 |
| AI 코드 취약점 스캔 | claude-codex.fr | **버림** — 검증 불가 출처 |
| OTel eBPF Instrumentation (OBI) | opentelemetry.io | **채택** — 1차 공식 출처 |
| 하이브리드 계측 모델 | oneuptime.com | **조건부 채택** — OBI 파생 개념, OTel 문서로 뒷받침 가능 |
| VEX | devsecops.ae | **채택** — 개념 자체는 CISA 공식 표준으로 독립 검증 가능 |
| Multi-burn-rate SLO | deplyra.com | **채택** — Google SRE Workbook Ch.5로 독립 검증 가능 |
| GitOps 환경 격리 | devopstales.com | **버림** — 비권위적 + 현재 Docker Compose 환경과 즉시 관련성 낮음 |
| Git Revert 자동화 롤백 | requirementguide.com | **버림** — 검증 불가 출처 |

---

## 오늘 배운 것

- **OTel eBPF Instrumentation (OBI) — 제로코드 자동 계측**: 코드 수정·재시작 없이 리눅스 커널 uprobes로 Go/Rust 바이너리의 분산 트레이스·메트릭을 수집하는 OTel 표준 기능. 기존 프로파일 항목(Parca/Pyroscope)은 연속 프로파일링 전용이고, OBI는 트레이스/메트릭 계층이라 역할이 다름. OTel Operator `instrumentation.spec.ebpf`로 설정.
- **하이브리드 계측 모델**: 비즈니스 로직 = OTel SDK 직접 계측, 인프라·네트워크 레이어 = eBPF 프로브 수집 후 단일 OTel Collector로 통합. 기존 OTel Collector 설정 권고(tail-based sampling, 리소스 속성 표준화)에 계층 분리 원칙으로 추가할 수 있다.
- **VEX (Vulnerability Exploitability Exchange) — CVE 노이즈 필터**: CISA 공식 표준. SBOM 스캔 결과 중 현재 운영 환경에서 실제 익스플로잇 불가능한 이론적 CVE를 메타데이터로 표시해 필터링. 기존 Trivy → Kubescape 2단 스캔 파이프라인에서 HIGH/CRITICAL 알람 피로를 줄이는 3번째 레이어로 적용 가능.
- **Multi-burn-rate SLO 알람** — 기존 "에러 버짓 소진량 체크" 항목의 구체화: 단일 임계값 대신 1h/6h/3d 다중 시간창 소진율을 동시 체크. 짧은 창(1h)은 급격한 장애 탐지, 긴 창(3d)은 저속 잠식 탐지에 최적. Prometheus recording rules + Argo Rollouts canary 자동 중단으로 구현.

## 출처

*(리서치 결과 제공 URL 중 비권위적 6개 전부 제외 — worklifenotes.com, claude-codex.fr, devsecops.ae, deplyra.com, devopstales.com, requirementguide.com)*

- [OpenTelemetry Zero-Code Instrumentation](https://opentelemetry.io/docs/zero-code/) — OBI 공식 문서
- [Google SRE Workbook — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/) — Multi-burn-rate 원전 (Ch.5)
- [CISA — Minimum Requirements for VEX](https://www.cisa.gov/resources-tools/resources/minimum-requirements-vulnerability-exploitability-exchange-vex) — VEX 표준 정의

## 위키화 후보

- `concepts-obi.md` — OTel eBPF Instrumentation(OBI): 코드 수정 없는 커널 uprobes 기반 분산 트레이스 자동 계측
- `concepts-vex.md` — VEX: SBOM 스캔 CVE 노이즈 제거용 CISA 공식 메타데이터 표준

## 프로필 반영 후보 (저위험)

- **VEX 필터 추가** — 기존 "Trivy(정적) + Kubescape(런타임 필터) 2단 스캔" 권고에 "VEX 메타데이터로 이론적 CVE 필터링" 항목을 3단계로 추가
- **하이브리드 계측 원칙 추가** — 기존 OTel Collector 설정 권고 패턴에 "비즈니스 로직=SDK / 인프라·네트워크=eBPF 프로브 계층 분리" 원칙 추가

## 승인 필요 (고위험)

- **Multi-burn-rate 배포 게이트 구체화** — 기존 프로파일의 "에러 버짓 소진량 체크 스텝(승인 대기)" 항목을 1h/6h/3d 다중 시간창 번레이트 비교 방식으로 구체화. CI 파이프라인 게이팅 로직 변경에 해당하므로 승인 필요.

## 신규 도구 후보 (에이전트/스킬)

- (없음)
