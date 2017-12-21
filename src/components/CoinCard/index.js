import React from "react";
import {
  Card,
  CardWrapper,
  CoinImageWrapper,
  CoinImage,
  InfoWrapper,
  CardTitleWrapper,
  CardTitle,
  Symbol,
  Price,
  MarketCap,
  CoinCap,
  PctChange,
  Arrow
} from "./style";

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
              1h: <Arrow danger={info.percent_change_1h < 0} />
              <PctChange danger={info.percent_change_1h < 0}>
                {info.percent_change_1h}%
              </PctChange>
            </CoinCap>
            <CoinCap>
              24h: <Arrow danger={info.percent_change_24h < 0} />
              <PctChange danger={info.percent_change_24h < 0}>
                {info.percent_change_24h}%
              </PctChange>
            </CoinCap>
            <CoinCap>
              7d: <Arrow danger={info.percent_change_7d < 0} />
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
