// React의 훅과 CSS 스타일을 임포트합니다.
import React, { useEffect, useState, useRef } from "react";
import "./Nav.css";

// 페이지 네비게이션을 위한 useNavigate 훅을 react-router-dom에서 임포트합니다.
import { useNavigate } from "react-router-dom";

// Nav 컴포넌트 정의: 검색 기능과 스크롤에 따라 스타일이 변하는 네비게이션 바 구현
export default function Nav() {
  // 검색어 상태 관리와 스크롤 위치에 따른 네비게이션 바 스타일 변경을 위한 상태 설정
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);

  // 페이지 이동을 위한 useNavigate 훅 사용
  const navigate = useNavigate();

  // 검색 입력 필드에 대한 참조를 생성하고 관리하기 위한 useRef 훅 사용
  const inputRef = useRef(null);

  // 스크롤 이벤트 리스너 설정: 스크롤 위치에 따라 네비게이션 바의 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 검색 입력값 변경 시 navigate 함수를 통해 검색 페이지로 이동
  useEffect(() => {
    if (searchValue) {
      navigate(`/search?q=${searchValue}`);
    }
  }, [searchValue, navigate]);

  // 검색 필드에 자동 포커스 설정
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // 네비게이션 바 렌더링: 로고, 검색 입력 필드, 사용자 아바타 이미지 포함
  return (
    
    // 조건부 클래스 이름 설정: 'show' 상태가 true이면 'nav__black' 클래스 추가
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
        className="nav__logo"
        onClick={() => window.location.reload()}
      />

      <div className="nav__inputContainer">
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="nav__input"
          type="text"
          placeholder="영화를 검색해주세요"
        />
      </div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Marc_Randolph_by_Gage_Skidmore.jpg/1920px-Marc_Randolph_by_Gage_Skidmore.jpg"
        alt=""
        className="nav__avatar"
      />
    </nav>
  );
}
