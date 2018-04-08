import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/rootReducer';

export default function configureStore() {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('../reducers/rootReducer');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
