import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWapper } from './style';

const Footer = () => (
  <FooterWapper>
    <Link to="/about">About us</Link>
  </FooterWapper>
);

export default Footer;
