import styled, { injectGlobal } from "styled-components";

injectGlobal`
  html *, html ::after, html ::before {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-transition: inherit;
      transition: inherit;
  }
  body {
    font-family: "Montserrat";
    margin: 0 15px;
    padding: 0;
    background-color: #F9F9F9
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  flex: 1 0 auto;
`;
