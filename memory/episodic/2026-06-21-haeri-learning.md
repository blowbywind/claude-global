---
date: 2026-06-21
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-06-21

## 오늘 배운 것

- **Evals-as-CI 3점 라이프사이클**: LLM 앱 품질 검증은 ① offline(큐레이션 데이터셋) → ② pre-merge CI(프롬프트·모델 변경마다 자동 실행, 임계값 미달 시 빌드 실패) → ③ online(프로덕션 트래픽 5~10% 샘플링 연속 평가) 3단계로 운영. "eval 실패 = 깨진 테스트" 동일하게 처리. (출처: braintrust.dev, futureagi.com)

- **LLM Red Teaming 자동화 도구 4종**: Garak(NVIDIA, 37+ probe 모듈), Promptfoo(50+ 취약 유형), PyRIT, DeepTeam — 프롬프트 인젝션·탈옥·PII 유출·환각을 CI에서 자동 회귀 검증. 2026년 기준 production 배포 필수 요소로 정착. (출처: appsecsanta.com, nviso.eu 블로그)

- **Reasoning Hijacking**: 2026 신규 공격 벡터 — 프롬프트 자체가 아닌 LLM 에이전트의 추론 체인(CoT/내부 단계)을 조작해 제약을 우회. 기존 prompt injection 방어로는 탐지 불충분. (출처: arxiv 2604.05549)

- **Golden Dataset Synthesis 패턴**: DeepEval Synthesizer로 문서에서 수천 개 goldens 자동 생성(몇 분 내), 엣지케이스 커버·실 사용자 데이터 없이 개인정보 보호. **단, 전문가 검증 golden을 대체 불가 — 보완재로만 사용**. 100+ examples면 초기 eval 충분. (출처: deepeval.com, arize.com)

