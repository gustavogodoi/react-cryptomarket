import { fork, all } from "redux-saga/effects";
import { getList } from "../sagas/";

export default function* rootSagas() {
  yield all([fork(getList)]);
}
