---
date: 2026-07-05
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-05

WebSearch 권한 미부여로 실제 검색 불가. 대신 소스 품질 필터 + 기존 메모리 교차검증으로 폐기/채택 판정.

---

## 폐기 내역 (교차검증 실패)

| 항목 | 폐기 사유 |
|---|---|
| **Google Antigravity 2.0** / `antigravity.google` | 해당 도메인은 실존 Google 제품 패턴 불일치. 리서처 스스로 "실존 여부 불명" 인정. 내부 ai-ops 봇명 "antigravity"와 혼동 가능성 높음 → 환각 의심, **전면 폐기** |
| **Gemini CLI → Antigravity CLI** | 위 항목과 연동. `blog.google` 홈페이지 URL만, 교차출처 없음 → **폐기** |
| **GPT-5.6 Sol** | OpenAI 명명 규칙 비일치(`.6 Sol` 형태 전례 없음). `openai.com` 홈페이지 URL만 → **폐기** |
| **Claude Sonnet 5 — 1M 컨텍스트, 6월 30일 출시일** | 모델명은 기존 메모리(`[2026-07-02]`)에서 확인됨. 단, "1M 토큰·adaptive thinking·6월 30일" 세부 주장은 `anthropic.com` 홈페이지 URL만 — "URL 실존 ≠ 내용 검증" 규칙 적용 → **추가 주장 미채택** |
| **Claude Fable 5 — 7월 1일 글로벌 출시** | 동일. 모델명 존재는 메모리 확인, 날짜·"에이전트 코딩 최적화" 주장 검증 불가 → **추가 주장 미채택** |
| **Microsoft AI-103 자격증** | 역할 무관(AI 정보 검색 범위 외). `microsoft.com` 홈페이지 URL만 → **폐기** |
| **GPT-4.5 은퇴 6월 27일** | `openai.com` 홈페이지 URL만, 특정 공지 페이지 없음 → **검증 불가, 미채택** |

---

## 오늘 배운 것

- **Sonnet 5 / Fable 5 현행 라인업 재확인** — 기존 메모리(`[2026-07-02]`) 기준 `Fable 5 / Opus 4.8 / Sonnet 5 / Haiku 4.5`가 현행 라인업. 리서치 산출물에서도 동일 모델명 언급 — 일치 확인(단, 세부 기능·날짜는 미검증).
- **LangGraph 보안 패치 주의** — 상태 유지 계층(state persistence) SQL 인젝션 취약점 패치 언급. 출처가 `github.com/langchain-ai/langgraph`(구체적 도메인)이나 커밋/이슈 URL 부재 — **직접 확인 필요**. LangGraph는 정기 추적 대상이므로 다음 리서치 시 릴리스 노트 검증 권장.
- **Microsoft Agent Framework — Hosted Agents 정식화** — 기존 추적 방향(`[2026-06-29]`)과 일치. "Routines(일정 실행)·Toolboxes(도구 관리)" 프리뷰 언급은 플랫폼 성숙 신호. 출처 특정 URL 없어 미채택이나, 다음 검색에서 `azure.microsoft.com` 직접 확인 권장.
- **"antigravity.google" 도메인 = 환각 패턴** — 비공식 Google TLD 도메인을 출처로 삼은 사례. 이 패턴을 **신규 폐기 필터**로 추가 제안(하단 참고).

## 출처

- 검증 완료된 1차 출처 없음(모든 리서치 URL이 홈페이지 수준 또는 의심 도메인). LangGraph 릴리스 노트는 직접 확인 필요: [github.com/langchain-ai/langgraph/releases](https://github.com/langchain-ai/langgraph/releases)

## 위키화 후보

- **리서치 환각 패턴 목록** — "존재하지 않는 서브도메인/TLD를 Google 등 대형 업체 출처로 제시" 사례 누적 문서화 (오늘: `antigravity.google`)

## 프로필 반영 후보 (저위험)

- `LangGraph state persistence` 보안 취약점 이력 → AI 프레임워크 채택 검토 시 보안 패치 이력 확인 항목 추가

## 승인 필요 (고위험)

- **리서치 폐기 필터 규칙 추가 제안**: 현행 "Vertex AI redirect = 폐기" + "URL 실존 ≠ 내용 검증"에 아래 추가 권장
  > `*.google` / `*.openai.com` 이 아닌 임의 서브도메인·TLD(예: `antigravity.google`, `blog.anthropic`) 형태의 URL이 출처로 제시되면 **도메인 실존 여부 먼저 확인 후 채택**

## 신규 도구 후보 (에이전트/스킬)

- `[skill] verify-research-source` — 리서치 수신 시 출처 URL의 HTTP 상태·도메인 실존 여부를 자동 점검해 "홈페이지 URL만" / "비존재 도메인" 항목을 1차 필터링하는 소스 검증 스킬
