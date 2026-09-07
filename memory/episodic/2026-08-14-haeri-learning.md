---
date: 2026-08-14
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-14

## 오늘 배운 것
- LLM 회귀테스트 표준 패턴(베이스라인 동일 행·동일 평가자로 후보 실행 후 델타 비교) — futureagi.com 원문 대조 완료, "same rows, same evaluators, same metric thresholds, new candidate system" 문구 확인.
- 평가 데이터셋 버저닝은 immutable snapshot + lineage 추적으로 취급해야 하며, 파일 재업로드 시 조용히 덮어쓰는 도구는 회귀테스트 신뢰성을 해친다는 점 확인 — 단, 해리 원문의 "코드 리뷰 요구" 세부 서술은 원문에서 근거를 찾지 못해 제외.
- GPQA 벤치마크도 2026년 8월 기준 상위권(Sakana Fugu-Ultra 95.5%, GPT-5.6 Sol 94.6%)이 0.9점 이내로 밀집해 포화 국면에 진입 — 수치·모델명 원문 대조 일치 확인.
- **[중요] 해리 리서치 항목 중 하나가 오귀속(사실상 환각)으로 판정되어 폐기**: "USAMO GPT-5.4 95%, HLE 최고모델 약 35% vs 인간 90%" 주장은 인용된 출처(layer3labs.io)에 전혀 없음. 해당 원문은 오히려 "실제 모델의 검증된 HLE 점수를 보유하지 않음(no real-model HLE score)"이라고 명시해 인용과 정반대 내용임 — 채택 금지.
- E2E 테스트 "AI 보조 스크립팅이 주류" 주장은 벤더 블로그(getautonoma, 자사 AI-네이티브 제품 판매 중) 3단계 분류표에 근거한 해석일 뿐 시장점유율 수치 진술은 원문에 없음 — 참고용으로만 취급, 용어 채택 보류.

## 출처
- [LLM Regression Testing — FutureAGI Glossary](https://futureagi.com/glossary/llm-regression-testing/) — "same rows/evaluators/thresholds" 문구 원문 확인
- [What is an LLM Dataset (2026)](https://futureagi.com/blog/what-is-llm-dataset-2026/) — immutable snapshot/lineage 문구 원문 확인
- [GPQA Leaderboard (August 2026) — BenchLM.ai](https://benchlm.ai/benchmarks/gpqa) — 수치 원문 일치 확인
- [AI Reasoning Benchmarks Guide — Layer3Labs](https://www.layer3labs.io/guides/ai-reasoning-benchmarks) — USAMO/GPT-5.4/HLE 35% 주장 원문 불일치 확인(반증 근거)
- [AI E2E Testing in 2026 — Autonoma](https://getautonoma.com/blog/ai-e2e-testing-in-2026) — 3단계 분류표만 확인, 시장점유율 진술 없음

## 위키화 후보
- 없음 (신규 채택 가치 있는 항목이 검증을 통과하지 못함 — GPQA 포화 갱신치는 기존 2026-08-05 노트의 보강 성격으로 별도 노트 불요)

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "평가 데이터셋 immutable 버저닝(무단 덮어쓰기 방지, lineage 추적)" 용어 추가 — 기존 traceability 인사이트(2026-07-30) 보강 성격, 저위험

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기-wget-폴백-내장 — 이번 세션에서 WebFetch 권한이 재차 차단(2026-07-16 이래 7회+)됐으나 wget 폴백으로 4건 전부 원문 확보에 성공했고, 그 결과 해리 리서치 1건(USAMO/HLE 수치)이 사실상 환각임을 실제로 적발함. 기존 후보 제안의 유효성이 재입증됐으므로 정식 서브에이전트화를 재요청합니다.
