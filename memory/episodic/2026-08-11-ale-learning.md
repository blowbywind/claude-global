---
date: 2026-08-11
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-11

교차검증을 마쳤습니다. WebFetch 권한이 이번에도 거부되어(반복 실사고 패턴, `리서치-검증-권한-정합기` 후보 사유와 동일) wget 폴백으로 8건 중 6건 원문 확보, 1건(python-pptx-extended)은 봇 차단 페이지라 PyPI JSON API로 우회 확인, 1건(whiteboardblog 비선형 내러티브)은 접속 불가로 미검증 처리했습니다. Gamma "브랜드 강제" 주장은 원문과 상충되어 폐기했습니다.

## 오늘 배운 것
- **python-pptx-extended(PyPI 실재 확인, 최신 v1.2.0/2026-05-05 배포)**: 테이블 셀 경계선(per-edge border)·그림자·글머리 기호·customXml을 원본 python-pptx에 추가 지원. 브랜드 표 디자인에 세밀한 보더 제어가 필요할 때 대안 후보로 검토 가치 있음(단, 서드파티 포크라 실무 도입 전 안정성 확인 필요).
- **Gamma Imagine(TechCrunch 2026-03-17 확인)**: 텍스트 프롬프트로 브랜드 이미지·인포그래픽을 생성하는 기능이 신규 탑재됨.
- **차트 접근성 격차**: 인용 출처 원문에 "공개 차트·대시보드의 70% 이상이 장애인에게 접근 불가"라는 수치가 실제로 존재함을 확인(단, 인용된 1차 연구인 "Global Data Literacy Initiative" 자체는 별도 검증 못 함 — 색상 단독 구분 금지·패턴 병행 원칙의 근거로만 참고).
- **alt-text 작성 기준(MS 공식문서 원문 확인)**: "image of", "a graphic of" 같은 중복 서두 표현을 피하라는 지침은 원문에 실제 존재. 단, 리서치에 있던 "125자에서 잘림" 구체 수치는 해당 원문에서 확인되지 않아 폐기.
- **데이터 시각화 2026 트렌드(Beautiful.ai 원문 확인)**: "데이터 덤프"가 아니라 헤드라인 인사이트와 "So what" 메시지를 슬라이드에 직접 명시하는 방향이 실제 원문 인용문으로 확인됨(기존 위키 So-What 원칙과 정합).

## 출처
- [python-pptx-extended (PyPI)](https://pypi.org/project/python-pptx-extended/)
- [Gamma adds AI image-generation tools (TechCrunch, 2026-03-17)](https://techcrunch.com/2026/03/17/gamma-adds-ai-image-generation-tools-in-bid-to-take-on-canva-and-adobe/)
- [Accessible Data Visualization Guide for Diverse Audiences 2026](https://inclusionresearch.org/accessible-data-visualization-for-diverse-audiences-2026-guide)
- [Make your PowerPoint presentations accessible (Microsoft Support)](https://support.microsoft.com/en-us/accessibility/powerpoint/make-your-powerpoint-presentations-accessible-to-people-with-disabilities)
- [Data Visualization Trends for Presentations in 2026 (Beautiful.ai)](https://www.beautiful.ai/blog/data-visualization-trends-for-presentations-in-2026)

## 폐기 항목(검증 실패)
- **Gamma 3.0 "Gamma Agent"/"Import Theme" 브랜드 강제** — 인용 출처(presentations.ai 리뷰) 원문을 직접 확인한 결과 오히려 "No automatic brand enforcement; theme selection is manual per deck with no workspace-level controls"로 정반대 내용. 사실관계 오류로 폐기.
- **비선형/메뉴형 내러티브(whiteboardblog)** — 원문 사이트 접속 불가(반복 시도 실패)로 미검증. Slidesgo 원문에서 "no more rigid, linear decks" 언급으로 큰 방향성만 간접 정황 확인, 구체 구현(메뉴 슬라이드+돌아가기 버튼) 주장은 단일 미접속 출처라 채택 보류.
- **alt-text "125자 잘림" 수치** — MS 공식문서 원문에서 미확인, 폐기(일반 원칙만 유지).

## 위키화 후보
- python-pptx-extended: 신규 노트보다 기존 `ai-프레젠테이션-도구-지형-갱신.md`에 "python-pptx v1.0.0 안정판" 항목 옆에 보강 항목으로 추가(신규 노트 난립 방지 원칙 준수).
- Gamma Imagine 기능은 같은 기존 노트의 Gamma 서술에 갱신 반영(단, 브랜드 강제 관련 기존 서술은 이번 검증으로 오류 없음 확인 — 원 노트에 브랜드 강제 언급 없었음).

## 프로필 반영 후보 (저위험)
- 어휘 추가: "So what 메시지(헤드라인 인사이트 직접 배치)" — 기존 So-What 원칙 노트와 연결해 표현 강화.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이미 등록된 `출처-대조-검증기-wget-폴백-내장` 후보의 유효성을 이번 검증(8건 중 6건 원문 확보, 1건 상충 발견·폐기)으로 재확인. 신규 제안 대신 기존 후보 채택을 권고.)
