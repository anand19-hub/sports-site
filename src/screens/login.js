import React, {Component} from 'react';
import "../style/login.css";
import $ from 'jquery';
import {
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import SocialButton from './SocialButton';
import {Col, Row} from "react-bootstrap";
import Signup from "./signup";
import {BASE_URL} from "../actions";
import Header from "../components/header";
import SweetAlert from "react-bootstrap-sweetalert/dist";
const img1 = require('../asserts/images/fb.png');
const img2 = require('../asserts/images/google.png');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            show:false,
            show2:false
        };
    }

    componentDidMount() {
        $(".textbox input").focusout(function () {
            if ($(this).val() === "") {
                $(this).siblings().removeClass("hidden");
                $(this).css("background", "#554343");
            } else {
                $(this).siblings().addClass("hidden");
                $(this).css("background", "#484848");
            }
        });

        $(".textbox input").keyup(function () {
            const inputs = $(".textbox input");
            if (inputs[0].value !== "" && inputs[1].value) {
                $(".login-btn").attr("disabled", false);
                $(".login-btn").addClass("active");
            } else {
                $(".login-btn").attr("disabled", true);
                $(".login-btn").removeClass("active");
            }
        });


    }
    login(){
        try{
            const {username,password} = this.state;
            if(username!=='' && password!==''){
                let body=JSON.stringify({
                    username:username,
                    password:password
                });
                return fetch(BASE_URL + "login", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: body
                }).then(response => response.json()).then((response)=>{
                    if(response.role==='Player'){
                        console.log('player');
                        this.props.history.push({pathname:'/player/dashboard',state:{details:response}});
                        console.log(response);
                    }else if(response.role==='Org'){
                        console.log('org');
                        this.props.history.push({pathname:'/admin/dashboard',state:{details:response}});

                    }else{
                        this.setState({show2:true});
                    }
                }).catch((error)=>{
                    console.log(error);
                    this.setState({show2:true});
                })
            }else{

            }
        }catch (e) {
            console.log(e)
        }

    }
    handleSocialLogin = (user) => {
        console.log(user);
        if(user){
            this.props.history.push({pathname:'/player/dashboard',state:{details:{role:'player',id:'1'}}});
        }

    };

     handleSocialLoginFailure = (err) => {
        console.error(err)
         if(err){
             this.setState({show2:true});
         }
    };
    render() {
        return (
            <div>
                <Header/>
                <div className="body">
                <div className="container-fluid">
                    <Row>
                        <Col/>
                        <Col/>
                        <Col>
                            <div className="login-form">
                                <div class="social-media">
                                    <SocialButton className="fb"   provider='facebook'
                                                  appId=''
                                                  onLoginSuccess={this.handleSocialLogin()}
                                                  onLoginFailure={this.handleSocialLoginFailure()}><img src={img1} alt=""/></SocialButton>
                                    <SocialButton className="google"  provider='google'
                                                  appId=''
                                                  onLoginSuccess={this.handleSocialLogin()}
                                                  onLoginFailure={this.handleSocialLoginFailure()}><img src={img2} alt=""/></SocialButton>

                                </div>
                                <h6>Sign In</h6>

                                    <div className="textbox">
                                        <input type="text" placeholder="Username Or Email" className=""  onChange={(value)=>this.setState({username:value.target.value})}/>
                                        <span className="check-message hidden">Required</span>
                                    </div>

                                    <div class="textbox">
                                        <input type="password" placeholder="Password"  onChange={(value)=>this.setState({password:value.target.value})}/>
                                        <span class="check-message hidden">Required</span>
                                    </div>

                                    <div class="options">
                                        <label className="remember-me">
            <span class="checkbox">
              <input type="checkbox"/>
              <span class="checked"/>
            </span>
                                            Remember me
                                        </label>

                                        <a >Forgot Your Password</a>
                                    </div>
                                    <button  className="login-btn"  onClick={()=>this.login()}>Log In
                                    </button>
                                    <div class="privacy-link">
                                        <a >Privacy Policy</a>
                                    </div>
                                <div class="dont-have-account">
                                    Don't have an account?
                                    <Link onClick={()=>this.props.history.push({pathname:'/signup'})}>Sign Up</Link>
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
                <SweetAlert success title="Success!" show={this.state.show} onConfirm={()=>{this.setState({show:false})}} onCancel={()=>{this.setState({show:false})}}>
                    Account  created
                </SweetAlert>
                <SweetAlert danger title="Sorry!" show={this.state.show2} onConfirm={()=>{this.setState({show2:false})}} onCancel={()=>{this.setState({show2:false})}}>
                    Username or Password Wrong
                </SweetAlert>
            </div>
        );
    }


}

export default withRouter(Login);
