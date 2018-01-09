import styled from "styled-components";

export const WalletWrapper = styled.div``;

export const CoinDiv = styled.div`
  padding: 0 50px;
`;

export const CoinWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid lightgray;
  flex-flow: column;

  @media (min-width: 700px) {
    flex-flow: row;
  }
`;

export const CoinName = styled.div`
  width: 100%;
  font-size: 17px;
`;

export const Title = styled.span`
  font-size: 13px;
`;
