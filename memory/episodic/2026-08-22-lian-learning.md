---
date: 2026-08-22
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-22

## 오늘 배운 것
- Claude Code `ANTHROPIC_DEFAULT_MODEL` 환경변수(v2.1.236): 신규 세션 시작 모델 지정, `/model` 수동 선택 시 이를 오버라이드하며 재시작 후에도 유지(`ANTHROPIC_MODEL`과 구분) — 1차 소스 원문 직접대조 완료
- 같은 업데이트에 `notify_when_idle`(크로스세션 SendMessage 옵트인·1회성 유휴 알림, macOS/Linux) 추가 확인
- macOS 샌드박스: 와일드카드 read-deny 규칙이 허용된 read 영역 내에서 우선 적용되고 하위 디렉터리 내용까지 커버하며 파일명 변경으로 우회 불가 — 원문과 일치
- Codex 관련 인용 도메인 `codex-docs.com`은 OpenAI 공식 문서가 아님(공식은 `developers.openai.com/codex/changelog`, 기존 위키 검증사례로 확인) → 해당 항목 전부 폐기

## 출처
- [Claude Code Changelog](https://code.claude.com/docs/en/changelog)

## 위키화 후보
- 「리서치-환각-패턴-목록」에 `codex-docs.com` 비공식 도메인 오귀속 사례 1건 추가(신규 개념 아님, 기존 노트 보강 권고)

## 프로필 반영 후보 (저위험)
- `ANTHROPIC_DEFAULT_MODEL` 환경변수 용어 축적(봇 spawn/세션 기본모델 설정 논의 시 참고)

## 승인 필요 (고위험)
비움

## 신규 도구 후보 (에이전트/스킬)
비움

---
**비고(참고용, 형식 외 보고)**: Antigravity 2.0(techcrunch/blog.google), Antigravity changelog 항목, Google AI Ultra 플랜은 이번 세션 WebFetch/WebSearch가 대부분 도메인에서 권한 거부되어(`code.claude.com`만 예외) 직접 대조 불가 — 채택하지 않고 전량 보류 처리했습니다. 특히 "Antigravity 2.0 I/O 발표" 서사는 2026-07-24 위키 노트(`google-antigravity-2-0-4.md`, 가짜 출처 `mcp.directory` + 오귀속 "Gemini 3.5 Flash")와 구조가 유사해 재검증 우선순위를 높여야 합니다. WebSearch/WebFetch 권한이 세션마다 비일관적으로 막히는 문제는 기존 후보 에이전트(`리서치-검증-권한-정합기`)로 이미 등록되어 있어 중복 제안하지 않았습니다.
