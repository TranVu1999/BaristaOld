import React, { Component } from 'react';
import Banner from './../../commons/components/Banner';
import './style.scss';

import {connect} from 'react-redux';
import {actUpdateUrl} from './../../commons/modules/Url/actions';
import {actChangeNotify} from './../../commons/modules/Notify/actions';

import axios from './../../api'
import axios2 from 'axios'

import * as Validate from "./../../commons/js/validate-input";

import * as Notify from "./../../commons/constant/Notify";

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenSumitCode: false,
            code: {
                time: "",
                code: '',
                confirmCode: ''
            },
            fullname: "",
            username: "",
            password: "",
            confirmPassword: "",
            error: {
                confirmCode: "",
                fullname: "",
                username: "",
                password: "",
                confirmPassword: ""
            }
        }
    }

    onHandlechange = (event) =>{
        const {name, value} = event.target;
        if(name === "confirmCode"){
            this.setState({
                ...this.state,
                code: {
                    ...this.state.code,
                    [name]: value
                },
                error: {
                    ...this.state.error,
                    [name]: ""
                }
            })
        }else{
            this.setState({
                ...this.state,
                [name]: value,
                error: {
                    ...this.state.error,
                    [name]: ""
                }
            })
        }
        
    }

    onHandleBlur = event =>{
        const {name, value} = event.target;
        let isError = false;
        let error = {
            [name]: value
        }

        // Bước 1: Kiểm tra fullname có hợp lệ
        if(name === "fullname" && !Validate.isFullname(value)){
            isError = true
            error[name] = Notify.IS_NOT_FULLNAME
        }

        // Bước 2: Kiểm tra username có hợp lệ
        if(name === "username"){
            if(!Validate.isEmail(value)){
                isError = true
                error[name] = Notify.IS_NOT_USERNAME
            }else{
                axios.get(`account/register/${value}/false`)
                .then(res =>{
                    if(res.data){
                        isError = true
                        error[name] = Notify.IS_USERNAME_EXISTS;

                        this.setState({
                            ...this.state,
                            error: {
                                ...this.state.error,
                                ...error
                            }
                        }, () =>{
                            isError = true
                            error[name] = Notify.IS_USERNAME_EXISTS;
                        })
                    }
                })
                .catch(err =>{})

                axios2.create({
                    baseURL: "http://localhost:5000/api/"
                })
                .post('auth/check-email', {
                    "email": value
                })
                .then(res =>{
                    if(res.status !== 500){
                        isError = true
                        error[name] = Notify.IS_USERNAME_EXISTS;

                        this.setState({
                            ...this.state,
                            error: {
                                ...this.state.error,
                                ...error
                            }
                        }, () =>{
                            isError = true
                            error[name] = Notify.IS_USERNAME_EXISTS;
                        })
                    }
                    console.log("res", res)
                })
                .catch(err =>{
                    
                })
            }
        }

        // Bước 3: Kiểm tra password có hợp lệ
        if(name === "password" && !Validate.isPassword(value)){
            isError = true
            error[name] = Notify.IS_NOT_PASSWORD
        }

        // Bước 4: Kiểm tra confirm password có hợp lệ
        if(name === "confirmPassword" && value !== this.state.password){
            isError = true
            error[name] = Notify.IS_NOT_CONFIRMPASSWORD
        }

        // Bước 5: Kiểm tra dữ liệu rỗng
        if(Validate.isEmpty(value)){
            isError = true;
            error[name] = Notify.IS_EMPTY
        }

        if(isError){
            this.setState({
                ...this.state,
                error: {
                    ...this.state.error,
                    ...error
                }
            })
        }
    }

    onHanldeSubmit = (event) =>{
        event.preventDefault();
        const accountInfo = this.state;

        const error = {
            fullname: !accountInfo.fullname ? Notify.IS_EMPTY : "",
            username: !accountInfo.username ? Notify.IS_EMPTY : "",
            password: !accountInfo.password ? Notify.IS_EMPTY : "",
            confirmPassword: !accountInfo.fullname ? Notify.IS_EMPTY : ""
        }

        if(error.fullname || error.username || error.password || error.confirmPassword){
            this.setState({
                ...this.state,
                error
            })
        }else{
            // axios.get(`account/register/${accountInfo.username}/true`)
            // .then(res =>{
            //     const d = new Date();
                
            //     this.setState({
            //         ...this.state,
            //         isOpenSumitCode: true,
            //         code: {
            //             ...this.state.code,
            //             code: res.data,
            //             time: d.getTime()
            //         }
            //     })
            // })

            axios2.create({
                baseURL: "http://localhost:5000/api/"
            })
            .post('auth/verify', {
                "email": accountInfo.username
            })
            .then(res =>{

                if(res.data.success){
                    const d = new Date();
                    this.setState({
                        ...this.state,
                        isOpenSumitCode: true,
                        code: {
                            ...this.state.code,
                            code: res.data.verifyCode,
                            time: d.getTime()
                        }
                    })
                }else{
                    // Show dialog erro
                }
            })
            .catch(err =>{})
        }
    }

    onHandleOpenLoginForm = () =>{
        this.setState({
            ...this.state,
            code: {
               ...this.state.code,
                isOpenPopup: false
            }
        })
    }

    onHandleSubmitCode = (event) =>{
        event.preventDefault();
        const d = new Date();
        const time = d.getTime();
        const accountInfo = this.state;

        if(time - accountInfo.code.time > 180000){
            this.setState({
                ...this.state,
                error: {
                    ...this.state.error,
                    code: "Your confirmation code has expired. Please re-register"
                }
            })
        }else if(accountInfo.code.code !== accountInfo.code.confirmCode || !accountInfo.code.confirmCode){
            this.setState({
                ...this.state,
                error: {
                    ...this.state.error,
                    code: "Your confirmation code is incorrect. Please check again"
                }
            })
        }else{
            const data = {
                username: accountInfo.username,
                fullname: accountInfo.fullname,
                password: accountInfo.password
            }

            axios.post(`account/register`, data)
            .then(res =>{
                this.props.onChangeNotify({
                    typeNotify: 1,
                    notifyContent: `Welcome ${accountInfo.fullname} to BaristaCoffee.`
                });
                this.props.history.push("/")
            })
            .catch(err =>{
                this.props.onChangeNotify({
                    typeNotify: -1,
                    notifyContent: `Hey ${accountInfo.fullname} ! An error occurred during registration. Please perform the operation again`
                });
            })
            
        }
    }

    onCloseSubmitCode = () =>{
        this.setState({
            ...this.state,
            isOpenSumitCode: false,
        })
    }

    render() {
        const accountInfo = this.state;

        return (
            <>
                <Banner bannerTitle = "Register Page"/>

                <section className="main-page cf-bg section-padding">
                    <div className="cf-container signup-page">
                        <div className="d-flex-between signup__content">
                        <div className="signup--left">
                            <h2>Sign up here</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis,  hinc partem ei est. Eos ei nisl graecis, vix aperiri nsequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id.error epicurei mea.</p>
                            
                            <div 
                                className = {
                                    accountInfo.isOpenSumitCode ? "slide-form open-submit-code" : "slide-form"
                                }
                            >
                                <div className = "form-box">
                                    <form 
                                        className="form form-signup"
                                        onSubmit = {this.onHanldeSubmit}
                                    >
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="input-control" 
                                                placeholder="Full name ..." 
                                                name = "fullname"
                                                value = {accountInfo.fullname}
                                                onChange = {this.onHandlechange}
                                                onBlur = {this.onHandleBlur}
                                            />

                                            <p class="notify warning">{accountInfo.error.fullname}</p>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="input-control" 
                                                placeholder="Your email or phone number ..." 
                                                name = "username"
                                                value = {accountInfo.email}
                                                onChange = {this.onHandlechange}
                                                onBlur = {this.onHandleBlur}
                                            />
                                            <p class="notify warning">{accountInfo.error.username}</p>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="input-control" 
                                                placeholder="Password ..." 
                                                name = "password"
                                                value = {accountInfo.password}
                                                onChange = {this.onHandlechange}
                                                onBlur = {this.onHandleBlur}
                                            />
                                            <p class="notify warning">{accountInfo.error.password}</p>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                type="text" 
                                                className="input-control" 
                                                placeholder="Confirm password ..."
                                                name = "confirmPassword"
                                                value = {accountInfo.confirmPassword}
                                                onChange = {this.onHandlechange} 
                                                onBlur = {this.onHandleBlur}
                                            />
                                            <p class="notify warning">{accountInfo.error.confirmPassword}</p>
                                        </div>
                                        <div className="form-group">
                                            <button className="barista-btn">Submit</button>
                                        </div>
                                    </form>

                                </div>
                                
                                <div className = "form-box">
                                    <form 
                                        className = "form"
                                        onSubmit = {this.onHandleSubmitCode}
                                    >
                                        <div className = "form-group">
                                            <input 
                                                type="text" 
                                                placeholder="Your code ..." 
                                                className = "input-control mb-25"
                                                name ="confirmCode"
                                                onChange = {this.onHandlechange}
                                                value = {accountInfo.code.confirmCode}
                                            />
                                            <p class="notify warning">{accountInfo.error.code}</p>
                                            <button className="barista-btn ">Apply</button>
                                        </div>
                                        <p>We just sent a confirmation code to your email. Please check your email and re-enter this confirmation code. This confirmation code is valid for 3 minutes only</p>
                                    </form>
                                    <button 
                                        class="barista-read-more before"
                                        onClick = {this.onCloseSubmitCode}
                                    ><span aria-hidden="true" class="arrow_left"></span> Return</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="signup--right">
                            <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/02/Reservation-N-4.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    componentDidMount(){
        this.props.onUpdateUrl({
            params: this.props.match.params,
            url: this.props.match.url,
            path: this.props.match.path
        })
    }
}

const mapStateToProps = state =>{
    return{
        accountInfo: state.accountInfoReducer.accountInfo
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateUrl: url =>{
            dispatch(actUpdateUrl(url))
        },
        onChangeNotify: typeNotify =>{
            dispatch(actChangeNotify(typeNotify))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
