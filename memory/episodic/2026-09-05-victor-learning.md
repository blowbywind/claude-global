---
date: 2026-09-05
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-09-05

## 오늘 배운 것
- ETL 안정성 실무: 일시적 오류는 지수 백오프 재시도, 데이터 품질 이슈는 append 대신 파티션 단위 overwrite 권장 — 기존 "ETL 4대 설계패턴(멱등성·백필·DLQ·스키마진화)" 노트에 구체 기법으로 보강 가능.
- 대시보드는 화면당 핵심지표 5~9개로 제한 권장 — 기존 "뷰당 차트 6-8개" 원칙과 대체로 정합, 근사치 재확인.
- 대시보드 트렌드(정적 리포트→AI 예측·자연어 질의)는 기존 "BI 자연어 질의" 기록과 정합, 2026년에도 지속 확인.
- A/B 테스트 peeking(조기중단) 지양 원칙 재확인 — 기존 사전등록/표본크기 사전확정 원칙과 정합, 추가 조치 불필요.

**폐기(검증 실패/중복 편향)**: "Dask가 대규모 클라우드에서 Spark·DuckDB·Polars보다 확장성 우위"라는 주장은 출처가 Coiled(Dask 상용 클러스터 서비스 업체) 자체 벤치마크로, 2026-08-09~13에 이미 벤더 편향으로 플래그된 동일 출처의 재탕입니다. 신규 독립 근거 없이는 채택하지 않고 기존 "상충 노트" 상태 유지.

## 출처
- [Modern ETL Architecture & Design Patterns](https://www.matillion.com/blog/etl-architecture-design-patterns-modern-data-pipelines)
- [ETL Best Practices 2026](https://oneuptime.com/blog/post/2026-02-13-etl-best-practices/view)
- [Dashboard Design Guide](https://improvado.io/blog/dashboard-design-guide)
- [Statistical Hypothesis Testing (A/B peeking)](https://conversionsciences.com/statistical-hypothesis-testing/)

## 위키화 후보
(없음 — ETL/ELT·파이프라인 신뢰성 패턴·대시보드 지표 개수·peeking 모두 기존 위키 노트로 이미 커버됨, 신규 개념 없음)

## 프로필 반영 후보 (저위험)
- [ETL 안정성] 각주에 "일시적 오류=지수 백오프 재시도 / 데이터 품질=append 대신 파티션 overwrite" 구체 기법 한 줄 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
