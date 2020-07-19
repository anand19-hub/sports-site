import React, { Component } from 'react';
import {Col, Row,Button} from "react-bootstrap";
import $ from "jquery";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import '../style/signup2.css';
const img1 = require('../asserts/images/fb.png');
const img2 = require('../asserts/images/google.png');

class Signup2 extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            username: '',
        };
    }
    render() {
        return (
            <div className="wrapper">
                <div className="title">
                    Registration Form
                </div>
                <div className="form">
                    <div className="inputfield">
                        <label>First Name</label>
                        <input type="text" className="input"/>
                    </div>
                    <div className="inputfield">
                        <label>Last Name</label>
                        <input type="text" className="input"/>
                    </div>
                    <div className="inputfield">
                        <label>Password</label>
                        <input type="password" className="input"/>
                    </div>
                    <div className="inputfield">
                        <label>Confirm Password</label>
                        <input type="password" className="input"/>
                    </div>
                    <div className="inputfield">
                        <label>Gender</label>
                        <div className="custom_select">
                            <select>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputfield">
                        <label>Email Address</label>
                        <input type="text" className="input"/>
                    </div>
                    <div className="inputfield">
                        <label>Phone Number</label>
                        <input type="text" className="input"/>
                    </div>
                    <div className="inputfield">
                        <label>Address</label>
                        <textarea className="textarea"></textarea>
                    </div>
                    <div className="inputfield">
                        <label>Postal Code</label>
                        <input type="text" className="input"/>
                    </div>
                    <div className="inputfield terms">
                        <label className="check">
                            <input type="checkbox"/>
                                <span className="checkmark"></span>
                        </label>
                        <p>Agreed to terms and conditions</p>
                    </div>
                    <div className="inputfield">
                        <Button>SUBMIT</Button>
                    </div>
                </div>
            </div>
    )
    }
}
export default Signup2;