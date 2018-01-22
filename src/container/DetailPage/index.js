import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCoinOverviewRequest } from '../../actions/';
import CoinIcon from '../../components/CoinIcon';
import createMarkup from '../../helpers/createMarkUp';

export class DetailPage extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.loadCoinOverviewRequest(id);
  }

  render() {
    return (
      <div>
        {this.props.coin.symbol && (
          <CoinIcon size={'128'} symbol={this.props.coin.symbol} />
        )}
        <h1>{this.props.coin.General.H1Text}</h1>
        <p>Total Coins Mined: {this.props.coin.General.TotalCoinsMined}</p>
        <p>
          Total Coin Supply:{' '}
          {this.props.coin.General.TotalCoinSupply !== '0'
            ? this.props.coin.General.TotalCoinSupply
            : '---'}
        </p>
        <div
          dangerouslySetInnerHTML={createMarkup(
            this.props.coin.General.Description
          )}
        />
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
