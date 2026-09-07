---
date: 2026-08-18
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-18

## 오늘 배운 것
- MCP(Model Context Protocol)가 2026-07-28 스펙에서 완전 stateless 코어로 전환 확정 — `initialize`/`Mcp-Session-Id` 폐지, 요청마다 컨텍스트 자기완결(라운드로빈 로드밸런싱 가능), Multi Round-Trip Requests(MRTR)로 서버→클라이언트 요청 대체. (공식 블로그 원문 확인)
- MCP `Tasks`가 실험적 코어에서 정식 확장(`io.modelcontextprotocol/tasks`)으로 분리 이동, `tasks/get`(폴링)·`tasks/update` API 확정, 변경 알림은 `subscriptions/listen` 단일 스트림으로 통합 — 기존 인사이트(2026-07-27) 갱신 필요. (공식 블로그 원문 확인)
- MCP TypeScript/Python SDK 누적 다운로드 각 10억 건 돌파, Tier1 SDK 월간 다운로드 약 5억 건. (공식 블로그 원문 확인)
- Google DeepMind 리더십 개편(2026-08-12 보도): 데미스 하사비스는 체어(Chairman)로 물러나고, Koray Kavukcuoglu가 SVP로 일상 운영·Gemini 모델 개발·프런티어 리서치를 총괄하며 Pichai 직속 체제. (CNBC 원문 확인)
- Microsoft Agent Framework의 Harness·Hosted Agents가 2026년 8월 정식 GA 도달. (InfoQ 제목·기사 확인)
- Claude Opus 5가 2026-07-24 출시, OpenAI는 2026년 9월 IPO를 목표로 S-1 공개 추진 중 — 다만 두 건 모두 비공식 3차 매체(aitoolsreview.co.uk, imfounder.com) 보도로, Anthropic·OpenAI 공식 발표 직접 확인은 안 됨(신뢰도 보통, 참고용).

## 출처
- [The 2026-07-28 Specification](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
- [Google DeepMind: Koray Kavukcuoglu takes over in frontier AI push](https://www.cnbc.com/2026/08/12/google-deepmind-koray-kavukcuoglu.html)
- [Microsoft Agent Framework Harness and Hosted Agents Reach General Availability](https://www.infoq.com/news/2026/08/agent-framework-harness-ga/)
- [What's the Next Claude Model? Anthropic's New Roadmap](https://aitoolsreview.co.uk/insights/next-claude-model) (비공식 3차 출처)
- [AI Updates August 2026: 15 Explosive Stories](https://imfounder.com/science-tech/ai/ai-updates-august-2026-openai-astra-deepmind/) (비공식 3차 출처)

**폐기한 항목(출처 미검증/교차확인 실패)**: Gartner "2027년 에이전틱 프로젝트 40% 취소" 전망(fifthrow.com 블로그 인용, 1차 Gartner 자료 미확인), EU AI Act가 멀티에이전트 오케스트레이션을 "고위험" 분류했다는 주장(truefoundry.com 벤더 블로그, imfounder 보도의 실제 내용인 "Article 50 투명성 의무"와 불일치), Agyn·AIRS-Bench(github 목록/arxiv 색인 페이지일 뿐 구체 내용 미확인).

## 위키화 후보
- MCP 2026-07-28 stateless 스펙 전환(Mcp-Session-Id 폐지·MRTR·Tasks 확장분리) — 향후 참조 빈도 높은 프로토콜 변경, 개념 노트 신설 가치 있음.

## 프로필 반영 후보 (저위험)
- 오케스트레이션 설계 어휘에 "MCP stateless 코어·MRTR·Tasks 확장(코어에서 분리 확정)" 추가 — 기존 2026-07-27 인사이트 갱신.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
