# HTML과 JavaScript를 연동하기

샤용자의 상호작용(Interaction)에 따라 동적으로 UI를 업데이트할 때, JavaScript를 연동해주어야한다.
상호작용(인터랙션)이 많은 경우에는 Vanilla JavaScript(순수 JS)보다 React, Vue, Angular 등의 도구를 이용한다.
카운터와 모달 예제를 제작해보았다.

## 카운터

https://codesandbox.io/s/cool-ramanujan-tqdvh?fontsize=14

## 모달(Modal)

모달이란, 기존의 내용을 가리고 나타나는 메시지박스 같은 형태의 UI 를 의미한다.
https://codesandbox.io/s/vigorous-shadow-dx22s?fontsize=14

### 문제

1. CodeSandBox에서 코드는 잘 작동하지만 html, css, js파일로는 작동이 되지 않았다.
2. 모든 파일(index.html, src/index.js, src/styles.css)을 작성하고 index.html을 브라우저에서 열어보았지만 css와 js가 적용이 되지 않았다.
3. 새로고침 이후 src/index.js에서 `import './src/styles.css'`를 읽지 못하였다.
4. index.html 의 `<script src='./src/index.js'></script>` 코드의 문제인 줄 알았다.

#### 이유

트위터의 C님이 도움을 주셨다.
CodeSandBox에서는 index.js의 `import './src/styles.css'` 코드처럼 (Parcel)[https://parceljs.org] bundler에서 제공하는 기능인 CSS를 임포트할 수 있었기 때문에 작동하는 것이다.
하지만 브라우저에서는 JS에서 CSS를 import하는 기능이 존재하지 않아서 오류가 생긴 것이다.

#### 해결방법

index.html파일의 head에 ./src/styles.css 파일을 link하고, ./src/index.js 파일에서 import 라인을 삭제하여 해결하였다.
