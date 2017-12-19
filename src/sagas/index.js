import { delay } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { getCoinListApi } from "../api/coinMarketCapApi";
import * as actions from "../actions";

export function* fetchCoinList() {
  while (true) {
    try {
      const result = yield call(getCoinListApi);
      yield put(actions.loadCoinListSuccess(result));
      yield delay(10000);
    } catch (error) {}
  }
}

export function* getCoinList() {
  yield takeEvery(actions.LOAD_COIN_LIST_REQUEST, fetchCoinList);
}
