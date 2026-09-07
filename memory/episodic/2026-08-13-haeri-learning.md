---
date: 2026-08-13
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-13

## 오늘 배운 것
- **데이터 파이프라인 5계층 구조 검증 통과**: ingestion → processing/transformation → storage(lakehouse) → orchestration → serving. 배치·스트리밍 하이브리드 예시도 원문에서 확인(사기탐지=실시간, 재무마감·정기 리포팅=배치 job). — `dataforest.ai` 원문 fetch 대조 완료(wget 폴백 사용).
- **LLM-judge/인간 일치율 수치 정정**: 원 리서치는 "85~92%"(future_agi, medium — fetch 차단으로 미대조)로 보고했으나, 실제 fetch 성공한 `zylos.ai` 원문은 "80~90%, 비용은 500~5000배 저렴"으로 명시. 수치·출처 모두 정정 필요(단, 위키에 이미 judge agreement 관련 노트 다수 존재해 신규성은 낮음).
- **3건 오귀속(출처 불일치)으로 미채택 처리**:
  - "DeepEval+RAGAS 병행 사용 패턴"(zylos.ai 인용) → 원문에 해당 문장 없음(DeepEval/RAGAS 언급 자체 0건).
  - "경량+프론티어 이중 judge CI 패턴"(deepeval.com 인용) → 해당 페이지는 "DeepEval vs Ragas" 비교글일 뿐, 이중 judge 패턴 서술 없음.
  - "OpenAI 프롬프트 가이드 outcome-oriented 강조"(ibm.com 인용) → 원문에 OpenAI 가이드 관련 서술 없음(context engineering 부분만 일부 일치하나 위키 기존 노트와 중복).
- **레이크하우스 RisingWave/Flink SQL 스트리밍 확장 claim**: medium URL fetch 실패(봇 차단, exit 8)로 원문 대조 불가 → 미채택 유지.
- **Opus 5/Fable 5.1 출시설**: 해리가 이미 자체적으로 미채택 처리한 부분 — 동일하게 미채택 확정.

## 출처
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) — fetch 대조 완료
- [LLM Evaluation and Benchmarking 2026](https://zylos.ai/research/2026-01-16-llm-evaluation-benchmarking/) — fetch 대조 완료

## 위키화 후보
- 데이터 파이프라인 5계층 아키텍처(ingestion-processing-storage/lakehouse-orchestration-serving) + 배치/스트리밍 하이브리드 판단기준 — 신규 확인 개념, 회귀테스트·데이터 프로젝트 참고 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "데이터 파이프라인 계층별 배치/스트리밍 하이브리드 판단(지연시간 요구 기준)" 참고 용어 추가

## 승인 필요 (고위험)
없음.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 세션도 WebFetch 권한 차단이 재발(8회 이상 누적)했으나 wget 폴백으로 7건 중 4건 원문 확보에 성공, 그 결과 3건의 실제 오귀속(존재하지 않는 인용)을 적발했습니다. 반복 검증 가치가 재입증된 만큼 정식 서브에이전트화를 다시 권장합니다.

## 완료 보고
- 완료: 위키 사전 grep 중복확인 → WebFetch 시도(권한 차단 재확인) → wget 폴백으로 7개 URL 중 4건 원문 대조 성공(3건은 medium 봇차단으로 실패) → 사실관계 교차검증 → 오귀속 3건 미채택 처리 → 검증된 항목만 구조화 출력
- 결과: 부분완료 — 핵심 신규 검증 항목은 1건(데이터 파이프라인 5계층)이며, 원 리서치 8개 주장 중 3개는 출처 불일치로 폐기, 1개는 fetch 불가로 미채택
- 못 한 것: medium.com 3개 URL 원문 대조(봇 차단), Claude 신모델 출시설 검증(범위 외)
- 다음 단계: WebFetch 권한 이슈는 기존 인사이트(2026-07-16~08-11)에 이미 누적 보고됨 — 별도 액션 불필요, 반복 시 `출처-대조-검증기` 에이전트 정식 도입 여부만 결정 필요
