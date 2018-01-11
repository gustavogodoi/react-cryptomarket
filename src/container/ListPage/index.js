import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCoinListRequest } from "../../actions/";
import CoinList from "../../components/CoinList";

export class ListPage extends Component {
  componentWillMount() {
    if (!this.props.list || !this.props.list.length) {
      this.props.loadCoinListRequest();
    }
  }

  render() {
    const view = this.props.match.params.view || "table";
    return (
      <div>
        <CoinList list={this.props.list} sort={this.props.sort} view={view} />
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
  loadCoinListRequest: () => dispatch(loadCoinListRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
