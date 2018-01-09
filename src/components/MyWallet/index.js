import React, { Component } from "react";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import * as DateFormat from "../DataFormatted";
import * as st from "./style";

class MyWallet extends Component {
  constructor() {
    super();
    this.state = {
      wallet: {}
    };
  }

  handlerChange = (event, coin, type) => {
    const value = event.target.value;
    const wallet = { ...this.state.wallet };
    const coinChanged = {
      ...wallet[coin],
      [type]: value
    };
    wallet[coin] = coinChanged;
    this.setState({ wallet });
  };

  render() {
    const { list } = this.props;
    if (!list || !list.length) {
      return <div>Loading...</div>;
    }

    const coinsWallet = list.map(coin => {
      const myWalletCoins = this.state.wallet[coin.symbol] || {};
      const currentValue =
        myWalletCoins.quantity && Number(myWalletCoins.quantity)
          ? Number(coin.price_eur) * Number(myWalletCoins.quantity)
          : null;

      const percentage =
        myWalletCoins.pricePaid && Number(myWalletCoins.pricePaid)
          ? (Number(coin.price_eur) / Number(myWalletCoins.pricePaid) - 1) * 100
          : null;

      return (
        <st.CoinDiv key={coin.id}>
          <st.CoinName>{`${coin.name} (${coin.symbol})`} </st.CoinName>
          <st.CoinWrapper>
            <div>
              <div>
                <FormControl>
                  <InputLabel htmlFor="quantity">Quantity</InputLabel>
                  <Input
                    id="quantity"
                    onChange={e =>
                      this.handlerChange(e, coin.symbol, "quantity")
                    }
                  />
                </FormControl>
              </div>
              <div>
                <FormControl>
                  <InputLabel htmlFor="price-paid">Price Paid</InputLabel>
                  <Input
                    id="price-paid"
                    onChange={e =>
                      this.handlerChange(e, coin.symbol, "pricePaid")
                    }
                  />
                </FormControl>
              </div>
            </div>

            <div>
              <div>
                <st.Title>Current Price:</st.Title>
              </div>
              <div>{DateFormat.PriceEur(coin.price_eur)}</div>
            </div>

            <div>
              <div>
                <st.Title>My Balance:</st.Title>
              </div>
              <div>{DateFormat.PriceEur(currentValue)}</div>
            </div>

            <div>
              <div>
                <st.Title>Variation:</st.Title>
              </div>
              <div>
                {percentage && (
                  <DateFormat.PctChange percentChange={percentage} />
                )}
              </div>
            </div>
          </st.CoinWrapper>
        </st.CoinDiv>
      );
    });

    return <st.WalletWrapper>{coinsWallet}</st.WalletWrapper>;
  }
}

export default MyWallet;
