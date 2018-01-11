import * as actions from "../actions";

const initialState = {
  coinList: {},
  loading: false,
  sort: "market_cap_eur"
};

const sortAsc = ["rank", "id", "name"];

const sortFunction = (sortParam, list) => {
  if (!list || !list.length) {
    return list;
  }
  const listSorted = list.sort((a, b) => {
    if (sortAsc.includes(sortParam)) {
      if (a[sortParam] < b[sortParam]) return -1;
      if (a[sortParam] > b[sortParam]) return 1;
    }
    return b[sortParam] - a[sortParam];
  });
  return listSorted;
};

const coinState = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_COIN_LIST_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.LOAD_COIN_LIST_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        coinList: sortFunction(state.sort, action.result)
      });
    case actions.UPDATE_SORT:
      const sortedList = Object.assign(
        [],
        sortFunction(action.param, state.coinList)
      );
      return Object.assign({}, state, {
        sort: action.param,
        coinList: sortedList
      });
    default:
      return state;
  }
};

export default coinState;
