import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./Resume";
import Projects from "./projects";
import Contactus from "./Contactus";
import HiChames from "./HiChames";
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={HiChames} />
      <Route path="/Resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contactus" component={Contactus} />
    </Switch>
  );
};

export default Main;
