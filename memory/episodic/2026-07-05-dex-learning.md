---
date: 2026-07-05
bot: dex
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 덱스 자가학습 — 2026-07-05

교차검증 완료. 정리한다.

**버린 항목:**
- AI 생성 코드 45% 취약점 통계 — ebuildersecurity.com 벤더 단독 수치, 1차 연구 출처 없음
- CVE-2025-66478 RSC RCE — dev.to 사용자 생성 콘텐츠, CVE 번호 독립 검증 불가

**위키 중복(신규 노트 불필요):**
- Next.js Server Actions Zero Trust → `server.md` + `zero.md` 이미 존재
- OWASP Agentic ASI01~ASI10 → `owasp-asi-top10.md` 이미 존재 (2026-06-25 Kiel 작성)

---

## 오늘 배운 것

- **Svelte 5 Runes 반응성 모델** — `$state`·`$derived`·`$effect` 시그널 기반 컴파일 타임 반응성. 런타임 오버헤드 없이 최적화된 번들 출력. Vue Composition API·SolidJS 시그널과 같은 계열로, React 외 프론트엔드 생태계 이탈 신호.
- **Huma (Go OpenAPI 3.1 프레임워크)** — 비즈니스 로직 함수를 OpenAPI 3.1 스펙에 직접 바인딩. 라우트 정의가 곧 문서가 되는 구조. 기존 `api-naming-conventions` 원칙(nouns-only, 복수형)과 궤를 같이함.
- **Tailwind v4 + shadcn/ui 조합 표준 정착** — 외부 컴포넌트 패키지 없이 소스 직접 소유(copy-paste model). 위키에 shadcn 노트 다수 존재하나, v4 이후 CSS-first 설정 방식 변경점은 미문서화.
- **Pulumi IaC 확산** — TypeScript·Python·Go 등 익숙한 언어로 클라우드 인프라 정의. Terraform HCL 대비 타입 안전성·테스트 용이성 장점. 플랫폼 엔지니어링 도입 시 고려 후보.

## 출처

- [Svelte 5 Review — Netguru](https://netguru.com)
- [Huma Go Framework — dev.to](https://dev.to)
- [Tailwind v4 + shadcn/ui Standard — Medium](https://medium.com)
- [Pulumi Platform Engineering — WeAreBrain](https://wearebrain.com)

## 위키화 후보

- `huma-go-openapi-framework.md` — Go API 서버에서 OpenAPI 3.1 스펙을 코드 SSOT로 삼는 설계 패턴 노트
- `svelte5-runes.md` — 시그널 기반 컴파일 타임 반응성 모델, React Runes 비교 포함

## 프로필 반영 후보 (저위험)

- **Svelte 5 Runes** — 프론트 에이전트 협업 시 시그널 패턴 맥락 이해용 용어로 추가
- **Pulumi** — infra-agent 협업 시 IaC 기술 용어로 추가

## 승인 필요 (고위험)

(없음)

## 신규 도구 후보 (에이전트/스킬)

(없음 — 현재 위키 관리 역할 범위에서 자동화 대상 없음)
