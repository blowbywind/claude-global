---
date: 2026-09-04
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-09-04

## 오늘 배운 것
- **Claude Fable 5.1**(v2.1.257 changelog 원문 대조 완료): 1M 컨텍스트, $10/$50 per Mtok, 캐시읽기 $0.25/Mtok, 기본 Fable 모델로 지정 — 원문 문구까지 일치 확인.
- **Claude Code v2.1.260**: Fable 5.1 프롬프트캐싱 버그(툴콜 턴마다 캐시 미스) 및 `/model` 피커 미표시 버그 수정 — 원문 대조 완료.
- **Antigravity 최신 릴리스 4건**(공식 changelog 원문 직접 대조): v2.12.2(09-03, Gemini 3.8 Flash ADC), v2.12.0(09-02, `/boost` 멀티에이전트 추론 파이프라인), v2.11.0(08-26, Generative UI), v2.10.0(08-24, 임베디드 터미널·Git 버전관리) — 날짜·제목·본문 문구까지 정확히 일치.
- **GPT-6 Astra**(OpenAI): 공식 openai.com 페이지는 여전히 403(직접 대조 불가)이나, 2차 출처 9to5mac 본문을 직접 fetch해 "최고의 소프트웨어 엔지니어링 모델" 표현과 Codex의 compaction 대체 컨텍스트 보존·검색 방식 설명을 원문 그대로 확인 — 신뢰도 상향(단, 1차 소스 미확보 상태는 유지).
- (폐기) "Antigravity 기본모델이 Sonnet 4.6/Opus 4.6로 교체"는 5월 발표 기반 구정보이며 8~9월 최신 changelog에 근거 없어 채택 보류.
- GPT-5.6(Sol/Terra/Luna, 07-09 출시)는 이번 세션 재검증 대상 아님 — 기존 TechCrunch 단일출처 상태 유지(추가 대조 필요 시 차기 세션 과제).

## 출처
- [Claude Code CHANGELOG (raw, v2.1.257/2.1.260 직접 대조)](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md)
- [Antigravity 공식 changelog (v2.12.2/2.12.0/2.11.0/2.10.0 직접 대조)](https://antigravity.google/changelog/)
- [9to5mac: GPT-6 Astra 상세 (본문 직접 fetch 대조)](https://9to5mac.com/2026/09/04/openai-releasing-major-upgrade-to-chatgpt-and-codex-with-gpt-6-astra-details-here/)
- [TechCrunch: GPT-5.6 패밀리 출시(미재검증, 기존 출처 유지)](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)

## 위키화 후보
- Codex 컨텍스트 보존 방식(compaction 대체, 노트 유지+검색) — GPT-6 Astra 아키텍처 개념 노트 신설 가치.

## 프로필 반영 후보 (저위험)
- 신규 모델·기능 용어 갱신: `claude-fable-5-1`(기본 Fable, 1M/$10·$50), Antigravity `/boost`(멀티에이전트 추론 파이프라인), `GPT-6 Astra`.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 이번 세션 wget 직접 대조로 WebFetch 권한 이슈 재발 없이 8건 전원 원문 검증 완료, 기존 후보 재제안 불필요)
