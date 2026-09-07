---
date: 2026-07-29
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-29

## 오늘 배운 것
- LLM 평가는 2026년 기준 **오프라인(큐레이션 데이터셋)·온라인(운영 트래픽)·PR 이전 CI**의 3단계 상시 실행이 표준 — 기존 회귀 테스트 체크포인트의 "골든셋 CI 게이트"를 온라인 평가 단계까지 확장할 근거로 채택.
- "Sonnet 5 / GPT-5.6 Sol·Terra·Luna" 모델명 환각이 2026-07-03, 07-22에 이어 **3회째** 재현 확인됨 — 이번엔 리서치 측이 WebFetch 원문 대조(HTTP 404)로 직접 걸러냈습니다. 검증 체크포인트("인용 URL 원문 대조")의 유효성이 재입증된 사례입니다.
- 단, 검증(제 쪽)에서 동일 URL 2건(deepeval.com, algoscale.com)에 WebFetch를 시도했으나 **권한 미승인으로 재차 차단**됨을 확인했습니다. 리서치 담당(해리) 세션에서는 통과했다는 점에서, "원문 대조" 권한이 봇/역할별로 비일관적으로 부여되고 있을 가능성이 있습니다(교차검증 신뢰도에 영향).
- DeepEval의 G-Eval/DAGMetric(2026-07-11 기존 노트)과 "컨텍스트 엔지니어링 파이프라인"(2026-07-02 기존 노트)은 **위키에 이미 축적**되어 있어 신규 학습으로 반영하지 않았습니다(QAG 언급은 기존 노트에 없으나 출처 원문을 제가 직접 대조하지 못해 채택 보류).
- "데이터 옵저버빌리티 채택률 약 50%(2024년 20% 미만)" 통계는 algoscale.com 단일 출처이며 제 쪽에서 원문 fetch 대조가 차단되어 **미검증** 상태입니다 — 확정 사실로 채택하지 않고 참고 수준으로만 남깁니다.

## 출처
- [DeepEval: Top 5 LLM Evaluation Frameworks](https://deepeval.com/blog/top-5-llm-evaluation-frameworks)
- [DeepEval: LLM-as-a-Judge](https://deepeval.com/blog/llm-as-a-judge) (해리 측 WebFetch 대조 완료, 제 쪽 재확인은 권한 차단으로 실패)

## 위키화 후보
- "오프라인·온라인·PR-CI 3단계 상시 LLM 평가" — 기존 "골든셋 CI 게이트" 노트에 온라인 평가 단계를 추가하는 확장 노트로 가치 있음.

## 프로필 반영 후보 (저위험)
- 없음 (신규 검증 통과 전문 용어 없음 — G-Eval/DAG/컨텍스트 엔지니어링은 기존 반영분과 중복)

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- [agent] 리서치-검증 권한 정합기 — 웹리서치 담당 봇과 검증 담당 봇(저) 간 WebFetch/WebSearch 권한 부여 여부가 세션마다 비일관적으로 확인됨(2026-07-16/07-22/07-29 반복). 역할별 툴 권한 설정을 점검·통일하는 인프라 점검 작업이 필요해 보이며, 이는 설정(settings.json) 변경이므로 사용자 확인 후 `update-config` 스킬로 처리 제안.
