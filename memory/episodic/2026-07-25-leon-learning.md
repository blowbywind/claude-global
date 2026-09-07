---
date: 2026-07-25
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-25

## 오늘 배운 것
- **SVG2는 여전히 Editor's Draft 단계**(svgwg.org 직접 확인) — 프로덕션에서는 신규/실험적 스펙 대신 이미 안정화된 기능(paint-order 등) 위주로 계속 사용할 것.
- **SVG-AAM(Accessibility API Mappings) W3C 초안이 2026-03-02자로 존재**(w3.org 확인) — 기존 role/title/aria 체크리스트의 표준 근거 문서로 인용 가능.
- **장식용 vs 의미있는 SVG 구분 원칙**(장식=aria-hidden, 의미=role="img"+aria-labelledby)은 공인 접근성 컨설팅사 TPGI 기준과 일치 — 기존 체크리스트 유지·재확인.
- **Figma Variables REST API는 Enterprise 플랜 전용**(help.figma.com 공식 문서) — 무료 플랜에서는 토큰 자동 동기화 불가, Design Tokens(W3C) Export 플러그인 등 수동 추출 경로 필요.
- **View Transitions API의 `view-transition-name` 속성**은 MDN에 실존 확인(부분확인) — 다만 "동일 이름 요소 간 자동 보간" 세부 동작은 이번 fetch로 직접 확인되지 않아 별도 Using 가이드 확인 전까지는 참고용으로만 취급.

※ 레온이 제출한 항목 중 Safari CSS calc() 제약, Chrome 145 JPEG XL 복귀 시점, COLRv1 브라우저 버전, 아이콘셋 정확한 개수 통계는 출처가 생소한 블로그(svgai.org/fastedit.net/reezo.ai/testmuai.com/allsvgicons.com/pkgpulse.com)이고 fetch 권한 제약으로 본문 대조가 불가해 **미검증 폐기**했습니다.

## 출처
- [SVG 2 (Editor's Draft)](https://svgwg.org/svg2-draft/)
- [SVG Accessibility API Mappings (W3C WD, 2026-03-02)](https://www.w3.org/TR/2026/WD-svg-aam-1.0-20260302)
- [Using ARIA to Enhance SVG Accessibility - TPGI](https://www.tpgi.com/using-aria-enhance-svg-accessibility/)
- [View Transition API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [Guide to variables in Figma - Figma Help](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)

## 위키화 후보
- 기존 SVG 접근성 체크리스트 노트에 SVG-AAM(w3.org, 2026-03-02) 출처 링크 보강.

## 프로필 반영 후보 (저위험)
- Figma Variables REST API=Enterprise 전용 제약을 브랜드 컬러 토큰 파이프라인 논의 시 참고사항으로 인지.

## 승인 필요 (고위험)
- 없음

## 신규 도구 후보 (에이전트/스킬)
- 없음 (기존 "출처-대조-검증기" 에이전트가 이번 실행에서 WebFetch/Bash/WebSearch 권한 전무로 기능 불가 확인 — 도구 권한 부여는 하네스 설정 변경 사안이라 이 턴 범위 밖이므로 별도 승인 요청 필요 시 사용자에게 보고 권장)
