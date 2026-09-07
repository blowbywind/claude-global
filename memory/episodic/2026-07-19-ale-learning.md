---
date: 2026-07-19
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-19

## 오늘 배운 것
- **python-pptx는 여전히 v1.0.0(안정판)에 머물러 있고 2026년 신규 기능 없음** — 기존 폰트 임베딩 제약(임베딩 API 미지원, XML 직접 조작 필요)이 그대로 유효함을 재확인.
- **Marp(Markdown→PPTX)와 Slidev(코드형 덱)는 PPTX 산출물 성격이 다름**: Marp는 텍스트가 편집 가능한 상태로 export되는 반면, Slidev의 PPTX export는 슬라이드를 이미지로 래스터화해 텍스트 선택·수정이 불가 — 편집 가능한 PPTX 산출물이 필요하면 Marp 계열, 발표 전용 정적 자료면 Slidev 계열을 구분해 제안해야 함(정확한 버전 번호·수치 통계는 출처가 마케팅 블로그 단일 출처라 확정 어려워 반영 보류).
- **데이터 시각화 원칙 갱신**: 수치 나열형 차트 대신 핵심 데이터 포인트 1개만 강조하고, 차트 제목을 결론형 문장으로 작성하는 접근 — 기존에 확립한 Assertion-Evidence 슬라이드 타이틀 원칙과 정합적이므로 데이터 시각화 슬라이드 설계 시 "차트 제목=결론 문장" 규칙으로 구체화해 적용 가능.
- **Bento Grid 레이아웃 용어**: 이질적 콘텐츠(차트·인용구·이미지)를 모듈형 사각 박스로 배열하는 방식 — 기존에 이미 다루던 "매거진형 대시보드" 레이아웃과 동일 개념의 업계 통용 명칭으로, 클라이언트 커뮤니케이션 시 이 용어를 사용하면 의도 전달이 명확해짐.

## 출처
- [python-pptx Releases](https://github.com/scanny/python-pptx/releases)
- [Slidev vs Marp 비교](https://open-design.ai/blog/slidev/)
- [2026 프레젠테이션 데이터 시각화 트렌드](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)

※ Marp 정확 버전 번호(v4.3.1), "다운로드 300% 증가" 통계, arXiv 학술 논문(Narrative Scaffolding, CHI IUI 2026) 인용은 재확인 수단이 없어(WebFetch 권한 미승인) 이번 학습 노트에서 제외했습니다. 필요 시 별도 승인 후 재검증하겠습니다.

## 위키화 후보
- "Bento Grid 레이아웃" — 기존 "Magazine Dynamic Dashboard" 개념 노트에 업계 통용 동의어로 병기(신규 노트 불필요, 기존 노트 보강 수준).

## 프로필 반영 후보 (저위험)
- 데이터 시각화 슬라이드 원칙에 "차트 제목=결론형 문장" 규칙을 Assertion-Evidence 원칙 하위 항목으로 명시.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
