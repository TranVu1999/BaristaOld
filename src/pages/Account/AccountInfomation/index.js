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

        // B?????c 1: Ki???m tra form update m???t kh???u c?? ??ang ???????c m??? hay kh??ng
        if(accountInfo.isUpdatePassword && accountInfo.newPassword){
            // Hi???n t???i, form update m???t kh???u ??ang ???????c m??? ??ang ???????c m???
            // B?????c 3: ki???m tra xem c??c th??ng tin c???n update c?? ??ang b??? tr???ng hay ??ang b??? l???i g?? hay kh??ng
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

            // B?????c 4: Ki???m tra n???u x???y ra l???i th?? th??ng b??o
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
                        // G???i m?? x??c nh???n v??? ??i???n tho???i
                    }
                    
                })
                
            }

            
        }else{
            // Hi???n t???i, form update m???t kh???u ???????c ???????c ????ng
            // B?????c 2: ki???m tra ng?????i d??ng c?? l??? tay ????ng form hay kh??ng th??ng qua vi???c ki???m tra oldPasswrod n???u c?? gi?? tr??? th?? x??c ?????nh l?? c??

            if(accountInfo.newPassword){
                // Tr?????ng h???p ng?????i d??ng mu???n update m???t kh???u

            }else{
                // Tr?????ng h???p ng?????i d??ng ch??? mu???n update th??ng tin
                // B?????c 3: ki???m tra xem c??c th??ng tin c???n update c?? ??ang b??? tr???ng hay kh??ng
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

                // B?????c 4: Ki???m tra n???u x???y ra l???i th?? th??ng b??o
                if(flag){
                    this.setState({
                        ...this.state,
                        error
                    })
                }else{
                    // B?????c 5: G???i API v??? server c???p nh???t th??ng tin
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
                    <span className="account__title">Th??ng tin t??i kho???n</span>
                    <div className="bg-white account__content">
                        <form 
                            className="account__info"
                            onSubmit = {this.onHandleUpdateAccountInfo}
                        >

                            <div className="form-group">
                                <div className="input-label">H??? t??n</div>
                                <InputFieldComponent 
                                    value = {accountInfo.fullname}
                                    placeholder ="Nh???p t??n"
                                    onHandleChange = {this.onHandleChange}
                                    name = 'fullname'
                                    onHandleBlur = {this.onHandleBlur}
                                    error = {accountInfo.error.fullname}
                                />
                                
                            </div>

                            <div className="form-group">
                                <div className="input-label">S??? ??i???n tho???i</div>
                                <InputFieldComponent 
                                    value = {accountInfo.phoneNumber} 
                                    placeholder ="Nh???p s??? ??i???n tho???i"
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
                                    placeholder ="Nh???p email"
                                    onHandleChange = {this.onHandleChange}
                                    name = 'email'
                                    onHandleBlur = {this.onHandleBlur}
                                    error = {accountInfo.error.email}
                                />
                            </div>

                            <div className="form-group">
                                <div className="input-label gender-label">Gi???i t??nh</div>
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
                                        label = "N???"
                                        isChecked = {accountInfo.gender === "female"}
                                        onHandleChange = {this.onHandleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group form-group--date">
                                <div className="input-label">Ng??y sinh<p>(kh??ng b???t bu???c)</p></div>
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
                                            <div className="input-label"><label>M???t kh???u c??</label> </div>
                                            <InputFieldComponent 
                                                placeholder="Nh???p m???t kh???u c??"
                                                value = {''} 
                                                onHandleChange = {this.onHandleChange}
                                                name = 'oldPassword'
                                                onHandleBlur = {this.onHandleBlur}
                                                error = {accountInfo.error.oldPassword}
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <div className="input-label"><label>M???t kh???u m???i</label></div>
                                            <InputFieldComponent 
                                                placeholder="Nh???p m???t kh???u m???i"
                                                value = {accountInfo.newPassword} 
                                                onHandleChange = {this.onHandleChange}
                                                name = 'newPassword'
                                                onHandleBlur = {this.onHandleBlur}
                                                error = {accountInfo.error.newPassword}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <div className="input-label"><label>Nh???p l???i</label></div>
                                            <InputFieldComponent 
                                                placeholder="Nh???p m???t l???i kh???u m???i"
                                                value = {accountInfo.confirmPassword} 
                                                onHandleChange = {this.onHandleChange}
                                                name = 'confirmPassword'
                                                onHandleBlur = {this.onHandleBlur}
                                                error = {accountInfo.error.confirmPassword}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <div className="input-label gender-label">Nh???n m?? x??c nh???n</div>
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
                                                    label = "S??? ??i???n tho???i"
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
                                >C???p nh???t</button>
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
