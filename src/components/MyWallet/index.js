import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import WalletCard from '../WalletCard';
import * as st from './style';

class MyWallet extends Component {
  constructor() {
    super();
    this.state = {
      wallet: {},
      selectCoin: '',
    };
  }

  componentWillMount() {
    this.setState({
      wallet: JSON.parse(localStorage.getItem('myWallet')) || {},
    });
  }

  addCoin = coin => {
    const wallet = { ...this.state.wallet };
    this.setState({ selectCoin: '' });
    if (wallet[coin] || !coin) {
      return;
    }
    wallet[coin] = {};
    this.setState({ wallet });
    localStorage.setItem('myWallet', JSON.stringify(wallet));
  };

  deleteCoin = coin => {
    const wallet = { ...this.state.wallet };
    delete wallet[coin];
    this.setState({ wallet });
    localStorage.setItem('myWallet', JSON.stringify(wallet));
  };

  handlerChange = (event, coin, type) => {
    const value = event.target.value;
    const wallet = { ...this.state.wallet };
    const coinChanged = {
      ...wallet[coin],
      [type]: value,
    };
    wallet[coin] = coinChanged;
    this.setState({ wallet });
    localStorage.setItem('myWallet', JSON.stringify(wallet));
  };

  handleSelectChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
          remoteItem={this.deleteCoin}
          wallet={this.state.wallet}
        />
      );
    });

    const selectOptions = list.map(coin => (
      <MenuItem key={coin.id} value={coin.symbol}>
        <st.MenuItemWrapper>
          <img
            alt=""
            src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/${coin.symbol.toLowerCase()}.png`}
          />
          {`${coin.name} (${coin.symbol})`}
        </st.MenuItemWrapper>
      </MenuItem>
    ));

    return (
      <st.WalletWrapper>
        <st.AddCoinWrapper>
          <st.SelectWrapper>
            <st.FormWrapper>
              <InputLabel htmlFor="add-coin">Add new coin:</InputLabel>
              <Select
                value={this.state.selectCoin}
                onChange={this.handleSelectChange}
                input={<Input name="selectCoin" id="add-coin" />}
              >
                <MenuItem value="">Select a coin</MenuItem>
                {selectOptions}
              </Select>
            </st.FormWrapper>
          </st.SelectWrapper>
          <div>
            <Button
              fab
              mini
              aria-label="add"
              onClick={() => this.addCoin(this.state.selectCoin)}
            >
              <st.AddIcon />
            </Button>
          </div>
        </st.AddCoinWrapper>
        {WalletList}
      </st.WalletWrapper>
    );
  }
}

export default MyWallet;
