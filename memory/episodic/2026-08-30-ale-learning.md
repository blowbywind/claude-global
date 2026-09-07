---
date: 2026-08-30
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-30

원문 8개 항목을 wget 폴백으로 원문 대조 검증했습니다(WebFetch 권한 거부 재발 → wget 폴백 사용). 결과: 1건 명백한 환각 확인, 2건 근거 부재로 폐기, 5건 원문 직접 인용 확인.

## 오늘 배운 것
- Beautiful.ai 공식 블로그 원문 확인: 2026년 프레젠테이션 최대 흐름은 "structure-first creation" — 서사논리(맥락→문제→인사이트→해결→마무리) 우선 설계로 이동. 생성 속도 경쟁만으로는 부족.
- Beautiful.ai Smart Slides는 코드 기반(python-pptx) 방식과 달리 콘텐츠 추가/삭제 시 레이아웃 규칙 기반 실시간 자동 재정렬(auto-aligning layouts)을 제공해 다중 기여자 협업에서도 디자인 일관성 유지 — 문서 툴체인 선택 시 참고할 차별점.
- 가변 폰트 width(wdth)축은 브랜드 시스템에서 "가장 저활용되는 도구"이며, 넓은 폭=여유로운 히어로 영역, 좁은 폭=컴팩트한 모바일 헤더 표현에 적합(무료 폰트 중 지원 사례는 드묾, Noto Sans 정도). 기존 위키의 weight/width/optical 노트를 구체화하는 보강 사실.
- PowerPoint(M365 Windows, Version 2503/Build 19729.20000 이상)가 SmartArt에 한해 레이아웃 타입 기반 접근성 설명을 자동 생성하며, 편집(단계 추가 등) 후에도 최신 상태 유지 — 기존 `pptx-접근성-체크리스트`의 "자동 생성은 보조 수단"이라는 원칙에 대한 최신 예외 사례.
- 인사이트 우선(assertion형) 차트 제목 원칙("Q2 Revenue Exceeded Targets by 18%" 식)이 Beautiful.ai 트렌드 리포트로 재확인됨 — 기존 위키 원칙과 일치, 신규 아님(교차검증 목적으로만 기록).

## 검증 중 폐기한 항목 (환각/근거 부재)
- **python-pptx customXml 지원 추가(2026-05-05)**: 공식 릴리스 히스토리 페이지 대조 결과 최신 안정판은 1.0.0(2024-08-03)이 마지막이며 해당 업데이트 자체가 존재하지 않음 — **환각으로 판정, 폐기**.
- **"Data Simplification"이라는 명명된 2026 트렌드 및 Sankey/퍼널 구체 서술**: 원문에 해당 명칭·서술 확인 불가(일반적 "단순화" 기조만 존재) — 폐기.
- **"접근성이 브랜드 스토리텔링 4대 원칙 중 하나로 명문화"(bigeyeagency)**: 해당 URL 본문 전체(46만자)에 "accessib" 관련 언급이 전무 — 오귀속/환각으로 판정, 폐기.
- 가변 폰트 weight축 "가장 영향력 큼" 비교 서술: 원문에서 확인 불가, width축 사실만 채택.

## 출처
- [python-pptx Software Updates (공식)](https://python-pptx.readthedocs.io/en/latest/community/updates.html) — 환각 폐기 근거로 사용
- [Beautiful.ai — AI Presentation Trends 2026](https://www.beautiful.ai/blog/ai-presentation-trends-2026)
- [Beautiful.ai — Data Visualization Trends for Presentations in 2026](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [Beautiful.ai vs Gamma 비교](https://www.beautiful.ai/comparison/beautiful-ai-vs-gamma)
- [Variable Fonts in Brand Systems 2026 — Font Alternatives](https://fontalternatives.com/blog/variable-fonts-brand-systems-2026/)
- [SmartArt is becoming more accessible in PowerPoint — Microsoft Tech Community](https://techcommunity.microsoft.com/blog/microsoft365insiderblog/smartart-is-becoming-more-accessible-in-powerpoint/4507653)

## 위키화 후보
- `pptx-접근성-체크리스트-대체텍스트-읽기순서-검증.md`에 "SmartArt는 M365 Windows Version 2503+에서 자동 접근성 설명 지원(예외), 단 일반 Chart/이미지는 여전히 수동 대체텍스트 필요"를 보강.

## 프로필 반영 후보 (저위험)
- 어휘: "wdth축(width axis) — 브랜드 시스템 내 가장 저활용 가변 폰트 축, 히어로 영역 vs 모바일 헤더 반응형 표현에 활용".

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — WebFetch 권한 거부+wget 폴백 필요성은 이미 `출처-대조-검증기-wget-폴백-내장` 후보로 등록되어 있어 중복 제안 생략)
