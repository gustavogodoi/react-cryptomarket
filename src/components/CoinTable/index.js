import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateSortList } from '../../actions/';
import FlipMove from 'react-flip-move';
import CoinIcon from '../CoinIcon';
import * as Formatted from '../DataFormatted';
import * as st from './style';

export class CoinTable extends Component {
  updateSort = sortBy => {
    this.props.updateSortList(sortBy);
  };

  render() {
    const { sort, list } = this.props;

    return (
      <st.ListWrapper>
        <st.ListHeader>
          <st.ListItemHeader
            type="rank"
            selected={sort === 'rank'}
            onClick={() => this.updateSort('rank')}
          >
            #
          </st.ListItemHeader>
          <st.ListItemHeader
            type="name"
            selected={sort === 'name'}
            onClick={() => this.updateSort('name')}
          >
            Name
          </st.ListItemHeader>
          <st.ListItemHeader
            type="value"
            selected={sort === 'price_eur'}
            onClick={() => this.updateSort('price_eur')}
          >
            Price
          </st.ListItemHeader>
          <st.ListItemHeader
            type="mktCap"
            selected={sort === 'market_cap_eur'}
            onClick={() => this.updateSort('market_cap_eur')}
          >
            Market Cap
          </st.ListItemHeader>
          <st.ListItemHeader
            type="volume24h"
            selected={sort === '24h_volume_eur'}
            onClick={() => this.updateSort('24h_volume_eur')}
          >
            24h Volume
          </st.ListItemHeader>
          <st.ListItemHeader
            type="pct1h"
            selected={sort === 'percent_change_1h'}
            onClick={() => this.updateSort('percent_change_1h')}
          >
            1h
          </st.ListItemHeader>
          <st.ListItemHeader
            type="pct24h"
            selected={sort === 'percent_change_24h'}
            onClick={() => this.updateSort('percent_change_24h')}
          >
            24h
          </st.ListItemHeader>
          <st.ListItemHeader
            type="pct7d"
            selected={sort === 'percent_change_7d'}
            onClick={() => this.updateSort('percent_change_7d')}
          >
            7d
          </st.ListItemHeader>
        </st.ListHeader>
        <FlipMove duration={300} typeName="div">
          {list.map(coin => (
            <st.ListRow key={coin.rank}>
              <st.ListItem type="rank">{coin.rank}</st.ListItem>
              <st.ListItem type="name">
                <st.ItemNameWrapper>
                  <CoinIcon symbol={coin.symbol} />
                  <NavLink to={`/info/${coin.symbol}`}>
                    <st.NameFull>{`${coin.name} (${coin.symbol})`}</st.NameFull>
                    <st.NameSmall>{`${coin.name}`}</st.NameSmall>
                  </NavLink>
                </st.ItemNameWrapper>
              </st.ListItem>
              <st.ListItem type="value">
                {Formatted.PriceEur(coin.price_eur)}
              </st.ListItem>
              <st.ListItem type="mktCap">
                {Formatted.PriceEur(coin.market_cap_eur, 0)}
              </st.ListItem>
              <st.ListItem type="volume24h">
                {Formatted.PriceEur(coin['24h_volume_eur'])}
              </st.ListItem>
              <st.ListItem type="pct1h">
                <st.PctItem>
                  <Formatted.PctChange percentChange={coin.percent_change_1h} />
                </st.PctItem>
              </st.ListItem>
              <st.ListItem type="pct24h">
                <st.PctItem>
                  <Formatted.PctChange
                    percentChange={coin.percent_change_24h}
                  />
                </st.PctItem>
              </st.ListItem>
              <st.ListItem type="pct7d">
                <st.PctItem>
                  <Formatted.PctChange percentChange={coin.percent_change_7d} />
                </st.PctItem>
              </st.ListItem>
            </st.ListRow>
          ))}
        </FlipMove>
      </st.ListWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sort: state.coinState.sort,
    list: ownProps.list
  };
};

const mapDispatchToProps = dispatch => ({
  updateSortList: param => dispatch(updateSortList(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);
