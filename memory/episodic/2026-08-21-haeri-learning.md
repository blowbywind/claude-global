---
date: 2026-08-21
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-21

## 오늘 배운 것
- LLM 평가 벤치마크가 오염된 MMLU/HumanEval에서 GPQA·LiveCodeBench(출시일 태깅) 등 신선도 기반 벤치마크로 이동 중 — wget 원문대조로 "saturation/contamination/LiveCodeBench" 키워드 실재 확인. 회귀테스트 셋 설계 시 "신선도 유지" 개념 참고 가능.
- arXiv 2601.13658 "Beyond Known Facts"(미지 시간대 사실 생성으로 평가 오염 차단)는 wget으로 원문 확인된 실재 1차 논문. 테스트 데이터셋 오염 방지 아이디어로 참고 가치 있음.
- arXiv 2606.19544 "Reliability without Validity"(LLM-as-Judge 판정자간 일치도≠타당성 대규모 실증)도 원문 확인됨. LLM-judge를 회귀테스트 자동판정기로 쓸 때 "일치율 높음=신뢰성 아님" 근거로 활용.
- 검증 결과 releasebot.io 인용 중 "Anthropic 생물학 안전장치 업데이트로 fallback 85% 감소" 주장은 원문에 생물학 관련 언급 자체가 전혀 없어 폐기(오귀속 재발, 4번째 유형 사례 추가).
- medium.com 기사 2건·morphllm.com 1건은 wget으로도 접근 차단(추정 403)되어 원문대조 불가 — 인용된 수치(LLM-judge 80~90% 일치율·500~5000배 비용절감, 스트리밍 성숙도 86%/25%)는 미검증으로 전부 폐기.
- releasebot.io changelog에서 Fable 5/Mythos 5/Opus 5/Sonnet 5/Opus 4.8 명칭이 실사용 확인됨(단, "Fable 5.1"은 미언급) — 기존 위키의 "Sonnet5/Opus5 폐기 판정" 오류가 최신 자료로도 재반박됨.

## 출처
- [Beyond Known Facts (arXiv 2601.13658)](https://arxiv.org/abs/2601.13658)
- [Reliability without Validity (arXiv 2606.19544)](https://arxiv.org/abs/2606.19544)
- [LLM Benchmarks 2026 — datavlab.ai](https://datavlab.ai/post/llm-benchmarks-2026-which-model-for-which-job)
- [Anthropic changelog — releasebot.io](https://releasebot.io/updates/anthropic) (생물학 관련 주장은 이 출처에 없음 — 폐기 근거)

## 위키화 후보
- "미지 시간대 사실 생성 기반 오염방지 평가" 개념(arXiv 2601.13658) — 회귀테스트 데이터 신선도 설계 참고용 신규 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- "Judge 일치도(agreement) vs 타당성(validity) 분리" 개념을 LLM-judge 기반 자동검증 리뷰 체크리스트에 참고 용어로 병기(arXiv 2606.19544 원문 확인 완료).

## 승인 필요 (고위험)
- (없음 — 기존 위키 정정·wget 폴백 표준화 제안은 이미 인사이트에 누적 등록되어 있어 중복 생략. 단, 이번 검증으로 releasebot.io발 "생물학 85% 감소" 오귀속 사례가 추가 확보되었으므로 기존 게이트 강제화 제안의 실증 데이터에 포함 요망)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 "출처-대조-검증기-wget-폴백-내장" 후보가 이번 세션에서도 유효성 재확인됨. 신규 제안 대신 기존 후보 승인 여부만 확인 필요)
