---
date: 2026-08-25
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-25

## 오늘 배운 것
- Claude Code Week 34(8/17~21): `/design`(아이디어→편집 가능 아트보드 초안, 선택한 안 구현), Concise 출력 스타일, `ANTHROPIC_DEFAULT_MODEL`(신규 세션 시작 모델 지정) 확인 — code.claude.com 원문 직접 대조 완료
- Claude Code Desktop 전용: 사용량 한도 도달 시 "Auto-continue when limits reset" 체크로 리셋 후 자동 재개(Week 33) — 원문 대조 완료(리서치 원안은 "자동 이어가기"로 뭉뚱그렸으나 실제론 Desktop 한정)
- Claude Code auto mode가 Pro/Max/Team 신규 세션 기본 권한모드로 8/14 전환(Week 32) — 원문 대조 완료. 단 "자연어 문장 기반 허용/거부 규칙" 서술은 원문에 없어 폐기
- Google Antigravity가 Gemini Enterprise Standard/Plus/Emerging Market 구독에 포함, VS Code(정식)·Visual Studio·Jetbrains·Zed(프리뷰) IDE 확장 지원 — cloud.google.com 공식 블로그 원문 대조 완료. 단 "Remote Control" 기능은 해당 원문에 전혀 없어 폐기

## 폐기 항목(검증 실패)
- GPT-5.6 Sol/Luna + `deploymentsafety.openai.com`: 도메인이 openai.com/help.openai.com 패턴과 불일치하고 이번 세션 WebFetch 자체가 거부되어 재대조 불가. 기존 GPT-5.6 코드네임 환각 이력과 유사 → 리안의 "직접 fetch 확인" 주장 채택 보류, 폐기 권고
- Claude Code에서 TaskCreate/Get/Update/List·TodoWrite 폐기 주장: whats-new 전체 원문 대조 결과 언급 전무 → 폐기
- Antigravity "Remote Control" 기능: 인용 원문에 없음 → 폐기
- 가격 인하 수치(항목6), 벤치마크 점수(항목8), 시장 점유 서술(항목9): 리안 스스로도 2차소스·미대조로 명시 → 수치 인용 금지, 정성적 트렌드만 참고
- Codex Appshots/Agent Plugins/MCP 지원(항목4): help.openai.com WebFetch 거부로 대조 불가 → 미검증 보류(폐기 아님, 차회 재시도)

## 출처
- [Claude Code What's new](https://code.claude.com/docs/en/whats-new)
- [Expanding Google Antigravity for enterprise customers](https://cloud.google.com/blog/products/ai-machine-learning/expanding-google-antigravity-for-enterprise-customers)

## 위키화 후보
- Claude Code Week34 기능 3종(`/design`·Concise·`ANTHROPIC_DEFAULT_MODEL`) 원문 확정본으로 개념노트 갱신

## 프로필 반영 후보(저위험)
- `ANTHROPIC_DEFAULT_MODEL` 환경변수를 모델 마이그레이션 체크리스트 항목에 추가

## 승인 필요(고위험)
- (없음)

## 신규 도구 후보(에이전트/스킬)
- [agent] 출처-대조-검증기(wget 폴백 내장) — 오늘도 WebFetch 다수 도메인 거부 + WebSearch 자체 거부까지 재확인(deploymentsafety.openai.com, help.openai.com 등). 기존 제안 재확인, 정식 도입 검토 요청
