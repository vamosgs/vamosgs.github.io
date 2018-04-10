import React, { Fragment } from 'react';
import './AppStyles.less';
import TitleAnim from '../TitleAnim';
import Navigation from '../Navigation';
import Modal from '../Modal';

const App = () => (
  <Fragment>
    <TitleAnim />
    <Navigation />
    <Modal />
  </Fragment>
);

export default App;
