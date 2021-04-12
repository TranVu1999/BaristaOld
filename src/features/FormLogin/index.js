import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actLoginApi} from './modules/action';

import InputPasswordComponent from './../../components/InputPassword';
import InputEmailComponent from './../../components/InputEmail';

class FormLogin extends Component {

    constructor(props){
        super(props);
        this.InputPasswordComponent = React.createRef();
        this.InputEmailComponent = React.createRef();

        this.state = {
            userEmail: '',
            password: ''
        }
    }

    getEmail = (userEmail) =>{
        this.setState({
            userEmail
        })
    }

    getPassword = (password) =>{
        this.setState({
            password
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault(); 

        let flag = true;
        const {userEmail, password} = this.state;
        if(!userEmail && !password){
            flag = false;
            this.InputEmailComponent.current.handleOnEnter({
                target: {
                    value: ''
                }
            });
            this.InputPasswordComponent.current.handleOnEnter({
                target: {
                    value: ''
                }
            });
        }else if(!userEmail){
            flag = false;
            this.InputEmailComponent.current.handleOnEnter({
                target: {
                    value: ''
                }
            });
        }else if(!password){
            flag = false;
            this.InputPasswordComponent.current.handleOnEnter({
                target: {
                    value: ''
                }
            });
        }

        if(flag){
            this.props.login(this.state);
        }
    }
    
    render() {
        const resLogin = this.props.data;
        
        return (
            <form 
                className="login-form"
                onSubmit = {this.handleSubmit}
            >
                <div className="form-group">
                    <div className="input-label">Email / Username</div>
                    <InputEmailComponent
                        onGetEmail = {this.getEmail}
                        ref={this.InputEmailComponent}
                    />
                </div>

                <div className="form-group">
                    <div className="input-label">Password</div>
                    <InputPasswordComponent
                        onGetPassword = {this.getPassword}
                        ref = {this.InputPasswordComponent}
                    />
                </div>

                <div className="form-group">
                    <button>Login</button>
                    {resLogin === 0 ? <p className="notify warning">Password is not correct!!!</p> : null}
                    {resLogin && resLogin <= -1 ? <p className="notify warning">Email is not registed!!!</p> : null}
                </div>

                <div className="form-group login-action">
                    <a href="/#">Create account?</a> 
                    &#160;/&#160;
                    <a href="/#">Forgot password?</a> 
                </div>

                <div className="form-group other-signup">
                    <span>Or Sign Up Using</span>
                    <p>
                        <a href="/#" className="icon">
                            <span aria-hidden="true" className="social_facebook"></span>
                        </a>
                        <a href="/#" className="icon">
                            <span aria-hidden="true" className="social_twitter"></span>
                        </a>
                        <a href="/#" className="icon">
                            <span aria-hidden="true" className="social_googleplus"></span>
                        </a>
                    </p>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state =>{
    return {
        loading: state.formLoginReducer.loading,
        data: state.formLoginReducer.data,
        errors: state.formLoginReducer.errors,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        login: (account) =>{
            dispatch(actLoginApi(account));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)
