import React, { Component } from 'react';
import './style.scss';

import InputFieldComponent from './../../../commons/components/InputField';
import RadioFieldComponent from './../../../commons/components/RadioField';
import SelectFieldComponent from './../../../commons/components/SelectField';
import CheckboxFieldComponent from './../../../commons/components/CheckboxField';
import Popup from './../../../commons/components/Popup';
import AccordingToggle from './../../../commons/components/AccordingToggle';

import * as Validate from "./../../../commons/js/validate-input";
import * as Notify from "./../../../commons/constant/Notify";
import {actUpdateAccountApi, actDetCodeOnEmailApi} from './../../../commons/modules/AccountInfo/actions';

import {connect} from 'react-redux';

class AccountInfomation extends Component {
    constructor(props){
        super(props);
        this.state = {
            code: {
                time: "",
                code: '',
                confirmCode: ''
            },
            typePopup: "",
            placeConfirm: 'email',
            isUpdatePassword: false,
            fullname: '',
            phoneNumber: '',
            email: '',
            gender: 'male',
            password: '',
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            birthday:{
                date: 1,
                month: 1,
                year: 1990
            },
            error: {
                fullname: '',
                phoneNumber: '',
                email: '',
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                confirmCode: ''
            }
        }
    }

    onHandleChange = (event) =>{
        let {name, value, id} = event.target;
        let data = {
            ...this.state, 
            [name]: value,
            error: {
                ...this.state.error,
                [name]: ''
            }
        }

        if(name === 'gender'){
            data = {...this.state, gender: id}
        }else if(name === 'place-confirm'){
            data = {...this.state, placeConfirm: id}
        }else if(name === "date" || name === "month" || name === 'year'){
            data = {...data, birthday: {...data.birthday, [name]: value}}
        }

        
        this.setState({
            ...data
        })
    }

    onHandleBlur = event =>{
        const {value, name} = event.target;
        let error ={...this.state.error}

        switch (name){
            case 'fullname':
                if(!value){
                    error.fullname = Notify.IS_EMPTY
                }else if(!Validate.isFullname(value)){
                    error.fullname = Notify.IS_NOT_FULLNAME
                }
                break;

            case 'phoneNumber':
                if(!value){
                    error.phoneNumber = Notify.IS_EMPTY
                }else if(!Validate.isPhoneNumber(value)){
                    error.phoneNumber = Notify.IS_NOT_PHONE_NUMBER
                }
                break;

            case 'email':
                if(!value){
                    error.email = Notify.IS_EMPTY
                }else if(!Validate.isEmail(value)){
                    error.email = Notify.IS_NOT_EMAIL
                }
                break;

            case 'oldPassword':
                if(!value){
                    error.oldPassword = Notify.IS_EMPTY
                }else if(!Validate.isPassword(value)){
                    error.oldPassword = Notify.IS_NOT_PASSWORD
                }else if(value !== this.state.password){
                    error.oldPassword = 'This password is not correct!'
                }
                break;

            case 'newPassword':
                if(!value){
                    error.newPassword = Notify.IS_EMPTY
                }else if(!Validate.isPassword(value)){
                    error.newPassword = Notify.IS_NOT_PASSWORD
                }
                break;

            case 'confirmPassword':
                if(!value){
                    error.confirmPassword = Notify.IS_EMPTY
                }else if(value !== this.state.newPassword){
                    error.confirmPassword = "Your comfirm password is not match!"
                }
                break;
            default:
        }

        this.setState({
            ...this.state,
            error
        })
    }

    handleOpenUpdatePasswordForm = () =>{
        this.setState({
            ...this.state,
            isUpdatePassword: !this.state.isUpdatePassword
        });
    }

