import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCoinOverviewRequest } from '../../actions/';
import CoinIcon from '../../components/CoinIcon';
import createMarkup from '../../helpers/createMarkUp';
import ExchangeList from '../../components/ExchangeList';
export class DetailPage extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.loadCoinOverviewRequest(id);
  }

  render() {
    const { coin } = this.props;
    return (
      <div>
        {this.props.coin.symbol && (
          <div>
            <CoinIcon size={'128'} symbol={coin.symbol} />
            <h1>{coin.General.H1Text}</h1>
            <p>Total Coins Mined: {coin.General.TotalCoinsMined}</p>
            <p>
              Total Coin Supply:{' '}
              {coin.General.TotalCoinSupply !== '0'
                ? coin.General.TotalCoinSupply
                : '---'}
            </p>
            <p>First Block Mined: {coin.General.StartDate}</p>
            <p>
              How long does it take to mine a block? (estimated):{' '}
              {coin.General.BlockTime}
            </p>
            <div
              dangerouslySetInnerHTML={createMarkup(
                this.props.coin.General.Description
              )}
            />

            <ExchangeList exchanges={coin.Exchanges} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    coin: state.coinState.coinInfo
  };
};

const mapDispatchToProps = dispatch => ({
  loadCoinOverviewRequest: symbol => dispatch(loadCoinOverviewRequest(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
