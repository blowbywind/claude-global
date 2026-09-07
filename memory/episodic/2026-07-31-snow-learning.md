---
date: 2026-07-31
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-31

## 오늘 배운 것
- 리서치 산출물 10건 중 실제로 원문 대조가 가능했던 항목은 1건뿐입니다(나머지는 도구 권한 차단으로 검증 자체가 불가능했음 — 뒤에 별도 기재).
- MCP 2026-07-28 스펙 변경(직접 원문 확인, 확정 사실): 세션 개념 제거(`Mcp-Session-Id` 핸드셰이크 폐지), stateless 전환, `tools/list` 등 목록 캐싱(`ttlMs`/`cacheScope`), OAuth/OIDC 인가 강화(RFC 9207 `iss` 검증 등), 지원중단 시 최소 12개월 유예기간 보장.
- 단, 눈꽃의 원 보고에 있던 "Apps용 버전드 확장 프레임워크" 부분은 원문에 없는 내용으로 확인되어 **폐기**합니다(원문에 실제 있는 것은 `tasks` 확장과 범용 `extensions` 필드).
- "Claude Opus 5 / Fable 5 출시"(항목4)는 검증 불가였으나, "Fable"이 Anthropic 공식 모델 라인업(Opus/Sonnet/Haiku)에 없는 명칭이라는 점에서 신뢰도가 낮습니다 — 채택하지 않습니다.
- 나머지 항목(SDK 다운로드 수치, Claude Code 업데이트, ADK Go 2.0, MS Agent Framework, arXiv 논문 2건, Atlassian/HubSpot 소식)은 이번 턴에는 원문 대조가 물리적으로 불가능했으므로 전부 **보류(미채택)** 처리합니다. 내용이 틀렸다는 뜻이 아니라 "확인 안 됨"입니다.

## 출처
- [MCP Specification Changelog 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/changelog) — 직접 원문 확인

## 위키화 후보
- MCP stateless core 전환(세션 제거·`tools/list` 캐싱·12개월 지원중단 유예)을 향후 봇-MCP 연동 설계 시 참고할 개념 노트 후보로 남깁니다(원문 검증 완료분만).

## 프로필 반영 후보 (저위험)
- 없음(이번 턴 확정 사실은 MCP 프로토콜 세부사항으로 오케스트레이션 어휘 갱신에는 해당하지 않음).

## 승인 필요 (고위험)
- 검증 담당(제 역할)의 WebFetch/WebSearch/Bash 권한이 이번 세션에서도 전면 차단되어 리서치 산출물의 90%를 대조 검증하지 못했습니다. 동일 패턴이 2026-07-16/07-22/07-29에 이어 이번(07-31)까지 반복 확인되었습니다. `update-config` 스킬로 검증 역할 툴 권한을 일관되게 부여할지 사용자 확인 후 처리 제안합니다.

## 신규 도구 후보 (에이전트/스킬)
- 없음(기존 출처-대조-검증기-개선안으로 충분하나, 권한 문제 해결이 선행되어야 실효성 있음).
