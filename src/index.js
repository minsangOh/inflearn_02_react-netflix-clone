import React from "react";
import ReactDOM from "react-dom/client"; // React DOM 라이브러리의 클라이언트 부분 임포트.
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; // 웹 성능 측정을 위한 유틸리티.
import { BrowserRouter } from "react-router-dom"; // 리액트 라우터 라이브러리에서 BrowserRouter 임포트.

// 'root'라는 ID를 가진 DOM 요소에 React 애플리케이션을 마운트.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // BrowserRouter 컴포넌트로 App 컴포넌트를 감싸 라우팅을 가능하게 함.
  // basename은 기본 URL 경로를 설정.
  <BrowserRouter basename="react-netflix-clone">
    <App />
  </BrowserRouter>
);

// 웹 성능 측정 함수를 호출. 필요에 따라 사용자 정의 로그 함수를 전달.
reportWebVitals();
