import React from "react";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import * as DateFormat from "../DataFormatted";
import * as st from "./style";

const WalletCard = ({ coin, wallet, handlerChange }) => {
  const myWalletCoins = wallet[coin.symbol] || {};
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
              <InputLabel htmlFor="quantity">{`Quantity (in ${
                coin.symbol
              })`}</InputLabel>
              <Input
                id="quantity"
                value={myWalletCoins.quantity}
                onChange={e => handlerChange(e, coin.symbol, "quantity")}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="price-paid">Price Paid</InputLabel>
              <Input
                id="price-paid"
                value={myWalletCoins.pricePaid}
                onChange={e => handlerChange(e, coin.symbol, "pricePaid")}
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
            <st.Title>Profit:</st.Title>
          </div>
          <div>
            {percentage && <DateFormat.PctChange percentChange={percentage} />}
          </div>
        </div>
      </st.CoinWrapper>
    </st.CoinDiv>
  );
};

export default WalletCard;
