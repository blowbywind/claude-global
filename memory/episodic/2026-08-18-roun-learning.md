---
date: 2026-08-18
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-18

## 오늘 배운 것
- Node.js 24.16.0 LTS에는 `crypto.randomUUIDv7()`, `IncomingMessage.req.signal`, `node:test` 실행 순서 랜덤화가 들어왔으므로 UUID 생성, 요청 중단 전파, 테스트 순서 의존성 점검어로 추가할 만합니다.
- Node.js 24.16.0은 `sqlite 3.53.0`, `OpenSSL 3.5.6`, `undici 7.25.0`, `npm 11.13.0`도 포함하므로 컨테이너 이미지 태그뿐 아니라 런타임 번들 의존성까지 패치 감사 대상으로 봐야 합니다.
- `Permissions-Policy: local-network-access`는 문서의 로컬망 및 루프백 요청 허용 여부를 제어하지만, MDN 기준 실험 기능이므로 운영 기본값으로 강제하기보다 브라우저 기반 관리 콘솔 보안 검토어로만 둡니다.
- Dependabot은 지원 레지스트리에서 OIDC로 단기 자격증명을 받아 private registry에 접근할 수 있으므로, 장기 저장 시크릿을 줄이는 공급망 보안 옵션으로 확인 가치가 있습니다.
- OAuth 2.1은 2026년 8월 18일 확인 기준 `draft-ietf-oauth-v2-1-15` 활성 Internet-Draft이며 최종 RFC가 아니므로, 인증 정책 문서에 확정 표준처럼 쓰면 안 됩니다.
- AAuth, TLS-session-bound access token, OAuth HTTPSig PoP, Attestation-Based Client Authentication은 모두 초안 상태로 확인되며, agent-to-resource 인가와 토큰 탈취 재사용 방지 설계의 관찰 후보로만 다룹니다.

## 출처
- [Node.js 24.16.0 LTS 릴리스](https://nodejs.org/en/blog/release/v24.16.0)
- [MDN: Permissions-Policy local-network-access](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access)
- [GitHub Docs: Dependabot private registries OIDC](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries)
- [IETF Datatracker: OAuth 2.1 draft](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/)
- [IETF Datatracker: AAuth Protocol draft](https://datatracker.ietf.org/doc/draft-hardt-oauth-aauth-protocol/)
- [IETF Datatracker: TLS-session-bound access tokens draft](https://datatracker.ietf.org/doc/draft-mw-oauth-tls-session-bound-tokens/)
- [IETF Datatracker: OAuth HTTPSig PoP draft](https://datatracker.ietf.org/doc/draft-richer-oauth-httpsig/)
- [IETF Datatracker: OAuth attestation-based client authentication draft](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/)

## 위키화 후보
- `Permissions-Policy: local-network-access` — 브라우저 기반 관리 콘솔의 로컬망 접근 제어용 실험적 보안 헤더.
- `OAuth access token PoP 초안 비교` — mTLS 세션 바인딩, HTTPSig 바인딩, attestation 기반 클라이언트 인증의 초안 상태 비교 노트.

## 프로필 반영 후보 (저위험)
- Node.js 24.16 런타임 점검어에 `randomUUIDv7()`, `req.signal`, `node:test` 랜덤 실행을 추가.
- Dependabot private registry OIDC를 공급망 시크릿리스 업데이트 점검어에 추가.

## 승인 필요 (고위험)
- OAuth 초안 계열을 인증·인가 기본 구현 규칙으로 승격할지 여부.

## 신규 도구 후보 (에이전트/스킬)
- [skill] backend-runtime-release-auditor — Node.js 릴리스 노트에서 런타임 기능과 번들 의존성 패치 항목을 추출해 업그레이드 체크리스트로 정리.
- [agent] oauth-draft-watcher — IETF OAuth 초안의 상태, 만료일, RFC 승격 여부를 확인해 인증 설계 노트의 초안·표준 표기를 검증.
