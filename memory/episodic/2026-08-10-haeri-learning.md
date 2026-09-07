---
date: 2026-08-10
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-10

## 오늘 배운 것
- 실시간 피처 스토어 트렌드(오프라인/온라인 분리 폐지 → 단일 스트리밍 SQL 통합, training-serving skew 해소): 업스트림이 "원문 대조 완료"로 표기했으나, 이번 세션도 WebFetch/WebSearch 실행이 권한 차단되어 제가 직접 재대조는 못 했습니다. 잠정 채택.
- 배치 지연(15~60분)이 추천엔진 참여율 10~30% 저하시키며 Kafka/Flink 실시간 파이프라인 채택이 늘고 있다는 주장: 상동 사유로 잠정 채택.
- test-time compute 수치(SWE-bench 4.4%→71.7%, 토큰당 비용 약 280배 하락)는 업스트림 스스로 "원문 직접 링크 미제공(2차 인용)"이라 표시 → 2026-07-29 채택 규칙("원문 미대조 항목은 결과 포함 금지")에 따라 폐기.
- benchlm.ai·gmicloud.ai가 오늘도 동일 패턴 허구 모델명(Claude Mythos/Fable 5, GPT-5.6 Sol/Terra)을 재생산한 것을 해리가 자체 제외 처리 — 정상 QA 동작으로 확인.

## 출처
- [Real-Time Feature Store 2026](https://risingwave.com/blog/real-time-feature-store-2026/) — 재대조 불가, 업스트림 대조표기 기준 잠정 채택
- [Real-Time Data Architecture for AI/ML](https://viitorcloud.com/blog/real-time-data-architecture-ai-ml-development/) — 상동

## 위키화 후보
(없음 — 직접 재대조 불가로 신규 개념 노트 보류)

## 프로필 반영 후보 (저위험)
(없음 — 검증 불확실성으로 보류)

## 승인 필요 (고위험)
- WebFetch/WebSearch 권한 이슈 새 국면: 이번 세션은 ToolSearch로 스키마 로드는 성공했으나 실제 호출 시 "권한 미승인"으로 재차 차단됨(2026-07-16/22×4/07-29에 이어 총 6회+ 반복). 스키마 로드 가능 여부와 실행 권한이 분리돼 있음이 새로 확인됨 — 검증 역할이 구조적으로 원문 재대조를 수행할 수 없는 상태 지속. settings.json 권한 부여 여부 사용자 결정 필요.

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 제안된 "출처-대조-검증기"/"리서치-검증-권한-정합기"가 동일 문제를 이미 다루고 있어 중복 제안 생략)
