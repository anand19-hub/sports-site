import React, {Component} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from "../components/header";
import Login from "./login";
import '../style/signup.css';
import {BASE_URL} from "../actions";
import SweetAlert from "react-bootstrap-sweetalert/dist";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            cpassword: '',
            org_name:'',
            opassword:'',
            oemail:'',
            show:false,
            show2:false,
            show3:false,
            show4:false
        };
    }

    componentDidMount() {
        const switchers = [...document.querySelectorAll('.switcher')];

        switchers.forEach(item => {
            item.addEventListener('click', function () {
                switchers.forEach(item => item.parentElement.classList.remove('is-active'));
                this.parentElement.classList.add('is-active')
            })
        })


    }
    render() {
        return (
            <div>
                <Header/>
                <div className="body">
                    <section className="forms-section">
                        <h1 className="section-title">GETTING STARTED HERE</h1>
                        <div className="forms">
                            <div className="form-wrapper is-active">
                                <button type="button" className="switcher switcher-login">
                                    Player
                                    <span className="underline"/>
                                </button>
                                <div className="form form-login">
                                    <fieldset>
                                        <legend>Please, enter your email, password and password confirmation for sign
                                            up.
                                        </legend>
                                        <div className="input-block">
                                            <label htmlFor="signup-email">First name</label>
                                            <input id="signup-email" type="text" required
                                                   onChange={(e) => this.setState({firstname: e.target.value})}/>
                                        </div>
                                        <div className="input-block">
                                            <label htmlFor="signup-email">Last name</label>
                                            <input id="signup-email" type="text" required
                                                   onChange={(e) => this.setState({lastname: e.target.value})}/>
                                        </div>
                                        <div className="input-block">
                                            <label htmlFor="signup-email">E-mail</label>
                                            <input id="signup-email" type="email" required
                                                   onChange={(e) => this.setState({email: e.target.value})}/>
                                        </div>
                                        <div className="input-block">
                                            <label htmlFor="signup-password">Password</label>
                                            <input id="signup-password" type="password" required
                                                   onChange={(e) => this.setState({password: e.target.value})}/>
                                        </div>
                                        <div className="input-block">
                                            <label htmlFor="signup-password-confirm">Confirm password</label>
                                            <input id="signup-password-confirm" type="password" required
                                                   onChange={(e) => this.setState({cpassword: e.target.value})}/>
                                        </div>
                                    </fieldset>
                                    <button type="submit" className="btn-signup"
                                            onClick={() => this.playerSignUp()}>Continue
                                    </button>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <button type="button" className="switcher switcher-signup">
                                    Organizer
                                    <span className="underline"></span>
                                </button>
                                <div className="form form-signup">
                                    <fieldset>
                                        <legend>Please, enter your email, password and password confirmation for sign
                                            up.
                                        </legend>
                                        <div className="input-block">
                                            <label htmlFor="signup-email">Organization name</label>
                                            <input id="signup-email" type="text" required  onChange={(e) => this.setState({org_name: e.target.value})}/>
                                        </div>
                                        <div className="input-block">
                                            <label htmlFor="signup-email">E-mail</label>
                                            <input id="signup-email" type="email" required  onChange={(e) => this.setState({oemail: e.target.value})}/>
                                        </div>
                                        <div className="input-block">
                                            <label htmlFor="signup-password">Password</label>
                                            <input id="signup-password" type="password"  onChange={(e) => this.setState({opassword: e.target.value})} required/>
                                        </div>
                                        <div className="input-block">
                                            <label htmlFor="signup-password-confirm">Confirm password</label>
                                            <input id="signup-password-confirm" type="password" required/>
                                        </div>
                                    </fieldset>
                                    <button type="submit" className="btn-signup" onClick={()=>this.registerOrg()}>Continue</button>
                                </div>
                                <SweetAlert success title="Success!" show={this.state.show} onConfirm={()=>{this.setState({show:false})}} onCancel={()=>{this.setState({show:false})}}>
                                    Account  created
                                </SweetAlert>
                                <SweetAlert danger title="Sorry!" show={this.state.show2} onConfirm={()=>{this.setState({show2:false})}} onCancel={()=>{this.setState({show2:false})}}>
                                    Account Not created
                                </SweetAlert>
                            </div>
                        </div>
                    </section>
                    <Switch>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                    </Switch>
                </div>
            </div>);
    }

    playerSignUp() {
        const {
            firstname,
            lastname,
            email,
            password,
        } = this.state;
        if (firstname !== '' && lastname !== '' && email !== '' && password !== '') {
            let body = JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                password: password,
                email: email,
            });
            return fetch(BASE_URL + "player", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            }).then(response => response.json()).then((response) => {
                console.log(response);
                this.setState({show:true});
            }).catch((error) => {
                console.log(error);
                this.setState({show2:true});
            })
        } else {
            console.log('cant post');
        }
    }

    registerOrg() {
        const {
            org_name,
            oemail,
            opassword,
        } = this.state;
        if (org_name !== '' && oemail !== '' && opassword !== '') {
            let body = JSON.stringify({
                org_name: org_name,
                password: opassword,
                email: oemail,
            });
            return fetch(BASE_URL + "org", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            }).then(response => response.json()).then((response) => {
                console.log(response);
                this.setState({show:true});
            }).catch((error) => {
                console.log(error);
                this.setState({show2:true});
            })
        } else {
            console.log('cant post');
        }
    }
}

export default Signup;
