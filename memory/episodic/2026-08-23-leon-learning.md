---
date: 2026-08-23
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-23

## 오늘 배운 것
- CSS `corner-shape` 지원 현황이 실제로 갱신됨: Chrome/Edge 139+에서 지원, 글로벌 커버리지 약 65%, 여전히 비-Baseline·Safari/Firefox 공식 일정 없음 — 기존 위키 노트(`corner.md`, `css-corner.md`)와 대조 시 방향은 동일하나 수치(65%)는 원문 재확인으로 신뢰도 상향, 노트 갱신 가치 있음
- SVGO 최신 안정판 v4.0.2 유지(npm registry 직접 조회로 재확인, 신버전 없음) — 기존 인지와 일치
- Sharp 최신판 0.35.3, 배포일 2026-07-01(npm registry 재확인, "약 2개월 전" 표현 정확) — 버전 정보만 검증, 0.34 AVIF/HEIC 기능 세부는 미검증(블로그 출처만이라 보류)
- (신규 후보) Untitled UI Icons: 1,100개+ 무료 라인 아이콘, 상업적 이용 가능(재판매·경쟁 제품 제작 금지 조항 확인) — 공식 라이선스 페이지에서 아이콘 개수·조건 문구 직접 확인
- (신규 후보) nadermx/backgroundremover: 실존 오픈소스 저장소(MIT 라이선스), U2Net 기반, CLI 외에 `backgroundremover-server`로 HTTP API 서버 모드 실제 지원 — README에서 직접 확인, 2단계(실사 이미지 배경 정리) 보조 도구로 유효
- Font Awesome 7 가격·스펙($99/년, 26,000개+ 등) 항목은 **폐기**: 출처(hugeicons.com)가 JS 렌더링 페이지라 본문 대조 불가 + 경쟁사 자체 블로그(신뢰도 낮음) → 검증 실패로 채택 안 함

## 출처
- [Squircles in CSS — corner-shape 지원 현황](https://squircle.js.org/blog/squircles-in-css) (직접 fetch 대조 완료)
- [SVGO — npm registry](https://registry.npmjs.org/svgo/latest) (직접 조회)
- [Sharp — npm registry](https://registry.npmjs.org/sharp) (직접 조회)
- [Untitled UI Icons License](https://www.untitledui.com/license) (직접 fetch 대조 완료)
- [nadermx/backgroundremover — GitHub](https://github.com/nadermx/backgroundremover) (API·README 직접 대조 완료)

## 위키화 후보
- `corner.md`/`css-corner.md`에 "Chrome/Edge 139+, 글로벌 ~65%" 수치 갱신(출처 재검증 완료)
- 아이콘셋 후보 노트에 Untitled UI Icons(1,100개+, 상업무료) 항목 추가

## 프로필 반영 후보 (저위험)
- backgroundremover(MIT, U2Net, HTTP API 서버) — 2단계 실사 이미지 배경 정리 보조 도구로 인지

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 이번 턴은 Bash wget 폴백으로 WebFetch 거부 우회 검증 성공, 기존 제안된 출처-대조-검증기 계열 후보로 충분히 커버됨)
