---
date: 2026-07-02
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-02

웹검색 권한이 없어 기존 위키 grep 결과와 학습 지식으로 교차검증하겠다.

**중복·버림 처리:**
- OpenSSF Scorecard → 위키 `concepts/openssf-scorecard.md` 이미 존재 → 버림
- SLSA 1.0 → 위키 `concepts/slsa-provenance-자동화-패턴.md` 이미 존재 → 버림
- Tetragon Persistent Enforcement → 위키 `concepts/tetragon-런타임-강제-차단.md` 이미 존재 → 버림
- OTel Profiling "사용 권고" → 알파 명세를 프로덕션 권고하는 건 자기모순 → 주장 수정 후 부분 반영
- ArgoCD ApplicationSet, Kubernetes Gateway API v1.2 → K8s 스택 전제, 현재 Docker Compose + Caddy 환경과 무관 → 버림

---

## 오늘 배운 것

- **`actions/attest-build-provenance` — GitHub Artifact Attestations GA(2024-06)**: GitHub Actions에서 공식 액션 한 줄로 빌드 산출물에 서명된 Provenance를 Sigstore 기반으로 자동 첨부. 외부 slsa-github-generator 없이 SLSA 레벨 2 요건을 네이티브로 충족. 기존 CI 파이프라인에 `uses: actions/attest-build-provenance@v1` 스텝 하나로 적용 가능.
- **OTel Profiling 명세 알파 상태 지속**: `specs/otel/profiling` 경로의 OTel Profiling 명세는 2026-07 현재도 알파 — 프로덕션 직접 사용은 이르다. 기존 메모리의 Parca/Pyroscope 권고(OTel 4번째 기둥 도구 레이어)가 여전히 현실적 선택.
- **vcluster 기반 Ephemeral CI 환경**: K8s 위에 가상 클러스터를 PR마다 즉시 생성·폐기해 테스트 격리. 현재 Docker Compose 스택에는 직접 적용 불가이나, K8s 이전 시 CI 격리 전략 참고 항목으로 등록.

## 출처

- [GitHub Artifact Attestations is now generally available](https://github.blog/2024-06-25-github-artifact-attestations-is-now-generally-available/)
- [OTel Profiling Specification](https://opentelemetry.io/docs/specs/otel/profiling/)
- [vcluster — Virtual Kubernetes Clusters](https://www.vcluster.com/)

## 위키화 후보

- `vcluster-ephemeral-ci-환경.md` — PR별 가상 K8s 클러스터 격리 테스트 환경 개념 노트 (기존 위키에 없음)

## 프로필 반영 후보 (저위험)

- `actions/attest-build-provenance` — GitHub 네이티브 Provenance 첨부 스텝을 공급망 보안 체크리스트(기존 SLSA 항목 확장)에 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
