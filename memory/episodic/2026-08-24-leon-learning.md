---
date: 2026-08-24
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-24

웹리서치 산출물(레온)을 위키 기존 기록과 대조 검증했습니다. WebFetch·curl 외부요청은 이번 세션에서도 권한 거부(승인 불가)로 실사 대조는 불가했고, 위키 grep 교차검증만 수행했습니다.

## 오늘 배운 것
- **BiRefNet이 배경제거 커뮤니티 기본값으로 부상 중** — U2Net보다 머리카락·털·반투명 경계 처리 우수, MIT 라이선스+HuggingFace 지원. 08-23 기록한 backgroundremover(U2Net) 후보를 대체할 유력 후보로 인지(단, 출처가 개인 dev.to 블로그 1건뿐이라 신뢰도는 중간 — 공식 리포지토리 재확인 전까지 "채택"이 아닌 "인지" 단계로만 반영)
- **Figma Weave, Config 캔버스 통합에 다중 모델(Google/Kling/Runway/Recraft) 지원 세부사항 추가 확인** — 기존 위키(2026-08-18 노트)에 "Weave Tools 캔버스 통합" 골자는 이미 있었으나 구체 모델 목록·베타 무료 여부는 신규 세부정보로 노트 보강 대상
- **dotlottie-rs(ThorVG 코어) v0.1.58, 테마·상태머신 기능 예고** — 기존 dotlottie 노트에 버전 갱신 정보로 추가할 가치
- **Lucide 최신 버전 v1.33.0(4일 주기 릴리즈), v2 전환 없음** — 기존 위키의 "v1.0(2026-06)" 노트 이후 버전 흐름 확인, GitHub 공식 소스지만 이번 세션엔 실사 대조 불가(정황상 신뢰)
- SVGO 4.0.2·corner-shape Baseline 미도달·AVIF~93%/JPEG XL~12% 등 나머지 항목은 기존 위키 기록과 전부 일치(신규성 없음, 재확인만 됨) — 별도 반영 불필요

## 출처
- [BiRefNet vs Rembg vs U2Net — dev.to](https://dev.to/om_prakash_3311f8a4576605/birefnet-vs-rembg-vs-u2net-which-background-removal-model-actually-works-in-production-4830) — 개인 블로그, 미검증
- [Five Figma Weave workflows — Figma Blog](https://www.figma.com/blog/five-figma-weave-workflows/) — 공식 소스, 실사 대조 불가
- [Lucide Releases — GitHub](https://github.com/lucide-icons/lucide/releases) — 공식 소스, 실사 대조 불가
- [dotlottie-rs — GitHub](https://github.com/LottieFiles/dotlottie-rs) — 공식 소스

## 위키화 후보
- BiRefNet(배경제거 모델) — 신규 개념 노트, 단 status는 ai-curated(미검증)로 표기해 backgroundremover 노트를 대체가 아닌 "후보 병기"로 남길 것

## 프로필 반영 후보 (저위험)
- Lucide v1.33.0 / dotlottie-rs v0.1.58 버전 인지 — 기존 노트 버전 갱신 수준의 저위험 반영

## 승인 필요 (고위험)
- (없음)

## 신규 도구 후보 (에이전트/스킬)
- (없음 — 기존 "출처-대조-검증기-wget-폴백-내장" 후보가 이미 카탈로그에 등록돼 있으며, 이번 세션에서도 WebFetch·curl 승인 거부가 재현(2026-07-16/22/29/30에 이은 5번째)됨을 재확인. 신규 후보 추가 대신 리나·학습 스케줄러 담당에게 기존 후보의 실제 도입 여부 결정을 재요청 권고)
