import React from "react";
import styled from "styled-components";

// Footer 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 웹사이트의 하단부를 구성합니다.
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>넷플릭스 대한민국</FooterLinkTitle>
          <FooterLinkContent>

            {/* 각 링크는 FooterLink 스타일 컴포넌트를 사용하여 표현됩니다. */}
            <FooterLink href="https://help.netflix.com/ko/node/412">넷플릭스 소개</FooterLink>
            <FooterLink href="https://help.netflix.com/ko">고객 센터</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">미디어 센터</FooterLink>
            <FooterLink href="https://help.netflix.com/ko/">이용 약관</FooterLink>
          </FooterLinkContent>
          <FooterDescContainer>
            <FooterDescRights>Netflix Rights Reserved.</FooterDescRights>
          </FooterDescContainer>
        </FooterLinkContainer>
      </FooterContent>
    </FooterContainer>
  );
}

// styled-components를 사용하여 FooterContainer 스타일을 정의합니다.
// styled-components는 React 컴포넌트에 CSS 스타일을 적용하는 라이브러리입니다.
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

// 여기에는 FooterContent, FooterLinkContainer, FooterLinkTitle, FooterLinkContent,
// FooterLink, FooterDescContainer, FooterDescRights에 대한 스타일이 정의됩니다.
// 각 스타일 컴포넌트는 해당하는 HTML 요소의 레이아웃과 디자인을 관리합니다.
const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 768px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.a`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.h2`
  color: white;
  font-size: 14px;
  text-align: center;
`;
