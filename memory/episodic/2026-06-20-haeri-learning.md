---
date: 2026-06-20
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-06-20

4회 검색 완료(상한 5회). 충분한 정보 수집했으므로 결과를 정리합니다.

## 오늘 배운 것
- **LLM-judge 5대 편향**(position, verbosity, self-preference, format, calibration drift)을 인지하고, 회귀 평가 프롬프트에 답변 순서 랜덤화·대칭 포맷 강제·"피상적 특징 무시" 지시를 넣어 완화한다. 기존 메모리의 LLM-as-Judge 패턴을 보강하는 실무 체크포인트.
- **출시 판정용 3-judge 앙상블**: Claude Sonnet 4.5 + GPT-5.1 + Gemini 2.5 Pro를 교차 패밀리로 돌려 다수결/가중투표 — self-preference 편향을 구조적으로 제거. 신뢰도 목표는 Krippendorff's alpha ≈ 0.8.
- **AI 에이전트는 비결정성을 "버그가 아닌 기능"으로 다뤄야 함**: LLM 레이어를 DI로 mock해 단위테스트는 결정론적으로, E2E는 객관적 검증 가능 시나리오(구조화 추출·분류·구문 검증)에만 집중. flake율 추적→격리(quarantine)→근본원인 분석 루프 채택.
- **데이터 계약(Data Contract) + CI/CD 검증**이 파이프라인 검증의 베이스 레이어로 표준화: 스키마/계약 테스트는 매 실행마다 빠르게, 비준수 레코드는 거부·격리(quarantine)해 downstream 오염 방지. 기존 row count/null rate/freshness 3종 assertion 위에 "계약 위반 격리"를 추가.
- **PBT(속성기반 테스트) + 2단계 CoT 프롬프팅**: ①zero-shot CoT로 생성 전략·속성 추출 → ②API 문서에서 속성 목록 도출 후 속성별 테스트 작성. pass@k가 놓치는 정확성 갭을 PBT가 노출 → LLM 생성 코드 검증에 효과적.

