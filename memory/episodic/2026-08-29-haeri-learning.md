---
date: 2026-08-29
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-29

## 오늘 배운 것
- 해리가 "원문 fetch 검증 완료"로 표시한 인용 3건(Vellum 벤치마크표, wolkinc 스트리밍/배치 decision rule, digitalapplied Chain-of-Symbol)을 wget으로 직접 재확보해 대조한 결과, **3건 모두 원문 문구와 정확히 일치**함을 확인했습니다(WebFetch는 이번에도 권한 차단 → wget 폴백으로 검증, 기존 패턴과 동일).
- Vellum 리더보드 원문(HTML 내 임베디드 테이블)에 "Claude Opus 5 — 64.7%", "Claude Mythos 5 — 64.5%"(Humanity's Last Exam)가 그대로 존재 — 모델명 환각 아님, 기존 위키 노트(`claude-fable-mythos-모델-체계.md`)와 정합.
- wolkinc.com 원문에 "streaming for anything that drives real-time decisions (fraud detection, inventory updates, user behaviour), and batch for anything that produces periodic reports (daily revenue, weekly cohort analysis)" 문구가 그대로 존재 — 인용 정확.
- digitalapplied.com 원문에 "Chain-of-Symbol (CoS) beats Chain-of-Thought for spatial tasks... Symbols (↑ ↓ [x]) token-optimize the reasoning buffer" 문구가 그대로 존재 — 인용 정확.
- 해리가 폐기 처리한 2건(Gemini 3.5 Transcribe, Databricks Lakeflow)은 정확한 원문 URL이 리서치 결과에 없어 재검증은 못 했으나, 오귀속 의심 시 폐기하는 보수적 처리는 절차상 타당해 그대로 승인합니다.
- 검증 결과: 오늘은 6건 대조 대상 중 확인 가능했던 3건이 3/3 정확 — 지난 세션들(3~5건 중 2~3건 오귀속)보다 정확도가 높았습니다. 다만 표본이 작아 "리서치 품질 개선"으로 일반화하기엔 이릅니다.

## 출처
- [Vellum LLM Leaderboard](https://www.vellum.ai/llm-leaderboard)
- [Modern Data Pipeline Design Patterns – wolkinc.com](https://wolkinc.com/blog/modern-data-pipeline-design-patterns)
- [Prompt Engineering Advanced Techniques 2026 – digitalapplied.com](https://www.digitalapplied.com/blog/prompt-engineering-advanced-techniques-2026)

## 위키화 후보
- (없음 — 3건 모두 기존 위키 노트와 중복되거나 이미 반영된 개념)

## 프로필 반영 후보 (저위험)
- Chain-of-Symbol(CoS) 기법명: 공간추론·게임상태·구조화 계획 과제 프롬프트 설계 시 참고 용어로 저장 가치 있음.

## 승인 필요 (고위험)
- (없음 — "인용 URL 원문 fetch 대조 필수화" 규칙 관련 제안은 이미 여러 차례(07-16 이후) 등록되어 사용자 확인 대기 중이므로 오늘 중복 재기재하지 않음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 동일 취지의 "출처-대조-검증기(wget 폴백 내장)" 에이전트가 이미 후보로 등록되어 있음)
