import * as sagas from './sagas';

const initSagas = (sagaMiddleware) => {
  Object.values(sagas.default).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default initSagas;
