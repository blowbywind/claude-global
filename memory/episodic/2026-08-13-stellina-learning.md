---
date: 2026-08-13
bot: stellina
type: web-research
tags: [self-learning, CI/CD best practices, container security, observability]
---

# 스텔리나 자가학습 — 2026-08-13

## 검증 요약

리서치 9개 항목 중 웹 원문 대조(WebFetch 차단 → wget 폴백) 결과, OTel CNCF 졸업/Collector 버전/Blueprints, GitHub Actions 2026 로드맵, OIDC 단기 크리덴셜, 카나리+피처플래그 병행 권고는 위키에 이미 기존 노트로 존재해 **중복 제외**했습니다. 또한 "GitHub Actions 로드맵 4대 익스플로잇 범주" 주장은 원문 대조 결과 실제로는 3개 범주(비신뢰 코드 실행/관측성 없는 악성 워크플로/과권한 크리덴셜 유출)만 명시되어 있어 "종속성 오염 전파"는 원문 미확인으로 **폐기**했습니다. 아래는 신규·검증 통과 항목만 정리한 결과입니다.

## 오늘 배운 것
- GitHub Actions 러너를 악용해 cPanel/WHM 서버를 표적한 공급망 공격(CVE-2026-41940, 583개 워크플로·10개 버전 동원, 2026-07-12~13)이 실제 확인됨 — 러너 격리·아웃바운드 네트워크 제어 점검 근거로 활용 가능
- Datadog 2026 State of DevSecOps: 조직의 38%가 스크립트 인젝션·위험한 트리거에 취약한 GitHub Actions 워크플로 보유 — CI 보안 체크리스트(`pull_request_target` 시크릿 분리 등 기존 항목)의 정량적 근거로 추가 가능
- gVisor(Sentry, 유저스페이스 syscall 재구현, 호스트 syscall ~50개 노출 vs 일반 컨테이너 400개+)와 Kata Containers(pod당 별도 VM/커널)의 아키텍처 차이 원문 확인 — CVE-2019-5736(runc)·CVE-2022-0847(Dirty Pipe)이 두 런타임에서 구조적으로 무효화되는 이유가 구체적으로 설명됨. 컨테이너 보안 체크리스트에 "공유 커널 한계 → 런타임 격리 옵션" 항목으로 활용 가능
- (참고, 낮은 신뢰도) AI 기반 위험도 산정으로 배포 패턴(저위험=직배포/고위험=확장 소크+점진 전환)을 동적 선택하는 트렌드 언급 확인 — 단, 출처가 벤더 마케팅 블로그(azati.com)라 기술 사실이라기보다 업계 트렌드 소개 수준으로만 참고

## 출처
- [Attackers Weaponize GitHub Actions to Target cPanel/WHM Servers](https://thehackernews.com/2026/07/attackers-weaponize-github-actions.html)
- [The Case for GitHub Actions Security (Datadog Security Labs)](https://securitylabs.datadoghq.com/articles/case-for-github-actions-security/)
- [gVisor and Kata Containers: What the Shared Kernel Problem Forced the Industry to Build](https://www.systemshardening.com/articles/cross-cutting/gvisor-kata-shared-kernel-defense/)
- [AI-Powered Progressive Delivery: Intelligent Feature Flags 2026](https://azati.com/blog/ai-powered-progressive-delivery-feature-flags-2026/) (참고용, 낮은 신뢰도)

## 위키화 후보
- gVisor/Kata 공유 커널 방어 아키텍처(Sentry syscall 축소, VM-per-pod) — 기존 `runc-컨테이너-이스케이프-cve` 노트와 별개로 "런타임 격리 옵션" 신규 개념 노트 가치 있음

## 프로필 반영 후보 (저위험)
- 컨테이너 보안 체크리스트에 "정적 스캔(Trivy) 이후: 런타임 격리(gVisor/Kata) 채택 고려" 항목 추가

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음)
