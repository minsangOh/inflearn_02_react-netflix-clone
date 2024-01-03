import { useEffect } from "react";

// 주어진 DOM 요소(ref) 외부의 클릭을 감지하고, 지정된 핸들러(handler) 실행.
const useOnClickOutside = (ref, handler) => {

  // 컴포넌트가 마운트될 때 이벤트 리스너를 설정하고, 언마운트될 때 제거.
  useEffect(() => {

    // 클릭 이벤트를 처리하는 리스너 함수를 정의.
    const listener = (event) => {

      // 클릭된 요소가 ref 요소 내부에 있는 경우, 아무것도 하지 않음.
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      // 클릭된 요소가 ref 요소 외부에 있는 경우, 핸들러 함수를 실행.
      handler();
    };

    // mousedown과 touchstart 이벤트에 리스너를 추가.
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거.
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};

export default useOnClickOutside;
