---
date: 2026-08-20
bot: haeri
type: web-research
tags: [self-learning, ML/AI advances, data pipeline patterns, prompt engineering]
---

# 해리 자가학습 — 2026-08-20

## 오늘 배운 것
- wget 폴백으로 인용 URL 5건 중 3건 원문 대조 완료(claude.com 블로그 2건, dataforest.ai 1건). 나머지 3건(Medium LLM평가, digitalapplied.com, Medium 하이브리드 스트리밍)은 검색 5회 한도 소진으로 이번 세션에서 원문 미대조 — 근거 확인 전까지 참고용으로만 취급.
- **오귀속 확인**: claude.com/blog/best-practices-for-prompt-engineering 원문은 "명시적 지시·맥락 제공·구체성·예시·prefill·CoT" 위주이며, 리서치가 인용한 "캐싱 시 비용 최대 90%·지연 85% 절감", "정적 콘텐츠를 앞에 배치" 주장은 이 URL 본문에 없음(다른 Anthropic 캐싱 문서의 수치로 추정). "에이전틱 프롬프트는 결과 중심·Sonnet 4.5 리터럴 수행" 주장도 이 URL에서 확인 불가 — 두 항목 모두 폐기.
- **부분 검증**: XML 태그 구조화 예시는 원문에 실제 존재(신뢰). Kappa/Lambda 관련은 dataforest.ai 원문에 "Lambda 또는 Kappa" 두 옵션 병기만 있고 "Kappa가 기본 선택"이라는 우위 서술은 없음 — 해당 부분은 과장으로 수정.
- 모델 릴리스 주장(Claude 4.6 등)은 리서치봇 자체가 애그리게이터 발 저신뢰로 이미 자체 폐기 처리함 — 검증 결과 타당한 자기수정으로 판단, 그대로 채택.
- 데이터 파이프라인 4대 패턴(배치/실시간/하이브리드, 이벤트기반, 레이크하우스, 데이터메시)은 원문과 대체로 일치 확인.

## 출처
- [Architecting the Modern Data Pipeline](https://dataforest.ai/blog/architecting-the-modern-data-pipeline) — wget 원문 대조 완료
- [Best practices for prompt engineering for 2026](https://claude.com/blog/best-practices-for-prompt-engineering) — wget 원문 대조 완료(일부 주장 불일치 확인)
- [Anthropic News](https://www.anthropic.com/news) — JS 렌더링 페이지라 정적 HTML로는 모델 발표 확인 불가(참고용)

## 위키화 후보
- (없음 — 오늘 발견은 기존 "인용 URL 원문 오귀속" 패턴의 추가 사례일 뿐 신규 개념 아님)

## 프로필 반영 후보 (저위험)
- "통계 수치(%, 절감율) 포함 주장은 인용 URL 원문 grep 대조 우선순위 최상위" 원칙을 검증 체크리스트에 반영(수치 오귀속 오늘도 재발)

## 승인 필요 (고위험)
- (신규 제안 없음 — 기존 대기 항목: wget 폴백 표준 절차 채택, `ai-리서치-결과-검증-프로토콜.md` 자동 대조 게이트 강제화. 오늘 실증 데이터(캐싱 수치 오귀속 1건, Kappa 우위 과장 1건) 추가로 근거 보강됨)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 카탈로그의 "출처-대조-검증기-wget-폴백-내장" 후보로 충분히 대응 가능함을 재확인)
