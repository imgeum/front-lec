# 여러 개의 input 상태 관리하기

input에 대한 설명을 보여주는 `placeholder` 값을 설정한다.

```javascript
import React, { useState } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
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
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name}
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

리액트 상태에서 객체를 수정할 때에는

```javascript
inputs[name] = value;
```

이런 식으로 직접 수정하면 안된다.

새로운 객체를 만들어서 변화를 주고, 이를 상태로 사용해주어야 한다.

```javascript
setInputs({
  ...inputs,
  [name]: value
});
```

이러한 작업을, "불변성을 지킨다" 라고 부른다.
불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 됐음을 감지 할 수 있고 이에 따라 필요한 리렌더링이 진행됩니다

추가적으로, 리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있습니다.