    onHandleUpdateAccountInfo = (event) =>{
        event.preventDefault();
        const accountInfo = this.state;

        // Bước 1: Kiểm tra form update mật khẩu có đang được mở hay không
        if(accountInfo.isUpdatePassword && accountInfo.newPassword){
            // Hiện tại, form update mật khẩu đang được mở đang được mở
            // Bước 3: kiểm tra xem các thông tin cần update có đang bị trống hay đang bị lỗi gì hay không
            let error = {...accountInfo.error};
            let flag = false;

            if(!accountInfo.fullname){
                error.fullname = Notify.IS_EMPTY;
                flag = true;
            }

            if(!accountInfo.phoneNumber){
                error.phoneNumber = Notify.IS_EMPTY;
                flag = true;
            }else if(accountInfo.error.phoneNumber){
                flag = true;
            }

            if(!accountInfo.oldPassword){
                error.oldPassword = Notify.IS_EMPTY;
                flag = true;
            }else if(accountInfo.error.oldPassword){
                flag = true;
            }

            if(accountInfo.error.newPassword){
                flag = true;
            }

            if(!accountInfo.confirmPassword){
                error.confirmPassword = Notify.IS_EMPTY;
                flag = true;
            }else if(accountInfo.error.confirmPassword){
                flag = true;
            }

            // Bước 4: Kiểm tra nếu xảy ra lỗi thì thông báo
            if(flag){
                this.setState({
                    ...this.state,
                    error
                })
            }else{
                this.setState({
                    ...this.state,
                    typePopup: 'confirm-code'
                }, () =>{
                    if(accountInfo.placeConfirm === 'email'){
                        this.props.onGetCodeOnEmail(accountInfo.email)
                    }else{
                        // Gởi mã xác nhận về điện thoại
                    }
                    
                })
                
            }

            
        }else{
            // Hiện tại, form update mật khẩu được được đóng
            // Bước 2: kiểm tra người dùng có lỡ tay đóng form hay không thông qua việc kiểm tra oldPasswrod nếu có giá trị thì xác định là có

            if(accountInfo.newPassword){
                // Trường hợp người dùng muốn update mật khẩu

            }else{
                // Trường hợp người dùng chỉ muốn update thông tin
                // Bước 3: kiểm tra xem các thông tin cần update có đang bị trống hay không
                let error = {...accountInfo.error};
                let flag = false;
                if(!accountInfo.fullname){
                    error.fullname = Notify.IS_EMPTY;
                    flag = true;
                }

                if(!accountInfo.phoneNumber){
                    error.phoneNumber = Notify.IS_EMPTY;
                    flag = true;
                }else if(accountInfo.error.phoneNumber){
                    error.phoneNumber = Notify.IS_NOT_PHONE_NUMBER;
                    flag = true;
                }

                // Bước 4: Kiểm tra nếu xảy ra lỗi thì thông báo
                if(flag){
                    this.setState({
                        ...this.state,
                        error
                    })
                }else{
                    // Bước 5: Gởi API về server cập nhật thông tin
                    const data = {
                        accountId: accountInfo.accountId,
                        username: accountInfo.email,
                        fullname: accountInfo.fullname,
                        phoneNumber: accountInfo.phoneNumber,
                        email:  accountInfo.email,
                        gender:  accountInfo.gender,
                        birthday: {
                            ...accountInfo.birthday
                        },
                        password: accountInfo.password
                    }

                    this.setState({
                        ...this.state,
                        typePopup: 'submitted'
                    }, () =>{
                        this.props.onUpdateAccount(data)
                    })
                    
                }
            }
            
        }
    }

    onHandleOpenLoginForm = ()=>{
        this.setState({
            ...this.state,
            typePopup: ""
        })
    }

    onHandlechangeCode = (event) =>{
        const {value} = event.target;
        this.setState({
            ...this.state, 
            code: {
                ...this.state.code, 
                confirmCode: value
            }
        })
    }

