import React from "react";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import * as st from "./style";

const MyWallet = ({ list }) => {
  if (!list || !list.length) {
    return <div>Loading...</div>;
  }

  const bitcoin = list[0];
  console.log(bitcoin);

  const currentValue = null;
  // this.state.quantity && Number(this.state.quantity)
  //   ? Number(bitcoin.price_eur) * Number(this.state.quantity)
  //   : null;

  const percentage = null;
  // this.state.pricePaid && Number(this.state.pricePaid)
  //   ? (Number(bitcoin.price_eur) / Number(this.state.pricePaid) - 1) * 100
  //   : null;

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <div>
            <span>Bitcoin</span>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="quantity">Quantity</InputLabel>
              <Input
                id="quantity"
                //value={this.state.quantity}
                //onChange={this.handleChangeQtd}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="price-paid">Price Paid</InputLabel>
              <Input
                id="price-paid"
                //value={this.state.pricePaid}
                //onChange={this.handleChangePricePaid}
              />
            </FormControl>
          </div>
        </div>

        <div>
          <div>Current Price:</div>
          <div>{bitcoin.price_eur}</div>
        </div>

        <div>
          <div>Current Value:</div>
          <div>{currentValue}</div>
        </div>

        <div>
          <div>Percentage:</div>
          <div>{percentage}</div>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
