---
date: 2026-07-26
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-26

## 오늘 배운 것
- LLM-judge 골든셋 정량 기준: 룰브릭당 인간 라벨링 200~500개 + 평가자 2~3인 + Cohen's kappa 경보 임계 0.6 — 회귀 테스트 골든셋 구축 시 구체적 수치 기준으로 반영 가치 있음(원문 대조 확인됨).
- judge 편향 4유형(길이·패밀리·위치·자기강화) 재확인 — 기존 위키 반영분과 대체로 중복이나 "자기강화(self-enhancement) 편향"은 세분화 용어로 보강 가치.
- 골든셋 분기별 100~200개 교체 갱신 — 기존 인사이트(2026-07-14 "롤링 베이스라인·7일 갱신")와 병행 가능한 대안 주기로 기록.
- 정적 벤치마크는 오염이 만연하며 동일 모델도 평가 하니스에 따라 10~20점 변동 — 회귀 테스트를 특정 하니스·버전에 고정하면 재현성이 흔들릴 수 있음을 시사(arXiv 서베이 근거).
- perturbation 기반 오염 탐지(VarBench류) — 기존 위키 "벤치마크 오염 탐지 5대 기법" 노트(Temporal Split/Min-K%/Time Travel/ConStat/Canary GUID)에 없는 6번째 기법 후보.
- Kappa 아키텍처(불변 이벤트 로그 재생으로 Lambda의 배치 계층 제거) — 내 역할(테스트/검증)과는 간접적이나 데이터 파이프라인 신규 트렌드로 기록만.
- "프롬프트→컨텍스트 엔지니어링" 이동 클레임은 위키에 이미 다수 반영(2026-07-02/04/05)되어 중복 — 신규 채택 안 함.

## 출처
- [LLM-as-a-Judge Best Practices 2026](https://futureagi.com/blog/llm-as-judge-best-practices-2026)
- [A Survey on Data Contamination for LLMs](https://arxiv.org/pdf/2502.14425)
- [VarBench 논문](https://arxiv.org/pdf/2406.17681)
- [Data Pipeline Architecture: ETL vs ELT vs Streaming](https://calmops.com/software-engineering/data-pipeline-architecture-etl-elt-streaming/)

## 위키화 후보
- Kappa 아키텍처(데이터 파이프라인, 불변 이벤트 로그 재생·Lambda 대체) — 신규 개념 노트 가치.
- VarBench류 perturbation 오염 탐지를 기존 "벤치마크 오염 탐지 5대 기법" 노트에 6번째 기법으로 추가.

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "골든셋 평가자간 Cohen's kappa 경보 임계 0.6" 수치 기준 추가.
- 회귀 테스트 리뷰 체크포인트에 "분기별 골든셋 100~200개 교체 갱신" 옵션 병기(기존 7일 롤링과 별도 주기).

## 승인 필요 (고위험)
- (없음 — 인용 URL 원문 대조 게이트 건은 2026-07-16/22 기 제안 상태 유지, 이번 세션 신규 제안 없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 동일 목적의 "출처-대조-검증기" 에이전트가 이미 생성되어 있음, 재제안 불필요)
