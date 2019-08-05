# 2. Context API를 활용한 상태 관리

App에서 todos 상태, onRemove, onToggle, onCreate를 지니게 하고, 해당 값들을 props를 사용하여 자식 컴포넌트들에게 전달해 주는 방식

프로젝트의 규모가 작을 때는 괜찮다.

규모가 커지면 컴포넌트의 코드가 복잡해질 수 있다.
여러 컴포넌트를 통해 전달하는 경우도 있다

Context API 를 활용한 경우 `dispatch`를 사용하여 컴포넌트에서 `dispatch`를 바로 참조하는 방식 -> 깔끔

## 리듀서 만들기

TodoContext.js 만들기
`useReducer`을 사용하여 상태를 관리하는 TodoProvider 컴포넌트 만들기

## Context 만들기

`state`와 `dispatch`를 따로 넣어줌

불필요한 리렌더링 방지
사용과정 편리

## nextId 값 관리하기

`useRef` 사용

## 커스텀 Hook에서 에러 처리

`useTodoState`, `useTodoDispatch`, `useTodoNextId` Hook 을 사용하려면, 해당 컴포넌트가 TodoProvider 컴포넌트 내부에 렌더링되어 있어야 한다.
