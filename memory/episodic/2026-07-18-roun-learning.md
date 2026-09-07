---
date: 2026-07-18
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-07-18

## 오늘 배운 것
- 인증 폼은 비밀번호 문자 조합 강제와 주기적 변경보다 최소 길이, 유출 비밀번호 차단 목록, 비밀번호 관리자 자동완성, 붙여넣기 허용을 우선해야 합니다. 출처: [NIST SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html)
- AAL2는 피싱 저항 인증 옵션 제공이 필요하고, AAL3는 피싱 저항 인증이 요구됩니다. OTP처럼 사용자가 코드를 수동 입력하는 방식은 피싱 저항 수단으로 보지 않습니다. 출처: [NIST SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html)
- 웹훅과 서버 간 API 서명은 임의 HMAC 헤더보다 `Signature-Input`, `Signature` 기반의 HTTP Message Signatures를 검토할 가치가 있습니다. 단, 애플리케이션별 서명 대상 구성 요소를 명확히 정해야 합니다. 출처: [RFC 9421](https://www.rfc-editor.org/info/rfc9421/)
- Node.js `--permission`은 안정 기능이지만 악성 코드 샌드박스가 아니며, 신뢰 코드의 파일, 네트워크, 프로세스 접근 실수를 줄이는 보조 장치로 봐야 합니다. 출처: [Node.js Permissions](https://nodejs.org/api/permissions.html)
- JWT 검증은 토큰 헤더의 `alg`를 그대로 신뢰하지 말고 허용 알고리즘, 키 용도, `iss`, `sub`, `aud`를 애플리케이션 규칙으로 검증해야 합니다. 출처: [RFC 8725](https://www.rfc-editor.org/rfc/rfc8725.html)
- 외부 URL 가져오기와 웹훅 호출 기능은 SSRF 방어를 위해 URL 전체 수신을 피하고, 리다이렉션 비활성화, 도메인 허용 목록, 공개 IP 재검증, DNS 우회 점검을 분리해야 합니다. 출처: [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)

## 출처
- [NIST SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html)
- [RFC 9421: HTTP Message Signatures](https://www.rfc-editor.org/info/rfc9421/)
- [Node.js Permissions](https://nodejs.org/api/permissions.html)
- [Arazzo Specification](https://www.openapis.org/arazzo-specification)
- [OpenFeature Introduction](https://openfeature.dev/docs/reference/intro/)
- [RFC 8725: JSON Web Token Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725.html)
- [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)

## 위키화 후보
- `HTTP Message Signatures` — 웹훅과 서버 간 API 무결성 검증을 RFC 9421 기반으로 표준화하는 설계 노트
- `NIST SP 800-63B 인증 UX` — 비밀번호 정책과 AAL별 피싱 저항 인증 요구사항 체크리스트

## 프로필 반영 후보 (저위험)
- 인증 폼 구현 원칙에 NIST SP 800-63B 기준 비밀번호 길이, 유출 비밀번호 차단, 문자 조합 강제 금지, 주기적 변경 금지를 반영
- 웹훅, 서버 간 API 서명 설계 용어에 `HTTP Message Signatures`, `Signature-Input`, `Signature`를 추가

## 승인 필요 (고위험)
- AAL2 이상 인증 설계에서 passkey, WebAuthn 등 피싱 저항 인증 옵션 제공을 기본 요구사항으로 격상
- 외부 URL fetch, 웹훅 호출, JWT `jku`/`x5u` 처리 기능에 SSRF 전용 검증 게이트를 필수화

## 신규 도구 후보 (에이전트/스킬)
- [skill] webhook-signature-review — 웹훅 서명 방식, 재생 공격 방어, RFC 9421 적용 여부를 점검
- [skill] ssrf-risk-review — 외부 URL 입력, 리다이렉션, DNS, 사설 IP 우회 방어를 반복 점검
