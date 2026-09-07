---
date: 2026-08-05
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-05

## 오늘 배운 것

- **데이터 파이프라인 8대 설계 패턴**(idempotency, backfilling, schema evolution, DLQ, exponential backoff retry, exactly-once/at-least-once, batch/streaming, SCD) — dataskew.io 원문 fetch 대조로 8개 전부 확인됨. 회귀 테스트 커버리지 체크리스트에 반영 가능.
- **LLM 벤치마크 포화·이동 추세**(MMLU/MMLU-Pro가 88~94% 밴드로 포화 → GPQA·GPQA Diamond·SWE-bench 등으로 중심 이동) — digitalapplied.com 원문 대조 확인.
- **LLM-as-Judge 신뢰도 수치 정정**: 원문(digitalapplied.com)에는 "2023년 MT-Bench 논문 1건 기준 GPT-4 judge-인간 일치도 80% 이상, position bias 실증"만 있고, 해리 산출물의 "80~90% 일치·500~5000배 저렴" 수치는 해당 페이지에 존재하지 않음 → **과장/오귀속으로 정정·폐기**.
- **오케스트레이션 도구**(Airflow/Prefect/Dagster)는 wolkinc.com 원문에서 확인됐으나, 같은 항목에 묶인 "medallion architecture(bronze/silver/gold)"는 해당 페이지에 **존재하지 않아 분리 폐기**.
- **검증 결과 특이사항(역할상 필수 보고)**: 해리 산출물 9건 중 3건이 인용 URL 원문에 실제로 없는 내용(허위 귀속)으로 확인됨 — ① digna.ai "Gartner 70%" 인용(페이지에 'Gartner' 단어 자체 없음), ② groundy.com "context engineering" 용어 이동(페이지에 해당 표현 없음), ③ wolkinc.com "medallion architecture"(페이지에 없음, Airflow/Prefect/Dagster만 확인됨). lushbinary.com은 403 차단으로 대조 자체 불가(CoT 61%/XML 태그 주장 폐기). zylos.ai "실패율 60% 감소"는 원문에 존재하나 벤더 자체 마케팅 주장(원 실험 데이터 미공개)이라 참고용으로만 채택.

## 출처
- [Data Pipeline Design Patterns](https://dataskew.io/blog/data-pipeline-design-patterns/) — 8대 패턴 원문 대조 확인
- [Modern Data Pipeline Design Patterns](https://wolkinc.com/blog/modern-data-pipeline-design-patterns) — Airflow/Prefect/Dagster만 확인, medallion 언급 없음
- [LLM Benchmark Methodology 2026](https://www.digitalapplied.com/blog/llm-benchmark-methodology-2026-contamination-leaderboard-guide) — MMLU 포화·GPQA 이동, judge 80%+ 일치·position bias 원문 확인
- [LLM Evaluation & Benchmarking](https://zylos.ai/research/2026-01-16-llm-evaluation-benchmarking/) — "60% 실패율 감소" 원문 존재(출처 신뢰도 낮음, 참고용)

## 위키화 후보
- "데이터 파이프라인 8대 설계 패턴"(idempotency~SCD) 개념 노트 — 기존 위키 ETL 4대 패턴 노트의 확장판으로 신규 가치 있음

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "벤치마크 포화 인지(MMLU-Pro 88~94% 밴드) → GPQA 등 고난도 벤치마크 대체 판단" 용어 추가

## 승인 필요 (고위험)
- 오늘 검증에서 "모델명 환각"과는 별개로 **"인용 URL은 실재하나 주장 내용이 원문에 없는" 신종 허위귀속 3건**을 실증 확인(digna.ai/groundy.com/wolkinc.com). 기존 2026-07-16 제안("인용 URL 원문 fetch 대조 필수화")과 동일 계열이나, 이번엔 WebFetch가 이번 세션도 차단됐고 **wget 폴백은 정상 작동**함을 실증(curl 미설치, wget 사용 가능). 웹리서치 검증 게이트에 "WebFetch 실패 시 wget 자동 폴백" 규칙 채택 여부 사용자 확인 필요.

## 신규 도구 후보
(없음 — 기존 제안된 "출처-대조-검증기-개선안"의 wget 폴백 전제가 오늘 실증되었으므로 신규 제안 대신 위 승인 항목으로 통합 보고)
