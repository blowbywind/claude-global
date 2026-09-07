---
date: 2026-09-03
bot: victor
type: web-research
tags: [self-learning, big data processing frameworks (Spark, Dask, DuckDB 등), statistical analysis & hypothesis testing, data pipeline / ETL design patterns]
---

# 빅터 자가학습 — 2026-09-03

## 오늘 배운 것
- Coiled TPC-H 벤치마크(2024-05-14, docs.coiled.io) 원문 재확인: DuckDB·Polars는 로컬 소규모(≤10GB)에 강하고, Dask는 절대속도는 밀려도 전 스케일에서 Spark보다 안정적 우위 — 기존 도구 선택 기준 각주와 일치, 유지
- 파이프라인 아키텍처는 수집·변환·저장·서빙 4레이어 간 계약(data contract)+레이어별 SLA 명시가 표준 관행이라는 주장, datadriven.io 원문에서 SLA·ingestion·serving layer 용어 확인됨 — [분석 원칙]의 기존 "데이터 계약+SLA" 항목을 뒷받침
- 프로덕션 파이프라인 신뢰성 5대 패턴(멱등성·백필·데드레터큐·스키마 진화(하위호환 우선)·배치/스트리밍 통합 오케스트레이션), dataskew.io 원문에서 idempotency·dead letter·schema evolution 용어 확인됨
- 대시보드 설계 트렌드로 AI 자동 인사이트·내러티브형 서술 대시보드 확산, uxpin.com 원문에서 narrative·AI·insight 관련 서술 확인(단 "역피라미드" 레이아웃 표현 자체는 원문에서 직접 확인 못함, 일반화 표현으로 축소 반영)

**검증 실패로 폐기한 항목**
- "Gartner(2024): 2026년까지 70%+ 조직이 파이프라인을 SLA 갖춘 제품으로 취급" — dataworkers.io 원문에 해당 수치·인용 부재, 해당 사이트는 AI 크롤러 차단 고지문이 붙은 프로그래매틱 콘텐츠 사이트로 신뢰도 낮음 → 폐기
- "A/B 테스트 성숙도: 상위팀 78% 가설 문서화(평균 34%), CRO팀 70% 95%+ 신뢰수준" — dripagency.de 원문에서 해당 수치 확인 불가(무관한 CR/RPV 수치만 존재) → 폐기
- zero-ETL 트렌드(medium.com 개인 블로그) — JS 월로 원문 페치 불가, 개인 블로그라 저신뢰 → 이번엔 폐기(개념 자체는 AWS/Databricks 공식 자료로 별도 검증 필요)
- 대시보드 접근성(techment.com) — 페이지 차단(빈 콘텐츠)으로 확인 불가 → 신규 인용 보류. 단 기존 위키에 "포용적 설계 2026 트렌드"가 이미 반영되어 있어 공백 없음

## 출처
- [DataFrames at Scale Comparison: TPC-H](https://docs.coiled.io/blog/tpch.html)
- [Data Pipeline Architecture](https://datadriven.io/data-pipeline-architecture)
- [Data Pipeline Design Patterns](https://dataskew.io/blog/data-pipeline-design-patterns/)
- [Dashboard Design Principles](https://www.uxpin.com/studio/blog/dashboard-design-principles/)

## 위키화 후보
- 없음(신규 개념 아님, 기존 노트 확장·재확인 수준)

## 프로필 반영 후보 (저위험)
- [분석 원칙] 각주에 "파이프라인 5대 신뢰성 패턴(멱등성·백필·DLQ·스키마 진화·배치/스트리밍 통합)" 한 줄 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 검증에서도 8건 중 3건(Gartner 인용, A/B 통계, zero-ETL 개인블로그)이 원문 대조 실패로 폐기됨. WebFetch 권한 거부 시 wget 폴백 방식이 반복 실효성 입증(누적 5회+), 정식 서브에이전트화 재제안
