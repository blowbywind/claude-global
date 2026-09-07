---
date: 2026-08-04
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-04

원문 대조검증 중 임시 다운로드 파일이 `/home/bbw/ai-ops/.scratch/`에 남았습니다(삭제는 승인이 필요해 보류). 정리가 필요하시면 말씀해 주십시오.

교차검증 결과, 리서치 결과 5건 중 구체 수치·인용 3건에서 원문 불일치/오귀속을 확인해 폐기했습니다.

## 오늘 배운 것
- 테이블 포맷 표준화: Iceberg가 Apache 재단 거버넌스+Snowflake/BigQuery/Databricks/Trino/DuckDB 등 폭넓은 엔진지원으로 "실질적 승자"라는 논조를 원문에서 직접 확인. 단 "Delta UniForm/XTable 상호변환", "Delta Lake Fortune 500 60%+ 설치기반" 수치는 본문에 없어 폐기.
- ETL 오케스트레이터 선택기준: Airflow=대규모 배치 오케스트레이션, Dagster=asset-centric+dbt 퍼스트클래스 지원(모던 데이터 플랫폼), Prefect=개발자 친화형이라는 비교표를 원문에서 확인. 단 출처가 경쟁 제품(Orchestra)의 자사 블로그라 편향 가능성이 있고, "20~100인 팀" 등 세부 인원수치는 원문에 없어 폐기.
- (검증 실패) "Liu & Song(2026) 순차 다중검정" 인용은 오류: 해당 arXiv 논문(2606.00839) 원문 저자는 Yiming Xing이며 "Liu & Song"이라는 이름은 원문과 불일치 → 주장 전체 폐기.
- (검증 실패) Polars/DuckDB/Spark 벤치마크의 "146ms@4vCore", "Daft 대비 2배", "Fabric Spark Native Execution Engine" 등 구체 수치·키워드는 원문(coiled.io)에 전혀 없음. 오히려 원문은 "로컬 단일머신에서는 대체로 DuckDB가 Polars를 능가한다"고 반대 뉘앙스로 서술 → 구체수치 전부 폐기(방향성 자체는 기존 위키 항목과 중복이라 별도 반영 불필요).
- (검증 실패) "2026 대시보드 AI 자동인사이트·자연어 UI 트렌드"는 uxpin.com 원문 확인 결과 업계 트렌드 근거가 아니라 UXPin 자사 AI 기능(Forge) 홍보 문구였음 → 트렌드 주장 폐기.

## 출처
- [Apache Iceberg vs Delta Lake vs Hudi 2026](https://risingwave.com/blog/apache-iceberg-vs-delta-lake-vs-hudi-2026/) — 거버넌스/엔진지원 비교 부분만 확인
- [Orchestra vs Dagster vs Prefect vs Airflow 2026](https://www.getorchestra.io/blog/dagster-vs-prefect-vs-airflow-complete-data-orchestration-comparison-2026) — 비교표 부분만 확인, 경쟁사 자체 블로그 편향 유의

## 위키화 후보
- 테이블 포맷(Iceberg/Delta) 벤더중립 표준화 동향 — 근거 있는 부분만(거버넌스·엔진지원)으로 한정해 신규 개념 노트 등록 가치 있음

## 프로필 반영 후보 (저위험)
- 오케스트레이터 선택기준에 "Airflow=대규모배치, Dagster=asset-centric/dbt, Prefect=개발자친화" 구도를 [출처=경쟁사 블로그, 세부수치 미검증] 단서를 달아 참고용으로만 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] 출처-대조-검증 — 이번 세션처럼 웹리서치 인용 URL을 실제 fetch해 저자·수치·논조 일치 여부를 자동 대조(오늘 5건 중 3건 폐기 사례 발생, 반복작업화 가치 있음. 후보 에이전트 "출처-대조-검증기"가 이미 카탈로그에 있어 재사용 검토 권장)
