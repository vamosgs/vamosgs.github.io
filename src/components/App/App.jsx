import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './AppStyles.less';
import TitleAnim from '../TitleAnim';
import Navigation from '../Navigation';
import Projects from '../Projects';

const App = () => (
  <div>
    <TitleAnim />
    <Navigation />
    <Switch>
      <Route path="/stack" render={() => <Projects title="Loved stack" />} />
      <Route path="/projects" render={() => <Projects title="Projects" />} />
      <Route path="/packages" render={() => <Projects title="Packages" />} />
      <Route path="/designs" render={() => <Projects title="Designs" />} />
      <Route path="/contacts" render={() => <Projects title="Contacts" />} />
    </Switch>
  </div>
);

export default App;
