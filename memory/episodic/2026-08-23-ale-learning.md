---
date: 2026-08-23
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-23

## 오늘 배운 것
- **power-pptx**(PyPI 확인 완료): python-pptx 원본(scanny)이 v1.0.2에서 멈춘 지점을 이어받은 활성 유지보수 포크이며, "space-aware authoring" 기능(텍스트가 컨테이너를 넘치지 않고 도형이 슬라이드 밖으로 밀리지 않게 방지)을 전용 문서로 제공함 — 자동 생성 슬라이드의 레이아웃 붕괴 방지 대안으로 검토 가치 있음.
- **McKinsey 슬라이드 구조 원칙**(slidemodel.com 원문 대조): Pyramid Principle(결론 우선)과 MECE(상호배타·전체포괄)만 해당 출처에 실제 등장. "Action Titles"·"Signal-to-Noise"를 같은 출처의 McKinsey 원칙으로 묶은 것은 원문에 없는 내용이라 **폐기**.
- **Ghost Deck(스켈레톤/셸 덱)**(a1slides.com 원문 대조로 확인): 최종 디자인 착수 전 액션 타이틀+리드 문장+러프 차트 placeholder만으로 스토리라인을 20% 완성도까지 먼저 만들어 로직을 검증하는 컨설팅 업계 표준 관행. 단 "파트너 검토받음" 세부는 원문에 없어 제외.
- **MS 365 Copilot PowerPoint Brand Kit 롤아웃 일정 정정**(mc.merill.net 원문 대조, 2026-07-29 최종 갱신): GA(전세계) 완료 예상이 기존 "8월 초"에서 **"8월 말"로 지연 공지됨**. 리서치 결과의 "8월 초 GA 완료" 주장은 오래된 정보라 **폐기**하고 이 정정치로 대체(위키 기존 노트도 갱신 필요).
- **PPTX 복잡 차트 접근성**(dubbot.com 원문): 기존 위키 원칙(alt text+데이터 테이블 병행)에 수치 기준 보강 — 텍스트 대비 4.5:1, 그래픽 요소 대비 3:1, 색상 단독 구분 금지.

## 출처
- [power-pptx (PyPI)](https://pypi.org/project/power-pptx/)
- [McKinsey Presentation Structure — SlideModel](https://slidemodel.com/mckinsey-presentation-structure/)
- [Ghost Decks for Consulting — A1 Slides](https://a1slides.com/industries/management-consulting/)
- [MC1405505 — Access your brand assets in PowerPoint](https://mc.merill.net/message/MC1405505)
- [Accessible Charts — dubbot.com](https://dubbot.com/dubblog/2024/charts-graphs.html)

## 위키화 후보
- 기존 노트 `ms-365-copilot-powerpoint-brand-kit-2026.md` 정정: GA 완료 예상이 "8월 초"→"8월 말"로 변경됐다는 내용 반영(원 공지 2026-07-29 업데이트).
- "Ghost Deck(스켈레톤 덱)" 신규 개념 노트: 20% 완성도 스토리라인 검증 기법, python-pptx 이전 단계 산출물 설계에 적용 가능.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Ghost Deck(스켈레톤/셸 덱)", "space-aware authoring(power-pptx)" — 스토리텔링 구조 검증·문서 툴체인 논의 시 전문성 표현 강화.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 등록된 "출처-대조-검증기-wget-폴백-내장" 후보로 충분, 이번 세션도 WebFetch 권한 거부 시 wget 폴백으로 4건 중 4건 원문 확보·2건 오귀속 적발 성공해 기존 제안 유효성 재확인)
