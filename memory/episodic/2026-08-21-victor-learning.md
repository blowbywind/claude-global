---
date: 2026-08-21
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-21

## 오늘 배운 것
- Fivetran과 dbt Labs가 **2026-06-01 올스톡 합병 완료**(2025-10-13 최초 발표) — 원문 직접 fetch로 확인. ingestion(Fivetran)·transformation(dbt)·activation(Census/Fivetran Activations, 2025-05 인수)이 최초로 단일벤더 스택으로 통합됨.
- Coiled TPC-H 벤치마크는 **로컬10GB/로컬100GB/클라우드100GB/클라우드1TB 4단계 규모**로 구성되며, 로컬 10GB 인메모리 구간에서 공식 문구로 Polars를 "unreservedly recommend" — 기존 위키의 "≲10GB Polars 우위" 결론과 일치(원문 fetch로 재확인). 단 "2배/146ms" 등 구체 수치는 이번 fetch에서 직접 확인되지 않아 기존 노트 근거를 그대로 유지.
- arXiv 2603.22594(2026-04, e-value/safe testing) 논문 실재 확인 — 기존 위키 e-value/SGPV 노트와 연결 가능.
- **[중요] 리서치 산출물 중 3건은 인용 URL 직접 대조 결과 폐기**: ①"AI툴링45%·데이터품질38%·시맨틱레이어27%" 투자우선순위(digitalapplied.com 원문에 해당 수치 전무), ②"피킹 시 유의수준 20~30% 왜곡"(VWO 원문은 "false positive 증가"라는 정성 서술만 있고 수치 없음), ③"40-30-20-10 공간배분룰 + 지표5~9개 제한"(createbytes.com 원문에 해당 내용 부재). 세 건 모두 그럴듯한 출처에 가짜 수치를 붙인 형태로, 폐기하고 반영하지 않음.

## 출처
- [Marketing Data Pipelines in 2026 (Fivetran·dbt Labs 합병)](https://www.digitalapplied.com/blog/marketing-data-pipeline-etl-2026-modern-data-stack-reference)
- [Coiled — DataFrames at Scale: TPC-H](https://docs.coiled.io/blog/tpch.html)
- [arXiv 2603.22594](https://arxiv.org/pdf/2603.22594)

## 위키화 후보
- Fivetran·dbt Labs 합병(2026-06-01, 단일벤더 ingestion-transformation-activation 통합)이 ETL 도구선택에 미치는 영향 — 신규 개념노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "Fivetran+dbt+Census(Activations) 단일벤더 스택 vs 자체호스트/조합형" 비교축 용어 인지 추가.

## 승인 필요 (고위험)
- 없음. 다만 "웹리서치 산출물의 구체 수치는 원문 URL 대조 없이 프로필/위키에 반영 금지"를 [분석 원칙]에 명문화할지는 별도 승인 사안으로 제안.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 검증에서도 WebFetch 권한 차단이 재발(누적 5회째)했으나 wget 폴백으로 6건 대조 중 3건의 수치 오귀속을 실제로 적발. 반복 가치가 재확인됐으므로 정식 서브에이전트화 제안.
