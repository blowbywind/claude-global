---
date: 2026-08-28
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-28

## 오늘 배운 것
- **"Astra" 모델명 자체는 실존**(Gizmodo 원문 wget 대조로 직접 확인, The Information 소식통 인용·Sam Altman 데모 보도) — 다만 **"사이버보안 Critical 위험 임계치로 출시를 지연"이라는 주장은 원문에서 확인되지 않음**. Gizmodo 원문은 Astra와 별개로 7월 21일 발생한 "unprecedented cyber incident"(GPT-5.6 Sol + 미공개 프로토타입이 관련된 Hugging Face 침해 사건)를 다루며 "Astra는 그 사건의 모델이 아니다"라고 명시적으로 구분함. OpenAI 공식·Axios 링크는 Cloudflare 403으로 직접 대조 불가(미확인). **서로 다른 두 실제 사건을 하나로 합성한 오귀속으로 판단해 해당 지연 주장은 폐기**.
- **프로덕션 LLM 평가 방식 중 "실패사례 50건을 도메인 전문가가 이진 채점 후 judge 프롬프트 캘리브레이션" 부분은 Galtea 원문과 일치, 검증 통과**. 그러나 **"골든셋 200~500개" 수치는 Galtea 원문에 없음** — 기존 위키 노트(2026-07-26, futureagi.com 출처)의 동일 수치와 혼동된 오귀속으로 추정, 해당 수치는 폐기.
- **데이터 옵저버빌리티 도구 채택률 "2024년 20%→2026년 50%", "응답자 67% 불신" 통계는 Algoscale 원문 전체 대조 결과 해당 수치 자체가 존재하지 않음 → 통계 환각으로 판정, 폐기**.
- 벤치마크 포화(MMLU 88%↑, 도메인 특화 전환) 주장은 기존 위키 노트(2026-08-22)와 방향 일치, 신규 채택 불필요(중복 확인만).
- 프롬프트 최적 길이(150~300단어), 3,000토큰 지점 성능 저하 주장은 해리도 기존 위키와 완전 중복이라 밝힘 — 재확인만, 신규 채택 불필요.

## 출처
- [OpenAI Smuggled the Announcement of Astra... (Gizmodo)](https://gizmodo.com/openai-smuggled-the-announcement-of-astra-its-next-ai-model-into-a-blog-post-about-math-2000793689) — wget 원문 대조 완료
- [LLM Evaluation: The Complete Guide (Galtea)](https://galtea.ai/blog/llm-evaluation-complete-guide) — wget 원문 대조 완료, 일부만 확인
- [Domain-Specific LLM Benchmarks Guide (Kili Technology)](https://kili-technology.com/blog/domain-specific-llm-benchmarks-guide) — URL 실존만 확인(200 OK)

## 위키화 후보
- "출처 실존+실제 사건이나 서로 다른 두 사건을 하나로 합성하는 오귀속(conflation)" — 기존에 확인된 "출처 실재·주장 부재"형과 다른 신종 하위 유형, 오늘 Astra 사례로 실증.

## 프로필 반영 후보 (저위험)
- LLM 평가 캘리브레이션 기법: "실패사례 50건 + 도메인 전문가 이진 채점 → judge 프롬프트 캘리브레이션"(Galtea 원문 검증 통과).

## 승인 필요 (고위험)
- (없음 — 기존 인사이트에 누적된 "인용 URL 원문 fetch 대조 필수화" 제안이 오늘 사례(Astra 오귀속·Algoscale 통계 환각 2건)로 재차 실증됨. 신규 제안 대신 기존 제안 유효성 강화로 갈음, 채택 여부는 기존 대로 사용자 확인 필요.)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 등록된 "출처-대조-검증기-wget-폴백-내장" 후보로 충분히 커버됨, 중복 제안 자제)
