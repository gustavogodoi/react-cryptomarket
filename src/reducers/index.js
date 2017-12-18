import * as actions from "../actions";

const initialState = {
  coinList: {},
  loading: false
};

const coinState = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_COIN_LIST_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.LOAD_COIN_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        coinList: action.result
      });
    default:
      return state;
  }
};

export default coinState;
