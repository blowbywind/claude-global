---
date: 2026-09-06
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-09-06

## 오늘 배운 것

- **DuckDB v2.0-alpha 실제 출시 확인**(2026-09-02, 공식 블로그 원문 대조 완료): `v2.0-cyanoptera` 브랜치로 feature freeze 진입, GA는 **2026년 10월 하반기**로 명시. 기존 위키 노트("2026년 가을 출시")보다 구체화됨 — CLI 기준 `v2.0.0-alpha39998` 확인.
- **Spark 4.1.0 GA 기능 공식 확인**(spark.apache.org 릴리스노트 원문 대조): Structured Streaming Real-Time Mode(RTM), VARIANT 타입 GA(shredding 포함), SQL Scripting GA, Python Arrow-native UDF/UDTF 전부 실제 반영됨. 단 **정확한 GA 일자(2025-12-16)는 공식 페이지에 표기 없어 미확정** — 후속 4.1.1~4.1.3 패치 존재로 시기상 정합성만 확인.
- **순차검정(sequential testing) 방법론 구분**: Group Sequential(사전계획된 peek, 검정력 우수) vs 완전순차(mSPRT/MaxSPRT, 임의 시점 peeking 허용·검정력 다소 손해)는 별개 트레이드오프. 기존 대기 중인 "peeking 허용" 승인 안건에 "Group Sequential만 우선 도입" 절충안 근거로 활용 가능.
- **arXiv 2605.12899 "Robust Sequential Experimental Design for A/B Testing" 존재는 확인**(stat.ML/cs.LG)하나, **"Series B: Statistical Methodology 게재" 주장은 arXiv 페이지에 journal-ref 없어 근거 불충분 → 프리프린트로만 인용**, 게재 주장은 폐기.
- 2026 대시보드 트렌드(내러티브형 흐름, AI 자연어 대화형 조회, 포용적 설계 강화)는 디자인 전문 블로그 2곳(uxpin, think.design) 소스로 참고 수준 채택. 리나와 색상·톤 조율 시 참고 가능.
- **폐기**: "Databricks 신규 데이터셋 80%+ AI 에이전트 생성" 통계는 개인 dev.to 블로그 1건이 유일 출처이며 원문 대조 시 해당 수치의 근거·표본 확인 불가 → 채택하지 않음.

## 출처
- [Try DuckDB v2.0-alpha](https://duckdb.org/2026/09/02/try-duckdb-20-alpha) — 원문 대조 완료
- [Spark 4.1.0 Release Notes](https://spark.apache.org/releases/spark-release-4.1.0.html) — 원문 대조 완료
- [Robust Sequential Experimental Design for A/B Testing (arXiv:2605.12899)](https://arxiv.org/abs/2605.12899) — 존재만 확인, 게재처 주장 미확인
- [Sequential Testing Explained (Eppo)](https://www.geteppo.com/blog/sequential-testing)

## 위키화 후보
- 기존 `duckdb-v2-0-프리뷰-...` 노트를 "alpha 출시(2026-09-02)/GA 10월 하반기 확정"으로 갱신(신규 노트 아님, 업데이트 권장)

## 프로필 반영 후보 (저위험)
- 도구 선택 기준 버전 정보: "DuckDB v2.0.0-alpha(cyanoptera, GA 2026-10 하반기 예정) / Spark 4.1.0 GA 기능 공식 확인(RTM·VARIANT GA·SQL Scripting GA)"

## 승인 필요 (고위험)
- 기존 2026-08-11 대기 중 "시퀀셜 테스팅 peeking 허용" 건에 대해, 이번 검증으로 Group Sequential/완전순차 구분이 명확해졌으므로 **"사전계획 Group Sequential만 우선 도입"** 절충안을 제안 — 방법론 변경이라 사용자 승인 필요(위키 반영 보류 유지)

## 신규 도구 후보 (에이전트/스킬)
(없음)
