---
date: 2026-07-27
bot: kiel
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 키엘 자가학습 — 2026-07-27

## 종합·검증 결과

이번 세션에서는 WebFetch 툴 권한이 열리지 않아 원문 직접 대조는 불가했습니다. 대신 기존 위키(`concepts/sdd-3문서-패턴.md`, `github-spec-kit.md`, `bmad.md`, `ai-코딩-도구-시장-지형도-2026.md`)와의 정합성, 출처의 성격(학술 vs 개인블로그/마케팅 콘텐츠)을 기준으로 교차검증했습니다. 방법론 불명 수치(예: "70% 절감")·개인블로그발 특정 수치(스타 수, 버전번호)는 근거 박약으로 폐기했습니다.

## 오늘 배운 것
- SDD(Spec-Driven Development)가 2026년 중반 주요 AI 코딩 툴(Spec Kit, Kiro, BMAD-METHOD 등) 전반의 표준 워크플로로 자리잡았다는 흐름은 기존 위키 노트(SDD 4단계, BMAD)와 정합적이며 재확인됨
- R2ABench(arXiv 2604.06683) 계열 연구: LLM이 PRD→아키텍처 변환 시 엔티티 추출은 강하나 "관계적 추론"(컴포넌트 간 의존성·데이터흐름)에서 취약 → PRD 작성 시 컴포넌트 간 관계를 도식·텍스트로 명시적으로 기술해야 할 실무적 근거로 참고 가치 있음(단, arXiv 원문 직접 대조는 이번 세션에서 못 함, 잠정 채택)
- LLM 기반 요구공학 문헌리뷰(arXiv 2509.11446) 계열: 연구가 요구사항 도출·검증에 편중되고 결함탐지·분류는 상대적으로 부족 → PRD 초안 자동화는 성숙해도 "결함 탐지"는 사람 검토 비중을 계속 유지해야 함을 뒷받침(동일 사유로 잠정 채택)
- Tessl Framework의 "질문→스펙 작성→개발자 승인→구현" 패턴은 기존 SDD 4단계와 동일 계열이나, "개발자 승인"을 명시적 게이트로 분리한 점은 PRD 승인 프로세스 설계에 참고할 만함

## 출처
- [arXiv 2604.06683 (R2ABench)](https://arxiv.org/abs/2604.06683) — 원문 미대조, 잠정
- [arXiv 2509.11446 (LLM 기반 RE 문헌리뷰)](https://arxiv.org/abs/2509.11446) — 원문 미대조, 잠정
- [Spec Kit vs BMAD vs OpenSpec (dev.to)](https://dev.to/willtorber/spec-kit-vs-bmad-vs-openspec-choosing-an-sdd-framework-in-2026-d3j)
- [Tessl 관련 spec-compare 저장소](https://github.com/cameronsjo/spec-compare)

## 위키화 후보
- "PRD 작성 시 컴포넌트 간 관계(의존성·데이터흐름) 명시적 서술" — R2ABench 계열 근거를 인용해 신규 개념 노트로 승격 검토 (원문 대조 후 확정 권장)

## 프로필 반영 후보 (저위험)
- PRD 작성 절차에 "컴포넌트 간 의존성·데이터흐름 명시" 체크 항목 추가

## 승인 필요 (고위험)
- 없음 (기존 "SDD 4단계 정식 채택" 검토 건은 그대로 대기 — 이번 자료는 근거 보강일 뿐 신규 승인 요청 아님)

## 신규 도구 후보 (에이전트/스킬)
- 없음 (동일 목적의 "출처-대조-검증기" 에이전트가 이미 카탈로그에 존재 — 단, 이번 세션처럼 WebFetch 권한 자체가 없으면 이 에이전트도 원문 대조가 불가하므로, 권한 이슈는 별도 인프라 확인 필요)
