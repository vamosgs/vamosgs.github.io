import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MdClose from 'react-icons/lib/md/close';
import Projects from '../Projects';
import Stack from '../Stack';
import Packages from '../Packages';
import Designs from '../Designs';
import Contacts from '../Contacts';
import './ModalStyles.less';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ animate: true });
    }, 2500);
  }
  handleClick = () => {
    this.setState({ animate: false });
  };
  render() {
    const pathCheck = window.location.pathname === '/';
    if (!pathCheck) {
      return (
        <div className={`Modal ${this.state.animate ? 'acitve' : null}`}>
          <div className="close">
            <Link onClick={this.handleClick} to="/" href="/">
              <MdClose />
            </Link>
          </div>
          <Switch>
            <Route path="/stack" render={() => <Stack />} />
            <Route path="/projects" render={() => <Projects />} />
            <Route path="/packages" render={() => <Packages />} />
            <Route path="/designs" render={() => <Designs />} />
            <Route path="/contacts" render={() => <Contacts />} />
          </Switch>
        </div>
      );
    }
    return null;
  }
}

export default Modal;
