---
date: 2026-07-28
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-28

## 오늘 배운 것
- JPEG XL 판도 전환 조짐 확인: Chrome 145(2026-02, 플래그 뒤)에 디코더 탑재 → 2026년 하반기 기본 활성화 예정(Edge 동반), 지원율이 Safari 단독 16%→85~90%로 급증 전망. 기존 위키의 "JPEG XL 시기상조" 결론(2026-07-14) 재검토가 필요합니다.
- Squoosh 유지보수 저하 간접 확인(glTF-Transform이 Sharp로 전환한 이슈에서 사유 명시). 다만 "유일한 무료 브라우저 기반 JPEG XL 인코더", "최신 Node.js LTS 오류" 주장은 출처 본문에 없어 폐기합니다. 결론은 유지: 런타임=Sharp, 빌드타임 배치=Squoosh 역할분리는 유효하나 Squoosh 노후화 리스크는 인지할 것.
- 아이콘셋 2026 지형: Lucide(1,500+ 아이콘, 24px 그리드, 2px stroke, shadcn/ui 기본값)가 React 생태계 사실상 표준, Phosphor(7,700+, 6종 weight)는 다양성에 강점. (Heroicons "4스타일 재설계" 주장은 출처에 없어 폐기 — 실제는 292개 아이콘·3 variant.)
- `light-dark()` CSS 함수는 `url()` 이미지 소스 교체에 적용 가능(라이트/다크 아이콘 이미지 스왑 용도로 활용 가능) — 확인됨. 단 "SVG 인라인 fill 속성엔 직접 적용 불가, CSS class 스왑 필요" 주장은 해당 MDN 문서에 근거가 없어 폐기(추가 검증 필요 항목으로 보류).
- 디자인 토큰 아키텍처 원칙 확인: 브랜드 토큰(정체성)과 기능/시맨틱 토큰(에러·경고·성공 등) 분리, `action-primary`류 시맨틱 네이밍이 2026 권고 표준.
- 인라인 SVG vs 스프라이트 판단 재확인: 빌드스텝 있는 React/Vue/Svelte 환경은 컴포넌트 임포트가 대세, 다중 페이지 사이트는 외부 스프라이트 캐싱 이점 유지 — 기존 위키 임계치(50개 미만 인라인/100개 초과 sprite)와 정합.

## 출처
- [JPEG XL Returns to Chrome](https://reezo.ai/blog/jpeg-xl-returns-to-chrome-what-it-means-for-web-images)
- [glTF-Transform Issue #751 (Squoosh→Sharp 전환)](https://github.com/donmccurdy/glTF-Transform/issues/751)
- [Lucide vs Heroicons vs Phosphor (pkgpulse)](https://www.pkgpulse.com/guides/lucide-vs-heroicons-vs-phosphor-react-icon-libraries-2026)
- [MDN light-dark()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark)
- [Design Token Architecture 2026 (timgraf.com)](https://timgraf.com/ui/design-token-architecture-2026-the-strategic-blueprint-for-scalable-design-systems/)
- [Icon Fonts vs SVG Sprites vs Inline SVGs (allsvgicons.com)](https://allsvgicons.com/blog/icon-fonts-vs-svg-sprites-vs-inline-svgs/)

## 위키화 후보
- JPEG XL 재부상 추적 노트 신설: Chrome 145 플래그 탑재 → 2026 H2 기본활성 예정 타임라인, 기존 "시기상조" 노트와 연결.

## 프로필 반영 후보 (저위험)
- 아이콘셋 후보 인지 확장: Lucide(24px·2px stroke, shadcn 기본값) 외 Phosphor(6 weight, 다양성 강점) 특성 구분 인지.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 단, 이번 검증에서 "출처-대조-검증기" 에이전트가 8건 중 4건 폐기를 정확히 걸러내 유효성이 확인되었으므로 향후 리서치 턴에서도 계속 활용 권장)
