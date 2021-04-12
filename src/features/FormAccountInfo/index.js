import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actGetInfoApi, actUpdateAccountInfo, actUpdateAccountInfoApi} from './modules/action';

import InputFieldComponent from '../../components/InputField';
import InputPhoneNumberComponent from './../../components/InputPhoneNumber';
import InputUpdatePasswordComponent from './../../components/InputUpdatePassword';
import './style.scss';
import RadioFieldComponent from '../../components/RadioField';
import CheckboxFieldComponent from '../../components/CheckboxField';
import SelectFieldComponent from '../../components/SelectField';

class FormAccountInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            isUpdatePassword: false,
        }
    }

    handleOpenUpdatePasswordForm = () =>{
        this.setState({isUpdatePassword: !this.state.isUpdatePassword});
    }
  
    renderUpdatePasswordForm = () =>{
        const {isUpdatePassword} = this.state;
        return isUpdatePassword ? (<InputUpdatePasswordComponent/>) : null;
    }

    onHandleChange = (event) =>{
        let {name, value, id} = event.target;
        let userInfo = this.props.data;
        
        if(name === 'date' || name === 'month' || name === 'year'){
            userInfo = {
                ...userInfo,
                "birthday": {
                    ...userInfo.birthday,
                    [name]: value
                }
            };
        }else{
            userInfo = {
                ...userInfo,
                [name]: value
            };
        }

        if(name === 'gender'){
            userInfo = {
                ...userInfo,
                [name]: id
            };
        }
        this.props.updateAccountInfo(userInfo);
    }

    onHandleUpdate = (event) =>{
        event.preventDefault();
        let userInfo = this.props.data;
        this.props.updateAccountInfoApi(userInfo);
    }

    render() {
        const userInfo = this.props.data;
        const {isUpdatePassword} = this.state;

        return (
            <div className="account-content--box form">
                <span className="account__title">Thông tin tài khoản</span>
                <div className="bg-white account__content">
                    <form 
                        className="account__info"
                        onSubmit = {this.onHandleUpdate}
                    >

                        <div className="form-group">
                            <div className="input-label">Họ tên</div>
                            <InputFieldComponent 
                                value = {userInfo ? userInfo.fullname : null}
                                placeholder ="Nhập tên"
                                onHandleChange = {this.onHandleChange}
                                name = 'fullname'
                            />
                        </div>

                        <InputPhoneNumberComponent 
                            value = {userInfo ? userInfo.phoneNumber : null} 
                        />

                        <div className="form-group">
                            <div className="input-label">Mã xác thực</div>
                            <InputFieldComponent placeholder = "Nhập mã xác thực"/>
                        </div>
                        
                        <div className="form-group">
                            <div className="input-label">Email </div>
                            <InputFieldComponent 
                                value = {userInfo ? userInfo.email : null} 
                                placeholder ="Nhập email"
                                onHandleChange = {this.onHandleChange}
                                name = 'email'
                            />
                        </div>

                        <div className="form-group">
                            <div className="input-label gender-label">Giới tính</div>
                            <div className="input-group">
                                <RadioFieldComponent 
                                    id = "male"
                                    name ="gender"
                                    label = "Nam"
                                    isChecked = {userInfo && userInfo.gender === "male" ? true : false}
                                    onHandleChange = {this.onHandleChange}
                                />
                                <RadioFieldComponent 
                                    id = "female"
                                    name ="gender"
                                    label = "Nữ"
                                    isChecked = {userInfo && userInfo.gender === "female" ? true : false}
                                    onHandleChange = {this.onHandleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-group--date">
                            <div className="input-label">Ngày sinh<p>(không bắt buộc)</p></div>
                            <div className="select-group">
                                <SelectFieldComponent 
                                    name = "date"
                                    year = {userInfo ? userInfo.birthday.year : 1990}
                                    month = {userInfo ? userInfo.birthday.month : 1}
                                    value = {userInfo ? userInfo.birthday.date : 1}
                                    onSelectChange={this.onHandleChange}
                                />
                                <SelectFieldComponent 
                                    name = "month"
                                    value = {userInfo ? userInfo.birthday.month : 1}
                                    onSelectChange={this.onHandleChange}
                                    
                                />
                                <SelectFieldComponent 
                                    name = "year"
                                    value = {userInfo ? userInfo.birthday.year : 1990}
                                    onSelectChange={this.onHandleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-label"></div>
                            <div className="input-group">
                                <CheckboxFieldComponent
                                    onOpenUpdatePassword = {this.handleOpenUpdatePasswordForm}
                                    value = {isUpdatePassword}
                                    id = "update-password"
                                />
                            </div>
                        </div>

                        {this.renderUpdatePasswordForm()}

                        <div className="form-group">
                            <div className="input-label" />
                            <button 
                                // disabled = {true}
                            >Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
        if(accountInfo){
            this.props.fetchData(accountInfo.accountId);
        }
        
    }
}

const mapStateToProps = state =>{
    return{
        loading: state.formAccountInfoReducer.loading,
        data: state.formAccountInfoReducer.data,
        errors: state.formAccountInfoReducer.errors,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchData: (data) =>{
            dispatch(actGetInfoApi(data));
        },
        updateAccountInfo: (data) =>{
            dispatch(actUpdateAccountInfo(data))
        },
        updateAccountInfoApi: (data) =>{
            dispatch(actUpdateAccountInfoApi(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAccountInfo)
