---
date: 2026-08-17
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-17

## 오늘 배운 것
- **HalluJudge (FSE 2026)**: reference-free 방식으로 코드리뷰 맥락의 문맥 불일치·할루시네이션을 탐지하는 신규 기법 — 원문 fetch로 "HalluJudge", "Reference-Free" 표기 직접 확인, 검증 완료.
- **"Illusion of Progress" 비판 논문**: 기존 할루시네이션 탐지기법 대비 응답 길이(response length) 기반 단순 휴리스틱이 성능상 큰 차이 없다는 비판적 재평가 — 원문 fetch로 "Illusion of Progress", "response length" 확인, 검증 완료. 회귀 테스트에서 "정교한 판정 프롬프트가 실제로 단순 휴리스틱보다 나은가" 재검토 지표로 참고 가치 있음.
- **Self-consistency 프롬프팅**: 다중 추론경로 생성 후 최빈 답 채택 방식, 산술·상식 추론에 효과적 — 원문(k2view.com) fetch로 "Self-consistency" 표기 확인, 검증 완료.
- 프롬프트 엔지니어링 "일반 vs 프로덕션 컨텍스트 엔지니어링" 분화 주장은 출처(thomas-wiegold.com) 자체는 검증됐으나, 위키 `context-engineering.md`(2026-06-07)가 동일 구분(프롬프트=입력 최적화 vs 컨텍스트=시스템 전체 설계)을 이미 보유 — **중복으로 폐기**.
- 다음 3건은 출처(medium.com)가 봇 차단(HTTP 403)으로 원문 대조 **실패** — 특히 "HealthBench 48,562 루브릭/262명/26개국/60개 전문분야", "LLM-as-Judge 인간 대비 80~90% 일치·500~5000배 저비용", "체계적 평가 도입 시 장애 60% 감소" 등 구체 수치가 다수 포함돼 있어 `ai-리서치-결과-검증-프로토콜.md`(도메인 루트가 아닌 구체 경로지만 원문 미확인) 기준상 **채택 보류**. 특히 60% 장애감소·80~90% 일치율은 정밀 수치라 미검증 상태로 유포 시 위험.
- 데이터 파이프라인 "AI 에이전트가 멱등성 처리를 자동으로 구현" 주장은 출처(dataforest.ai) 원문 fetch 결과 "idempoten*" 문자열 자체가 본문에 없어 **근거 미확인 — 폐기**(리서치 봇의 과잉 해석 추정).
- 모델 릴리스 4건(Qwen3.8-27B/GLM-5.3/Qwen3.8-Max/Grok 4.5)은 리서치 봇이 이미 위키의 "1차 환각 의심 패턴"으로 자체 보류 처리 — 검증자 입장에서도 동일 판단, 채택 보류 유지에 동의.

## 출처
- [HalluJudge / Illusion of Progress 원문 확인 — arXiv 2601.19072](https://arxiv.org/html/2601.19072)
- [Illusion of Progress — arXiv 2508.08285v2](https://arxiv.org/html/2508.08285v2)
- [Self-consistency 프롬프팅 — k2view.com](https://www.k2view.com/blog/prompt-engineering-techniques/)

## 위키화 후보
- HalluJudge(reference-free 코드리뷰 할루시네이션 탐지) — 회귀 테스트 리뷰 체크포인트에 참고 기법으로 신규 개념 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 회귀 테스트 리뷰 체크포인트에 "self-consistency 프롬프팅(다중 추론경로 최빈값 채택)" 용어 추가 — 산술·추론 테스트케이스 설계 시 참고.
- 회귀 테스트 리뷰 체크포인트에 "'Illusion of Progress' 관점: 정교한 할루시네이션 탐지기법 vs 응답길이 휴리스틱 성능 비등 비판" 용어 추가 — 판정 로직 검토 시 과신 방지용.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기-wget-폴백-내장" 후보로 충분히 커버됨. 이번 세션에서도 WebFetch 미시도 소스 5건 중 4건을 wget 폴백으로 성공 대조, 1건(medium.com)은 봇 차단으로 실패 — 기존 제안의 유효성 재확인.)
