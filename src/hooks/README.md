# React Hooks 와 Custom Hooks

## 1. React의 Hooks

### Hooks란 무엇인가?
Hooks는 함수 컴포넌트에서 React의 상태와 생명주기 기능을 "연동(hook into)"할 수 있게 하는 함수입니다. React 16.8에서 클래스를 작성하지 않고도 상태 관리 및 다른 React 기능을 사용할 수 있도록 도입되었습니다.

### Hooks를 사용하는 이유
Hooks는 클래스 기반 컴포넌트보다 React 기능을 직접적으로 사용할 수 있는 API를 제공합니다. 이를 통해 컴포넌트 로직을 더 쉽게 재사용할 수 있으며, 코드의 가독성과 구조를 개선할 수 있습니다.

### 기본 Hooks
React는 여러 기본 Hooks를 제공합니다:
## React의 기본 Hooks 설명

### `useState`
- `useState` 훅은 React 컴포넌트에서 상태(state)를 관리하는데 사용됩니다.
- 이 훅을 사용하면 함수 컴포넌트 내에서도 상태를 가질 수 있게 됩니다.
- `useState`는 상태값과 이 상태를 업데이트하는 함수를 제공합니다. 예를 들어, `const [count, setCount] = useState(0)`은 `count`라는 상태 변수를 만들고, 이를 0으로 초기화하며, `setCount` 함수를 사용하여 `count` 값을 업데이트할 수 있게 합니다.

### `useEffect`
- `useEffect` 훅은 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있게 해줍니다.
- 이는 컴포넌트의 생명주기(lifecycle)에 대응하는 역할을 합니다. 예를 들어, 컴포넌트가 화면에 나타날 때 API 요청을 보내거나, 컴포넌트가 사라질 때 이벤트 리스너를 정리하는 등의 작업을 수행할 수 있습니다.
- `useEffect`는 두 개의 인자를 받습니다: 실행할 함수와 의존성 배열(dependency array). 의존성 배열에 지정된 변수가 변경될 때마다 함수가 실행됩니다.

### `useContext`
- `useContext` 훅은 React Context를 사용하여 컴포넌트 트리 전반에 걸쳐 데이터를 공유할 수 있게 해줍니다.
- Context는 주로 전역적인 데이터(예: 현재 로그인한 사용자, 테마 등)를 관리하는 데 사용됩니다.
- `useContext`를 사용하면 컴포넌트 트리의 어느 곳에서나 Context의 현재 값을 읽을 수 있습니다. 이를 통해 prop 드릴링(prop drilling, 즉 여러 컴포넌트를 거쳐 prop을 전달하는 것)의 필요성을 줄일 수 있습니다.

```javascript
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## 2. Custom Hooks

### Custom Hooks란 무엇인가?
Custom Hooks는 개발자가 직접 정의한 Hooks로, 여러 컴포넌트에서 재사용 가능한 로직을 캡슐화합니다. 이를 통해 컴포넌트 간 상태 관리 로직의 중복을 줄일 수 있습니다.

아래는 검색어 입력값의 디바운스 처리를 위한 커스텀 훅의 예시입니다:
```javascript
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

## 3. Hooks와 Custom Hooks의 차이점
- **Hooks**: React에서 제공하는 기본적인 기능을 위한 훅입니다. (`useState`, `useEffect` 등)
- **Custom Hooks**: 사용자가 특정한 로직을 위해 직접 만든 훅입니다. Custom Hooks는 기본 Hooks와 다른 훅을 조합하여 만들 수 있습니다.
