---
name: blog-post-writer
description: 주제만 주면 SEO 최적화된 블로그 글을 생성하는 스킬. 한국어 기술 블로그, 마케팅 글, 일상 에세이 등에 사용.
---

# 블로그 글쓰기 자동화

## 사용 시점
- "블로그 글 써줘", "포스트 작성"이라는 요청이 들어왔을 때
- 주제, 타겟 독자, 톤이 명시되어 있을 때

## 절차
1. `references/seo-checklist.md` 로드하여 SEO 요건 확인
2. `references/tone-guide.md` 로드하여 톤 결정
3. 아래 구조로 작성:
   - 훅 문장 (3줄 이내)
   - 목차
   - 본문 (H2/H3 사용)
   - 결론 + CTA
4. 메타 설명 150자 작성
5. 추천 태그 5개

## 출력 파일
`output/blog-{slug}-{YYYYMMDD}.md`

## 참고 자료
- references/seo-checklist.md
- references/tone-guide.md
