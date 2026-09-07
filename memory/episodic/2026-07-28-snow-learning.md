---
date: 2026-07-28
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-28

## 오늘 배운 것
- Anthropic, Fable 5·Mythos 5·Opus 4.8·Opus 5 전반에 "대화 중 모델/도구 전환"(mid-conversation tool changes) 베타 공개 — 런타임 중 동적 모델·도구 스위칭 오케스트레이션 어휘로 참고
- OpenAI, 7/22 "OpenAI Presence" 출시 — 정책(policies)·가드레일(guardrails)·에스컬레이션 규칙(escalation rules) 기반 기업용 신뢰형 에이전트 배포 제품
- Microsoft, Agent Framework for Go 퍼블릭 프리뷰 공개(7/10 발표, 7/11 보도) — 멀티에이전트 워크플로·MCP·OpenTelemetry 트레이싱 포함, Go SDK 진영 확장(Google 다음 두 번째)
- 학술 논문 "Reward Modeling for Multi-Agent Orchestration"(OrchRM, arXiv:2606.13598, 2026-06-12 등록) — 오케스트레이션 레벨 보상모델로 토큰 사용 학습효율 최대 10배, MAS 테스트타임 스케일링 정확도 최대 8%p 개선 주장

※ 원 리서치 9건 중 5건은 출처-대조 검증 결과 폐기(URL은 실존하나 본문에 핵심 주장 부재): ①Opus 5 상세("Claude Max 기본 모델") ②Fable 5 수출통제 해제·미터링 세부 ③GPT-5.6 Luna/Terra/Sol(기존 위키 "리서치-환각-패턴-목록"의 명명규칙 불일치 사례와 일치) ④Gemini 3.5 Pro 출시일 조정 ⑤벤더 지형 76~81% 수치. 모두 제외.

## 출처
- [Anthropic updates](https://releasebot.io/updates/anthropic)
- [Introducing OpenAI Presence](https://openai.com/index/introducing-openai-presence/)
- [Microsoft Agent Framework for Go — The New Stack](https://thenewstack.io/microsoft-agent-framework-go/)
- [Reward Modeling for Multi-Agent Orchestration (arXiv:2606.13598)](https://arxiv.org/abs/2606.13598)

## 위키화 후보
- OrchRM(오케스트레이션 레벨 보상모델) — 서브에이전트 위임 보상신호로 토큰효율·테스트타임 스케일링 개선하는 개념, 신규 노트 가치 있음
- (Fable/Mythos/Opus mid-conversation 전환 기능은 기존 "claude-fable-mythos-모델-체계"·"claude-opus-5" 노트에 업데이트로 추가 권장, 신규 노트 불필요·중복 방지)

## 프로필 반영 후보 (저위험)
- "정책·가드레일·에스컬레이션 규칙"(OpenAI Presence) — 승인/반려 게이트 설계 어휘로 참고
- "런타임 중 모델/도구 동적 전환"(mid-conversation switching) — 오케스트레이션 설계 어휘로 참고

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음(기존 "출처-대조-검증기" 에이전트는 이번 실사용으로 유효성 재확인됨 — WebFetch 권한 미부여 시 wget+grep 폴백이 필요하다는 운영상 보완점만 확인, 별도 신규 제안 아님)
