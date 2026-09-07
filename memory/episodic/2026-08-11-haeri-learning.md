---
date: 2026-08-11
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-11

## 오늘 배운 것

- **RAG 환각탐지 벤치마크의 결측 축 확인(arxiv 2605.11330, 원문 대조 완료)**: 기존 벤치마크는 롱컨텍스트·현실적 라벨노이즈가 결측되어 있다는 지적, TRIVIA+ 벤치마크로 이를 보완 — 회귀테스트 골든셋 설계 시 "노이즈 라벨 포함 스트레스테스트" 관점을 체크포인트에 추가할 근거가 됩니다.
- **Cypress agent-driven E2E 하네스 원칙(dev.to, 원문 대조 완료)**: "해결공간을 넓히기보다 좁히는 것(narrow roles, explicit handoffs)이 신뢰성을 높인다"는 원칙이 실제로 확인됩니다. explorer/implement/execute/repair 4개 전문 에이전트의 폐루프 구성 — 옵시디언 위키 PR 작성 가이드나 회귀 테스트 스위트 역할 분리 설계에 참고 가치가 있습니다.
- **(검증 메타 결과) 이번 리서치 산출물 원문 대조에서 7건 중 4건이 폐기됨**: WebFetch는 이번에도 권한 차단됐으나 `wget` 폴백으로 실제 원문 대조에 성공했고, 다음이 "출처 URL 실존 ≠ 내용 검증" 패턴으로 확인되어 **폐기**했습니다.
  - "Claude Opus 4.7 SWE-Bench Verified 87.6점, GPT-5.4-Pro GPQA Diamond 94.4%" — felloai.com 원문에는 해당 수치·모델 조합이 없고, 실제로는 Sakana 자체 스코어보드(Opus 4.8·Gemini 3.1 Pro 비교, GPQA 95.5 등 전혀 다른 값)와 이미 위키에 실존 불가로 확정된 "GPT-5.6 Sol"이 함께 등장 — 신뢰도 0 처리.
  - "Gemini 3.6 Flash가 코딩·멀티스텝 작업 시 낭비 추론단계·툴콜 감소 특징" — aireleasetracker.com에 날짜 항목은 있으나 이 기능 설명은 원문에 없고, 같은 페이지에 "GPT-5.6 Sol/Terra/Luna"(기위키 확정 환각 모델명)가 실존 모델처럼 나열돼 출처 전체 신뢰도 저하.
  - "Stanford HAI 2026 AI Index, 26개 모델, 환각률 22~94%, 3자신념 vs 사용자신념 프레이밍" — braintrust.dev 원문(2026-06-09자 12분 분량 전문) 어디에도 Stanford/HAI/해당 수치 언급 없음. 완전 불일치.
  - "Agentic ETL 6계층(Intent/Observability/Reasoning/Action/Memory/Governance)" — addepto.com 원문에 해당 6계층 구조 없음(단, "LLM이 Airflow/LangGraph DAG 노드로 통합"이라는 취지 서술만 확인됨).
  - cribl.io "70% 이상 조직이 파이프라인을 SLA 제품으로 취급" — SLA/제품화 트렌드 서술은 확인되나 "70%" 수치는 근접 문맥에서 확인 불가, 미채택.

## 출처
- [Rethinking Evaluation for LLM Hallucination Detection (arXiv 2605.11330v1)](https://arxiv.org/abs/2605.11330) — 원문 fetch 대조 완료
- [Agent-Driven E2E Testing with Cypress](https://dev.to/cypress/agent-driven-e2e-testing-with-cypress-a-practical-guide-to-harness-engineering-with-cursor-5fob) — 원문 fetch 대조 완료

## 위키화 후보
- "RAG 환각탐지 벤치마크 결측 축(롱컨텍스트+라벨노이즈 스트레스테스트)" — 골든셋 설계 체크리스트 보강용 개념 노트 후보

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "라벨 노이즈 스트레스테스트(RAG 벤치마크 결측 축)" 관점 추가
- E2E 테스트 설계 원칙: "narrow roles + explicit handoff"(해결공간 축소가 신뢰성을 높임, Cypress 하네스 사례로 재확인)

## 승인 필요 (고위험)
없음

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 세션에서도 WebFetch 차단 상태에서 wget 폴백으로 원문 대조 실행, 7건 중 4건(약 57%) 폐기를 실제로 적발함. 기존 등록된 동일 제안(2026-07-29~08 다수)의 유효성이 재확인된 것으로, 신규 제안이 아닌 **기존 후보 채택 여부 결정을 사용자에게 재상기**합니다.
