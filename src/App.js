import { Outlet, Routes, Route } from "react-router-dom"; // 라우팅 관련 컴포넌트를 가져옵니다.
import "./App.css"; // App 컴포넌트의 스타일시트를 가져옵니다.
import Footer from "./components/Footer"; // Footer 컴포넌트를 가져옵니다.
import Nav from "./components/Nav"; // Nav 컴포넌트를 가져옵니다.
import MainPage from "./pages/MainPage"; // MainPage 컴포넌트를 가져옵니다.
import DetailPage from "./pages/DetailPage"; // DetailPage 컴포넌트를 가져옵니다.
import SearchPage from "./pages/SearchPage"; // SearchPage 컴포넌트를 가져옵니다.

// Layout 컴포넌트: Nav와 Footer 사이에 페이지의 주 내용이 표시됩니다.
const Layout = () => {
  return (
    <div>
      <Nav /> {/* 네비게이션 바를 렌더링합니다. */}
      <Outlet /> {/* 자식 라우트의 컴포넌트를 렌더링합니다. */}
      <Footer /> {/* 푸터를 렌더링합니다. */}
    </div>
  );
};

// App 컴포넌트: 애플리케이션의 주 라우팅 로직을 관리합니다.
function App() {
  return (
    <div className="app">
      <Routes> {/* 라우트들을 정의합니다. */}
        <Route path="/" element={<Layout />}> {/* 루트 경로에 Layout 컴포넌트를 렌더링합니다. */}
          <Route index element={<MainPage />} /> {/* 기본 경로에 MainPage를 렌더링합니다. */}
          <Route path=":movieId" element={<DetailPage />} /> {/* 영화 상세 페이지 라우트를 정의합니다. */}
          <Route path="search" element={<SearchPage />} /> {/* 검색 페이지 라우트를 정의합니다. */}
        </Route>
      </Routes>
    </div>
  );
}

// App 컴포넌트를 내보냅니다.
export default App;
