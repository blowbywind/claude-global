---
date: 2026-07-29
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-07-29

## 오늘 배운 것
- **AsyncAPI npm 공급망 침해(2026-07-14) 사실관계 확인**: `asyncapi/generator` 저장소의 `pull_request_target` 오설정(PR 헤드를 베이스 저장소 시크릿 컨텍스트에서 체크아웃)이 근본 원인. `@asyncapi/generator` 등 4개 패키지 5개 버전이 악성코드로 오염되어 2026-07-14 배포됨(Chainguard, TheHackerNews 교차확인).
- **PoC 방치 → 실공격까지 3개월**: 동일 취약점이 2026년 4월 Florence Njeri(연구자)가 PoC로 이미 제보했으나 수정 PR이 병합되지 않은 채 방치되다 7월 실공격으로 이어짐(Wiz 리서치, TheHackerNews 인용 확인) → 기존 GitHub Actions 워크플로 감사 시 "과거 PoC 제보·미병합 수정 PR" 확인 항목 추가 가치 있음.
- **import-time 실행으로 install-script 차단 무력화**: 악성코드가 `preinstall/postinstall` 훅이 아니라 모듈이 `require()`될 때 실행되어 `npm install --ignore-scripts` 방어가 통하지 않음(StepSecurity·Microsoft 확인) — 기존 "설치 스크립트 차단"만으로는 불충분함을 시사.
- **Verizon DBIR 2026: 취약점 악용이 초기 침입 벡터 1위(31%)**로 확인(orca.security 인용 원문 대조 완료) — 컨테이너 이미지 스캔·패치 자동화 우선순위 근거로 재확인.
- **OpenTelemetry Collector v0.157.0**이 실제 최신 릴리스임을 GitHub Releases에서 직접 확인.

※ 리서치 산출물 중 "AI 배포 모니터링 도입 시 배포빈도 200%↑·실패율 68%↓" 수치(azati.ai)는 원문에 존재하나 근거 인용·1차 출처가 없는 마케팅성 주장으로 확인되어 채택하지 않고 폐기함.

## 출처
- [AsyncAPI supply chain compromise](https://www.chainguard.dev/unchained/asyncapi-supply-chain-compromise-npm-packages-backdoored-via-github-actions)
- [Compromised AsyncAPI npm Packages Deliver Multi-Stage Botnet Malware](https://thehackernews.com/2026/07/compromised-asyncapi-npm-packages.html)
- [Container Security Best Practices (Verizon DBIR 2026 31% 인용 확인)](https://orca.security/resources/blog/container-security-best-practices/)
- [OpenTelemetry Collector Releases](https://github.com/open-telemetry/opentelemetry-collector-releases/releases)

## 위키화 후보
- 기존 `pull_request_target-시크릿-오설정-패턴` 노트에 AsyncAPI(2026-07-14) 실사고 사례·PoC 방치 3개월 타임라인 추가

## 프로필 반영 후보 (저위험)
- GitHub Actions 워크플로 감사 체크리스트에 "과거 PoC 제보·미병합 보안 수정 PR 존재 여부 확인" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
