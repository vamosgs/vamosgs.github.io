import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import initSagas from '../initSagas';

function getStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];
  const enhancer = compose(applyMiddleware(...middleWares));
  /* eslint-disable no-underscore-dangle */
  const store = createStore(rootReducer, enhancer);
  /* eslint-enable */
  initSagas(sagaMiddleware);
  return store;
}

export default getStore;
