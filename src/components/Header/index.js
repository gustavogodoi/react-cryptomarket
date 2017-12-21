/*eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWapper = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
  }
`;
const HeaderText = styled.div`
  text-align: center;
  font-size: 24px;

  @media (min-width: 600px) {
    font-size: 36px;
  }
`;

const Header = () => (
  <HeaderWapper>
    <HeaderText>
      <Link to="/">Cryptocurrency Market 💰</Link>
    </HeaderText>
  </HeaderWapper>
);

export default Header;
