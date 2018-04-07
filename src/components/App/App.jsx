import React from 'react';
import './AppStyles.less';
import TitleAnim from '../TitleAnim';
import Navigation from '../Navigation';
import Modal from '../Modal';

const App = () => (
  <div>
    <TitleAnim />
    <Navigation />
    <Modal />
  </div>
);

export default App;
