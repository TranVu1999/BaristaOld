import React, { Component } from 'react'

export default class CheckboxFieldComponent extends Component {

    onHandleChange = () =>{
        this.props.onOpenUpdatePassword();
    }

    render() {
        const {isUpdatePassword, id} = this.props;

        return (
            <div className="checkbox-group">
                <input 
                    type="checkbox" 
                    id = {id} 
                    onChange = {this.onHandleChange}
                    checked = {isUpdatePassword}
                />
                <label htmlFor =  {id}>
                    <div className="label-checkbox"></div>
                    Thay đổi mật khẩu
                </label>
            </div>
        )
    }
}
