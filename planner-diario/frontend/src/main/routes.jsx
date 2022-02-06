import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";
import About from "../about/about";
import Planner from "../planner/planner";

export default (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/todos" component={Planner} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/todos" />
    </Router>
  );
};
