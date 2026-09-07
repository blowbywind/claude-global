---
date: 2026-07-23
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-07-23

## 오늘 배운 것
- **Polars vs Spark 구도 재확인**: 2026-05 최신 비교글에서도 "~10GB 미만 단일노드=Polars 우위, 분산·상태유지 워크로드=Spark 우위" 구도가 그대로 유지된다고 확인됨(기존 도구선택 기준과 일치). 단, 리서치에 제시된 "Polars Cloud 0.9.0/1.42 버전", "PDS-H 벤치마크 최대 6배·클러스터 3배" 수치는 원문 본문에서 확인되지 않아 폐기함(pola.rs 벤치마크 글은 2025-05 게시 확인, 배수 수치 언급 없음).
- **SPRT-z(순차확률비검정) 논문 확인**: arXiv 2606.24871 "Sequential Probability Ratio Test using Z-Statistics (SPRT-z)" 실재 확인. Wald의 SPRT를 온라인 실험용으로 개조해 peeking 허용 + 조기 무익중단(futility stopping) + 검정력(Type II 오류) 제어를 동시 지원하는 실무적 순차검정 기법.
- **Composable ETL 아키텍처**: 수집(ingestion)·변환(transformation)·활성화(activation) 3계층을 독립 조합하는 구조와, 스키마 변동이 잦은 소스는 ETL보다 ELT가 적합하다는 진단을 원문에서 확인. 메달리온 아키텍처 검토 항목에 참고할 근거 확보.
- **ETL 배포 인프라 통계**: 전문 개발자 대상 Docker 컨테이너화 채택률 59%, 기업의 84%가 Kubernetes 오케스트레이션 채택 — 원문 확인됨.
- **Zero-ETL 흐름**: 클라우드 제공사의 운영DB→분석 웨어하우스 직접연결이 커스텀 적재 코드를 대체하는 흐름은 원문 확인되나, 해당 글은 "2025년 트렌드" 표제로 작성된 문서임(2026년 신규 사실이 아니므로 표기 주의).
- **폐기 항목**(원문 미확인/접근 차단): ①대시보드 인터랙티비티 과다→time-to-insight 35%↑ 통계(uxpin 본문에 없음) ②2027년까지 대시보드 75% 자동화·대화형 대체 전망(improvado 본문에 없음) ③실험 플랫폼 3개 통계엔진 지원(abtasty, 403 차단으로 접근 불가) → 모두 신뢰 불가로 제외.

## 출처
- [Polars vs Spark 2026 비교](https://sparkingscala.com/latest/2026/05/22/spark-vs-polars-2026/)
- [Sequential Probability Ratio Test using Z-Statistics (SPRT-z)](https://arxiv.org/abs/2606.24871)
- [Marketing Data Pipelines: ETL to Activation in 2026](https://www.digitalapplied.com/blog/marketing-data-pipeline-etl-2026-modern-data-stack-reference)
- [Python ETL Framework Usage Trends](https://www.integrate.io/blog/python-etl-framework-usage-trends/)
- [ETL Trends (Zero-ETL)](https://hevodata.com/learn/etl-trends/)

## 위키화 후보
- SPRT-z(순차확률비검정) — A/B 테스트 peeking 대응 신규 통계기법, 개념노트 신설 가치 있음
- Composable ETL 아키텍처(수집/변환/활성화 독립 계층 + ELT 전환 기준) — 메달리온 아키텍처 노트와 연계해 파이프라인 설계 참조노트 가치

## 프로필 반영 후보 (저위험)
- 도구 선택 기준에 "Polars(~10GB 미만 단일노드) vs Spark(분산·상태유지)" 구도가 2026-05 시점에도 유지됨을 근거 갱신
- ETL 배포 표준 검토항목에 "Docker 59%·Kubernetes 84% 채택" 통계 참고자료 추가

## 승인 필요 (고위험)
- SPRT-z 순차검정을 실험설계 표준 옵션으로 도입할지 — 기존 "사전등록·표본크기 사전확정" 원칙과 방법론 충돌 가능(2026-07-16 베이지안 A/B 검토 시와 동일 사유로 보류), 도입 여부 사용자 승인 필요

## 신규 도구 후보 (에이전트/스킬)
(없음)
