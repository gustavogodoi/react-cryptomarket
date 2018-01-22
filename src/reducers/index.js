import * as actions from '../actions';

const initialState = {
  coinList: {},
  coinInfo: {
    General: {}
  },
  loading: false,
  sort: 'rank',
  lastUpdate: new Date()
};

const sortAsc = ['id', 'name'];

const sortFunction = (sortParam, list) => {
  if (!list || !list.length) {
    return list;
  }
  const listSorted = list.sort((a, b) => {
    if (sortAsc.includes(sortParam)) {
      if (a[sortParam] < b[sortParam]) return -1;
      if (a[sortParam] > b[sortParam]) return 1;
    } else if (sortParam === 'rank') {
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
        coinList: sortFunction(state.sort, action.result),
        lastUpdate: new Date()
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
    case actions.LOAD_COIN_OVERVIEW_REQUEST:
      return Object.assign({}, state, { loading: true });
    case actions.LOAD_COIN_OVERVIEW_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        coinInfo: action.result.Data,
        lastUpdate: new Date()
      });
    default:
      return state;
  }
};

export default coinState;
