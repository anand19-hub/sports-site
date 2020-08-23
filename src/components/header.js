import React, {Component} from 'react';
import '../style/header.css';
import {
    Link
} from "react-router-dom";

class header extends Component {

    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div className="header">
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
