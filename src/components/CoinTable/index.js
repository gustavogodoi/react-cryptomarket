import React from "react";
import * as st from "./style";

const CoinTable = ({ list }) => {
  return (
    <st.ListWrapper>
      <st.ListRow header="true">
        <st.ListItem type="rank">Rank</st.ListItem>
        <st.ListItem type="symbol">Symbol</st.ListItem>
        <st.ListItem type="name">Name</st.ListItem>
        <st.ListItem type="value">Market Cap</st.ListItem>
        <st.ListItem type="value">Price</st.ListItem>
        <st.ListItem type="value">Volume (24h)</st.ListItem>
        <st.ListItem type="pct">Change 1h</st.ListItem>
        <st.ListItem type="pct">Change 24h</st.ListItem>
        <st.ListItem type="pct">Change 7d</st.ListItem>
      </st.ListRow>
      {list.map(coin => (
        <st.ListRow>
          <st.ListItem type="rank">{coin.rank}</st.ListItem>
          <st.ListItem type="symbol">{coin.symbol}</st.ListItem>
          <st.ListItem type="name">{coin.name}</st.ListItem>
          <st.ListItem type="value">{coin.market_cap_eur}</st.ListItem>
          <st.ListItem type="value">{coin.price_eur}</st.ListItem>
          <st.ListItem type="value">{coin["24h_volume_eur"]}</st.ListItem>
          <st.ListItem type="pct">{coin.percent_change_1h}</st.ListItem>
          <st.ListItem type="pct">{coin.percent_change_1h}</st.ListItem>
          <st.ListItem type="pct">{coin.percent_change_1h}</st.ListItem>
        </st.ListRow>
      ))}
    </st.ListWrapper>
  );
};

export default CoinTable;
