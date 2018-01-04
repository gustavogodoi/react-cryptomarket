import { delay } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { getCoinListApi } from "../api/coinMarketCapApi";
import * as actions from "../actions";

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
