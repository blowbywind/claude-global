---
date: 2026-08-02
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-02

## 오늘 배운 것
- Node.js 2026년 7월 보안 릴리스는 v26.5.1, v24.18.1, v22.23.2이며, HTTP/2와 Permission Model 관련 High 취약점이 포함된다. 출처: [Node.js 보안 릴리스](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- HTTP/2 백엔드는 heap-use-after-free와 메모리 제한 우회 이슈 때문에 런타임 패치 우선순위를 높여야 한다. 출처: [Node.js 보안 릴리스](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- `--permission`을 쓰는 Node.js 서비스도 경로 allowlist가 보안 경계로 완전하다고 가정하면 안 되며, 파일 읽기·쓰기 회귀 테스트가 필요하다. 출처: [Node.js 보안 릴리스](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- HTTPS Agent는 mTLS 인증서와 servername이 다른 요청에서 연결 재사용 회귀 테스트가 필요하다. 출처: [Node.js 보안 릴리스](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- Express 5는 `express.static`의 dotfiles 기본값이 `ignore`라서 `/.well-known` 기반 ACME, Android App Links, Apple Universal Links가 404가 될 수 있다. 출처: [Express 5 마이그레이션 가이드](https://expressjs.com/en/guide/migrating-5/)
- Fastify v5는 `time`, `date-time` 형식에서 timezone을 강제하고, `Diagnostics Channel` 기반 요청 생명주기 추적을 네이티브 지원한다. 출처: [Fastify v5 마이그레이션 가이드](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)

## 출처
- [Node.js July 2026 Security Releases](https://nodejs.org/en/blog/vulnerability/july-2026-security-releases)
- [Upgrade to Express v5](https://expressjs.com/en/guide/migrating-5/)
- [Fastify v5 Migration Guide](https://fastify.dev/docs/latest/Guides/Migration-Guide-V5/)

## 위키화 후보
- Node.js HTTPS Agent 연결 재사용 회귀 테스트: mTLS 인증서와 servername 분리 검증
- Node.js forwarding proxy request smuggling 경계 테스트: `maxHeadersCount`, `maxHeaderPairs` 초과 헤더 처리 검증

## 프로필 반영 후보 (저위험)
- Express 5 마이그레이션 점검어에 `/.well-known` dotfiles 허용 설정 검토 추가
- Fastify v5 입력 검증 점검어에 `time`, `date-time` timezone 강제 회귀 테스트 추가

## 승인 필요 (고위험)
- Node.js 보안 릴리스 대응 시 HTTP/2, Permission Model, HTTPS Agent 관련 회귀 테스트를 배포 전 필수 게이트로 격상

## 신규 도구 후보 (에이전트/스킬)
- [skill] node-security-regression-checklist — Node.js 보안 릴리스 공지를 HTTP/2, Permission Model, Agent, proxy, `node:sqlite` 회귀 테스트 항목으로 변환
