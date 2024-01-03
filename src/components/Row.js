import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal";

// Swiper 라이브러리에서 필요한 모듈을 임포트. Swiper는 슬라이드 기능 제공.
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Swiper 임포트.
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Row 컴포넌트를 정의. 이 컴포넌트는 영화 리스트 랜더링.
export default function Row({ isLargeRow, title, id, fetchUrl }) {
  
  // 영화 목록과 모달 상태를 관리하기 위한 상태를 설정.
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  // 영화 목록을 API로부터 불러오기 위한 useEffect 훅.
  useEffect(() => {
    const fetchMovieData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchMovieData();
  }, [fetchUrl]); // fetchUrl이 변경될 때마다 함수가 실행.

  // 영화를 클릭했을 때 모달을 열기 위한 함수.
  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1378: {
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          <div id={id} className="row__posters">
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <img
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}
