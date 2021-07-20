import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "../components/error/Error";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import Particle from "../components/Particle";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Footer from "../components/footer/Footer";
import Strings from "../constants/Strings";

const Routes = () => {
  return (
    <BrowserRouter>
      <Particle />
      <Switch>
        <Route path={Strings.ROUTES.HOME} exact component={Home} />
        <Route path={Strings.ROUTES.PROJECTS} component={Projects} />
        <Route path={Strings.ROUTES.RESUME} component={Resume} />
        <Route path={Strings.ROUTES.CONTACT} component={Contact} />
        <Route path={Strings.ROUTES.ALL} component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
