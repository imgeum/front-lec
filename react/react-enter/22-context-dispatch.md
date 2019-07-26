# Context API를 이용한 전역 값 관리

만약 3~4개 이상의 컴포넌트를 거쳐서 전달을 해야 하는 일이 발생하게 된다면 이는 매우 번거로울 것 입니다.

그럴 땐, 리액트의 Context API 와 이전 섹션에서 배웠던 dispatch 를 함께 사용하면 이러한 복잡한 구조를 해결 할 수 있습니다.

리액트의 Context API 를 사용하면, 프로젝트 안에서 전역적으로 사용 할 수 있는 값을 관리 할 수 있습니다. 여기서 제가 "상태" 가 아닌 "값" 이라고 언급을 했는데요, 이 값은 꼭 상태를 가르키지 않아도 됩니다. 이 값은 함수일수도 있고, 어떤 외부 라이브러리 인스턴스일수도 있고 심지어 DOM 일 수도 있습니다.

Context 를 만들 땐 다음과 같이 React.createContext() 라는 함수를 사용합니다.

```js
const UserDispatch = React.createContext(null);
```

createContext 의 파라미터에는 Context 의 기본값을 설정할 수 있습니다. 여기서 설정하는 값은 Context 를 쓸 때 값을 따로 지정하지 않을 경우 사용되는 기본 값 입니다

Context 를 만들면, Context 안에 Provider 라는 컴포넌트가 들어있는데 이 컴포넌트를 통하여 Context 의 값을 정할 수 있습니다. 이 컴포넌트를 사용할 때, value 라는 값을 설정해주면 됩니다.

```js
<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>
```

이렇게 설정해주고 나면 Provider 에 의하여 감싸진 컴포넌트 중 어디서든지 우리가 Context 의 값을 다른 곳에서 바로 조회해서 사용 할 수 있습니다

지금은 우리가 UserDispatch 라는 Context 를 만들어서, 어디서든지 dispatch 를 꺼내 쓸 수 있도록 준비를 해준 것입니다.

그리고, UserDispatch 를 만들 때 다음과 같이 내보내주는 작업을 했는데요

export const UserDispatch = React.createContext(null);
이렇게 내보내주면 나중에 사용하고 싶을 때 다음과 같이 불러와서 사용 할 수 있습니다.

```js
import { UserDispatch } from './App';
```

이로써 useState 를 사용하는 것과 useReducer 를 사용하는 것의 큰 차이를 발견했지요? useReducer 를 사용하면 이렇게 dispatch 를 Context API 를 사용해서 전역적으로 사용 할 수 있게 해주면 컴포넌트에게 함수를 전달해줘야 하는 상황에서 코드의 구조가 훨씬 깔끔해질 수 있습니다.

만약에 깊은 곳에 위치하는 컴포넌트에게 여러 컴포넌트를 거쳐서 함수를 전달해야 하는 일이 있다면 이렇게 Context API 를 사용하시면 됩니다.