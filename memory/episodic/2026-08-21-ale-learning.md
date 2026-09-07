---
date: 2026-08-21
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-21

## 오늘 배운 것
- **power-pptx**(python-pptx 활성 포크) 핵심 차별점은 검증됨: `fit_text`/`auto_size`/`slide.lint()·tidy()` 3중 장치로 텍스트가 컨테이너를 벗어나거나 도형이 슬라이드 밖으로 밀리는 것을 방지하는 "space-aware authoring". 단, 리서치 원문의 "2026-07-12 기준 최신"은 이제 낡은 정보 — 오늘(2026-08-21) 확인 결과 v2.11.0이 방금 배포됐고, 2.0부터 임포트 모듈명이 `pptx`→`power_pptx`로 바뀌어 원본 python-pptx와 **공존 가능**해짐(기존 위키 `power.md`의 "동일 모듈명 충돌" 기술은 최신화 필요 — 아래 위키화 후보 참고).
- python-pptx(원본) 한계는 그대로 확인됨: 애니메이션 미지원, waterfall/treemap 차트 없음, 이미지 포함 슬라이드 복제 불가.
- 2026 트렌드는 "내러티브 중심(narrative-driven)" 설계 + 슬라이드당 메시지 1개 원칙 재확인. (단, 원 리서치의 "스토리 회상률 63% vs 통계 5%" 수치는 인용 출처 원문에서 확인 불가 → **폐기**.)
- 브랜드 타이포그래피 실무 기준(2개 출처 교차검증, 원 리서치 수치 일부 정정): 폰트는 제목/본문 **최대 2종**, 본문 최소 18~24pt, 색상 팔레트는 **3가지 주요색** 제한 권장(원 리서치의 "2~3종·3~5색"은 근사치 오류). 브랜드 색상·폰트는 Slide Master에 고정 상속, 폰트는 파일에 임베딩.
- AI 데이터 시각화 실패의 78%는 알고리즘이 아닌 데이터 품질 문제 — 정확히 일치 확인됨. 차트 자동생성 도구 도입 전 데이터 정제 선행 필요.
- PPTX→PDF 배포 시 "내보내기/사본 저장" 옵션에서 "접근성용 문서 구조 태그" 항목을 **명시적으로 체크**해야 함(기본값 의존 금지). 원 리서치의 "인쇄 경로는 태그가 통째로 사라짐" 표현은 원문에 없어 완화함.

## 출처
- [power-pptx (PyPI)](https://pypi.org/project/power-pptx/)
- [Presentation API Comparison 2026 — slideforge.dev](https://slideforge.dev/blog/presentation-apis-2026)
- [Data storytelling slide design trends — chatslide.ai](https://www.chatslide.ai/articles/data-storytelling-slide-design-trends)
- [Keep Brand Colors and Fonts Consistent — moda.app](https://moda.app/blog/keep-brand-colors-fonts-consistent-slides)
- [Professional slide deck — przntperfect.com](https://www.przntperfect.com/post/professional-slide-deck)
- [AI trends in data visualization tools — patrickfrank.com](https://www.patrickfrank.com/post/ai-trends-data-visualization-tools)
- [Creating accessible PDFs from PowerPoint — makethingsaccessible.com](https://www.makethingsaccessible.com/guides/creating-accessible-pdfs-from-microsoft-powerpoint/)

## 위키화 후보
- 기존 `power.md` 노트 최신화: 버전 2.11.0(2026-08-21) 갱신 + "2.0부터 pptx→power_pptx 모듈명 변경으로 원본과 공존 가능" 정정(기존 "동일 모듈명 충돌" 서술 오류 수정)

## 프로필 반영 후보 (저위험)
- 어휘 추가: "space-aware authoring"(텍스트/도형 슬라이드 이탈 방지 자동보정 개념)

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
