# useCallback을 사용한 함수 재사용

`useCallback`은 `useMemo`와 비슷한 Hook이다.

`useMemo`는 특정 결과값을 재사용한다.
`useCallback`은 특정 함수를 재사용한다.

함수를 선언하는 것 자체는 사실 메모리도, CPU 도 리소스를 많이 차지 하는 작업은 아니기 때문에 함수를 새로 선언한다고 해서 그 자체 만으로 큰 부하가 생길일은 없지만, 한번 만든 함수를 필요할때만 새로 만들고 재사용하는 것은 여전히 중요합니다.

그 이유는, 우리가 나중에 컴포넌트에서 props 가 바뀌지 않았으면 Virtual DOM 에 새로 렌더링하는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업을 할건데요, 이 작업을 하려면, 함수를 재사용하는것이 필수입니다.

```javascript
import React, { useRef, useState, useMemo, useCallback } from 'react';
```

```javascript
const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );

...

const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });

...

const onRemove = useCallback(
    id => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );

...

const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );
```

주의 하실 점은, 함수 안에서 사용하는 상태 혹은 `props` 가 있다면 꼭, `deps` 배열안에 포함시켜야 된다는 것 입니다. 만약에 `deps` 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할때 가장 최신 값을 참조 할 것이라고 보장 할 수 없습니다. `props` 로 받아온 함수가 있다면, 이 또한 `deps` 에 넣어주어야 해요.

사실, `useCallback` 은 `useMemo` 를 기반으로 만들어졌습니다. 다만, 함수를 위해서 사용 할 때 더욱 편하게 해준 것 뿐이지요. 이런식으로도 표현 할 수 있습니다.

```javascript
const onToggle = useMemo(
  () => () => {
    /* ... */
  },
  [users]
);
```


### React DevTools

컴포넌트 렌더링 최적화 작업을 해주어야만 성능이 최적화된다.
어떤 컴포넌트가 렌더링되고 있는지 확인하기 위해서 크롬 웹스토어의 React DevTools를 설치한다.

개발자 도구의 React Tab의 'Highlight Updates'를 체크하여 리렌더링 되는 컴포넌트에 사각형 형태로 하이라이트를 한다.