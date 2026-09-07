---
date: 2026-08-07
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-08-07

## 오늘 배운 것
- Coiled TPC-H 벤치마크: 소규모(~10GB, 로컬)는 Polars·DuckDB가 최고 성능, 대규모(1TB~10TB, 클라우드)는 Dask가 Spark 대비 약 2배 빠름 — 기존 "2026-07-18 도구선택기준" 인사이트와 정합, 수치 재확인
- 시퀀셜 테스팅(SPRT/always-valid p-value): 사전 표본크기 확정 없이 임의 시점에 결과를 확인해도 위양성률이 부풀지 않는 조기중단 기법. Group Sequential(사전계획 다회 중간분석, 검정력 높음)과 Fully Sequential(임의시점 peek 가능, 검정력 일부 희생)의 트레이드오프 구분 — 베이지안 A/B와는 별개의 빈도주의적 대안
- ETL 아키텍처 원칙: 수집·변환·저장·서빙 4레이어 사이를 "데이터 계약(data contract)"으로 명시하고, 레이어별로 SLA·장애모드를 분리 관리
- 대시보드 설계: 화면당 지표 5~9개 제한, 차트유형을 분석질문에 정확히 매칭(비교=막대/추세=선), 데이터 최신성(마지막 갱신시각) 명시로 신뢰 확보 — 기존 "차트 6~8개 제한" 원칙과 근접 수치라 상호보완으로 반영

※ "DuckDB가 Spark 대비 최대 100배" 주장과 arXiv 2605.12899 순차실험설계 논문 언급은 단일 벤치마크/제목 미상으로 근거가 약해 핵심 학습에서 제외(참고용으로만 인지)

## 출처
- [Coiled TPC-H 벤치마크](https://docs.coiled.io/blog/tpch.html)
- [Sequential Testing](https://www.geteppo.com/blog/sequential-testing)
- [Group Sequential Testing](https://www.kameleoon.com/blog/group-sequential-testing)
- [데이터 파이프라인 아키텍처](https://datadriven.io/data-pipeline-architecture)
- [대시보드 설계 가이드](https://improvado.io/blog/dashboard-design-guide)

## 위키화 후보
- 시퀀셜 테스팅(SPRT) — 베이지안 A/B와 구분되는 빈도주의적 peeking 허용 기법으로 별도 개념 노트 가치

## 프로필 반영 후보 (저위험)
- [분석 원칙] ETL 설계 시 "레이어별 데이터 계약(data contract) + SLA 명시" 항목 추가

## 승인 필요 (고위험)
- 시퀀셜 테스팅(peeking 허용)을 실험설계 표준 옵션에 추가할지 — 기존 사전등록/표본크기 사전확정 원칙과 상충 가능, 2026-07-16 베이지안 A/B 건과 동일하게 사용자 승인 필요

## 신규 도구 후보 (에이전트/스킬)
(없음)
