# scope의 이해

## Scope의 뜻

변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위를 말한다.

### 구분

1. Global Scope
   1. 코드의 모든 범위에서 사용 가능
2. Function Scope
   1. 함수 안에서만 사용 가능
3. Block Scope
   1. if, for, switch 등 특정 블록 내부에서만 사용 가능

### 예시

예시 1

```javascript
const value = 'hello!';

function myFunction() {
    console.log('myFunction');
    console.log(value);
}

function anotherFunction() {
    console.log('anotherFunction');
    const value = 'bye'
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);
```

예시 2

```javascript
const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}


myFunction()
console.log('global scope: ');
console.log(value);
console.log(anotherValue);
```


### const, let / var

const/let 으로 선언한 값은 Block Scope 로 선언이 됩니다. 따라서, if 문 같은 블록 내에서 새로운 변수/상수를 선언하게 된다면, 해당 블록 내부에서만 사용이 가능하며, 블록 밖의 범위에서 똑같은 이름을 가진 값이 있다고 해도 영향을 주지 않습니다.

var 는 Function Scope 로 선언이 되므로, if 문 블록 내부에서 선언한 value 값이 블록 밖의 value 에도 영향을 미치게 됩니다.

```javascript
var value = 'hello!';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);
```

## hoisting

Hoisting 이란, 자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식을 의미합니다.

Hoisting 이 발생하는 코드는 이해하기 어렵기 때문에 유지보수도 힘들어지고 의도치 않는 결과물이 나타나기 쉽기 때문에 방지하는 것이 좋습니다.

ESLint를 사용하여 Hoisting을 방지할 수 있습니다.

let과 const가 호이스팅이 되지 않는게 아니라 호이스팅은 되지만 변수생성과정이 달라서 일시적인 사각지대(TDZ, Temporal Dead Zone)가 생성되어 초기화전엔 액세스할수 없다는 레퍼런스 에러를 표시합니다.
[참고자료](https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365)

```javascript
function fn() {
    console.log(a);
    let a = 2;
}
fn();
```
