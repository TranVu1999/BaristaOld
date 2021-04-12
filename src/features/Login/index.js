import React, { Component } from 'react';
import './style.scss';

import FormLogin from '../../features/FormLogin';

export default class LoginComponent extends Component {

    render() {
        const {isOpenLogin, isClosePopup} = this.props;

        return (
            <div 
                className = {isOpenLogin ? 'login-popup active' : 'login-popup'}
            >
                <div className="login__container">
                    <div className="login--header">
                        <h3>Account Login</h3>
                        <button 
                            className="close-popup"
                            onClick = {() => {isClosePopup(false)}}
                        >
                            <span aria-hidden="true" className="icon_close_alt2" />
                        </button>
                    </div>

                    <div className="login--body">
                        <FormLogin/>
                    </div>
                </div>
            </div>

        )
    }
}
