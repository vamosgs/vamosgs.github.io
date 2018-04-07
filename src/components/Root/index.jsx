import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from '../App';
import getStore from '../../store';
import './styles.less';

const store = getStore();
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default hot(module)(Root);
