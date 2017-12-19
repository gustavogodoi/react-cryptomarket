import React from "react";
import styled from "styled-components";
import * as icons from "./icons";

const FooterWapper = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Author = styled.div`
  padding-right: 15px;
  color: darkgray;
`;

const Social = styled.div`
  padding-right: 10px;
`;

const SocialIcon = styled.img`
  width: 18px;
`;

const Footer = () => (
  <FooterWapper>
    <Author>by Gustavo Godoi</Author>
    <Social>
      <a href={`https://github.com/gustavogodoi`} target="_blank">
        <SocialIcon src={icons.github} title="GitHub" />
      </a>
    </Social>

    <Social>
      <a href={`https://www.linkedin.com/in/gugodoi/`} target="_blank">
        <SocialIcon src={icons.linkedin} title="LinkdIn" />
      </a>
    </Social>
  </FooterWapper>
);

export default Footer;
