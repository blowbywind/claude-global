---
date: 2026-08-12
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-12

## 오늘 배운 것
- python-pptx 최신 버전은 PyPI 직접 조회로 **1.0.2**(2024-08-07 배포) 확정 — 기존 위키(`ai-프레젠테이션-도구-지형-갱신.md`)의 "v1.0.0" 서술은 정정 필요.
- 데이터 시각화 접근성: 색상 단독 구분 금지, 텍스트 대비 4.5:1(일반)/3:1(큰 텍스트), WCAG 1.4.4에 따라 200%까지 리사이즈 대응 필요 — 기존 위키 접근성 원칙과 일치하며, 2026년 유럽접근성법 시행으로 권고→법적 기준으로 격상된 점이 신규 정보.
- PowerPoint 테마 폰트 커스터마이징(Design>Variants>Fonts>Customize Fonts, `.thmx` 저장) 및 폰트 임베딩(File>Options>Save>Embed fonts) 절차 — 기존 브랜드 색상 관리(extraClrScheme) 노트에 서체 관리 절차로 보강 가능.
- SCR(Situation-Complication-Resolution) 프레임워크: Resolution에 슬라이드 대부분을 할당하는 3단 구조, 기존 CTR/1-3-1/Minto Pyramid 어휘를 보완 — 단 출처(stratechi.com)는 이번 턴에 직접 재확인하지 못해 저신뢰로 표기.
- ⚠️ **직접 재검증 결과 2건 폐기**: 인용 출처(guptadeepak.com, 2026-04-11자)를 직접 fetch해 대조한 결과 "Gamma 사용자 7000만·ARR $100M"은 원문에 해당 문구 자체가 없고, "Tome 2025년 4월 종료+Lightfield 피벗"은 오히려 원문이 Tome을 **2026-04-11 기준 $16/mo로 정상 운영 중인 제품**(Honorable Mention 3위)으로 서술해 정면 모순 — 두 항목 모두 폐기. 기존 위키의 "Tome 2025년 3월 종료" 서술도 동일 근거로 재검증 대상으로 플래그.
- "Gamma 완성 초안 30초" 주장은 같은 페이지 원문에서 직접 확인됨(유지 가능). SlideForge($0.05/슬라이드, python-pptx 코드 실행 SaaS)도 인용 페이지 원문에서 확인되나 업체 자체 홍보 블로그(1차 출처)라 참고 수준으로만 기록.

## 출처
- [python-pptx · PyPI](https://pypi.org/project/python-pptx/) — 버전 1.0.2 직접 확인
- [SlideForge Blog](https://slideforge.dev/blog/generate-powerpoint-python) — $0.05/슬라이드 직접 확인
- [Deepak Gupta - Top AI Presentation Tools 2026](https://guptadeepak.com/tools/top-5-ai-presentation-tools-2026/) — 직접 재확인, Tome/Gamma 통계 주장 폐기 근거
- [a11y-collective 접근성 차트 가이드](https://www.a11y-collective.com/blog/accessible-charts/)
- [European Accessibility Act 데이터 시각화 관련](https://www.disabilityworld.org/articles/accessible-data-viz-tooling-2026/)
- [PowerPoint 브랜드 가이드라인 폰트 절차](https://powerpoint.cloud.microsoft/create/en/blog/how-to-create-brand-guidelines/)
- [PowerPoint 폰트 임베딩 절차](https://deckary.com/blog/powerpoint-fonts)

## 위키화 후보
- 신규 노트는 불필요, 기존 노트 정정·보강 우선: `ai-프레젠테이션-도구-지형-갱신.md`에 python-pptx 버전(1.0.0→1.0.2) 정정 + "Tome 2025년 3월 종료" 서술 재검증 필요 플래그 추가.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "SCR(Situation-Complication-Resolution)" — CTR/1-3-1과 함께 스토리텔링 구조 설계 어휘로 추가(출처 미확인 저신뢰 표기 유지).
- 실무 절차 어휘: PowerPoint 테마 폰트 저장(`.thmx`) — 브랜드 서체 배포 시 참조.

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 "출처-대조-검증기" 제안이 이번 턴에도 2건 실제 폐기로 재실증됨. 신규 제안은 생략)
