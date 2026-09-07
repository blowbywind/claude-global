---
date: 2026-08-21
bot: lian
type: web-research
tags: [self-learning, AI research papers, industry news, emerging tools]
---

# 리안 자가학습 — 2026-08-21

## 오늘 배운 것
- **`GPT-5.6 Sol` 실존 확인**: `learn.chatgpt.com/docs/models` 원문 직접 fetch(wget) 결과 `gpt-5.6-sol` 슬러그가 "Flagship GPT-5.6 model with the strongest capability for complex coding, computer use, research, and cybersecurity"로 명시됨. 2026-07-05 위키 `리서치-환각-패턴-목록`에 "GPT-5.6 Sol"을 명명규칙 불일치(환각) 예시로 든 판정은 **오판정**이었음 — 정정 필요.
- **Codex GPT-5.4/5.4 Mini 은퇴 확정**: 원문 대조 결과 "on August 31, 2026. Replace gpt-5.4 with gpt-5.6-terra and gpt-5.4-mini with gpt-5.6-luna"로 정확히 확인됨(날짜·대체모델 모두 원문 일치).
- **GPT-5.3 Codex Spark 실존 확인**: 슬러그 `gpt-5.3-codex-spark`, 설명 "Text-only research preview model optimized for near-instant, real-time coding iterat[ion]"으로 원문 확인. 텍스트 전용·리서치 프리뷰 성격 일치.
- **Claude Mythos 5 사이버보안 포스트 확인**: `claude.com/blog-category/announcements` 원문에서 "Aug 21, 2026 / Bringing the cybersecurity capabilities of Claude Mythos 5 to more defenders" 정확히 확인.
- **[미확인, 폐기 아님]** Antigravity changelog(2.9.1/2.8.1/2.8.0) 주장: 도메인은 실존(200 OK)하나 페이지가 SPA(클라이언트 렌더링)라 wget 정적 fetch로는 버전 텍스트 자체가 잡히지 않음 — 원문 대조 실패, 채택 보류.
- **[폐기 유지]** Antigravity 기본모델 Gemini 3.5 Flash 전환, LogRocket 랭킹/SWE-Bench 80.3%, DeepMind "추론 붕괴 40% 완화" 주장은 리안이 이미 저신뢰로 표시했고 1차 소스 대조가 안 되어 그대로 폐기.

## 출처
- [OpenAI Codex 모델 문서 — GPT-5.6 Sol/Terra/Luna, GPT-5.3 Codex Spark, 5.4 은퇴일](https://learn.chatgpt.com/docs/models) (직접 fetch 대조 완료)
- [Claude 공식 블로그 — Mythos 5 사이버보안 포스트](https://claude.com/blog-category/announcements) (직접 fetch 대조 완료)
- [Antigravity changelog](https://antigravity.google/changelog) (도메인 실존만 확인, 버전 내용 미대조)

## 위키화 후보
- `리서치-환각-패턴-목록.md`의 "GPT-5.6 Sol" 예시 정정 노트(오판정 수정, 직접 fetch로 실존 확인됨)

## 프로필 반영 후보 (저위험)
- "SPA 페이지는 wget 정적 fetch로 콘텐츠 미노출 가능 — 버전/체인지로그류 확인 시 렌더링 여부 우선 점검" 검증 팁 축적

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 기존 "출처-대조-검증기" 계열 제안과 중복되어 추가 제안 생략)
