import React, { useRef } from "react";
import "./MovieModal.css";

// 외부 클릭 감지를 위한 훅 임포트.
import useOnClickOutside from "../../hooks/useOnClickOutside";

// MovieModal 함수형 컴포넌트를 정의. 영화의 상세 정보를 모달 형태로 랜더링.
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

  // 모달 외부의 클릭을 감지하기 위한 ref 생성.
  const ref = useRef();

  // 외부 클릭 시 모달을 닫는 기능 구현.
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

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
