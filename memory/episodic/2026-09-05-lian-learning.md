---
date: 2026-09-05
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-09-05

## 오늘 배운 것
- **Claude Fable 5.1 + Mythos 5.1 동시 출시, anthropic.com 원문 직접 대조로 확인**: 리서치가 "미기재·인용 보류" 판단했으나, `anthropic.com/claude-fable-and-mythos-5-1` 페이지를 wget으로 직접 확보해 title·벤치마크 표까지 대조한 결과 실제 공식 발표임을 확인. Fable 5.1이 Terminal-Bench-Science에서 52.6%(구 Fable 5 24.7% 대비 2배 이상) 달성, $10/$50 per Mtok·캐시read $0.25/Mtok·1M 컨텍스트. → 기존 판단을 "검증완료"로 정정.
- **Claude Code v2.1.257~261, code.claude.com 공식 changelog 원문 대조 완료**: Fable 5.1 기본모델 추가(09-01), `managedMcpServers` 전사배포(09-02), `/diff` 풀스크린 패널(09-03), `bashOutputMaxChars`/`taskOutputMaxChars`(128K)+`/skill-doctor`(09-04), `/cost`에 캐시미스 원인 표시(원문 문구 확인) — 리서치 주장 전항목 사실 일치.
- **Google Antigravity, antigravity.google/changelog 원문 대조 완료**: IDE 2.12.0(09-02, 인용 컨텍스트+`/boost` 멀티에이전트 추론), 2.12.2(09-03, 엔터프라이즈 ADC Gemini 3.8 Flash) / 별도 CLI 트랙 1.1.25(09-03, `GEMINI_API_KEY` 카탈로그 Gemini 3.8 Flash+`/resume` 그룹뷰) — IDE·CLI 버전체계가 이원화된 것이며 상충 아님을 확인.
- **GPT-5.6 openai.com 403은 하네스 권한 문제가 아님**: WebFetch가 아닌 wget으로 재시도해도 동일하게 HTTP 403(사이트측 봇 차단) — 기존 "WebFetch 권한 거부 반복" 인사이트와는 별개 원인이므로 혼동 주의. GPT-6 Astra(9to5mac 단독)는 1차 소스 미확인 그대로 인용 보류 유지.
- **환각 패턴 필터의 과잉적용 위험 확인**: "Claude Mythos 5.1 동시출시=과거 손상노트와 유사 패턴이라 보류"라는 리서치의 휴리스틱은 이번엔 오판이었음(실제 사실). 패턴 유사성만으로 폐기하지 말고 건별 원문 대조를 반드시 거쳐야 함.

## 출처
- [Introducing Claude Fable 5.1 and Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)
- [Claude Code Changelog](https://code.claude.com/docs/en/changelog)
- [Antigravity Changelog](https://antigravity.google/changelog/)
- [GPT-5.6 공식 페이지(403 확인용)](https://openai.com/index/gpt-5-6/)

## 위키화 후보
- Claude Mythos 5.1 공식 스펙 노트 신규/갱신 — 기존 `claude-fable-5-1-glm.md`(haeri, status ai-curated)가 이미 동일 사실을 담고 있어 검증완료 후 status를 verified로 전환 권고.

## 프로필 반영 후보 (저위험)
- 1차 소스 대조 시 `code.claude.com/docs/en/changelog`가 `raw.githubusercontent.com/.../CHANGELOG.md`보다 문구가 상세해 우선 사용 대상으로 채택.

## 승인 필요 (고위험)
- 기존 "WebFetch 권한거부 반복" 인사이트를 ①하네스 권한 문제 ②대상 사이트 봇 차단(예: openai.com 403, wget도 동일 실패)으로 원인 분리 재정의 제안 — 원인 혼동 시 불필요한 권한 정합 조치로 이어질 수 있어 확인 요청.

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 등록된 `출처-대조-검증기-wget-폴백-내장` 후보로 이번 세션도 유효성 재확인됨, 중복 제안 지양)
