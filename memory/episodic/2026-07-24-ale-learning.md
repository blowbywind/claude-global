---
date: 2026-07-24
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-24

## 오늘 배운 것
- Assertion-Evidence 슬라이드 효과가 2025년 공학전공 학생 110명 대상 연구로 재확인됨 — AE 그룹이 전통형 대비 이해도·기억 회상 우수, 발표자 인지부하도 낮음. 기존 AE 원칙 채택 근거 보강.
- 2026 데이터 시각화 트렌드는 차트 자체보다 "so-what 인사이트" 강조로 수렴 — 도넛/생키/단순화 퍼널, 인사이트 콜아웃 활용이 표준화되는 추세.
- "차트 제목=결론형 문장, 1그래픽 1인사이트" 원칙이 업계 표준으로 재확인됨 — 기존 Assertion-Evidence 차트 제목 규칙과 일치, 그대로 유지.
- OOXML theme.xml 구조 재확인: 색상은 `<a:clrScheme>`(dk1/lt1/dk2/lt2+accent1~6+hlink/folHlink), 폰트는 `<a:fontScheme>`의 majorFont/minorFont — "theme.xml 레벨 브랜드 고정" 기존 원칙의 구체적 XML 경로.
- 접근성·미니멀리즘(클린 여백, 축소 팔레트)이 개별 권고가 아닌 2026 업계 표준 트렌드로 편입됨 — 기존 WCAG 체크리스트의 정당성 재확인.
- **폐기**: "python-pptx-extended 서드파티 포크(2026-05)" 주장은 이번 세션에서 대조 검증을 시도했으나 검증 에이전트의 웹 접근 권한이 전면 차단되어 원문 확인 불가 — python-pptx 안정판 자체가 오래 1.0.x에 머물러 있는 점을 고려할 때 신뢰도 낮은 미확인 주장으로 판단해 채택하지 않음.
- **저신뢰 보류**: "Tome 2025년 4월 Slides 기능 종료" 주장은 출처가 SEO성 블로그 1건뿐이고 원문 대조도 실패해 확정 사실로 채택하지 않음(참고 수준으로만 인지).

## 출처
- [Assertion-Evidence 슬라이드 효과 연구](https://www.sciencedirect.com/science/article/pii/S2307187725001701)
- [2026 데이터 시각화 트렌드](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [프레젠테이션 디자인 트렌드 2026](https://slidesgo.com/slidesgo-school/ai-presentations/presentation-design-trends-2026)
- [OOXML theme.xml 구조](http://officeopenxml.com/prSlide-styles-themes.php)
- [2026 프레젠테이션 디자인 트렌드(접근성)](https://www.masterrvdesigners.com/blog/top-presentation-design-trends-2026/)

## 위키화 후보
- "인사이트 콜아웃·causal logic connector(인과관계 연결선)를 활용한 서사형 차트 구성" — 기존 Assertion-Evidence 차트 원칙에 시각적 연결 기법을 보강하는 개념노트 후보.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "narrative scaffolding(내러티브 스캐폴딩)", "causal logic connector(인과관계 연결선)" — 데이터 시각화 슬라이드 설계 시 전문성 표현 강화.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 단, 이번 세션에서 출처-대조-검증기 에이전트가 WebFetch/Bash/WebSearch 권한 전면 차단으로 실질적 검증을 전혀 수행하지 못함. 이는 새 도구 제안이 아니라 기존 `.claude/settings.json` 권한 설정 점검이 필요한 사안이라 별도 보고 필요.)
