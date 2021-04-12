import React, { Component } from 'react';
import './style.scss';
import api from './../../../api';



class ConfirmInfo extends Component {
    constructor(props){
        super(props);
        this.state ={
            discount: {
                error: "",
                code: "",
                cost: 0
            },
            userInfo: {
                userCode: "",
                email: "",
                phoneNumber: "",
                fullname: "",
                address: [
                    {
                        company: "",
                        province: "",
                        district: "",
                        wards: "",
                        houseNumber: "",
                        phoneNumber:"",
                        isDefault: true
                    }
                ]
            }
        }
    }

    renderUserAddress = (listAddress) =>{
        for(let addressItem of listAddress){
            if(addressItem.isDefault){
                return addressItem;
            }
        }

        return listAddress[0];
    }

    onHandleChange = (event) =>{
        const {name, value} = event.target;
        
        if(name === "code"){
            this.setState({
                ...this.state,
                discount: {
                    ...this.state.discount,
                    code: value
                }
            })
        }

        this.props.onHandleChange(event);

    }

    render() {
        const {userInfo} = this.props;
        const {address} = userInfo;

        return (

            <div className="confirm-info">
                <h3>BilLing &amp; Shipping</h3>
                <form className="form-info-invoice">
                    <div className="row">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="input-control" 
                                placeholder="Full Name" 
                                value = {userInfo.fullname}
                                name = "fullname"
                                onChange = {this.onHandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="input-control" 
                                placeholder="PostCode / Zip" 
                                value = {userInfo.userCode}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="input-control" 
                                placeholder="Province / City" 
                                value = {address.province}
                                name = "province"
                                onChange = {this.onHandleChange}

                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="input-control" 
                                placeholder="District"
                                value = {address.district}
                                name = "district"
                                onChange = {this.onHandleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <input
                                type="text" 
                                className="input-control" 
                                placeholder="Wards" 
                                value = {address.wards}
                                name = "wards"
                                onChange = {this.onHandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="input-control" 
                                placeholder="House number and street name" 
                                value = {address.houseNumber}
                                name = "houseNumber"
                                onChange = {this.onHandleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="input-control" 
                                placeholder="Phone" 
                                value = {address.phoneNumber}
                                name = "phoneNumber"
                                onChange = {this.onHandleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="input-control" 
                                placeholder="Email" 
                                value = {userInfo.email}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ConfirmInfo
