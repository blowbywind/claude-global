---
date: 2026-07-11
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-11

## 오늘 배운 것
- **Kyverno + Sigstore 어드미션 강제** — Cosign 서명 자체는 "선언"일 뿐, Kyverno가 어드미션 타임에 Fulcio 인증서·Rekor 투명성 로그·SBOM/SLSA 증명까지 검증해야 미서명 이미지가 실제로 차단됨. 기존 OpenSSF Scorecard CI 게이트 항목과 결합 권장.
- **Cosign 키리스 서명 구조** — GitHub Actions OIDC 토큰 → Fulcio가 단기 인증서 발급 → Rekor 서명 기록. 장기 GPG/KMS 키 관리·로테이션·유출 위험 자체가 제거됨(기존 GitHub OIDC/시크릿리스 패턴과 결합 가능).
- **Argo Rollouts vs Flagger 선택 기준** — ArgoCD 기반이면 단계별 명시 승인 게이트가 필요한 Argo Rollouts, Flux 기반이면 매니페스트 변경 없이 표준 Deployment에 자동 카나리 승격하는 Flagger가 적합. 기존 카나리 배포 노트에 보강할 만한 신규 세부사항(기존 노트엔 도구명만 언급, 선택기준은 없었음).
- **카나리 분석 다중 지표 필수** — 에러율만으로는 성능 저하를 놓치므로 성공률+지연시간 임계치를 함께 정의하고, 자동 롤백 시나리오를 프로덕션 투입 전 반드시 테스트.
- **OTel Weaver** — Semantic Conventions를 CLI로 검증·문서화·코드생성하는 공식 도구 등장. GenAI 속성은 별도 저장소로 분리 이관, k8s/컨테이너 레지스트리 리소스 속성은 stable 승격(기존 semconv 리소스 속성 항목 업데이트).
- **GitHub 불변(Immutable) 릴리스 GA + Attestation 기본화** — 릴리스 게시 후 자산 추가/수정/삭제 및 태그 삭제·이동 방지. 공개 레포는 Artifact Attestation 생성이 옵트인→기본 동작으로 전환 중(SLSA 출처 증명 자동화).

※ 리서치 원문 중 "Dagger 폴리글랏 파이프라인", "SLSA Level 3 컴플라이언스 요구"는 단일 출처 URL 없이 "검색결과 종합"으로만 표기되어 검증 불가 — 채택하지 않고 폐기.

## 출처
- [Argo Rollouts vs Flagger](https://oneuptime.com/blog/post/2026-02-26-argocd-rollouts-vs-flagger/view)
- [카나리 다중 지표](https://calmops.com/architecture/progressive-delivery-canary-argo-rollouts-flagger/)
- [Kyverno + Cosign 이미지 검증](https://oneuptime.com/blog/post/2026-02-09-kyverno-image-verification-cosign/view)
- [Sigstore/Cosign 키리스 서명](https://devopsil.com/articles/2026-03-21-supply-chain-security-sigstore-cosign)
- [OTel Semantic Conventions 이슈(GenAI 분리)](https://github.com/open-telemetry/semantic-conventions/issues/3330)
- [OTel Weaver 블로그](https://opentelemetry.io/blog/2025/otel-weaver/)
- [GitHub 불변 릴리스 GA](https://github.blog/changelog/2025-10-28-immutable-releases-are-now-generally-available/)
- [Artifact Attestations 문서](https://docs.github.com/en/actions/concepts/security/artifact-attestations)

## 위키화 후보
- Kyverno+Sigstore 어드미션 강제 — 신규 개념 노트(`concepts-container.md` 보강 또는 신규), 서명-검증 분리 원칙 명시.
- GitHub 불변 릴리스 + Artifact Attestation 기본화 — SLSA 출처 증명 자동화 신규 개념 노트.

## 프로필 반영 후보 (저위험)
- [2026-07-11] Cosign 키리스 서명(Fulcio+Rekor) — 기존 GitHub OIDC/ESO 시크릿리스 항목에 공급망 서명 축 추가.
- [2026-07-11] Argo Rollouts(ArgoCD)/Flagger(Flux) 선택 기준 — 기존 카나리 배포 권고에 도구 선정 가이드 보강.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
