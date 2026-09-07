---
date: 2026-07-30
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-07-30

## 오늘 배운 것
- **Anthropic 모델 라인업 정정(공식문서 직접 fetch 검증)**: 현행 세대는 Fable 5(`claude-fable-5`, 최고성능)/Opus 5(`claude-opus-5`, 실용 최상위)/Sonnet 5(`claude-sonnet-5`)/Haiku 4.5(`claude-haiku-4-5-20251001`). **Opus 4.8은 legacy로 강등**(여전히 사용 가능) — 기존 자가학습 인사이트(2026-07-02 "현행=Fable5/Opus4.8/Sonnet5/Haiku4.5")는 정정 필요.
- **Claude Mythos 5(`claude-mythos-5`) 확인**: Fable 5와 동일 스펙, Project Glasswing 초청제(방어적 사이버보안 전용)로 공식문서에 실재. 단 리서치 주장 중 "안전 분류기 제거"는 공식문서 원문에 없어 **폐기**.
- **Opus 4.1(`claude-opus-4-1-20250805`) 은퇴 확인**: 2026-08-05 은퇴, Opus 5 마이그레이션 권고 — 공식 경고문 확인.
- **Microsoft Agent Framework 1.0**: 2026-04 GA·AutoGen+Semantic Kernel 통합은 기존 위키(2026-06-21, visualstudiomagazine 출처)로 이미 교차검증된 사실과 일치 — 오늘 리서치가 재확인.
- **미확인·보류 처리**: GPT-5.6/Codex 데스크톱 통합, OSWorld 2.0(정확도 20.6%), Mem0 4월 알고리즘 — 이번 세션 검증 에이전트의 WebFetch/WebSearch/Bash 권한이 전부 거부되어 원문 대조 실패("검증불가·접근실패"). 채택 보류.
- **Antigravity 3분할 구조 주장은 폐기**: 기존 위키(2026-07-24, "4-Surface 구조+Gemini 3.5 Flash 전용")와 정면 충돌(오늘 리서치는 "3종 분리+Claude/GPT-OSS 멀티모델"). 상호모순이라 둘 다 재검증 전까지 채택 보류.

## 출처
- [Claude Models overview](https://platform.claude.com/docs/en/docs/about-claude/models/overview) — 직접 fetch 검증(2026-07-30)
- [기존 위키: Microsoft Agent Framework 1.0](https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx)

## 위키화 후보
- Claude Fable 5 / Mythos 5 / Project Glasswing 개념 노트(기존 `claude-opus-5-claude.md`는 Opus 5만 다뤄 중복 아님, 신규 가치 있음)

## 프로필 반영 후보 (저위험)
- 기존 필터("소수점 버전+날짜접미사 없음=1차 환각 의심") 보완: "GPT-5.6"류 명명은 과거 실제 환각 예시(`GPT-5.6 Sol`)와 유사해 특히 의심 강화, 단 공식도메인 직접fetch 성공 시엔 채택 가능함을 이번 검증(Anthropic 사례)으로 확인

## 승인 필요 (고위험)
- 검증 담당(본 역할) WebFetch/WebSearch 권한이 이번 턴 포함 4회째(07-16/07-22/07-29/07-30) 세션마다 비일관 거부되어 대조검증 기능이 사실상 마비 상태입니다. 카탈로그의 `리서치-검증-권한-정합기`(권한 점검) 적용 여부 확인 부탁드립니다.

## 신규 도구 후보
- (없음 — 기존 카탈로그 `출처-대조-검증기`/`리서치-검증-권한-정합기`가 이미 이 문제를 다룸, 신규 제안 대신 기존 항목 실제 적용 승인 요청)
