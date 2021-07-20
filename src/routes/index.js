import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "../components/error/Error";
import Preloader from "../components/preloader/Pre";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Footer from "../components/footer/Footer";
import Strings from "../constants/Strings";

const Routes = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <Preloader load={load} />
      <Switch>
        <Route path={Strings.ROUTES.HOME} exact component={Home} />
        <Route path={Strings.ROUTES.PROJECTS} component={Projects} />
        <Route path={Strings.ROUTES.RESUME} component={Resume} />
        <Route path={Strings.ROUTES.ALL} component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
