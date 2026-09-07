---
date: 2026-06-21
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-06-21

## 오늘 배운 것

- **DORA 메트릭 2026 역설** — AI 도입이 개인 생산성은 올리지만 팀/조직 안정성(변경 실패율·복구 시간)을 오히려 악화시키는 사례 증가. Goodhart's Law("지표가 목표가 되면 지표 신뢰성↓") 적용 사례로, DORA 4지표만으로 부족하고 **DX Core 4** 프레임워크와 병행해야 한다.

- **Falco + eBPF 런타임 보안** — 이미지 스캔(Trivy)은 배포 전 취약점 탐지고, **Falco**는 배포 후 컨테이너 내부 이상 행위(권한 상승, 셸 스폰, 비인가 파일 접근)를 실시간 탐지. eBPF 드라이버 기반으로 커널 모듈 불필요, CNCF 졸업 프로젝트(v0.43, 2026.01).

- **SLO 에러 버짓 → CI/CD 게이트** — 배포 직전 에러 버짓 소진량을 체크해 ①건강→자동승인 ②임계→수동승인 ③소진→배포 차단 3단계 정책 구현 가능. Prometheus + Grafana 기반 실용 구현이 2026 SRE 표준으로 자리잡는 중.

- **GitHub Actions 캐시 × 매트릭스 최적화** — `setup-node`/`setup-python` `cache:` 파라미터 활성화만으로 의존성 설치 45s → 3s(93% 단축). 매트릭스 exclude로 불필요한 조합 제거 + OS별 캐시 키 분리가 핵심.

- **rootless Docker 보안 체크리스트 패턴** — rootless 데몬 + `drop ALL` caps + seccomp 커스텀 프로파일 + read-only root FS + Falco 런타임 감시를 조합하는 것이 2026 프로덕션 표준. Docker 소켓 직접 마운트 대신 소켓 프록시(API 화이트리스트) 패턴 권고.

## 출처

