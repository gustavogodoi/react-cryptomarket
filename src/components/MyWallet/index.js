import React, { Component } from "react";
import WalletCard from "../WalletCard";
import * as st from "./style";

class MyWallet extends Component {
  constructor() {
    super();
    this.state = {
      wallet: {}
    };
  }

  componentWillMount() {
    this.setState({
      wallet: JSON.parse(localStorage.getItem("myWallet")) || {}
    });
  }

  addCoin = coin => {
    const wallet = { ...this.state.wallet };
    wallet[coin] = {};
    this.setState({ wallet });
    localStorage.setItem("myWallet", JSON.stringify(wallet));
  };

  deleteCoin = coin => {
    const wallet = { ...this.state.wallet };
    delete wallet[coin];
    this.setState({ wallet });
    localStorage.setItem("myWallet", JSON.stringify(wallet));
  };

  handlerChange = (event, coin, type) => {
    const value = event.target.value;
    const wallet = { ...this.state.wallet };
    const coinChanged = {
      ...wallet[coin],
      [type]: value
    };
    wallet[coin] = coinChanged;
    this.setState({ wallet });
    localStorage.setItem("myWallet", JSON.stringify(wallet));
  };

  render() {
    const { list } = this.props;
    const { wallet } = this.state;

    if (!list || !list.length) {
      return <div>Loading...</div>;
    }

    const WalletList = list.map(coin => {
      if (!wallet[coin.symbol]) {
        return null;
      }

      return (
        <WalletCard
          key={coin.id}
          coin={coin}
          handlerChange={this.handlerChange}
          wallet={this.state.wallet}
        />
      );
    });

    return <st.WalletWrapper>{WalletList}</st.WalletWrapper>;
  }
}

export default MyWallet;
