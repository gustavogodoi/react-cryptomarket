import React from 'react';
import CoinIcon from '../CommonFields/CoinIcon';
import * as Formatted from '../DataFormatted';
import * as st from './style';

const CoinCard = ({ info }) => {
  return (
    <st.Card>
      <st.CardWrapper>
        <st.CoinImageWrapper>
          <CoinIcon symbol={info.symbol} />
        </st.CoinImageWrapper>
        <st.InfoWrapper>
          <st.CardTitleWrapper>
            <st.CardTitle>
              <st.Symbol>{info.symbol}</st.Symbol> | {info.name}
            </st.CardTitle>
            <st.Price>{Formatted.PriceEur(info.price_eur)}</st.Price>
          </st.CardTitleWrapper>
          <st.MarketCap>
            <st.CoinCap>
              1h: <Formatted.PctChange percentChange={info.percent_change_1h} />
            </st.CoinCap>
            <st.CoinCap>
              24h:{' '}
              <Formatted.PctChange percentChange={info.percent_change_24h} />
            </st.CoinCap>
            <st.CoinCap>
              7d: <Formatted.PctChange percentChange={info.percent_change_7d} />
            </st.CoinCap>
          </st.MarketCap>
        </st.InfoWrapper>
      </st.CardWrapper>
    </st.Card>
  );
};

export default CoinCard;
