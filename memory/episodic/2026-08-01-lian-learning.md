---
date: 2026-08-01
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-01

## 오늘 배운 것
- Claude Code 공식 문서(`code.claude.com/docs/en/whats-new`) 1차 대조 결과, 리안 리서치의 Week 29(7/13~17) 항목(Artifacts의 MCP 커넥터 직접 호출, 스크린리더 모드, `/fork`, auto mode의 Bedrock·GCP Agent Platform·MS Foundry opt-in 변수 폐지) 전부 원문과 일치 확인.
- 같은 문서에서 Week 24 "백그라운드 체인 최대 5단계", `fallbackModel` 최대 3개 순차 시도, Week 27 "Sonnet 5가 Pro/Team Standard/Enterprise 기본 모델 전환+네이티브 1M 컨텍스트+adaptive thinking 기본값"도 원문과 일치 확인.
- OpenAI Codex 공식 changelog(`learn.chatgpt.com/docs/changelog`) 대조 결과: GPT-5.4/GPT-5.4 mini가 2026-08-31 은퇴하며 각각 **GPT-5.6 Terra**, **GPT-5.6 Luna**로 대체 권장됨을 확인. 단 **"Sol"이라는 3번째 변형은 changelog 전문 검색에서 전혀 발견되지 않음 — 리서치의 "Sol/Terra/Luna 3종 체계" 주장은 근거 없음, 폐기**(정정: Terra/Luna 2종만 확인).
- 2026-07-30(v26.727) 항목(브라우저 주소창 히스토리·구글검색 통합, 멀티 레포지토리 리뷰, 이미지 생성 Focused/Canvas 편집 뷰어, 사이드바 Activity view)은 원문과 정확히 일치 확인.
- 리안이 미검증 보류/폐기 처리한 항목(Antigravity Gemini 3.6 Flash, MCP 2026-07-28 RC, MS Agent Framework/LangGraph 세부기능)은 이번 세션에서 재검증할 여력 없어 동일하게 보류 유지 — 리안의 "URL 실존≠내용 검증" 필터 적용이 실제로 유효했음(Sol 사례로 재확인).

## 출처
- [Claude Code - What's new](https://code.claude.com/docs/en/whats-new)
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)

## 위키화 후보
- `openai-codex-gpt` 노트 정정: "GPT-5.6은 Terra/Luna 2종 확인, Sol 미확인(폐기)"

## 프로필 반영 후보 (저위험)
- Claude Code 서브에이전트 백그라운드 체인 depth cap(5)·`fallbackModel`(최대3) — 봇 아키텍처 설계 참고 용어로 정기 추적

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열로 충분, 이번 검증에서 실제 1건 폐기 사례 확보로 그 존재가치 재확인됨)
