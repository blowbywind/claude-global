---
date: 2026-08-04
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-04

## 검증 요약

해리 리서치 산출물을 위키 기존 노트와 대조하고, 직접 WebFetch/WebSearch로 재검증을 시도한 결과입니다.

**중요 발견**: 리서치 결과 말미에 "이번 세션은 WebFetch/WebSearch가 정상 작동함을 확인"이라고 명시했으나, 제 검증 세션에서 동일 URL 3건(arXiv 2512.22245, pymnts.com, hai.stanford.edu)에 WebFetch를 시도한 결과 전부 `permissions not granted` 오류로 즉시 차단됐고, WebSearch도 동일하게 차단됐습니다. 리서치 단계와 검증 단계의 툴 권한이 세션 내에서도 일치하지 않을 수 있음을 보여주는 사례이며, 원문 대조를 통한 사실관계 확인은 이번에도 불가능했습니다.

## 오늘 배운 것
- 데이터 파이프라인: 메달리온 아키텍처(bronze/silver/gold) + 배치·스트리밍 하이브리드 표준화 — 기존 위키 노트(`메달리온-아키텍처-bronze-silver-gold.md`, 2026-07-14)와 동일 출처(dataforest.ai)로 **신규 아님(중복 확인)**.
- 평가 전략이 "결정론적 포맷 체크 + 다중모델 합의(ChainPoll류) + 전용 할루시네이션 탐지"로 계층화되는 추세 — 기존 judge 신뢰도 정량화 노트(2026-07-18)와 방향성 일치, 보완 정보로 채택 가능.
- 프롬프트 엔지니어링: Anthropic 공식 채널 기준 "암묵적 추론 기대 대신 명시적 서술" 권고 — 출처 도메인(claude.com/blog) 자체는 신뢰 가능하나 이번 세션엔 원문 재대조 못함.
- [보류] NIST AITE 블라인드 평가 프로그램, arXiv 2512.22245(judge 캘리브레이션 linear probe) — 매우 구체적인 신규 수치·식별자 주장인데 원문 대조 불가. 사실로 채택하지 않음.
- [폐기 동의] "GPT-5.6 Luna/Sol/Terra·Qwen3.8 Max·Claude Fable 5" 모델명 클러스터 — 해리 리서치가 자체 폐기 처리한 판단에 동의(2026-07-22 인사이트와 동일한 환각 패턴 재확인).

## 출처
- [Dataforest - Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) (기존 위키 노트와 중복 확인)
- [Anthropic - Best Practices for Prompt Engineering](https://claude.com/blog/best-practices-for-prompt-engineering) (도메인 신뢰, 원문 미대조)
- ※ NIST/Stanford AI Index/arXiv 2512.22245/Kili Technology 4건은 원문 대조 실패로 출처 목록에서 제외(참고용 링크는 위 "보류" 항목 참조)

## 위키화 후보
(없음 — 핵심 주장 대부분 기존 노트와 중복이거나 미검증 상태)

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "평가 계층화(결정론적 체크+다중모델 합의+전용 할루시네이션 탐지)" 관점 추가 — 기존 2026-07-18 인사이트 보강 성격으로 저위험.

## 승인 필요 (고위험)
- (2026-07-16/07-22 제안 반복, 오늘로 재확인) WebFetch/WebSearch 툴 권한이 검증 세션에서 또다시 차단되었고, 동일 세션 내 리서치 단계 완료보고("정상 작동")와도 상충함. "인용 URL 원문 fetch 대조 필수화" 규칙 채택 여부와 별개로, 툴 권한 자체를 역할·세션 간 통일할지 사용자 결정 필요.

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존에 등록된 "출처-대조-검증기", "리서치-검증-권한-정합기" 후보로 충분히 커버됨, 중복 제안 생략)
