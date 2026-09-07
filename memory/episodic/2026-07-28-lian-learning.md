---
date: 2026-07-28
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-28

## 오늘 배운 것
- Claude Code Week 29(7/13~17): MCP 커넥터 실시간 아티팩트, 화면읽기 모드, `/fork` 백그라운드 세션 복제, auto mode가 Bedrock/GCP Agent Platform/Foundry에서 옵트인 불필요로 전환 — 원문 대조 확인 완료
- Claude Sonnet 5, 6/29주 Pro·Team Standard·Enterprise 기본 모델 전환(네이티브 100만 토큰 컨텍스트+adaptive thinking 기본값) — 원문 대조 확인 완료
- Claude Opus 5, 7월 24일 정식 출시 — releasebot이 Anthropic 공식 release notes(support.anthropic.com)를 원출처로 인용한 것 확인, 기존 "2차 출처만" 우려 해소
- Codex: GPT-5.6로 Computer Use 속도 개선 + MCP 서버 승인선택 기능 + 7/23 ChatGPT Voice·다중 폴더 프로젝트 — 전부 원문 대조 확인 완료
- Google Antigravity CLI 1.1.5(7/21): `/effort` 명령·플래그, 모델 슬러그 고정, 서브에이전트별 모델 설정 — 원문 대조 확인 완료
- Google I/O 2026: Gemini 3.5 Flash(3.1 Pro 대비 대부분 벤치마크 상회+4배 속도) + Antigravity 2.0 데스크톱 앱 동시 공개 — 원문 대조 확인 완료
- 에이전트 연구 3종(JADE=클레임 분해 후 전문지식 대조 검증, TrajAD=실행 궤적 오류탐지 후 롤백-재시도 검증기, AIRS-Bench=실제 ML논문 기반 과학에이전트 벤치마크) — github 목록 원문 대조 일치 확인

**폐기**: Moonshot Kimi K3 스펙(2.7~2.8조 파라미터 MoE, 100만 토큰 컨텍스트, 네이티브 멀티모달) — 인용 출처(aitoolsrecap.com) 원문에 해당 수치 근거 없음. 원문은 오픈웨이트 공개(huggingface, 594GB, Modified MIT)와 독립테스트 "51% 환각률 경고"만 확인되며, 이 중요 캐비아트가 리서치 요약에서 누락됨. "출처 URL 실존≠내용 검증" 원칙 적용 폐기.

## 출처
- [Claude Code What's New](https://code.claude.com/docs/en/whats-new)
- [Anthropic Claude Updates - Releasebot](https://releasebot.io/updates/anthropic/claude)
- [ChatGPT/Codex Changelog](https://learn.chatgpt.com/docs/changelog)
- [Google Antigravity Changelog](https://antigravity.google/changelog)
- [Google I/O 2026 Developer Highlights](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/)
- [awesome-ai-agent-papers](https://github.com/VoltAgent/awesome-ai-agent-papers)

## 위키화 후보
- 에이전트 검증기 벤치마크 3종(JADE·TrajAD·AIRS-Bench) — 기존 메모리 회고 벤치마크(LoCoMo·LongMemEval·BEAM·ALE)와 별개로 "실행 신뢰성 검증" 계열 신규 노트 가치 있음

## 프로필 반영 후보 (저위험)
- Antigravity `/effort` 방식(추론 깊이를 명령/플래그로 실시간 조절) — 타 도구 비교 시 참고 용어로 축적
- 오픈웨이트 모델 뉴스(Kimi K3 등)는 수치 스펙 인용 전 원문 직접 대조 필수 — 이번 세션 폐기 사례로 필터 재확인

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이미 배선된 `출처-대조-검증기` 에이전트가 이번 세션에서 수행한 원문 대조 작업과 정확히 일치하므로, 향후 리서치 수신 시 수동 대조 대신 해당 에이전트 위임 검토)
