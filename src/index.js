import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components

import "assets/css/material-dashboard-react.css?v=1.9.0";
import routeHome from "./screens/routeHome";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={routeHome} />

    </Switch>
  </Router>,
  document.getElementById("root")
);
