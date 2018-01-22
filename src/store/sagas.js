import { fork, all } from 'redux-saga/effects';
import { getCoinList, getCoinOverview } from '../sagas/';

export default function* rootSagas() {
  yield all([fork(getCoinList), fork(getCoinOverview)]);
}
