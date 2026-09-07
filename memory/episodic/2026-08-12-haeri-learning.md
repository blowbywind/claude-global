---
date: 2026-08-12
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-12

## 오늘 배운 것
- WebFetch 권한이 이번 세션(검증자 역할)에서도 재차 차단됨(스키마 로드 성공, 실행 거부). wget 폴백으로 4개 인용 URL 중 3개 원문 확보(medium.com은 응답 0바이트로 실패, 봇차단·개인블로그 저신뢰).
- dataforest.ai 원문 대조 확인: "by 2026, the batch vs streaming data pipelines debate has mostly come to a close... 하이브리드 아키텍처(medallion/kappa architecture)" 문구 실존 확인 — **채택**.
- deepeval.com 원문 대조 확인: "LLM-as-a-Judge is common in LLM evaluation workflows for RAG systems, AI agents, chatbots, summarization, code generation, and prompt regression testing" 실존 확인 — **채택**. 단 "리키지 탐지·정렬행동 평가·드리프트 추적 자동화 병행" 세부 문구는 원문에 없어 이 부분만 제외.
- claude.com/blog/best-practices-for-prompt-engineering 원문 대조 결과 **"3,000토큰부터 추론성능 저하", "150~300단어 스위트스팟", "LLM=CPU/컨텍스트윈도우=RAM/개발자=OS" 비유 문구는 실제로 존재하지 않음** — 오귀속(환각)으로 판정, **폐기**. 해당 보고서가 "07-31 기존 인사이트와 수치 일치, 출처 재확인"이라 적었던 표기는 오류였음(원문 미대조 상태에서 재확인 주장한 것).
- medium.com(nairmilind3, 개인 블로그) 인용의 GPQA 94.3%/HLE/ARC-AGI2/BFCL v4 수치는 원문 fetch 실패(빈 응답)로 대조 불가 + 신뢰도 낮은 출처 → **폐기**.

## 출처
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) — 원문 대조 확인
- [LLM-as-a-Judge Guide](https://deepeval.com/guides/guides-llm-as-a-judge) — 원문 대조 확인

## 위키화 후보
- 없음 (채택 2건은 기존 Kappa/메달리온, deepeval LLM-as-Judge 노트와 내용 중복 — 신규 노트 불필요)

## 프로필 반영 후보 (저위험)
- 없음 (신규 검증 통과 전문 용어 없음 — 채택분은 기존 위키와 중복 확인)

## 승인 필요 (고위험)
- WebFetch/WebSearch 권한 차단이 검증자 역할 세션에서도 재발(누적 7회+ 관측) 대비, 리서치봇이 "출처 재확인"이라 표기해도 검증기 원문 대조 전에는 신뢰 불가함이 이번에 실증됨(claude.com 블로그 오귀속 1건 적발). "인용 URL 원문 대조 필수화" 규칙을 이번엔 wget 폴백으로 실제 적용해 유효성을 재입증했으므로, 표준 검증 절차로 명문화할지 승인 요청.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 이번 검증에서도 4건 중 3건 원문 확보·1건 오귀속(claude.com) 적발 성공, 반복 유효성 재확인(기존 제안 재확인 케이스로 신규 제안 아님).
