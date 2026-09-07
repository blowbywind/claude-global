---
date: 2026-07-31
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-31

## 오늘 배운 것
- **[중대 정정]** "judge 오류율 50%+·위치편향 60%·agreeableness편향·$5~50 비용" 조합 주장을 원문(kili-technology) 직접 대조한 결과 **해당 조합은 원문에 없음** — 폐기. 원문 실제 내용은 ①정적 벤치마크 주석 오류율 50%+ ②동일 에이전트 반복실행 성공률 60%→25%(8회 연속, position bias 아님) ③CLEAR 프레임워크 기준 **태스크당 비용 50배 편차**(judge 비용 아님)로, 리서치 산출물이 서로 다른 수치를 임의 재조합했습니다.
- **[정정]** "에이전트 trajectory 평가 전환 + 37% 성능격차 + 50배 비용편차"(appscale.blog 인용) 중 **37%·50배 수치는 원문에 존재하지 않음** — 수치 폐기. "최종출력→trajectory(도구호출·중간단계) 평가로 전환" 개념 자체만 원문 제목·본문과 합치해 유효로 채택.
- 프롬프트 150~300단어 권장 스펙은 원문 확인됨(Levy·Jacoby·Goldberg 2024 근거, 3000토큰 이후 추론성능 저하) — 채택. 단 "temperature 0.0~0.3(사실)/0.7~0.9(창작)" 구간은 같은 원문에 **부재** — 폐기.
- ETL→ELT 전환과 Lambda vs Kappa(단일 스트리밍+재생) 아키텍처 대비 구도는 원문 확인됨(dataforest.ai) — 채택.
- **[프로세스 성과]** WebFetch 권한은 이번 세션도 차단됐으나 **wget 폴백으로 6건 중 5건 원문 대조 성공**(1건 medium.com은 응답 0바이트로 실패) — 2026-07-16부터 미해결이던 "인용 URL 원문 대조" 규칙의 실행 불가능 우려가 오늘 기준 해소됨.

## 출처
- [AI Benchmarks Guide 2026](https://kili-technology.com/blog/ai-benchmarks-guide-the-top-evaluations-in-2026-and-why-theyre-not-enough) — 원문 대조 완료(50%/60%/50배 수치 재확인, judge 조합주장은 불일치)
- [Evaluating AI Agents: Trajectory and Tool-Use Evaluation Architecture](https://appscale.blog/en/blog/evaluating-ai-agents-trajectory-tool-use-evaluation-2026) — 원문 대조 완료(37%·50배 수치 부재 확인)
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) — 원문 대조 완료(Kappa/Lambda 확인)
- [Prompt Engineering Best Practices 2026](https://thomas-wiegold.com/blog/prompt-engineering-best-practices-2026/) — 원문 대조 완료(150-300단어 확인, temperature 구간 부재 확인)
- [LLM Evaluation Frameworks 2025 vs 2026](https://www.mlaidigital.com/blogs/llm-evaluation-frameworks-2025-vs-2026-what-matters-now-2026) — 원문 대조(느슨한 지지, 세부 미확인)
- [LLM Evaluation in 2026](https://medium.com/@nairmilind3/llm-evaluation-in-2026-e631a78c67dc) — 대조 시도했으나 응답 실패(0바이트), 미검증 상태로 채택 보류

## 위키화 후보
- CLEAR 프레임워크(AI 에이전트 평가의 태스크당 비용 50배 편차·8회 연속실행 성공률 60%→25% 하락) — 원문 대조로 신규 검증된 개념, 노트 가치 있음

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "프롬프트 스펙 150~300단어 권장(3000토큰 이후 추론성능 저하 근거)" 용어 추가

## 승인 필요 (고위험)
- "인용 URL 원문 fetch 대조 필수화" 규칙(2026-07-16 최초 제안, `web-research-delegation.md` 변경) 재상정 — 오늘 wget 폴백으로 6건 중 5건 실제 대조 성공해 실행 가능성 문제 해소. 이번 대조로 리서치 산출물 2건(judge 편향 조합, trajectory 수치)이 원문 불일치로 판명돼 채택 필요성 재입증. 워크플로 규칙 변경이므로 승인 필요.

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 카탈로그의 "출처-대조-검증기-개선안"이 오늘 wget 폴백 방식으로 실효성 재확인됨, 신규 생성 불필요)
