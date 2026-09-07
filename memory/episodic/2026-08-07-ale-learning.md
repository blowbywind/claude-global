---
date: 2026-08-07
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-07

## 오늘 배운 것
- **power-pptx**: python-pptx 1.0.2 이후를 이어받은 활발한 포크(v2.10.0, 2026-07-12 릴리스, pypi.org JSON으로 버전·날짜 직접 확인). 핵심은 "space-aware authoring" — 텍스트가 도형 컨테이너를 넘치지 않게 자동 조정. 향후 슬라이드 텍스트 오버플로우 자동방지가 필요할 때 python-pptx 대체 후보로 검토 가치 있음.
- **python-pptx 폰트 임베딩 한계 재확인**: 본체는 여전히 폰트 임베딩 공식 API 없음(GitHub issue #355, open 상태 직접 확인). 보조툴 pptx-surgeon은 반대로 "임베딩 폰트 제거/이름 매핑"만 지원(README 직접 확인, 임베딩 추가 기능 아님) — 발행 전 체크리스트의 "폰트 미임베딩" 게이트는 python-pptx 단독으로 해결 불가함이 재확인됨.
- **Pandoc fntdata 버그 상태 정정**: reference.pptx 폰트 임베딩이 깨지는 이슈(#11492)는 2026-02-28 이미 수정·종결됨(state_reason: completed, GitHub API로 직접 확인) — 원 리서치의 "2026년 현재도 열려 있음"은 사실과 다름, 폐기·정정. 단 로컬 pandoc 버전에 패치가 반영됐는지는 별도 확인 필요.
- **유료 대안**: 폰트 임베딩이 반드시 필요하면 Aspose.Slides for Python의 `add_embedded_font(EmbedFontCharacters.ALL)` + `compress_embedded_fonts`가 해법(공식 문서에서 API명 직접 확인) — 무료 스택 한계 보완용 대안으로 기록.
- **CHI 2026 논문 검증 완료**(Schuster 외, crossref·Semantic Scholar로 DOI·초록 직접 대조): 저널리즘 실무자 21명 인터뷰 결과, 일반 대중 대상 데이터 시각화는 "message-first" 전략을 쓰고 평가는 정식 사용자 테스트보다 동료 피드백·소셜 지표에 의존 — 기존 "so what 헤드라인" 원칙(beautiful.ai 블로그에서 "so what"/headline 표현 직접 확인)의 학술적 근거로 보강됨.
- **브랜드 일관성 실무**: PowerPoint `Fonts > Customize Fonts`로 테마 폰트 지정 후 `.thmx`로 저장·공유(moda.app 원문에서 ".thmx", "Customize Fonts" 문구 직접 확인) — 기존 theme.xml clrScheme 고정 원칙에 fontScheme 측면을 보완.

## 출처
- [power-pptx (PyPI)](https://pypi.org/project/power-pptx/)
- [python-pptx issue #355 — Font embedding](https://github.com/scanny/python-pptx/issues/355)
- [pptx-surgeon README](https://github.com/rse/pptx-surgeon)
- [pandoc issue #11492 (closed 2026-02-28)](https://github.com/jgm/pandoc/issues/11492)
- [Aspose.Slides for Python — Embedded Font](https://docs.aspose.com/slides/python-net/embedded-font/)
- [Practitioners' Perspectives on Designing Data Visualizations for the General Public (CHI 2026)](https://dl.acm.org/doi/full/10.1145/3772318.3790627)
- [Data Visualization Trends for Presentations in 2026 — beautiful.ai](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)
- [Keep Brand Colors & Fonts Consistent — moda.app](https://moda.app/blog/keep-brand-colors-fonts-consistent-slides)

※ Gamma 3.0("Gamma Agent", 카드 시스템, 6열 레이아웃) 항목은 원문 페이지가 JS 렌더링 전용이라 실제 서술 대조 불가(빈 콘텐츠) + 출처가 자사 홍보성 리스티클이라 신뢰도 낮음 → 폐기.

## 위키화 후보
- power-pptx(python-pptx 포크, space-aware authoring 개념) 신규 노트 — 기존 "python-pptx 기본 제약" 노트에 링크 연결
- 기존 Pandoc fntdata 이슈 노트가 있다면 "2026-02-28 수정 완료"로 상태 갱신 필요(정정)

## 프로필 반영 후보 (저위험)
- 어휘 추가: "space-aware authoring", "message-first 전략" — 텍스트 오버플로우·데이터 시각화 스토리텔링 설명 시 전문성 표현 강화

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보
(없음 — 이번 검증에서 8건 중 1건 폐기·1건 정정이 확인되어 사실대조 프로세스 자체의 필요성은 재입증됐으나, 해당 에이전트 신설 제안은 이미 다른 세션에서 별도 후보로 등록되어 있어 중복 제안 생략)
