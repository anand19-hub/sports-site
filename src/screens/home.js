import React, { Component } from 'react';
import '../style/home.css';
const img1 = require('../asserts/images/ball.png');
const img2= require('../asserts/images/player.png');
class Home extends Component{
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }
    render() {
        return (
            <div className='back-gr'>
                <img src={img2}/>
                <img src={img1} className='ball'/>


                    <div className="content">
                        <div className="content__container">
                            <p className="content__container__text">
                                Hello
                            </p>

                            <ul className="content__container__list">

                                <li className="content__container__list__item">Player</li>
                                <li className="content__container__list__item">Partners</li>
                                <li className="content__container__list__item">Viewers</li>
                                <li className="content__container__list__item">Users</li>
                            </ul>
                        </div>
                    </div>
            </div>
        );
                }
}
export default Home;