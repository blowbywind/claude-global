---
date: 2026-08-01
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-01

## 오늘 배운 것
- LLM-as-Judge 관련 정성적 결론(인간 판정과 높은 일치, 비용 절감)은 기존 위키 `judge-판정자-간-일치도-agreement` 노트와 방향은 일치하나, 제시된 구체 수치(80~90% 일치율, 500~5000배 비용)는 이번 세션 WebFetch 권한이 검증자(제) 쪽에서 차단되어 원문 대조 불가 — 수치는 채택 보류.
- "MMLU 포화 → SWE-bench Verified/GPQA 등 오염 저항형 벤치마크로 무게중심 이동" 주장은 기존 위키(`swe.md`, `gpqa-벤치마크.md`)와 이미 겹치는 내용으로, 신규 지식 아님(중복 확인).
- 프로덕션 자체 골든셋(100~500개) 구축 트렌드는 기존 골든셋/CI 게이트 계열 노트군과 방향 일치, 중복.
- 데이터 파이프라인 "제품화(SLA)" 70% 전망은 기존 위키 `파이프라인-제품화-sla-부여-트렌드.md`와 완전 중복 — 신규 아님.
- JSON 스키마 강제(구조화 출력)로 오류율 감소한다는 취지는 기존 `structured-outputs-xml-태그-기반-파싱.md`와 방향은 겹치나, "12.3%" 수치는 원문 미대조로 보류.
- 해리의 모델명 환각(Sonnet 5/GPT-5.6 Sol 등) 배제 조치는 타당 — 2026-07-03 폐기 프로토콜·2026-07-22 인사이트와 동일 패턴 재확인, 검증 절차가 정상 작동한 사례로 확인.

## 출처
- [Anthropic 프롬프트 엔지니어링 가이드](https://claude.com/blog/best-practices-for-prompt-engineering) — 정성적 취지만 채택, 수치 미대조
- [LLM 평가 6가지 방법](https://pranavakailash.medium.com/how-to-evaluate-llm-performance-6-proven-methods-2026-bbfa85a3fb67) — 정성적 취지만 채택, 수치 미대조
- [LLM Evaluation in 2026](https://medium.com/@nairmilind3/llm-evaluation-in-2026-e631a78c67dc) — 기존 위키와 중복 확인
- [LXT: LLM Benchmarks](https://www.lxt.ai/blog/llm-benchmarks/) — 기존 위키와 중복 확인
- [Dataforest: Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) — 기존 위키와 완전 중복

## 위키화 후보
- 없음 (핵심 주장 전부 기존 위키 노트와 중복 확인됨, 수치성 신규 주장은 원문 미대조로 채택 보류)

## 프로필 반영 후보 (저위험)
- 없음 (신규 검증 통과 전문 용어 없음)

## 승인 필요 (고위험)
- WebFetch/WebSearch 툴 권한이 같은 세션 내에서도 봇 역할별로 비일관(해리=리서치 단계 허용, 저=검증 단계 차단)임을 재확인 — 2026-07-16/07-22 인사이트의 지속 이슈. 검증자 역할 툴 권한 통일이 필요해 보이며, 이는 설정 변경이므로 사용자 확인 필요.

## 신규 도구 후보 (에이전트/스킬)
- 없음 (동일 목적의 "출처-대조-검증기-개선안"(wget 폴백 내장)이 이미 후보로 존재 — 신규 제안 대신 해당 후보 채택·권한 정리를 우선 권고)
