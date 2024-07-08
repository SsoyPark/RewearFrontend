# RezeroFrontend
## 작업 시작 전 필독
1. 처음에는 `rel/releases` 브랜치를 pull받고 작업을 시작합니다.

2. 각 맡은 기능별로 Git Bash에서 `dev/기능` 브랜치를 생성한 후 작업합니다.

3. 다른 사람이 하고 있는 영역의 코드를 수정하거나 삭제하지 않습니다.

4. 수정이 필요한 경우 해당 사람에게 문의합니다.

5. 변경 사항이 생길 때마다 본인 dev/기능 브랜치에 커밋합니다.

7. 기능이 다 완성되지 않더라도 어느정도 완성이 되면 주기적으로 `git merge` 후 `rel/releases` 브랜치에 푸시합니다.

8. `rel/releases` 브랜치에 푸시할 때 팀원들에게 꼭 알립니다.

9. `rel/releases` 브랜치에 새로운 푸시가 생길 때마다 `pull` 받아 최신 변경 사항을 적용하고 작업을 이어서 합니다.
### 커밋 타입

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등 코드 변경이 없는 경우
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가 또는 수정
- 예시 : feat: 사용자 로그인 기능 추가


## 프로젝트 환경

### 초기화
```bash
npx create-react-app@5.0.1 remage
cd remage
npm install react@18.3 react-dom@18.3 react-router-dom@6.24
```

