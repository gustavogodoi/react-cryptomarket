import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCoinListRequest } from "../../actions/";
import CoinList from "../../components/CoinList";

export class ListPage extends Component {
  componentDidMount() {
    this.props.loadCoinListRequest();
  }

  render() {
    return (
      <div>
        <CoinList list={this.props.list} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.coinState.coinList
  };
};

const mapDispatchToProps = dispatch => ({
  loadCoinListRequest: param => dispatch(loadCoinListRequest(param))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
