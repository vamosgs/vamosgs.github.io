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
    setTimeout(() => {
      this.setState({ animate: true });
    }, 2500);
  }
  render() {
    const name = window.location.pathname.split('/')[1];
    const pathCheck = window.location.pathname === '/';
    if (!pathCheck) {
      return (
        <div className={`Modal ${name} ${this.state.animate ? 'acitve' : null}`}>
          <div className="close">
            <Link to="/" href="/">
              <MdClose />
            </Link>
          </div>
          <Switch>
            <Route path="/stack" component={Stack} />
            <Route path="/projects" component={Projects} />
            <Route path="/packages" component={Packages} />
            <Route path="/designs" component={Designs} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </div>
      );
    }
    return null;
  }
}

export default Modal;
