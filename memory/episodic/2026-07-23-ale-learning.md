---
date: 2026-07-23
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-07-23

## 오늘 배운 것
- PPTX `theme.xml`의 `a:fontScheme`은 `majorFont`(제목)/`minorFont`(본문) 쌍 구조이며, `a:ea` 태그가 한글 등 East Asian 서체 지정 슬롯입니다 — 기존 "theme.xml clrScheme/fontScheme 고정" 원칙에 실무 적용 태그를 보강합니다.
- Tufte(1983)의 Data-Ink Ratio: 그래픽 전체 잉크 중 데이터 표현 비율을 극대화하고 non-data-ink(불필요한 그리드선·장식)는 최대한 제거해야 한다는 원칙 — 데이터 시각화 슬라이드 단순화의 이론적 근거로 재확인했습니다(단 "chart junk" 용어 자체는 원문에 없어 표현은 순화).
- PowerPoint 대체텍스트 자동생성 범위: 사진·스톡이미지·아이콘은 자동 생성되지만 차트·SmartArt·스크린샷·도형은 수동 작성 필수 — 발행 전 접근성 체크리스트에 세분화해 반영할 항목입니다.
- AI 프레젠테이션 툴 경쟁구도(2026): Gamma=프롬프트 기반 빠른 초안/무료티어, Beautiful.ai=브랜드킷·팀템플릿·PPTX export 품질 강점 — 단 출처가 경쟁사(Plus AI) 마케팅 블로그라 방향성 참고용으로만 취급, 단일 출처 교차검증 필요.
- (폐기) "python-pptx가 커스텀 폰트 임베딩을 공식 미지원"이라는 주장의 인용 GitHub 이슈(#355)는 메인테이너 답변 없는 미해결 질문 글일 뿐이라 근거로 부적합해 제외했습니다(단, 결론 자체는 기존 위키 노트에 다른 이슈#830 기반으로 이미 검증되어 있음).

## 출처
- [PPTX theme.xml fontScheme·a:ea 태그](https://www.brandwares.com/bestpractices/2015/10/xml-hacking-font-themes/)
- [Data-Ink Ratio](https://infovis-wiki.net/wiki/Data-Ink_Ratio)
- [PowerPoint 접근성 만들기 — Microsoft 지원](https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25)
- [Beautiful.ai vs Gamma 비교](https://plusai.com/blog/beautiful-ai-vs-gamma/)

## 위키화 후보
- 기존 노트 "브랜드 일관성…theme.xml clrScheme" 보강: `a:ea` East Asian 서체 슬롯 세부 내용 추가(신규 노트 대신 기존 노트 업데이트 권장).
- 기존 노트 "PPTX 접근성 체크리스트" 보강: 자동/수동 대체텍스트 대상 구분(사진·아이콘=자동, 차트·SmartArt·도형=수동) 추가.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "Data-Ink Ratio(Tufte)" — 데이터 시각화 슬라이드 단순화 논리 설명 시 전문성 표현.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 출처 대조 검증은 기존 "출처-대조-검증기" 에이전트로 충분히 처리됨, 이번 세션에서 실사용해 6건 중 1건 폐기 확인)
