import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Error from '../views/error/Error';
import Contact from '../views/contact/Contact';
import Home from '../views/home/Home';
import Particle from '../components/Particle';
import Projects from '../views/projects/Projects';
import Resume from '../views/resume/Resume';
import Footer from '../components/footer/Footer';
import Strings from '../constants/Strings';

const Routes = () => {
  return (
    <HashRouter>
      <Particle />
      <Switch>
        <Route path={Strings.ROUTES.HOME} exact component={Home} />
        <Route path={Strings.ROUTES.PROJECTS} exact component={Projects} />
        <Route path={Strings.ROUTES.RESUME} exact component={Resume} />
        <Route path={Strings.ROUTES.CONTACT} exact component={Contact} />
        <Route path={Strings.ROUTES.ALL} exact component={Error} />
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default Routes;
