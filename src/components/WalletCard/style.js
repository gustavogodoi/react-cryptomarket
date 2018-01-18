import styled from 'styled-components';

export const CoinDiv = styled.div``;

export const CoinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 30px 30px 30px;
  border-bottom: 1px solid lightgray;

  @media (min-width: 700px) {
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  img {
    margin-right: 5px;
    width: 20px;
    height: auto;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const CoinName = styled.span`
  display: flex;
  align-items: center;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.span`
  font-size: 13px;
`;
