---
date: 2026-07-11
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-11

## 검증 결과 요약

이번 세션은 WebFetch/WebSearch가 전면 차단되어(직접 시도 및 위임 에이전트 모두 권한 거부, curl/wget도 차단) 실시간 URL 접속 검증이 불가능했습니다. 따라서 기존 위키의 검증 프로토콜(`ai-리서치-결과-검증-프로토콜.md`, `리서치-환각-패턴-목록.md`)에 기반한 휴리스틱 교차검증을 적용했습니다. 그 결과 8개 주장 중 6개를 환각/미검증으로 폐기했습니다.

- **폐기(고신뢰 환각 패턴)**: "Claude Sonnet 5" 상세 스펙(가격·토크나이저)·"GPT-5.6 Sol/Terra/Luna"·"Grok 4.5 vs Sonnet 5" 비교 3건 — 위키 프로토콜에 Anthropic·OpenAI 실제 모델명 규칙과 불일치("Sol/Terra/Luna" 서브티어 미존재, "Sonnet 5" 세부기능은 기존에도 반복 관측된 환각 패턴)로 명시적으로 등재된 사례와 일치. 출처 도메인(benchlm.ai, aireiter.com)도 위키 어디에도 전례 없는 미상 도메인.
- **폐기(미검증 출처)**: ICML 2026 디퓨전 수상, GLM-5.2 추격론(둘 다 fueler.io — 미상 블로그, 원문 확인 불가), GitHub Copilot·Claude Code 점유율(uvik.net), Cursor 엔터프라이즈 매출(digitalapplied.com) — 모두 1차 출처(공식 발표·Gartner·언론)가 아닌 미검증 블로그이며, 특히 후 2건은 비상장사 정밀 재무/점유율 수치를 근거 없이 제시해 조작 위험 높음.
- **채택**: Gartner 시장 규모 보고서 1건만 — Gartner는 위키에 기존에도 신뢰 출처로 사용된 이력(`agent-finops.md`, `concepts-cnapp-md.md`) 있고, URL 형식이 Gartner 공식 프레스릴리즈 관례와 일치. 단, 이번 세션에서 원문 내용 실접속 대조는 못 했음을 명기.
- 참고: GLM-5.2 자체의 실재·경쟁력은 이미 2026-06-21 위키(`glm.md`)에 별도 검증된 사실이라 신규 학습은 아님.

## 오늘 배운 것
- Gartner 발표(2026-05-20): 엔터프라이즈 AI 코딩 에이전트 시장이 연환산 약 $98억~110억 규모(2026-04 기준)로 확장 국면 진입, 코딩/SW개발 부문이 2025~2030 CAGR 52.4%로 시장 내 최고 성장률로 전망됨. (원문 실접속 미확인, URL 형식·발신처 신뢰도 기준 잠정 채택)
- 이번 세션에서 수신된 "Claude Sonnet 5 상세 스펙", "GPT-5.6 Sol/Terra/Luna", "Grok 4.5 vs Sonnet 5 벤치마크" 주장은 실존하지 않는 모델명/서브티어로 판단되어 전량 폐기(위키 기존 환각 패턴과 일치).
- ICML 2026 수상 내역, GLM-5.2 신규 주장, GitHub Copilot/Claude Code 점유율, Cursor 매출 비중 주장은 출처가 미상 블로그이거나 정밀 비공개 수치를 1차 출처 없이 제시해 신뢰도 미달로 폐기.

## 출처
- [Gartner Says the Market for Enterprise AI Coding Agents Is Entering a New Phase of Expansion and Competitive Realignment](https://www.gartner.com/en/newsroom/press-releases/2026-05-20-gartner-says-the-market-for-enterprise-ai-coding-agents-is-entering-a-new-phase-of-expansion-and-competitive-realignment) (원문 실접속 미확인, 형식 신뢰 기준 잠정 채택)

## 위키화 후보
- 없음 (검증된 신규 사실이 시장규모 수치 1건뿐이라 별도 개념 노트보다는 기존 시장동향 노트에 병합 권장, 병합은 원문 재확인 후 진행)

## 프로필 반영 후보 (저위험)
- 없음

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (다만 운영 이슈로 별도 보고: 현재 이 오케스트레이터 세션은 WebFetch/WebSearch 권한이 없어 리서치 산출물의 실시간 URL 검증이 구조적으로 불가능합니다. 권한 부여 여부를 확인 부탁드립니다.)
