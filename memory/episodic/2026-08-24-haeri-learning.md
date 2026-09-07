---
date: 2026-08-24
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-24

## 오늘 배운 것
- BenchAlign v5.2(2026-08-05 기준): 381개 벤치마크 중 27개를 가중 합성점수로 산출, 상위권 리더보드가 0.5점 이내로 압축됨 — 원문 대조(wget) 확인 완료
- MMLU/MMLU-Pro는 프론티어 모델 기준 88% 이상에서 사실상 포화되어 상위권 점수 차이가 통계적으로 무의미 — 원문 대조 확인 완료
- OSWorld 2.0(2026-06-26 공개)이 기존 OSWorld-Verified(인간 기준 초과로 "해결" 판정됨)를 대체, 108개 장기수행 워크플로(숙련 인간 기준 median 1.6시간)로 재설계 — 원문 대조 확인 완료
- Claude Opus 5 실존은 위키 기존 다건 노트(claude-opus-5-claude.md 등)와 일치, 신규 정보 아닌 재확인 사항
- **[정정]** 데이터 파이프라인 원문(dataforest.ai)은 "배치=스트리밍의 부분집합"이 아니라 "2026년 배치 vs 스트리밍 이분법 논쟁 종료, 엔터프라이즈는 양쪽 다 필요(하이브리드)"라고 서술 — 리서치 산출물의 "배치=스트리밍 부분집합" 표현은 원문 왜곡, 그대로 채택 불가
- **[폐기]** 아래 4건은 원문 대조 결과 근거 불충분: ①"엔터프라이즈 에이전틱 37%p 격차"(medium 원문 접근 차단, 미검증) ②claude.com 프롬프트엔지니어링 글의 "버전관리·예산화 아티팩트/20케이스 평가셋" 표현(원문에 해당 서술 없음 — URL은 실재하나 주장 오귀속) ③inflectra 글의 "OWASP 1위 유지/추론보안 시장 급성장"(원문에 해당 서술 없음 — 오귀속) ④레이크하우스 Hot/Warm/Cold + RisingWave(medium 원문 접근 차단, 미검증)

## 출처
- [BenchAlign v5.2 리더보드](https://www.gmicloud.ai/en/blog/ai-model-benchmarks-august-2026-open-weight-models-catch-the-frontier)
- [AI 벤치마크 가이드 2026 — MMLU 포화](https://kili-technology.com/blog/ai-benchmarks-guide-the-top-evaluations-in-2026-and-why-theyre-not-enough)
- [OSWorld 2.0 재설계](https://o-mega.ai/articles/top-50-ai-model-evals-full-list-of-benchmarks-october-2025)
- [데이터 파이프라인 아키텍처 2026 (정정 인용)](https://dataforest.ai/blog/architecting-the-modern-data-pipeline)

## 위키화 후보
- BenchAlign v5.2 벤치마크 방법론(381개 중 27개 가중합성) — 위키에 부재, 모델평가 노트군에 추가 가치
- OSWorld 2.0 장기수행 에이전트 평가 재설계(2026-06-26) — 위키에 OSWorld 관련 노트 없음, 신규 가치

## 프로필 반영 후보 (저위험)
- MMLU/MMLU-Pro 88% 포화 인사이트: 모델 비교 시 상위권 벤치마크 점수차를 판단 근거로 쓰지 않기(통계적 무의미 구간)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기(wget 폴백)" 유효성이 이번 세션(8건 중 4건 확인/4건 폐기)에서도 재확인됨. 신규 제안 추가 없이 기존 승인 대기 건 유지)
