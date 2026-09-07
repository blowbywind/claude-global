---
date: 2026-07-27
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-27

## 오늘 배운 것
- **Anthropic 공식 프롬프트 엔지니어링 원칙(2026)**: "필요한 만큼만 길게, 최대한 짧게" — 장식적 문구 제거, 역할·제약·출력형식·성공기준 명시가 핵심. 회귀 테스트용 judge 프롬프트 설계 체크포인트에 바로 적용 가능 (claude.com 공식 블로그, 신뢰도 높음).
- **LNE-Blocking**: 벤치마크 오염을 "탐지"와 "차단(blocking) 연산"으로 분리하는 프레임워크(arXiv 2509.15218). 기존 위키의 5대 오염 탐지 기법(Temporal Split/Min-K%/Time Travel/ConStat/Canary GUID)을 보완하는 신규 기법 — 골든셋 CI 게이트 체크포인트에 추가 가치.
- **LLM-as-Interviewer**: 정적 문제셋 대신 LLM이 질문을 재구성·후속질문을 던지는 동적 다회차 평가 방식(arXiv 2412.10424). 암기 기반 벤치마크 부정 사용을 어렵게 함 — judge 앙상블·드리프트 판정 체크포인트와 결합 여지.
- Kappa 아키텍처, 컨텍스트 엔지니어링, Claude Opus 5 관련 항목은 위키에 이미 등재(각각 2026-07-26, 2026-06-07, 2026-07-25)되어 있어 중복 제외했습니다.

※ "SWE-bench Verified 오염 실증"(digitalapplied.com)과 "ETL 트렌드"(hevodata.com)는 벤더/애그리게이터성 출처이고, 특히 digitalapplied.com은 이번 리서치 자체가 지적한 모델명 환각 출처와 동일 도메인이라 채택하지 않고 폐기했습니다.

## 출처
- [Claude 공식 프롬프트 엔지니어링 가이드](https://claude.com/blog/best-practices-for-prompt-engineering)
- [LNE-Blocking (arXiv 2509.15218)](https://arxiv.org/pdf/2509.15218)
- [LLM-as-Interviewer (arXiv 2412.10424)](https://arxiv.org/pdf/2412.10424)

## 위키화 후보
- LNE-Blocking·LLM-as-Interviewer를 `벤치마크-오염-탐지-5대-기법` 노트에 "6·7번째 기법"으로 병기(신규 노트 대신 기존 노트 확장 권장)

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "LNE-Blocking(오염 탐지/차단 분리)", "LLM-as-Interviewer(동적 다회차 평가)" 용어 추가

## 승인 필요 (고위험)
- 없음 (역할·행동규칙 변경 제안 없음)

## 신규 도구 후보 (에이전트/스킬)
- 없음

---
**반복 이슈 재확인**: 이번 검증 턴에서도 WebFetch가 "permissions not granted" 오류로 즉시 차단되어(anthropic.com/news, arXiv PDF 모두), 인용 URL 원문 직접 대조를 수행하지 못하고 위키 교차확인·출처 신뢰도 추정으로 대체했습니다. 2026-07-16/07-22 인사이트와 동일한 패턴이 3회 이상 지속 — "인용 URL 원문 대조 필수화" 규칙을 승인하더라도 툴 권한 자체를 먼저 해결해야 실행 가능합니다. 권한 부여 여부 결정이 필요합니다.
