# input 상태 관리하기

input의 `onChange` 이벤트를 사용한다.
`useState`를 사용하여 인 input DOM 을 가르키고, 이 DOM의 `value`값인 `e.target.value`를 조회하면 현재 input에 입력한 값을 알 수 있다.
이 값을 `useState`를 통해서 관리한다.

```javascript
import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
```

input의 상태를 관리할 때 input 태그의 `value` 값을 설정해줘야 상태가 바뀌었을 때 input 의 내용도 업데이트된다.
