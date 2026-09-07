---
date: 2026-08-26
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-26

## 오늘 배운 것
- Anthropic 공식 프롬프트 가이드는 "핵심 정보를 문서 시작/끝에 배치"만 권고하며 구체적 토큰 수치는 원문에 없음(WebFetch 원문 대조로 직접 확인됨) — 검증 통과.
- **[정정] Qwen3.8-Max "2.4T 파라미터·최대 오픈웨이트" 주장은 오귀속**: 원 출처(axis-intelligence.com)를 wget으로 직접 재대조한 결과, 해당 페이지는 "Qwen 블로그가 클라이언트 렌더링이라 텍스트 확보 불가 → 파라미터 수치는 2차 출처(secondary-sourced)이며 이 글에서 검증된 수치로 표기하지 않음", "오픈웨이트는 공개가 아니라 약속(promised)만 된 상태"라고 명시. 즉 원문 자체가 "미검증"이라 밝힌 내용을 검증된 사실처럼 인용한 신종 오귀속 사례(기존 8/11 인사이트와 동일 계열, 오늘 신규 실증) — 이 두 수치는 폐기.
- DeepSeek-V4-Pro는 실재 확인(1.6T 총 파라미터/49B 활성, 오픈웨이트, DeepSeek 2026-04-24 공식 릴리스노트 기준) — 다만 "2.4T"는 DeepSeek 수치가 아님(위 항목과 혼동 주의).
- GPT-5.6 "Sol" 티어는 OpenAI 2026-07-09 공식 릴리스포스트로 확인됨(기존 위키의 "Sol 미확인/환각" 구노트는 이미 구식 판정 — 최신 노트들이 이미 정정한 상태와 일치).
- LLM-as-judge 대규모 실증 논문(arXiv 2606.19544, abs 원문 wget 직접 대조 완료): 21개 judge·약 541,000건 판정, position bias >0.10(심각), verbosity bias <0.011(경미) — 수치 정확히 일치, 검증 통과.
- LiveCodeBench(학습 컷오프 이후 신규 문제로 오염 회피), self-managing 데이터 파이프라인 트렌드, 야간배치 vs 스트리밍 비용비(10~100배) 항목은 출처 URL 존재·주장과 정합 — 채택.
- 항목 3("OX Alpha가 GPT-5.6 능가"), 항목 6("authority bias") — 해리가 이미 원문 미검출로 폐기 처리한 판단에 동의, 재확인 불필요.

## 출처
- [Prompt engineering overview](https://claude.com/blog/best-practices-for-prompt-engineering)
- [AI Model Release Tracker 2026](https://axis-intelligence.com/ai-model-release-tracker/) — wget 직접 재대조로 Qwen3.8-Max 파라미터 수치는 "미검증" 명시 확인
- [LLM benchmarks 2026](https://datavlab.ai/post/llm-benchmarks-2026-which-model-for-which-job)
- [LLM-as-Judge 대규모 검증 (arXiv 2606.19544)](https://arxiv.org/abs/2606.19544) — abstract wget 원문 대조 완료
- [IRT 기반 judge 신뢰성 (arXiv 2602.00521)](https://arxiv.org/pdf/2602.00521)
- [Modern data pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)
- [Streaming vs batch cost](https://addepto.com/blog/stream-data-model-and-architecture/)

## 위키화 후보
- "Qwen3.8-Max 2.4T/최대 오픈웨이트" 오귀속 사례를 `리서치-환각-패턴-목록.md`에 신규 패턴("출처가 스스로 미검증이라 명시한 수치를 검증된 것처럼 인용")으로 추가할 가치 있음.

## 프로필 반영 후보 (저위험)
- LLM-as-judge 신뢰성 지표 용어(kappa deflation, consistency-bias paradox) — 모델 평가 리뷰 시 활용 가능.

## 승인 필요 (고위험)
- wget 재대조로 오늘도 "출처는 실재하나 원문이 스스로 미검증이라 밝힌 수치를 검증된 것처럼 인용"한 사례를 실증(누적 3회차 계열, 2026-08-11 인사이트와 동일 축). `출처-대조-검증기-wget-폴백-내장` 에이전트 정식 채택 여부 재상정 — 반복 실증됐으므로 사용자 승인 요청.

## 신규 도구 후보 (에이전트/스킬)
(없음 — 해당 후보는 기존 카탈로그에 이미 등록되어 중복 제안 생략)
