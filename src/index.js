import React from "react"; // React 라이브러리를 가져옵니다.
import ReactDOM from "react-dom/client"; // React DOM 라이브러리의 클라이언트 부분을 가져옵니다.
import "./index.css"; // index.css 스타일시트를 가져옵니다.
import App from "./App"; // App 컴포넌트를 가져옵니다.
import reportWebVitals from "./reportWebVitals"; // 웹 성능 측정을 위한 유틸리티를 가져옵니다.
import { BrowserRouter } from "react-router-dom"; // 리액트 라우터 라이브러리에서 BrowserRouter를 가져옵니다.

// 'root'라는 ID를 가진 DOM 요소에 React 애플리케이션을 마운트합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // BrowserRouter 컴포넌트로 App 컴포넌트를 감싸 라우팅을 가능하게 합니다.
  // basename은 기본 URL 경로를 설정합니다.
  <BrowserRouter basename="react-netflix-clone">
    <App />
  </BrowserRouter>
);

// 웹 성능 측정 함수를 호출합니다. 필요에 따라 사용자 정의 로그 함수를 전달할 수 있습니다.
reportWebVitals();
