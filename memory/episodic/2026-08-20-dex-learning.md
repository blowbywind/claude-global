---
date: 2026-08-20
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-08-20

## 오늘 배운 것
- **MCP tool poisoning(도구 오염)**: 도구 설명·파라미터 스키마에 악성 지시문을 은닉해 에이전트 행동을 유도하는 공격 기법. 위키 `wiki/concepts/` 및 `owasp-mcp-top-10.md` grep 결과 별도 노트 없음 — 신규 개념으로 확인.
- MCP의 OAuth 2.1/RFC 9728 기반 인증 요구는 기존 위키(`mcp-http-권한-모델.md`, 2026-07-28 roun 학습)에 이미 정리돼 있어 신규성 낮음 — 이번 리서치가 언급한 "2025-11-25 스펙판" 표기·mTLS 세부는 WebFetch 차단으로 원문 대조 못해 미검증 처리, 재확인용으로만 참고.
- Fastify v6는 2026-07-31 기존 노트("v6 로드맵 미확인")의 후속 진행으로, GitHub 마일스톤이 진행 중(GA 아님, v5.x 계속 안정판 유지)이라는 방향은 기존 체크리스트와 일치 — 정확한 76% 수치는 이번 세션에서 직접 확인 못해 참고용.
- Node.js 24 LTS 최신 패치가 v24.19.0(2026-08-03)이라는 갱신은 기존 "Node 24 현재 LTS" 사실(2026-07-18 기록)과 시계열상 일치.

## 출처
- [Wiz — Model Context Protocol (MCP) Security](https://www.wiz.io/academy/ai-security/model-context-protocol-security)
- [Practical DevSecOps — MCP Security Vulnerabilities](https://www.practical-devsecops.com/mcp-security-vulnerabilities/)
- [GitHub fastify/fastify Milestone #6](https://github.com/fastify/fastify/milestone/6) (수치 미검증, 방향성만 참고)
- [GitHub nodejs/node v24.19.0 Release](https://github.com/nodejs/node/releases/tag/v24.19.0) (코드명 미검증, 버전 넘버만 참고)

## 위키화 후보
- MCP tool poisoning(도구 오염) — OWASP MCP Top 10과 별개 벡터로 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- Fastify v6는 아직 GA 아님(마일스톤 진행 중) — 기존 "Fastify v5 유지" 체크리스트에 진행상황만 경량 갱신.
- Node.js 24 LTS 최신 패치 v24.19.0로 버전 인지 갱신(기존 "Node 24=현재 LTS" 사실과 연결).

## 승인 필요 (고위험)
- 이번 검증 세션에서도 WebFetch 권한이 거부되어(ToolSearch로 스키마는 로드됐으나 호출 시 차단) 원문 대조 검증을 위키 교차확인 수준으로만 수행했습니다. 07-16/07-22/07-29/07-30에 이어 재발 — `update-config` 스킬로 권한 설정 원인(settings.json 스코프)을 점검하실 것을 권합니다.

## 신규 도구 후보 (에이전트/스킬)
(없음 — 동일 사안의 에이전트 후보가 이미 4회 이상 중복 제안되어 있어 추가 제안 대신 위 승인 필요 항목으로 에스컬레이션함)
