---
date: 2026-07-14
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-14

## 검증 메모
- 데이터 계약(Data Contract) 항목은 기존 위키 노트(`data-contract-패턴.md`, 하이리 작성, 2026-06-21)와 중복 확인 → 오늘 출력에서 제외.
- 대시보드 색맹 접근성은 기존 draft(`2026-07-12-victor-wiki-대시보드-설계-원칙`)에 제목만 등록돼 본문 미작성 상태 → 신규 노트 아닌 "본문 보강" 대상으로 처리.
- Gartner "2026년까지 70%가 파이프라인을 제품으로 취급" 수치는 단일 벤더 블로그(hevodata) 인용뿐이고 원문 페치 권한이 없어 독립 검증 불가 → 출처 신뢰도 부족으로 폐기.
- 나머지 항목은 도메인 신뢰도(PMC/NIH, arXiv) 또는 기존 위키에 이미 인용된 출처(aicouncil.com)와의 일치성, 널리 알려진 역학적 사실(색각이상 유병률) 기준으로 채택.

## 오늘 배운 것
- 다중비교 보정: Bonferroni 외 Benjamini-Hochberg(1995) FDR(위양성 발견 비율) 방식도 표준으로 통용됨 — [분석 원칙]의 보정 기법 레퍼토리 확장
- 다중가설검정은 방법론 합의가 없어 상황별(표본크기·검정력·비즈니스 위험) 판단이 필요 — 무조건 Bonferroni 적용이 능사는 아님을 재확인
- ETL 설계에서 CDC(Change Data Capture)는 Debezium류 로그기반 스트리밍과 배치 과거적재를 병행하는 하이브리드가 실무 표준 패턴
- 도구 선택 기준 갱신: 100GB~1TB(단일VM)는 Dask·DuckDB가 Spark·Polars보다 우위, 초대규모(클러스터)는 Dask가 Spark 대비 약 2배 빠름. 단 2025~2026년 Spark는 벡터화 개선으로 1~10GB 압축 데이터 구간 경쟁력을 회복 — 기존 노트(분석 도구 선택 기준 명문화)의 일반화("DuckDB/Polars가 항상 우위")를 규모별로 세분화할 필요
- 대시보드 색상 원칙 보강: 인구 약 8%가 색각이상 — 색상 단독 구분 금지, 패턴·아이콘·점선 병행 필요 (리나와 공유할 [시각화 원칙] 구체화 근거)

## 출처
- [Benjamini-Hochberg FDR 관련 연구 (PMC/NIH)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11389643/)
- [다중가설검정 방법론 미합의 (arXiv)](https://arxiv.org/pdf/2401.11507)
- [데이터 파이프라인 설계 패턴(CDC/Debezium)](https://dataskew.io/blog/data-pipeline-design-patterns/)
- [Spark/Dask/DuckDB/Polars 벤치마크 재검토](https://milescole.dev/data-engineering/2025/06/30/Spark-v-DuckDb-v-Polars-v-Daft-Revisited.html)
- [AI Council: Spark/Dask/DuckDB/Polars Benchmarks at Scale](https://aicouncil.com/talks/spark-dask-duckdb-polars-benchmarks-at-scale)
- [데이터 시각화 접근성 모범사례](https://julius.ai/articles/data-visualization-best-practices)

## 위키화 후보
- CDC(Change Data Capture) 하이브리드 패턴 — 신규 개념 노트(기존 위키에 미등록, Debezium 로그기반+배치 병행)
- 기존 "A/B 테스트 다중비교 보정" 노트에 Benjamini-Hochberg(FDR)·Bayesian 관점 추가 보강

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "2025~26 Spark 벡터화 개선으로 1~10GB 구간 경쟁력 회복" 갱신 반영
- [시각화 원칙]에 "색상 단독 구분 금지, 패턴/아이콘 병행(색각이상 ~8%)" 구체화(리나 공유)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
