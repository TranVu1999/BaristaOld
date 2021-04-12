import React, { Component } from 'react'

export default class InputPhoneNumberComponent extends Component {

    handleOnChange = () =>{

    }
    
    render() {
        const {value} = this.props;
        return (
            <div className="form-group">
                <div className="input-label">Số điện thoại</div>
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="pattern" 
                            defaultValue = {value ? value : ""}
                            placeholder = "Nhập số điện thoại"
                            onChange = {this.handleOnChange}
                        /> 
                </div>
            </div>
        )
    }
}
