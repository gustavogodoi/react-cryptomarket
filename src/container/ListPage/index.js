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
      favorites: JSON.parse(localStorage.getItem("favorites")) || []
    });
  }

  updateSort = e => {
    this.props.updateSortList(e.target.value);
    this.props.getCoinList();
  };

  favoriteCoin = coin => {
    const index = this.state.favorites.indexOf(coin);
    const newFavorites = Object.assign([], this.state.favorites);

    if (index === -1) {
      newFavorites.push(coin);
    } else {
      newFavorites.splice(index, 1);
    }

    this.setState({
      favorites: newFavorites
    });
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
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
          favoriteCoin={this.favoriteCoin}
          favorites={this.state.favorites}
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
