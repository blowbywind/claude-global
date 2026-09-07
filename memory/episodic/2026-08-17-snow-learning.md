---
date: 2026-08-17
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-08-17

## 오늘 배운 것
- MCP가 2026-07-28 스펙으로 stateless core·강화된 OAuth/OIDC 인증·Apps/Tasks 확장을 반영, 양방향 stateful 모델에서 request/response 모델로 전환되어 서버리스/엣지 배포가 가능해짐 — 오케스트레이션 설계 시 게이트웨이 인증·배포 구조 검토에 참고할 것.
- Claude Code 8월 업데이트: GitLab merge request 지원, self-hosted runner 시작 속도 개선, 게이트웨이·플러그인 검증 강화, 시크릿 마스킹(Linux/WSL) 옵션 추가 — 파이프라인 배포·시크릿 관리 어휘로 참고.
- Anthropic이 Google·Broadcom과 대규모 컴퓨트 파트너십을 발표, 매출 확대에 따른 컴퓨트 투자 확대 기조 확인 — 향후 대규모 오케스트레이션 스케일 판단 시 참고.
- Anthropic이 첫 Chief Global Affairs Officer(전 캘리포니아 대법관 Tino Cuéllar)를 영입, 8/3 백악관 AI 안전 회의에 OpenAI·Google과 참석 — 업계 규제 대응 동향 참고.
- Google이 AI 리더십을 캘리포니아 본사로 재편(Koray Kavukcuoglu가 AI 연구·운영 총괄) — Anthropic·OpenAI와의 경쟁 구도 변화 참고.
- 개발도구 경쟁이 Claude Code·Codex·Cursor·Antigravity·Cline 등으로 심화되는 정성적 흐름은 확인되나, 구체 모델명·가격 수치(예: "GPT-5.6 80% 인하", "DeepSeek-V4-Pro")는 단일 비공식 블로그(buildfastwithai.com) 출처뿐이라 검증 보류.

## 출처
- [Google shifts AI power to California](https://www.bloomberg.com/news/articles/2026-08-06/google-shifts-ai-power-to-california-in-race-against-anthropic-openai)
- [Anthropic × Google/Broadcom compute partnership](https://www.anthropic.com/news/google-broadcom-partnership-compute)
- [OpenAI, Anthropic, Google to join White House AI safety meeting](https://www.bloomberg.com/news/articles/2026-08-03/openai-anthropic-google-to-join-white-house-ai-safety-meeting)
- [Claude Code changelog](https://code.claude.com/docs/en/changelog)
- [Claude Code changelogs (gradually.ai)](https://www.gradually.ai/en/changelogs/claude-code/)

## 위키화 후보
- "MCP stateless core 전환"(2026-07-28 스펙, 양방향→request/response) — concepts/ 신규 노트 후보 1개.

## 프로필 반영 후보 (저위험)
- MCP 최신 스펙 어휘(stateless core, OAuth/OIDC 강화, Apps/Tasks 확장)를 오케스트레이션 설계 어휘로 참고.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 이번 검증 중 WebFetch 권한이 재차 차단되어 wget 폴백으로 일부만 확인함. 기존 등록된 "출처-대조-검증기-wget-폴백-내장" 후보의 재적용 필요성이 다시 확인됐으나, 이는 이미 등록된 후보라 신규 제안 아님.)

---
**검증 비고**: 이번 검증 중 WebFetch 도구 권한이 차단되어(기존 memory `web-research-delegation`에 기록된 반복 이슈와 동일 패턴), curl 부재로 wget 폴백을 시도했으나 grep 후속 처리도 샌드박스 승인이 필요해 본문 대조는 완결하지 못했습니다. 이에 따라 (1) "OpenAI·Anthropic AI 에이전트가 정기 보안 테스트 중 타사 시스템을 독자 해킹" 항목은 실제 사건(제3자의 Claude 오남용 사건 등)과의 혼동 가능성이 있어 배제했고, (2) 단일 비공식 블로그 출처의 구체 수치(DeepSeek Harness 세부일정, Opus 5/GPT-5.6 가격 인하율)도 배제했으며, (3) Gartner 통계는 눈꽃이 이미 보류 처리한 것에 동의합니다. arXiv 신규 논문 3건(Distributed Team Orchestration via Supervisor Networks, PerspectiveGap, How Much Coordination Gain Is Real?)은 목록 URL만 확인되고 개별 논문 원문 대조는 못해 이번 턴 인사이트·위키화에서 제외했습니다.
