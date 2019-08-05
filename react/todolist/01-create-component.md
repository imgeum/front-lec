# 1. 컴포넌트 만들기

```bash
$ npx create-react-app mashup-todolist
$ cd mashup-todolist
$ yarn add react-icons styled-components
```

## 만들 컴포넌트

1. TodoTemplate
   1. 투두리스트의 레이아웃을 설정
2. TodoHead
   1. 날짜, 요일, 남은 할 일의 개수를 보여준다.
3. TodoList
   1. TodoItem 컴포넌트를 렌더링한다.
4. TodoItem
   1. 각 할일에 대한 정보를 렌더링한다.
5. TodoCreate
   1. 할 일을 입력 할 수 있는 폼을 렌더링한다.


## GlobalStyle 만들기

styled-components에서 `createGlobalStyle`을 사용하여 글로벌 스타일을 추가할 수 있다.

## TodoTemplate 만들기

## TodoHead 만들기

## TodoList 만들기

`flex: 1`로 영역을 꽉 채우도록 설정.

## TodoItem 만들기

react-icons에서 MdDone과 MdDelete 아이콘을 사용함

## TodoCreate 만들기

`useState`를 사용하여 mdAdd 컴포넌트를 토글할 수 있도록 함.
True => X모양, 입력 폼 보여주기


