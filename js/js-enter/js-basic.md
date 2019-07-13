# JavaScript 입문

[velopert님 강의자료](https://learnjs.vlpt.us/basics/)

## What is JavaScript

1990년도 부터
node.js - 서버
electron - 윈도우 앱
react native, native script - 모바일
IoT

## 01. Hello-JavaScript

```javascript
console.log("Hello JavaScript!")
console.log(1+2+3+4)
```

[코드샌드박스](codesandbox.io)

## 02. 변수, 상수

변수 - let, var
let

```javascript
let value = 1;
value=2;
let value = 2;
console.log(value);
```

var : 사용 지양. 변수 중복 선언 가능.

```javascript
var a = 1;
var a = 2;
```


상수 - const
```
const a = 1;
a = 2;
const a = 2;
```

1. 숫자
   1. ```let number = 1;```
2. 문자열
   1. ```let string = 'hello'```
   2. ```let string = "문자열"``` 
3. 불리언
   1. ```let good = true```
   2. ```let bad = bad```
   3. 없다
      1. ```null```
         1. ```let friend = null;```
         2. 없다
      2. ```undefined```
         1. ```let criminal = undefined```
         2. 지정하지 않았다.

## 연산자

### 산술 연산자

사칙연산과 같은 작업을 수행

```javascript
let a = 1 + 2 - (3 * 4) / 4;

a++;
++a;
a--;
--a;
```

### 대입 연산자

```javascript
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
```

### 논리 연산자

```javascript
// NOT !
// AND &&
// OR ||

const value = !((true && false) || (true &&false) || !false);
console.log(value)
```

### 비교 연산자

#### '===', '==', '!==', '!='

'==='는 타입 검사를 한다.
'=='는 타입 검사를 하지 않는다. '=='의 사용을 지양.

```javascript
// === : compare type
// == : not compare type
console.log(1 === 1); // true
console.log(1 === '1'); // false

console.log(1 == 1); // true
console.log(1 == '1'); // true
console.log(false == 0); // true;
console.log(true == 1); // true;
console.log(null == undefined); // true
console.log('a' !== 'b'); // true
console.log(1 !== '1'); // true
console.log(1 != '1'); //  false
```

#### '>', '<', '>=', '<='

```javascript
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= a); // true
console.log(a >= c); // true
console.log(b < c); // false
```

### 문자열 붙이기

```javascript
console.log('안녕' + '하세요');
```

## 조건문

### if, else, else if

const
```javascript
const a = 1;
if(a + 1 === 2) {
    const a = 2;
    console.log('if block 안의 a는 ' + a); // 2
} else if() {

} else {

}

console.log('if block 밖 a는' + a); // 1
```

var (사용 지양)
```javascript
var a = 1;
if(a + 1 === 2) {
    var a = 2;
    console.log('if block 안의 a는 ' + a); // 2
}
console.log('if block 밖 a는' + a); // 2
```

### switch case

```javascript
const device = 'iphone'
switch(device) {
    case 'iphone':
        console.log('iphone!');
        break;
    case 'ipad':
        console.log('ipad!');
        break;
    case 'galaxy note':
        console.log('galaxy note!')
        break;
    default:
        console.log('i dont know!')
}
```

## 함수

```javascript
function add(a, b) {
    return a + b;
}

function hello(name) {
    console.log('Hello, ' + name + '!')
}

const sum = add(1, 2);
console.log(sum); // 3
hello('imgeum');
```

### Template Literal

ES6의 문법.
* ES6
  * ECMAScript 6
  * ES2015
  * 자바스크립트의 버전
  * ES7(2016), ES8(2017), ES9(2018), ES10(2019), and so on

```javascript
function hello(name) {
    console.log('Hello ${name}!');
    return 'Hello ${name}!';
}

const result = hello('imgeum');
console.log(result);
```

### 함수 연습

```javascript
function getGrade(score) {
    if (score == 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 70) {
        return 'D';
    } else {
        return 'F';
    }
}

const grade = getGrade(95);
console.log(grade);
```

### 화살표 함수

function의 this와 화살표 함수의 this가 다르다.

```javascript
const add = (a, b) => {
    return a + b;
}

const add = (a, b) => a + b;

const sum = add(1, 2);
console.log(sum); // 3

const hello = (name) => {
    console.log('Hello, ${name}!');
}

hello('imgeum'); // Hello, imgeum!
```

## 객체

### 예시 - 구조

```javascript
const dogName = '멍멍이';
const dogAge = 2;

const dog = {
    // 이름 : 값
    name: '멍멍이',
    age: 2,
    cute: true,
    // key with space: 'asdf',
    'key with space': 'asdf'
    sample: {
        a:1,
        b:2,
    }
};

console.log(dog);
console.log(dog.name);
console.log(dog.age);
```

### 예시 - hero

```javascript
const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

const captainAmerica = {
    name: '스티브 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);

function print(hero) {
    const text = '${hero.alias}(${hero.name})의 역할을 맡은 배우는 ${hero.actor}이다.';
    console.log(text);
}

print(ironMan);
print(captainAmerica);

```

### 비구조화 할당(객체 구조분해)

```javascript
function print(hero) {
    const { alias, name, actor } = hero;
    const text = '${alias}(${name})의 역할을 맡은 배우는 ${actor}이다.';
    console.log(text);
}

function print({ alias, name, actor }) {
    const text = '${alias}(${name})의 역할을 맡은 배우는 ${actor}이다.';
    console.log(text);
}

const { name } = ironMan;
console.log(name); // 토니 스타크
```

### 객체 안에 함수 넣기

함수의 this는 자신이 속해있는 곳을 가르킨다.
객체 내 화살표 함수 사용시 this를 모른다. (undefined)
객체 외부로 함수를 꺼낼 경우 this와의 관계가 사라짐.

```javascript
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    /*
    say: function say() {
        console.log(this.sound);
    }

    say: function() {
        console.log(this.sound);
    }

    // not working
    say: () => {
        console.log(this); //undefined
        console.log(this.sound);
    }
    */

    say() {
        console.log(this.sound);
    }
};

const cat = {
    name: '야옹이',
    sound: '야옹~'
};

cat.say = dog.say;
dog.say(); // 멍멍!
cat.say(); // 야옹~

const catSay = cat.say
catSay = cat.say;
catSay(); //undefined
```

### Getter, Setter 함수

#### Getter 함수

```javascript
const numbers = {
    a: 1,
    b: 2
};

numbers.a = 5;
console.log(numbers);
```

```javascript
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
}

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
```

#### Setter 함수

Setter함수와 겹치지 않기 위해 변수명 앞에 underbar을 붙인다.

```javascript
const dog = {
    _name: '멍멍이',
    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    },
    set name(value) {
        console.log('이름이 바뀝니다..' + value);
        this._name = value;
    }
};

console.log(dog._name);
dog.name = '뭉뭉이'
console.log(dog._name);
console.log(dog.name);
```

```javascript
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    }
    set b(value) {
        this._b = value;
        this.calculate();
    }
}

console.log(numbers.sum);
numbers.a = 5;
numbers.a = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
```

```javascript
const numbers = {
    _a: 1,
    _b: 2,
    get sum() {
        console.log('sum');
        return this.a + this.b;  
    };
}
```

## 배열

배열에는 여러 타입의 변수가 들어갈 수 있다. (숫자, 문자열, 객체, 배열 등)

```javascript
const array = [1, 2, 3, 4, 5]l
const arr = [1, 'blabla', {}, 4];
console.log(array); // [1, 2, 3, 4, 5]
console.log(array[0]) // 1
console.log(array[5]) // undefined
```

array.push로 배열에 삽입 / array.length로 배열의 크기 구하기

```javascript
const objects = [
    { name: '멍멍이' },
    { name: '야옹이' }
];

console.log(objects); // [Object, Object]
console.log(objects[0]); // Object {name: "멍멍이"}
console.log(objects[1]); // Object {name: "야옹이"}

// 배열에 추가
object.push( { name: '멍뭉이' } );
objects.length;
```

## 반복문

### for

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 10; i > 0; i--) {
    console.log(i);
}