    onHandleSubmitCode = event =>{
        event.preventDefault();
        const code = this.props.accountInfo.code;

        const d = new Date();
        const time = d.getTime();
        const accountInfo = this.state;

        if(time - code.time > 180000){
            this.setState({
                ...this.state,
                typePopup: 'confirm-code',
                error: {
                    ...this.state.error,
                    confirmCode: "Your confirmation code has expired. Please re-register"
                }
            })
        }else if(code.code !== accountInfo.code.confirmCode || !accountInfo.code.confirmCode){
            this.setState({
                ...this.state,
                typePopup: 'confirm-code',
                error: {
                    ...this.state.error,
                    confirmCode: "Your confirmation code is incorrect. Please check again"
                }
            })
        }else{
            const data = {
                accountId: accountInfo.accountId,
                username: accountInfo.email,
                fullname: accountInfo.fullname,
                phoneNumber: accountInfo.phoneNumber,
                email:  accountInfo.email,
                gender:  accountInfo.gender,
                birthday: {
                    ...accountInfo.birthday
                },
                password: accountInfo.newPassword
            }

            this.setState({
                ...this.state,
                typePopup: 'submitted'
            }, () =>{
                this.props.onUpdateAccount(data)
            })
        }
    }

    render() {
        const accountInfo = this.state;

        return (
            <>
                <div className="account-content--box form">
                    <span className="account__title">Thông tin tài khoản</span>
                    <div className="bg-white account__content">
                        <form 
                            className="account__info"
                            onSubmit = {this.onHandleUpdateAccountInfo}
                        >

                            <div className="form-group">
                                <div className="input-label">Họ tên</div>
                                <InputFieldComponent 
                                    value = {accountInfo.fullname}
                                    placeholder ="Nhập tên"
                                    onHandleChange = {this.onHandleChange}
                                    name = 'fullname'
                                    onHandleBlur = {this.onHandleBlur}
                                    error = {accountInfo.error.fullname}
                                />
                                
                            </div>

                            <div className="form-group">
                                <div className="input-label">Số điện thoại</div>
                                <InputFieldComponent 
                                    value = {accountInfo.phoneNumber} 
                                    placeholder ="Nhập số điện thoại"
                                    onHandleChange = {this.onHandleChange}
                                    name = 'phoneNumber'
                                    onHandleBlur = {this.onHandleBlur}
                                    error = {accountInfo.error.phoneNumber}
                                />
                            </div>
                            
                            <div className="form-group">
                                <div className="input-label">Email </div>
                                <InputFieldComponent 
                                    value = {accountInfo.email} 
                                    placeholder ="Nhập email"
                                    onHandleChange = {this.onHandleChange}
                                    name = 'email'
                                    onHandleBlur = {this.onHandleBlur}
                                    error = {accountInfo.error.email}
                                />
                            </div>

                            <div className="form-group">
                                <div className="input-label gender-label">Giới tính</div>
                                <div className="input-group">
                                    <RadioFieldComponent 
                                        id = "male"
                                        name ="gender"
                                        label = "Nam"
                                        isChecked = {accountInfo.gender === "male"}
                                        onHandleChange = {this.onHandleChange}
                                    />
                                    <RadioFieldComponent 
                                        id = "female"
                                        name ="gender"
                                        label = "Nữ"
                                        isChecked = {accountInfo.gender === "female"}
                                        onHandleChange = {this.onHandleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group form-group--date">
                                <div className="input-label">Ngày sinh<p>(không bắt buộc)</p></div>
                                <div className="select-group">
                                    <SelectFieldComponent 
                                        name = "date"
                                        year = {accountInfo.birthday.year}
                                        month = {accountInfo.birthday.month}
                                        value = {accountInfo.birthday.date}
                                        onSelectChange={this.onHandleChange}
                                    />
                                    <SelectFieldComponent 
                                        name = "month"
                                        value = {accountInfo.birthday.month}
                                        onSelectChange={this.onHandleChange}
                                        
                                    />
                                    <SelectFieldComponent 
                                        name = "year"
                                        value = {accountInfo.birthday.year}
                                        onSelectChange={this.onHandleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="input-label"></div>
                                <div className="input-group">
                                    <CheckboxFieldComponent
                                        onOpenUpdatePassword = {this.handleOpenUpdatePasswordForm}
                                        value = {accountInfo.isUpdatePassword}
                                        id = "update-password"
                                    />
                                </div>
                            </div>

                            {
                                accountInfo.isUpdatePassword ? (
                                    <div className="update-password-group">
                                        <div className="form-group">
                                            <div className="input-label"><label>Mật khẩu cũ</label> </div>
                                            <InputFieldComponent 
                                                placeholder="Nhập mật khẩu cũ"
                                                value = {''} 
                                                onHandleChange = {this.onHandleChange}
                                                name = 'oldPassword'
                                                onHandleBlur = {this.onHandleBlur}
                                                error = {accountInfo.error.oldPassword}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <div className="input-label"><label>Mật khẩu mới</label></div>
                                            <InputFieldComponent 
                                                placeholder="Nhập mật khẩu mới"
                                                value = {accountInfo.newPassword} 
                                                onHandleChange = {this.onHandleChange}
                                                name = 'newPassword'
                                                onHandleBlur = {this.onHandleBlur}
                                                error = {accountInfo.error.newPassword}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <div className="input-label"><label>Nhập lại</label></div>
                                            <InputFieldComponent 
                                                placeholder="Nhập mật lại khẩu mới"
                                                value = {accountInfo.confirmPassword} 
                                                onHandleChange = {this.onHandleChange}
                                                name = 'confirmPassword'
                                                onHandleBlur = {this.onHandleBlur}
                                                error = {accountInfo.error.confirmPassword}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <div className="input-label gender-label">Nhận mã xác nhận</div>
                                            <div className="input-group">
                                                <RadioFieldComponent 
                                                    id = "email"
                                                    name ="place-confirm"
                                                    label = "Email"
                                                    isChecked = {accountInfo.placeConfirm === 'email'}
                                                    onHandleChange = {this.onHandleChange}
                                                />
                                                <RadioFieldComponent 
                                                    id = "phone"
                                                    name ="place-confirm"
                                                    label = "Số điện thoại"
                                                    isChecked = {accountInfo.placeConfirm !== 'email'}
                                                    onHandleChange = {this.onHandleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            }

                            

                            <div className="form-group">
                                <div className="input-label" />
                                <button 
                                    // disabled = {true}
                                >Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>

                <Popup 
                    popupTitle="Confirm Code" isOpen = {accountInfo.typePopup === 'submitted'}
                    onHandleOpenLoginForm = {this.onHandleOpenLoginForm}
                >
                    <AccordingToggle>
                        <div className="accordition-toggle--box">
                            <div className = "accordition-span">Submitted!!!</div>
                            
                        </div>
                    </AccordingToggle>
                </Popup>

                <Popup 
                    popupTitle="Confirm Code" isOpen = {accountInfo.typePopup === 'confirm-code'}
                    onHandleOpenLoginForm = {this.onHandleOpenLoginForm}
                >
                    <AccordingToggle>
                        <div className="accordition-toggle--box">
                            <p>We just sent a confirmation code to your email. Please check your email and re-enter this confirmation code. This confirmation code is valid for 3 minutes only</p>
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
                                        onChange = {this.onHandlechangeCode}
                                        defaultValue = {accountInfo.code.confirmCode}
                                    />
                                    <p class="notify warning">{accountInfo.error.confirmCode}</p>
                                    <button className="barista-btn ">Apply</button>
                                </div>
                            </form>
                        </div>
                    </AccordingToggle>
                </Popup>
                
            </>
        )
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(!prevState.fullname){
            const {accountInfo} = nextProps;
            
            return { 
                ...prevState,
                accountId: accountInfo.accountId,
                fullname: accountInfo.fullname,
                phoneNumber: accountInfo.phoneNumber,
                email: accountInfo.email,
                gender: accountInfo.gender,
                password: accountInfo.password,
                birthday:{
                    date: accountInfo.birthday.date,
                    month: accountInfo.birthday.month,
                    year: accountInfo.birthday.year
                }
            };
        }

        return null;
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onUpdateAccount: data =>{
            dispatch(actUpdateAccountApi(data))
        }, onGetCodeOnEmail: email =>{
            dispatch(actDetCodeOnEmailApi(email))
        }
    }
    
}

const mapStateToProps = state =>{
    return {
        accountInfo : state.accountInfoReducer.accountInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfomation)
