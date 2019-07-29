# 26. componentDidCatch로 에러 잡아내기

## 리액트에서 에러가 발생하는 상황

props를 설정하지 않았을 때

1. Users
2. Users List map할 때 undefined
3. onToggle 같이 이벤트 callback 함수

## 해결법

1. null checking
   1. `if(!Props) return null`
2. `defaultProps` 설정
   1. `Component.defaultProps = { ... }`
3. ProtoTypes
   1. TypeScript / Flow 사용시 학습
4. `componentDidCatch`


### componentDidCatch

ErrorBoundary 컴포넌트를 만들고 `componentDidCatch` 메서드를 구현한다.

```js
componentDidCatch(error, info) { ... }
```

error은 에러의 내용, info는 에러가 발생한 위치

이후 에러를 잡을 컴포넌트를 ErrorBoundary 컴포넌트로 감싸준다.

