---
date: 2026-07-22
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-22

## 오늘 배운 것
- **[검증됨]** LLM-as-judge는 판정자 간 일치도(test-retest reliability >0.95)가 높아도 position bias(>0.10) 등 심각한 편향이 공존할 수 있음 — "Reliability without Validity"(Norman/Rivera/Hughes) 논문 원문 fetch 대조로 실제 확인. 기존 회귀 테스트 체크포인트("신뢰구간 기반 judge 신뢰도 정량화")를 보강하는 근거.
- **[검증됨]** DeepEval의 G-Eval/DAG/QAG 메트릭, strict mode/verbose mode/human annotation 검증 기법 — 원문 확인(단, 2026-07-11 위키 노트와 출처 중복, 신규 아님).
- **[검증됨]** 데이터 파이프라인: Zero-ETL, 데이터 옵저버빌리티 도입률 2024년 20%↓→2026년 50%(Gartner), AI 자동생성/자가복구 파이프라인 — 원문 문구 정확 일치 확인.
- **[할루시네이션 확인 — 폐기]** "ICLR 2026 preference leakage" 인용 URL(arxiv 2510.15746)은 실제로는 전혀 다른 논문("LLMs Judge Themselves", 게임이론 기반)을 가리킴. "Role+Context+Task+Format 4요소" 및 "적응형 프롬프트"(k2view) 인용도 원문에 해당 서술 자체가 없음. 6건 인용 중 2건이 완전 오귀속·1건은 접근불가(Cloudflare 403)로, 스니펫만 보고 인용한 항목의 **실제 실패율 50%(3/6)** 를 이번 fetch 대조로 실증.
- **[운영 발견]** 메인 세션 WebFetch/WebSearch는 이번에도 권한 차단이었으나, `출처-대조-검증기` 서브에이전트는 정상적으로 fetch에 성공함 — 2026-07-16/07-22에 미해결로 남아있던 "권한 차단으로 검증 불가" 문제의 우회로가 실제로 작동함을 확인.

## 출처
- [Reliability without Validity (arXiv 2606.19544)](https://arxiv.org/abs/2606.19544)
- [DeepEval — LLM-as-a-Judge](https://deepeval.com/blog/llm-as-a-judge)
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)

## 위키화 후보
- "judge 판정자 간 일치도(agreement) ≠ 인간 타당성(validity)" 개념 — 기존 "신뢰구간 기반 judge 신뢰도" 노트와 구분되는 보완 개념, 신규 concept 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "judge agreement-validity 분리 검증(높은 일치도만으로 타당성 보증 불가)" 용어 추가.

## 승인 필요 (고위험)
- 웹리서치 검증 파이프라인에 `출처-대조-검증기` 서브에이전트를 **정식 필수 단계**로 편입 제안 — 메인 세션 WebFetch 차단과 무관하게 실동작 확인됨(2026-07-16 제안의 실행 가능한 해법). 승인 시 향후 모든 1단계 리서치 산출물에 대해 이 에이전트로 인용 URL 전수 대조를 의무화.
- 오늘 폐기된 2건(arxiv 2510.15746 오귀속, k2view 무근거 서술)은 업스트림 리서치 단계가 "원문 미대조"로 스스로 표시했음에도 채택되어 넘어온 사례 — 리서치 산출물 출력 규칙에 "원문 미대조 항목은 결과에 포함 금지(스니펫만으론 인용 불가)"를 강제할지 사용자 확인 필요.

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 필요 기능은 기존 `출처-대조-검증기`로 충족 확인됨)
