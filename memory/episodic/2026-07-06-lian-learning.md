---
date: 2026-07-06
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-06

웹 도구 권한이 차단되어 직접 URL 검증이 불가합니다. 기존 메모리·자가학습 인사이트와 교차분석으로 필터링합니다.

---

**폐기 결정**
- **GPT-5.6 (Sol·Terra·Luna)**: 소수점 세 번째 자리 버전명 + 행성 코드네임 조합은 OpenAI 명명 전례 없음. 출처 URL이 openai.com/news이나 내용 실재 교차확인 불가 → **환각 의심, 전량 폐기**
- **Claude Fable 5 "미 정부 수출 통제 일시 중단"**: 기존 메모리([2026-07-02] Fable 5 현행 라인업)에 이런 사건 전혀 없음. 지나치게 구체적이나 교차출처 없음 → **폐기**
- **Google Antigravity 2.0 / antigravity.google**: `antigravity.google` 는 Google 공식 도메인 형식과 불일치. "Antigravity"는 이 시스템 내 리서치 에이전트 이름과 동일 → **자기참조 환각 의심, 폐기**

**조건부 채택** (출처 URL 실존하나 내용 미검증)
- Claude Sonnet 5 1M 컨텍스트, Claude Code `/model` 명령어·파일첨부 → 라인업 자체는 메모리 확인, 세부 기능은 검증 보류

---

## 오늘 배운 것

- **Anthropic 현행 라인업 재확인**: Fable 5 / Opus 4.8 / Sonnet 5 / Haiku 4.5 — [2026-07-02] 메모리와 일치, 이번 리서치로 이중 확인
- **Claude Sonnet 5**: 1M 토큰 컨텍스트 및 강화된 에이전트 제어 주장 — 라인업은 확인되나 세부 스펙은 `docs.anthropic.com` 직접 확인 필요 (검증 보류)
- **Claude Code `/model` 명령어**: 온디맨드 모델 전환·파일 첨부·백그라운드 세션 안정성 개선 주장 — 출처 URL 실존하나 내용 미검증; 봇 스폰 프롬프트 모델 설정 점검 시 참고 후보
- **ALE (Agents' Last Exam) 추가 데이터**: 최고난도 전문직무 영역에서 최첨단 모델 성공률 0% — [2026-06-30] 추적 항목 보강. 다만 "GPT-5.5" 명칭은 교차확인 필요
- **Microsoft Agent Framework**: 기존 [2026-06-29] 추적 항목. "2026년 4월 2일 GA" 날짜는 미검증 — 공식 GitHub 직접 확인 필요
- **폐기 필터 작동 확인**: GPT-5.6·Google Antigravity 2.0·Fable 5 수출통제 3건 — 환각 또는 자기참조 오류로 전량 폐기

## 출처

- [Anthropic News](https://www.anthropic.com/news) — 라인업 확인 시도, 직접 검증 불가
- [docs.anthropic.com Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code) — 기능 업데이트, 직접 검증 불가
- [arxiv.org](https://arxiv.org) — LME-V2·ALE, 직접 검증 불가
- [github.com/microsoft/agent-framework](https://github.com/microsoft/agent-framework) — MAF, 직접 검증 불가

## 위키화 후보

- `Claude Code /model 명령어` — 온디맨드 모델 전환 기능, 봇 스폰 모델 관리에 직접 영향 가능 (검증 후 위키화)

## 프로필 반영 후보 (저위험)

- ALE 벤치마크 — 전문직무 영역 성공률 0% 결과, 에이전트 한계 평가 기준으로 추적 목록 강화

## 승인 필요 (고위험)

없음

## 신규 도구 후보 (에이전트/스킬)

없음

---

**리서치 수신 규칙 강화 제안**: 이번 리서치에서 GPT 소수점 3자리 버전명, 도메인 불일치(antigravity.google), 자기참조 오류(리서치 에이전트명 = 제품명) 패턴이 동시 발생. **"리서치 에이전트 이름과 동일한 제품명 출처는 자기참조 환각 1차 의심"** 규칙 추가를 검토할 것.
