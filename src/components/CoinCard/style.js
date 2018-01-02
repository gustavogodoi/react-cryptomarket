import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const CoinImageWrapper = styled.div`
  padding-right: 10px;
`;

export const CoinImage = styled.img``;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const CardTitleWrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

export const CardTitle = styled.span`
  padding-right: 10px;
`;

export const Symbol = styled.span`
  font-weight: bold;
`;

export const Price = styled.span`
  flex: 1 1 50%;
  text-align: right;
`;

export const MarketCap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

export const CoinCap = styled.span`
  flex: 1 1 auto;
  padding-right: 5px;
  :nth-child(2) {
    text-align: center;
  }
  :nth-child(3) {
    text-align: right;
  }
`;

export const FavoriteWrapper = styled.span`
  padding-right: 5px;
`;
