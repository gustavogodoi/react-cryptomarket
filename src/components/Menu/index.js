import React from 'react';
import * as st from './style';

const Menu = () => (
  <st.MenuWrapper>
    <st.NavItem exact activeClassName={'active'} to="/">
      List
    </st.NavItem>
    <st.NavItem activeClassName={'active'} to="/grid">
      Grid
    </st.NavItem>
    <st.NavItem activeClassName={'active'} to="/wallet">
      My Wallet
    </st.NavItem>
    <st.NavItem activeClassName={'active'} to="/about">
      About
    </st.NavItem>
  </st.MenuWrapper>
);

export default Menu;
