import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCoinListRequest } from '../../actions/';
import CoinList from '../../components/CoinList';

export class ListPage extends Component {
  componentWillMount() {
    if (!this.props.list || !this.props.list.length) {
      this.props.loadCoinListRequest();
    }
  }

  render() {
    const view = this.props.match.params.view || 'table';
    return (
      <div>
        <CoinList
          list={this.props.list}
          view={view}
          lastUpdate={this.props.lastUpdate.toLocaleTimeString()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.coinState.coinList,
    lastUpdate: state.coinState.lastUpdate
  };
};

const mapDispatchToProps = dispatch => ({
  loadCoinListRequest: () => dispatch(loadCoinListRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
