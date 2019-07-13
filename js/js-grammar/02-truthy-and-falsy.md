# Truthy and Falsy

## 오류 예시

```javascript
function print(person) {
  if (person === undefined || person === null) {
    console.log('person이 없네요');
    return;
  }

  /*
  if (!person) {
    console.log('person이 없네요');
    return;
  }
  */

  console.log(person.name);
}

const person = null;
print(person);
```

## Falsy

Falsy한 값들이다. 이것들을 제외한 모두는 Truthly한 값이다.

```javascript
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
```
