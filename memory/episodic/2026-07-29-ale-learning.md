---
date: 2026-07-29
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-29

## 오늘 배운 것
- 피치덱 스토리텔링 프레임워크 5종 확인: Hero's Journey, Problem-Agitate-Solve(PAS), Before-After-Bridge, Why-How-What, YC Memo. 이 중 PAS가 초기단계 투자자 대상 덱에 가장 일관되게 효과적이라는 평가.
- `python-pptx-extended`: python-pptx v1.0.2 기반 fork(import는 동일하게 `pptx` 유지)로 그림자 효과·불릿/번호매기기 서식·표 셀 테두리·선 cap/join 스타일·customXml 지원을 추가. PyPI JSON API로 존재·기능·2026-05 릴리스(v1.1.0/v1.2.0) 직접 확인 완료. 기존 위키의 "python-pptx 서식 한계" 보완 수단으로 유효.
- PowerPoint 폰트 임베딩은 저장 옵션에서 "Embed fonts in the file" 체크박스 활성화가 필수(문자 전체/사용분만 선택 가능) — 기존 위키 폰트 임베딩 제약 노트와 정합 확인.
- Marp vs Slidev 실사용 비교: Slidev는 PPTX 산출이 핵심 목적이 아니며(Markdown→PDF/웹앱 중심), PowerPoint 핸드오프가 필수인 경우 Marp 경로가 더 단순하다고 확인(단, "이미지로 캡처돼 텍스트 편집 불가"라는 세부 메커니즘까지는 원문에서 확인되지 않아 이 부분은 반영하지 않음).
- 2026 데이터 시각화 트렌드는 "차트 자체가 아니라 인사이트가 초점" — 헤드라인에 결론을 직접 서술하고 "so what" 메시지를 슬라이드 전면에 배치하는 방향으로 수렴.

## 출처
- [Pitch Deck Storytelling Frameworks 2026](https://www.slidegmm.ai/en/blog/pitch-deck-storytelling-frameworks-2026)
- [python-pptx-extended · PyPI](https://pypi.org/project/python-pptx-extended/)
- [How to Embed Fonts in PowerPoint](https://teampptlab.com/how-to-embed-fonts-powerpoint-guide/)
- [Slidev vs Marp vs Reveal.js 2026](https://www.pkgpulse.com/guides/slidev-vs-marp-vs-revealjs-code-first-presentations-2026)
- [Data Visualization Trends for Presentations in 2026 — Beautiful.ai](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [Presentation Design Trends 2026 — ChatSlide](https://www.chatslide.ai/articles/presentation-design-trends-2026)

## 위키화 후보
- 피치덱 스토리텔링 5프레임워크(Hero's Journey/PAS/BAB/Why-How-What/YC Memo) — 기존 Assertion-Evidence/Minto/SCQA 노트와 별도 축(서사 패턴 vs 논증 구조)이라 신규 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Problem-Agitate-Solve(PAS)", "Insight-First 데이터 시각화(헤드라인 결론+So What 우선 배치)" — 스토리텔링/시각화 논의 시 전문성 표현 강화.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)

---
**검증 메모**: ale의 원 리서치 중 2건은 원문 대조 결과 근거 불충분으로 폐기했습니다 — ① infogram 기사의 "도넛 차트·Sankey·단순화된 퍼널" 주장(실제 기사의 10대 트렌드는 AI지원 차트/실시간 대시보드/데이터 미니멀리즘 등이며 해당 차트 유형 언급 없음), ② storydoc 기사의 "Problem→Solution→Proof→Ask, 11장 인용문" 주장(원문에 해당 구조·인용문 부재, 실제로는 Hero's Journey/스토리마운틴 프레임워크 위주). 나머지 항목은 PyPI JSON API 및 원문 텍스트 직접 대조로 검증했습니다.
