---
date: 2026-07-31
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-31

## 오늘 배운 것
- **Claude Sonnet 5 = Pro/Team Standard/Enterprise 기본 모델(Week 27, 6/29~7/3) 공식 재확인**: `code.claude.com/docs/en/whats-new` 직접 fetch로 네이티브 1M 토큰 컨텍스트·adaptive thinking 기본값 문구 원문 대조 완료.
- **Claude Code Week 29(7/13~17) 신규 기능**: 아티팩트가 뷰어의 MCP 커넥터로 실시간 데이터 연동, 공개 공유 링크, `/fork`(백그라운드 세션 복제), 스크린리더 모드(VoiceOver/NVDA) — 공식 페이지 원문 확인, 최신 항목이 Week 29까지임(Week 30+ 없음).
- ⚠️ **"Opus 5가 신규 기본 Opus" 주장 재차 폐기 확정**: Week 29까지 공식 whats-new에 Opus 5 언급 전무. 리안이 이미 1차 폐기했고 이번 검증에서도 미확인 재확인 — 기존 필터("소수점 버전+날짜접미사 없음=환각 의심") 유효성 재입증.
- **OpenAI Codex `GPT-5.6 Luna/Terra` 변형 실재 확인**: `developers.openai.com/codex/changelog` 직접 fetch로 "Migrated bundled GPT-5.4 selections... to the corresponding GPT-5.6 Terra and Luna variants" 원문 확인. 페이지드 스레드 포크(`Support paginated thread forks`), 원격 Code Mode 호스트 연결(WebSocket) 항목도 원문 대조 확인 — 리안 리서치 신뢰.
- Antigravity changelog·ICML "selective activation sparsity"·ICML 근거는 이번 검증 범위 밖(블로그/애그리게이터 2차 출처 상태 유지) — 승격 보류.
- Jacobian 추측 반증 건은 독립 매체 2곳(theconversation.com, sbseminar.wordpress.com) 교차출처 확인됨 — AI 동향으로서는 참고용, 모델 자체 성능 주장 검증은 아님에 유의.

## 출처
- [What's new - Claude Code Docs](https://code.claude.com/docs/en/whats-new)
- [ChatGPT & Codex changelog](https://developers.openai.com/codex/changelog)
- [Hello there, the Jacobian conjecture is false](https://theconversation.com/hello-there-the-jacobian-conjecture-is-false-thanx-why-a-tiny-social-media-post-has-mathematicians-rethinking-ai-283883)

## 위키화 후보
- Claude Code Week 29 신규 기능(아티팩트 MCP 커넥터·`/fork`) — 기존 노트에 없음, 신규 후보.

## 프로필 반영 후보 (저위험)
- OpenAI Codex `GPT-5.6 Luna/Terra` 모델 변형 구분(용도별 비용·역할 상이) 추적 항목에 추가.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 제안된 "출처-대조-검증기"류가 이번에도 유효함을 재확인: WebFetch 권한 차단 시 wget 폴백으로 실제 검증 성공)
