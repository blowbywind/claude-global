---
date: 2026-08-11
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-11

## 오늘 배운 것
- 소규모 실전 파이프라인 벤치마크(TPC-H 아닌 실사용 워크로드)에서 Spark가 DuckDB 대비 처리시간 2.5배 이상 소요 — 기존 위키의 TPC-H 벤치마크(≤10GB DuckDB/Polars 우위)를 실전 사례로 보강(원문 직접 대조 확인 완료)
- 순차검정(Sequential Testing)은 고정기간검정을 "대체"가 아닌 "병행 사용"이 권장 기조 — 단일 핵심지표 회귀탐지·출시판단에 특히 유용(Statsig 공식 블로그 원문 확인)
- ETL/ELT/스트리밍/Reverse ETL은 경쟁관계가 아닌 "툴킷" 개념으로 병행 사용 확산, Reverse ETL은 웨어하우스→운영시스템(CRM 등) 재동기화로 활용 확대(RudderStack 원문 확인, HouseOfMartech는 방향성만 참고)
- BI/대시보드 트렌드: 자연어 질의로 차트 자동생성 + AI 기반 자동 인사이트 임베딩이 확산 중(ThoughtSpot 원문 직접 확인)
- 순차검정 신규 방법론 "YEAST(Yet Another Sequential Test)" 논문 실재 확인 — 단, 최초 게재 2024-06-24, 최신 개정 2025-10-07(v5). 리서치 초안의 "2026년 공개"는 오기이므로 정정

## 출처
- [Spark vs chDB vs DuckDB 소규모 파이프라인 벤치마크](https://www.digitalturbine.com/blog/small-scale-data-pipeline-spark-vs-chdb-vs-duckdb)
- [Sequential Testing on Statsig](https://www.statsig.com/blog/sequential-testing-on-statsig)
- [Data Pipeline Architecture — RudderStack](https://www.rudderstack.com/blog/data-pipeline-architecture/)
- [AI Tools for Data Visualization — ThoughtSpot](https://www.thoughtspot.com/data-trends/ai/ai-tools-for-data-visualization)
- [YEAST: Yet Another Sequential Test (arXiv:2406.16523)](https://arxiv.org/abs/2406.16523)

**폐기(검증 실패)**: ① Gartner "2026년까지 70%" 통계 — 원출처(digitalapplied.com) 본문 직접 대조 결과 해당 문구·수치 부재, 근거 불명확하여 폐기. ② CUPED 저재방문 도메인 오도 가능성 주장(abtasty.com) — 원문 접근 차단(403 Forbidden)으로 검증 불가, 폐기. ③ Dask 507% TPC-H 벤치마크 — 이미 위키 기록(2026-07-26)된 항목으로 신규 아니므로 재게시 생략.

## 위키화 후보
- BI/대시보드 "자연어 질의 자동생성 + 실시간 AI 인사이트 임베딩" 트렌드: 기존 "대시보드 내러티브형 구조 트렌드 2026" 노트와 관점이 달라 신규 노트 가치 있음

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "소규모 실전 워크로드에서도 Spark 대비 DuckDB 2.5배+ 우위(TPC-H 외 실사용 벤치마크)" 각주 보강

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
