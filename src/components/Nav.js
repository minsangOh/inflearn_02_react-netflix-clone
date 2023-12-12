import React, { useEffect, useState, useRef } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [srearchValue, setSrearchValue] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log("window.screenY", window.screenY);
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  useEffect(() => {
    if (srearchValue) {
      navigate(`/search?q=${srearchValue}`);
    }
  }, [srearchValue, navigate]);

  const handleChange = (e) => {
    setSrearchValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
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
          value={srearchValue}
          onChange={handleChange}
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
