---
date: 2026-08-22
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-22

## 오늘 배운 것
- Google이 2026-08-13 공식 블로그(blog.google)로 **Gemini 3.7 Flash**를 출시, "3.6 Flash 대비 반값(half the original 3.6 Flash cost)" 표현을 원문에서 직접 확인 — 코딩·에이전트 워크플로 강화 문구도 원문 일치. (리서치가 제시한 08-14는 08-13의 근사치 오차, 실질적 왜곡 아님)
- MMLU(2024년 88%, 인간전문가 상한 89.8%)·GPQA Diamond(2026년 90%대)가 포화에 근접해 벤치마크 축이 GPQA·HLE·SWE-bench Pro 등 도메인 특화로 이동 중이라는 주장을 aice-lab.org 원문에서 수치까지 확인.
- 데이터 파이프라인: ETL→ELT 전환(웨어하우스 내 변환이 저렴), 스트리밍은 사기탐지·개인화 등 "데이터 신선도가 결과를 좌우하는 경우"에만 채택 권장이라는 두 주장 모두 getdbt.com 원문과 일치. Zero-ETL(클라우드 네이티브 연동 확산) 주장도 dataforest.ai 원문 확인.
- **폐기**: "temperature 0.0~0.3(사실/코드)·0.7~0.9(창작)" 역할별 온도 분리 관행 — 인용된 k2view.com 원문 전체에 "temperature" 언급 자체가 없음(CSS 수치 "0.0/0.3"과 오매칭). 출처 URL은 실재하나 주장이 원문에 없는 **오귀속** 사례로 확인, 폐기.
- **폐기**: LLM-judge 건당 비용 비교(medium.com) — 원문 fetch 시도 결과 콘텐츠 0바이트(접근 불가)로 대조 불가, 개인 블로그·구체적 수치 조합이라 과거 "통계 수치 환각" 패턴과 유사해 채택 보류.
- **폐기**: Qwen3.8-Max·GLM-5.2 Turbo 등 8월 신규 모델 다수 출시 — 애그리게이터(llmgateway.io, benchlm.ai) 출처만 있고 공식 소스 미확인(리서치 자체 검증 메모와 일치), 모델명 환각 재발 위험군으로 전량 폐기.

## 출처
- [Introducing Gemini 3.7 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
- [LLM Benchmarks: The Complete Guide (2026)](https://www.aice-lab.org/posts/features/llm-benchmarks-complete-guide-2026/)
- [Common data pipeline architecture patterns](https://www.getdbt.com/blog/common-data-pipeline-architecture-patterns)
- [Architecting the modern data pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)

## 위키화 후보
- "벤치마크 포화(saturation)와 세대 전환" 개념 노트 — MMLU→GPQA→HLE 전환 패턴, 평가 설계 시 참조 가치.

## 프로필 반영 후보 (저위험)
- 데이터 파이프라인 기본값 판단 기준(ELT 우선, 스트리밍은 신선도 요구 시에만) — 테스트 시나리오 설계 시 활용.

## 승인 필요 (고위험)
- (비움 — 오귀속·wget 폴백 관련 제안은 기존 자가학습 인사이트에 이미 상정, 반복 재상정 생략)

## 신규 도구 후보 (에이전트/스킬)
- (비움 — 기존 "출처-대조-검증기" 계열 후보로 갈음, 이번 세션도 wget 폴백 5건 시도 중 4건 원문 확보·1건 오귀속 적발로 유효성 재확인)
