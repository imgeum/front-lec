# 21. Custom Hook 제작

커스텀 Hooks 를 만들 때에는 보통 이렇게 `use` 라는 키워드로 시작하는 파일을 만들고 그 안에 함수를 작성합니다.

커스텀 Hooks 를 만드는 방법은 그 안에서 `useState`, `useEffect`, `useReducer`, `useCallback `등 Hooks 를 사용하여 원하는 기능을 구현해주고, 컴포넌트에서 사용하고 싶은 값들을 반환해주면 됩니다.