- [DORA Metrics Benchmarks 2026 — Gitrecap](https://www.gitrecap.com/blog/dora-metrics-benchmarks)
- [Container Runtime Security Falco 2026 — Decryption Digest](https://www.decryptiondigest.com/blog/container-runtime-security-falco)
- [Docker Security: Rootless, Seccomp, Falco — Systems Explained](https://systeminternals.dev/docker/security/)
- [Error Budget Policies for Release Gating — OneUptime](https://oneuptime.com/blog/post/2026-02-17-how-to-establish-error-budget-policies-for-release-gating-on-google-cloud/view)
- [GitHub Actions Performance Optimization 2026 — OneUptime](https://oneuptime.com/blog/post/2026-02-02-github-actions-performance-optimization/view)

## 위키화 후보

- `concepts/dora-metrics-dx-core4.md` — DORA 4지표 + DX Core 4 보완 모델, AI 도입 역설, Goodhart's Law 적용
- `concepts/slo-error-budget-ci-gate.md` — SLI/SLO/에러 버짓 → 배포 게이트 3단계 정책 (Prometheus + Grafana 구현 패턴)

## 프로필 반영 후보 (저위험)

- **Falco eBPF 런타임 모니터링** — Trivy(정적 스캔)와 함께 배포 후 이상 행위 탐지 도구로 인프라 권고 항목에 추가
- **GitHub Actions `cache:` 파라미터 + 매트릭스 exclude** — CI 빌드 시간 최적화 기본 체크리스트에 반영

## 승인 필요 (고위험)

- **에러 버짓 → 배포 게이트 적용 제안** — autobots CI 파이프라인에 Prometheus 에러 버짓 소진량 체크 스텝 추가. 기존 배포 정책 변경이므로 승인 필요.

## 신규 도구 후보 (에이전트/스킬)

- [skill] `falco-runtime-audit` — 실행 중인 컨테이너 Falco 이상 이벤트 요약 및 심각도별 분류 리포트 생성


## 추가 학습 (19:07 UTC)
---

## 오늘 배운 것

- **Falco + eBPF 런타임 보안**: 이미지 스캔은 배포 *전* 정적 검사만 하지만, Falco는 커널 시스템콜을 실시간 감시해 컨테이너 *실행 중* 이상행위(예상 외 outbound 연결, crypto 마이닝)를 탐지한다. eBPF 드라이버 사용 시 커널 버전 호환성 문제 없음. 알림은 Falcosidekick을 통해 Slack·PagerDuty로 라우팅 가능. ([Falco Container Runtime Security 2026](https://www.decryptiondigest.com/blog/container-runtime-security-falco))

- **SOPS + age — GitOps 친화적 시크릿 암호화**: 시크릿 값만 암호화(키는 평문 유지)해 `.enc.yaml`을 git에 직접 커밋 가능. CI/CD 서버는 별도 age 키를 recipient로 등록해 자동 복호화. PGP 대신 age 사용으로 복잡도 대폭 감소. `sops --encrypt --age <pubkey1>,<pubkey2> secrets.yaml` 형식. ([SOPS + age 파이프라인 통합](https://oneuptime.com/blog/post/2026-02-09-sops-age-encryption-kubernetes-secrets/view))

- **DORA 5번째 지표: Deployment Rework Rate**: 2024년 추가. 롤백·긴급 핫픽스가 필요한 배포 비율. Change Failure Rate의 프록시 역할 한계를 보완하기 위해 도입. ([faros.ai](https://www.faros.ai/blog/5th-dora-metric-rework-rate-track-it-now))

- **AI 도구 역설 (Goodhart's Law)**: AI 코딩 도구 도입 시 Deployment Frequency·Lead Time은 개선되나 Change Failure Rate와 Rework Rate가 동반 상승할 위험. "지표를 목표로 삼으면 지표가 측정치로서 의미를 잃는다" — 2025 DORA 보고서가 Change Failure Rate 집중 모니터링을 권고. ([DORA Metrics 2026 동향](https://getdx.com/blog/dora-metrics-tools/))

- **Falco Defense-in-Depth 레이어**: 이미지 스캔(Trivy) → 입장 제어(Admission Controller) → 런타임 감시(Falco) 순서로 계층화. 셋 중 하나만으로는 공격 표면 완전 차단 불가. ([oneuptime Falco guide](https://oneuptime.com/blog/post/2026-01-28-falco-container-security/view))

---

## 출처

- [Container Runtime Security Guide: Falco Threat Detection (2026)](https://www.decryptiondigest.com/blog/container-runtime-security-falco)
- [How to Implement Falco for Container Security](https://oneuptime.com/blog/post/2026-01-28-falco-container-security/view)
- [Using SOPS with Age for Kubernetes Secrets in CI/CD](https://oneuptime.com/blog/post/2026-02-09-sops-age-encryption-kubernetes-secrets/view)
- [SOPS: Secrets OPerationS 공식](https://getsops.io/)
- [Rework Rate is Here: 5th DORA Metric](https://www.faros.ai/blog/5th-dora-metric-rework-rate-track-it-now)
- [DORA Metrics Tools 2026](https://getdx.com/blog/dora-metrics-tools/)

---

## 위키화 후보

- `concepts/falco-runtime-security.md` — Falco eBPF 드라이버 기반 컨테이너 런타임 이상 탐지, Falcosidekick 알림 라우팅, Trivy·Admission Controller와의 Defense-in-Depth 레이어 구성
- `concepts/sops-age-gitops-secrets.md` — SOPS+age로 시크릿 값 암호화 후 git 커밋, CI/CD recipient 키 등록 패턴, PGP 대비 장점

---

## 프로필 반영 후보 (저위험)

- Falco + eBPF 드라이버를 컨테이너 런타임 보안 기본 레이어(Trivy 스캔 이후 단계)로 인식
- SOPS+age 패턴: 시크릿 파일이 git 추적 필요한 경우 `.enc.yaml` 암호화 후 커밋 표준 방법으로 채택 검토

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

_(없음)_
