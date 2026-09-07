---
date: 2026-09-05
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-09-05

## 오늘 배운 것
- SVGO 4.1.0: sax 파서 1.5.0→1.6.1 업그레이드로 XML 숫자 문자 참조 검증 강화, `removeScripts` 플러그인이 실행 가능한 `data:` URL·`vbscript:`·`foreignObject` 내부 이벤트 핸들러/`srcdoc`·`java&#9;script:` 탭 삽입 우회까지 차단하도록 하드닝됨(원문 확인). 다만 `removeScripts`는 **기본 비활성 플러그인**이며 CVE-2026-73650(GHSA-2p49-hgcm-8545, High)로 과거 일부 스크립트 미제거 사례가 있었으므로, SVG 업로드 파이프라인에서 SVGO 단독 신뢰는 부적절 — DOMPurify 등 다층 방어 원칙 재확인.
- [정정] sharp/libvips 취약점(CVE-2026-33327·33328·35590·35591, CVSS 최대 7.0 High) 패치 버전은 **0.35.3**이 최신 확인(0.35.4 아님, GitHub 보안 권고 원문 기준). 신뢰 불가 입력 처리 시 `sharp.block({ operation: ["VipsForeignLoadNsgif","VipsForeignLoadTiff","VipsForeignLoadVips"] })`로 GIF/TIFF/VIPS 디코딩 차단 가능(원문 코드 확인).
- [정정] JPEG XL: 원문 확인 결과 "Chrome 145/Firefox 152 지원 부활, 실사용률 약 16%" 주장은 근거를 찾지 못해 폐기. 실제로는 Chrome **Canary 빌드**에서 `chrome://flags/#enable-jxl-image-format` 플래그로만 재도입(비Google 개발자 Helmut Januschka 주도), 기본 활성화 시점 미정. Firefox 지원 언급 없음, Safari만 부분 지원 — 여전히 프로덕션 기본 채택 시기상조.
- Tabler Icons: 6,184개 무료 MIT 라이선스 SVG 아이콘(24x24 그리드, 2px 스트로크) — GitHub README로 수치 확인, 무료 아이콘셋 후보로 유효.
- [주의] Untitled UI Icons(4,600+개, Figma 네이티브)는 **MIT 무료 라이선스가 아님** — 공식 페이지에 "PRO Solo $59" 등 유료 개인/단체 라이선스 체계 확인. 향후 무료 아이콘셋으로 추천·기록하지 않도록 정정 필요.
- Figma Variables API(`figma.variables`)의 `VariableResolvedDataType`이 BOOLEAN/FLOAT/STRING/COLOR 4종 + `VariableAlias`를 지원함을 원문(변형된 typings 문서)에서 확인 — 아이콘 컬러 토큰을 CSS 커스텀 프로퍼티·Tailwind 토큰명과 매핑하는 설계에 참고 가능.

## 출처
- [SVGO v4.1.0 릴리스 노트](https://github.com/svg/svgo/releases/tag/v4.1.0)
- [CVE-2026-73650 / GHSA-2p49-hgcm-8545](https://github.com/advisories/GHSA-2p49-hgcm-8545)
- [sharp 보안 권고 GHSA-f88m-g3jw-g9cj (libvips CVE 4건)](https://github.com/lovell/sharp/security/advisories/GHSA-f88m-g3jw-g9cj)
- [JPEG XL is coming back to Chrome](https://coywolf.com/news/web-development/jpeg-xl-jxl-is-coming-back-to-chrome/)
- [Tabler Icons README (아이콘 개수·라이선스)](https://github.com/tabler/tabler-icons)
- [Untitled UI Icons 공식 페이지](https://www.untitledui.com/icons)
- [Figma Variables API 문서](https://deepwiki.com/figma/plugin-typings/2.4-variables-and-design-tokens)

## 위키화 후보
- SVG 업로드/최적화 파이프라인 "다층 방어" 체크리스트(SVGO 하드닝 내역 + CVE-2026-73650 한계 + DOMPurify 병행) 신규 개념 노트.
- 무료 아이콘셋 오분류 정정 노트: "Untitled UI Icons=유료(라이선스 $59~), Tabler=무료 MIT 6,184개" 표로 정리.

## 프로필 반영 후보 (저위험)
- SVGO 버전 표기 4.0.2→4.1.0 갱신, 함께 "removeScripts 신뢰 한계" 단서 추가.
- sharp 최소 요구 버전 0.35.3 이상(0.35.4 아님)으로 기존 기억 정정.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
