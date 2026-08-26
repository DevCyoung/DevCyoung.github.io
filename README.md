# Hello Yoseo

Hugo로 만든 개인 블로그입니다.

## 로컬 실행

1. [Hugo](https://gohugo.io/installation/)를 설치합니다.
2. 저장소 루트에서 `hugo server -D`를 실행합니다.
3. 브라우저에서 `http://localhost:1313`을 엽니다.

새 글은 아래 명령으로 시작할 수 있습니다.

```sh
hugo new content posts/my-post.md
```

`master` 브랜치에 푸시하면 GitHub Actions가 사이트를 빌드해 GitHub Pages에 배포합니다. 저장소의 Pages 설정에서 Source를 **GitHub Actions**로 선택해야 합니다.
