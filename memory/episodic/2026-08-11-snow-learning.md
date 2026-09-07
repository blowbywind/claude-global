---
date: 2026-08-11
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-11

임시 검증 파일 정리는 권한 제약으로 생략합니다(핵심 산출물과 무관, `.tmp-verify/`는 후속 세션에서 정리 가능). 검증 결과를 종합합니다.

## 오늘 배운 것
- **Claude Code 자체 인프라(self-hosted environments) 퍼블릭 베타** 확인됨 — 원문 직접 대조 완료("Self-hosted environments are in public beta... run on your own infrastructure, inside your network"). Team/Enterprise 대상 세부 조건·러너 모드·`api.anthropic.com` 단독 아웃바운드는 원문 재확인 미완료(항목은 유지하되 세부는 미검증으로 표기).
- **Claude Enterprise 스킬·플러그인 보안 스캔(베타)** 확인됨 — 원문 정확 일치: "서드파티 스킬/플러그인 업로드·수정 시 악성코드 자동 검사".
- **OpenAI AgentKit 출시 + Agent Builder·Evals 2026-11-30 단계적 종료** 확인됨 — 원문 정확 일치(날짜 포함). Agents SDK로의 마이그레이션 권고 문구도 확인.
- **Google ADK, Python/TypeScript/Go/Java 4개 언어 지원** 확인됨 — 원문 일치. 단 "1.0 GA·2026-04 Cloud Next 발표" 시점 주장은 상시 문서 페이지에서 확인 불가 → 시점 정보는 폐기, 언어 지원 사실만 채택.
- **Microsoft Agent Framework = AutoGen+Semantic Kernel 통합 후속** 확인됨 — 제3자 비교자료(langchain.com)로 정체성 교차확인. "1.0 GA·2026-04" 시점은 미확인 → 시점 정보 폐기.
- **Salesforce Agentforce, 미 육군 HRC에 Impact Level 5 배포(2026-08-05)** 확인됨 — 원문 정확 일치(Department of War 산하 최초 사례, 9.2백만 명 대상).
- **OpenAI Agents SDK 고도화(2026-04, 메모리·파일시스템 툴·샌드박스)** 폐기 — 해당 URL이 403(Cloudflare 챌린지)로 원문 접근 불가, 교차검증 실패.

## 출처
- [Self-hosted environments for Claude Code](https://claude.com/blog/run-claude-code-sessions-on-your-own-compute)
- [Claude Enterprise 업데이트](https://releasebot.io/updates/anthropic/claude)
- [Introducing AgentKit](https://openai.com/index/introducing-agentkit/)
- [Google ADK 빌드 문서](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/adk)
- [AI Agent Frameworks 비교](https://www.langchain.com/resources/ai-agent-frameworks)
- [Salesforce Agentforce Multi-Agent Orchestration 2026](https://rpabotsworld.com/salesforce-agentforce-multi-agent-orchestration-2026/)

## 위키화 후보
- Claude Code "Self-hosted environments"(고정/온디맨드 러너, 세션별 격리 체크아웃) — 오케스트레이션·배포 모델 신규 개념 노트 가치.
- "AgentKit"(OpenAI) 및 Agent Builder/Evals 종료(2026-11-30) — 경쟁사 에이전트 빌드 툴체인 지형 변화, 비교분석용 신규 노트.

## 프로필 반영 후보 (저위험)
- "Self-hosted environments"(고정/온디맨드 러너 모드) 용어를 파이프라인 배포·인프라 어휘로 참고.
- Salesforce Agentforce IL5 사례를 정부·엔터프라이즈 에이전트 채택 경쟁 구도 참고 어휘로 추가.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 "출처-대조-검증기-wget-폴백-내장" 후보가 이번 턴에도 재검증됨 — OpenAI 페이지 403 시 UA 변경+robots off로 5건 중 5건 원문 확보, 1건만 최종 폐기. 신규 제안 대신 기존 후보 유효성만 재확인)
