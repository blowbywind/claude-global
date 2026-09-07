---
date: 2026-08-09
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-09

## 오늘 배운 것
- **Agentic Time Horizons**(AI가 치명적 오류 없이 자율 작업을 지속하는 시간)가 2026년 평가축으로 부상 — METR류 "time horizon" 연구 흐름과 일치, 신뢰도 있는 개념으로 판단.
- **LiveBench**: 최신 뉴스 슬라이딩 윈도우 기반 추론력 테스트로 자동평가-인간평가 간 가교 역할 — 기존에 알려진 실제 벤치마크와 일치.
- **Agent-as-a-Judge**(최종 출력이 아닌 멀티스텝 추론·도구사용 전체 궤적 평가) 트렌드 확산 — 개념 자체는 실제 존재(2024년 원 논문 계열)하나, 이번 인용 arXiv ID(2601.05111)는 WebFetch 권한 차단으로 원문 대조 불가 → **ID 정확성 미확정, 개념만 조건부 채택**.
- 증류형(distilled) LLM judge로 채점 비용 절감(~1/30) + eval 결과의 production guardrail 전환 — 방향성은 업계(Galileo 등) 흐름과 부합하나 1차 출처(zylos.ai)가 소규모/무명 매체라 **신뢰도 중간**으로 분류.
- 데이터 레이크하우스가 hot/warm/cold 3계층으로 세분화, hot tier에 RisingWave류 스트리밍 SQL 엔진 채택 확산 — 기존 위키의 Iceberg/Delta 테이블 포맷 노트와 다른 각도(스트리밍 계층)라 신규 정보로 판단.
- "traceability"(평가 추적성), "context engineering/adaptive memory compression"은 **기존 위키에 이미 상세 축적**되어 있어 신규 학습에서 제외(중복 확인만 완료).

## 검증 플래그
- **모델명 "Claude Opus 5/Fable 5/Mythos 5"(releasebot.io)**: 해리의 자체 플래그에 동의 — 비공식 애그리게이터 단일 출처 + 과거(2026-07-03 등) 동일 계열 3분할 모델명 환각 패턴과 일치. **폐기 확정**.
- 이번 검증 세션에서 WebFetch 재시도 4건 전부 권한 차단으로 원문 대조 불가(기존 인사이트와 동일 패턴 재확인). 다만 리서치 결과 원문상 해리는 releasebot.io를 WebFetch로 대조했다고 명시 — **동일 시각 세션 간 WebFetch 권한 보유 여부가 봇마다 다르게 나타남**, 이미 카탈로그에 등록된 에이전트 "리서치-검증-권한-정합기"가 다루는 문제와 정확히 일치.

## 출처
- [LLM Evaluation Frameworks 2026](https://medium.com/@future_agi/llm-evaluation-frameworks-metrics-and-best-practices-2026-edition-162790f831f4)
- [LLM Evaluation Benchmarks](https://www.genaimlinstitute.com/blog/llm-evaluation-benchmarks)
- [Agent-as-a-Judge (arXiv, ID 미확정)](https://arxiv.org/pdf/2601.05111)
- [LLM-as-Judge Agent Evaluation Patterns](https://zylos.ai/research/2026-05-26-llm-as-judge-agent-evaluation-patterns/)
- [Data Lakehouse Architecture 2026](https://medium.com/real-time-data-evolution/data-lakehouse-architecture-in-2026-streaming-iceberg-and-the-real-time-layer-4bb23ed2c645)
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)

## 위키화 후보
- Agentic Time Horizons — 자율작업 지속시간 기반 신규 평가축, 기존 judge/골든셋 노트와 결이 다른 신규 개념
- Agent-as-a-Judge (trajectory 평가) — 단, 원문 인용 ID 미확정 명시하고 등록

## 프로필 반영 후보 (저위험)
- "Agentic Time Horizons" 용어를 회귀 테스트 리뷰 체크포인트 참고 용어로 병기(수치 기준 아님, 참고용)

## 승인 필요 (고위험)
- 기존 제안 에이전트 "리서치-검증-권한-정합기" 실행 승인 여부 재확인 필요 — 이번 세션에서 리서치 봇과 검증 봇(본인) 간 WebFetch 권한 보유 여부가 상이함이 재차 확인됨

## 신규 도구 후보 (에이전트/스킬)
(없음 — 동일 목적 에이전트 "리서치-검증-권한-정합기", "출처-대조-검증기(-개선안)" 이미 카탈로그에 존재, 신규 제안 불필요)
