---
date: 2026-08-27
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-27

## 오늘 배운 것
- CDC(변경 데이터 캡처)가 트랜잭션 시스템 수집의 표준 방식으로 자리잡았다는 주장은 위키 기존 노트(`cdc-change-data-capture-하이브리드-패턴.md`)와 정합적이라 신뢰도 있게 채택합니다.
- Medallion(bronze/silver/gold) 아키텍처가 표준 변환 구조로 정착했다는 주장도 기존 노트(`메달리온-아키텍처-bronze-silver-gold.md`, `kappa-medallion-하이브리드...`)와 일치해 채택합니다.
- 프롬프트 엔지니어링 → 컨텍스트 엔지니어링/설계로 무게중심 이동 및 "실패 원인은 모델이 아니라 잘못된 컨텍스트"라는 주장은 위키 `context-engineering.md`, `context-intelligence.md`와 일관돼 채택합니다.
- MMLU 포화(88%+)로 벤치마크 변별력 상실·도메인 특화형 파편화 추세는 위키 `mmlu-mmlu.md`, `벤치마크-포화-saturation...md`에 이미 반영된 내용과 부합해 채택합니다.
- LLM-as-judge의 위치 편향(position bias)과 GPT-4 심사자-인간 합치율 80%대 주장은 위키 `judge-shared.md`, `judge-일치도...validity-분리...md` 계열과 방향이 일치하나, 정확 수치(80%대)는 원문 미대조 상태로 "대략적 추정치"로만 채택합니다.

## 검증 후 제외 항목
- "Z.ai GLM-5.3-Flash(8/26)·Google Gemini 3.7 Flash(8/13)·Alibaba Qwen3.8 Max(8/2) 출시" — aireleasetracker.com·llm-stats.com은 JS 렌더링 페이지라 wget 폴백으로도 본문 대조 불가했고, 연구자 본인도 "모델명 재검증 권장"이라 명시했으며, 위키 프로토콜 노트에 기록된 반복적 모델명 환각 패턴과 동일 위험군이라 **폐기**합니다.
- "2026년 8월 신규 모델 12~18건(7~15개 업체)" 집계치도 동일 사유(원문 대조 불가, 어그리게이터 2차 보도)로 **폐기**합니다.

## 출처
- [데이터 파이프라인 설계 패턴](https://dataskew.io/blog/data-pipeline-design-patterns/)
- [데이터 아키텍처/메달리온](https://shipshapedata.com/resources/data-architecture/data-pipeline-architecture/)
- [프롬프트→컨텍스트 설계 진화](https://www.sdggroup.com/en/insights/blog/the-evolution-of-prompt-engineering-to-context-design-in-2026)
- [컨텍스트 엔지니어링 가이드](https://skillscouter.com/context-engineering-guide/)
- [LLM 벤치마크 동향](https://www.lxt.ai/blog/llm-benchmarks/)
- [LLM 벤치마크 방법론·오염·리더보드](https://www.digitalapplied.com/blog/llm-benchmark-methodology-2026-contamination-leaderboard-guide)

## 위키화 후보
- 없음 (핵심 개념 전부 기존 위키 노트와 중복 확인, 신규 노트 불필요)

## 프로필 반영 후보 (저위험)
- "context architect/context design" 용어를 검증 체크리스트 어휘에 반영(프롬프트 검증 시 컨텍스트 결함 관점 추가)

## 승인 필요 (고위험)
- (신규 제안 없음 — 기존 미해결 제안 3건은 인사이트 로그에 이미 누적돼 있어 중복 재기재하지 않음: ①인용 URL 원문 fetch 대조 게이트 강제화 ②WebFetch 실패 시 wget 자동 폴백 채택 ③검증자 역할 WebFetch/WebSearch 권한 통일)

## 신규 도구 후보 (에이전트/스킬)
- [agent] JS렌더링-대응-원문검증기 — wget이 SPA/Next.js 클라이언트 렌더링 페이지에서 본문을 못 가져오는 사각지대를 headless 렌더링(예: playwright)으로 보완하는 검증 전용 에이전트. (오늘 aireleasetracker.com·llm-stats.com에서 wget 폴백도 실패해 신규 실증 사유 추가)

## 완료 보고
- 완료: 위키 사전 중복확인, wget으로 모델명 출시 인용 URL 실제 접근 시도, 검증 결과 기반 채택/폐기 분리, 필수 섹션 출력
- 결과: 부분완료
- 못 한 것: aireleasetracker.com/llm-stats.com이 JS 클라이언트 렌더링이라 wget으로 본문 대조 불가 → 모델명 관련 3건 및 집계 수치 폐기 처리, 원문 완전대조는 미완
- 다음 단계: 헤드리스 브라우저 기반 검증 도구 도입 여부 사용자 확인 필요(위 신규 도구 후보 참고)
