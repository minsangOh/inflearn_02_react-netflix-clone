import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

// MainPage 함수형 컴포넌트를 정의. 앱의 메인 화면을 구성.
export default function MainPage() {
  return (
    <div>
      <Banner />
      {/* Row 컴포넌트를 여러 개 렌더링. 각 Row는 다른 종류의 영화 목록을 랜더링. */}
      {/* 각 Row에는 타이틀, 고유 ID, 그리고 fetchUrl이라는 props 전달. */}
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
