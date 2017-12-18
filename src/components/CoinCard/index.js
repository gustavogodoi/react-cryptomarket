import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 500px;
`;

const CoinImageWrapper = styled.div`
  padding-right: 10px;
`;

const CoinImage = styled.img``;

const InfoWrapper = styled.div`
  width: 100%;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  padding-bottom: 5px;
`;

const CardTitle = styled.span`
  padding-right: 10px;
`;

const Symbol = styled.span`
  font-weight: bold;
`;

const Price = styled.span`
  flex: 1 1 50%;
  text-align: right;
`;

const MarketCap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const CoinCap = styled.span`
  flex: 1 1 auto;
  padding-right: 5px;
  :nth-child(2) {
    text-align: center;
  }
  :nth-child(3) {
    text-align: right;
  }
`;

const PctChange = styled.span`
  font-weight: ${props => (props.danger ? "bold" : "normal")};
  color: ${props => (props.danger ? "red" : "green")};
`;

const CoinCard = ({ info }) => {
  const priceEur = info.price_eur
    ? `€${Number(Number(info.price_eur).toFixed(2)).toLocaleString()}`
    : "-";

  return (
    <Card>
      <CardWrapper>
        <CoinImageWrapper>
          <CoinImage
            src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/${info.symbol.toLowerCase()}.png`}
          />
        </CoinImageWrapper>
        <InfoWrapper>
          <CardTitleWrapper>
            <CardTitle>
              <Symbol>{info.symbol}</Symbol> | {info.name}
            </CardTitle>
            <Price>{priceEur}</Price>
          </CardTitleWrapper>
          <MarketCap>
            <CoinCap>
              1h:{" "}
              <PctChange danger={info.percent_change_1h < 0}>
                {info.percent_change_1h}%
              </PctChange>
            </CoinCap>
            <CoinCap>
              24h:{" "}
              <PctChange danger={info.percent_change_24h < 0}>
                {info.percent_change_24h}%
              </PctChange>
            </CoinCap>
            <CoinCap>
              7d:{" "}
              <PctChange danger={info.percent_change_7d < 0}>
                {info.percent_change_7d}%
              </PctChange>
            </CoinCap>
          </MarketCap>
        </InfoWrapper>
      </CardWrapper>
    </Card>
  );
};

export default CoinCard;
