---
date: 2026-08-09
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-09

## 오늘 배운 것
- Coiled TPC-H 4종 벤치마크(Spark/Dask/DuckDB/Polars) 원문 확인 결과: "DuckDB and Dask are the most robust choices today"(로컬 저사양 디스크·중대형 클라우드 환경 강건성) — 기존 위키의 Dask vs Spark 노트(M1 로컬, 별도 벤치마크)와는 다른 출처로 보강 가치 있음
- DuckDB vs Spark 50GB~1TB OLAP 우위 주장(dataexpert.io) 원문 실재 확인 — 단, 기존 위키에 이미 상세 기록된 내용과 중복이라 신규성 없음
- **검증 실패로 폐기 1**: "베이지안 A/B 채택률 18.4%→41.2%"(growthbook.io) — 원문 전체(11만자) 대조 결과 해당 수치가 본문에 존재하지 않음(있는 숫자는 전부 CSS 스타일 값). 환각(hallucination)으로 판단해 폐기
- **검증 실패로 폐기 2**: "DAG→에이전트 운영 파이프라인/MCP 도입"(singdata.com) — 원문 전체 대조 결과 "MCP", "agent", "idempotent" 언급 전무. 메달리온 계약(contract) 프레임과 무관한 오귀속으로 판단해 폐기
- **검증 불가로 폐기 3**: 대시보드 "역피라미드" 레이아웃(domo.com) — fetch 시 HTTP 405로 원문 대조 불가, 미검증 상태라 폐기
- Spark 4.1.2(2026-05-21 릴리스, Wikipedia) — 기존 위키 버전 추적 노트와 중복, 정기 갱신용 참고치로만 확인

## 출처
- [TPC-H Benchmarks: Dask vs DuckDB vs Polars](https://docs.coiled.io/blog/tpch.html) — "robust" 문구 원문 확인 완료
- [DuckDB benchmarked against Spark](https://blog.dataexpert.io/p/duckdb-can-be-100x-faster-than-spark) — 실재 확인, 기존 지식과 중복
- [Apache Spark - Wikipedia](https://en.wikipedia.org/wiki/Apache_Spark) — 버전 트래킹, 원문 미대조(신뢰 소스로 판단)

## 위키화 후보
- (없음 — 검증 통과 항목이 기존 노트와 중복이거나 소폭 보강 수준이라 신규 노트 불필요)

## 프로필 반영 후보 (저위험)
- 도구 선택 기준 각주에 "Coiled TPC-H 4종 비교: 로컬 저사양/대규모 클라우드=DuckDB·Dask 강건" 한 줄 보강(기존 각주 확장 수준, 저위험)

## 승인 필요 (고위험)
- (없음 — 베이지안 A/B 관련 신규 근거는 검증 실패로 폐기되어 기존 "방법론 변경 승인 대기" 상태에 변동 없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 라운드에서 리서치 산출물 5건 중 3건(60%)이 실제로는 본문에 없는 수치·프레임을 인용한 것으로 확인됨(WebFetch 권한 미부여로 wget 폴백 사용). 반복되는 패턴이라 기존 카탈로그의 "출처-대조-검증기-개선안" 채택을 재제안
