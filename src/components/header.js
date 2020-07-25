import React, {Component} from 'react';
import '../style/header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Admin from "../layouts/Admin";
import Login from "../screens/login";
import Home from "../screens/home";
import Signup from "../screens/signup";
import contact from "./contact";
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
                            <li> <Link to="/home">Home</Link> </li>
                            <li> <a href="/works">Player</a> </li>
                            <li> <Link to="">About</Link> </li>
                            <li> <Link to="/signup">Sign Up</Link> </li>
                            <li><Link to="/login">Sign In</Link> </li>
                            </center>
                        </div>
                    </ul>
                </ul>
            </div>

                <Switch>
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
                </Switch>
            </Router>
        )
    }
}

export default header;
