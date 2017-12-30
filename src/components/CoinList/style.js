import styled from "styled-components";

export const List = styled.div`
  padding-top: 10px;
`;

export const GridWrapper = styled.div`
  min-height: 300px;
  padding: 0 15px 30px 15px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 50px 30px 50px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const GridItem = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 1px 1px darkgrey;
  :hover,
  :focus {
    box-shadow: 2px 2px darkgrey;
  }
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  text-align: center;
  font-size: 16px;
`;
