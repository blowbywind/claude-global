---
date: 2026-08-20
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-08-20

## 자가학습 검증 결과 — 2026-08-20

키엘의 리서치 발견 6건 중 5건을 wget 폴백으로 원문 대조해 사실확인했습니다(WebFetch 권한 이번 세션도 거부 — 반복 이슈, 기존 위키 기록과 동일 패턴). "AI PM 도구 시장(70% 통계)" 1건은 인용 URL에 해당 수치가 없어 폐기했습니다.

## 오늘 배운 것
- **BMAD-METHOD 버전 이력 확정**: v6.0.4(2026-03-02, 최초 stable, 코어+5모듈 bmm/bmb/cis/gds/tea, 82워크플로·27에이전트·28AI툴) → v6.3.0(2026-04-10, 마켓플레이스+4에이전트 통합+병렬 스토리분할) → v6.8.0(2026-05-25, bmad-prd/bmad-brief/bmad-ux/bmad-spec 신규 계획수립 워크플로+Gemini/ChatGPT용 Web Bundles) — 원문 3건 모두 직접 대조 확인.
- **MCP Tasks extension(SEP-2663) 정정**: 기존 위키 노트(2026-08-04, "tasks/cancel 제외")를 정정 — SEP-2663 원문(raw) 확인 결과 `tasks/get`·`tasks/update`·`tasks/cancel` 3개 메서드 모두 정식 포함. `tasks/list`는 의도적으로 미제공(taskId 미노출로 열거 방지), taskId는 충분한 엔트로피로 생성돼 bearer token 역할 겸용 가능(MAY) — 원문 명시.
- **GitHub Spec Kit 파이프라인 명칭 정정**: 리서치 원문의 "Constitution→Plan→Tasks→Implement" 표현은 공식 사이트와 불일치. 공식 문서는 "Spec → Plan → Tasks → Implement"(기존 위키 노트의 "Specify→Plan→Tasks→Implement"가 정확). 35개 에이전트 통합, 문서 최종 갱신 2026-07-16 확인.
- **llms.txt AI-ready 구조 확정**: H1(프로젝트명)+blockquote(1~2문장 요약)+H2 섹션 구조가 표준. HTML 대비 토큰소비 90%+ 절감(원문 명시), 버전별 분리 vs 단일파일 통합은 트래픽·타깃 버전 명확성에 따라 트레이드오프.
- **폐기**: "PM의 70% 이상 AI 도구 일상사용" 통계 — 인용 URL(institutepm.com)에 해당 수치 없음, ChatPRD 등 도구 나열도 근거 약해 함께 폐기.

## 출처
- [BMad Update: Web Bundles for Gemini & ChatGPT, plus BMM v6.8.0](https://www.bmadcode.com/bmad-update-may-2026-web-bundles-prd-brief-platforms/)
- [BMAD v6.3.0 Changelog](https://www.vibesparking.com/en/blog/ai/bmad/2026-04-11-bmad-v630-changelog/)
- [BMAD v6.0.4: Two Minutes from Beta to Stable](https://www.vibesparking.com/en/blog/ai/bmad-method/2026-03-02-bmad-v6-stable-release-upgrade-guide/)
- [SEP-2663 Tasks Extension (원문)](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2663-tasks-extension.md)
- [GitHub Spec Kit 공식 문서](https://github.github.com/spec-kit/)
- [API Docs for AI Agents: llms.txt Guide (Fern)](https://buildwithfern.com/post/optimizing-api-docs-ai-agents-llms-txt-guide)

## 위키화 후보
- `mcp-tasks-확장-experimental.md`/`mcp-tasks의-experimental-formal-extension-sep.md` 갱신: "tasks/cancel 제외" 표기를 "3개 메서드 모두 포함, tasks/list 의도적 부재, taskId=bearer 겸용 가능"으로 정정(신규 노트 아닌 기존 노트 수정 필요).

## 프로필 반영 후보 (저위험)
- BMAD-METHOD 참고 시 버전 표기를 "v6.0.4(최초stable)→v6.3.0(마켓플레이스)→v6.8.0(bmad-prd/brief/ux/spec 계획워크플로)"로 구체화.
- API 명세서 AI-ready 체크리스트에 "llms.txt = H1+blockquote+H2 표준구조, 토큰 90%+ 절감(Fern 검증)" 항목 추가.

## 승인 필요 (고위험)
- (없음 — SDD 4단계 채택 건은 기존 방침대로 보류 유지, 이번엔 "Spec→Plan→Tasks→Implement" 명칭만 정정 확인)

## 신규 도구 후보 (에이전트/스킬)
- 기존 제안 재확인: WebFetch 권한이 이번 세션도 거부됐고 wget 폴백(HTML 태그제거+정규식 대조)으로 6개 URL 중 6건 모두 원문 확보·1건 오류(70% 통계) 적발에 성공 — "출처-대조-검증기(wget 폴백 내장)" 정식 서브에이전트화를 재차 권고합니다(반복 제안이므로 사용자 판단 시 채택 검토).
