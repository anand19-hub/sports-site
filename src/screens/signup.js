import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";
import $ from "jquery";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./login";
import '../style/signup.css';
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
        const switchers = [...document.querySelectorAll('.switcher')];

        switchers.forEach(item => {
            item.addEventListener('click', function() {
                switchers.forEach(item => item.parentElement.classList.remove('is-active'));
                this.parentElement.classList.add('is-active')
            })
        })


    }
    render() {
        return (
            <div className="body">
                <section className="forms-section">
                    <h1 className="section-title">GETTING STARTED HERE</h1>
                    <div className="forms">
                        <div className="form-wrapper is-active">
                            <button type="button" className="switcher switcher-login">
                                Player
                                <span className="underline"></span>
                            </button>
                            <form className="form form-login">
                                <fieldset>
                                    <legend>Please, enter your email, password and password confirmation for sign up.
                                    </legend>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">First name</label>
                                        <input id="signup-email" type="email" required/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">Last name</label>
                                        <input id="signup-email" type="email" required/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">E-mail</label>
                                        <input id="signup-email" type="email" required/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-password">Password</label>
                                        <input id="signup-password" type="password" required/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-password-confirm">Confirm password</label>
                                        <input id="signup-password-confirm" type="password" required/>
                                    </div>
                                </fieldset>
                                <button type="submit" className="btn-signup">Continue</button>
                            </form>
                        </div>
                        <div className="form-wrapper">
                            <button type="button" className="switcher switcher-signup">
                                Organizer
                                <span className="underline"></span>
                            </button>
                            <form className="form form-signup">
                                <fieldset>
                                    <legend>Please, enter your email, password and password confirmation for sign up.
                                    </legend>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">Organization name</label>
                                        <input id="signup-email" type="email" required/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-email">E-mail</label>
                                        <input id="signup-email" type="email" required/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-password">Password</label>
                                        <input id="signup-password" type="password" required/>
                                    </div>
                                    <div className="input-block">
                                        <label htmlFor="signup-password-confirm">Confirm password</label>
                                        <input id="signup-password-confirm" type="password" required/>
                                    </div>
                                </fieldset>
                                <button type="submit" className="btn-signup">Continue</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>);
    }
}
export default Signup;