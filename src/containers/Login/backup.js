import React, { Component } from 'react'
import Popup from './../../commons/components/Popup';
import InputEmail from './../../commons/components/InputEmail';
import InputPassword from './../../commons/components/InputPassword';

import {NavLink} from 'react-router-dom';

import {connect} from 'react-redux';
import {actOpenLoginPopup, actLoginApi} from './../../commons/modules/Login/actions';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            password: ''
        }
    }

    getEmail = (userEmail) =>{
        this.setState({
            ...this.state,
            userEmail
        })
    }

    getPassword = (password) =>{
        this.setState({
            ...this.state,
            password
        })
    }

    onHandleOpenLoginForm = (isLoginForm) =>{
        this.props.onHandleOpenLoginForm(isLoginForm);
    }

    onHandleSubmit = (event) =>{
        event.preventDefault();

        const {userEmail, password} = this.state;
        if(userEmail && password){

            this.props.onLogin(this.state);
        }
    }

    render() {
        const {accountFlag} = this.props;

        return (
            <>
                <Popup 
                    isOpen = {this.props.isLoginForm}
                    onHandleOpenLoginForm = {this.onHandleOpenLoginForm}
                >
                    <form 
                        className="login-form"
                        onSubmit = {this.onHandleSubmit}
                    >
                        <div className="form-group">
                            <div className="input-label">Email / Username</div>
                            <InputEmail onGetEmail = {this.getEmail}/>
                        </div>

                        <div className="form-group">
                            <div className="input-label">Password</div>
                            <InputPassword onGetPassword = {this.getPassword}/>
                        </div>

                        <div className="form-group">
                            <button>Login</button>
                            {accountFlag === -1 ? <p className="notify warning">This account is not registed!!!</p> : ""}
                            {accountFlag === 0 ? <p className="notify warning">Password is not correct!!!</p> : ""}
                        </div>

                        <div className="form-group login-action">
                        <NavLink to="signup">Create account?</NavLink>
                        /
                        <a href="/#">Forgot password?</a>
                        </div>

                        <div className="form-group other-signup">
                        <span>Or Sign Up Using</span>
                        <p>
                            <a href="/#" className="icon"><span aria-hidden="true" className="social_facebook" /></a>
                            <a href="/#" className="icon"><span aria-hidden="true" className="social_twitter" /></a>
                            <a href="/#" className="icon"><span aria-hidden="true" className="social_googleplus" /></a>
                        </p>
                        </div>
                    </form>
                </Popup>
            </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        isLoginForm: state.loginReducer.isLoginForm,
        accountFlag : state.loginReducer.data.flag
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onHandleOpenLoginForm: isLoginForm =>{
            dispatch(actOpenLoginPopup(isLoginForm))
        },
        onLogin: (account) =>{
            dispatch(actLoginApi(account));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
