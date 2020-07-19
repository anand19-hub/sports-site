import React, { Component } from 'react';
import '../style/login.css';
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Col,Row} from "react-bootstrap";
import Home from "./home";
import Signup from "./signup";
const img1 = require('../asserts/images/fb.png');
const img2 = require('../asserts/images/google.png');
class Login extends Component{
    componentDidMount() {
        (function(){
            $('.flex-container').waitForImages(function() {
                $('.spinner').fadeOut();
            }, $.noop, true);

            $(".flex-slide").each(function(){
                $(this).hover(function(){
                    $(this).find('.flex-title').css({
                        transform: 'rotate(0deg)',
                        top: '10%'
                    });
                    $(this).find('.flex-about').css({
                        opacity: '1'
                    });
                }, function(){
                    $(this).find('.flex-title').css({
                        transform: 'rotate(90deg)',
                        top: '15%'
                    });
                    $(this).find('.flex-about').css({
                        opacity: '0'
                    });
                })
            });
        })();
    }

    render() {
        return (
            <div className="flex-container">
                <div className="spinner">
                    <p>
                        <div className="cube1"></div>
                        <div className="cube2"></div>
                        Loading...
                    </p>
                </div>
                <div className="flex-slide home">
                    <div className="flex-title flex-title-home">Home</div>
                    <div className="flex-about flex-about-home"><p>Click here to navigate to the home section of the
                        website</p></div>
                </div>
                <div className="flex-slide about">
                    <div className="flex-title">About</div>
                    <div className="flex-about"><p>Click here to navigate to the About section of the website</p></div>
                </div>
                <div className="flex-slide work">
                    <div className="flex-title">Work</div>
                    <div className="flex-about"><p>Listing relevant snippets of work:</p>
                        <ul>
                            <li>First piece of work</li>
                            <li>Second piece of work</li>
                            <li>Third piece of work</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-slide contact">
                    <div className="flex-title">Contact</div>
                    <div className="flex-about">
                        <p>Use the contact form below</p>
                        <form className="contact-form">
                            <p>Email <input type="text" name="email"/></p>
                            <p>Comment <textarea type="text" name="comment" row="5"></textarea></p>
                            <p><input type="submit" name="email" value="Send Message"/></p>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

}