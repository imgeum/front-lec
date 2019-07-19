# JSX

## JSX란

JSX란 리액트에서 생김새를 정의할 때 사용하는 문법이다.
리액트 컴포넌트 파일에서 XML형태로 코드를 작성하면 babel이 JSX를 JavaScript로 변환해준다.

### Babel

Babel은 JS의 문법을 확장해주는 도구이다.
아직 지원되지 않는 최신 문법이나, 편의상 사용하거나 실험적인 JS의 문법들을 정식 JS 형태로 변환해줌으로서 구형 브라우저같은 환경에서도 제대로 실행 할 수 있게 해주는 역할을 한다.

### JSX 규칙

#### 닫혀있는 태그

태그는 닫혀있어야 한다.

#### 감싸져야하는 태그

두 개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 한다.

단순히 감싸기 위하여 불필요한 태그로 감싸지 말고 리액트의 Fragment 를 사용한다

#### style 과 className

인라인 스타일은 객체 형태로 작성해야한다.
`background-color` 처럼 `-`로 구분되어있는 이름들은 `backgroundColor`처럼 camelCase로 네이밍한다.

CSS class를 설정할 때에는 `class=`가 아닌 `className=`으로 설정해야한다.

#### 주석

JSX 내부의 주석은 `{/* 이런 형태로 */}` 작성이 가능하다.

열리는 태그 내부에서 `// 이런 형태로도` 주석 작성이 가능하다.

```javaScript
import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  return (
    <>
      { /* 주석 11 */}
      <Hello
        // 주석 22
      ></Hello>
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
    </>
  );
}

export default App;
```
