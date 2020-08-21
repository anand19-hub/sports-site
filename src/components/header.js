import React, {Component} from 'react';
import '../style/header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter
} from "react-router-dom";
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
        )
    }
}

export default header;
