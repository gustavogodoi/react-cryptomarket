import * as actions from "../actions";

const initialState = {
  coinList: {},
  loading: false,
  sort: "rank"
};

const sortAsc = ["rank"];

const sortFunction = (sortParam, list) => {
  if (!list || !list.length) {
    return list;
  }
  const listSorted = list.sort((a, b) => {
    if (sortAsc.includes(sortParam)) {
      return a[sortParam] - b[sortParam];
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
      return Object.assign({}, state, { sort: action.param });
    case actions.GET_COIN_LIST:
      return Object.assign({}, state, {
        coinList: sortFunction(state.sort, state.coinList)
      });
    default:
      return state;
  }
};

export default coinState;
