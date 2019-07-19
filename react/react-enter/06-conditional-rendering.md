# 조건부 렌더링

특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미한다.

## 삼항연산자

```javascript
function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}
```

`isSpecial` 값이 `true` 라면 `<b>*</b>` 를, 그렇지 않다면 `null` 을 보여주도록 했다.
참고로 JSX 에서 null, false, undefined 를 렌더링하게 된다면 아무것도 나타나지 않는다.
하지만 0을 렌더링하면 나타난다.

보통 삼항연산자를 사용한 조건부 렌더링은 특정 조건에 따라 보여줘야 하는 내용이 다를 때 사용한다.

## && / || 연산자

특정 조건이 `true`이면 보여주고, 그렇지 않다면 숨겨주는 상황에서는 `&&`연산자를 사용해서 처리한다.

## props 값 설정을 생략하면 = {true}

props 이름만 작성하고 값 설정을 생략하면 `true`로 설정한 것으로 간주한다.
