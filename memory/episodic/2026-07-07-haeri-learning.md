---
date: 2026-07-07
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-07-07

교차 검증 결과를 정리합니다.

**폐기 항목** (검증 안 됨 또는 중복):
- Bento-Box, Jury-of-Judges, Promptfoo/Garak, DeepEval/Braintrust 일반: 이미 프로필([2026-06-24]) 및 위키(bento.md, chain.md)에 기록됨
- mcp-jest / mcpevals: 출처가 `https://github.com/` 경로 없는 일반 URL → 검증 불가, 폐기
- Jury-of-Judges arxiv 출처: 논문 ID 없는 일반 `https://arxiv.org/` → 검증 불가, 폐기

---

## 오늘 배운 것

- **MCP Inspector 공식 CLI 디버거**: `npx @modelcontextprotocol/inspector`로 stdio/SSE MCP 서버 도구 호출 결과를 실시간 대화형 UI에서 직접 검증. 기존 curl 수동 테스트 대비 MCP 통합 검증 속도 단축. (출처: modelcontextprotocol.io 공식 문서)
- **Chain-of-Draft 수치 출처 확정**: arxiv 2502.18600 (2025-02)에서 토큰 75~90% 절감 수치 확인. 위키 `chain.md`의 일반 arxiv 링크를 해당 ID로 보강 가능.
- **비결정적 LLM 에이전트 회귀 평가 기준**: 완전 일치 대신 확률적 점수 구간(예: 허용 범위 0.7~1.0)으로 품질 등락 추이 모니터링. Braintrust는 골든 데이터셋 대비 이전 실험 지표 diff를 제공해 메인 브랜치 회귀 차단. (출처: braintrust.dev)

## 출처

- [arxiv 2502.18600 — Chain-of-Draft: Thinking Faster by Writing Less](https://arxiv.org/abs/2502.18600)
- [Model Context Protocol 공식 — Inspector](https://modelcontextprotocol.io/)
- [Braintrust — AI Evals for CI/CD Pipelines](https://braintrust.dev/)

## 위키화 후보

- `MCP Inspector`: MCP 서버 도구 호출 실시간 검증용 공식 CLI 디버거 — 기존 `mcp-model-context-protocol.md`에 단락 추가 또는 별도 노트

## 프로필 반영 후보 (저위험)

- [2026-06-25] MCP 테스팅 항목에 `npx @modelcontextprotocol/inspector` 구체적 CLI 도구 추가
- [2026-06-24] Regression CI Gate 항목에 "완전 일치 대신 확률적 점수 구간 기준" 운영 방식 보충

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음 — 기존 항목으로 충분)
