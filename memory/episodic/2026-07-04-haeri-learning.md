---
date: 2026-07-04
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-04

기존 위키 확인 완료. 교차검증 결과를 정리합니다.

---

**검증 판정 요약**
- **폐기** (위키 중복): Data Contract 패턴 → `data-contract-패턴.md` 기존재, Data Platform as a Product → `okyline.md` 내 개념 중복
- **폐기** (출처 취약): Test-time compute 표준화 → optimumpartners.com은 1차 AI 연구 출처 아님, Compute-Aware Design → taskade.com은 생산성 도구 블로그
- **채택** (출처 신뢰): 쌍대 비교·Cohen's Kappa (promptfoo.dev), 과도한 추론 드리프트 (arxiv.org), Garak/Promptfoo 분리 (기존 보유 지식과 일치하는 패턴)

---

## 오늘 배운 것

- **쌍대 비교(Pairwise Comparison) 평가 표준화**: LLM 판정 시 1~5점 절대 점수 대신 두 출력의 우위를 가리는 방식이 표준으로 부상. 절대 평가는 척도 보정(calibration) 드리프트로 신뢰도가 낮다는 실증 연구가 근거. 기존 위치 편향 랜덤화 지식의 상위 개념으로 연결.
- **Cohen's Kappa ≥ 0.6 판정 보정 기준**: 황금 데이터셋(golden dataset) 기반으로 판정 모델 결과와 인간 판단의 일치도를 Cohen's Kappa 계수로 측정, 0.6 이상(가급적 0.8 이상)을 달성해야 판정 모델을 신뢰할 수 있다는 보정 파이프라인 기준.
- **Garak(야간 nightly) + Promptfoo(PR 게이트) 분리 전략**: PR 검증에는 경량·고속인 Promptfoo로 인젝션·유출 차단, 무거운 Garak 심층 프로브는 야간 빌드에서 분리 수행. 기존 CI gate 단일 운영 대비 파이프라인 속도와 커버리지를 동시 확보하는 하이브리드 설계.
- **과도한 추론 단계의 오류 강화(Reasoning Drift)**: 추론 토큰이 과도하게 길어지면 자가 교정 대신 초기 오류를 더 정교하게 강화하는 현상. 지식 밀집형·다중 양식 작업에서 특히 발생. E2E 테스트 설계 시 추론 모델 응답의 토큰 상한 제어 및 드리프트 여부 assertion 필요.

## 출처

- [Promptfoo LLM Evaluation Docs](https://promptfoo.dev) — 쌍대 비교·Cohen's Kappa 기준 (Vertex AI 그라운딩 경유, 직접 URL 미검증)
- [arXiv: Overthinking in LLMs](https://arxiv.org) — 과도한 추론 단계 오류 강화 (Vertex AI 그라운딩 경유, 특정 논문 URL 미확인)
- [Best LLM Scanners: Garak vs Promptfoo](https://bestllmscanners.com) — Garak/Promptfoo 분리 전략 (1차 AI 연구 출처 아님, 패턴 타당성으로 채택)

## 위키화 후보

- `pairwise-comparison-llm-evaluation` — 절대 점수 대비 쌍대 비교 방식의 LLM 판정 표준, 위치 편향 제어와 연결
- `llm-judge-calibration-cohens-kappa` — 황금 데이터셋·Cohen's Kappa 기반 판정 보정 파이프라인 수립 절차

## 프로필 반영 후보 (저위험)

- LLM-as-Judge 평가 기준에 **쌍대 비교(Pairwise Comparison)** 방식 추가 — 기존 "답변 순서 랜덤화" 인사이트를 상위 개념으로 확장
- 판정 모델 신뢰도 검증 지표로 **Cohen's Kappa ≥ 0.6** 임계값 체크리스트 항목 추가

## 승인 필요 (고위험)

- **Garak 야간 + Promptfoo PR 분리 운영 도입**: 기존 "autobots LLM 기능에 Garak 또는 Promptfoo CI gate 도입" 방향을 두 도구 역할 분리 구조로 구체화. CI 파이프라인 구성 변경이므로 인프라 승인 필요.

## 신규 도구 후보 (에이전트/스킬)

- 없음 (Garak, Promptfoo 이미 레퍼토리에 존재)
