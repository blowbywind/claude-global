---
date: 2026-07-03
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-03

WebSearch 권한이 없어 제공된 리서치 결과와 기존 위키 내용을 교차검증한다.

**검증 결과 요약**
- `opentelemetry.io` 출처 → 1차 공식 문서, 수용
- `ox.security` 출처 → 벤더 블로그이나 기존 Kubescape 메모와 개념 일치, 부분 수용
- `oneuptime.com` 출처 → 모니터링 플랫폼 벤더 블로그, Argo/Flagger 항목은 위키 기존 지식과 중복
- `dev.to` 출처 → 커뮤니티 블로그, "자가 치유 파이프라인" 주장이 구체적 구현 없이 추상적 → **폐기**
- `kellton.com` 출처 → IT 컨설팅 회사 블로그, "Security as Code 표준화" 근거 불명 → **폐기**
- Argo CD + Flagger 조합, 에러 버짓 게이트 → 위키 `concepts-canary.md` / `concepts-slo.md`에 이미 존재 → **중복 폐기**
- K8s In-Place Pod Resizing, Gateway API + Backstage → 현재 인프라는 Docker Compose 기반, k8s 미사용 → **현재 역할 무관, 폐기**

---

## 오늘 배운 것

- **OTel Profiles 사양 공개 알파 진입** — 메트릭·로그·트레이스에 이어 프로파일링 데이터를 OTel 공식 스펙으로 표준화하는 작업이 공개 알파 단계에 들어섰다. 기존 메모(Parca/Pyroscope eBPF)는 구현 도구 중심이었고, 이번 항목은 OTel 스펙 레벨의 업데이트다. (출처: opentelemetry.io)
- **CI/CD 파이프라인 자체를 공격 표면으로 취급** — 빌드 파이프라인 내 시크릿 노출·위험 설정을 실시간으로 탐지하는 파이프라인 보안 강화 흐름. 기존 `job_workflow_ref` OIDC 공급망 하드닝과 연속선상에 있으며, 파이프라인 단계 자체에 대한 관측·제어 필요성이 부각되고 있다. (출처: ox.security)
- **맥락 인지형(Context-Aware) 보안 스캐닝** — 정적 스캔의 거짓 양성 피로를 해소하기 위해 취약점을 런타임 공격 가능 경로(reachability)와 매핑해 우선순위를 결정하는 방식. 기존 메모의 Kubescape Runtime Reachability가 이 패턴의 구체적 구현이며, 트렌드로서 확인됨. (출처: ox.security)

## 출처

- [OTel Profiling Signal — opentelemetry.io](https://opentelemetry.io)
- [CI/CD Pipeline Security — ox.security](https://ox.security)

## 위키화 후보

- `concepts/otel-profiles-spec.md` — OTel Profiles 사양(공개 알파): 4번째 신호 기둥으로서의 스펙 레벨 표준화 경위와 Parca/Pyroscope 연계 패턴

## 프로필 반영 후보 (저위험)

- **OTel Profiles 공개 알파** — OTel Collector 설정 권고 패턴에 "프로파일링 신호 수집 엔드포인트(OTLP Profiles)" 항목 추가 검토 (기존 eBPF 프로파일링 메모 보완)
- **파이프라인 보안 모니터링** — CI 체크리스트에 "빌드 단계 시크릿 노출 탐지(예: truffleHog, GitHub Advanced Security)" 항목 추가

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음 — 기존 infra-agent + Trivy/Kubescape 체계로 충분)
