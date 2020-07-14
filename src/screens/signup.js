import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";
import $ from "jquery";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
const img1 = require('../asserts/images/fb.png');
const img2 = require('../asserts/images/google.png');

class Signup extends Component{
    constructor() {
        super();
        this.state = {
            name: 'React',
            username:'',
        };
    }
    componentDidMount(){

        $(".textbox input").focusout(function(){
            if($(this).val() == ""){
                $(this).siblings().removeClass("hidden");
                $(this).css("background","#554343");
            }else{
                $(this).siblings().addClass("hidden");
                $(this).css("background","#484848");
            }
        });

        $(".textbox input").keyup(function(){
            var inputs = $(".textbox input");
            if(inputs[0].value != "" && inputs[1].value){
                $(".login-btn").attr("disabled",false);
                $(".login-btn").addClass("active");
            }else{
                $(".login-btn").attr("disabled",true);
                $(".login-btn").removeClass("active");
            }
        });


    }
    render() {
        return (
            <div className="body">
                <div className="container-fluid">
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <div className="login-form">
                                <div className="social-media">
                                    <button className="fb"><img src={img1} alt=""/></button>
                                    <button className="google"><img src={img2} alt=""/></button>

                                </div>
                                <h6>Sign Up</h6>

                                <form action="">
                                    <div className="textbox">
                                        <input type="text" placeholder="Firstname"/>
                                        <span className="check-message hidden">Required</span>
                                    </div>
                                    <div className="textbox">
                                        <input type="email" placeholder="Email"/>
                                        <span className="check-message hidden">Required</span>
                                    </div>

                                    <div className="textbox">
                                        <input type="password" placeholder="Password"/>
                                        <span className="check-message hidden">Required</span>
                                    </div>

                                    <div className="options">
                                        <label className="remember-me">
            <span className="checkbox">
              <input type="checkbox"/>
              <span className="checked"></span>
            </span>
                                            Remember me
                                        </label>
                                    </div>

                                    <input type="submit" value="Log In Now" className="login-btn" disabled/>
                                    <div className="privacy-link">
                                        <a href="#">Privacy Policy</a>
                                    </div>
                                </form>
                                <div className="dont-have-account">
                                    Do you have an account?
                                    <Link to='/login'>Sign In</Link>
                                </div>
                            </div>

                        </Col>


                    </Row>
                </div>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>);
    }
}
export default Signup;