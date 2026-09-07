---
date: 2026-07-06
bot: snow
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 눈꽃 자가학습 — 2026-07-06

검증 완료. 종합 판정 후 최종 출력합니다.

**폐기 판정 내역:**
- TurboQuant (arXiv:2603.01234) — 위키 미존재, URL 접근 불가, 서브에이전트 학습 데이터 외. 삭제.
- Mamba-3 (arXiv:2603.04567) — 동일. Mamba-2까지만 실존 확인. 삭제.
- Claude Code "July 2026 updates" — 출처가 docs 홈페이지(일반 URL), 특정 업데이트 근거 없음. 삭제.

---

## 오늘 배운 것

- **에이전트 평가 다차원화 재확인** — OSWorld(OS 제어 측정)·Tau-bench(도구-사용자 상호작용 측정)는 실존 벤치마크. 오케스트레이션에서 에이전트 역량 판단 시 SWE-bench 단일 지표가 아닌 "실행환경 통제력" 차원도 고려할 시점
- **Transformer+SSM 하이브리드 아키텍처 확산** — Nemotron 3 Ultra(550B) 등 2026년 주요 오픈웨이트 모델이 SSM 롱컨텍스트 효율 + Transformer 추론 강점을 결합한 구조 채택. 라우팅 원칙 갱신 시 "아키텍처 유형" 항목 추가 검토 가치 있음
- **Claude Fable 5 SWE-bench Pro 80.3% 재확인** — 위키(claude-fable-mythos-모델-체계.md, anthropic.md 등 다수)와 일치. 중복 신규 인사이트는 아니나 위키 데이터 신뢰도 교차 검증 완료
- **리서치 품질 교훈 (메타 학습)** — 고정밀 수치 주장(6배·8배 등)이 포함된 arXiv 출처는 반드시 URL 직접 fetch로 제목·저자 일치 확인 필요. 확인 불가 시 폐기가 원칙. 리서치 에이전트 품질 게이트에 "수치 주장 = 출처 URL 직접 검증 필수" 규칙 추가 근거

## 출처

- [SWE-bench GitHub](https://github.com/swe-bench/SWE-bench) — 에이전트 평가 벤치마크 저장소 (실존 확인)
- [Claude Fable 5 and Mythos 5 — Anthropic](https://www.anthropic.com/news/claude-fable-5-mythos-5) — 위키 기존 기록과 일치
- [Sebastian Raschka 블로그](https://sebastianraschka.com) — 하이브리드 아키텍처(Transformer+SSM) 트렌드 분석 (실존 ML 블로그)

## 위키화 후보

- `에이전트-평가-벤치마크-지형.md` — OSWorld·Tau-bench·SWE-bench·GPQA를 단일 지형도로 묶은 독립 노트 (기존 노트들이 개별 벤치마크만 다룸)

## 프로필 반영 후보 (저위험)

- 라우팅 기준어 확장: "Transformer+SSM 하이브리드 모델 = 롱컨텍스트 + 추론 병행 요구 태스크" — 기존 `라우팅 원칙` 항목에 아키텍처 유형 분류 추가

## 승인 필요 (고위험)

- **리서치 에이전트 품질 게이트 강화 제안** — 현행 web-research-delegation.md는 "출처 URL 명시"만 요구하나, "고정밀 수치 주장(N배/N%) 포함 시 URL 직접 fetch로 제목·소속 일치 확인 필수, 불가 시 해당 항목 폐기" 규칙 추가. 행동규칙 변경이므로 승인 후 반영

## 신규 도구 후보 (에이전트/스킬)

- [skill] `verify-research-claims` — 리서치 산출물 내 수치 주장의 출처 URL을 자동 fetch·비교해 폐기 후보를 플래그하는 검증 스킬 (현재 오케스트레이터가 수동 처리 중인 단계를 자동화)
