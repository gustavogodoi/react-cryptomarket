import React, { Component } from "react";
import * as st from "./style";

export class Favorite extends Component {
  componentWillMount() {
    this.setState({
      favorites: JSON.parse(localStorage.getItem("favorites")) || []
    });
  }

  favoriteCoin = item => {
    const index = this.state.favorites.indexOf(item);
    const newFavorites = Object.assign([], this.state.favorites);

    if (index === -1) {
      newFavorites.push(item);
    } else {
      newFavorites.splice(index, 1);
    }

    this.setState({
      favorites: newFavorites
    });
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  render() {
    const { item } = this.props;
    return (
      <st.FavoriteStar
        role="img"
        aria-label="Set Favorite"
        onClick={() => this.favoriteCoin(item)}
      >
        {this.state.favorites.includes(item) ? `🌟` : `★`}
      </st.FavoriteStar>
    );
  }
}

export default Favorite;
