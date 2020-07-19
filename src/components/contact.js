import React, {Component} from 'react';
import '../style/contact.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class contact extends Component {
    render() {
        return (
            <div className="contact-section">
                <div className="inner-width">
                    <h1>Get in touch with us</h1>
                    <input type="text" className="name" placeholder="Your Name"/>
                        <input type="email" className="email" placeholder="Your Email"/>
                            <textarea rows="1" placeholder="Message" className="message"></textarea>
                            <button>Get in touch</button>
                </div>
            </div>
        )
    }
}
export default contact;