// React의 useEffect와 useState 훅을 임포트합니다.
import { useState, useEffect } from "react";

// useDebounce 훅을 정의합니다. 이 훅은 입력값이 일정 시간 안정되면 최종값을 반환합니다.
export const useDebounce = (value, delay) => {
  
  // debounceValue 상태를 관리합니다. 이 값은 최종적으로 반환될 값입니다.
  const [debounceValue, setDebounceValue] = useState(value);

  // value 값이 변경될 때마다 디바운스 로직을 실행합니다.
  useEffect(() => {

    // 지정된 지연 시간 후에 debounceValue를 업데이트합니다.
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // 컴포넌트가 언마운트되거나 value/delay가 변경될 때 이전 타이머를 제거합니다.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // 최종적으로 디바운스된 값을 반환합니다.
  return debounceValue;
};
