import axios from "../../api/axios";
import React, { useEffect, useState } from "react";

// React Router의 useParams 훅을 임포트. 이 훅은 URL 파라미터에 접근할 수 있게 해줌.
import { useParams } from "react-router-dom";

// DetailPage 함수형 컴포넌트를 정의. 특정 영화의 상세 정보 랜더링.
export default function DetailPage() {

  // useParams 훅을 사용하여 URL에서 movieId를 추출.
  const { movieId } = useParams();
  
  // 영화 정보를 관리할 상태를 설정.
  const [movie, setMovie] = useState({});

  // 컴포넌트가 마운트될 때 API를 호출하여 영화 정보 가져오기.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  // 영화 정보가 없을 때 로딩 표시.
  if (!movie) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}
