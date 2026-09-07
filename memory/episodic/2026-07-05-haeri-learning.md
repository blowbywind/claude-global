---
date: 2026-07-05
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-05

## 중복·기출처 사전 필터

메모리([2026-06-24] 항목)와 대조:
- **CoD, Bento-Box, Jury-of-Judges, Regression CI Gate, Promptfoo/Garak** → 이미 등재. **출력 제외**.

남은 항목 4개를 소스 신뢰도 기준으로 검증 후 종합.

---

## 오늘 배운 것

- **Context Engineering 패러다임 전환**: "프롬프트 작성"이 "컨텍스트 엔지니어링"으로 재명명되며 Prompt-as-Code(Git 버전관리·자동테스트·CI 연동)가 정착 중. Andrej Karpathy가 2025년 공개적으로 명명한 용어이며 실제 툴링(Promptfoo·PromptLayer 등)이 이 패러다임을 구현 중. 테스트 관점에서는 프롬프트 변경을 코드 diff와 동일하게 취급해 회귀 검증 범위에 포함해야 함.
- **메달리온 아키텍처(Bronze → Silver → Gold)의 파이프라인 표준화**: Databricks가 정립한 3-레이어 정제 모델이 Apache Iceberg·Delta Lake 기반 레이크하우스와 결합해 엔터프라이즈 표준으로 안착. 기존 메모리의 "파이프라인 검증 3종 assertion(row count / null rate / freshness)"을 각 레이어 경계에 명시적으로 매핑하면 검증 누락 방지에 효과적.
- **스트리밍 퍼스트 RAG freshness 요건**: Kafka + Flink로 RAG 인덱스에 준실시간 업데이트를 공급하는 아키텍처가 확산되면서, RAG 파이프라인 E2E 테스트에서 freshness assertion(마지막 업데이트 타임스탬프 < 허용 지연)을 별도 지표로 관리해야 한다는 요건이 부각됨.
- **ICML 2026 서울 개최 확정**: 에이전트 코딩, 디퓨전 언어 모델, 트랜스포머 메모리 아키텍처가 주요 트랙으로 구성됨. 에이전트 테스트 설계 시 참조할 최신 아키텍처 논문 출처로 icml.cc 주시.

---

## 출처

- [Galtea AI — Jury-of-Judges evaluation](https://galtea.ai) *(기출처, 참고용 유지)*
- [Learn Prompting — Chain of Draft](https://learnprompting.org)
- [AppScale Blog — LLM Regression CI Gate with DeepEval/Braintrust](https://appscale.blog)
- [Confluent — Streaming-First Data Pipelines](https://confluent.io)
- [ICML 2026 공식 사이트](https://icml.cc)
- keepmyprompts.com (Context Engineering 언급) — **단독 출처 약함**, Karpathy 원발언으로 교차확인

---

## 위키화 후보

- `Context Engineering` — Prompt-as-Code 개념·도구 생태계 정리, 기존 `bento.md`·`pairwise.md`와 연결

---

## 프로필 반영 후보 (저위험)

- **Prompt-as-Code**: 프롬프트 변경을 코드 diff로 취급→회귀 테스트 스코프에 포함하는 방법론 용어 추가
- **메달리온 레이어 경계 assertion**: Bronze/Silver/Gold 각 경계에 row count·null rate·freshness 3종 체크포인트 매핑을 테스트 설계 체크리스트에 명시

---

## 승인 필요 (고위험)

*(없음)*

---

## 신규 도구 후보

- **[skill] prompt-regression** — 프롬프트 변경 시 골든 데이터셋 기반 DeepEval/Braintrust 회귀 검증을 CI에서 자동 실행하는 스킬 (Regression CI Gate 메모리 항목의 실행 자동화)
