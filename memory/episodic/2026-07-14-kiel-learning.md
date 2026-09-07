---
date: 2026-07-14
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-14

## 오늘 배운 것
- MCP 2026-07-28 릴리스 후보: 프로토콜이 완전 stateless로 전환되어 버전·클라이언트 신원·capability가 매 요청의 `_meta`에 실린다는 내용 — 기존 위키(`api-명세서-ai.md`, 2026-07-13)가 이미 동일 출처를 인용해 둔 항목을 구체화. 이번 세션은 WebSearch/WebFetch 권한이 승인되지 않아 원문 재확인은 못 했으나, 기존 검증대기 노트에 같은 URL이 선행 인용돼 있어 신뢰도는 있음.
- BMAD-METHOD가 프로젝트 규모별로 계획 깊이를 조절하는 다단계 트랙(Quick/Standard/Enterprise 유사) 개념을 도입했다는 보고 — 정성적 방향은 `bmad.md`의 "PRD 샤딩" 설명 보완 후보. 단, 정확한 버전 번호·GitHub 스타 수는 이번 세션 도구 제약으로 교차검증 불가 → 확정 반영 보류.
- AWS Kiro의 모호성 감지가 형식적 검증(SMT solver 등) 방향으로 고도화되고 있다는 보고 — `kiro-ambiguity-detection-패턴.md`(2-option 질문 방식)의 갱신 후보이나 단일 출처+수치 미검증으로 확정 반영은 보류.
- GitHub Spec Kit이 다수 AI 코딩 에이전트를 지원하는 오픈소스 SDD CLI로 채택이 확대 중이라는 정성적 트렌드만 채택. "지원 에이전트 30개+", "스타 93,000+" 등 구체 수치는 미검증이라 제외.
- ChatPRD의 "PRD 작성시간 60% 단축", "PM 70%+ AI 상용" 수치는 벤더(chatprd.ai) 자체 발표 자료 — 신규 출처 아니며 기존 `api-명세서-ai.md`에도 동일 URL이 이미 인용돼 있음. 참고 수준으로만 유지.
- "AI는 초안 생성 보조, 최종 판단은 기획자" 원칙이 업계 트렌드(문서작성→product judgment 재분배)와 일치 확인 — 별도 신규 인사이트 불필요, 기존 원칙 재확인.

## 출처
- [Spec-Driven Development 도구 비교 (MarkTechPost, 2026-05-08)](https://www.marktechpost.com/2026/05/08/9-best-ai-tools-for-spec-driven-development-in-2026-kiro-bmad-gsd-and-more-compare/)
- [Kiro/Spec Kit/BMAD 종합 가이드](https://medium.com/@visrow/comprehensive-guide-to-spec-driven-development-kiro-github-spec-kit-and-bmad-method-5d28ff61b9b1)
- [MCP 2026-07-28 Release Candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)
- [MCP goes stateless — breaking changes](https://byteiota.com/mcp-goes-stateless-july-2026-breaking-changes/)
- [ChatPRD — AI for Product Managers](https://www.chatprd.ai/learn/ai-for-product-managers)

## 위키화 후보
- BMAD "규모별 3트랙" 개념 — `bmad.md` 갱신 후보(버전 번호·스타 수는 사람 검증 시 재확인 표시 필요).
- Kiro SMT 기반 모순 검출 — `kiro-ambiguity-detection-패턴.md` 갱신 후보(단일 출처, 검증대기 표시 필요).

## 프로필 반영 후보 (저위험)
- API 명세서 "AI-ready" 체크리스트에 "MCP 장기실행 작업(Tasks) 처리방식 명시" 항목 추가 검토.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음)
