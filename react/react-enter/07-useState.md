# useState 를 통해 컴포넌트에서 바뀌는 값 관리하기

리액트 16.8 에서 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었다.
이번에는 리액트의 Hooks 중 하나인 useState 라는 함수를 사용해본다.

## 동적인 값 끼얹기, useState

컴포넌트에서 동적인 값을 상태(state)라고 부른다.
리액트의 `useState` 함수를 사용하면 컴포넌트에서 상태를 관리할 수 있다.

```javascript
import React, { useState } from 'react';
```

리액트 패키지에서 `useState`라는 함수를 불러와준다.

```javascript
const [number, setNumber] = useState(0);
```

`useState`를 사용할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다.
이 함수를 호출하면 배열이 반환되는데, 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수이다.

위 코드는 배열 비구조화 할당을 통해 각 원소를 추출한 것이다.
기존 코드는 다음과 같다.

```javascript
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];
```

Setter 함수는 파라미터로 전달받은 값을 최신 상태로 설정해준다.

```javascript
const onIncrease = () => {
    setNumber(number + 1);
}

const onDecrease = () => {
    setNumber(number - 1);
}
```

## 함수형 업데이트

Setter 함수를 사용할 때 업데이트 하고 싶은 새로운 값을 파라미터로 넣어줬다.
대신 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.

```javascript
const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
}

const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
}
```

`onIncrease`와 `onDecrease`에서 `setNumber`를 사용할 때 그 다음 상태를 파라미터로 넣어준 것이 아니라, 값을 업데이트하는 함수를 파라미터로 넣어주었다.

함수형 업데이트는 주로 컴포넌트를 최적화할 때 사용하게 된다.
