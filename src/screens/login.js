import React, {Component} from 'react';
import "../style/login.css";
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import Home from "./home";
import Signup from "./signup";

const img1 = require('../asserts/images/fb.png');
const img2 = require('../asserts/images/google.png');

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    componentDidMount() {

        $(".textbox input").focusout(function () {
            if ($(this).val() == "") {
                $(this).siblings().removeClass("hidden");
                $(this).css("background", "#554343");
            } else {
                $(this).siblings().addClass("hidden");
                $(this).css("background", "#484848");
            }
        });

        $(".textbox input").keyup(function () {
            var inputs = $(".textbox input");
            if (inputs[0].value != "" && inputs[1].value) {
                $(".login-btn").attr("disabled", false);
                $(".login-btn").addClass("active");
            } else {
                $(".login-btn").attr("disabled", true);
                $(".login-btn").removeClass("active");
            }
        });


    }

    render() {
        return (
            <div class="body">
                <div class="container-fluid">
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <div class="login-form">
                                <div class="social-media">
                                    <button class="fb"><img src={img1} alt=""/></button>
                                    <button class="google"><img src={img2} alt=""/></button>

                                </div>
                                <h6>Sign In</h6>

                                <form action="">
                                    <div class="textbox">
                                        <input type="text" placeholder="Username Or Email" className=""/>
                                        <span class="check-message hidden">Required</span>
                                    </div>

                                    <div class="textbox">
                                        <input type="password" placeholder="Password"/>
                                        <span class="check-message hidden">Required</span>
                                    </div>

                                    <div class="options">
                                        <label class="remember-me">
            <span class="checkbox">
              <input type="checkbox"/>
              <span class="checked"></span>
            </span>
                                            Remember me
                                        </label>

                                        <a href="#">Forgot Your Password</a>
                                    </div>
                                    <button onClick={()=>{console.log('hello')}}>hi</button>
                                    <button type="submit" value="Log In Now" class="login-btn" disabled>Log In Now
                                    </button>
                                    <div class="privacy-link">
                                        <a href="#">Privacy Policy</a>
                                    </div>
                                </form>
                                <div class="dont-have-account">
                                    Don't have an account?
                                    <Link to='/signup'>Sign Up</Link>
                                </div>
                            </div>

                        </Col>


                    </Row>
                </div>
                <Switch>
                    <Route exact path="/signup">
                        <Signup name={'blue'}/>
                    </Route>
                </Switch>
            </div>

        );
    }


}

export default Login;
