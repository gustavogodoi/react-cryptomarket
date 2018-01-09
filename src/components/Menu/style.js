import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.div`
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(100, 50, 21, 6);
  padding: 30px;
  text-align: center;
`;

export const NavItem = styled(NavLink)`
  color: #999;
  padding: 10px 20px;
  font-size: 13px;
  text-decoration: none;
  letter-spacing:2px;
  text-transform:uppercase;

  &.${props => props.activeClassName} {
    color: palevioletred;
    font-weight: bold;
  }

  :hover{
    color: palevioletred;
    border:none;
    background:rgba(0, 0, 0, 0.4);
    background:#fff;
    padding:20px 20px; #000;
  }
`;
