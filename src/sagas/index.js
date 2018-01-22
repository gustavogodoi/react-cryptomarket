import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getCoinListApi, getCoinOverviewApi } from '../api/coinMarketCapApi';
import * as actions from '../actions';

export function* fetchCoinList() {
  try {
    while (true) {
      const result = yield call(getCoinListApi);
      yield put(actions.loadCoinListSuccess(result));
      yield delay(60000);
    }
  } catch (error) {
    console.error(`!!! ERROR !!!: ${error}`);
  }
}

export function* getCoinList() {
  yield takeEvery(actions.LOAD_COIN_LIST_REQUEST, fetchCoinList);
}

export function* fetchCoinOverview(action) {
  try {
    const result = yield call(getCoinOverviewApi, action.symbol);
    yield put(actions.loadCoinOverviewSuccess(result));
  } catch (error) {
    console.error('fetchCoinOverview:', error);
  }
}

export function* getCoinOverview() {
  yield takeEvery(actions.LOAD_COIN_OVERVIEW_REQUEST, fetchCoinOverview);
}
