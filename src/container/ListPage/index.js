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
    this.props.loadCoinListRequest();
    this.setState({
      view: this.props.match.params.view || "grid"
    });
  }

  updateSort = e => {
    this.props.updateSortList(e.target.value);
    this.props.getCoinList();
  };

  render() {
    return (
      <div>
        <CoinList
          list={this.props.list}
          sort={this.props.sort}
          updateSort={this.updateSort}
          view={this.state.view}
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
