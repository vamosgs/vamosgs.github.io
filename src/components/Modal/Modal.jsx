import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MdClose from 'react-icons/lib/md/close';
import Projects from '../Projects';
import Stack from '../Stack';
import './ModalStyles.less';

const Modal = ({ animate }) => {
  console.log(animate);
  const pathCheck = window.location.pathname === '/';
  if (!pathCheck) {
    return (
      <div className="Modal">
        <div className="close">
          <Link to="/" href="/">
            <MdClose />
          </Link>
        </div>
        <Switch>
          <Route path="/stack" component={Stack} />
          <Route path="/projects" render={() => <Projects title="projects" />} />
          <Route path="/packages" render={() => <Projects title="packages" />} />
          <Route path="/designs" render={() => <Projects title="designs" />} />
          <Route path="/contacts" render={() => <Projects title="contacts" />} />
        </Switch>
      </div>
    );
  }
  return null;
};

export default Modal;