## 출처
- [LLM-Judge Bias Mitigation (2026)](https://futureagi.com/blog/evaluating-llm-judge-bias-mitigation-2026/)
- [Rubric-Based Evals & LLM-as-a-Judge (Medium, 2026)](https://medium.com/@adnanmasood/rubric-based-evals-llm-as-a-judge-methodologies-and-empirical-validation-in-domain-context-71936b989e80)
- [Data Quality as Code (Medium, 2026)](https://medium.com/@manik.ruet08/data-quality-as-code-treating-data-validation-like-software-testing-e1bf3e0968b1)
- [The AI Agent Testing Pyramid for Non-Deterministic Systems](https://medium.com/@derekcashmore/the-ai-agent-testing-pyramid-a-practical-framework-for-non-deterministic-systems-276c22feaec8)
- [From Prompts to Properties: LLM Code Gen with PBT (FSE 2026)](https://dl.acm.org/doi/10.1145/3696630.3728702)

## 위키화 후보
- `llm-judge-bias-mitigation` — LLM-judge 5대 편향과 앙상블·프롬프트 완화법 (기존 agent-evaluation-metrics 노트에 섹션 추가 방식 권장)
- `non-deterministic-agent-testing` — 비결정성 1급 처리, mock-DI/quarantine/객관적 검증 시나리오 원칙

## 프로필 반영 후보 (저위험)
- LLM-as-Judge 사용 시 답변 순서 랜덤화 + 대칭 포맷 강제로 position/verbosity 편향 완화, 중요 판정은 교차 패밀리 3-judge 앙상블 적용
- AI 에이전트 E2E는 객관적 검증 가능 시나리오만 대상으로, flake율 추적→quarantine→근본원인 분석 루프 운영

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] llm-judge-eval — 답변 순서 랜덤화·대칭 포맷·3-judge 앙상블을 자동 구성해 회귀 평가를 표준화하는 스킬


## 추가 학습 (18:15 UTC)
---

## 오늘 배운 것

- **AI-Native E2E Testing**: AI가 앱 컨텍스트를 읽어 테스트 플로우를 자동 생성·유지하고 Playwright 레벨에서 replay하는 패턴. 기존 "AI-보조 스크립팅"보다 한 단계 위. Stagehand, Midscene.js 등이 구현체. ([출처](https://getautonoma.com/blog/ai-e2e-testing-in-2026))

- **RAG Triad 평가 3지표**: RAG 파이프라인 테스트 시 Faithfulness(생성 답변이 검색 문서에 근거하는지) + Context Recall(검색 컨텍스트가 충분한지) + Answer Relevance(답이 쿼리에 실제로 답하는지) 3종 세트. DeepEval/RAGAS/TruLens가 구현체. LLM 앱 E2E 검증 시 적용 가능. ([출처](https://deepeval.com/guides/guides-rag-evaluation))

- **Execution-Aware 회귀 테스트 (TestWeaver)**: 기존 LLM 테스트 생성이 정적 코드에 의존하는 한계를 극복. 런타임 실행 컨텍스트·동작 데이터를 피드백으로 삼아 회귀 테스트를 생성. 코드 진화에 따른 테스트 노후화 문제 완화. ([출처](https://arxiv.org/pdf/2508.01255))

- **Gold Set + Semantic Similarity 회귀 테스트 파이프라인**: LLM 출력을 고정 gold set과 비교할 때 단순 문자열 매칭이 아닌 cross-encoder 모델 + LLM 판단 조합으로 의미적 유사도 평가. breaking change 임계값을 수치로 정의 가능. ([출처](https://testquality.com/llm-regression-testing-pipeline/))

- **ETL 파이프라인 스키마 일관성 테스트**: 스키마 변경이 다운스트림을 파괴하는 실전 패턴 → Great Expectations 등으로 스키마 호환성 자동 검증을 파이프라인에 내장. 기존 row count/null rate/freshness 3종에 schema drift 감지 추가 권장. ([출처](https://www.integrate.io/blog/data-validation-etl/))

- **Composite Prompting**: CoT를 단독 사용하는 대신 few-shot + role + CoT + 포맷 제약을 합성한 복합 프롬프트. 복잡한 통합 테스트 시나리오 생성 시 단일 CoT보다 출력 품질이 높음. ([출처](https://dev.to/honestai/7-prompt-engineering-techniques-that-actually-work-in-2026-with-real-examples-3aj1))

---

## 출처

- [AI E2E Testing and the LLM-Agent OSS Wave | Autonoma AI](https://getautonoma.com/blog/ai-e2e-testing-in-2026)
- [RAG Evaluation | DeepEval](https://deepeval.com/guides/guides-rag-evaluation)
- [TestWeaver: Execution-aware Regression Testing](https://arxiv.org/pdf/2508.01255)
- [LLM Regression Testing Pipeline — TestQuality](https://testquality.com/llm-regression-testing-pipeline/)
- [Data Validation in ETL 2026 | Integrate.io](https://www.integrate.io/blog/data-validation-etl/)
- [7 Prompt Engineering Techniques 2026 | DEV Community](https://dev.to/honestai/7-prompt-engineering-techniques-that-actually-work-in-2026-with-real-examples-3aj1)

---

## 위키화 후보

- **RAG Triad Evaluation**: Faithfulness/Context Recall/Answer Relevance 3지표 체계 — LLM 앱 테스트에서 에이전트 평가 지표(TrajectoryAccuracy 등)와 짝을 이루는 별도 개념
- **Execution-Aware 테스트 생성**: 정적 코드 기반 LLM 테스트의 한계와 런타임 피드백 기반 대안 패턴 (TestWeaver)

---

## 프로필 반영 후보 (저위험)

- RAG 파이프라인 검증 시 Faithfulness / Context Recall / Answer Relevance 3지표를 체크리스트 기준으로 참조
- LLM 회귀 테스트 구성 시 gold set + cross-encoder semantic similarity 조합으로 breaking change 수치 임계값 정의

---

## 승인 필요 (고위험)

_(없음)_


## 추가 학습 (18:15 UTC)
5회 검색 완료. 결과 정리합니다.

---

## 오늘 배운 것

- **LLM-as-Judge 골든 데이터셋 원칙**: 평가 기준 데이터는 합성(synthetic) 예시가 아닌 **실제 프로덕션 실패 사례 200~500개**로 구성해야 인간 리뷰어와 85~90% 일치율 달성 가능. GEval(커스텀 지표), DAGMetric(결정트리 평가), ArenaGEval(쌍비교)가 2026년 표준 프레임워크로 자리잡음.
  출처: [deepeval.com](https://deepeval.com/guides/guides-llm-as-a-judge)

- **데이터 파이프라인 테스트 계층**: 소스 경계(Great Expectations) → 변환 레이어(dbt tests) 이중 검증이 표준. 각 스테이지 boundary에서 row count ±20%, null rate, freshness 3종 assertion 실패 시 **파이프라인 즉시 halt** (하류로 불량 데이터 전파 방지). (이미 아는 내용이나 "즉시 halt" 원칙은 명시적으로 없었음)
  출처: [evidentlyai.com](https://learn.evidentlyai.com/ml-observability-course/module-5-ml-pipelines-validation-and-testing/introduction-data-ml-pipeline-testing)

- **Mutation-Guided LLM 테스트 생성 (Meta ACH)**: 전통적 커버리지 100% 추구 대신 **현재 탐지 안 되는 결함(mutant)을 타깃**으로 테스트 생성. Meta의 ACH 시스템은 10,795개 Kotlin 클래스에서 571개 테스트를 생성해 51%가 커버리지도 동시 향상. 뮤턴트 동등성 판별 정밀도 0.95/재현율 0.96 달성(전처리 후).
  출처: [arxiv 2501.12862](https://arxiv.org/pdf/2501.12862)

- **CoT 이후의 추론 기법**: Tree of Thoughts(ToT, 분기 탐색) · Chain-of-Verification(CoVe, 단계별 자기검증)이 2026년 실무 표준으로 부상. 복잡한 통합 테스트 시나리오 생성 시 CoT보다 ToT가 더 다양한 엣지케이스 도출. (기존 메모리: CoT만 수록됨)
  출처: [dev.to/honestai](https://dev.to/honestai/7-prompt-engineering-techniques-that-actually-work-in-2026-with-real-examples-3aj1)

- **멀티에이전트 LLM Judge 편향 문제**: 단일 LLM Judge는 position bias·verbosity bias가 있음. 2026 논문(FairJudge)에서 다수의 독립적 관점 에이전트 앙상블이 편향을 줄이나 의견이 증폭될 수도 있다고 경고. Judge 모델은 평가 대상 모델보다 동급 이상 성능이어야 함.
  출처: [arxiv FairJudge](https://arxiv.org/pdf/2602.06625)

---

## 출처

- [LLM-as-a-Judge 2026 Best Practices — DeepEval](https://deepeval.com/guides/guides-llm-as-a-judge)
- [Data & ML Pipeline Testing — EvidentlyAI](https://learn.evidentlyai.com/ml-observability-course/module-5-ml-pipelines-validation-and-testing/introduction-data-ml-pipeline-testing)
- [Mutation-Guided LLM Test Generation at Meta (arxiv)](https://arxiv.org/pdf/2501.12862)
- [7 Prompt Engineering Techniques 2026 — DEV Community](https://dev.to/honestai/7-prompt-engineering-techniques-that-actually-work-in-2026-with-real-examples-3aj1)
- [FairJudge: Debiased LLM-as-a-Judge (arxiv)](https://arxiv.org/pdf/2602.06625)

---

## 위키화 후보

- **Mutation-Guided Test Generation (ACH 패턴)** — 커버리지 % 대신 미탐지 결함(mutant)을 타깃으로 테스트를 생성하는 Meta의 접근법. 기존 커버리지 지표 한계를 보완하는 별도 개념으로 문서화 가치 있음.
- **Tree of Thoughts (ToT) 프롬프팅** — CoT의 선형 추론을 트리 구조 분기 탐색으로 확장. 복잡한 테스트 시나리오 생성 시 활용 가능.

---

## 프로필 반영 후보 (저위험)

- LLM-as-Judge 평가셋 구성 시 합성 데이터 금지 — **실제 프로덕션 실패 사례** 200~500개 기준으로 골든 데이터셋 구성
- 테스트 커버리지 개선 목표 설정 시 커버리지 % 단독 지표 대신 **킬드 뮤턴트 수(mutation score)** 병행 추적

---

## 승인 필요 (고위험)

_(없음)_

---

## 신규 도구 후보 (에이전트/스킬)

- **[skill] mutation-test-advisor** — 기존 테스트 커버리지 리포트를 분석해 미탐지 뮤턴트 타깃 테스트 케이스 후보를 제안하는 스킬 (Vitest + Stryker 연동 기준)
