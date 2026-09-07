---
date: 2026-07-12
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-12

WebSearch 도구 권한이 없어 추가 검색은 불가했습니다. 기존 지식과 상식적 정합성으로 교차검증한 결과, 아래와 같이 출처 신뢰도가 낮거나 검증 불가한 항목은 폐기했습니다.

**폐기 항목**:
- "Claude Fable 5(53.3%), Claude Opus 4.8(45.7%)" — Anthropic 공식 버전 네이밍 관례(4/4.1/4.5)에 없는 명칭이며, 3rd-party 리더보드(pricepertoken.com) 단일 출처로 환각 가능성 높음. 폐기.
- Playwright 1.59 "94% vs Cypress 71%" 수치, Cypress 15.13.0 cy.prompt() 정확 버전·날짜 — 마케팅 블로그(autify.com, buildmvpfast.com, getautonoma.com) 단독 출처의 과도하게 구체적인 수치, 검증 불가로 폐기.
- arXiv 2504.17087 논문 번호 — 개념(PoLL) 자체는 기존에 알려진 연구 방향과 일치하나 정확한 arXiv ID는 미검증.

## 오늘 배운 것
- LLM-as-Judge 편향은 위치(position)·장황함(verbosity)·자기선호(self-preference)·포맷·보정드리프트 5종으로 유형화되며, 서로 다른 모델 패밀리로 구성한 3-judge 앙상블이 단일 판정기보다 편향을 줄인다는 것이 업계 통설과 부합함
- 위치 편향 완화는 "응답 순서 랜덤 스와핑 + 다수 비교 결과 집계"가 효과적이며, 월 1회 사람 채점 보정 점검을 프로덕션 체크포인트로 권고
- 소형·비중복 모델군으로 구성한 PoLL(Panel of LLM Evaluators) 방식이 대형 단일 판정기 대비 내부편향·비용을 함께 줄인다는 연구 방향이 존재(정확한 논문 식별자는 재확인 필요)
- 프롬프트 엔지니어링은 성공기준·제약조건 사전명시 + XML태그/마크다운 섹션(CONTEXT/TASK/FORMAT) 구조화, few-shot 3~5개 고품질 예시가 표준 모범사례로 확인됨(Anthropic 공식 가이드와 정합)
- 데이터 파이프라인 검증은 단계 경계(추출/정제/변환/적재)마다 스키마강제·중복제거·타입캐스팅·널처리 품질검사를 두는 것이 핵심이며, dbt tests·Great Expectations가 표준 프레임워크로 재확인됨

## 출처
- [Evaluating LLM Judge Bias Mitigation](https://futureagi.com/blog/evaluating-llm-judge-bias-mitigation-2026/)
- [LLM-as-Judge Best Practices](https://futureagi.com/blog/llm-as-judge-best-practices-2026)
- [Data Pipeline Testing](https://atlan.com/testing-data-pipelines/)
- [ETL Data Validation](https://www.integrate.io/blog/data-validation-etl/)
- [Claude Prompt Engineering Best Practices](https://claude.com/blog/best-practices-for-prompt-engineering)

## 위키화 후보
- `deepeval-geval-dagmetric-등-llm.md`(승인 대기중)에 "3-judge 앙상블 + 응답순서 랜덤화 + 월 1회 사람 보정" 편향완화 세부사항 보강 (기존 노트 확장, 신규 노트 아님)

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "다중 모델 패밀리 judge 앙상블·응답순서 랜덤화" 용어 반영

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
