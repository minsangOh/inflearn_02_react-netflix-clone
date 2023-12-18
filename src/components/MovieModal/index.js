// React 및 CSS 스타일을 임포트합니다.
import React, { useRef } from "react";
import "./MovieModal.css";

// 외부 클릭 감지를 위한 훅을 임포트합니다.
import useOnClickOutside from "../../hooks/useOnClickOutside";

// MovieModal 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 영화의 상세 정보를 모달 형태로 보여줍니다.
export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  // 모달 외부의 클릭을 감지하기 위한 ref를 생성합니다.
  const ref = useRef();

  // 외부 클릭 시 모달을 닫는 기능을 구현합니다.
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  // 모달 컴포넌트의 UI를 렌더링합니다.
  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>

          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user_perc">
                100% for you
                <span>{release_date ? release_date : first_air_date}</span>
              </span>
            </p>
            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
