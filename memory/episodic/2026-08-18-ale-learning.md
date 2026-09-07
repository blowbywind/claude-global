---
date: 2026-08-18
bot: ale
type: web-research
tags: [self-learning, presentation storytelling & narrative structure, data visualization in slide decks, document generation tooling (python-pptx etc.)]
---

# 에일 자가학습 — 2026-08-18

임시 검증 파일(`/home/bbw/ai-ops/tmp_verify/`)은 삭제 권한이 거부되어 남아있습니다 — 필요 시 별도 정리 부탁드립니다.

## 오늘 배운 것
- **python-pptx 포크 `power-pptx` 실재 확인**: PyPI에서 직접 조회(MIT 라이선스, 실사용 패키지) — 최신 v2.10.0(2026-07-12 배포). 단, **upstream `python-pptx` 자체의 최신 안정판은 1.0.2**로 재확인됐습니다(기존 위키 `ai-프레젠테이션-도구-지형-갱신.md`에 "1.0.0이 최신"으로 기록된 부분은 정정 필요).
- **power-pptx의 space-aware authoring**: `TextFrame.fit_text()`(Pillow 폰트 메트릭 기반 사전 피팅) + `auto_size=TEXT_TO_FIT_SHAPE`(렌더 시 축소) + `slide.lint()`/`auto_fix()`/`tidy()`(도형 슬라이드 밖 이탈 자동 보정) 3단 방어로 텍스트 오버플로·레이아웃 깨짐을 자동 방지 — 우리 CLAUDE.md의 "세로 찌그러짐 방지" 원칙과 같은 문제의식을 문서 스택에서 라이브러리 레벨로 구현한 사례.
- **MS 365 Copilot PowerPoint에 Claude Sonnet 5 모델 옵션 확인**: 원문(candede.com) 직접 대조 결과 "Claude Sonnet 5 also rolled out in July for Word, PowerPoint, and Cowork" 문장 확인됨(GPT-5.6과 병존). 단 **"Adobe Experience Manager 기업 이미지 자산 연동" 주장은 원문에 근거가 전혀 없어 폐기**했습니다 — 실제로는 PowerPoint가 SharePoint 라이브러리·OneDrive 폴더를 참조 소스로 활용하는 기능만 확인됐습니다(Adobe 언급 0건).
- (검증 결과 폐기: "가변 폰트"·"narrative scaffolding" 트렌드는 기존 위키에 이미 다수 노트로 두텁게 반영돼 중복이라 제외, "ADA Title II 2026-04 갱신"·"Beautiful.ai 텍스트 아웃라인 미리보기 단계"는 원문 대조 결과 해당 구체 내용을 확인하지 못해 폐기)

## 출처
- [power-pptx — PyPI](https://pypi.org/project/power-pptx/)
- [Microsoft 365 Copilot August 2026 Updates](https://www.candede.com/articles/microsoft-365-copilot-august-2026-updates)

## 위키화 후보
- power-pptx가 패키지 자체에 Claude Code 스킬(`python -m power_pptx.skill install`)을 내장 배포한다는 사실 — 우리 툴체인과 직결되는 개념이라 노트 가치 있음.

## 프로필 반영 후보 (저위험)
- 어휘 추가: "space-aware authoring" — 텍스트/도형 오버플로 자동 방지 기법 지칭 시 전문성 표현.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
- [skill] power-pptx Claude Code skill — python-pptx 포크가 자체 제공하는 스킬(공식 python-pptx 대비 오버플로 자동보정+다이어그램 레시피 제공). 도입 시 기존 python-pptx 의존성 교체가 되므로 CLAUDE.md 원칙(임의 라이브러리 추가 사전 보고)에 따라 **사용자 승인 후** 설치 검토 제안.
