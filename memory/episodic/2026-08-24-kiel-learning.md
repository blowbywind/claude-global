---
date: 2026-08-24
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-24

## 오늘 배운 것
- MCP 로드맵(2026-08-22, blog.modelcontextprotocol.io) 원문 직접 대조 완료: Tasks는 SEP-2663으로 "공식 extension" 지위이나 **core 스펙 편입은 아직 로드맵상 목표일 뿐 미확정** — 신규 5대 우선순위 중 "Agentic messaging primitives"에 "maturing the Tasks extension so it can move into the specification"로 명시됨. 기존 위키 표기(core 분리·extension 지위 확정)는 정확하므로 변경 불필요.
- 같은 원문에서 server-initiated events(webhooks/channels)가 신규 우선순위로 확인됨 — 클라이언트 폴링 제거가 목표, 아직 착수 단계.
- Extensions framework(SEP-2133, experimental-ext- 저장소 → 정식 SEP 승격 절차)도 원문에서 재확인.
- **정정 필요**: llms.txt 관련 리서치 주장 중 "Anthropic/OpenAI/Perplexity 공식 1급 채택 근거 없음"은 원문(presenc.ai) 대조 결과 부정확합니다 — 원문은 "Anthropic과 Perplexity는 공식적으로 지지를 확인(publicly confirmed)했고, OpenAI·Mistral은 간접 정황만 있음"이라고 명시하고 있습니다. IETF/W3C 비공식 표준이라는 부분만 정확합니다.
- **폐기**: "llms.txt 채택률 10.13%, SE Ranking 30만 도메인 조사" 수치는 인용된 출처 페이지 본문에서 해당 수치 자체가 존재하지 않아(원문 전체 재확인) 근거 불일치로 폐기합니다.
- SDD 주류화·EU AI Act 발효 관련 항목(dev.to, axify.io)은 단일 블로그 출처로 원문 대조를 하지 않았으므로 참고용으로만 남기고 확정 승격은 보류합니다.

## 출처
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — 원문 대조 완료
- [State of llms.txt 2026](https://presenc.ai/research/state-of-llms-txt-2026) — 원문 대조 완료(리서치 주장과 불일치 확인)

## 위키화 후보
- MCP 로드맵 신규 5대 우선순위(Agentic messaging primitives/HTTP-native transport/Agent identity/Improved primitives/SDK DX) — 원문 대조 완료, 개념 노트 승격 가치 있음.

## 프로필 반영 후보 (저위험)
- llms.txt 배경지식 문구를 "커뮤니티 컨벤션(비공식 표준), Anthropic·Perplexity는 공식 지지 확인, OpenAI·Mistral은 미확인"으로 정정.

## 승인 필요 (고위험)
- 2026-08-13에 확정 반영한 "llms.txt 토큰 약 90% 절감(검증완료)" 수치의 원출처가 이번 대조에서 확인되지 않았습니다. 재검증 전까지 해당 항목을 "검증완료"에서 "출처 미확인·재검증 필요"로 하향 조정할지 확인 부탁드립니다.

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 후보가 이미 등록돼 있고, 이번에도 그 필요성이 재확인됐을 뿐 신규 제안 없음)
