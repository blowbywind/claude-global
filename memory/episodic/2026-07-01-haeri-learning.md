---
date: 2026-07-01
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-01

위키 교차검증 완료. 이전 에피소드 학습(2026-06-26~29)까지 확인했다.

---

## 오늘 배운 것

- **RLVR (검증 가능한 보상 기반 강화학습)**: 코드 실행·수학 정답 등 객관적으로 판별 가능한 기준을 학습 보상으로 사용하는 기법. 테스트 설계 원칙과 직결 — LLM 출력 assertion도 "주관적 자연어 판단"보다 "객관 검증 가능한 결과"를 우선 설계해야 한다는 교훈. *(출처: [dev.to](https://dev.to))*

- **Agent-as-Judge 프레임워크 명칭 공식화**: 기존 wiki에 TrajectoryAccuracy/ToolCorrectnessJudge/TaskCompletionJudge 3지표는 문서화됐으나, 이를 포괄하는 "Agent-as-Judge"라는 프레임워크 명칭이 표준화되고 있음. 멀티 턴 궤적 전체를 평가 단위로 삼는 점이 LLM-as-Judge와의 명시적 구분점. *(출처: medium.com — 기사 단위 URL 미제공)*

- **Medallion 아키텍처 + AI 에이전트 SLA 연계**: Bronze→Silver→Gold 계층에 멱등성 보장과 비즈니스 SLA를 결합, AI 에이전트에 신뢰성 높은 데이터 공급 패턴. 파이프라인 검증 시 계층별 assertion 설계 참고 가능. *(출처: medium.com — 기사 단위 URL 미제공)*

---

## 폐기된 항목

| 항목 | 폐기 사유 |
|---|---|
| GPT-5.5·Claude Opus 4.7/4.8·Gemini 3.1 Pro 출시 | 출처 fazm.ai 신뢰도 낮음, 버전 번호 내부 봇 설정과 혼용 — 1차 출처 불확인 |
| Context/Loop Engineering | Context Engineering: 위키 `context-engineering.md` 중복. Loop Engineering: 2026-06-28 에피소드에서 이미 "medium.com 도메인만, URL 없음 — 검증 불가" 판정 |
| Data Contract CI/CD 강제 | `wiki/concepts/data-contract-패턴.md` 중복 |
| LLM-as-Judge 5대 편향 | `wiki/concepts/llm.md` 중복 (futureagi.com 출처 포함) |
| HLE 벤치마크 | `wiki/concepts/wiki-concepts-hle.md` 중복 |
| Promptfoo/Garak CI/CD 이원화 | 메모리 2026-06-21·24 인사이트 중복 |

---

## 출처

- [dev.to (RLVR)](https://dev.to) — 기사 단위 URL 미제공, 개념 실재성은 DeepSeek-R1 논문으로 교차 확인
- [medium.com (Agent-as-Judge, Medallion/SLA)](https://medium.com) — 기사 단위 URL 미제공, 중간 신뢰도

---

## 위키화 후보

- `wiki/concepts/rlvr.md` — 검증 가능 보상 기반 강화학습 개념 및 테스트 설계 시사점 (기존 wiki 공백 항목)

---

## 프로필 반영 후보 (저위험)

- **Agent-as-Judge** — 에이전트 평가 시 "LLM-as-Judge"와 구분되는 멀티 턴 궤적 전체 평가 프레임워크 명칭을 전문 어휘로 추가

---

## 승인 필요 (고위험)

없음

---

## 신규 도구 후보 (에이전트/스킬)

없음

---

**검증 요약**: 8개 주장 중 5개 중복·1개 출처 불가로 폐기, Frontier 모델 버전 주장 전량 기각. 실질 신규 채택 3개 (RLVR·Agent-as-Judge 명칭·Medallion-SLA 연계) — 단, 후두 2개는 기사 단위 URL 미확보로 위키화 전 추가 검증 권장.
