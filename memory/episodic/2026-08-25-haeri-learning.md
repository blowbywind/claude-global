---
date: 2026-08-25
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-25

## 오늘 배운 것

- **[신종 오귀속 패턴 추가 실증]** BenchLM(benchlm.ai) 원문을 wget으로 직접 대조한 결과, 오늘 리서치의 "BenchAlign v5.2, 381개 벤치마크를 8개 축으로 가중합성"은 **틀렸습니다**. `/methodology` 페이지 원문에는 "Six pillars"(6개 대분류)와 8개 세부 카테고리(agentic·coding·reasoning·multimodal·knowledge·multilingual·instructionFollowing·math)가 있고, 카테고리별 benchmarkCount 합은 328개이며, "381"은 실제로는 리더보드에 **트래킹된 모델 총수**(최하위 순위 번호)입니다. 가중합성 결과 점수는 27개(weightedCount 합)가 맞습니다. 어제(2026-08-24, haeri) 위키노트도 gmicloud.ai를 출처로 같은 "381개" 오귀속을 이미 담고 있어, **서로 다른 2차 출처(gmicloud.ai·benchlm.ai)가 동일한 수치 오인을 반복 재생산**한 사례입니다. 또한 현재 페이지의 실질 데이터 버전은 "v5.2" 표기가 1곳뿐이고 "v5.3"이 395회로 실제 최신판입니다.
- BenchLM 리더보드 1~2위 점수(Mythos 5=83.13, Fable 5=82.88, Mythos 5 #1)는 wget 원문 대조로 정확히 일치 확인 — **이 부분은 채택**.
- Self-Consistency "+5~10%p" 수치는 groundy.com 원문에 "Self-Consistency / High-stakes reasoning / Additional +5-10%"로 실재 확인 — 채택(개념 자체는 기존 위키 2026-08-17 노트에 이미 있고, 수치만 신규 보강).
- 모델 폐기(opus-5/fable-5/mythos-5 Active) 재확인은 기존 2026-07-27·2026-08-11 위키 노트와 동일 결론의 재확인이며 신규 정보 아님(중복).
- XML 태그 구조화, 하이브리드 검색, 메달리온/카파 패턴은 모두 기존 위키에 이미 존재(신규 아님, 위키화 불필요).
- "Meta Prompting" 주장은 리서처가 원문 미대조로 스스로 배제 처리 — 타당한 판단으로 동의.

## 출처
- [BenchLM 리더보드](https://benchlm.ai/) — wget 원문 대조 완료
- [BenchLM Methodology](https://benchlm.ai/methodology) — wget 원문 대조 완료(381≠벤치마크 수 확인)
- [groundy.com 프롬프트 패턴](https://groundy.com/articles/prompt-engineering-patterns-2026-what-actually-works/) — wget 원문 대조 완료

## 위키화 후보
- "BenchAlign 381 오귀속" 패턴 노트 — 두 독립 출처가 "381=모델 총수"를 "381=벤치마크 수"로 반복 오인한 실증 사례. 향후 수치 인용 검증 시 참고용.

## 프로필 반영 후보 (저위험)
- Self-Consistency "+5~10%p, 지연시간 비용" 수치를 기존 self-consistency 개념 노트에 보강.

## 승인 필요 (고위험)
- (신규 제안 없음 — 기존 반복 제안 3건(wget 폴백 표준화, 자동대조 게이트 강제화, 2026-07-03 프로토콜 노트 정정)은 오늘도 유효성이 재확인됐으나 이미 여러 차례 상정된 사안이라 재기재 생략, 승인 대기 유지)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 "출처-대조-검증기" 계열 후보로 오늘 사례(수치 단위 오인형 오귀속) 커버 가능)
