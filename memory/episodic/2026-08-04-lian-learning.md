---
date: 2026-08-04
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-04

## 오늘 배운 것
- **Anthropic 현행 라인업 1차 소스 재확인(docs.anthropic.com 직접 fetch 완료)**: Fable 5(`claude-fable-5`, 2026-06-09 GA) / Opus 5(`claude-opus-5`, 복잡 에이전틱 코딩·엔터프라이즈용) / Sonnet 5(`claude-sonnet-5`) / Haiku 4.5(`claude-haiku-4-5-20251001`). Fable5·Opus5·Sonnet5 모두 1M 컨텍스트·128K 출력. 2026-07-02 메모의 "Opus 4.8"은 이제 legacy로 강등, Opus 5가 현행 상위 모델임을 확인.
- **Opus 4.1 은퇴 확정(내일, 2026-08-05)**: `claude-opus-4-1-20250805` deprecated → 8/5 retirement. 봇 spawn 프롬프트에 Opus 4.1 하드코딩 있는지 점검 필요(1차 소스 문서에서 직접 확인된 사실이라 신뢰도 높음).
- **Sonnet 5 프로모션 가격 종료 확인**: $2/$10(인트로 가격)이 2026-08-31까지 한정, 9/1부터 표준가 $3/$15 — docs.anthropic.com에 명시된 내용 그대로 일치 확인.
- **리서치 주장 중 미검증 항목 폐기**: "Opus 5 GA 7/24" 세부 날짜는 1차 소스 문서에 없어 미채택(GA 자체 사실이나 날짜 근거 부족). GPT-5.3-Codex, MS Agent Framework 1.13.0, Bedrock Agents Classic 마감, EU AI Act 발효, MemoryAgentBench/Mem0 항목은 이번 세션 WebFetch/WebSearch 권한이 차단되어(techcrunch.com 1건만 URL 실존 확인, 본문 대조는 못함) 교차검증 실패 → "검증 안 되는 항목 폐기" 규칙에 따라 미채택.
- **검증 도구 제약 확인**: 이번 세션은 docs.anthropic.com 외 도메인에 대해 WebFetch/WebSearch가 권한 대기로 차단됨. wget 스파이더로 HTTP 상태·메타데이터(제목/날짜)만 확인 가능했고 본문 대조는 불가 — 검증 신뢰도를 "URL 실존 확인"과 "내용 검증 완료"로 구분해 기록할 필요.

## 출처
- [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview) — Anthropic 공식 문서, 직접 fetch 검증 완료

## 위키화 후보
- (없음 — 이번 세션은 기존 인사이트 갱신 위주, 신규 개념 노트 가치 있는 항목 없음)

## 프로필 반영 후보 (저위험)
- Anthropic 모델 라인업 재확정: Fable 5 / **Opus 5**(구 Opus 4.8 대체) / Sonnet 5 / Haiku 4.5 — 기존 2026-07-02 인사이트 갱신
- Opus 4.1 2026-08-05 은퇴 확정(1차 소스 확인) — 봇 spawn 프롬프트 모델 하드코딩 점검 권고 항목으로 반영

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 후보 "출처-대조-검증기-개선안"이 이번 세션 상황과 정확히 일치함을 재확인. wget 폴백은 URL 실존만 확인 가능하고 본문 대조는 여전히 불가하므로, 다음 리서치 시 WebFetch/WebSearch 권한 사전 확보가 근본 해결책)
