---
date: 2026-07-17
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-17

## 오늘 배운 것
- **프레임워크 벤치마크(TPC-H) 스케일별 정리**: 로컬 10GB 이하는 DuckDB/Polars, 클라우드 1TB 이하는 Dask·DuckDB가 Spark·Polars 능가, 초대규모 클라우드는 단일 승자 없이 Dask도 경쟁력 — 기존 "도구 선택 기준"을 스케일 구간별로 더 세분화할 근거 확보(단, 출처가 Dask 개발사 Coiled 발행 벤치마크라 벤더 편향 가능성 감안 필요).
- **Bayesian vs Frequentist A/B 테스트 공존 확산**: 업계가 Bayesian(적응형·소표본)으로 이동 중이나 Frequentist도 표준화 이점으로 병행 사용 — 기존에 승인 대기 중인 "베이지안 A/B 도입" 항목과 직결되는 최신 동향으로만 기록(방침 변경 아님).
- **배치+스트리밍 하이브리드 표준화**: 2026년 배치 vs 스트리밍 논쟁 사실상 종료, 메달리온/카파 아키텍처로 하이브리드 처리 표준화 — 기존 메달리온 아키텍처 인사이트와 정합.
- **관찰데이터 인과추론 도구 스택**: EconML(DML·causal forest·도구변수)+DoWhy 결합한 PyWhy가 파이썬 인과분석 표준으로 자리잡음 — 기존 [분석 원칙]의 DiD·성향점수매칭 명시 항목을 구체 도구 수준까지 확장 가능.
- **Zero-ETL 확산**: 클라우드 제공사의 운영DB→분석 웨어하우스 네이티브 연결 확산, 단 "데이터 엔지니어링 소멸"이 아니라 커스텀 수집코드 감소로 해석해야 함(과장 방지).
- **대시보드 5초 규칙 재확인**: 기존 위키의 "5초 내 핵심 파악" 원칙이 2026년에도 성공기준으로 재확인됨(개인화 트렌드는 참고 수준, 검증 근거는 벤더 블로그로 신뢰도 중간).

## 출처
- [TPC-H 벤치마크](https://tpch.coiled.io/)
- [Coiled TPC-H 블로그](https://docs.coiled.io/blog/tpch.html)
- [Statsig: Bayesian vs Frequentist A/B](https://www.statsig.com/perspectives/bayesian-ab-testing-vs-frequentist)
- [Convert: Frequentist vs Bayesian A/B](https://www.convert.com/blog/a-b-testing/frequentist-vs-bayesian-ab-testing/)
- [Zero-ETL 관련 아티클](https://medium.com/@arienugroho650/zero-etl-is-not-magic-how-direct-integrations-are-reshaping-data-engineering-in-2026-d3edb4129256)
- [Dataforest: 모던 데이터 파이프라인](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)
- [UXPin: 대시보드 디자인 원칙](https://www.uxpin.com/studio/blog/dashboard-design-principles/)
- [DoubleML/CausalML 소개](https://medium.com/@chyun55555/introduction-to-doubleml-and-causalml-machine-learning-meets-causal-inference-7bf13154538c)

## 위키화 후보
- PyWhy(EconML+DoWhy) 인과추론 도구 스택 — 신규 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- [분석 원칙]의 "DiD·성향점수매칭" 뒤에 "DML/EconML/DoWhy(PyWhy)" 도구 인지 추가

## 승인 필요 (고위험)
(신규 제안 없음 — 베이지안 A/B 도입 건은 2026-07-16 기록대로 승인 대기 유지)

## 신규 도구 후보 (에이전트/스킬)
(없음)
