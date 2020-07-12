import React, { Component } from 'react';
class Signup extends Component{
    constructor() {
        super();
        this.state = {
            name: 'React',
            username:'',
        };
    }
    render() {
        return (
            <div>
                SignUp
            </div>);
    }
}
export default Signup;