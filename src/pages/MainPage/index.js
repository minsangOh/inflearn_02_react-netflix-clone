import React from "react";

// Banner와 Row 컴포넌트를 임포트합니다. 이들은 페이지의 주요 섹션을 구성합니다.
import Banner from "../../components/Banner";
import Row from "../../components/Row";

// API 요청을 위한 URL을 정의한 객체를 임포트합니다.
import requests from "../../api/requests";

// MainPage 함수형 컴포넌트를 정의합니다. 이 페이지는 앱의 메인 화면을 구성합니다.
export default function MainPage() {
  return (
    <div>

      {/* Banner 컴포넌트를 렌더링합니다. 이 컴포넌트는 페이지 상단의 큰 배너 이미지를 보여줍니다. */}
      <Banner />
      
      {/* Row 컴포넌트를 여러 개 렌더링합니다. 각 Row는 다른 종류의 영화 목록을 보여줍니다. */}
      {/* 각 Row에는 타이틀, 고유 ID, 그리고 fetchUrl이라는 prop이 전달됩니다. */}
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
    </div>
  );
}
