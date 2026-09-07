---
date: 2026-08-28
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-28

## 오늘 배운 것
- **[대기 항목 해소]** "MCP 장기실행 확장 = RC→GA" 건: 원문(blog.modelcontextprotocol.io) 직접 대조 결과, 2026-07-28 스펙 변경사항이 이미 SDK·공식문서에 반영된 것을 확인했습니다. 단 Tasks(장기실행)는 코어가 아닌 별도 공식 확장(SEP-2663)으로 이동된 형태입니다 — 이 대기 항목은 검증 완료로 종결 가능합니다.
- MCP가 2026-08-22 신규 로드맵 발표, 5대 우선순위(에이전트 메시징 primitives, HTTP 전송 통합, 에이전트 신원·DPoP 보안, 개선된 primitives·점진적 도구 발견, SDK 개발경험)를 원문 대조로 확인했습니다.
- GitHub Spec Kit v0.5.0: Claude Code CLI 네이티브 스킬 통합, AWS Kiro·Tessl·IBM 생태계 확장은 원문 확인됨. 단 "스타 9만+·포크 8천+" 수치는 원문에 없어 **폐기**합니다(근거 없음).
- EARS 문법의 Spec Kit 통합요청(issue #1356)은 "진행 중"이 아니라 **2026-07-13 completed로 이미 종결**됨을 GitHub API로 확인 — 리서치 오류 정정.
- llms.txt는 2026년에도 IETF/W3C 공식표준화 안 됨(원문 확인, 커뮤니티 컨벤션 유지). 단 "전체 도메인 10.13%/기술사이트 5~15%" 수치와 "Stripe·Vercel·Cloudflare 채택" 언급은 인용 원문에서 확인되지 않아 **폐기**합니다(원문은 Anthropic·Perplexity 공식지원만 명시).
- 미검증 잔여 항목(chatprd.ai PRD 5섹션 원칙, thebcms.com 1차성공률 3~10배)은 이번 회차에서 원문 대조를 못 했으므로 채택 보류, 참고용으로만 보유합니다.

## 출처
- [The New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/) — 원문 대조 검증
- [GitHub Spec Kit in 2026](https://jamesm.blog/ai/github-spec-kit-2026-update/) — 원문 대조 검증
- [spec-kit issue #1356](https://github.com/github/spec-kit/issues/1356) — GitHub API로 상태 확인
- [State of llms.txt 2026](https://presenc.ai/research/state-of-llms-txt-2026) — 원문 대조 검증

## 위키화 후보
- "MCP Tasks = 코어가 아닌 별도 확장(SEP-2663)" — 기존 "MCP 장기실행=RC" 노트를 이 내용으로 갱신할 가치 있음

## 프로필 반영 후보 (저위험)
- API 명세서 배경지식에 "MCP 2026-08-22 로드맵 5대 우선순위" 용어 추가

## 승인 필요 (고위험)
(없음 — SDD 4단계 정식 채택 건은 기존과 동일하게 대기 유지, 이번엔 재상신하지 않음)

## 신규 도구 후보
(없음 — wget 폴백으로 이번에 직접 검증 성공했으며, 동일 취지 제안이 이미 여러 차례 등록되어 있어 중복 제안 생략)
