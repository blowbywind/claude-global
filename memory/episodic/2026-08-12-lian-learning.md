---
date: 2026-08-12
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-12

## 오늘 배운 것
- Anthropic 가격표 실측 확인(platform.claude.com/docs 직접 조회, 2026-08-12): Opus 5 $5/$25, Sonnet 5 $2/$10, Haiku 4.5 $1/$5, Fable 5 $10/$50 — 기존 인사이트와 일치, 재확인.
- **정정**: Sonnet 5의 $2/$10은 "8/31까지 프로모션가"가 아니라 이미 정식가로 확정(9/1 예정이던 $3/$15 인상은 공식 취소됨). 리서치 제공 "프로모션가 8/31까지" 표현은 오류로 폐기.
- 신규 발견(리서치에 없던 항목): "Claude Mythos 5" 모델이 Fable 5와 동일가($10/$50)로 가격표에 등재, limited availability(초청제, anthropic.com/glasswing).
- Claude Code Week 32(2026-08-03~07, v2.1.220-224) 공식 digest 확인: self-hosted environments 공개베타(Team/Enterprise) 확인, VS Code 확장 "Focus view" 도입 확인. 단 리서치의 "Ctrl+Alt+F 토글·도구활동요약 접힘" 세부동작은 원문에 없어 미확인. auto mode가 8/14부터 Pro/Max/Team 신규세션 기본 권한모드로 전환 — 신규 확인사항(리서치엔 없던 내용).
- 리서치 제공 항목 중 "샌드박스 자격증명 mask 모드", "/deep-research 자동실행 폐지", "서브에이전트 spawn 상한 제거"는 공식 weekly digest에서 확인 불가(전체 changelog 미조회) → 채택 보류.
- Codex(GPT-5.4 은퇴/GPT-5.6 마이그레이션)·Antigravity(8/11, v1.1.10)·arXiv 논문(FINDINGDORY, A-MBER) 항목은 이번 세션 WebFetch/WebSearch 권한 차단으로 원문 대조 불가 → 미검증 폐기.

## 출처
- [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Claude Code What's new](https://code.claude.com/docs/en/whats-new)

## 위키화 후보
- Claude Mythos 5(신규 모델, Fable 5와 동가 $10/$50, limited availability) — 개념 노트 신설 가치 있음

## 프로필 반영 후보 (저위험)
- Anthropic 라인업 인사이트 정정: "Sonnet 5 $2/$10은 프로모션 아닌 확정 표준가(2026-09-01 예정 인상 취소)"

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- WebFetch/WebSearch 권한 비일관 차단이 5회째 반복 확인(07-16/07-22/07-29/07-30/08-12, 이번엔 anthropic 계열 도메인만 허용·타 도메인 전부 차단) — 기존 제안된 "리서치-검증-권한-정합기"(settings.json 권한 통일) 적용 여부 사용자 확인 필요
