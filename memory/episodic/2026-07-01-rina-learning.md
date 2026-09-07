---
date: 2026-07-01
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-07-01

교차검증 결과를 정리합니다.

**버린 항목:**
- Generative UI → 이미 2026-06-25 위키 승격 완료
- Agentic Workflow Design → YouTube 출처(검증 불가), Agentic UX(2026-06-28) 로 기존 커버
- W3C DTCG "안착" 주장 → 이미 2026-06-20 위키화, 명세는 여전히 Working Draft 상태 — "안착 완료" 표현 과장
- Autonomous Design System Governance → supernova.io 자사 블로그(마케팅 편향), 실무 가이드라인 부재

---

## 오늘 배운 것

- **WCAG 2.2 SC 2.4.11(AA) vs SC 2.4.13(AAA) 혼동 수정**: SC 2.4.11(AA)은 포커스 인디케이터가 다른 콘텐츠에 *완전히* 가려지면 안 된다는 것만 요구(대비 기준 없음). 3:1 명도 대비 + 최소 면적 요건은 SC 2.4.13(AAA) — 기존 `wcag.md`가 3:1 대비를 SC 2.4.11로 잘못 기재하고 있으며, arthur의 `2026-06-24-arthur-wcag-2-2-sc-2-4-11-상세.md`에서 이미 오류 플래그 설정됨. AA 체크리스트에서 3:1 대비를 필수로 오인하지 않도록 주의.
- **EAA 실질 감사 2026 본격화**: 유럽 접근성법(EAA) 비즈니스 준수 시한(2025-06-28) 경과 → 전자상거래·금융 서비스 대상 국가별 감사 개시. 기존 위키는 "발효" 사실만 기록 — "감사 시행 단계 진입"은 신규 정보. (출처: Simmons & Simmons 로펌)
- **접근성 오버레이 위젯 = 법적 위험**: JS 오버레이 위젯(UserWay, AccessiBe 류)은 스크린리더 간섭·불완전 수정으로 실질 접근성 개선 불가, 감사 시 책임 경감 효과 없음. 네이티브 HTML/CSS/ARIA 코드 수정만 유효. (출처: forasoft.com, accessibility.works)
- **shadcn/ui CLI — React 19 + Tailwind v4 자동 구성 지원 확인**: `npx shadcn@latest init` 실행 시 React 19·Tailwind v4 환경 자동 감지·구성, `data-slot` 스타일 타깃 완전 통합 (출처: shadcn.com 공식). 기존 CLI v4 워크플로 노트에 보완 가능.

## 출처
- [W3C WCAG 2.2 — SC 2.4.11/2.4.12/2.4.13](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum)
- [Simmons & Simmons — European Accessibility Act enforcement](https://www.simmons-simmons.com)
- [forasoft — Accessibility Overlays](https://forasoft.com)
- [shadcn/ui 공식](https://ui.shadcn.com)

## 위키화 후보
- **접근성 오버레이 안티패턴** — JS 오버레이 위젯 위험성·법적 책임·네이티브 대안 정리 노트 (기존 위키에 없음)

## 프로필 반영 후보 (저위험)
- `WCAG 2.2 SC 2.4.11(AA): 포커스 완전 은폐 금지만 요구(대비·크기 기준 없음); 3:1 대비+최소 면적은 SC 2.4.13(AAA) — AA/AAA 혼동 금지`
- `접근성 오버레이 위젯(UserWay 등) 사용 금지 — 스크린리더 간섭·법적 책임 위험, 네이티브 코드 수정만 유효`

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
