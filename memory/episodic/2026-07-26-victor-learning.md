---
date: 2026-07-26
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-26

## 오늘 배운 것
- Dask가 로컬 TPC-H 벤치마크(M1 MacBook Pro)에서 Spark 대비 최대 507% 빠르고, 완주율도 Dask 22개 중 21개 vs Spark 7개(나머지 실패/1시간 타임아웃) — 기존 "1~10GB Polars, 100GB↑ DuckDB/Dask" 도구선택 기준에 로컬 중소규모 구간 Dask 우위 사례로 추가 참고
- 통계추론 최신 동향 논문(arXiv 2603.22594, Patra 2026) 확인 — Bayes factor·e-value·SGPV(고차원 추론) 등 베이지안/고차원 방법론 보완 도구로 인지, 기존 [분석 원칙]의 "DML/EconML/DoWhy" 인과추론 도구 목록과 별개로 통계적 유의성 검정 보완 축으로 구분

## 출처
- [Spark vs. Dask: A Benchmark Comparison](https://docs.coiled.io/blog/spark-vs-dask.html)
- [Making Effective Statistical Inferences (arXiv:2603.22594)](https://arxiv.org/pdf/2603.22594)

## 위키화 후보
- (없음 — 기존 도구선택·통계방법론 개념 노트에 통합 가능한 수준, 신규 노트 불요)

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "Dask vs Spark 로컬 TPC-H 507%·완주율 21/22 vs 7" 벤치마크 수치 추가
- [분석 원칙] 통계적 방법론 참고목록에 "e-value/SGPV(고차원 추론)" 키워드 추가

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 이번 검증에 사용한 출처-대조-검증기 에이전트가 이미 존재하며 9건 중 7건 폐기를 정확히 걸러내 유효성 재확인됨)

---
**검증 메모**: 원 리서치 10건 중 2건(Dask/Spark 벤치마크, arXiv 통계추론 논문)만 원문 대조로 확인. 5건(DuckDB 규모 권장·Gartner 70%·dbt/Delta/BigQuery 증분패턴·대시보드 5~9개 지표·필터 35% 증가)은 인용 URL 본문에 해당 주장이 없어 폐기, 3건(DuckDB 100배·HARKing·think.design 트렌드)은 페이월/SPA/403으로 접근 불가해 미검증 폐기 처리했습니다.
