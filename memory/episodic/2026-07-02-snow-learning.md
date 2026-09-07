---
date: 2026-07-02
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-02

WebSearch 권한이 없다. 위키 교차검증 결과만으로 판정한다.

---

## 판정 요약 (출력 전 내부 검토)

| 항목 | 판정 | 근거 |
|---|---|---|
| Fable 5/Mythos 5 수출통제 해제 (7/1) | **조건부 수용** | 위키 `claude-mythos-클래스.md` — 수출통제로 6일 만에 중단 사실 확인됨. 복원 방향 정합. 특정 URL 미확인 |
| Agentjacking (MCP 악용 취약점) | **조건부 수용** | infosecurity-magazine.com = 신뢰 매체. MCP 공격면 확장 맥락 정합. URL 직접 미확인 |
| OpenAI/Broadcom Jalapeño ASIC | **버림** | WebSearch 불가, 위키 교차근거 없음, URL 미확인 |
| MIT Self-Revising Discovery Systems | **버림** | 출처 medium.com = 2차 블로그. 원논문 URL 없음 |
| Kimi Code CLI | **조건부 수용** | 위키 `오픈소스-llm-경쟁-구도-2026.md` — Kimi K2.7 실존 확인. github 출처 정합. 세부 스펙 미확인 |
| Gemini 3.5 Pro 2M ctx / Deep Think=모드 | **조건부 수용** | 기존 메모리 2026-06-24 "Deep Think 모드" 이미 보류 인사이트. blog.google = 1차 출처. 버전·수치 미확인 |

---

## 오늘 배운 것

- **Fable 5 / Mythos 5 접근 복원**: 위키 기록 기준 수출통제로 중단됐던 두 모델이 2026-06-30 해제, 7/1부터 글로벌 복원. 2026-06-21 메모리의 "Fable 5 중단 기간 → Opus 4.8 최고 성능" 임시 원칙 롤백 조건 충족.
- **Agentjacking**: MCP 및 에러추적 연동 도구를 벡터로 AI 코딩 에이전트 터미널에 임의 코드를 실행시키는 신종 공격 기법. 우리 플랫폼 safetykernelguard 설계와 직결되는 위협 모델.
- **Deep Think = 모드, 모델 아님**: Gemini 3 및 3.5 제품군에 내장된 추론 연산 모드. 기존 메모리 "Gemini 2.5 Pro Deep Think 1차 출처 미확인" 보류 인사이트가 blog.google 출처로 방향 정합 — 세부 수치(2M ctx)는 별도 확인 권장.
- **Kimi Code CLI**: Moonshot AI의 단일 바이너리 터미널 코딩 에이전트. Kimi K2.7 기반. Claude Code 경쟁 도구로 분류. 위키 K2.7 노트 업데이트 필요.

## 출처

- [Claude Mythos 클래스 위키 노트](file:///home/bbw/obsidian-vault/bbw-wiki/wiki/concepts/claude-mythos-클래스.md) — 수출통제 중단 사실 1차 내부 확인
- [Infosecurity Magazine](https://www.infosecurity-magazine.com) — Agentjacking 출처 (URL 미확인, 도메인 신뢰)
- [Google Blog](https://blog.google) — Gemini Deep Think 모드 (URL 미확인, 1차 도메인)
- [GitHub](https://github.com) — Kimi Code CLI 출처 (URL 미확인)

## 위키화 후보

- **Agentjacking** — MCP 벡터 AI 에이전트 터미널 공격 기법. safetykernelguard 위협 모델 섹션 추가 가치 있음.

## 프로필 반영 후보 (저위험)

- 라우팅 용어 보강: "Agentjacking" — MCP 기반 에이전트 터미널 공격, 외부 도구 연동 설계 시 위협 모델 점검어로 채택.

## 승인 필요 (고위험)

- **라우팅 원칙 롤백**: 2026-06-21 메모리의 "Fable 5 중단 기간 → 최고 성능 Claude = Opus 4.8" 임시 원칙을 원래대로 복원 — "최고난도 추론 = Claude Fable 5 또는 Mythos 5". `orchestration-directives.md` 수정 대상. 승인 시 적용.

## 신규 도구 후보 (에이전트/스킬)

- `[skill] agentjacking-audit` — MCP 연동·에러추적 설정 대상 코드베이스에서 외부 코드 실행 진입점 정적 스캔. safetykernelguard 사전 검증 보완.
