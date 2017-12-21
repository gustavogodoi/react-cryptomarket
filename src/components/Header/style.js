import styled from "styled-components";

export const HeaderWapper = styled.div`
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

export const HeaderText = styled.div`
  text-align: center;
  font-size: 24px;

  @media (min-width: 600px) {
    font-size: 36px;
  }
`;
