# useRef로 특정 DOM 선택하기

JS를 사용할 때, 특정 DOM을 선택해야 하는 상황에 DOM Selector 함수를 사용하여 DOM 을 선택한다.

리액트를 사용하는 프로젝트에서도 DOM 을 직접 선택해야하는 상황이 있다.

1. 특정 엘리먼트의 크기를 갖고와야 하는 경우
2. 스크롤바의 위치를 가져오거나 설정해야 하는 경우
3. 외부 라이브러리를 사용해야 하는 경우
   1. 특정 DOM 에다 적용해야하기 때문에 DOM 을 선택해야 한다.
   2. 예
      1. HTML5 Video 관련 라이브러리(Video.js, JWPlayer 등)
      2. 그래픽 관련 라이브러리(D3, chart.js 등)

그럴 때는, 리액트에서 `ref`를 사용한다.

함수형 컴포넌트에서 `ref`를 사용할 때 `useRef`라는 Hook 함수를 사용한다.
클래스형 컴포넌트에서는 콜백함수를 사용하거나 `React.createRef`라는 함수를 사용한다.

## InputSample.js

```javascript
import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;
```

위 예제에서는 `onReset` 함수에서 input 에 focus를 하는 `focus()` DOM API를 호출하였다.

`useRef()`를 사용하여 Ref 객체를 만들고, 이 객체를 선택하고 싶은 DOM 에 `ref` 값으로 설정해준다. 그러면, Ref 객체의 `.current`값은 우리가 원하는 DOM을 가르키게 된다.
