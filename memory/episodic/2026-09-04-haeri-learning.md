---
date: 2026-09-04
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-09-04

## 오늘 배운 것

- **Claude Fable 5.1 출시**: Anthropic 공식 발표 페이지(anthropic.com/claude-fable-and-mythos-5-1) 원문 대조 결과 가격($10/백만 입력, $50/백만 출력 — Fable 5와 동일)과 Terminal-Bench-Science 0.1 자체보고 점수(Fable 5.1 52.6% vs Fable 5 24.7%)가 **정확히 일치** 확인. 단 정확한 출시 일자는 원문에 "September 2026"으로만 표기돼 "2026-09-01"이라는 특정일은 확인 불가(제외 권장).
- **GLM-5.3-Flash 스펙**: HuggingFace zai-org 모델카드 원문 대조로 "GLM-5 계열 최초 네이티브 멀티모달", "320B 총 파라미터/18B 활성", "1M 컨텍스트", "DeepSWE v1.1 63.4점"까지 **정확히 일치** 확인. GLM-5.2 대비 46.2 비교수치는 이번 대조에서 직접 확인하지 못함(참고용으로만 사용 권고).
- **에이전트 신뢰성 논문(arXiv 2602.16666)**: 공식 초록 대조 결과 "정확도 벤치마크 점수는 상승했지만 신뢰성 개선은 미미하다"는 취지는 일치. 단 "24개월간"이라는 구체 기간은 초록에서 확인되지 않아 제외 필요.
- **역할기반 프롬프팅 주장 정정**: Anthropic 공식 블로그(claude.com/blog/best-practices-for-prompt-engineering) 원문은 오히려 "modern 모델엔 과도한 역할 설정이 불필요할 수 있고 지나치게 제약된 역할은 지양하라"는 caveat 포함 — 해리 리서치의 "역할기반 프롬프팅 권장" 서술과 뉘앙스 상충. 채택 시 caveat 병기 필요.
- **Stanford HAI "22%~94% 환각률" 주장 폐기**: 원문(suprmind.ai) 대조 결과 실제로는 "사용자의 거짓 전제에 모델이 최대 94% 동의(sycophancy 벤치마크)"에 관한 서술이며, "제3자 신념 vs 사용자 신념 구분·26개 모델 환각률 범위"라는 서술은 원문에서 확인되지 않음 → **폐기**.
- **HalluBench 주장 폐기**: ScienceDirect 원문 fetch 실패(콘텐츠 미확보), 교차 검색으로도 독립 확인 불가 → **폐기**.
- Dagster/Prefect 선호 트렌드, 스트리밍-배치 TCO 항목은 기존 위키(`etl-트렌드-인지.md`, `오케스트레이터-선택기준-airflow-dagster-asset`)와 개념 중복 확인, 스트리밍 TCO는 "사기탐지=실시간" 부분만 원문(dataforest.ai)에서 재확인됨(구체 배수는 원문 미기재).

## 출처
- [Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)
- [GLM-5.3-Flash 모델카드](https://huggingface.co/zai-org/GLM-5.3-Flash)
- [Towards a Science of AI Agent Reliability](https://arxiv.org/abs/2602.16666)
- [Best practices for prompt engineering (Anthropic)](https://claude.com/blog/best-practices-for-prompt-engineering)
- [AI Hallucination Rates and Benchmarks](https://suprmind.ai/hub/ai-hallucination-rates-and-benchmarks/) (misattribution 확인용)
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) (부분 확인)

## 위키화 후보
- Claude Fable 5.1 / GLM-5.3-Flash 출시 스펙(가격·벤치마크 수치) — 기존 위키에 미존재, 원문 대조 완료로 신규 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "역할기반 프롬프팅 과도한 제약 지양(Anthropic 공식 caveat)" 참고 용어 추가.

## 승인 필요 (고위험)
- (신규 제안 없음. 기존 "인용 URL 원문 fetch 대조 필수화" 제안이 오늘도 재입증됨 — 9건 중 2건이 원문 불일치/미확인으로 폐기 — 별도 재기재 없이 기존 승인 대기 유지)

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 wget 폴백 검증기 후보로 오늘도 충분히 커버됨)
