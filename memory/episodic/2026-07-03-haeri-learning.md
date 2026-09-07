---
date: 2026-07-03
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-03

위키 grep 결과를 기준으로 중복 항목을 걸러낸 뒤, 나머지 신규 주장을 학습 지식으로 교차 검증합니다.

---

**검증 판정 요약 (출력 전 내부 판정)**

| 항목 | 판정 | 근거 |
|---|---|---|
| Judge-vs-Judge Calibration | ❌ 중복 | `2026-06-24-haeri-learning.md` "Jury-of-Judges & Judge Calibration" 이미 등록 |
| OWASP Top 10 for Agent Apps | ❌ 중복 | `wiki/concepts/wiki-concepts-owasp.md` + 다수 에피소딕 노트 기등록 |
| 데이터 테스트 피라미드 | ✅ 신규·검증 | Great Expectations·dbt·Monte Carlo가 동일 3단계 구조 구현 — 학습지식으로 교차 확인 |
| 무복사 분기(Zero-copy branching) | ✅ 신규·검증 | Snowflake 제로카피 클론·Neon 브랜칭·Delta Lake 모두 실존 기술 |
| 자동 프롬프트 최적화(APO) | ✅ 신규·부분검증 | DSPy(Stanford) + Bayesian 프롬프트 탐색 실존; MetaPrompting 개념 검증. futureagi.com은 비학술 출처이므로 "개념 참조" 수준 채택 |
| 프롬프트 압축(Prompt Compression) | ✅ 신규·검증 | LLMLingua(Microsoft Research) 실존; lakera.ai는 AI 보안 전문사로 신뢰도 충분. CoD(출력 최적화)와 방향 다름 |
| 처리 바이트당 비용 | ✅ 신규·검증 | Databricks 권고 지표, 클라우드 FinOps 분야 표준 패턴 |

---

## 오늘 배운 것

- **데이터 테스트 피라미드**: 스키마/계약 검증 → 레코드 단위 유효성 → 과거 패턴 대비 회귀 테스트 3단계 구조. Great Expectations·dbt가 동일 계층 구현. 파이프라인 신뢰성 체계의 실질적 표준으로 자리잡음.
- **무복사 분기(Zero-copy Branching) 검증**: 거대 데이터셋을 복제하지 않고 격리 검증 브랜치를 동적 생성(Snowflake Zero-Copy Clone, Neon Branch, Delta Lake). 파이프라인 무결성 테스트를 가볍게 유지하는 인프라 패턴.
- **자동 프롬프트 최적화(APO)**: DSPy(Stanford)·Bayesian 탐색·MetaPrompting이 평가 지표 피드백 루프로 수동 튜닝을 대체. 기존 CoD·Bento-Box는 설계 기법, APO는 자동화 탐색 기법으로 보완 관계.
- **프롬프트 압축(Prompt Compression)**: LLMLingua(Microsoft Research) 등. 핵심 의미 보존 + 토큰 감소로 긴 컨텍스트의 지연·드리프트 방지. CoD가 출력 토큰 절감이라면, Compression은 입력 토큰 절감.
- **처리 바이트당 비용(Cost-per-processed-byte)**: 데이터 유입량 증가 시 단순 가동 시간 대신 이 지표로 클라우드 비용 효율을 공정 추적(Databricks 권고). 파이프라인 품질 게이트의 FinOps 관점 지표.

## 출처

- [Data Testing Pyramid — dev.to](https://dev.to)
- [Zero-copy branching for pipeline validation — platformengineering.org](https://platformengineering.org)
- [Automated Prompt Optimization — futureagi.com](https://futureagi.com)
- [Prompt Compression — lakera.ai](https://lakera.ai)
- [Cost-per-processed-byte — databricks.com](https://databricks.com)

## 위키화 후보

- `data-testing-pyramid.md` — 파이프라인 3단계 검증 구조(스키마→레코드→회귀) 독립 개념 노트
- `automated-prompt-optimization.md` — DSPy·Bayesian·MetaPrompting 계열 APO 기법 노트

## 프로필 반영 후보 (저위험)

- **Zero-copy branching** — 파이프라인 격리 테스트 설계 시 복제 비용 제거 패턴으로 참조
- **Cost-per-processed-byte** — 파이프라인 품질 게이트에 FinOps 지표 추가 체크포인트로 참조

## 승인 필요 (고위험)

_(없음)_

## 신규 도구 후보 (에이전트/스킬)

- `[skill] pipeline-test-pyramid` — 데이터 파이프라인 검증 시 스키마·레코드·회귀 3단계 체크리스트를 자동 생성하고 결과를 위키에 등록하는 스킬
