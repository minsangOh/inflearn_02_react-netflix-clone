import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

// SearchPage 함수형 컴포넌트를 정의.  검색 기능을 제공
export default function SearchPage() {

  // 페이지 이동을 위한 useNavigate 훅을 사용.
  const navigate = useNavigate();

  // 검색 결과 상태 관리.
  const [searchResults, setSearchResults] = useState([]);

  // 현재 URL의 쿼리 파라미터를 반환하는 훅을 정의.
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  // URL에서 'q' 쿼리 파라미터를 추출. 사용자가 입력한 검색어.
  const searchTerm = query.get("q");
  
  // 검색어에 대한 디바운스 처리를 적용.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // 검색어가 변경될 때마다 검색 결과를 불러오기.
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  // 검색어를 사용하여 영화를 검색하는 함수.
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  // 검색 결과를 렌더링하는 함수.
  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path != null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            찾고자 하는 검색어 "{debouncedSearchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    );
  };

  return renderSearchResults();
}
