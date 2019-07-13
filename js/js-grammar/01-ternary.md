# 삼항 연산자

ES6 문법은 아니다.

## Usage 1

```javascript
// 조건 ? true일때 : false일때
const array = [];
let text_1 = array.length === 0 ? '배열이 비어있습니다' : '배열이 비어있지 않습니다.';
```

## Usage 2

```javascript
let text_2 = array.length === 0 
  ? '배열이 비어있습니다' 
  : '배열이 비어있지 않습니다.';
```

## Usage 3 - 중첩

가독성이 좋지 않으면 if문으로 처리하기.

```javascript
const condition1 = false;
const condition2 = false;

const value = condition1 
  ? '와우!' 
  : condition2 
    ? 'blabla' 
    : 'foo';

console.log(value);
```
