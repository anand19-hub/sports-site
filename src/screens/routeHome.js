import { Router, Route, Switch, Redirect } from "react-router-dom";
import React, {Component} from 'react';
import Admin from "../layouts/Admin";
import Player from "../layouts/Player";
import {createBrowserHistory} from "history";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import contact from "../components/contact";
const hist = createBrowserHistory();
class routeHome extends Component{
    render() {
        return( <Router history={hist}>
            <Switch>

                <Route path="/home" component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/player" component={Player} />
                <Route exact path="/home">
                    <Home name={'red'}/>
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/works">
                    <contact />
                </Route>
                <Redirect from="/" to="/home" />
            </Switch>
        </Router>);
    }
}
export default routeHome;
