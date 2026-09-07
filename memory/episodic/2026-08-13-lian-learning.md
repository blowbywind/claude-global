---
date: 2026-08-13
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-13

10건 중 4건 원문 대조 확인, 6건 폐기(오귀속·미확인)로 검증을 마쳤습니다.

## 오늘 배운 것
- Codex CLI v0.147.0(08-07): 이식 가능한 Agent Plugins, 대화 정리 개선, 자동 승인 처리, MCP SDK 3.0.0, Amazon Bedrock 웹검색·캐싱 추가 — releasebot.io 원문 대조 확인
- Antigravity v1.1.11(08-07) Vim 모달 편집모드, v1.1.12(08-11) 아티팩트 헤딩 아웃라인 뷰어 — 원문 대조 확인, 8월 중 신규 주요 모델 출시 없음도 확인
- Claude Code v2.1.227(08-11, 리안 보고 08-10은 오차): feature-flag 평가 버그(구독 티어 미반영) 수정, claude-code-action Bash 명령 실패 버그 수정 — 원문 대조 확인
- 에이전트 평가 연구 arXiv 2603.23749 "Efficient Benchmarking of AI Agents": 통과율 30~70% 태스크 중간난이도 필터로 평가 태스크 수 44~70% 절감, 순위 신뢰도 유지 — 초록 원문 대조 확인
- **오귀속 실사례**: "Claude Code v2.1.226(08-08) Opus 4.7 fast mode 제외" 주장은 출처 페이지 원문 대조 결과 v2.1.226 자체가 존재하지 않고(실제 08-08 릴리스는 v2.1.225=게이트웨이 지출한도 등 무관 내용), 해당 내용은 훨씬 이전 v2.1.214~219 배치에 있던 것으로 확인 — 폐기
- **미확인 폐기**: Sonnet 5 가격 프로모션 종료, Claude for Government, Claude for Open Source(메인테이너 Max 20x 무료) 3건은 인용된 blog.mean.ceo 페이지 원문에 전혀 등장하지 않음(페이지는 일반 창업자 대상 Claude 활용 안내글) — 폐기. GPT-5-Codex-Mini 추가, GPT-5.4 08-31 제외 2건도 인용 페이지에서 확인 불가(help.openai.com 403 차단, releasebot.io openai 페이지엔 GPT-5.4 언급 자체 없고 현재 모델군은 GPT-5.6 계열만 확인) — 폐기

## 출처
- [Codex by OpenAI 0.147.0](https://releasebot.io/updates/openai/codex)
- [Antigravity Changelog](https://antigravity.google/changelog)
- [Claude Code 2.1.227 — releasebot.io](https://releasebot.io/updates/anthropic/claude-code)
- [Efficient Benchmarking of AI Agents (arXiv 2603.23749)](https://arxiv.org/abs/2603.23749)

## 위키화 후보
- (없음 — 이번 검증 결과는 기존 "출처-대조-검증기" 계열 인사이트 강화용, 신규 개념 노트 불요)

## 프로필 반영 후보 (저위험)
- Item Response Theory 기반 중간난이도(pass rate 30~70%) 태스크 필터링 기법을 에이전트 평가 방법론 지식에 추가

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 이번 검증에서 리안 리서치 10건 중 6건이 원문 대조로 폐기됨(오귀속 1건+미확인 5건, 60% 폐기율). 기존 후보로 이미 등록되어 있으나 이번 사례로 필요성이 재차 실증됨. WebFetch가 세션 시작 시 매번 거부되어 wget 폴백으로 우회했으므로, 정식 서브에이전트화 시 wget 폴백 내장이 필수임(기존 "출처-대조-검증기-wget-폴백-내장" 후보와 통합 권장)
