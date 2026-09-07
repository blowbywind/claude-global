---
date: 2026-08-30
bot: roun
type: web-research
tags: [self-learning, industry best practices, new tools and libraries, common pitfalls]
---

# 로운 자가학습 — 2026-08-30

## 오늘 배운 것
- `Standard Webhooks` 수신기는 `webhook-id`, `webhook-timestamp`, `webhook-signature` 검증, 타임스탬프 허용 범위, 상수 시간 비교, 이벤트 아이디 기반 멱등 처리를 한 묶음으로 설계해야 합니다. 출처: [Standard Webhooks](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md)
- `HTTP Message Signatures`는 선택한 요청 구성요소의 무결성만 보장합니다. 본문 변조 검증은 `Content-Digest` 또는 `Repr-Digest`를 서명 대상에 포함하고, 기밀성은 TLS로 처리해야 합니다. 출처: [RFC 9421](https://www.rfc-editor.org/rfc/rfc9421.html), [RFC 9530](https://www.rfc-editor.org/rfc/rfc9530.html)
- 분산 추적에서는 `trace-id`를 무작위 기반으로 생성하고, `baggage`는 신뢰 경계 밖으로 나갈 때 민감값 제거 또는 허용 목록 필터링을 적용해야 합니다. 출처: [W3C Trace Context](https://www.w3.org/TR/trace-context/), [W3C Baggage](https://www.w3.org/TR/baggage/)
- URL 가져오기, 웹훅 콜백, 메타데이터 조회기는 SSRF 위험 지점입니다. 허용 목록, 리다이렉트 비활성화, DNS 결과가 내부망 주소로 바뀌는지 감시하는 방어가 필요합니다. 출처: [OWASP SSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
- 이벤트 발행은 “저장됨”과 “처리됨”을 분리해야 합니다. Debezium outbox는 dual-write 불일치를 줄이지만 내부 중복 제거를 보장하지 않고, JetStream은 재시도 발행에 안정적인 `Nats-Msg-Id`와 `PubAck` 확인이 필요합니다. 출처: [Debezium Outbox Event Router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html), [Debezium Exactly Once Delivery](https://debezium.io/documentation/reference/stable/configuration/eos.html), [NATS JetStream Production Checklist](https://docs.nats.io/learn/jetstream/where-next)

## 출처
- [Standard Webhooks](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md)
- [RFC 9421: HTTP Message Signatures](https://www.rfc-editor.org/rfc/rfc9421.html)
- [RFC 9530: Digest Fields](https://www.rfc-editor.org/rfc/rfc9530.html)
- [W3C Trace Context](https://www.w3.org/TR/trace-context/)
- [W3C Baggage](https://www.w3.org/TR/baggage/)
- [OWASP Server Side Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Debezium Outbox Event Router](https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html)
- [Debezium Exactly Once Delivery](https://debezium.io/documentation/reference/stable/configuration/eos.html)
- [NATS JetStream Production Checklist](https://docs.nats.io/learn/jetstream/where-next)

## 위키화 후보
- `Standard Webhooks` — 웹훅 서명 헤더, 재전송 방지, 멱등 처리 표준 노트
- `NATS JetStream publish semantics` — `PubAck`, `Nats-Msg-Id`, 재전송과 중복 저장 방지 노트

## 프로필 반영 후보 (저위험)
- 웹훅 수신기 점검어에 `Standard Webhooks`, `webhook-id`, `webhook-timestamp`, `webhook-signature`, 상수 시간 비교, 멱등 키를 추가
- 이벤트 전달 점검어에 Debezium outbox, Kafka Connect exactly-once 한계, JetStream `PubAck`와 `Nats-Msg-Id`를 추가

## 승인 필요 (고위험)

## 신규 도구 후보 (에이전트/스킬)
- [skill] webhook-receiver-review — 웹훅 수신기를 Standard Webhooks, RFC 9421, RFC 9530 기준으로 점검
- [skill] event-delivery-review — outbox, CDC, JetStream 발행 재시도, 소비자 멱등성 점검
