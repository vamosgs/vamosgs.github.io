import React, { Fragment } from 'react';
import './AppStyles.less';
import TitleAnim from '../TitleAnim';
import Navigation from '../Navigation';
import Modal from '../Modal';
import Links from '../Links';

const App = () => (
  <Fragment>
    <TitleAnim />
    <Links />
    <Navigation />
    <Modal />
  </Fragment>
);

export default App;
