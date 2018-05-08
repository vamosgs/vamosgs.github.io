import React, { Fragment, Component } from 'react';
import { Cube } from 'react-preloaders';
import './AppStyles.less';
import TitleAnim from '../TitleAnim';
import Navigation from '../Navigation';
import Modal from '../Modal';
import Links from '../Links';

class App extends Component {
  state = {
    loaded: false,
  };
  componentWillMount() {
    this.props.getData().then(() => {
      this.setState({ loaded: true });
      document.getElementById('preloader').classList.add('close');
    });
  }
  render() {
    return (
      <Fragment>
        <Cube color="#f7f7f7" bgColor="#222" />
        {this.state.loaded && (
          <Fragment>
            <TitleAnim />
            <Links />
            <Navigation />
            <Modal />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default App;
