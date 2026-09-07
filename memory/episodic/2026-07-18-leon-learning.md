---
date: 2026-07-18
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-18

## 오늘 배운 것
- **WCAG 2.2 1.4.11(비텍스트 대비)**: 상태 표시용 단독 아이콘(라벨 없음)은 인접 배경과 최소 3:1 대비 필요. 단, 텍스트 라벨이 4.5:1을 만족하며 병기되면 아이콘 자체의 대비 요건은 면제됨. 신규 단독 SVG 자산 접근성 체크리스트에 추가할 항목. (출처: W3C 확인)
- **SVGO 빌드 파이프라인 설정값**: `removeViewBox:false`(반응형 리사이즈 대비), `floatPrecision:2`(아이콘)/`3`(일러스트), `multipass:true`를 레포에 커밋해 팀 전체 동일 최적화 결과 보장. Sharp(AVIF/WebP 인코딩)와 빌드 타임 병행 실행 권장. (출처: GitHub `vite-plugin-image-optimizer` README로 구조 확인, 세부 수치는 2차 출처 참고용)
- **`content-visibility: auto` + `contain-intrinsic-size`**: 일러스트·이미지 다수 페이지에서 화면 밖 요소의 레이아웃/페인트를 건너뛰어 초기 렌더링 단축. Chrome 85+/Firefox 125+/Safari 18+ 지원. 이미지 자산 배치가 많은 랜딩·갤러리형 화면에 적용 검토 가치 있음. (출처: web.dev 공식 문서로 기능·지원범위 확인)
- **COLRv1 컬러 벡터 폰트**: Chrome/Edge/Firefox/Opera 최신 버전 지원, Safari는 미지원 — 아이콘 폰트화 시도 시 모노크롬 SVG 폴백이 여전히 필수. 현재 프로젝트가 인라인 SVG 중심이라 당장 영향은 낮으나 향후 아이콘 폰트 검토 시 유의점.
- **일러스트 시스템 대안**: unDraw 외 ManyPixels(색상 커스터마이즈, unDraw와 유사), DrawKit, Storyset, Open Peeps는 실재하는 무료/프리미엄 라이선스 일러스트 라이브러리로 확인됨 — 사용자 이미지 가이드 제시 전 무료소스 탐색 1단계에서 참고 후보로 추가.

※ AI 래스터→벡터 변환 도구의 "수작업 대비 우위" 비교 주장과 CSS Houdini Paint API 관련 주장은 근거가 제품 홍보성/단일 출처(vectorizer.ai 자체 소개, 미확인 블로그)에 그쳐 이번 정리에서 제외했습니다. OKLCH 관련 내용은 기존 위키에 이미 상세 노트(`oklch.md`, `oklch-색공간-디자인-토큰-색상-페어링.md`)가 있어 중복 반영하지 않았습니다.

## 출처
- [Understanding Success Criterion 1.4.11: Non-text Contrast (W3C)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)
- [vite-plugin-image-optimizer (GitHub)](https://github.com/FatehAK/vite-plugin-image-optimizer/blob/main/README.md)
- [content-visibility: the CSS property that boosts your rendering performance (web.dev)](https://web.dev/articles/content-visibility)

## 위키화 후보
- SVGO 빌드 설정 표준값(`floatPrecision`, `multipass`, `removeViewBox:false`) — 신규 개념 노트
- `content-visibility`/`contain-intrinsic-size` 조합 적용 가이드(이미지·일러스트 많은 화면) — 신규 개념 노트

## 프로필 반영 후보 (저위험)
- 단독 SVG 아이콘 접근성 체크리스트에 "WCAG 1.4.11 — 라벨 없는 상태 아이콘은 배경 대비 3:1 확인" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
