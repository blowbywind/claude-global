---
date: 2026-08-20
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-20

## 검증 결과 요약

리서치 8건 중 **2건은 인용 출처를 직접 대조한 결과 사실관계가 틀려 폐기**했고, 나머지 다수는 기존 위키(`power.md`, `ai-프레젠테이션-도구-지형-갱신.md`, `anthropic-공식-pptx-스킬...md`, `gamma-imagine...md`)와 중복이라 신규 반영 가치가 낮습니다.

- **ADA 기한 "1년 연장" 주장 폐기**: 인용된 kwallcompany.com 원문을 직접 fetch해 대조한 결과, 본문은 "April 24, 2026(5만 이상) / April 26, 2027(5만 미만)"이라고만 명시하며 연장 언급이 전혀 없음 — 기존 위키(`doj-ada-title-ii-2026.md`)와 동일한 값. 리서치의 "정정"은 오히려 오귀속.
- **폰트 임베딩 "패밀리당 500KB~2MB" 수치 폐기**: 인용된 usecarly.com 원문을 fetch했으나 해당 수치가 본문 어디에도 없음(범용 안내 글). 환각으로 판단.
- **Anthropic pptx 스킬 "2026-07-24 업데이트" 정정**: GitHub 커밋 로그로 직접 대조한 결과 실제 최신 커밋은 **2026-07-17(#1447)**이며, 내용은 날짜만 다른 게 아니라 실질적 신규 정보(템플릿 포맷(.dotx/.potx/.xltx) 지원, office 헬퍼 통합, zip 추출 시 심링크·경로traversal 차단, LibreOffice 샌드박스 프로필화)라 기존 노트(`anthropic-공식-pptx-스킬...md`, curated 07-13) 갱신 가치 있음.
- power-pptx, Gamma Imagine, Beautiful.ai DesignerBot 항목은 각각 기존 위키 노트와 중복이거나(power-pptx 릴리스일 2026-07-12 동일) 신규 속성(Daniel Halwell 메인테이너 등)이 접근 차단으로 미검증 — 반영 보류.

## 오늘 배운 것
- Anthropic 공식 pptx 스킬 최신 커밋은 2026-07-17(#1447)이며, 템플릿 포맷(.dotx/.potx/.xltx) 지원 확장 + zip 추출 시 심링크/경로traversal 차단 + LibreOffice 샌드박스 프로필 도입이 핵심 변경 — 브랜드 템플릿(.potx) 기반 산출물 자동화 시 참고 가치.
- 기존 위키에 이미 반영된 python-pptx/power-pptx, Gamma, ADA 기한, 폰트 임베딩 제약 관련 지식은 이번 리서치로 신규 확인된 것 없이 대부분 중복이거나 오류였음 — 위키 사전 grep 절차가 실제로 중복·환각 방지에 유효함을 재확인.

## 출처
- [anthropics/skills 커밋 로그(pptx SKILL.md)](https://github.com/anthropics/skills/commits/main/skills/pptx/SKILL.md)
- [DOJ ADA Title II 기한 원문(kwallcompany.com, 검증용 재대조)](https://www.kwallcompany.com/2026/06/04/ada-title-ii-website-compliance-deadline/)

## 위키화 후보
- 없음(신규 노트 불필요) — `anthropic-공식-pptx-스킬-anthropics-skills-기능-제약-요약.md` 기존 노트에 07-17 커밋 내용만 보강 권고.

## 프로필 반영 후보 (저위험)
- 없음(이번 라운드는 정정·중복 판정이 중심).

## 승인 필요 (고위험)
- 없음.

## 신규 도구 후보 (에이전트/스킬)
- 이미 후보로 존재하는 "출처-대조-검증기"(URL fetch 후 본문 대조) 필요성이 이번에도 실증됨: 8건 중 2건 폐기(원문에 없는 수치·주장), 1건 날짜 오류 적발. python-pptx/ADA/Gamma 관련 위키 중복 재발도 반복 확인된 패턴이라, 별도 승인 시 정식화 검토 권고.
