---
date: 2026-07-02
bot: rina
type: web-research
tags: [self-learning, UI/UX design trends, design systems, accessibility best practices]
---

# 리나 자가학습 — 2026-07-02

## 오늘 배운 것
- **shadcn/ui 공식 AI 채팅 컴포넌트군 도입**: 스트리밍 기반 대화형 인터페이스를 간편히 구현할 수 있는 `MessageScroller`, `Message`, `Bubble`, `Attachment`, `Marker` 등의 구성 요소가 정식 추가되어 AI 중심 제품 설계 시 일관된 UX 구현 가능.
- **shadcn/cli v4의 RTL(우측 쓰기) 자동 변환**: `components.json` 설정에 `"rtl": true`를 활성화하면 컴포넌트 설치 및 마이그레이션(`npx shadcn@latest migrate rtl`) 시 물리적 방향 클래스(예: `ml-4`)를 다국어 표준인 논리적 방향 클래(예: `ms-4`)로 자동 변환하여 글로벌 호환성 확보.
- **shadcn/cli v4 Presets 및 `shadcn/skills` 통합**: 디자인 토큰, 테마, 아이콘, 폰트 설정을 단일 코드로 압축해 적용하는 프리셋 기능(`--preset`)과 AI 에이전트가 프로젝트 구조를 이해하도록 컨텍스트를 주입하는 `shadcn/skills` 도구 도입.
- **Tailwind CSS v4.2/v4.3의 신규 디자인 유틸리티**: 4가지 뉴트럴-어드제이슨트(neutral-adjacent) 색상(mauve, olive, mist, taupe) 추가, 컨테이너 높이에 반응하는 `@container-size` 쿼리 지원, OpenType 글꼴 속성을 제어하는 `font-features-*` 유틸리티 내장으로 더 정교한 타이포그래피 및 레이아웃 제어 가능.
- **사용자 의도 감지 인터페이스(Intent-Aware Design)**: 사용자의 실시간 스크롤 맥락, 이전 행동 이력 등을 종합적으로 예측하여 다음 화면의 레이아웃과 콘텐츠를 적응형으로 자동 제공해 인지 부하 최소화.
- **액체 유리(Liquid Glass)와 적응형 투명도**: 다크 모드 등에서 시각적 깊이를 부여하기 위해 단순 투명도를 넘어 다중 블러, 채도 보정 및 가독성 확보를 위한 대비 수준을 동적으로 조절하는 시각적 트렌드 부상.

## 출처
- [Tailwind CSS 공식 블로그 - v4.0 및 신규 업데이트](https://tailwindcss.com/blog/tailwindcss-v4)
- [shadcn/ui 공식 문서 - AI Chat Components 및 v4 가이드](https://ui.shadcn.com)
- [W3C Web Accessibility Initiative (WAI) - WCAG 2.2 Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)
- [Nielsen Norman Group - Intent-Aware Design & AI UX](https://www.nngroup.com)
- [Apple Developer - iOS 디자인 및 머티리얼 가이드](https://developer.apple.com)

## 위키화 후보
- `Intent-Aware Design (의도 감지 인터페이스)`: 사용자의 실시간 맥락을 예측하여 인터페이스를 동적으로 재구성하는 AI 기반 UX 설계 패턴.
- `shadcn/ui RTL 자동 변환 및 논리적 속성 마이그레이션`: 글로벌 접근성 및 다국어 지원을 위해 shadcn CLI v4를 이용해 물리적 클래스를 논리적 클래스로 자동 마이그레이션하는 개발 워크플로우.

## 프로필 반영 후보 (저위험)
- `RTL 대응 논리적 CSS 속성 설계`: 물리적 간격 변수(`ml`, `pl`) 대신 논리적 간격 변수(`ms`, `ps`)를 기본으로 채택하는 UI 가이드라인 적용.
- `Tailwind v4.3 및 @container-size`: 레이아웃 설계 시 뷰포트뿐 아니라 컨테이너의 높이(block-size) 변화에 스타일을 대응시키는 반응형 컴포넌트 설계법 도입.

## 승인 필요 (고위험)
- AI 프로토타이핑 및 개발 협업 시 AI 에이전트의 효율 극대화를 위해 `shadcn/skills` 컨텍스트 주입 도구를 프로젝트에 의무 도입 및 설치하는 절차 승인 요청.

## 신규 도구 후보 (에이전트/스킬)
*(비움)*
