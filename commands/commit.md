---
description: Conventional Commits 형식의 깔끔한 커밋 생성
---

현재 변경 사항을 분석하여 Conventional Commits 형식으로 커밋하세요.

## 절차
1. `git status` 및 `git diff` 실행
2. 변경 사항을 논리적 단위로 그룹화
3. 아래 형식으로 커밋 메시지 작성:

````
<type>(<scope>): <subject>

<body>

<footer>
````

## type 종류
- **feat**: 새 기능
- **fix**: 버그 수정
- **docs**: 문서
- **style**: 포맷 (코드 동작 변경 없음)
- **refactor**: 리팩토링
- **test**: 테스트
- **chore**: 빌드/설정

## 규칙
- subject는 50자 이내, 명령형 (예: "add login API" / "fix typo")
- body는 "왜"를 설명 (무엇이 아니라)
- 한 커밋 = 한 가지 논리적 변경
- scope는 모듈명 또는 도메인명 (예: auth, members, db)

## 작성 예시
````
feat(auth): add JWT refresh token endpoint

기존 access token만으로는 7일 이상 세션 유지가 어려워
refresh token 발급/갱신 로직을 추가함.

Closes #42
````

추가 컨텍스트: $ARGUMENTS
