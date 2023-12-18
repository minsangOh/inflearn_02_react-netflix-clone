import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
import "./Banner.css";
import styled from "styled-components";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화들의 정보 가져오기
    const request = await axios.get(requests.fetchNowPlaying);

    // 여러 영화 중 하나의 id 가져오기
    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 특정 영화의 상세 정보 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  // 설명글이 100자 넘어가면 ...으로 바꾸기
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  // 영화 정보가 클릭되지 않았을 경우 배너를 표시합니다.
  if (!isClicked) {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            
            {/* 'title', 'name', 'original_name' 중 하나라도 존재하면 해당 값을 사용합니다.
            '||' 연산자는 왼쪽에서 오른쪽으로 평가하며, 처음으로 'truthy' (진실 같은) 값을 만나면 그 값을 반환합니다.
            만약 'movie.title'이 존재하면 'movie.title'을, 그렇지 않고 'movie.name'이 존재하면 'movie.name'을,
            둘 다 없으면 'movie.original_name'을 표시합니다. */}
            {movie.title || movie.name || movie.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              Play
            </button>
            <button className="banner__button info">More Information</button>
          </div>
          <h1 className="banner__description">{truncate(movie.overview)}</h1>
        </div>
        <div className="banner__fadeBottom"></div>
      </header>
    );
  } else {
    return (
      <Container>
        <HomeContainer>
          <Iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; fullscreen"
          ></Iframe>
        </HomeContainer>
      </Container>
    );
  }
}

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  border: none;

  &::after {
    content: "" positions absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-directionL column;
  width: 100%;
  height: 100vh;
  `;

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
