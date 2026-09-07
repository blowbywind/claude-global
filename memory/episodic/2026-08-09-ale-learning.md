---
date: 2026-08-09
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-09

WebFetch 권한이 없어 직접 재확인은 불가했습니다. 소스 신뢰도 기준으로 판단해 종합합니다(1차 출처가 아닌 블로그발 특정 수치는 보수적으로 제외/격하).

## 오늘 배운 것
- **python-pptx 생태계 포크 분화**: `python-pptx-extended`(그림자·글머리 서식 등 고급 서식)와 `power-pptx`(텍스트 오버플로·도형 이탈 방지 등 레이아웃 안정성)로 기능이 갈리며, 패키지명 충돌로 동시 설치 불가 — 도구 선택 시 목적에 맞게 택일 필요.
- **PowerPoint MCP 서버 생태계 3분화**: 로컬 python-pptx 래퍼形 / COM 자동화형 / 호스팅 서비스형. `GongRzhe/Office-PowerPoint-MCP-Server` v2.0은 32개 도구·11개 모듈로 생성·관리 커버리지가 넓음 — 문서 생성 파이프라인 후보로 참고 가치 있음.
- **AI 프레젠테이션 툴 지형 갱신**: Gamma는 리서치·인용·전체 덱 재작성이 가능한 "Gamma Agent"(2025년 9월, Gamma 3.0) 및 이미지 생성 기능(2026년 3월)을 추가. Beautiful.ai는 2026년 3월부터 아웃라인 우선 "Context-Aware Workflow"로 브랜드 일관성 강화 — 경쟁 도구 동향으로 참고.
- **폰트 임베딩 실무 옵션 구분**: "사용된 문자만 임베드"(최종본·경량화)와 "전체 문자 임베드"(협업·추가편집 대비)를 상황별로 구분 사용해야 함 — 발행 전 체크리스트의 폰트 임베딩 항목에 세부 기준으로 반영 가능.
- **데이터 시각화 2026 원칙**: 차트를 장식이 아닌 "하나의 명확한 주장"으로 설계, 잘린 y축·과다 파이차트·불필요 3D/그리드라인 배제가 핵심 안티패턴으로 재확인.
- **Assertion-Evidence 모델 실증**: 문장형 헤드라인(주장)+시각 근거 구성이 전통적 구문형 제목+불릿보다 이해·기억도가 높다는 대조 실험 결과 — 기존 프로필의 "Assertion-Evidence 슬라이드 타이틀" 어휘를 뒷받침하는 근거로 확인.

주의: Gamma 투자금액·ARR 등 구체적 수치(buildfastwithai.com)와 "브랜드 일관성→매출 33% 증가"(moda.app, Gitnux 재인용) 통계는 1차 출처가 아니고 WebFetch로 재확인이 막혀 신뢰도를 담보 못 해 채택하지 않았습니다.

## 출처
- [python-pptx-extended](https://pypi.org/project/python-pptx-extended/)
- [power-pptx](https://pypi.org/project/power-pptx/)
- [GongRzhe/Office-PowerPoint-MCP-Server](https://github.com/GongRzhe/Office-PowerPoint-MCP-Server)
- [PowerPoint MCP Server 생태계](https://2slides.com/blog/powerpoint-mcp-server-ecosystem-2026)
- [폰트 임베딩 옵션](https://deckary.com/blog/powerpoint-fonts)
- [데이터 시각화 2026 가이드](https://lumenore.com/blog/data-visualization-best-practices-2026-guide/)
- [Assertion-Evidence 모델](https://www.mauriziolacava.com/en/faq/how-to-use-the-assertion-evidence-model-for-slide-design/)
- [SUCCESs 스토리텔링 모델](https://www.prezent.ai/blog/art-of-storytelling)

## 위키화 후보
- python-pptx 포크 2종(python-pptx-extended vs power-pptx) 기능 비교 개념 노트
- Assertion-Evidence 모델 실증 근거(대조 실험 결과) — 기존 어휘 노트에 출처 보강

## 프로필 반영 후보 (저위험)
- 어휘 추가: "SUCCESs 스토리텔링 모델(Simple·Unexpected·Concrete·Credible·Emotional·Stories)"
- 발행 전 체크리스트 세분화: 폰트 임베딩 시 "사용 문자만" vs "전체 문자" 구분 명시

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 python-pptx 워크플로 내에서 참고 자료로만 활용, 별도 자동화 불필요)
