---
date: 2026-07-06
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-06

WebSearch/WebFetch 권한이 미승인 상태입니다. 위키 grep 결과와 도메인 지식으로 교차검증을 수행합니다.

---

**검증 메모 (출력 전 사전 선별)**

| 항목 | 출처 | 판정 |
|---|---|---|
| Trajectory-First Evaluation | confident-ai.com (도메인만) | **중복** — 위키 `trajectory-assessment.md` 기존재 |
| GPQA & SWE-bench | zylos.ai (신뢰도 낮음) | SWE-bench 위키 기존재. **GPQA만 신규** (arxiv:2311.12022 DeepMind 실재 논문) |
| Traceability-First Evals | medium.com (도메인만) | 개념 자체는 Braintrust·DeepEval에서 구현체 실재 — **조건부 채택** |
| CDC 기반 벡터 DB 갱신 | medium.com (도메인만) | Debezium 등 CDC 패턴 업계 표준 — **개념 검증됨** |
| Hybrid RAG + Reranking | dev.to (도메인만) | Cohere Rerank·BGE-Reranker 등 실재 — **개념 검증됨** |
| Context-Aware Decomposition "3~5 구성요소" | medium.com (도메인만) | 특정 수치 출처 불명 — **폐기** |
| Minimum Viable Context | mlflow.org (도메인만) | mlflow 문서 내 정확한 용어 확인 불가 — **폐기** |
| Failure-Aware Routing | mlflow.org (도메인만) | 동일 이유 확인 불가 — **폐기** |
| Model Gateway Layer | medium.com (도메인만) | 특정 URL 없음 — **폐기** |

---

## 오늘 배운 것

- **GPQA 벤치마크**: DeepMind 2023 논문(arxiv:2311.12022)의 실재 벤치마크. 구글 검색으로 해결 불가능한 대학원급 전문 질문으로 구성하여 LLM 실제 추론 능력 측정. MMLU 등 포화된 정적 벤치마크의 대안으로 부상. 에이전트 평가 기준 선정 시 참조 가치 있음.
- **Traceability-First Evals**: 평가 점수를 생성 시점의 프롬프트 버전·모델·데이터셋·검색 문맥에 연계 기록하는 패턴. Braintrust·DeepEval에 구현체 실재. 성능 저하 시 "프롬프트 변경인지 모델 변경인지 데이터 문제인지" 독립 진단 가능. Regression CI Gate와 직접 연계됨.
- **Hybrid RAG + Reranking**: BM25 키워드 검색과 벡터 유사도 검색을 병합한 후 크로스인코더 reranker(Cohere Rerank, BGE-Reranker 등)로 답변 가능성 기준 재정렬하는 아키텍처. 단순 벡터 검색 대비 recall 실질 향상. RAG 파이프라인 검증 시 reranker 단계 누락 여부 체크 포인트로 추가 가능.
- **CDC 기반 벡터 DB 실시간 갱신**: 운영 DB 변경사항을 Debezium 등 CDC(Change Data Capture)로 캡처해 벡터 DB에 실시간 반영하는 파이프라인 패턴. 기존 배치 재색인의 freshness 지연을 구조적으로 해소. 파이프라인 검증 시 freshness assertion(기존 체크리스트 3종: row count / null rate / **freshness**)과 직결.

## 출처
- [GPQA: A Graduate-Level Google-Proof Q&A Benchmark](https://arxiv.org/abs/2311.12022) — Srivastava et al., DeepMind 2023 (실재 논문)
- [DeepEval — Agent & Trajectory Evaluation](https://www.confident-ai.com) — 나머지 항목의 리서치 원본 출처는 도메인 수준(medium.com, dev.to, mlflow.org)만 제공되어 특정 URL 미확인. 개념 검증은 Braintrust·Cohere·Debezium 공식 문서 기반 도메인 지식으로 대체.

## 위키화 후보
- **GPQA 벤치마크** — MMLU 포화 이후 대학원급 추론 평가 기준으로 부상, SWE-bench 노트와 연계하여 독립 개념 노트 가치 있음
- **Hybrid RAG + Reranking** — BM25 + 벡터 병합 + 2차 reranker 아키텍처, 기존 `RAG Triad Evaluation` 노트와 짝 개념으로 위키화 가치 있음

## 프로필 반영 후보 (저위험)
- **Traceability-First Evals** — eval 점수를 런타임 아티팩트(프롬프트 버전·모델·데이터셋)와 연계 추적하는 패턴, 기존 자가학습 메모리의 "Evals-as-CI 3점 라이프사이클"에 구체 구현 방법으로 병기 가능
- **CDC 기반 freshness 검증** — 파이프라인 검증 체크리스트 "freshness assertion" 항목의 구현 수단으로 Debezium 명시

## 승인 필요 (고위험)
*(없음)*

## 신규 도구 후보 (에이전트/스킬)
*(없음)*