for(let i = 10; i > 0; i -= 2) {
    console.log(i);
}
```

```javascript
const names = ['멍멍이', '야옹이', '멍뭉이'];

for(let i = 0; i< names.length; i++) {
    console.log(names[i]);
}
```

### while

```javascript
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
```

```javascript
let i = 0;
let isFun = false;

while(!isFun) {
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
}
```

### for...of

```javascript
const numbers = [10, 20, 30, 40, 50];

for (let number of nubmers) {
    console.log(number);
}
```

### for...in

```javascript
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy))
console.log(Object.keys(doggy))
console.log(Object.values(doggy))

for (let key in doggy) {
    console.log(key);
    console.log('${key}: ${doggy[key]}');
}
```

### continue, break

```javascript
for(let i = 0; i < 10; i++) {
    if(i===2) continue;
    console.log(i);
    if(i===5) break;
}
```

### 연습과 퀴즈

#### 연습

numbers 라는 배열을 파라미터로 받아서 총합을 구하는 함수를 만들어봅시다.

```javascript
function sumOf(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);
```

#### 퀴즈

숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.

[Quiz Link](https://codesandbox.io/s/x3lkzz0m4p?fontsize=14)

내 해답

```javascript
function biggerThanThree(numbers) {
  let arr = [];
  let i = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) arr.push(numbers[i]);
  }

  return arr;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
