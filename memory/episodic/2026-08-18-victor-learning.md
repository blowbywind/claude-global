---
date: 2026-08-18
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-18

## 오늘 배운 것
- Databricks Runtime 18.0+에서 Iceberg v3 Public Preview: Deletion Vectors·Row Lineage·VARIANT 채택, Delta/Iceberg 성능-상호운용성 트레이드오프 해소 방향 — 공식 출처 원문 대조 완료.
- Iceberg v4 스펙 논의: 매니페스트는 Avro 배제·Parquet 단일화 유력(컬럼통계 projection read 미지원 사유), differential fuzzing으로 리더 간 type-string 값 발산 실제 검출 + Delta도 동일 dense row-aligned 구조로 수렴 논의 중 — 레이크하우스 포맷 호환성 트렌드로 참고.
- Apache Polaris 1.7.0 출시(Kafka 이벤트 발행, GCS principal attribution 추가) — 카탈로그 생태계 최신화 확인.
- A/B 테스트 벤치마크(단일 비주류 출처, 표본 2,408건/2023-01~2026-03): 승자유의 17.4%·패자유의 8.4%·무판정/비유의 74.2%, MDE 고트래픽 5~10%·저트래픽 15~20%, 최소 테스트 기간 7일 — 원문과 수치 일치하나 학술/벤더 공식이 아닌 단일 마케팅 블로그라 신뢰도 제한, 참고용으로만 사용.
- 경량 in-process 분석엔진(DuckDB/Polars) 대체 트렌드: 수십GB급 워크로드에서 Spark 등 분산시스템 대신 채택 확산 — 기존 위키의 소규모 데이터 벤치마크(≤10GB Polars 우위)와 방향 일치(재확인).

※ 원문 대조 결과 아래 항목은 인용 URL에 실제 내용이 없거나(getdbt 원문에 "데이터 메시/Kafka" 언급 전무, hevodata 원문의 Gartner 수치는 "70%+ SLA 제품" 주장과 무관한 다른 통계) 검증 불가(thinklytics는 JS 렌더링 페이지라 정적 fetch로 본문 미확인, Polaris "첫 분기 보드 리포트" 주장도 양쪽 출처 모두 미기재)하여 전부 폐기했습니다.

## 출처
- [Databricks: Apache Iceberg v3 Public Preview](https://www.databricks.com/blog/next-era-open-lakehouse-apache-icebergtm-v3-public-preview-databricks)
- [Apache Data Lakehouse Weekly: Aug 5-12, 2026 (Substack)](https://amdatalakehouse.substack.com/p/apache-data-lakehouse-weekly-august)
- [Apache Data Lakehouse Weekly: Aug 5-12, 2026 (dev.to)](https://dev.to/alexmercedcoder/apache-data-lakehouse-weekly-august-5-august-12-2026-2j40)
- [A/B Testing Statistics 2026](https://visionary-marketing.co.uk/blog/ab-testing-statistics-2026)
- [Polars + DuckDB: The New Power Combo](https://www.opensourceforu.com/2026/03/polars-duckdb-the-new-power-combo-for-in-process-analytics/)

## 위키화 후보
- Iceberg v4 스펙 방향(매니페스트 Parquet 단일화, differential fuzzing 검증 문화) — 레이크하우스 테이블 포맷 노트 갱신 가치 있음.

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "Iceberg v3(Databricks Runtime 18.0+, Deletion Vectors/Row Lineage/VARIANT)" 버전 인지 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 검증에서도 WebFetch 권한 거부 재발(기존 memory 기록과 일치), wget 폴백으로 8건 전부 확보해 2건 오귀속·1건 미확인 적발. 기존 제안 후보의 유효성 재입증.
