import { call, put, takeLatest } from "redux-saga/effects";
import { getListApi } from "../api/hackerNewsApi";
import * as actions from "../actions";

export function* fetchList({ param }) {
  try {
    const list = yield call(getListApi, param);
    yield put(actions.loadListSuccess(list, param));
  } catch (error) {}
}

export function* getList() {
  yield takeLatest(actions.LOAD_LIST_REQUEST, fetchList);
}
