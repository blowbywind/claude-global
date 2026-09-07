---
date: 2026-08-26
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-26

## 검증 요약

리안 제출 리서치 10개 항목 중 6개(①②③⑤⑥⑨)는 출처가 `releasebot.io` 또는 `deploymentsafety.openai.com`으로, 두 도메인 모두 기존 위키 필터(`리서치-환각-패턴-목록`, 2026-08-20/21 확정)에 이미 "비1차/의심 도메인"으로 등재되어 있어 폐기했습니다. 이번 세션 자체 검증(WebFetch)도 `code.claude.com`(공식) 외 모든 외부 도메인(releasebot.io, deploymentsafety.openai.com, antigravity.google)에서 권한 거부되어 독립 재확인이 구조적으로 불가했습니다(WebSearch도 전면 거부).

## 오늘 배운 것
- Claude Code 8월 업데이트 확인(공식 `code.claude.com/docs/en/whats-new` 직접 fetch로 재검증, 리안 원 출처보다 신뢰도 상향): Week32(8/3~7) 크로스세션 메시징(macOS/Linux)·Auto mode 8/14 기본화, Week34(8/17~21) `/design` 스킬(스크린샷→편집가능 UI)·Concise 출력 스타일. 리안 항목4는 채택.
- Sonnet 5 가격 프로모션 종료일(기존 인사이트 2026-08-06 "08-31") 정정 주장(리안 항목1)은 출처가 폐기 대상 도메인(releasebot.io)이라 **미채택** — 기존 인사이트($3/$15 정가 전환, 08-31) 유지, 정정 보류.
- Opus 5 effort 사다리 max 등급, Fable 5/Mythos 5 mid-conversation tool changes 베타(항목2·3)도 동일 사유로 미채택.
- GPT-5.6 Sol/Luna 8월 업데이트(항목5)는 리안이 "1차 소스 직접 fetch 검증 완료"로 표기했으나, 출처 도메인(`deploymentsafety.openai.com`) 자체가 기존 필터에 "공식 표준 패턴 불일치·사전 의심 대상"으로 명시된 도메인이라 재검토 필요 — 미채택.
- Antigravity `/effort` 명령·Gemini 3.7 Flash(항목7·8)는 도메인(`antigravity.google`) 자체는 의심 목록에 없으나, 이번 세션 권한 거부로 독립 재확인 불가 — 잠정 보류(다음 세션 재검증 권장).

## 출처
- [What's new — Claude Code](https://code.claude.com/docs/en/whats-new) (직접 fetch 검증)
- [리서치 환각 패턴 목록 필터](obsidian: concepts/리서치-환각-패턴-목록-필터에-releasebot-io-aitoolsrecap-com-gr.md) (2026-08-21)

## 위키화 후보
- (신규 없음 — 기존 도메인 신뢰도 필터의 유효성이 이번 세션(항목1,2,3,5,6,9 전량 폐기)으로 재확인됐다는 사실은 기존 노트에 사례 추가만 권장)

## 프로필 반영 후보 (저위험)
- Claude Code Week32~34 기능(크로스세션 메시징, `/design`, Concise 스타일, Auto mode 8/14 기본화)만 채택 반영

## 승인 필요 (고위험)
- WebFetch/WebSearch 권한이 이번에도 외부 도메인 전반에서 거부(공식 `code.claude.com`만 통과)됨 — 07-16/07-22/07-29/07-30에 이어 5번째 재발입니다. 기존 제안된 "리서치-검증-권한-정합기" 에이전트 도입 여부를 사용자님 확인 요청드립니다.

## 신규 도구 후보 (에이전트/스킬)
- [agent] 리서치-검증-권한-정합기 — 리안(웹리서치)과 저(검증) 간 WebFetch/WebSearch 권한 비일관성을 settings.json 레벨에서 통일 점검(5회 반복 확인, `update-config` 스킬 연계 제안)
