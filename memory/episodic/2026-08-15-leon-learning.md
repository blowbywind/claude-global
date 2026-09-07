---
date: 2026-08-15
bot: leon
type: web-research
tags: [self-learning, SVG iconography & vector graphics, image editing & optimization, illustration systems]
---

# 레온 자가학습 — 2026-08-15

레온의 리서치 결과를 원문 URL 직접 fetch로 교차검증했습니다. 결과를 반영해 최종 출력합니다.

**검증 요약**: picdefense.io(Pixabay ToS 출처)·checkthat.ai(Recraft 가격 출처) 모두 비공식 3자 사이트로 확인 — Pixabay 건은 공식 API 문서(pixabay.com/api/docs)로 직접 재확인해 내용 일치, 출처만 공식으로 교체. Recraft 건은 "$0.08/vector 이미지" 문구는 원문에 실제 존재하나 "V4.1/V4.1 Pro 버전별 $0.30" 구분은 원문에 없어 폐기. resvg-js는 npm/GitHub API로 직접 조회한 결과 "2026-04-08 업데이트" 날짜가 사실과 달라(실제: npm 최신배포 2024-03, GitHub 최근 push 2026-06~08) 정정. rembg는 GitHub API로 스타 수(2.4만+) 재확인. SVGO 4.0.2는 npm registry로 발행일(2026-07-11) 직접 확인.

## 오늘 배운 것
- **resvg-js**: Rust 엔진 기반 SVG 렌더링 라이브러리(Node.js/WASM 바인딩), 서버사이드 SVG→PNG 변환에 활용 가능. 코어 저장소(linebender/resvg)는 최근까지 활발히 유지보수 중(GitHub push 2026-08-13 확인) — 브라우저 없는 고정밀 래스터화 파이프라인 후보로 인지.
- **Pixabay API 이용약관**(공식 문서 직접 확인): 응답 24시간 캐싱 의무, 영구 핫링크 금지(다운로드 후 자체 서버 저장 권장), 대량 자동 다운로드 금지 — leon의 기존 "curl로 다운로드 후 프로젝트 폴더 저장" 방식이 이 조건에 정확히 부합함을 공식 출처로 재확인.
- **rembg**(오픈소스 배경 제거, GitHub 확인): 2.4만+ 스타, pip 설치 로컬 실행(업로드·비용 없음, 배치 처리 가능) — remove.bg 유료 API 대체 후보.
- **Recraft AI 벡터 생성 API 비용**: vector 이미지 생성 약 $0.08/장(3자 분석 자료 기준, 공식 확정치 아님) — 결제 연결 시 SVG 직접 산출 옵션 후보로만 참고, 세부 요금제 구분은 미확인.

## 출처
- [resvg (linebender/resvg) — GitHub](https://github.com/linebender/resvg)
- [Pixabay API 공식 문서](https://pixabay.com/api/docs/)
- [rembg — GitHub](https://github.com/danielgatis/rembg)
- [Recraft Pricing 2026 — CheckThat.ai (3자 분석, 참고용)](https://checkthat.ai/brands/recraft/pricing)
- [SVGO — npm](https://www.npmjs.com/package/svgo)

## 위키화 후보
- resvg-js: 서버사이드 SVG 래스터화 도구로 개념 노트 신설 가치 있음(썸네일/PNG 변환 파이프라인 후보).

## 프로필 반영 후보 (저위험)
- rembg(로컬 오픈소스 배경 제거)를 이미지 편집 툴체인 후보 용어로 인지.

## 승인 필요 (고위험)
(없음)

## 신규 도구 후보 (에이전트/스킬)
(없음 — 결제/설치가 필요한 외부 도구로 자동화 반복작업 근거 부족)
