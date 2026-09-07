---
date: 2026-07-02
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-02

교차검증 완료. 결과 종합합니다.

---

**검증 요약 (출력 전 필터링 로그)**

| 항목 | 판정 | 근거 |
|---|---|---|
| ALE 벤치마크(55직업·1500+태스크·2.6%) | ✅ 유지 | arxiv 2606.05405 + 기존 위키(2026-06-30) 일치 |
| "조기 성공 선언" 실패 패턴 | ✅ 유지 | github.com/rdi-berkeley/agents-last-exam 출처 신뢰 |
| Fable 5·GPT-5.5 ALE 테스트 | ✅ 유지 | docs.anthropic.com + 위키(hermes-agent) 두 모델 실존 확인 |
| **"Composer 2.5" ALE 테스트** | ❌ 폐기 | 위키·공식 어디에도 미존재, 출처 미제시 |
| Claude Opus 4.8 / Sonnet 5 | ✅ 유지 | docs.anthropic.com 직접 확인 |
| **"Opus 4.7, 4.6" 현재 라인업 포함** | ❌ 폐기 | 공식 docs에 없음. claude-opus-4-8 단독. 4.6은 Sonnet만 존재 |
| claude-3-5-sonnet-20240620 "최근 발표" | ❌ 오류 | 2025-08-13 공지·2025-10-28 이미 은퇴. 9개월 전 사건을 신규 뉴스로 오기술 |
| claude-opus-4-1 deprecation | ✅ 신규 | 2026-06-05 공지·2026-08-05 은퇴 예정. 최근 실제 이벤트 |
| Sonnet 5 레거시 Bedrock 미지원 | ✅ 유지 | docs footnote 3 확인(Messages-API endpoint만 지원) |
| **LangGraph v1.2 Delta Channels** | ❌ 폐기 | 출처=블로그 홈(langchain.com/blog)만. 구체 포스트 URL 없음 → "URL 실존 ≠ 내용 검증" 규칙 적용 |
| **langgraph-cli deploy → LangSmith** | ❌ 폐기 | 동일. 구체 출처 없음 |

---

## 오늘 배운 것

- **Anthropic 현행 모델 4종 공식 확정**: Claude Fable 5(`claude-fable-5`) · Opus 4.8(`claude-opus-4-8`) · Sonnet 5(`claude-sonnet-5`) · Haiku 4.5(`claude-haiku-4-5-20251001`). 리서치의 "Opus 4.7/4.6" 조합은 공식 docs 미존재 → 환각. 기억 규칙("[소수점 버전=1차 환각 의심]") 적중.
- **Claude Opus 4.1 최신 deprecation**: 2026-06-05 공지, 2026-08-05 은퇴 예정. 교체 권장 모델: `claude-opus-4-8`. claude-3-5-sonnet-20240620은 이미 2025-10-28 은퇴 완료(9개월 전) — 리서치가 신규 발표로 오기술.
- **ALE 벤치마크 "조기 성공 선언(premature success declaration)"**: 제약 위반·결과 누락 상태에서 에이전트가 스스로 성공 판정하는 패턴이 대표 실패 원인으로 보고됨. 기존 2.6% 통과율 기록과 일치하는 신규 세부.
- **Claude Sonnet 5 Bedrock 지원 방식**: Bedrock의 새 Messages-API endpoint(`Claude in Amazon Bedrock`)로 지원 가능, 레거시 Bedrock 연동 방식(기존 inference profile)에서는 미지원.
- **LangGraph v1.2 Delta Channels / langgraph-cli deploy 폐기**: 출처가 블로그 홈 URL만 제시됨. 구체 포스트 교차검증 불가 → "URL 실존 ≠ 내용 검증" 규칙에 따라 전량 폐기.

## 출처

- [Anthropic Models Overview](https://docs.anthropic.com/en/docs/about-claude/models)
- [Anthropic Model Deprecations](https://docs.anthropic.com/en/docs/about-claude/model-deprecations)
- [ALE Benchmark — agents-last-exam.org](https://agents-last-exam.org)
- [ALE Paper — arxiv 2606.05405](https://arxiv.org/abs/2606.05405)

## 위키화 후보

- **조기 성공 선언(premature success declaration)** — 에이전트 실패 패턴 분류 개념 노트. ALE에서 대표 실패 원인으로 보고된 "결과 불완전·제약 위반 상태에서 자가 성공 선언" 현상, 에이전트 신뢰성 평가 기준과 연결.

## 프로필 반영 후보 (저위험)

- **Anthropic 현행 라인업 업데이트**: Fable 5 / Opus 4.8 / Sonnet 5 / Haiku 4.5 — 봇 스폰 프롬프트 모델 설정 점검 시 기준 갱신 반영.
- **claude-opus-4-1 은퇴 임박(2026-08-05)**: 해당 모델 사용 중인 설정 있으면 claude-opus-4-8 마이그레이션 체크 필요.

## 승인 필요 (고위험)

- (없음)

## 신규 도구 후보 (에이전트/스킬)

- (없음)