```

[velopert 정답](https://codesandbox.io/s/lro75070q7?fontsize=14)

```javascript
function biggerThanThree(numbers) {
  const array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      array.push(numbers[i]);
    }
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
```

## 배열 내장함수

### forEach

```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

function print(hero) {
    console.log(hero);
}

superheroes.forEach(print);

superheroes.forEach(function(hero) { 
    console.log(hero);
});

superheroes.forEach((hero) => {
    console.log(hero);
})
```

### map

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for(let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
}

console.log(squared);

const square = n => n * n;
const squared_arr = array.map(square);
const squared_arr = array.map(n => n * n);
console.log(squared);
```

```javascript
const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);
```

### indexOf

```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);
```

### findIndex

배열 안에 있는 값이 객체일 경우 

```javascript
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index); // 2
```

### find

찾아낸 값 자체를 반환합니다.

```javascript
const todo = todos.find(todo => todo.id === 3);
console.log(todo);
```

### filter

filter 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣는다.


```javascript
const tasksNotDone = todos.filter(todo => todo.done === false);
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
```

### splice

splice 는 배열에서 특정 항목을 제거할 때 사용합니다.

```javascript
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers);
```

### slice

slice는 배열에서 특정 항목을 제거하지만 기존의 배열은 건들이지 않는다.


```javascript
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
```

### shift

shift는 첫번째 원소를 배열에서 추출한다. (추출과정에서 배열에서 해당 원소는 삭제됨)

```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
```

### pop

pop은 배열의 마지막 항목을 추출한다.

```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
```

### unshift

배열의 맨 앞에 새 원소를 추가합니다.

```javascript
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
```

### concat

여러개의 배열을 하나의 배열로 합쳐줍니다.
arr1 과 arr2 에 변화를 주지 않습니다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
```

### join

join 은 배열 안의 값들을 문자열 형태로 합쳐줍니다.

```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

### reduce

reduce(, 초깃값)

```javascript
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});

let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
```

## Quiz

```javascript
function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
```

```javascript
function countBiggerThanTen(numbers) {
  let count = 0;
  numbers.forEach(num => {
      if(num > 10) count++;
  });

  //return numbers.filter(n => n > 10).length;

  /*
  return numbers.reduce((acc, current) => {
    if (current > 10) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  */
  return  count;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
```
