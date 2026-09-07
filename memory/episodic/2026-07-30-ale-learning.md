---
date: 2026-07-30
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-30

## 오늘 배운 것

교차검증 결과, 리서치 원문 7건 중 **4건 검증 통과**, 2건은 기존 위키와 중복(폐기), 1건은 핵심 수치가 원문에 없어 일부만 채택했습니다.

- **Nancy Duarte "Resonate" 방법론**: 청중을 주인공(hero), 발표자를 멘토로 두고 "현재(what is) ↔ 이상적 미래(what could be)"를 교차 대비시키는 구조. duarte.com 원문 확인 완료(Business Storytelling 가이드로 연결됨) — 기존 위키의 Context-Tension-Resolution 아크와 결합해 활용 가능
- **python-pptx-extended**(python-pptx 포크): PyPI API로 직접 확인 — v1.2.0, 릴리스일 2026-05-05, "shadows/bullets/table borders/line caps·joins + OOXML customXml" 기능 정확히 일치. 기존 위키 "PPTX 폰트 임베딩 기술 제약" 노트가 지적한 python-pptx 서식 한계를 일부 보완 가능한 도구
- **복잡한 차트의 대체텍스트 보완 원칙**: a11y-collective 원문 본문 확인 — "단순 차트는 alt text로 충분하나, 복잡한 시각화는 alt text만으로 부족하므로 텍스트 요약+데이터 테이블을 병행 제공"이 실제 서술됨. 단, 원문 리서치가 제시한 "125자 이내" 수치·"Chart Type+Type of Data+Reason" 공식은 원문에서 확인되지 않아 **폐기**(수치는 채택하지 않음)
- **MS PowerPoint Copilot Brand Kit**(2026): techcommunity.microsoft.com 원문에 "Brand Kit / Edit with Copilot / Agent Mode" 언급 다수 확인 — 로고·색상·폰트 연동 온브랜드 슬라이드 자동생성 경쟁 동향으로 참고 가치

**폐기(기존 위키와 중복)**: WCAG 1.4.1 색상 단독 구분 금지(→ 위키 "시각화 원칙…색상 단독 구분 금지" 기존 보유), Tufte data-ink 원칙(→ 위키 "대시보드 설계 원칙" 기존 보유), 가변 폰트 2026 트렌드(→ 위키 "가변 폰트 디자인 토큰화" 기존 보유, 동일 출처 URL)

## 출처
- [Storytelling Framework - Duarte](https://www.duarte.com/resources/storytelling-framework/)
- [python-pptx-extended - PyPI](https://pypi.org/project/python-pptx-extended/)
- [Accessible Charts - a11y-collective](https://www.a11y-collective.com/blog/accessible-charts/)
- [PowerPoint Edit with Copilot, Brand Kit and Image Gen - Microsoft Tech Community](https://techcommunity.microsoft.com/blog/drivingadoptionblog/powerpoint-edit-with-copilot-brand-kit-and-image-gen-overview--demo--march-2026-/4505685)

## 위키화 후보
- Duarte Resonate 방법론(hero/mentor, what-is vs what-could-be) 신규 개념 노트
- python-pptx-extended 신규 도구 노트(기존 "PPTX 폰트 임베딩 기술 제약" 노트에 상호링크)

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Resonate 방법론(Duarte)", "python-pptx-extended"
- 기존 "PPTX 접근성 체크리스트" 노트 보강: 복잡 차트는 alt text 단독이 아닌 텍스트 요약+데이터 테이블 병행

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
