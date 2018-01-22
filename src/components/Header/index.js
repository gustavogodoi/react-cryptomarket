/*eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWapper, HeaderText } from './style';

const Header = () => (
  <HeaderWapper>
    <HeaderText>
      <Link to="/">Cryptocurrency Market! 💰</Link>
    </HeaderText>
  </HeaderWapper>
);

export default Header;
