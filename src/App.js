import { Outlet, Routes, Route } from "react-router-dom"; // 라우팅 관련 컴포넌트.
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

// Layout 컴포넌트: Nav와 Footer 사이에 페이지의 주 내용이 표시.
const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

// App 컴포넌트: 애플리케이션의 주 라우팅 로직 관리.
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}> {/* 루트 경로에 Layout 컴포넌트를 렌더링. */}
          <Route index element={<MainPage />} /> {/* 기본 경로에 MainPage를 렌더링. */}
          <Route path=":movieId" element={<DetailPage />} /> {/* 영화 상세 페이지 라우트를 정의. */}
          <Route path="search" element={<SearchPage />} /> {/* 검색 페이지 라우트를 정의. */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
