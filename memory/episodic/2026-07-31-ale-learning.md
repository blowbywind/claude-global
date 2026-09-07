---
date: 2026-07-31
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-31

검증 완료. WebFetch 권한 미부여로 PyPI JSON API·wget 폴백으로 5개 핵심 출처를 직접 열람해 원문 대조했습니다(python-pptx-extended는 PyPI 메타데이터로 버전·배포일·기능 전항목 일치 확인, beautiful.ai는 5개 프레임워크 원문 전체 대조, auxi.ai·pptproductivity는 리서치 원문과 실제 대조해 일부 오류 정정/폐기).

## 오늘 배운 것
- python-pptx 커뮤니티 fork **python-pptx-extended**(v1.2.0, 2026-05-05 배포, PyPI 공식 메타데이터로 확인)는 그림자(ShadowFormat)·글머리기호/번호매기기·표 셀 개별 테두리·LineFormat cap/join·화살표형 선끝·customXml(문서 속성/데이터 파트) 지원 추가. import 패키지명이 `pptx`로 원본과 동일해 **같은 환경에 공존 설치 불가** — 도입 시 원본 python-pptx 대체 여부부터 판단 필요.
- **JetBrains Mono**는 SIL Open Font License 1.1(상업/비상업 무료, 크레딧 불필요) — 디자인 시스템 서체(코드/수치용) 채택 근거로 명시 가능.
- Beautiful.ai 데이터 스토리텔링 5프레임워크 원문 전체 대조 결과: ①"So What?"(사실→중요성→다음행동) ②McKinsey Pyramid Principle(=위키 기존 Minto/SCQA) ③OIA(Observation→Insight→Action) ④Data-to-Story Arc(=위키 기존 CTR) ⑤1-3-1(위키 기존). **"So What?"·OIA 2종은 기존 위키(2026-07-13 노트)에 없던 것으로 확인** — 신규 추가 가치 있음.
- auxi.ai "Checker"는 폰트/색상/로고/여백 위반을 스캔하고 "Brand automation"이 원클릭 일괄 수정하는 기능은 확인됨. 단 "브랜드 가이드 PDF/URL 업로드→규칙 자동 추출" 메커니즘은 해당 출처에서 확인 불가 → **폐기**.
- PPT Productivity의 색상 검사 기능(원문 "Color Palette Conformity", 2026년 2월 출시는 정확)은 확인되나, "자동 색상 교체는 2026 하반기 예정"이라는 리서치 원문은 **오류** — auto-fix는 전체 Proofing Tools 공통으로 이미 현재 제공 중(review/auto-fix/ignore 옵션 기출시). 시점 정정.

## 출처
- [python-pptx-extended PyPI 메타데이터](https://pypi.org/pypi/python-pptx-extended/json)
- [JetBrains Mono 공식 페이지](https://www.jetbrains.com/lp/mono/)
- [Beautiful.ai: Data Storytelling That Works](https://www.beautiful.ai/blog/data-storytelling-that-works-5-proof-backed-frameworks-for-communicating-insights-clearly)
- [auxi.ai: Brand Audit for PowerPoint Presentations](https://www.auxi.ai/blog/brand-audit-powerpoint-presentations)
- [PPT Productivity: Check & Fix Colors](https://pptproductivity.com/powerpoint-addin/refine-easier/powerpoint-proofing-tools-check-slides/powerpoint-check-fix-colors-change)

## 위키화 후보
- `데이터-스토리텔링-실행-프레임워크-context.md`에 "So What?"·OIA 2종 보강 — 기존 노트가 beautiful.ai 5종 중 2종만 추출했던 갭을 원문 전체 재대조로 확인·보완.
- `python.md`(현재 형식 오염된 스텁) → python-pptx-extended 기능목록 + "원본과 공존설치 불가" 제약으로 재작성.

(에일이 제안한 "OOXML 폰트 임베딩 제약" 신규노트는 기각 — 기존 `pptx-폰트-임베딩-기술-제약...` 노트가 TTF/OTF·Embeddability·데스크톱전용을 이미 상세히 다뤄 중복이며, 근거로 든 MS Learn 답변 링크는 출처 대조 미완료로 사실관계 확정 불가.)

## 프로필 반영 후보 (저위험)
- 어휘 추가: "So What? 프레임워크", "OIA(Observation-Insight-Action)" — 데이터 스토리텔링 논의 시 전문성 표현 강화.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — auxi.ai/PPT Productivity는 외부 유료 SaaS이며 우리 파이프라인 편입 근거 부족)
