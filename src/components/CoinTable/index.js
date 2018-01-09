import React from "react";
import Favorite from "../Favorite";
import * as Formatted from "../DataFormatted";
import * as st from "./style";

const CoinTable = ({ list }) => {
  return (
    <st.ListWrapper>
      <st.ListHeader header="true">
        <st.ListItem type="rank">#</st.ListItem>
        <st.ListItem type="rank">
          <span role="img" aria-label="Set Favorite">
            ⭐️
          </span>
        </st.ListItem>
        <st.ListItem type="name">Name</st.ListItem>
        <st.ListItem type="mktCap">Market Cap</st.ListItem>
        <st.ListItem type="value">Price</st.ListItem>
        <st.ListItem type="volume24h">Volume (24h)</st.ListItem>
        <st.ListItem type="pct1h">
          <st.HideMobile>Change</st.HideMobile> 1h
        </st.ListItem>
        <st.ListItem type="pct24h">
          <st.HideMobile>Change</st.HideMobile> 24h
        </st.ListItem>
        <st.ListItem type="pct7d">
          <st.HideMobile>Change</st.HideMobile> 7d
        </st.ListItem>
      </st.ListHeader>
      {list.map(coin => (
        <st.ListRow key={coin.rank}>
          <st.ListItem type="rank">{coin.rank}</st.ListItem>
          <st.ListItem type="rank">
            <st.FavoriteWrapper>
              <Favorite item={coin.symbol} />
            </st.FavoriteWrapper>
          </st.ListItem>
          <st.ListItem type="name">
            <st.ItemNameWrapper>
              <img
                alt=""
                src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/${coin.symbol.toLowerCase()}.png`}
              />
              <a
                href={`https://coinmarketcap.com/currencies/${coin.id}`}
                target="_blank"
              >
                <st.NameFull>{`${coin.name} (${coin.symbol})`}</st.NameFull>
                <st.NameSmall>{`${coin.symbol}`}</st.NameSmall>
              </a>
            </st.ItemNameWrapper>
          </st.ListItem>
          <st.ListItem type="mktCap">
            {Formatted.PriceEur(coin.market_cap_eur, 0)}
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
