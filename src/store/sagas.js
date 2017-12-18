import { fork, all } from "redux-saga/effects";
import { getCoinList } from "../sagas/";

export default function* rootSagas() {
  yield all([fork(getCoinList)]);
}
