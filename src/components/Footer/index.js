import React from "react";
import * as icons from "./icons";
import { FooterWapper, Author, Social, SocialIcon } from "./style";

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
