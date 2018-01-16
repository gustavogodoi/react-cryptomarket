import styled, { injectGlobal } from "styled-components";

injectGlobal`
  html *, html ::after, html ::before {
    backface-visibility: hidden;
    box-sizing: border-box;
    transition: inherit;
  }

  body {
    font-family: "Montserrat";
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
  height: 98vh;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyWrapper = styled.div`
  flex: 1 0 auto;
`;
