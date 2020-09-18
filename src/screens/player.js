import React, {Component} from 'react';

class player extends Component{
    componentDidMount() {

    }
    render() {
        return (<div className="stage">
                <div className="world">
                    <div className="team"/>
                    <div className="terrain">
                        <div className="field ground">
                            <div className="field__texture field__texture--gradient"/>
                            <div className="field__texture field__texture--gradient-b"/>
                            <div className="field__texture field__texture--grass"/>
                            <div className="field__line field__line--goal"/>
                            <div className="field__line field__line--goal field__line--goal--far"/>
                            <div className="field__line field__line--outline"/>
                            <div className="field__line field__line--penalty"/>
                            <div className="field__line field__line--penalty-arc"/>
                            <div className="field__line field__line--penalty-arc field__line--penalty-arc--far"/>
                            <div className="field__line field__line--mid"/>
                            <div className="field__line field__line--circle"/>
                            <div className="field__line field__line--penalty field__line--penalty--far"/>
                        </div>
                        <div className="field__side"/>
                    </div>
                </div>
            </div>
        )
    }
    }
    export default player;
