---
date: 2026-07-02
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-02

## 오늘 배운 것
- **스팬 수준 평가(Span-level Evaluation)를 통한 정밀 디버깅**: 최종 결과물 검증을 넘어, 에이전트의 다단계 실행 흐름(Trace)을 개별 스팬(Span) 단위로 세분화해 평가합니다. 특정 도구 호출이나 검색(Retrieval) 단계의 실패를 격리 추적할 수 있어 E2E 테스트 및 런타임 에러 분석의 효율성이 극대화됩니다.
- **콘텍스트 엔지니어링 파이프라인 검증**: 단순 데이터 전처리를 넘어 LLM의 인프런스에 제공되는 텍스트 분할(Chunking), 검색 라우팅, 메모리 관리 전반을 최적화하는 파이프라인 패턴입니다. 데이터의 누락률(null rate)이나 정합성을 테스트 코드에서 assert하는 검증 설계에 직접 활용 가능합니다.
- **도메인 특화 시뮬레이션 및 동적 데이터셋 테스트**: 고정된 벤치마크 대신, 가상 환경 시뮬레이션을 활용하여 도메인 맞춤형 시나리오로 에이전트의 예외 상황과 엣지 케이스를 동적으로 검증함으로써 E2E 테스트 커버리지를 높입니다.
- **데이터 파이프라인을 위한 핀옵스(FinOps) 설계**: 데이터 파이프라인과 대규모 에이전트 테스트 실행 시 비용 누수를 통제하기 위해, 파이프라인 단위당 실행 비용을 측정하고 자동 계층화 저장소 기법을 활용하여 테스트 실행 인프라 비용을 최적화합니다.

## 출처
- [Confident AI - Trajectory & Span-level Evaluation](https://www.confident-ai.com)
- [ApplyData - Context Engineering Pipelines](https://applydata.io)
- [Zylos AI - Domain-Specific Simulation Testing](https://zylos.ai)
- [TxMinds - FinOps & Cloud Data Pipelines Cost Optimization](https://www.txminds.com)

## 위키화 후보
- **스팬 수준 평가 (Span-level Evaluation)** — 에이전트 E2E 트레이스 내 개별 컴포넌트(도구 호출, 검색 등) 단위로 성능 및 실패 여부를 격리 평가하는 기법.
- **콘텍스트 엔지니어링 파이프라인 (Context Engineering Pipeline)** — LLM 인프런스 최적화를 위해 분할(Chunking), 검색 라우팅, 메모리 관리 단계를 모듈화하여 제어하는 데이터 파이프라인 아키텍처.

## 프로필 반영 후보 (저위험)
- **Span-level & Trajectory Evaluation**: E2E 에이전트 테스트 작성 시 최종 아웃풋 외에 내부 실행 경로와 개별 단계를 디버깅 및 격리 검증하는 기법.
- **Context Engineering**: LLM 데이터 파이프라인의 데이터 흐름 및 런타임 예외 처리를 검증하는 기술적 프레임워크.

## 승인 필요 (고위험)


## 신규 도구 후보 (에이전트/스킬)
- [agent] E2E-Span-Analyzer — 에이전트 실행 로그(Trace)를 파싱하여 각 스팬(Span)별 실패 지점 및 성능 병목을 분석하고 자동으로 Jest/Cypress 검증 코드를 제안하는 에이전트.
- [skill] finops-cost-tracker — CI/CD 파이프라인 내 E2E 테스트 빌드 수행 시 소모되는 LLM API 및 인프라 비용을 단계별로 분석하고 리포팅하는 스킬.
