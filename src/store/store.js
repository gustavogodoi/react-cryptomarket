import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import rootReducer from "./reducers";
import rootSagas from "./sagas";

export default state => {
  const sagaMiddleware = createSagaMiddleware();
  const appliedSagaMiddleware = applyMiddleware(sagaMiddleware);
  const store = createStore(rootReducer, state, appliedSagaMiddleware);
  const task = sagaMiddleware.run(rootSagas);
  return { store, task, closeStore: () => store.dispatch(END) };
};
