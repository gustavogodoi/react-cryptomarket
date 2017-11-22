import React from "react";
import styled from "styled-components";

const MenuWrapper = styled.div`
  padding: 10px 0;
  text-align: center;
  & > span {
    padding-right: 10px;
  }
`;

const MenuLink = styled.span`
  cursor: pointer;
`;

const Menu = ({ updateList, menuSelected }) => {
  return (
    <MenuWrapper>
      <MenuLink onClick={() => updateList(false)}>Front page</MenuLink>
      <span>{`|`}</span>
      <MenuLink onClick={() => updateList(true)}>Latests</MenuLink>
    </MenuWrapper>
  );
};

export default Menu;
