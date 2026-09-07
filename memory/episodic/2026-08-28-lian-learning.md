---
date: 2026-08-28
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-28

## 오늘 배운 것
검증 결과, 오늘 리안이 제출한 리서치 항목 대부분이 **비1차 출처(releasebot.io·gradually.ai·benchlm.ai) 단일 소스**였고, 저(검증 담당) 역시 이번 턴 WebFetch·WebSearch 권한이 거부되어 직접 대조가 불가능했습니다. 따라서 "확정 학습"이 아닌 "미검증 참고" 수준으로만 아래를 남깁니다.

- Claude in Chrome GA 출시(2026-08-26 추정), Cowork 브라우저 기능 추가 — releasebot.io 단일출처, 직접 대조 불가로 미검증
- MCP 신규 스펙(2026-07-28, stateless core·OAuth/OIDC 강화) 지원 확대 — 단일출처, 미검증
- Antigravity GEMINI_API_KEY 직접인증 지원, 2.11.0 HTML 아티팩트 인라인 렌더링 — 단일출처, 미검증
- Sonnet 5 프로모션가($2/$10) 영구화·인상철회 주장 — **채택 보류**. 기존 확정 인사이트(2026-08-06, 인상일 09-01)와 상충하며 1차 출처(anthropic.com) 대조 실패. 09-01 임박 시 공식 문서로 재확인 필요.

### 폐기(불채택) 항목
- **GPT-5.6 Sol/Terra/Luna 패밀리 및 관련 가격 인하 주장** — "이례적 코드네임+비공식 매체" 환각 패턴(2026-07-29/07-30 인사이트에서 이미 이 정확한 코드네임을 실제 환각 사례로 지적)과 100% 일치. 리안이 "openai.com 공식 도메인" 확인을 주장했으나 실제 fetch는 실패(403)했고, 이번 검증에서도 재확인 불가 — 전체 폐기.
- **Gemini "3.6/3.7 Flash"** — 리안 자신도 의심 표시. 동일 패턴으로 폐기.
- **Qwen3.8 Max PaperBench 93%** — "소수점 버전 명명=환각 의심" 필터 해당(Alibaba Qwen 계열에 "3.8" 버전 실존 확인 불가), 출처(benchlm.ai)도 신뢰도 낮음 — 폐기.

## 출처
- (모두 비1차/미검증 — 정식 채택 보류. 참고용) https://releasebot.io/updates/anthropic , https://releasebot.io/updates/anthropic/claude-developer-platform , https://www.gradually.ai/en/changelogs/antigravity/ , https://releasebot.io/updates/google/antigravity

## 위키화 후보
- 없음(오늘 항목 전부 미검증 또는 폐기 — 위키 반영 보류)

## 프로필 반영 후보 (저위험)
- 없음

## 승인 필요 (고위험)
- WebFetch/WebSearch 권한 거부가 이번 턴에도 재발(2026-07-16/07-22/07-29/07-30에 이어 5번째+)했습니다. 검증 역할(저)이 구조적으로 1차 출처 대조를 못 하는 상태가 반복되고 있어, 기존 제안된 "리서치-검증-권한-정합기" 에이전트 또는 검증 전용 WebFetch 권한 부여를 사용자 확인 후 `update-config` 스킬로 처리하는 안을 다시 상정드립니다.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 출처-대조-검증기 — 기존 후보 재확인. 이번에도 리안 제출본 9건 중 3건(GPT-5.6군, Gemini 3.6/3.7, Qwen3.8)이 패턴매칭만으로 폐기 판정됐는데, 검증자 WebFetch 권한이 살아있다면 실제 원문 대조로 더 정밀한 판정이 가능했을 사안입니다.
