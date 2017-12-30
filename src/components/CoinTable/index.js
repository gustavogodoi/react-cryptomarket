import React from "react";
import * as Formatted from "../DataFormatted";
import * as st from "./style";

const CoinTable = ({ list }) => {
  return (
    <st.ListWrapper>
      <st.ListRow header="true">
        <st.ListItem type="rank">#</st.ListItem>
        <st.ListItem type="name">Name</st.ListItem>
        <st.ListItem type="mktCap">Market Cap</st.ListItem>
        <st.ListItem type="value">Price</st.ListItem>
        <st.ListItem type="volume24h">Volume (24h)</st.ListItem>
        <st.ListItem type="pct1h">Change 1h</st.ListItem>
        <st.ListItem type="pct24h">Change 24h</st.ListItem>
        <st.ListItem type="pct7d">Change 7d</st.ListItem>
      </st.ListRow>
      {list.map(coin => (
        <st.ListRow key={coin.rank}>
          <st.ListItem type="rank">{coin.rank}</st.ListItem>
          <st.ListItem type="name">
            <st.ItemNameWrapper>
              <img
                src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/${coin.symbol.toLowerCase()}.png`}
              />
              {`${coin.name} (${coin.symbol})`}
            </st.ItemNameWrapper>
          </st.ListItem>
          <st.ListItem type="mktCap">
            {Formatted.PriceEur(coin.market_cap_eur)}
          </st.ListItem>
          <st.ListItem type="value">
            {Formatted.PriceEur(coin.price_eur)}
          </st.ListItem>
          <st.ListItem type="volume24h">
            {Formatted.PriceEur(coin["24h_volume_eur"])}
          </st.ListItem>
          <st.ListItem type="pct1h">
            <st.PctItem>
              <Formatted.PctChange percentChange={coin.percent_change_1h} />
            </st.PctItem>
          </st.ListItem>
          <st.ListItem type="pct24h">
            <st.PctItem>
              <Formatted.PctChange percentChange={coin.percent_change_24h} />
            </st.PctItem>
          </st.ListItem>
          <st.ListItem type="pct7d">
            <st.PctItem>
              <Formatted.PctChange percentChange={coin.percent_change_7d} />
            </st.PctItem>
          </st.ListItem>
        </st.ListRow>
      ))}
    </st.ListWrapper>
  );
};

export default CoinTable;
