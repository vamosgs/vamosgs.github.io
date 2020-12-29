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
    if (this.props.getData()) {
      this.setState({ loaded: true });
      // document.getElementById('preloader').classList.add('close');
    }
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
