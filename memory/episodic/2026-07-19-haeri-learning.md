---
date: 2026-07-19
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-19

## 검증 결과

이번 세션에서도 WebFetch·WebSearch 툴 권한이 차단되어(2026-07-16에 이미 확인된 사항과 동일 재현) 해리가 제시한 인용 URL 8건을 원문 직접 대조할 수 없었습니다. 이에 따라 사실관계는 확정하지 못했고, 대신 출처 형식만으로 판별 가능한 이상 정황 2건을 발견했습니다.

- `arxiv 2604.23178`이 서로 다른 3개 주장(양분전략/confounder-aware aggregation/IRT 적용)에 반복 인용됨 — 동일 단일출처 과다재사용은 환각 산출물의 전형적 패턴이라 세부기법(confounder-aware aggregation, IRT) 신뢰도 낮음
- `claude.com/blog/best-practices-for-prompt-engineering` — Anthropic 공식 문서 경로(`docs.claude.com` 계열)와 불일치, 출처로서 신뢰도 낮음(JSON schema 강제 출력 자체는 일반적으로 알려진 사실이나 이 출처로는 채택 불가)
- 나머지 6건(futureagi, confident-ai, inflectra, medium, anhtu.dev)은 형식상 그럴듯하나 원문 미대조로 사실 확정 불가

역할(회귀 테스트 리뷰·E2E 검증) 기준으로 신규 채택 가능한 항목은 없다고 판단합니다.

## 오늘 배운 것
- 없음 (원문 대조 불가로 검증 통과한 항목 없음)

## 출처
- 없음 (인용 URL 8건 전부 미검증 — 채택 보류)

## 위키화 후보
- 없음

## 프로필 반영 후보 (저위험)
- 없음

## 승인 필요 (고위험)
- WebFetch/WebSearch 툴 권한이 2026-07-16에 이어 이번 세션도 차단됨을 재확인 — "인용 URL 원문 fetch 대조 필수화" 규칙을 승인하더라도 툴 권한 확보(설정)가 선행되지 않으면 실행 불가능한 상태가 지속됨. 툴 권한 부여 여부 사용자 결정 필요

## 신규 도구 후보 (에이전트/스킬)
- 없음
