# 조건문 더 똑똑하게 쓰기

## 특정 값이 여러 값중 하나인지 확인해야 할 때

이전

```javascript
function isAnimal(text) {
    return (
        text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    );
}

console.log(isAnimal('개'))
console.log(isAnimal('노트북'))
```

이후

```javascript
const isAnimal = text => ['고양이', '개', '거북이', '너구리'].includes(text);

function isAnimal(text) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.include(text)
}

console.log(isAnimal('개'))
console.log(isAnimal('노트북'))
```

## 값에 따라 다른 결과물을 반환 해야 할 때

이전 - if

```javascript
function getSound(animal) {
    if (animal === '개') return '멍멍';
    if (animal === '고양이') return '야옹';
    if (animal === '참새') return '짹짹';
    if (animal === '비둘기') return '구구';
    return '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));
```

이전 - switch case

```javascript
function getSound(animal) {
    switch (animal) {
        case '개':
            return '멍멍';
        case '고양이':
            return '야옹';
        case '참새':
            return '짹짹';
        case '비둘기':
            return '구구';
        default:
            return '...?';
    }
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));
```

이후 - 객체를 사용한 조건문

```javascript
function getSound(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        참새: '짹짹',
        비둘기: '구구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));
```

## 값에 따라 실행해야 하는 코드 구문이 다를 때

```javascript
function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기() {
            console.log('구구');
        }
    };
    
    const task = tasks[animal];
    if(!task) {
        console.log('...?');
        return;
    }

    task();
}

makeSound('개');
makeSound('비둘기');
makeSound('인간');
```
