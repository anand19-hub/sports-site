import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Player from "layouts/Player.js";
import Header from "components/header.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import routeHome from "./screens/routeHome";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={routeHome} />
      {/*<Redirect from="/" to="/admin/dashboard" />*/}
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
