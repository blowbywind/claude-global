---
date: 2026-07-29
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-07-29

## 오늘 배운 것
- **CSS `shape()` 함수** — `clip-path`/`offset-path`/`border-shape`에 쓰는 신규 셰이프 문법, 2026년 2월부터 "Baseline 2026(Newly available)"로 주요 브라우저 전반 지원 확인(MDN 직접 확인). 벡터 클리핑 표현력이 늘어 아이콘·비정형 자산에 신규 옵션으로 활용 가능.
- **COLRv1 컬러 폰트** — Chrome/Edge 98+, Firefox 107+ 지원, Safari(macOS/iOS/iPadOS) 미지원 확인. 다색 아이콘 폰트화 시 대안이 될 수 있으나 Safari 폴백(SVG/PNG) 필수.
- **Cloudflare `format=auto`** — Accept 헤더 전체 우선순위(AVIF→WebP→원본)로 자동 협상, Chrome 124+/Firefox 128+ 시 AVIF 수신 확인. 단 프록시가 Accept 헤더를 제거하면 경고 없이 원본 포맷으로 폴백되는 함정 있음 — CDN 경유 자산 배포 시 점검 포인트.
- **Recraft V4 SVG 모드** — 로고/아이콘/스케일러블 자산을 벡터로 직접 생성해 Figma/Illustrator에서 편집 가능한 출력 확인(출처 페이지 자체 서술). 2단계(창작 이미지 필요 시) 후보 도구 목록에 추가.
- **SVGR + Vite** — React SVG 아이콘 컴포넌트화 튜토리얼 실존 확인. 다만 "2026년 표준 패턴"이라는 표현은 출처에 없는 과장이라 완화해서 인지(도구 조합 자체만 채택).

※ 검증 중 폐기한 항목: "SVGO v4가 아직 RC 단계"라는 주장은 GitHub API 직접 조회 결과 `v4.0.2`가 `prerelease: false`인 정식 릴리스로 확인돼 **사실과 다름** — 폐기. "Squoosh가 2023년 이후 업데이트 없이 유지보수 중단"이라는 주장도 인용 출처(theimgapp)에 해당 서술이 없어(단일 이미지 처리 한계만 언급) 폐기.

## 출처
- [CSS shape() — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/basic-shape/shape)
- [COLRv1 Browser Support — TestMu AI](https://www.testmuai.com/learning-hub/colrv1-browser-support/)
- [Cloudflare Image CDN Best Practices for WebP, AVIF](https://blog.blazingcdn.com/en-us/cloudflare-image-cdn-best-practices-webp-avif)
- [Recraft V4 SVG — Upsampler](https://upsampler.com/blog/generate-svg-vector-art-ai-free-recraft-v4-2026)
- [Use SVG Icons in React with Vite and SVGR](https://svgicons.com/articles/use-svg-icons-in-react-with-vite-svgr)
- [svg/svgo releases — GitHub API](https://api.github.com/repos/svg/svgo/releases) (v4.0.2 정식 릴리스 확인용, 리서치 주장 정정 근거)

## 위키화 후보
- CSS `shape()` — clip-path/offset-path/border-shape 신규 셰이프 문법과 브라우저 지원 현황 개념 노트
- COLRv1 컬러 폰트 — 지원 범위·Safari 폴백 필요성 개념 노트

## 프로필 반영 후보 (저위험)
- 다색 아이콘 자산 클리핑/변형 시 CSS `shape()` 옵션 검토 항목 추가
- CDN(`format=auto`) 경유 이미지 배포 시 "프록시의 Accept 헤더 유실→원본 포맷 무경고 폴백" 점검 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
