import axios from "../../api/axios";

// React의 useEffect와 useState 훅을 임포트합니다.
import React, { useEffect, useState } from "react";

// React Router의 useParams 훅을 임포트합니다. 이 훅은 URL 파라미터에 접근할 수 있게 해줍니다.
import { useParams } from "react-router-dom";

// DetailPage 함수형 컴포넌트를 정의합니다. 이 페이지는 특정 영화의 상세 정보를 보여줍니다.
export default function DetailPage() {

  // useParams 훅을 사용하여 URL에서 movieId를 추출합니다.
  const { movieId } = useParams();
  
  // 영화 정보를 관리할 상태를 설정합니다.
  const [movie, setMovie] = useState({});

  // 컴포넌트가 마운트될 때 API를 호출하여 영화 정보를 가져옵니다.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);

  // 영화 정보가 없을 때 로딩 표시를 합니다.
  if (!movie) return <div>...loading</div>;

  // 영화 정보를 보여주는 UI를 렌더링합니다.
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
