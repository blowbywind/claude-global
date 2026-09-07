---
date: 2026-07-08
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-08

웹 도구 권한이 없으므로, 기존 위키 grep 결과와 내부 지식으로 교차검증합니다.

---

**검증 결과 요약 (필터링 근거)**

| 항목 | 판정 | 사유 |
|---|---|---|
| Prompt Repetition (promptlayer.com) | ❌ 폐기 | 벤더 블로그 단독 출처, "단방향 어텐션 극복" 메커니즘 학술 교차 검증 불가 |
| reasoning_effort / budget_tokens | ❌ 중복 | `wiki/concepts/test.md` 및 프로필(2026-06-26)에 이미 등재 |
| MMLU 포화 → 맞춤형 데이터셋 | ❌ 중복 | `gpqa-벤치마크.md`, `wiki-concepts-hle.md` 벤치마크 포화 개념 이미 등재 |
| GPU 가속 ETL (vector-labs.ai) | ⚠️ 조건부 | RAPIDS/cuDF는 실존 도구, vector-labs.ai 출처 권위 미약 → 사실 부분만 채택 |
| Declarative Workflow-as-Code (kestra.io) | ✅ 검증 | Kestra 실존 플랫폼, YAML 파이프라인 패턴 업계 표준 |
| Traceability × 규제 (braintrust.dev) | ✅ 검증 | EU AI Act 실존, 프롬프트 버전↔평가 연결은 braintrust 공식 기능 |
| Modular Prompt Design (dev.to) | ✅ 검증 | 개념 실존(PromptLayer, LangSmith 지원), dev.to는 커뮤니티 블로그이나 사실 일치 |
| Semantic Grounding (dev.to) | ✅ 검증 | dbt Semantic Layer, Cube 등 실존 구현체와 일치, 개념 신뢰 |

---

## 오늘 배운 것

- **선언적 워크플로우 Workflow-as-Code**: YAML 기반 파이프라인 정의로 AI 에이전트 협업·검증 자동화 표준화. Kestra 등이 구현 레퍼런스. 테스트 파이프라인 코드화 및 재현성 확보에 직접 적용 가능.
- **모듈러 프롬프트 설계 (Prompt Fragments)**: 단일 거대 프롬프트 대신 어조·형식·제약 단편으로 분할 후 동적 조합. 단편별 독립 회귀 테스트가 가능해져 변경 영향 범위를 좁힘.
- **시맨틱 그라운딩 (Semantic Grounding)**: AI 에이전트가 DB 직접 조회 시 지표 해석 환각 방지를 위해 시맨틱 레이어·메트릭 카탈로그 구축. E2E 테스트 설계 시 지표 정합성 검증 체크포인트로 활용.
- **Traceability 기반 AI 거버넌스**: 프롬프트 버전·모델 사양·데이터셋·구성을 평가 점수와 연결 → EU AI Act 등 규제 준수 감사 추적(audit trail) 자동 생성. 기존 Regression CI Gate와 연동하면 게이트 실패 원인까지 추적 가능.
- **GPU 가속 ETL (RAPIDS/cuDF)**: ML 파이프라인 전처리 병목 제거. 성능 테스트 시 GPU 가속 전·후 처리량 벤치마크 지표를 회귀 기준으로 포함해야 함.

## 출처

- [Kestra — Open-Source Declarative Orchestration](https://kestra.io)
- [Braintrust Evals Docs](https://braintrust.dev/docs/guides/evals)
- [NVIDIA RAPIDS — GPU-accelerated data science](https://rapids.ai)
- [dev.to — Prompt Fragments & Semantic Grounding](https://dev.to)

## 위키화 후보

- **시맨틱 그라운딩 (Semantic Grounding)**: AI 에이전트 DB 조회 환각 방지용 시맨틱 레이어 패턴 — 에이전트 평가 시나리오 설계에 신규 개념, 기존 노트 없음

## 프로필 반영 후보 (저위험)

- **Traceability × Regression CI Gate 연동**: 프롬프트 버전·모델·데이터셋을 평가 점수와 연결하는 추적 체계 → 기존 [2026-06-24] Regression CI Gate 인사이트에 "감사 추적 자동화" 보완
- **Modular Prompt Design (Prompt Fragments)**: 프롬프트 단편 분할·조합으로 회귀 테스트 범위 축소 — 테스트 설계 역량 항목으로 추가

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

- `[skill] prompt-fragment-linter` — 모듈러 프롬프트 단편 파일의 구조·중복·누락 제약 자동 검사. Prompt Fragments 패턴 도입 시 CI 게이트로 활용
