import React, {Component} from 'react';
import '../style/header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "../screens/login";
import Home from "../screens/home";
import Signup from "../screens/signup";
const img2 = require('../asserts/images/logo02.png');

class header extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <Router>
            <div class="header">
                <ul id="menu">
                    <ul>

                        <div className='center'>
                            {/*<li ><Link to='/'><img src={img2} class='logo'/></Link></li>*/}
                            <center>
                            <li> <Link to="/">Home</Link> </li>
                            <li> <a href="#">Player</a> </li>
                            <li> <a href="#">About</a> </li>
                            <li> <Link to="/signup">Sign Up</Link> </li>
                            <li><Link to="/login">Sign In</Link> </li>
                            </center>
                        </div>
                    </ul>
                </ul>
            </div>

                <Switch>
                    <Route exact path="/">
                        <Home name={'red'}/>
                    </Route>
                    <Route exact path="/signup">
                        <Signup name={'blue'}/>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default header;