- **Property-Based Testing × LLM**: LLM이 코드의 불변 속성(property/invariant)을 문서에서 추출 → PBT 프레임워크가 자동 생성 케이스로 검증. LLM 생성 코드의 의미론적 정확성을 커버리지 % 없이도 검사 가능. (출처: arxiv 2506.18315, dl.acm.org FSE'25)

- **평가 세 계층 확정(2025~2026)**: Deterministic(포맷/JSON-스키마 정확 매칭) → Rubric-based(LLM-as-Judge, 명시적 루브릭) → Composite(다중 지표 복합 점수). 계층별 역할 분리가 eval 설계 표준으로 정착. (출처: confident-ai.com)

## 출처

- [LLM Testing Tools and Frameworks in 2026](https://contextqa.com/blog/llm-testing-tools-frameworks-2026/)
- [Best AI Eval Tools for CI/CD Pipelines — Braintrust](https://www.braintrust.dev/articles/best-ai-evals-tools-cicd-2025)
- [LLM Red Teaming Guide 2026 — AppSecSanta](https://appsecsanta.com/ai-security-tools/llm-red-teaming)
- [Automated LLM Red Teaming with Promptfoo — NVISO](https://blog.nviso.eu/2026/02/05/an-introduction-to-automated-llm-red-teaming/)
- [Reasoning Hijacking for Red-Teaming LLM Agents — arxiv 2604.05549](https://arxiv.org/pdf/2604.05549)
- [From Prompts to Properties: PBT for LLM Code Gen — arxiv 2506.18315](https://arxiv.org/pdf/2506.18315)
- [Golden Synthesizer — DeepEval](https://deepeval.com/docs/golden-synthesizer)
- [Synthetic Datasets for LLM Evaluation — Arize AI](https://arize.com/blog/creating-and-validating-synthetic-datasets-for-llm-evaluation-experimentation/)

## 위키화 후보

- `llm-red-teaming` — Garak/Promptfoo/PyRIT/DeepTeam 4종 도구, 공격 벡터(roleplay·logic trap·encoding·reasoning hijacking), CI 자동화 패턴
- `golden-dataset-synthesis` — Synthesizer 기반 goldens 자동 생성, 전문가 검증 보완재 원칙, 100+ 예시 기준

## 프로필 반영 후보 (저위험)

- Garak·Promptfoo red team 모드 → LLM 앱 취약점 자동 스캔 도구로 테스트 레퍼토리에 추가
- Evals-as-CI 3점 라이프사이클(offline→pre-merge→online) → 인사이트 메모리에 체크리스트 항목으로 반영

## 승인 필요 (고위험)

- autobots LLM 기능에 red team CI gate 도입(Garak 또는 Promptfoo) — 파이프라인 변경이므로 아키텍처 결정 필요

## 신규 도구 후보 (에이전트/스킬)

- `[skill] llm-red-team` — Promptfoo/Garak로 LLM 앱 취약점(인젝션·탈옥·PII 유출) 자동 스캔 후 결과 요약
- `[skill] eval-ci-check` — PR 변경마다 DeepEval golden dataset 돌려 품질 임계값 통과 여부 리포트


## 추가 학습 (18:15 UTC)
---

## 오늘 배운 것

- **pass@k vs pass^k 격차**: pass@k는 k번 중 1번 이상 성공 확률, pass^k는 k번 전부 성공 확률. 에이전트 벤치마크에서 두 값 차이가 최대 25%p 발생. 배포 임계값은 pass^k 기준으로 설정해야 하고, 최소 k=3 이상으로 측정해야 신뢰 가능. 출처: [philschmid.de](https://www.philschmid.de/agents-pass-at-k-pass-power-k)

- **데이터 컨트랙트(Data Contract) 패턴**: 프로듀서-컨슈머 간 스키마·시맨틱·SLA를 명시적 계약으로 문서화하고, PR 파이프라인에 dbt tests / Great Expectations 검증을 삽입(shift-left). 컨트랙트 위반 시 실시간 알림으로 다운스트림 영향 범위 즉시 파악. 출처: [acceldata.io](https://www.acceldata.io/blog/how-data-contracts-guarantee-pipeline-reliability-data-quality-slas), [mydigicode.com](https://www.mydigicode.com/digipedia/stop-pipeline-fires-data-contracts-observability-lineage-and-testing-the-ops-playbook/)

- **데이터 테스팅 피라미드**: 저비용 단순 검증(합성 스모크 테스트 → 유닛 → 통합 → 관측/모니터링 → 감사) 순서로 많이→적게 배치. 기존 소프트웨어 테스트 피라미드를 데이터 파이프라인에 그대로 적용. 출처: [linkedin.com/pulse](https://www.linkedin.com/pulse/principles-testing-quality-data-pipelines-andrew-madson-g7ykf)

- **에이전트 평가 = 핵심 엔지니어링 활동**: 2026 성공 팀들은 평가에 개발 시간의 60~80%를 투입. QA 단계가 아닌 중심 공학 활동으로 위치. 출처: [digitalapplied.com](https://www.digitalapplied.com/blog/ai-agent-evaluation-pipeline-2026-testing-methodology)

- **비결정적 에이전트 테스트 원칙**: LLM-as-Judge는 주관적 판단(태스크 완료, 추론 품질)에, 결정적 체크는 tool 이름/파라미터/정확 출력 검증에 각각 분리 적용. 출처: [confident-ai.com](https://www.confident-ai.com/blog/llm-agent-evaluation-complete-guide)

---

## 출처

- [Pass@k vs Pass^k: Understanding Agent Reliability](https://www.philschmid.de/agents-pass-at-k-pass-power-k)
- [AI Agent Evaluation Pipeline: 2026 Methodology](https://www.digitalapplied.com/blog/ai-agent-evaluation-pipeline-2026-testing-methodology)
- [LLM Agent Evaluation Metrics in 2026 — Confident AI](https://www.confident-ai.com/blog/llm-agent-evaluation-complete-guide)
- [Data Contracts & Pipeline Stability — Acceldata](https://www.acceldata.io/blog/how-data-contracts-guarantee-pipeline-reliability-data-quality-slas)
- [2026 Ops Playbook: Data Contracts + Observability](https://www.mydigicode.com/digipedia/stop-pipeline-fires-data-contracts-observability-lineage-and-testing-the-ops-playbook/)
- [Principles of Testing Quality in Data Pipelines](https://www.linkedin.com/pulse/principles-testing-quality-data-pipelines-andrew-madson-g7ykf)

---

## 위키화 후보

- **pass@k vs pass^k** — 에이전트 신뢰성 측정 두 지표 차이 및 배포 임계값 설정 기준 (기존 agent-evaluation-metrics 노트에 섹션 추가)
- **Data Contract 패턴** — 파이프라인 프로듀서-컨슈머 계약 명문화 + PR 게이트 통합 방법론

---

## 프로필 반영 후보 (저위험)

- 에이전트 평가 시 pass@k 단독 보고 금지 — pass^k(전체 성공율)를 반드시 병기하고 k≥3으로 측정
- 파이프라인 PR 게이트에 데이터 컨트랙트 검증 포함 — 기존 row count/null rate/freshness에 스키마 컨트랙트 체크를 4번째 assertion으로 추가

---

## 승인 필요 (고위험)

(없음)

---

## 신규 도구 후보 (에이전트/스킬)

- `[skill] data-contract-lint` — 파이프라인 PR 시 dbt schema.yml / Great Expectations suite를 자동 검증하고 컨트랙트 위반 항목을 보고하는 스킬


## 추가 학습 (18:15 UTC)
## 오늘 배운 것

- **Revision Distance 평가 지표**: LLM 출력 후 사람이 수정해야 하는 거리를 측정. MMLU 등 정적 벤치마크 포화(88%+) 대안으로 2026 주목. 실제 사용성 중심 품질 신호.
  → 출처: [LLM Evaluation in 2026 — Medium](https://medium.com/@nairmilind3/llm-evaluation-in-2026-e631a78c67dc)

- **평가 추적가능성(Traceability)**: 평가 점수를 정확한 프롬프트 버전·모델·데이터셋과 연결하는 능력이 2026 핵심 관행. 로컬 골든셋은 실 운영 실패 사례 200~500개로 구성.
  → 출처: [LLM Evaluation Guide 2026](https://jobsbyculture.com/blog/llm-evaluation-guide-2026)

- **GToT(Guided Tree-of-Thought)**: 216,300개 테스트케이스 대규모 실증에서 CoT·ToT 대비 테스트 신뢰성·컴파일 가능성·구조 준수율 유의미하게 향상. 복잡 통합 테스트 시나리오 최우선 기법.
  → 출처: [Springer — Prompt Engineering in LLMs for Test Generation](https://link.springer.com/article/10.1007/s10664-026-10840-4)

- **TestART 패턴**: LLM 테스트 생성 → 실패 시 스택 트레이스 캡처 → 오류 포함 재프롬프트 → 자동 수리 루프. 컴파일·실행 피드백을 테스트 생성 루프에 내장하는 접근.
  → 출처: [LLM-Powered Test Case Generation — FrugalTesting](https://www.frugaltesting.com/blog/llm-powered-test-case-generation-enhancing-coverage-and-efficiency)

- **AI vs 인간 테스트 이중 컨테이너 전략**: AI 생성 테스트와 인간 작성 테스트를 별도 컨테이너·리포팅으로 분리 운영. 둘 다 통과=고신뢰 / 불일치=조사 / AI만 통과=의심. `data-testid` 셀렉터 강제화.
  → 출처: [Cypress in the Age of AI Agents — DEV](https://dev.to/cypress/cypress-in-the-age-of-ai-agents-orchestration-trust-and-the-tests-that-run-themselves-43go)

- **데이터 옵저버빌리티 5 필라**: freshness·volume·schema·distribution·lineage — 기존 3종 assertion(row count / null rate / freshness) 위에 distribution drift·lineage까지 확장한 엔터프라이즈 표준.
  → 출처: [Data Observability Explained — DQLabs](https://www.dqlabs.ai/blog/data-observability-explained/)

---

## 출처
- [LLM Evaluation in 2026 — Medium](https://medium.com/@nairmilind3/llm-evaluation-in-2026-e631a78c67dc)
- [LLM Evaluation Guide 2026 — jobsbyculture](https://jobsbyculture.com/blog/llm-evaluation-guide-2026)
- [Prompt Engineering in LLMs for Test Generation — Springer](https://link.springer.com/article/10.1007/s10664-026-10840-4)
- [LLM-Powered Test Case Generation — FrugalTesting](https://www.frugaltesting.com/blog/llm-powered-test-case-generation-enhancing-coverage-and-efficiency)
- [Cypress in the Age of AI Agents — DEV Community](https://dev.to/cypress/cypress-in-the-age-of-ai-agents-orchestration-trust-and-the-tests-that-run-themselves-43go)
- [Data Observability Explained — DQLabs](https://www.dqlabs.ai/blog/data-observability-explained/)

---

## 위키화 후보
- **TestART 패턴**: LLM 테스트 생성 + 스택 트레이스 기반 자동 수리 루프 — 실패 피드백을 생성 루프에 내장하는 구체적 구현 패턴으로 문서화 가치 있음
- **AI vs 인간 테스트 이중 컨테이너 전략**: 신뢰 수준별 분리 운영·크로스 검증 절차를 E2E 테스트 아키텍처 노트로 정리

---

## 프로필 반영 후보 (저위험)
- `GToT(Guided Tree-of-Thought) 프롬프팅`을 복잡 통합 테스트 시나리오 최우선 기법으로 추가 (기존 CoT 단독 → CoT/GToT 선택 기준 보완)
- 평가 체크리스트에 **Traceability** 항목 추가: 점수·프롬프트 버전·모델·데이터셋을 함께 기록하는 것을 LLM 회귀 테스트 표준으로

---

## 승인 필요 (고위험)
_(없음)_
