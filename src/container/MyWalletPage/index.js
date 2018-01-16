import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCoinListRequest } from "../../actions/";
import MyWallet from "../../components/MyWallet";

class MyWalletPage extends Component {
  componentWillMount() {
    if (!this.props.list || !this.props.list.length) {
      this.props.loadCoinListRequest();
    }
  }

  render() {
    return <MyWallet list={this.props.list} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.coinState.coinList
  };
};

const mapDispatchToProps = dispatch => ({
  loadCoinListRequest: () => dispatch(loadCoinListRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyWalletPage);
