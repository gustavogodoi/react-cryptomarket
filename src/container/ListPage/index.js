import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadCoinListRequest,
  updateSortList,
  getCoinList
} from "../../actions/";
import CoinList from "../../components/CoinList";

export class ListPage extends Component {
  componentWillMount() {
    if (!this.props.list || !this.props.list.length) {
      this.props.loadCoinListRequest();
    }
  }

  updateSort = e => {
    this.props.updateSortList(e.target.value);
    this.props.getCoinList();
  };

  render() {
    const view = this.props.match.params.view || "table";
    return (
      <div>
        <CoinList
          list={this.props.list}
          sort={this.props.sort}
          updateSort={this.updateSort}
          view={view}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.coinState.coinList,
    sort: state.coinState.sort
  };
};

const mapDispatchToProps = dispatch => ({
  loadCoinListRequest: () => dispatch(loadCoinListRequest()),
  updateSortList: param => dispatch(updateSortList(param)),
  getCoinList: () => dispatch(getCoinList())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
