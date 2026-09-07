---
date: 2026-07-27
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-27

## 오늘 배운 것
- Anthropic 현행 라인업(Fable 5·Mythos 5·Opus 5·Sonnet 5·Haiku 4.5, legacy: Opus 4.8/4.7/4.6·Sonnet 4.6/4.5, Opus 4.1 2026-08-05 은퇴)은 `platform.claude.com` 1차 소스 직접 fetch로 재확인 완료 — 기존 위키 노트와 일치, 변경 없음
- **정정 필요**: 리서치가 주장한 "Opus 5·Sonnet 5 2026-07-24 동시 출시"는 근거 부족. Claude Code 공식 whats-new 1차 소스 확인 결과 **Sonnet 5는 Week27(2026-06-29~07-03)에 이미 Pro/Team Standard/Enterprise 기본모델로 전환**됐으며, Opus 5는 그 이후 별도 시점 출시 — 동시 출시 프레이밍은 폐기, "Sonnet5 선행·Opus5 후행" 순서로 정정
- Claude Code 최근 주간 업데이트(Week24~29, `code.claude.com/docs/en/whats-new` 1차 확인): 백그라운드 서브에이전트 기본 실행 전환, 서브에이전트 재귀 스폰(5단계 캡), artifacts의 MCP 커넥터 연동 — 리서치의 "서브에이전트 개선" 주장과 방향 일치(세부문구는 원문과 다름, 취지는 확인됨)
- MCP 2026-07-28 스펙 대규모 개정(세션리스 전환 등) 및 OpenAI Codex·Google Antigravity 관련 주장은 이번 세션 도구 권한 제약(해당 도메인 WebFetch 거부)으로 1차 소스 직접 검증 실패 — 출처 URL만 존재, 내용 대조 미완료 상태로 보류(폐기 아님, 재검증 대기)
- 리서치 수신 규칙 강화 근거 확보: "URL 실존해도 동시성·시점 등 세부 프레이밍은 1차 소스로 재대조 필수" — 오늘 사례가 실제 오류 적발 사례

## 출처
- [Claude 모델 개요](https://platform.claude.com/docs/en/about-claude/models/overview) — 직접 fetch 확인
- [Claude Code What's new](https://code.claude.com/docs/en/whats-new) — 직접 fetch 확인
- (미검증 보류) MCP RC 블로그, axios/9to5mac Opus 5 기사, OpenAI/Google 관련 기사 — 도구 권한으로 이번 세션 미확인

## 위키화 후보
- `code.claude.com/docs/en/whats-new`를 Claude Code 정기 추적 1차 소스로 등록(주간 디지스트, 신뢰도 높음)

## 프로필 반영 후보 (저위험)
- 리서치 폐기 필터에 "동시 출시/날짜 프레이밍은 개별 1차 소스로 재확인" 항목 추가

## 승인 필요 (고위험)
- WebFetch가 axios.com·blog.modelcontextprotocol.io·theregister.com 등 뉴스/블로그 도메인에서 권한 거부됨(검증 역량 구조적 제약) — 도메인 허용범위 점검 필요 여부 확인 요청

## 신규 도구 후보 (에이전트/스킬)
- (없음, 기존 "출처-대조-검증기" 에이전트로 대응 가능)
