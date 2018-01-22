export const LOAD_COIN_LIST_SUCCESS = 'LOAD_COIN_LIST_SUCCESS';
export const LOAD_COIN_LIST_REQUEST = 'LOAD_COIN_LIST_REQUEST';
export const UPDATE_SORT = 'UPDATE_SORT';
export const LOAD_COIN_OVERVIEW_REQUEST = 'LOAD_COIN_OVERVIEW_REQUEST';
export const LOAD_COIN_OVERVIEW_SUCCESS = 'LOAD_COIN_OVERVIEW_SUCCESS';

export const loadCoinListRequest = () => ({
  type: LOAD_COIN_LIST_REQUEST
});

export const loadCoinListSuccess = result => ({
  type: LOAD_COIN_LIST_SUCCESS,
  result
});

export const updateSortList = param => ({
  type: UPDATE_SORT,
  param
});

export const loadCoinOverviewRequest = symbol => ({
  type: LOAD_COIN_OVERVIEW_REQUEST,
  symbol
});

export const loadCoinOverviewSuccess = result => ({
  type: LOAD_COIN_OVERVIEW_SUCCESS,
  result
});
